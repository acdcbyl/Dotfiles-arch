/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./gdk-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GdkX11?version=2.0' {
    // Module dependencies
    import type xlib from 'gi://xlib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Gdk from 'gi://Gdk?version=2.0';

    export namespace GdkX11 {
        /**
         * GdkX11-2.0
         */

        function net_wm_supports(property: Gdk.Atom): boolean;
        /**
         * Converts from a #GdkAtom to the X atom for the default GDK display
         * with the same string value.
         * @param atom A #GdkAtom
         * @returns the X atom corresponding to @atom.
         */
        function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
        /**
         * Converts from a #GdkAtom to the X atom for a #GdkDisplay
         * with the same string value. The special value %GDK_NONE
         * is converted to %None.
         * @param display A #GdkDisplay
         * @param atom A #GdkAtom, or %GDK_NONE
         * @returns the X atom corresponding to @atom, or %None
         */
        function x11_atom_to_xatom_for_display(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom;
        /**
         * Returns the X colormap belonging to a #GdkColormap.
         * @param colormap a #GdkColormap.
         * @returns an Xlib <type>Colormap</type>.
         */
        function x11_colormap_get_xcolormap(colormap: Gdk.Colormap): xlib.Colormap;
        /**
         * Returns the X cursor belonging to a #GdkCursor.
         * @param cursor a #GdkCursor.
         * @returns an Xlib <type>Cursor</type>.
         */
        function x11_cursor_get_xcursor(cursor: Gdk.Cursor): xlib.Cursor;
        /**
         * Gets the startup notification ID for a display.
         * @param display a #GdkDisplay
         * @returns the startup notification ID for @display
         */
        function x11_display_get_startup_notification_id(display: Gdk.Display): string;
        /**
         * Returns the timestamp of the last user interaction on
         * `display`. The timestamp is taken from events caused
         * by user interaction such as key presses or pointer
         * movements. See gdk_x11_window_set_user_time().
         * @param display a #GdkDisplay
         * @returns the timestamp of the last user interaction
         */
        function x11_display_get_user_time(display: Gdk.Display): number;
        /**
         * Call XGrabServer() on `display`.
         * To ungrab the display again, use gdk_x11_display_ungrab().
         *
         * gdk_x11_display_grab()/gdk_x11_display_ungrab() calls can be nested.
         * @param display a #GdkDisplay
         */
        function x11_display_grab(display: Gdk.Display): void;
        /**
         * Sets the cursor theme from which the images for cursor
         * should be taken.
         *
         * If the windowing system supports it, existing cursors created
         * with gdk_cursor_new(), gdk_cursor_new_for_display() and
         * gdk_cursor_new_for_name() are updated to reflect the theme
         * change. Custom cursors constructed with gdk_cursor_new_from_pixmap()
         * or gdk_cursor_new_from_pixbuf() will have to be handled
         * by the application (GTK+ applications can learn about
         * cursor theme changes by listening for change notification
         * for the corresponding #GtkSetting).
         * @param display a #GdkDisplay
         * @param theme the name of the cursor theme to use, or %NULL to unset         a previously set value
         * @param size the cursor size to use, or 0 to keep the previous size
         */
        function x11_display_set_cursor_theme(display: Gdk.Display, theme: string, size: number): void;
        function x11_display_string_to_compound_text(
            display: Gdk.Display,
            str: string,
            encoding: Gdk.Atom,
            format: number,
            ctext: number,
            length: number,
        ): number;
        function x11_display_text_property_to_text_list(
            display: Gdk.Display,
            encoding: Gdk.Atom,
            format: number,
            text: number,
            length: number,
            list: string,
        ): number;
        /**
         * Ungrab `display` after it has been grabbed with
         * gdk_x11_display_grab().
         * @param display a #GdkDisplay
         */
        function x11_display_ungrab(display: Gdk.Display): void;
        function x11_display_utf8_to_compound_text(
            display: Gdk.Display,
            str: string,
            encoding: Gdk.Atom,
            format: number,
            ctext: number,
            length: number,
        ): boolean;
        /**
         * Returns the X resource (window or pixmap) belonging to a #GdkDrawable.
         * @param drawable a #GdkDrawable.
         * @returns the ID of @drawable's X resource.
         */
        function x11_drawable_get_xid(drawable: Gdk.Drawable): xlib.XID;
        function x11_font_get_name(font: Gdk.Font): string;
        function x11_font_get_xfont(font: Gdk.Font): any | null;
        function x11_free_compound_text(ctext: number): void;
        function x11_free_text_list(list: string): void;
        /**
         * Gets the root window of the default screen
         * (see gdk_x11_get_default_screen()).
         * @returns an Xlib <type>Window</type>.
         */
        function x11_get_default_root_xwindow(): xlib.Window;
        /**
         * Gets the default GTK+ screen number.
         * @returns returns the screen number specified by   the --display command line option or the DISPLAY environment   variable when gdk_init() calls XOpenDisplay().
         */
        function x11_get_default_screen(): number;
        function x11_get_server_time(window: Gdk.Window): number;
        /**
         * Returns the X atom for GDK's default display corresponding to `atom_name`.
         * This function caches the result, so if called repeatedly it is much
         * faster than XInternAtom(), which is a round trip to the server each time.
         * @param atom_name a string
         * @returns a X atom for GDK's default display.
         */
        function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
        /**
         * Returns the X atom for a #GdkDisplay corresponding to `atom_name`.
         * This function caches the result, so if called repeatedly it is much
         * faster than XInternAtom(), which is a round trip to the server each time.
         * @param display a #GdkDisplay
         * @param atom_name a string
         * @returns a X atom for a #GdkDisplay
         */
        function x11_get_xatom_by_name_for_display(display: Gdk.Display, atom_name: string): xlib.Atom;
        /**
         * Returns the name of an X atom for GDK's default display. This
         * function is meant mainly for debugging, so for convenience, unlike
         * <function>XAtomName()</function> and gdk_atom_name(), the result
         * doesn't need to be freed. Also, this function will never return %NULL,
         * even if `xatom` is invalid.
         * @param xatom an X atom for GDK's default display
         * @returns name of the X atom; this string is owned by GTK+,   so it shouldn't be modifed or freed.
         */
        function x11_get_xatom_name(xatom: xlib.Atom): string;
        /**
         * Returns the name of an X atom for its display. This
         * function is meant mainly for debugging, so for convenience, unlike
         * XAtomName() and gdk_atom_name(), the result doesn't need to
         * be freed.
         * @param display the #GdkDisplay where @xatom is defined
         * @param xatom an X atom
         * @returns name of the X atom; this string is owned by GDK,   so it shouldn't be modifed or freed.
         */
        function x11_get_xatom_name_for_display(display: Gdk.Display, xatom: xlib.Atom): string;
        /**
         * Call gdk_x11_display_grab() on the default display.
         * To ungrab the server again, use gdk_x11_ungrab_server().
         *
         * gdk_x11_grab_server()/gdk_x11_ungrab_server() calls can be nested.
         */
        function x11_grab_server(): void;
        function x11_register_standard_event_type(display: Gdk.Display, event_base: number, n_events: number): void;
        /**
         * Gets the XID of the specified output/monitor.
         * If the X server does not support version 1.2 of the RANDR
         * extension, 0 is returned.
         * @param screen a #GdkScreen
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the XID of the monitor
         */
        function x11_screen_get_monitor_output(screen: Gdk.Screen, monitor_num: number): xlib.XID;
        /**
         * Returns the index of a #GdkScreen.
         * @param screen a #GdkScreen.
         * @returns the position of @screen among the screens of   its display.
         */
        function x11_screen_get_screen_number(screen: Gdk.Screen): number;
        function x11_screen_get_window_manager_name(screen: Gdk.Screen): string;
        /**
         * Returns the screen of a #GdkScreen.
         * @param screen a #GdkScreen.
         * @returns an Xlib <type>Screen*</type>
         */
        function x11_screen_get_xscreen(screen: Gdk.Screen): xlib.Screen;
        /**
         * Looks up the #GdkVisual for a particular screen and X Visual ID.
         * @param screen a #GdkScreen.
         * @param xvisualid an X Visual ID.
         * @returns the #GdkVisual (owned by the screen   object), or %NULL if the visual ID wasn't found.
         */
        function x11_screen_lookup_visual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual;
        function x11_screen_supports_net_wm_hint(screen: Gdk.Screen, property: Gdk.Atom): boolean;
        /**
         * Sets the <literal>SM_CLIENT_ID</literal> property on the application's leader window so that
         * the window manager can save the application's state using the X11R6 ICCCM
         * session management protocol.
         *
         * See the X Session Management Library documentation for more information on
         * session management and the Inter-Client Communication Conventions Manual
         * @param sm_client_id the client id assigned by the session manager when the    connection was opened, or %NULL to remove the property.
         */
        function x11_set_sm_client_id(sm_client_id: string): void;
        /**
         * Ungrab the default display after it has been grabbed with
         * gdk_x11_grab_server().
         */
        function x11_ungrab_server(): void;
        /**
         * Moves the window to the correct workspace when running under a
         * window manager that supports multiple workspaces, as described
         * in the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended
         * Window Manager Hints</ulink>.  Will not do anything if the
         * window is already on all workspaces.
         * @param window a #GdkWindow
         */
        function x11_window_move_to_current_desktop(window: Gdk.Window): void;
        /**
         * The application can use this call to update the _NET_WM_USER_TIME
         * property on a toplevel window.  This property stores an Xserver
         * time which represents the time of the last user input event
         * received for this window.  This property may be used by the window
         * manager to alter the focus, stacking, and/or placement behavior of
         * windows when they are mapped depending on whether the new window
         * was created by a user action or is a "pop-up" window activated by a
         * timer or some other event.
         *
         * Note that this property is automatically updated by GDK, so this
         * function should only be used by applications which handle input
         * events bypassing GDK.
         * @param window A toplevel #GdkWindow
         * @param timestamp An XServer timestamp to which the property should be set
         */
        function x11_window_set_user_time(window: Gdk.Window, timestamp: number): void;
        /**
         * Returns the Gdk object associated with the given X id for the default
         * display.
         * @param xid an X id.
         * @returns the associated Gdk object, which may be a #GdkPixmap,     a #GdkWindow or a #GdkFont or %NULL if no object is associated     with the X id.
         */
        function xid_table_lookup(xid: xlib.XID): any | null;
        /**
         * Returns the GDK object associated with the given X id.
         * @param display the #GdkDisplay.
         * @param xid an X id.
         * @returns the associated Gdk object, which may be a #GdkPixmap,     a #GdkWindow or a #GdkFont or %NULL if no object is associated     with the X id.
         */
        function xid_table_lookup_for_display(display: Gdk.Display, xid: xlib.XID): any | null;
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

    export default GdkX11;
}

declare module 'gi://GdkX11' {
    import GdkX1120 from 'gi://GdkX11?version=2.0';
    export default GdkX1120;
}
// END
