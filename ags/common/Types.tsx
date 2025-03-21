import { GObject } from "astal";
import { astalify, ConstructProps, Gtk } from "astal/gtk3";

export type Ref<T> = { ref?: T }

export class ComboBox extends astalify(Gtk.ComboBox) {
	static {
		GObject.registerClass(this);
	}

	constructor(
		props: ConstructProps<Gtk.ComboBox, Gtk.ComboBox.ConstructorProps>,
	) {
		super(props as any);
	}
}

export class Spinner extends astalify(Gtk.Spinner) {
	static {
		GObject.registerClass(this);
	}

	constructor(
		props: ConstructProps<Gtk.Spinner, Gtk.Spinner.ConstructorProps>,
	) {
		super(props as any);
	}
}
