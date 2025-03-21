/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />
/// <reference path="./gnomeautoar-0.1.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GnomeAutoarGtk?version=0.1' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';
    import type GnomeAutoar from 'gi://GnomeAutoar?version=0.1';

    export namespace GnomeAutoarGtk {
        /**
         * GnomeAutoarGtk-0.1
         */

        /**
         * Gets the selected archive format of the widget created by
         * autoar_gtk_chooser_advanced_new().
         * @param advanced a #GtkGrid returned by autoar_gtk_chooser_advanced_new()
         * @param format the place to store the #AutoarFormat selected by the user
         * @param filter the place to store the #AutoarFilter selected by the user
         * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @advanced, so @format and @filter are not modified.
         */
        function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean;
        /**
         * Create a #GtkGrid with two lists. One list shows all available formats,
         * and the other list shows all available filters.
         * @param default_format an #AutoarFormat
         * @param default_filter an #AutoarFilter
         * @returns a new #GtkGrid widget
         */
        function chooser_advanced_new(
            default_format: GnomeAutoar.Format | null,
            default_filter: GnomeAutoar.Filter | null,
        ): Gtk.Widget;
        /**
         * Gets the selected archive format of the widget created by
         * autoar_gtk_chooser_simple_new().
         * @param simple a #GtkComboBox returned by autoar_gtk_chooser_simple_new()
         * @param format the place to store the #AutoarFormat selected by the user
         * @param filter the place to store the #AutoarFilter selected by the user
         * @returns %TRUE if @format and @filter are set. %FALSE if there is no selected item on @simple, so @format and @filter are not modified.
         */
        function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean;
        /**
         * Create a #GtkComboBox with a list of common archive format. There is also
         * an option called "Other format…", which will use
         * autoar_gtk_chooser_advanced_new() and
         * autoar_gtk_chooser_advanced_get() to select less common archive
         * format. Arguments `default_format` and `default_filter` are the default archive
         * format selected on the returned widget. You may want to get the preferred
         * format of users using autoar_pref_get_default_format() and
         * autoar_pref_get_default_filter(), or just set them to 1 to select
         * the default archive format.
         * @param default_format an #AutoarFormat
         * @param default_filter an #AutoarFilter
         * @returns a new #GtkComboBox widget
         */
        function chooser_simple_new(
            default_format: GnomeAutoar.Format | null,
            default_filter: GnomeAutoar.Filter | null,
        ): Gtk.Widget;
        /**
         * Name of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
         */
        const __name__: string;
        /**
         * Version of the imported GIR library
         * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
         */
        const __version__: string;
    }

    export default GnomeAutoarGtk;
}

declare module 'gi://GnomeAutoarGtk' {
    import GnomeAutoarGtk01 from 'gi://GnomeAutoarGtk?version=0.1';
    export default GnomeAutoarGtk01;
}
// END
