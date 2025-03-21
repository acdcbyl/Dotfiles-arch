import { App, Astal, Gtk } from "astal/gtk3";

// const r = 5;

export const RoundedCorner = (place: String, props: Object) => (
  <drawingarea
    {...props}
    halign={place.includes("left") ? Gtk.Align.START : Gtk.Align.END}
    valign={place.includes("top") ? Gtk.Align.START : Gtk.Align.END}
    setup={(widget) => {
      // HACK: Setting minimum size to show the widget at all.
      const r = 2;
      widget.set_size_request(r, r);
    }}
    onDraw={(widget, cr) => {
      const r = 20;
      // const r = widget
      //   .get_style_context()
      //   .get_property("font-size", Gtk.StateFlags.NORMAL);

      widget.set_size_request(r, r);

      switch (place) {
        case "topleft":
          cr.arc(r, r, r, Math.PI, (3 * Math.PI) / 2);
          cr.lineTo(0, 0);
          break;
        case "topright":
          cr.arc(0, r, r, (3 * Math.PI) / 2, 2 * Math.PI);
          cr.lineTo(r, 0);
          break;
        case "bottomleft":
          cr.arc(r, 0, r, Math.PI / 2, Math.PI);
          cr.lineTo(0, r);
          break;
        case "bottomright":
          cr.arc(0, 0, r, 0, Math.PI / 2);
          cr.lineTo(r, r);
          break;
      }

      cr.closePath();
      cr.clip();
      Gtk.render_background(widget.get_style_context(), cr, 0, 0, r, r);
    }}
  />
);

export const CornerTopleft = (gdkmonitor: Number) => (
  <window
    className="w-corner"
    namespace="corner-t-l"
    name={`cornertl${gdkmonitor}`}
    layer={Astal.Layer.TOP}
    anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
    exclusivity={Astal.Exclusivity.NORMAL}
    visible={true}
    child={RoundedCorner("topleft", { className: "corner" })}
  />
);

export const CornerTopright = (gdkmonitor: Number) => (
  <window
    className="w-corner"
    namespace="corner-t-r"
    name={`cornertr${gdkmonitor}`}
    layer={Astal.Layer.TOP}
    anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT}
    exclusivity={Astal.Exclusivity.NORMAL}
    visible={true}
    child={RoundedCorner("topright", { className: "corner" })}
  />
);

export const CornerBottomleft = (gdkmonitor: Number) => (
  <window
    className="w-corner"
    name={`cornerbl${gdkmonitor}`}
    layer={Astal.Layer.TOP}
    anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT}
    exclusivity={Astal.Exclusivity.NORMAL}
    visible={true}
    child={RoundedCorner("bottomleft", { className: "corner" })}
  />
);

export const CornerBottomright = (gdkmonitor: Number) => (
  <window
    className="w-corner"
    name={`cornerbr${gdkmonitor}`}
    layer={Astal.Layer.TOP}
    anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT}
    exclusivity={Astal.Exclusivity.NORMAL}
    visible={true}
    child={RoundedCorner("bottomright", { className: "corner" })}
  />
);

export default RoundedCorner;
