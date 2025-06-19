import { Astal, Gtk } from "astal/gtk4"
import { App } from "astal/gtk4"
import Notifd from "gi://AstalNotifd"
import Notification from "./Notification"
import { type Subscribable } from "astal/binding"
import { bind, GLib, Variable } from "astal"
import Hyprland from "gi://AstalHyprland"

const TIMEOUT_DELAY = 5_000

class NotificationMap implements Subscribable {
  private map: Map<number, Gtk.Widget> = new Map()

  private var: Variable<Array<Gtk.Widget>> = Variable([])

  private notifiy() {
    this.var.set([...this.map.values()].reverse())
  }

  constructor() {
    const notifd = Notifd.get_default()

    // notifd.ignoreTimeout = true

    notifd.connect("notified", (_, id) => {
      let hideTimeout: GLib.Source | null = null

      if (notifd.dontDisturb) {
        return
      }

      this.set(id, Notification({
        n: notifd.get_notification(id)!,

        onHoverLost: () => {
          hideTimeout = setTimeout(() => {
            this.delete(id)
            hideTimeout?.destroy()
            hideTimeout = null
          }, TIMEOUT_DELAY)
        },
        onHover() {
          hideTimeout?.destroy()
          hideTimeout = null
        },
        setup: () => {
          hideTimeout = setTimeout(() => {
            this.delete(id)
            hideTimeout?.destroy()
            hideTimeout = null
          }, TIMEOUT_DELAY)
        },
      }))
    })

    notifd.connect("resolved", (_, id) => {
      this.delete(id)
    })
  }

  private set(key: number, value: Gtk.Widget) {
    // this.map.get(key)?.destroy()
    this.map.set(key, value)
    this.notifiy()
  }

  private delete(key: number) {
    // this.map.get(key)?.destroy()
    this.map.delete(key)
    this.notifiy()
  }

  // needed by the Subscribable interface
  get() {
    return this.var.get()
  }

  // needed by the Subscribable interface
  subscribe(callback: (list: Array<Gtk.Widget>) => void) {
    return this.var.subscribe(callback)
  }
}

export default function NotificationPopups(monitor: Hyprland.Monitor): Astal.Window {
  const notifs = new NotificationMap()
  const { TOP, RIGHT } = Astal.WindowAnchor;

  return <window
    namespace={"notifications-popup"}
    application={App}
    visible={bind(notifs).as((values) => {
      return values.length !== 0
    })}
    margin={10}
    monitor={monitor.id}
    // layer={Astal.Layer.Top}
    anchor={TOP | RIGHT}
  >
    <box
      spacing={6}
      vertical={true}>
      {bind(notifs)}
    </box>
  </window> as Astal.Window
}
