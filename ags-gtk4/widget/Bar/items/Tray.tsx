import { bind } from "astal";
import { Gtk } from "astal/gtk4";
import AstalTray from "gi://AstalTray?version=0.1";

export default function TrayPanelButton() {
  const tray = AstalTray.get_default();

  return (
    <box cssClasses={["tray_style"]}>
      {bind(tray, "items").as((items) =>
        items.map((item) => {
          // 创建 popover 并设置 action group
          const popover = Gtk.PopoverMenu.new_from_model(item.menuModel);

          return (
            <menubutton
              popover={popover}
              setup={(self) => {
                // 初始设置 action group
                popover.insert_action_group("dbusmenu", item.actionGroup);

                // 监听 action group 变化
                const actionGroupHandler = item.connect("notify::action-group", () => {
                  popover.insert_action_group("dbusmenu", item.actionGroup);
                });

                // 在组件销毁时清理连接
                self.connect("destroy", () => {
                  item.disconnect(actionGroupHandler);
                });
              }}
              tooltipText={bind(item, "tooltipMarkup")}
            >
              <image gicon={bind(item, "gicon")} />
            </menubutton>
          );
        }),
      )}
    </box>
  );
}
