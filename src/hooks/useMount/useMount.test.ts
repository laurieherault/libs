import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useMount } from "./index";

describe("useMount", () => {
	test("useMount should call the callback on mount", () => {
		// Arrange
		let callCount = 0;

		// Act - Initial render
		const hook = renderHook(() =>
			useMount(() => {
				callCount++;
			}),
		);

		// Act - Rerender
		hook.rerender();

		// Act - Unmount
		hook.unmount();

		// Assert
		expect(callCount).toBe(1);
	});
});
