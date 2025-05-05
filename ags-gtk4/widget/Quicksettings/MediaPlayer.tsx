import { timeout, Variable } from "astal";
import { bind } from "astal";
import { App, Gtk } from "astal/gtk4";
import AstalApps from "gi://AstalApps";
import AstalMpris from "gi://AstalMpris";
import Pango from "gi://Pango";

function lengthStr(length: number) {
  const min = Math.floor(length / 60)
  const sec = Math.floor(length % 60)
  const sec0 = sec < 10 ? "0" : ""
  return `${min}:${sec0}${sec}`
}
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
      {/* 整体容器 */}
      {/* 主要内容 */}
      <box hexpand>
        {/* 左侧：封面图片 */}
        <image
          overflow={Gtk.Overflow.HIDDEN}
          cssClasses={["cover"]}
          file={coverArt}
          valign={Gtk.Align.CENTER}
        />

        {/* 右侧：信息和控制按钮（垂直排列） */}
        <box vertical hexpand>
          {/* 信息部分 */}
          <box vertical cssClasses={["media-font"]}>
            <label
              ellipsize={Pango.EllipsizeMode.END}
              halign={Gtk.Align.START}
              cssClasses={["tilte"]}
              label={title}
              maxWidthChars={20}
            />
            <label
              halign={Gtk.Align.START}
              ellipsize={Pango.EllipsizeMode.END}
              maxWidthChars={20}
              cssClasses={["artist"]}
              label={artist}
            />
          </box>
          <box cssClasses={['progress_container']}
            vexpand>
            {bind(player, 'length').as(length => (
              <levelbar
                cssClasses={['progress']}
                heightRequest={10}
                maxValue={length}
                value={bind(player, 'position')}
                hexpand={true}
              />
            ))}
          </box>

          {/* 控制按钮部分 */}
          <box spacing={8} halign={Gtk.Align.CENTER} margin_top={4}>
            <button
              valign={Gtk.Align.CENTER}
              onClicked={() => player.previous()}
              visible={bind(player, "canGoPrevious")}
              cssClasses={["next-icon"]}
            >
              <image iconName="media-seek-backward-symbolic" pixelSize={25} />
            </button>
            <button
              valign={Gtk.Align.CENTER}
              cssClasses={["play-icon"]}
              onClicked={() => player.play_pause()}
              visible={bind(player, "canControl")}
            >
              <image iconName={playIcon} pixelSize={25} />
            </button>
            <button
              valign={Gtk.Align.CENTER}
              onClicked={() => player.next()}
              visible={bind(player, "canGoNext")}
              cssClasses={["next-icon"]}
            >
              <image iconName="media-seek-forward-symbolic" pixelSize={25} />
            </button>
          </box>
        </box>
      </box>

      <image
        halign={Gtk.Align.END}
        valign={Gtk.Align.START}
        iconName="emblem-music-symbolic"
        pixelSize={15}
        margin_end={10}
        margin_top={4}
      />
    </box>
  );
}

export default function MediaPlayers() {
  const mpris = AstalMpris.get_default();
  return (
    <box cssClasses={["mediaPlayersContainer"]} hexpand={false}>
      {bind(mpris, "players").as((players) => (
        <MediaPlayer player={players[0]} />
      ))}
    </box>
  );
}
