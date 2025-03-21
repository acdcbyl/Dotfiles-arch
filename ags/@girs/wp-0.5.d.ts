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

declare module 'gi://Wp?version=0.5' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Wp {
        /**
         * Wp-0.5
         */

        export namespace ConstraintType {
            export const $gtype: GObject.GType<ConstraintType>;
        }

        enum ConstraintType {
            NONE,
            PW_GLOBAL_PROPERTY,
            PW_PROPERTY,
            G_PROPERTY,
        }

        export namespace ConstraintVerb {
            export const $gtype: GObject.GType<ConstraintVerb>;
        }

        enum ConstraintVerb {
            EQUALS,
            NOT_EQUALS,
            IN_LIST,
            IN_RANGE,
            MATCHES,
            IS_PRESENT,
            IS_ABSENT,
        }

        export namespace Direction {
            export const $gtype: GObject.GType<Direction>;
        }

        enum Direction {
            INPUT,
            OUTPUT,
        }

        export namespace LibraryErrorEnum {
            export const $gtype: GObject.GType<LibraryErrorEnum>;
        }

        enum LibraryErrorEnum {
            INVARIANT,
            INVALID_ARGUMENT,
            OPERATION_FAILED,
            SERVICE_UNAVAILABLE,
        }

        export namespace LinkState {
            export const $gtype: GObject.GType<LinkState>;
        }

        enum LinkState {
            ERROR,
            UNLINKED,
            INIT,
            NEGOTIATING,
            ALLOCATING,
            PAUSED,
            ACTIVE,
        }

        export namespace NodeState {
            export const $gtype: GObject.GType<NodeState>;
        }

        enum NodeState {
            ERROR,
            CREATING,
            SUSPENDED,
            IDLE,
            RUNNING,
        }

        export namespace SettingsSpecType {
            export const $gtype: GObject.GType<SettingsSpecType>;
        }

        enum SettingsSpecType {
            UNKNOWN,
            BOOL,
            INT,
            FLOAT,
            STRING,
            ARRAY,
            OBJECT,
        }

        export namespace SiAdapterPortsState {
            export const $gtype: GObject.GType<SiAdapterPortsState>;
        }

        enum SiAdapterPortsState {
            NONE,
            CONFIGURING,
            CONFIGURED,
        }

        export namespace TransitionStep {
            export const $gtype: GObject.GType<TransitionStep>;
        }

        enum TransitionStep {
            NONE,
            ERROR,
            CUSTOM_START,
        }
        const ITERATOR_METHODS_VERSION: number;
        /**
         * A custom GLib log level for trace messages (extension of GLogLevelFlags)
         */
        const LOG_LEVEL_TRACE: number;
        /**
         * Special value that can be used to activate all the supported features in any given object.
         */
        const OBJECT_FEATURES_ALL: ObjectFeatures;
        const OBJECT_FORMAT: string;
        const SETTINGS_PERSISTENT_METADATA_NAME_PREFIX: string;
        const SETTINGS_SCHEMA_METADATA_NAME_PREFIX: string;
        /**
         * Type id representing an invalid SPA type.
         */
        const SPA_TYPE_INVALID: SpaType;
        /**
         * Searches for `filename` in the hierarchy of directories specified by the `flags` parameter.
         *
         *
         * Returns the highest priority file found in the hierarchy of directories specified by the `flags` parameter. The `subdir` parameter is the name of the subdirectory to search in, inside the specified directories. If `subdir` is NULL, the base path of each directory is used.
         * The `filename` parameter is the name of the file to search for. If the file is found, its full path is returned. If the file is not found, NULL is returned. The file is considered found if it is a regular file.
         * If the `filename` is an absolute path, it is tested for existence and returned as is, ignoring the lookup directories in `flags` as well as the `subdir` parameter.
         * @param flags flags to specify the directories to look into and other options specific to the kind of file being looked up
         * @param subdir the name of the subdirectory to search in, inside the specified directories
         * @param filename the name of the file to search for
         * @returns A newly allocated string with the absolute, canonicalized file path, or NULL if the file was not found.
         */
        function base_dirs_find_file(
            flags: BaseDirsFlags | null,
            subdir: string | null,
            filename: string,
        ): string | null;
        /**
         * Creates an iterator to iterate over all files that match `suffix` within the `subdir` of the directories specified in `flags`.
         *
         *
         * The `subdir` parameter is the name of the subdirectory to search in, inside the directories specified by `flags`. If `subdir` is NULL, the base path of each directory is used. If `subdir` is an absolute path, files are only looked up in that directory and the directories in `flags` are ignored.
         * The `suffix` parameter is the filename suffix to match. If `suffix` is NULL, all files are matched.
         * The iterator will iterate over the absolute paths of all the files files found, in the order of priority of the directories, starting from the lowest priority directory (e.g. /usr/share/wireplumber) and ending with the highest priority directory (e.g. $XDG_CONFIG_HOME/wireplumber). Files within each directory are also sorted by filename.
         * @param flags flags to specify the directories to look into and other options specific to the kind of file being looked up
         * @param subdir the name of the subdirectory to search in, inside the configuration directories
         * @param suffix The filename suffix, NULL matches all entries
         * @returns a new iterator iterating over strings which are absolute & canonicalized paths to the files found
         */
        function base_dirs_new_files_iterator(
            flags: BaseDirsFlags | null,
            subdir?: string | null,
            suffix?: string | null,
        ): Iterator;
        function domain_library_quark(): GLib.Quark;
        /**
         * Gets the WirePlumber library API version.
         * @returns WirePlumber library API version
         */
        function get_library_api_version(): string;
        /**
         * Gets the WirePlumber library version.
         * @returns WirePlumber library version
         */
        function get_library_version(): string;
        /**
         * Initializes WirePlumber and PipeWire underneath.
         *
         *
         * `flags` can modify which parts are initialized, in cases where you want to handle part of this initialization externally.
         * @param flags initialization flags
         */
        function init(flags: InitFlags | null): void;
        /**
         * Matches the given properties against a set of rules described in JSON and calls the given callback to perform actions on a successful match.
         *
         *
         * The given JSON should be an array of objects, where each object has a "matches" and an "actions" property. The "matches" value should also be an array of objects, where each object is a set of properties to match. Inside such an object, all properties must match to consider a successful match. However, if multiple objects are provided, only one object needs to match.
         * The "actions" value should be an object where the key is the action name and the value can be any valid JSON. Both the action name and the value are passed as-is on the `callback`.
         * @param json a JSON array containing rules in the described format
         * @param match_props the properties to match against the rules
         * @param callback a function to call for each action on a successful match
         * @returns FALSE if an error occurred, TRUE otherwise
         */
        function json_utils_match_rules(json: SpaJson, match_props: Properties, callback: RuleMatchCallback): boolean;
        /**
         * Matches the given properties against a set of rules described in JSON and updates the properties if the rule actions include the "update-props" action.
         * @param json a JSON array containing rules in the format accepted by wp_json_utils_match_rules()
         * @param props the properties to match against the rules and also update, acting on the "update-props" action
         * @returns the number of properties that were updated
         */
        function json_utils_match_rules_update_properties(json: SpaJson, props: Properties): number;
        /**
         * Merges two JSON containers (objects or arrays) into one.
         *
         *
         * If both `a` and `b` are objects, the result will be a new object containing all properties from both `a` and `b`. If a property exists in both `a` and `b,` the values are recursively merged. If a property exists in both `a` and `b` and the property name starts with the "override." prefix in either of those, the value from the key with the prefix is used.
         * If both `a` and `b` are arrays, the result will be a new array containing all elements from both `a` and `b`.
         * If `a` and `b` are not of the same type, NULL is returned.
         * @param a a JSON container
         * @param b a JSON container
         * @returns a new JSON container containing the merged contents of @a and @b or NULL if @a and @b are not of the same type
         */
        function json_utils_merge_containers(a: SpaJson, b: SpaJson): SpaJson;
        function log_set_level(log_level: string): boolean;
        /**
         * WirePlumber's GLogWriterFunc.
         *
         *
         * This is installed automatically when you call wp_init() with WP_INIT_SET_GLIB_LOG set in the flags
         * @param log_level
         * @param fields
         * @param n_fields
         * @param user_data
         */
        function log_writer_default(
            log_level: GLib.LogLevelFlags | null,
            fields: GLib.LogField,
            n_fields: number,
            user_data?: any | null,
        ): GLib.LogWriterOutput;
        /**
         * Registers an additional WpSpaIdTable in the spa type system.
         *
         *
         * This is useful to add custom enumeration types.
         * Note that both `name` and `values` must be statically allocated, or otherwise guaranteed to be kept in memory until wp_spa_dynamic_type_deinit() is called. No memory copy is done by this function.
         * @param name the name of the id table
         * @param values an array of spa_type_info that contains the values of the table
         * @returns the new table
         */
        function spa_dynamic_id_table_register(name: string, values?: any | null): SpaIdTable;
        /**
         * Deinitializes the spa type registry.
         *
         *
         * You do not need to ever call this, unless you want to free memory at the end of the execution of a test, so that it doesn't show as leaked in the memory profiler.
         */
        function spa_dynamic_type_deinit(): void;
        /**
         * Initializes the spa dynamic type registry.
         *
         *
         * This allows registering new spa types at runtime. The spa type system still works if this function is not called.
         * Normally called by wp_init() when WP_INIT_SPA_TYPES is passed in its flags.
         */
        function spa_dynamic_type_init(): void;
        /**
         * Registers an additional type in the spa type system.
         *
         *
         * This is useful to add a custom pod object type.
         * Note that both `name` and `values` must be statically allocated, or otherwise guaranteed to be kept in memory until wp_spa_dynamic_type_deinit() is called. No memory copy is done by this function.
         * @param name the name of the type
         * @param parent the parent type
         * @param values an array of spa_type_info that contains the values of the type, used only for Object types
         * @returns the new type
         */
        function spa_dynamic_type_register(name: string, parent: SpaType, values?: any | null): SpaType;
        /**
         * Finds a value in an SPA Id table.
         * @param table the id table
         * @param value a numeric value that is contained in the table
         * @returns the WpSpaIdValue associated with @value, or NULL
         */
        function spa_id_table_find_value(table: SpaIdTable, value: number): SpaIdValue | null;
        /**
         * Finds a named value in an SPA Id table.
         * @param table the id table
         * @param name the full name of a value that is contained in the table
         * @returns the WpSpaIdValue associated with @name, or NULL
         */
        function spa_id_table_find_value_from_name(table: SpaIdTable, name: string): SpaIdValue | null;
        /**
         * Finds a short named value in an SPA Id table.
         * @param table the id table
         * @param short_name the short name of a value that is contained in the table
         * @returns the WpSpaIdValue associated with @short_name, or NULL
         */
        function spa_id_table_find_value_from_short_name(table: SpaIdTable, short_name: string): SpaIdValue | null;
        /**
         * Finds a WpSpaIdTable given its name.
         *
         *
         * This name can either be the full type name of an object type, or the name of an enum (which is (!!) a type). For example, "Spa:Pod:Object:Param:Format" and "Spa:Enum:ParamId" are both valid table names.
         * @param name the full name of an id table
         * @returns the associated table, or NULL
         */
        function spa_id_table_from_name(name: string): SpaIdTable | null;
        function spa_id_table_get_type(): GObject.GType;
        /**
         * This function returns an iterator that allows you to iterate through the values associated with this table.
         *
         *
         * The items in the iterator are of type WpSpaIdValue.
         * @param table the id table
         * @returns a WpIterator that iterates over WpSpaIdValue items
         */
        function spa_id_table_new_iterator(table: SpaIdTable): Iterator;
        /**
         * If the value type of `id` is SPA_TYPE_Array, this function returns the type that is allowed to be contained inside the array.
         *
         *
         * When the returned type is (or is derived from) SPA_TYPE_Id or SPA_TYPE_Object, `table` is set to point to the WpSpaIdTable that contains the possible Id values / object fields.
         * @param id an id value
         * @returns the type that is allowed in the array, if @id represents an object field that takes an array as value
         */
        function spa_id_value_array_get_item_type(id: SpaIdValue): [SpaType, SpaIdTable | null];
        /**
         * Looks up an id value (enum, flag or object field) directly from its full name.
         *
         *
         * For instance, "Spa:Enum:Direction:Input" will resolve to the id value that represents "Input" in the "Spa:Enum:Direction" enum.
         * @param name the full name of an id value
         * @returns the id value for @name, or NULL if no such id value was found
         */
        function spa_id_value_from_name(name: string): SpaIdValue;
        /**
         * Looks up an id value given its container `table_name` and its numeric representation, `id`.
         * @param table_name the name of the WpSpaIdTable to look up the value in
         * @param id the numeric representation of the value to look up
         * @returns the id value or NULL if it was not found
         */
        function spa_id_value_from_number(table_name: string, id: number): SpaIdValue;
        /**
         * Looks up an id value given its container `table_name` and its `short_name`.
         * @param table_name the name of the WpSpaIdTable to look up the value in
         * @param short_name the short name of the value to look up
         * @returns the id value or NULL if it was not found
         */
        function spa_id_value_from_short_name(table_name: string, short_name: string): SpaIdValue;
        function spa_id_value_get_type(): GObject.GType;
        /**
         * Returns the value type associated with this WpSpaIdValue.
         *
         *
         * This information is useful when `id` represents an object field, which can take a value of an arbitrary type.
         * When the returned type is (or is derived from) SPA_TYPE_Id or SPA_TYPE_Object, `table` is set to point to the WpSpaIdTable that contains the possible Id values / object fields.
         * @param id an id value
         * @returns the value type associated with @id
         */
        function spa_id_value_get_value_type(id: SpaIdValue): [SpaType, SpaIdTable | null];
        /**
         * Gets the name of an id value.
         * @param id an id value
         * @returns the full name of this id value
         */
        function spa_id_value_name(id: SpaIdValue): string;
        /**
         * Gets the numeric value of an id value.
         * @param id an id value
         * @returns the numeric representation of this id value
         */
        function spa_id_value_number(id: SpaIdValue): number;
        /**
         * Gets the short name of an id value.
         * @param id an id value
         * @returns the short name of this id value
         */
        function spa_id_value_short_name(id: SpaIdValue): string;
        /**
         * Gets WirePlumber's instance of spa_log
         * @returns WirePlumber's instance of spa_log, which can be used to redirect PipeWire's log messages to the currently installed GLogWriterFunc. This is installed automatically when you call wp_init() with WP_INIT_SET_PW_LOG set in the flags
         */
        function spa_log_get_instance(): any | null;
        interface IteratorFoldFunc {
            (item: GObject.Value | any, ret: GObject.Value | any, data?: any | null): boolean;
        }
        interface IteratorForeachFunc {
            (item: GObject.Value | any, data?: any | null): void;
        }
        interface RuleMatchCallback {
            (data: any | null, action: string, value: SpaJson): boolean;
        }
        interface SettingsChangedCallback {
            (obj: Settings, setting: string, value: SpaJson): void;
        }

        export namespace BaseDirsFlags {
            export const $gtype: GObject.GType<BaseDirsFlags>;
        }

        enum BaseDirsFlags {
            ENV_CONFIG,
            ENV_DATA,
            ENV_MODULE,
            XDG_CONFIG_HOME,
            XDG_DATA_HOME,
            XDG_CONFIG_DIRS,
            BUILD_SYSCONFDIR,
            XDG_DATA_DIRS,
            BUILD_DATADIR,
            BUILD_LIBDIR,
            FLAG_MODULE,
            FLAG_SUBDIR_WIREPLUMBER,
            CONFIGURATION,
            DATA,
            MODULE,
        }

        export namespace CoreFeatures {
            export const $gtype: GObject.GType<CoreFeatures>;
        }

        enum CoreFeatures {
            CONNECTED,
            COMPONENTS,
        }

        export namespace InitFlags {
            export const $gtype: GObject.GType<InitFlags>;
        }

        enum InitFlags {
            PIPEWIRE,
            SPA_TYPES,
            SET_PW_LOG,
            SET_GLIB_LOG,
            ALL,
        }

        export namespace InterestMatch {
            export const $gtype: GObject.GType<InterestMatch>;
        }

        enum InterestMatch {
            NONE,
            GTYPE,
            PW_GLOBAL_PROPERTIES,
            PW_PROPERTIES,
            G_PROPERTIES,
            ALL,
        }

        export namespace InterestMatchFlags {
            export const $gtype: GObject.GType<InterestMatchFlags>;
        }

        enum InterestMatchFlags {
            NONE,
            CHECK_ALL,
        }

        export namespace LogTopicFlags {
            export const $gtype: GObject.GType<LogTopicFlags>;
        }

        enum LogTopicFlags {
            LEVEL_MASK,
            FLAG_STATIC,
            FLAG_INITIALIZED,
        }

        export namespace MetadataFeatures {
            export const $gtype: GObject.GType<MetadataFeatures>;
        }

        enum MetadataFeatures {
            DATA,
        }

        export namespace NodeFeatures {
            export const $gtype: GObject.GType<NodeFeatures>;
        }

        enum NodeFeatures {
            PORTS,
        }

        export namespace PluginFeatures {
            export const $gtype: GObject.GType<PluginFeatures>;
        }

        enum PluginFeatures {
            ENABLED,
        }

        export namespace ProxyFeatures {
            export const $gtype: GObject.GType<ProxyFeatures>;
        }

        enum ProxyFeatures {
            PROXY_FEATURE_BOUND,
            PIPEWIRE_OBJECT_FEATURE_INFO,
            PIPEWIRE_OBJECT_FEATURE_PARAM_PROPS,
            PIPEWIRE_OBJECT_FEATURE_PARAM_FORMAT,
            PIPEWIRE_OBJECT_FEATURE_PARAM_PROFILE,
            PIPEWIRE_OBJECT_FEATURE_PARAM_PORT_CONFIG,
            PIPEWIRE_OBJECT_FEATURE_PARAM_ROUTE,
            PIPEWIRE_OBJECT_FEATURES_MINIMAL,
            PIPEWIRE_OBJECT_FEATURES_ALL,
        }

        export namespace SessionItemFeatures {
            export const $gtype: GObject.GType<SessionItemFeatures>;
        }

        enum SessionItemFeatures {
            ACTIVE,
            EXPORTED,
        }

        export namespace SettingsFeatures {
            export const $gtype: GObject.GType<SettingsFeatures>;
        }

        enum SettingsFeatures {
            LOADED,
        }

        export namespace SpaDeviceFeatures {
            export const $gtype: GObject.GType<SpaDeviceFeatures>;
        }

