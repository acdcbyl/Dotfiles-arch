import { ButtonProps } from "astal/gtk4/widget";
import { App, hook, Gtk } from "astal/gtk4";

type PanelButtonProps = ButtonProps & {
  child?: unknown;
  window?: string;
  setup?: (self: Gtk.Button) => void;
};
export default function PanelButton({
  child,
  window,
  setup,
  ...props
}: PanelButtonProps) {
  return (
    <button
      cssClasses={["panel-button"]}
      setup={(self) => {
        if (window) {
          let open = false;

          // self.add_css_class(window);

          hook(self, App, "window-toggled", (_, win) => {
            const winName = win.name;
            const visible = win.visible;

            if (winName !== window) return;

            if (open && !visible) {
              open = false;
              self.remove_css_class("active");
            }

            if (visible) {
              open = true;
              self.add_css_class("active");
            }
          });
        }

        if (setup) setup(self);
      }}
      {...props}
    >
      {child}
    </button>
  );
}
