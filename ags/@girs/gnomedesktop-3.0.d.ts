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
/// <reference path="./gdesktopenums-3.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GnomeDesktop?version=3.0' {
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
    import type GDesktopEnums from 'gi://GDesktopEnums?version=3.0';

    export namespace GnomeDesktop {
        /**
         * GnomeDesktop-3.0
         */

        export namespace DesktopThumbnailSize {
            export const $gtype: GObject.GType<DesktopThumbnailSize>;
        }

        enum DesktopThumbnailSize {
            NORMAL,
            LARGE,
            XLARGE,
            XXLARGE,
        }

        export namespace RRDpmsMode {
            export const $gtype: GObject.GType<RRDpmsMode>;
        }

        enum RRDpmsMode {
            ON,
            STANDBY,
            SUSPEND,
            OFF,
            UNKNOWN,
        }

        export namespace RRDpmsModeType {
            export const $gtype: GObject.GType<RRDpmsModeType>;
        }

        enum RRDpmsModeType {
            ON,
            STANDBY,
            SUSPEND,
            OFF,
            UNKNOWN,
        }
        class RRError extends GLib.Error {
            static $gtype: GObject.GType<RRError>;

            // Static fields

            static UNKNOWN: number;
            static NO_RANDR_EXTENSION: number;
            static RANDR_ERROR: number;
            static BOUNDS_ERROR: number;
            static CRTC_ASSIGNMENT: number;
            static NO_MATCHING_CONFIG: number;
            static NO_DPMS_EXTENSION: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        const DESKTOP_PLATFORM_VERSION: number;
        const RR_CONNECTOR_TYPE_PANEL: string;
        /**
         * Returns whether the thumbnail has the correct uri and mtime embedded in the
         * png options. This function is threadsafe and does no blocking I/O.
         * @param pixbuf an loaded thumbnail #GdkPixbuf
         * @param uri a uri
         * @param mtime the mtime
         * @returns TRUE if the thumbnail has the right @uri and @mtime
         */
        function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: never): boolean;
        /**
         * Returns the filename that a thumbnail of size `size` for `uri` would have.
         * This function is threadsafe and does no blocking I/O.
         * @param uri an uri
         * @param size a thumbnail size
         * @returns an absolute filename
         */
        function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize | null): string;
        /**
         * Gets all locales.
         * @returns a newly allocated %NULL-terminated string array containing the   all locales. Free with g_strfreev().
         */
        function get_all_locales(): string[];
        /**
         * Gets the country name for `code`. If `translation` is provided the
         * returned string is translated accordingly.
         * @param code an ISO 3166 code string
         * @param translation a locale string
         * @returns the country name. Caller takes ownership.
         */
        function get_country_from_code(code: string, translation?: string | null): string;
        /**
         * Gets the country description for `locale`. If `translation` is
         * provided the returned string is translated accordingly.
         * @param locale a locale string
         * @param translation a locale string
         * @returns the country description. Caller takes ownership.
         */
        function get_country_from_locale(locale: string, translation?: string | null): string;
        /**
         * Gets the default input source's type and identifier for a given
         * locale.
         * @param locale a locale string
         * @returns %TRUE if a input source exists or %FALSE otherwise.
         */
        function get_input_source_from_locale(locale: string): [boolean, string, string];
        /**
         * Gets the language name for `code`. If `translation` is provided the
         * returned string is translated accordingly.
         * @param code an ISO 639 code string
         * @param translation a locale string
         * @returns the language name. Caller takes ownership.
         */
        function get_language_from_code(code: string, translation?: string | null): string;
        /**
         * Gets the language description for `locale`. If `translation` is
         * provided the returned string is translated accordingly.
         * @param locale a locale string
         * @param translation a locale string
         * @returns the language description. Caller takes ownership.
         */
        function get_language_from_locale(locale: string, translation?: string | null): string;
        /**
         * Returns an integer with the major version of GNOME. Useful for
         * dynamic languages like Javascript or Python (static languages like
         * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
         * function doesn't exist, it can be presumed that the GNOME platform
         * version is 42 or previous.
         * @returns an integer with the major version of GNOME.
         */
        function get_platform_version(): number;
        /**
         * Gets a translation of the raw `modifier` string. If `translation`
         * is provided the returned string is translated accordingly.
         * @param modifier the modifier part of a locale name
         * @param translation a locale string
         * @returns the translated modifier string. Caller takes ownership.
         */
        function get_translated_modifier(modifier: string, translation?: string | null): string;
        /**
         * Returns %TRUE if there are translations for language `code`.
         * @param code an ISO 639 code string
         * @returns %TRUE if there are translations for language @code.
         */
        function language_has_translations(code: string): boolean;
        /**
         * Gets the normalized locale string in the form
         * [language[_country][.codeset][`modifier]`] for `name`.
         * @param locale a locale string
         * @returns normalized locale string. Caller takes ownership.
         */
        function normalize_locale(locale: string): string;
        /**
         * Extracts the various components of a locale string in XPG format.
         * ([language[_country][.codeset][`modifier]`]). See
         * http://en.wikipedia.org/wiki/Locale.
         * @param locale a locale string
         * @returns %TRUE if parsing was successful.
         */
        function parse_locale(locale: string): [boolean, string, string, string, string];
        /**
         * Returns the #GQuark that will be used for #GError values returned by the
         * GnomeRR API.
         * @returns a #GQuark used to identify errors coming from the GnomeRR API.
         */
        function rr_error_quark(): GLib.Quark;
        /**
         * If the current process is running inside a user systemd instance, then move
         * the launched PID into a transient scope. The given `name` will be used to
         * create a unit name. It should be the application ID or the executable in all
         * other cases. If a desktop-id is passed then the .desktop suffix will be
         * stripped.
         *
         * It is advisable to use this function every time where the started application
         * can be considered reasonably independent of the launching application. Placing
         * it in a scope creates proper separation between the programs rather than being
         * considered a single entity by systemd.
         *
         * It is always safe to call this function. Note that a successful return code
         * does not imply that a unit has been created. It solely means that no error
         * condition was hit sending the request.
         *
         * If `connection` is %NULL then g_dbus_get() will be called internally.
         *
         * Note that most callers will not need to handle errors. As such, it is normal
         * to pass a %NULL `callback`.
         * @param name Name for the application
         * @param pid The PID of the application
         * @param description A description to use for the unit, or %NULL
         * @param connection An #GDBusConnection to the session bus, or %NULL
         * @param cancellable #GCancellable to use
         */
        function start_systemd_scope(
            name: string,
            pid: number,
            description?: string | null,
            connection?: Gio.DBusConnection | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * If the current process is running inside a user systemd instance, then move
         * the launched PID into a transient scope. The given `name` will be used to
         * create a unit name. It should be the application ID or the executable in all
         * other cases. If a desktop-id is passed then the .desktop suffix will be
         * stripped.
         *
         * It is advisable to use this function every time where the started application
         * can be considered reasonably independent of the launching application. Placing
         * it in a scope creates proper separation between the programs rather than being
         * considered a single entity by systemd.
         *
         * It is always safe to call this function. Note that a successful return code
         * does not imply that a unit has been created. It solely means that no error
         * condition was hit sending the request.
         *
         * If `connection` is %NULL then g_dbus_get() will be called internally.
         *
         * Note that most callers will not need to handle errors. As such, it is normal
         * to pass a %NULL `callback`.
         * @param name Name for the application
         * @param pid The PID of the application
         * @param description A description to use for the unit, or %NULL
         * @param connection An #GDBusConnection to the session bus, or %NULL
         * @param cancellable #GCancellable to use
         * @param callback Callback to call when the operation is done
         */
        function start_systemd_scope(
            name: string,
            pid: number,
            description: string | null,
            connection: Gio.DBusConnection | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<string> | null,
        ): void;
        /**
         * If the current process is running inside a user systemd instance, then move
         * the launched PID into a transient scope. The given `name` will be used to
         * create a unit name. It should be the application ID or the executable in all
         * other cases. If a desktop-id is passed then the .desktop suffix will be
         * stripped.
         *
         * It is advisable to use this function every time where the started application
         * can be considered reasonably independent of the launching application. Placing
         * it in a scope creates proper separation between the programs rather than being
         * considered a single entity by systemd.
         *
         * It is always safe to call this function. Note that a successful return code
         * does not imply that a unit has been created. It solely means that no error
         * condition was hit sending the request.
         *
         * If `connection` is %NULL then g_dbus_get() will be called internally.
         *
         * Note that most callers will not need to handle errors. As such, it is normal
         * to pass a %NULL `callback`.
         * @param name Name for the application
         * @param pid The PID of the application
         * @param description A description to use for the unit, or %NULL
         * @param connection An #GDBusConnection to the session bus, or %NULL
         * @param cancellable #GCancellable to use
         * @param callback Callback to call when the operation is done
         */
        function start_systemd_scope(
            name: string,
            pid: number,
            description?: string | null,
            connection?: Gio.DBusConnection | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<string> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to create a transient scope that was
         * started with gnome_start_systemd_scope().
         *
         * Note that a successful return code does not imply that a unit has been
         * created. It solely means that no error condition was hit sending the request.
         * @param res A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;
        interface IdleMonitorWatchFunc {
            (monitor: IdleMonitor, id: number): void;
        }

        export namespace RRRotation {
            export const $gtype: GObject.GType<RRRotation>;
        }

        enum RRRotation {
            ROTATION_NEXT,
            ROTATION_0,
            ROTATION_90,
            ROTATION_180,
            ROTATION_270,
            REFLECT_X,
            REFLECT_Y,
        }
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
             * @param screen
             * @param dest_width
             * @param dest_height
             * @param frame_num
             * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
             */
            create_frame_thumbnail(
                factory: DesktopThumbnailFactory,
                screen: Gdk.Screen,
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
            create_surface(window: Gdk.Window, width: number, height: number): cairo.Surface;
            create_thumbnail(
                factory: DesktopThumbnailFactory,
                screen: Gdk.Screen,
                dest_width: number,
                dest_height: number,
            ): GdkPixbuf.Pixbuf;
            draw(dest: GdkPixbuf.Pixbuf): void;
            get_filename(): string;
            get_image_size(
                factory: DesktopThumbnailFactory,
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

        module BGCrossfade {
            // Signal callback interfaces

            interface Finished {
                (window: GObject.Object): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                height: number;
                width: number;
            }
        }

        class BGCrossfade extends GObject.Object {
            static $gtype: GObject.GType<BGCrossfade>;

            // Properties

            /**
             * When a crossfade is running, this is height of the fading
             * surface.
             */
            get height(): number;
            /**
             * When a crossfade is running, this is width of the fading
             * surface.
             */
            get width(): number;

            // Fields

            parent_object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<BGCrossfade.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](width: number, height: number): BGCrossfade;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'finished', callback: (_source: this, window: GObject.Object) => void): number;
            connect_after(signal: 'finished', callback: (_source: this, window: GObject.Object) => void): number;
            emit(signal: 'finished', window: GObject.Object): void;

            // Virtual methods

            vfunc_finished(window: Gdk.Window): void;

            // Methods

            /**
             * This function reveals whether or not `fade` is currently
             * running on a window.  See gnome_bg_crossfade_start() for
             * information on how to initiate a crossfade.
             * @returns %TRUE if fading, or %FALSE if not fading
             */
            is_started(): boolean;
            /**
             * Before initiating a crossfade with gnome_bg_crossfade_start()
             * a start and end surface have to be set.  This function sets
             * the surface shown at the end of the crossfade effect.
             * @param surface The cairo surface to fade to
             * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
             */
            set_end_surface(surface: cairo.Surface): boolean;
            /**
             * Before initiating a crossfade with gnome_bg_crossfade_start()
             * a start and end surface have to be set.  This function sets
             * the surface shown at the beginning of the crossfade effect.
             * @param surface The cairo surface to fade from
             * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
             */
            set_start_surface(surface: cairo.Surface): boolean;
            /**
             * This function initiates a quick crossfade between two surfaces on
             * the background of `window`.  Before initiating the crossfade both
             * gnome_bg_crossfade_start() and gnome_bg_crossfade_end() need to
             * be called. If animations are disabled, the crossfade is skipped,
             * and the window background is set immediately to the end surface.
             * @param window The #GdkWindow to draw crossfade on
             */
            start(window: Gdk.Window): void;
            /**
             * This function stops any in progress crossfades that may be
             * happening.  It's harmless to call this function if `fade` is
             * already stopped.
             */
            stop(): void;
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

        module DesktopThumbnailFactory {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class DesktopThumbnailFactory extends GObject.Object {
            static $gtype: GObject.GType<DesktopThumbnailFactory>;

            // Constructors

            constructor(properties?: Partial<DesktopThumbnailFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](size: DesktopThumbnailSize): DesktopThumbnailFactory;

            // Methods

            /**
             * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
             * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param uri the uri of a file
             * @param mime_type the mime type of the file
             * @param mtime the mtime of the file
             * @returns TRUE if the file can be thumbnailed.
             */
            can_thumbnail(uri: string, mime_type: string, mtime: never): boolean;
            /**
             * Creates a failed thumbnail for the file so that we don't try
             * to re-thumbnail the file later.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param uri the uri of a file
             * @param mtime the modification time of the file
             * @param cancellable a GCancellable object, or NULL
             * @returns TRUE if everything went fine; FALSE if there was an error.
             */
            create_failed_thumbnail(uri: string, mtime: never, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
             *
             * Since 43.0
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             */
            create_failed_thumbnail_async(
                uri: string,
                original_mtime: never,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
             *
             * Since 43.0
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            create_failed_thumbnail_async(
                uri: string,
                original_mtime: never,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
             *
             * Since 43.0
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            create_failed_thumbnail_async(
                uri: string,
                original_mtime: never,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean;
            /**
             * Tries to generate a thumbnail for the specified file. If it succeeds
             * it returns a pixbuf that can be used as a thumbnail.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param uri the uri of a file
             * @param mime_type the mime type of the file
             * @param cancellable a #GCancellable object or NULL
             * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise and error will be set
             */
            generate_thumbnail(uri: string, mime_type: string, cancellable?: Gio.Cancellable | null): GdkPixbuf.Pixbuf;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
             *
             * Since 43.0
             * @param uri the URI of a file
             * @param mime_type the MIME type of the file
             * @param cancellable a Cancellable object
             */
            generate_thumbnail_async(
                uri: string,
                mime_type: string,
                cancellable?: Gio.Cancellable | null,
            ): Promise<GdkPixbuf.Pixbuf>;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
             *
             * Since 43.0
             * @param uri the URI of a file
             * @param mime_type the MIME type of the file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            generate_thumbnail_async(
                uri: string,
                mime_type: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
             *
             * Since 43.0
             * @param uri the URI of a file
             * @param mime_type the MIME type of the file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            generate_thumbnail_async(
                uri: string,
                mime_type: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<GdkPixbuf.Pixbuf> | void;
            generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
            /**
             * Tries to locate an failed thumbnail for the file specified. Writing
             * and looking for failed thumbnails is important to avoid to try to
             * thumbnail e.g. broken images several times.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param uri the uri of a file
             * @param mtime the mtime of the file
             * @returns TRUE if there is a failed thumbnail for the file.
             */
            has_valid_failed_thumbnail(uri: string, mtime: never): boolean;
            /**
             * Tries to locate an existing thumbnail for the file specified.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param uri the uri of a file
             * @param mtime the mtime of the file
             * @returns The absolute path of the thumbnail, or %NULL if none exist.
             */
            lookup(uri: string, mtime: never): string;
            /**
             * Saves `thumbnail` at the right place. If the save fails a
             * failed thumbnail is written.
             *
             * Usage of this function is threadsafe and does blocking I/O.
             * @param thumbnail the thumbnail as a pixbuf
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a GCancellable object, or NULL
             * @returns TRUE if everything went fine; FALSE if there was an error.
             */
            save_thumbnail(
                thumbnail: GdkPixbuf.Pixbuf,
                uri: string,
                original_mtime: never,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
             *
             * Since 43.0
             * @param thumbnail the thumbnail as a pixbuf
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             */
            save_thumbnail_async(
                thumbnail: GdkPixbuf.Pixbuf,
                uri: string,
                original_mtime: never,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
             *
             * Since 43.0
             * @param thumbnail the thumbnail as a pixbuf
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            save_thumbnail_async(
                thumbnail: GdkPixbuf.Pixbuf,
                uri: string,
                original_mtime: never,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
             *
             * Since 43.0
             * @param thumbnail the thumbnail as a pixbuf
             * @param uri the uri of a file
             * @param original_mtime the modification time of the original file
             * @param cancellable a Cancellable object
             * @param callback a function that will be called when the task has ended
             */
            save_thumbnail_async(
                thumbnail: GdkPixbuf.Pixbuf,
                uri: string,
                original_mtime: never,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            save_thumbnail_finish(result: Gio.AsyncResult): boolean;
        }

        module IdleMonitor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        class IdleMonitor extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<IdleMonitor>;

            // Constructors

            constructor(properties?: Partial<IdleMonitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): IdleMonitor;

            // Methods

            add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;
            add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
            get_idletime(): number;
            /**
             * Removes an idle time watcher, previously added by
             * gnome_idle_monitor_add_idle_watch() or
             * gnome_idle_monitor_add_user_active_watch().
             * @param id A watch ID
             */
            remove_watch(id: number): void;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module PnpIds {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class PnpIds extends GObject.Object {
            static $gtype: GObject.GType<PnpIds>;

            // Constructors

            constructor(properties?: Partial<PnpIds.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PnpIds;

            // Methods

            /**
             * Find the full manufacturer name for the given PNP ID.
             * @param pnp_id the PNP ID to look for
             * @returns a new string representing the manufacturer name, or %NULL when not found.
             */
            get_pnp_id(pnp_id: string): string;
        }

        module RRConfig {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                screen: RRScreen;
            }
        }

        class RRConfig extends GObject.Object {
            static $gtype: GObject.GType<RRConfig>;

            // Properties

            set screen(val: RRScreen);

            // Constructors

            constructor(properties?: Partial<RRConfig.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_current(screen: RRScreen): RRConfig;

            // Methods

            applicable(screen: RRScreen): boolean;
            apply(screen: RRScreen): boolean;
            apply_persistent(screen: RRScreen): boolean;
            ensure_primary(): boolean;
            equal(config2: RRConfig): boolean;
            get_clone(): boolean;
            get_outputs(): RROutputInfo[];
            load_current(): boolean;
            match(config2: RRConfig): boolean;
            sanitize(): void;
            set_clone(clone: boolean): void;
        }

        module RROutputInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class RROutputInfo extends GObject.Object {
            static $gtype: GObject.GType<RROutputInfo>;

            // Constructors

            constructor(properties?: Partial<RROutputInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_aspect_ratio(): number;
            get_display_name(): string;
            /**
             * Get the geometry for the monitor connected to the specified output.
             * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
             */
            get_geometry(): [number, number, number, number];
            get_name(): string;
            get_preferred_height(): number;
            get_preferred_width(): number;
            get_primary(): boolean;
            get_product(): string;
            get_refresh_rate(): number;
            get_rotation(): RRRotation;
            get_serial(): string;
            get_underscanning(): boolean;
            get_vendor(): string;
            is_active(): boolean;
            is_connected(): boolean;
            is_primary_tile(): boolean;
            set_active(active: boolean): void;
            /**
             * Set the geometry for the monitor connected to the specified output.
             * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
             * @param x x offset for monitor
             * @param y y offset for monitor
             * @param width monitor width
             * @param height monitor height
             */
            set_geometry(x: number, y: number, width: number, height: number): void;
            set_primary(primary: boolean): void;
            set_refresh_rate(rate: number): void;
            set_rotation(rotation: RRRotation | null): void;
            set_underscanning(underscanning: boolean): void;
            supports_rotation(rotation: RRRotation | null): boolean;
        }

        module RRScreen {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface OutputConnected {
                (output?: any | null): void;
            }

            interface OutputDisconnected {
                (output?: any | null): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                dpms_mode: RRDpmsModeType;
                dpmsMode: RRDpmsModeType;
                gdk_screen: Gdk.Screen;
                gdkScreen: Gdk.Screen;
            }
        }

        class RRScreen extends GObject.Object implements Gio.AsyncInitable<RRScreen>, Gio.Initable {
            static $gtype: GObject.GType<RRScreen>;

            // Properties

            get dpms_mode(): RRDpmsModeType;
            set dpms_mode(val: RRDpmsModeType);
            get dpmsMode(): RRDpmsModeType;
            set dpmsMode(val: RRDpmsModeType);
            get gdk_screen(): Gdk.Screen;
            get gdkScreen(): Gdk.Screen;

            // Constructors

            constructor(properties?: Partial<RRScreen.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](screen: Gdk.Screen): RRScreen;

            static new_finish(result: Gio.AsyncResult): RRScreen;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'output-connected', callback: (_source: this, output: any | null) => void): number;
            connect_after(signal: 'output-connected', callback: (_source: this, output: any | null) => void): number;
            emit(signal: 'output-connected', output?: any | null): void;
            connect(signal: 'output-disconnected', callback: (_source: this, output: any | null) => void): number;
            connect_after(signal: 'output-disconnected', callback: (_source: this, output: any | null) => void): number;
            emit(signal: 'output-disconnected', output?: any | null): void;

            // Static methods

            static new_async(screen: Gdk.Screen, callback?: Gio.AsyncReadyCallback<RRScreen> | null): void;

            // Virtual methods

            vfunc_changed(): void;
            vfunc_output_connected(output: RROutput): void;
            vfunc_output_disconnected(output: RROutput): void;

            // Methods

            get_crtc_by_id(id: number): RRCrtc;
            get_dpms_mode(): [boolean, RRDpmsMode];
            get_output_by_id(id: number): RROutput;
            get_output_by_name(name: string): RROutput;
            /**
             * Get the ranges of the screen
             */
            get_ranges(): [number, number, number, number];
            /**
             * List available XRandR clone modes
             */
            list_clone_modes(): RRMode[];
            /**
             * List all CRTCs
             */
            list_crtcs(): RRCrtc[];
            /**
             * List available XRandR modes
             */
            list_modes(): RRMode[];
            /**
             * List all outputs
             */
            list_outputs(): RROutput[];
            /**
             * Refreshes the screen configuration, and calls the screen's callback if it
             * exists and if the screen's configuration changed.
             * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
             */
            refresh(): boolean;
            /**
             * This method also disables the DPMS timeouts.
             * @param mode
             */
            set_dpms_mode(mode: RRDpmsMode | null): boolean;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): RRScreen;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module WallClock {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                clock: string;
                force_seconds: boolean;
                forceSeconds: boolean;
                time_only: boolean;
                timeOnly: boolean;
                timezone: GLib.TimeZone;
            }
        }

        class WallClock extends GObject.Object {
            static $gtype: GObject.GType<WallClock>;

            // Properties

            /**
             * A formatted string representing the current clock display.
             */
            get clock(): string;
            /**
             * If %TRUE, the formatted clock will always have seconds precision and the
             * 'clock' property will always be updated every second, irrespective of
             * system configuration.
             */
            get force_seconds(): boolean;
            set force_seconds(val: boolean);
            /**
             * If %TRUE, the formatted clock will always have seconds precision and the
             * 'clock' property will always be updated every second, irrespective of
             * system configuration.
             */
            get forceSeconds(): boolean;
            set forceSeconds(val: boolean);
            /**
             * If %TRUE, the formatted clock will never include a date or the
             * day of the week, irrespective of configuration.
             */
            get time_only(): boolean;
            set time_only(val: boolean);
            /**
             * If %TRUE, the formatted clock will never include a date or the
             * day of the week, irrespective of configuration.
             */
            get timeOnly(): boolean;
            set timeOnly(val: boolean);
            /**
             * The timezone used for this clock
             */
            get timezone(): GLib.TimeZone;

            // Fields

            parent_object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<WallClock.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): WallClock;

            // Methods

            /**
             * Returns the string representing the current time of this clock
             * according to the user settings.
             * @returns the time of the clock as a string.      This string points to internally allocated storage and      must not be freed, modified or stored.
             */
            get_clock(): string;
            /**
             * Returns the current local time zone used by this clock.
             * @returns the #GTimeZone of the clock.
             */
            get_timezone(): GLib.TimeZone;
            string_for_datetime(
                now: GLib.DateTime,
                clock_format: GDesktopEnums.ClockFormat | null,
                show_weekday: boolean,
                show_full_date: boolean,
                show_seconds: boolean,
            ): string;
        }

        module XkbInfo {
            // Signal callback interfaces

            interface LayoutsChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class XkbInfo extends GObject.Object {
            static $gtype: GObject.GType<XkbInfo>;

            // Fields

            parent_object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<XkbInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): XkbInfo;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'layouts-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'layouts-changed', callback: (_source: this) => void): number;
            emit(signal: 'layouts-changed'): void;

            // Methods

            description_for_group(group_id: string): string;
            description_for_option(group_id: string, id: string): string;
            /**
             * Returns a list of all layout identifiers we know about.
             * @returns the list of layout names. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_all_layouts(): string[];
            /**
             * Returns a list of all option group identifiers we know about.
             * @returns the list of option group ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_all_option_groups(): string[];
            /**
             * Returns a list of all languages supported by a layout, given by
             * `layout_id`.
             * @param layout_id a layout identifier
             * @returns the list of ISO 639 code strings. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_languages_for_layout(layout_id: string): string[];
            /**
             * Retrieves information about a layout. Both `display_name` and
             * `short_name` are suitable to show in UIs and might be localized if
             * translations are available.
             *
             * Some layouts don't provide a short name (2 or 3 letters) or don't
             * specify a XKB variant, in those cases `short_name` or `xkb_variant`
             * are empty strings, i.e. "".
             *
             * If the given layout doesn't exist the return value is %FALSE and
             * all the (out) parameters are set to %NULL.
             * @param id layout's identifier about which to retrieve the info
             * @returns %TRUE if the layout exists or %FALSE otherwise.
             */
            get_layout_info(id: string): [boolean, string, string, string, string];
            /**
             * Returns a list of all layout identifiers we know about for
             * `country_code`.
             * @param country_code an ISO 3166 code string
             * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_layouts_for_country(country_code: string): string[];
            /**
             * Returns a list of all layout identifiers we know about for
             * `language_code`.
             * @param language_code an ISO 639 code string
             * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_layouts_for_language(language_code: string): string[];
            /**
             * Returns a list of all option identifiers we know about for group
             * `group_id`.
             * @param group_id group's identifier about which to retrieve the options
             * @returns the list of option ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
             */
            get_options_for_group(group_id: string): string[];
        }

        type BGClass = typeof BG;
        type BGCrossfadeClass = typeof BGCrossfade;
        abstract class BGCrossfadePrivate {
            static $gtype: GObject.GType<BGCrossfadePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BGSlideShowClass = typeof BGSlideShow;
        abstract class BGSlideShowPrivate {
            static $gtype: GObject.GType<BGSlideShowPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DesktopThumbnailFactoryClass = typeof DesktopThumbnailFactory;
        abstract class DesktopThumbnailFactoryPrivate {
            static $gtype: GObject.GType<DesktopThumbnailFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type IdleMonitorClass = typeof IdleMonitor;
        abstract class IdleMonitorPrivate {
            static $gtype: GObject.GType<IdleMonitorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PnpIdsClass = typeof PnpIds;
        abstract class PnpIdsPrivate {
            static $gtype: GObject.GType<PnpIdsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class RRCTM {
            static $gtype: GObject.GType<RRCTM>;

            // Fields

            matrix: number[];

            // Constructors

            constructor(
                properties?: Partial<{
                    matrix: number[];
                }>,
            );
            _init(...args: any[]): void;
        }

        type RRConfigClass = typeof RRConfig;
        abstract class RRConfigPrivate {
            static $gtype: GObject.GType<RRConfigPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class RRCrtc {
            static $gtype: GObject.GType<RRCrtc>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            can_drive_output(output: RROutput): boolean;
            get_current_mode(): RRMode;
            get_current_rotation(): RRRotation;
            get_gamma(size: number): [boolean, number, number, number];
            get_id(): number;
            get_position(): [number, number];
            get_rotations(): RRRotation;
            set_gamma(size: number, red: number, green: number, blue: number): boolean;
            supports_rotation(rotation: RRRotation | null): boolean;
        }

        abstract class RRMode {
            static $gtype: GObject.GType<RRMode>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            get_freq(): number;
            get_freq_f(): number;
            get_height(): number;
            get_id(): number;
            get_is_interlaced(): boolean;
            /**
             * Returns TRUE if this mode is a tiled
             * mode created for span a tiled monitor.
             */
            get_is_tiled(): boolean;
            get_width(): number;
        }

        abstract class RROutput {
            static $gtype: GObject.GType<RROutput>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            can_clone(clone: RROutput): boolean;
            get_backlight(): number;
            get_crtc(): RRCrtc;
            get_current_mode(): RRMode;
            get_display_name(): string;
            get_edid_data(size: number): number;
            get_id(): number;
            get_ids_from_edid(): [string, string, string];
            get_is_primary(): boolean;
            get_is_underscanning(): boolean;
            get_min_backlight_step(): number;
            get_name(): string;
            get_physical_size(): [number, number];
            get_position(): [number, number];
            get_possible_crtcs(): RRCrtc[];
            get_preferred_mode(): RRMode;
            is_builtin_display(): boolean;
            list_modes(): RRMode[];
            set_backlight(value: number): boolean;
            set_color_transform(value: RRCTM): boolean;
            supports_color_transform(): boolean;
            supports_mode(mode: RRMode): boolean;
            supports_underscanning(): boolean;
        }

        type RROutputInfoClass = typeof RROutputInfo;
        abstract class RROutputInfoPrivate {
            static $gtype: GObject.GType<RROutputInfoPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RRScreenClass = typeof RRScreen;
        abstract class RRScreenPrivate {
            static $gtype: GObject.GType<RRScreenPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WallClockClass = typeof WallClock;
        abstract class WallClockPrivate {
            static $gtype: GObject.GType<WallClockPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type XkbInfoClass = typeof XkbInfo;
        abstract class XkbInfoPrivate {
            static $gtype: GObject.GType<XkbInfoPrivate>;

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

    export default GnomeDesktop;
}

declare module 'gi://GnomeDesktop' {
    import GnomeDesktop30 from 'gi://GnomeDesktop?version=3.0';
    export default GnomeDesktop30;
}
// END
