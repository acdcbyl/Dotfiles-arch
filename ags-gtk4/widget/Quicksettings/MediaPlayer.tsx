import { timeout, Variable } from "astal";
import { bind } from "astal";
import { App, Gtk } from "astal/gtk4";
import AstalApps from "gi://AstalApps";
import AstalMpris from "gi://AstalMpris";
import Pango from "gi://Pango";



function MediaPlayer({ player }) {
  if (!player) {
    return <box />;
  }
  const title = bind(player, "title").as((t) => t || "Unknown Track");
  const artist = bind(player, "artist").as((a) => a || "Unknown Artist");
  const coverArt = bind(player, "coverArt");

  const playIcon = bind(player, "playbackStatus").as((s) =>
    s === AstalMpris.PlaybackStatus.PLAYING
      ? "media-playback-pause-symbolic"
      : "media-playback-start-symbolic",
  );

  return (
    <box cssClasses={["media-player"]} hexpand>
      <image
        overflow={Gtk.Overflow.HIDDEN}
        // pixelSize={60}
        cssClasses={["cover"]}
        file={coverArt}
      />
      <box vertical hexpand cssClasses={["media-font"]}>
        <label
          ellipsize={Pango.EllipsizeMode.END}
          halign={Gtk.Align.START}
          label={title}
          maxWidthChars={30}
        />
        <label halign={Gtk.Align.START} ellipsize={Pango.EllipsizeMode.END}
          maxWidthChars={20}
          label={artist} />
      </box>
      <button
        halign={Gtk.Align.END}
        valign={Gtk.Align.CENTER}
        cssClasses={["play-icon"]}
        onClicked={() => player.play_pause()}
        visible={bind(player, "canControl")}
      >
        <box cssClasses={["control-bg"]}>
          <image iconName={playIcon} pixelSize={32} />
        </box>
      </button>
      {/* <button */}
      {/*   halign={Gtk.Align.END} */}
      {/*   valign={Gtk.Align.CENTER} */}
      {/*   onClicked={() => player.next()} */}
      {/*   visible={bind(player, "canGoNext")} */}
      {/*   cssClasses={["next-icon"]} */}
      {/* > */}
      {/*   <image iconName="media-skip-forward-symbolic" pixelSize={30} /> */}
      {/* </button> */}
    </box>
  );
}

export default function MediaPlayers() {
  const mpris = AstalMpris.get_default();
  return (
    <box cssClasses={["mediaPlayersContainer"]} hexpand={false}>
      {/* <AppsList /> */}
      {bind(mpris, "players").as((players) => (
        <MediaPlayer player={players[0]} />
      ))}
      {/* <Gtk.Separator orientation={Gtk.Orientation.VERTICAL} /> */}
      {/* <AppButton */}
      {/*   app={{ iconName: "user-trash" } as AstalApps.Application} */}
      {/*   onClicked={"nautilus trash:///"} */}
      {/*   term={""} */}
      {/* /> */}
    </box>
  );
}
