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

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Eog?version=3.0' {
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

    export namespace Eog {
        /**
         * Eog-3.0
         */

        class ImageError extends GLib.Error {
            static $gtype: GObject.GType<ImageError>;

            // Static fields

            static SAVE_NOT_LOCAL: number;
            static NOT_LOADED: number;
            static NOT_SAVED: number;
            static VFS: number;
            static FILE_EXISTS: number;
            static TMP_FILE_FAILED: number;
            static GENERIC: number;
            static UNKNOWN: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace ImageMetadataStatus {
            export const $gtype: GObject.GType<ImageMetadataStatus>;
        }

        enum ImageMetadataStatus {
            NOT_READ,
            NOT_AVAILABLE,
            READY,
        }

        export namespace ImageStatus {
            export const $gtype: GObject.GType<ImageStatus>;
        }

        enum ImageStatus {
            UNKNOWN,
            LOADING,
            LOADED,
            SAVING,
            FAILED,
        }

        export namespace JobPriority {
            export const $gtype: GObject.GType<JobPriority>;
        }

        enum JobPriority {
            PRIORITY_HIGH,
            PRIORITY_MEDIUM,
            PRIORITY_LOW,
            N_PRIORITIES,
        }

        export namespace ListStoreColumn {
            export const $gtype: GObject.GType<ListStoreColumn>;
        }

        enum ListStoreColumn {
            THUMBNAIL,
            THUMB_SET,
            EOG_IMAGE,
            EOG_JOB,
            NUM_COLUMNS,
        }

        export namespace ThumbNavMode {
            export const $gtype: GObject.GType<ThumbNavMode>;
        }

        enum ThumbNavMode {
            ONE_ROW,
            ONE_COLUMN,
            MULTIPLE_ROWS,
            MULTIPLE_COLUMNS,
        }

        export namespace ThumbViewSelectionChange {
            export const $gtype: GObject.GType<ThumbViewSelectionChange>;
        }

        enum ThumbViewSelectionChange {
            CURRENT,
            LEFT,
            RIGHT,
            FIRST,
            LAST,
            RANDOM,
        }

        export namespace TransformType {
            export const $gtype: GObject.GType<TransformType>;
        }

        enum TransformType {
            NONE,
            ROT_90,
            ROT_180,
            ROT_270,
            FLIP_HORIZONTAL,
            FLIP_VERTICAL,
            TRANSPOSE,
            TRANSVERSE,
        }
        /**
         * Used to define how transparent image parts are drawn.
         */

        /**
         * Used to define how transparent image parts are drawn.
         */
        export namespace TransparencyStyle {
            export const $gtype: GObject.GType<TransparencyStyle>;
        }

        enum TransparencyStyle {
            /**
             * Use the background color of the current UI theme
             */
            BACKGROUND,
            /**
             * Show transparent parts as a checkerboard pattern
             */
            CHECKED,
            /**
             * Show transparent parts in a user defined color
             *                    (see #EogScrollView:transparency-color )
             */
            COLOR,
        }
        class UCError extends GLib.Error {
            static $gtype: GObject.GType<UCError>;

            // Static fields

            static INVALID_UNICODE: number;
            static INVALID_CHARACTER: number;
            static EQUAL_FILENAMES: number;
            static UNKNOWN: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace UCType {
            export const $gtype: GObject.GType<UCType>;
        }

        enum UCType {
            STRING,
            FILENAME,
            COUNTER,
            COMMENT,
            DATE,
            TIME,
            DAY,
            MONTH,
            YEAR,
            HOUR,
            MINUTE,
            SECOND,
            END,
        }

        export namespace WindowError {
            export const $gtype: GObject.GType<WindowError>;
        }

        enum WindowError {
            CONTROL_NOT_FOUND,
            UI_NOT_FOUND,
            NO_PERSIST_FILE_INTERFACE,
            IO,
            TRASH_NOT_FOUND,
            GENERIC,
            UNKNOWN,
        }

        export namespace WindowGalleryPos {
            export const $gtype: GObject.GType<WindowGalleryPos>;
        }

        enum WindowGalleryPos {
            BOTTOM,
            LEFT,
            TOP,
            RIGHT,
        }

        export namespace WindowMode {
            export const $gtype: GObject.GType<WindowMode>;
        }

        enum WindowMode {
            UNKNOWN,
            NORMAL,
            FULLSCREEN,
            SLIDESHOW,
        }
        /**
         * Used to determine the zooming behaviour of an #EogScrollView.
         */

        /**
         * Used to determine the zooming behaviour of an #EogScrollView.
         */
        export namespace ZoomMode {
            export const $gtype: GObject.GType<ZoomMode>;
        }

        enum ZoomMode {
            /**
             * Use the currently set zoom factor to display the image
             *                      (see eog_scroll_view_set_zoom()).
             */
            FREE,
            /**
             * If an image is to large for the window,
             *                               zoom out until the image is fully visible.
             *                               This will never zoom in on smaller images.
             */
            SHRINK_TO_FIT,
        }
        const FILE_FORMAT_JPEG: string;
        const IMAGE_DATA_ALL: number;
        const LIST_STORE_THUMB_SIZE: number;
        const SCROLL_VIEW_MAX_ZOOM_FACTOR: number;
        const SCROLL_VIEW_MIN_ZOOM_FACTOR: number;
        const THUMBNAIL_ORIGINAL_HEIGHT: string;
        const THUMBNAIL_ORIGINAL_WIDTH: string;
        function debug(section: Debug | null, file: string, line: number, _function: string): void;
        function debug_init(): void;
        /**
         * Takes a date string formatted after Exif specifications and generates a
         * more readable, possibly localized, string out of it.
         * @param date a date string following Exif specifications
         * @returns a newly allocated date string formatted according to the current locale.
         */
        function exif_util_format_date(date: string): string;
        function image_error_quark(): GLib.Quark;
        function marshal_VOID__INT_INT(
            closure: GObject.Closure,
            return_value: GObject.Value | any,
            n_param_values: number,
            param_values: GObject.Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * Adds a frame to `thumbnail`
         * @param thumbnail a #GdkPixbuf
         * @returns a new #GdkPixbuf, storing @thumbnail nicely framed.
         */
        function thumbnail_add_frame(thumbnail: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
        /**
         * Ensures a pixbuf fits a given `dimension`
         * @param thumbnail a #GdkPixbuf
         * @param dimension the maximum width or height desired
         * @returns a new #GdkPixbuf
         */
        function thumbnail_fit_to_size(thumbnail: GdkPixbuf.Pixbuf, dimension: number): GdkPixbuf.Pixbuf;
        function thumbnail_init(): void;
        /**
         * Loads the thumbnail for `image`. In case of error, %NULL is returned
         * and `error` is set.
         * @param image a #EogImage
         * @returns a new #GdkPixbuf with the thumbnail for @image or %NULL in case of error.
         */
        function thumbnail_load(image: Image): GdkPixbuf.Pixbuf;
        function uc_error_quark(): GLib.Quark;
        type ExifData = object | null;

        export namespace Debug {
            export const $gtype: GObject.GType<Debug>;
        }

        enum Debug {
            NO_DEBUG,
            WINDOW,
            VIEW,
            JOBS,
            THUMBNAIL,
            IMAGE_DATA,
            IMAGE_LOAD,
            IMAGE_SAVE,
            LIST_STORE,
            PREFERENCES,
            PRINTING,
            LCMS,
            PLUGINS,
        }

        export namespace ImageData {
            export const $gtype: GObject.GType<ImageData>;
        }

        enum ImageData {
            IMAGE,
            DIMENSION,
            EXIF,
            XMP,
        }

        export namespace StartupFlags {
            export const $gtype: GObject.GType<StartupFlags>;
        }

        enum StartupFlags {
            FULLSCREEN,
            SLIDE_SHOW,
            DISABLE_GALLERY,
            SINGLE_WINDOW,
        }
        module Application {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Application.ConstructorProps,
                    Gio.ActionGroup.ConstructorProps,
                    Gio.ActionMap.ConstructorProps {}
        }

        class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
            static $gtype: GObject.GType<Application>;

            // Fields

            base_instance: Gtk.Application;

            // Constructors

            constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns a singleton instance of #EogApplication currently running.
             * If not running yet, it will create one.
             */
            static get_instance(): Application;

            // Methods

            close_all_windows(): boolean;
            /**
             * Opens a list of files in a #EogWindow. If an #EogWindow displaying the first
             * image in the list is already open, this will be used. Otherwise, an empty
             * #EogWindow is used, either already existing or newly created.
             * If the EOG_STARTUP_SINGLE_WINDOW flag is set, the files are opened in the
             * first #EogWindow and no new one is opened.
             * @param file_list A list of #GFile<!-- -->s.
             * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
             * @param flags A set of #EogStartupFlags influencing a new windows' state.
             * @returns Currently always %TRUE.
             */
            open_file_list(file_list: Gio.File[], timestamp: number, flags: StartupFlags | null): boolean;
            /**
             * Opens a list of images, from a list of URIs. See
             * eog_application_open_file_list() for details.
             * @param uri_list A list of URIs.
             * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
             * @param flags A set of #EogStartupFlags influencing a new windows' state.
             * @returns Currently always %TRUE.
             */
            open_uri_list(uri_list: string[], timestamp: number, flags: StartupFlags | null): boolean;
            /**
             * Opens a list of images, from a list of URI strings. See
             * eog_application_open_file_list() for details.
             * @param uris A #GList of URI strings.
             * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
             * @param flags A set of #EogStartupFlags influencing a new windows' state.
             * @returns Currently always %TRUE.
             */
            open_uris(uris: string, timestamp: number, flags: StartupFlags | null): boolean;
            /**
             * Opens and presents an empty #EogWindow to the user. If there is
             * an empty window already open, this will be used. Otherwise, a
             * new one will be instantiated.
             * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
             * @param flags A set of #EogStartupFlags influencing a new windows' state.
             * @returns %FALSE if @application is invalid, %TRUE otherwise
             */
            open_window(timestamp: number, flags: StartupFlags | null): boolean;

            // Inherited methods
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

        module ClipboardHandler {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                pixbuf: GdkPixbuf.Pixbuf;
                uri: string;
            }
        }

        class ClipboardHandler extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<ClipboardHandler>;

            // Properties

            get pixbuf(): GdkPixbuf.Pixbuf;
            get uri(): string;

            // Constructors

            constructor(properties?: Partial<ClipboardHandler.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](img: Image): ClipboardHandler;

            // Methods

            copy_to_clipboard(clipboard: Gtk.Clipboard): void;
        }

        module DetailsDialog {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Window.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        class DetailsDialog extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<DetailsDialog>;

            // Fields

            // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
            window: Gtk.Window;

            // Constructors

            constructor(properties?: Partial<DetailsDialog.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](parent: Gtk.Window): DetailsDialog;
            // Conflicted with Gtk.Window.new

            static ['new'](...args: never[]): any;

            // Methods

            update(image: Image): void;

            // Inherited methods
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

        module FileChooser {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.FileChooserDialog.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.FileChooser.ConstructorProps {}
        }

        class FileChooser
            extends Gtk.FileChooserDialog
            implements Atk.ImplementorIface, Gtk.Buildable, Gtk.FileChooser
        {
            static $gtype: GObject.GType<FileChooser>;

            // Constructors

            constructor(properties?: Partial<FileChooser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](action: Gtk.FileChooserAction): FileChooser;
            // Conflicted with Gtk.Dialog.new

            static ['new'](...args: never[]): any;

            // Methods

            get_format(): GdkPixbuf.PixbufFormat;

            // Inherited properties
            get action(): Gtk.FileChooserAction;
            set action(val: Gtk.FileChooserAction);
            /**
             * Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode
             * will offer the user to create new folders.
             */
            get create_folders(): boolean;
            set create_folders(val: boolean);
            /**
             * Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode
             * will offer the user to create new folders.
             */
            get createFolders(): boolean;
            set createFolders(val: boolean);
            /**
             * Whether a file chooser in %GTK_FILE_CHOOSER_ACTION_SAVE mode
             * will present an overwrite confirmation dialog if the user
             * selects a file name that already exists.
             */
            get do_overwrite_confirmation(): boolean;
            set do_overwrite_confirmation(val: boolean);
            /**
             * Whether a file chooser in %GTK_FILE_CHOOSER_ACTION_SAVE mode
             * will present an overwrite confirmation dialog if the user
             * selects a file name that already exists.
             */
            get doOverwriteConfirmation(): boolean;
            set doOverwriteConfirmation(val: boolean);
            get extra_widget(): Gtk.Widget;
            set extra_widget(val: Gtk.Widget);
            get extraWidget(): Gtk.Widget;
            set extraWidget(val: Gtk.Widget);
            get filter(): Gtk.FileFilter;
            set filter(val: Gtk.FileFilter);
            get local_only(): boolean;
            set local_only(val: boolean);
            get localOnly(): boolean;
            set localOnly(val: boolean);
            get preview_widget(): Gtk.Widget;
            set preview_widget(val: Gtk.Widget);
            get previewWidget(): Gtk.Widget;
            set previewWidget(val: Gtk.Widget);
            get preview_widget_active(): boolean;
            set preview_widget_active(val: boolean);
            get previewWidgetActive(): boolean;
            set previewWidgetActive(val: boolean);
            get select_multiple(): boolean;
            set select_multiple(val: boolean);
            get selectMultiple(): boolean;
            set selectMultiple(val: boolean);
            get show_hidden(): boolean;
            set show_hidden(val: boolean);
            get showHidden(): boolean;
            set showHidden(val: boolean);
            get use_preview_label(): boolean;
            set use_preview_label(val: boolean);
            get usePreviewLabel(): boolean;
            set usePreviewLabel(val: boolean);

            // Inherited methods
            /**
             * Adds a 'choice' to the file chooser. This is typically implemented
             * as a combobox or, for boolean choices, as a checkbutton. You can select
             * a value using gtk_file_chooser_set_choice() before the dialog is shown,
             * and you can obtain the user-selected value in the ::response signal handler
             * using gtk_file_chooser_get_choice().
             *
             * Compare gtk_file_chooser_set_extra_widget().
             * @param id id for the added choice
             * @param label user-visible label for the added choice
             * @param options ids for the options of the choice, or %NULL for a boolean choice
             * @param option_labels user-visible labels for the options, must be the same length as @options
             */
            add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
            /**
             * Adds `filter` to the list of filters that the user can select between.
             * When a filter is selected, only files that are passed by that
             * filter are displayed.
             *
             * Note that the `chooser` takes ownership of the filter, so you have to
             * ref and sink it if you want to keep a reference.
             * @param filter a #GtkFileFilter
             */
            add_filter(filter: Gtk.FileFilter): void;
            /**
             * Adds a folder to be displayed with the shortcut folders in a file chooser.
             * Note that shortcut folders do not get saved, as they are provided by the
             * application.  For example, you can use this to add a
             * “/usr/share/mydrawprogram/Clipart” folder to the volume list.
             * @param folder filename of the folder to add
             * @returns %TRUE if the folder could be added successfully, %FALSE otherwise.  In the latter case, the @error will be set as appropriate.
             */
            add_shortcut_folder(folder: string): boolean;
            /**
             * Adds a folder URI to be displayed with the shortcut folders in a file
             * chooser.  Note that shortcut folders do not get saved, as they are provided
             * by the application.  For example, you can use this to add a
             * “file:///usr/share/mydrawprogram/Clipart” folder to the volume list.
             * @param uri URI of the folder to add
             * @returns %TRUE if the folder could be added successfully, %FALSE otherwise.  In the latter case, the @error will be set as appropriate.
             */
            add_shortcut_folder_uri(uri: string): boolean;
            /**
             * Gets the type of operation that the file chooser is performing; see
             * gtk_file_chooser_set_action().
             * @returns the action that the file selector is performing
             */
            get_action(): Gtk.FileChooserAction;
            /**
             * Gets the currently selected option in the 'choice' with the given ID.
             * @param id the ID of the choice to get
             * @returns the ID of the currenly selected option
             */
            get_choice(id: string): string;
            /**
             * Gets whether file choser will offer to create new folders.
             * See gtk_file_chooser_set_create_folders().
             * @returns %TRUE if the Create Folder button should be displayed.
             */
            get_create_folders(): boolean;
            /**
             * Gets the current folder of `chooser` as a local filename.
             * See gtk_file_chooser_set_current_folder().
             *
             * Note that this is the folder that the file chooser is currently displaying
             * (e.g. "/home/username/Documents"), which is not the same
             * as the currently-selected folder if the chooser is in
             * %GTK_FILE_CHOOSER_ACTION_SELECT_FOLDER mode
             * (e.g. "/home/username/Documents/selected-folder/".  To get the
             * currently-selected folder in that mode, use gtk_file_chooser_get_uri() as the
             * usual way to get the selection.
             * @returns the full path of the current folder, or %NULL if the current path cannot be represented as a local filename.  Free with g_free().  This function will also return %NULL if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling gtk_file_chooser_set_current_folder() on a nonexistent folder.
             */
            get_current_folder(): string | null;
            /**
             * Gets the current folder of `chooser` as #GFile.
             * See gtk_file_chooser_get_current_folder_uri().
             * @returns the #GFile for the current folder.
             */
            get_current_folder_file(): Gio.File | null;
            /**
             * Gets the current folder of `chooser` as an URI.
             * See gtk_file_chooser_set_current_folder_uri().
             *
             * Note that this is the folder that the file chooser is currently displaying
             * (e.g. "file:///home/username/Documents"), which is not the same
             * as the currently-selected folder if the chooser is in
             * %GTK_FILE_CHOOSER_ACTION_SELECT_FOLDER mode
             * (e.g. "file:///home/username/Documents/selected-folder/".  To get the
             * currently-selected folder in that mode, use gtk_file_chooser_get_uri() as the
             * usual way to get the selection.
             * @returns the URI for the current folder. Free with g_free().  This function will also return %NULL if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling gtk_file_chooser_set_current_folder_uri() on a nonexistent folder.
             */
            get_current_folder_uri(): string | null;
            /**
             * Gets the current name in the file selector, as entered by the user in the
             * text entry for “Name”.
             *
             * This is meant to be used in save dialogs, to get the currently typed filename
             * when the file itself does not exist yet.  For example, an application that
             * adds a custom extra widget to the file chooser for “file format” may want to
             * change the extension of the typed filename based on the chosen format, say,
             * from “.jpg” to “.png”.
             * @returns The raw text from the file chooser’s “Name” entry.  Free this with g_free().  Note that this string is not a full pathname or URI; it is whatever the contents of the entry are.  Note also that this string is in UTF-8 encoding, which is not necessarily the system’s encoding for filenames.
             */
            get_current_name(): string;
            /**
             * Queries whether a file chooser is set to confirm for overwriting when the user
             * types a file name that already exists.
             * @returns %TRUE if the file chooser will present a confirmation dialog; %FALSE otherwise.
             */
            get_do_overwrite_confirmation(): boolean;
            /**
             * Gets the current extra widget; see
             * gtk_file_chooser_set_extra_widget().
             * @returns the current extra widget, or %NULL
             */
            get_extra_widget(): Gtk.Widget | null;
            /**
             * Gets the #GFile for the currently selected file in
             * the file selector. If multiple files are selected,
             * one of the files will be returned at random.
             *
             * If the file chooser is in folder mode, this function returns the selected
             * folder.
             * @returns a selected #GFile. You own the returned file;     use g_object_unref() to release it.
             */
            get_file(): Gio.File;
            /**
             * Gets the filename for the currently selected file in
             * the file selector. The filename is returned as an absolute path. If
             * multiple files are selected, one of the filenames will be returned at
             * random.
             *
             * If the file chooser is in folder mode, this function returns the selected
             * folder.
             * @returns The currently selected filename,  or %NULL if no file is selected, or the selected file can't  be represented with a local filename. Free with g_free().
             */
            get_filename(): string | null;
            /**
             * Lists all the selected files and subfolders in the current folder of
             * `chooser`. The returned names are full absolute paths. If files in the current
             * folder cannot be represented as local filenames they will be ignored. (See
             * gtk_file_chooser_get_uris())
             * @returns a #GSList    containing the filenames of all selected files and subfolders in    the current folder. Free the returned list with g_slist_free(),    and the filenames with g_free().
             */
            get_filenames(): string[];
            /**
             * Lists all the selected files and subfolders in the current folder of `chooser`
             * as #GFile. An internal function, see gtk_file_chooser_get_uris().
             * @returns a #GSList   containing a #GFile for each selected file and subfolder in the   current folder.  Free the returned list with g_slist_free(), and   the files with g_object_unref().
             */
            get_files(): Gio.File[];
            /**
             * Gets the current filter; see gtk_file_chooser_set_filter().
             * @returns the current filter, or %NULL
             */
            get_filter(): Gtk.FileFilter | null;
            /**
             * Gets whether only local files can be selected in the
             * file selector. See gtk_file_chooser_set_local_only()
             * @returns %TRUE if only local files can be selected.
             */
            get_local_only(): boolean;
            /**
             * Gets the #GFile that should be previewed in a custom preview
             * Internal function, see gtk_file_chooser_get_preview_uri().
             * @returns the #GFile for the file to preview,     or %NULL if no file is selected. Free with g_object_unref().
             */
            get_preview_file(): Gio.File | null;
            /**
             * Gets the filename that should be previewed in a custom preview
             * widget. See gtk_file_chooser_set_preview_widget().
             * @returns the filename to preview, or %NULL if  no file is selected, or if the selected file cannot be represented  as a local filename. Free with g_free()
             */
            get_preview_filename(): string | null;
            /**
             * Gets the URI that should be previewed in a custom preview
             * widget. See gtk_file_chooser_set_preview_widget().
             * @returns the URI for the file to preview,     or %NULL if no file is selected. Free with g_free().
             */
            get_preview_uri(): string | null;
            /**
             * Gets the current preview widget; see
             * gtk_file_chooser_set_preview_widget().
             * @returns the current preview widget, or %NULL
             */
            get_preview_widget(): Gtk.Widget | null;
            /**
             * Gets whether the preview widget set by gtk_file_chooser_set_preview_widget()
             * should be shown for the current filename. See
             * gtk_file_chooser_set_preview_widget_active().
             * @returns %TRUE if the preview widget is active for the current filename.
             */
            get_preview_widget_active(): boolean;
            /**
             * Gets whether multiple files can be selected in the file
             * selector. See gtk_file_chooser_set_select_multiple().
             * @returns %TRUE if multiple files can be selected.
             */
            get_select_multiple(): boolean;
            /**
             * Gets whether hidden files and folders are displayed in the file selector.
             * See gtk_file_chooser_set_show_hidden().
             * @returns %TRUE if hidden files and folders are displayed.
             */
            get_show_hidden(): boolean;
            /**
             * Gets the URI for the currently selected file in
             * the file selector. If multiple files are selected,
             * one of the filenames will be returned at random.
             *
             * If the file chooser is in folder mode, this function returns the selected
             * folder.
             * @returns The currently selected URI, or %NULL    if no file is selected. If gtk_file_chooser_set_local_only() is set to    %TRUE (the default) a local URI will be returned for any FUSE locations.    Free with g_free()
             */
            get_uri(): string | null;
            /**
             * Lists all the selected files and subfolders in the current folder of
             * `chooser`. The returned names are full absolute URIs.
             * @returns a #GSList containing the URIs of all selected   files and subfolders in the current folder. Free the returned list   with g_slist_free(), and the filenames with g_free().
             */
            get_uris(): string[];
            /**
             * Gets whether a stock label should be drawn with the name of the previewed
             * file.  See gtk_file_chooser_set_use_preview_label().
             * @returns %TRUE if the file chooser is set to display a label with the name of the previewed file, %FALSE otherwise.
             */
            get_use_preview_label(): boolean;
            /**
             * Lists the current set of user-selectable filters; see
             * gtk_file_chooser_add_filter(), gtk_file_chooser_remove_filter().
             * @returns a  #GSList containing the current set of user selectable filters. The  contents of the list are owned by GTK+, but you must free the list  itself with g_slist_free() when you are done with it.
             */
            list_filters(): Gtk.FileFilter[];
            /**
             * Queries the list of shortcut folders in the file chooser, as set by
             * gtk_file_chooser_add_shortcut_folder_uri().
             * @returns A list of folder URIs, or %NULL if there are no shortcut folders.  Free the returned list with g_slist_free(), and the URIs with g_free().
             */
            list_shortcut_folder_uris(): string[] | null;
            /**
             * Queries the list of shortcut folders in the file chooser, as set by
             * gtk_file_chooser_add_shortcut_folder().
             * @returns A list of folder filenames, or %NULL if there are no shortcut folders. Free the returned list with g_slist_free(), and the filenames with g_free().
             */
            list_shortcut_folders(): string[] | null;
            /**
             * Removes a 'choice' that has been added with gtk_file_chooser_add_choice().
             * @param id the ID of the choice to remove
             */
            remove_choice(id: string): void;
            /**
             * Removes `filter` from the list of filters that the user can select between.
             * @param filter a #GtkFileFilter
             */
            remove_filter(filter: Gtk.FileFilter): void;
            /**
             * Removes a folder from a file chooser’s list of shortcut folders.
             * @param folder filename of the folder to remove
             * @returns %TRUE if the operation succeeds, %FALSE otherwise. In the latter case, the @error will be set as appropriate. See also: gtk_file_chooser_add_shortcut_folder()
             */
            remove_shortcut_folder(folder: string): boolean;
            /**
             * Removes a folder URI from a file chooser’s list of shortcut folders.
             * @param uri URI of the folder to remove
             * @returns %TRUE if the operation succeeds, %FALSE otherwise. In the latter case, the @error will be set as appropriate. See also: gtk_file_chooser_add_shortcut_folder_uri()
             */
            remove_shortcut_folder_uri(uri: string): boolean;
            /**
             * Selects all the files in the current folder of a file chooser.
             */
            select_all(): void;
            /**
             * Selects the file referred to by `file`. An internal function. See
             * _gtk_file_chooser_select_uri().
             * @param file the file to select
             * @returns Not useful.
             */
            select_file(file: Gio.File): boolean;
            /**
             * Selects a filename. If the file name isn’t in the current
             * folder of `chooser,` then the current folder of `chooser` will
             * be changed to the folder containing `filename`.
             * @param filename the filename to select
             * @returns Not useful. See also: gtk_file_chooser_set_filename()
             */
            select_filename(filename: string): boolean;
            /**
             * Selects the file to by `uri`. If the URI doesn’t refer to a
             * file in the current folder of `chooser,` then the current folder of
             * `chooser` will be changed to the folder containing `filename`.
             * @param uri the URI to select
             * @returns Not useful.
             */
            select_uri(uri: string): boolean;
            /**
             * Sets the type of operation that the chooser is performing; the
             * user interface is adapted to suit the selected action. For example,
             * an option to create a new folder might be shown if the action is
             * %GTK_FILE_CHOOSER_ACTION_SAVE but not if the action is
             * %GTK_FILE_CHOOSER_ACTION_OPEN.
             * @param action the action that the file selector is performing
             */
            set_action(action: Gtk.FileChooserAction | null): void;
            /**
             * Selects an option in a 'choice' that has been added with
             * gtk_file_chooser_add_choice(). For a boolean choice, the
             * possible options are "true" and "false".
             * @param id the ID of the choice to set
             * @param option the ID of the option to select
             */
            set_choice(id: string, option: string): void;
            /**
             * Sets whether file choser will offer to create new folders.
             * This is only relevant if the action is not set to be
             * %GTK_FILE_CHOOSER_ACTION_OPEN.
             * @param create_folders %TRUE if the Create Folder button should be displayed
             */
            set_create_folders(create_folders: boolean): void;
            /**
             * Sets the current folder for `chooser` from a local filename.
             * The user will be shown the full contents of the current folder,
             * plus user interface elements for navigating to other folders.
             *
             * In general, you should not use this function.  See the
             * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
             * for the rationale behind this.
             * @param filename the full path of the new current folder
             * @returns Not useful.
             */
            set_current_folder(filename: string): boolean;
            /**
             * Sets the current folder for `chooser` from a #GFile.
             * Internal function, see gtk_file_chooser_set_current_folder_uri().
             * @param file the #GFile for the new folder
             * @returns %TRUE if the folder could be changed successfully, %FALSE otherwise.
             */
            set_current_folder_file(file: Gio.File): boolean;
            /**
             * Sets the current folder for `chooser` from an URI.
             * The user will be shown the full contents of the current folder,
             * plus user interface elements for navigating to other folders.
             *
             * In general, you should not use this function.  See the
             * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
             * for the rationale behind this.
             * @param uri the URI for the new current folder
             * @returns %TRUE if the folder could be changed successfully, %FALSE otherwise.
             */
            set_current_folder_uri(uri: string): boolean;
            /**
             * Sets the current name in the file selector, as if entered
             * by the user. Note that the name passed in here is a UTF-8
             * string rather than a filename. This function is meant for
             * such uses as a suggested name in a “Save As...” dialog.  You can
             * pass “Untitled.doc” or a similarly suitable suggestion for the `name`.
             *
             * If you want to preselect a particular existing file, you should use
             * gtk_file_chooser_set_filename() or gtk_file_chooser_set_uri() instead.
             * Please see the documentation for those functions for an example of using
             * gtk_file_chooser_set_current_name() as well.
             * @param name the filename to use, as a UTF-8 string
             */
            set_current_name(name: string): void;
            /**
             * Sets whether a file chooser in %GTK_FILE_CHOOSER_ACTION_SAVE mode will present
             * a confirmation dialog if the user types a file name that already exists.  This
             * is %FALSE by default.
             *
             * If set to %TRUE, the `chooser` will emit the
             * #GtkFileChooser::confirm-overwrite signal when appropriate.
             *
             * If all you need is the stock confirmation dialog, set this property to %TRUE.
             * You can override the way confirmation is done by actually handling the
             * #GtkFileChooser::confirm-overwrite signal; please refer to its documentation
             * for the details.
             * @param do_overwrite_confirmation whether to confirm overwriting in save mode
             */
            set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
            /**
             * Sets an application-supplied widget to provide extra options to the user.
             * @param extra_widget widget for extra options
             */
            set_extra_widget(extra_widget: Gtk.Widget): void;
            /**
             * Sets `file` as the current filename for the file chooser, by changing
             * to the file’s parent folder and actually selecting the file in list.  If
             * the `chooser` is in %GTK_FILE_CHOOSER_ACTION_SAVE mode, the file’s base name
             * will also appear in the dialog’s file name entry.
             *
             * If the file name isn’t in the current folder of `chooser,` then the current
             * folder of `chooser` will be changed to the folder containing `filename`. This
             * is equivalent to a sequence of gtk_file_chooser_unselect_all() followed by
             * gtk_file_chooser_select_filename().
             *
             * Note that the file must exist, or nothing will be done except
             * for the directory change.
             *
             * If you are implementing a save dialog,
             * you should use this function if you already have a file name to which the
             * user may save; for example, when the user opens an existing file and then
             * does Save As...  If you don’t have
             * a file name already — for example, if the user just created a new
             * file and is saving it for the first time, do not call this function.
             * Instead, use something similar to this:
             *
             * ```c
             * if (document_is_new)
             *   {
             *     // the user just created a new document
             *     gtk_file_chooser_set_current_folder_file (chooser, default_file_for_saving);
             *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
             *   }
             * else
             *   {
             *     // the user edited an existing document
             *     gtk_file_chooser_set_file (chooser, existing_file);
             *   }
             * ```
             *
             * @param file the #GFile to set as current
             * @returns Not useful.
             */
            set_file(file: Gio.File): boolean;
            /**
             * Sets `filename` as the current filename for the file chooser, by changing to
             * the file’s parent folder and actually selecting the file in list; all other
             * files will be unselected.  If the `chooser` is in
             * %GTK_FILE_CHOOSER_ACTION_SAVE mode, the file’s base name will also appear in
             * the dialog’s file name entry.
             *
             * Note that the file must exist, or nothing will be done except
             * for the directory change.
             *
             * You should use this function only when implementing a save
             * dialog for which you already have a file name to which
             * the user may save.  For example, when the user opens an existing file and
             * then does Save As... to save a copy or
             * a modified version.  If you don’t have a file name already — for
             * example, if the user just created a new file and is saving it for the first
             * time, do not call this function.  Instead, use something similar to this:
             *
             * ```c
             * if (document_is_new)
             *   {
             *     // the user just created a new document
             *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
             *   }
             * else
             *   {
             *     // the user edited an existing document
             *     gtk_file_chooser_set_filename (chooser, existing_filename);
             *   }
             * ```
             *
             *
             * In the first case, the file chooser will present the user with useful suggestions
             * as to where to save his new file.  In the second case, the file’s existing location
             * is already known, so the file chooser will use it.
             * @param filename the filename to set as current
             * @returns Not useful.
             */
            set_filename(filename: string): boolean;
            /**
             * Sets the current filter; only the files that pass the
             * filter will be displayed. If the user-selectable list of filters
             * is non-empty, then the filter should be one of the filters
             * in that list. Setting the current filter when the list of
             * filters is empty is useful if you want to restrict the displayed
             * set of files without letting the user change it.
             * @param filter a #GtkFileFilter
             */
            set_filter(filter: Gtk.FileFilter): void;
            /**
             * Sets whether only local files can be selected in the
             * file selector. If `local_only` is %TRUE (the default),
             * then the selected file or files are guaranteed to be
             * accessible through the operating systems native file
             * system and therefore the application only
             * needs to worry about the filename functions in
             * #GtkFileChooser, like gtk_file_chooser_get_filename(),
             * rather than the URI functions like
             * gtk_file_chooser_get_uri(),
             *
             * On some systems non-native files may still be
             * available using the native filesystem via a userspace
             * filesystem (FUSE).
             * @param local_only %TRUE if only local files can be selected
             */
            set_local_only(local_only: boolean): void;
            /**
             * Sets an application-supplied widget to use to display a custom preview
             * of the currently selected file. To implement a preview, after setting the
             * preview widget, you connect to the #GtkFileChooser::update-preview
             * signal, and call gtk_file_chooser_get_preview_filename() or
             * gtk_file_chooser_get_preview_uri() on each change. If you can
             * display a preview of the new file, update your widget and
             * set the preview active using gtk_file_chooser_set_preview_widget_active().
             * Otherwise, set the preview inactive.
             *
             * When there is no application-supplied preview widget, or the
             * application-supplied preview widget is not active, the file chooser
             * will display no preview at all.
             * @param preview_widget widget for displaying preview.
             */
            set_preview_widget(preview_widget: Gtk.Widget): void;
            /**
             * Sets whether the preview widget set by
             * gtk_file_chooser_set_preview_widget() should be shown for the
             * current filename. When `active` is set to false, the file chooser
             * may display an internally generated preview of the current file
             * or it may display no preview at all. See
             * gtk_file_chooser_set_preview_widget() for more details.
             * @param active whether to display the user-specified preview widget
             */
            set_preview_widget_active(active: boolean): void;
            /**
             * Sets whether multiple files can be selected in the file selector.  This is
             * only relevant if the action is set to be %GTK_FILE_CHOOSER_ACTION_OPEN or
             * %GTK_FILE_CHOOSER_ACTION_SELECT_FOLDER.
             * @param select_multiple %TRUE if multiple files can be selected.
             */
            set_select_multiple(select_multiple: boolean): void;
            /**
             * Sets whether hidden files and folders are displayed in the file selector.
             * @param show_hidden %TRUE if hidden files and folders should be displayed.
             */
            set_show_hidden(show_hidden: boolean): void;
            /**
             * Sets the file referred to by `uri` as the current file for the file chooser,
             * by changing to the URI’s parent folder and actually selecting the URI in the
             * list.  If the `chooser` is %GTK_FILE_CHOOSER_ACTION_SAVE mode, the URI’s base
             * name will also appear in the dialog’s file name entry.
             *
             * Note that the URI must exist, or nothing will be done except for the
             * directory change.
             *
             * You should use this function only when implementing a save
             * dialog for which you already have a file name to which
             * the user may save.  For example, when the user opens an existing file and then
             * does Save As... to save a copy or a
             * modified version.  If you don’t have a file name already — for example,
             * if the user just created a new file and is saving it for the first time, do
             * not call this function.  Instead, use something similar to this:
             *
             * ```c
             * if (document_is_new)
             *   {
             *     // the user just created a new document
             *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
             *   }
             * else
             *   {
             *     // the user edited an existing document
             *     gtk_file_chooser_set_uri (chooser, existing_uri);
             *   }
             * ```
             *
             *
             *
             * In the first case, the file chooser will present the user with useful suggestions
             * as to where to save his new file.  In the second case, the file’s existing location
             * is already known, so the file chooser will use it.
             * @param uri the URI to set as current
             * @returns Not useful.
             */
            set_uri(uri: string): boolean;
            /**
             * Sets whether the file chooser should display a stock label with the name of
             * the file that is being previewed; the default is %TRUE.  Applications that
             * want to draw the whole preview area themselves should set this to %FALSE and
             * display the name themselves in their preview widget.
             *
             * See also: gtk_file_chooser_set_preview_widget()
             * @param use_label whether to display a stock label with the name of the previewed file
             */
            set_use_preview_label(use_label: boolean): void;
            /**
             * Unselects all the files in the current folder of a file chooser.
             */
            unselect_all(): void;
            /**
             * Unselects the file referred to by `file`. If the file is not in the current
             * directory, does not exist, or is otherwise not currently selected, does nothing.
             * @param file a #GFile
             */
            unselect_file(file: Gio.File): void;
            /**
             * Unselects a currently selected filename. If the filename
             * is not in the current directory, does not exist, or
             * is otherwise not currently selected, does nothing.
             * @param filename the filename to unselect
             */
            unselect_filename(filename: string): void;
            /**
             * Unselects the file referred to by `uri`. If the file
             * is not in the current directory, does not exist, or
             * is otherwise not currently selected, does nothing.
             * @param uri the URI to unselect
             */
            unselect_uri(uri: string): void;
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

        module Image {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            interface FileChanged {
                (): void;
            }

            interface NextFrame {
                (delay: number): void;
            }

            interface SaveProgress {
                (object: number): void;
            }

            interface SizePrepared {
                (object: number, p0: number): void;
            }

            interface ThumbnailChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_file(file: Gio.File, caption: string): Image;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(signal: 'file-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'file-changed', callback: (_source: this) => void): number;
            emit(signal: 'file-changed'): void;
            connect(signal: 'next-frame', callback: (_source: this, delay: number) => void): number;
            connect_after(signal: 'next-frame', callback: (_source: this, delay: number) => void): number;
            emit(signal: 'next-frame', delay: number): void;
            connect(signal: 'save-progress', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'save-progress', callback: (_source: this, object: number) => void): number;
            emit(signal: 'save-progress', object: number): void;
            connect(signal: 'size-prepared', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'size-prepared',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'size-prepared', object: number, p0: number): void;
            connect(signal: 'thumbnail-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'thumbnail-changed', callback: (_source: this) => void): number;
            emit(signal: 'thumbnail-changed'): void;

            // Static methods

            /**
             * Gets the list of supported mimetypes
             */
            static get_supported_mime_types(): string[];
            static is_supported_mime_type(mime_type: string): boolean;

            // Virtual methods

            vfunc_changed(): void;
            /**
             * Marks the image file contents as changed. Also, emits
             * EogImage::file-changed signal.
             */
            vfunc_file_changed(): void;
            vfunc_next_frame(delay: number): void;
            vfunc_save_progress(progress: number): void;
            vfunc_size_prepared(width: number, height: number): void;
            vfunc_thumbnail_changed(): void;

            // Methods

            autorotate(): void;
            cancel_load(): void;
            data_ref(): void;
            data_unref(): void;
            /**
             * Marks the image file contents as changed. Also, emits
             * EogImage::file-changed signal.
             */
            file_changed(): void;
            /**
             * Get `img` autorotate transform.
             * @returns A #EogTransform.
             */
            get_autorotate_transform(): Transform;
            get_bytes(): number;
            get_caption(): string;
            get_collate_key(): string;
            /**
             * Gets the #GFile associated with `img`
             * @returns a #GFile
             */
            get_file(): Gio.File;
            /**
             * Returns the current status of the image metadata, that is,
             * whether the metadata has not been read yet, is ready, or not available at all.
             * @returns one of #EogImageMetadataStatus
             */
            get_metadata_status(): ImageMetadataStatus;
            /**
             * Gets the #GdkPixbuf of the image
             * @returns a #GdkPixbuf
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            get_size(width: number, height: number): void;
            get_status(): ImageStatus;
            /**
             * Gets the thumbnail pixbuf for `img`
             * @returns a #GdkPixbuf with a thumbnail
             */
            get_thumbnail(): GdkPixbuf.Pixbuf;
            /**
             * Get `img` transform.
             * @returns A #EogTransform.
             */
            get_transform(): Transform;
            get_uri_for_display(): string;
            has_data(data: ImageData | null): boolean;
            /**
             * Checks whether a given image is animated.
             * @returns #TRUE if it is an animated image, #FALSE otherwise.
             */
            is_animation(): boolean;
            is_file_changed(): boolean;
            /**
             * Evaluate if the user has write permission on the image file.
             * @returns %TRUE on success, %FALSE if the user hasn't write permissions on it, or @img is not an #EogImage.
             */
            is_file_writable(): boolean;
            is_jpeg(): boolean;
            is_modified(): boolean;
            /**
             * Check whether the image actually contains multiple images/pages.
             * This can happen for TIFF files. GIF animations are not multipaged.
             *
             * Note that this only works if the image data is loaded.
             * @returns %TRUE if @img is multipaged, %FALSE if not or the image data wasn't loaded.
             */
            is_multipaged(): boolean;
            load(data2read: ImageData | null, job: Job): boolean;
            modified(): void;
            save_as_by_info(source: ImageSaveInfo, target: ImageSaveInfo): boolean;
            save_by_info(source: ImageSaveInfo): boolean;
            set_thumbnail(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Starts playing an animated image.
             * @returns %TRUE on success, %FALSE if @img is already playing or isn't an animated image.
             */
            start_animation(): boolean;
            transform(trans: Transform, job: Job): void;
            undo(): void;
        }

        module ImageSaveInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class ImageSaveInfo extends GObject.Object {
            static $gtype: GObject.GType<ImageSaveInfo>;

            // Fields

            file: Gio.File;
            format: string;
            exists: boolean;
            local: boolean;
            has_metadata: boolean;
            modified: boolean;
            overwrite: boolean;
            jpeg_quality: number;

            // Constructors

            constructor(properties?: Partial<ImageSaveInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_file(file: Gio.File, format: GdkPixbuf.PixbufFormat): ImageSaveInfo;

            static new_from_image(image: Image): ImageSaveInfo;

            static new_from_uri(uri: string, format: GdkPixbuf.PixbufFormat): ImageSaveInfo;
        }

        module Job {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            interface Finished {
                (): void;
            }

            interface Progress {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        abstract class Job extends GObject.Object {
            static $gtype: GObject.GType<Job>;

            // Fields

            cancellable: Gio.Cancellable;
            error: GLib.Error;
            progress: number;
            cancelled: boolean;
            finished: boolean;

            // Constructors

            constructor(properties?: Partial<Job.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;
            connect(signal: 'progress', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'progress', callback: (_source: this, object: number) => void): number;
            emit(signal: 'progress', object: number): void;

            // Static methods

            static scheduler_init(): void;

            // Virtual methods

            vfunc_cancelled(): void;
            vfunc_finished(): void;
            vfunc_progress(progress: number): void;
            vfunc_run(): void;

            // Methods

            cancel(): void;
            get_progress(): number;
            is_cancelled(): boolean;
            is_finished(): boolean;
            run(): void;
            scheduler_add_job(): void;
            scheduler_add_job_with_priority(priority: JobPriority | null): void;
            set_progress(progress: number): void;
        }

        module JobCopy {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobCopy extends Job {
            static $gtype: GObject.GType<JobCopy>;

            // Fields

            images: any[];
            destination: string;
            current_position: number;

            // Constructors

            constructor(properties?: Partial<JobCopy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](images: Image[], destination: string): JobCopy;
        }

        module JobLoad {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLoad extends Job {
            static $gtype: GObject.GType<JobLoad>;

            // Fields

            image: Image;
            data: ImageData;

            // Constructors

            constructor(properties?: Partial<JobLoad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](image: Image, data: ImageData): JobLoad;
        }

        module JobModel {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobModel extends Job {
            static $gtype: GObject.GType<JobModel>;

            // Fields

            store: ListStore;
            file_list: any[];

            // Constructors

            constructor(properties?: Partial<JobModel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](file_list: Gio.File[]): JobModel;
        }

        module JobSave {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobSave extends Job {
            static $gtype: GObject.GType<JobSave>;

            // Fields

            images: any[];
            current_image: Image;
            current_position: number;

            // Constructors

            constructor(properties?: Partial<JobSave.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](images: Image[]): JobSave;
        }

        module JobSaveAs {
            // Constructor properties interface

            interface ConstructorProps extends JobSave.ConstructorProps {}
        }

        class JobSaveAs extends JobSave {
            static $gtype: GObject.GType<JobSaveAs>;

            // Fields

            converter: URIConverter;
            file: Gio.File;

            // Constructors

            constructor(properties?: Partial<JobSaveAs.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](images: Image[], converter: URIConverter, file: Gio.File): JobSaveAs;
            // Conflicted with Eog.JobSave.new

            static ['new'](...args: never[]): any;
        }

        module JobThumbnail {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobThumbnail extends Job {
            static $gtype: GObject.GType<JobThumbnail>;

            // Fields

            image: Image;
            thumbnail: GdkPixbuf.Pixbuf;

            // Constructors

            constructor(properties?: Partial<JobThumbnail.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](image: Image): JobThumbnail;
        }

        module JobTransform {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobTransform extends Job {
            static $gtype: GObject.GType<JobTransform>;

            // Fields

            images: any[];
            transform: Transform;

            // Constructors

            constructor(properties?: Partial<JobTransform.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](images: Image[], transform: Transform): JobTransform;
        }

        module ListStore {
            // Signal callback interfaces

            interface DrawThumbnail {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.ListStore.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.TreeDragDest.ConstructorProps,
                    Gtk.TreeDragSource.ConstructorProps,
                    Gtk.TreeModel.ConstructorProps,
                    Gtk.TreeSortable.ConstructorProps {}
        }

        class ListStore
            extends Gtk.ListStore
            implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable
        {
            static $gtype: GObject.GType<ListStore>;

            // Constructors

            constructor(properties?: Partial<ListStore.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ListStore;

            static new_from_glist(list: Image[]): ListStore;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'draw-thumbnail', callback: (_source: this) => void): number;
            connect_after(signal: 'draw-thumbnail', callback: (_source: this) => void): number;
            emit(signal: 'draw-thumbnail'): void;

            // Virtual methods

            vfunc_draw_thumbnail(): void;

            // Methods

            /**
             * Adds a list of #GFile's to `store`. The given list
             * must be %NULL-terminated.
             *
             * If any of the #GFile's in `file_list` is a directory, all the images
             * in that directory will be added to `store`. If the list of files contains
             * only one file and this is a regular file, then all the images in the same
             * directory will be added as well to `store`.
             * @param file_list A %NULL-terminated list of #GFile's.
             */
            add_files(file_list: Gio.File[]): void;
            /**
             * Adds an #EogImage to `store`. The thumbnail of the image is not
             * loaded and will only be loaded if the thumbnail is made visible.
             * @param image An #EogImage.
             */
            append_image(image: Image): void;
            /**
             * Gets the #EogImage in the position `pos` of `store`. If there is
             * no image at position `pos,` %NULL is returned.
             * @param pos the position of the required #EogImage.
             * @returns the #EogImage in position @pos or %NULL.
             */
            get_image_by_pos(pos: number): Image;
            /**
             * Gets the position of the #EogImage that should be loaded first.
             * If not set, it returns -1.
             * @returns the position of the image to be loaded first or -1.
             */
            get_initial_pos(): number;
            /**
             * Gets the position where `image` is stored in `store`. If `image`
             * is not stored in `store,` -1 is returned.
             * @param image An #EogImage.
             * @returns the position of @image in @store or -1 if not found.
             */
            get_pos_by_image(image: Image): number;
            /**
             * Gets the position of the image pointed by `iter`.
             * @param iter A #GtkTreeIter pointing to an image in @store.
             * @returns The position of the image pointed by @iter.
             */
            get_pos_by_iter(iter: Gtk.TreeIter): number;
            /**
             * Returns the number of images in the store.
             * @returns The number of images in @store.
             */
            length(): number;
            /**
             * Removes `image` from `store`.
             * @param image An #EogImage.
             */
            remove_image(image: Image): void;
            /**
             * Refreshes the thumbnail for the image pointed by `iter`.
             * @param iter A #GtkTreeIter pointing to an image in @store.
             */
            thumbnail_refresh(iter: Gtk.TreeIter): void;
            /**
             * Sets the thumbnail for the image pointed by `iter`.
             * @param iter A #GtkTreeIter pointing to an image in @store.
             */
            thumbnail_set(iter: Gtk.TreeIter): void;
            /**
             * Unsets the thumbnail for the image pointed by `iter,` changing
             * it to a "busy" icon.
             * @param iter A #GtkTreeIter pointing to an image in @store.
             */
            thumbnail_unset(iter: Gtk.TreeIter): void;

            // Inherited methods
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a #GtkBuilder
             * @param child child to add
             * @param type kind of child or %NULL
             */
            add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             * @returns the constructed child
             */
            construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called at the end of each custom element handled by
             * the buildable.
             * @param builder #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called for each unknown element under `<child>`.
             * @param builder a #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @returns %TRUE if a object has a custom implementation, %FALSE          if it doesn't.
             */
            custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             * @returns the internal child of the buildable object
             */
            get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Gets the name of the `buildable` object.
             *
             * #GtkBuilder sets the name based on the
             * [GtkBuilder UI definition][BUILDER-UI]
             * used to construct the `buildable`.
             * @returns the name set with gtk_buildable_set_name()
             */
            get_name(): string;
            /**
             * Called when the builder finishes the parsing of a
             * [GtkBuilder UI definition][BUILDER-UI].
             * Note that this will be called once for each time
             * gtk_builder_add_from_file() or gtk_builder_add_from_string()
             * is called on a builder.
             * @param builder a #GtkBuilder
             */
            parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Sets the name of the `buildable` object.
             * @param name name to set
             */
            set_name(name: string): void;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a #GtkBuilder
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             */
            vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called at the end of each custom element handled by
             * the buildable.
             * @param builder #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called for each unknown element under `<child>`.
             * @param builder a #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Gets the name of the `buildable` object.
             *
             * #GtkBuilder sets the name based on the
             * [GtkBuilder UI definition][BUILDER-UI]
             * used to construct the `buildable`.
             */
            vfunc_get_name(): string;
            /**
             * Called when the builder finishes the parsing of a
             * [GtkBuilder UI definition][BUILDER-UI].
             * Note that this will be called once for each time
             * gtk_builder_add_from_file() or gtk_builder_add_from_string()
             * is called on a builder.
             * @param builder a #GtkBuilder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Sets the name of the `buildable` object.
             * @param name name to set
             */
            vfunc_set_name(name: string): void;
            /**
             * Asks the #GtkTreeDragDest to insert a row before the path `dest,`
             * deriving the contents of the row from `selection_data`. If `dest` is
             * outside the tree so that inserting before it is impossible, %FALSE
             * will be returned. Also, %FALSE may be returned if the new row is
             * not created for some model-specific reason.  Should robustly handle
             * a `dest` no longer found in the model!
             * @param dest row to drop in front of
             * @param selection_data data to drop
             * @returns whether a new row was created before position @dest
             */
            drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Determines whether a drop is possible before the given `dest_path,`
             * at the same depth as `dest_path`. i.e., can we drop the data in
             * `selection_data` at that location. `dest_path` does not have to
             * exist; the return value will almost certainly be %FALSE if the
             * parent of `dest_path` doesn’t exist, though.
             * @param dest_path destination row
             * @param selection_data the data being dragged
             * @returns %TRUE if a drop is possible before @dest_path
             */
            row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Asks the #GtkTreeDragDest to insert a row before the path `dest,`
             * deriving the contents of the row from `selection_data`. If `dest` is
             * outside the tree so that inserting before it is impossible, %FALSE
             * will be returned. Also, %FALSE may be returned if the new row is
             * not created for some model-specific reason.  Should robustly handle
             * a `dest` no longer found in the model!
             * @param dest row to drop in front of
             * @param selection_data data to drop
             */
            vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Determines whether a drop is possible before the given `dest_path,`
             * at the same depth as `dest_path`. i.e., can we drop the data in
             * `selection_data` at that location. `dest_path` does not have to
             * exist; the return value will almost certainly be %FALSE if the
             * parent of `dest_path` doesn’t exist, though.
             * @param dest_path destination row
             * @param selection_data the data being dragged
             */
            vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Asks the #GtkTreeDragSource to delete the row at `path,` because
             * it was moved somewhere else via drag-and-drop. Returns %FALSE
             * if the deletion fails because `path` no longer exists, or for
             * some model-specific reason. Should robustly handle a `path` no
             * longer found in the model!
             * @param path row that was being dragged
             * @returns %TRUE if the row was successfully deleted
             */
            drag_data_delete(path: Gtk.TreePath): boolean;
            /**
             * Asks the #GtkTreeDragSource to fill in `selection_data` with a
             * representation of the row at `path`. `selection_data->`target gives
             * the required type of the data.  Should robustly handle a `path` no
             * longer found in the model!
             * @param path row that was dragged
             * @param selection_data a #GtkSelectionData to fill with data                  from the dragged row
             * @returns %TRUE if data of the required type was provided
             */
            drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Asks the #GtkTreeDragSource whether a particular row can be used as
             * the source of a DND operation. If the source doesn’t implement
             * this interface, the row is assumed draggable.
             * @param path row on which user is initiating a drag
             * @returns %TRUE if the row can be dragged
             */
            row_draggable(path: Gtk.TreePath): boolean;
            /**
             * Asks the #GtkTreeDragSource to delete the row at `path,` because
             * it was moved somewhere else via drag-and-drop. Returns %FALSE
             * if the deletion fails because `path` no longer exists, or for
             * some model-specific reason. Should robustly handle a `path` no
             * longer found in the model!
             * @param path row that was being dragged
             */
            vfunc_drag_data_delete(path: Gtk.TreePath): boolean;
            /**
             * Asks the #GtkTreeDragSource to fill in `selection_data` with a
             * representation of the row at `path`. `selection_data->`target gives
             * the required type of the data.  Should robustly handle a `path` no
             * longer found in the model!
             * @param path row that was dragged
             * @param selection_data a #GtkSelectionData to fill with data                  from the dragged row
             */
            vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;
            /**
             * Asks the #GtkTreeDragSource whether a particular row can be used as
             * the source of a DND operation. If the source doesn’t implement
             * this interface, the row is assumed draggable.
             * @param path row on which user is initiating a drag
             */
            vfunc_row_draggable(path: Gtk.TreePath): boolean;
            /**
             * Creates a new #GtkTreeModel, with `child_model` as the child_model
             * and `root` as the virtual root.
             * @param root A #GtkTreePath or %NULL.
             * @returns A new #GtkTreeModel.
             */
            filter_new(root?: Gtk.TreePath | null): Gtk.TreeModel;
            /**
             * Calls func on each node in model in a depth-first fashion.
             *
             * If `func` returns %TRUE, then the tree ceases to be walked,
             * and gtk_tree_model_foreach() returns.
             * @param func a function to be called on each row
             */
            foreach(func: Gtk.TreeModelForeachFunc): void;
            /**
             * Returns the type of the column.
             * @param index_ the column index
             * @returns the type of the column
             */
            get_column_type(index_: number): GObject.GType;
            /**
             * Returns a set of flags supported by this interface.
             *
             * The flags are a bitwise combination of #GtkTreeModelFlags.
             * The flags supported should not change during the lifetime
             * of the `tree_model`.
             * @returns the flags supported by this interface
             */
            get_flags(): Gtk.TreeModelFlags;
            /**
             * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
             * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
             * @param path the #GtkTreePath-struct
             * @returns %TRUE, if @iter was set
             */
            get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
            /**
             * Initializes `iter` with the first iterator in the tree
             * (the one at the path "0") and returns %TRUE. Returns
             * %FALSE if the tree is empty.
             * @returns %TRUE, if @iter was set
             */
            get_iter_first(): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to a valid iterator pointing to `path_string,` if it
             * exists. Otherwise, `iter` is left invalid and %FALSE is returned.
             * @param path_string a string representation of a #GtkTreePath-struct
             * @returns %TRUE, if @iter was set
             */
            get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];
            /**
             * Returns the number of columns supported by `tree_model`.
             * @returns the number of columns
             */
            get_n_columns(): number;
            /**
             * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
             *
             * This path should be freed with gtk_tree_path_free().
             * @param iter the #GtkTreeIter-struct
             * @returns a newly-created #GtkTreePath-struct
             */
            get_path(iter: Gtk.TreeIter): Gtk.TreePath;
            /**
             * Generates a string representation of the iter.
             *
             * This string is a “:” separated list of numbers.
             * For example, “4:10:0:3” would be an acceptable
             * return value for this string.
             * @param iter a #GtkTreeIter-struct
             * @returns a newly-allocated string.     Must be freed with g_free().
             */
            get_string_from_iter(iter: Gtk.TreeIter): string;
            /**
             * Initializes and sets `value` to that at `column`.
             *
             * When done with `value,` g_value_unset() needs to be called
             * to free any allocated memory.
             * @param iter the #GtkTreeIter-struct
             * @param column the column to lookup the value at
             */
            get_value(iter: Gtk.TreeIter, column: number): unknown;
            /**
             * Sets `iter` to point to the first child of `parent`.
             *
             * If `parent` has no children, %FALSE is returned and `iter` is
             * set to be invalid. `parent` will remain a valid node after this
             * function has been called.
             *
             * If `parent` is %NULL returns the first node, equivalent to
             * `gtk_tree_model_get_iter_first (tree_model, iter);`
             * @param parent the #GtkTreeIter-struct, or %NULL
             * @returns %TRUE, if @iter has been set to the first child
             */
            iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
            /**
             * Returns %TRUE if `iter` has children, %FALSE otherwise.
             * @param iter the #GtkTreeIter-struct to test for children
             * @returns %TRUE if @iter has children
             */
            iter_has_child(iter: Gtk.TreeIter): boolean;
            /**
             * Returns the number of children that `iter` has.
             *
             * As a special case, if `iter` is %NULL, then the number
             * of toplevel nodes is returned.
             * @param iter the #GtkTreeIter-struct, or %NULL
             * @returns the number of children of @iter
             */
            iter_n_children(iter?: Gtk.TreeIter | null): number;
            /**
             * Sets `iter` to point to the node following it at the current level.
             *
             * If there is no next `iter,` %FALSE is returned and `iter` is set
             * to be invalid.
             * @param iter the #GtkTreeIter-struct
             * @returns %TRUE if @iter has been changed to the next node
             */
            iter_next(iter: Gtk.TreeIter): boolean;
            /**
             * Sets `iter` to be the child of `parent,` using the given index.
             *
             * The first index is 0. If `n` is too big, or `parent` has no children,
             * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
             * will remain a valid node after this function has been called. As a
             * special case, if `parent` is %NULL, then the `n-th` root node
             * is set.
             * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
             * @param n the index of the desired child
             * @returns %TRUE, if @parent has an @n-th child
             */
            iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to be the parent of `child`.
             *
             * If `child` is at the toplevel, and doesn’t have a parent, then
             * `iter` is set to an invalid iterator and %FALSE is returned.
             * `child` will remain a valid node after this function has been
             * called.
             *
             * `iter` will be initialized before the lookup is performed, so `child`
             * and `iter` cannot point to the same memory location.
             * @param child the #GtkTreeIter-struct
             * @returns %TRUE, if @iter is set to the parent of @child
             */
            iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to point to the previous node at the current level.
             *
             * If there is no previous `iter,` %FALSE is returned and `iter` is
             * set to be invalid.
             * @param iter the #GtkTreeIter-struct
             * @returns %TRUE if @iter has been changed to the previous node
             */
            iter_previous(iter: Gtk.TreeIter): boolean;
            /**
             * Lets the tree ref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons.
             *
             * This function is primarily meant as a way for views to let
             * caching models know when nodes are being displayed (and hence,
             * whether or not to cache that node). Being displayed means a node
             * is in an expanded branch, regardless of whether the node is currently
             * visible in the viewport. For example, a file-system based model
             * would not want to keep the entire file-hierarchy in memory,
             * just the sections that are currently being displayed by
             * every current view.
             *
             * A model should be expected to be able to get an iter independent
             * of its reffed state.
             * @param iter the #GtkTreeIter-struct
             */
            ref_node(iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
             *
             * This should be called by models after a row has been removed.
             * The location pointed to by `path` should be the location that
             * the row previously was at. It may not be a valid location anymore.
             *
             * Nodes that are deleted are not unreffed, this means that any
             * outstanding references on the deleted node should not be released.
             * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
             */
            row_deleted(path: Gtk.TreePath): void;
            /**
             * Emits the #GtkTreeModel::row-has-child-toggled signal on
             * `tree_model`. This should be called by models after the child
             * state of a node changes.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the inserted row
             * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
             */
            row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::rows-reordered signal on `tree_model`.
             *
             * This should be called by models when their rows have been
             * reordered.
             * @param path a #GtkTreePath-struct pointing to the tree node whose children     have been reordered
             * @param iter a valid #GtkTreeIter-struct pointing to the node     whose children have been reordered, or %NULL if the depth     of @path is 0
             * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. @new_order`[newpos] = oldpos`
             */
            rows_reordered(path: Gtk.TreePath, iter: Gtk.TreeIter | null, new_order: number[]): void;
            /**
             * Lets the tree unref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons. For more information on what
             * this means, see gtk_tree_model_ref_node().
             *
             * Please note that nodes that are deleted are not unreffed.
             * @param iter the #GtkTreeIter-struct
             */
            unref_node(iter: Gtk.TreeIter): void;
            /**
             * Returns the type of the column.
             * @param index_ the column index
             */
            vfunc_get_column_type(index_: number): GObject.GType;
            /**
             * Returns a set of flags supported by this interface.
             *
             * The flags are a bitwise combination of #GtkTreeModelFlags.
             * The flags supported should not change during the lifetime
             * of the `tree_model`.
             */
            vfunc_get_flags(): Gtk.TreeModelFlags;
            /**
             * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
             * not exist, `iter` is set to an invalid iterator and %FALSE is returned.
             * @param path the #GtkTreePath-struct
             */
            vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];
            /**
             * Returns the number of columns supported by `tree_model`.
             */
            vfunc_get_n_columns(): number;
            /**
             * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
             *
             * This path should be freed with gtk_tree_path_free().
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;
            /**
             * Initializes and sets `value` to that at `column`.
             *
             * When done with `value,` g_value_unset() needs to be called
             * to free any allocated memory.
             * @param iter the #GtkTreeIter-struct
             * @param column the column to lookup the value at
             */
            vfunc_get_value(iter: Gtk.TreeIter, column: number): unknown;
            /**
             * Sets `iter` to point to the first child of `parent`.
             *
             * If `parent` has no children, %FALSE is returned and `iter` is
             * set to be invalid. `parent` will remain a valid node after this
             * function has been called.
             *
             * If `parent` is %NULL returns the first node, equivalent to
             * `gtk_tree_model_get_iter_first (tree_model, iter);`
             * @param parent the #GtkTreeIter-struct, or %NULL
             */
            vfunc_iter_children(parent?: Gtk.TreeIter | null): [boolean, Gtk.TreeIter];
            /**
             * Returns %TRUE if `iter` has children, %FALSE otherwise.
             * @param iter the #GtkTreeIter-struct to test for children
             */
            vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;
            /**
             * Returns the number of children that `iter` has.
             *
             * As a special case, if `iter` is %NULL, then the number
             * of toplevel nodes is returned.
             * @param iter the #GtkTreeIter-struct, or %NULL
             */
            vfunc_iter_n_children(iter?: Gtk.TreeIter | null): number;
            /**
             * Sets `iter` to point to the node following it at the current level.
             *
             * If there is no next `iter,` %FALSE is returned and `iter` is set
             * to be invalid.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_iter_next(iter: Gtk.TreeIter): boolean;
            /**
             * Sets `iter` to be the child of `parent,` using the given index.
             *
             * The first index is 0. If `n` is too big, or `parent` has no children,
             * `iter` is set to an invalid iterator and %FALSE is returned. `parent`
             * will remain a valid node after this function has been called. As a
             * special case, if `parent` is %NULL, then the `n-th` root node
             * is set.
             * @param parent the #GtkTreeIter-struct to get the child from, or %NULL.
             * @param n the index of the desired child
             */
            vfunc_iter_nth_child(parent: Gtk.TreeIter | null, n: number): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to be the parent of `child`.
             *
             * If `child` is at the toplevel, and doesn’t have a parent, then
             * `iter` is set to an invalid iterator and %FALSE is returned.
             * `child` will remain a valid node after this function has been
             * called.
             *
             * `iter` will be initialized before the lookup is performed, so `child`
             * and `iter` cannot point to the same memory location.
             * @param child the #GtkTreeIter-struct
             */
            vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];
            /**
             * Sets `iter` to point to the previous node at the current level.
             *
             * If there is no previous `iter,` %FALSE is returned and `iter` is
             * set to be invalid.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_iter_previous(iter: Gtk.TreeIter): boolean;
            /**
             * Lets the tree ref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons.
             *
             * This function is primarily meant as a way for views to let
             * caching models know when nodes are being displayed (and hence,
             * whether or not to cache that node). Being displayed means a node
             * is in an expanded branch, regardless of whether the node is currently
             * visible in the viewport. For example, a file-system based model
             * would not want to keep the entire file-hierarchy in memory,
             * just the sections that are currently being displayed by
             * every current view.
             *
             * A model should be expected to be able to get an iter independent
             * of its reffed state.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_ref_node(iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-changed signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-deleted signal on `tree_model`.
             *
             * This should be called by models after a row has been removed.
             * The location pointed to by `path` should be the location that
             * the row previously was at. It may not be a valid location anymore.
             *
             * Nodes that are deleted are not unreffed, this means that any
             * outstanding references on the deleted node should not be released.
             * @param path a #GtkTreePath-struct pointing to the previous location of     the deleted row
             */
            vfunc_row_deleted(path: Gtk.TreePath): void;
            /**
             * Emits the #GtkTreeModel::row-has-child-toggled signal on
             * `tree_model`. This should be called by models after the child
             * state of a node changes.
             * @param path a #GtkTreePath-struct pointing to the changed row
             * @param iter a valid #GtkTreeIter-struct pointing to the changed row
             */
            vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Emits the #GtkTreeModel::row-inserted signal on `tree_model`.
             * @param path a #GtkTreePath-struct pointing to the inserted row
             * @param iter a valid #GtkTreeIter-struct pointing to the inserted row
             */
            vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;
            /**
             * Lets the tree unref the node.
             *
             * This is an optional method for models to implement.
             * To be more specific, models may ignore this call as it exists
             * primarily for performance reasons. For more information on what
             * this means, see gtk_tree_model_ref_node().
             *
             * Please note that nodes that are deleted are not unreffed.
             * @param iter the #GtkTreeIter-struct
             */
            vfunc_unref_node(iter: Gtk.TreeIter): void;
            /**
             * Fills in `sort_column_id` and `order` with the current sort column and the
             * order. It returns %TRUE unless the `sort_column_id` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
             * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
             * @returns %TRUE if the sort column is not one of the special sort   column ids.
             */
            get_sort_column_id(): [boolean, number, Gtk.SortType];
            /**
             * Returns %TRUE if the model has a default sort function. This is used
             * primarily by GtkTreeViewColumns in order to determine if a model can
             * go back to the default state, or not.
             * @returns %TRUE, if the model has a default sort function
             */
            has_default_sort_func(): boolean;
            /**
             * Sets the default comparison function used when sorting to be `sort_func`.
             * If the current sort column id of `sortable` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
             * this function.
             *
             * If `sort_func` is %NULL, then there will be no default comparison function.
             * This means that once the model  has been sorted, it can’t go back to the
             * default state. In this case, when the current sort column id of `sortable`
             * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
            /**
             * Sets the current sort column to be `sort_column_id`. The `sortable` will
             * resort itself to reflect this change, after emitting a
             * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
             * a regular column id, or one of the following special values:
             *
             * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
             *   will be used, if it is set
             *
             * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
             * @param sort_column_id the sort column id to set
             * @param order The sort order of the column
             */
            set_sort_column_id(sort_column_id: number, order: Gtk.SortType | null): void;
            /**
             * Sets the comparison function used when sorting to be `sort_func`. If the
             * current sort column id of `sortable` is the same as `sort_column_id,` then
             * the model will sort using this function.
             * @param sort_column_id the sort column id to set the function for
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            set_sort_func(
                sort_column_id: number,
                sort_func: Gtk.TreeIterCompareFunc,
                destroy?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
             */
            sort_column_changed(): void;
            /**
             * Fills in `sort_column_id` and `order` with the current sort column and the
             * order. It returns %TRUE unless the `sort_column_id` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID or
             * %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID.
             */
            vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];
            /**
             * Returns %TRUE if the model has a default sort function. This is used
             * primarily by GtkTreeViewColumns in order to determine if a model can
             * go back to the default state, or not.
             */
            vfunc_has_default_sort_func(): boolean;
            /**
             * Sets the default comparison function used when sorting to be `sort_func`.
             * If the current sort column id of `sortable` is
             * %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, then the model will sort using
             * this function.
             *
             * If `sort_func` is %NULL, then there will be no default comparison function.
             * This means that once the model  has been sorted, it can’t go back to the
             * default state. In this case, when the current sort column id of `sortable`
             * is %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID, the model will be unsorted.
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
            /**
             * Sets the current sort column to be `sort_column_id`. The `sortable` will
             * resort itself to reflect this change, after emitting a
             * #GtkTreeSortable::sort-column-changed signal. `sort_column_id` may either be
             * a regular column id, or one of the following special values:
             *
             * - %GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: the default sort function
             *   will be used, if it is set
             *
             * - %GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: no sorting will occur
             * @param sort_column_id the sort column id to set
             * @param order The sort order of the column
             */
            vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;
            /**
             * Sets the comparison function used when sorting to be `sort_func`. If the
             * current sort column id of `sortable` is the same as `sort_column_id,` then
             * the model will sort using this function.
             * @param sort_column_id the sort column id to set the function for
             * @param sort_func The comparison function
             * @param destroy Destroy notifier of @user_data, or %NULL
             */
            vfunc_set_sort_func(
                sort_column_id: number,
                sort_func: Gtk.TreeIterCompareFunc,
                destroy?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Emits a #GtkTreeSortable::sort-column-changed signal on `sortable`.
             */
            vfunc_sort_column_changed(): void;
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
            // Conflicted with Gtk.ListStore.set
            set(...args: never[]): any;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module RemotePresenter {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Window.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                next_action: string;
                nextAction: string;
                prev_action: string;
                prevAction: string;
                thumbview: ThumbView;
            }
        }

        class RemotePresenter extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<RemotePresenter>;

            // Properties

            get next_action(): string;
            get nextAction(): string;
            get prev_action(): string;
            get prevAction(): string;
            get thumbview(): ThumbView;

            // Fields

            // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
            window: Gtk.Window;

            // Constructors

            constructor(properties?: Partial<RemotePresenter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                parent: Gtk.Window,
                thumbview: ThumbView,
                next_image_action: string,
                previous_image_action: string,
            ): RemotePresenter;
            // Conflicted with Gtk.Window.new

            static ['new'](...args: never[]): any;

            // Methods

            update(image: Image): void;

            // Inherited methods
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

        module ScrollView {
            // Signal callback interfaces

            interface NextImage {
                (): void;
            }

            interface PreviousImage {
                (): void;
            }

            interface RotationChanged {
                (object: number): void;
            }

            interface ZoomChanged {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Overlay.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                antialiasing_in: boolean;
                antialiasingIn: boolean;
                antialiasing_out: boolean;
                antialiasingOut: boolean;
                background_color: Gdk.RGBA;
                backgroundColor: Gdk.RGBA;
                image: Image;
                scrollwheel_zoom: boolean;
                scrollwheelZoom: boolean;
                transparency_color: Gdk.RGBA;
                transparencyColor: Gdk.RGBA;
                transparency_style: TransparencyStyle;
                transparencyStyle: TransparencyStyle;
                use_background_color: boolean;
                useBackgroundColor: boolean;
                zoom_mode: ZoomMode;
                zoomMode: ZoomMode;
                zoom_multiplier: number;
                zoomMultiplier: number;
            }
        }

        class ScrollView extends Gtk.Overlay implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<ScrollView>;

            // Properties

            /**
             * If %TRUE the displayed image will be filtered in a second pass
             * while being zoomed in.
             */
            get antialiasing_in(): boolean;
            set antialiasing_in(val: boolean);
            /**
             * If %TRUE the displayed image will be filtered in a second pass
             * while being zoomed in.
             */
            get antialiasingIn(): boolean;
            set antialiasingIn(val: boolean);
            /**
             * If %TRUE the displayed image will be filtered in a second pass
             * while being zoomed out.
             */
            get antialiasing_out(): boolean;
            set antialiasing_out(val: boolean);
            /**
             * If %TRUE the displayed image will be filtered in a second pass
             * while being zoomed out.
             */
            get antialiasingOut(): boolean;
            set antialiasingOut(val: boolean);
            /**
             * This is the default background color used for painting the background
             * of the image view. If set to %NULL the color is determined by the
             * active GTK theme.
             */
            get background_color(): Gdk.RGBA;
            set background_color(val: Gdk.RGBA);
            /**
             * This is the default background color used for painting the background
             * of the image view. If set to %NULL the color is determined by the
             * active GTK theme.
             */
            get backgroundColor(): Gdk.RGBA;
            set backgroundColor(val: Gdk.RGBA);
            /**
             * This is the currently display #EogImage.
             */
            get image(): Image;
            set image(val: Image);
            /**
             * If %TRUE the scrollwheel will zoom the view, otherwise it will be
             * used for scrolling a zoomed image.
             */
            get scrollwheel_zoom(): boolean;
            set scrollwheel_zoom(val: boolean);
            /**
             * If %TRUE the scrollwheel will zoom the view, otherwise it will be
             * used for scrolling a zoomed image.
             */
            get scrollwheelZoom(): boolean;
            set scrollwheelZoom(val: boolean);
            /**
             * This is the color used to fill the transparent parts of an image
             * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
             */
            set transparency_color(val: Gdk.RGBA);
            /**
             * This is the color used to fill the transparent parts of an image
             * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
             */
            set transparencyColor(val: Gdk.RGBA);
            /**
             * Determines how to fill the shown image's transparent areas.
             */
            get transparency_style(): TransparencyStyle;
            set transparency_style(val: TransparencyStyle);
            /**
             * Determines how to fill the shown image's transparent areas.
             */
            get transparencyStyle(): TransparencyStyle;
            set transparencyStyle(val: TransparencyStyle);
            get use_background_color(): boolean;
            set use_background_color(val: boolean);
            get useBackgroundColor(): boolean;
            set useBackgroundColor(val: boolean);
            get zoom_mode(): ZoomMode;
            set zoom_mode(val: ZoomMode);
            get zoomMode(): ZoomMode;
            set zoomMode(val: ZoomMode);
            /**
             * The current zoom factor is multiplied with this value + 1.0 when
             * scrolling with the scrollwheel to determine the next zoom factor.
             */
            get zoom_multiplier(): number;
            set zoom_multiplier(val: number);
            /**
             * The current zoom factor is multiplied with this value + 1.0 when
             * scrolling with the scrollwheel to determine the next zoom factor.
             */
            get zoomMultiplier(): number;
            set zoomMultiplier(val: number);

            // Fields

            base_instance: Gtk.Overlay;

            // Constructors

            constructor(properties?: Partial<ScrollView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ScrollView;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'next-image', callback: (_source: this) => void): number;
            connect_after(signal: 'next-image', callback: (_source: this) => void): number;
            emit(signal: 'next-image'): void;
            connect(signal: 'previous-image', callback: (_source: this) => void): number;
            connect_after(signal: 'previous-image', callback: (_source: this) => void): number;
            emit(signal: 'previous-image'): void;
            connect(signal: 'rotation-changed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'rotation-changed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'rotation-changed', object: number): void;
            connect(signal: 'zoom-changed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'zoom-changed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'zoom-changed', object: number): void;

            // Virtual methods

            vfunc_next_image(): void;
            vfunc_previous_image(): void;
            vfunc_rotation_changed(degrees: number): void;
            vfunc_zoom_changed(zoom: number): void;

            // Methods

            /**
             * Tells if `ev'`s originates from inside the image area. `view` must be
             * realized and have an image set for this to work.
             *
             * It only works with #GdkEvent<!-- -->s that supply coordinate data,
             * i.e. #GdkEventButton.
             * @param ev A #GdkEvent which must have window-relative coordinates.
             * @returns %TRUE if @ev originates from over the image, %FALSE otherwise.
             */
            event_is_over_image(ev: Gdk.Event): boolean;
            /**
             * Gets the currently displayed #EogImage.
             * @returns An #EogImage.
             */
            get_image(): Image;
            get_zoom(): number;
            get_zoom_is_max(): boolean;
            get_zoom_is_min(): boolean;
            get_zoom_mode(): ZoomMode;
            hide_cursor(): void;
            is_image_movable(): boolean;
            override_bg_color(color: Gdk.RGBA): void;
            set_antialiasing_in(state: boolean): void;
            set_antialiasing_out(state: boolean): void;
            set_background_color(color: Gdk.RGBA): void;
            set_image(image: Image): void;
            set_popup(menu: Gtk.Menu): void;
            set_scroll_wheel_zoom(scroll_wheel_zoom: boolean): void;
            set_transparency(style: TransparencyStyle | null): void;
            set_transparency_color(color: Gdk.RGBA): void;
            set_use_bg_color(use: boolean): void;
            set_zoom(zoom: number): void;
            set_zoom_mode(mode: ZoomMode | null): void;
            set_zoom_multiplier(multiplier: number): void;
            set_zoom_upscale(upscale: boolean): void;
            show_cursor(): void;
            zoom_in(smooth: boolean): void;
            zoom_out(smooth: boolean): void;

            // Inherited properties
            /**
             * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
             * shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
             * between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the #GtkAdjustment used for horizontal scrolling.
             * @returns horizontal #GtkAdjustment.
             */
            get_hadjustment(): Gtk.Adjustment;
            /**
             * Gets the horizontal #GtkScrollablePolicy.
             * @returns The horizontal #GtkScrollablePolicy.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the #GtkAdjustment used for vertical scrolling.
             * @returns vertical #GtkAdjustment.
             */
            get_vadjustment(): Gtk.Adjustment;
            /**
             * Gets the vertical #GtkScrollablePolicy.
             * @returns The vertical #GtkScrollablePolicy.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the #GtkScrollable.
             * @param hadjustment a #GtkAdjustment
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * horizontal scrolling should start below the minimum width or
             * below the natural width.
             * @param policy the horizontal #GtkScrollablePolicy
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Sets the vertical adjustment of the #GtkScrollable.
             * @param vadjustment a #GtkAdjustment
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * vertical scrolling should start below the minimum height or
             * below the natural height.
             * @param policy the vertical #GtkScrollablePolicy
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
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

        module Sidebar {
            // Signal callback interfaces

            interface PageAdded {
                (object: Gtk.Widget): void;
            }

            interface PageRemoved {
                (object: Gtk.Widget): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Box.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {
                current_page: Gtk.Widget;
                currentPage: Gtk.Widget;
            }
        }

        class Sidebar extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<Sidebar>;

            // Properties

            get current_page(): Gtk.Widget;
            set current_page(val: Gtk.Widget);
            get currentPage(): Gtk.Widget;
            set currentPage(val: Gtk.Widget);

            // Fields

            base_instance: Gtk.Box;

            // Constructors

            constructor(properties?: Partial<Sidebar.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Sidebar;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'page-added', callback: (_source: this, object: Gtk.Widget) => void): number;
            connect_after(signal: 'page-added', callback: (_source: this, object: Gtk.Widget) => void): number;
            emit(signal: 'page-added', object: Gtk.Widget): void;
            connect(signal: 'page-removed', callback: (_source: this, object: Gtk.Widget) => void): number;
            connect_after(signal: 'page-removed', callback: (_source: this, object: Gtk.Widget) => void): number;
            emit(signal: 'page-removed', object: Gtk.Widget): void;

            // Virtual methods

            vfunc_page_added(main_widget: Gtk.Widget): void;
            vfunc_page_removed(main_widget: Gtk.Widget): void;

            // Methods

            add_page(title: string, main_widget: Gtk.Widget): void;
            get_n_pages(): number;
            get_page_nr(): number;
            is_empty(): boolean;
            remove_page(main_widget: Gtk.Widget): void;
            set_page(main_widget: Gtk.Widget): void;
            set_page_nr(index: number): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

            // Inherited methods
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
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

        module Statusbar {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Statusbar.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {}
        }

        class Statusbar extends Gtk.Statusbar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<Statusbar>;

            // Constructors

            constructor(properties?: Partial<Statusbar.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Statusbar;

            // Methods

            set_image_number(num: number, tot: number): void;
            set_progress(progress: number): void;

            // Inherited methods
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

        module ThumbNav {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Box.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Orientable.ConstructorProps {
                mode: number;
                show_buttons: boolean;
                showButtons: boolean;
                thumbview: ThumbView;
            }
        }

        class ThumbNav extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
            static $gtype: GObject.GType<ThumbNav>;

            // Properties

            get mode(): number;
            set mode(val: number);
            get show_buttons(): boolean;
            set show_buttons(val: boolean);
            get showButtons(): boolean;
            set showButtons(val: boolean);
            get thumbview(): ThumbView;

            // Fields

            base_instance: Gtk.Box;

            // Constructors

            constructor(properties?: Partial<ThumbNav.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean): ThumbNav;
            // Conflicted with Gtk.Box.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Gets the navigation mode in `nav`.
             * @returns A value in #EogThumbNavMode.
             */
            get_mode(): ThumbNavMode;
            /**
             * Gets whether the navigation buttons are visible.
             * @returns %TRUE if the navigation buttons are visible, %FALSE otherwise.
             */
            get_show_buttons(): boolean;
            /**
             * Sets the navigation mode in `nav`. See #EogThumbNavMode for details.
             * @param mode One of #EogThumbNavMode.
             */
            set_mode(mode: ThumbNavMode | null): void;
            /**
             * Sets whether the navigation buttons to the left and right of the
             * widget should be visible.
             * @param show_buttons %TRUE to show the buttons, %FALSE to hide them.
             */
            set_show_buttons(show_buttons: boolean): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);

            // Inherited methods
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
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

        module ThumbView {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.IconView.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.CellLayout.ConstructorProps,
                    Gtk.Orientable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {}
        }

        class ThumbView
            extends Gtk.IconView
            implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellLayout, Gtk.Orientable, Gtk.Scrollable
        {
            static $gtype: GObject.GType<ThumbView>;

            // Fields

            icon_view: Gtk.IconView;

            // Constructors

            constructor(properties?: Partial<ThumbView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ThumbView;

            // Methods

            /**
             * Returns the first selected image. Note that the returned #EogImage
             * is not ensured to be really the first selected image in `thumbview,` but
             * generally, it will be.
             * @returns A #EogImage.
             */
            get_first_selected_image(): Image;
            /**
             * Gets the number of images that are currently selected in `thumbview`.
             * @returns the number of selected images in @thumbview.
             */
            get_n_selected(): number;
            /**
             * Gets a list with the currently selected images. Note that a new reference is
             * hold for each image and the list must be freed with g_list_free().
             * @returns A newly allocated list of #EogImage's.
             */
            get_selected_images(): Image[];
            /**
             * Changes the current selection according to a single movement
             * described by #EogThumbViewSelectionChange. If there are no
             * thumbnails currently selected, one is selected according to the
             * natural selection according to the #EogThumbViewSelectionChange
             * used, p.g., when %EOG_THUMB_VIEW_SELECT_RIGHT is the selected change,
             * the first thumbnail will be selected.
             * @param change A #EogThumbViewSelectionChange, describing the desired selection change.
             */
            select_single(change: ThumbViewSelectionChange | null): void;
            /**
             * Changes the status of a image, marking it as currently selected.
             * If `deselect_other` is %TRUE, all other selected images will be
             * deselected.
             * @param image The image to be selected.
             * @param deselect_other Whether to deselect currently selected images.
             */
            set_current_image(image: Image, deselect_other: boolean): void;
            /**
             * Sets the height of each thumbnail in `thumbview`.
             * @param height The desired height.
             */
            set_item_height(height: number): void;
            /**
             * Sets the #EogListStore to be used with `thumbview`. If an initial image
             * was set during `store` creation, its thumbnail will be selected and visible.
             * @param store A #EogListStore.
             */
            set_model(store: ListStore): void;
            // Conflicted with Gtk.IconView.set_model
            set_model(...args: never[]): any;
            /**
             * Set the contextual menu to be used with the thumbnails in the
             * widget. This can be done only once.
             * @param menu A #GtkMenu.
             */
            set_thumbnail_popup(menu: Gtk.Menu): void;

            // Inherited properties
            /**
             * The orientation of the orientable.
             */
            get orientation(): Gtk.Orientation;
            set orientation(val: Gtk.Orientation);
            /**
             * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
             * shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
             * between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Adds an attribute mapping to the list in `cell_layout`.
             *
             * The `column` is the column of the model to get a value from, and the
             * `attribute` is the parameter on `cell` to be set from the value. So for
             * example if column 2 of the model contains strings, you could have the
             * “text” attribute of a #GtkCellRendererText get its values from column 2.
             * @param cell a #GtkCellRenderer
             * @param attribute an attribute on the renderer
             * @param column the column position on the model to get the attribute from
             */
            add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
            /**
             * Unsets all the mappings on all renderers on `cell_layout` and
             * removes all renderers from `cell_layout`.
             */
            clear(): void;
            /**
             * Clears all existing attributes previously set with
             * gtk_cell_layout_set_attributes().
             * @param cell a #GtkCellRenderer to clear the attribute mapping on
             */
            clear_attributes(cell: Gtk.CellRenderer): void;
            /**
             * Returns the underlying #GtkCellArea which might be `cell_layout`
             * if called on a #GtkCellArea or might be %NULL if no #GtkCellArea
             * is used by `cell_layout`.
             * @returns the cell area used by @cell_layout, or %NULL in case no cell area is used.
             */
            get_area(): Gtk.CellArea | null;
            /**
             * Returns the cell renderers which have been added to `cell_layout`.
             * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with g_list_free()     when no longer needed.
             */
            get_cells(): Gtk.CellRenderer[];
            /**
             * Adds the `cell` to the end of `cell_layout`. If `expand` is %FALSE, then the
             * `cell` is allocated no more space than it needs. Any unused space is
             * divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Packs the `cell` into the beginning of `cell_layout`. If `expand` is %FALSE,
             * then the `cell` is allocated no more space than it needs. Any unused space
             * is divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Re-inserts `cell` at `position`.
             *
             * Note that `cell` has already to be packed into `cell_layout`
             * for this to function properly.
             * @param cell a #GtkCellRenderer to reorder
             * @param position new position to insert @cell at
             */
            reorder(cell: Gtk.CellRenderer, position: number): void;
            /**
             * Sets the #GtkCellLayoutDataFunc to use for `cell_layout`.
             *
             * This function is used instead of the standard attributes mapping
             * for setting the column value, and should set the value of `cell_layout’`s
             * cell renderer(s) as appropriate.
             *
             * `func` may be %NULL to remove a previously set function.
             * @param cell a #GtkCellRenderer
             * @param func the #GtkCellLayoutDataFunc to use, or %NULL
             */
            set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
            /**
             * Adds an attribute mapping to the list in `cell_layout`.
             *
             * The `column` is the column of the model to get a value from, and the
             * `attribute` is the parameter on `cell` to be set from the value. So for
             * example if column 2 of the model contains strings, you could have the
             * “text” attribute of a #GtkCellRendererText get its values from column 2.
             * @param cell a #GtkCellRenderer
             * @param attribute an attribute on the renderer
             * @param column the column position on the model to get the attribute from
             */
            vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
            /**
             * Unsets all the mappings on all renderers on `cell_layout` and
             * removes all renderers from `cell_layout`.
             */
            vfunc_clear(): void;
            /**
             * Clears all existing attributes previously set with
             * gtk_cell_layout_set_attributes().
             * @param cell a #GtkCellRenderer to clear the attribute mapping on
             */
            vfunc_clear_attributes(cell: Gtk.CellRenderer): void;
            /**
             * Returns the underlying #GtkCellArea which might be `cell_layout`
             * if called on a #GtkCellArea or might be %NULL if no #GtkCellArea
             * is used by `cell_layout`.
             */
            vfunc_get_area(): Gtk.CellArea | null;
            /**
             * Returns the cell renderers which have been added to `cell_layout`.
             */
            vfunc_get_cells(): Gtk.CellRenderer[];
            /**
             * Adds the `cell` to the end of `cell_layout`. If `expand` is %FALSE, then the
             * `cell` is allocated no more space than it needs. Any unused space is
             * divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Packs the `cell` into the beginning of `cell_layout`. If `expand` is %FALSE,
             * then the `cell` is allocated no more space than it needs. Any unused space
             * is divided evenly between cells for which `expand` is %TRUE.
             *
             * Note that reusing the same cell renderer is not supported.
             * @param cell a #GtkCellRenderer
             * @param expand %TRUE if @cell is to be given extra space allocated to @cell_layout
             */
            vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
            /**
             * Re-inserts `cell` at `position`.
             *
             * Note that `cell` has already to be packed into `cell_layout`
             * for this to function properly.
             * @param cell a #GtkCellRenderer to reorder
             * @param position new position to insert @cell at
             */
            vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;
            /**
             * Sets the #GtkCellLayoutDataFunc to use for `cell_layout`.
             *
             * This function is used instead of the standard attributes mapping
             * for setting the column value, and should set the value of `cell_layout’`s
             * cell renderer(s) as appropriate.
             *
             * `func` may be %NULL to remove a previously set function.
             * @param cell a #GtkCellRenderer
             * @param func the #GtkCellLayoutDataFunc to use, or %NULL
             */
            vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func?: Gtk.CellLayoutDataFunc | null): void;
            /**
             * Retrieves the orientation of the `orientable`.
             * @returns the orientation of the @orientable.
             */
            get_orientation(): Gtk.Orientation;
            /**
             * Sets the orientation of the `orientable`.
             * @param orientation the orientable’s new orientation.
             */
            set_orientation(orientation: Gtk.Orientation | null): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the #GtkAdjustment used for horizontal scrolling.
             * @returns horizontal #GtkAdjustment.
             */
            get_hadjustment(): Gtk.Adjustment;
            /**
             * Gets the horizontal #GtkScrollablePolicy.
             * @returns The horizontal #GtkScrollablePolicy.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the #GtkAdjustment used for vertical scrolling.
             * @returns vertical #GtkAdjustment.
             */
            get_vadjustment(): Gtk.Adjustment;
            /**
             * Gets the vertical #GtkScrollablePolicy.
             * @returns The vertical #GtkScrollablePolicy.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the #GtkScrollable.
             * @param hadjustment a #GtkAdjustment
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * horizontal scrolling should start below the minimum width or
             * below the natural width.
             * @param policy the horizontal #GtkScrollablePolicy
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Sets the vertical adjustment of the #GtkScrollable.
             * @param vadjustment a #GtkAdjustment
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * vertical scrolling should start below the minimum height or
             * below the natural height.
             * @param policy the vertical #GtkScrollablePolicy
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
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

        module Transform {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Transform extends GObject.Object {
            static $gtype: GObject.GType<Transform>;

            // Constructors

            constructor(properties?: Partial<Transform.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static flip_new(type: TransformType): Transform;

            static identity_new(): Transform;

            static ['new'](trans: TransformType): Transform;

            static rotate_new(degree: number): Transform;

            // Methods

            /**
             * Applies the transformation in `trans` to `pixbuf,` setting its progress in `job`.
             * @param pixbuf a #GdkPixbuf
             * @param job a #EogJob
             * @returns A new #GdkPixbuf with the transformation applied.
             */
            apply(pixbuf: GdkPixbuf.Pixbuf, job: Job): GdkPixbuf.Pixbuf;
            compose(compose: Transform): Transform;
            get_affine(affine: cairo.Matrix): boolean;
            get_transform_type(): TransformType;
            is_identity(): boolean;
            /**
             * Creates the reverse transformation of `trans`
             * @returns a new transformation
             */
            reverse(): Transform;
        }

        module URIConverter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                convert_spaces: boolean;
                convertSpaces: boolean;
                counter_n_digits: number;
                counterNDigits: number;
                counter_start: number;
                counterStart: number;
                n_images: number;
                nImages: number;
                space_character: number;
                spaceCharacter: number;
            }
        }

        class URIConverter extends GObject.Object {
            static $gtype: GObject.GType<URIConverter>;

            // Properties

            get convert_spaces(): boolean;
            set convert_spaces(val: boolean);
            get convertSpaces(): boolean;
            set convertSpaces(val: boolean);
            get counter_n_digits(): number;
            set counter_n_digits(val: number);
            get counterNDigits(): number;
            set counterNDigits(val: number);
            get counter_start(): number;
            set counter_start(val: number);
            get counterStart(): number;
            set counterStart(val: number);
            set n_images(val: number);
            set nImages(val: number);
            get space_character(): number;
            set space_character(val: number);
            get spaceCharacter(): number;
            set spaceCharacter(val: number);

            // Constructors

            constructor(properties?: Partial<URIConverter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                base_file: Gio.File,
                img_format: GdkPixbuf.PixbufFormat,
                format_string: string,
            ): URIConverter;

            // Static methods

            static preview(
                format_str: string,
                img: Image,
                format: GdkPixbuf.PixbufFormat,
                counter: number,
                n_images: number,
                convert_spaces: boolean,
                space_char: number,
            ): string;

            // Methods

            check(img_list: Gio.File[]): boolean;
            ['do'](image: Image, file: Gio.File, format: GdkPixbuf.PixbufFormat): boolean;
            print_list(): void;
            requires_exif(): boolean;
        }

        module Window {
            // Signal callback interfaces

            interface Prepared {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.ApplicationWindow.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gio.ActionGroup.ConstructorProps,
                    Gio.ActionMap.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                gallery_position: WindowGalleryPos;
                galleryPosition: WindowGalleryPos;
                gallery_resizable: boolean;
                galleryResizable: boolean;
                startup_flags: StartupFlags;
                startupFlags: StartupFlags;
            }
        }

        class Window
            extends Gtk.ApplicationWindow
            implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable
        {
            static $gtype: GObject.GType<Window>;

            // Properties

            /**
             * Determines the position of the image gallery in the window
             * relative to the image.
             */
            get gallery_position(): WindowGalleryPos;
            set gallery_position(val: WindowGalleryPos);
            /**
             * Determines the position of the image gallery in the window
             * relative to the image.
             */
            get galleryPosition(): WindowGalleryPos;
            set galleryPosition(val: WindowGalleryPos);
            /**
             * If %TRUE the gallery will be resizable by the user otherwise it will be
             * in single column/row mode.
             */
            get gallery_resizable(): boolean;
            set gallery_resizable(val: boolean);
            /**
             * If %TRUE the gallery will be resizable by the user otherwise it will be
             * in single column/row mode.
             */
            get galleryResizable(): boolean;
            set galleryResizable(val: boolean);
            /**
             * A bitwise OR of #EogStartupFlags elements, indicating how the window
             * should behave upon creation.
             */
            get startup_flags(): StartupFlags;
            /**
             * A bitwise OR of #EogStartupFlags elements, indicating how the window
             * should behave upon creation.
             */
            get startupFlags(): StartupFlags;

            // Constructors

            constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](flags: StartupFlags): Window;
            // Conflicted with Gtk.ApplicationWindow.new

            static ['new'](...args: never[]): any;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'prepared', callback: (_source: this) => void): number;
            connect_after(signal: 'prepared', callback: (_source: this) => void): number;
            emit(signal: 'prepared'): void;

            // Virtual methods

            vfunc_prepared(): void;

            // Methods

            close(): void;
            get_gear_menu_section(id: string): Gio.Menu;
            /**
             * Gets the image currently displayed in `window` or %NULL if
             * no image is being displayed.
             * @returns an #EogImage.
             */
            get_image(): Image;
            /**
             * Gets the mode of `window`. See #EogWindowMode for details.
             * @returns An #EogWindowMode.
             */
            get_mode(): WindowMode;
            /**
             * Gets the remote presenter dialog. The widget will be built on the first call to this function.
             * @returns a #GtkWidget.
             */
            get_remote_presenter(): Gtk.Widget;
            /**
             * Gets the sidebar widget of `window`.
             * @returns the #EogSidebar.
             */
            get_sidebar(): Gtk.Widget;
            /**
             * Gets the statusbar in `window`.
             * @returns a #EogStatusbar.
             */
            get_statusbar(): Gtk.Widget;
            /**
             * Gets the #EogListStore that contains the images in the gallery
             * of `window`.
             * @returns an #EogListStore.
             */
            get_store(): ListStore;
            /**
             * Gets the thumbnails navigation pane in `window`.
             * @returns an #EogThumbNav.
             */
            get_thumb_nav(): Gtk.Widget;
            /**
             * Gets the thumbnails view in `window`.
             * @returns an #EogThumbView.
             */
            get_thumb_view(): Gtk.Widget;
            /**
             * Gets the #EogScrollView in the window.
             * @returns the #EogScrollView.
             */
            get_view(): Gtk.Widget;
            /**
             * Tells whether `window` is currently empty or not.
             * @returns %TRUE if @window has no images, %FALSE otherwise.
             */
            is_empty(): boolean;
            is_not_initializing(): boolean;
            /**
             * Opens a list of files, adding them to the gallery in `window`.
             * Files will be checked to be readable and later filtered according
             * with eog_list_store_add_files().
             * @param file_list A %NULL-terminated list of #GFile's.
             */
            open_file_list(file_list: Gio.File[]): void;
            reload_image(): void;
            /**
             * Changes the mode of `window` to normal, fullscreen, or slideshow.
             * See #EogWindowMode for details.
             * @param mode an #EogWindowMode value.
             */
            set_mode(mode: WindowMode | null): void;
            show_about_dialog(): void;
            show_preferences_dialog(): void;

            // Inherited methods
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             * @returns whether the action is currently enabled
             */
            get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             * @returns the parameter type
             */
            get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the current state of the action
             */
            get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             * @returns the state range hint
             */
            get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             * @returns the state type, if the action is stateful
             */
            get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             * @returns whether the named action exists
             */
            has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             * @returns a `NULL`-terminated array   of the names of the actions in the group
             */
            list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             * @returns `TRUE` if the action exists, else `FALSE`
             */
            query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
            /**
             * Emits the [signal`Gio`.ActionGroup::action-added] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_added(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-enabled-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param enabled whether the action is now enabled
             */
            vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-removed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             */
            vfunc_action_removed(action_name: string): void;
            /**
             * Emits the [signal`Gio`.ActionGroup::action-state-changed] signal on `action_group`.
             *
             * This function should only be called by [type`Gio`.ActionGroup] implementations.
             * @param action_name the name of an action in the group
             * @param state the new state of the named action
             */
            vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
            /**
             * Activate the named action within `action_group`.
             *
             * If the action is expecting a parameter, then the correct type of
             * parameter must be given as `parameter`.  If the action is expecting no
             * parameters then `parameter` must be `NULL`.  See
             * [method`Gio`.ActionGroup.get_action_parameter_type].
             *
             * If the [type`Gio`.ActionGroup] implementation supports asynchronous remote
             * activation over D-Bus, this call may return before the relevant
             * D-Bus traffic has been sent, or any replies have been received. In
             * order to block on such asynchronous activation calls,
             * [method`Gio`.DBusConnection.flush] should be called prior to the code, which
             * depends on the result of the action activation. Without flushing
             * the D-Bus connection, there is no guarantee that the action would
             * have been activated.
             *
             * The following code which runs in a remote app instance, shows an
             * example of a ‘quit’ action being activated on the primary app
             * instance over D-Bus. Here [method`Gio`.DBusConnection.flush] is called
             * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
             * may fail to be activated on the primary instance.
             *
             * ```c
             * // call ‘quit’ action on primary instance
             * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
             *
             * // make sure the action is activated now
             * g_dbus_connection_flush (…);
             *
             * g_debug ("Application has been terminated. Exiting.");
             *
             * exit (0);
             * ```
             * @param action_name the name of the action to activate
             * @param parameter parameters to the activation
             */
            vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
            /**
             * Request for the state of the named action within `action_group` to be
             * changed to `value`.
             *
             * The action must be stateful and `value` must be of the correct type.
             * See [method`Gio`.ActionGroup.get_action_state_type].
             *
             * This call merely requests a change.  The action may refuse to change
             * its state or may change its state to something other than `value`.
             * See [method`Gio`.ActionGroup.get_action_state_hint].
             *
             * If the `value` GVariant is floating, it is consumed.
             * @param action_name the name of the action to request the change on
             * @param value the new state
             */
            vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
            /**
             * Checks if the named action within `action_group` is currently enabled.
             *
             * An action must be enabled in order to be activated or in order to
             * have its state changed from outside callers.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_enabled(action_name: string): boolean;
            /**
             * Queries the type of the parameter that must be given when activating
             * the named action within `action_group`.
             *
             * When activating the action using [method`Gio`.ActionGroup.activate_action],
             * the [type`GLib`.Variant] given to that function must be of the type returned
             * by this function.
             *
             * In the case that this function returns `NULL`, you must not give any
             * [type`GLib`.Variant], but `NULL` instead.
             *
             * The parameter type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different parameter type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
            /**
             * Queries the current state of the named action within `action_group`.
             *
             * If the action is not stateful then `NULL` will be returned.  If the
             * action is stateful then the type of the return value is the type
             * given by [method`Gio`.ActionGroup.get_action_state_type].
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state(action_name: string): GLib.Variant | null;
            /**
             * Requests a hint about the valid range of values for the state of the
             * named action within `action_group`.
             *
             * If `NULL` is returned it either means that the action is not stateful
             * or that there is no hint about the valid range of values for the
             * state of the action.
             *
             * If a [type`GLib`.Variant] array is returned then each item in the array is a
             * possible value for the state.  If a [type`GLib`.Variant] pair (ie: two-tuple) is
             * returned then the tuple specifies the inclusive lower and upper bound
             * of valid values for the state.
             *
             * In any case, the information is merely a hint.  It may be possible to
             * have a state value outside of the hinted range and setting a value
             * within the range may fail.
             *
             * The return value (if non-`NULL`) should be freed with
             * [method`GLib`.Variant.unref] when it is no longer required.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
            /**
             * Queries the type of the state of the named action within
             * `action_group`.
             *
             * If the action is stateful then this function returns the
             * [type`GLib`.VariantType] of the state.  All calls to
             * [method`Gio`.ActionGroup.change_action_state] must give a [type`GLib`.Variant] of this
             * type and [method`Gio`.ActionGroup.get_action_state] will return a [type`GLib`.Variant]
             * of the same type.
             *
             * If the action is not stateful then this function will return `NULL`.
             * In that case, [method`Gio`.ActionGroup.get_action_state] will return `NULL`
             * and you must not call [method`Gio`.ActionGroup.change_action_state].
             *
             * The state type of a particular action will never change but it is
             * possible for an action to be removed and for a new action to be added
             * with the same name but a different state type.
             * @param action_name the name of the action to query
             */
            vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
            /**
             * Checks if the named action exists within `action_group`.
             * @param action_name the name of the action to check for
             */
            vfunc_has_action(action_name: string): boolean;
            /**
             * Lists the actions contained within `action_group`.
             *
             * The caller is responsible for freeing the list with [func`GLib`.strfreev] when
             * it is no longer required.
             */
            vfunc_list_actions(): string[];
            /**
             * Queries all aspects of the named action within an `action_group`.
             *
             * This function acquires the information available from
             * [method`Gio`.ActionGroup.has_action], [method`Gio`.ActionGroup.get_action_enabled],
             * [method`Gio`.ActionGroup.get_action_parameter_type],
             * [method`Gio`.ActionGroup.get_action_state_type],
             * [method`Gio`.ActionGroup.get_action_state_hint] and
             * [method`Gio`.ActionGroup.get_action_state] with a single function call.
             *
             * This provides two main benefits.
             *
             * The first is the improvement in efficiency that comes with not having
             * to perform repeated lookups of the action in order to discover
             * different things about it.  The second is that implementing
             * [type`Gio`.ActionGroup] can now be done by only overriding this one virtual
             * function.
             *
             * The interface provides a default implementation of this function that
             * calls the individual functions, as required, to fetch the
             * information.  The interface also provides default implementations of
             * those functions that call this function.  All implementations,
             * therefore, must override either this function or all of the others.
             *
             * If the action exists, `TRUE` is returned and any of the requested
             * fields (as indicated by having a non-`NULL` reference passed in) are
             * filled.  If the action doesn’t exist, `FALSE` is returned and the
             * fields may or may not have been modified.
             * @param action_name the name of an action in the group
             */
            vfunc_query_action(
                action_name: string,
            ): [
                boolean,
                boolean,
                GLib.VariantType | null,
                GLib.VariantType | null,
                GLib.Variant | null,
                GLib.Variant | null,
            ];
            /**
             * Adds an action to the `action_map`.
             *
             * If the action map already contains an action with the same name
             * as `action` then the old action is dropped from the action map.
             *
             * The action map takes its own reference on `action`.
             * @param action a [iface@Gio.Action]
             */
            add_action(action: Gio.Action): void;
            /**
             * A convenience function for creating multiple [class`Gio`.SimpleAction]
             * instances and adding them to a [iface`Gio`.ActionMap].
             *
             * Each action is constructed as per one [struct`Gio`.ActionEntry].
             *
             * ```c
             * static void
             * activate_quit (GSimpleAction *simple,
             *                GVariant      *parameter,
             *                gpointer       user_data)
             * {
             *   exit (0);
             * }
             *
             * static void
             * activate_print_string (GSimpleAction *simple,
             *                        GVariant      *parameter,
             *                        gpointer       user_data)
             * {
             *   g_print ("%s\n", g_variant_get_string (parameter, NULL));
             * }
             *
             * static GActionGroup *
             * create_action_group (void)
             * {
             *   const GActionEntry entries[] = {
             *     { "quit",         activate_quit              },
             *     { "print-string", activate_print_string, "s" }
             *   };
             *   GSimpleActionGroup *group;
             *
             *   group = g_simple_action_group_new ();
             *   g_action_map_add_action_entries (G_ACTION_MAP (group), entries, G_N_ELEMENTS (entries), NULL);
             *
             *   return G_ACTION_GROUP (group);
             * }
             * ```
             * @param entries a pointer to   the first item in an array of [struct@Gio.ActionEntry] structs
             * @param user_data the user data for signal connections
             */
            add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
            /**
             * Looks up the action with the name `action_name` in `action_map`.
             *
             * If no such action exists, returns `NULL`.
             * @param action_name the name of an action
             * @returns a [iface@Gio.Action]
             */
            lookup_action(action_name: string): Gio.Action | null;
            /**
             * Removes the named action from the action map.
             *
             * If no action of this name is in the map then nothing happens.
             * @param action_name the name of the action
             */
            remove_action(action_name: string): void;
            /**
             * Remove actions from a [iface`Gio`.ActionMap]. This is meant as the reverse of
             * [method`Gio`.ActionMap.add_action_entries].
             *
             *
             * ```c
             * static const GActionEntry entries[] = {
             *     { "quit",         activate_quit              },
             *     { "print-string", activate_print_string, "s" }
             * };
             *
             * void
             * add_actions (GActionMap *map)
             * {
             *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
             * }
             *
             * void
             * remove_actions (GActionMap *map)
             * {
             *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
             * }
             * ```
             * @param entries a pointer to   the first item in an array of [struct@Gio.ActionEntry] structs
             */
            remove_action_entries(entries: Gio.ActionEntry[]): void;
            /**
             * Adds an action to the `action_map`.
             *
             * If the action map already contains an action with the same name
             * as `action` then the old action is dropped from the action map.
             *
             * The action map takes its own reference on `action`.
             * @param action a [iface@Gio.Action]
             */
            vfunc_add_action(action: Gio.Action): void;
            /**
             * Looks up the action with the name `action_name` in `action_map`.
             *
             * If no such action exists, returns `NULL`.
             * @param action_name the name of an action
             */
            vfunc_lookup_action(action_name: string): Gio.Action | null;
            /**
             * Removes the named action from the action map.
             *
             * If no action of this name is in the map then nothing happens.
             * @param action_name the name of the action
             */
            vfunc_remove_action(action_name: string): void;
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

        type ApplicationActivatableInterface = typeof ApplicationActivatable;
        type ApplicationClass = typeof Application;
        abstract class ApplicationPrivate {
            static $gtype: GObject.GType<ApplicationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ClipboardHandlerClass = typeof ClipboardHandler;
        abstract class ClipboardHandlerPrivate {
            static $gtype: GObject.GType<ClipboardHandlerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DetailsDialogClass = typeof DetailsDialog;
        abstract class DetailsDialogPrivate {
            static $gtype: GObject.GType<DetailsDialogPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileChooserClass = typeof FileChooser;
        abstract class FileChooserPrivate {
            static $gtype: GObject.GType<FileChooserPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImageClass = typeof Image;
        abstract class ImagePrivate {
            static $gtype: GObject.GType<ImagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImageSaveInfoClass = typeof ImageSaveInfo;
        type JobClass = typeof Job;
        type JobCopyClass = typeof JobCopy;
        type JobLoadClass = typeof JobLoad;
        type JobModelClass = typeof JobModel;
        type JobSaveAsClass = typeof JobSaveAs;
        type JobSaveClass = typeof JobSave;
        type JobThumbnailClass = typeof JobThumbnail;
        type JobTransformClass = typeof JobTransform;
        type ListStoreClass = typeof ListStore;
        abstract class ListStorePrivate {
            static $gtype: GObject.GType<ListStorePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RemotePresenterClass = typeof RemotePresenter;
        abstract class RemotePresenterPrivate {
            static $gtype: GObject.GType<RemotePresenterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ScrollViewClass = typeof ScrollView;
        abstract class ScrollViewPrivate {
            static $gtype: GObject.GType<ScrollViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SidebarClass = typeof Sidebar;
        abstract class SidebarPrivate {
            static $gtype: GObject.GType<SidebarPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type StatusbarClass = typeof Statusbar;
        abstract class StatusbarPrivate {
            static $gtype: GObject.GType<StatusbarPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ThumbNavClass = typeof ThumbNav;
        abstract class ThumbNavPrivate {
            static $gtype: GObject.GType<ThumbNavPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ThumbViewClass = typeof ThumbView;
        abstract class ThumbViewPrivate {
            static $gtype: GObject.GType<ThumbViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TransformClass = typeof Transform;
        abstract class TransformPrivate {
            static $gtype: GObject.GType<TransformPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class UCInfo {
            static $gtype: GObject.GType<UCInfo>;

            // Fields

            description: string;
            rep: string;
            req_exif: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    description: string;
                    rep: string;
                    req_exif: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        type URIConverterClass = typeof URIConverter;
        abstract class URIConverterPrivate {
            static $gtype: GObject.GType<URIConverterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WindowActivatableInterface = typeof WindowActivatable;
        type WindowClass = typeof Window;
        abstract class WindowPrivate {
            static $gtype: GObject.GType<WindowPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module ApplicationActivatable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                app: Application;
            }
        }

        export interface ApplicationActivatableNamespace {
            $gtype: GObject.GType<ApplicationActivatable>;
            prototype: ApplicationActivatable;
        }
        interface ApplicationActivatable extends GObject.Object {
            // Properties

            /**
             * This is the #EogApplication this #EogApplicationActivatable instance
             * should be attached to.
             */
            get app(): Application;

            // Methods

            activate(): void;
            deactivate(): void;

            // Virtual methods

            vfunc_activate(): void;
            vfunc_deactivate(): void;
        }

        export const ApplicationActivatable: ApplicationActivatableNamespace & {
            new (): ApplicationActivatable; // This allows `obj instanceof ApplicationActivatable`
        };

        module WindowActivatable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                window: Window;
            }
        }

        export interface WindowActivatableNamespace {
            $gtype: GObject.GType<WindowActivatable>;
            prototype: WindowActivatable;
        }
        interface WindowActivatable extends GObject.Object {
            // Properties

            /**
             * This is the #EogWindow this #EogWindowActivatable instance
             * should be attached to.
             */
            get window(): Window;

            // Methods

            activate(): void;
            deactivate(): void;

            // Virtual methods

            vfunc_activate(): void;
            vfunc_deactivate(): void;
        }

        export const WindowActivatable: WindowActivatableNamespace & {
            new (): WindowActivatable; // This allows `obj instanceof WindowActivatable`
        };

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

    export default Eog;
}

declare module 'gi://Eog' {
    import Eog30 from 'gi://Eog?version=3.0';
    export default Eog30;
}
// END
