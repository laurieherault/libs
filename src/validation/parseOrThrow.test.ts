import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { describe, expect, test } from "bun:test";
import { iniValidationsAdvanced, parseOrThrow } from ".";

describe("parseOrThrow", () => {
	iniValidationsAdvanced();

	const UserSchema = Type.Object({
		name: Type.String(),
		age: Type.Number(),
		email: Type.String({ format: "email" }),
	});

	const validator = TypeCompiler.Compile(UserSchema);

	test("devrait valider des données correctes", () => {
		const validData = {
			name: "Jean Dupont",
			age: 30,
			email: "jean@example.com",
		};

		const result = parseOrThrow(validator, validData);
		expect(result).toEqual(validData);
	});

	test("devrait lancer une erreur pour un email invalide", () => {
		const invalidData = {
			name: "Jean Dupont",
			age: 30,
			email: "not-an-email",
		};

		expect(() => parseOrThrow(validator, invalidData)).toThrow(
			"Validation failed",
		);
	});

	test("devrait lancer une erreur pour un type incorrect", () => {
		const invalidData = {
			name: "Jean Dupont",
			age: "30", // devrait être un nombre
			email: "jean@example.com",
		};

		expect(() => parseOrThrow(validator, invalidData)).toThrow(
			"Validation failed",
		);
	});

	test("devrait lancer une erreur pour des données manquantes", () => {
		const incompleteData = {
			name: "Jean Dupont",
			// age manquant
			email: "jean@example.com",
		};

		expect(() => parseOrThrow(validator, incompleteData)).toThrow(
			"Validation failed",
		);
	});
});
