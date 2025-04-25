import { ConstructProps } from "astal/gtk4";
import { astalify, Gtk } from "astal/gtk4";

export type PictureProps = ConstructProps<
  Gtk.Picture,
  Gtk.Picture.ConstructorProps
>;

const Picture = astalify<Gtk.Picture, Gtk.Picture.ConstructorProps>(
  Gtk.Picture,
);

export default Picture;
