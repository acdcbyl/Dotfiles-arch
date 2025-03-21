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

declare module 'gi://Cally?version=1.0' {
    // Module dependencies
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

    export namespace Cally {
        /**
         * Cally-1.0
         */

        /**
         * Initializes the accessibility support.
         * @returns %TRUE if accessibility support has been correctly initialized.
         */
        function accessibility_init(): boolean;
        /**
         * Returns if the accessibility support using cally is enabled.
         * @returns %TRUE if accessibility support has been correctly initialized.
         */
        function get_cally_initialized(): boolean;
        interface ActionCallback {
            (cally_actor: Actor): void;
        }
        interface ActionFunc {
            (cally_actor: Actor): void;
        }
        module Actor {
            // Constructor properties interface

            interface ConstructorProps
                extends Atk.GObjectAccessible.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps {}
        }

        /**
         * The <structname>CallyActor</structname> structure contains only private
         * data and should be accessed using the provided API
         */
        class Actor extends Atk.GObjectAccessible implements Atk.Action, Atk.Component {
            static $gtype: GObject.GType<Actor>;

            // Constructors

            constructor(properties?: Partial<Actor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Actor;

            // Methods

            /**
             * Adds a new action to be accessed with the #AtkAction interface.
             * @param action_name the action name
             * @param action_description the action description
             * @param action_keybinding the action keybinding
             * @param callback the callback of the action
             * @returns added action id, or -1 if failure
             */
            add_action(
                action_name: string,
                action_description: string,
                action_keybinding: string,
                callback: ActionCallback,
            ): number;
            /**
             * Removes a action, using the `action_id` returned by cally_actor_add_action()
             * @param action_id the action id
             * @returns %TRUE if the operation was succesful, %FALSE otherwise
             */
            remove_action(action_id: number): boolean;
            /**
             * Removes an action, using the `action_name` used when the action was added
             * with cally_actor_add_action()
             * @param action_name the name of the action to remove
             * @returns %TRUE if the operation was succesful, %FALSE otherwise
             */
            remove_action_by_name(action_name: string): boolean;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
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

        module Clone {
            // Constructor properties interface

            interface ConstructorProps
                extends Actor.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps {}
        }

        /**
         * The <structname>CallyClone</structname> structure contains only private
         * data and should be accessed using the provided API
         */
        class Clone extends Actor implements Atk.Action, Atk.Component {
            static $gtype: GObject.GType<Clone>;

            // Constructors

            constructor(properties?: Partial<Clone.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Clone;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
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

        module Group {
            // Constructor properties interface

            interface ConstructorProps
                extends Actor.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps {}
        }

        /**
         * The <structname>CallyGroup</structname> structure contains only
         * private data and should be accessed using the provided API
         */
        class Group extends Actor implements Atk.Action, Atk.Component {
            static $gtype: GObject.GType<Group>;

            // Constructors

            constructor(properties?: Partial<Group.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Group;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
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

        module Rectangle {
            // Constructor properties interface

            interface ConstructorProps
                extends Actor.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps {}
        }

        /**
         * The <structname>CallyRectangle</structname> structure contains only private
         * data and should be accessed using the provided API
         */
        class Rectangle extends Actor implements Atk.Action, Atk.Component {
            static $gtype: GObject.GType<Rectangle>;

            // Constructors

            constructor(properties?: Partial<Rectangle.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Rectangle;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
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

        module Root {
            // Constructor properties interface

            interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps {}
        }

        /**
         * The <structname>CallyRoot</structname> structure contains only private
         * data and should be accessed using the provided API
         */
        class Root extends Atk.GObjectAccessible {
            static $gtype: GObject.GType<Root>;

            // Constructors

            constructor(properties?: Partial<Root.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Root;
        }

        module Stage {
            // Constructor properties interface

            interface ConstructorProps
                extends Group.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps,
                    Atk.Window.ConstructorProps {}
        }

        /**
         * The <structname>CallyStage</structname> structure contains only
         * private data and should be accessed using the provided API
         */
        class Stage extends Group implements Atk.Action, Atk.Component, Atk.Window {
            static $gtype: GObject.GType<Stage>;

            // Constructors

            constructor(properties?: Partial<Stage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Stage;

            // Inherited properties
            get accessible_component_layer(): number;
            get accessibleComponentLayer(): number;
            get accessible_component_mdi_zorder(): number;
            get accessibleComponentMdiZorder(): number;
            get accessible_description(): string;
            set accessible_description(val: string);
            get accessibleDescription(): string;
            set accessibleDescription(val: string);
            get accessible_help_text(): string;
            set accessible_help_text(val: string);
            get accessibleHelpText(): string;
            set accessibleHelpText(val: string);
            get accessible_hypertext_nlinks(): number;
            get accessibleHypertextNlinks(): number;
            get accessible_id(): string;
            set accessible_id(val: string);
            get accessibleId(): string;
            set accessibleId(val: string);
            get accessible_name(): string;
            set accessible_name(val: string);
            get accessibleName(): string;
            set accessibleName(val: string);
            get accessible_parent(): Atk.Object;
            set accessible_parent(val: Atk.Object);
            get accessibleParent(): Atk.Object;
            set accessibleParent(val: Atk.Object);
            get accessible_role(): Atk.Role;
            set accessible_role(val: Atk.Role);
            get accessibleRole(): Atk.Role;
            set accessibleRole(val: Atk.Role);
            /**
             * Table caption.
             */
            get accessible_table_caption(): string;
            set accessible_table_caption(val: string);
            /**
             * Table caption.
             */
            get accessibleTableCaption(): string;
            set accessibleTableCaption(val: string);
            get accessible_table_caption_object(): Atk.Object;
            set accessible_table_caption_object(val: Atk.Object);
            get accessibleTableCaptionObject(): Atk.Object;
            set accessibleTableCaptionObject(val: Atk.Object);
            /**
             * Accessible table column description.
             */
            get accessible_table_column_description(): string;
            set accessible_table_column_description(val: string);
            /**
             * Accessible table column description.
             */
            get accessibleTableColumnDescription(): string;
            set accessibleTableColumnDescription(val: string);
            /**
             * Accessible table column header.
             */
            get accessible_table_column_header(): Atk.Object;
            set accessible_table_column_header(val: Atk.Object);
            /**
             * Accessible table column header.
             */
            get accessibleTableColumnHeader(): Atk.Object;
            set accessibleTableColumnHeader(val: Atk.Object);
            /**
             * Accessible table row description.
             */
            get accessible_table_row_description(): string;
            set accessible_table_row_description(val: string);
            /**
             * Accessible table row description.
             */
            get accessibleTableRowDescription(): string;
            set accessibleTableRowDescription(val: string);
            /**
             * Accessible table row header.
             */
            get accessible_table_row_header(): Atk.Object;
            set accessible_table_row_header(val: Atk.Object);
            /**
             * Accessible table row header.
             */
            get accessibleTableRowHeader(): Atk.Object;
            set accessibleTableRowHeader(val: Atk.Object);
            get accessible_table_summary(): Atk.Object;
            set accessible_table_summary(val: Atk.Object);
            get accessibleTableSummary(): Atk.Object;
            set accessibleTableSummary(val: Atk.Object);
            /**
             * Numeric value of this object, in case being and AtkValue.
             */
            get accessible_value(): number;
            set accessible_value(val: number);
            /**
             * Numeric value of this object, in case being and AtkValue.
             */
            get accessibleValue(): number;
            set accessibleValue(val: number);

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
            /**
             * Adds a relationship of the specified type with the specified target.
             * @param relationship The #AtkRelationType of the relation
             * @param target The #AtkObject which is to be the target of the relation.
             * @returns TRUE if the relationship is added.
             */
            add_relationship(relationship: Atk.RelationType | null, target: Atk.Object): boolean;
            /**
             * Gets the accessible id of the accessible.
             * @returns a character string representing the accessible id of the object, or NULL if no such string was set.
             */
            get_accessible_id(): string;
            /**
             * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
             * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
             * as distinct from strongly-typed object data available via other get/set methods.
             * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
             * @returns an #AtkAttributeSet consisting of all explicit properties/annotations applied to the object, or an empty set if the object has no name-value pair attributes assigned to it. This #atkattributeset should be freed by a call to atk_attribute_set_free().
             */
            get_attributes(): Atk.AttributeSet;
            /**
             * Gets the accessible description of the accessible.
             * @returns a character string representing the accessible description of the accessible.
             */
            get_description(): string;
            // Conflicted with Atk.Action.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the help text associated with the accessible.
             * @returns a character string representing the help text or the object, or NULL if no such string was set.
             */
            get_help_text(): string;
            /**
             * Gets the 0-based index of this accessible in its parent; returns -1 if the
             * accessible does not have an accessible parent.
             * @returns an integer which is the index of the accessible in its parent
             */
            get_index_in_parent(): number;
            /**
             * Gets the layer of the accessible.
             * @returns an #AtkLayer which is the layer of the accessible
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the accessible. The value G_MININT will be returned
             * if the layer of the accessible is not ATK_LAYER_MDI.
             * @returns a gint which is the zorder of the accessible, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the number of accessible children of the accessible.
             * @returns an integer representing the number of accessible children of the accessible.
             */
            get_n_accessible_children(): number;
            /**
             * Gets the accessible name of the accessible.
             * @returns a character string representing the accessible name of the object.
             */
            get_name(): string;
            // Conflicted with Atk.Action.get_name
            get_name(...args: never[]): any;
            /**
             * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
             * of `accessible`.
             * @returns a UTF-8 string indicating the POSIX-style LC_MESSAGES          locale of @accessible.
             */
            get_object_locale(): string;
            /**
             * Gets the accessible parent of the accessible. By default this is
             * the one assigned with atk_object_set_parent(), but it is assumed
             * that ATK implementors have ways to get the parent of the object
             * without the need of assigning it manually with
             * atk_object_set_parent(), and will return it with this method.
             *
             * If you are only interested on the parent assigned with
             * atk_object_set_parent(), use atk_object_peek_parent().
             * @returns an #AtkObject representing the accessible parent of the accessible
             */
            get_parent(): Atk.Object;
            /**
             * Gets the role of the accessible.
             * @returns an #AtkRole which is the role of the accessible
             */
            get_role(): Atk.Role;
            /**
             * This function is called when implementing subclasses of #AtkObject.
             * It does initialization required for the new object. It is intended
             * that this function should called only in the ..._new() functions used
             * to create an instance of a subclass of #AtkObject
             * @param data a #gpointer which identifies the object for which the AtkObject was created.
             */
            initialize(data?: any | null): void;
            /**
             * Emits a state-change signal for the specified state.
             *
             * Note that as a general rule when the state of an existing object changes,
             * emitting a notification is expected.
             * @param state an #AtkState whose state is changed
             * @param value a gboolean which indicates whether the state is being set on or off
             */
            notify_state_change(state: Atk.State, value: boolean): void;
            /**
             * Gets the accessible parent of the accessible, if it has been
             * manually assigned with atk_object_set_parent. Otherwise, this
             * function returns %NULL.
             *
             * This method is intended as an utility for ATK implementors, and not
             * to be exposed to accessible tools. See atk_object_get_parent() for
             * further reference.
             * @returns an #AtkObject representing the accessible parent of the accessible if assigned
             */
            peek_parent(): Atk.Object;
            /**
             * Gets a reference to the specified accessible child of the object.
             * The accessible children are 0-based so the first accessible child is
             * at index 0, the second at index 1 and so on.
             * @param i a gint representing the position of the child, starting from 0
             * @returns an #AtkObject representing the specified accessible child of the accessible.
             */
            ref_accessible_child(i: number): Atk.Object;
            /**
             * Gets the #AtkRelationSet associated with the object.
             * @returns an #AtkRelationSet representing the relation set of the object.
             */
            ref_relation_set(): Atk.RelationSet;
            /**
             * Gets a reference to the state set of the accessible; the caller must
             * unreference it when it is no longer needed.
             * @returns a reference to an #AtkStateSet which is the state set of the accessible
             */
            ref_state_set(): Atk.StateSet;
            /**
             * Removes a property change handler.
             * @param handler_id a guint which identifies the handler to be removed.
             */
            remove_property_change_handler(handler_id: number): void;
            /**
             * Removes a relationship of the specified type with the specified target.
             * @param relationship The #AtkRelationType of the relation
             * @param target The #AtkObject which is the target of the relation to be removed.
             * @returns TRUE if the relationship is removed.
             */
            remove_relationship(relationship: Atk.RelationType | null, target: Atk.Object): boolean;
            /**
             * Sets the accessible ID of the accessible.  This is not meant to be presented
             * to the user, but to be an ID which is stable over application development.
             * Typically, this is the gtkbuilder ID. Such an ID will be available for
             * instance to identify a given well-known accessible object for tailored screen
             * reading, or for automatic regression testing.
             * @param id a character string to be set as the accessible id
             */
            set_accessible_id(id: string): void;
            /**
             * Sets the accessible description of the accessible. You can't set
             * the description to NULL. This is reserved for the initial value. In
             * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
             * the name to a empty value you can use "".
             * @param description a character string to be set as the accessible description
             */
            set_description(description: string): void;
            // Conflicted with Atk.Action.set_description
            set_description(...args: never[]): any;
            /**
             * Sets the help text associated with the accessible. This can be used to
             * expose context-sensitive information to help a user understand how to
             * interact with the object. You can't set the help text to NULL.
             * This is reserved for the initial value. If you want to set the name to
             * an empty value, you can use "".
             * @param help_text a character string to be set as the accessible's help text
             */
            set_help_text(help_text: string): void;
            /**
             * Sets the accessible name of the accessible. You can't set the name
             * to NULL. This is reserved for the initial value. In this aspect
             * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
             * a empty value you can use "".
             * @param name a character string to be set as the accessible name
             */
            set_name(name: string): void;
            /**
             * Sets the accessible parent of the accessible. `parent` can be NULL.
             * @param parent an #AtkObject to be set as the accessible parent
             */
            set_parent(parent: Atk.Object): void;
            /**
             * Sets the role of the accessible.
             * @param role an #AtkRole to be set as the role
             */
            set_role(role: Atk.Role | null): void;
            vfunc_active_descendant_changed(child?: any | null): void;
            vfunc_children_changed(change_index: number, changed_child?: any | null): void;
            /**
             * The signal handler which is executed when there is a
             *   focus event for an object. This virtual function is deprecated
             *   since 2.9.4 and it should not be overriden. Use
             *   the #AtkObject::state-change "focused" signal instead.
             * @param focus_in
             */
            vfunc_focus_event(focus_in: boolean): void;
            /**
             * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
             * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
             * as distinct from strongly-typed object data available via other get/set methods.
             * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
             */
            vfunc_get_attributes(): Atk.AttributeSet;
            /**
             * Gets the accessible description of the accessible.
             */
            vfunc_get_description(): string;
            // Conflicted with Atk.Action.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the 0-based index of this accessible in its parent; returns -1 if the
             * accessible does not have an accessible parent.
             */
            vfunc_get_index_in_parent(): number;
            /**
             * Gets the layer of the accessible.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the accessible. The value G_MININT will be returned
             * if the layer of the accessible is not ATK_LAYER_MDI.
             */
            vfunc_get_mdi_zorder(): number;
            vfunc_get_n_children(): number;
            /**
             * Gets the accessible name of the accessible.
             */
            vfunc_get_name(): string;
            // Conflicted with Atk.Action.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Gets a UTF-8 string indicating the POSIX-style LC_MESSAGES locale
             * of `accessible`.
             */
            vfunc_get_object_locale(): string;
            /**
             * Gets the accessible parent of the accessible. By default this is
             * the one assigned with atk_object_set_parent(), but it is assumed
             * that ATK implementors have ways to get the parent of the object
             * without the need of assigning it manually with
             * atk_object_set_parent(), and will return it with this method.
             *
             * If you are only interested on the parent assigned with
             * atk_object_set_parent(), use atk_object_peek_parent().
             */
            vfunc_get_parent(): Atk.Object;
            /**
             * Gets the role of the accessible.
             */
            vfunc_get_role(): Atk.Role;
            /**
             * This function is called when implementing subclasses of #AtkObject.
             * It does initialization required for the new object. It is intended
             * that this function should called only in the ..._new() functions used
             * to create an instance of a subclass of #AtkObject
             * @param data a #gpointer which identifies the object for which the AtkObject was created.
             */
            vfunc_initialize(data?: any | null): void;
            vfunc_property_change(values: Atk.PropertyValues): void;
            /**
             * Gets the #AtkRelationSet associated with the object.
             */
            vfunc_ref_relation_set(): Atk.RelationSet;
            /**
             * Gets a reference to the state set of the accessible; the caller must
             * unreference it when it is no longer needed.
             */
            vfunc_ref_state_set(): Atk.StateSet;
            /**
             * Removes a property change handler.
             * @param handler_id a guint which identifies the handler to be removed.
             */
            vfunc_remove_property_change_handler(handler_id: number): void;
            /**
             * Sets the accessible description of the accessible. You can't set
             * the description to NULL. This is reserved for the initial value. In
             * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
             * the name to a empty value you can use "".
             * @param description a character string to be set as the accessible description
             */
            vfunc_set_description(description: string): void;
            // Conflicted with Atk.Action.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Sets the accessible name of the accessible. You can't set the name
             * to NULL. This is reserved for the initial value. In this aspect
             * NULL is similar to ATK_ROLE_UNKNOWN. If you want to set the name to
             * a empty value you can use "".
             * @param name a character string to be set as the accessible name
             */
            vfunc_set_name(name: string): void;
            /**
             * Sets the accessible parent of the accessible. `parent` can be NULL.
             * @param parent an #AtkObject to be set as the accessible parent
             */
            vfunc_set_parent(parent: Atk.Object): void;
            /**
             * Sets the role of the accessible.
             * @param role an #AtkRole to be set as the role
             */
            vfunc_set_role(role: Atk.Role): void;
            vfunc_state_change(name: string, state_set: boolean): void;
            vfunc_visible_data_changed(): void;
        }

        module Text {
            // Constructor properties interface

            interface ConstructorProps
                extends Actor.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps,
                    Atk.EditableText.ConstructorProps,
                    Atk.Text.ConstructorProps {}
        }

        /**
         * The <structname>CallyText</structname> structure contains only private
         * data and should be accessed using the provided API
         */
        class Text extends Actor implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
            static $gtype: GObject.GType<Text>;

            // Constructors

            constructor(properties?: Partial<Text.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Text;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard.
             * @param start_pos start position
             * @param end_pos end position
             */
            copy_text(start_pos: number, end_pos: number): void;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard and then delete from the widget.
             * @param start_pos start position
             * @param end_pos end position
             */
            cut_text(start_pos: number, end_pos: number): void;
            /**
             * Delete text `start_pos` up to, but not including `end_pos`.
             * @param start_pos start position
             * @param end_pos end position
             */
            delete_text(start_pos: number, end_pos: number): void;
            /**
             * Insert text at a given position.
             * @param string the text to insert
             * @param length the length of text to insert, in bytes
             * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
             */
            insert_text(string: string, length: number, position: number): void;
            /**
             * Paste text from clipboard to specified `position`.
             * @param position position to paste
             */
            paste_text(position: number): void;
            /**
             * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
             * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
             * that can be set. Note that other attributes that do not have corresponding
             * ATK_ATTRIBUTE macros may also be set for certain text widgets.
             * @param attrib_set an #AtkAttributeSet
             * @param start_offset start of range in which to set attributes
             * @param end_offset end of range in which to set attributes
             * @returns %TRUE if attributes successfully set for the specified range, otherwise %FALSE
             */
            set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
            /**
             * Set text contents of `text`.
             * @param string string to set for text contents of @text
             */
            set_text_contents(string: string): void;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard.
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_copy_text(start_pos: number, end_pos: number): void;
            /**
             * Copy text from `start_pos` up to, but not including `end_pos`
             * to the clipboard and then delete from the widget.
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_cut_text(start_pos: number, end_pos: number): void;
            /**
             * Delete text `start_pos` up to, but not including `end_pos`.
             * @param start_pos start position
             * @param end_pos end position
             */
            vfunc_delete_text(start_pos: number, end_pos: number): void;
            /**
             * Insert text at a given position.
             * @param string the text to insert
             * @param length the length of text to insert, in bytes
             * @param position The caller initializes this to the position at which to insert the text. After the call it points at the position after the newly inserted text.
             */
            vfunc_insert_text(string: string, length: number, position: number): void;
            /**
             * Paste text from clipboard to specified `position`.
             * @param position position to paste
             */
            vfunc_paste_text(position: number): void;
            /**
             * Sets the attributes for a specified range. See the ATK_ATTRIBUTE
             * macros (such as #ATK_ATTRIBUTE_LEFT_MARGIN) for examples of attributes
             * that can be set. Note that other attributes that do not have corresponding
             * ATK_ATTRIBUTE macros may also be set for certain text widgets.
             * @param attrib_set an #AtkAttributeSet
             * @param start_offset start of range in which to set attributes
             * @param end_offset end of range in which to set attributes
             */
            vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
            /**
             * Set text contents of `text`.
             * @param string string to set for text contents of @text
             */
            vfunc_set_text_contents(string: string): void;
            /**
             * Adds a selection bounded by the specified offsets.
             * @param start_offset the starting character offset of the selected region
             * @param end_offset the offset of the first character after the selected region.
             * @returns %TRUE if successful, %FALSE otherwise
             */
            add_selection(start_offset: number, end_offset: number): boolean;
            /**
             * Get the ranges of text in the specified bounding box.
             * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             * @param x_clip_type Specify the horizontal clip type.
             * @param y_clip_type Specify the vertical clip type.
             * @returns Array of AtkTextRange. The last          element of the array returned by this function will be NULL.
             */
            get_bounded_ranges(
                rect: Atk.TextRectangle,
                coord_type: Atk.CoordType | null,
                x_clip_type: Atk.TextClipType | null,
                y_clip_type: Atk.TextClipType | null,
            ): Atk.TextRange[];
            /**
             * Gets the offset of the position of the caret (cursor).
             * @returns the character offset of the position of the caret or -1 if          the caret is not located inside the element or in the case of          any other failure.
             */
            get_caret_offset(): number;
            /**
             * Gets the specified text.
             * @param offset a character offset within @text
             * @returns the character at @offset or 0 in the case of failure.
             */
            get_character_at_offset(offset: number): number;
            /**
             * Gets the character count.
             * @returns the number of characters or -1 in case of failure.
             */
            get_character_count(): number;
            /**
             * If the extent can not be obtained (e.g. missing support), all of x, y, width,
             * height are set to -1.
             *
             * Get the bounding box containing the glyph representing the character at
             *     a particular text offset.
             * @param offset The offset of the text character for which bounding information is required.
             * @param coords specify whether coordinates are relative to the screen or widget window
             */
            get_character_extents(offset: number, coords: Atk.CoordType | null): [number, number, number, number];
            /**
             * Creates an #AtkAttributeSet which consists of the default values of
             * attributes for the text. See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             * @returns an #AtkAttributeSet which contains the default text          attributes for this #AtkText. This #AtkAttributeSet should be freed by          a call to atk_attribute_set_free().
             */
            get_default_attributes(): Atk.AttributeSet;
            /**
             * Gets the number of selected regions.
             * @returns The number of selected regions, or -1 in the case of failure.
             */
            get_n_selections(): number;
            /**
             * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
             * are interpreted as being relative to the screen or this widget's window
             * depending on `coords`.
             * @param x screen x-position of character
             * @param y screen y-position of character
             * @param coords specify whether coordinates are relative to the screen or widget window
             * @returns the offset to the character which is located at  the specified          @x and @y coordinates of -1 in case of failure.
             */
            get_offset_at_point(x: number, y: number, coords: Atk.CoordType | null): number;
            /**
             * Get the bounding box for text within the specified range.
             *
             * If the extents can not be obtained (e.g. or missing support), the rectangle
             * fields are set to -1.
             * @param start_offset The offset of the first text character for which boundary        information is required.
             * @param end_offset The offset of the text character after the last character        for which boundary information is required.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             */
            get_range_extents(
                start_offset: number,
                end_offset: number,
                coord_type: Atk.CoordType | null,
            ): Atk.TextRectangle;
            /**
             * Creates an #AtkAttributeSet which consists of the attributes explicitly
             * set at the position `offset` in the text. `start_offset` and `end_offset` are
             * set to the start and end of the range around `offset` where the attributes are
             * invariant. Note that `end_offset` is the offset of the first character
             * after the range.  See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
             * @returns an #AtkAttributeSet which contains the attributes         explicitly set at @offset. This #AtkAttributeSet should be freed by         a call to atk_attribute_set_free().
             */
            get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
            /**
             * Gets the text from the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @returns a newly allocated string containing the selected text. Use g_free()          to free the returned string.
             */
            get_selection(selection_num: number): [string, number, number];
            /**
             * Gets a portion of the text exposed through an #AtkText according to a given `offset`
             * and a specific `granularity,` along with the start and end offsets defining the
             * boundaries of such a portion of text.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
             * offset is returned.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
             * is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
             * is from the line start at or before the offset to the line
             * start after the offset.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
             * is from the start of the paragraph at or before the offset to the start
             * of the following paragraph after the offset.
             * @param offset position
             * @param granularity An #AtkTextGranularity
             * @returns a newly allocated string containing the text at          the @offset bounded by the specified @granularity. Use g_free()          to free the returned string.  Returns %NULL if the offset is invalid          or no implementation is available.
             */
            get_string_at_offset(
                offset: number,
                granularity: Atk.TextGranularity | null,
            ): [string | null, number, number];
            /**
             * Gets the specified text.
             * @param start_offset a starting character offset within @text
             * @param end_offset an ending character offset within @text, or -1 for the end of the string.
             * @returns a newly allocated string containing the text from @start_offset up          to, but not including @end_offset. Use g_free() to free the returned          string.
             */
            get_text(start_offset: number, end_offset: number): string;
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             * @returns a newly allocated string containing the text after @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
             */
            get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
            /**
             * Gets the specified text.
             *
             * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
             * offset is returned.
             *
             * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
             * string is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
             * string is from the line start at or before the offset to the line
             * start after the offset.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             * @returns a newly allocated string containing the text at @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
             */
            get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             * @returns a newly allocated string containing the text before @offset bounded          by the specified @boundary_type. Use g_free() to free the returned          string.
             */
            get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary | null): [string, number, number];
            /**
             * Removes the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @returns %TRUE if successful, %FALSE otherwise
             */
            remove_selection(selection_num: number): boolean;
            /**
             * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
             * @param start_offset start offset in the @text
             * @param end_offset end offset in the @text, or -1 for the end of the text.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of a substring of `text` to a given position of the screen
             * by scrolling all necessary parents.
             * @param start_offset start offset in the @text
             * @param end_offset end offset in the @text, or -1 for the end of the text.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_substring_to_point(
                start_offset: number,
                end_offset: number,
                coords: Atk.CoordType | null,
                x: number,
                y: number,
            ): boolean;
            /**
             * Sets the caret (cursor) position to the specified `offset`.
             *
             * In the case of rich-text content, this method should either grab focus
             * or move the sequential focus navigation starting point (if the application
             * supports this concept) as if the user had clicked on the new caret position.
             * Typically, this means that the target of this operation is the node containing
             * the new caret position or one of its ancestors. In other words, after this
             * method is called, if the user advances focus, it should move to the first
             * focusable node following the new caret position.
             *
             * Calling this method should also scroll the application viewport in a way
             * that matches the behavior of the application's typical caret motion or tab
             * navigation as closely as possible. This also means that if the application's
             * caret motion or focus navigation does not trigger a scroll operation, this
             * method should not trigger one either. If the application does not have a caret
             * motion or focus navigation operation, this method should try to scroll the new
             * caret position into view while minimizing unnecessary scroll motion.
             * @param offset the character offset of the new caret position
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            set_caret_offset(offset: number): boolean;
            /**
             * Changes the start and end offset of the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @param start_offset the new starting character offset of the selection
             * @param end_offset the new end position of (e.g. offset immediately past) the selection
             * @returns %TRUE if successful, %FALSE otherwise
             */
            set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
            /**
             * Adds a selection bounded by the specified offsets.
             * @param start_offset the starting character offset of the selected region
             * @param end_offset the offset of the first character after the selected region.
             */
            vfunc_add_selection(start_offset: number, end_offset: number): boolean;
            /**
             * Get the ranges of text in the specified bounding box.
             * @param rect An AtkTextRectangle giving the dimensions of the bounding box.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             * @param x_clip_type Specify the horizontal clip type.
             * @param y_clip_type Specify the vertical clip type.
             */
            vfunc_get_bounded_ranges(
                rect: Atk.TextRectangle,
                coord_type: Atk.CoordType,
                x_clip_type: Atk.TextClipType,
                y_clip_type: Atk.TextClipType,
            ): Atk.TextRange[];
            /**
             * Gets the offset of the position of the caret (cursor).
             */
            vfunc_get_caret_offset(): number;
            /**
             * Gets the specified text.
             * @param offset a character offset within @text
             */
            vfunc_get_character_at_offset(offset: number): number;
            /**
             * Gets the character count.
             */
            vfunc_get_character_count(): number;
            /**
             * If the extent can not be obtained (e.g. missing support), all of x, y, width,
             * height are set to -1.
             *
             * Get the bounding box containing the glyph representing the character at
             *     a particular text offset.
             * @param offset The offset of the text character for which bounding information is required.
             * @param coords specify whether coordinates are relative to the screen or widget window
             */
            vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
            /**
             * Creates an #AtkAttributeSet which consists of the default values of
             * attributes for the text. See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             */
            vfunc_get_default_attributes(): Atk.AttributeSet;
            /**
             * Gets the number of selected regions.
             */
            vfunc_get_n_selections(): number;
            /**
             * Gets the offset of the character located at coordinates `x` and `y`. `x` and `y`
             * are interpreted as being relative to the screen or this widget's window
             * depending on `coords`.
             * @param x screen x-position of character
             * @param y screen y-position of character
             * @param coords specify whether coordinates are relative to the screen or widget window
             */
            vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
            /**
             * Get the bounding box for text within the specified range.
             *
             * If the extents can not be obtained (e.g. or missing support), the rectangle
             * fields are set to -1.
             * @param start_offset The offset of the first text character for which boundary        information is required.
             * @param end_offset The offset of the text character after the last character        for which boundary information is required.
             * @param coord_type Specify whether coordinates are relative to the screen or widget window.
             */
            vfunc_get_range_extents(
                start_offset: number,
                end_offset: number,
                coord_type: Atk.CoordType,
            ): Atk.TextRectangle;
            /**
             * Creates an #AtkAttributeSet which consists of the attributes explicitly
             * set at the position `offset` in the text. `start_offset` and `end_offset` are
             * set to the start and end of the range around `offset` where the attributes are
             * invariant. Note that `end_offset` is the offset of the first character
             * after the range.  See the enum AtkTextAttribute for types of text
             * attributes that can be returned. Note that other attributes may also be
             * returned.
             * @param offset the character offset at which to get the attributes, -1 means the offset of the character to be inserted at the caret location.
             */
            vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
            /**
             * Gets the text from the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             */
            vfunc_get_selection(selection_num: number): [string, number, number];
            /**
             * Gets a portion of the text exposed through an #AtkText according to a given `offset`
             * and a specific `granularity,` along with the start and end offsets defining the
             * boundaries of such a portion of text.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_CHAR the character at the
             * offset is returned.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_WORD the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_SENTENCE the returned string
             * is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_LINE the returned string
             * is from the line start at or before the offset to the line
             * start after the offset.
             *
             * If `granularity` is ATK_TEXT_GRANULARITY_PARAGRAPH the returned string
             * is from the start of the paragraph at or before the offset to the start
             * of the following paragraph after the offset.
             * @param offset position
             * @param granularity An #AtkTextGranularity
             */
            vfunc_get_string_at_offset(
                offset: number,
                granularity: Atk.TextGranularity,
            ): [string | null, number, number];
            /**
             * Gets the specified text.
             * @param start_offset a starting character offset within @text
             * @param end_offset an ending character offset within @text, or -1 for the end of the string.
             */
            vfunc_get_text(start_offset: number, end_offset: number): string;
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             *
             * If the boundary_type if ATK_TEXT_BOUNDARY_CHAR the character at the
             * offset is returned.
             *
             * If the boundary_type is ATK_TEXT_BOUNDARY_WORD_START the returned string
             * is from the word start at or before the offset to the word start after
             * the offset.
             *
             * The returned string will contain the word at the offset if the offset
             * is inside a word and will contain the word before the offset if the
             * offset is not inside a word.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_SENTENCE_START the returned
             * string is from the sentence start at or before the offset to the sentence
             * start after the offset.
             *
             * The returned string will contain the sentence at the offset if the offset
             * is inside a sentence and will contain the sentence before the offset
             * if the offset is not inside a sentence.
             *
             * If the boundary type is ATK_TEXT_BOUNDARY_LINE_START the returned
             * string is from the line start at or before the offset to the line
             * start after the offset.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
            /**
             * Gets the specified text.
             * @param offset position
             * @param boundary_type An #AtkTextBoundary
             */
            vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
            /**
             * Removes the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             */
            vfunc_remove_selection(selection_num: number): boolean;
            /**
             * Makes a substring of `text` visible on the screen by scrolling all necessary parents.
             * @param start_offset start offset in the @text
             * @param end_offset end offset in the @text, or -1 for the end of the text.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of a substring of `text` to a given position of the screen
             * by scrolling all necessary parents.
             * @param start_offset start offset in the @text
             * @param end_offset end offset in the @text, or -1 for the end of the text.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_substring_to_point(
                start_offset: number,
                end_offset: number,
                coords: Atk.CoordType,
                x: number,
                y: number,
            ): boolean;
            /**
             * Sets the caret (cursor) position to the specified `offset`.
             *
             * In the case of rich-text content, this method should either grab focus
             * or move the sequential focus navigation starting point (if the application
             * supports this concept) as if the user had clicked on the new caret position.
             * Typically, this means that the target of this operation is the node containing
             * the new caret position or one of its ancestors. In other words, after this
             * method is called, if the user advances focus, it should move to the first
             * focusable node following the new caret position.
             *
             * Calling this method should also scroll the application viewport in a way
             * that matches the behavior of the application's typical caret motion or tab
             * navigation as closely as possible. This also means that if the application's
             * caret motion or focus navigation does not trigger a scroll operation, this
             * method should not trigger one either. If the application does not have a caret
             * motion or focus navigation operation, this method should try to scroll the new
             * caret position into view while minimizing unnecessary scroll motion.
             * @param offset the character offset of the new caret position
             */
            vfunc_set_caret_offset(offset: number): boolean;
            /**
             * Changes the start and end offset of the specified selection.
             * @param selection_num The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
             * @param start_offset the new starting character offset of the selection
             * @param end_offset the new end position of (e.g. offset immediately past) the selection
             */
            vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
            vfunc_text_attributes_changed(): void;
            vfunc_text_caret_moved(location: number): void;
            /**
             * the signal handler which is executed when there is a
             *   text change. This virtual function is deprecated sice 2.9.4 and
             *   it should not be overriden.
             * @param position
             * @param length
             */
            vfunc_text_changed(position: number, length: number): void;
            vfunc_text_selection_changed(): void;
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
                extends Actor.ConstructorProps,
                    Atk.Action.ConstructorProps,
                    Atk.Component.ConstructorProps {}
        }

        /**
         * The <structname>CallyTexture</structname> structure contains only
         * private data and should be accessed using the provided API
         */
        class Texture extends Actor implements Atk.Action, Atk.Component {
            static $gtype: GObject.GType<Texture>;

            // Constructors

            constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](actor: Clutter.Actor): Texture;

            // Inherited methods
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             * @returns %TRUE if success, %FALSE otherwise
             */
            do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a description string, or %NULL if @action does not implement this interface.
             */
            get_description(i: number): string | null;
            // Conflicted with Atk.Object.get_description
            get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             * @returns the keybinding which can be used to activate this action, or %NULL if there is no keybinding for this action.
             */
            get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             * @returns a the number of actions, or 0 if @action does not implement this interface.
             */
            get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             * @returns a name string, or %NULL if @action does not implement this interface.
             */
            get_name(i: number): string | null;
            // Conflicted with Atk.Object.get_name
            get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             * @returns a gboolean representing if the description was successfully set;
             */
            set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.set_description
            set_description(...args: never[]): any;
            /**
             * Perform the specified action on the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_do_action(i: number): boolean;
            /**
             * Returns a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_description(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_description
            vfunc_get_description(...args: never[]): any;
            /**
             * Gets the keybinding which can be used to activate this action, if one
             * exists. The string returned should contain localized, human-readable,
             * key sequences as they would appear when displayed on screen. It must
             * be in the format "mnemonic;sequence;shortcut".
             *
             * - The mnemonic key activates the object if it is presently enabled onscreen.
             *   This typically corresponds to the underlined letter within the widget.
             *   Example: "n" in a traditional "New..." menu item or the "a" in "Apply" for
             *   a button.
             * - The sequence is the full list of keys which invoke the action even if the
             *   relevant element is not currently shown on screen. For instance, for a menu
             *   item the sequence is the keybindings used to open the parent menus before
             *   invoking. The sequence string is colon-delimited. Example: "Alt+F:N" in a
             *   traditional "New..." menu item.
             * - The shortcut, if it exists, will invoke the same action without showing
             *   the component or its enclosing menus or dialogs. Example: "Ctrl+N" in a
             *   traditional "New..." menu item.
             *
             * Example: For a traditional "New..." menu item, the expected return value
             * would be: "N;Alt+F:N;Ctrl+N" for the English locale and "N;Alt+D:N;Strg+N"
             * for the German locale. If, hypothetically, this menu item lacked a mnemonic,
             * it would be represented by ";;Ctrl+N" and ";;Strg+N" respectively.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_keybinding(i: number): string | null;
            /**
             * Returns the localized name of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_localized_name(i: number): string | null;
            /**
             * Gets the number of accessible actions available on the object.
             * If there are more than one, the first one is considered the
             * "default" action of the object.
             */
            vfunc_get_n_actions(): number;
            /**
             * Returns a non-localized string naming the specified action of the
             * object. This name is generally not descriptive of the end result
             * of the action, but instead names the 'interaction type' which the
             * object supports. By convention, the above strings should be used to
             * represent the actions which correspond to the common point-and-click
             * interaction techniques of the same name: i.e.
             * "click", "press", "release", "drag", "drop", "popup", etc.
             * The "popup" action should be used to pop up a context menu for the
             * object, if one exists.
             *
             * For technical reasons, some toolkits cannot guarantee that the
             * reported action is actually 'bound' to a nontrivial user event;
             * i.e. the result of some actions via atk_action_do_action() may be
             * NIL.
             * @param i the action index corresponding to the action to be performed
             */
            vfunc_get_name(i: number): string | null;
            // Conflicted with Atk.Object.vfunc_get_name
            vfunc_get_name(...args: never[]): any;
            /**
             * Sets a description of the specified action of the object.
             * @param i the action index corresponding to the action to be performed
             * @param desc the description to be assigned to this action
             */
            vfunc_set_description(i: number, desc: string): boolean;
            // Conflicted with Atk.Object.vfunc_set_description
            vfunc_set_description(...args: never[]): any;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
             */
            contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             * @returns An alpha value from 0 to 1.0, inclusive.
             */
            get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
            /**
             * Gets the layer of the component.
             * @returns an #AtkLayer which is the layer of the component
             */
            get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
             */
            get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            get_position(coord_type: Atk.CoordType | null): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns a reference to the accessible child, if one exists
             */
            ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             * @returns whether scrolling was successful.
             */
            scroll_to(type: Atk.ScrollType | null): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             * @returns whether scrolling was successful.
             */
            scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             * @returns %TRUE or %FALSE whether the extents were set or not
             */
            set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             * @returns %TRUE or %FALSE whether or not the position was set or not
             */
            set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             * @returns %TRUE or %FALSE whether the size was set or not
             */
            set_size(width: number, height: number): boolean;
            vfunc_bounds_changed(bounds: Atk.Rectangle): void;
            /**
             * Checks whether the specified point is within the extent of the `component`.
             *
             * Toolkit implementor note: ATK provides a default implementation for
             * this virtual method. In general there are little reason to
             * re-implement it.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Returns the alpha value (i.e. the opacity) for this
             * `component,` on a scale from 0 (fully transparent) to 1.0
             * (fully opaque).
             */
            vfunc_get_alpha(): number;
            /**
             * Gets the rectangle which gives the extent of the `component`.
             *
             * If the extent can not be obtained (e.g. a non-embedded plug or missing
             * support), all of x, y, width, height are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
            /**
             * Gets the layer of the component.
             */
            vfunc_get_layer(): Atk.Layer;
            /**
             * Gets the zorder of the component. The value G_MININT will be returned
             * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
             */
            vfunc_get_mdi_zorder(): number;
            /**
             * Gets the position of `component` in the form of
             * a point specifying `component'`s top-left corner.
             *
             * If the position can not be obtained (e.g. a non-embedded plug or missing
             * support), x and y are set to -1.
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_get_position(coord_type: Atk.CoordType): [number, number];
            /**
             * Gets the size of the `component` in terms of width and height.
             *
             * If the size can not be obtained (e.g. a non-embedded plug or missing
             * support), width and height are set to -1.
             */
            vfunc_get_size(): [number, number];
            /**
             * Grabs focus for this `component`.
             */
            vfunc_grab_focus(): boolean;
            /**
             * Gets a reference to the accessible child, if one exists, at the
             * coordinate point specified by `x` and `y`.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
            /**
             * Remove the handler specified by `handler_id` from the list of
             * functions to be executed when this object receives focus events
             * (in or out).
             * @param handler_id the handler id of the focus handler to be removed from @component
             */
            vfunc_remove_focus_handler(handler_id: number): void;
            /**
             * Makes `component` visible on the screen by scrolling all necessary parents.
             *
             * Contrary to atk_component_set_position, this does not actually move
             * `component` in its parent, this only makes the parents scroll so that the
             * object shows up on the screen, given its current position within the parents.
             * @param type specify where the object should be made visible.
             */
            vfunc_scroll_to(type: Atk.ScrollType): boolean;
            /**
             * Move the top-left of `component` to a given position of the screen by
             * scrolling all necessary parents.
             * @param coords specify whether coordinates are relative to the screen or to the parent object.
             * @param x x-position where to scroll to
             * @param y y-position where to scroll to
             */
            vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
            /**
             * Sets the extents of `component`.
             * @param x x coordinate
             * @param y y coordinate
             * @param width width to set for @component
             * @param height height to set for @component
             * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
             */
            vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
            /**
             * Sets the position of `component`.
             *
             * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
             * this just moves `component` in its parent.
             * @param x x coordinate
             * @param y y coordinate
             * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
             */
            vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
            /**
             * Set the size of the `component` in terms of width and height.
             * @param width width to set for @component
             * @param height height to set for @component
             */
            vfunc_set_size(width: number, height: number): boolean;
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

        module Util {
            // Constructor properties interface

            interface ConstructorProps extends Atk.Util.ConstructorProps {}
        }

        /**
         * The <structname>CallyUtil</structname> structure contains only
         * private data and should be accessed using the provided API
         */
        class Util extends Atk.Util {
            static $gtype: GObject.GType<Util>;

            // Constructors

            constructor(properties?: Partial<Util.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        type ActorClass = typeof Actor;
        abstract class ActorPrivate {
            static $gtype: GObject.GType<ActorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CloneClass = typeof Clone;
        abstract class ClonePrivate {
            static $gtype: GObject.GType<ClonePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GroupClass = typeof Group;
        abstract class GroupPrivate {
            static $gtype: GObject.GType<GroupPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RectangleClass = typeof Rectangle;
        abstract class RectanglePrivate {
            static $gtype: GObject.GType<RectanglePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RootClass = typeof Root;
        abstract class RootPrivate {
            static $gtype: GObject.GType<RootPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type StageClass = typeof Stage;
        abstract class StagePrivate {
            static $gtype: GObject.GType<StagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TextClass = typeof Text;
        abstract class TextPrivate {
            static $gtype: GObject.GType<TextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TextureClass = typeof Texture;
        abstract class TexturePrivate {
            static $gtype: GObject.GType<TexturePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UtilClass = typeof Util;
        abstract class UtilPrivate {
            static $gtype: GObject.GType<UtilPrivate>;

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

    export default Cally;
}

declare module 'gi://Cally' {
    import Cally10 from 'gi://Cally?version=1.0';
    export default Cally10;
}
// END
