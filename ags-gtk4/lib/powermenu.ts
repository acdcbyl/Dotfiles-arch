import GObject, { property, register } from "astal/gobject";
import { App } from "astal/gtk4";

const options = {
  sleep: "systemctl suspend",
  reboot: "systemctl reboot",
  logout: "pkill Hyprland",
  shutdown: "shutdown now",
};

@register({ GTypeName: "Powermenu" })
export default class Powermenu extends GObject.Object {
  static instance: Powermenu;

  static get_default() {
    if (!this.instance) this.instance = new Powermenu();
    return this.instance;
  }

  #title = "";
  #cmd = "";

  @property(String)
  get title() {
    return this.#title;
  }

  @property(String)
  get cmd() {
    return this.#cmd;
  }

  action(action: string) {
    [this.#cmd, this.#title] = {
      sleep: [options.sleep, "Sleep"],
      reboot: [options.reboot, "Reboot"],
      logout: [options.logout, "Log Out"],
      shutdown: [options.shutdown, "Shutdown"],
    }[action]!;

    this.notify("cmd");
    this.notify("title");
    App.get_window("powermenu")?.hide();
    App.get_window("verification")?.show();
  }
}
