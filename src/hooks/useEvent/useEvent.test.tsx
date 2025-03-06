import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "bun:test";
import { useState } from "react";
import { useEvent } from ".";

function TestComponent() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEvent("mousemove", (event: MouseEvent) => {
		setPosition({ x: event.clientX, y: event.clientY });
	});

	return <div data-testid="position">{`${position.x}, ${position.y}`}</div>;
}

describe("useEvent hook", () => {
	test("should update mouse position on mousemove event", () => {
		const { getByTestId } = render(<TestComponent />);
		const positionDiv = getByTestId("position");

		// Vérifie l'état initial
		expect(positionDiv.textContent).toBe("0, 0");

		// Simule un événement mousemove sur window
		fireEvent.mouseMove(window, { clientX: 100, clientY: 150 });

		// Vérifie que l'état a bien été mis à jour
		expect(positionDiv.textContent).toBe("100, 150");
	});
});
