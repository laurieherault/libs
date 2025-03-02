import type React from "react";

interface ButtonProps {
	onClick?: () => void;
	label: string;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	label,
	disabled = false,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className="button"
			data-testid="test-button"
		>
			{label}
		</button>
	);
};
