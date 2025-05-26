import options from "../../../option";
import { execAsync, GLib } from "astal";
import QSButton from "../QSButton";
import { sh } from "../../../lib/utils";

export default function DarkModeQS() {
  const { mode } = options.theme;

  const onClicked = async () => {
    const newMode = mode.get() === "light" ? "dark" : "light";
    mode.set(newMode);

    try {
      const out = await execAsync("swww query");
      const current_wallpaper = out.split("image:")[1].trim();
      console.log(current_wallpaper);

      sh([
        "sh",
        `${GLib.get_user_config_dir()}/ags/scripts/changecolor.sh`,
        current_wallpaper,
        newMode
      ]);
    } catch (error) {
      console.error("Failed to get wallpaper:", error);
    }
  };

  return (
    <QSButton
      connection={[mode, null, (v) => v === "dark"]}
      iconName={"lighttable-symbolic"}
      label={"Dark Mode"}
      onClicked={onClicked}
    />
  );
}
