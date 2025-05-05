import AstalPowerProfiles from "gi://AstalPowerProfiles";
import { qsPage } from "../QSWindow";
import { Gtk } from "astal/gtk4";
import { bind } from "astal";

export default function BatteryPage() {
  const powerprofiles = AstalPowerProfiles.get_default();
  return (
    <box
      name={"battery"}
      cssClasses={["battery-page", "qs-page"]}
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
          label={"<b> Battery</b>"}
          hexpand
          xalign={0}
        />
        {/* <image */}
        {/*   iconName={"preferences-system-power-symbolic"} */}
        {/*   hexpand */}
        {/*   halign={Gtk.Align.END} /> */}
      </box>
      <Gtk.Separator />
      {powerprofiles.get_profiles().map((p) => {
        return (
          <button
            cssClasses={bind(powerprofiles, "activeProfile").as((active) => {
              const classes = ["button"];
              active === p.profile && classes.push("active");
              return classes;
            })}
            onClicked={() => {
              powerprofiles.set_active_profile(p.profile);
              qsPage.set("main");
            }}
          >
            <box>
              <image iconName={`power-profile-${p.profile}-symbolic`} />
              <label
                label={p.profile
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              />
            </box>
          </button>
        );
      })}
    </box>
  );
}
