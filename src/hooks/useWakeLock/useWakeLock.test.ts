import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { useWakeLock } from "./index";

describe("useWakeLock", () => {
	let originalDescriptor: PropertyDescriptor | undefined;

	beforeEach(() => {
		originalDescriptor = Object.getOwnPropertyDescriptor(navigator, "wakeLock");
	});

	afterEach(() => {
		if (originalDescriptor) {
			Object.defineProperty(navigator, "wakeLock", originalDescriptor);
		} else {
			Object.defineProperty(navigator, "wakeLock", {
				value: undefined,
				configurable: true,
			});
		}
	});

	test("isSupported is false when API not available", () => {
		Object.defineProperty(navigator, "wakeLock", {
			configurable: true,
			get: () => undefined,
		});
		const { result } = renderHook(() => useWakeLock());
		expect(result.current.isSupported).toBe(false);
		expect(result.current.isActive).toBe(false);
	});

	test("request activates wake lock and sets isActive", async () => {
		// Mock wakeLock.request
		let releaseHandler: () => void;
		const fakeSentinel = {
			addEventListener: (_: string, listener: () => void) => {
				releaseHandler = listener;
			},
			release: async () => {
				releaseHandler?.();
			},
		};
		Object.defineProperty(navigator, "wakeLock", {
			configurable: true,
			value: { request: async (_: "screen") => fakeSentinel },
		});

		const { result } = renderHook(() => useWakeLock());
		expect(result.current.isSupported).toBe(true);
		expect(result.current.isActive).toBe(false);

		await act(async () => {
			await result.current.request();
		});
		expect(result.current.isActive).toBe(true);

		await act(async () => {
			await result.current.release();
		});
		expect(result.current.isActive).toBe(false);
	});
});
