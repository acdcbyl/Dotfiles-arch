/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./clutter-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gl-1.0.d.ts" />
/// <reference path="./coglpango-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
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

declare module 'gi://ClutterX11?version=1.0' {
    // Module dependencies
    import type xlib from 'gi://xlib?version=2.0';
    import type Clutter from 'gi://Clutter?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Json from 'gi://Json?version=1.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GL from 'gi://GL?version=1.0';
    import type CoglPango from 'gi://CoglPango?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Cogl from 'gi://Cogl?version=1.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace ClutterX11 {
        /**
         * ClutterX11-1.0
         */

        /**
         * Return values for the #ClutterX11FilterFunc function.
         */

        /**
         * Return values for the #ClutterX11FilterFunc function.
         */
        export namespace FilterReturn {
            export const $gtype: GObject.GType<FilterReturn>;
        }

        enum FilterReturn {
            /**
             * The event was not handled, continues the
             *   processing
             */
            CONTINUE,
            /**
             * Native event translated into a Clutter
             *   event, stops the processing
             */
            TRANSLATE,
            /**
             * Remove the event, stops the processing
             */
            REMOVE,
        }
        /**
         * Disables the internal polling of X11 events in the main loop.
         *
         * Libraries or applications calling this function will be responsible of
         * polling all X11 events.
         *
         * You also must call clutter_x11_handle_event() to let Clutter process
         * events and maintain its internal state.
         *
         * This function can only be called before calling clutter_init().
         *
         * Even with event handling disabled, Clutter will still select
         * all the events required to maintain its internal state on the stage
         * Window; compositors using Clutter and input regions to pass events
         * through to application windows should not rely on an empty input
         * region, and should instead clear it themselves explicitly using the
         * XFixes extension.
         *
         * This function should not be normally used by applications.
         */
        function disable_event_retrieval(): void;
        /**
         * Enables the use of the XInput extension if present on connected
         * XServer and support built into Clutter. XInput allows for multiple
         * pointing devices to be used.
         *
         * This function must be called before clutter_init().
         *
         * Since XInput might not be supported by the X server, you might
         * want to use clutter_x11_has_xinput() to see if support was enabled.
         */
        function enable_xinput(): void;
        /**
         * Retrieves the group for the modifiers set in `event`
         * @param event a #ClutterEvent of type %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE
         * @returns the group id
         */
        function event_get_key_group(event: Clutter.Event): number;
        /**
         * Retrieves the touch detail froma #ClutterEventSequence.
         * @param sequence a #ClutterEventSequence
         * @returns the touch detail
         */
        function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number;
        /**
         * Retrieves the pointer to the default display.
         * @returns the default display
         */
        function get_default_display(): xlib.Display;
        /**
         * Gets the number of the default X Screen object.
         * @returns the number of the default screen
         */
        function get_default_screen(): number;
        /**
         * Retrieves a pointer to the list of input devices
         * @returns a   pointer to the internal list of input devices; the returned list is   owned by Clutter and should not be modified or freed
         */
        function get_input_devices(): Clutter.InputDevice[];
        /**
         * Gets the stage for a particular X window.
         * @param win an X Window ID
         * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
         */
        function get_stage_from_window(win: xlib.Window): Clutter.Stage;
        /**
         * Retrieves whether the Clutter X11 backend is using ARGB visuals by default
         * @returns %TRUE if ARGB visuals are queried by default
         */
        function get_use_argb_visual(): boolean;
        /**
         * Retrieves whether the Clutter X11 backend will create stereo
         * stages if possible.
         * @returns %TRUE if stereo stages are used if possible
         */
        function get_use_stereo_stage(): boolean;
        /**
         * This function processes a single X event; it can be used to hook
         * into external X11 event processing (for example, a GDK filter
         * function).
         *
         * If clutter_x11_disable_event_retrieval() has been called, you must
         * let this function process events to update Clutter's internal state.
         * @param xevent pointer to XEvent structure
         * @returns #ClutterX11FilterReturn. %CLUTTER_X11_FILTER_REMOVE  indicates that Clutter has internally handled the event and the  caller should do no further processing. %CLUTTER_X11_FILTER_CONTINUE  indicates that Clutter is either not interested in the event,  or has used the event to update internal state without taking  any exclusive action. %CLUTTER_X11_FILTER_TRANSLATE will not  occur.
         */
        function handle_event(xevent: xlib.XEvent): FilterReturn;
        /**
         * Retrieves whether Clutter is running on an X11 server with the
         * XComposite extension
         * @returns %TRUE if the XComposite extension is available
         */
        function has_composite_extension(): boolean;
        /**
         * Queries the X11 backend to check if event collection has been disabled.
         * @returns TRUE if event retrival has been disabled. FALSE otherwise.
         */
        function has_event_retrieval(): boolean;
        /**
         * Gets whether Clutter has XInput support.
         * @returns %TRUE if Clutter was compiled with XInput support   and XInput support is available at run time.
         */
        function has_xinput(): boolean;
        /**
         * Sets the display connection Clutter should use; must be called
         * before clutter_init(), clutter_init_with_args() or other functions
         * pertaining Clutter's initialization process.
         *
         * If you are parsing the command line arguments by retrieving Clutter's
         * #GOptionGroup with clutter_get_option_group() and calling
         * g_option_context_parse() yourself, you should also call
         * clutter_x11_set_display() before g_option_context_parse().
         * @param xdpy pointer to a X display connection.
         */
        function set_display(xdpy: xlib.Display): void;
        /**
         * Target the #ClutterStage to use an existing external X Window
         * @param stage a #ClutterStage
         * @param xwindow an existing X Window id
         * @returns %TRUE if foreign window is valid
         */
        function set_stage_foreign(stage: Clutter.Stage, xwindow: xlib.Window): boolean;
        /**
         * Sets whether the Clutter X11 backend should request ARGB visuals by default
         * or not.
         *
         * By default, Clutter requests RGB visuals.
         *
         * If no ARGB visuals are found, the X11 backend will fall back to
         * requesting a RGB visual instead.
         *
         * ARGB visuals are required for the #ClutterStage:use-alpha property to work.
         *
         * This function can only be called once, and before clutter_init() is
         * called.
         * @param use_argb %TRUE if ARGB visuals should be requested by default
         */
        function set_use_argb_visual(use_argb: boolean): void;
        /**
         * Sets whether the backend object for Clutter stages, will,
         * if possible, be created with the ability to support stereo drawing
         * (drawing separate images for the left and right eyes).
         *
         * This function must be called before clutter_init() is called.
         * During paint callbacks, cogl_framebuffer_is_stereo() can be called
         * on the framebuffer retrieved by cogl_get_draw_framebuffer() to
         * determine if stereo support was successfully enabled, and
         * cogl_framebuffer_set_stereo_mode() to determine which buffers
         * will be drawn to.
         *
         * Note that this function *does not* cause the stage to be drawn
         * multiple times with different perspective transformations and thus
         * appear in 3D, it simply enables individual ClutterActors to paint
         * different images for the left and and right eye.
         * @param use_stereo %TRUE if the stereo stages should be used if possible.
         */
        function set_use_stereo_stage(use_stereo: boolean): void;
        /**
         * Traps every X error until clutter_x11_untrap_x_errors() is called.
         */
        function trap_x_errors(): void;
        /**
         * Removes the X error trap and returns the current status.
         * @returns the trapped error code, or 0 for success
         */
        function untrap_x_errors(): number;
        interface FilterFunc {
            (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn;
        }
        module TexturePixmap {
            // Signal callback interfaces

