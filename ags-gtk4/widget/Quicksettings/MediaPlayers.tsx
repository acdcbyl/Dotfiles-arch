import { Gtk } from "astal/gtk4"
import Pango from "gi://Pango?version=1.0";
import { LoopStatus, Mpris, PlaybackStatus, Player, ShuffleStatus } from "../../lib/mpris"
import { bind } from "astal";

const mpris = new Mpris()

function lengthStr(length: number) {
  const min = Math.floor(length / 60)
  const sec = Math.floor(length % 60)
  const sec0 = sec < 10 ? "0" : ""
  return `${min}:${sec0}${sec}`
}

function MediaPlayer({ player }: { player: Player }) {
  const { START, END, CENTER } = Gtk.Align

  const title = player.title(t =>
    t || "Unknown Track")

  const artist = player.artist(a =>
    a || "Unknown Artist")

  const playIcon = player.playbackStatus(s =>
    s === PlaybackStatus.Playing
      ? ""
      : ""
  )

  // 使用条件渲染，只在有有效的字符串类型封面时才渲染image组件
  return <box
    cssClasses={["mediaPlayer"]}
    vertical={true}>
    {player.coverArt(coverArt => {
      return typeof coverArt === 'string'
        ? <image file={coverArt} />
        : null
    })}
    <label
      cssClasses={["labelSmallBold"]}
      ellipsize={Pango.EllipsizeMode.END}
      halign={CENTER}
      hexpand={true}
      label={title} />
    <label
      cssClasses={["labelSmall"]}
      ellipsize={Pango.EllipsizeMode.END}
      halign={CENTER}
      label={artist} />
    <box
      cssClasses={["seekContainer"]}
      vertical={false}>
      <label
        cssClasses={["labelSmall"]}
        halign={START}
        visible={player.trackLength(l => l > 0)}
        label={player.position(lengthStr)}
      />
      <slider
        cssClasses={["seek"]}
        hexpand={true}
        visible={player.trackLength(l => l > 0)}
        onChangeValue={({ value }) => {
          player.setPosition(value * player.trackLength.get())
        }}
        value={player.position((position) => {
          return player.trackLength.get() > 0 ? position / player.trackLength.get() : 0
        })}
      />
      <label
        cssClasses={["labelSmall"]}
        halign={END}
        visible={player.trackLength(l => l > 0)}
        label={player.trackLength(l => l > 0 ? lengthStr(l) : "0:00")}
      />
    </box>
    <box
      halign={CENTER}
      spacing={15}
      homogeneous={true}
      hexpand={true}>
      <button
        cssClasses={["controlButton"]}
        onClicked={() => {
          if (player.shuffleStatus.get() === ShuffleStatus.Enabled) {
            player.setShuffleStatus(ShuffleStatus.Disabled)
          } else {
            player.setShuffleStatus(ShuffleStatus.Enabled)
          }
        }}
        visible={player.shuffleStatus((shuffle) => shuffle !== ShuffleStatus.Unsupported)}
        label={player.shuffleStatus((shuffle) => {
          if (shuffle === ShuffleStatus.Enabled) {
            return ""
          } else {
            return "󰒞"
          }
        })} />
      <button
        cssClasses={["controlButton"]}
        onClicked={() => {
          player.previousTrack()
        }}
        visible={player.canGoPrevious()}
        label="" />
      <button
        cssClasses={["controlButton"]}
        onClicked={() => {
          player.playPause()
        }}
        visible={player.canControl()}
        label={playIcon} />
      <button
        cssClasses={["controlButton"]}
        onClicked={() => {
          player.nextTrack()
        }}
        visible={player.canGoNext()}
        label="" />
      <button
        cssClasses={["controlButton"]}
        onClicked={() => {
          if (player.loopStatus.get() === LoopStatus.None) {
            player.setLoopStatus(LoopStatus.Playlist)
          } else if (player.loopStatus.get() === LoopStatus.Playlist) {
            player.setLoopStatus(LoopStatus.Track)
          } else {
            player.setLoopStatus(LoopStatus.None)
          }
        }}
        visible={player.loopStatus((status) => status !== LoopStatus.Unsupported)}
        label={player.loopStatus((status) => {
          if (status === LoopStatus.None) {
            return "󰑗"
          } else if (status === LoopStatus.Playlist) {
            return "󰑖"
          } else {
            return "󰑘"
          }
        })} />
    </box>
  </box>
}

export default function () {
  return <box
    cssClasses={["mediaPlayersContainer"]}
    vertical={true}>
    {mpris.players(players => {
      return players.map(player => (
        <MediaPlayer player={player} />
      ))
    })}
  </box>
}
