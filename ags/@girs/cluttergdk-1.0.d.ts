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
/// <reference path="./clutter-1.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./gl-1.0.d.ts" />
/// <reference path="./coglpango-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./cogl-1.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://ClutterGdk?version=1.0' {
    // Module dependencies
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
    import type Clutter from 'gi://Clutter?version=1.0';
    import type Json from 'gi://Json?version=1.0';
    import type GL from 'gi://GL?version=1.0';
    import type CoglPango from 'gi://CoglPango?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Cogl from 'gi://Cogl?version=1.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace ClutterGdk {
        /**
         * ClutterGdk-1.0
         */

        /**
         * Disable the event retrieval in Clutter.
         *
         * Callers of this function have to set up an event filter using the
         * GDK API, and call clutter_gdk_handle_event().
         *
         * This function should only be used when embedding Clutter into
         * a GDK based toolkit.
         */
        function disable_event_retrieval(): void;
        /**
         * Retrieves the pointer to the default display.
         * @returns the default display
         */
        function get_default_display(): Gdk.Display;
        /**
         * Gets the stage for a particular X window.
         * @param window a #GtkWindow
         * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
         */
        function get_stage_from_window(window: Gdk.Window): Clutter.Stage;
        /**
         * Gets the stages GdkWindow.
         * @param stage a #ClutterStage
         * @returns A GdkWindow* for the stage window.
         */
        function get_stage_window(stage: Clutter.Stage): Gdk.Window;
        /**
         * Retrieves the #GdkVisual used by Clutter.
         *
         * This function should be used when embedding Clutter inside GDK-based
         * foreign toolkits, to ensure that the visual applied to the #GdkWindow
         * used to render the #ClutterStage is the correct one.
         * @returns a #GdkVisual instance
         */
        function get_visual(): Gdk.Visual;
        /**
         * This function processes a single GDK event; it can be used to hook
         * into external event processing
         * @param event a #GdkEvent
         * @returns #GdkFilterReturn. %GDK_FILTER_REMOVE indicates that  Clutter has internally handled the event and the caller should do  no further processing. %GDK_FILTER_CONTINUE indicates that Clutter  is either not interested in the event, or has used the event to  update internal state without taking any exclusive action.  %GDK_FILTER_TRANSLATE will not occur.
         */
        function handle_event(event: Gdk.Event): Gdk.FilterReturn;
        /**
         * Sets the display connection Clutter should use; must be called
         * before clutter_init(), clutter_init_with_args() or other functions
         * pertaining Clutter's initialization process.
         *
         * If you are parsing the command line arguments by retrieving Clutter's
         * #GOptionGroup with clutter_get_option_group() and calling
         * g_option_context_parse() yourself, you should also call
         * clutter_gdk_set_display() before g_option_context_parse().
         * @param display pointer to a GDK display connection.
         */
        function set_display(display: Gdk.Display): void;
        /**
         * Target the #ClutterStage to use an existing external #GdkWindow
         * @param stage a #ClutterStage
         * @param window an existing #GdkWindow
         * @returns %TRUE if foreign window is valid
         */
        function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean;
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

    export default ClutterGdk;
}

declare module 'gi://ClutterGdk' {
    import ClutterGdk10 from 'gi://ClutterGdk?version=1.0';
    export default ClutterGdk10;
}
// END
