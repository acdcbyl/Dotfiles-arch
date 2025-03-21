import { App, Gtk, Gdk, Widget } from "astal/gtk3";
import { bind, execAsync, timeout, Variable, GLib } from "astal";
import { range } from "../../lib/utils";

type ProgressProps = {
	height?: number;
	width?: number;
	vertical?: boolean;
	child: Gtk.Widget;
};

export default ({
	height = 18,
	width = 180,
	vertical = false,
	child,
}: ProgressProps) => {
	const fill = new Widget.Box({
		className: "fill",
		hexpand: vertical,
		vexpand: !vertical,
		halign: vertical ? Gtk.Align.FILL : Gtk.Align.START,
		valign: vertical ? Gtk.Align.END : Gtk.Align.FILL,
		child,
	});

	const container = new Widget.Box({
		className: "progress",
		child: fill,
		css: `
            min-width: ${width}px;
            min-height: ${height}px;
        `,
	});

	return Object.assign(container, {
		setMute(muted: boolean) {
			fill.toggleClassName("muted", muted);
		},

		setValue(value: number, muted: boolean) {
			if (value < 0) return;
			fill.toggleClassName("muted", muted);

			const axis = vertical ? "height" : "width";
			const axisv = vertical ? height : width;
			const min = vertical ? width : height;
			const preferred = (axisv - min) * value + min;

			fill.css = `min-${axis}: ${preferred}px;`;
		},
	});
};
