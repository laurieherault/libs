import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useDidUpdateEffect } from "../../src/hooks";

describe("useDidUpdateEffect", () => {
	test("useDidUpdateEffect should not call the callback on mount, but on dependency changes", () => {
		// Arrange
		let callCount = 0;

		// Act - Initial render
		const { rerender } = renderHook(
			({ dependency }) =>
				useDidUpdateEffect(() => {
					callCount++;
				}, [dependency]),
			{ initialProps: { dependency: 0 } },
		);

		// Assert - Should not be called on mount
		expect(callCount).toBe(0);

		// Act - Rerender with same dependency
		rerender({ dependency: 0 });

		// Assert - Should not be called when dependency hasn't changed
		expect(callCount).toBe(0);

		// Act - Rerender with different dependency
		rerender({ dependency: 1 });

		// Assert - Should be called after dependency change
		expect(callCount).toBe(1);

		// Act - Another rerender with different dependency
		rerender({ dependency: 2 });

		// Assert - Should be called again
		expect(callCount).toBe(2);
	});
});
