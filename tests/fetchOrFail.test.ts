import type { Server } from "bun";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { fetchOrFail } from "../src/fetchOrFail";

describe("fetchOrFail", () => {
	let server: Server;
	const port = 3456;
	const baseUrl = `http://localhost:${port}`;

	// Démarrage du serveur avant les tests
	beforeAll(() => {
		server = Bun.serve({
			port,
			async fetch(req) {
				const url = new URL(req.url);

				// Route GET avec query params
				if (req.method === "GET" && url.pathname === "/query-test") {
					return Response.json({
						query: Object.fromEntries(url.searchParams.entries()),
					});
				}

				// Route POST avec body
				if (req.method === "POST" && url.pathname === "/post-test") {
					const body = await req.json();
					return Response.json({ received: body });
				}

				// Route pour tester les headers
				if (url.pathname === "/headers-test") {
					return Response.json({
						authorization: req.headers.get("Authorization"),
					});
				}

				// Route pour tester le retry (429)
				if (url.pathname === "/retry-test") {
					const retryCount = Number(req.headers.get("x-retry-count") || "0");
					if (retryCount < 1) {
						return new Response(null, { status: 429 });
					}
					return Response.json({ success: true });
				}

				// Route pour tester une erreur 404
				if (url.pathname === "/not-found") {
					return new Response(null, { status: 404 });
				}

				return new Response("Not Found", { status: 404 });
			},
		});
	});

	// Arrêt du serveur après les tests
	afterAll(() => {
		server.stop();
	});

	test("devrait gérer une requête GET avec query params", async () => {
		const [error, response] = await fetchOrFail<{
			query: Record<string, string>;
		}>()
			.url(`${baseUrl}/query-test`)
			.query("page", "1")
			.query("limit", "10")
			.run();

		expect(error).toBeUndefined();
		expect(response?.query).toEqual({
			page: "1",
			limit: "10",
		});
	});

	test("devrait gérer une requête POST avec body", async () => {
		const postData = { test: "data" };
		const [error, response] = await fetchOrFail<{ received: typeof postData }>()
			.url(`${baseUrl}/post-test`)
			.method("POST")
			.body(postData)
			.run();

		expect(error).toBeUndefined();
		expect(response?.received).toEqual(postData);
	});

	test("devrait gérer les en-têtes personnalisés", async () => {
		const [error, response] = await fetchOrFail<{ authorization: string }>()
			.url(`${baseUrl}/headers-test`)
			.header("Authorization", "Bearer test-token")
			.run();

		expect(error).toBeUndefined();
		expect(response?.authorization).toBe("Bearer test-token");
	});

	test("devrait réessayer sur une erreur 429", async () => {
		const [error, response] = await fetchOrFail<{ success: boolean }>()
			.url(`${baseUrl}/retry-test`)
			.run();

		expect(error).toBeUndefined();
		expect(response?.success).toBe(true);
	});

	test("devrait propager les erreurs non-429", async () => {
		const [error] = await fetchOrFail().url(`${baseUrl}/not-found`).run();

		expect(error).toBeDefined();
	});

	test("devrait lever une erreur si l'URL n'est pas définie", async () => {
		const [error] = await fetchOrFail().run();

		expect(error).toBeDefined();
		expect(error?.message).toBe("URL is not set");
	});
});
