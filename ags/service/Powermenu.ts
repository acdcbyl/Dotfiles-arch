import { GObject } from "astal";
import { toggleWindow } from "../lib/utils";

export type PowerMenuAction = "sleep" | "reboot" | "logout" | "shutdown";

const PowerMenuSerivce = GObject.registerClass(
	{
		Properties: {
			title: GObject.ParamSpec.string(
				"title",
				"Title",
				"A property containing powermenu action title",
				GObject.ParamFlags.READABLE,
				"",
			),
			cmd: GObject.ParamSpec.string(
				"cmd",
				"CMD",
				"A property containing command to be executed",
				GObject.ParamFlags.READABLE,
				"",
			),
		},
	},
	class PowerMenu extends GObject.Object {
		#title = "";
		#cmd = "";

		get title() {
			return this.#title;
		}
		get cmd() {
			return this.#cmd;
		}

		action(action: PowerMenuAction) {
			[this.#cmd, this.#title] = {
				sleep: ["systemctl suspend", "Sleep"],
				reboot: ["systemctl reboot", "Reboot"],
				logout: ["hyprctl dispatch exit", "Log Out"],
				shutdown: ["shutdown now", "Shutdown"],
			}[action];

			this.notify("cmd");
			this.notify("title");
			toggleWindow("powermenu");
			toggleWindow("verification");
		}
	},
);

const service = new PowerMenuSerivce();
export default service;
