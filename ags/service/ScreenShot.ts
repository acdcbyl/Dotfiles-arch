import GObject, { register, GLib, property } from "astal/gobject";
import { bash, ensureDirectory, notifySend, now, sh } from "../lib/utils";
const HOME = GLib.get_home_dir();
@register({ GTypeName: "Screenrecord" })
export default class ScreenRecord extends GObject.Object {
  static instance: ScreenRecord;
  static get_default() {
    if (!this.instance) this.instance = new ScreenRecord();
    return this.instance;
  }
  #screenshots = `${HOME}/Pictures/Screenshots`;
  async screenshot(full = false) {
    const file = `${this.#screenshots}/${now()}.png`;
    ensureDirectory(this.#screenshots);
    if (full) {
      await bash(`wayshot -f ${file}`);
    } else {
      // const size = await bash("slurp -b#00000066 -w 0");
      // if (!size) return;
      await bash(`foamshot -o ${file}`);
    }
    // bash(`wl-copy < ${file}`);
    notifySend({
      image: file,
      appName: "Screenshot",
      summary: "Screenshot saved",
      body: `Available in ${this.#screenshots}`,
      actions: {
        "Show in Files": () => bash(`xdg-open ${this.#screenshots}`),
        View: () => bash(`xdg-open ${file}`),
        Edit: () => bash(`swappy -f ${file}`),
      },
    });
  }
}
