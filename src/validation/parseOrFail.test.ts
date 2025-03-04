import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { describe, expect, test } from "bun:test";
import { iniValidationsAdvanced, parseOrFail } from ".";

describe("parseOrFail", () => {
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

		const [error, result] = parseOrFail(validator, validData);

		expect(error).toBeNil();
		expect(result).toEqual(validData);
	});

	test("devrait retourner une erreur pour un email invalide", () => {
		const invalidData = {
			name: "Jean Dupont",
			age: 30,
			email: "not-an-email",
		};

		const [error, result] = parseOrFail(validator, invalidData);

		expect(result).toBeUndefined();
		expect(error).toBeInstanceOf(Error);
		expect(error?.message).toContain("Validation failed");
	});

	test("devrait retourner une erreur pour un type incorrect", () => {
		const invalidData = {
			name: "Jean Dupont",
			age: "30", // devrait être un nombre
			email: "jean@example.com",
		};

		const [error, result] = parseOrFail(validator, invalidData);

		expect(result).toBeUndefined();
		expect(error).toBeInstanceOf(Error);
		expect(error?.message).toContain("Validation failed");
	});

	test("devrait retourner une erreur pour des données manquantes", () => {
		const incompleteData = {
			name: "Jean Dupont",
			// age manquant
			email: "jean@example.com",
		};

		const [error, result] = parseOrFail(validator, incompleteData);

		expect(result).toBeUndefined();
		expect(error).toBeInstanceOf(Error);
		expect(error?.message).toContain("Validation failed");
	});
});
