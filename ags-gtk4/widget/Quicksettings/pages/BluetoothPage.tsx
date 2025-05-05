import AstalBluetooth from "gi://AstalBluetooth?version=0.1";
import { qsPage } from "../QSWindow";
import { Gtk } from "astal/gtk4";
import { bind, timeout } from "astal";
import { bash } from "../../../lib/utils";
import { upower } from "../../../lib/variables";

export default function BluetoothPage() {
  const bluetooth = AstalBluetooth.get_default();
  const power = bind(upower);

  return (
    <box
      name={"bluetooth"}
      cssClasses={["bluetooth-page", "qs-page"]}
      vertical
      spacing={6}
    >
      <box hexpand={false} cssClasses={["header"]} spacing={6}>
        <button
          onClicked={() => {
            qsPage.set("main");
          }}
          iconName={"go-previous-symbolic"}
        />
        <label
          useMarkup={true}
          label={"<b> Bluetooth</b>"}
          hexpand
          xalign={0}
        />
        {/* <image */}
        {/*   iconName={"bluetooth-symbolic"} */}
        {/*   hexpand */}
        {/*   halign={Gtk.Align.END} */}
        {/* /> */}
        {/* <switch */}
        {/*   active={bind(bluetooth, "isPowered")} */}
        {/*   onActivate={({ active }) => (bluetooth.isPowered = active)} */}
        {/* /> */}
      </box>
      <Gtk.Separator />

      <Gtk.ScrolledWindow vexpand>
        <box vertical spacing={6} cssClasses={["content"]}>
          {bind(bluetooth, "devices").as((devices) =>
            devices.map((device) => (
              <button
                cssClasses={["button"]}
                onClicked={() => {
                  if (!bluetooth.isPowered) {
                    bluetooth.toggle();
                  }
                  timeout(100, () => {
                    device.connect_device(() => { });
                  });
                }}
                visible={device.name !== null}
              >
                <box hexpand>
                  <image iconName={device.icon === null ? "bluetooth-active-symbolic" : device.icon + "-symbolic"} />
                  <label label={device.name} />
                  <box hexpand />
                  <label
                    halign={Gtk.Align.END}
                    cssClasses={["bluetooth-percentage"]}
                    label={power.as((arr) => {
                      const upowerData = arr.find(item => item.model === device.name) || false;
                      if (upowerData && upowerData?.batteryPercentage) {
                        return upowerData.batteryPercentage + "%";
                      }
                      return "";
                    })}
                  //                   visible={power.as((arr) => {
                  //                   const upowerData = arr.find(item => item.model === device.name) || false;
                  //                 if (upowerData && upowerData?.batteryPercentage) {
                  //                 return true;
                  //             }
                  //           return false;
                  //       })}
                  />
                  {/* Spinner for connecting state */}
                  <box
                    cssClasses={["spinner"]}
                    visible={bind(device, "connecting")}
                  />
                  <image
                    iconName={"emblem-ok-symbolic"}
                    visible={bind(device, "connected")}
                  />
                </box>
              </button>
            ))
          )}
        </box>
      </Gtk.ScrolledWindow>
    </box>
  );
}