        enum SpaDeviceFeatures {
            ENABLED,
        }
        module AsyncEventHook {
            // Constructor properties interface

            interface ConstructorProps extends InterestEventHook.ConstructorProps {
                execute_step: GObject.Closure;
                executeStep: GObject.Closure;
                get_next_step: GObject.Closure;
                getNextStep: GObject.Closure;
            }
        }

        /**
         * An event hook that runs a WpTransition, implemented with closures.
         */
        class AsyncEventHook extends InterestEventHook {
            static $gtype: GObject.GType<AsyncEventHook>;

            // Properties

            set execute_step(val: GObject.Closure);
            set executeStep(val: GObject.Closure);
            set get_next_step(val: GObject.Closure);
            set getNextStep(val: GObject.Closure);

            // Constructors

            constructor(properties?: Partial<AsyncEventHook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                name: string,
                before: string,
                after: string,
                get_next_step: GObject.Closure,
                execute_step: GObject.Closure,
            ): AsyncEventHook;
        }

        module Client {
            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
        }

        /**
         * The WpClient class allows accessing the properties and methods of a PipeWire client object (struct pw_client). A WpClient is constructed internally when a new client connects to PipeWire and it is made available through the WpObjectManager API.
         */
        class Client extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Client>;

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Send an error to the client.
             * @param id the global id to report the error on
             * @param res an errno style error code
             * @param message the error message string
             */
            send_error(id: number, res: number, message: string): void;
            /**
             * Updates the properties of `self`.
             *
             *
             * This requires W and X permissions on the client.
             * @param updates updates to apply to the properties of @self; this does not need to include properties that have not changed
             */
            update_properties(updates: Properties): void;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module Conf {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
                properties: Properties;
            }
        }

        /**
         * WpConf allows accessing the different sections of the wireplumber configuration.
         */
        class Conf extends GObject.Object {
            static $gtype: GObject.GType<Conf>;

            // Properties

            get name(): string;
            get properties(): Properties;

            // Constructors

            constructor(properties?: Partial<Conf.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, properties?: Properties | null): Conf;

            static new_open(name: string, properties?: Properties | null): Conf;

            // Methods

            /**
             * Closes the configuration file and its fragments.
             */
            close(): void;
            /**
             * Gets the name of the configuration file.
             * @returns the name of the configuration file
             */
            get_name(): string;
            /**
             * This method will get the JSON value of a specific section from the configuration. If the same section is defined in multiple locations, the sections with the same name will be either merged in case of arrays and objects, or overridden in case of boolean, int, double and strings.
             * @param section the section name
             * @returns the JSON value of the section or NULL if the section does not exist
             */
            get_section(section: string): SpaJson | null;
            /**
             * Tests if the configuration files are open.
             * @returns TRUE if the configuration files are open, FALSE otherwise
             */
            is_open(): boolean;
            /**
             * Opens the configuration file and its fragments and keeps them mapped in memory for further access.
             * @returns TRUE on success, FALSE on error
             */
            open(): boolean;
            /**
             * Parses standard pw_context sections from `conf`.
             * @param context the associated pw_context
             */
            parse_pw_context_sections(context?: any | null): void;
            /**
             * Updates the given properties with the values of a specific section from the configuration.
             * @param section the section name
             * @param props the properties to update
             * @returns the number of properties updated
             */
            section_update_props(section: string, props: Properties): number;
        }

        module Core {
            // Signal callback interfaces

            interface Connected {
                (): void;
            }

            interface Disconnected {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                conf: Conf;
                g_main_context: GLib.MainContext;
                gMainContext: GLib.MainContext;
                properties: Properties;
                pw_context: any;
                pwContext: any;
                pw_core: any;
                pwCore: any;
            }
        }

        /**
         * The core is the central object around which everything operates. It is essential to create a WpCore before using any other WirePlumber API.
         * The core object has the following responsibilities:
         *  - it initializes the PipeWire library
         *  - it creates a pw_context and allows connecting to the PipeWire server, creating a local pw_core
         *  - it glues the PipeWire library's event loop system with GMainLoop
         *  - it maintains a list of registered objects, which other classes use to keep objects loaded permanently into memory
         *  - it watches the PipeWire registry and keeps track of remote and local objects that appear in the registry, making them accessible through the WpObjectManager API.
         *
         * The core is also responsible for loading components, which are defined in the main configuration file. Components are loaded when WP_CORE_FEATURE_COMPONENTS is activated.
         * The main configuration file needs to be created and opened before the core is created, using the WpConf API. It is then passed to the core as an argument in the constructor.
         * If a configuration file is not provided, the core will let the underlying pw_context load its own configuration, based on the rules that apply to all pipewire clients (e.g. it respects the PIPEWIRE_CONFIG_NAME environment variable and loads "client.conf" as a last resort).
         * If a configuration file is provided, the core does not let the underlying pw_context load any configuration and instead uses the provided WpConf object.
         */
        class Core extends Object {
            static $gtype: GObject.GType<Core>;

            // Properties

            get conf(): Conf;
            get g_main_context(): GLib.MainContext;
            get gMainContext(): GLib.MainContext;
            get properties(): Properties;
            get pw_context(): any;
            get pwContext(): any;
            get pw_core(): any;
            get pwCore(): any;

            // Constructors

            constructor(properties?: Partial<Core.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context?: GLib.MainContext | null, conf?: Conf | null, properties?: Properties | null): Core;

            // Signals

            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect_after(signal: 'connected', callback: (_source: this) => void): number;
            emit(signal: 'connected'): void;
            connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
            emit(signal: 'disconnected'): void;

            // Methods

            /**
             * Clones a core with the same context as `self`.
             * @returns the clone WpCore
             */
            clone(): Core;
            /**
             * Connects this core to the PipeWire server.
             *
             *
             * When connection succeeds, the WpCore "connected" signal is emitted.
             * @returns TRUE if the core is effectively connected or FALSE if connection failed
             */
            connect(): boolean;
            connect(...args: never[]): any;
            /**
             * Connects this core to the PipeWire server on the given socket.
             *
             *
             * When connection succeeds, the WpCore "connected" signal is emitted.
             * @param fd the connected socket to use, the socket will be closed automatically on disconnect or error
             * @returns TRUE if the core is effectively connected or FALSE if connection failed
             */
            connect_fd(fd: number): boolean;
            /**
             * Disconnects this core from the PipeWire server.
             *
             *
             * This also effectively destroys all WpCore objects that were created through the registry, destroys the pw_core and finally emits the WpCore "disconnected" signal.
             */
            disconnect(): void;
            /**
             * Finds a registered object.
             * @param func a function that takes the object being searched as the first argument and @data as the second. it should return TRUE if the object is found or FALSE otherwise
             * @returns the registered object or NULL if not found
             */
            find_object<T = GObject.Object>(func: GLib.EqualFunc): T;
            /**
             * Gets the main configuration file of the core.
             * @returns the main configuration file
             */
            get_conf(): Conf | null;
            /**
             * Returns the special WpCore that is used to maintain a secondary connection to PipeWire, for exporting objects.
             *
             *
             * The export core is enabled by loading the built-in "export-core" component.
             * @returns the export WpCore
             */
            get_export_core(): Core;
            /**
             * Gets the GMainContext of the core.
             * @returns the GMainContext that is in use by this core for events
             */
            get_g_main_context(): GLib.MainContext | null;
            /**
             * Gets the bound id of the client object that is created as a result of this core being connected to the PipeWire daemon.
             * @returns the bound id of this client
             */
            get_own_bound_id(): number;
            /**
             * Gets the properties of the core.
             * @returns the properties of @self
             */
            get_properties(): Properties;
            /**
             * Gets the internal PipeWire context of the core.
             * @returns the internal pw_context object
             */
            get_pw_context(): any | null;
            /**
             * Gets the internal PipeWire core of the core.
             * @returns the internal pw_core object, or NULL if the core is not connected to PipeWire
             */
            get_pw_core(): any | null;
            /**
             * Gets the cookie of the core's connected PipeWire instance.
             * @returns The cookie of the PipeWire instance that @self is connected to. The cookie is a unique random number for identifying an instance of PipeWire
             */
            get_remote_cookie(): number;
            /**
             * Gets the host name of the core's connected PipeWire instance.
             * @returns The name of the host where the PipeWire instance that @self is connected to is running on
             */
            get_remote_host_name(): string;
            /**
             * Gets the name of the core's connected PipeWire instance.
             * @returns The name of the PipeWire instance that @self is connected to
             */
            get_remote_name(): string;
            /**
             * Gets the properties of the core's connected PipeWire instance.
             * @returns the properties of the PipeWire instance that @self is connected to
             */
            get_remote_properties(): Properties;
            /**
             * Gets the user name of the core's connected PipeWire instance.
             * @returns The name of the user that started the PipeWire instance that @self is connected to
             */
            get_remote_user_name(): string;
            /**
             * Gets the version of the core's connected PipeWire instance.
             * @returns The version of the PipeWire instance that @self is connected to
             */
            get_remote_version(): string;
            /**
             * Gets the virtual machine type of the core.
             * @returns a comma separated string with all the virtual machine types that this core matches, or NULL if the core is not running in a virtual machine.
             */
            get_vm_type(): string | null;
            /**
             * Adds an idle callback to be called in the same GMainContext as the one used by this core.
             *
             *
             * This is essentially the same as g_idle_add_full(), but it adds the created GSource on the GMainContext used by this core instead of the default context.
             * @param _function the function to call
             * @param destroy a function to destroy @data
             */
            idle_add(_function: GLib.SourceFunc, destroy?: GLib.DestroyNotify | null): GLib.Source | null;
            /**
             * Adds an idle callback to be called in the same GMainContext as the one used by this core.
             *
             *
             * This is the same as wp_core_idle_add(), but it allows you to specify a GClosure instead of a C callback.
             * @param closure the closure to invoke
             */
            idle_add_closure(closure: GObject.Closure): GLib.Source | null;
            /**
             * Installs the object manager on this core, activating its internal management engine.
             *
             *
             * This will immediately emit signals about objects added on `om` if objects that the `om` is interested in were in existence already.
             * @param om a WpObjectManager
             */
            install_object_manager(om: ObjectManager): void;
            /**
             * Checks if the core is connected to PipeWire.
             * @returns TRUE if the core is connected to PipeWire, FALSE otherwise
             */
            is_connected(): boolean;
            /**
             * Loads the specified `component` on `self`.
             *
             *
             * The `type` will determine which component loader to use. The following types are built-in and will always work without a component loader:
             *  - "module" - Loads a WirePlumber module
             *  - "array" - Loads multiple components interpreting the `args` as a JSON array with component definitions, as they would appear in the configuration file. When this type is used, `component` is ignored and can be NULL
             * @param component the module name or file name
             * @param type the type of the component
             * @param args additional arguments for the component, expected to be a JSON object
             * @param provides the name of the feature that this component will provide if it loads successfully; this can be queried later with wp_core_test_feature()
             * @param cancellable optional GCancellable
             */
            load_component(
                component: string | null,
                type: string,
                args?: SpaJson | null,
                provides?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Loads the specified `component` on `self`.
             *
             *
             * The `type` will determine which component loader to use. The following types are built-in and will always work without a component loader:
             *  - "module" - Loads a WirePlumber module
             *  - "array" - Loads multiple components interpreting the `args` as a JSON array with component definitions, as they would appear in the configuration file. When this type is used, `component` is ignored and can be NULL
             * @param component the module name or file name
             * @param type the type of the component
             * @param args additional arguments for the component, expected to be a JSON object
             * @param provides the name of the feature that this component will provide if it loads successfully; this can be queried later with wp_core_test_feature()
             * @param cancellable optional GCancellable
             * @param callback the callback to call when the operation is done
             */
            load_component(
                component: string | null,
                type: string,
                args: SpaJson | null,
                provides: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Loads the specified `component` on `self`.
             *
             *
             * The `type` will determine which component loader to use. The following types are built-in and will always work without a component loader:
             *  - "module" - Loads a WirePlumber module
             *  - "array" - Loads multiple components interpreting the `args` as a JSON array with component definitions, as they would appear in the configuration file. When this type is used, `component` is ignored and can be NULL
             * @param component the module name or file name
             * @param type the type of the component
             * @param args additional arguments for the component, expected to be a JSON object
             * @param provides the name of the feature that this component will provide if it loads successfully; this can be queried later with wp_core_test_feature()
             * @param cancellable optional GCancellable
             * @param callback the callback to call when the operation is done
             */
            load_component(
                component: string | null,
                type: string,
                args?: SpaJson | null,
                provides?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started by wp_core_load_component(). This is meant to be called in the callback that was passed to that method.
             * @param res the async result
             * @returns TRUE if the requested component was loaded, FALSE otherwise
             */
            load_component_finish(res: Gio.AsyncResult): boolean;
            /**
             * Registers `obj` with the core, making it appear on WpObjectManager instances as well.
             *
             *
             * The core will also maintain a ref to that object until it is removed.
             * @param obj the object to register
             */
            register_object(obj: GObject.Object): void;
            /**
             * Detaches and unrefs the specified object from this core.
             * @param obj a pointer to the object to remove
             */
            remove_object(obj: GObject.Object): void;
            /**
             * Asks the PipeWire server to call the `callback` via an event.
             *
             *
             * Since methods are handled in-order and events are delivered in-order, this can be used as a barrier to ensure all previous methods and the resulting events have been handled.
             * In both success and error cases, `callback` is always called. Use wp_core_sync_finish() from within the `callback` to determine whether the operation completed successfully or if an error occurred.
             * @param cancellable a GCancellable to cancel the operation
             * @returns TRUE if the sync operation was started, FALSE if an error occurred before returning from this function
             */
            sync(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asks the PipeWire server to call the `callback` via an event.
             *
             *
             * Since methods are handled in-order and events are delivered in-order, this can be used as a barrier to ensure all previous methods and the resulting events have been handled.
             * In both success and error cases, `callback` is always called. Use wp_core_sync_finish() from within the `callback` to determine whether the operation completed successfully or if an error occurred.
             * @param cancellable a GCancellable to cancel the operation
             * @param callback a function to call when the operation is done
             * @returns TRUE if the sync operation was started, FALSE if an error occurred before returning from this function
             */
            sync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asks the PipeWire server to call the `callback` via an event.
             *
             *
             * Since methods are handled in-order and events are delivered in-order, this can be used as a barrier to ensure all previous methods and the resulting events have been handled.
             * In both success and error cases, `callback` is always called. Use wp_core_sync_finish() from within the `callback` to determine whether the operation completed successfully or if an error occurred.
             * @param cancellable a GCancellable to cancel the operation
             * @param callback a function to call when the operation is done
             * @returns TRUE if the sync operation was started, FALSE if an error occurred before returning from this function
             */
            sync(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Asks the PipeWire server to invoke the `closure` via an event.
             *
             *
             * Since methods are handled in-order and events are delivered in-order, this can be used as a barrier to ensure all previous methods and the resulting events have been handled.
             * In both success and error cases, `closure` is always invoked. Use wp_core_sync_finish() from within the `closure` to determine whether the operation completed successfully or if an error occurred.
             * @param cancellable a GCancellable to cancel the operation
             * @param closure a closure to invoke when the operation is done
             * @returns TRUE if the sync operation was started, FALSE if an error occurred before returning from this function
             */
            sync_closure(cancellable: Gio.Cancellable | null, closure: GObject.Closure): boolean;
            /**
             * This function is meant to be called from within the callback of wp_core_sync() in order to determine the success or failure of the operation.
             * @param res a GAsyncResult
             * @returns TRUE if the operation succeeded, FALSE otherwise
             */
            sync_finish(res: Gio.AsyncResult): boolean;
            /**
             * Test if a global feature is provided.
             * @param feature the feature name
             * @returns TRUE if the feature is provided, FALSE otherwise
             */
            test_feature(feature: string): boolean;
            /**
             * Adds a timeout callback to be called at regular intervals in the same GMainContext as the one used by this core.
             *
             *
             * The function is called repeatedly until it returns FALSE, at which point the timeout is automatically destroyed and the function will not be called again. The first call to the function will be at the end of the first interval.
             * This is essentially the same as g_timeout_add_full(), but it adds the created GSource on the GMainContext used by this core instead of the default context.
             * @param timeout_ms the timeout in milliseconds
             * @param _function the function to call
             * @param destroy a function to destroy @data
             */
            timeout_add(
                timeout_ms: number,
                _function: GLib.SourceFunc,
                destroy?: GLib.DestroyNotify | null,
            ): GLib.Source | null;
            /**
             * Adds a timeout callback to be called at regular intervals in the same GMainContext as the one used by this core.
             *
             *
             * This is the same as wp_core_timeout_add(), but it allows you to specify a GClosure instead of a C callback.
             * @param timeout_ms the timeout in milliseconds
             * @param closure the closure to invoke
             */
            timeout_add_closure(timeout_ms: number, closure: GObject.Closure): GLib.Source | null;
            /**
             * Updates the properties of `self` on the connection, making them appear on the client object that represents this connection.
             *
             *
             * If `self` is not connected yet, these properties are stored and passed to pw_context_connect() when connecting.
             * @param updates updates to apply to the properties of @self; this does not need to include properties that have not changed
             */
            update_properties(updates: Properties): void;
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
        }

        /**
         * The WpDevice class allows accessing the properties and methods of a PipeWire device object (struct pw_device).
         * A WpDevice is constructed internally when a new device appears on the PipeWire registry and it is made available through the WpObjectManager API. Alternatively, a WpDevice can also be constructed using wp_device_new_from_factory(), which creates a new device object on the remote PipeWire server by calling into a factory.
         */
        class Device extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Device>;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_factory(core: Core, factory_name: string, properties?: Properties | null): Device;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module EventDispatcher {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * The event dispatcher holds all the events and hooks and dispatches them. It orchestras the show on event stack.
         */
        class EventDispatcher extends GObject.Object {
            static $gtype: GObject.GType<EventDispatcher>;

            // Constructors

            constructor(properties?: Partial<EventDispatcher.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns the event dispatcher instance that is associated with the given core.
             *
             *
             * This method will also create the instance and register it with the core, if it had not been created before.
             * @param core the core
             */
            static get_instance(core: Core): EventDispatcher;

            // Methods

            /**
             * Returns an iterator to iterate over all the registered hooks.
             * @returns a new iterator
             */
            new_hooks_iterator(): Iterator;
            /**
             * Pushes a new event onto the event stack for dispatching only if there are any hooks are available for it.
             * @param event the new event
             */
            push_event(event: Event): void;
            /**
             * Registers an event hook.
             * @param hook the hook to register
             */
            register_hook(hook: EventHook): void;
            /**
             * Unregisters an event hook.
             * @param hook the hook to unregister
             */
            unregister_hook(hook: EventHook): void;
        }

        module EventHook {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                dispatcher: EventDispatcher;
                name: string;
                runs_after_hooks: string[];
                runsAfterHooks: string[];
                runs_before_hooks: string[];
                runsBeforeHooks: string[];
            }
        }

        /**
         * The event hook is a structure that describes some executable action that an event dispatcher will run when a matching event has been received.
         */
        abstract class EventHook extends GObject.Object {
            static $gtype: GObject.GType<EventHook>;

            // Properties

            get dispatcher(): EventDispatcher;
            get name(): string;
            get runs_after_hooks(): string[];
            get runsAfterHooks(): string[];
            get runs_before_hooks(): string[];
            get runsBeforeHooks(): string[];

            // Constructors

            constructor(properties?: Partial<EventHook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Finishes the async operation that was started by wp_event_hook_run()
             * @param res the async operation result
             */
            vfunc_finish(res: Gio.AsyncResult): boolean;
            /**
             * Runs the hook on the given event.
             * @param event the event that triggered the hook
             * @param cancellable a GCancellable to cancel the async operation
             * @param callback a callback to fire after execution of the hook has completed
             */
            vfunc_run(
                event: Event,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Checks if the hook should be executed for a given event.
             * @param event the event
             */
            vfunc_runs_for_event(event: Event): boolean;

            // Methods

            /**
             * Finishes the async operation that was started by wp_event_hook_run()
             * @param res the async operation result
             * @returns FALSE if there was an error, TRUE otherwise
             */
            finish(res: Gio.AsyncResult): boolean;
            /**
             * Returns the name of the hook.
             * @returns the event hook name
             */
            get_name(): string;
            /**
             * Returns the names of the hooks that should run before this hook, or in other words, this hook should run after them.
             * @returns a NULL-terminated array of hook names
             */
            get_runs_after_hooks(): string[];
            /**
             * Returns the names of the hooks that should run after this hook, or in other words, this hook should run before them.
             * @returns a NULL-terminated array of hook names
             */
            get_runs_before_hooks(): string[];
            /**
             * Runs the hook on the given event.
             * @param event the event that triggered the hook
             * @param cancellable a GCancellable to cancel the async operation
             * @param callback a callback to fire after execution of the hook has completed
             */
            run(
                event: Event,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Checks if the hook should be executed for a given event.
             * @param event the event
             * @returns TRUE if the hook should be executed for the given event, FALSE otherwise
             */
            runs_for_event(event: Event): boolean;
        }

        module Factory {
            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
        }

        /**
         * The WpFactory class allows accessing the properties and methods of PipeWire Factory objects (struct pw_factory).
         * A WpFactory is constructed internally by wireplumber, when the pipewire constructed factory objects are reported in by PipeWire registry and it is made available for wireplumber clients through the WpObjectManager API.
         */
        class Factory extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Factory>;

            // Constructors

            constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module FeatureActivationTransition {
            // Constructor properties interface

            interface ConstructorProps extends Transition.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
        }

        /**
         * A WpTransition that is used by WpObject to implement feature activation.
         */
        class FeatureActivationTransition extends Transition implements Gio.AsyncResult {
            static $gtype: GObject.GType<FeatureActivationTransition>;

            // Constructors

            constructor(properties?: Partial<FeatureActivationTransition.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the features requested to be activated in this transition.
             * @returns the features that were requested to be activated in this transition; this contains the features as they were passed in wp_object_activate() and therefore it may contain unsupported or already active features
             */
            get_requested_features(): ObjectFeatures;

            // Inherited methods
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             * @returns a new reference to the source    object for the @res, or `NULL` if there is none.
             */
            get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             * @returns the user data for @res.
             */
            get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             * @returns `TRUE` if @res has the indicated @source_tag, `FALSE` if   not.
             */
            is_tagged(source_tag?: any | null): boolean;
            /**
             * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
             * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
             * `FALSE`.
             *
             * This can be used for legacy error handling in async `*_finish()`
             * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
             * error returns themselves rather than calling into the virtual method.
             * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
             * set by virtual methods should also be extracted by virtual methods,
             * to enable subclasses to chain up correctly.
             * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
             */
            legacy_propagate_error(): boolean;
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             */
            vfunc_is_tagged(source_tag?: any | null): boolean;
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
            // Conflicted with Wp.Transition.get_data
            get_data(...args: never[]): any;
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
            // Conflicted with Wp.Transition.set_data
            set_data(...args: never[]): any;
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

        module GlobalProxy {
            // Constructor properties interface

            interface ConstructorProps extends Proxy.ConstructorProps {
                factory_name: string;
                factoryName: string;
                global_properties: Properties;
                globalProperties: Properties;
                permissions: number;
            }
        }

        /**
         * A proxy that represents a PipeWire global object, i.e. an object that is made available through the PipeWire registry.
         */
        class GlobalProxy extends Proxy {
            static $gtype: GObject.GType<GlobalProxy>;

            // Properties

            set factory_name(val: string);
            set factoryName(val: string);
            get global_properties(): Properties;
            get globalProperties(): Properties;
            get permissions(): number;

            // Constructors

            constructor(properties?: Partial<GlobalProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Binds to the global and creates the underlying pw_proxy.
             *
             *
             * This is mostly meant to be called internally. It will create the pw_proxy and will activate the WP_PROXY_FEATURE_BOUND feature.
             * This may only be called if there is no pw_proxy associated with this object yet.
             * @returns TRUE on success, FALSE if there is no global to bind to
             */
            bind(): boolean;
            /**
             * Gets the global properties of a pipewire global.
             * @returns the global (immutable) properties of this pipewire object
             */
            get_global_properties(): Properties;
            /**
             * Gets the permissions of a pipewire global.
             * @returns the permissions that wireplumber has on this object
             */
            get_permissions(): number;
            /**
             * Requests the PipeWire server to destroy the object represented by this proxy.
             *
             *
             * If the server allows it, the object will be destroyed and the WpProxy's pw-proxy-destroyed signal will be emitted. If the server does not allow it, nothing will happen.
             * This is mostly useful for destroying WpLink objects.
             */
            request_destroy(): void;
        }

        module ImplMetadata {
            // Constructor properties interface

            interface ConstructorProps extends Metadata.ConstructorProps {
                name: string;
                properties: Properties;
            }
        }

        /**
         * Implementation of the metadata object.
         * Activate this object with at least WP_PROXY_FEATURE_BOUND to export it to PipeWire.
         */
        class ImplMetadata extends Metadata {
            static $gtype: GObject.GType<ImplMetadata>;

            // Properties

            get name(): string;
            get properties(): Properties;

            // Constructors

            constructor(properties?: Partial<ImplMetadata.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](core: Core): ImplMetadata;

            static new_full(core: Core, name?: string | null, properties?: Properties | null): ImplMetadata;
        }

        module ImplModule {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                arguments: string;
                core: any;
                name: string;
                properties: Properties;
                pw_impl_module: any;
                pwImplModule: any;
            }
        }

        /**
         * Used to load PipeWire modules within the WirePlumber process. This is slightly different from other objects in that the module is not exported to PipeWire, but it may create an export objects itself.
         */
        class ImplModule extends GObject.Object {
            static $gtype: GObject.GType<ImplModule>;

            // Properties

            get arguments(): string;
            get core(): any;
            get name(): string;
            get properties(): Properties;
            set properties(val: Properties);
            get pw_impl_module(): any;
            get pwImplModule(): any;

            // Constructors

            constructor(properties?: Partial<ImplModule.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Loads a PipeWire module into the WirePlumber process.
             * @param core The WirePlumber core
             * @param name the name of the module to load
             * @param _arguments arguments to be passed to the module
             * @param properties additional properties to be provided to the module
             */
            static load(
                core: Core,
                name: string,
                _arguments?: string | null,
                properties?: Properties | null,
            ): ImplModule | null;
        }

        module ImplNode {
            // Constructor properties interface

            interface ConstructorProps extends Proxy.ConstructorProps, PipewireObject.ConstructorProps {
                pw_impl_node: any;
                pwImplNode: any;
            }
        }

        /**
         * A WpImplNode allows running a node implementation (struct pw_impl_node) locally, loading the implementation from factory or wrapping a manually constructed pw_impl_node. This object can then be exported to PipeWire by requesting WP_PROXY_FEATURE_BOUND.
         */
        class ImplNode extends Proxy implements PipewireObject {
            static $gtype: GObject.GType<ImplNode>;

            // Properties

            get pw_impl_node(): any;
            get pwImplNode(): any;

            // Constructors

            constructor(properties?: Partial<ImplNode.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_pw_factory(core: Core, factory_name: string, properties?: Properties | null): ImplNode;

            static new_wrap(core: Core, node?: any | null): ImplNode;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module InterestEventHook {
            // Constructor properties interface

            interface ConstructorProps extends EventHook.ConstructorProps {}
        }

        /**
         * An event hook that declares interest in specific events. This subclass implements the WpEventHook.runs_for_event() vmethod and returns TRUE from that method if the given event has properties that match one of the declared interests.
         */
        abstract class InterestEventHook extends EventHook {
            static $gtype: GObject.GType<InterestEventHook>;

            // Constructors

            constructor(properties?: Partial<InterestEventHook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            add_interest_full(interest: ObjectInterest): void;
        }

        module Link {
            // Signal callback interfaces

            interface StateChanged {
                (object: LinkState, p0: LinkState): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {
                state: LinkState;
            }
        }

        /**
         * The WpLink class allows accessing the properties and methods of a PipeWire link object (struct pw_link).
         * A WpLink is constructed internally when a new link appears on the PipeWire registry and it is made available through the WpObjectManager API. Alternatively, a WpLink can also be constructed using wp_link_new_from_factory(), which creates a new link object on the remote PipeWire server by calling into a factory.
         */
        class Link extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Link>;

            // Properties

            get state(): LinkState;

            // Constructors

            constructor(properties?: Partial<Link.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_factory(core: Core, factory_name: string, properties?: Properties | null): Link;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'state-changed',
                callback: (_source: this, object: LinkState, p0: LinkState) => void,
            ): number;
            connect_after(
                signal: 'state-changed',
                callback: (_source: this, object: LinkState, p0: LinkState) => void,
            ): number;
            emit(signal: 'state-changed', object: LinkState, p0: LinkState): void;

            // Methods

            /**
             * Retrieves the ids of the objects that are linked by this link.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            get_linked_object_ids(): [number, number, number, number];
            /**
             * Gets the current state of the link.
             * @returns the current state of the link
             */
            get_state(): [LinkState, string];

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module Metadata {
            // Signal callback interfaces

            interface Changed {
                (object: number, p0: string, p1: string, p2: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps {}
        }

        /**
         * The WpMetadata class allows accessing the properties and methods of PipeWire metadata object (struct pw_metadata).
         * A WpMetadata is constructed internally when a new metadata object appears on the PipeWire registry and it is made available through the WpObjectManager API.
         */
        class Metadata extends GlobalProxy {
            static $gtype: GObject.GType<Metadata>;

            // Constructors

            constructor(properties?: Partial<Metadata.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'changed',
                callback: (_source: this, object: number, p0: string, p1: string, p2: string) => void,
            ): number;
            connect_after(
                signal: 'changed',
                callback: (_source: this, object: number, p0: string, p1: string, p2: string) => void,
            ): number;
            emit(signal: 'changed', object: number, p0: string, p1: string, p2: string): void;

            // Methods

            /**
             * Clears permanently all stored metadata.
             */
            clear(): void;
            /**
             * Finds the metadata value given its `subject` and `key`.
             * @param subject the metadata subject id
             * @param key the metadata key name
             * @returns the metadata string value, or NULL if not found.
             */
            find(subject: number, key: string): [string, string];
            /**
             * Iterates over metadata items that matches the given `subject`.
             *
             *
             * If no constraints are specified, the returned iterator iterates over all the stored metadata.
             * Note that this method works on cached metadata. When you change metadata with wp_metadata_set(), this cache will be updated on the next round-trip with the pipewire server.
             * @param subject the metadata subject id, or -1 (PW_ID_ANY)
             * @returns an iterator that iterates over the found metadata. The type of the iterator item is WpMetadataItem.
             */
            new_iterator(subject: number): Iterator;
            /**
             * Sets the metadata associated with the given `subject` and `key`. Use NULL as a value to unset the given `key` and use NULL in both `key` and `value` to remove all metadata associated with the given `subject`.
             * @param subject the subject id for which this metadata property is being set
             * @param key the key to set, or NULL to remove all metadata for @subject
             * @param type the type of the value; NULL is synonymous to "string"
             * @param value the value to set, or NULL to unset the given @key
             */
            set(subject: number, key?: string | null, type?: string | null, value?: string | null): void;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
        }

        module Node {
            // Signal callback interfaces

            interface PortsChanged {
                (): void;
            }

            interface StateChanged {
                (object: NodeState, p0: NodeState): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {
                max_input_ports: number;
                maxInputPorts: number;
                max_output_ports: number;
                maxOutputPorts: number;
                n_input_ports: number;
                nInputPorts: number;
                n_output_ports: number;
                nOutputPorts: number;
                state: NodeState;
            }
        }

        /**
         * The WpNode class allows accessing the properties and methods of a PipeWire node object (struct pw_node).
         * A WpNode is constructed internally when a new node appears on the PipeWire registry and it is made available through the WpObjectManager API. Alternatively, a WpNode can also be constructed using wp_node_new_from_factory(), which creates a new node object on the remote PipeWire server by calling into a factory.
         */
        class Node extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Node>;

            // Properties

            get max_input_ports(): number;
            get maxInputPorts(): number;
            get max_output_ports(): number;
            get maxOutputPorts(): number;
            get n_input_ports(): number;
            get nInputPorts(): number;
            get n_output_ports(): number;
            get nOutputPorts(): number;
            get state(): NodeState;

            // Constructors

            constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_factory(core: Core, factory_name: string, properties?: Properties | null): Node;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'ports-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'ports-changed', callback: (_source: this) => void): number;
            emit(signal: 'ports-changed'): void;
            connect(
                signal: 'state-changed',
                callback: (_source: this, object: NodeState, p0: NodeState) => void,
            ): number;
            connect_after(
                signal: 'state-changed',
                callback: (_source: this, object: NodeState, p0: NodeState) => void,
            ): number;
            emit(signal: 'state-changed', object: NodeState, p0: NodeState): void;

            // Methods

            /**
             * Gets the number of input ports of this node.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the number of input ports of this node, as reported by the node info
             */
            get_n_input_ports(): [number, number];
            /**
             * Gets the number of output ports of this node.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the number of output ports of this node, as reported by the node info
             */
            get_n_output_ports(): [number, number];
            /**
             * Gets the number of ports of this node.
             *
             *
             * Note that this number may not add up to wp_node_get_n_input_ports() + wp_node_get_n_output_ports() because it is discovered by looking at the number of available ports in the registry, however ports may appear there with a delay or may not appear at all if this client does not have permission to read them
             * Requires WP_NODE_FEATURE_PORTS
             * @returns the number of ports of this node.
             */
            get_n_ports(): number;
            /**
             * Gets the current state of the node.
             * @returns the current state of the node
             */
            get_state(): [NodeState, string];
            /**
             * Retrieves the first port that matches the `interest`.
             *
             *
             * Requires WP_NODE_FEATURE_PORTS
             * @param interest the interest
             * @returns the first port that matches the @interest, or NULL if there is no such port
             */
            lookup_port_full(interest: ObjectInterest): Port | null;
            /**
             * Gets a new iterator that iterates over all the ports that belong to this node and match the `interest`.
             *
             *
             * Requires WP_NODE_FEATURE_PORTS
             * @param interest the interest
             * @returns a WpIterator that iterates over WpPort objects
             */
            new_ports_filtered_iterator_full(interest: ObjectInterest): Iterator;
            /**
             * Gets a new iterator that iterates over all the ports that belong to this node.
             *
             *
             * Requires WP_NODE_FEATURE_PORTS
             * @returns a WpIterator that iterates over WpPort objects
             */
            new_ports_iterator(): Iterator;
            /**
             * Sends a command to a node.
             *
             *
             * Valid commands are the short string reprepsentations of enum spa_node_command. For example, "Suspend" or "Flush" are valid commands
             * @param command the command
             */
            send_command(command: string): void;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module Object {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_features: number;
                activeFeatures: number;
                core: Core;
                id: number;
                supported_features: number;
                supportedFeatures: number;
            }
        }

        /**
         * Base class for objects that have activatable features.
         */
        abstract class Object extends GObject.Object {
            static $gtype: GObject.GType<Object>;

            // Properties

            get active_features(): number;
            get activeFeatures(): number;
            get core(): Core;
            get id(): number;
            get supported_features(): number;
            get supportedFeatures(): number;

            // Constructors

            constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_activate_execute_step(
                transition: FeatureActivationTransition,
                step: number,
                missing: ObjectFeatures,
            ): void;
            vfunc_activate_get_next_step(
                transition: FeatureActivationTransition,
                step: number,
                missing: ObjectFeatures,
            ): number;
            /**
             * Deactivates the given `features,` leaving the object in the state it was before they were enabled.
             *
             *
             * This is seldom needed to call manually, but it can be used to save resources if some features are no longer needed.
             * @param features the features to deactivate
             */
            vfunc_deactivate(features: ObjectFeatures): void;
            /**
             * Gets the supported features of this object.
             */
            vfunc_get_supported_features(): ObjectFeatures;

            // Methods

            /**
             * Aborts the current object activation by returning a transition error if any transitions are pending.
             *
             *
             * This is usually used to stop any pending activation if an error happened.
             * @param msg the message used in the transition error
             */
            abort_activation(msg: string): void;
            /**
             * Callback version of wp_object_activate_closure()
             * @param features the features to enable
             * @param cancellable a cancellable for the async operation
             */
            activate(features: ObjectFeatures, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Callback version of wp_object_activate_closure()
             * @param features the features to enable
             * @param cancellable a cancellable for the async operation
             * @param callback a function to call when activation is complete
             */
            activate(
                features: ObjectFeatures,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Callback version of wp_object_activate_closure()
             * @param features the features to enable
             * @param cancellable a cancellable for the async operation
             * @param callback a function to call when activation is complete
             */
            activate(
                features: ObjectFeatures,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Activates the requested `features` and invokes `closure` when this is done. `features` may contain unsupported or already active features. The operation will filter them and activate only ones that are supported and inactive.
             *
             *
             * If multiple calls to this method is done, the operations will be executed one after the other to ensure features only get activated once.
             * `closure` may be invoked in sync while this method is being called, if there are no features to activate.
             * @param features the features to enable
             * @param cancellable a cancellable for the async operation
             * @param closure the closure to use when activation is completed
             */
            activate_closure(
                features: ObjectFeatures,
                cancellable: Gio.Cancellable | null,
                closure: GObject.Closure,
            ): void;
            /**
             * Finishes the async operation that was started with wp_object_activate()
             * @param res the async operation result
             * @returns TRUE if the requested features were activated, FALSE if there was an error
             */
            activate_finish(res: Gio.AsyncResult): boolean;
            /**
             * Deactivates the given `features,` leaving the object in the state it was before they were enabled.
             *
             *
             * This is seldom needed to call manually, but it can be used to save resources if some features are no longer needed.
             * @param features the features to deactivate
             */
            deactivate(features: ObjectFeatures): void;
            /**
             * Gets the active features of this object.
             * @returns A bitset containing the active features of this object
             */
            get_active_features(): ObjectFeatures;
            /**
             * Gets the core associated with this object.
             * @returns the core associated with this object
             */
            get_core(): Core;
            /**
             * Gets the unique wireplumber Id of this object.
             */
            get_id(): number;
            /**
             * Gets the supported features of this object.
             * @returns A bitset containing the supported features of this object; note that supported features may change at runtime
             */
            get_supported_features(): ObjectFeatures;
            /**
             * Checks if the given features are active on this object.
             * @param features the features to check
             * @returns TRUE if all the given features are active on this object
             */
            test_active_features(features: ObjectFeatures): boolean;
            /**
             * Checks if the given features are supported on this object.
             * @param features the features to check
             * @returns TRUE if all the given features are supported on this object
             */
            test_supported_features(features: ObjectFeatures): boolean;
            /**
             * Allows subclasses to update the currently active features.
             *
             *
             * `activated` should contain new features and `deactivated` should contain features that were just deactivated. Calling this method also advances the activation transitions.
             * Private method to be called by subclasses only.
             * @param activated the features that were activated, or 0
             * @param deactivated the features that were deactivated, or 0
             */
            update_features(activated: ObjectFeatures, deactivated: ObjectFeatures): void;
        }

        module ObjectManager {
            // Signal callback interfaces

            interface Installed {
                (): void;
            }

            interface ObjectAdded {
                (object: GObject.Object): void;
            }

            interface ObjectRemoved {
                (object: GObject.Object): void;
            }

            interface ObjectsChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                core: Core;
            }
        }

        /**
         * The WpObjectManager class provides a way to collect a set of objects and be notified when objects that fulfill a certain set of criteria are created or destroyed.
         * There are 4 kinds of objects that can be managed by a WpObjectManager:
         *  - remote PipeWire global objects that are advertised on the registry; these are bound locally to subclasses of WpGlobalProxy
         *  - remote PipeWire global objects that are created by calling a remote factory through the WirePlumber API; these are very similar to other global objects but it should be noted that the same WpGlobalProxy instance that created them appears in the WpObjectManager (as soon as its WP_PROXY_FEATURE_BOUND is enabled)
         *  - local PipeWire objects that are being exported to PipeWire (WpImplMetadata, WpImplNode, etc); these appear in the WpObjectManager as soon as they are exported (so, when their WP_PROXY_FEATURE_BOUND is enabled)
         *  - WirePlumber-specific objects, such as plugins, factories and session items
         *
         * To start an object manager, you first need to declare interest in a certain kind of object by calling wp_object_manager_add_interest() and then install it on the WpCore with wp_core_install_object_manager().
         * Upon installing a WpObjectManager on a WpCore, any pre-existing objects that match the interests of this WpObjectManager will immediately become available to get through wp_object_manager_new_iterator() and the WpObjectManager object-added signal will be emitted for all of them. However, note that if these objects need to be prepared (to activate some features on them), the emission of object-added will be delayed. To know when it is safe to access the initial set of objects, wait until the installed signal has been emitted. That signal is emitted asynchronously after all the initial objects have been prepared.
         */
        class ObjectManager extends GObject.Object {
            static $gtype: GObject.GType<ObjectManager>;

            // Properties

            get core(): Core;

            // Constructors

            constructor(properties?: Partial<ObjectManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ObjectManager;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'installed', callback: (_source: this) => void): number;
            connect_after(signal: 'installed', callback: (_source: this) => void): number;
            emit(signal: 'installed'): void;
            connect(signal: 'object-added', callback: (_source: this, object: GObject.Object) => void): number;
            connect_after(signal: 'object-added', callback: (_source: this, object: GObject.Object) => void): number;
            emit(signal: 'object-added', object: GObject.Object): void;
            connect(signal: 'object-removed', callback: (_source: this, object: GObject.Object) => void): number;
            connect_after(signal: 'object-removed', callback: (_source: this, object: GObject.Object) => void): number;
            emit(signal: 'object-removed', object: GObject.Object): void;
            connect(signal: 'objects-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'objects-changed', callback: (_source: this) => void): number;
            emit(signal: 'objects-changed'): void;

            // Methods

            /**
             * Declares interest in a certain kind of object.
             *
             *
             * Interest consists of a GType that the object must be an ancestor of (g_type_is_a() must match) and optionally, a set of additional constraints on certain properties of the object. Refer to WpObjectInterest for more details.
             * @param interest the interest
             */
            add_interest_full(interest: ObjectInterest): void;
            /**
             * Gets the number of objects managed by the object manager.
             * @returns the number of objects managed by this WpObjectManager
             */
            get_n_objects(): number;
            /**
             * Checks if an object manager is installed.
             * @returns TRUE if the object manager is installed (i.e. the WpObjectManager installed signal has been emitted), FALSE otherwise
             */
            is_installed(): boolean;
            /**
             * Searches for an object that matches the specified `interest` and returns it, if found.
             *
             *
             * If more than one objects match, only the first one is returned. To find multiple objects that match certain criteria, wp_object_manager_new_filtered_iterator() is more suitable.
             * @param interest the interst
             * @returns the first managed object that matches the lookup interest, or NULL if no object matches
             */
            lookup_full<T = GObject.Object>(interest: ObjectInterest): T;
            /**
             * Iterates through all the objects managed by this object manager that match the specified `interest`.
             * @param interest the interest
             * @returns a WpIterator that iterates over all the matching objects of this object manager
             */
            new_filtered_iterator_full(interest: ObjectInterest): Iterator;
            /**
             * Iterates through all the objects managed by this object manager.
             * @returns a WpIterator that iterates over all the managed objects of this object manager
             */
            new_iterator(): Iterator;
            /**
             * Requests the object manager to automatically prepare the `wanted_features` on any managed object that is of the specified `object_type`.
             *
             *
             * These features will always be prepared before the object appears on the object manager.
             * @param object_type the WpProxy descendant type
             * @param wanted_features the features to enable on this kind of object
             */
            request_object_features(object_type: GObject.GType, wanted_features: ObjectFeatures): void;
        }

        module Plugin {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                name: string;
            }
        }

        /**
         * WpPlugin is a base class for objects that provide functionality to the WirePlumber daemon.
         * Typically, a plugin is created within a module and then registered to make it available for use by the daemon. The daemon is responsible for calling wp_object_activate() on it after all modules have been loaded, the core is connected and the initial discovery of global objects is done.
         * Being a WpObject subclass, the plugin inherits WpObject's activation system. For most implementations, there is only need for activating one feature, WP_PLUGIN_FEATURE_ENABLED, and this can be done by implementing only WpPluginClass::enable() and WpPluginClass::disable(). For more advanced plugins that need to have more features, you may implement directly the functions of WpObjectClass and ignore the ones of WpPluginClass.
         */
        abstract class Plugin extends Object {
            static $gtype: GObject.GType<Plugin>;

            // Properties

            get name(): string;

            // Constructors

            constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Looks up a plugin.
             * @param core the core
             * @param plugin_name the lookup name
             */
            static find(core: Core, plugin_name: string): Plugin | null;

            // Virtual methods

            vfunc_disable(): void;
            vfunc_enable(transition: Transition): void;

            // Methods

            /**
             * Retreives the name of a plugin.
             * @returns the name of this plugin
             */
            get_name(): string;
        }

        module Port {
            // Constructor properties interface

            interface ConstructorProps extends GlobalProxy.ConstructorProps, PipewireObject.ConstructorProps {}
        }

        /**
         * The WpPort class allows accessing the properties and methods of a PipeWire port object (struct pw_port).
         * A WpPort is constructed internally when a new port appears on the PipeWire registry and it is made available through the WpObjectManager API.
         */
        class Port extends GlobalProxy implements PipewireObject {
            static $gtype: GObject.GType<Port>;

            // Constructors

            constructor(properties?: Partial<Port.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the current direction of the port.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the current direction of the port
             */
            get_direction(): Direction;

            // Inherited properties
            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;
            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Inherited methods
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;
        }

        module Proxy {
            // Signal callback interfaces

            interface Bound {
                (object: number): void;
            }

            interface Error {
                (object: number, p0: number, p1: string): void;
            }

            interface PwProxyCreated {
                (object?: any | null): void;
            }

            interface PwProxyDestroyed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                bound_id: number;
                boundId: number;
                pw_proxy: any;
                pwProxy: any;
            }
        }

        /**
         * Base class for all objects that expose PipeWire objects using pw_proxy underneath.
         * This base class cannot be instantiated. It provides handling of pw_proxy's events and exposes common functionality.
         */
        abstract class Proxy extends Object {
            static $gtype: GObject.GType<Proxy>;

            // Properties

            get bound_id(): number;
            get boundId(): number;
            get pw_proxy(): any;
            get pwProxy(): any;

            // Constructors

            constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'bound', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'bound', callback: (_source: this, object: number) => void): number;
            emit(signal: 'bound', object: number): void;
            connect(signal: 'error', callback: (_source: this, object: number, p0: number, p1: string) => void): number;
            connect_after(
                signal: 'error',
                callback: (_source: this, object: number, p0: number, p1: string) => void,
            ): number;
            emit(signal: 'error', object: number, p0: number, p1: string): void;
            connect(signal: 'pw-proxy-created', callback: (_source: this, object: any | null) => void): number;
            connect_after(signal: 'pw-proxy-created', callback: (_source: this, object: any | null) => void): number;
            emit(signal: 'pw-proxy-created', object?: any | null): void;
            connect(signal: 'pw-proxy-destroyed', callback: (_source: this) => void): number;
            connect_after(signal: 'pw-proxy-destroyed', callback: (_source: this) => void): number;
            emit(signal: 'pw-proxy-destroyed'): void;

            // Virtual methods

            vfunc_bound(id: number): void;
            vfunc_error(seq: number, res: number, message: string): void;
            vfunc_pw_proxy_created(proxy?: any | null): void;
            vfunc_pw_proxy_destroyed(): void;

            // Methods

            /**
             * Returns the proxy bound id.
             *
             *
             * The bound id is the id that this object has on the PipeWire registry (a.k.a. the global id). The object must have the WP_PROXY_FEATURE_BOUND feature before this method can be called.
             * Requires WP_PROXY_FEATURE_BOUND
             * @returns the bound id of this object
             */
            get_bound_id(): number;
            /**
             * Gets the interface type of the proxied object.
             * @returns the PipeWire type of the interface that is being proxied
             */
            get_interface_type(): [string, number];
            /**
             * Gets the pw_proxy wrapped by this proxy object.
             * @returns a pointer to the underlying pw_proxy object
             */
            get_pw_proxy(): any | null;
            /**
             * Private method to be used by subclasses to set the pw_proxy pointer when it is available.
             *
             *
             * This can be called only if there is no pw_proxy already set. Takes ownership of `proxy`.
             * @param proxy
             */
            set_pw_proxy(proxy?: any | null): void;
        }

        module SessionItem {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                properties: Properties;
            }
        }

        /**
         * Session items are high level objects that wrap underlying PipeWire objects and manage them. For example, a session item may be managing a node, taking responsibility for configuring the PortConfig and Format parameters of the node. Or another may be managing links between two nodes.
         * All the implementations are provided by modules and instantiated via the WpSiFactory class.
         */
        abstract class SessionItem extends Object {
            static $gtype: GObject.GType<SessionItem>;

            // Properties

            get properties(): Properties;

            // Constructors

            constructor(properties?: Partial<SessionItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Helper callback for sub-classes that deffers and unexports the session item.
             *
             *
             * Only meant to be used when the pipewire proxy destroyed signal is triggered.
             * @param proxy the proxy that was destroyed by the server
             * @param item the associated session item
             */
            static handle_proxy_destroyed(proxy: Proxy, item: SessionItem): void;
            /**
             * Finds the factory associated with the given `name` from the `core` and uses it to construct a new WpSessionItem.
             * @param core the WpCore
             * @param factory_name the name of the factory to be used for constructing the object
             */
            static make(core: Core, factory_name: string): SessionItem | null;

            // Virtual methods

            /**
             * Configures the session item with a set of properties.
             * @param props the properties used to configure the item
             */
            vfunc_configure(props: Properties): boolean;
            vfunc_disable_active(): void;
            vfunc_disable_exported(): void;
            vfunc_enable_active(transition: Transition): void;
            vfunc_enable_exported(transition: Transition): void;
            vfunc_get_associated_proxy(proxy_type: GObject.GType): any | null;
            /**
             * Resets the session item.
             *
             *
             * This essentially removes the configuration and deactivates all active features.
             */
            vfunc_reset(): void;

            // Methods

            /**
             * Configures the session item with a set of properties.
             * @param props the properties used to configure the item
             * @returns TRUE on success, FALSE if the item could not be configured
             */
            configure(props: Properties): boolean;
            /**
             * An associated proxy is a WpProxy subclass instance that is somehow related to this item.
             * @param proxy_type a WpProxy subclass GType
             * @returns the associated proxy of the specified @proxy_type, or NULL if there is no association to such a proxy
             */
            get_associated_proxy(proxy_type: GObject.GType): Proxy | null;
            /**
             * Gets the bound id of a proxy associated with the session item.
             * @param proxy_type a WpProxy subclass GType
             * @returns the bound id of the associated proxy of the specified @proxy_type, or SPA_ID_INVALID if there is no association to such a proxy
             */
            get_associated_proxy_id(proxy_type: GObject.GType): number;
            /**
             * Gets the properties of a session item.
             * @returns the item's properties.
             */
            get_properties(): Properties;
            /**
             * Looks up a named session item property value for a given key.
             * @param key the property key
             * @returns the item property value for the given key.
             */
            get_property(key: string): string;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Checks if the session item is configured.
             * @returns TRUE if the item is configured, FALSE otherwise
             */
            is_configured(): boolean;
            /**
             * Registers the session item to its associated core.
             */
            register(): void;
            /**
             * Removes the session item from its associated core.
             */
            remove(): void;
            /**
             * Resets the session item.
             *
             *
             * This essentially removes the configuration and deactivates all active features.
             */
            reset(): void;
            /**
             * Sets the item's properties.
             *
             *
             * This should only be done by sub-classes after the configuration has been done.
             * @param props the new properties to set
             */
            set_properties(props: Properties): void;
        }

        module Settings {
            // Constructor properties interface

            interface ConstructorProps extends Object.ConstructorProps {
                metadata_name: string;
                metadataName: string;
            }
        }

        /**
         * WpSettings loads and parses the "sm-settings" (default value) metadata, which contains wireplumber settings, and provides APIs to its clients (modules, lua scripts etc) to access them.
         * Being a WpObject subclass, the settings inherits WpObject's activation system.
         */
        class Settings extends Object {
            static $gtype: GObject.GType<Settings>;

            // Properties

            get metadata_name(): string;
            get metadataName(): string;

            // Constructors

            constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](core: Core, metadata_name?: string | null): Settings;

            // Static methods

            /**
             * Finds a registered WpSettings object by its metadata name.
             * @param core the WpCore
             * @param metadata_name the name of the metadata object that the settings object is associated with; NULL returns the first settings object that is found
             */
            static find(core: Core, metadata_name?: string | null): Settings | null;

            // Methods

            /**
             * Deletes a saved setting to not make it persistent after reboot.
             * @param name the name of the saved setting to be deleted
             * @returns TRUE if the setting could be deleted, FALSE otherwise
             */
            ['delete'](name: string): boolean;
            /**
             * Deletes all saved setting to not make them persistent after reboot.
             */
            delete_all(): void;
            /**
             * Gets the WpSpaJson value of a setting.
             * @param name the name of the setting
             * @returns The WpSpaJson value of the setting, or NULL if the setting does not exist
             */
            get(name: string): SpaJson | null;
            /**
             * Gets the WpSpaJson saved value of a setting.
             * @param name the name of the setting
             * @returns The WpSpaJson saved value of the setting, or NULL if the setting does not exist
             */
            get_saved(name: string): SpaJson | null;
            /**
             * Gets the specification of a setting.
             * @param name the name of the setting
             * @returns the specification of the setting
             */
            get_spec(name: string): SettingsSpec | null;
            /**
             * Iterates over settings.
             * @returns an iterator that iterates over the settings.
             */
            new_iterator(): Iterator;
            /**
             * Resets the setting to its default value.
             * @param name the name of the setting to reset
             * @returns TRUE if the setting could be reset, FALSE otherwise
             */
            reset(name: string): boolean;
            /**
             * Resets all the settings to their default value.
             */
            reset_all(): void;
            /**
             * Saves a setting to make it persistent after reboot.
             * @param name the name of the setting to be saved
             * @returns TRUE if the setting could be saved, FALSE otherwise
             */
            save(name: string): boolean;
            /**
             * Saves all the settings to make them persistent after reboot.
             */
            save_all(): void;
            /**
             * Sets a new setting value.
             * @param name the name of the setting
             * @param value the JSON value of the setting
             * @returns TRUE if the setting could be set, FALSE otherwise
             */
            set(name: string, value: SpaJson): boolean;
            // Conflicted with GObject.Object.set
            set(...args: never[]): any;
            /**
             * Subscribes callback for a given setting pattern(a glob-style pattern matched using g_pattern_match_simple), this allows clients to look for any changes made in settings through metadata.
             * @param pattern name of the pattern to match the settings with
             * @param callback the callback triggered when the settings change.
             * @returns the subscription ID (always greater than 0 for successful subscriptions)
             */
            subscribe(pattern: string, callback: SettingsChangedCallback): never;
            /**
             * Subscribes callback for a given setting pattern(a glob-style pattern matched using g_pattern_match_simple), this allows clients to look for any changes made in settings through metadata.
             * @param pattern name of the pattern to match the settings with
             * @param closure a GAsyncReadyCallback wrapped in a GClosure
             * @returns the subscription ID (always greater than 0 for success)
             */
            subscribe_closure(pattern: string, closure?: GObject.Closure | null): never;
            /**
             * Unsubscribes callback for a given subscription_id.
             * @param subscription_id identifies the callback
             * @returns TRUE if success, FALSE otherwise
             */
            unsubscribe(subscription_id: never): boolean;
        }

        module SiFactory {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
            }
        }

        /**
         * A factory for session items.
         * The most simple way to register a new item implementation would be:
         *
         * ```c
         *   wp_si_factory_register (core,
         *      wp_si_factory_new_simple (
         * ```
         *
         * And the most simple way to construct an item from a registered factory:
         *
         * ```c
         *   item = wp_session_item_make (core,
         * ```
         *
         */
        abstract class SiFactory extends GObject.Object {
            static $gtype: GObject.GType<SiFactory>;

            // Properties

            get name(): string;

            // Constructors

            constructor(properties?: Partial<SiFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_simple(factory_name: string, si_type: GObject.GType): SiFactory;

            // Static methods

            /**
             * Looks up a factory matching a name.
             * @param core the core
             * @param factory_name the lookup name
             */
            static find(core: Core, factory_name: string): SiFactory | null;

            // Virtual methods

            /**
             * Creates a new instance of the session item that is constructed by this factory.
             * @param core the core
             */
            vfunc_construct(core: Core): SessionItem;

            // Methods

            /**
             * Creates a new instance of the session item that is constructed by this factory.
             * @param core the core
             * @returns a new session item instance
             */
            construct(core: Core): SessionItem;
            /**
             * Gets the name of the factory.
             * @returns the factory name
             */
            get_name(): string;
        }

        module SimpleEventHook {
            // Constructor properties interface

            interface ConstructorProps extends InterestEventHook.ConstructorProps {
                closure: GObject.Closure;
            }
        }

        /**
         * An event hook that runs a GClosure, synchronously.
         */
        class SimpleEventHook extends InterestEventHook {
            static $gtype: GObject.GType<SimpleEventHook>;

            // Properties

            set closure(val: GObject.Closure);

            // Constructors

            constructor(properties?: Partial<SimpleEventHook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string, before: string, after: string, closure: GObject.Closure): SimpleEventHook;
        }

        module SpaDevice {
            // Signal callback interfaces

            interface CreateObject {
                (object: number, p0: string, p1: string, p2: Properties): void;
            }

            interface ObjectRemoved {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Proxy.ConstructorProps {
                properties: Properties;
                spa_device_handle: any;
                spaDeviceHandle: any;
            }
        }

        /**
         * A WpSpaDevice allows running a spa_device object locally, loading the implementation from a SPA factory. This is useful to run device monitors inside the session manager and have control over creating the actual nodes that the spa_device requests to create.
         * To enable the spa device, call wp_object_activate() requesting WP_SPA_DEVICE_FEATURE_ENABLED.
         * For actual devices (not device monitors) it also possible and desirable to export the device to PipeWire, which can be done by requesting WP_PROXY_FEATURE_BOUND from wp_object_activate(). When exporting, the export should be done before enabling the device, by requesting both features at the same time.
         */
        class SpaDevice extends Proxy {
            static $gtype: GObject.GType<SpaDevice>;

            // Properties

            get properties(): Properties;
            get spa_device_handle(): any;
            get spaDeviceHandle(): any;

            // Constructors

            constructor(properties?: Partial<SpaDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_spa_factory(core: Core, factory_name: string, properties?: Properties | null): SpaDevice;

            static new_wrap(core: Core, spa_device_handle?: any | null, properties?: Properties | null): SpaDevice;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'create-object',
                callback: (_source: this, object: number, p0: string, p1: string, p2: Properties) => void,
            ): number;
            connect_after(
                signal: 'create-object',
                callback: (_source: this, object: number, p0: string, p1: string, p2: Properties) => void,
            ): number;
            emit(signal: 'create-object', object: number, p0: string, p1: string, p2: Properties): void;
            connect(signal: 'object-removed', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'object-removed', callback: (_source: this, object: number) => void): number;
            emit(signal: 'object-removed', object: number): void;

            // Methods

            /**
             * Gets one of the objects managed by this device.
             * @param id the (device-internal) id of the object to get
             * @returns the managed object associated with @id
             */
            get_managed_object<T = GObject.Object>(id: number): T;
            /**
             * Gets the properties of this device.
             * @returns the device properties
             */
            get_properties(): Properties;
            /**
             * Iterates through all the objects managed by this device.
             * @returns a WpIterator that iterates over all the objects managed by this device
             */
            new_managed_object_iterator(): Iterator;
            /**
             * Stores or removes a managed object into/from a device.
             * @param id the (device-internal) id of the object
             * @param object the object to store or NULL to remove the managed object associated with @id
             */
            store_managed_object(id: number, object?: GObject.Object | null): void;
        }

        class SpaType {
            static $gtype: GObject.GType<SpaType>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Looks up the type id from a given type name.
             * @param name the name to look up
             */
            static from_name(name: string): SpaType;

            // Methods

            /**
             * Gets the table with the values that can be stored in the special "id" field of an object of the given `type`.
             *
             *
             * Object pods (see WpSpaPod) always have a special "id" field along with other fields that can be defined. This "id" field can only store values of a specific SPA_TYPE_Id type. This function returns the table that contains the possible values for that field.
             * @returns the table with the values that can be stored in the special "id" field of an object of the given @type
             */
            get_object_id_values_table(): SpaIdTable;
            /**
             * Gets the values table of an SPA type.
             * @returns the associated WpSpaIdTable that contains possible values or object fields for this type, or NULL
             */
            get_values_table(): SpaIdTable;
            /**
             * Checks if an SPA type is a fundamental type.
             * @returns TRUE if the @type has no parent, FALSE otherwise
             */
            is_fundamental(): boolean;
            /**
             * Checks if an SPA type is an Id type.
             * @returns TRUE if the @type is a SPA_TYPE_Id, FALSE otherwise
             */
            is_id(): boolean;
            /**
             * Checks if an SPA type is an Object type.
             * @returns TRUE if the @type is a SPA_TYPE_Object, FALSE otherwise
             */
            is_object(): boolean;
            /**
             * Gets the name of an SPA type.
             * @returns the complete name of the given @type or NULL if @type is invalid
             */
            name(): string;
            /**
             * Gets the parent type of an SPA type.
             * @returns the direct parent type of the given @type; if the type is fundamental (i.e. has no parent), the returned type is the same as @type
             */
            parent(): SpaType;
        }

        module State {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
                timeout: number;
            }
        }

        /**
         * The WpState class saves and loads properties from a file
         */
        class State extends GObject.Object {
            static $gtype: GObject.GType<State>;

            // Properties

            get name(): string;
            get timeout(): number;
            set timeout(val: number);

            // Constructors

            constructor(properties?: Partial<State.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string): State;

            // Methods

            /**
             * Clears the state removing its file.
             */
            clear(): void;
            /**
             * Gets the location of a state object.
             * @returns the location of this state
             */
            get_location(): string;
            /**
             * Gets the name of a state object.
             * @returns the name of this state
             */
            get_name(): string;
            /**
             * Loads the state data from the file system.
             *
             *
             * This function will never fail. If it cannot load the state, for any reason, it will simply return an empty WpProperties, behaving as if there was no previous state stored.
             * @returns a new WpProperties containing the state data
             */
            load(): Properties;
            /**
             * Saves new properties in the state, overwriting all previous data.
             * @param props the properties to save
             * @returns TRUE if the properties could be saved, FALSE otherwise
             */
            save(props: Properties): boolean;
            /**
             * Saves new properties in the state, overwriting all previous data, after a timeout.
             *
             *
             * This is similar to wp_state_save() but it will save the state after a timeout has elapsed. If the state is saved again before the timeout elapses, the timeout is reset.
             * This function is useful to avoid saving the state too often. When called consecutively, it will save the state only once. Every time it is called, it will cancel the previous timer and start a new one, resulting in timing out only after the last call.
             * @param core the core, used to add the timeout callback to the main loop
             * @param props the properties to save. This object will be referenced and kept alive until the timeout elapses, but not deep copied.
             */
            save_after_timeout(core: Core, props: Properties): void;
        }

        module Transition {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {
                completed: boolean;
            }
        }

        /**
         * A transition is an asynchronous operation, like GTask, that contains an internal state machine, where a series of 'steps' are executed in order to complete the operation.
         * For every step, _WpTransitionClass::get_next_step() is called in order to determine the next step to execute. Afterwards, _WpTransitionClass::execute_step() is called to perform any actions necessary to complete this step. When execution of the step is done, the operation's code must call wp_transition_advance() in order to continue to the next step. If an error occurs, the operation's code must call wp_transition_return_error() instead, in which case the transition completes immediately and wp_transition_had_error() returns TRUE.
         * Typically, every step will start an asynchronous operation. Although it is possible, the WpTransition base class does not expect _WpTransitionClass::execute_step() to call wp_transition_advance() directly. Instead, it is expected that wp_transition_advance() will be called from the callback that the step's asynchronous operation will call when it is completed.
         */
        abstract class Transition extends GObject.Object implements Gio.AsyncResult {
            static $gtype: GObject.GType<Transition>;

            // Properties

            get completed(): boolean;

            // Constructors

            constructor(properties?: Partial<Transition.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                type: GObject.GType,
                source_object?: GObject.Object | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback | null,
            ): Transition;

            static new_closure(
                type: GObject.GType,
                source_object?: GObject.Object | null,
                cancellable?: Gio.Cancellable | null,
                closure?: GObject.Closure | null,
            ): Transition;

            // Static methods

            /**
             * Returns the final return status of the transition and its error, if there was one.
             *
             *
             * This is meant to be called from within the GAsyncReadyCallback that was specified in wp_transition_new().
             * @param res a transition, as a GAsyncResult
             */
            static finish(res: Gio.AsyncResult): boolean;

            // Virtual methods

            vfunc_execute_step(step: number): void;
            vfunc_get_next_step(step: number): number;

            // Methods

            /**
             * Advances the transition to the next step.
             *
             *
             * This initially calls _WpTransitionClass::get_next_step() in order to determine what the next step is. If _WpTransitionClass::get_next_step() returns a step different than the previous one, it calls _WpTransitionClass::execute_step() to execute it.
             * The very first time that _WpTransitionClass::get_next_step() is called, its `step` parameter equals WP_TRANSITION_STEP_NONE.
             * When _WpTransitionClass::get_next_step() returns WP_TRANSITION_STEP_NONE this function completes the transition, calling the transition's callback and then unref-ing the transition.
             * When _WpTransitionClass::get_next_step() returns WP_TRANSITION_STEP_ERROR, this function calls wp_transition_return_error(), unless it has already been called directly by _WpTransitionClass::get_next_step().
             * In error conditions, _WpTransitionClass::execute_step() is called once with `step` being WP_TRANSITION_STEP_ERROR, allowing the implementation to rollback any changes or cancel underlying jobs, if necessary.
             */
            advance(): void;
            /**
             * Checks if the transition completed.
             * @returns TRUE if the transition has completed (with or without an error), FALSE otherwise
             */
            get_completed(): boolean;
            /**
             * Gets `self` 's data.
             *
             *
             * See wp_transition_set_data().
             * @returns the transition's data
             */
            get_data(): any | null;
            /**
             * Gets the source object from the transition.
             *
             *
             * Like g_async_result_get_source_object(), but does not ref the object.
             * @returns the source object
             */
            get_source_object<T = GObject.Object>(): T;
            /**
             * Gets `self` 's source tag.
             *
             *
             * See wp_transition_set_source_tag().
             * @returns the transition's source tag
             */
            get_source_tag(): any | null;
            /**
             * Checks if the transition completed with an error.
             * @returns TRUE if the transition completed with an error, FALSE otherwise
             */
            had_error(): boolean;
            /**
             * Checks if `self` has the given `tag` (generally a function pointer indicating the function `self` was created by).
             * @param tag a tag
             * @returns TRUE if @self has the indicated @tag , FALSE if not.
             */
            is_tagged(tag?: any | null): boolean;
            /**
             * Completes the transition with an error.
             *
             *
             * This can be called anytime from within any virtual function or an async job handler.
             * In most cases this will also unref the transition, so it is not safe to access it after this function has been called.
             * @param error a GError
             */
            return_error(error: GLib.Error): void;
            /**
             * Sets `self` 's data (freeing the existing data, if any). This can be an arbitrary user structure that holds data associated with this transition.
             * @param data transition-specific user data
             * @param data_destroy GDestroyNotify for @data
             */
            set_data(data?: any | null, data_destroy?: GLib.DestroyNotify | null): void;
            // Conflicted with GObject.Object.set_data
            set_data(...args: never[]): any;
            /**
             * Sets `self` 's source tag.
             *
             *
             * You can use this to tag a transition's return value with a particular pointer (usually a pointer to the function doing the tagging) and then later check it using wp_transition_get_source_tag() (or g_async_result_is_tagged()) in the transition's "finish" function, to figure out if the response came from a particular place.
             * @param tag an opaque pointer indicating the source of this transition
             */
            set_source_tag(tag?: any | null): void;

            // Inherited methods
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             * @returns the user data for @res.
             */
            get_user_data(): any | null;
            /**
             * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
             * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
             * `FALSE`.
             *
             * This can be used for legacy error handling in async `*_finish()`
             * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
             * error returns themselves rather than calling into the virtual method.
             * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
             * set by virtual methods should also be extracted by virtual methods,
             * to enable subclasses to chain up correctly.
             * @returns `TRUE` if @error is has been filled in with an error from   @res, `FALSE` if not.
             */
            legacy_propagate_error(): boolean;
            /**
             * Gets the source object from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_source_object<T = GObject.Object>(): T;
            /**
             * Gets the user data from a [iface`Gio`.AsyncResult].
             */
            vfunc_get_user_data(): any | null;
            /**
             * Checks if `res` has the given `source_tag` (generally a function
             * pointer indicating the function `res` was created by).
             * @param source_tag an application-defined tag
             */
            vfunc_is_tagged(source_tag?: any | null): boolean;
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

        type AsyncEventHookClass = typeof AsyncEventHook;
        type ClientClass = typeof Client;
        type ComponentLoaderInterface = typeof ComponentLoader;
        type ConfClass = typeof Conf;
        type CoreClass = typeof Core;
        type DeviceClass = typeof Device;
        /**
         * WpEvent describes an event, an event is an entity which can be pushed on to event stack and the event dispatcher is going to pick and dispatch it.
         */
        class Event {
            static $gtype: GObject.GType<Event>;

            // Constructors

            constructor(
                type: string,
                priority: number,
                properties: Properties | null,
                source: GObject.Object,
                subject?: GObject.Object | null,
            );
            _init(...args: any[]): void;

            static ['new'](
                type: string,
                priority: number,
                properties: Properties | null,
                source: GObject.Object,
                subject?: GObject.Object | null,
            ): Event;

            // Methods

            /**
             * Collects all the hooks registered in the `dispatcher` that run for this `event`.
             * @param dispatcher the event dispatcher
             * @returns TRUE if at least one hook has been collected, FALSE if no hooks run for this event or an error occurred
             */
            collect_hooks(dispatcher: EventDispatcher): boolean;
            /**
             * Returns the internal GCancellable that is used to track whether this event has been stopped by wp_event_stop_processing()
             * @returns the cancellable
             */
            get_cancellable(): Gio.Cancellable;
            /**
             * Gets the data that was previously associated with `key` by wp_event_set_data()
             * @param key the key
             * @returns the data associated with @key or %NULL
             */
            get_data(key: string): GObject.Value | null;
            /**
             * Gets the name of the event.
             * @returns the event name
             */
            get_name(): string;
            /**
             * Gets the priority of the event.
             * @returns the event priority
             */
            get_priority(): number;
            /**
             * Gets the properties of the Event.
             * @returns the properties of the event
             */
            get_properties(): Properties;
            /**
             * Gets the Source Object of the Event.
             * @returns the source of the event
             */
            get_source<T = GObject.Object>(): T;
            /**
             * Gets the Subject Object of the Event.
             * @returns the subject of the event
             */
            get_subject<T = GObject.Object>(): T;
            /**
             * Returns an iterator that iterates over all the hooks that were collected by wp_event_collect_hooks()
             * @returns the new iterator
             */
            new_hooks_iterator(): Iterator;
            ref(): Event;
            /**
             * Stores `data` on the event, associated with the specified `key`.
             *
             *
             * This can be used to exchange arbitrary data between hooks that run for this event.
             * @param key the key to associate @data with
             * @param data the data element, or %NULL to remove any previous data associated with this @key
             */
            set_data(key: string, data?: GObject.Value | null): void;
            /**
             * Stops processing of this event; any further hooks will not be executed from this moment onwards and the event will be discarded from the stack.
             */
            stop_processing(): void;
            unref(): void;
        }

        type EventDispatcherClass = typeof EventDispatcher;
        type EventHookClass = typeof EventHook;
        type FactoryClass = typeof Factory;
        type FeatureActivationTransitionClass = typeof FeatureActivationTransition;
        abstract class Global {
            static $gtype: GObject.GType<Global>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GlobalProxyClass = typeof GlobalProxy;
        type ImplMetadataClass = typeof ImplMetadata;
        type ImplModuleClass = typeof ImplModule;
        type ImplNodeClass = typeof ImplNode;
        type InterestEventHookClass = typeof InterestEventHook;
        /**
         * A generic iterator API
         */
        class Iterator {
            static $gtype: GObject.GType<Iterator>;

            // Constructors

            constructor(methods: IteratorMethods, user_size: number);
            _init(...args: any[]): void;

            static ['new'](methods: IteratorMethods, user_size: number): Iterator;

            // Methods

            /**
             * Fold a function over the items of the iterator.
             * @param func the fold function
             * @param ret the accumulator data
             * @returns TRUE if all the items were processed, FALSE otherwise.
             */
            fold(func: IteratorFoldFunc, ret: GObject.Value | any): [boolean, unknown];
            /**
             * Iterates over all items of the iterator calling a function.
             * @param func the foreach function
             * @returns TRUE if all the items were processed, FALSE otherwise.
             */
            foreach(func: IteratorForeachFunc): boolean;
            /**
             * Gets the implementation-specific storage of an iterator.
             *
             *
             * this only for use by implementations of WpIterator
             * @returns a pointer to the implementation-specific storage area
             */
            get_user_data(): any | null;
            /**
             * Gets the next item of the iterator.
             * @returns TRUE if next iterator was obtained, FALSE when the iterator has no more items to iterate through.
             */
            next(): [boolean, unknown];
            /**
             * Increases the reference count of an iterator.
             * @returns @self with an additional reference count on it
             */
            ref(): Iterator;
            /**
             * Resets the iterator so we can iterate again from the beginning.
             */
            reset(): void;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class IteratorMethods {
            static $gtype: GObject.GType<IteratorMethods>;

            // Fields

            version: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    version: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        type LinkClass = typeof Link;
        /**
         * A structure representing a log topic.
         */
        class LogTopic {
            static $gtype: GObject.GType<LogTopic>;

            // Fields

            topic_name: string;
            flags: LogTopicFlags;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Initializes a log topic. Internal function, don't use it directly.
             */
            init(): void;
            /**
             * Registers a log topic.
             *
             *
             * The log topic must be unregistered using wp_log_topic_unregister before its lifetime ends.
             * This function is threadsafe.
             */
            register(): void;
            /**
             * Unregisters a log topic.
             *
             *
             * This function is threadsafe.
             */
            unregister(): void;
        }

        type MetadataClass = typeof Metadata;
        /**
         * WpMetadataItem holds the subject, key, type and value of a metadata entry.
         */
        abstract class MetadataItem {
            static $gtype: GObject.GType<MetadataItem>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the key from a metadata item.
             * @returns the metadata key of the @item
             */
            get_key(): string;
            /**
             * Gets the subject from a metadata item.
             * @returns the metadata subject of the @item
             */
            get_subject(): number;
            /**
             * Gets the value from a metadata item.
             * @returns the metadata value of the @item
             */
            get_value(): string;
            /**
             * Gets the value type from a metadata item.
             * @returns the metadata value type of the @item
             */
            get_value_type(): string;
            /**
             * Increases the reference count of a metadata item object.
             * @returns @self with an additional reference count on it
             */
            ref(): MetadataItem;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        type NodeClass = typeof Node;
        type ObjectClass = typeof Object;
        /**
         * An object interest is a helper that is used in WpObjectManager to declare interest in certain kinds of objects.
         * An interest is defined by a GType and a set of constraints on the object's properties. An object "matches" the interest if it is of the specified GType (either the same type or a descendant of it) and all the constraints are satisfied.
         */
        class ObjectInterest {
            static $gtype: GObject.GType<ObjectInterest>;

            // Constructors

            constructor(gtype: GObject.GType, ___: any[]);
            _init(...args: any[]): void;

            static new_type(gtype: GObject.GType): ObjectInterest;

            // Methods

            /**
             * Adds a constraint to this interest. Constraints consist of a `type,` a `subject,` a `verb` and, depending on the `verb,` a `value`.
             *
             *
             * Constraints are almost like a spoken language sentence that declare a condition that must be true in order to consider that an object can match this interest. For instance, a constraint can be "pipewire property
             * 'object.id' equals 10". This would be translated to:
             *
             * ```c
             *   wp_object_interest_add_constraint (i,
             *      WP_CONSTRAINT_TYPE_PW_PROPERTY, "object.id",
             *      WP_CONSTRAINT_VERB_EQUALS, g_variant_new_int (10));
             * ```
             *
             * Some verbs require a `value` and some others do not. For those that do, the `value` must be of a specific type:
             *  - WP_CONSTRAINT_VERB_EQUALS: `value` can be a string, a (u)int32, a (u)int64, a double or a boolean. The `subject` value must equal this value for the constraint to be satisfied
             *  - WP_CONSTRAINT_VERB_IN_LIST: `value` must be a tuple that contains any number of items of the same type; the items can be string, (u)int32, (u)int64 or double. These items make a list that the `subject'`s value will be checked against. If any of the items equals the `subject` value, the constraint is satisfied
             *  - WP_CONSTRAINT_VERB_IN_RANGE: `value` must be a tuple that contains exactly 2 numbers of the same type ((u)int32, (u)int64 or double), meaning the minimum and maximum (inclusive) of the range. If the `subject` value is a number within this range, the constraint is satisfied
             *  - WP_CONSTRAINT_VERB_MATCHES: `value` must be a string that defines a pattern usable with GPatternSpec If the `subject` value matches this pattern, the constraint is satisfied
             *
             * In case the type of the `subject` value is not the same type as the one requested by the type of the `value,` the `subject` value is converted. For GObject properties, this conversion is done using g_value_transform(), so limitations of this function apply. In the case of PipeWire properties, which are `always` strings, conversion is done as follows:
             *  - to boolean: "true" or "1" means TRUE, "false" or "0" means FALSE
             *  - to int / uint / int64 / uint64: One of the strtol() family of functions is used to convert, using base 10
             *  - to double: strtod() is used
             *
             * This method does not fail if invalid arguments are given. However, wp_object_interest_validate() should be called after adding all the constraints on an interest in order to catch errors.
             * @param type the constraint type
             * @param subject the subject that the constraint applies to
             * @param verb the operation that is performed to check the constraint
             * @param value the value to check for
             */
            add_constraint(
                type: ConstraintType | null,
                subject: string,
                verb: ConstraintVerb | null,
                value?: GLib.Variant | null,
            ): void;
            /**
             * Checks if the specified `object` matches the type and all the constraints that are described in `self`.
             *
             *
             * If `self` is configured to match GObject subclasses, this is equivalent to wp_object_interest_matches_full (self, G_OBJECT_TYPE (object), object, NULL, NULL) and if it is configured to match WpProperties, this is equivalent to wp_object_interest_matches_full (self, self->gtype, NULL, (WpProperties *) object, NULL);
             * @param object the target object to check for a match
             * @returns TRUE if the object matches, FALSE otherwise
             */
            matches(object?: any | null): boolean;
            /**
             * A low-level version of wp_object_interest_matches().
             *
             *
             * In this version, the object's type is directly given in `object_type` and is not inferred from the `object`. `object` is only used to check for constraints against GObject properties.
             * `pw_props` and `pw_global_props` are used to check constraints against PipeWire object properties and global properties, respectively.
             * `object,` `pw_props` and `pw_global_props` may be NULL, but in case there are any constraints that require them, the match will fail. As a special case, if `object` is not NULL and is a subclass of WpProxy, then `pw_props` and `pw_global_props,` if required, will be internally retrieved from `object` by calling wp_pipewire_object_get_properties() and wp_global_proxy_get_global_properties() respectively.
             * When `flags` contains WP_INTEREST_MATCH_FLAGS_CHECK_ALL, all the constraints are checked and the returned value contains accurate information about which types of constraints have failed to match, if any. When this flag is not present, this function returns after the first failure has been encountered. This means that the returned flags set will contain all but one flag, which will indicate the kind of constraint that failed (more could have failed, but they are not checked...)
             * @param flags flags to alter the behavior of this function
             * @param object_type the type to be checked against the interest's type
             * @param object the object to be used for checking constraints of type WP_CONSTRAINT_TYPE_G_PROPERTY
             * @param pw_props the properties to be used for checking constraints of type WP_CONSTRAINT_TYPE_PW_PROPERTY
             * @param pw_global_props the properties to be used for checking constraints of type WP_CONSTRAINT_TYPE_PW_GLOBAL_PROPERTY
             * @returns flags that indicate which components of the interest match. WP_INTEREST_MATCH_ALL indicates a fully successful match; any other combination indicates a failure on the component(s) that do not appear on the flag set
             */
            matches_full(
                flags: InterestMatchFlags | null,
                object_type: GObject.GType,
                object?: GObject.Object | null,
                pw_props?: Properties | null,
                pw_global_props?: Properties | null,
            ): InterestMatch;
            /**
             * Increases the reference count of an object interest.
             * @returns @self with an additional reference count on it
             */
            ref(): ObjectInterest;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
            /**
             * Validates the interest, ensuring that the interest GType is a valid object and that all the constraints have been expressed properly.
             *
             *
             * This is called internally when `self` is first used to find a match, so it is not necessary to call it explicitly
             * @returns TRUE if the interest is valid and can be used in a match, FALSE otherwise
             */
            validate(): boolean;
        }

        type ObjectManagerClass = typeof ObjectManager;
        type PipewireObjectInterface = typeof PipewireObject;
        type PluginClass = typeof Plugin;
        type PortClass = typeof Port;
        /**
         * WpProperties is a data structure that contains string key-value pairs, which are used to send/receive/attach arbitrary properties to PipeWire objects.
         * This could be thought of as a hash table with strings as both keys and values. However, the reason that this class exists instead of using GHashTable directly is that in reality it wraps the PipeWire native struct spa_dict and struct pw_properties and therefore it can be easily passed to PipeWire function calls that require a struct spa_dict * or a struct pw_properties * as arguments. Or alternatively, it can easily wrap a struct spa_dict * or a struct pw_properties * that was given from the PipeWire API without necessarily doing an expensive copy operation.
         * WpProperties normally wraps a struct pw_properties, unless it was created with wp_properties_new_wrap_dict(), in which case it wraps a struct spa_dict and it is immutable (you cannot add/remove/modify any key-value pair).
         * In most cases, it actually owns the struct pw_properties internally and manages its lifetime. The exception to that rule is when WpProperties is constructed with wp_properties_new_wrap(), in which case the ownership of the struct pw_properties remains outside. This must be used with care, as the struct pw_properties may be free'ed externally.
         * WpProperties is reference-counted with wp_properties_ref() and wp_properties_unref().
         */
        class Properties {
            static $gtype: GObject.GType<Properties>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static new_copy(props?: any | null): Properties;

            static new_copy_dict(dict?: any | null): Properties;

            static new_empty(): Properties;

            static new_json(json: SpaJson): Properties;

            static new_string(str: string): Properties;

            static new_take(props?: any | null): Properties;

            static new_wrap(props?: any | null): Properties;

            static new_wrap_dict(dict?: any | null): Properties;

            // Methods

            /**
             * Adds new properties in `self,` using the given `props` as a source.
             *
             *
             * Properties (keys) from `props` that are already contained in `self` are not modified, unlike what happens with wp_properties_update(). Properties in `self` that are not contained in `props` are left untouched.
             * @param props a properties set that contains properties to add
             * @returns the number of properties that were changed
             */
            add(props: Properties): number;
            /**
             * Adds new properties in `self,` using the given `dict` as a source.
             *
             *
             * Properties (keys) from `dict` that are already contained in `self` are not modified, unlike what happens with wp_properties_update_from_dict(). Properties in `self` that are not contained in `dict` are left untouched.
             * @param dict a spa_dict that contains properties to add
             * @returns the number of properties that were changed
             */
            add_from_dict(dict?: any | null): number;
            /**
             * The same as wp_properties_add_keys(), using a NULL-terminated array for specifying the keys to add.
             * @param props a properties set that contains properties to add
             * @param keys the properties to add
             * @returns the number of properties that were changed
             */
            add_keys_array(props: Properties, keys: string[]): number;
            /**
             * Constructs and returns a new WpProperties object that contains a copy of all the properties contained in `other`.
             * @returns the newly constructed properties set
             */
            copy(): Properties;
            /**
             * Ensures that the given properties set is uniquely owned.
             *
             *
             * "Uniquely owned" means that:
             *  - its reference count is 1
             *  - it is not wrapping a native spa_dict or pw_properties object
             *
             * If `self` is not uniquely owned already, then it is unrefed and a copy of it is returned instead. You should always consider `self` as unsafe to use after this call and you should use the returned object instead.
             * @returns the uniquely owned properties object
             */
            ensure_unique_owner(): Properties;
            /**
             * Looks up a given property value from a key.
             * @param key a property key
             * @returns the value of the property identified with @key, or NULL if this property is not contained in @self
             */
            get(key: string): string | null;
            /**
             * Gets the number of properties contained in this object.
             * @returns the number of properties contained in this object
             */
            get_count(): number;
            /**
             * Checks if all property values contained in `other` are matching with the values in `self`.
             *
             *
             * If a property is contained in `other` and not in `self,` the result is not matched. If a property is contained in both sets, then the value of the property in `other` is interpreted as a glob-style pattern (using g_pattern_match_simple()) and the value in `self` is checked to see if it matches with this pattern.
             * @param other a set of properties to match
             * @returns TRUE if all matches were successfull, FALSE if at least one property value did not match
             */
            matches(other: Properties): boolean;
            /**
             * Iterates through all the properties in the properties object.
             * @returns an iterator that iterates over the properties. The items in the iterator are of type WpPropertiesItem. Use wp_properties_item_get_key() and wp_properties_item_get_value() to retrieve their contents.
             */
            new_iterator(): Iterator;
            /**
             * Gets the dictionary wrapped by a properties object.
             * @returns the internal properties set as a struct spa_dict *
             */
            peek_dict(): any | null;
            ref(): Properties;
            /**
             * Sets the given property `key` - `value` pair on `self`.
             *
             *
             * If the property already existed, the value is overwritten with the new one.
             * If the `value` is NULL, then the specified property is removed from `self`
             * @param key a property key
             * @param value a property value
             * @returns 1 if the property was changed. 0 if nothing was changed because the property already existed with the same value or because the key to remove did not exist.
             */
            set(key: string, value?: string | null): number;
            /**
             * Sorts the keys in alphabetical order.
             */
            sort(): void;
            /**
             * Gets a copy of the properties object as a struct pw_properties
             * @returns a copy of the properties in @self as a struct pw_properties
             */
            to_pw_properties(): any | null;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
            /**
             * Similar to wp_properties_to_pw_properties(), but this method avoids making a copy of the properties by returning the struct pw_properties that is stored internally and then freeing the WpProperties wrapper.
             *
             *
             * If `self` is not uniquely owned (see wp_properties_ensure_unique_owner()), then this method does make a copy and is the same as wp_properties_to_pw_properties(), performance-wise.
             * @returns the properties in @self as a struct pw_properties
             */
            unref_and_take_pw_properties(): any | null;
            /**
             * Updates (adds new or modifies existing) properties in `self,` using the given `props` as a source.
             *
             *
             * Any properties that are not contained in `props` are left untouched.
             * @param props a properties set that contains properties to update
             * @returns the number of properties that were changed
             */
            update(props: Properties): number;
            /**
             * Updates (adds new or modifies existing) properties in `self,` using the given `dict` as a source.
             *
             *
             * Any properties that are not contained in `dict` are left untouched.
             * @param dict a spa_dict that contains properties to update
             * @returns the number of properties that were changed
             */
            update_from_dict(dict?: any | null): number;
            /**
             * Updates (adds new or modifies existing) properties in `self,` using the given `json` as a source.
             *
             *
             * Any properties that are not contained in `json` are left untouched.
             * @param json a JSON object that contains properties to update
             * @returns the number of properties that were changed
             */
            update_from_json(json: SpaJson): number;
            /**
             * The same as wp_properties_update_keys(), using a NULL-terminated array for specifying the keys to update.
             * @param props a properties set that contains properties to update
             * @param keys the properties to update
             * @returns the number of properties that were changed
             */
            update_keys_array(props: Properties, keys: string[]): number;
        }

        abstract class PropertiesItem {
            static $gtype: GObject.GType<PropertiesItem>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the key from a properties item.
             * @returns the property key of the @item
             */
            get_key(): string;
            /**
             * Gets the value from a properties item.
             * @returns the property value of the @item
             */
            get_value(): string;
            /**
             * Increases the reference count of a properties item object.
             * @returns @self with an additional reference count on it
             */
            ref(): PropertiesItem;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        type ProxyClass = typeof Proxy;
        type SessionItemClass = typeof SessionItem;
        type SettingsClass = typeof Settings;
        /**
         * WpSettingsItem holds the key and value of a setting
         */
        abstract class SettingsItem {
            static $gtype: GObject.GType<SettingsItem>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the key from a settings item.
             * @returns the settings key of the @item
             */
            get_key(): string;
            /**
             * Gets the value from a settings item.
             * @returns the settings value of the @item
             */
            get_value(): SpaJson;
            /**
             * Increases the reference count of a settings item object.
             * @returns @self with an additional reference count on it
             */
            ref(): SettingsItem;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        /**
         * WpSettingSpec holds the specification of a setting.
         */
        abstract class SettingsSpec {
            static $gtype: GObject.GType<SettingsSpec>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Checks whether a value is compatible with the spec or not.
             * @param value the value to check
             * @returns TRUE if the value is compatible with the spec, FALSE otherwise
             */
            check_value(value: SpaJson): boolean;
            /**
             * Gets the default value of a settings spec.
             * @returns the default value of the settings spec
             */
            get_default_value(): SpaJson;
            /**
             * Gets the description of a settings spec.
             * @returns the description of the settings spec
             */
            get_description(): string;
            /**
             * Gets the maximum value of a settings spec.
             * @returns the maximum value of the settings spec, or NULL if the spec type is not WP_SETTINGS_SPEC_TYPE_INT or WP_SETTINGS_SPEC_TYPE_FLOAT
             */
            get_max_value(): SpaJson | null;
            /**
             * Gets the minimum value of a settings spec.
             * @returns the minimum value of the settings spec, or NULL if the spec type is not WP_SETTINGS_SPEC_TYPE_INT or WP_SETTINGS_SPEC_TYPE_FLOAT
             */
            get_min_value(): SpaJson | null;
            /**
             * Gets the type of a settings spec.
             * @returns the type of the settings spec
             */
            get_value_type(): SettingsSpecType;
            /**
             * Increases the reference count of a settings spec object.
             * @returns @self with an additional reference count on it
             */
            ref(): SettingsSpec;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        type SiAcquisitionInterface = typeof SiAcquisition;
        type SiAdapterInterface = typeof SiAdapter;
        type SiFactoryClass = typeof SiFactory;
        type SiLinkInterface = typeof SiLink;
        type SiLinkableInterface = typeof SiLinkable;
        type SimpleEventHookClass = typeof SimpleEventHook;
        type SpaDeviceClass = typeof SpaDevice;
        class SpaJson {
            static $gtype: GObject.GType<SpaJson>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static new_boolean(value: boolean): SpaJson;

            static new_float(value: number): SpaJson;

            static new_from_string(json_str: string): SpaJson;

            static new_from_stringn(json_str: string, len: number): SpaJson;

            static new_int(value: number): SpaJson;

            static new_null(): SpaJson;

            static new_string(value: string): SpaJson;

            static new_wrap(json?: any | null): SpaJson;

            static new_wrap_string(json_str: string): SpaJson;

            static new_wrap_stringn(json_str: string, len: number): SpaJson;

            // Methods

            /**
             * Copies a spa json object.
             * @returns The newly copied spa json
             */
            copy(): SpaJson;
            /**
             * If `self` is not uniquely owned already, then it is unrefed and a copy of it is returned instead. You should always consider `self` as unsafe to use after this call and you should use the returned object instead.
             * @returns the uniquely owned spa json object which may or may not be the same as @self.
             */
            ensure_unique_owner(): SpaJson;
            /**
             * Returns the json data.
             * @returns a const pointer to the json data
             */
            get_data(): string;
            /**
             * Returns the json data size.
             * @returns the json data size
             */
            get_size(): number;
            /**
             * Converts a WpSpaJson pointer to a struct spa_json one, for use with native pipewire & spa functions. The returned pointer is owned by WpSpaJson and may not be modified or freed.
             * @returns a const pointer to the underlying spa_json structure
             */
            get_spa_json(): any | null;
            /**
             * Checks whether the spa json is of type array or not.
             * @returns TRUE if it is of type array, FALSE otherwise
             */
            is_array(): boolean;
            /**
             * Checks wether the spa json is of type boolean or not.
             * @returns TRUE if it is of type boolean, FALSE otherwise
             */
            is_boolean(): boolean;
            /**
             * Checks whether the spa json is of type container or not.
             * @returns TRUE if it is of type container, FALSE otherwise
             */
            is_container(): boolean;
            /**
             * Checks wether the spa json is of type float or not.
             * @returns TRUE if it is of type float, FALSE otherwise
             */
            is_float(): boolean;
            /**
             * Checks wether the spa json is of type int or not.
             * @returns TRUE if it is of type int, FALSE otherwise
             */
            is_int(): boolean;
            /**
             * Checks wether the spa json is of type null or not.
             * @returns TRUE if it is of type null, FALSE otherwise
             */
            is_null(): boolean;
            /**
             * Checks whether the spa json is of type object or not.
             * @returns TRUE if it is of type object, FALSE otherwise
             */
            is_object(): boolean;
            /**
             * Checks wether the spa json is of type string or not.
             * @returns TRUE if it is of type string, FALSE otherwise
             */
            is_string(): boolean;
            /**
             * Checks if the json is the unique owner of its data or not.
             * @returns TRUE if the json owns the data, FALSE otherwise.
             */
            is_unique_owner(): boolean;
            /**
             * Creates a new iterator for a spa json object.
             * @returns the new spa json iterator
             */
            new_iterator(): Iterator;
            /**
             * Parses the boolean value of a spa json object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            parse_boolean(): [boolean, boolean];
            /**
             * Parses the float value of a spa json object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            parse_float(): [boolean, number];
            /**
             * Parses the int value of a spa json object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            parse_int(): [boolean, number];
            /**
             * Parses the string value of a spa json object.
             * @returns The newly allocated parsed string
             */
            parse_string(): string;
            /**
             * Increases the reference count of a spa json object.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaJson;
            /**
             * Returns a newly allocated json string with length matching the size.
             * @returns the json string with length matching the size
             */
            to_string(): string;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class SpaJsonBuilder {
            static $gtype: GObject.GType<SpaJsonBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static new_array(): SpaJsonBuilder;

            static new_object(): SpaJsonBuilder;

            // Methods

            /**
             * Adds a boolean value into the builder.
             * @param value the boolean value
             */
            add_boolean(value: boolean): void;
            /**
             * Adds a float value into the builder.
             * @param value the float value
             */
            add_float(value: number): void;
            /**
             * Adds a json string into the builder.
             * @param json_str the json string
             */
            add_from_string(json_str: string): void;
            /**
             * Adds a json string with specific length into the builder.
             * @param json_str the json string
             * @param len the specific length of the json string
             */
            add_from_stringn(json_str: string, len: number): void;
            /**
             * Adds a int value into the builder.
             * @param value the int value
             */
            add_int(value: number): void;
            /**
             * Adds a json value into the builder.
             * @param json the json value
             */
            add_json(json: SpaJson): void;
            /**
             * Adds a null value into the builder.
             */
            add_null(): void;
            /**
             * Adds a property into the builder.
             * @param key the name of the property
             */
            add_property(key: string): void;
            /**
             * Adds a string value into the builder.
             * @param value the string value
             */
            add_string(value: string): void;
            /**
             * Ends the builder process and returns the constructed spa json object.
             * @returns the constructed spa json object
             */
            end(): SpaJson;
            /**
             * Increases the reference count of a spa json builder.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaJsonBuilder;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class SpaJsonParser {
            static $gtype: GObject.GType<SpaJsonParser>;

            // Constructors

            constructor(json: SpaJson);
            _init(...args: any[]): void;

            static new_array(json: SpaJson): SpaJsonParser;

            static new_object(json: SpaJson): SpaJsonParser;

            static new_undefined(json: SpaJson): SpaJsonParser;

            // Methods

            end(): void;
            /**
             * Gets the boolean value from a spa json parser.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_boolean(): [boolean, boolean];
            /**
             * Gets the float value from a spa json parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_float(): [boolean, number];
            /**
             * Gets the int value from a spa json parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_int(): [boolean, number];
            /**
             * Gets the spa json value from a spa json parser object.
             *
             *
             * the returned spa json object references the original data instead of copying it, therefore the original data must be valid for the entire life-cycle of the returned object
             * @returns The spa json value or NULL if it could not be obtained
             */
            get_json(): SpaJson;
            /**
             * Gets the null value from a spa json parser.
             * @returns TRUE if the null value is present, FALSE otherwise
             */
            get_null(): boolean;
            /**
             * Gets the string value from a spa json parser object.
             * @returns The newly allocated parsed string
             */
            get_string(): string;
            /**
             * Increases the reference count of a spa json parser.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaJsonParser;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class SpaPod {
            static $gtype: GObject.GType<SpaPod>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static new_boolean(value: boolean): SpaPod;

            static new_bytes(value: any | null, len: number): SpaPod;

            static new_double(value: number): SpaPod;

            static new_fd(value: number): SpaPod;

            static new_float(value: number): SpaPod;

            static new_fraction(num: number, denom: number): SpaPod;

            static new_id(value: number): SpaPod;

            static new_int(value: number): SpaPod;

            static new_long(value: number): SpaPod;

            static new_none(): SpaPod;

            static new_pointer(type_name: string, value?: any | null): SpaPod;

            static new_rectangle(width: number, height: number): SpaPod;

            static new_string(value: string): SpaPod;

            static new_wrap(pod?: any | null): SpaPod;

            static new_wrap_const(pod?: any | null): SpaPod;

            // Methods

            /**
             * Copies a spa pod object.
             * @returns The newly copied spa pod
             */
            copy(): SpaPod;
            /**
             * If `self` is not uniquely owned already, then it is unrefed and a copy of it is returned instead. You should always consider `self` as unsafe to use after this call and you should use the returned object instead.
             * @returns the uniquely owned spa pod object which may or may not be the same as @self.
             */
            ensure_unique_owner(): SpaPod;
            /**
             * Checks whether two spa pod objects have the same value or not.
             * @param pod the pod with the value to be compared with
             * @returns TRUE if both spa pod objects have the same values, FALSE othewrise.
             */
            equal(pod: SpaPod): boolean;
            filter(filter: SpaPod): SpaPod;
            /**
             * Fixates choices in an object pod so that they only have one value.
             * @returns TRUE if the pod was an object and it went through the fixation procedure, FALSE otherwise
             */
            fixate(): boolean;
            /**
             * Gets the child of a spa pod array object.
             * @returns the child of the spa pod array object
             */
            get_array_child(): SpaPod;
            /**
             * Gets the boolean value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_boolean(): [boolean, boolean];
            /**
             * Gets the bytes value and its len of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_bytes(): [boolean, any, number];
            /**
             * Gets the child of a spa pod choice object.
             * @returns the child of the spa pod choice object
             */
            get_choice_child(): SpaPod;
            /**
             * If the pod is a Choice, this gets the choice type (Range, Step, Enum, ...)
             * @returns the choice type of the choice pod
             */
            get_choice_type(): SpaIdValue;
            /**
             * Gets the offset, type name and spa pod value of a spa pod control.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_control(): [boolean, number, string, SpaPod | null];
            /**
             * Gets the double value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_double(): [boolean, number];
            /**
             * Gets the Fd value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_fd(): [boolean, number];
            /**
             * Gets the float value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_float(): [boolean, number];
            /**
             * Gets the fractions's numerator and denominator value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_fraction(): [boolean, number, number];
            /**
             * Gets the Id value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_id(): [boolean, number];
            /**
             * Gets the int value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_int(): [boolean, number];
            /**
             * Gets the long value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_long(): [boolean, number];
            /**
             * Gets the pointer value and its type name of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_pointer(): [boolean, any];
            /**
             * Gets the name, flags and spa pod value of a spa pod property.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_property(): [boolean, string, SpaPod | null];
            /**
             * Gets the rectangle's width and height value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_rectangle(): [boolean, number, number];
            /**
             * Converts a WpSpaPod pointer to a struct spa_pod one, for use with native pipewire & spa functions. The returned pointer is owned by WpSpaPod and may not be modified or freed.
             * @returns a const pointer to the underlying spa_pod structure
             */
            get_spa_pod(): any | null;
            /**
             * Gets the SPA type of the spa pod.
             *
             *
             * If the pod is an object or pointer, this will return the derived object/pointer type directly. If the pod is an object property or a control, this will return the type of the contained value.
             * @returns the type of the spa pod
             */
            get_spa_type(): SpaType;
            /**
             * Gets the string value of a spa pod object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_string(): [boolean, string];
            /**
             * Checks wether the spa pod is of type array or not.
             * @returns TRUE if it is of type array, FALSE otherwise
             */
            is_array(): boolean;
            /**
             * Checks wether the spa pod is of type boolean or not.
             * @returns TRUE if it is of type boolean, FALSE otherwise
             */
            is_boolean(): boolean;
            /**
             * Checks wether the spa pod is of type bytes or not.
             * @returns TRUE if it is of type bytes, FALSE otherwise
             */
            is_bytes(): boolean;
            /**
             * Checks wether the spa pod is of type choice or not.
             * @returns TRUE if it is of type choice, FALSE otherwise
             */
            is_choice(): boolean;
            /**
             * Checks wether the spa pod is of type control or not.
             * @returns TRUE if it is of type control, FALSE otherwise
             */
            is_control(): boolean;
            /**
             * Checks wether the spa pod is of type double or not.
             * @returns TRUE if it is of type double, FALSE otherwise
             */
            is_double(): boolean;
            /**
             * Checks wether the spa pod is of type Fd or not.
             * @returns TRUE if it is of type Fd, FALSE otherwise
             */
            is_fd(): boolean;
            /**
             * Checks wether the spa pod is of type float or not.
             * @returns TRUE if it is of type float, FALSE otherwise
             */
            is_float(): boolean;
            /**
             * Checks wether the spa pod is of type fraction or not.
             * @returns TRUE if it is of type fraction, FALSE otherwise
             */
            is_fraction(): boolean;
            /**
             * Checks wether the spa pod is of type Id or not.
             * @returns TRUE if it is of type Id, FALSE otherwise
             */
            is_id(): boolean;
            /**
             * Checks wether the spa pod is of type int or not.
             * @returns TRUE if it is of type int, FALSE otherwise
             */
            is_int(): boolean;
            /**
             * Checks wether the spa pod is of type long or not.
             * @returns TRUE if it is of type long, FALSE otherwise
             */
            is_long(): boolean;
            /**
             * Checks wether the spa pod is of type none or not.
             * @returns TRUE if it is of type none, FALSE otherwise
             */
            is_none(): boolean;
            /**
             * Checks wether the spa pod is of type object or not.
             * @returns TRUE if it is of type object, FALSE otherwise
             */
            is_object(): boolean;
            /**
             * Checks wether the spa pod is of type pointer or not.
             * @returns TRUE if it is of type pointer, FALSE otherwise
             */
            is_pointer(): boolean;
            /**
             * Checks wether the spa pod is of type property or not.
             * @returns TRUE if it is of type property, FALSE otherwise
             */
            is_property(): boolean;
            /**
             * Checks wether the spa pod is of type rectangle or not.
             * @returns TRUE if it is of type rectangle, FALSE otherwise
             */
            is_rectangle(): boolean;
            /**
             * Checks wether the spa pod is of type sequence or not.
             * @returns TRUE if it is of type sequence, FALSE otherwise
             */
            is_sequence(): boolean;
            /**
             * Checks wether the spa pod is of type string or not.
             * @returns TRUE if it is of type string, FALSE otherwise
             */
            is_string(): boolean;
            /**
             * Checks wether the spa pod is of type struct or not.
             * @returns TRUE if it is of type struct, FALSE otherwise
             */
            is_struct(): boolean;
            /**
             * Checks if the pod is the unique owner of its data or not.
             * @returns TRUE if the pod owns the data, FALSE otherwise.
             */
            is_unique_owner(): boolean;
            /**
             * Creates a new iterator for a spa pod object.
             * @returns the new spa pod iterator
             */
            new_iterator(): Iterator;
            /**
             * Increases the reference count of a spa pod object.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaPod;
            /**
             * Sets a boolean value in the spa pod object.
             * @param value the boolean value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_boolean(value: boolean): boolean;
            /**
             * Sets a double value in the spa pod object.
             * @param value the double value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_double(value: number): boolean;
            /**
             * Sets a Fd value in the spa pod object.
             * @param value the Fd value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_fd(value: number): boolean;
            /**
             * Sets a float value in the spa pod object.
             * @param value the float value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_float(value: number): boolean;
            /**
             * Sets the numerator and denominator values of a fraction in the spa pod object.
             * @param num the numerator value of the farction
             * @param denom the denominator value of the fraction
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_fraction(num: number, denom: number): boolean;
            /**
             * Sets an Id value in the spa pod object.
             * @param value the Id value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_id(value: number): boolean;
            /**
             * Sets an int value in the spa pod object.
             * @param value the int value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_int(value: number): boolean;
            /**
             * Sets a long value in the spa pod object.
             * @param value the long value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_long(value: number): boolean;
            /**
             * Sets the value of a spa pod object in the current spa pod object. The spa pod objects must be of the same value.
             * @param pod the pod with the value to be set
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_pod(pod: SpaPod): boolean;
            /**
             * Sets a pointer value with its type name in the spa pod object.
             * @param type_name the name of the type of the pointer
             * @param value the pointer value
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_pointer(type_name: string, value?: any | null): boolean;
            /**
             * Sets the width and height values of a rectangle in the spa pod object.
             * @param width the width value of the rectangle
             * @param height the height value of the rectangle
             * @returns TRUE if the value could be set, FALSE othewrise.
             */
            set_rectangle(width: number, height: number): boolean;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class SpaPodBuilder {
            static $gtype: GObject.GType<SpaPodBuilder>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static new_array(): SpaPodBuilder;

            static new_choice(choice_type: string): SpaPodBuilder;

            static new_object(type_name: string, id_name: string): SpaPodBuilder;

            static new_sequence(unit: number): SpaPodBuilder;

            static new_struct(): SpaPodBuilder;

            // Methods

            /**
             * Adds a boolean value into the builder.
             * @param value the boolean value
             */
            add_boolean(value: boolean): void;
            /**
             * Adds a bytes value with its length into the builder.
             * @param value the bytes value
             * @param len the length of the bytes value
             */
            add_bytes(value: any | null, len: number): void;
            /**
             * Adds a control into the builder.
             * @param offset the offset of the control
             * @param ctl_type the type name of the control
             */
            add_control(offset: number, ctl_type: string): void;
            /**
             * Adds a double value into the builder.
             * @param value the double value
             */
            add_double(value: number): void;
            /**
             * Adds a Fd value into the builder.
             * @param value the Fd value
             */
            add_fd(value: number): void;
            /**
             * Adds a float value into the builder.
             * @param value the float value
             */
            add_float(value: number): void;
            /**
             * Adds the numerator and denominator values of a fraction into the builder.
             * @param num the numerator value of the fraction
             * @param denom the denominator value of the fraction
             */
            add_fraction(num: number, denom: number): void;
            /**
             * Adds a Id value into the builder.
             * @param value the Id value
             */
            add_id(value: number): void;
            /**
             * Adds a int value into the builder.
             * @param value the int value
             */
            add_int(value: number): void;
            /**
             * Adds a long value into the builder.
             * @param value the long value
             */
            add_long(value: number): void;
            /**
             * Adds a none value into the builder.
             */
            add_none(): void;
            /**
             * Adds a pod value into the builder.
             * @param pod the pod value
             */
            add_pod(pod: SpaPod): void;
            /**
             * Adds a pointer value with its type name into the builder.
             * @param type_name the type name that the pointer points to
             * @param value the pointer vaue
             */
            add_pointer(type_name: string, value?: any | null): void;
            /**
             * Adds a property into the builder.
             * @param key the name of the property
             */
            add_property(key: string): void;
            /**
             * Adds a property into the builder.
             * @param id the id of the property
             */
            add_property_id(id: number): void;
            /**
             * Adds the width and height values of a rectangle into the builder.
             * @param width the width value of the rectangle
             * @param height the height value of the rectangle
             */
            add_rectangle(width: number, height: number): void;
            /**
             * Adds a string value into the builder.
             * @param value the string value
             */
            add_string(value: string): void;
            /**
             * Ends the builder process and returns the constructed spa pod object.
             * @returns the constructed spa pod object
             */
            end(): SpaPod;
            /**
             * Increases the reference count of a spa pod builder.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaPodBuilder;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        class SpaPodParser {
            static $gtype: GObject.GType<SpaPodParser>;

            // Constructors

            constructor(pod: SpaPod, id_name: string);
            _init(...args: any[]): void;

            static new_object(pod: SpaPod, id_name: string): SpaPodParser;

            static new_struct(pod: SpaPod): SpaPodParser;

            // Methods

            /**
             * Ends the parser process.
             */
            end(): void;
            /**
             * Gets the boolean value from a spa pod parser.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_boolean(): [boolean, boolean];
            /**
             * Gets the bytes value and its length from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_bytes(): [boolean, any, number];
            /**
             * Gets the double value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_double(): [boolean, number];
            /**
             * Gets the Fd value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_fd(): [boolean, number];
            /**
             * Gets the float value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_float(): [boolean, number];
            /**
             * Gets the fractions's numerator and denominator value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_fraction(): [boolean, number, number];
            /**
             * Gets the Id value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_id(): [boolean, number];
            /**
             * Gets the int value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_int(): [boolean, number];
            /**
             * Gets the long value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_long(): [boolean, number];
            /**
             * Gets the spa pod value from a spa pod parser object.
             * @returns The spa pod value or NULL if it could not be obtained
             */
            get_pod(): SpaPod;
            /**
             * Gets the pointer value and its type name from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_pointer(): [boolean, any];
            /**
             * Gets the rectangle's width and height value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_rectangle(): [boolean, number, number];
            /**
             * Gets the string value from a spa pod parser object.
             * @returns TRUE if the value was obtained, FALSE otherwise
             */
            get_string(): [boolean, string];
            /**
             * Increases the reference count of a spa pod parser.
             * @returns @self with an additional reference count on it
             */
            ref(): SpaPodParser;
            /**
             * Decreases the reference count on `self` and frees it when the ref count reaches zero.
             */
            unref(): void;
        }

        type StateClass = typeof State;
        type TransitionClass = typeof Transition;
        module ComponentLoader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface ComponentLoaderNamespace {
            $gtype: GObject.GType<ComponentLoader>;
            prototype: ComponentLoader;
        }
        interface ComponentLoader extends GObject.Object {
            // Virtual methods

            vfunc_load(
                core: Core,
                component: string,
                type: string,
                args: SpaJson,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_supports_type(type: string): boolean;
        }

        export const ComponentLoader: ComponentLoaderNamespace & {
            new (): ComponentLoader; // This allows `obj instanceof ComponentLoader`
        };

        module PipewireObject {
            // Constructor properties interface

            interface ConstructorProps extends Proxy.ConstructorProps {
                native_info: any;
                nativeInfo: any;
                param_info: GLib.Variant;
                paramInfo: GLib.Variant;
                properties: Properties;
            }
        }

        export interface PipewireObjectNamespace {
            $gtype: GObject.GType<PipewireObject>;
            prototype: PipewireObject;
        }
        interface PipewireObject extends Proxy {
            // Properties

            get native_info(): any;
            get nativeInfo(): any;
            get param_info(): GLib.Variant;
            get paramInfo(): GLib.Variant;
            get properties(): Properties;

            // Methods

            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Iterator | null>;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id: string | null,
                filter: SpaPod | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Iterator | null> | void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             * @returns an iterator to iterate over the collected params, or NULL if the operation resulted in error; the items in the iterator are WpSpaPod
             */
            enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             * @returns an iterator to iterate over cached parameters, or NULL if parameters for this @id are not cached; the items in the iterator are WpSpaPod
             */
            enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the native pipewire info structure of this object
             */
            get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns a variant of type a{ss} or NULL if the object does not support params at all
             */
            get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns the pipewire properties of this object; normally these are the properties that are part of the info structure
             */
            get_properties(): Properties;
            /**
             * Returns the value of a single pipewire property.
             *
             *
             * This is the same as getting the whole properties structure with wp_pipewire_object_get_properties() and accessing a single property with wp_properties_get(), but saves one call and having to clean up the WpProperties reference count afterwards.
             * The value is owned by the proxy, but it is guaranteed to stay alive until execution returns back to the event loop.
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @param key the property name
             * @returns the value of the pipewire property @key or NULL if the property doesn't exist
             */
            get_property(key: string): string | null;
            // Conflicted with GObject.Object.get_property
            get_property(...args: never[]): any;
            /**
             * Iterates over the object's PipeWire properties.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             * @returns an iterator that iterates over the pipewire properties of this object. Use wp_properties_iterator_item_get_key() and wp_properties_iterator_item_get_value() to parse the items returned by this iterator.
             */
            new_properties_iterator(): Iterator;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             * @returns TRUE on success, FALSE if setting the param failed
             */
            set_param(id: string, flags: number, param: SpaPod): boolean;

            // Virtual methods

            /**
             * Enumerate object parameters.
             *
             *
             * This will asynchronously return the result, or an error, by calling the given `callback`. The result is going to be a WpIterator containing WpSpaPod objects, which can be retrieved with wp_pipewire_object_enum_params_finish().
             * @param id the parameter id to enumerate or NULL for all parameters
             * @param filter a param filter or NULL
             * @param cancellable a cancellable for the async operation
             * @param callback a callback to call with the result
             */
            vfunc_enum_params(
                id?: string | null,
                filter?: SpaPod | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an asynchronous parameter enumeration operation.
             * @param res the async result
             */
            vfunc_enum_params_finish(res: Gio.AsyncResult): Iterator | null;
            /**
             * This method can be used to retrieve object parameters in a synchronous way (in contrast with wp_pipewire_object_enum_params(), which is async).
             *
             *
             * The WP_PIPEWIRE_OBJECT_FEATURE_PARAM_<something> feature that corresponds to the specified `id` must have been activated earlier. These features enable monitoring and caching of params underneath, so that they are always available for retrieval with this method.
             * Note, however, that cached params may be out-of-date if they have changed very recently on the remote object and the caching mechanism hasn't been able to update them yet, so if you really need up-to-date information you should only rely on wp_pipewire_object_enum_params() instead.
             * @param id the parameter id to enumerate
             * @param filter a param filter or NULL
             */
            vfunc_enum_params_sync(id: string, filter?: SpaPod | null): Iterator | null;
            /**
             * Retrieves the native infor structure of this object (pw_node_info, pw_port_info, etc...)
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_native_info(): any | null;
            /**
             * Returns the available parameters of this pipewire object.
             *
             *
             * The return value is a GVariant of type a{ss}, where the key of each map entry is a spa param type id (the same ids that you can pass in wp_pipewire_object_enum_params()) and the value is a string that can contain the following letters, each of them representing a flag:
             *  - r: the param is readable (SPA_PARAM_INFO_READ)
             *  - w: the param is writable (SPA_PARAM_INFO_WRITE)
             *
             * For params that are readable, you can query them with wp_pipewire_object_enum_params()
             * Params that are writable can be set with wp_pipewire_object_set_param()
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_param_info(): GLib.Variant | null;
            /**
             * Retrieves the PipeWire properties of this object.
             *
             *
             * Requires WP_PIPEWIRE_OBJECT_FEATURE_INFO
             */
            vfunc_get_properties(): Properties;
            /**
             * Sets a parameter on the object.
             * @param id the parameter id to set
             * @param flags optional flags or 0
             * @param param the parameter to set
             */
            vfunc_set_param(id: string, flags: number, param: SpaPod): boolean;
        }

        export const PipewireObject: PipewireObjectNamespace & {
            new (): PipewireObject; // This allows `obj instanceof PipewireObject`
        };

        module SiAcquisition {
            // Constructor properties interface

            interface ConstructorProps extends SessionItem.ConstructorProps {}
        }

        export interface SiAcquisitionNamespace {
            $gtype: GObject.GType<SiAcquisition>;
            prototype: SiAcquisition;
        }
        interface SiAcquisition extends SessionItem {
            // Methods

            /**
             * Acquires the `item` for linking by `acquisitor`.
             *
             *
             * When a link is not allowed by policy, this operation should return an error.
             * When a link needs to be delayed for a short amount of time (ex. to apply a fade out effect on another item), this operation should finish with a delay. It is safe to assume that after this operation completes, the item will be linked immediately.
             * @param acquisitor the link that is trying to acquire a port info item
             * @param item the item that is being acquired
             */
            acquire(acquisitor: SiLink, item: SiLinkable): Promise<boolean>;
            /**
             * Acquires the `item` for linking by `acquisitor`.
             *
             *
             * When a link is not allowed by policy, this operation should return an error.
             * When a link needs to be delayed for a short amount of time (ex. to apply a fade out effect on another item), this operation should finish with a delay. It is safe to assume that after this operation completes, the item will be linked immediately.
             * @param acquisitor the link that is trying to acquire a port info item
             * @param item the item that is being acquired
             * @param callback the callback to call when the operation is done
             */
            acquire(acquisitor: SiLink, item: SiLinkable, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Acquires the `item` for linking by `acquisitor`.
             *
             *
             * When a link is not allowed by policy, this operation should return an error.
             * When a link needs to be delayed for a short amount of time (ex. to apply a fade out effect on another item), this operation should finish with a delay. It is safe to assume that after this operation completes, the item will be linked immediately.
             * @param acquisitor the link that is trying to acquire a port info item
             * @param item the item that is being acquired
             * @param callback the callback to call when the operation is done
             */
            acquire(
                acquisitor: SiLink,
                item: SiLinkable,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started by wp_si_acquisition_acquire(). This is meant to be called in the callback that was passed to that method.
             * @param res the async result
             * @returns TRUE on success, FALSE if there was an error
             */
            acquire_finish(res: Gio.AsyncResult): boolean;
            /**
             * Releases the `item,` which means that it is being unlinked.
             * @param acquisitor the link that had previously acquired the item
             * @param item the port info that is being released
             */
            release(acquisitor: SiLink, item: SiLinkable): void;

            // Virtual methods

            /**
             * Acquires the `item` for linking by `acquisitor`.
             *
             *
             * When a link is not allowed by policy, this operation should return an error.
             * When a link needs to be delayed for a short amount of time (ex. to apply a fade out effect on another item), this operation should finish with a delay. It is safe to assume that after this operation completes, the item will be linked immediately.
             * @param acquisitor the link that is trying to acquire a port info item
             * @param item the item that is being acquired
             * @param callback the callback to call when the operation is done
             */
            vfunc_acquire(acquisitor: SiLink, item: SiLinkable, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the operation started by wp_si_acquisition_acquire(). This is meant to be called in the callback that was passed to that method.
             * @param res the async result
             */
            vfunc_acquire_finish(res: Gio.AsyncResult): boolean;
            /**
             * Releases the `item,` which means that it is being unlinked.
             * @param acquisitor the link that had previously acquired the item
             * @param item the port info that is being released
             */
            vfunc_release(acquisitor: SiLink, item: SiLinkable): void;
        }

        export const SiAcquisition: SiAcquisitionNamespace & {
            new (): SiAcquisition; // This allows `obj instanceof SiAcquisition`
        };

        module SiAdapter {
            // Constructor properties interface

            interface ConstructorProps extends SessionItem.ConstructorProps {}
        }

        export interface SiAdapterNamespace {
            $gtype: GObject.GType<SiAdapter>;
            prototype: SiAdapter;
        }
        interface SiAdapter extends SessionItem {
            // Methods

            /**
             * Gets the format used to configure the adapter session item's ports.
             * @returns The format used to configure the ports of the adapter session item. Some items automatically choose a format when being activated, others never set a format on activation and the user needs to manually set it externally with wp_si_adapter_set_ports_format().
             */
            get_ports_format(): [SpaPod, string];
            /**
             * Gets the ports state.
             * @returns The state of the ports
             */
            get_ports_state(): SiAdapterPortsState;
            /**
             * Sets the format and configures the adapter session item ports using the given format.
             *
             *
             * The result of the operation can be checked using the wp_si_adapter_set_ports_format_finish() API. If format is NULL, the adapter will be configured with the default format. If mode is NULL, the adapter will use "dsp" mode.
             * @param format the format to be set
             * @param mode the mode
             */
            set_ports_format(format?: SpaPod | null, mode?: string | null): Promise<boolean>;
            /**
             * Sets the format and configures the adapter session item ports using the given format.
             *
             *
             * The result of the operation can be checked using the wp_si_adapter_set_ports_format_finish() API. If format is NULL, the adapter will be configured with the default format. If mode is NULL, the adapter will use "dsp" mode.
             * @param format the format to be set
             * @param mode the mode
             * @param callback the callback to call when the operation is done
             */
            set_ports_format(
                format: SpaPod | null,
                mode: string | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Sets the format and configures the adapter session item ports using the given format.
             *
             *
             * The result of the operation can be checked using the wp_si_adapter_set_ports_format_finish() API. If format is NULL, the adapter will be configured with the default format. If mode is NULL, the adapter will use "dsp" mode.
             * @param format the format to be set
             * @param mode the mode
             * @param callback the callback to call when the operation is done
             */
            set_ports_format(
                format?: SpaPod | null,
                mode?: string | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started by wp_si_adapter_set_format(). This is meant to be called in the callback that was passed to that method.
             * @param res the async result
             * @returns TRUE on success, FALSE if there was an error
             */
            set_ports_format_finish(res: Gio.AsyncResult): boolean;

            // Virtual methods

            /**
             * Gets the format used to configure the adapter session item's ports.
             */
            vfunc_get_ports_format(): [SpaPod, string];
            /**
             * Gets the ports state.
             */
            vfunc_get_ports_state(): SiAdapterPortsState;
            /**
             * Sets the format and configures the adapter session item ports using the given format.
             *
             *
             * The result of the operation can be checked using the wp_si_adapter_set_ports_format_finish() API. If format is NULL, the adapter will be configured with the default format. If mode is NULL, the adapter will use "dsp" mode.
             * @param format the format to be set
             * @param mode the mode
             * @param callback the callback to call when the operation is done
             */
            vfunc_set_ports_format(
                format?: SpaPod | null,
                mode?: string | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started by wp_si_adapter_set_format(). This is meant to be called in the callback that was passed to that method.
             * @param res the async result
             */
            vfunc_set_ports_format_finish(res: Gio.AsyncResult): boolean;
        }

        export const SiAdapter: SiAdapterNamespace & {
            new (): SiAdapter; // This allows `obj instanceof SiAdapter`
        };

        module SiLink {
            // Constructor properties interface

            interface ConstructorProps extends SessionItem.ConstructorProps {}
        }

        export interface SiLinkNamespace {
            $gtype: GObject.GType<SiLink>;
            prototype: SiLink;
        }
        interface SiLink extends SessionItem {
            // Methods

            /**
             * Gets the input item linked by the link.
             * @returns the input item that is linked by this link
             */
            get_in_item(): SiLinkable;
            /**
             * Gets the output item linked by the link.
             * @returns the output item that is linked by this link
             */
            get_out_item(): SiLinkable;
            /**
             * Gets the properties of the link.
             * @returns the properties of the link
             */
            get_properties(): Properties | null;
            // Conflicted with Wp.SessionItem.get_properties
            get_properties(...args: never[]): any;
            /**
             * This should return information that is used for registering the link, as a GVariant of type a{ss} that contains additional properties to be added to the list of global properties.
             * @returns registration info for the link
             */
            get_registration_info(): GLib.Variant;

            // Virtual methods

            /**
             * Gets the input item linked by the link.
             */
            vfunc_get_in_item(): SiLinkable;
            /**
             * Gets the output item linked by the link.
             */
            vfunc_get_out_item(): SiLinkable;
            /**
             * Gets the properties of the link.
             */
            vfunc_get_properties(): Properties | null;
            /**
             * This should return information that is used for registering the link, as a GVariant of type a{ss} that contains additional properties to be added to the list of global properties.
             */
            vfunc_get_registration_info(): GLib.Variant;
        }

        export const SiLink: SiLinkNamespace & {
            new (): SiLink; // This allows `obj instanceof SiLink`
        };

        module SiLinkable {
            // Constructor properties interface

            interface ConstructorProps extends SessionItem.ConstructorProps {}
        }

        export interface SiLinkableNamespace {
            $gtype: GObject.GType<SiLinkable>;
            prototype: SiLinkable;
        }
        interface SiLinkable extends SessionItem {
            // Methods

            /**
             * Gets the acquisition interface associated with the item.
             * @returns the acquisition interface associated with this item, or NULL if this item does not require acquiring items before linking them
             */
            get_acquisition(): SiAcquisition | null;
            /**
             * This method returns a variant of type "a(uuu)", where each tuple in the array contains the following information:
             *
             *
             *
             *  - u: (guint32) node id
             *  - u: (guint32) port id (the port must belong on the node specified above)
             *  - u: (guint32) the audio channel (enum spa_audio_channel) that this port makes available, or 0 for non-audio content
             *
             * The order in which ports appear in this array is important when no channel information is available. The link implementation should link the ports in the order they appear. This is normally a good enough substitute for channel matching.
             * The `context` argument can be used to get different sets of ports from the item. The following well-known contexts are defined:
             *  - NULL: get the standard ports to be linked
             *  - "monitor": get the monitor ports
             *  - "control": get the control port
             *  - "reverse": get the reverse direction ports, if this item controls a filter node, which would have ports on both directions
             *
             * Contexts other than NULL may only be used internally to ease the implementation of more complex item relationships. For example, a WpSessionItem that is in control of an input (sink) adapter node may implement WpSiLinkable where the NULL context will return the standard input ports and the "monitor" context will return the adapter's monitor ports. When linking this item to another item, the NULL context will always be used, but the item may internally spawn a secondary WpSessionItem that implements the "monitor" item. That secondary item may implement WpSiLinkable, chaining calls to the WpSiLinkable of the original item using the "monitor" context. This way, the monitor WpSessionItem does not need to share control of the underlying node; it only proxies calls to satisfy the API.
             * @param context an optional context for the ports
             * @returns a GVariant containing information about the ports of this item
             */
            get_ports(context?: string | null): GLib.Variant;

            // Virtual methods

            /**
             * Gets the acquisition interface associated with the item.
             */
            vfunc_get_acquisition(): SiAcquisition | null;
            /**
             * This method returns a variant of type "a(uuu)", where each tuple in the array contains the following information:
             *
             *
             *
             *  - u: (guint32) node id
             *  - u: (guint32) port id (the port must belong on the node specified above)
             *  - u: (guint32) the audio channel (enum spa_audio_channel) that this port makes available, or 0 for non-audio content
             *
             * The order in which ports appear in this array is important when no channel information is available. The link implementation should link the ports in the order they appear. This is normally a good enough substitute for channel matching.
             * The `context` argument can be used to get different sets of ports from the item. The following well-known contexts are defined:
             *  - NULL: get the standard ports to be linked
             *  - "monitor": get the monitor ports
             *  - "control": get the control port
             *  - "reverse": get the reverse direction ports, if this item controls a filter node, which would have ports on both directions
             *
             * Contexts other than NULL may only be used internally to ease the implementation of more complex item relationships. For example, a WpSessionItem that is in control of an input (sink) adapter node may implement WpSiLinkable where the NULL context will return the standard input ports and the "monitor" context will return the adapter's monitor ports. When linking this item to another item, the NULL context will always be used, but the item may internally spawn a secondary WpSessionItem that implements the "monitor" item. That secondary item may implement WpSiLinkable, chaining calls to the WpSiLinkable of the original item using the "monitor" context. This way, the monitor WpSessionItem does not need to share control of the underlying node; it only proxies calls to satisfy the API.
             * @param context an optional context for the ports
             */
            vfunc_get_ports(context?: string | null): GLib.Variant;
        }

        export const SiLinkable: SiLinkableNamespace & {
            new (): SiLinkable; // This allows `obj instanceof SiLinkable`
        };

        type ObjectFeatures = number;
        type SpaIdTable = any;
        type SpaIdValue = any;
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

    export default Wp;
}

declare module 'gi://Wp' {
    import Wp05 from 'gi://Wp?version=0.5';
    export default Wp05;
}
// END
