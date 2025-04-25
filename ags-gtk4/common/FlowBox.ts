import { astalify, Gtk, ConstructProps } from "astal/gtk4";

export type FlowBoxProps = ConstructProps<
  Gtk.FlowBox,
  Gtk.FlowBox.ConstructorProps
>;
export const FlowBox = astalify<Gtk.FlowBox, Gtk.FlowBox.ConstructorProps>(
  Gtk.FlowBox,
  {
    setChildren(self, children) {
      const filteredChildren = children.filter(
        (child) => child instanceof Gtk.Widget,
      );

      for (const child of filteredChildren) {
        self.append(child);
      }
    },
  },
);
