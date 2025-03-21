import AstalMpris from "gi://AstalMpris?version=0.1";
import { execAsync } from "astal";
import GObject from "gi://GObject?version=2.0";
import { Colors } from "../lib/variables";

const PlayerColorsService = GObject.registerClass(
	{
		Properties: {
			colors: GObject.ParamSpec.jsobject(
				"colors",
				"Colors",
				"A property containing player colors",
				GObject.ParamFlags.READABLE,
			),
		},
	},
	class PlayerColorsService extends GObject.Object {
		constructor({ player }: { player: AstalMpris.Player }) {
			super();
			player.connect("notify::cover-art", () => this.#setColors(player));
			this.#setColors(player);
		}

		#colors: Colors | null = null;

		get colors() {
			return this.#colors;
		}

		#setColors(player: AstalMpris.Player) {
			if (player.coverArt) {
				execAsync(
					`matugen image ${player.coverArt} --dry-run -j hex`,
				).then((str) => {
					const colors = JSON.parse(str).colors as {
						light: Colors;
						dark: Colors;
					};
					this.#colors = colors.light;
					this.notify(`colors`);
				});
			}
		}
	},
);

export default (player: AstalMpris.Player) =>
	new PlayerColorsService({
		player: player,
	});
