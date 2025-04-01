import { Gtk } from "astal/gtk3";
import ControlCenterButton from "../ControlCenterButton";

export default ({
  onClicked
}: {
  onClicked: () => void;
}) => {
  return (
    <ControlCenterButton
      icon={"gnome-screenshot-symbolic"}
      onClicked={onClicked}
    />
  );
};
