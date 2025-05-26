import AstalNotifd from "gi://AstalNotifd";
import PanelButton from "../PanelButton";
import { Revealer } from "astal/gtk4/widget";
import { Gtk } from "astal/gtk4";
import { App } from "astal/gtk4";
import { bind, Variable } from "astal";
import AstalApps from "gi://AstalApps";

const notifd = AstalNotifd.get_default();

export default function NotifiCount() {
  return (
    <PanelButton window="" cssClasses={["notificount-bg"]}>
      <label
        cssClasses={["label"]}
        label={bind(notifd, "notifications").as((n) => n.length.toString())} />
    </PanelButton>
  );
}
