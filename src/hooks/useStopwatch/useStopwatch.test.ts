import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useStopwatch } from "./index";

describe("useStopwatch", () => {
	test("initial state", () => {
		const { result } = renderHook(() => useStopwatch(10));
		expect(result.current.seconds).toBe(0);
		expect(result.current.isRunning).toBe(false);
	});

	test("start and increment", async () => {
		const { result } = renderHook(() => useStopwatch(10));
		act(() => {
			result.current.start();
		});
		expect(result.current.isRunning).toBe(true);
		await act(async () => {
			await new Promise((r) => setTimeout(r, 35));
		});
		expect(result.current.seconds).toBeGreaterThanOrEqual(3);
	});

	test("pause stops increment", async () => {
		const { result } = renderHook(() => useStopwatch(10));
		act(() => {
			result.current.start();
		});
		await act(async () => {
			await new Promise((r) => setTimeout(r, 25));
		});
		act(() => {
			result.current.pause();
		});
		const paused = result.current.seconds;
		await act(async () => {
			await new Promise((r) => setTimeout(r, 30));
		});
		expect(result.current.seconds).toBe(paused);
		expect(result.current.isRunning).toBe(false);
	});

	test("reset resets state", async () => {
		const { result } = renderHook(() => useStopwatch(10));
		act(() => {
			result.current.start();
		});
		await act(async () => {
			await new Promise((r) => setTimeout(r, 25));
		});
		act(() => {
			result.current.reset();
		});
		expect(result.current.seconds).toBe(0);
		expect(result.current.isRunning).toBe(false);
	});
});
