/// <reference path="./soup-3.0.d.ts" />
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

declare module 'gi://GSSDP?version=1.6' {
    // Module dependencies
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GSSDP {
        /**
         * GSSDP-1.6
         */

        /**
         * Error used in client creation.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * GSSDP could not find a valid IP address of a
             * #GSSDPClient.
             */
            static NO_IP_ADDRESS: number;
            /**
             * Unknown error.
             */
            static FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Implemented behavior of the UDA (Unified Device Architecture) protocol.
         */

        /**
         * Implemented behavior of the UDA (Unified Device Architecture) protocol.
         */
        export namespace UDAVersion {
            export const $gtype: GObject.GType<UDAVersion>;
        }

        enum UDAVersion {
            /**
             * When creating a client, use the default version
             */
            VERSION_UNSPECIFIED,
            /**
             * Use Version 1.0 of the UDA specification (UPnP/1.0)
             */
            VERSION_1_0,
            /**
             * Use Version 1.1 of the UDA specification (UPnP/1.1)
             */
            VERSION_1_1,
        }
        /**
         * SSDP search target for finding all possible resources.
         */
        const ALL_RESOURCES: string;
        function error_quark(): GLib.Quark;
        module Client {
            // Signal callback interfaces

            interface MessageReceived {
                (from_ip: string, from_port: number, type: number, headers: Soup.MessageHeaders): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                active: boolean;
                address: Gio.InetAddress;
                address_family: Gio.SocketFamily;
                addressFamily: Gio.SocketFamily;
                boot_id: number;
                bootId: number;
                config_id: number;
                configId: number;
                host_ip: string;
                hostIp: string;
                host_mask: Gio.InetAddressMask;
                hostMask: Gio.InetAddressMask;
                interface: string;
                msearch_port: number;
                msearchPort: number;
                network: string;
                port: number;
                server_id: string;
                serverId: string;
                socket_ttl: number;
                socketTtl: number;
                uda_version: UDAVersion;
                udaVersion: UDAVersion;
            }
        }

        /**
         * A simple SSDP bus handler.
         *
         * The [class`GSSDP`.Client] will usually be used by the [class`GSSDP`.ResourceGroup]
         * for announcing or the [class`GSSDP`.ResourceBrowser] for finding resources on the network.
         *
         * A GSSDPClient is required per IP address that you want to use, even if those
         * belong t the same network device.
         */
        class Client extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<Client>;

            // Properties

            /**
             * Whether this client is active or not (passive). When active
             * (default), the client sends messages on the network, otherwise
             * not. In most cases, you don't want to touch this property.
             */
            get active(): boolean;
            set active(val: boolean);
            /**
             * The network address this client is bound to.
             */
            get address(): Gio.InetAddress;
            /**
             * The IP protocol address family this client works on. When specified
             * during construction without giving a concrete address, it will be
             * used to determine the proper address.
             *
             * If not specified, will contain the currrent address family after
             * the call to [method`Glib`.Initable.init]. Use %G_SOCKET_FAMILY_INVALID
             * to specifiy using the default socket family (legacy IP)
             */
            get address_family(): Gio.SocketFamily;
            /**
             * The IP protocol address family this client works on. When specified
             * during construction without giving a concrete address, it will be
             * used to determine the proper address.
             *
             * If not specified, will contain the currrent address family after
             * the call to [method`Glib`.Initable.init]. Use %G_SOCKET_FAMILY_INVALID
             * to specifiy using the default socket family (legacy IP)
             */
            get addressFamily(): Gio.SocketFamily;
            /**
             * The value of the BOOTID.UPNP.ORG header
             *
             * Since 1.2.0
             */
            get boot_id(): number;
            set boot_id(val: number);
            /**
             * The value of the BOOTID.UPNP.ORG header
             *
             * Since 1.2.0
             */
            get bootId(): number;
            set bootId(val: number);
            /**
             * The value of the CONFIGID.UPNP.ORG header
             *
             * Since 1.2.0
             */
            get config_id(): number;
            set config_id(val: number);
            /**
             * The value of the CONFIGID.UPNP.ORG header
             *
             * Since 1.2.0
             */
            get configId(): number;
            set configId(val: number);
            /**
             * The IP address of the assoicated network interface.
             */
            get host_ip(): string;
            /**
             * The IP address of the assoicated network interface.
             */
            get hostIp(): string;
            /**
             * The network mask of the assoicated network interface.
             */
            get host_mask(): Gio.InetAddressMask;
            /**
             * The network mask of the assoicated network interface.
             */
            get hostMask(): Gio.InetAddressMask;
            /**
             * The name of the network interface this client is associated with.
             * Set to NULL to autodetect.
             */
            get interface(): string;
            /**
             * UDP port to use for sending multicast M-SEARCH requests on the
             * network. If not set (or set to 0) a random port will be used.
             * This property can be only set during object construction.
             */
            get msearch_port(): number;
            /**
             * UDP port to use for sending multicast M-SEARCH requests on the
             * network. If not set (or set to 0) a random port will be used.
             * This property can be only set during object construction.
             */
            get msearchPort(): number;
            /**
             * The network this client is currently connected to. You could set this
             * to anything you want to identify the network this client is
             * associated with. If you are using #GUPnPContextManager and associated
             * interface is a WiFi interface, this property is set to the ESSID of
             * the network. Otherwise, expect this to be the network IP address by
             * default.
             */
            get network(): string;
            /**
             * UDP port to use for sending multicast M-SEARCH requests on the
             * network. If not set (or set to 0) a random port will be used.
             * This property can be only set during object construction.
             */
            get port(): number;
            /**
             * The SSDP server's identifier.
             */
            get server_id(): string;
            set server_id(val: string);
            /**
             * The SSDP server's identifier.
             */
            get serverId(): string;
            set serverId(val: string);
            /**
             * Time-to-live value to use for all sockets created by this client.
             * If not set (or set to 0) the value recommended by UPnP will be used.
             * This property can only be set during object construction.
             */
            get socket_ttl(): number;
            /**
             * Time-to-live value to use for all sockets created by this client.
             * If not set (or set to 0) the value recommended by UPnP will be used.
             * This property can only be set during object construction.
             */
            get socketTtl(): number;
            /**
             * The UPnP version the client adheres to.
             */
            get uda_version(): UDAVersion;
            /**
             * The UPnP version the client adheres to.
             */
            get udaVersion(): UDAVersion;

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](iface?: string | null): Client;

