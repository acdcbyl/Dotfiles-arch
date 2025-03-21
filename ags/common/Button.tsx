import { ButtonProps as AstalButtonProps } from "astal/widgets";

type ButtonProps = AstalButtonProps & {
	buttonType?: "filled" | "tonal" | "outlined" | "text";
	child?: JSX.Element; // when only one child is passed
};

export default ({
	className,
	buttonType = "filled",
	child,
	focusOnClick,
	...props
}: ButtonProps) => (
	<button
		className={`material-button ${buttonType} ${className}`}
		focusOnClick={false}
		{...props}
	>
		{child}
	</button>
);
