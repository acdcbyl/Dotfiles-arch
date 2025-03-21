/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./clutter-1.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
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

declare module 'gi://Champlain?version=0.12' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Clutter from 'gi://Clutter?version=1.0';
    import type cairo from 'gi://cairo?version=1.0';
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

    export namespace Champlain {
        /**
         * Champlain-0.12
         */

        /**
         * Projections supported by the library.
         */

        /**
         * Projections supported by the library.
         */
        export namespace MapProjection {
            export const $gtype: GObject.GType<MapProjection>;
        }

        enum MapProjection {
            /**
             * Currently the only supported projection
             */
            MERCATOR,
        }
        /**
         * Selection mode
         */

        /**
         * Selection mode
         */
        export namespace SelectionMode {
            export const $gtype: GObject.GType<SelectionMode>;
        }

        enum SelectionMode {
            /**
             * No marker can be selected.
             */
            NONE,
            /**
             * Only one marker can be selected.
             */
            SINGLE,
            /**
             * Multiple marker can be selected.
             */
            MULTIPLE,
        }
        /**
         * Tile loading state.
         */

        /**
         * Tile loading state.
         */
        export namespace State {
            export const $gtype: GObject.GType<State>;
        }

        enum State {
            /**
             * Initial or undefined state
             */
            NONE,
            /**
             * Tile is loading
             */
            LOADING,
            /**
             * Tile is loaded but not yet displayed
             */
            LOADED,
            /**
             * Tile loading finished. Also used to inform map sources
             *     that tile loading has been cancelled.
             */
            DONE,
        }
        /**
         * Units used by the scale.
         */

        /**
         * Units used by the scale.
         */
        export namespace Unit {
            export const $gtype: GObject.GType<Unit>;
        }

        enum Unit {
            /**
             * kilometers
             */
            KM,
            /**
             * miles
             */
            MILES,
        }
        /**
         * The major version of libchamplain (1, if %CHAMPLAIN_VERSION is 1.2.3)
         */
        const MAJOR_VERSION: number;
        const MAP_SOURCE_MEMPHIS_LOCAL: string;
        const MAP_SOURCE_MEMPHIS_NETWORK: string;
        /**
         * Maps for Free Relief
         */
        const MAP_SOURCE_MFF_RELIEF: string;
        /**
         * OpenAerialMap
         */
        const MAP_SOURCE_OAM: string;
        /**
         * Mapquest Open Aerial
         */
        const MAP_SOURCE_OSM_AERIAL_MAP: string;
        /**
         * OpenStreetMap Cycle Map
         */
        const MAP_SOURCE_OSM_CYCLE_MAP: string;
        /**
         * OpenStreetMap Mapnik
         */
        const MAP_SOURCE_OSM_MAPNIK: string;
        const MAP_SOURCE_OSM_MAPQUEST: string;
        /**
         * OpenStreetMap Osmarender
         */
        const MAP_SOURCE_OSM_OSMARENDER: string;
        /**
         * OpenStreetMap Transport Map
         */
        const MAP_SOURCE_OSM_TRANSPORT_MAP: string;
        /**
         * OpenWeatherMap clouds layer
         */
        const MAP_SOURCE_OWM_CLOUDS: string;
        /**
         * OpenWeatherMap precipitation
         */
        const MAP_SOURCE_OWM_PRECIPITATION: string;
        /**
         * OpenWeatherMap sea level pressure
         */
        const MAP_SOURCE_OWM_PRESSURE: string;
        /**
         * OpenWeatherMap temperature
         */
        const MAP_SOURCE_OWM_TEMPERATURE: string;
        /**
         * OpenWeatherMap wind
         */
        const MAP_SOURCE_OWM_WIND: string;
        const MAX_LATITUDE: number;
        const MAX_LONGITUDE: number;
        /**
         * The micro version of libchamplain (3, if %CHAMPLAIN_VERSION is 1.2.3)
         */
        const MICRO_VERSION: number;
        /**
         * The minor version of libchamplain (2, if %CHAMPLAIN_VERSION is 1.2.3)
         */
        const MINOR_VERSION: number;
        const MIN_LATITUDE: number;
        const MIN_LONGITUDE: number;
        /**
         * The full version of libchamplain, like 1.2.3
         */
        const VERSION: number;
        /**
         * Numerically encoded version of libchamplain, like 0x010203
         */
        const VERSION_HEX: number;
        /**
         * The full version of libchamplain, in string form (suited for
         * string concatenation)
         */
        const VERSION_S: string;
        module Adjustment {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                lower: number;
                step_increment: number;
                stepIncrement: number;
                upper: number;
                value: number;
            }
        }

        /**
         * Class for handling an interval between to values. The contents of
         * the #ChamplainAdjustment are private and should be accessed using the
         * public API.
         */
        class Adjustment extends GObject.Object {
            static $gtype: GObject.GType<Adjustment>;

            // Properties

            get lower(): number;
            set lower(val: number);
            get step_increment(): number;
            set step_increment(val: number);
            get stepIncrement(): number;
            set stepIncrement(val: number);
            get upper(): number;
            set upper(val: number);
            get value(): number;
            set value(val: number);

            // Constructors

            constructor(properties?: Partial<Adjustment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](value: number, lower: number, upper: number, step_increment: number): Adjustment;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Virtual methods

            vfunc_changed(): void;

            // Methods

            clamp(interpolate: boolean, n_frames: number, fps: number): boolean;
            get_value(): number;
            get_values(value: number, lower: number, upper: number, step_increment: number): void;
            interpolate(value: number, n_frames: number, fps: number): void;
            interpolate_stop(): void;
            set_value(value: number): void;
            set_values(value: number, lower: number, upper: number, step_increment: number): void;
        }

        module Coordinate {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps, Location.ConstructorProps {}
        }

        /**
         * The #ChamplainCoordinate structure contains only private data
         * and should be accessed using the provided API
         */
        class Coordinate extends GObject.InitiallyUnowned implements Location {
            static $gtype: GObject.GType<Coordinate>;

            // Constructors

            constructor(properties?: Partial<Coordinate.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Coordinate;

            static new_full(latitude: number, longitude: number): Coordinate;

            // Inherited properties
            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module CustomMarker {
            // Constructor properties interface

            interface ConstructorProps
                extends Marker.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Location.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {}
        }

        /**
         * The #ChamplainCustomMarker structure contains only private data
         * and should be accessed using the provided API
         */
        class CustomMarker
            extends Marker
            implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<CustomMarker>;

            // Constructors

            constructor(properties?: Partial<CustomMarker.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CustomMarker;

            // Inherited properties
            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module ErrorTileRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {
                tile_size: number;
                tileSize: number;
            }
        }

        /**
         * The #ChamplainErrorTileRenderer structure contains only private data
         * and should be accessed using the provided API
         */
        class ErrorTileRenderer extends Renderer {
            static $gtype: GObject.GType<ErrorTileRenderer>;

            // Properties

            /**
             * The size of the rendered tile.
             */
            get tile_size(): number;
            set tile_size(val: number);
            /**
             * The size of the rendered tile.
             */
            get tileSize(): number;
            set tileSize(val: number);

            // Constructors

            constructor(properties?: Partial<ErrorTileRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](tile_size: number): ErrorTileRenderer;

            // Methods

            /**
             * Gets the size of the rendered error tiles.
             * @returns the size of the rendered error tiles
             */
            get_tile_size(): number;
            /**
             * Sets the size of the rendered error tile.
             * @param size the size of the rendered error tiles
             */
            set_tile_size(size: number): void;
        }

        module FileCache {
            // Constructor properties interface

            interface ConstructorProps extends TileCache.ConstructorProps {
                cache_dir: string;
                cacheDir: string;
                size_limit: number;
                sizeLimit: number;
            }
        }

        /**
         * The #ChamplainFileCache structure contains only private data
         * and should be accessed using the provided API
         */
        class FileCache extends TileCache {
            static $gtype: GObject.GType<FileCache>;

            // Properties

            /**
             * The directory where the tile database is stored.
             */
            get cache_dir(): string;
            /**
             * The directory where the tile database is stored.
             */
            get cacheDir(): string;
            /**
             * The cache size limit in bytes.
             *
             * Note: this new value will not be applied until you call champlain_file_cache_purge()
             */
            get size_limit(): number;
            set size_limit(val: number);
            /**
             * The cache size limit in bytes.
             *
             * Note: this new value will not be applied until you call champlain_file_cache_purge()
             */
            get sizeLimit(): number;
            set sizeLimit(val: number);

            // Constructors

            constructor(properties?: Partial<FileCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(size_limit: number, cache_dir: string | null, renderer: Renderer): FileCache;

            // Methods

            /**
             * Gets the directory where the cache database is stored.
             * @returns the directory
             */
            get_cache_dir(): string;
            /**
             * Gets the cache size limit in bytes.
             * @returns size limit
             */
            get_size_limit(): number;
            /**
             * Purge the cache from the less popular tiles until cache's size limit is reached.
             */
            purge(): void;
            /**
             * Purge the cache from the less popular tiles until cache's size limit is reached.
             * This is a non blocking call as the purge will happen when the application is idle
             */
            purge_on_idle(): void;
            /**
             * Sets the cache size limit in bytes.
             * @param size_limit the cache limit in bytes
             */
            set_size_limit(size_limit: number): void;
        }

        module FileTileSource {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {}
        }

        /**
         * The #ChamplainFileTileSource structure contains only private data
         * and should be accessed using the provided API
         */
        class FileTileSource extends TileSource {
            static $gtype: GObject.GType<FileTileSource>;

            // Constructors

            constructor(properties?: Partial<FileTileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(
                id: string,
                name: string,
                license: string,
                license_uri: string,
                min_zoom: number,
                max_zoom: number,
                tile_size: number,
                projection: MapProjection,
                renderer: Renderer,
            ): FileTileSource;

            // Methods

            /**
             * Loads the OpenStreetMap XML file at the given path.
             * @param map_path a path to a map data file
             */
            load_map_data(map_path: string): void;
        }

        module ImageRenderer {
            // Constructor properties interface

            interface ConstructorProps extends Renderer.ConstructorProps {}
        }

        /**
         * The #ChamplainImageRenderer structure contains only private data
         * and should be accessed using the provided API
         */
        class ImageRenderer extends Renderer {
            static $gtype: GObject.GType<ImageRenderer>;

            // Constructors

            constructor(properties?: Partial<ImageRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ImageRenderer;
        }

        module KineticScrollView {
            // Signal callback interfaces

            interface PanningCompleted {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                decel_rate: number;
                decelRate: number;
                mode: boolean;
                motion_buffer: number;
                motionBuffer: number;
            }
        }

        class KineticScrollView
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<KineticScrollView>;

            // Properties

            get decel_rate(): number;
            set decel_rate(val: number);
            get decelRate(): number;
            set decelRate(val: number);
            get mode(): boolean;
            set mode(val: boolean);
            get motion_buffer(): number;
            set motion_buffer(val: number);
            get motionBuffer(): number;
            set motionBuffer(val: number);

            // Constructors

            constructor(properties?: Partial<KineticScrollView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](kinetic: boolean, viewport: Viewport): KineticScrollView;
            // Conflicted with Clutter.Actor.new

            static ['new'](...args: never[]): any;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'panning-completed', callback: (_source: this) => void): number;
            connect_after(signal: 'panning-completed', callback: (_source: this) => void): number;
            emit(signal: 'panning-completed'): void;

            // Methods

            stop(): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module Label {
            // Constructor properties interface

            interface ConstructorProps
                extends Marker.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Location.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                alignment: Pango.Alignment;
                color: Clutter.Color;
                draw_background: boolean;
                drawBackground: boolean;
                draw_shadow: boolean;
                drawShadow: boolean;
                ellipsize: Pango.EllipsizeMode;
                font_name: string;
                fontName: string;
                image: Clutter.Actor;
                single_line_mode: boolean;
                singleLineMode: boolean;
                text: string;
                text_color: Clutter.Color;
                textColor: Clutter.Color;
                use_markup: boolean;
                useMarkup: boolean;
                wrap: boolean;
                wrap_mode: Pango.WrapMode;
                wrapMode: Pango.WrapMode;
            }
        }

        /**
         * The #ChamplainLabel structure contains only private data
         * and should be accessed using the provided API
         */
        class Label
            extends Marker
            implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Label>;

            // Properties

            /**
             * The label's alignment
             */
            get alignment(): Pango.Alignment;
            set alignment(val: Pango.Alignment);
            /**
             * The label's color
             */
            get color(): Clutter.Color;
            set color(val: Clutter.Color);
            /**
             * If the label has a background
             */
            get draw_background(): boolean;
            set draw_background(val: boolean);
            /**
             * If the label has a background
             */
            get drawBackground(): boolean;
            set drawBackground(val: boolean);
            /**
             * If the label background has a shadow
             */
            get draw_shadow(): boolean;
            set draw_shadow(val: boolean);
            /**
             * If the label background has a shadow
             */
            get drawShadow(): boolean;
            set drawShadow(val: boolean);
            /**
             * The label's ellipsize mode
             */
            get ellipsize(): Pango.EllipsizeMode;
            set ellipsize(val: Pango.EllipsizeMode);
            /**
             * The label's text font name
             */
            get font_name(): string;
            set font_name(val: string);
            /**
             * The label's text font name
             */
            get fontName(): string;
            set fontName(val: string);
            /**
             * The image of the label
             */
            get image(): Clutter.Actor;
            set image(val: Clutter.Actor);
            /**
             * If the label is in single line mode
             */
            get single_line_mode(): boolean;
            set single_line_mode(val: boolean);
            /**
             * If the label is in single line mode
             */
            get singleLineMode(): boolean;
            set singleLineMode(val: boolean);
            /**
             * The text of the label
             */
            get text(): string;
            set text(val: string);
            /**
             * The label's text color
             */
            get text_color(): Clutter.Color;
            set text_color(val: Clutter.Color);
            /**
             * The label's text color
             */
            get textColor(): Clutter.Color;
            set textColor(val: Clutter.Color);
            /**
             * If the label's text uses markup
             */
            get use_markup(): boolean;
            set use_markup(val: boolean);
            /**
             * If the label's text uses markup
             */
            get useMarkup(): boolean;
            set useMarkup(val: boolean);
            /**
             * If the label's text wrap is set
             */
            get wrap(): boolean;
            set wrap(val: boolean);
            /**
             * The label's text wrap mode
             */
            get wrap_mode(): Pango.WrapMode;
            set wrap_mode(val: Pango.WrapMode);
            /**
             * The label's text wrap mode
             */
            get wrapMode(): Pango.WrapMode;
            set wrapMode(val: Pango.WrapMode);

            // Constructors

            constructor(properties?: Partial<Label.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Label;

            static new_from_file(filename: string): Label;

            static new_full(text: string, actor: Clutter.Actor): Label;

            static new_with_image(actor: Clutter.Actor): Label;

            static new_with_text(
                text: string,
                font?: string | null,
                text_color?: Clutter.Color | null,
                label_color?: Clutter.Color | null,
            ): Label;

            // Methods

            /**
             * Get the label's text alignment.
             * @returns the label's text alignment.
             */
            get_alignment(): Pango.Alignment;
            /**
             * Gets the label's text attributes.
             * @returns the label's text attributes.
             */
            get_attributes(): Pango.AttrList;
            /**
             * Gets the label's background color.
             * @returns the label's background color.
             */
            get_color(): Clutter.Color;
            /**
             * Checks whether the label has a background.
             * @returns if the label has a background.
             */
            get_draw_background(): boolean;
            /**
             * Checks whether the label's background has a shadow.
             * @returns if the label's background has a shadow.
             */
            get_draw_shadow(): boolean;
            /**
             * Gets the label's text ellipsize mode.
             * @returns the label's text ellipsize mode.
             */
            get_ellipsize(): Pango.EllipsizeMode;
            /**
             * Gets the label's font name.
             * @returns the label's font name.
             */
            get_font_name(): string;
            /**
             * Get the label's image.
             * @returns the label's image.
             */
            get_image(): Clutter.Actor;
            /**
             * Checks the label's single line mode.
             * @returns the label's text single line mode.
             */
            get_single_line_mode(): boolean;
            /**
             * Get the label's text.
             * @returns the label's text.
             */
            get_text(): string;
            /**
             * Gets the label's text color.
             * @returns the label's text color.
             */
            get_text_color(): Clutter.Color;
            /**
             * Check whether the label uses markup.
             * @returns if the label's text contains markup.
             */
            get_use_markup(): boolean;
            /**
             * Checks whether the label text wraps.
             * @returns if the label's text wraps.
             */
            get_wrap(): boolean;
            /**
             * Gets the label's text wrap mode.
             * @returns the label's text wrap mode.
             */
            get_wrap_mode(): Pango.WrapMode;
            /**
             * Sets the label's text alignment.
             * @param alignment The label's alignment
             */
            set_alignment(alignment: Pango.Alignment | null): void;
            /**
             * Sets the label's text attributes.
             * @param list The label's text attributes.
             */
            set_attributes(list: Pango.AttrList): void;
            /**
             * Sets the label's background color.
             * @param color The label's background color or NULL to reset the background to the         default color. The color parameter is copied.
             */
            set_color(color?: Clutter.Color | null): void;
            /**
             * Sets if the label has a background.
             * @param background value.
             */
            set_draw_background(background: boolean): void;
            /**
             * Sets if the label's background has a shadow.
             * @param shadow value.
             */
            set_draw_shadow(shadow: boolean): void;
            /**
             * Sets the label's text ellipsize mode.
             * @param mode The label's ellipsize mode.
             */
            set_ellipsize(mode: Pango.EllipsizeMode | null): void;
            /**
             * Sets the label's font name such as "Sans 12".
             * @param font_name The label's font name or NULL to reset the font to the default             value.
             */
            set_font_name(font_name?: string | null): void;
            /**
             * Sets the label's image.
             * @param image The image as a @ClutterActor or NULL to remove the current image.
             */
            set_image(image?: Clutter.Actor | null): void;
            /**
             * Sets if the label's text is on a single line.
             * @param mode The label's single line mode
             */
            set_single_line_mode(mode: boolean): void;
            /**
             * Sets the label's text.
             * @param text The new text of the label
             */
            set_text(text: string): void;
            /**
             * Sets the label's text color.
             * @param color The label's text color or NULL to reset the text to the default         color. The color parameter is copied.
             */
            set_text_color(color?: Clutter.Color | null): void;
            /**
             * Sets if the label's text uses markup.
             * @param use_markup The value
             */
            set_use_markup(use_markup: boolean): void;
            /**
             * Sets if the label's text wrap.
             * @param wrap The label's wrap.
             */
            set_wrap(wrap: boolean): void;
            /**
             * Sets the label's text wrap mode.
             * @param wrap_mode The label's wrap mode.
             */
            set_wrap_mode(wrap_mode: Pango.WrapMode | null): void;

            // Inherited properties
            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module Layer {
            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {}
        }

        /**
         * The #ChamplainLayer structure contains only private data
         * and should be accessed using the provided API
         */
        abstract class Layer
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Layer>;

            // Constructors

            constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Gets the bounding box occupied by the elements inside the layer.
             */
            vfunc_get_bounding_box(): BoundingBox;
            /**
             * #ChamplainView calls this method to pass a reference to itself to the layer
             * when the layer is added to the view. When the layer is removed from the
             * view, it passes %NULL to the layer. Custom layers can implement this method
             * and perform the necessary initialization. This method should not be called
             * by user code.
             * @param view a #ChamplainView
             */
            vfunc_set_view(view?: View | null): void;

            // Methods

            /**
             * Gets the bounding box occupied by the elements inside the layer.
             * @returns The bounding box.
             */
            get_bounding_box(): BoundingBox;
            /**
             * #ChamplainView calls this method to pass a reference to itself to the layer
             * when the layer is added to the view. When the layer is removed from the
             * view, it passes %NULL to the layer. Custom layers can implement this method
             * and perform the necessary initialization. This method should not be called
             * by user code.
             * @param view a #ChamplainView
             */
            set_view(view?: View | null): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module License {
            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                alignment: Pango.Alignment;
                extra_text: string;
                extraText: string;
            }
        }

        /**
         * The #ChamplainLicense structure contains only private data
         * and should be accessed using the provided API
         */
        class License
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<License>;

            // Properties

            /**
             * The license's alignment
             */
            get alignment(): Pango.Alignment;
            set alignment(val: Pango.Alignment);
            /**
             * Sets additional text to be displayed in the license area.  The map's
             * license will be added below it. Your text can have multiple lines, just use
             * "\n" in between.
             */
            get extra_text(): string;
            set extra_text(val: string);
            /**
             * Sets additional text to be displayed in the license area.  The map's
             * license will be added below it. Your text can have multiple lines, just use
             * "\n" in between.
             */
            get extraText(): string;
            set extraText(val: string);

            // Constructors

            constructor(properties?: Partial<License.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): License;

            // Methods

            /**
             * This method connects to the necessary signals of #ChamplainView to make the
             * license change automatically when the map source changes.
             * @param view a #ChamplainView
             */
            connect_view(view: View): void;
            /**
             * This method disconnects from the signals previously connected by champlain_license_connect_view().
             */
            disconnect_view(): void;
            /**
             * Get the license's text alignment.
             * @returns the license's text alignment.
             */
            get_alignment(): Pango.Alignment;
            /**
             * Gets the additional license text.
             * @returns the additional license text
             */
            get_extra_text(): string;
            /**
             * Set the license's text alignment.
             * @param alignment The license's text alignment
             */
            set_alignment(alignment: Pango.Alignment | null): void;
            /**
             * Show the additional license text on the map view.  The text will preceed the
             * map's licence when displayed. Use "\n" to separate the lines.
             * @param text the additional license text
             */
            set_extra_text(text: string): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module MapSource {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                next_source: MapSource;
                nextSource: MapSource;
                renderer: Renderer;
            }
        }

        /**
         * The #ChamplainMapSource structure contains only private data
         * and should be accessed using the provided API
         */
        abstract class MapSource extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<MapSource>;

            // Properties

            /**
             * Next source in the loading chain.
             */
            get next_source(): MapSource;
            set next_source(val: MapSource);
            /**
             * Next source in the loading chain.
             */
            get nextSource(): MapSource;
            set nextSource(val: MapSource);
            /**
             * Renderer used for tiles rendering.
             */
            get renderer(): Renderer;
            set renderer(val: Renderer);

            // Constructors

            constructor(properties?: Partial<MapSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Fills the tile with image data (either from cache, network or rendered
             * locally).
             * @param tile a #ChamplainTile
             */
            vfunc_fill_tile(tile: Tile): void;
            /**
             * Gets map source's id.
             */
            vfunc_get_id(): string;
            /**
             * Gets map source's license.
             */
            vfunc_get_license(): string;
            /**
             * Gets map source's license URI.
             */
            vfunc_get_license_uri(): string;
            /**
             * Gets map source's maximum zoom level.
             */
            vfunc_get_max_zoom_level(): number;
            /**
             * Gets map source's minimum zoom level.
             */
            vfunc_get_min_zoom_level(): number;
            /**
             * Gets map source's name.
             */
            vfunc_get_name(): string;
            /**
             * Gets map source's projection.
             */
            vfunc_get_projection(): MapProjection;
            /**
             * Gets map source's tile size.
             */
            vfunc_get_tile_size(): number;

            // Methods

            /**
             * Fills the tile with image data (either from cache, network or rendered
             * locally).
             * @param tile a #ChamplainTile
             */
            fill_tile(tile: Tile): void;
            /**
             * Gets the number of tiles in a column at this zoom level for this map
             * source.
             * @param zoom_level the zoom level
             * @returns the number of tiles in a column
             */
            get_column_count(zoom_level: number): number;
            /**
             * Gets map source's id.
             * @returns the map source's id.
             */
            get_id(): string;
            /**
             * Gets the latitude corresponding to this y position in the map source's
             * projection.
             * @param zoom_level the zoom level
             * @param y a y position
             * @returns the latitude
             */
            get_latitude(zoom_level: number, y: number): number;
            /**
             * Gets map source's license.
             * @returns the map source's license.
             */
            get_license(): string;
            /**
             * Gets map source's license URI.
             * @returns the map source's license URI.
             */
            get_license_uri(): string;
            /**
             * Gets the longitude corresponding to this x position in the map source's
             * projection.
             * @param zoom_level the zoom level
             * @param x a x position
             * @returns the longitude
             */
            get_longitude(zoom_level: number, x: number): number;
            /**
             * Gets map source's maximum zoom level.
             * @returns the maximum zoom level this map source supports
             */
            get_max_zoom_level(): number;
            /**
             * Gets meters per pixel at the position on the map using this map source's projection.
             * @param zoom_level the zoom level
             * @param latitude a latitude
             * @param longitude a longitude
             * @returns the meters per pixel
             */
            get_meters_per_pixel(zoom_level: number, latitude: number, longitude: number): number;
            /**
             * Gets map source's minimum zoom level.
             * @returns the miminum zoom level this map source supports
             */
            get_min_zoom_level(): number;
            /**
             * Gets map source's name.
             * @returns the map source's name.
             */
            get_name(): string;
            /**
             * Get the next source in the chain.
             * @returns the next source in the chain.
             */
            get_next_source(): MapSource;
            /**
             * Gets map source's projection.
             * @returns the map source's projection.
             */
            get_projection(): MapProjection;
            /**
             * Get the renderer used for tiles rendering.
             * @returns the renderer.
             */
            get_renderer(): Renderer;
            /**
             * Gets the number of tiles in a row at this zoom level for this map source.
             * @param zoom_level the zoom level
             * @returns the number of tiles in a row
             */
            get_row_count(zoom_level: number): number;
            /**
             * Gets map source's tile size.
             * @returns the tile's size (width and height) in pixels for this map source
             */
            get_tile_size(): number;
            /**
             * Gets the x position on the map using this map source's projection.
             * (0, 0) is located at the top left.
             * @param zoom_level the zoom level
             * @param longitude a longitude
             * @returns the x position
             */
            get_x(zoom_level: number, longitude: number): number;
            /**
             * Gets the y position on the map using this map source's projection.
             * (0, 0) is located at the top left.
             * @param zoom_level the zoom level
             * @param latitude a latitude
             * @returns the y position
             */
            get_y(zoom_level: number, latitude: number): number;
            /**
             * Sets the next map source in the chain.
             * @param next_source the next #ChamplainMapSource in the chain
             */
            set_next_source(next_source: MapSource): void;
            /**
             * Sets the renderer used for tiles rendering.
             * @param renderer the renderer
             */
            set_renderer(renderer: Renderer): void;
        }

        module MapSourceChain {
            // Constructor properties interface

            interface ConstructorProps extends MapSource.ConstructorProps {}
        }

        /**
         * The #ChamplainMapSourceChain structure contains only private data
         * and should be accessed using the provided API
         */
        class MapSourceChain extends MapSource {
            static $gtype: GObject.GType<MapSourceChain>;

            // Constructors

            constructor(properties?: Partial<MapSourceChain.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MapSourceChain;

            // Methods

            /**
             * Pops a map source from the top of the stack from the chain.
             */
            pop(): void;
            /**
             * Pushes a map source into the chain.
             * @param map_source the #ChamplainMapSource to be pushed into the chain
             */
            push(map_source: MapSource): void;
        }

        module MapSourceDesc {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                data: any;
                id: string;
                license: string;
                license_uri: string;
                licenseUri: string;
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
                name: string;
                projection: MapProjection;
                tile_size: number;
                tileSize: number;
                uri_format: string;
                uriFormat: string;
            }
        }

        /**
         * The #ChamplainMapSourceDesc structure contains only private data
         * and should be accessed using the provided API
         */
        class MapSourceDesc extends GObject.Object {
            static $gtype: GObject.GType<MapSourceDesc>;

            // Properties

            /**
             * User data passed to the constructor
             */
            get data(): any;
            /**
             * The id of the map source
             */
            get id(): string;
            /**
             * The license of the map source
             */
            get license(): string;
            /**
             * The license's uri for more information
             */
            get license_uri(): string;
            /**
             * The license's uri for more information
             */
            get licenseUri(): string;
            /**
             * The maximum zoom level
             */
            get max_zoom_level(): number;
            /**
             * The maximum zoom level
             */
            get maxZoomLevel(): number;
            /**
             * The minimum zoom level
             */
            get min_zoom_level(): number;
            /**
             * The minimum zoom level
             */
            get minZoomLevel(): number;
            /**
             * The name of the map source
             */
            get name(): string;
            /**
             * The map projection of the map source
             */
            get projection(): MapProjection;
            /**
             * The tile size of the map source
             */
            get tile_size(): number;
            /**
             * The tile size of the map source
             */
            get tileSize(): number;
            /**
             * The URI format of a network map source
             */
            get uri_format(): string;
            /**
             * The URI format of a network map source
             */
            get uriFormat(): string;

            // Constructors

            constructor(properties?: Partial<MapSourceDesc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets user data.
             * @returns the user data.
             */
            get_data(): any | null;
            /**
             * Gets map source's id.
             * @returns the map source's id.
             */
            get_id(): string;
            /**
             * Gets map source's license.
             * @returns the map source's license.
             */
            get_license(): string;
            /**
             * Gets map source's license URI.
             * @returns the map source's license URI.
             */
            get_license_uri(): string;
            /**
             * Gets map source's maximum zoom level.
             * @returns the maximum zoom level this map source supports
             */
            get_max_zoom_level(): number;
            /**
             * Gets map source's minimum zoom level.
             * @returns the miminum zoom level this map source supports
             */
            get_min_zoom_level(): number;
            /**
             * Gets map source's name.
             * @returns the map source's name.
             */
            get_name(): string;
            /**
             * Gets map source's projection.
             * @returns the map source's projection.
             */
            get_projection(): MapProjection;
            /**
             * Gets map source's tile size.
             * @returns the tile's size (width and height) in pixels for this map source
             */
            get_tile_size(): number;
            /**
             * Gets network map source's URI format.
             * @returns the URI format.
             */
            get_uri_format(): string;
        }

        module MapSourceFactory {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * The #ChamplainMapSourceFactory structure contains only private data
         * and should be accessed using the provided API
         */
        class MapSourceFactory extends GObject.Object {
            static $gtype: GObject.GType<MapSourceFactory>;

            // Constructors

            constructor(properties?: Partial<MapSourceFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * A method to obtain the singleton object.
             */
            static dup_default(): MapSourceFactory;

            // Methods

            /**
             * Note: The id should not contain any character that can't be in a filename as it
             * will be used as the cache directory name for that map source.
             * @param id the wanted map source id
             * @returns a ready to use #ChamplainMapSource matching the given name; returns NULL if the source with the given name doesn't exist.
             */
            create(id: string): MapSource;
            /**
             * Creates a cached map source.
             * @param id the wanted map source id
             * @returns a ready to use #ChamplainMapSourceChain consisting of #ChamplainMemoryCache, #ChamplainFileCache, #ChamplainMapSource matching the given name, and an error tile source created with champlain_map_source_factory_create_error_source (). Returns NULL if the source with the given name doesn't exist.
             */
            create_cached_source(id: string): MapSource;
            /**
             * Creates a map source generating error tiles.
             * @param tile_size the size of the error tile
             * @returns a ready to use map source generating error tiles.
             */
            create_error_source(tile_size: number): MapSource;
            /**
             * Creates a memory cached map source.
             * @param id the wanted map source id
             * @returns a ready to use #ChamplainMapSourceChain consisting of #ChamplainMemoryCache and #ChamplainMapSource matching the given name. Returns NULL if the source with the given name doesn't exist.
             */
            create_memcached_source(id: string): MapSource;
            /**
             * Get the list of registered map sources.
             * @returns the list of registered map sources, the items should not be freed, the list should be freed with #g_slist_free.
             */
            get_registered(): MapSourceDesc[];
            /**
             * Registers the new map source with the given constructor.  When this map
             * source is requested, the given constructor will be used to build the
             * map source.  #ChamplainMapSourceFactory will take ownership of the passed
             * #ChamplainMapSourceDesc, so don't free it.
             * @param desc the description of the map source
             * @returns TRUE if the registration suceeded.
             */
            register(desc: MapSourceDesc): boolean;
        }

        module Marker {
            // Signal callback interfaces

            interface ButtonPress {
                (event: Clutter.Event): void;
            }

            interface ButtonRelease {
                (event: Clutter.Event): void;
            }

            interface DragFinish {
                (event: Clutter.Event): void;
            }

            interface DragMotion {
                (dx: number, dy: number, event: Clutter.Event): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Location.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                draggable: boolean;
                selectable: boolean;
                selected: boolean;
            }
        }

        /**
         * The #ChamplainMarker structure contains only private data
         * and should be accessed using the provided API
         */
        class Marker
            extends Clutter.Actor
            implements Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Marker>;

            // Properties

            /**
             * The draggable state of the marker
             */
            get draggable(): boolean;
            set draggable(val: boolean);
            /**
             * The selectable state of the marker
             */
            get selectable(): boolean;
            set selectable(val: boolean);
            /**
             * The selected state of the marker
             */
            get selected(): boolean;
            set selected(val: boolean);

            // Constructors

            constructor(properties?: Partial<Marker.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Marker;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'button-press', callback: (_source: this, event: Clutter.Event) => void): number;
            connect_after(signal: 'button-press', callback: (_source: this, event: Clutter.Event) => void): number;
            emit(signal: 'button-press', event: Clutter.Event): void;
            connect(signal: 'button-release', callback: (_source: this, event: Clutter.Event) => void): number;
            connect_after(signal: 'button-release', callback: (_source: this, event: Clutter.Event) => void): number;
            emit(signal: 'button-release', event: Clutter.Event): void;
            connect(signal: 'drag-finish', callback: (_source: this, event: Clutter.Event) => void): number;
            connect_after(signal: 'drag-finish', callback: (_source: this, event: Clutter.Event) => void): number;
            emit(signal: 'drag-finish', event: Clutter.Event): void;
            connect(
                signal: 'drag-motion',
                callback: (_source: this, dx: number, dy: number, event: Clutter.Event) => void,
            ): number;
            connect_after(
                signal: 'drag-motion',
                callback: (_source: this, dx: number, dy: number, event: Clutter.Event) => void,
            ): number;
            emit(signal: 'drag-motion', dx: number, dy: number, event: Clutter.Event): void;

            // Static methods

            /**
             * Gets the selection color.
             */
            static get_selection_color(): Clutter.Color;
            /**
             * Gets the selection text color.
             */
            static get_selection_text_color(): Clutter.Color;
            /**
             * Changes the selection color, this is to ensure a better integration with
             * the desktop, this is automatically done by GtkChamplainEmbed.
             * @param color a #ClutterColor
             */
            static set_selection_color(color: Clutter.Color): void;
            /**
             * Changes the selection text color, this is to ensure a better integration with
             * the desktop, this is automatically done by GtkChamplainEmbed.
             * @param color a #ClutterColor
             */
            static set_selection_text_color(color: Clutter.Color): void;

            // Methods

            /**
             * Animates the marker as if it were falling from the sky onto the map.
             */
            animate_in(): void;
            /**
             * Animates the marker as if it were falling from the sky onto the map after
             * delay.
             * @param delay The delay in milliseconds
             */
            animate_in_with_delay(delay: number): void;
            /**
             * Animates the marker as if it were drawn through the sky.
             */
            animate_out(): void;
            /**
             * Animates the marker as if it were drawn through the sky after
             * delay.
             * @param delay The delay in milliseconds
             */
            animate_out_with_delay(delay: number): void;
            /**
             * Checks whether the marker is draggable.
             * @returns the draggable or not state of the marker.
             */
            get_draggable(): boolean;
            /**
             * Checks whether the marker is selectable.
             * @returns the selectable or not state of the marker.
             */
            get_selectable(): boolean;
            /**
             * Checks whether the marker is selected.
             * @returns the selected or not state of the marker.
             */
            get_selected(): boolean;
            /**
             * Sets the marker as draggable or not.
             * @param value the draggable state
             */
            set_draggable(value: boolean): void;
            /**
             * Sets the marker as selectable or not.
             * @param value the selectable state
             */
            set_selectable(value: boolean): void;
            /**
             * Sets the marker as selected or not. This will affect the "Selected" look
             * of the marker.
             * @param value the selected state
             */
            set_selected(value: boolean): void;

            // Inherited properties
            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module MarkerLayer {
            // Constructor properties interface

            interface ConstructorProps
                extends Layer.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Exportable.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                selection_mode: SelectionMode;
                selectionMode: SelectionMode;
            }
        }

        /**
         * The #ChamplainMarkerLayer structure contains only private data
         * and should be accessed using the provided API
         */
        class MarkerLayer
            extends Layer
            implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<MarkerLayer>;

            // Properties

            /**
             * Determines the type of selection that will be performed.
             */
            get selection_mode(): SelectionMode;
            set selection_mode(val: SelectionMode);
            /**
             * Determines the type of selection that will be performed.
             */
            get selectionMode(): SelectionMode;
            set selectionMode(val: SelectionMode);

            // Constructors

            constructor(properties?: Partial<MarkerLayer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MarkerLayer;

            static new_full(mode: SelectionMode): MarkerLayer;

            // Methods

            /**
             * Adds the marker to the layer.
             * @param marker a #ChamplainMarker
             */
            add_marker(marker: Marker): void;
            /**
             * Fade in all markers in the layer with an animation
             */
            animate_in_all_markers(): void;
            /**
             * Fade out all markers in the layer with an animation
             */
            animate_out_all_markers(): void;
            /**
             * Gets a copy of the list of all markers inserted into the layer. You should
             * free the list but not its contents.
             * @returns the list
             */
            get_markers(): Marker[];
            /**
             * Gets a list of selected markers in the layer.
             * @returns the list
             */
            get_selected(): Marker[];
            /**
             * Gets the selection mode of the layer.
             * @returns the selection mode of the layer.
             */
            get_selection_mode(): SelectionMode;
            /**
             * Hides all the markers in the layer
             */
            hide_all_markers(): void;
            /**
             * Removes all markers from the layer.
             */
            remove_all(): void;
            /**
             * Removes the marker from the layer.
             * @param marker a #ChamplainMarker
             */
            remove_marker(marker: Marker): void;
            /**
             * Selects all markers in the layer.
             */
            select_all_markers(): void;
            /**
             * Sets all markers draggable in the layer
             */
            set_all_markers_draggable(): void;
            /**
             * Sets all markers undraggable in the layer
             */
            set_all_markers_undraggable(): void;
            /**
             * Sets the selection mode of the layer.
             *
             * NOTE: changing selection mode to CHAMPLAIN_SELECTION_NONE or
             * CHAMPLAIN_SELECTION_SINGLE will clear all previously selected markers.
             * @param mode a #ChamplainSelectionMode value
             */
            set_selection_mode(mode: SelectionMode | null): void;
            /**
             * Shows all markers in the layer
             */
            show_all_markers(): void;
            /**
             * Unselects all markers in the layer.
             */
            unselect_all_markers(): void;

            // Inherited properties
            /**
             * A #cairo_surface_t representation
             */
            get surface(): cairo.Surface;
            set surface(val: cairo.Surface);

            // Inherited methods
            /**
             * Gets the surface
             * @returns the #cairo_surface_t of the object
             */
            get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            set_surface(surface: cairo.Surface): void;
            /**
             * Gets the surface
             */
            vfunc_get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            vfunc_set_surface(surface: cairo.Surface): void;
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

        module MemoryCache {
            // Constructor properties interface

            interface ConstructorProps extends TileCache.ConstructorProps {
                size_limit: number;
                sizeLimit: number;
            }
        }

        /**
         * The #ChamplainMemoryCache structure contains only private data
         * and should be accessed using the provided API
         */
        class MemoryCache extends TileCache {
            static $gtype: GObject.GType<MemoryCache>;

            // Properties

            /**
             * The maximum number of tiles that are stored in the cache.
             */
            get size_limit(): number;
            set size_limit(val: number);
            /**
             * The maximum number of tiles that are stored in the cache.
             */
            get sizeLimit(): number;
            set sizeLimit(val: number);

            // Constructors

            constructor(properties?: Partial<MemoryCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(size_limit: number, renderer: Renderer): MemoryCache;

            // Methods

            /**
             * Cleans the contents of the cache.
             */
            clean(): void;
            /**
             * Gets the maximum number of tiles stored in the cache.
             * @returns maximum number of stored tiles
             */
            get_size_limit(): number;
            /**
             * Sets the maximum number of tiles stored in the cache.
             * @param size_limit maximum number of tiles stored in the cache
             */
            set_size_limit(size_limit: number): void;
        }

        module NetworkBboxTileSource {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {
                api_uri: string;
                apiUri: string;
                proxy_uri: string;
                proxyUri: string;
                state: State;
                user_agent: string;
                userAgent: string;
            }
        }

        /**
         * The #ChamplainNetworkBboxTileSource structure contains only private data
         * and should be accessed using the provided API
         */
        class NetworkBboxTileSource extends TileSource {
            static $gtype: GObject.GType<NetworkBboxTileSource>;

            // Properties

            /**
             * The URI of an OpenStreetMap API server
             */
            get api_uri(): string;
            set api_uri(val: string);
            /**
             * The URI of an OpenStreetMap API server
             */
            get apiUri(): string;
            set apiUri(val: string);
            /**
             * Used to override the default proxy for accessing the network.
             */
            get proxy_uri(): string;
            set proxy_uri(val: string);
            /**
             * Used to override the default proxy for accessing the network.
             */
            get proxyUri(): string;
            set proxyUri(val: string);
            /**
             * The map source's state. Useful to know if the data source is loading
             * or not.
             */
            get state(): State;
            set state(val: State);
            /**
             * The HTTP user agent used for requests
             */
            set user_agent(val: string);
            /**
             * The HTTP user agent used for requests
             */
            set userAgent(val: string);

            // Constructors

            constructor(properties?: Partial<NetworkBboxTileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(
                id: string,
                name: string,
                license: string,
                license_uri: string,
                min_zoom: number,
                max_zoom: number,
                tile_size: number,
                projection: MapProjection,
                renderer: Renderer,
            ): NetworkBboxTileSource;

            // Methods

            /**
             * Gets the URI of the API server.
             * @returns the URI of the API server.
             */
            get_api_uri(): string;
            /**
             * Asynchronously loads map data within a bounding box from the server.
             * The box must not exceed an edge size of 0.25 degree. There are also
             * limitations on the maximum number of nodes that can be requested.
             *
             * For details, see: <ulink role="online-location"
             * url="https://api.openstreetmap.org/api/capabilities">
             * https://api.openstreetmap.org/api/capabilities</ulink>
             * @param bbox bounding box of the requested area
             */
            load_map_data(bbox: BoundingBox): void;
            /**
             * Sets the URI of the API server.
             * @param api_uri an URI of an API server
             */
            set_api_uri(api_uri: string): void;
            /**
             * Sets the User-Agent header used communicating with the server.
             * @param user_agent A User-Agent string
             */
            set_user_agent(user_agent: string): void;
        }

        module NetworkTileSource {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {
                max_conns: number;
                maxConns: number;
                offline: boolean;
                proxy_uri: string;
                proxyUri: string;
                uri_format: string;
                uriFormat: string;
                user_agent: string;
                userAgent: string;
            }
        }

        /**
         * The #ChamplainNetworkTileSource structure contains only private data
         * and should be accessed using the provided API
         */
        class NetworkTileSource extends TileSource {
            static $gtype: GObject.GType<NetworkTileSource>;

            // Properties

            /**
             * Specifies the max number of allowed simultaneous connections for this tile
             * source.
             *
             * Before changing this remember to verify how many simultaneous connections
             * your tile provider allows you to make.
             */
            get max_conns(): number;
            set max_conns(val: number);
            /**
             * Specifies the max number of allowed simultaneous connections for this tile
             * source.
             *
             * Before changing this remember to verify how many simultaneous connections
             * your tile provider allows you to make.
             */
            get maxConns(): number;
            set maxConns(val: number);
            /**
             * Specifies whether the network tile source can access network
             */
            get offline(): boolean;
            set offline(val: boolean);
            /**
             * Used to override the default proxy for accessing the network.
             */
            get proxy_uri(): string;
            set proxy_uri(val: string);
            /**
             * Used to override the default proxy for accessing the network.
             */
            get proxyUri(): string;
            set proxyUri(val: string);
            /**
             * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
             */
            get uri_format(): string;
            set uri_format(val: string);
            /**
             * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
             */
            get uriFormat(): string;
            set uriFormat(val: string);
            /**
             * The HTTP user agent used for requests
             */
            set user_agent(val: string);
            /**
             * The HTTP user agent used for requests
             */
            set userAgent(val: string);

            // Constructors

            constructor(properties?: Partial<NetworkTileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(
                id: string,
                name: string,
                license: string,
                license_uri: string,
                min_zoom: number,
                max_zoom: number,
                tile_size: number,
                projection: MapProjection,
                uri_format: string,
                renderer: Renderer,
            ): NetworkTileSource;

            // Methods

            /**
             * Gets the max number of allowed simultaneous connections for this tile
             * source.
             * @returns the max number of allowed simultaneous connections for this tile source.
             */
            get_max_conns(): number;
            /**
             * Gets offline status.
             * @returns TRUE when the tile source is set to be offline; FALSE otherwise.
             */
            get_offline(): boolean;
            /**
             * Gets the proxy uri used to access network.
             * @returns the proxy uri
             */
            get_proxy_uri(): string;
            /**
             * Default constructor of #ChamplainNetworkTileSource.
             * @returns A URI format used for URI creation when downloading tiles. See champlain_network_tile_source_set_uri_format() for more information.
             */
            get_uri_format(): string;
            /**
             * Sets the max number of allowed simultaneous connections for this tile source.
             *
             * Before changing this remember to verify how many simultaneous connections
             * your tile provider allows you to make.
             * @param max_conns the number of allowed simultaneous connections
             */
            set_max_conns(max_conns: number): void;
            /**
             * Sets offline status.
             * @param offline TRUE when the tile source should be offline; FALSE otherwise
             */
            set_offline(offline: boolean): void;
            /**
             * Override the default proxy for accessing the network.
             * @param proxy_uri the proxy uri used to access network
             */
            set_proxy_uri(proxy_uri: string): void;
            /**
             * A URI format is a URI where x, y and zoom level information have been
             * marked for parsing and insertion.  There can be an unlimited number of
             * marked items in a URI format.  They are delimited by "#" before and after
             * the variable name. There are 4 defined variable names: X, Y, Z, and TMSY for
             * Y in TMS coordinates.
             *
             * For example, this is the OpenStreetMap URI format:
             * "https://tile.openstreetmap.org/\#Z\#/\#X\#/\#Y\#.png"
             * @param uri_format the URI format
             */
            set_uri_format(uri_format: string): void;
            /**
             * Sets the User-Agent header used communicating with the server.
             * @param user_agent A User-Agent string
             */
            set_user_agent(user_agent: string): void;
        }

        module NullTileSource {
            // Constructor properties interface

            interface ConstructorProps extends TileSource.ConstructorProps {}
        }

        /**
         * The #ChamplainNullTileSource structure contains only private data
         * and should be accessed using the provided API
         */
        class NullTileSource extends TileSource {
            static $gtype: GObject.GType<NullTileSource>;

            // Constructors

            constructor(properties?: Partial<NullTileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_full(renderer: Renderer): NullTileSource;
        }

        module PathLayer {
            // Constructor properties interface

            interface ConstructorProps
                extends Layer.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Exportable.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                closed: boolean;
                fill: boolean;
                fill_color: Clutter.Color;
                fillColor: Clutter.Color;
                stroke: boolean;
                stroke_color: Clutter.Color;
                strokeColor: Clutter.Color;
                stroke_width: number;
                strokeWidth: number;
                visible: boolean;
            }
        }

        /**
         * The #ChamplainPathLayer structure contains only private data
         * and should be accessed using the provided API
         */
        class PathLayer
            extends Layer
            implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<PathLayer>;

            // Properties

            /**
             * The shape is a closed path
             */
            get closed(): boolean;
            set closed(val: boolean);
            /**
             * The shape should be filled
             */
            get fill(): boolean;
            set fill(val: boolean);
            /**
             * The path's fill color
             */
            get fill_color(): Clutter.Color;
            set fill_color(val: Clutter.Color);
            /**
             * The path's fill color
             */
            get fillColor(): Clutter.Color;
            set fillColor(val: Clutter.Color);
            /**
             * The shape should be stroked
             */
            get stroke(): boolean;
            set stroke(val: boolean);
            /**
             * The path's stroke color
             */
            get stroke_color(): Clutter.Color;
            set stroke_color(val: Clutter.Color);
            /**
             * The path's stroke color
             */
            get strokeColor(): Clutter.Color;
            set strokeColor(val: Clutter.Color);
            /**
             * The path's stroke width (in pixels)
             */
            get stroke_width(): number;
            set stroke_width(val: number);
            /**
             * The path's stroke width (in pixels)
             */
            get strokeWidth(): number;
            set strokeWidth(val: number);
            /**
             * Wether the path is visible
             */
            get visible(): boolean;
            set visible(val: boolean);

            // Constructors

            constructor(properties?: Partial<PathLayer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PathLayer;

            // Methods

            /**
             * Adds a #ChamplainLocation object to the layer.
             * The node is prepended to the list.
             * @param location a #ChamplainLocation
             */
            add_node(location: Location): void;
            /**
             * Gets information whether the path is closed.
             * @returns TRUE when the path is closed, FALSE otherwise
             */
            get_closed(): boolean;
            /**
             * Returns the list of dash segment lengths.
             * @returns the list
             */
            get_dash(): number[];
            /**
             * Checks whether the path is filled.
             * @returns TRUE if the path is filled, FALSE otherwise.
             */
            get_fill(): boolean;
            /**
             * Gets the path's fill color.
             * @returns the path's fill color.
             */
            get_fill_color(): Clutter.Color;
            /**
             * Gets a copy of the list of all #ChamplainLocation objects inserted into the layer. You should
             * free the list but not its contents.
             * @returns the list
             */
            get_nodes(): Location[];
            /**
             * Checks whether the path is stroked.
             * @returns TRUE if the path is stroked, FALSE otherwise.
             */
            get_stroke(): boolean;
            /**
             * Gets the path's stroke color.
             * @returns the path's stroke color.
             */
            get_stroke_color(): Clutter.Color;
            /**
             * Gets the width of the stroke.
             * @returns the width of the stroke
             */
            get_stroke_width(): number;
            /**
             * Gets path visibility.
             * @returns TRUE when the path is visible, FALSE otherwise
             */
            get_visible(): boolean;
            /**
             * Inserts a #ChamplainLocation object to the specified position.
             * @param location a #ChamplainLocation
             * @param position position in the list where the #ChamplainLocation object should be inserted
             */
            insert_node(location: Location, position: number): void;
            /**
             * Removes all #ChamplainLocation objects from the layer.
             */
            remove_all(): void;
            /**
             * Removes the #ChamplainLocation object from the layer.
             * @param location a #ChamplainLocation
             */
            remove_node(location: Location): void;
            /**
             * Makes the path closed.
             * @param value TRUE to make the path closed
             */
            set_closed(value: boolean): void;
            /**
             * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
             * method supports only integer values for segment lengths. The values have to be
             * passed inside the data pointer of the list (using the GUINT_TO_POINTER conversion)
             *
             * Pass NULL to use solid line.
             * @param dash_pattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
             */
            set_dash(dash_pattern: number[]): void;
            /**
             * Sets the path to be filled
             * @param value if the path is filled
             */
            set_fill(value: boolean): void;
            /**
             * Set the path's fill color.
             * @param color The path's fill color or NULL to reset to the         default color. The color parameter is copied.
             */
            set_fill_color(color?: Clutter.Color | null): void;
            /**
             * Sets the path to be stroked
             * @param value if the path is stroked
             */
            set_stroke(value: boolean): void;
            /**
             * Set the path's stroke color.
             * @param color The path's stroke color or NULL to reset to the         default color. The color parameter is copied.
             */
            set_stroke_color(color?: Clutter.Color | null): void;
            /**
             * Sets the width of the stroke
             * @param value the width of the stroke (in pixels)
             */
            set_stroke_width(value: number): void;
            /**
             * Sets path visibility.
             * @param value TRUE to make the path visible
             */
            set_visible(value: boolean): void;

            // Inherited properties
            /**
             * A #cairo_surface_t representation
             */
            get surface(): cairo.Surface;
            set surface(val: cairo.Surface);

            // Inherited methods
            /**
             * Gets the surface
             * @returns the #cairo_surface_t of the object
             */
            get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            set_surface(surface: cairo.Surface): void;
            /**
             * Gets the surface
             */
            vfunc_get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            vfunc_set_surface(surface: cairo.Surface): void;
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

        module Point {
            // Constructor properties interface

            interface ConstructorProps
                extends Marker.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Exportable.ConstructorProps,
                    Location.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                color: Clutter.Color;
                size: number | any;
            }
        }

        /**
         * The #ChamplainPoint structure contains only private data
         * and should be accessed using the provided API
         */
        class Point
            extends Marker
            implements
                Atk.ImplementorIface,
                Exportable,
                Location,
                Clutter.Animatable,
                Clutter.Container,
                Clutter.Scriptable
        {
            static $gtype: GObject.GType<Point>;

            // Properties

            get color(): Clutter.Color;
            set color(val: Clutter.Color);
            // This accessor conflicts with another accessor's type in a parent class or interface.
            get size(): number | any;
            // This accessor conflicts with another accessor's type in a parent class or interface.
            set size(val: number | any);

            // Constructors

            constructor(properties?: Partial<Point.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Point;

            static new_full(size: number, color: Clutter.Color): Point;

            // Methods

            /**
             * Gets the color of the point.
             * @returns the color.
             */
            get_color(): Clutter.Color;
            /**
             * Gets the size of the point.
             * @returns the size.
             */
            get_size(): number;
            // Conflicted with Clutter.Actor.get_size
            get_size(...args: never[]): any;
            /**
             * Set the color of the point.
             * @param color The color of the point or NULL to reset the background to the         default color. The color parameter is copied.
             */
            set_color(color?: Clutter.Color | null): void;
            /**
             * Set the size of the point.
             * @param size The size of the point.
             */
            set_size(size: number): void;

            // Inherited properties
            /**
             * A #cairo_surface_t representation
             */
            get surface(): cairo.Surface;
            set surface(val: cairo.Surface);
            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Inherited methods
            /**
             * Gets the surface
             * @returns the #cairo_surface_t of the object
             */
            get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            set_surface(surface: cairo.Surface): void;
            /**
             * Gets the surface
             */
            vfunc_get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            vfunc_set_surface(surface: cairo.Surface): void;
            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;
            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
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

        module Renderer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
        }

        /**
         * The #ChamplainRenderer structure contains only private data
         * and should be accessed using the provided API
         */
        class Renderer extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<Renderer>;

            // Constructors

            constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Renders the texture for the provided tile and calls champlain_tile_set_content()
             * to set the content of the tile. When the rendering is finished, the renderer
             * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
             * calling champlain_tile_display_content().
             * @param tile the tile to render
             */
            vfunc_render(tile: Tile): void;
            /**
             * Sets the data which is used to render tiles by the renderer.
             * @param data data used for tile rendering
             */
            vfunc_set_data(data: Uint8Array | string): void;

            // Methods

            /**
             * Renders the texture for the provided tile and calls champlain_tile_set_content()
             * to set the content of the tile. When the rendering is finished, the renderer
             * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
             * calling champlain_tile_display_content().
             * @param tile the tile to render
             */
            render(tile: Tile): void;
            /**
             * Sets the data which is used to render tiles by the renderer.
             * @param data data used for tile rendering
             */
            set_data(data: Uint8Array | string): void;
            // Conflicted with GObject.Object.set_data
            set_data(...args: never[]): any;
        }

        module Scale {
            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                max_width: number;
                maxWidth: number;
                unit: Unit;
            }
        }

        /**
         * The #ChamplainScale structure contains only private data
         * and should be accessed using the provided API
         */
        class Scale
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Scale>;

            // Properties

            /**
             * The size of the map scale on screen in pixels.
             */
            get max_width(): number;
            set max_width(val: number);
            /**
             * The size of the map scale on screen in pixels.
             */
            get maxWidth(): number;
            set maxWidth(val: number);
            /**
             * The scale's units.
             */
            get unit(): Unit;
            set unit(val: Unit);

            // Constructors

            constructor(properties?: Partial<Scale.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Scale;

            // Methods

            /**
             * This method connects to the necessary signals of #ChamplainView to make the
             * scale adapt to the current latitude and longitude.
             * @param view a #ChamplainView
             */
            connect_view(view: View): void;
            /**
             * This method disconnects from the signals previously connected by champlain_scale_connect_view().
             */
            disconnect_view(): void;
            /**
             * Gets the maximum scale width.
             * @returns The maximum scale width in pixels.
             */
            get_max_width(): number;
            /**
             * Gets the unit used by the scale.
             * @returns The unit used by the scale
             */
            get_unit(): Unit;
            /**
             * Sets the maximum width of the scale on the screen in pixels
             * @param value the number of pixels
             */
            set_max_width(value: number): void;
            /**
             * Sets the scale unit.
             * @param unit a #ChamplainUnit
             */
            set_unit(unit: Unit | null): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module Tile {
            // Signal callback interfaces

            interface RenderComplete {
                (data: any | null, size: number, error: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Exportable.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                content: Clutter.Actor | any;
                etag: string;
                fade_in: boolean;
                fadeIn: boolean;
                size: number | any;
                state: State;
                x: number;
                y: number;
                zoom_level: number;
                zoomLevel: number;
            }
        }

        /**
         * The #ChamplainTile structure contains only private data
         * and should be accessed using the provided API
         */
        class Tile
            extends Clutter.Actor
            implements Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Tile>;

            // Properties

            /**
             * The #ClutterActor with the specific image content.  When changing this
             * property, the new actor will be faded in.
             */
            // This accessor conflicts with another accessor's type in a parent class or interface.
            get content(): Clutter.Actor | any;
            // This accessor conflicts with another accessor's type in a parent class or interface.
            set content(val: Clutter.Actor | any);
            /**
             * The tile's ETag. This information is sent by some web servers as a mean
             * to identify if a tile has changed.  This information is saved in the cache
             * and sent in GET queries.
             */
            get etag(): string;
            set etag(val: string);
            /**
             * Specifies whether the tile should fade in when loading
             */
            get fade_in(): boolean;
            set fade_in(val: boolean);
            /**
             * Specifies whether the tile should fade in when loading
             */
            get fadeIn(): boolean;
            set fadeIn(val: boolean);
            /**
             * The size of the tile in pixels
             */
            // This accessor conflicts with another accessor's type in a parent class or interface.
            get size(): number | any;
            // This accessor conflicts with another accessor's type in a parent class or interface.
            set size(val: number | any);
            /**
             * The state of the tile
             */
            get state(): State;
            set state(val: State);
            /**
             * The x position of the tile
             */
            get x(): number;
            set x(val: number);
            /**
             * The y position of the tile
             */
            get y(): number;
            set y(val: number);
            /**
             * The zoom level of the tile
             */
            get zoom_level(): number;
            set zoom_level(val: number);
            /**
             * The zoom level of the tile
             */
            get zoomLevel(): number;
            set zoomLevel(val: number);

            // Constructors

            constructor(properties?: Partial<Tile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Tile;

            static new_full(x: number, y: number, size: number, zoom_level: number): Tile;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'render-complete',
                callback: (_source: this, data: any | null, size: number, error: boolean) => void,
            ): number;
            connect_after(
                signal: 'render-complete',
                callback: (_source: this, data: any | null, size: number, error: boolean) => void,
            ): number;
            emit(signal: 'render-complete', data: any | null, size: number, error: boolean): void;

            // Methods

            /**
             * Displays the tile's content.
             */
            display_content(): void;
            /**
             * Gets the tile's content actor.
             * @returns the tile's content, this actor will change each time the tile's content changes. You should not unref this content, it is owned by the tile.
             */
            get_content(): Clutter.Actor;
            // Conflicted with Clutter.Actor.get_content
            get_content(...args: never[]): any;
            /**
             * Gets the tile's ETag.
             * @returns the tile's ETag
             */
            get_etag(): string;
            /**
             * Checks whether the tile should fade in.
             * @returns the return value determines whether the tile should fade in when loading.
             */
            get_fade_in(): boolean;
            /**
             * Gets the tile's last modified time.
             * @returns the tile's last modified time
             */
            get_modified_time(): GLib.TimeVal;
            /**
             * Gets the tile's size.
             * @returns the tile's size in pixels
             */
            get_size(): number;
            // Conflicted with Clutter.Actor.get_size
            get_size(...args: never[]): any;
            /**
             * Gets the current state of tile loading.
             * @returns the tile's #ChamplainState
             */
            get_state(): State;
            /**
             * Gets the tile's x position.
             * @returns the tile's x position
             */
            get_x(): number;
            /**
             * Gets the tile's y position.
             * @returns the tile's y position
             */
            get_y(): number;
            /**
             * Gets the tile's zoom level.
             * @returns the tile's zoom level
             */
            get_zoom_level(): number;
            /**
             * Sets the tile's content. To also disppay the tile, you have to call
             * champlain_tile_display_content() in addition.
             * @param actor the new content
             */
            set_content(actor: Clutter.Actor): void;
            // Conflicted with Clutter.Actor.set_content
            set_content(...args: never[]): any;
            /**
             * Sets the tile's ETag
             * @param etag the tile's ETag as sent by the server
             */
            set_etag(etag: string): void;
            /**
             * Sets the flag determining whether the tile should fade in when loading
             * @param fade_in determines whether the tile should fade in when loading
             */
            set_fade_in(fade_in: boolean): void;
            /**
             * Sets the tile's modified time
             * @param time a #GTimeVal, the value will be copied
             */
            set_modified_time(time: GLib.TimeVal): void;
            /**
             * Sets the tile's size
             * @param size the size in pixels
             */
            set_size(size: number): void;
            /**
             * Sets the tile's #ChamplainState
             * @param state a #ChamplainState
             */
            set_state(state: State | null): void;
            /**
             * Sets the tile's x position
             * @param x the position
             */
            set_x(x: number): void;
            /**
             * Sets the tile's y position
             * @param y the position
             */
            set_y(y: number): void;
            /**
             * Sets the tile's zoom level
             * @param zoom_level the zoom level
             */
            set_zoom_level(zoom_level: number): void;

            // Inherited properties
            /**
             * A #cairo_surface_t representation
             */
            get surface(): cairo.Surface;
            set surface(val: cairo.Surface);

            // Inherited methods
            /**
             * Gets the surface
             * @returns the #cairo_surface_t of the object
             */
            get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            set_surface(surface: cairo.Surface): void;
            /**
             * Gets the surface
             */
            vfunc_get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            vfunc_set_surface(surface: cairo.Surface): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module TileCache {
            // Constructor properties interface

            interface ConstructorProps extends MapSource.ConstructorProps {}
        }

        /**
         * The #ChamplainTileCache structure contains only private data
         * and should be accessed using the provided API
         */
        abstract class TileCache extends MapSource {
            static $gtype: GObject.GType<TileCache>;

            // Constructors

            constructor(properties?: Partial<TileCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * When a cache fills a tile and the next source in the chain is a tile cache,
             * it should call this function on the next source. This way all the caches
             * preceding a tile source in the chain get informed that the tile was used and
             * can modify their metadata accordingly in the implementation of this function.
             * In addition, the call of this function should be chained so within the
             * implementation of this function it should be called on the next source
             * in the chain when next source is a tile cache.
             * @param tile a #ChamplainTile
             */
            vfunc_on_tile_filled(tile: Tile): void;
            /**
             * Refreshes the tile access time in the cache.
             * @param tile a #ChamplainTile
             */
            vfunc_refresh_tile_time(tile: Tile): void;
            /**
             * Stores the tile including the metadata into the cache.
             * @param tile a #ChamplainTile
             * @param contents the tile contents that should be stored
             * @param size size of the contents in bytes
             */
            vfunc_store_tile(tile: Tile, contents: string, size: number): void;

            // Methods

            /**
             * When a cache fills a tile and the next source in the chain is a tile cache,
             * it should call this function on the next source. This way all the caches
             * preceding a tile source in the chain get informed that the tile was used and
             * can modify their metadata accordingly in the implementation of this function.
             * In addition, the call of this function should be chained so within the
             * implementation of this function it should be called on the next source
             * in the chain when next source is a tile cache.
             * @param tile a #ChamplainTile
             */
            on_tile_filled(tile: Tile): void;
            /**
             * Refreshes the tile access time in the cache.
             * @param tile a #ChamplainTile
             */
            refresh_tile_time(tile: Tile): void;
            /**
             * Stores the tile including the metadata into the cache.
             * @param tile a #ChamplainTile
             * @param contents the tile contents that should be stored
             * @param size size of the contents in bytes
             */
            store_tile(tile: Tile, contents: string, size: number): void;
        }

        module TileSource {
            // Constructor properties interface

            interface ConstructorProps extends MapSource.ConstructorProps {
                cache: TileCache;
                id: string;
                license: string;
                license_uri: string;
                licenseUri: string;
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
                name: string;
                projection: MapProjection;
                tile_size: number;
                tileSize: number;
            }
        }

        /**
         * The #ChamplainTileSource structure contains only private data
         * and should be accessed using the provided API
         */
        abstract class TileSource extends MapSource {
            static $gtype: GObject.GType<TileSource>;

            // Properties

            /**
             * The cache used for tile storage
             */
            get cache(): TileCache;
            set cache(val: TileCache);
            /**
             * The id of the tile source
             */
            get id(): string;
            set id(val: string);
            /**
             * The usage license of the tile source
             */
            get license(): string;
            set license(val: string);
            /**
             * The usage license's uri for more information
             */
            get license_uri(): string;
            set license_uri(val: string);
            /**
             * The usage license's uri for more information
             */
            get licenseUri(): string;
            set licenseUri(val: string);
            /**
             * The maximum zoom level
             */
            get max_zoom_level(): number;
            set max_zoom_level(val: number);
            /**
             * The maximum zoom level
             */
            get maxZoomLevel(): number;
            set maxZoomLevel(val: number);
            /**
             * The minimum zoom level
             */
            get min_zoom_level(): number;
            set min_zoom_level(val: number);
            /**
             * The minimum zoom level
             */
            get minZoomLevel(): number;
            set minZoomLevel(val: number);
            /**
             * The name of the tile source
             */
            get name(): string;
            set name(val: string);
            /**
             * The map projection of the tile source
             */
            get projection(): MapProjection;
            set projection(val: MapProjection);
            /**
             * The tile size of the tile source
             */
            get tile_size(): number;
            set tile_size(val: number);
            /**
             * The tile size of the tile source
             */
            get tileSize(): number;
            set tileSize(val: number);

            // Constructors

            constructor(properties?: Partial<TileSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the cache used for storing tiles by this tile source.
             * @returns the cache
             */
            get_cache(): TileCache;
            /**
             * Sets the map source's cache used for storing tiles.
             * @param cache a #ChamplainTileCache
             */
            set_cache(cache: TileCache): void;
            /**
             * Sets the tile source's id.
             * @param id an id
             */
            set_id(id: string): void;
            /**
             * Sets the tile source's license.
             * @param license the licence
             */
            set_license(license: string): void;
            /**
             * Sets the tile source's license URI.
             * @param license_uri the licence URI
             */
            set_license_uri(license_uri: string): void;
            /**
             * Sets the tile source's maximum zoom level.
             * @param zoom_level the maximum zoom level
             */
            set_max_zoom_level(zoom_level: number): void;
            /**
             * Sets the tile source's minimal zoom level.
             * @param zoom_level the minimal zoom level
             */
            set_min_zoom_level(zoom_level: number): void;
            /**
             * Sets the tile source's name.
             * @param name a name
             */
            set_name(name: string): void;
            /**
             * Sets the tile source's projection.
             * @param projection a #ChamplainMapProjection
             */
            set_projection(projection: MapProjection | null): void;
            /**
             * Sets the tile source's tile size.
             * @param tile_size the tile size
             */
            set_tile_size(tile_size: number): void;
        }

        module View {
            // Signal callback interfaces

            interface AnimationCompleted {
                (): void;
            }

            interface LayerRelocated {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                animate_zoom: boolean;
                animateZoom: boolean;
                background_pattern: Clutter.Actor;
                backgroundPattern: Clutter.Actor;
                deceleration: number;
                goto_animation_duration: number;
                gotoAnimationDuration: number;
                goto_animation_mode: Clutter.AnimationMode;
                gotoAnimationMode: Clutter.AnimationMode;
                horizontal_wrap: boolean;
                horizontalWrap: boolean;
                keep_center_on_resize: boolean;
                keepCenterOnResize: boolean;
                kinetic_mode: boolean;
                kineticMode: boolean;
                latitude: number;
                longitude: number;
                map_source: MapSource;
                mapSource: MapSource;
                max_zoom_level: number;
                maxZoomLevel: number;
                min_zoom_level: number;
                minZoomLevel: number;
                state: State;
                world: BoundingBox;
                zoom_level: number;
                zoomLevel: number;
                zoom_on_double_click: boolean;
                zoomOnDoubleClick: boolean;
            }
        }

        /**
         * The #ChamplainView structure contains only private data
         * and should be accessed using the provided API
         */
        class View
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<View>;

            // Properties

            /**
             * Animate zoom change when zooming in/out.
             */
            get animate_zoom(): boolean;
            set animate_zoom(val: boolean);
            /**
             * Animate zoom change when zooming in/out.
             */
            get animateZoom(): boolean;
            set animateZoom(val: boolean);
            /**
             * The pattern displayed in the background of the map.
             */
            get background_pattern(): Clutter.Actor;
            set background_pattern(val: Clutter.Actor);
            /**
             * The pattern displayed in the background of the map.
             */
            get backgroundPattern(): Clutter.Actor;
            set backgroundPattern(val: Clutter.Actor);
            /**
             * The deceleration rate for the kinetic mode. The default value is 1.1.
             */
            get deceleration(): number;
            set deceleration(val: number);
            /**
             * The duration of an animation when going to a location.
             * A value of 0 means that the duration is calculated automatically for you.
             *
             * Please note that animation of #champlain_view_ensure_visible also
             * involves a 'goto' animation.
             */
            get goto_animation_duration(): number;
            set goto_animation_duration(val: number);
            /**
             * The duration of an animation when going to a location.
             * A value of 0 means that the duration is calculated automatically for you.
             *
             * Please note that animation of #champlain_view_ensure_visible also
             * involves a 'goto' animation.
             */
            get gotoAnimationDuration(): number;
            set gotoAnimationDuration(val: number);
            /**
             * The mode of animation when going to a location.
             *
             * Please note that animation of #champlain_view_ensure_visible also
             * involves a 'goto' animation.
             */
            get goto_animation_mode(): Clutter.AnimationMode;
            set goto_animation_mode(val: Clutter.AnimationMode);
            /**
             * The mode of animation when going to a location.
             *
             * Please note that animation of #champlain_view_ensure_visible also
             * involves a 'goto' animation.
             */
            get gotoAnimationMode(): Clutter.AnimationMode;
            set gotoAnimationMode(val: Clutter.AnimationMode);
            /**
             * Determines whether the view should wrap horizontally.
             */
            get horizontal_wrap(): boolean;
            set horizontal_wrap(val: boolean);
            /**
             * Determines whether the view should wrap horizontally.
             */
            get horizontalWrap(): boolean;
            set horizontalWrap(val: boolean);
            /**
             * Keep the current centered position when resizing the view.
             */
            get keep_center_on_resize(): boolean;
            set keep_center_on_resize(val: boolean);
            /**
             * Keep the current centered position when resizing the view.
             */
            get keepCenterOnResize(): boolean;
            set keepCenterOnResize(val: boolean);
            /**
             * Determines whether the view should use kinetic mode.
             */
            get kinetic_mode(): boolean;
            set kinetic_mode(val: boolean);
            /**
             * Determines whether the view should use kinetic mode.
             */
            get kineticMode(): boolean;
            set kineticMode(val: boolean);
            /**
             * The latitude coordonate of the map
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate of the map
             */
            get longitude(): number;
            set longitude(val: number);
            /**
             * The #ChamplainMapSource being displayed
             */
            get map_source(): MapSource;
            set map_source(val: MapSource);
            /**
             * The #ChamplainMapSource being displayed
             */
            get mapSource(): MapSource;
            set mapSource(val: MapSource);
            /**
             * The highest allowed level of zoom of the content.
             */
            get max_zoom_level(): number;
            set max_zoom_level(val: number);
            /**
             * The highest allowed level of zoom of the content.
             */
            get maxZoomLevel(): number;
            set maxZoomLevel(val: number);
            /**
             * The lowest allowed level of zoom of the content.
             */
            get min_zoom_level(): number;
            set min_zoom_level(val: number);
            /**
             * The lowest allowed level of zoom of the content.
             */
            get minZoomLevel(): number;
            set minZoomLevel(val: number);
            /**
             * The view's global state. Useful to inform using if the view is busy loading
             * tiles or not.
             */
            get state(): State;
            /**
             * Set a bounding box to limit the world to. No tiles will be loaded
             * outside of this bounding box. It will not be possible to scroll outside
             * of this bounding box.
             *
             * Default world is the actual world.
             */
            get world(): BoundingBox;
            set world(val: BoundingBox);
            /**
             * The level of zoom of the content.
             */
            get zoom_level(): number;
            set zoom_level(val: number);
            /**
             * The level of zoom of the content.
             */
            get zoomLevel(): number;
            set zoomLevel(val: number);
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             */
            get zoom_on_double_click(): boolean;
            set zoom_on_double_click(val: boolean);
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             */
            get zoomOnDoubleClick(): boolean;
            set zoomOnDoubleClick(val: boolean);

            // Constructors

            constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): View;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'animation-completed', callback: (_source: this) => void): number;
            connect_after(signal: 'animation-completed', callback: (_source: this) => void): number;
            emit(signal: 'animation-completed'): void;
            connect(signal: 'layer-relocated', callback: (_source: this) => void): number;
            connect_after(signal: 'layer-relocated', callback: (_source: this) => void): number;
            emit(signal: 'layer-relocated'): void;

            // Methods

            /**
             * Adds a new layer to the view
             * @param layer a #ChamplainLayer
             */
            add_layer(layer: Layer): void;
            /**
             * Adds a new overlay map source to render tiles with the supplied opacity on top
             * of the ordinary map source. Multiple overlay sources can be added.
             * @param map_source a #ChamplainMapSource
             * @param opacity opacity to use
             */
            add_overlay_source(map_source: MapSource, opacity: number): void;
            /**
             * This function inserts a custom actor to the undrelying #ClutterBinLayout
             * manager. The inserted actors appear on top of the map. See clutter_bin_layout_add()
             * for reference.
             * @param child The child to be inserted
             * @param x_align x alignment
             * @param y_align y alignment
             */
            bin_layout_add(
                child: Clutter.Actor,
                x_align: Clutter.BinAlignment | null,
                y_align: Clutter.BinAlignment | null,
            ): void;
            /**
             * Centers the map on these coordinates.
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             */
            center_on(latitude: number, longitude: number): void;
            /**
             * Changes the map's zoom level and center to make sure that the bounding
             * boxes of all inserted layers are visible.
             * @param animate TRUE to perform animation, FALSE otherwise
             */
            ensure_layers_visible(animate: boolean): void;
            /**
             * Changes the map's zoom level and center to make sure the given area
             * is visible
             * @param bbox bounding box of the area that should be visible
             * @param animate TRUE to perform animation, FALSE otherwise
             */
            ensure_visible(bbox: BoundingBox, animate: boolean): void;
            /**
             * Checks whether the view animates zoom level changes.
             * @returns TRUE if the view animates zooms, FALSE otherwise.
             */
            get_animate_zoom(): boolean;
            /**
             * Gets the current background texture displayed behind the map.
             * @returns The texture.
             */
            get_background_pattern(): Clutter.Content;
            /**
             * Gets the bounding box for view `view` at current zoom-level.
             * @returns the bounding box
             */
            get_bounding_box(): BoundingBox;
            /**
             * Gets the bounding box for view `view` at `zoom_level`.
             * @param zoom_level the level of zoom, a guint between 1 and 20
             * @returns the bounding box for the view at @zoom_level.
             */
            get_bounding_box_for_zoom_level(zoom_level: number): BoundingBox;
            /**
             * Gets the latitude of the view's center.
             * @returns the latitude.
             */
            get_center_latitude(): number;
            /**
             * Gets the longitude of the view's center.
             * @returns the longitude.
             */
            get_center_longitude(): number;
            /**
             * Gets the view's deceleration rate.
             * @returns the view's deceleration rate.
             */
            get_deceleration(): number;
            /**
             * Returns the value of the #ChamplainView:horizontal-wrap property.
             * @returns %TRUE if #ChamplainView:horizontal-wrap is set.
             */
            get_horizontal_wrap(): boolean;
            /**
             * Checks whether to keep the center on resize
             * @returns TRUE if the view keeps the center on resize, FALSE otherwise.
             */
            get_keep_center_on_resize(): boolean;
            /**
             * Gets the view's scroll mode behaviour.
             * @returns TRUE for kinetic mode, FALSE for push mode.
             */
            get_kinetic_mode(): boolean;
            /**
             * Returns the #ChamplainLicense actor which is inserted by default into the
             * layout manager. It can be manipulated using standard #ClutterActor methods
             * (hidden and so on).
             * @returns the license actor
             */
            get_license_actor(): License;
            /**
             * Gets the view's current map source.
             * @returns the view's current map source. If you need to keep a reference to the map source then you have to call #g_object_ref().
             */
            get_map_source(): MapSource;
            /**
             * Gets the view's maximum allowed zoom level.
             * @returns the view's maximum allowed zoom level.
             */
            get_max_zoom_level(): number;
            /**
             * Gets the view's minimal allowed zoom level.
             * @returns the view's minimal allowed zoom level.
             */
            get_min_zoom_level(): number;
            /**
             * Gets a list of overlay sources.
             * @returns the list
             */
            get_overlay_sources(): MapSource[];
            /**
             * Gets the view's state.
             * @returns the state.
             */
            get_state(): State;
            /**
             * Gets the x and y coordinate of the viewport anchor in respect to the layer origin.
             */
            get_viewport_anchor(): [number, number];
            /**
             * Gets the x and y coordinate of the viewport in respect to the layer origin.
             */
            get_viewport_origin(): [number, number];
            /**
             * Get the bounding box that represents the extent of the world.
             * @returns a #ChamplainBoundingBox that represents the current world
             */
            get_world(): BoundingBox;
            /**
             * Gets the view's current zoom level.
             * @returns the view's current zoom level.
             */
            get_zoom_level(): number;
            /**
             * Checks whether the view zooms on double click.
             * @returns TRUE if the view zooms on double click, FALSE otherwise.
             */
            get_zoom_on_double_click(): boolean;
            /**
             * Move from the current position to these coordinates. All tiles in the
             * intermediate view WILL be loaded!
             * @param latitude the longitude to center the map at
             * @param longitude the longitude to center the map at
             */
            go_to(latitude: number, longitude: number): void;
            /**
             * Converts the latitude to view's y coordinate.
             * @param latitude the latitude
             * @returns the y coordinate
             */
            latitude_to_y(latitude: number): number;
            /**
             * Converts the longitude to view's x coordinate.
             * @param longitude the longitude
             * @returns the x coordinate
             */
            longitude_to_x(longitude: number): number;
            /**
             * Reloads all visible tiles.
             */
            reload_tiles(): void;
            /**
             * Removes the given layer from the view
             * @param layer a #ChamplainLayer
             */
            remove_layer(layer: Layer): void;
            /**
             * Removes an overlay source from #ChamplainView.
             * @param map_source a #ChamplainMapSource
             */
            remove_overlay_source(map_source: MapSource): void;
            /**
             * Should the view animate zoom level changes.
             * @param value a #gboolean
             */
            set_animate_zoom(value: boolean): void;
            /**
             * Sets the background texture displayed behind the map. Setting the background
             * pattern affects performence slightly - use reasonably large patterns for
             * better performance.
             * @param background The background texture
             */
            set_background_pattern(background: Clutter.Content): void;
            /**
             * The deceleration rate for the kinetic mode.
             * @param rate a #gdouble between 1.001 and 2.0
             */
            set_deceleration(rate: number): void;
            /**
             * Sets the value of the #ChamplainView:horizontal-wrap property.
             * @param wrap %TRUE to enable horizontal wrapping
             */
            set_horizontal_wrap(wrap: boolean): void;
            /**
             * Keep the current centered position when resizing the view.
             * @param value a #gboolean
             */
            set_keep_center_on_resize(value: boolean): void;
            /**
             * Determines the way the view reacts to scroll events.
             * @param kinetic TRUE for kinetic mode, FALSE for push mode
             */
            set_kinetic_mode(kinetic: boolean): void;
            /**
             * Changes the currently used map source. #g_object_unref() will be called on
             * the previous one.
             *
             * As a side effect, changing the primary map source will also clear all
             * secondary map sources.
             * @param map_source a #ChamplainMapSource
             */
            set_map_source(map_source: MapSource): void;
            /**
             * Changes the highest allowed level of zoom
             * @param zoom_level the level of zoom
             */
            set_max_zoom_level(zoom_level: number): void;
            /**
             * Changes the lowest allowed level of zoom
             * @param zoom_level the level of zoom
             */
            set_min_zoom_level(zoom_level: number): void;
            /**
             * Set a bounding box to limit the world to. No tiles will be loaded
             * outside of this bounding box. It will not be possible to scroll outside
             * of this bounding box.
             * @param bbox the #ChamplainBoundingBox of the world
             */
            set_world(bbox: BoundingBox): void;
            /**
             * Changes the current level of zoom
             * @param zoom_level the level of zoom, a guint between 1 and 20
             */
            set_zoom_level(zoom_level: number): void;
            /**
             * Should the view zoom in and recenter when the user double click on the map.
             * @param value a #gboolean
             */
            set_zoom_on_double_click(value: boolean): void;
            /**
             * Stop the go to animation.  The view will stay where it was when the
             * animation was stopped.
             */
            stop_go_to(): void;
            /**
             * Will generate a #cairo_surface_t that represents the current view
             * of the map. Without any markers or layers. If the current #ChamplainRenderer
             * used does not support this, this function will return %NULL.
             *
             * If `include_layers` is set to %TRUE all layers that implement
             * #ChamplainExportable will be included in the surface.
             *
             * The #ChamplainView also need to be in #CHAMPLAIN_STATE_DONE state.
             * @param include_layers Set to %TRUE if you want to include layers
             * @returns a #cairo_surface_t or %NULL on failure. Free with          cairo_surface_destroy() when done.
             */
            to_surface(include_layers: boolean): cairo.Surface;
            /**
             * Converts the view's x coordinate to longitude.
             * @param x x coordinate of the view
             * @returns the longitude
             */
            x_to_longitude(x: number): number;
            /**
             * Converts the view's y coordinate to latitude.
             * @param y y coordinate of the view
             * @returns the latitude
             */
            y_to_latitude(y: number): number;
            /**
             * Zoom in the map by one level.
             */
            zoom_in(): void;
            /**
             * Zoom out the map by one level.
             */
            zoom_out(): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        module Viewport {
            // Signal callback interfaces

            interface Relocated {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                hadjustment: Adjustment;
                vadjustment: Adjustment;
                x_origin: number;
                xOrigin: number;
                y_origin: number;
                yOrigin: number;
            }
        }

        class Viewport
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Viewport>;

            // Properties

            get hadjustment(): Adjustment;
            set hadjustment(val: Adjustment);
            get vadjustment(): Adjustment;
            set vadjustment(val: Adjustment);
            get x_origin(): number;
            set x_origin(val: number);
            get xOrigin(): number;
            set xOrigin(val: number);
            get y_origin(): number;
            set y_origin(val: number);
            get yOrigin(): number;
            set yOrigin(val: number);

            // Constructors

            constructor(properties?: Partial<Viewport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Viewport;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'relocated', callback: (_source: this) => void): number;
            connect_after(signal: 'relocated', callback: (_source: this) => void): number;
            emit(signal: 'relocated'): void;

            // Methods

            get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
            get_anchor(x: number, y: number): void;
            get_origin(x: number, y: number): void;
            set_actor_position(actor: Clutter.Actor, x: number, y: number): void;
            set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
            set_child(child: Clutter.Actor): void;
            set_origin(x: number, y: number): void;
            stop(): void;

            // Inherited methods
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             * @returns %TRUE if the value has been validated and can   be applied to the #ClutterAnimatable, and %FALSE otherwise
             */
            animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             * @returns The #GParamSpec for the given property   or %NULL
             */
            find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
             */
            interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Calls the animate_property() virtual function for `animatable`.
             *
             * The `initial_value` and `final_value` #GValue<!-- -->s must contain
             * the same type; `value` must have been initialized to the same
             * type of `initial_value` and `final_value`.
             *
             * All implementation of the #ClutterAnimatable interface must
             * implement this function.
             * @param animation a #ClutterAnimation
             * @param property_name the name of the animated property
             * @param initial_value the initial value of the animation interval
             * @param final_value the final value of the animation interval
             * @param progress the progress factor
             * @param value return location for the animation value
             */
            vfunc_animate_property(
                animation: Clutter.Animation,
                property_name: string,
                initial_value: GObject.Value | any,
                final_value: GObject.Value | any,
                progress: number,
                value: GObject.Value | any,
            ): boolean;
            /**
             * Finds the #GParamSpec for `property_name`
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving #ClutterAnimatable<!-- -->s.
             *
             * This function replaces clutter_animatable_animate_property().
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the   initial and final values of the @interval
             */
            vfunc_interpolate_value(
                property_name: string,
                interval: Clutter.Interval,
                progress: number,
            ): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            add_actor(actor: Clutter.Actor): void;
            /**
             * Gets a container specific property of a child of `container,` In general,
             * a copy is made of the property contents and the caller is responsible for
             * freeing the memory by calling g_value_unset().
             *
             * Note that clutter_container_child_set_property() is really intended for
             * language bindings, clutter_container_child_set() is much more convenient
             * for C programming.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Sets a container-specific property on a child of `container`.
             * @param child a #ClutterActor that is a child of @container.
             * @param property the name of the property to set.
             * @param value the value.
             */
            child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Finds a child actor of a container by its name. Search recurses
             * into any child container.
             * @param child_name the name of the requested child.
             * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
             */
            find_child_by_name(child_name: string): Clutter.Actor;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
             */
            get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Retrieves all the children of `container`.
             * @returns a list   of #ClutterActor<!-- -->s. Use g_list_free() on the returned   list when done.
             */
            get_children(): Clutter.Actor[];
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            lower_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            raise_child(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            remove_actor(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            sort_depth_order(): void;
            /**
             * class handler for #ClutterContainer::actor-added
             * @param actor
             */
            vfunc_actor_added(actor: Clutter.Actor): void;
            /**
             * class handler for #ClutterContainer::actor-removed
             * @param actor
             */
            vfunc_actor_removed(actor: Clutter.Actor): void;
            /**
             * Adds a #ClutterActor to `container`. This function will emit the
             * "actor-added" signal. The actor should be parented to
             * `container`. You cannot add a #ClutterActor to more than one
             * #ClutterContainer.
             *
             * This function will call #ClutterContainerIface.add(), which is a
             * deprecated virtual function. The default implementation will
             * call clutter_actor_add_child().
             * @param actor the first #ClutterActor to add
             */
            vfunc_add(actor: Clutter.Actor): void;
            /**
             * Calls the #ClutterContainerIface.child_notify() virtual function
             * of #ClutterContainer. The default implementation will emit the
             * #ClutterContainer::child-notify signal.
             * @param child a #ClutterActor
             * @param pspec a #GParamSpec
             */
            vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
            /**
             * Creates the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if the #ClutterContainerIface::child_meta_type
             * class member is not set to %G_TYPE_INVALID.
             *
             * This function is only useful when adding a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_create_child_meta(actor: Clutter.Actor): void;
            /**
             * Destroys the #ClutterChildMeta wrapping `actor` inside the
             * `container,` if any.
             *
             * This function is only useful when removing a #ClutterActor to
             * a #ClutterContainer implementation outside of the
             * #ClutterContainer::add() virtual function implementation.
             *
             * Applications should not call this function.
             * @param actor a #ClutterActor
             */
            vfunc_destroy_child_meta(actor: Clutter.Actor): void;
            /**
             * Calls `callback` for each child of `container` that was added
             * by the application (with clutter_container_add_actor()). Does
             * not iterate over "internal" children that are part of the
             * container's own implementation, if any.
             *
             * This function calls the #ClutterContainerIface.foreach()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach(callback: Clutter.Callback): void;
            /**
             * Calls `callback` for each child of `container,` including "internal"
             * children built in to the container itself that were never added
             * by the application.
             *
             * This function calls the #ClutterContainerIface.foreach_with_internals()
             * virtual function, which has been deprecated.
             * @param callback a function to be called for each child
             */
            vfunc_foreach_with_internals(callback: Clutter.Callback): void;
            /**
             * Retrieves the #ClutterChildMeta which contains the data about the
             * `container` specific state for `actor`.
             * @param actor a #ClutterActor that is a child of @container.
             */
            vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
            /**
             * Lowers `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.lower() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_below_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
             */
            vfunc_lower(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Raises `actor` to `sibling` level, in the depth ordering.
             *
             * This function calls the #ClutterContainerIface.raise() virtual function,
             * which has been deprecated. The default implementation will call
             * clutter_actor_set_child_above_sibling().
             * @param actor the actor to raise
             * @param sibling the sibling to raise to, or %NULL to raise   to the top
             */
            vfunc_raise(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void;
            /**
             * Removes `actor` from `container`. The actor should be unparented, so
             * if you want to keep it around you must hold a reference to it
             * yourself, using g_object_ref(). When the actor has been removed,
             * the "actor-removed" signal is emitted by `container`.
             *
             * This function will call #ClutterContainerIface.remove(), which is a
             * deprecated virtual function. The default implementation will call
             * clutter_actor_remove_child().
             * @param actor a #ClutterActor
             */
            vfunc_remove(actor: Clutter.Actor): void;
            /**
             * Sorts a container's children using their depth. This function should not
             * be normally used by applications.
             */
            vfunc_sort_depth_order(): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
             */
            get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
             */
            parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            set_id(id_: string): void;
            /**
             * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
             */
            vfunc_get_id(): string;
            /**
             * Parses the passed JSON node. The implementation must set the type
             * of the passed #GValue pointer using g_value_init().
             * @param script the #ClutterScript creating the scriptable instance
             * @param value the generic value to be set
             * @param name the name of the node
             * @param node the JSON node to be parsed
             */
            vfunc_parse_custom_node(
                script: Clutter.Script,
                value: GObject.Value | any,
                name: string,
                node: Json.Node,
            ): boolean;
            /**
             * Overrides the common properties setting. The underlying virtual
             * function should be used when implementing custom properties.
             * @param script the #ClutterScript creating the scriptable instance
             * @param name the name of the property
             * @param value the value of the property
             */
            vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
            /**
             * Sets `id_` as the unique Clutter script it for this instance of
             * #ClutterScriptableIface.
             *
             * This name can be used by user interface designer applications to
             * define a unique name for an object constructable using the UI
             * definition language parsed by #ClutterScript.
             * @param id_ the #ClutterScript id of the object
             */
            vfunc_set_id(id_: string): void;
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

        type AdjustmentClass = typeof Adjustment;
        abstract class AdjustmentPrivate {
            static $gtype: GObject.GType<AdjustmentPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Defines the area of a ChamplainMapDataSource that contains data.
         */
        class BoundingBox {
            static $gtype: GObject.GType<BoundingBox>;

            // Fields

            left: number;
            top: number;
            right: number;
            bottom: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    left: number;
                    top: number;
                    right: number;
                    bottom: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): BoundingBox;

            // Methods

            /**
             * Sets bbox equal to the bounding box containing both `bbox` and `other`.
             * @param other a #ChamplainBoundingBox
             */
            compose(other: BoundingBox): void;
            /**
             * Makes a copy of the bounding box structure. The result must be
             * freed using champlain_bounding_box_free().
             * @returns an allocated copy of @bbox.
             */
            copy(): BoundingBox;
            /**
             * Checks whether `bbox` covers the given coordinates.
             * @param latitude the latitude of the point
             * @param longitude the longitude of the point
             * @returns TRUE when the bounding box covers given coordinates, FALSE otherwise.
             */
            covers(latitude: number, longitude: number): boolean;
            /**
             * Extend the bounding box so it contains a point with `latitude` and `longitude`.
             * Do nothing if the point is already inside the bounding box.
             * @param latitude the latitude of the point
             * @param longitude the longitude of the point
             */
            extend(latitude: number, longitude: number): void;
            /**
             * Frees a bounding box structure created with champlain_bounding_box_new() or
             * champlain_bounding_box_copy().
             */
            free(): void;
            /**
             * Gets the center's latitude and longitude of the box to `latitude` and `longitude`.
             */
            get_center(): [number, number];
            /**
             * Checks whether `bbox` represents a valid bounding box on the map.
             * @returns TRUE when the bounding box is valid, FALSE otherwise.
             */
            is_valid(): boolean;
        }

        type CoordinateClass = typeof Coordinate;
        abstract class CoordinatePrivate {
            static $gtype: GObject.GType<CoordinatePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CustomMarkerClass = typeof CustomMarker;
        abstract class CustomMarkerPrivate {
            static $gtype: GObject.GType<CustomMarkerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ErrorTileRendererClass = typeof ErrorTileRenderer;
        abstract class ErrorTileRendererPrivate {
            static $gtype: GObject.GType<ErrorTileRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ExportableIface = typeof Exportable;
        type FileCacheClass = typeof FileCache;
        abstract class FileCachePrivate {
            static $gtype: GObject.GType<FileCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileTileSourceClass = typeof FileTileSource;
        abstract class FileTileSourcePrivate {
            static $gtype: GObject.GType<FileTileSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImageRendererClass = typeof ImageRenderer;
        abstract class ImageRendererPrivate {
            static $gtype: GObject.GType<ImageRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type KineticScrollViewClass = typeof KineticScrollView;
        abstract class KineticScrollViewPrivate {
            static $gtype: GObject.GType<KineticScrollViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LabelClass = typeof Label;
        abstract class LabelPrivate {
            static $gtype: GObject.GType<LabelPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LayerClass = typeof Layer;
        type LicenseClass = typeof License;
        abstract class LicensePrivate {
            static $gtype: GObject.GType<LicensePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LocationIface = typeof Location;
        type MapSourceChainClass = typeof MapSourceChain;
        abstract class MapSourceChainPrivate {
            static $gtype: GObject.GType<MapSourceChainPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MapSourceClass = typeof MapSource;
        type MapSourceDescClass = typeof MapSourceDesc;
        abstract class MapSourceDescPrivate {
            static $gtype: GObject.GType<MapSourceDescPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MapSourceFactoryClass = typeof MapSourceFactory;
        abstract class MapSourceFactoryPrivate {
            static $gtype: GObject.GType<MapSourceFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MapSourcePrivate {
            static $gtype: GObject.GType<MapSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MarkerClass = typeof Marker;
        type MarkerLayerClass = typeof MarkerLayer;
        abstract class MarkerLayerPrivate {
            static $gtype: GObject.GType<MarkerLayerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MarkerPrivate {
            static $gtype: GObject.GType<MarkerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MemoryCacheClass = typeof MemoryCache;
        abstract class MemoryCachePrivate {
            static $gtype: GObject.GType<MemoryCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type NetworkBboxTileSourceClass = typeof NetworkBboxTileSource;
        abstract class NetworkBboxTileSourcePrivate {
            static $gtype: GObject.GType<NetworkBboxTileSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type NetworkTileSourceClass = typeof NetworkTileSource;
        abstract class NetworkTileSourcePrivate {
            static $gtype: GObject.GType<NetworkTileSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type NullTileSourceClass = typeof NullTileSource;
        abstract class NullTileSourcePrivate {
            static $gtype: GObject.GType<NullTileSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PathLayerClass = typeof PathLayer;
        abstract class PathLayerPrivate {
            static $gtype: GObject.GType<PathLayerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PointClass = typeof Point;
        abstract class PointPrivate {
            static $gtype: GObject.GType<PointPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RendererClass = typeof Renderer;
        type ScaleClass = typeof Scale;
        abstract class ScalePrivate {
            static $gtype: GObject.GType<ScalePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileCacheClass = typeof TileCache;
        abstract class TileCachePrivate {
            static $gtype: GObject.GType<TileCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileClass = typeof Tile;
        abstract class TilePrivate {
            static $gtype: GObject.GType<TilePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TileSourceClass = typeof TileSource;
        abstract class TileSourcePrivate {
            static $gtype: GObject.GType<TileSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ViewClass = typeof View;
        abstract class ViewPrivate {
            static $gtype: GObject.GType<ViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ViewportClass = typeof Viewport;
        abstract class ViewportPrivate {
            static $gtype: GObject.GType<ViewportPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Exportable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                surface: cairo.Surface;
            }
        }

        export interface ExportableNamespace {
            $gtype: GObject.GType<Exportable>;
            prototype: Exportable;
        }
        interface Exportable extends GObject.Object {
            // Properties

            /**
             * A #cairo_surface_t representation
             */
            get surface(): cairo.Surface;
            set surface(val: cairo.Surface);

            // Methods

            /**
             * Gets the surface
             * @returns the #cairo_surface_t of the object
             */
            get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            set_surface(surface: cairo.Surface): void;

            // Virtual methods

            /**
             * Gets the surface
             */
            vfunc_get_surface(): cairo.Surface;
            /**
             * Set a #cairo_surface_t to be associated with this tile.
             * @param surface the #cairo_surface_t
             */
            vfunc_set_surface(surface: cairo.Surface): void;
        }

        export const Exportable: ExportableNamespace & {
            new (): Exportable; // This allows `obj instanceof Exportable`
        };

        module Location {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                latitude: number;
                longitude: number;
            }
        }

        export interface LocationNamespace {
            $gtype: GObject.GType<Location>;
            prototype: Location;
        }
        interface Location extends GObject.Object {
            // Properties

            /**
             * The latitude coordonate
             */
            get latitude(): number;
            set latitude(val: number);
            /**
             * The longitude coordonate
             */
            get longitude(): number;
            set longitude(val: number);

            // Methods

            /**
             * Gets the latitude coordinate.
             * @returns the latitude coordinate.
             */
            get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             * @returns the longitude coordinate.
             */
            get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            set_location(latitude: number, longitude: number): void;

            // Virtual methods

            /**
             * Gets the latitude coordinate.
             */
            vfunc_get_latitude(): number;
            /**
             * Gets the longitude coordinate.
             */
            vfunc_get_longitude(): number;
            /**
             * Sets the coordinates of the location
             * @param latitude the latitude
             * @param longitude the longitude
             */
            vfunc_set_location(latitude: number, longitude: number): void;
        }

        export const Location: LocationNamespace & {
            new (): Location; // This allows `obj instanceof Location`
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

    export default Champlain;
}

declare module 'gi://Champlain' {
    import Champlain012 from 'gi://Champlain?version=0.12';
    export default Champlain012;
}
// END
