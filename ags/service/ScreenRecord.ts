import { AstalIO, exec, execAsync, Gio, GLib, GObject, interval } from "astal";
import { bash, ensureDirectory, sh } from "../lib/utils";
import AstalHyprland from "gi://AstalHyprland?version=0.1";

const now = () => GLib.DateTime.new_now_local().format("%Y-%m-%d_%H-%M-%S");
const hypr = AstalHyprland.get_default();

const ScreenRecorderService = GObject.registerClass(
  {
    Properties: {
      timer: GObject.ParamSpec.int64(
        "timer",
        "Timer",
        "A property containing recording timer",
        GObject.ParamFlags.READABLE,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0,
      ),
      recording: GObject.ParamSpec.boolean(
        "recording",
        "Recording",
        "A property containing recording state",
        GObject.ParamFlags.READABLE,
        false,
      ),
    },
  },
  class Recorder extends GObject.Object {
    #recorder: AstalIO.Process | null = null;
    #recordings = GLib.getenv("HOME") + "/Videos/Screenrecords";
    #screenshots = GLib.getenv("HOME") + "/Pictures/Screenshots";
    #file = "";
    #interval: AstalIO.Time | null = null;

    #timer = 0;

    get recording() {
      return this.#recorder != null;
    }
    get timer() {
      return this.#timer;
    }

    async start() {
      if (this.recording) return;

      ensureDirectory(this.#recordings);
      this.#file = `${this.#recordings}/${now()}.mp4`;
      const output = hypr.focusedMonitor.name;
      const cmd = `wl-screenrec --output ${output} --filename ${this.#file}`;

      this.#recorder = AstalIO.Process.subprocess(cmd);
      this.notify("recording");

      this.#timer = 0;
      this.#interval = interval(1000, () => {
        this.notify("timer");
        this.#timer++;
      });
    }

    async stop() {
      if (!this.#recorder) return;

      try {
        this.#recorder.signal(15);
        this.#recorder = null;
        this.notify("recording");

        if (this.#interval) this.#interval.cancel();
        this.#timer = 0;
        this.notify("timer");

        const res = await execAsync([
          "notify-send",
          "Screenrecord",
          this.#file,
          "-a",
          "Screenrecord",
          "-i",
          "video-x-generic-symbolic",
          "--hint=string:image:video-x-generic-symbolic",
          "-A",
          "file=Show in Files",
          "-A",
          "view=View",
        ]);

        switch (res) {
          case "file":
            return execAsync([
              GLib.getenv("FILE_MANAGER") || "xdg-open",
              this.#recordings,
            ]);
          case "view":
            return execAsync(["xdg-open", this.#file]);
        }
      } catch (e) {
        console.error("Error executing screenrecord-end script:", e);
      }
    }
  },
);
const service = new ScreenRecorderService();
export default service;
