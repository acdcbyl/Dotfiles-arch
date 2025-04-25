import { App, Gtk } from "astal/gtk4";
import ScreenRecord from "../../../lib/screenrecord";
import { QSMenuButton } from "../QSButton";
import { WINDOW_NAME } from "../QSWindow";
import { Gio, timeout } from "astal";

export default function ScreenshotQS() {
  const screenRecord = ScreenRecord.get_default();
  const actions = [
    {
      name: "Full",
      callback: () => {
        App.toggle_window(WINDOW_NAME);
        timeout(200, () => {
          screenRecord.screenshot(true);
        });
      },
    },
    {
      name: "Partial",
      callback: () => {
        App.toggle_window(WINDOW_NAME);
        timeout(200, () => {
          screenRecord.screenshot();
        });
      },
    },
  ];

  const menu = new Gio.Menu();
  actions.forEach(({ name }) => {
    menu.append(name, `ss.${name}`);
  });

  const Popover = Gtk.PopoverMenu.new_from_model(menu);


  return (
    <QSMenuButton
      setup={(self) => {
        const actionGroup = new Gio.SimpleActionGroup();

        actions.forEach((actionInfo) => {
          const action = new Gio.SimpleAction({ name: actionInfo.name });
          action.connect("activate", actionInfo.callback);
          actionGroup.add_action(action);
        });

        self.insert_action_group("ss", actionGroup);
      }}
      label={"Screenshot"}
      iconName={"gnome-screenshot-symbolic"}
    >
      {Popover}
    </QSMenuButton>
  );
}
