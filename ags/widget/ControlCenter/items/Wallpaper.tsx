import ControlCenterButton from "../ControlCenterButton";
import icons from "../../../lib/icons";
import { bash } from "../../../lib/utils";

export default () => {
	return <ControlCenterButton onClick={() => {
		bash(`waypaper & astal -t control-center`);
	}}
		icon={icons.wallpaper} />;
};
