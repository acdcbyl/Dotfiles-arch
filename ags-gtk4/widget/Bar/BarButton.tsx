import { App, Gtk, Gdk } from "astal/gtk4";
import { ButtonProps } from "astal/gtk4/widget";

export enum BarButtonStyle {
  transparent = "transparent",
  primary = "primary",
  primaryContainer = "primary_container",
}

type Props = ButtonProps & {
  buttonStyle?: BarButtonStyle;
  child?: JSX.Element; // when only one child is passed
};

export default ({
  child,
  buttonStyle,
  cssName,
  onClicked,
  ...props
}: Props) => {
  return (
    <button
      cssClasses={[
        'bar__item',
        'bar__button',
        buttonStyle || '',
        cssName || ''
      ].filter(Boolean)}
      onClicked={onClicked}
      valign={Gtk.Align.CENTER}
      {...props}
    >
      {child}
    </button>
  );
};
