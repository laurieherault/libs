import type { TypeCheck } from "@sinclair/typebox/compiler";
import { describe, expect, test } from "bun:test";
import { parseOrFail, type TSchema } from "../../validation/parseOrFail";
// Interface pour typer fortement chaque cas de test
export interface ModelTestCase {
	testName: string;
	goodValues: unknown[];
	badValues: unknown[];
	check: TypeCheck<TSchema>;
}

export const testModel = (tests: ModelTestCase[]) => {
	for (const { testName, goodValues, badValues, check } of tests) {
		// Pour chaque bonne valeur, on vérifie que :
		// 1. La méthode Check retourne true.
		// 2. La fonction validateOrThrow ne lance pas d'erreur.
		for (const goodValue of goodValues) {
			test(`${testName} - Check returns true for good value: ${JSON.stringify(
				goodValue,
			)}`, () => {
				expect(check.Check(goodValue)).toBe(true);
			});

			test(`${testName} - validateOrThrow does not throw for good value: ${JSON.stringify(
				goodValue,
			)}`, () => {
				const [error, value] = parseOrFail(check, goodValue);
				expect(error).toBeUndefined();
				expect(value).toEqual(goodValue);
			});
		}

		// Pour chaque mauvaise valeur, on vérifie que :
		// 1. La méthode Check retourne false.
		// 2. La fonction validateOrThrow lance une erreur.
		for (const badValue of badValues) {
			test(`${testName} - Check returns false for bad value: ${JSON.stringify(
				badValue,
			)}`, () => {
				expect(check.Check(badValue)).toBe(false);
			});

			test(`${testName} - validateOrThrow throws for bad value: ${JSON.stringify(
				badValue,
			)}`, () => {
				const [error, value] = parseOrFail(check, badValue);
				expect(value).toBeUndefined();
				expect(error).toBeInstanceOf(Error);
			});
		}
	}
};
