import { App, Gtk } from "astal/gtk4";
import ScreenRecord from "../../../lib/screenrecord";
import QSButton from "../QSButton";
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
    <QSButton
      //     setup={(self) => { // self 是 Gtk.MenuButton
      //     const actionGroup = new Gio.SimpleActionGroup();
      //   actions.forEach((actionInfo) => {
      //   const action = new Gio.SimpleAction({ name: actionInfo.name });
      //  action.connect("activate", actionInfo.callback);
      // actionGroup.add_action(action);
      //});
      //self.insert_action_group("ss", actionGroup);
      //}}
      label={"Screenshot"}
      // popoverToSet={Popover}
      iconName={"gnome-screenshot-symbolic"}
      onClicked={() => {
        App.toggle_window(WINDOW_NAME);
        timeout(200, () => {
          screenRecord.screenshot();
        });
      }
      }
    >
      {/* {Popover} */}
    </QSButton>
  );
}
