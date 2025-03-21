import { App, Astal } from "astal/gtk3";
import { activePopupWindows, toggleWindow } from "../../lib/utils";

type ScrimProps = {
  scrimType: "transparent" | "opaque";
  className?: string;
};

const Scrim = ({ scrimType, className = "scrim" }: ScrimProps) => (
  <window
    visible={false}
    name={`${scrimType}-scrim`}
    namespace={`${scrimType}-scrim`}
    layer={Astal.Layer.TOP}
    exclusivity={Astal.Exclusivity.IGNORE}
    anchor={
      Astal.WindowAnchor.TOP |
      Astal.WindowAnchor.LEFT |
      Astal.WindowAnchor.RIGHT |
      Astal.WindowAnchor.BOTTOM
    }
    keymode={Astal.Keymode.NONE}
    application={App}
    className={className}
    setup={(self) => {
      self.hook(self, "notify::visible", () => {
        if (!self.visible) {
          activePopupWindows(scrimType).forEach((popup) => {
            toggleWindow(popup.name);
          });
        }
      });
    }}
  >
    <eventbox
      vexpand={true}
      hexpand={true}
      onClick={(self) => {
        self.parent.visible = false;
      }}
    />
  </window>
);

export default Scrim;
