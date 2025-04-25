import { App, Astal, Gtk, Gdk } from "astal/gtk4"
import { Variable } from "astal"
import ActiveApp from "./items/ActiveApp"
import AppLauncher from "./items/AppLauncher"
import Workspaces from "./items/Workspaces"
import Clock from "./items/Clock"
import Tray from "./items/Tray"
import Battery from "./items/Battery"
import SystemIndicators from "./items/SystemIndicators"
import Notifications from "./items/Notifications"
import NetworkSpeed from "./items/NetWorkSpeed"
import KeyboardLayout from "./items/KeyboardLayout"
import RecordingIndicator from "./items/RecordIndicator"
import { spacing } from "../../lib/variables"

const time = Variable("").poll(1000, "date")

const Start = () => {
  return (
    <box halign={Gtk.Align.START} spacing={spacing}>
      <AppLauncher />
      <Workspaces />
      <ActiveApp />
    </box>
  );
};
const Center = () => {
  return (
    <box spacing={spacing}>
      <Clock />
    </box>
  );
};
const End = () => {
  return (
    <box halign={Gtk.Align.END} spacing={spacing}>
      <RecordingIndicator />
      <NetworkSpeed />
      <KeyboardLayout />
      <box cssClasses={["bar__rounded-box"]} spacing={spacing / 2}>
        <Notifications />
        <Tray />
        <SystemIndicators />
      </box>
      <Battery />
    </box>
  );
};
export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return <window
    visible
    cssClasses={["bar"]}
    namespace="bar"
    layer={Astal.Layer.BOTTOM}
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={TOP | LEFT | RIGHT}
    application={App}>
    <centerbox cssName="centerbox">
      {/* < AppLauncher /> */}
      {/* <ActiveApp /> */}
      <Start />
      <Center />
      <End />
      <box />
    </centerbox>
  </window>
}
