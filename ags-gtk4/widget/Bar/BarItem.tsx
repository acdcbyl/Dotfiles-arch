import { App, Gtk, Gdk } from "astal/gtk4";
import { BoxProps } from "astal/gtk4/widget";

export enum BarItemStyle {
	transparent = "transparent",
	primary = "primary",
	primaryContainer = "primary_container",
}

type Props = BoxProps & {
	itemStyle?: BarItemStyle;
	child?: JSX.Element; // when only one child is passed
};

export default ({ child, itemStyle, cssName, ...props }: Props) => {
	return (
		<box
			cssClasses={["baritem"]}
			// cssName={`bar__item ${itemStyle || ""} ${cssName}`}
			valign={Gtk.Align.CENTER}
			{...props}
		>
			{child}
		</box>
	);
};
