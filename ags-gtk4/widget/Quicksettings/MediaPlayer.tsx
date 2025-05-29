import { timeout, Variable } from "astal";
import Adw from "gi://Adw?version=1";
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
  function format_timecode(timecode: number) {
    timecode = Math.round(timecode);
    const seconds = timecode % 60;
    timecode = (timecode - seconds) / 60;
    const minutes = timecode % 60;
    timecode = (timecode - minutes) / 60;
    const hours = timecode;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  }
  return (
    <box cssClasses={["media-player"]} hexpand>
      {/* 整体容器 */}
      {/* 主要内容 */}
      <box hexpand spacing={12}>
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
            <box>
              <label
                ellipsize={Pango.EllipsizeMode.END}
                halign={Gtk.Align.START}
                cssClasses={["tilte"]}
                label={title}
                maxWidthChars={20}
              />
              <box hexpand />
              <image
                halign={Gtk.Align.END}
                valign={Gtk.Align.START}
                iconName="emblem-music-symbolic"
                pixelSize={15}
                // margin_end={10}
                margin_top={4}
              />
            </box>
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
              <slider
                cssClasses={['progress']}
                // heightRequest={10}
                // maxValue={length}
                onChangeValue={({ value }) => { player.set_position(value * length) }}
                value={bind(player, 'position').as(pos => (pos / length))}
                hexpand={true}
              />
            ))}
          </box>

          {/* 控制按钮部分 - 修改这部分 */}
          <box margin_top={2} hexpand>
            {/* 左侧：当前时间 */}
            {bind(player, 'position').as(position => (
              <label
                cssClasses={["labelSmaller"]}
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.START}
                label={format_timecode(position)}
              />
            ))}

            {/* 中间：控制按钮组 */}
            <box hexpand halign={Gtk.Align.CENTER} spacing={8}>
              <button
                valign={Gtk.Align.CENTER}
                onClicked={() => player.previous()}
                visible={bind(player, "canGoPrevious")}
                cssClasses={["next-icon"]}
              >
                <image iconName="media-seek-backward-symbolic" pixelSize={22} />
              </button>
              <button
                valign={Gtk.Align.CENTER}
                cssClasses={["play-icon"]}
                onClicked={() => player.play_pause()}
                visible={bind(player, "canControl")}
              >
                <image iconName={playIcon} pixelSize={22} />
              </button>
              <button
                valign={Gtk.Align.CENTER}
                onClicked={() => player.next()}
                visible={bind(player, "canGoNext")}
                cssClasses={["next-icon"]}
              >
                <image iconName="media-seek-forward-symbolic" pixelSize={22} />
              </button>
            </box>

            {/* 右侧：总时长 */}
            {bind(player, 'length').as(length => (
              <label
                valign={Gtk.Align.CENTER}
                halign={Gtk.Align.END}
                cssClasses={["labelSmaller"]}
                label={format_timecode(length)}
              />
            ))}
          </box>
        </box>
      </box>

    </box>
  );
}

export default function MediaPlayers() {
  const mpris = AstalMpris.get_default();
  const carousel = new Adw.Carousel({ spacing: 8 });
  const playerWidgets = new Map();

  const players = mpris.get_players();
  for (const player of players) {
    const widget = MediaPlayer({ player });
    carousel.append(widget);
    playerWidgets.set(player, widget);
  }

  mpris.connect("player-added", (_, player) => {
    console.log("player-added", player.busName);
    players.push(player);
    const widget = MediaPlayer({ player });
    carousel.append(widget);
    playerWidgets.set(player, widget);
  });

  mpris.connect("player-closed", (_, player) => {
    console.log("player-removed", player.busName);
    const widget = playerWidgets.get(player);
    if (!widget) {
      console.error("couldn't find widget for player", player.busName);
      return;
    }

    // 移除组件从carousel
    carousel.remove(widget);

    const idx = players.indexOf(player);
    if (idx >= 0) {
      players.splice(idx, 1);
    } else {
      console.error("couldn't find player in players array", player.busName);
    }

    playerWidgets.delete(player);
  });
  carousel.add_css_class("mediaPlayersContainer");

  return (
    <box hexpand={false} vertical>
      {carousel}
      {new Adw.CarouselIndicatorLines({ carousel })}
    </box>
  );
}
