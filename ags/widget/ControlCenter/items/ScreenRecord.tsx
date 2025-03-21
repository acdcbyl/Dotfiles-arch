import { bind } from "astal";
import { Gtk } from "astal/gtk3";
import icons from "../../../lib/icons";
import ScreenRecordService from "../../../service/ScreenRecord";
import ControlCenterButton from "../ControlCenterButton";

export default ({ onClicked }: { onClicked: () => void }) => {
	return (
		<ControlCenterButton
			className={"recorder-indicator"}
			icon={icons.record}
			onPrimaryClick={onClicked}
			connection={[
				bind(ScreenRecordService, "recording"),
				() => ScreenRecordService.recording,
			]}
		/>
	);
};
