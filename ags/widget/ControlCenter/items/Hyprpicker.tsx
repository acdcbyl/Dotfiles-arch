import { execAsync } from "astal";
import { notifySend } from "../../../lib/utils";
import { bash } from "../../../lib/utils";
import ControlCenterButton from "../ControlCenterButton";
import { timeout } from "astal";
import icons from "../../../lib/icons";

export default () => {
  return (
    <ControlCenterButton
      onClicked={() => {
        const wlCopy = (color: string) =>
          execAsync(["wl-copy", color]).catch(console.error);

        bash(`astal -t control-center`);
        timeout(200, () => {
          execAsync("hyprpicker")
            .then((color) => {
              if (!color) return;

              wlCopy(color);
              notifySend({
                appName: "Hyprpicker",
                icon: "color-picker-symbolic",
                summary: "Color Picker",
                body: `${color} copied to clipboard`,
              });
            })
            .catch(console.error);
        });
      }}
      icon={icons.colorselect}
      no-label
    />
  );
}
