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

declare module 'gi://ZBar?version=1.0' {
    // Module dependencies

    import Gtk__ from 'gi://Gtk?version=3.0';
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

    export namespace ZBar {
        /**
         * ZBar-1.0
         */

        module Gtk {
            // Signal callback interfaces

            interface Decoded {
                (symbol_type: number, data: string): void;
            }

            interface DecodedText {
                (text: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk__.Widget.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk__.Buildable.ConstructorProps {
                video_device: string;
                videoDevice: string;
                video_enabled: boolean;
                videoEnabled: boolean;
                video_opened: boolean;
                videoOpened: boolean;
            }
        }

        class Gtk extends Gtk__.Widget implements Atk.ImplementorIface, Gtk__.Buildable {
            static $gtype: GObject.GType<Gtk>;

            // Properties

            get video_device(): string;
            set video_device(val: string);
            get videoDevice(): string;
            set videoDevice(val: string);
            get video_enabled(): boolean;
            set video_enabled(val: boolean);
            get videoEnabled(): boolean;
            set videoEnabled(val: boolean);
            get video_opened(): boolean;
            get videoOpened(): boolean;

            // Fields

            widget: Gtk__.Widget;

            // Constructors

            constructor(properties?: Partial<Gtk.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Gtk;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'decoded', callback: (_source: this, symbol_type: number, data: string) => void): number;
            connect_after(
                signal: 'decoded',
                callback: (_source: this, symbol_type: number, data: string) => void,
            ): number;
            emit(signal: 'decoded', symbol_type: number, data: string): void;
            connect(signal: 'decoded-text', callback: (_source: this, text: string) => void): number;
            connect_after(signal: 'decoded-text', callback: (_source: this, text: string) => void): number;
            emit(signal: 'decoded-text', text: string): void;

            // Static methods

            /**
             * utility function to populate a zbar_image_t from a GdkPixbuf.
             * @param image the zbar library image destination to populate
             * @param pixbuf the GdkPixbuf source
             */
            static image_from_pixbuf(image: any | null, pixbuf: GdkPixbuf.Pixbuf): boolean;

            // Virtual methods

            vfunc_decoded_text(text: string): void;
            vfunc_scan_image(image: GdkPixbuf.Pixbuf): void;

            // Methods

            /**
             * retrieve the currently opened video device.
             * @returns the current video device or NULL if no device is opened
             */
            get_video_device(): string;
            /**
             * retrieve the current video enabled state.
             * @returns true if video scanning is currently enabled, false otherwise
             */
            get_video_enabled(): boolean;
            /**
             * retrieve the current video opened state.
             * @returns true if video device is currently opened, false otherwise
             */
            get_video_opened(): boolean;
            /**
             * set video camera resolution.
             * `note` this call must be made before video is initialized
             * @param width width in pixels
             * @param height height in pixels
             */
            request_video_size(width: number, height: number): void;
            scan_image(image: GdkPixbuf.Pixbuf): void;
            /**
             * open a new video device.
             * `note` since opening a device may take some time, this call will
             * return immediately and the device will be opened asynchronously
             * @param video_device the platform specific name of   the device to open. use NULL to close a currently opened device.
             */
            set_video_device(video_device?: string | null): void;
            /**
             * enable/disable video scanning.
             * has no effect unless a video device is opened
             * @param video_enabled true to enable video scanning, false to disable
             */
            set_video_enabled(video_enabled: boolean): void;

            // Inherited methods
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a #GtkBuilder
             * @param child child to add
             * @param type kind of child or %NULL
             */
            add_child(builder: Gtk__.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             * @returns the constructed child
             */
            construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            custom_finished(
                builder: Gtk__.Builder,
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
                builder: Gtk__.Builder,
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
                builder: Gtk__.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             * @returns the internal child of the buildable object
             */
            get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;
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
            parser_finished(builder: Gtk__.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            set_buildable_property(builder: Gtk__.Builder, name: string, value: GObject.Value | any): void;
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
            vfunc_add_child(builder: Gtk__.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             */
            vfunc_construct_child<T = GObject.Object>(builder: Gtk__.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk__.Builder,
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
                builder: Gtk__.Builder,
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
                builder: Gtk__.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk__.Builder, childname: string): T;
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
            vfunc_parser_finished(builder: Gtk__.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            vfunc_set_buildable_property(builder: Gtk__.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Sets the name of the `buildable` object.
             * @param name name to set
             */
            vfunc_set_name(name: string): void;
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

        type GtkClass = typeof Gtk;
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

    export default ZBar;
}

declare module 'gi://ZBar' {
    import ZBar10 from 'gi://ZBar?version=1.0';
    export default ZBar10;
}
// END
