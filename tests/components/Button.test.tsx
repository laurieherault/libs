import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, mock, test } from "bun:test";
import React from "react";
import { Button } from "../../src/components/Button";

describe("Button", () => {
	test("renders button with label", () => {
		render(<Button label="Click me" />);

		const buttonElement = screen.getByTestId("test-button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent("Click me");
	});

	test("executes onClick when clicked", () => {
		const handleClick = mock(() => {});

		render(<Button label="Click me" onClick={handleClick} />);

		const buttonElement = screen.getByTestId("test-button");
		fireEvent.click(buttonElement);

		expect(handleClick).toHaveBeenCalled();
	});

	test("disables button when disabled prop is true", () => {
		render(<Button label="Disabled Button" disabled={true} />);

		const buttonElement = screen.getByTestId("test-button");
		expect(buttonElement).toBeDisabled();
	});
});
