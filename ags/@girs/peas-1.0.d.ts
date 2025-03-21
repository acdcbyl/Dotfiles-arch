/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./girepository-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Peas?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GIRepository from 'gi://GIRepository?version=2.0';

    export namespace Peas {
        /**
         * Peas-1.0
         */

        /**
         * These identify the various errors that can occur while
         * loading a plugin.
         */
        class PluginInfoError extends GLib.Error {
            static $gtype: GObject.GType<PluginInfoError>;

            // Static fields

            /**
             * The plugin failed to load.
             */
            static LOADING_FAILED: number;
            /**
             * The plugin's loader was not found.
             */
            static LOADER_NOT_FOUND: number;
            /**
             * A dependency of the plugin was not found.
             */
            static DEP_NOT_FOUND: number;
            /**
             * A dependency of the plugin failed to load.
             */
            static DEP_LOADING_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        function plugin_info_error_quark(): GLib.Quark;
        interface ExtensionSetForeachFunc {
            (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: any | null): void;
        }
        interface FactoryFunc {
            (parameters: GObject.Parameter[]): GObject.Object;
        }
        module Engine {
            // Signal callback interfaces

            interface LoadPlugin {
                (info: PluginInfo): void;
            }

            interface UnloadPlugin {
                (info: PluginInfo): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                loaded_plugins: string[];
                loadedPlugins: string[];
                nonglobal_loaders: boolean;
                nonglobalLoaders: boolean;
                plugin_list: any;
                pluginList: any;
            }
        }

        /**
         * The #PeasEngine structure contains only private data and should only be
         * accessed using the provided API.
         */
        class Engine extends GObject.Object {
            static $gtype: GObject.GType<Engine>;

            // Properties

            /**
             * The list of loaded plugins.
             *
             * This will be modified when [method`Engine`.load_plugin] or
             * [method`Engine`.unload_plugin] is called.
             *
             * This can be used with [class`Gio`.Settings] to save the loaded plugins by
             * binding to this property after instantiating the engine by doing:
             *
             * ```c
             *   g_settings_bind (gsettings_object,
             *                    LOADED_PLUGINS_KEY,
             *                    engine,
             *                    "loaded-plugins",
             *                    G_SETTINGS_BIND_DEFAULT);
             * ```
             *
             * Note: notify will not be called when the engine is being destroyed.
             */
            get loaded_plugins(): string[];
            set loaded_plugins(val: string[]);
            /**
             * The list of loaded plugins.
             *
             * This will be modified when [method`Engine`.load_plugin] or
             * [method`Engine`.unload_plugin] is called.
             *
             * This can be used with [class`Gio`.Settings] to save the loaded plugins by
             * binding to this property after instantiating the engine by doing:
             *
             * ```c
             *   g_settings_bind (gsettings_object,
             *                    LOADED_PLUGINS_KEY,
             *                    engine,
             *                    "loaded-plugins",
             *                    G_SETTINGS_BIND_DEFAULT);
             * ```
             *
             * Note: notify will not be called when the engine is being destroyed.
             */
            get loadedPlugins(): string[];
            set loadedPlugins(val: string[]);
            /**
             * If non-global plugin loaders should be used.
             *
             * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
             */
            get nonglobal_loaders(): boolean;
            /**
             * If non-global plugin loaders should be used.
             *
             * See [ctor`Engine`.new_with_nonglobal_loaders] for more information.
             */
            get nonglobalLoaders(): boolean;
            /**
             * The list of found plugins.
             *
             * This will be modified when [method`Engine`.rescan_plugins] is called.
             *
             * Note: the list belongs to the engine and should not be modified or freed.
             */
            get plugin_list(): any;
            /**
             * The list of found plugins.
             *
             * This will be modified when [method`Engine`.rescan_plugins] is called.
             *
             * Note: the list belongs to the engine and should not be modified or freed.
             */
            get pluginList(): any;

            // Constructors

            constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Engine;

            static new_with_nonglobal_loaders(): Engine;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'load-plugin', callback: (_source: this, info: PluginInfo) => void): number;
            connect_after(signal: 'load-plugin', callback: (_source: this, info: PluginInfo) => void): number;
            emit(signal: 'load-plugin', info: PluginInfo): void;
            connect(signal: 'unload-plugin', callback: (_source: this, info: PluginInfo) => void): number;
            connect_after(signal: 'unload-plugin', callback: (_source: this, info: PluginInfo) => void): number;
            emit(signal: 'unload-plugin', info: PluginInfo): void;

            // Static methods

            /**
             * Return the existing instance of #PeasEngine or a subclass of it.
             *
             * If no #PeasEngine subclass has been instantiated yet, the first call
             * of this function will return a new instance of #PeasEngine.
             *
             * Note: this function should never be used when multiple threads are
             *   using libpeas API as it is not thread-safe.
             */
            static get_default(): Engine;

            // Virtual methods

            /**
             * Signal class handler for the #PeasEngine::load-plugin signal.
             * @param info
             */
            vfunc_load_plugin(info: PluginInfo): void;
            /**
             * Signal class handler for the #PeasEngine::unload-plugin signal.
             * @param info
             */
            vfunc_unload_plugin(info: PluginInfo): void;

            // Methods

            /**
             * Appends a search path to the list of paths where to look for plugins.
             *
             * A so-called "search path" actually consists of both a
             * module directory (where the shared libraries or language modules
             * lie) and a data directory (where the plugin data is).
             *
             * The plugin will be able to use a correct data dir depending on
             * where it is installed, hence allowing to keep the plugin agnostic
             * when it comes to installation location: the same plugin can be
             * installed either in the system path or in the user's home directory,
             * without taking other special care than using
             * [method`PluginInfo`.get_data_dir] when looking for its data files.
             *
             * If `data_dir` is %NULL, then it is set to the same value as
             * `module_dir`.
             * @param module_dir the plugin module directory.
             * @param data_dir the plugin data directory.
             */
            add_search_path(module_dir: string, data_dir?: string | null): void;
            /**
             * If the plugin identified by `info` implements the `extension_type,`
             * then this function will return a new instance of this implementation,
             * wrapped in a new [alias`Extension]` instance. Otherwise, it will return %NULL.
             *
             * Since libpeas 1.22, `extension_type` can be an Abstract [alias`GObject`.Type]
             * and not just an Interface [alias`GObject`.Type].
             *
             * See [method`Engine`.create_extension] for more information.
             * @param info A loaded #PeasPluginInfo.
             * @param extension_type The implemented extension #GType.
             * @param prop_names an array of property names.
             * @param prop_values an array of property values.
             * @returns a new instance of #PeasExtension wrapping   the @extension_type instance, or %NULL.
             */
            create_extension(
                info: PluginInfo,
                extension_type: GObject.GType,
                prop_names: string[],
                prop_values: (GObject.Value | any)[],
            ): Extension;
            /**
             * Enable a loader, enables a loader for plugins.
             *
             * The C plugin loader is always enabled. The other plugin
             * loaders are: lua5.1, python and python3.
             *
             * For instance, the following code will enable Python 2 plugins
             * to be loaded:
             *
             * ```c
             * peas_engine_enable_loader (engine, "python");
             * ```
             *
             * Note: plugin loaders used to be shared across `PeasEngine`s so enabling
             *   a loader on one #PeasEngine would enable it on all #PeasEngines.
             *   This behavior has been kept to avoid breaking applications,
             *   however a warning has been added to help applications transition.
             * @param loader_name The name of the loader to enable.
             */
            enable_loader(loader_name: string): void;
            /**
             * Triggers garbage collection on all the loaders currently owned by the
             * #PeasEngine.
             *
             * This can be used to force the loaders to destroy
             * managed objects that still hold references to objects that are about to
             * disappear.
             */
            garbage_collect(): void;
            /**
             * Returns the list of the names of all the loaded plugins.
             *
             * If there is no plugin currently loaded, it will return an array containing a
             * single %NULL element.
             *
             * Please note that the returned array is a newly allocated one: you will need
             * to free it using [func`GLib`.strfreev].
             * @returns A newly-allocated   %NULL-terminated array of strings.
             */
            get_loaded_plugins(): string[];
            /**
             * Gets the [struct`PluginInfo]` corresponding with `plugin_name,`
             * or %NULL if `plugin_name` was not found.
             * @param plugin_name A plugin name.
             * @returns the #PeasPluginInfo corresponding with   a given plugin module name.
             */
            get_plugin_info(plugin_name: string): PluginInfo;
            /**
             * Returns the list of [struct`PluginInfo]` known to the engine.
             * @returns a #GList of   #PeasPluginInfo. Note that the list belongs to the engine and should   not be freed.
             */
            get_plugin_list(): PluginInfo[];
            /**
             * Loads the plugin corresponding to `info` if it's not currently loaded.
             *
             * Emits the [signal`Engine:`:load-plugin] signal; loading the plugin
             * actually occurs in the default signal handler.
             * @param info A #PeasPluginInfo.
             * @returns whether the plugin has been successfully loaded.
             */
            load_plugin(info: PluginInfo): boolean;
            /**
             * Prepends a search path to the list of paths where to look for plugins.
             *
             * See Also: [method`Engine`.add_search_path]
             * @param module_dir the plugin module directory.
             * @param data_dir the plugin data directory.
             */
            prepend_search_path(module_dir: string, data_dir?: string | null): void;
            /**
             * Returns if `info` provides an extension for `extension_type`.
             *
             * If the `info` is not loaded than %FALSE will always be returned.
             *
             * Since libpeas 1.22, `extension_type` can be an Abstract [alias`GObject`.Type]
             * and not just an Interface [alias`GObject`.Type].
             * @param info A #PeasPluginInfo.
             * @param extension_type The extension #GType.
             * @returns if @info provides an extension for @extension_type.
             */
            provides_extension(info: PluginInfo, extension_type: GObject.GType): boolean;
            /**
             * Rescan all the registered directories to find new or updated plugins.
             *
             * Calling this function will make the newly installed plugin infos
             * be loaded by the engine, so the new plugins can be used without
             * restarting the application.
             */
            rescan_plugins(): void;
            /**
             * Sets the list of loaded plugins for `engine`.
             *
             * When this function is called, the #PeasEngine will load all the plugins whose
             * names are in `plugin_names,` and ensures all other active plugins are
             * unloaded.
             *
             * If `plugin_names` is %NULL, all plugins will be unloaded.
             * @param plugin_names A %NULL-terminated  array of plugin names, or %NULL.
             */
            set_loaded_plugins(plugin_names?: string[] | null): void;
            /**
             * Unloads the plugin corresponding to `info`.
             *
             * Emits the [signal`Engine:`:unload-plugin] signal; unloading the plugin
             * actually occurs in the default signal handler.
             * @param info A #PeasPluginInfo.
             * @returns whether the plugin has been successfully unloaded.
             */
            unload_plugin(info: PluginInfo): boolean;
        }

        module ExtensionBase {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                data_dir: string;
                dataDir: string;
                plugin_info: PluginInfo;
                pluginInfo: PluginInfo;
            }
        }

        /**
         * Base class for C extensions.
         */
        abstract class ExtensionBase extends GObject.Object {
            static $gtype: GObject.GType<ExtensionBase>;

            // Properties

            /**
             * The The full path of the directory where the plugin
             * should look for its data files.
             *
             * Note: This is the same path as that returned by
             * [method`PluginInfo`.get_data_dir].
             */
            get data_dir(): string;
            /**
             * The The full path of the directory where the plugin
             * should look for its data files.
             *
             * Note: This is the same path as that returned by
             * [method`PluginInfo`.get_data_dir].
             */
            get dataDir(): string;
            /**
             * The [struct`PluginInfo]` related to the current plugin.
             */
            get plugin_info(): PluginInfo;
            /**
             * The [struct`PluginInfo]` related to the current plugin.
             */
            get pluginInfo(): PluginInfo;

            // Constructors

            constructor(properties?: Partial<ExtensionBase.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the path of the directory where the plugin should look for
             * its data files.
             * @returns A newly allocated string with the path of the   directory where the plugin should look for its data files
             */
            get_data_dir(): string;
            /**
             * Get information relative to `extbase`.
             * @returns the [struct@PluginInfo] relative   to the #PeasExtensionBase.
             */
            get_plugin_info(): PluginInfo;
        }

        module ExtensionSet {
            // Signal callback interfaces

            interface ExtensionAdded {
                (info: PluginInfo, exten: GObject.Object): void;
            }

            interface ExtensionRemoved {
                (info: PluginInfo, exten: GObject.Object): void;
            }

            // Constructor properties interface

            interface ConstructorProps<A extends GObject.Object = GObject.Object>
                extends GObject.Object.ConstructorProps,
                    Gio.ListModel.ConstructorProps {
                construct_properties: any;
                constructProperties: any;
                engine: Engine;
                extension_type: GObject.GType;
                extensionType: GObject.GType;
            }
        }

        /**
         * The #PeasExtensionSet structure contains only private data and should only
         * be accessed using the provided API.
         */
        class ExtensionSet<A extends GObject.Object = GObject.Object>
            extends GObject.Object
            implements Gio.ListModel<A>
        {
            static $gtype: GObject.GType<ExtensionSet>;

            // Properties

            set construct_properties(val: any);
            set constructProperties(val: any);
            get engine(): Engine;
            get extension_type(): GObject.GType;
            get extensionType(): GObject.GType;

            // Constructors

            constructor(properties?: Partial<ExtensionSet.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                engine: Engine | null,
                exten_type: GObject.GType,
                prop_names: string[],
                prop_values: (GObject.Value | any)[],
            ): ExtensionSet;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'extension-added',
                callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void,
            ): number;
            connect_after(
                signal: 'extension-added',
                callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void,
            ): number;
            emit(signal: 'extension-added', info: PluginInfo, exten: GObject.Object): void;
            connect(
                signal: 'extension-removed',
                callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void,
            ): number;
            connect_after(
                signal: 'extension-removed',
                callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void,
            ): number;
            emit(signal: 'extension-removed', info: PluginInfo, exten: GObject.Object): void;

            // Virtual methods

            /**
             * The VFunc for peas_extension_set_call().
             * @param method_name
             * @param args
             */
            vfunc_call(method_name: string, args: GIRepository.Argument): boolean;
            /**
             * Signal class handler for the
             *                   #PeasExtensionSet::extension-added signal.
             * @param info
             * @param exten
             */
            vfunc_extension_added(info: PluginInfo, exten: Extension): void;
            /**
             * Signal class handler for the
             *                   #PeasExtensionSet::extension-removed signal.
             * @param info
             * @param exten
             */
            vfunc_extension_removed(info: PluginInfo, exten: Extension): void;

            // Methods

            /**
             * Calls `func` for each [alias`Extension]`.
             * @param func A function call for each extension.
             */
            foreach(func: ExtensionSetForeachFunc): void;
            /**
             * Returns the [alias`Extension]` object corresponding to `info`.
             *
             * If the plugin doesn't provide such an extension, it returns %NULL.
             * @param info a #PeasPluginInfo
             * @returns a reference to a #PeasExtension
             */
            get_extension(info: PluginInfo): Extension | null;

            // Inherited methods
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             * @returns the #GType of the items contained in @list.
             */
            get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             * @returns the number of items in @list.
             */
            get_n_items(): number;
            /**
             * Get the item at `position`.
             *
             * If `position` is greater than the number of items in `list,` %NULL is
             * returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.
             *
             * This function is meant to be used by language bindings in place
             * of g_list_model_get_item().
             *
             * See also: g_list_model_get_n_items()
             * @param position the position of the item to fetch
             * @returns the object at @position.
             */
            get_item(position: number): A | null;
            /**
             * Emits the #GListModel::items-changed signal on `list`.
             *
             * This function should only be called by classes implementing
             * #GListModel. It has to be called after the internal representation
             * of `list` has been updated, because handlers connected to this signal
             * might query the new state of the list.
             *
             * Implementations must only make changes to the model (as visible to
             * its consumer) in places that will not cause problems for that
             * consumer.  For models that are driven directly by a write API (such
             * as #GListStore), changes can be reported in response to uses of that
             * API.  For models that represent remote data, changes should only be
             * made from a fresh mainloop dispatch.  It is particularly not
             * permitted to make changes in response to a call to the #GListModel
             * consumer API.
             *
             * Stated another way: in general, it is assumed that code making a
             * series of accesses to the model via the API, without returning to the
             * mainloop, and without calling other code, will continue to view the
             * same contents of the model.
             * @param position the position at which @list changed
             * @param removed the number of items removed
             * @param added the number of items added
             */
            items_changed(position: number, removed: number, added: number): void;
            /**
             * Get the item at `position`. If `position` is greater than the number of
             * items in `list,` %NULL is returned.
             *
             * %NULL is never returned for an index that is smaller than the length
             * of the list.  See g_list_model_get_n_items().
             *
             * The same #GObject instance may not appear more than once in a #GListModel.
             * @param position the position of the item to fetch
             */
            vfunc_get_item(position: number): A | null;
            /**
             * Gets the type of the items in `list`.
             *
             * All items returned from g_list_model_get_item() are of the type
             * returned by this function, or a subtype, or if the type is an
             * interface, they are an implementation of that interface.
             *
             * The item type of a #GListModel can not change during the life of the
             * model.
             */
            vfunc_get_item_type(): GObject.GType;
            /**
             * Gets the number of items in `list`.
             *
             * Depending on the model implementation, calling this function may be
             * less efficient than iterating the list with increasing values for
             * `position` until g_list_model_get_item() returns %NULL.
             */
            vfunc_get_n_items(): number;
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

        module ObjectModule {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.TypeModule.ConstructorProps,
                    GObject.TypePlugin.ConstructorProps {
                local_linkage: boolean;
                localLinkage: boolean;
                module_name: string;
                moduleName: string;
                path: string;
                resident: boolean;
                symbol: string;
            }
        }

        /**
         * The #PeasObjectModule structure contains only private data and should only
         * be accessed using the provided API.
         */
        class ObjectModule extends GObject.TypeModule implements GObject.TypePlugin {
            static $gtype: GObject.GType<ObjectModule>;

            // Properties

            /**
             * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
             *
             * Since 1.14
             */
            get local_linkage(): boolean;
            /**
             * Whether the module is loaded with local linkage, i.e. #G_MODULE_BIND_LOCAL.
             *
             * Since 1.14
             */
            get localLinkage(): boolean;
            get module_name(): string;
            get moduleName(): string;
            get path(): string;
            get resident(): boolean;
            get symbol(): string;

            // Constructors

            constructor(properties?: Partial<ObjectModule.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Register an implementation for an extension type through a factory
             * function `factory_func` which will instantiate the extension when
             * requested.
             *
             * This method is primarily meant to be used by native bindings (like gtkmm),
             * creating native types which cannot be instantiated correctly using
             * [ctor`GObject`.Object.new].  For other uses, you will usually prefer relying on
             * peas_object_module_register_extension_type().
             *
             * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
             * and not just an Interface [alias`GObject`.Type].
             * @param exten_type The #GType of the extension you implement.
             * @param factory_func The #PeasFactoryFunc that will create the @exten_type   instance when requested.
             */
            register_extension_factory(exten_type: GObject.GType, factory_func: FactoryFunc): void;
            /**
             * Register `impl_type` as an extension which implements `extension_type`.
             *
             * Since libpeas 1.22, `exten_type` can be an Abstract [alias`GObject`.Type]
             * and not just an Interface [alias`GObject`.Type].
             * @param exten_type The #GType of the extension you implement.
             * @param impl_type The #GType of your implementation of @exten_type.
             */
            register_extension_type(exten_type: GObject.GType, impl_type: GObject.GType): void;

            // Inherited methods
            /**
             * Calls the `complete_interface_info` function from the
             * #GTypePluginClass of `plugin`. There should be no need to use this
             * function outside of the GObject type system itself.
             * @param instance_type the #GType of an instantiatable type to which the interface  is added
             * @param interface_type the #GType of the interface whose info is completed
             * @param info the #GInterfaceInfo to fill in
             */
            complete_interface_info(
                instance_type: GObject.GType,
                interface_type: GObject.GType,
                info: GObject.InterfaceInfo,
            ): void;
            /**
             * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
             * There should be no need to use this function outside of the GObject
             * type system itself.
             * @param g_type the #GType whose info is completed
             * @param info the #GTypeInfo struct to fill in
             * @param value_table the #GTypeValueTable to fill in
             */
            complete_type_info(
                g_type: GObject.GType,
                info: GObject.TypeInfo,
                value_table: GObject.TypeValueTable,
            ): void;
            /**
             * Calls the `unuse_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            unuse(): void;
            /**
             * Calls the `use_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            use(): void;
            // Conflicted with GObject.TypeModule.use
            use(...args: never[]): any;
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

        type ActivatableInterface = typeof Activatable;
        type EngineClass = typeof Engine;
        abstract class EnginePrivate {
            static $gtype: GObject.GType<EnginePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ExtensionBaseClass = typeof ExtensionBase;
        abstract class ExtensionBasePrivate {
            static $gtype: GObject.GType<ExtensionBasePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ExtensionSetClass = typeof ExtensionSet;
        abstract class ExtensionSetPrivate {
            static $gtype: GObject.GType<ExtensionSetPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ObjectModuleClass = typeof ObjectModule;
        abstract class ObjectModulePrivate {
            static $gtype: GObject.GType<ObjectModulePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The #PeasPluginInfo structure contains only private data and should only
         * be accessed using the provided API.
         */
        abstract class PluginInfo {
            static $gtype: GObject.GType<PluginInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Gets a %NULL-terminated array of strings with the authors of the plugin.
             *
             * The relevant key in the plugin info file is "Authors".
             * @returns the plugin's author list.
             */
            get_authors(): string[];
            /**
             * Gets the copyright of the plugin.
             *
             * The relevant key in the plugin info file is "Copyright".
             * @returns the plugin's copyright information.
             */
            get_copyright(): string;
            /**
             * Gets the data dir of the plugin.
             *
             * The module data directory is the directory where a plugin should find its
             * runtime data. This is not a value read from the [struct`GLib`.KeyFile], but
             * rather a value provided by the [class`Engine]`, depending on where the plugin
             * file was found.
             * @returns the plugin's data dir.
             */
            get_data_dir(): string;
            /**
             * Gets the dependencies of the plugin.
             *
             * The [class`Engine]` will always ensure that the dependencies of a plugin are
             * loaded when the said plugin is loaded. It means that dependencies are
             * loaded before the plugin, and unloaded after it. Circular dependencies of
             * plugins lead to undefined loading order.
             *
             * The relevant key in the plugin info file is "Depends".
             * @returns the plugin's dependencies.
             */
            get_dependencies(): string[];
            /**
             * Gets the description of the plugin.
             *
             * The description of the plugin should be a string presenting the purpose of
             * the plugin. It will typically be presented in a plugin's about box.
             *
             * The relevant key in the plugin info file is "Description".
             * @returns the plugin's description.
             */
            get_description(): string;
            /**
             * Gets external data specified for the plugin.
             *
             * External data is specified in the plugin info file prefixed with X-. For
             * example, if a key/value pair `X-Peas=1` is specified in the key file, you
             * can use "Peas" for `key` to retrieve the value "1".
             *
             * Note: that you can omit the X- prefix when retrieving the value,
             * but not when specifying the value in the file.
             * @param key The key to lookup.
             * @returns the external data, or %NULL if the external data could not be found.
             */
            get_external_data(key: string): string | null;
            /**
             * Gets the help URI of the plugin.
             *
             * The Help URI of a plugin will typically be presented by the plugin manager
             * as a "Help" button linking to the URI. It can either be a HTTP URL on some
             * website or a ghelp: URI if a Gnome help page is available for the plugin.
             *
             * The relevant key in the plugin info file is "Help". Other platform-specific
             * keys exist for platform-specific help files. Those are "Help-GNOME",
             * "Help-Windows" and "Help-MacOS-X".
             * @returns the plugin's help URI.
             */
            get_help_uri(): string;
            /**
             * Gets the icon name of the plugin.
             *
             * The icon of the plugin will be presented in the plugin manager UI. If no
             * icon is specified, the default green puzzle icon will be used.
             *
             * The relevant key in the plugin info file is "Icon".
             * @returns the plugin's icon name.
             */
            get_icon_name(): string;
            /**
             * Gets the module directory.
             *
             * The module directory is the directory where the plugin file was found. This
             * is not a value from the [struct`GLib`.KeyFile], but rather a value provided by the
             * [class`Engine]`.
             * @returns the module directory.
             */
            get_module_dir(): string;
            /**
             * Gets the module name.
             *
             * The module name will be used to find the actual plugin. The way this value
             * will be used depends on the loader (i.e. on the language) of the plugin.
             * This value is also used to uniquely identify a particular plugin.
             *
             * The relevant key in the plugin info file is "Module".
             * @returns the module name.
             */
            get_module_name(): string;
            /**
             * Gets the name of the plugin.
             *
             * The name of a plugin should be a nice short string to be presented in UIs.
             *
             * The relevant key in the plugin info file is "Name".
             * @returns the plugin's name.
             */
            get_name(): string;
            /**
             * Creates a new [class`Gio`.Settings] for the given `schema_id` and if
             * gschemas.compiled is not in the module directory an attempt
             * will be made to create it.
             * @param schema_id The schema id.
             * @returns a new #GSettings.
             */
            get_settings(schema_id?: string | null): Gio.Settings | null;
            /**
             * Gets the version of the plugin.
             *
             * The relevant key in the plugin info file is "Version".
             * @returns the plugin's version.
             */
            get_version(): string;
            /**
             * Gets the website of the plugin.
             *
             * The relevant key in the plugin info file is "Website".
             * @returns the plugin's associated website.
             */
            get_website(): string;
            /**
             * Check if the plugin depends on another plugin.
             * @param module_name The name of the plugin to check.
             * @returns whether the plugin depends on the plugin @module_name.
             */
            has_dependency(module_name: string): boolean;
            /**
             * Check if the plugin is available.
             *
             * A plugin is marked as not available when there is no loader available to
             * load it, or when there has been an error when trying to load it previously.
             * If not available then `error` will be set.
             * @returns %TRUE if the plugin is available.
             */
            is_available(): boolean;
            /**
             * Check if the plugin is a builtin plugin.
             *
             * A builtin plugin is a plugin which cannot be enabled or disabled by the user
             * through a plugin manager (like
             * [PeasGtkPluginManager](https://gnome.pages.gitlab.gnome.org/libpeas/libpeas-gtk-1.0/class.PluginManager.html)).
             * Loading or unloading such plugins is the responsibility of the application
             * alone. Most applications will usually load those plugins immediately after
             * the initialization of the #PeasEngine.
             *
             * The relevant key in the plugin info file is "Builtin".
             * @returns %TRUE if the plugin is a builtin plugin, %FALSE   if not.
             */
            is_builtin(): boolean;
            /**
             * Check if the plugin is a hidden plugin.
             *
             * A hidden plugin is a plugin which cannot be seen by a
             * user through a plugin manager (like
             * [PeasGtkPluginManager](https://gnome.pages.gitlab.gnome.org/libpeas/libpeas-gtk-1.0/class.PluginManager.html)).
             * Loading and
             * unloading such plugins is the responsibility of the application alone or
             * through plugins that depend on them.
             *
             * The relevant key in the plugin info file is "Hidden".
             * @returns %TRUE if the plugin is a hidden plugin, %FALSE   if not.
             */
            is_hidden(): boolean;
            /**
             * Check if the plugin is loaded.
             * @returns %TRUE if the plugin is loaded.
             */
            is_loaded(): boolean;
        }

        module Activatable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                object: GObject.Object;
            }
        }

        export interface ActivatableNamespace {
            $gtype: GObject.GType<Activatable>;
            prototype: Activatable;
        }
        interface Activatable extends GObject.Object {
            // Properties

            /**
             * The object property contains the targetted object for this #PeasActivatable
             * instance.
             *
             * For example a toplevel window in a typical windowed application. It is set
             * at construction time and won't change.
             */
            get object(): GObject.Object;

            // Methods

            /**
             * Activates the extension on the targetted object.
             *
             * On activation, the extension should hook itself to the object
             * where it makes sense.
             */
            activate(): void;
            /**
             * Deactivates the extension on the targetted object.
             *
             * On deactivation, an extension should remove itself from all the hooks it
             * used and should perform any cleanup required, so it can be unreffed safely
             * and without any more effect on the host application.
             */
            deactivate(): void;
            /**
             * Triggers an update of the extension internal state to take into account
             * state changes in the targetted object, due to some event or user action.
             */
            update_state(): void;

            // Virtual methods

            /**
             * Activates the extension on the targetted object.
             *
             * On activation, the extension should hook itself to the object
             * where it makes sense.
             */
            vfunc_activate(): void;
            /**
             * Deactivates the extension on the targetted object.
             *
             * On deactivation, an extension should remove itself from all the hooks it
             * used and should perform any cleanup required, so it can be unreffed safely
             * and without any more effect on the host application.
             */
            vfunc_deactivate(): void;
            /**
             * Triggers an update of the extension internal state to take into account
             * state changes in the targetted object, due to some event or user action.
             */
            vfunc_update_state(): void;
        }

        export const Activatable: ActivatableNamespace & {
            new (): Activatable; // This allows `obj instanceof Activatable`
        };

        type Extension = GObject.Object;
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

    export default Peas;
}

declare module 'gi://Peas' {
    import Peas10 from 'gi://Peas?version=1.0';
    export default Peas10;
}
// END
