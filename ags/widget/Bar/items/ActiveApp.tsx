import Hyprland from "gi://AstalHyprland";
import { Gtk } from "astal/gtk3";
import { bind } from "astal";
import BarButton from "../BarButton";
import icons, { substitutions } from "../../../lib/icons";
import { lookUpIcon } from "../../../lib/utils";

export default () => {
	const hypr = Hyprland.get_default();
	const focused = bind(hypr, "focusedClient");

	return (
		<revealer
			transitionType={Gtk.RevealerTransitionType.CROSSFADE}
			transitionDuration={300}
			revealChild={focused.as(Boolean)}
		>
			<BarButton className="bar__active-app">
				<box spacing={8}>
					{focused.as(client => client && (
						<>
							<icon
								icon={bind(client, "class").as(cls =>
									substitutions.icons[cls]
									|| (lookUpIcon(cls) ? cls : icons.fallback.executable)
								)}
							/>
							<label
								label={bind(client, "title").as(String)}
								truncate={true}
								maxWidthChars={24}
							/>
						</>
					))}
				</box>
			</BarButton>		</revealer>
	);
};
