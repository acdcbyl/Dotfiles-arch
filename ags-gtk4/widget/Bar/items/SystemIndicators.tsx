import { App } from "astal/gtk4";
import BarButton from "../BarButton";
import AstalWp from "gi://AstalWp";
import { bind, Variable } from "astal";
import AstalPowerProfiles from "gi://AstalPowerProfiles";
import AstalNetwork from "gi://AstalNetwork";
import AstalBluetooth from "gi://AstalBluetooth";

function NetworkIcon() {
  const network = AstalNetwork.get_default();
  if (!network.wifi)
    return <image iconName={bind(network.wired, "iconName")} />;

  const icon = Variable.derive(
    [
      bind(network, "primary"),
      bind(network.wifi, "iconName"),
      bind(network.wired, "iconName"),
    ],
    (primary, wifiIcon, wiredIcon) => {
      if (
        primary == AstalNetwork.Primary.WIRED ||
        primary == AstalNetwork.Primary.UNKNOWN
      ) {
        return wiredIcon;
      } else {
        return wifiIcon;
      }
    },
  );
  return <image iconName={icon()} onDestroy={() => icon.drop()} />;
}

export default function SystemButton() {
  // const battery = AstalBattery.get_default();
  const bluetooth = AstalBluetooth.get_default();
  const wp = AstalWp.get_default();
  const speaker = wp?.audio.defaultSpeaker!;
  const powerprofile = AstalPowerProfiles.get_default();

  return (
    <BarButton
      cssName="bar__system-indicators"
      onClicked={() => {
        App.toggle_window("quicksettings");
      }}
    >
      <box spacing={6}>
        <NetworkIcon />
        <image
          visible={bind(bluetooth, "isPowered")}
          iconName={"bluetooth-symbolic"}
        />
        <image iconName={bind(speaker, "volumeIcon")} />
        <image
          visible={bind(powerprofile, "activeProfile").as(
            (p) => p === "power-saver",
          )}
          iconName={`power-profile-power-saver-symbolic`}
        />
        <image
          visible={wp?.defaultMicrophone && bind(wp.default_microphone, "mute")}
          iconName="microphone-disabled-symbolic"
        />
      </box>
    </BarButton>
  );
}