            interface QueueDamageRedraw {
                (x: number, y: number, width: number, height: number): void;
            }

            interface UpdateArea {
                (x: number, y: number, width: number, height: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Texture.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                automatic_updates: boolean;
                automaticUpdates: boolean;
                destroyed: boolean;
                pixmap: number;
                pixmap_depth: number;
                pixmapDepth: number;
                pixmap_height: number;
                pixmapHeight: number;
                pixmap_width: number;
                pixmapWidth: number;
                window: number;
                window_mapped: boolean;
                windowMapped: boolean;
                window_override_redirect: boolean;
                windowOverrideRedirect: boolean;
                window_redirect_automatic: boolean;
                windowRedirectAutomatic: boolean;
                window_x: number;
                windowX: number;
                window_y: number;
                windowY: number;
            }
        }

        /**
         * The #ClutterX11TexturePixmap structure contains only private data
         */
        class TexturePixmap
            extends Clutter.Texture
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<TexturePixmap>;

            // Properties

            get automatic_updates(): boolean;
            set automatic_updates(val: boolean);
            get automaticUpdates(): boolean;
            set automaticUpdates(val: boolean);
            get destroyed(): boolean;
            get pixmap(): number;
            set pixmap(val: number);
            get pixmap_depth(): number;
            get pixmapDepth(): number;
            get pixmap_height(): number;
            get pixmapHeight(): number;
            get pixmap_width(): number;
            get pixmapWidth(): number;
            get window(): number;
            set window(val: number);
            get window_mapped(): boolean;
            get windowMapped(): boolean;
            get window_override_redirect(): boolean;
            get windowOverrideRedirect(): boolean;
            get window_redirect_automatic(): boolean;
            set window_redirect_automatic(val: boolean);
            get windowRedirectAutomatic(): boolean;
            set windowRedirectAutomatic(val: boolean);
            get window_x(): number;
            get windowX(): number;
            get window_y(): number;
            get windowY(): number;

