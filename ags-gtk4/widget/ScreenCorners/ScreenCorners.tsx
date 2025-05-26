import { App, Astal, Gtk, Gdk, } from "astal/gtk4"
import GObject from "gi://GObject";
import Gsk from "gi://Gsk";
import options from "../../option";

const Corner = GObject.registerClass(
  class Corner extends Gtk.Widget {
    gdkmonitor!: Gdk.Monitor;
    constructor(gdkmonitor: Gdk.Monitor) {
      super();
      this.gdkmonitor = gdkmonitor;
      this.set_size_request(20, 20); // Adjust size as needed
      this.add_css_class("corner-widget");
    }
    vfunc_snapshot(snapshot: Gtk.Snapshot) {
      const screencorner = options;
      const radius = screencorner.screencorners.radius;
      const width = this.gdkmonitor.get_geometry().width;
      // const backgroundColor = new Gdk.RGBA();
      // backgroundColor.parse("#1e2030");
      const styleContext = this.get_style_context();
      const backgroundColor = styleContext.get_color();


      const pathbuilder = new Gsk.PathBuilder;
      pathbuilder.move_to(0, 0);
      pathbuilder.line_to(0, radius);
      pathbuilder.conic_to(0, 0, radius, 0, 1);

      pathbuilder.move_to(width, 0);
      pathbuilder.line_to(width, radius);
      pathbuilder.conic_to(width, 0, width - radius, 0, 1);

      snapshot.append_fill(pathbuilder.to_path(), Gsk.FillRule.EVEN_ODD, backgroundColor);
    }
  }
);

export default function Corners(gdkmonitor: Gdk.Monitor) {
  const corners = new Corner(gdkmonitor);
  return <window
    visible
    // name={"Bar"}
    cssClasses={["corners"]}
    layer={Astal.Layer.BOTTOM}
    gdkmonitor={gdkmonitor}
    exclusivity={Astal.Exclusivity.NORMAL}
    keymode={Astal.Keymode.NONE}
    anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
    application={App}>
    {corners}
  </window>
}
