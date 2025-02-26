import ky, { type Options } from "ky";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

// Constantes de configuration
const DEFAULT_TIMEOUT = 5000; // 5 secondes
const DEFAULT_RETRIES = 3;

const TooManyRequestsOrErrorMiddleware = async ({
	error,
}: { error: Error }) => {
	const status =
		error instanceof Error && "response" in error
			? (error.response as Response)?.status
			: null;

	if (status !== 429 && (status === null || status < 500)) {
		throw error;
	}
};

class KyBuilder<T> {
	private urlValue = "";
	private methodValue: HttpMethod = "GET";
	private queryParams: Record<string, string> = {};
	private headers: Record<string, string> = {};
	private bodyValue?: unknown;
	private timeoutValue = DEFAULT_TIMEOUT;
	private retryValue = DEFAULT_RETRIES;

	public url(url: string): this {
		this.urlValue = url;
		return this;
	}

	public method(method: HttpMethod): this {
		this.methodValue = method;
		return this;
	}

	public query(key: string, value: string): this {
		this.queryParams[key] = value;
		return this;
	}

	public header(key: string, value: string): this {
		this.headers[key] = value;
		return this;
	}

	public body(body: unknown): this {
		this.bodyValue = body;
		return this;
	}

	public async run(): Promise<T> {
		if (!this.urlValue) {
			throw new Error("URL is not set");
		}
		// Construction de l'URL avec query params
		const queryString = new URLSearchParams(this.queryParams).toString();
		const finalUrl = queryString
			? `${this.urlValue}?${queryString}`
			: this.urlValue;

		// Options de ky : on envoie du JSON et on reçoit du JSON
		const options: Options = {
			method: this.methodValue,
			headers: {
				"Content-Type": "application/json",
				...this.headers,
			},
			timeout: this.timeoutValue,
			hooks: {
				beforeRetry: [TooManyRequestsOrErrorMiddleware],
			},
			retry: {
				limit: this.retryValue,
				afterStatusCodes: [429],
			},
		};

		// Si un body est défini, on utilise l'option "json" de ky (cela serialise automatiquement)
		if (this.bodyValue !== undefined) {
			Object.assign(options, { json: this.bodyValue });
		}

		return await ky(finalUrl, options).json<T>();
	}
}

/**
 * Fonction d'initialisation du builder.
 * Utilisation :
 *
 *   fetchOrFail<MyResponse>()
 *     .url('https://api.example.com/data')
 *     .method('GET')
 *     .query('limit', '10')
 *     .run();
 */
export function fetchOrFail<T>(): KyBuilder<T> {
	return new KyBuilder<T>();
}