            // Constructors

            constructor(properties?: Partial<TexturePixmap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): TexturePixmap;

            static new_with_pixmap(pixmap: xlib.Pixmap): TexturePixmap;

            static new_with_window(window: xlib.Window): TexturePixmap;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'queue-damage-redraw',
                callback: (_source: this, x: number, y: number, width: number, height: number) => void,
            ): number;
            connect_after(
                signal: 'queue-damage-redraw',
                callback: (_source: this, x: number, y: number, width: number, height: number) => void,
            ): number;
            emit(signal: 'queue-damage-redraw', x: number, y: number, width: number, height: number): void;
            connect(
                signal: 'update-area',
                callback: (_source: this, x: number, y: number, width: number, height: number) => void,
            ): number;
            connect_after(
                signal: 'update-area',
                callback: (_source: this, x: number, y: number, width: number, height: number) => void,
            ): number;
            emit(signal: 'update-area', x: number, y: number, width: number, height: number): void;

            // Virtual methods

            /**
             * Performs the actual binding of texture to the current content of
             * the pixmap. Can be called to update the texture if the pixmap
             * content has changed.
             * @param x the X coordinate of the area to update
             * @param y the Y coordinate of the area to update
             * @param width the width of the area to update
             * @param height the height of the area to update
             */
            vfunc_update_area(x: number, y: number, width: number, height: number): void;

            // Methods

            /**
             * Enables or disables the automatic updates ot `texture` in case the backing
             * pixmap or window is damaged
             * @param setting %TRUE to enable automatic updates
             */
            set_automatic(setting: boolean): void;
            /**
             * Sets the X Pixmap to which the texture should be bound.
             * @param pixmap the X Pixmap to which the texture should be bound
             */
            set_pixmap(pixmap: xlib.Pixmap): void;
            /**
             * Sets up a suitable pixmap for the window, using the composite and damage
             * extensions if possible, and then calls
             * clutter_x11_texture_pixmap_set_pixmap().
             *
             * If you want to display a window in a #ClutterTexture, you probably want
             * this function, or its older sister, clutter_glx_texture_pixmap_set_window().
             *
             * This function has no effect unless the XComposite extension is available.
             * @param window the X window to which the texture should be bound
             * @param automatic %TRUE for automatic window updates, %FALSE for manual.
             */
            set_window(window: xlib.Window, automatic: boolean): void;
            /**
             * Resets the texture's pixmap from its window, perhaps in response to the
             * pixmap's invalidation as the window changed size.
             */
            sync_window(): void;
            /**
             * Performs the actual binding of texture to the current content of
             * the pixmap. Can be called to update the texture if the pixmap
             * content has changed.
             * @param x the X coordinate of the area to update
             * @param y the Y coordinate of the area to update
             * @param width the width of the area to update
             * @param height the height of the area to update
             */
            update_area(x: number, y: number, width: number, height: number): void;

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

        type TexturePixmapClass = typeof TexturePixmap;
        abstract class TexturePixmapPrivate {
            static $gtype: GObject.GType<TexturePixmapPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class XInputDevice {
            static $gtype: GObject.GType<XInputDevice>;

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

    export default ClutterX11;
}

declare module 'gi://ClutterX11' {
    import ClutterX1110 from 'gi://ClutterX11?version=1.0';
    export default ClutterX1110;
}
// END
