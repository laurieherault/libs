import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useUnmount } from "../../src/hooks";

describe("useUnmount", () => {
	test("useUnmount should call the callback only on unmount", () => {
		// Arrange
		let callCount = 0;

		// Act - Initial render
		const hook = renderHook(() =>
			useUnmount(() => {
				callCount++;
			}),
		);

		// Act - Rerender
		hook.rerender();

		// Assert - Should not be called yet
		expect(callCount).toBe(0);

		// Act - Unmount
		hook.unmount();

		// Assert - Should be called once after unmount
		expect(callCount).toBe(1);
	});
});
