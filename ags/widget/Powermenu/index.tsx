import PopupWindow from "../../common/PopupWindow";
import { App } from "astal/gtk3";
import PowermenuService, { PowerMenuAction } from "../../service/Powermenu";
import { ButtonProps } from "astal/gtk3/widget";
import icons from "../../lib/icons";
import { toggleWindow } from "../../lib/utils";
import Button from "../../common/Button";

type PowermenuButtonProps = {
	action: PowerMenuAction;
	iconName: string;
} & ButtonProps;

const PowermenuButton = ({ action, iconName }: PowermenuButtonProps) => (
	<button
		className={`powermenu__button`}
		onClicked={() => PowermenuService.action(action)}
	>
		<icon icon={iconName} />
	</button>
);

export default () => {
	return (
		<PopupWindow
			application={App}
			scrimType="opaque"
			name="powermenu"
			namespace="powermenu"
			onKeyPressEvent={(self, event) => {
				const [keyEvent, keyCode] = event.get_keycode();
				if (keyEvent && keyCode == 9) {
					toggleWindow(self.name);
				}
			}}
		>
			<box spacing={24} homogeneous className={"powermenu"}>
				<PowermenuButton
					action="shutdown"
					iconName={icons.powermenu.shutdown}
				/>
				<PowermenuButton
					action="reboot"
					iconName={icons.powermenu.reboot}
				/>
				<PowermenuButton
					action="sleep"
					iconName={icons.powermenu.sleep}
				/>
				<PowermenuButton
					action="logout"
					iconName={icons.powermenu.logout}
				/>
			</box>
		</PopupWindow>
	);
};
