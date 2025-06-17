import Wp from "gi://AstalWp";
import Window from "../../common/PopupWindow";
import Brightness from "../../lib/brightness";
import icons from "../../lib/icons";
import { bind, type Binding, timeout } from "astal";
import { Astal, Gtk, hook } from "astal/gtk4";
import { Box } from "astal/gtk4/widget";

const WINDOW_NAME = "osd";
const TIMEOUT = 2000;
// BUG: artifacts remain on hide https://github.com/wmww/gtk4-layer-shell/issues/60
const TRANSITION = Gtk.RevealerTransitionType.SLIDE_RIGHT;

function createSlider(
  bindable: Brightness | Wp.Endpoint,
  iconName: string | Binding<string>,
  hookProperty,
  onShow: () => void,
  onHide: () => void,
  cssClasses = [],
  onDragged = null,
) {
  return (
    <revealer
      transitionType={TRANSITION}
      setup={(self) => {
        let i = 0;
        hook(self, bind(bindable, hookProperty), () => {
          onShow();
          self.set_reveal_child(true);
          self.set_opacity(1);
          i++;
          timeout(TIMEOUT, () => {
            i--;
            if (i === 0) {
              self.set_reveal_child(false);
              onHide();
              self.set_opacity(0.1); // 1px artifact workaround
            }
          });
        });
      }}
    >
      <box
        cssClasses={["osd-box"]}
        vertical
        spacing={5}
      >
        <slider
          cssClasses={["osd-bar"]}
          orientation={Gtk.Orientation.VERTICAL}
          value={bind(bindable, hookProperty)}
          drawValue={false}
          inverted
        />
        <image iconName={iconName} cssClasses={["osd-icon"]} />
      </box>
    </revealer>
  );
}

export default function OSD() {
  let windowRef: Astal.Window;

  const onShow = () => {
    if (windowRef) {
      windowRef.set_visible(true);
    }
  };

  const onHide = () => {
    if (windowRef) {
      windowRef.set_visible(false);
    }
  };

  function BrightnessSlider() {
    const brightness = Brightness.get_default();
    return createSlider(
      brightness,
      icons.brightness.screen,
      "screen",
      onShow,
      onHide,
      [],
      null, // onDragged can be added here if needed
    );
  }

  function VolumeSlider() {
    const audio = Wp.get_default()?.audio.defaultSpeaker!;
    return createSlider(
      audio,
      bind(audio, "volumeIcon"),
      "volume",
      onShow,
      onHide,
      [],
      null, // onDragged can be added here if needed
    );
  }

  const window = (
    <Window
      name={WINDOW_NAME}
      exclusivity={Astal.Exclusivity.IGNORE}
      anchor={Astal.WindowAnchor.LEFT}
      keymode={Astal.Keymode.NONE}
      visible={false}
      defaultWidth={-1}
      margin={0}
      setup={(self) => {
        windowRef = self;
      }}
    >
      <box cssClasses={["osd-window"]}>
        <BrightnessSlider />
        <VolumeSlider />
      </box>
    </Window>
  );

  return window;
}
