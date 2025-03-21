import { App, Gtk, Gdk } from "astal/gtk3";
import { BoxProps } from "astal/gtk3/widget";

export enum BarItemStyle {
	transparent = "transparent",
	primary = "primary",
	primaryContainer = "primary_container",
}

type Props = BoxProps & {
	itemStyle?: BarItemStyle;
	child?: JSX.Element; // when only one child is passed
};

export default ({ child, itemStyle, className, ...props }: Props) => {
	return (
		<box
			className={`bar__item ${itemStyle || ""} ${className}`}
			valign={Gtk.Align.CENTER}
			{...props}
		>
			{child}
		</box>
	);
};
