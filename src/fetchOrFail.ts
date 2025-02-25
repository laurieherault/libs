import ky, { type Options } from "ky";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

class KyBuilder<T> {
	private urlValue = "";
	private methodValue: HttpMethod = "GET";
	private queryParams: Record<string, string> = {};
	private headers: Record<string, string> = {};
	private bodyValue?: unknown;
	private timeoutValue = 5000; // 5 secondes
	private retryValue = 3; // 3 retries avec backoff automatique

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

	public timeout(ms: number): this {
		this.timeoutValue = ms;
		return this;
	}

	public retry(retries: number): this {
		this.retryValue = retries;
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
			retry: {
				limit: this.retryValue,
				statusCodes: [429], // Vous pouvez préciser quels statuts doivent déclencher un retry (ici 429)
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
 *     .timeout(5000)   // optionnel, valeur par défaut : 5000ms
 *     .retry(3)        // optionnel, valeur par défaut : 3 retries
 *     .run();
 */
export function fetchOrFail<T>(): KyBuilder<T> {
	return new KyBuilder<T>();
}
