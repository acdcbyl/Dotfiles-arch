import { bind, Variable } from "astal";
import { Gtk } from "astal/gtk3";
import icons from "../../../lib/icons";
import ScreenRecordService from "../../../service/ScreenRecord";
import BarButton from "../BarButton";

const RecordingIndicator = () => {
	const revealTimer = Variable(false);
	return (
		<revealer
			transitionType={Gtk.RevealerTransitionType.CROSSFADE}
			transitionDuration={300}
			revealChild={bind(ScreenRecordService, "recording").as(Boolean)}
		>
			<BarButton
				className="bar__recording-indicator"
				onClicked={() => ScreenRecordService.stop()}
				onHover={(self) => {
					revealTimer.set(true);
					self.toggleClassName("spacing", true);
				}}
				onHoverLost={(self) => {
					revealTimer.set(false);
					self.toggleClassName("spacing", false);
				}}
			>
				<box halign={Gtk.Align.CENTER}>
					<revealer
						transitionDuration={300}
						transitionType={Gtk.RevealerTransitionType.SLIDE_RIGHT}
						revealChild={bind(revealTimer)}
					>
						<label
							label={bind(ScreenRecordService, "timer").as(
								(timer) =>
									new Date(timer * 1000)
										.toISOString()
										.substring(14, 19),
							)}
						/>
					</revealer>
					<icon icon={icons.record} />
				</box>
			</BarButton>
		</revealer>
	);
};

export default RecordingIndicator;
