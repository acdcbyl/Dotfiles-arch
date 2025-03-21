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
/// <reference path="./clutter-1.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./gl-1.0.d.ts" />
/// <reference path="./coglpango-1.0.d.ts" />
/// <reference path="./pangocairo-1.0.d.ts" />
/// <reference path="./cogl-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GtkClutter?version=1.0' {
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
    import type Clutter from 'gi://Clutter?version=1.0';
    import type Json from 'gi://Json?version=1.0';
    import type GL from 'gi://GL?version=1.0';
    import type CoglPango from 'gi://CoglPango?version=1.0';
    import type PangoCairo from 'gi://PangoCairo?version=1.0';
    import type Cogl from 'gi://Cogl?version=1.0';

    export namespace GtkClutter {
        /**
         * GtkClutter-1.0
         */

        /**
         * Error enumeration for #GtkClutterTexture
         */

        /**
         * Error enumeration for #GtkClutterTexture
         */
        export namespace TextureError {
            export const $gtype: GObject.GType<TextureError>;
        }

        enum TextureError {
            /**
             * Invalid stock id
             */
            TEXTURE_ERROR_INVALID_STOCK_ID,
        }
        /**
         * This function should be called instead of clutter_init() and
         * gtk_init().
         * @param argv pointer to the   arguments vector, or %NULL
         * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
         */
        function init(argv?: string[] | null): [Clutter.InitError, string[] | null];
        /**
         * This function should be called instead of clutter_init() and
         * gtk_init_with_args().
         * @param argv a pointer to the array   of command line arguments, or %NULL
         * @param parameter_string a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
         * @param entries a    %NULL-terminated array of #GOptionEntry<!-- -->s describing the    options of your program
         * @param translation_domain a translation domain to use for    translating the <option>--help</option> output for the options    in @entries with gettext(), or %NULL
         * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
         */
        function init_with_args(
            argv?: string[] | null,
            parameter_string?: string | null,
            entries?: GLib.OptionEntry[] | null,
            translation_domain?: string | null,
        ): [Clutter.InitError, string[] | null];
        module Actor {
            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Actor.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {
                contents: Gtk.Widget;
            }
        }

        /**
         * A ClutterActor containing a #GtkWidget.
         */
        class Actor
            extends Clutter.Actor
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Actor>;

            // Properties

            /**
             * The #GtkWidget to be embedded into the #GtkClutterActor
             */
            get contents(): Gtk.Widget;
            set contents(val: Gtk.Widget);

            // Constructors

            constructor(properties?: Partial<Actor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Actor;

            static new_with_contents(contents: Gtk.Widget): Actor;

            // Methods

            /**
             * Retrieves the child of the #GtkBin used to hold the contents of `actor`.
             *
             * This convenience function is the logical equivalent of:
             *
             *
             * ```
             * GtkWidget *bin;
             *
             * bin = gtk_clutter_actor_get_widget (GTK_CLUTTER_ACTOR (actor));
             * return gtk_bin_get_child (GTK_BIN (bin));
             * ```
             *
             * @returns a #GtkWidget, or %NULL if not content   has been set
             */
            get_contents(): Gtk.Widget;
            /**
             * Retrieves the #GtkBin used to hold the #GtkClutterActor:contents widget
             * @returns a #GtkBin
             */
            get_widget(): Gtk.Widget;

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

        module Embed {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Container.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                use_layout_size: boolean;
                useLayoutSize: boolean;
            }
        }

        /**
         * A #GtkWidget containing the default Clutter stage.
         *
         * The <structname>GtkClutterEmbed</structname> structure contains only
         * private data and should be accessed using the provided API.
         */
        class Embed extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<Embed>;

            // Properties

            /**
             * The #GtkWidget to be embedded into the #GtkClutterActor
             */
            get use_layout_size(): boolean;
            set use_layout_size(val: boolean);
            /**
             * The #GtkWidget to be embedded into the #GtkClutterActor
             */
            get useLayoutSize(): boolean;
            set useLayoutSize(val: boolean);

            // Constructors

            constructor(properties?: Partial<Embed.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Embed;

            // Methods

            /**
             * Retrieves the #ClutterStage from `embed`. The returned stage can be
             * used to add actors to the Clutter scene.
             * @returns the Clutter stage. You should never   destroy or unref the returned actor.
             */
            get_stage(): Clutter.Actor;
            /**
             * Retrieves whether the embedding uses the layout size, see
             * gtk_clutter_embed_set_use_layout_size() for details.
             * @returns %TRUE if reporting stage size as widget size, %FALSE otherwise.
             */
            get_use_layout_size(): boolean;
            /**
             * Changes the way `embed` requests size. If `use_layout_size` is
             * %TRUE, the `embed` widget will request the size that the
             * LayoutManager reports as the preferred size. This means that
             * a Gtk+ window will automatically get the natural and minimum
             * toplevel window sizes. This is useful when the contents of the
             * clutter stage is similar to a traditional UI.
             *
             * If `use_layout_size` is %FALSE (which is the default) then `embed`
             * will not request any size and its up to the embedder to make sure
             * there is some size (by setting a custom size on the widget or a default
             * size on the toplevel. This makes more sense when using the `embed`
             * as a viewport into a potentially unlimited clutter space.
             * @param use_layout_size a boolean
             */
            set_use_layout_size(use_layout_size: boolean): void;

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

        module Texture {
            // Constructor properties interface

            interface ConstructorProps
                extends Clutter.Texture.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Clutter.Animatable.ConstructorProps,
                    Clutter.Container.ConstructorProps,
                    Clutter.Scriptable.ConstructorProps {}
        }

        /**
         * The <structname>GtkClutterTexture</structname> structure contains
         * only private data and should be accessed using the provided API.
         */
        class Texture
            extends Clutter.Texture
            implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
        {
            static $gtype: GObject.GType<Texture>;

            // Constructors

            constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Texture;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Sets the contents of `texture` using the `icon_name` from the
             * current icon theme.
             * @param widget a #GtkWidget or %NULL
             * @param icon_name the name of the icon
             * @param icon_size the icon size or -1
             * @returns %TRUE on success, %FALSE on failure
             */
            set_from_icon_name(widget: Gtk.Widget | null, icon_name: string, icon_size: Gtk.IconSize | null): boolean;
            /**
             * Sets the contents of `texture` with a copy of `pixbuf`.
             * @param pixbuf a #GdkPixbuf
             * @returns %TRUE on success, %FALSE on failure.
             */
            set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
            /**
             * Sets the contents of `texture` using the stock icon `stock_id,` as
             * rendered by `widget`.
             * @param widget a #GtkWidget
             * @param stock_id the stock id of the icon
             * @param icon_size the size of the icon, or -1
             * @returns %TRUE on success, %FALSE on failure.
             */
            set_from_stock(widget: Gtk.Widget, stock_id: string, icon_size: Gtk.IconSize | null): boolean;

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

        module Window {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Window.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        /**
         * A #GtkWindow containing a #ClutterStage.
         *
         * The <structname>GtkClutterWindow</structname> structure contains only
         * private data and it should be accessed using the provided API.
         */
        class Window extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<Window>;

            // Constructors

            constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Window;

            // Methods

            /**
             * Retrieves the #ClutterStage that this window is embedding
             *
             * Use this function if you wish to add other actors to the #ClutterStage.
             * @returns the window's #ClutterStage
             */
            get_stage(): Clutter.Actor;

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

        type ActorClass = typeof Actor;
        abstract class ActorPrivate {
            static $gtype: GObject.GType<ActorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type EmbedClass = typeof Embed;
        abstract class EmbedPrivate {
            static $gtype: GObject.GType<EmbedPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TextureClass = typeof Texture;
        type WindowClass = typeof Window;
        abstract class WindowPrivate {
            static $gtype: GObject.GType<WindowPrivate>;

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

    export default GtkClutter;
}

declare module 'gi://GtkClutter' {
    import GtkClutter10 from 'gi://GtkClutter?version=1.0';
    export default GtkClutter10;
}
// END
