import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useTimer } from "./index";

describe("useTimer", () => {
	test("initial state", () => {
		const { result } = renderHook(() => useTimer(5, 10));
		expect(result.current.seconds).toBe(5);
		expect(result.current.isRunning).toBe(false);
	});

	test("start and decrement", async () => {
		const { result } = renderHook(() => useTimer(3, 10));
		act(() => {
			result.current.start();
		});
		expect(result.current.isRunning).toBe(true);
		await act(async () => {
			await new Promise((r) => setTimeout(r, 35));
		});
		expect(result.current.seconds).toBe(0);
		expect(result.current.isRunning).toBe(false);
	});

	test("pause stops decrement", async () => {
		const { result } = renderHook(() => useTimer(3, 10));
		act(() => {
			result.current.start();
		});
		act(() => {
			result.current.pause();
		});
		await act(async () => {
			await new Promise((r) => setTimeout(r, 30));
		});
		expect(result.current.seconds).toBe(3);
		expect(result.current.isRunning).toBe(false);
	});

	test("reset resets state", async () => {
		const { result } = renderHook(() => useTimer(3, 10));
		act(() => {
			result.current.start();
		});
		await act(async () => {
			await new Promise((r) => setTimeout(r, 25));
		});
		act(() => {
			result.current.reset();
		});
		expect(result.current.seconds).toBe(3);
		expect(result.current.isRunning).toBe(false);
	});

	test("calls onComplete when timer finishes", async () => {
		const { result } = renderHook(() => useTimer(2, 10));
		let called = false;
		act(() => {
			result.current.onComplete(() => {
				called = true;
			});
			result.current.start();
		});
		await act(async () => {
			await new Promise((r) => setTimeout(r, 30));
		});
		expect(called).toBe(true);
	});
});
