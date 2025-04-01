import { Gtk } from "astal/gtk3";
import { Binding, timeout } from "astal";
import icons from "../../../lib/icons";
import { spacing } from "../../../lib/variables";
import Button from "../../../common/Button";
import { bash } from "../../../lib/utils";
import ScreenShot from "../../../service/ScreenShot";

export default ({
  revealMenu,
  closeMenu,
}: {
  revealMenu: Binding<boolean>;
  closeMenu: () => void;
}) => {
  const screenShot = ScreenShot.get_default();

  const takeScreenshot = (isFull: boolean) => {
    bash(`astal -t control-center`);
    timeout(200, () => {
      screenShot.screenshot(isFull);
      closeMenu();
    });
  };

  return (
    <box
      vertical
      className={"control-center__dropdown-menu"}
      spacing={spacing * 2}
      visible={revealMenu}
    >
      <icon
        icon={"gnome-screenshot-symbolic"}
        className={"control-center__dropdown-menu_icon"}
      />
      <label
        label={"Start screenshot?"}
        className={"control-center__dropdown-menu_title"}
      />
      <box spacing={spacing}>
        <Button
          hexpand halign={Gtk.Align.FILL}
          buttonType="outlined"
          // className={"control-center__dropdown-menu_item"}
          onClicked={() => takeScreenshot(true)}
        >
          <box spacing={spacing * 2}>
            <icon icon={icons.screenshot.full} />
            <label label={"Fullscreen"} />
          </box>
        </Button>

        <Button
          hexpand halign={Gtk.Align.FILL}
          buttonType="outlined"
          // className={"control-center__dropdown-menu_item"}
          onClicked={() => takeScreenshot(false)}
        >
          <box spacing={spacing * 2}>
            <icon icon={icons.screenshot.area} />
            <label label={"Regional"} />
          </box>
        </Button>
      </box>
      <box hexpand halign={Gtk.Align.END} spacing={spacing}>
        <Button buttonType="outlined" onClicked={closeMenu}>
          Cancel
        </Button>
      </box>
    </box>
  );
};
