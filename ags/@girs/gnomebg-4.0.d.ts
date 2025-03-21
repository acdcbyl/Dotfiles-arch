/// <reference path="./gnomedesktop-4.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./gdesktopenums-3.0.d.ts" />
/// <reference path="./gdk-4.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GnomeBG?version=4.0' {
    // Module dependencies
    import type GnomeDesktop from 'gi://GnomeDesktop?version=4.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type GDesktopEnums from 'gi://GDesktopEnums?version=3.0';
    import type Gdk from 'gi://Gdk?version=4.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';

    export namespace GnomeBG {
        /**
         * GnomeBG-4.0
         */

        module BG {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface Transitioned {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BG extends GObject.Object {
            static $gtype: GObject.GType<BG>;

            // Constructors

            constructor(properties?: Partial<BG.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): BG;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'transitioned', callback: (_source: this) => void): number;
            connect_after(signal: 'transitioned', callback: (_source: this) => void): number;
            emit(signal: 'transitioned'): void;

            // Methods

            changes_with_time(): boolean;
            /**
             * Creates a thumbnail for a certain frame, where 'frame' is somewhat
             * vaguely defined as 'suitable point to show while single-stepping
             * through the slideshow'.
             * @param factory
             * @param screen_area
             * @param dest_width
             * @param dest_height
             * @param frame_num
             * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
             */
            create_frame_thumbnail(
                factory: GnomeDesktop.DesktopThumbnailFactory,
                screen_area: cairo.RectangleInt,
                dest_width: number,
                dest_height: number,
                frame_num: number,
            ): GdkPixbuf.Pixbuf;
            /**
             * Create a surface that can be set as background for `window`.
             * @param window
             * @param width
             * @param height
             * @returns %NULL on error (e.g. out of X connections)
             */
            create_surface(window: Gdk.Surface, width: number, height: number): cairo.Surface;
            create_thumbnail(
                factory: GnomeDesktop.DesktopThumbnailFactory,
                screen_area: cairo.RectangleInt,
                dest_width: number,
                dest_height: number,
            ): GdkPixbuf.Pixbuf;
            draw(dest: GdkPixbuf.Pixbuf): void;
            get_filename(): string;
            get_image_size(
                factory: GnomeDesktop.DesktopThumbnailFactory,
                best_width: number,
                best_height: number,
                width: number,
                height: number,
            ): boolean;
            get_placement(): GDesktopEnums.BackgroundStyle;
            get_rgba(type: GDesktopEnums.BackgroundShading | null, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
            has_multiple_sizes(): boolean;
            is_dark(dest_width: number, dest_height: number): boolean;
            load_from_preferences(settings: Gio.Settings): void;
            save_to_preferences(settings: Gio.Settings): void;
            set_filename(filename: string): void;
            set_placement(placement: GDesktopEnums.BackgroundStyle | null): void;
            set_rgba(type: GDesktopEnums.BackgroundShading | null, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
        }

        module BGSlideShow {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                file: Gio.File;
                has_multiple_sizes: boolean;
                hasMultipleSizes: boolean;
                start_time: number;
                startTime: number;
                total_duration: number;
                totalDuration: number;
            }
        }

        class BGSlideShow extends GObject.Object {
            static $gtype: GObject.GType<BGSlideShow>;

            // Properties

            get file(): Gio.File;
            get has_multiple_sizes(): boolean;
            get hasMultipleSizes(): boolean;
            get start_time(): number;
            get startTime(): number;
            get total_duration(): number;
            get totalDuration(): number;

            // Fields

            parent_object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<BGSlideShow.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string): BGSlideShow;

            // Methods

            /**
             * Returns the current slides progress.
             * @param width monitor width
             * @param height monitor height
             */
            get_current_slide(width: number, height: number): [number, number, boolean, string, string];
            /**
             * gets whether or not the slide show has multiple sizes for different monitors
             * @returns %TRUE if multiple sizes
             */
            get_has_multiple_sizes(): boolean;
            /**
             * Returns number of slides in slide show
             */
            get_num_slides(): number;
            /**
             * Retrieves slide by frame number
             * @param frame_number frame number
             * @param width monitor width
             * @param height monitor height
             * @returns %TRUE if successful
             */
            get_slide(
                frame_number: number,
                width: number,
                height: number,
            ): [boolean, number, number, boolean, string, string];
            /**
             * gets the start time of the slide show
             * @returns a timestamp
             */
            get_start_time(): number;
            /**
             * gets the total duration of the slide show
             * @returns a timestamp
             */
            get_total_duration(): number;
            /**
             * Tries to load the slide show.
             * @returns %TRUE if successful
             */
            load(): boolean;
            /**
             * Tries to load the slide show asynchronously.
             * @param cancellable a #GCancellable
             * @param callback the callback
             */
            load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        }

        type BGClass = typeof BG;
        type BGSlideShowClass = typeof BGSlideShow;
        abstract class BGSlideShowPrivate {
            static $gtype: GObject.GType<BGSlideShowPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

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

    export default GnomeBG;
}

declare module 'gi://GnomeBG' {
    import GnomeBG40 from 'gi://GnomeBG?version=4.0';
    export default GnomeBG40;
}
// END
