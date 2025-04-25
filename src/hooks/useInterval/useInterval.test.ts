import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useInterval } from "./index";

describe("useInterval", () => {
	test("calls callback at specified interval", async () => {
		let count = 0;
		renderHook(() =>
			useInterval(() => {
				count++;
			}, 10),
		);
		await new Promise((r) => setTimeout(r, 35));
		expect(count).toBeGreaterThanOrEqual(3);
	});

	test("does not call callback when delay is null", async () => {
		let count = 0;
		renderHook(() =>
			useInterval(() => {
				count++;
			}, null),
		);
		await new Promise((r) => setTimeout(r, 30));
		expect(count).toBe(0);
	});
});
