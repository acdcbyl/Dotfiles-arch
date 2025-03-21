/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gssdp-1.6.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GUPnP?version=1.6' {
    // Module dependencies
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GSSDP from 'gi://GSSDP?version=1.6';

    export namespace GUPnP {
        /**
         * GUPnP-1.6
         */

        /**
         * Error codes used during invocation of service actions.
         */
        class ControlError extends GLib.Error {
            static $gtype: GObject.GType<ControlError>;

            // Static fields

            /**
             * The action name was invalid.
             */
            static INVALID_ACTION: number;
            /**
             * The action arguments were invalid.
             */
            static INVALID_ARGS: number;
            /**
             * Out of sync (deprecated).
             */
            static OUT_OF_SYNC: number;
            /**
             * The action failed.
             */
            static ACTION_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Error codes during eventing of state variables.
         */
        class EventingError extends GLib.Error {
            static $gtype: GObject.GType<EventingError>;

            // Static fields

            /**
             * The subscription attempt failed.
             */
            static SUBSCRIPTION_FAILED: number;
            /**
             * The subscription was lost.
             */
            static SUBSCRIPTION_LOST: number;
            /**
             * The notification failed.
             */
            static NOTIFY_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Errors during [class`GUPnP`.RootDevice] creation
         */
        class RootdeviceError extends GLib.Error {
            static $gtype: GObject.GType<RootdeviceError>;

            // Static fields

            /**
             * No #GUPnPContext was passed to the root device.
             */
            static NO_CONTEXT: number;
            /**
             * Device description path was missing
             */
            static NO_DESCRIPTION_PATH: number;
            /**
             * Description folder was missing
             */
            static NO_DESCRIPTION_FOLDER: number;
            /**
             * Network interface is not usable
             */
            static NO_NETWORK: number;
            static FAIL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Error codes during communication with another server.
         */
        class ServerError extends GLib.Error {
            static $gtype: GObject.GType<ServerError>;

            // Static fields

            /**
             * Internal server error.
             */
            static INTERNAL_SERVER_ERROR: number;
            /**
             * The resource was not found.
             */
            static NOT_FOUND: number;
            /**
             * This method is not implemented.
             */
            static NOT_IMPLEMENTED: number;
            /**
             * Invalid response.
             */
            static INVALID_RESPONSE: number;
            /**
             * Invalid URL.
             */
            static INVALID_URL: number;
            /**
             * Unknown/unhandled error.
             */
            static OTHER: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Represents the direction of a service state variable.
         */

        /**
         * Represents the direction of a service state variable.
         */
        export namespace ServiceActionArgDirection {
            export const $gtype: GObject.GType<ServiceActionArgDirection>;
        }

        enum ServiceActionArgDirection {
            /**
             * An "in" variable, to the service.
             */
            IN,
            /**
             * An "out" variable, from the service.
             */
            OUT,
        }
        /**
         * Errors during service handling
         */
        class ServiceError extends GLib.Error {
            static $gtype: GObject.GType<ServiceError>;

            // Static fields

            /**
             * [method`GUPnP`.Service.signals_autoconnect] failed
             */
            static AUTOCONNECT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Errors during service introspection
         */
        class ServiceIntrospectionError extends GLib.Error {
            static $gtype: GObject.GType<ServiceIntrospectionError>;

            // Static fields

            /**
             * Unknown error
             */
            static OTHER: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Errors during occuring during processing of XML data.
         */
        class XMLError extends GLib.Error {
            static $gtype: GObject.GType<XMLError>;

            // Static fields

            /**
             * Generic XML parsing error.
             */
            static PARSE: number;
            /**
             * A required XML node was not found.
             */
            static NO_NODE: number;
            /**
             * An XML node is unexpectedly empty.
             */
            static EMPTY_NODE: number;
            /**
             * An XML node has an unknown attribute.
             */
            static INVALID_ATTRIBUTE: number;
            /**
             * Unknown/unhandled XML related errors.
             */
            static OTHER: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        function control_error_quark(): GLib.Quark;
        function eventing_error_quark(): GLib.Quark;
        /**
         * Generate and return a new UUID.
         * @returns A newly generated UUID in string representation.
         */
        function get_uuid(): string;
        function rootdevice_error_quark(): GLib.Quark;
        function server_error_quark(): GLib.Quark;
        function service_error_quark(): GLib.Quark;
        function service_introspection_error_quark(): GLib.Quark;
        function xml_error_quark(): GLib.Quark;
        interface ServiceProxyActionCallback {
            (proxy: ServiceProxy, action: ServiceProxyAction): void;
        }
        interface ServiceProxyNotifyCallback {
            (proxy: ServiceProxy, variable: string, value: GObject.Value | any): void;
        }
        type BinBase64 = object | null;
        type BinHex = object | null;
        type Date = object | null;
        type DateTime = object | null;
        type DateTimeTZ = object | null;
        type Time = object | null;
        type TimeTZ = object | null;
        type URI = object | null;
        type UUID = object | null;
        module Context {
            // Constructor properties interface

            interface ConstructorProps extends GSSDP.Client.ConstructorProps, Gio.Initable.ConstructorProps {
                acl: Acl;
                default_language: string;
                defaultLanguage: string;
                server: Soup.Server;
                session: Soup.Session;
                subscription_timeout: number;
                subscriptionTimeout: number;
            }
        }

        /**
         * Context object wrapping shared networking bits.
         *
         * #GUPnPContext wraps the networking bits that are used by the various
         * GUPnP classes. It automatically starts a web server on demand.
         *
         * For debugging, it is possible to see the messages being sent and received by
         * setting the environment variable `GUPNP_DEBUG`.
         */
        class Context extends GSSDP.Client implements Gio.Initable {
            static $gtype: GObject.GType<Context>;

            // Properties

            /**
             * An access control list.
             */
            get acl(): Acl;
            set acl(val: Acl);
            /**
             * The content of the Content-Language header id the client
             * sends Accept-Language and no language-specific pages to serve
             * exist. The property defaults to 'en'.
             */
            get default_language(): string;
            set default_language(val: string);
            /**
             * The content of the Content-Language header id the client
             * sends Accept-Language and no language-specific pages to serve
             * exist. The property defaults to 'en'.
             */
            get defaultLanguage(): string;
            set defaultLanguage(val: string);
            /**
             * The #SoupServer HTTP server used by GUPnP.
             */
            get server(): Soup.Server;
            /**
             * The #SoupSession object used by GUPnP.
             */
            get session(): Soup.Session;
            /**
             * The preferred subscription timeout: the number of seconds after
             * which subscriptions are renewed. Set to '0' if subscriptions
             * are never to time out.
             */
            get subscription_timeout(): number;
            /**
             * The preferred subscription timeout: the number of seconds after
             * which subscriptions are renewed. Set to '0' if subscriptions
             * are never to time out.
             */
            get subscriptionTimeout(): number;

            // Constructors

            constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](iface: string | null, port: number): Context;
            // Conflicted with GSSDP.Client.new

            static ['new'](...args: never[]): any;

            static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: GSSDP.UDAVersion): Context;

            static new_full(
                iface: string | null,
                addr: Gio.InetAddress | null,
                port: number,
                uda_version: GSSDP.UDAVersion,
            ): Context;

            // Methods

            /**
             * Add a #SoupServerCallback to the #GUPnPContext<!-- -->'s #SoupServer.
             * @param use_acl %TRUE, if the path should query the GUPnPContext::acl before serving the resource, %FALSE otherwise.
             * @param path the toplevel path for the handler.
             * @param callback callback to invoke for requests under @path
             * @param destroy A #GDestroyNotify for @user_data or %NULL if none.
             */
            add_server_handler(
                use_acl: boolean,
                path: string,
                callback: Soup.ServerCallback,
                destroy?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Access the #GUPnPAcl associated with this client. If there isn't any,
             * retturns %NULL. The returned ACL must not be freed.
             * @returns The access control list associated with this context or %NULL if no acl is set.
             */
            get_acl(): Acl;
            /**
             * Get the default Content-Language header for this context.
             * @returns The default content of the Content-Language header.
             */
            get_default_language(): string;
            /**
             * Get the port that the SOAP server is running on.
             * @returns The port the SOAP server is running on.
             */
            get_port(): number;
            /**
             * Get the #SoupServer HTTP server that GUPnP is using.
             * @returns The #SoupServer used by GUPnP. Do not unref this when finished.
             */
            get_server(): Soup.Server;
            /**
             * Get the #SoupSession object that GUPnP is using.
             * @returns The #SoupSession used by GUPnP. Do not unref this when finished.
             */
            get_session(): Soup.Session;
            /**
             * Get the event subscription timeout (in seconds), or 0 meaning there is no
             * timeout.
             * @returns The event subscription timeout in seconds.
             */
            get_subscription_timeout(): number;
            /**
             * Start hosting `local_path` at `server_path`. Files with the path
             * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
             * specified in the request's Accept-Language header.
             * @param local_path Path to the local file or folder to be hosted
             * @param server_path Web server path where @local_path should be hosted
             */
            host_path(local_path: string, server_path: string): void;
            /**
             * Use this method to serve different local path to specific user-agent(s). The
             * path `server_path` must already be hosted by `context`.
             * @param local_path Path to the local file or folder to be hosted
             * @param server_path Web server path already being hosted
             * @param user_agent The user-agent as a #GRegex.
             * @returns %TRUE on success, %FALSE otherwise.
             */
            host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;
            /**
             * Remove a #SoupServerCallback from the #GUPnPContext<!-- -->'s #SoupServer.
             * @param path the toplevel path for the handler.
             */
            remove_server_handler(path: string): void;
            /**
             * Utility function to re-write an uri to the IPv6 link-local form which has
             * the zone index appended to the IP address.
             * @param uri an uri to rewrite if necessary
             * @returns A re-written version of the @uri if the context is on a link-local IPv6 address, a copy of the @uri otherwise or %NULL if @uri was invalid
             */
            rewrite_uri(uri: string): string;
            /**
             * Attach or remove the assoicated access control list to this context. If
             * `acl` is %NULL, the current access control list will be removed.
             * @param acl The new access control list or %NULL to remove the current list.
             */
            set_acl(acl?: Acl | null): void;
            /**
             * Set the default language for the Content-Language header to `language`.
             *
             * If the client sends an Accept-Language header the UPnP HTTP server
             * is required to send a Content-Language header in return. If there are
             * no files hosted in languages which match the requested ones the
             * Content-Language header is set to this value. The default value is "en".
             * @param language A language tag as defined in RFC 2616 3.10
             */
            set_default_language(language: string): void;
            /**
             * Sets the event subscription timeout to `timeout`. Use 0 if you don't
             * want subscriptions to time out. Note that any client side subscriptions
             * will automatically be renewed.
             * @param timeout Event subscription timeout in seconds
             */
            set_subscription_timeout(timeout: number): void;
            /**
             * Stop hosting the file or folder at `server_path`.
             * @param server_path Web server path where the file or folder is hosted
             */
            unhost_path(server_path: string): void;

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

        module ContextFilter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                enabled: boolean;
                entries: string[];
            }
        }

        /**
         * Network context filter, used by [class`GUPnP`.ContextManager]
         *
         * #GUPnPContextFilter handles network filtering. It provides API to manage a
         * list of entries that will be used to positive filter networks. The #GUPnPContextFilter
         * could be enabled or not. If it's enabled but the entries list is empty, it
         * behaves as if being disabled.
         *
         * The GUPnPContextFilter is used with the [class`GUPnP`.ContextManager]
         * to narrow down the contexts that are notified by it.
         *
         * Contexts can be filtered by the following criteria:
         *
         *  - Their IP addresses
         *  - The network device they will live on
         *  - The name of the network the context would join
         *
         * To add or modify a context filter, you need to retrieve the current context filter
         * from the context manger using [method`GUPnP`.ContextManager.get_context_filter].
         *
         * By default, a context filter is empty and disabled.
         *
         * For example, to only react to contexts that are appearing on eth0 or when being in the WiFi network with
         * the SSID "HomeNetwork", and on IPv6 localhost, you should do:
         *
         *
         * ```c
         * GUPnPContextFilter* filter;
         *
         * filter = gupnp_context_manager_get_context_filter (manager);
         * const char *filter_entries[] = {
         *     "eth0",
         *     "HomeNetwork",
         *     "::1",
         *     NULL
         * };
         * gupnp_context_filter_add_entryv (filter, filter_entries);
         * gupnp_context_filter_set_enabled (filter, TRUE);
         * ```
         */
        class ContextFilter extends GObject.Object {
            static $gtype: GObject.GType<ContextFilter>;

            // Properties

            /**
             * Whether this context filter is active or not.
             */
            get enabled(): boolean;
            set enabled(val: boolean);
            /**
             * A list of items to filter for.
             */
            get entries(): string[];

            // Constructors

            constructor(properties?: Partial<ContextFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Add `entry` in the list of valid criteria used by `context_filter` to
             * filter networks.
             * if `entry` already exists, it won't be added a second time.
             * @param entry A value used to filter network
             * @returns %TRUE if @entry is added, %FALSE otherwise.
             */
            add_entry(entry: string): boolean;
            /**
             * Add a list of entries to a #GUPnPContextFilter. This is a helper function to
             * directly add a %NULL-terminated array of string usually acquired from
             * command line arguments.
             * @param entries A %NULL-terminated list of strings
             */
            add_entryv(entries: string[]): void;
            /**
             * It will check if the `context` is allowed or not. The `context_filter` will
             * check all its entries against #GUPnPContext interface, host IP and network
             * fields information. This function doesn't take into account the
             * `context_filter` status (enabled or not).
             * @param context A #GUPnPContext to test.
             * @returns %TRUE if @context is matching the @context_filter criteria, %FALSE otherwise.
             */
            check_context(context: Context): boolean;
            /**
             * Remove all entries from #GList that compose the context filter.
             * The list is now empty. Even if #GUPnPContextFilter is enabled, it will have
             * the same behavior as if it was disabled.
             */
            clear(): void;
            /**
             * Return the status of the #GUPnPContextFilter
             * @returns %TRUE if @context_filter is enabled, %FALSE otherwise.
             */
            get_enabled(): boolean;
            /**
             * Get the #GList of entries that compose the context filter. Do not free
             * @returns a #GList of entries used to filter networks, interfaces,... or %NULL.
             */
            get_entries(): string[] | null;
            /**
             * Return the state of the entries list of #GUPnPContextFilter
             * @returns %TRUE if @context_filter is empty, %FALSE otherwise.
             */
            is_empty(): boolean;
            /**
             * Remove `entry` in the list of valid criteria used by `context_filter` to
             * filter networks.
             * @param entry A value to remove from the filter list.
             * @returns %TRUE if @entry is removed, %FALSE otherwise.
             */
            remove_entry(entry: string): boolean;
            /**
             * Enable or disable the #GUPnPContextFilter to perform the network filtering.
             * @param enable %TRUE to enable @context_filter, %FALSE otherwise
             */
            set_enabled(enable: boolean): void;
        }

        module ContextManager {
            // Signal callback interfaces

            interface ContextAvailable {
                (context: Context): void;
            }

            interface ContextUnavailable {
                (context: Context): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context_filter: ContextFilter;
                contextFilter: ContextFilter;
                family: Gio.SocketFamily;
                port: number;
                uda_version: GSSDP.UDAVersion;
                udaVersion: GSSDP.UDAVersion;
            }
        }

        /**
         * A manager for [class`GUPnP`.Context] instances.
         *
         * This utility class that takes care of dynamic creation and destruction of
         * #GUPnPContext objects for all available network interfaces as they go up
         * (connect) and down (disconnect), respectively.
         *
         * The final implementation depends either on the underlying operating system
         * or can configured during compile time.
         *
         * It also provides a simple filtering facility if required. See [method`GUPnP`.ContextManager.get_context_filter] and
         * [class`GUPnP`.ContextFilter] for details.
         */
        abstract class ContextManager extends GObject.Object {
            static $gtype: GObject.GType<ContextManager>;

            // Properties

            /**
             * The context filter to use.
             */
            get context_filter(): ContextFilter;
            /**
             * The context filter to use.
             */
            get contextFilter(): ContextFilter;
            /**
             * The socket family to create contexts for. Use %G_SOCKET_FAMILY_INVALID
             * for any or %G_SOCKET_FAMILY_IPV4 for IPv4 contexts or
             * %G_SOCKET_FAMILY_IPV6 for IPv6 contexts
             */
            get family(): Gio.SocketFamily;
            /**
             * Port the contexts listen on, or 0 if you don't care what
             * port is used by #GUPnPContext objects created by this object.
             */
            get port(): number;
            /**
             * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
             * for using the default UDA version.
             */
            get uda_version(): GSSDP.UDAVersion;
            /**
             * The UDA version the contexts will support. Use %GSSDP_UDA_VERSION_UNSPECIFIED
             * for using the default UDA version.
             */
            get udaVersion(): GSSDP.UDAVersion;

            // Constructors

            constructor(properties?: Partial<ContextManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'context-available', callback: (_source: this, context: Context) => void): number;
            connect_after(signal: 'context-available', callback: (_source: this, context: Context) => void): number;
            emit(signal: 'context-available', context: Context): void;
            connect(signal: 'context-unavailable', callback: (_source: this, context: Context) => void): number;
            connect_after(signal: 'context-unavailable', callback: (_source: this, context: Context) => void): number;
            emit(signal: 'context-unavailable', context: Context): void;

            // Static methods

            /**
             * Factory-method to create a new #GUPnPContextManager. The final type of the
             * #GUPnPContextManager depends on the compile-time selection or - in case of
             * NetworkManager - on its availability during run-time. If it is not available,
             * the implementation falls back to the basic Unix context manager instead.
             *
             * Equivalent to calling #gupnp_context_manager_create_full (%GSSDP_UDA_VERSION_1_0, %G_SOCKET_FAMILY_IPV4, port);
             * @param port Port to create contexts for, or 0 if you don't care what port is used.
             */
            static create(port: number): ContextManager;
            /**
             * Factory-method to create a new #GUPnPContextManager. The final type of the
             * #GUPnPContextManager depends on the compile-time selection or - in case of
             * NetworkManager - on its availability during run-time. If it is not available,
             * the implementation falls back to the basic Unix context manager instead.
             * @param uda_version #GSSDPUDAVersion the created contexts should implement (UDA 1.0 or 1.1). For %GSSDP_UDA_VERSION_UNSPECIFIED for default.
             * @param family #GSocketFamily to create the context for
             * @param port Port to create contexts for, or 0 if you don't care what port is used.
             */
            static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;

            // Methods

            /**
             * Get the #GUPnPContextFilter associated with `manager`.
             * @returns The #GUPnPContextFilter associated with this context manager.
             */
            get_context_filter(): ContextFilter;
            /**
             * Get the network port associated with this context manager.
             * @returns The network port associated with this context manager.
             */
            get_port(): number;
            /**
             * Get the #GSocketFamily the contexts are created for. Can be
             * %G_SOCKET_FAMILY_IPV6, %G_SOCKET_FAMILY_IPV4 or %G_SOCKET_FAMILY_INVALID for
             * both
             * @returns The socket family
             */
            get_socket_family(): Gio.SocketFamily;
            /**
             * Get the UDA protocol version the contexts are implementing
             * @returns The UDA protocol version
             */
            get_uda_version(): GSSDP.UDAVersion;
            /**
             * By calling this function, you are asking `manager` to keep a reference to
             * `control_point` until its associated #GUPnPContext is no longer available.
             * You usually want to call this function from your
             * [signal`GUPnP`.ContextManager::context-available] handler after you create a
             * #GUPnPControlPoint object for the newly available context.
             * You usually then give up your own reference to the control point so it will be
             * automatically destroyed if its context is no longer available.
             *
             * This function is mainly useful when implementing an UPnP client.
             *
             * ```c
             * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
             * {
             *     GUPnPControlPoint *cp = gupnp_control_point_new (context, "urn:schemas-upnp-org:device:MediaRenderer:1");
             *     gupnp_context_manager_manage_control_point (manager, cp);
             *     // Subscribe to control point's signals etc.
             *     g_object_unref (cp);
             * }
             * ```
             * @param control_point The #GUPnPControlPoint to be taken care of
             */
            manage_control_point(control_point: ControlPoint): void;
            /**
             * By calling this function, you are asking `manager` to keep a reference to
             * `root_device` when its associated #GUPnPContext is no longer available. You
             * usually want to call this function from
             * [signal`GUPnP`.ContextManager::context-available] handler after you create a
             * #GUPnPRootDevice object for the newly available context.
             *
             * You usually then give up your own reference to the root device so it will be
             * automatically destroyed if its context is no longer available.
             *
             * This function is mainly useful when implementing an UPnP client.
             *
             * ```c
             * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
             * {
             *     GError *error = NULL;
             *
             *     GUPnPRootDevice *rd = gupnp_root_device_new (context, "BasicLight1.xml", ".", &error);
             *     gupnp_context_manager_manage_root_device (manager, rd);
             *     // Subscribe to control point's signals etc.
             *     g_object_unref (rd);
             * }
             * ```
             * @param root_device The #GUPnPRootDevice to be taken care of
             */
            manage_root_device(root_device: RootDevice): void;
            /**
             * This function starts a rescan on every control point managed by `manager`.
             * Only the active control points send discovery messages.
             * This function should be called when servers are suspected to have
             * disappeared.
             */
            rescan_control_points(): void;
        }

        module ControlPoint {
            // Signal callback interfaces

            interface DeviceProxyAvailable {
                (proxy: DeviceProxy): void;
            }

            interface DeviceProxyUnavailable {
                (proxy: DeviceProxy): void;
            }

            interface ServiceProxyAvailable {
                (proxy: ServiceProxy): void;
            }

            interface ServiceProxyUnavailable {
                (proxy: ServiceProxy): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GSSDP.ResourceBrowser.ConstructorProps {
                resource_factory: ResourceFactory;
                resourceFactory: ResourceFactory;
            }
        }

        /**
         * Network resource discovery.
         *
         * #GUPnPControlPoint handles device and service discovery. After creating
         * a control point and activating it using [method`GSSDP`.ResourceBrowser.set_active],
         * the [signal`GUPnP`.ControlPoint::device-proxy-available],
         * [signal`GUPnP`.ControlPoint::service-proxy-available],
         * [signal`GUPnP`.ControlPoint::device-proxy-unavailable] and
         * [signal`GUPnP`.ControlPoint::service-proxy-unavailable] signals will
         * be emitted whenever the availability of a device or service matching
         * the specified discovery target changes.
         */
        class ControlPoint extends GSSDP.ResourceBrowser {
            static $gtype: GObject.GType<ControlPoint>;

            // Properties

            /**
             * The resource factory to use. Set to NULL for default factory.
             */
            get resource_factory(): ResourceFactory;
            /**
             * The resource factory to use. Set to NULL for default factory.
             */
            get resourceFactory(): ResourceFactory;

            // Constructors

            constructor(properties?: Partial<ControlPoint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: Context, target: string): ControlPoint;

            static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-proxy-available', callback: (_source: this, proxy: DeviceProxy) => void): number;
            connect_after(
                signal: 'device-proxy-available',
                callback: (_source: this, proxy: DeviceProxy) => void,
            ): number;
            emit(signal: 'device-proxy-available', proxy: DeviceProxy): void;
            connect(signal: 'device-proxy-unavailable', callback: (_source: this, proxy: DeviceProxy) => void): number;
            connect_after(
                signal: 'device-proxy-unavailable',
                callback: (_source: this, proxy: DeviceProxy) => void,
            ): number;
            emit(signal: 'device-proxy-unavailable', proxy: DeviceProxy): void;
            connect(signal: 'service-proxy-available', callback: (_source: this, proxy: ServiceProxy) => void): number;
            connect_after(
                signal: 'service-proxy-available',
                callback: (_source: this, proxy: ServiceProxy) => void,
            ): number;
            emit(signal: 'service-proxy-available', proxy: ServiceProxy): void;
            connect(
                signal: 'service-proxy-unavailable',
                callback: (_source: this, proxy: ServiceProxy) => void,
            ): number;
            connect_after(
                signal: 'service-proxy-unavailable',
                callback: (_source: this, proxy: ServiceProxy) => void,
            ): number;
            emit(signal: 'service-proxy-unavailable', proxy: ServiceProxy): void;

            // Virtual methods

            vfunc_device_proxy_available(proxy: DeviceProxy): void;
            vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;
            vfunc_service_proxy_available(proxy: ServiceProxy): void;
            vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;

            // Methods

            /**
             * Get the #GUPnPControlPoint associated with `control_point`.
             * @returns The #GUPnPContext.
             */
            get_context(): Context;
            /**
             * Get the #GUPnPResourceFactory used by the `control_point`. If none was set during construction
             * by calling [ctor`GUPnP`.ControlPoint.new_full], equivalent to calling
             * [func`GUPnP`.ResourceFactory.get_default]
             * @returns The #GUPnPResourceFactory used by this control point
             */
            get_resource_factory(): ResourceFactory;
            /**
             * Get the list of #GUPnPDeviceProxy objects the control point currently assumes to
             * be active.
             *
             * Since a device might have gone offline without signalizing it, but
             * the automatic resource timeout has not happened yet, it is possible that some of
             * the devices listed are not available anymore on the network.
             *
             * Do not free the list nor its elements.
             * @returns Device proxies currently assumed to be active.
             */
            list_device_proxies(): DeviceProxy[];
            /**
             * Get the list of discovered #GUPnPServiceProxy objects the control point currently assumes to
             * be active.
             *
             * Since a device might have gone offline without signalizing it, but
             * the automatic resource timeout has not happened yet, it is possible that some of
             * the services listed are not available anymore on the network.
             *
             * Do not free the list nor its elements.
             * @returns Service proxies currently assumed to be active.
             */
            list_service_proxies(): ServiceProxy[];
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends DeviceInfo.ConstructorProps {
                root_device: RootDevice;
                rootDevice: RootDevice;
            }
        }

        /**
         * Base class for UPnP device implementations.
         *
         * #GUPnPDevice allows for retrieving a device's sub-devices
         * and services. #GUPnPDevice implements the #GUPnPDeviceInfo
         * interface.
         */
        class Device extends DeviceInfo {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * The containing #GUPnPRootDevice, or NULL if this is the root
             * device.
             */
            get root_device(): RootDevice;
            /**
             * The containing #GUPnPRootDevice, or NULL if this is the root
             * device.
             */
            get rootDevice(): RootDevice;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module DeviceInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: Context;
                device_type: string;
                deviceType: string;
                document: XMLDoc;
                element: any;
                location: string;
                resource_factory: ResourceFactory;
                resourceFactory: ResourceFactory;
                udn: string;
                url_base: GLib.Uri;
                urlBase: GLib.Uri;
            }
        }

        /**
         * Device information shared by local and remote devices
         *
         * This class aggregates the information that is shared between remote and local
         * devices.
         */
        abstract class DeviceInfo extends GObject.Object {
            static $gtype: GObject.GType<DeviceInfo>;

            // Properties

            /**
             * The #GUPnPContext to use.
             */
            get context(): Context;
            /**
             * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
             */
            get device_type(): string;
            /**
             * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
             */
            get deviceType(): string;
            /**
             * The description document
             */
            get document(): XMLDoc;
            set document(val: XMLDoc);
            /**
             * Private property.
             */
            set element(val: any);
            /**
             * The location of the device description file.
             */
            get location(): string;
            set location(val: string);
            /**
             * The resource factory to use. Set to NULL for default factory.
             */
            get resource_factory(): ResourceFactory;
            /**
             * The resource factory to use. Set to NULL for default factory.
             */
            get resourceFactory(): ResourceFactory;
            /**
             * The UDN of this device.
             */
            get udn(): string;
            /**
             * The URL base (#GUri).
             */
            get url_base(): GLib.Uri;
            set url_base(val: GLib.Uri);
            /**
             * The URL base (#GUri).
             */
            get urlBase(): GLib.Uri;
            set urlBase(val: GLib.Uri);

            // Constructors

            constructor(properties?: Partial<DeviceInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the associated #GUPnPContext.
             * @returns The #GUPnPContext the devices is operating on.
             */
            get_context(): Context;
            /**
             * This function provides generic access to the contents of arbitrary elements
             * in the device description file.
             * @param element Name of the description element to retrieve
             * @returns a newly allocated string containing the requested value or %NULL if the device description doesn't contain the given @element
             */
            get_description_value(element: string): string | null;
            /**
             * Get the device with type `type` directly contained in `info` as
             * a new object implementing #GUPnPDeviceInfo, or %NULL if no such device
             * was found. The returned object should be unreffed when done.
             *
             * Note that devices are not cached internally, so that every time you call
             * this function a new object is created. The application must cache any used
             * devices if it wishes to keep them around and re-use them.
             * @param type The type of the device to be retrieved.
             * @returns A new #GUPnPDeviceInfo.
             */
            get_device(type: string): DeviceInfo | null;
            /**
             * Get the UPnP device type of this #GUPnPDeviceInfo, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
             * @returns A constant string, or %NULL.
             */
            get_device_type(): string;
            /**
             * Get the friendly name of the device.
             * @returns A newly allocated string containing the "friendly name" of the device, or %NULL if not available. g_free() after use.
             */
            get_friendly_name(): string | null;
            /**
             * Download the device icon matching the request parameters. For details on
             * the lookup procedure, see [method`GUPnP`.DeviceInfo.get_icon_url]
             * @param requested_mime_type The requested file format, or %NULL for any
             * @param requested_depth The requested color depth, or -1 for any
             * @param requested_width The requested width, or -1 for any
             * @param requested_height The requested height, or -1 for any
             * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
             * @param cancellable
             */
            get_icon_async(
                requested_mime_type: string | null,
                requested_depth: number,
                requested_width: number,
                requested_height: number,
                prefer_bigger: boolean,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[GLib.Bytes, string, number, number, number]>;
            /**
             * Download the device icon matching the request parameters. For details on
             * the lookup procedure, see [method`GUPnP`.DeviceInfo.get_icon_url]
             * @param requested_mime_type The requested file format, or %NULL for any
             * @param requested_depth The requested color depth, or -1 for any
             * @param requested_width The requested width, or -1 for any
             * @param requested_height The requested height, or -1 for any
             * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
             * @param cancellable
             * @param callback
             */
            get_icon_async(
                requested_mime_type: string | null,
                requested_depth: number,
                requested_width: number,
                requested_height: number,
                prefer_bigger: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Download the device icon matching the request parameters. For details on
             * the lookup procedure, see [method`GUPnP`.DeviceInfo.get_icon_url]
             * @param requested_mime_type The requested file format, or %NULL for any
             * @param requested_depth The requested color depth, or -1 for any
             * @param requested_width The requested width, or -1 for any
             * @param requested_height The requested height, or -1 for any
             * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
             * @param cancellable
             * @param callback
             */
            get_icon_async(
                requested_mime_type: string | null,
                requested_depth: number,
                requested_width: number,
                requested_height: number,
                prefer_bigger: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[GLib.Bytes, string, number, number, number]> | void;
            get_icon_finish(res: Gio.AsyncResult): [GLib.Bytes, string, number, number, number];
            /**
             * Get an URL pointing to the icon most closely matching the
             * given criteria, or %NULL.
             *
             * If `requested_mime_type` is set, only icons with
             * this mime type will be returned. If `requested_depth` is set, only icons with
             * this or lower depth will be returned. If `requested_width` and/or
             * `requested_height` are set, only icons that are this size or smaller are
             * returned, unless `prefer_bigger` is set, in which case the next biggest icon
             * will be returned. The returned strings should be freed.
             * @param requested_mime_type The requested file format, or %NULL for any
             * @param requested_depth The requested color depth, or -1 for any
             * @param requested_width The requested width, or -1 for any
             * @param requested_height The requested height, or -1 for any
             * @param prefer_bigger %TRUE if a bigger, rather than a smaller icon should be returned if no exact match could be found
             * @returns a string, or %NULL.  g_free() after use.
             */
            get_icon_url(
                requested_mime_type: string | null,
                requested_depth: number,
                requested_width: number,
                requested_height: number,
                prefer_bigger: boolean,
            ): [string | null, string, number, number, number];
            /**
             * Get the URL of the device file
             * @returns A s
             */
            get_location(): string;
            /**
             * Get the manufacturer of the device.
             * @returns A newly allocated string containing the manufacturer of the device, or %NULL if not available. g_free() after use.
             */
            get_manufacturer(): string | null;
            /**
             * Get an URL pointing to the manufacturer's website.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_manufacturer_url(): string | null;
            /**
             * Get the description of the device model.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_model_description(): string | null;
            /**
             * Get the model name of the device.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_model_name(): string | null;
            /**
             * Get the model number of the device.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_model_number(): string | null;
            /**
             * Get an URL pointing to the device model's website.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_model_url(): string | null;
            /**
             * Get an URL pointing to the device's presentation page, for web-based
             * administration, if available.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_presentation_url(): string | null;
            /**
             * Get the #GUPnPResourceFactory used by the `device_info`.
             * @returns A #GUPnPResourceFactory.
             */
            get_resource_factory(): ResourceFactory;
            /**
             * Get the serial number of the device.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_serial_number(): string | null;
            /**
             * Get the service with type `type` directly contained in `info` as a new object
             * implementing #GUPnPServiceInfo, or %NULL if no such device was found.
             *
             * Note that services are not cached internally, so that every time you call
             * this function a new object is created. The application must cache any used
             * services if it wishes to keep them around and re-use them.
             * @param type The type of the service to be retrieved.
             * @returns A #GUPnPServiceInfo.
             */
            get_service(type: string): ServiceInfo | null;
            /**
             * Get the Unique Device Name of the device.
             * @returns A constant string.
             */
            get_udn(): string;
            /**
             * Get the Universal Product Code of the device.
             * @returns A string, or %NULL. g_free() after use.
             */
            get_upc(): string | null;
            /**
             * Get the URL base of this device.
             * @returns A #SoupURI.
             */
            get_url_base(): GLib.Uri;
            /**
             * Get a #GList of strings representing the types of the devices
             * directly contained in `info`.
             * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
             */
            list_device_types(): string[] | null;
            /**
             * Get a #GList of new objects implementing #GUPnPDeviceInfo
             * representing the devices directly contained in `info,` excluding itself.
             *
             * Note that devices are not cached internally, so that every time you
             * call this function new objects are created. The application
             * must cache any used devices if it wishes to keep them around and re-use
             * them.
             * @returns a #GList of new #GUPnPDeviceInfo objects or %NULL if no devices are
             */
            list_devices(): DeviceInfo[] | null;
            /**
             * Get a #GList of strings that represent the device capabilities as announced
             * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
             * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
             */
            list_dlna_capabilities(): string[] | null;
            /**
             * Get a list of strings that represent the device class and version as
             * announced in the device description file using the `<dlna:X_DLNADOC>`
             * element, e.g. `DMS-1.51`, `M-DMS-1.51` and so on.
             * @returns a #GList of newly allocated strings or %NULL if the device description doesn't contain any `<dlna:X_DLNADOC>` element.
             */
            list_dlna_device_class_identifier(): string[] | null;
            /**
             * Get a #GList of strings representing the types of the services
             * directly contained in `info,` but not in its subdevices.
             * @returns A #GList of strings. The elements should be g_free()'d and the list should be g_list_free()'d.
             */
            list_service_types(): string[] | null;
            /**
             * Get a #GList of new objects implementing #GUPnPServiceInfo representing the
             * services directly contained in `info`. The returned list should be
             * g_list_free()'d and the elements should be g_object_unref()'d.
             *
             * Note that services are not cached internally, so that every time you call
             * function new objects are created. The application must cache any used
             * services if it wishes to keep them around and re-use them.
             * @returns A #GList of new #GUPnPServiceInfo objects.
             */
            list_services(): ServiceInfo[] | null;
        }

        module DeviceProxy {
            // Constructor properties interface

            interface ConstructorProps extends DeviceInfo.ConstructorProps {}
        }

        /**
         * Interaction with remote UPnP devices.
         *
         * #GUPnPDeviceProxy allows for retrieving proxies for a device's sub-devices
         * and services. It implements the [class`GUPnP`.DeviceInfo] abstract class.
         */
        class DeviceProxy extends DeviceInfo {
            static $gtype: GObject.GType<DeviceProxy>;

            // Constructors

            constructor(properties?: Partial<DeviceProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module ResourceFactory {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Associating custom Services, Devices, ServiceProxies and DeviceProxies with UPnP types.
         *
         * #GUPnPResourceFactory objects are used by [class`GUPnP`.ControlPoint],
         * [class`GUPnP`.DeviceProxy] and [class`GUPnP`.Device] to create resource proxy and resource
         * objects.
         *
         * Register UPnP type - [alias`GLib`.Type] pairs to have resource or resource proxy
         * objects created with the specified #GType whenever an object for a resource
         * of the specified UPnP type is requested. The #GType needs
         * to be derived from the relevant resource or resource proxy type (e.g.
         * a device proxy type needs to be derived from [class`GUPnP`.DeviceProxy]).
         */
        class ResourceFactory extends GObject.Object {
            static $gtype: GObject.GType<ResourceFactory>;

            // Constructors

            constructor(properties?: Partial<ResourceFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ResourceFactory;

            // Static methods

            /**
             * Get the default singleton #GUPnPResourceFactory object.
             */
            static get_default(): ResourceFactory;

            // Methods

            /**
             * Registers the GType `type` for the proxy of resource of UPnP type `upnp_type`.
             * After this call, the factory `factory` will create object of GType `type` each
             * time it is asked to create a resource proxy object for UPnP type `upnp_type`.
             *
             * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE_PROXY if
             * resource is a device or #GUPNP_TYPE_SERVICE_PROXY if its a service.
             * @param upnp_type The UPnP type name of the resource.
             * @param type The requested GType assignment for the resource proxy.
             */
            register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;
            /**
             * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
             * this call, the factory `factory` will create object of GType `type` each time
             * it is asked to create a resource object for UPnP type `upnp_type`.
             *
             * You can either register a type for a concrete version of a device or service
             * such as urn:schemas-upnp-org:service:AVTransport:2 or version-independently,
             * urn:schemas-upnp-org:service:AVTransport. If you register for an explicit
             * version of a service, it will be an exact match.
             *
             * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
             * a device or #GUPNP_TYPE_SERVICE if its a service.
             * @param upnp_type The UPnP type name of the resource.
             * @param type The requested GType assignment for the resource.
             */
            register_resource_type(upnp_type: string, type: GObject.GType): void;
            /**
             * Unregisters the GType assignment for the proxy of resource of UPnP type
             * `upnp_type`.
             * @param upnp_type The UPnP type name of the resource.
             * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
             */
            unregister_resource_proxy_type(upnp_type: string): boolean;
            /**
             * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
             * @param upnp_type The UPnP type name of the resource.
             * @returns %TRUE if GType assignment was removed successfully, %FALSE otherwise.
             */
            unregister_resource_type(upnp_type: string): boolean;
        }

        module RootDevice {
            // Constructor properties interface

            interface ConstructorProps extends Device.ConstructorProps, Gio.Initable.ConstructorProps {
                available: boolean;
                description_dir: string;
                descriptionDir: string;
                description_path: string;
                descriptionPath: string;
            }
        }

        /**
         * Implementation of an UPnP root device.
         *
         * #GUPnPRootDevice allows for implementing root devices.
         */
        class RootDevice extends Device implements Gio.Initable {
            static $gtype: GObject.GType<RootDevice>;

            // Properties

            /**
             * TRUE if this device is available.
             */
            get available(): boolean;
            set available(val: boolean);
            /**
             * The path to a folder where description documents are provided.
             */
            get description_dir(): string;
            /**
             * The path to a folder where description documents are provided.
             */
            get descriptionDir(): string;
            /**
             * The path to device description document. This could either be an
             * absolute path or path relative to GUPnPRootDevice:description-dir.
             */
            get description_path(): string;
            /**
             * The path to device description document. This could either be an
             * absolute path or path relative to GUPnPRootDevice:description-dir.
             */
            get descriptionPath(): string;

            // Constructors

            constructor(properties?: Partial<RootDevice.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](context: Context, description_path: string, description_folder: string): RootDevice;

            static new_full(
                context: Context,
                factory: ResourceFactory,
                description_doc: XMLDoc,
                description_path: string,
                description_folder: string,
            ): RootDevice;

            // Methods

            /**
             * Checks whether `root_device` is available on the network (announcing its presence).
             * @returns %TRUE if @root_device is available, %FALSE otherwise.
             */
            get_available(): boolean;
            /**
             * Gets the path to the directory containing description documents related to
             * `root_device`.
             * @returns The path to description document directory of @root_device.
             */
            get_description_dir(): string;
            /**
             * Gets the name of the description document as hosted via HTTP.
             * @returns The relative location of @root_device.
             */
            get_description_document_name(): string;
            /**
             * Gets the path to the device description document of `root_device`.
             * @returns The path to device description document of @root_device.
             */
            get_description_path(): string;
            /**
             * Gets the #GSSDPResourceGroup used by `root_device`.
             * @returns The #GSSDPResourceGroup of @root_device.
             */
            get_ssdp_resource_group(): GSSDP.ResourceGroup;
            /**
             * Sets the availability of `root_device` on the network (announcing
             * its presence).
             * @param available %TRUE if @root_device should be available
             */
            set_available(available: boolean): void;

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

        module Service {
            // Signal callback interfaces

            interface ActionInvoked {
                (action: ServiceAction): void;
            }

            interface NotifyFailed {
                (callback_url: GLib.Uri[], reason: GLib.Error): void;
            }

            interface QueryVariable {
                (variable: string, value: GObject.Value | any): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends ServiceInfo.ConstructorProps {
                root_device: RootDevice;
                rootDevice: RootDevice;
            }
        }

        /**
         * Implementation of an UPnP service
         *
         * #GUPnPService allows for handling incoming actions and state variable
         * notification. It implements the [class`GUPnP`.ServiceInfo] interface.
         *
         * To implement a service, you can either connect to the [signal`GUPnP`.Service::action-invoked]
         * and [signal`GUPnP`.Service::query-variable] or derive from the `GUPnPService` class and override
         * the virtual functions [vfunc`GUPnP`.Service.action_invoked] and  [vfunc`GUPnP`.Service.query_variable].
         *
         * For more details, see the ["Implementing UPnP devices"](server-tutorial.html#implementing-a-service) document
         */
        class Service extends ServiceInfo {
            static $gtype: GObject.GType<Service>;

            // Properties

            /**
             * The containing #GUPnPRootDevice.
             */
            get root_device(): RootDevice;
            /**
             * The containing #GUPnPRootDevice.
             */
            get rootDevice(): RootDevice;

            // Constructors

            constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'action-invoked', callback: (_source: this, action: ServiceAction) => void): number;
            connect_after(signal: 'action-invoked', callback: (_source: this, action: ServiceAction) => void): number;
            emit(signal: 'action-invoked', action: ServiceAction): void;
            connect(
                signal: 'notify-failed',
                callback: (_source: this, callback_url: GLib.Uri[], reason: GLib.Error) => void,
            ): number;
            connect_after(
                signal: 'notify-failed',
                callback: (_source: this, callback_url: GLib.Uri[], reason: GLib.Error) => void,
            ): number;
            emit(signal: 'notify-failed', callback_url: GLib.Uri[], reason: GLib.Error): void;
            connect(
                signal: 'query-variable',
                callback: (_source: this, variable: string, value: GObject.Value) => void,
            ): number;
            connect_after(
                signal: 'query-variable',
                callback: (_source: this, variable: string, value: GObject.Value) => void,
            ): number;
            emit(signal: 'query-variable', variable: string, value: GObject.Value | any): void;

            // Virtual methods

            /**
             * Default handler for [signal`GUPnP`.Service::action_invoked]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param action a `GUPnPServiceAction`
             */
            vfunc_action_invoked(action: ServiceAction): void;
            /**
             * Default handler for [signal`GUPnP`.Service::notify_failed]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param callback_urls a list of call-back urls that failed the notification
             * @param reason An error that describes why the notification failed
             */
            vfunc_notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;
            /**
             * Default handler for [signal`GUPnP`.Service::query_variable]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param variable the name of the variable that was queried
             * @param value a value that should be filled to the current value of @variable
             */
            vfunc_query_variable(variable: string, value: GObject.Value | any): void;

            // Methods

            /**
             * Default handler for [signal`GUPnP`.Service::action_invoked]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param action a `GUPnPServiceAction`
             */
            action_invoked(action: ServiceAction): void;
            /**
             * Stops sending out notifications to remote clients.
             *
             * It causes new notifications to be queued up until [method`GUPnP`.Service.thaw_notify] is called.
             */
            freeze_notify(): void;
            /**
             * Default handler for [signal`GUPnP`.Service::notify_failed]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param callback_urls a list of call-back urls that failed the notification
             * @param reason An error that describes why the notification failed
             */
            notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;
            /**
             * Notifies remote clients that `variable` has changed to `value`.
             * @param variable the name of the variable to notify
             * @param value the value of the variable
             */
            notify_value(variable: string, value: GObject.Value | any): void;
            /**
             * Default handler for [signal`GUPnP`.Service::query_variable]. See its documentation for details.
             *
             * Can be overridden by child classes instead of connecting to the signal.
             * @param variable the name of the variable that was queried
             * @param value a value that should be filled to the current value of @variable
             */
            query_variable(variable: string, value: GObject.Value | any): void;
            /**
             * Sends out any pending notifications, and stops queuing of new ones.
             */
            thaw_notify(): void;
        }

        module ServiceInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                context: Context;
                document: XMLDoc;
                element: any;
                location: string;
                service_type: string;
                serviceType: string;
                udn: string;
                url_base: GLib.Uri;
                urlBase: GLib.Uri;
            }
        }

        /**
         * Service information shared by local and remote services.
         *
         * A class that contains the common parts between local and remote services.
         */
        abstract class ServiceInfo extends GObject.Object {
            static $gtype: GObject.GType<ServiceInfo>;

            // Properties

            /**
             * The #GUPnPContext to use.
             */
            get context(): Context;
            /**
             * Private property.
             */
            set document(val: XMLDoc);
            /**
             * Private property.
             */
            set element(val: any);
            /**
             * The location of the device description file.
             */
            get location(): string;
            /**
             * The service type.
             */
            get service_type(): string;
            /**
             * The service type.
             */
            get serviceType(): string;
            /**
             * The UDN of the containing device.
             */
            get udn(): string;
            /**
             * The URL base (#SoupURI).
             */
            get url_base(): GLib.Uri;
            /**
             * The URL base (#SoupURI).
             */
            get urlBase(): GLib.Uri;

            // Constructors

            constructor(properties?: Partial<ServiceInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the #GUPnPContext associated with `info`.
             * @returns A #GUPnPContext.
             */
            get_context(): Context;
            /**
             * Get the control URL for this service, or %NULL..
             * @returns A string. This string should be freed with g_free() after use.
             */
            get_control_url(): string;
            /**
             * Get the event subscription URL for this service, or %NULL.
             * @returns A string. This string should be freed with g_free() after use.
             */
            get_event_subscription_url(): string;
            /**
             * Get the serviceID of this service, or %NULL if there is no ID.
             *
             * The serviceID should be unique to a device. This makes it possible to provide
             * the same serviceType multiple times on one device
             *
             * Example: `org:serviceId:RenderingControl`
             * @returns A string. This string should be freed with g_free() after use.
             */
            get_id(): string;
            /**
             * Get the location of the device description file.
             * @returns A constant string.
             */
            get_location(): string;
            /**
             * Get the SCPD URL for this service, or %NULL if there is no SCPD.
             * @returns A string. This string should be freed with g_free() after use.
             */
            get_scpd_url(): string;
            /**
             * Get the UPnP service type, or %NULL.
             *
             * Example: `urn:schemas-upnp-org:service:RenderingControl:1`
             * @returns A constant string.
             */
            get_service_type(): string;
            /**
             * Get the Unique Device Name of the containing device.
             * @returns A constant string.
             */
            get_udn(): string;
            /**
             * Get the URL base of this service.
             * @returns A constant #SoupURI.
             */
            get_url_base(): GLib.Uri;
            /**
             * Note that introspection object is created from the information in service
             * description document (SCPD) provided by the service so it can not be created
             * if the service does not provide a SCPD.
             *
             * If `cancellable` is used to cancel the call, `callback` will be called with
             * error code %G_IO_ERROR_CANCELLED.
             * @param cancellable a #GCancellable that can be used to cancel the call.
             */
            introspect_async(cancellable?: Gio.Cancellable | null): Promise<ServiceIntrospection | null>;
            /**
             * Note that introspection object is created from the information in service
             * description document (SCPD) provided by the service so it can not be created
             * if the service does not provide a SCPD.
             *
             * If `cancellable` is used to cancel the call, `callback` will be called with
             * error code %G_IO_ERROR_CANCELLED.
             * @param cancellable a #GCancellable that can be used to cancel the call.
             * @param callback callback to be called when introspection object is ready.
             */
            introspect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Note that introspection object is created from the information in service
             * description document (SCPD) provided by the service so it can not be created
             * if the service does not provide a SCPD.
             *
             * If `cancellable` is used to cancel the call, `callback` will be called with
             * error code %G_IO_ERROR_CANCELLED.
             * @param cancellable a #GCancellable that can be used to cancel the call.
             * @param callback callback to be called when introspection object is ready.
             */
            introspect_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ServiceIntrospection | null> | void;
            /**
             * Finish an asynchronous call initiated with
             * gupnp_service_info_introspect_async().
             * @param res A #GAsyncResult
             * @returns %NULL, if the call had an error, a #GUPnPServiceIntrospection object otherwise.
             */
            introspect_finish(res: Gio.AsyncResult): ServiceIntrospection | null;
        }

        module ServiceIntrospection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                scpd: any;
            }
        }

        /**
         * Introspection of local and remote services..
         *
         * The #GUPnPServiceIntrospection class provides methods for service
         * introspection based on information contained in its service description
         * document (SCPD). There is no constructor provided for this class, please use
         * [method`GUPnP`.ServiceInfo.introspect_async] to create a
         * #GUPnPServiceIntrospection object for a specific service.
         *
         * Note that all the introspection information is retrieved from the service
         * description document (SCPD) provided by the service and hence can not be
         * guaranteed to be complete. An UPnP service is required to provide a SCPD but
         * unfortunately, many services either do not provide this document or the
         * document does not provide any or all of the introspection information.
         *
         * This class exposes internals of the UPnP protocol and should not need
         * to be used for regular device or control point development.
         */
        class ServiceIntrospection extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<ServiceIntrospection>;

            // Properties

            /**
             * The scpd of the device description file.
             */
            set scpd(val: any);

            // Constructors

            constructor(properties?: Partial<ServiceIntrospection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the action by the name `action_name` in this service.
             * @param action_name The name of the action to retrieve
             * @returns the action or %NULL. Do not modify or free it.
             */
            get_action(action_name: string): ServiceActionInfo | null;
            /**
             * Returns the state variable by the name `variable_name` in this service.
             * @param variable_name The name of the variable to retrieve
             * @returns the state variable or %NULL. Do not modify or free it.
             */
            get_state_variable(variable_name: string): ServiceStateVariableInfo | null;
            /**
             * Returns a GList of names of all the actions in this service.
             * @returns A GList of names of all the actions or %NULL. Do not modify or free it or its contents.
             */
            list_action_names(): string[];
            /**
             * Returns a #GList of all the actions (of type #GUPnPServiceActionInfo) in
             * this service.
             * @returns A #GList of all the actions or %NULL. Do not modify or free it or its contents.
             */
            list_actions(): ServiceActionInfo[];
            /**
             * Returns a #GList of names of all the state variables in this service.
             * @returns A #GList of names of all the state variables or %NULL. Do not modify or free it or its contents.
             */
            list_state_variable_names(): string[];
            /**
             * Returns a GList of all the state variables (of type
             * #GUPnPServiceStateVariableInfo) in this service.
             * @returns A #GList of all the state variables or %NULL. Do not modify or free it or its contents.
             */
            list_state_variables(): ServiceStateVariableInfo[];

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

        module ServiceProxy {
            // Signal callback interfaces

            interface SubscriptionLost {
                (error: GLib.Error): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends ServiceInfo.ConstructorProps {
                subscribed: boolean;
            }
        }

        /**
         * Proxy class for remote services.
         *
         * #GUPnPServiceProxy sends commands to a remote UPnP service and handles
         * incoming event notifications.
         */
        class ServiceProxy extends ServiceInfo {
            static $gtype: GObject.GType<ServiceProxy>;

            // Properties

            /**
             * Whether we are subscribed to this service.
             */
            get subscribed(): boolean;
            set subscribed(val: boolean);

            // Constructors

            constructor(properties?: Partial<ServiceProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'subscription-lost', callback: (_source: this, error: GLib.Error) => void): number;
            connect_after(signal: 'subscription-lost', callback: (_source: this, error: GLib.Error) => void): number;
            emit(signal: 'subscription-lost', error: GLib.Error): void;

            // Virtual methods

            vfunc_subscription_lost(reason: GLib.Error): void;

            // Methods

            /**
             * Sets up `callback` to be called whenever a change notification for
             * `variable` is recieved.
             * @param variable The variable to add notification for
             * @param type The type of the variable
             * @param callback The callback to call when @variable changes
             * @param notify Function to call when the notification is removed, or %NULL
             * @returns %TRUE on success.
             */
            add_notify(
                variable: string,
                type: GObject.GType,
                callback: ServiceProxyNotifyCallback,
                notify?: GLib.DestroyNotify | null,
            ): boolean;
            /**
             * Get a notification for anything that happens on the peer.
             *
             * `value` in `callback` will be of type G_TYPE_POINTER and contain the pre-parsed
             * [type`libxml2`.Doc]. Do NOT free or modify this document.
             * @param callback The callback to call when the peer issues any variable notification.
             * @param notify A #GDestroyNotify for @user_data
             * @returns %TRUE on success.
             */
            add_raw_notify(callback: ServiceProxyNotifyCallback, notify?: GLib.DestroyNotify | null): boolean;
            /**
             * Synchronously call the `action` on the remote UPnP service.
             * @param action An action
             * @param cancellable A #GCancellable which can be used to cancel the current action call
             * @returns %NULL on error, @action if successful.
             */
            call_action(action: ServiceProxyAction, cancellable?: Gio.Cancellable | null): ServiceProxyAction | null;
            /**
             * Start a call on the remote UPnP service using the pre-configured `action`.
             * Use gupnp_service_proxy_call_action_finish() in the `callback` to finalize
             * the call and gupnp_service_proxy_action_get_result(),
             * gupnp_service_proxy_action_get_result_hash() or
             * gupnp_service_proxy_action_get_result_list() to extract the result of the
             * remote call.
             * @param action A #GUPnPServiceProxyAction to call
             * @param cancellable A #GCancellable which can be used to cancel the current action call
             */
            call_action_async(
                action: ServiceProxyAction,
                cancellable?: Gio.Cancellable | null,
            ): Promise<ServiceProxyAction | null>;
            /**
             * Start a call on the remote UPnP service using the pre-configured `action`.
             * Use gupnp_service_proxy_call_action_finish() in the `callback` to finalize
             * the call and gupnp_service_proxy_action_get_result(),
             * gupnp_service_proxy_action_get_result_hash() or
             * gupnp_service_proxy_action_get_result_list() to extract the result of the
             * remote call.
             * @param action A #GUPnPServiceProxyAction to call
             * @param cancellable A #GCancellable which can be used to cancel the current action call
             * @param callback A #GAsyncReadyCallback to call when the action is finished.
             */
            call_action_async(
                action: ServiceProxyAction,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Start a call on the remote UPnP service using the pre-configured `action`.
             * Use gupnp_service_proxy_call_action_finish() in the `callback` to finalize
             * the call and gupnp_service_proxy_action_get_result(),
             * gupnp_service_proxy_action_get_result_hash() or
             * gupnp_service_proxy_action_get_result_list() to extract the result of the
             * remote call.
             * @param action A #GUPnPServiceProxyAction to call
             * @param cancellable A #GCancellable which can be used to cancel the current action call
             * @param callback A #GAsyncReadyCallback to call when the action is finished.
             */
            call_action_async(
                action: ServiceProxyAction,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ServiceProxyAction | null> | void;
            /**
             * Finish an asynchronous call initiated with
             * gupnp_service_proxy_call_action_async().
             * @param result a #GAsyncResult
             * @returns %NULL, if the call had an error, the action otherwise.
             */
            call_action_finish(result: Gio.AsyncResult): ServiceProxyAction | null;
            /**
             * Returns if we are subscribed to this service.
             * @returns %TRUE if we are subscribed to this service, otherwise %FALSE.
             */
            get_subscribed(): boolean;
            /**
             * Cancels the variable change notification for `callback` and `user_data`.
             *
             * Up to version 0.20.9 this function must not be called directlya or
             * indirectly from a #GUPnPServiceProxyNotifyCallback associated with this
             * service proxy, even if it is for another variable. In later versions such
             * calls are allowed.
             * @param variable The variable to add notification for
             * @param callback The callback to call when @variable changes
             * @returns %TRUE on success.
             */
            remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;
            /**
             * Cancels the variable change notification for `callback` and `user_data`.
             *
             * This function must not be called directly or indirectly from a
             * #GUPnPServiceProxyNotifyCallback associated with this service proxy, even
             * if it is for another variable.
             * @param callback The callback to call when @variable changes
             * @returns %TRUE on success.
             */
            remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;
            /**
             * Sets user and password for authentication
             * @param user user name for authentication
             * @param password user password for authentication
             */
            set_credentials(user: string, password: string): void;
            /**
             * (Un)subscribes to this service.
             *
             * <note>The relevant messages are not immediately sent but queued.
             * If you want to unsubcribe from this service because the application
             * is quitting, rely on automatic synchronised unsubscription on object
             * destruction instead.</note>
             * @param subscribed %TRUE to subscribe to this service
             */
            set_subscribed(subscribed: boolean): void;
        }

        module ServiceProxyActionIter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * An opaque object representing an iterator over the out parameters of an action
         */
        class ServiceProxyActionIter extends GObject.Object {
            static $gtype: GObject.GType<ServiceProxyActionIter>;

            // Constructors

            constructor(properties?: Partial<ServiceProxyActionIter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the name of the current out argument
             * @returns Name of the current argument
             */
            get_name(): string;
            /**
             * Get the value of the current parameter.
             *
             * If the service proxy had a successful introspection, the type according
             * to the introspection data will be used, otherwise it will be string.
             * @returns %TRUE if the value could be read successfully
             */
            get_value(): [boolean, unknown];
            /**
             * Move `self` to the next out value of the iterated action
             * @returns %TRUE if the next value was available
             */
            next(): boolean;
        }

        module XMLDoc {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                doc: any;
                path: string;
            }
        }

        /**
         * Reference-counting wrapper for libxml's #xmlDoc
         */
        class XMLDoc extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<XMLDoc>;

            // Properties

            set doc(val: any);
            set path(val: string);

            // Constructors

            constructor(properties?: Partial<XMLDoc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](xml_doc: libxml2.Doc): XMLDoc;

            static new_from_path(path: string): XMLDoc;

            // Methods

            get_doc(): libxml2.Doc;

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

        type AclInterface = typeof Acl;
        type ContextClass = typeof Context;
        type ContextFilterClass = typeof ContextFilter;
        type ContextManagerClass = typeof ContextManager;
        type ControlPointClass = typeof ControlPoint;
        type DeviceClass = typeof Device;
        type DeviceInfoClass = typeof DeviceInfo;
        type DeviceProxyClass = typeof DeviceProxy;
        type ResourceFactoryClass = typeof ResourceFactory;
        type RootDeviceClass = typeof RootDevice;
        /**
         * Opaque structure for holding in-progress action data.
         */
        abstract class ServiceAction {
            static $gtype: GObject.GType<ServiceAction>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Get the number of IN arguments from the `action` and return it.
             * @returns The number of IN arguments from the @action.
             */
            get_argument_count(): number;
            /**
             * Retrieves the value of `argument` into a GValue of type `type` and returns it.
             * The method exists only and only to satify PyGI, please use
             * gupnp_service_action_get_value() and ignore this if possible.
             * @param argument The name of the argument to retrieve
             * @param type The type of argument to retrieve
             * @returns Value as #GValue associated with @action. g_value_unset() and g_slice_free() it after usage.
             */
            get_value(argument: string, type: GObject.GType): unknown;
            /**
             * Get an ordered (preferred first) #GList of locales preferred by
             * the client. Free list and elements after use.
             * @returns A #GList of #char* locale names.
             */
            get_locales(): string[];
            /**
             * Get the #SoupMessage associated with `action`. Mainly intended for
             * applications to be able to read HTTP headers received from clients.
             * @returns #SoupServerMessage associated with @action. Unref after using it.
             */
            get_message(): Soup.ServerMessage;
            /**
             * Get the name of `action`.
             * @returns The name of @action
             */
            get_name(): string;
            /**
             * A variant of #gupnp_service_action_get that uses #GList instead of varargs.
             * @param arg_names A #GList of argument names as string
             * @param arg_types A #GList of argument types as #GType
             * @returns The values as #GList of #GValue. g_list_free() the returned list and g_value_unset() and g_slice_free() each element.
             */
            get_values(arg_names: string[], arg_types: GObject.GType[]): unknown[];
            /**
             * Return `error_code`.
             * @param error_code The error code
             * @param error_description The error description, or %NULL if @error_code is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
             */
            return_error(error_code: number, error_description: string): void;
            /**
             * Return successfully.
             */
            return_success(): void;
            /**
             * Sets the value of `argument` to `value`.
             * @param argument The name of the return value to retrieve
             * @param value The #GValue to store the return value
             */
            set_value(argument: string, value: GObject.Value | any): void;
            /**
             * Sets the specified action return values.
             * @param arg_names A #GList of argument names
             * @param arg_values The #GList of values (as #GValue<!-- -->s) that line up with @arg_names.
             */
            set_values(arg_names: string[], arg_values: (GObject.Value | any)[]): void;
        }

        /**
         * This structure contains information about the argument of service action.
         */
        class ServiceActionArgInfo {
            static $gtype: GObject.GType<ServiceActionArgInfo>;

            // Fields

            name: string;
            direction: ServiceActionArgDirection;
            related_state_variable: string;
            retval: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This structure contains information about a service action.
         */
        class ServiceActionInfo {
            static $gtype: GObject.GType<ServiceActionInfo>;

            // Fields

            name: string;

            // Constructors

            _init(...args: any[]): void;
        }

        type ServiceClass = typeof Service;
        type ServiceInfoClass = typeof ServiceInfo;
        type ServiceIntrospectionClass = typeof ServiceIntrospection;
        /**
         * Opaque structure for holding in-progress action data.
         */
        class ServiceProxyAction {
            static $gtype: GObject.GType<ServiceProxyAction>;

            // Constructors

            constructor(action: string, ___: any[]);
            _init(...args: any[]): void;

            static new_from_list(
                action: string,
                in_names: string[],
                in_values: (GObject.Value | any)[],
            ): ServiceProxyAction;

            static new_plain(action: string): ServiceProxyAction;

            // Methods

            /**
             * Append `name` to the list of arguments used by `action`
             * @param name The name of the argument
             * @param value The value of the argument
             * @returns @action for convenience.
             */
            add_argument(name: string, value: GObject.Value | any): ServiceProxyAction;
            /**
             * See gupnp_service_proxy_action_get_result(); this version takes a #GHashTable for
             * runtime generated parameter lists.
             *
             * The `out_hash` needs to be pre-initialized with key value pairs denoting the argument
             * to retrieve and an empty #GValue initialized to hold the wanted type with g_value_init().
             *
             * ```c
             * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
             * {
             *     GUPnPServiceProxyAction *action;
             *     GError *error;
             *
             *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
             *                                                      res,
             *                                                      &error);
             *
             *     if (error != NULL) {
             *              g_print ("Call failed: %s", error->message);
             *              g_clear_error (&error);
             *              return;
             *     }
             *
             *     GValue play_mode = G_VALUE_INIT;
             *     g_value_init(&play_mode, G_TYPE_STRING);
             *     GValue rec_quality_mode = G_VALUE_INIT;
             *     g_value_init(&rec_quality_mode, G_TYPE_STRING);
             *
             *     GHashTable *out_args = g_hash_table_new (g_str_hash, g_str_equal);
             *     g_hash_table_insert(out_args, "PlayMode", &play_mode);
             *     g_hash_table_insert(out_args, "RecQualityMode", &rec_quality_mode);
             *
             *     if (!gupnp_service_proxy_action_get_result_hash (action,
             *                                                      out_args,
             *                                                      &error)) {
             *              g_print ("Getting results failed: %s", error->message);
             *              g_clear_error (&error);
             *              return;
             *     }
             *
             *     g_value_unset (&play_mode);
             *     g_value_unset (&rec_quality_mode);
             *
             *     g_hash_table_unref (out_args);
             * }
             * ```
             * @param out_hash A #GHashTable of out parameter name and initialised #GValue pairs
             * @returns %TRUE on success.
             */
            get_result_hash(
                out_hash: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
            ): [boolean, GLib.HashTable<string, GObject.Value>];
            /**
             * A variant of gupnp_service_proxy_action_get_result() that takes lists of
             * out-parameter names, types and place-holders for values.
             *
             * The returned list in `out_values` must be freed using `g_list_free` and each element
             * in it using `g_value_unset` and `g_free`.
             * ```c
             * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
             * {
             *     GUPnPServiceProxyAction *action;
             *     GError *error;
             *
             *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
             *                                                      res,
             *                                                      &error);
             *
             *     if (error != NULL) {
             *              g_print ("Call failed: %s", error->message);
             *              g_clear_error (&error);
             *              return;
             *     }
             *
             *     GList *out_args = NULL;
             *     out_args = g_list_append (out_args, "PlayMode");
             *     out_args = g_list_append (out_args, "RecQualityMode");
             *     GList *out_types = NULL;
             *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
             *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
             *     GList *out_values = NULL;
             *
             *     if (!gupnp_service_proxy_action_get_result_list (action,
             *                                                      out_args,
             *                                                      out_types,
             *                                                      &out_values,
             *                                                      &error)) {
             *              g_print ("Getting results failed: %s", error->message);
             *              g_clear_error (&error);
             *              return;
             *     }
             *
             *     GList *iter = out_values;
             *     while (iter != NULL) {
             *         GValue *value = iter->data;
             *         g_print ("Result: %s\n", g_value_get_string (value));
             *         g_value_unset (value);
             *         g_free (value);
             *         iter = g_list_remove_link (iter, iter);
             *     }
             *     g_list_free (out_values);
             * }
             * ```
             * @param out_names #GList of 'out' parameter names (as strings)
             * @param out_types #GList of types (as #GType) that line up with @out_names
             * @returns %TRUE on success.
             */
            get_result_list(out_names: string[], out_types: GObject.GType[]): [boolean, unknown[]];
            /**
             * Iterate over the out arguments of a finished action
             * @returns A newly created GUPnPServiceProxyActionIterator, or %NULL on error
             */
            iterate(): ServiceProxyActionIter | null;
            /**
             * Increases reference count of `action`
             * @returns @action with an increased reference count
             */
            ref(): ServiceProxyAction | null;
            /**
             * Update the value of `key` to `value`.
             *
             * `key` needs to already exist in `action`.
             * @param key the name of the value to modify
             * @param value the new value of @key
             * @returns true if successfully modified, false otherwise
             */
            set(key: string, value: GObject.Value | any): boolean;
            /**
             * Decreases reference count of `action`. If reference count drops to 0,
             * the action and its contents will be freed.
             */
            unref(): void;
        }

        type ServiceProxyActionIterClass = typeof ServiceProxyActionIter;
        type ServiceProxyClass = typeof ServiceProxy;
        /**
         * This structure contains information about service state variable.
         */
        class ServiceStateVariableInfo {
            static $gtype: GObject.GType<ServiceStateVariableInfo>;

            // Fields

            name: string;
            send_events: boolean;
            is_numeric: boolean;
            type: GObject.GType;
            allowed_values: string[];

            // Constructors

            _init(...args: any[]): void;
        }

        type XMLDocClass = typeof XMLDoc;
        module Acl {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface AclNamespace {
            $gtype: GObject.GType<Acl>;
            prototype: Acl;
        }
        interface Acl extends GObject.Object {
            // Methods

            /**
             * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
             */
            can_sync(): boolean;
            /**
             * Check whether an IP address is allowed to access this resource.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer.
             * @param agent The User-Agent header of the peer or %NULL if unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
             */
            is_allowed(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent?: string | null,
            ): boolean;
            /**
             * Check asynchronously whether an IP address is allowed to access
             * this resource.
             *
             * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
             * if the implementing class supports it. If it is supported, GUPnP will
             * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
             *
             * Implement this function if the process of verifying the access right
             * is expected to take some time, for example when using D-Bus etc.
             *
             * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer
             * @param agent The User-Agent header of the peer or %NULL if not unknown.
             * @param cancellable A cancellable which can be used to cancel the operation.
             */
            is_allowed_async(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Check asynchronously whether an IP address is allowed to access
             * this resource.
             *
             * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
             * if the implementing class supports it. If it is supported, GUPnP will
             * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
             *
             * Implement this function if the process of verifying the access right
             * is expected to take some time, for example when using D-Bus etc.
             *
             * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer
             * @param agent The User-Agent header of the peer or %NULL if not unknown.
             * @param cancellable A cancellable which can be used to cancel the operation.
             * @param callback Callback to call after the function is done.
             */
            is_allowed_async(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Check asynchronously whether an IP address is allowed to access
             * this resource.
             *
             * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
             * if the implementing class supports it. If it is supported, GUPnP will
             * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
             *
             * Implement this function if the process of verifying the access right
             * is expected to take some time, for example when using D-Bus etc.
             *
             * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer
             * @param agent The User-Agent header of the peer or %NULL if not unknown.
             * @param cancellable A cancellable which can be used to cancel the operation.
             * @param callback Callback to call after the function is done.
             */
            is_allowed_async(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Get the result of [method`GUPnP`.Acl.is_allowed_async].
             * @param res [iface@Gio.AsyncResult] obtained from the callback passed to [method@GUPnP.Acl.is_allowed_async]
             */
            is_allowed_finish(res: Gio.AsyncResult): boolean;

            // Virtual methods

            /**
             * Check whether [method`GUPnP`.Acl.is_allowed_async] is supported.
             */
            vfunc_can_sync(): boolean;
            /**
             * Check whether an IP address is allowed to access this resource.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer.
             * @param agent The User-Agent header of the peer or %NULL if unknown. @returns %TRUE if the peer is allowed, %FALSE otherwise
             */
            vfunc_is_allowed(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent?: string | null,
            ): boolean;
            /**
             * Check asynchronously whether an IP address is allowed to access
             * this resource.
             *
             * This function is optional. [method`GUPnP`.Acl.can_sync] should return %TRUE
             * if the implementing class supports it. If it is supported, GUPnP will
             * prefer to use this function over [method`GUPnP`.Acl.is_allowed].
             *
             * Implement this function if the process of verifying the access right
             * is expected to take some time, for example when using D-Bus etc.
             *
             * Use [method`GUPnP`.Acl.is_allowed_finish] to retrieve the result.
             * @param device The [class@GUPnP.Device] associated with @path or %NULL if unknown.
             * @param service The [class@GUPnP.Service] associated with @path or %NULL if unknown.
             * @param path The path being served.
             * @param address IP address of the peer
             * @param agent The User-Agent header of the peer or %NULL if not unknown.
             * @param cancellable A cancellable which can be used to cancel the operation.
             * @param callback Callback to call after the function is done.
             */
            vfunc_is_allowed_async(
                device: Device | null,
                service: Service | null,
                path: string,
                address: string,
                agent?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Get the result of [method`GUPnP`.Acl.is_allowed_async].
             * @param res [iface@Gio.AsyncResult] obtained from the callback passed to [method@GUPnP.Acl.is_allowed_async]
             */
            vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
        }

        export const Acl: AclNamespace & {
            new (): Acl; // This allows `obj instanceof Acl`
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

    export default GUPnP;
}

declare module 'gi://GUPnP' {
    import GUPnP16 from 'gi://GUPnP?version=1.6';
    export default GUPnP16;
}
// END
