import { monitorFile, readFileAsync } from "astal/file";
import GLib from "gi://GLib?version=2.0";
import Wp from "gi://AstalWp";
import { setOSD } from "./Osd";
import { bind } from "astal";
import { hook } from "astal/gtk4";

export function startVolume() {
  const speaker = Wp.get_default()!.get_default_speaker()
  if ("notify::volume") {
    setOSD("display-brightness-symbolic", speaker.volume);
  }
}
