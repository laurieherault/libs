import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, mock } from "bun:test";
import { useDisclosure } from "./index";

describe("useDisclosure", () => {
	it("initialises with the given state", () => {
		const { result } = renderHook(() => useDisclosure(true));
		expect(result.current[0]).toBe(true);

		const { result: result2 } = renderHook(() => useDisclosure(false));
		expect(result2.current[0]).toBe(false);
	});

	it("initialises with false when no initial state is provided", () => {
		const { result } = renderHook(() => useDisclosure());
		expect(result.current[0]).toBe(false);
	});

	it("provides open handler that sets state to true", () => {
		const { result } = renderHook(() => useDisclosure(false));
		act(() => {
			result.current[1].open();
		});
		expect(result.current[0]).toBe(true);
	});

	it("provides close handler that sets state to false", () => {
		const { result } = renderHook(() => useDisclosure(true));
		act(() => {
			result.current[1].close();
		});
		expect(result.current[0]).toBe(false);
	});

	it("provides toggle handler that toggles the state", () => {
		const { result } = renderHook(() => useDisclosure(false));

		// Toggle to true
		act(() => {
			result.current[1].toggle();
		});
		expect(result.current[0]).toBe(true);

		// Toggle back to false
		act(() => {
			result.current[1].toggle();
		});
		expect(result.current[0]).toBe(false);
	});

	it("calls onOpen callback when state changes to true", () => {
		const onOpen = mock();
		const { result } = renderHook(() => useDisclosure(false, { onOpen }));

		act(() => {
			result.current[1].open();
		});

		expect(onOpen).toHaveBeenCalledTimes(1);
	});

	it("calls onClose callback when state changes to false", () => {
		const onClose = mock();
		const { result } = renderHook(() => useDisclosure(true, { onClose }));

		act(() => {
			result.current[1].close();
		});

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it("does not call onOpen if already opened", () => {
		const onOpen = mock();
		const { result } = renderHook(() => useDisclosure(true, { onOpen }));

		act(() => {
			result.current[1].open();
		});

		expect(onOpen).not.toHaveBeenCalled();
	});

	it("does not call onClose if already closed", () => {
		const onClose = mock();
		const { result } = renderHook(() => useDisclosure(false, { onClose }));

		act(() => {
			result.current[1].close();
		});

		expect(onClose).not.toHaveBeenCalled();
	});

	it("calls onOpen or onClose when toggling depending on state", () => {
		const onOpen = mock();
		const onClose = mock();
		const { result } = renderHook(() =>
			useDisclosure(false, { onOpen, onClose }),
		);

		// Toggle to open should call onOpen
		act(() => {
			result.current[1].toggle();
		});
		expect(onOpen).toHaveBeenCalledTimes(1);
		expect(onClose).not.toHaveBeenCalled();

		// Reset mocks
		onOpen.mockReset();
		onClose.mockReset();

		// Toggle to close should call onClose
		act(() => {
			result.current[1].toggle();
		});
		expect(onClose).toHaveBeenCalledTimes(1);
		expect(onOpen).not.toHaveBeenCalled();
	});
});
