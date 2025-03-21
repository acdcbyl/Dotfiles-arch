/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GSound?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GSound {
        /**
         * GSound-1.0
         */

        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            static NOTSUPPORTED: number;
            static INVALID: number;
            static STATE: number;
            static OOM: number;
            static NODRIVER: number;
            static SYSTEM: number;
            static CORRUPT: number;
            static TOOBIG: number;
            static NOTFOUND: number;
            static DESTROYED: number;
            static CANCELED: number;
            static NOTAVAILABLE: number;
            static ACCESS: number;
            static IO: number;
            static INTERNAL: number;
            static DISABLED: number;
            static FORKED: number;
            static DISCONNECTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Binary icon data in PNG format for the application this sound event
         * is triggered by.
         */
        const ATTR_APPLICATION_ICON: string;
        /**
         * An icon name for the application this sound event is triggered by,
         * as defined in the XDG icon naming specification.
         */
        const ATTR_APPLICATION_ICON_NAME: string;
        /**
         * An identifier for the program this sound event was triggered
         * by. (e.g. "org.gnu.emacs").
         *
         * > This attribute will automatically be added to the #GSoundContext with
         * > the #GApplication:application-id if you are using #GApplication, so you
         * > normally do not need to supply this yourself.
         */
        const ATTR_APPLICATION_ID: string;
        /**
         * The locale string the application that is triggering this sound
         * event is running in. A POSIX locale string such as de_DE`euro`.
         */
        const ATTR_APPLICATION_LANGUAGE: string;
        /**
         * The name of the application this sound event was triggered by as
         * human readable string. (e.g. "GNU Emacs") Localized if possible and
         * applicable.
         *
         * > This attribute will automatically be added to the #GSoundContext if
         * > it has previously been set with g_set_application_name(), so you normally
         * > do not need to supply this yourself.
         */
        const ATTR_APPLICATION_NAME: string;
        /**
         * The path to the process binary of the process that is triggering this sound event.
         */
        const ATTR_APPLICATION_PROCESS_BINARY: string;
        /**
         * The host name of the host the process that is triggering this sound event runs on.
         */
        const ATTR_APPLICATION_PROCESS_HOST: string;
        /**
         * The unix PID of the process that is triggering this sound event, formatted as string.
         */
        const ATTR_APPLICATION_PROCESS_ID: string;
        /**
         * The user that owns the process that is triggering this sound event.
         */
        const ATTR_APPLICATION_PROCESS_USER: string;
        /**
         * A version number for the program this sound event was triggered
         * by. (e.g. "22.2")
         */
        const ATTR_APPLICATION_VERSION: string;
        /**
         * A special attribute that can be used to control the automatic sound
         * caching of sounds in the sound server. One of "permanent",
         * "volatile", "never". "permanent" will cause this sample to be
         * cached in the server permanently. This is useful for very
         * frequently used sound events such as those used for input
         * feedback. "volatile" may be used for cacheing sounds in the sound
         * server temporarily. They will expire after some time or on cache
         * pressure. Finally, "never" may be used for sounds that should never
         * be cached, because they are only generated very seldomly or even
         * only once at most (such as desktop login sounds).
         *
         * If this attribute is not explicitly passed to gsound_context_play_simple()
         * or gsound_context_play_full() it will default to "never". If it is not
         * explicitly passed to gsound_context_cache() it will default to "permanent".
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_CACHE_CONTROL: string;
        /**
         * A special attribute that can be used to control whether any sounds
         * are played at all. If this attribute is "1" or unset sounds are
         * played as normal. However, if it is "0" all calls to
         * gsound_context_play_simple() or `play_full()` will fail with
         * GSOUND_ERROR_DISABLED.
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_ENABLE: string;
        /**
         * A special attribute that can be used to control on which channel a
         * sound is played. The value should be one of mono, front-left,
         * front-right, front-center, rear-left, rear-right, rear-center, lfe,
         * front-left-of-center, front-right-of-center, side-left, side-right,
         * top-center, top-front-left, top-front-right, top-front-center,
         * top-rear-left, top-rear-right, top-rear-center. This attribute is
         * only honoured by some backends, other backends may choose to ignore
         * it completely.
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_FORCE_CHANNEL: string;
        /**
         * A special attribute that can be used to control the volume this
         * sound event is played in if the backend supports it. A floating
         * point value for the decibel multiplier for the sound. 0 dB relates
         * to zero gain, and is the default volume these sounds are played in.
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_VOLUME: string;
        /**
         * A special attribute that can be used to control the XDG sound theme that
         * is used for this sample.
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_XDG_THEME_NAME: string;
        /**
         * A special attribute that can be used to control the XDG sound theme
         * output profile that is used for this sample.
         *
         * If the list of attributes is handed on to the sound server this
         * attribute is stripped from it.
         */
        const ATTR_CANBERRA_XDG_THEME_OUTPUT_PROFILE: string;
        /**
         * A descriptive string for the sound event. Localized if possible and applicable.
         */
        const ATTR_EVENT_DESCRIPTION: string;
        /**
         * A textual id for an event sound, as mandated by the XDG sound naming specification.
         */
        const ATTR_EVENT_ID: string;
        /**
         * If this sound event was triggered by a mouse input event, the
         * number of the mouse button that triggered it, formatted as string. 1
         * for left mouse button, 3 for right, 2 for middle.
         */
        const ATTR_EVENT_MOUSE_BUTTON: string;
        /**
         * If this sound event was triggered by a mouse input event, the X
         * position of the mouse cursor as fractional value between 0 and 1,
         * formatted as string, 0 reflecting the left side of the screen, 1
         * the right side.
         */
        const ATTR_EVENT_MOUSE_HPOS: string;
        /**
         * If this sound event was triggered by a mouse input event, the Y
         * position of the mouse cursor as fractional value between 0 and 1,
         * formatted as string, 0 reflecting the top end of the screen, 1
         * the bottom end.
         */
        const ATTR_EVENT_MOUSE_VPOS: string;
        /**
         * If this sound event was triggered by a mouse input event, the X
         * position of the mouse cursor on the screen, formatted as string.
         */
        const ATTR_EVENT_MOUSE_X: string;
        /**
         * If this sound event was triggered by a mouse input event, the Y
         * position of the mouse cursor on the screen, formatted as string.
         */
        const ATTR_EVENT_MOUSE_Y: string;
        /**
         * The artist of this media. Localized if possible and applicable.
         */
        const ATTR_MEDIA_ARTIST: string;
        /**
         * The file name this media was or can be loaded from.
         */
        const ATTR_MEDIA_FILENAME: string;
        /**
         * An icon for this media in binary PNG format.
         */
        const ATTR_MEDIA_ICON: string;
        /**
         * An icon name as defined in the XDG icon naming specifcation.
         */
        const ATTR_MEDIA_ICON_NAME: string;
        /**
         * The language this media is in, in some standard POSIX locale string, such as "de_DE".
         */
        const ATTR_MEDIA_LANGUAGE: string;
        /**
         * A name describing the media being played. Localized if possible and applicable.
         */
        const ATTR_MEDIA_NAME: string;
        /**
         * The "role" this media is played in. For event sounds the string
         * "event". For other cases strings like "music", "video", "game", ...
         */
        const ATTR_MEDIA_ROLE: string;
        /**
         * A (song) title describing the media being played. Localized if possible and applicable.
         */
        const ATTR_MEDIA_TITLE: string;
        /**
         * If this sound event was triggered by a window on the screen and the
         * windowing system supports multiple desktops, a comma seperated list
         * of indexes of the desktops this window is visible on. If this
         * attribute is an empty string, it is visible on all desktops
         * (i.e. 'sticky'). The first desktop is 0. (e.g. "0,2,3")
         */
        const ATTR_WINDOW_DESKTOP: string;
        /**
         * If this sound event was triggered by a window on the screen, the
         * pixel height of the window.
         */
        const ATTR_WINDOW_HEIGHT: string;
        /**
         * If this sound event was triggered by a window on the screen, the X
         * position of the center of the window as fractional value between 0
         * and 1, formatted as string, 0 reflecting the left side of the
         * screen, 1 the right side.
         */
        const ATTR_WINDOW_HPOS: string;
        /**
         * If this sound event was triggered by a window on the screen, binary
         * icon data in PNG format for this window.
         */
        const ATTR_WINDOW_ICON: string;
        /**
         * If this sound event was triggered by a window on the screen, an
         * icon name for this window, as defined in the XDG icon naming
         * specification.
         */
        const ATTR_WINDOW_ICON_NAME: string;
        /**
         * If this sound event was triggered by a window on the screen, some
         * identification string for this window, so that the sound system can
         * recognize specific windows.
         */
        const ATTR_WINDOW_ID: string;
        /**
         * If this sound event was triggered by a window on the screen, the
         * name of this window as human readable string.
         */
        const ATTR_WINDOW_NAME: string;
        /**
         * If this sound event was triggered by a window on the screen, the Y
         * position of the center of the window as fractional value between 0
         * and 1, formatted as string, 0 reflecting the top side of the
         * screen, 1 the bottom side.
         */
        const ATTR_WINDOW_VPOS: string;
        /**
         * If this sound event was triggered by a window on the screen, the
         * pixel width of the window.
         */
        const ATTR_WINDOW_WIDTH: string;
        /**
         * If this sound event was triggered by a window on the screen, the X
         * position of the window measured from the top left corner of the
         * screen to the top left corner of the window.
         */
        const ATTR_WINDOW_X: string;
        /**
         * If this sound event was triggered by a window on the screen and the
         * windowing system is X11, the X display name of the window (e.g. ":0").
         */
        const ATTR_WINDOW_X11_DISPLAY: string;
        /**
         * If this sound event was triggered by a window on the screen and the
         * windowing system is X11, the X monitor id of the window formatted as
         * string (e.g. "0").
         */
        const ATTR_WINDOW_X11_MONITOR: string;
        /**
         * If this sound event was triggered by a window on the screen and the
         * windowing system is X11, the X screen id of the window formatted as
         * string (e.g. "0").
         */
        const ATTR_WINDOW_X11_SCREEN: string;
        /**
         * If this sound event was triggered by a window on the screen and the
         * windowing system is X11, the XID of the window formatted as string.
         */
        const ATTR_WINDOW_X11_XID: string;
        /**
         * If this sound event was triggered by a window on the screen, the y
         * position of the window measured from the top left corner of the
         * screen to the top left corner of the window.
         */
        const ATTR_WINDOW_Y: string;
        function error_quark(): GLib.Quark;
        module Context {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
        }

        /**
         * ca: the wrapped context
         * Wrapper for ca_context.
         */
        class Context extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Context>;

            // Constructors

            constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cancellable?: Gio.Cancellable | null): Context;

            // Methods

            /**
             * Requests that a sound be cached on the server. See [#caching][gsound-GSound-Context#caching].
             *
             * This function is intented to be used by language bindings.
             * @param attrs Hash table of attrerties
             */
            cache(attrs: { [key: string]: any } | GLib.HashTable<string, string>): boolean;
            /**
             * Attempts to open a connection to the backend sound driver. It is recommended
             * that you set context attributes with gsound_context_set_attributes() before
             * calling this function.
             *
             * > A connection is automatically opened before playing or caching sounds,
             * > so you rarely need to call this yourself.
             * @returns %TRUE if the output device was opened successfully, or %FALSE          (populating @error)
             */
            open(): boolean;
            /**
             * Finish an async operation started by gsound_context_play_full(). You
             * must call this function in the callback to free memory and receive any
             * errors which occurred.
             * @param result Result object passed to the callback of   gsound_context_play_full()
             * @returns %TRUE if playing finished successfully
             */
            play_full_finish(result: Gio.AsyncResult): boolean;
            /**
             * Asynchronously request a sound to be played. When playback is finished
             * (or if an error occurs) then `callback` will be called, following the
             * normal GIO async pattern.
             *
             * If playback is cancelled via `cancellable,` then `callback` will be called
             * with #G_IO_ERROR_CANCELLED.
             *
             * If you do not need notification of when playback is complete, you should
             * use gsound_context_play_simple().
             *
             * This function is intented to be used by language bindings.
             * @param attrs Attributes
             * @param cancellable A #GCancellable, or %NULL
             */
            play_full(
                attrs: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously request a sound to be played. When playback is finished
             * (or if an error occurs) then `callback` will be called, following the
             * normal GIO async pattern.
             *
             * If playback is cancelled via `cancellable,` then `callback` will be called
             * with #G_IO_ERROR_CANCELLED.
             *
             * If you do not need notification of when playback is complete, you should
             * use gsound_context_play_simple().
             *
             * This function is intented to be used by language bindings.
             * @param attrs Attributes
             * @param cancellable A #GCancellable, or %NULL
             * @param callback callback
             */
            play_full(
                attrs: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously request a sound to be played. When playback is finished
             * (or if an error occurs) then `callback` will be called, following the
             * normal GIO async pattern.
             *
             * If playback is cancelled via `cancellable,` then `callback` will be called
             * with #G_IO_ERROR_CANCELLED.
             *
             * If you do not need notification of when playback is complete, you should
             * use gsound_context_play_simple().
             *
             * This function is intented to be used by language bindings.
             * @param attrs Attributes
             * @param cancellable A #GCancellable, or %NULL
             * @param callback callback
             */
            play_full(
                attrs: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * The basic "fire-and-forget" play command. This function will not block, and
             * just sends a request to the sound server before immediately returning.
             *
             * If you need to know when a sound finishes playing then you should call
             * gsound_context_play_full() instead.
             *
             * You can cancel playback at any time by calling g_cancellable_cancel() on
             * `cancellable,` if supplied.
             *
             * This function is intented to be used by language bindings.
             * @param attrs Attributes
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, %FALSE on error
             */
            play_simple(
                attrs: { [key: string]: any } | GLib.HashTable<string, string>,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Set attributes or change attributes on `context`. Subsequent calls to this
             * function calling the same attributes will override the earlier values.
             *
             * Note that GSound will set the #GSOUND_ATTR_APPLICATION_NAME and
             * #GSOUND_ATTR_APPLICATION_ID for you if using #GApplication, so you do
             * not normally need to set these yourself.
             *
             * This function is intented to be used by language bindings.
             * @param attrs Hash table of attributes to set
             * @returns %TRUE if attributes were updated successfully
             */
            set_attributes(attrs: { [key: string]: any } | GLib.HashTable<string, string>): boolean;
            /**
             * Sets the libcanberra driver to `driver,` for example "pulse", "alsa" or "null".
             * You normally do not need to set this yourself.
             *
             * Note that this function may return %TRUE even if the specified driver is
             * not available: see the libcanberra documentation for details.
             * @param driver libcanberra driver to use
             * @returns %TRUE if the libcanberra driver was set successfully
             */
            set_driver(driver: string): boolean;

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

        type ContextClass = typeof Context;
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

    export default GSound;
}

declare module 'gi://GSound' {
    import GSound10 from 'gi://GSound?version=1.0';
    export default GSound10;
}
// END
