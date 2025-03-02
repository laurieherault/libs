// tryOrFail.test.ts
import { expect, test } from "bun:test";
import {
	type Either,
	tryOrFail,
	tryOrFailSync,
} from "../../src/utils/tryOrFail";

test("tryOrFailSync returns success tuple when function does not throw", () => {
	const [error, result] = tryOrFailSync(() => 42);
	expect(error).toBeUndefined();
	expect(result).toBe(42);
});

test("tryOrFailSync returns failure tuple when function throws", () => {
	const errorMessage = "Test error";
	const [error, result] = tryOrFailSync(() => {
		throw errorMessage;
	});
	expect(error).toBe(errorMessage);
	expect(result).toBeUndefined();
});

test("tryOrFail returns success tuple when async function resolves", async () => {
	const asyncFunc = async () => "async success";
	const [error, result] = await tryOrFail(asyncFunc);
	expect(error).toBeUndefined();
	expect(result).toBe("async success");
});

test("tryOrFail returns failure tuple when async function rejects", async () => {
	const errorMessage = "Async error";
	const asyncFunc = async () => {
		throw errorMessage;
	};
	const [error, result] = await tryOrFail(asyncFunc);
	expect(error).toBe(errorMessage);
	expect(result).toBeUndefined();
});
