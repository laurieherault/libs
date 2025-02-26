import { ConsolaTransport } from "@loglayer/transport-consola";
import { createConsola } from "consola";
import { LogLayer, MockLogLayer, type ILogLayer } from "loglayer";

export interface LogOptions {
	prefix?: string;
	level?: number;
	mock?: boolean;
}

//TODO: https://loglayer.dev/plugins/redaction.html
// Filter prefix ? Non car on créé plusieurs logers:
// Un log "Setup", un log par Requete, avec chacun sont loglevel par .env

// Bonnes pratique de log:
// - Créer un log par contexte(prefix), par exemple un log par requête http

// https://loglayer.dev/logging-api/unit-testing.html
export function createLogger(options: LogOptions = {}): ILogLayer {
	if (options.mock) {
		return new MockLogLayer();
	}
	const level = options.level ?? 5;

	return new LogLayer({
		prefix: options.prefix,
		transport: new ConsolaTransport({
			logger: createConsola({
				level,
			}),
		}),
	});
}
