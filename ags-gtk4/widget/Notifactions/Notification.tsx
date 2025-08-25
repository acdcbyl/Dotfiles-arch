import { Gtk } from "astal/gtk4";
import { bind, GLib, idle, timeout, Variable } from "astal";
import Adw from "gi://Adw?version=1";
import Pango from "gi://Pango";
import AstalNotifd from "gi://AstalNotifd";
import { Revealer } from "astal/gtk4/widget";

const time = (time: number, format = "%H:%M") =>
  GLib.DateTime.new_from_unix_local(time).format(format);

const isIcon = (icon: string) => {
  const iconTheme = new Gtk.IconTheme();
  return iconTheme.has_icon(icon);
};

const fileExists = (path: string) => GLib.file_test(path, GLib.FileTest.EXISTS);

const urgency = (n: AstalNotifd.Notification) => {
  const { LOW, NORMAL, CRITICAL } = AstalNotifd.Urgency;

  switch (n.urgency) {
    case LOW:
      return "low";
    case CRITICAL:
      return "critical";
    case NORMAL:
    default:
      return "normal";
  }
};

const ishover = Variable(false)
export default function Notification({
  n,
  showActions = true,
  setup,
  onHover,
  onHoverLost,
}: {
  n: AstalNotifd.Notification;
  showActions?: boolean;
  setup(self: Gtk.Box): void;
  onHoverLost(self: Gtk.Box): void
  onHover(self: Gtk.Box): void
}) {
  return (
    <Adw.Clamp maximumSize={400} cssClasses={["notification-container"]} >
      <box
        name={n.id.toString()}
        // cssClasses={["notification-container", urgency(n)]}
        setup={setup}
        onHoverEnter={onHover}
        onHoverLeave={onHoverLost}
        // widthRequest={350}
        hexpand={false}
        vexpand={false}
      >
        <box vertical onHoverEnter={() => ishover.set(true)} onHoverLeave={() => ishover.set(false)}>
          <box cssClasses={["header"]}>
            {/* {(n.appIcon || n.desktopEntry) && ( */}
            {/*   <image */}
            {/*     cssClasses={["app-icon"]} */}
            {/*     visible={!!(n.appIcon || n.desktopEntry)} */}
            {/*     iconName={n.appIcon || n.desktopEntry} */}
            {/*   /> */}
            {/* )} */}
            <image
              cssClasses={["app-icon"]}
              iconName={"fa-bell-symbolic"}
            />
            <label
              cssClasses={["app-name"]}
              halign={Gtk.Align.START}
              label={n.appName || "Unknown"}
            />
            <label
              cssClasses={["time"]}
              hexpand
              halign={Gtk.Align.END}
              label={time(n.time)!}
            />
            <button onClicked={() => n.dismiss()}>
              <image iconName={"window-close-symbolic"} />
            </button>
          </box>
          <Gtk.Separator visible orientation={Gtk.Orientation.HORIZONTAL} />
          <box cssClasses={["content"]} spacing={10} >
            {(() => {
              if (n.image && fileExists(n.image)) {
                return (
                  <box valign={Gtk.Align.START} cssClasses={["image"]}>
                    <image file={n.image} overflow={Gtk.Overflow.HIDDEN} iconSize={Gtk.IconSize.LARGE}
                      halign={Gtk.Align.CENTER}
                      valign={Gtk.Align.CENTER}
                    />
                  </box>
                );
              } else if (n.image && isIcon(n.image)) {
                return (
                  <box cssClasses={["image"]} valign={Gtk.Align.START}>
                    <image
                      iconName={n.image}
                      iconSize={Gtk.IconSize.LARGE}
                      halign={Gtk.Align.CENTER}
                      valign={Gtk.Align.CENTER}
                    />
                  </box>
                );
              } else if (n.appIcon) {
                return (
                  <box cssClasses={["image"]} valign={Gtk.Align.START}>
                    <image
                      file={n.appIcon}
                      overflow={Gtk.Overflow.HIDDEN}
                      iconSize={Gtk.IconSize.LARGE}
                      halign={Gtk.Align.CENTER}
                      valign={Gtk.Align.CENTER}
                    />
                  </box>
                );
              } else if (n.desktopEntry) {
                return (
                  <box cssClasses={["image"]} valign={Gtk.Align.START}>
                    <image
                      iconName={n.desktopEntry}
                      overflow={Gtk.Overflow.HIDDEN}
                      iconSize={Gtk.IconSize.LARGE}
                      halign={Gtk.Align.CENTER}
                      valign={Gtk.Align.CENTER}
                    />
                  </box>
                )
              }
              return null; // 如果没有条件满足，返回null
            })()}
            <box vertical>
              <label
                // maxWidthChars={24}
                cssClasses={["summary"]}
                halign={Gtk.Align.START}
                xalign={0}
                label={n.summary}
                ellipsize={Pango.EllipsizeMode.END}
              />
              {n.body && (
                <revealer
                  visible={n.body != " "}
                  revealChild={n.body != " "}>
                  <label
                    cssClasses={["body"]}
                    //   maxWidthChars={30}
                    // lines={5}
                    useMarkup
                    wrap
                    wrapMode={Pango.WrapMode.CHAR}
                    halign={Gtk.Align.FILL}
                    justify={Gtk.Justification.FILL}
                    // valign={Gtk.Align.CENTER}
                    xalign={0}
                    label={n.body}
                  />
                </revealer>
              )}
            </box>
          </box>
          <revealer revealChild={bind(ishover)} transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN} transitionDuration={300}>
            {showActions && n.get_actions().length > 0 && (
              <box cssClasses={["actions"]} spacing={6}>
                {n.get_actions().map(({ label, id }) => (
                  <button hexpand onClicked={() => n.invoke(id)}>
                    <label label={label} halign={Gtk.Align.CENTER} hexpand />
                  </button>
                ))}
              </box>
            )}
          </revealer>
        </box>
      </box>
    </Adw.Clamp>
  )
}
