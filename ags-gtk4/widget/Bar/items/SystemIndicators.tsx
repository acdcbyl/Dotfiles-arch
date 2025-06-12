import { App } from "astal/gtk4";
import AstalNotifd from "gi://AstalNotifd";
import PanelButton from "../PanelButton";
import { WINDOW_NAME } from "../../Quicksettings/QSWindow";
import AstalBattery from "gi://AstalBattery";
import AstalWp from "gi://AstalWp";
import { bind, Variable } from "astal";
import AstalPowerProfiles from "gi://AstalPowerProfiles";
import AstalNetwork from "gi://AstalNetwork";
import AstalBluetooth from "gi://AstalBluetooth";

function NetworkIcon() {
  const network = AstalNetwork.get_default();
  //三次空值检测
  if (!network)
    return null;
  if (!network.wifi && network.wired)
    return <image iconName={bind(network.wired, "iconName")} />;
  if (!network.wifi && !network.wired)
    return <image iconName="network-offline" />;
  //有些设备无法获取到wired的icon，尚不清楚原因
  // const icon = Variable.derive(
  //   [
  //     bind(network, "primary"),
  //     bind(network.wifi, "iconName"),
  //     bind(network.wired, "iconName"),
  //   ],
  //   (primary, wifiIcon, wiredIcon) => {
  //     if (
  //       primary == AstalNetwork.Primary.WIRED ||
  //       primary == AstalNetwork.Primary.UNKNOWN
  //     ) {
  //       return wiredIcon;
  //     } else {
  //       return wifiIcon;
  //     }
  //   },
  // );
  return <image iconName={bind(network.wifi, "iconName")} />;
}

export default function QSPanelButton() {
  const battery = AstalBattery.get_default();
  const bluetooth = AstalBluetooth.get_default();
  const wp = AstalWp.get_default();
  const speaker = wp?.audio.defaultSpeaker!;
  const powerprofile = AstalPowerProfiles.get_default();
  const notifd = AstalNotifd.get_default();

  return (
    <PanelButton
      window={WINDOW_NAME}
      onClicked={() => App.toggle_window(WINDOW_NAME)}
    >
      <box spacing={6}>
        <NetworkIcon />
        <image
          visible={bind(bluetooth, "isPowered")}
          iconName={"bluetooth-symbolic"}
        />
        {/* <image */}
        {/*   visible={bind(notifd, "dont_disturb")} */}
        {/*   iconName={"notification-disabled-symbolic"} */}
        {/* /> */}
        {/* <box> */}
        <image
          visible={bind(battery, "isPresent")}
          iconName={bind(battery, "batteryIconName")}
        />
        {/* <label */}
        {/*   label={bind(battery, "percentage").as( */}
        {/*     (p) => `${Math.floor(p * 100)} %`, */}
        {/*   )} */}
        {/* /> */}
        {/* </box> */}
        <image iconName={bind(speaker, "volumeIcon")} />
        <image
          visible={bind(powerprofile, "activeProfile").as(
            (p) => p === "power-saver",
          )}
          iconName={`power-profile-power-saver-symbolic`}
        />
        <image
          visible={bind(powerprofile, "activeProfile").as(
            (p) => p === "performance",
          )}
          iconName={`power-profile-performance-symbolic`}
        />
        <image
          visible={wp?.defaultMicrophone && bind(wp.default_microphone, "mute")}
          iconName="microphone-disabled-symbolic"
        />
      </box>
    </PanelButton>
  );
}
