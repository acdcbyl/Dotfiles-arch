import { App } from "astal/gtk4";
import type { WindowProps } from "astal/gtk4/widget";
import Astal from "gi://Astal";
import Gdk from "gi://Gdk";

type Props = WindowProps & {
  child?: JSX.Element; // when only one child is passed
  children?: Array<JSX.Element>; // when multiple children are passed
  name?: string;
};

export default function PopupWindow({
  children,
  visible = false,
  keymode = Astal.Keymode.EXCLUSIVE,
  name,
  ...props
}: Props) {
  return (
    <window
      application={App}
      visible={visible}
      keymode={keymode}
      name={name}
      namespace={name}
      layer={Astal.Layer.OVERLAY}
      margin={10}
      onKeyPressed={(_, keyval) => {
        if (keyval === Gdk.KEY_Escape) {
          name && App.toggle_window(name);
        }
      }}
      //     cssClasses={["bg-transparent"]}
      {...props}
    >
      {children}
    </window>
  );
}