            static new_for_address(addr: Gio.InetAddress | null, port: number, uda_version: UDAVersion): Client;

            static new_full(
                iface: string | null,
                addr: Gio.InetAddress | null,
                port: number,
                uda_version: UDAVersion,
            ): Client;

            static new_with_port(iface: string | null, msearch_port: number): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'message-received',
                callback: (
                    _source: this,
                    from_ip: string,
                    from_port: number,
                    type: number,
                    headers: Soup.MessageHeaders,
                ) => void,
            ): number;
            connect_after(
                signal: 'message-received',
                callback: (
                    _source: this,
                    from_ip: string,
                    from_port: number,
                    type: number,
                    headers: Soup.MessageHeaders,
                ) => void,
            ): number;
            emit(
                signal: 'message-received',
                from_ip: string,
                from_port: number,
                type: number,
                headers: Soup.MessageHeaders,
            ): void;

            // Methods

            /**
             * Add `user_agent` for `ip_address`.
             *
             * Each [class`GSSDP`.Client] maintains a mapping of addresses
             * (MAC on systems that support it, IP addresses otherwise) to User Agents.
             *
             * This information can be used in higher layers to get an User-Agent for
             * devices that do not set the User-Agent header in their SOAP requests.
             * @param ip_address The host to add to the cache
             * @param user_agent User agent ot the host to add
             */
            add_cache_entry(ip_address: string, user_agent: string): void;
            /**
             * Adds a header field to the messages sent by this `client`. It is intended to
             * be used by clients requiring vendor specific header fields.
             *
             * If there is an existing header with `name` it will append another one.
             * @param name Header name
             * @param value Header value
             */
            append_header(name: string, value?: string | null): void;
            /**
             * Check if the peer at `address` is reachable using this `client`.
             * @param address A #GInetSocketAddress of the target. The port part of the address may be 0
             * @returns %TRUE if considered reachable, %FALSE otherwise.
             */
            can_reach(address: Gio.InetSocketAddress): boolean;
            /**
             * Removes all the headers for this `client`.
             */
            clear_headers(): void;
            /**
             * Get the current state of the client. See [property`GSSDP`.Client:active] for details.
             * @returns %TRUE if @client is active, %FALSE otherwise.
             */
            get_active(): boolean;
            /**
             * The IP address this client works on.
             * @returns The #GInetAddress this client works on
             */
            get_address(): Gio.InetAddress;
            get_address_mask(): Gio.InetAddressMask;
            get_family(): Gio.SocketFamily;
            /**
             * Get the IP address we advertise ourselves as using.
             * @returns The IP address. This string should not be freed.
             */
            get_host_ip(): string;
            get_index(): number;
            /**
             * Get the name of the network interface associated to `client`.
             * @returns The network interface name. This string should not be freed.
             */
            get_interface(): string;
            /**
             * Get the network identifier of the client. See [property`GSSDP`.Client:network]
             * for  details.
             * @returns The network identification. This string should not be freed.
             */
            get_network(): string;
            get_port(): number;
            get_server_id(): string;
            get_uda_version(): UDAVersion;
            /**
             * Try to get a User-Agent for `ip_address`.
             * @param ip_address IP address to guess the user-agent for
             * @returns The User-Agent cached for this IP, %NULL if none is cached.
             */
            guess_user_agent(ip_address: string): string;
            /**
             * Removes `name` from the list of headers. If there are multiple values for
             * `name,` they are all removed.
             * @param name Header name
             */
            remove_header(name: string): void;
            /**
             * Will set the new boot-id for this SSDP client. Does nothing if the UDA
             * version used by the client is UDA 1.0
             *
             * The boot-id is used to signalize changes in the network configuration
             * for multi-homed hosts
             * @param boot_id The new boot-id for the client
             */
            set_boot_id(boot_id: number): void;
            /**
             * The config-id is used to allow caching of the device or service description.
             * It should be changed if that changes.
             * @param config_id The new config-id for the client
             */
            set_config_id(config_id: number): void;
            /**
             * Sets the network identification of `client` to `network`.
             * @param network The string identifying the network
             */
            set_network(network: string): void;
            /**
             * Sets the server ID of `client` to `server_id`. This string is used as the
             * "Server:" identification header for SSDP discovery and response packets
             * and "User-Agent" header for searches.
             *
             * By default, GSSDP will generate a header conforming to the requirements
             * defined in the UDA documents: OS/Version UPnP/Version GSSDP/Version.
             * @param server_id The server ID
             */
            set_server_id(server_id: string): void;

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

        module ResourceBrowser {
            // Signal callback interfaces

            interface ResourceAvailable {
                (usn: string, locations: string[]): void;
            }

            interface ResourceUnavailable {
                (usn: string): void;
            }

            interface ResourceUpdate {
                (usn: string, boot_id: number, next_boot_id: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active: boolean;
                client: Client;
                mx: number;
                target: string;
            }
        }

        /**
         * Class handling resource discovery.
         *
         * After creating a browser
         * and activating it, the [signal`GSSDP`.ResourceBrowser::resource-available] and
         * [signal`GSSDP`.ResourceBrowser::resource-unavailable] signals will be emitted
         * whenever the availability of a resource matching the specified discovery target
         * changes. A discovery request is sent out automatically when activating the browser.
         *
         * If the associated [class`GSSDP`.Client] was configured to support UDA 1.1, it
         * will also emit the [signal`GSSDP`.ResourceBrowser::resource-update] if any of
         * the UDA 1.1 devices on the nework annouced its upcoming BOOTID change.
         */
        class ResourceBrowser extends GObject.Object {
            static $gtype: GObject.GType<ResourceBrowser>;

            // Properties

            /**
             * Whether this browser is active or not.
             */
            get active(): boolean;
            set active(val: boolean);
            /**
             * The [class`GSSDP`.Client] to use for listening to SSDP messages
             */
            get client(): Client;
            /**
             * The maximum number of seconds in which to request other parties
             * to respond.
             */
            get mx(): number;
            set mx(val: number);
            /**
             * The discovery target this resource browser is looking for.
             */
            get target(): string;
            set target(val: string);

            // Constructors

            constructor(properties?: Partial<ResourceBrowser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](client: Client, target: string): ResourceBrowser;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'resource-available',
                callback: (_source: this, usn: string, locations: string[]) => void,
            ): number;
            connect_after(
                signal: 'resource-available',
                callback: (_source: this, usn: string, locations: string[]) => void,
            ): number;
            emit(signal: 'resource-available', usn: string, locations: string[]): void;
            connect(signal: 'resource-unavailable', callback: (_source: this, usn: string) => void): number;
            connect_after(signal: 'resource-unavailable', callback: (_source: this, usn: string) => void): number;
            emit(signal: 'resource-unavailable', usn: string): void;
            connect(
                signal: 'resource-update',
                callback: (_source: this, usn: string, boot_id: number, next_boot_id: number) => void,
            ): number;
            connect_after(
                signal: 'resource-update',
                callback: (_source: this, usn: string, boot_id: number, next_boot_id: number) => void,
            ): number;
            emit(signal: 'resource-update', usn: string, boot_id: number, next_boot_id: number): void;

            // Virtual methods

            vfunc_resource_unavailable(usn: string): void;
            vfunc_resource_update(usn: string, boot_id: number, next_boot_id: number): void;

            // Methods

            /**
             * Get whether the browser is currently active.
             * @returns %TRUE if @resource_browser is active.
             */
            get_active(): boolean;
            /**
             * Get the GSSDPClient this resource browser is using for SSDP.
             * @returns The #GSSDPClient @resource_browser is associated with.
             */
            get_client(): Client;
            /**
             * Get the current MX value.
             * @returns The used MX value.
             */
            get_mx(): number;
            /**
             * Get the current browse target.
             * @returns The browser target.
             */
            get_target(): string;
            /**
             * Begins discovery if `resource_browser` is active and no discovery is
             * performed. Otherwise does nothing.
             * @returns %TRUE if rescaning has been started.
             */
            rescan(): boolean;
            /**
             * (De)activates `resource_browser`.
             * @param active %TRUE to activate @resource_browser
             */
            set_active(active: boolean): void;
            /**
             * Sets the used MX value of `resource_browser` to `mx`.
             * @param mx The to be used MX value
             */
            set_mx(mx: number): void;
            /**
             * Sets the browser target of `resource_browser` to `target`.
             * @param target The browser target
             */
            set_target(target: string): void;
        }

        module ResourceGroup {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                available: boolean;
                client: Client;
                max_age: number;
                maxAge: number;
                message_delay: number;
                messageDelay: number;
            }
        }

        /**
         * Class for controlling resource announcement.
         *
         * A #GSSDPResourceGroup is a group of SSDP resources whose availability can
         * be controlled as one. This is useful when one needs to announce a single
         * service as multiple SSDP resources (UPnP does this for example).
         */
        class ResourceGroup extends GObject.Object {
            static $gtype: GObject.GType<ResourceGroup>;

            // Properties

            /**
             * Whether this group of resources is available or not.
             */
            get available(): boolean;
            set available(val: boolean);
            /**
             * The #GSSDPClient to use.
             */
            get client(): Client;
            /**
             * The number of seconds our advertisements are valid.
             */
            get max_age(): number;
            set max_age(val: number);
            /**
             * The number of seconds our advertisements are valid.
             */
            get maxAge(): number;
            set maxAge(val: number);
            /**
             * The minimum number of milliseconds between SSDP messages.
             * The default is 120 based on DLNA specification.
             */
            get message_delay(): number;
            set message_delay(val: number);
            /**
             * The minimum number of milliseconds between SSDP messages.
             * The default is 120 based on DLNA specification.
             */
            get messageDelay(): number;
            set messageDelay(val: number);

            // Constructors

            constructor(properties?: Partial<ResourceGroup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](client: Client): ResourceGroup;

            // Methods

            /**
             * Add an additional resource to announce in this resource group.
             *
             * Adds a resource with target `target,` USN `usn,` and locations `locations`
             * to `resource_group`. If the resource group is set [property`GSSDP`.ResourceGroup:available],
             * it will be announced right away.
             *
             * If your resource only has one location, you can use [method`GSSDP`.ResourceGroup.add_resource_simple]
             * instead.
             *
             * The resource id that is returned by this function can be used with
             * [method`GSSDP`.ResourceGroup.remove_resource].
             * @param target The resource's target
             * @param usn The resource's USN
             * @param locations A #GList of the resource's locations
             * @returns The ID of the added resource.
             */
            add_resource(target: string, usn: string, locations: string[]): number;
            /**
             * Adds a resource with target `target,` USN `usn,` and location `location`
             * to `resource_group`. If the resource group is set [property`GSSDP`.ResourceGroup:available],
             * it will be announced right away.
             *
             * The resource id that is returned by this function can be used with
             * [method`GSSDP`.ResourceGroup.remove_resource].
             * @param target The resource's target
             * @param usn The resource's USN
             * @param location The resource's location
             * @returns The ID of the added resource.
             */
            add_resource_simple(target: string, usn: string, location: string): number;
            get_available(): boolean;
            get_client(): Client;
            get_max_age(): number;
            get_message_delay(): number;
            /**
             * Removes the resource with ID `resource_id` from `resource_group`.
             * @param resource_id The ID of the resource to remove
             */
            remove_resource(resource_id: number): void;
            /**
             * Sets `resource_group<`!-- -->s availability to `available`. Changing
             * `resource_group<`!-- -->s availability causes it to announce its new state
             * to listening SSDP clients.
             * @param available %TRUE if @resource_group should be available (advertised)
             */
            set_available(available: boolean): void;
            /**
             * Sets the number of seconds advertisements are valid to `max_age`.
             * @param max_age The number of seconds advertisements are valid
             */
            set_max_age(max_age: number): void;
            /**
             * Sets the minimum time between each SSDP message.
             * @param message_delay The message delay in ms.
             */
            set_message_delay(message_delay: number): void;
            /**
             * Send an `ssdp::update` message if the underlying `GSSDPClient` is running
             * the UDA 1.1 protocol. Does nothing otherwise.
             * @param new_boot_id The new boot id of the device
             */
            update(new_boot_id: number): void;
        }

        type ClientClass = typeof Client;
        type ResourceBrowserClass = typeof ResourceBrowser;
        type ResourceGroupClass = typeof ResourceGroup;
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

    export default GSSDP;
}

declare module 'gi://GSSDP' {
    import GSSDP16 from 'gi://GSSDP?version=1.6';
    export default GSSDP16;
}
// END
