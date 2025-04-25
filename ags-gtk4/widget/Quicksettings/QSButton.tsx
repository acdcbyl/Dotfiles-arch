import { bind, Binding, Variable } from "astal";
import { Gtk } from "astal/gtk4";
import { ButtonProps, MenuButtonProps } from "astal/gtk4/widget";
import GObject from "gi://GObject?version=2.0";
import { Opt } from "../../lib/option";

type QSMenuButtonProps = MenuButtonProps & {
  child?: unknown;
  iconName: string;
  label: string;
};

export function QSMenuButton({
  child,
  iconName,
  label,
  setup,
}: QSMenuButtonProps) {
  return (
    <menubutton setup={setup} cssClasses={["qs-button"]}>
      <image halign={Gtk.Align.CENTER} iconSize={Gtk.IconSize.NORMAL} iconName={iconName} />
      {child}
    </menubutton>
  );
}

type QSButtonProps<T extends GObject.Object> = ButtonProps & {
  iconName: string | Binding<string>;
  label: string | Binding<string>;
  connection?: [
    T | Variable<any> | Opt<any>,
    keyof T | null,
    ((arg0: any) => boolean)?,
  ];
};

export default function QSButton<T extends GObject.Object>({
  iconName,
  label,
  setup,
  onClicked,
  connection,
}: QSButtonProps<T>) {
  function getCssClasses(): string[] | Binding<string[]> {
    if (!connection) return ["qs-button"];

    const [object, property, cond] = connection;
    const computeClasses = (v: any) => {
      const classes = ["qs-button"];
      if (cond ? cond(v) : v) classes.push("active");
      return classes;
    };

    return object instanceof Variable
      ? bind(object).as(computeClasses)
      : property != null
        ? bind(object, property).as(computeClasses)
        : ["qs-button"];
  }

  return (
    <button
      setup={setup}
      cssClasses={getCssClasses()}
      onClicked={onClicked}
    >
      <image iconName={iconName} iconSize={Gtk.IconSize.NORMAL} halign={Gtk.Align.CENTER} />
    </button>
  );
}
