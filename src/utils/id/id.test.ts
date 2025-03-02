import { expect, test } from "bun:test";
import { createUniqueId, isValidId } from "./index";

test("createUniqueId returns a string and a valid CUID", () => {
	const id = createUniqueId();
	expect(typeof id).toBe("string");
	expect(isValidId(id)).toBe(true);
});

test("isValidId returns false for an invalid id", () => {
	const invalidId = "not-a-valid-cuid";
	expect(isValidId(invalidId)).toBe(false);
});
