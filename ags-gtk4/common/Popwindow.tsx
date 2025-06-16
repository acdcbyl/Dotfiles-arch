import { App } from "astal/gtk4";
import type { WindowProps } from "astal/gtk4/widget";
import { Gtk } from "astal/gtk4";
import Astal from "gi://Astal";
import Graphene from "gi://Graphene";
import Gdk from "gi://Gdk";

type Props = WindowProps & {
  child?: JSX.Element; // when only one child is passed
  children?: Array<JSX.Element>; // when multiple children are passed
  name?: string;
  enableClickAway?: boolean; // 可选的开关，默认启用
};

export default function PopupWindow({
  children,
  visible = false,
  keymode = Astal.Keymode.EXCLUSIVE,
  name,
  enableClickAway = true,
  ...props
}: Props) {
  let win: Astal.Window;
  let contentBox: Gtk.Box;

  // 点击外部关闭窗口
  function onClick(_e: Gtk.GestureClick, _: number, x: number, y: number) {
    if (!enableClickAway) return;

    // 直接关闭窗口（因为内容区域会阻止事件冒泡）
    if (name) {
      App.toggle_window(name);
    } else if (win) {
      win.visible = false;
    }
    return true;
  }

  // 阻止内容区域的点击事件冒泡
  function onContentClick(_e: Gtk.GestureClick, _: number, x: number, y: number) {
    // 阻止事件冒泡到窗口
    return true;
  }

  return (
    <window
      $={(ref) => (win = ref)}
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
      {...props}
    >
      {/* 添加点击事件处理器 */}
      <Gtk.GestureClick $pressed={onClick} />

      {/* 包装内容在一个 box 中以便进行边界检测 */}
      <box $={(ref) => (contentBox = ref)}>
        {/* 阻止内容区域的点击事件冒泡 */}
        <Gtk.GestureClick $pressed={onContentClick} />
        {children}
      </box>
    </window>
  );
}
