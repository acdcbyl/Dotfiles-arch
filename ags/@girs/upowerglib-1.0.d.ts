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

declare module 'gi://UPowerGlib?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace UPowerGlib {
        /**
         * UPowerGlib-1.0
         */

        /**
         * The device type.
         */

        /**
         * The device type.
         */
        export namespace DeviceKind {
            export const $gtype: GObject.GType<DeviceKind>;
        }

        enum DeviceKind {
            UNKNOWN,
            LINE_POWER,
            BATTERY,
            UPS,
            MONITOR,
            MOUSE,
            KEYBOARD,
            PDA,
            PHONE,
            MEDIA_PLAYER,
            TABLET,
            COMPUTER,
            GAMING_INPUT,
            PEN,
            TOUCHPAD,
            MODEM,
            NETWORK,
            HEADSET,
            SPEAKERS,
            HEADPHONES,
            VIDEO,
            OTHER_AUDIO,
            REMOTE_CONTROL,
            PRINTER,
            SCANNER,
            CAMERA,
            WEARABLE,
            TOY,
            BLUETOOTH_GENERIC,
            LAST,
        }
        /**
         * The level of a battery. Only values up to, and including
         * %UP_DEVICE_LEVEL_ACTION are relevant for the #WarningLevel.
         * The #BatteryLevel only uses the following values:
         * - %UP_DEVICE_LEVEL_UNKNOWN
         * - %UP_DEVICE_LEVEL_NONE
         * - %UP_DEVICE_LEVEL_LOW
         * - %UP_DEVICE_LEVEL_CRITICAL
         * - %UP_DEVICE_LEVEL_NORMAL
         * - %UP_DEVICE_LEVEL_HIGH
         * - %UP_DEVICE_LEVEL_FULL
         */

        /**
         * The level of a battery. Only values up to, and including
         * %UP_DEVICE_LEVEL_ACTION are relevant for the #WarningLevel.
         * The #BatteryLevel only uses the following values:
         * - %UP_DEVICE_LEVEL_UNKNOWN
         * - %UP_DEVICE_LEVEL_NONE
         * - %UP_DEVICE_LEVEL_LOW
         * - %UP_DEVICE_LEVEL_CRITICAL
         * - %UP_DEVICE_LEVEL_NORMAL
         * - %UP_DEVICE_LEVEL_HIGH
         * - %UP_DEVICE_LEVEL_FULL
         */
        export namespace DeviceLevel {
            export const $gtype: GObject.GType<DeviceLevel>;
        }

        enum DeviceLevel {
            UNKNOWN,
            NONE,
            DISCHARGING,
            LOW,
            CRITICAL,
            ACTION,
            NORMAL,
            HIGH,
            FULL,
            LAST,
        }
        /**
         * The device state.
         */

        /**
         * The device state.
         */
        export namespace DeviceState {
            export const $gtype: GObject.GType<DeviceState>;
        }

        enum DeviceState {
            UNKNOWN,
            CHARGING,
            DISCHARGING,
            EMPTY,
            FULLY_CHARGED,
            PENDING_CHARGE,
            PENDING_DISCHARGE,
            LAST,
        }
        /**
         * The device technology.
         */

        /**
         * The device technology.
         */
        export namespace DeviceTechnology {
            export const $gtype: GObject.GType<DeviceTechnology>;
        }

        enum DeviceTechnology {
            UNKNOWN,
            LITHIUM_ION,
            LITHIUM_POLYMER,
            LITHIUM_IRON_PHOSPHATE,
            LEAD_ACID,
            NICKEL_CADMIUM,
            NICKEL_METAL_HYDRIDE,
            LAST,
        }
        const MAJOR_VERSION: number;
        /**
         * The compile-time micro version
         */
        const MICRO_VERSION: number;
        const MINOR_VERSION: number;
        module Client {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (object_path: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                daemon_version: string;
                daemonVersion: string;
                lid_is_closed: boolean;
                lidIsClosed: boolean;
                lid_is_present: boolean;
                lidIsPresent: boolean;
                on_battery: boolean;
                onBattery: boolean;
            }
        }

        class Client extends GObject.Object implements Gio.AsyncInitable<Client>, Gio.Initable {
            static $gtype: GObject.GType<Client>;

            // Properties

            /**
             * The daemon version.
             */
            get daemon_version(): string;
            /**
             * The daemon version.
             */
            get daemonVersion(): string;
            /**
             * If the laptop lid is closed.
             */
            get lid_is_closed(): boolean;
            /**
             * If the laptop lid is closed.
             */
            get lidIsClosed(): boolean;
            /**
             * If a laptop lid is present.
             */
            get lid_is_present(): boolean;
            /**
             * If a laptop lid is present.
             */
            get lidIsPresent(): boolean;
            /**
             * If the computer is on battery power.
             */
            get on_battery(): boolean;
            /**
             * If the computer is on battery power.
             */
            get onBattery(): boolean;

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Client;

            static new_finish(res: Gio.AsyncResult): Client;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_full(cancellable?: Gio.Cancellable | null): Client;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-added', device: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, object_path: string) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, object_path: string) => void): number;
            emit(signal: 'device-removed', object_path: string): void;

            // Static methods

            /**
             * Asynchronously creates a new #UpClient object.
             *
             * This is an asynchronous failable function.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            static new_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Client> | null,
            ): void;

            // Virtual methods

            vfunc_device_added(device: Device): void;
            vfunc_device_removed(object_path: string): void;

            // Methods

            /**
             * Gets a string representing the configured critical action,
             * depending on availability.
             * @returns the action name, or %NULL on error.
             */
            get_critical_action(): string;
            /**
             * Get UPower daemon version.
             * @returns string containing the daemon version, e.g. 008
             */
            get_daemon_version(): string;
            /**
             * Get a copy of the device objects. This function does not set the free
             * function for the #GPtrArray so you need use g_object_unref on all
             * elements when you are finished with the array.
             * @returns an array of #UpDevice objects or %NULL on error, free with g_ptr_array_unref()
             */
            get_devices(): Device[];
            /**
             * Get a copy of the device objects.
             * @returns an array of #UpDevice objects or %NULL on error, free with g_ptr_array_unref()
             */
            get_devices2(): Device[];
            /**
             * Asynchronously fetches the list of #UpDevice objects.
             * @param cancellable a #GCancellable or %NULL
             */
            get_devices_async(cancellable?: Gio.Cancellable | null): Promise<Device[]>;
            /**
             * Asynchronously fetches the list of #UpDevice objects.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_devices_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously fetches the list of #UpDevice objects.
             * @param cancellable a #GCancellable or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_devices_async(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Device[]> | void;
            /**
             * Finishes an operation started with up_client_get_devices_async().
             * @param res a #GAsyncResult obtained from the #GAsyncReadyCallback passed     to up_client_get_devices_async()
             * @returns an array of     #UpDevice objects or %NULL on error.
             */
            get_devices_finish(res: Gio.AsyncResult): Device[];
            /**
             * Get the composite display device.
             * @returns a #UpDevice object, or %NULL on error.
             */
            get_display_device(): Device;
            /**
             * Get whether the laptop lid is closed.
             * @returns %TRUE if lid is closed or %FALSE otherwise.
             */
            get_lid_is_closed(): boolean;
            /**
             * Get whether a laptop lid is present on this machine.
             * @returns %TRUE if the machine has a laptop lid
             */
            get_lid_is_present(): boolean;
            /**
             * Get whether the system is running on battery power.
             * @returns %TRUE if the system is currently running on battery, %FALSE otherwise.
             */
            get_on_battery(): boolean;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): Client;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                battery_level: number;
                batteryLevel: number;
                capacity: number;
                charge_cycles: number;
                chargeCycles: number;
                charge_end_threshold: number;
                chargeEndThreshold: number;
                charge_start_threshold: number;
                chargeStartThreshold: number;
                charge_threshold_enabled: boolean;
                chargeThresholdEnabled: boolean;
                charge_threshold_supported: boolean;
                chargeThresholdSupported: boolean;
                energy: number;
                energy_empty: number;
                energyEmpty: number;
                energy_full: number;
                energyFull: number;
                energy_full_design: number;
                energyFullDesign: number;
                energy_rate: number;
                energyRate: number;
                has_history: boolean;
                hasHistory: boolean;
                has_statistics: boolean;
                hasStatistics: boolean;
                icon_name: string;
                iconName: string;
                is_present: boolean;
                isPresent: boolean;
                is_rechargeable: boolean;
                isRechargeable: boolean;
                kind: number;
                luminosity: number;
                model: string;
                native_path: string;
                nativePath: string;
                online: boolean;
                percentage: number;
                power_supply: boolean;
                powerSupply: boolean;
                serial: string;
                state: number;
                technology: number;
                temperature: number;
                time_to_empty: number;
                timeToEmpty: number;
                time_to_full: number;
                timeToFull: number;
                update_time: number;
                updateTime: number;
                vendor: string;
                voltage: number;
                warning_level: number;
                warningLevel: number;
            }
        }

        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * The battery level, e.g. %UP_DEVICE_LEVEL_CRITICAL. If this is something
             * other than %UP_DEVICE_LEVEL_NONE, then User Interfaces should use this
             * approximate level instead of percentages.
             */
            get battery_level(): number;
            set battery_level(val: number);
            /**
             * The battery level, e.g. %UP_DEVICE_LEVEL_CRITICAL. If this is something
             * other than %UP_DEVICE_LEVEL_NONE, then User Interfaces should use this
             * approximate level instead of percentages.
             */
            get batteryLevel(): number;
            set batteryLevel(val: number);
            /**
             * The percentage capacity of the device where 100% means the device has
             * the same charge potential as when it was manufactured.
             */
            get capacity(): number;
            set capacity(val: number);
            /**
             * The number of charge cycles for the battery, or -1 if unknown
             * or non-applicable.
             */
            get charge_cycles(): number;
            set charge_cycles(val: number);
            /**
             * The number of charge cycles for the battery, or -1 if unknown
             * or non-applicable.
             */
            get chargeCycles(): number;
            set chargeCycles(val: number);
            /**
             * The charge end threshold of a battery.
             */
            get charge_end_threshold(): number;
            set charge_end_threshold(val: number);
            /**
             * The charge end threshold of a battery.
             */
            get chargeEndThreshold(): number;
            set chargeEndThreshold(val: number);
            /**
             * The charge start threshold of a battery.
             */
            get charge_start_threshold(): number;
            set charge_start_threshold(val: number);
            /**
             * The charge start threshold of a battery.
             */
            get chargeStartThreshold(): number;
            set chargeStartThreshold(val: number);
            /**
             * The charge threshold of a battery is enabled, or false if unknown
             * or non-applicable.
             */
            get charge_threshold_enabled(): boolean;
            set charge_threshold_enabled(val: boolean);
            /**
             * The charge threshold of a battery is enabled, or false if unknown
             * or non-applicable.
             */
            get chargeThresholdEnabled(): boolean;
            set chargeThresholdEnabled(val: boolean);
            /**
             * The charge threshold of a battery is supported, or false if unknown
             * or non-applicable.
             */
            get charge_threshold_supported(): boolean;
            set charge_threshold_supported(val: boolean);
            /**
             * The charge threshold of a battery is supported, or false if unknown
             * or non-applicable.
             */
            get chargeThresholdSupported(): boolean;
            set chargeThresholdSupported(val: boolean);
            /**
             * The energy left in the device. Measured in mWh.
             */
            get energy(): number;
            set energy(val: number);
            /**
             * The energy the device will have when it is empty. This is usually zero.
             * Measured in mWh.
             */
            get energy_empty(): number;
            set energy_empty(val: number);
            /**
             * The energy the device will have when it is empty. This is usually zero.
             * Measured in mWh.
             */
            get energyEmpty(): number;
            set energyEmpty(val: number);
            /**
             * The amount of energy when the device is fully charged. Measured in mWh.
             */
            get energy_full(): number;
            set energy_full(val: number);
            /**
             * The amount of energy when the device is fully charged. Measured in mWh.
             */
            get energyFull(): number;
            set energyFull(val: number);
            /**
             * The amount of energy when the device was brand new. Measured in mWh.
             */
            get energy_full_design(): number;
            set energy_full_design(val: number);
            /**
             * The amount of energy when the device was brand new. Measured in mWh.
             */
            get energyFullDesign(): number;
            set energyFullDesign(val: number);
            /**
             * The rate of discharge or charge. Measured in mW.
             */
            get energy_rate(): number;
            set energy_rate(val: number);
            /**
             * The rate of discharge or charge. Measured in mW.
             */
            get energyRate(): number;
            set energyRate(val: number);
            /**
             * If the device has history data that might be useful.
             */
            get has_history(): boolean;
            set has_history(val: boolean);
            /**
             * If the device has history data that might be useful.
             */
            get hasHistory(): boolean;
            set hasHistory(val: boolean);
            /**
             * If the device has statistics data that might be useful.
             */
            get has_statistics(): boolean;
            set has_statistics(val: boolean);
            /**
             * If the device has statistics data that might be useful.
             */
            get hasStatistics(): boolean;
            set hasStatistics(val: boolean);
            /**
             * The icon name, following the Icon Naming Speficiation
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * The icon name, following the Icon Naming Speficiation
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * If the device is present, as some devices like laptop batteries
             * can be removed, leaving an empty bay that is still technically a
             * device.
             */
            get is_present(): boolean;
            set is_present(val: boolean);
            /**
             * If the device is present, as some devices like laptop batteries
             * can be removed, leaving an empty bay that is still technically a
             * device.
             */
            get isPresent(): boolean;
            set isPresent(val: boolean);
            /**
             * If the device has a rechargable battery.
             */
            get is_rechargeable(): boolean;
            set is_rechargeable(val: boolean);
            /**
             * If the device has a rechargable battery.
             */
            get isRechargeable(): boolean;
            set isRechargeable(val: boolean);
            /**
             * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
             */
            get kind(): number;
            set kind(val: number);
            /**
             * The current luminosity of the device.
             */
            get luminosity(): number;
            set luminosity(val: number);
            /**
             * The model of the device.
             */
            get model(): string;
            set model(val: string);
            /**
             * The native path of the device, useful for direct device access.
             */
            get native_path(): string;
            set native_path(val: string);
            /**
             * The native path of the device, useful for direct device access.
             */
            get nativePath(): string;
            set nativePath(val: string);
            /**
             * If the device is online, i.e. connected.
             */
            get online(): boolean;
            set online(val: boolean);
            /**
             * The percentage charge of the device. Note that if the battery level property
             * is something other than %UP_DEVICE_LEVEL_NONE, then this percentage is an
             * approximation, and should not be used a number to display to the user.
             */
            get percentage(): number;
            set percentage(val: number);
            /**
             * If the device is powering the system.
             */
            get power_supply(): boolean;
            set power_supply(val: boolean);
            /**
             * If the device is powering the system.
             */
            get powerSupply(): boolean;
            set powerSupply(val: boolean);
            /**
             * The serial number of the device.
             */
            get serial(): string;
            set serial(val: string);
            /**
             * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
             */
            get state(): number;
            set state(val: number);
            /**
             * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
             */
            get technology(): number;
            set technology(val: number);
            /**
             * The temperature of the device in degrees Celsius.
             */
            get temperature(): number;
            set temperature(val: number);
            /**
             * The amount of time until the device is empty.
             */
            get time_to_empty(): number;
            set time_to_empty(val: number);
            /**
             * The amount of time until the device is empty.
             */
            get timeToEmpty(): number;
            set timeToEmpty(val: number);
            /**
             * The amount of time until the device is fully charged.
             */
            get time_to_full(): number;
            set time_to_full(val: number);
            /**
             * The amount of time until the device is fully charged.
             */
            get timeToFull(): number;
            set timeToFull(val: number);
            /**
             * The last time the device was updated.
             */
            get update_time(): number;
            set update_time(val: number);
            /**
             * The last time the device was updated.
             */
            get updateTime(): number;
            set updateTime(val: number);
            /**
             * The vendor of the device.
             */
            get vendor(): string;
            set vendor(val: string);
            /**
             * The current voltage of the device.
             */
            get voltage(): number;
            set voltage(val: number);
            /**
             * The warning level e.g. %UP_DEVICE_LEVEL_CRITICAL.
             */
            get warning_level(): number;
            set warning_level(val: number);
            /**
             * The warning level e.g. %UP_DEVICE_LEVEL_CRITICAL.
             */
            get warningLevel(): number;
            set warningLevel(val: number);

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Device;

            // Static methods

            /**
             * Converts a string to a #UpDeviceKind.
             * @param type
             */
            static kind_from_string(type: string): DeviceKind;
            /**
             * Converts a #UpDeviceKind to a string.
             * @param type_enum
             */
            static kind_to_string(type_enum: DeviceKind): string;
            /**
             * Converts a string to a #UpDeviceLevel.
             * @param level
             */
            static level_from_string(level: string): DeviceLevel;
            /**
             * Converts a #UpDeviceLevel to a string.
             * @param level_enum
             */
            static level_to_string(level_enum: DeviceLevel): string;
            /**
             * Converts a string to a #UpDeviceState.
             * @param state
             */
            static state_from_string(state: string): DeviceState;
            /**
             * Converts a #UpDeviceState to a string.
             * @param state_enum
             */
            static state_to_string(state_enum: DeviceState): string;
            /**
             * Converts a string to a #UpDeviceTechnology.
             * @param technology
             */
            static technology_from_string(technology: string): DeviceTechnology;
            /**
             * Converts a #UpDeviceTechnology to a string.
             * @param technology_enum
             */
            static technology_to_string(technology_enum: DeviceTechnology): string;

            // Methods

            /**
             * Gets the device history.
             * @param type The type of history, known values are "rate" and "charge".
             * @param timespec the amount of time to look back into time.
             * @param resolution the resolution of data.
             * @param cancellable a #GCancellable or %NULL
             * @returns an array of #UpHistoryItem's, with the most               recent one being first; %NULL if @error is set or @device is               invalid
             */
            get_history_sync(
                type: string,
                timespec: number,
                resolution: number,
                cancellable?: Gio.Cancellable | null,
            ): HistoryItem[];
            /**
             * Gets the object path for the device.
             * @returns the object path, or %NULL
             */
            get_object_path(): string;
            /**
             * Gets the device current statistics.
             * @param type the type of statistics.
             * @param cancellable a #GCancellable or %NULL
             * @returns an array of #UpStatsItem's, else #NULL and @error is used
             */
            get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[];
            /**
             * Refreshes properties on the device.
             * This function is normally not required and will only return without
             * an error if the daemon was started in debug mode.
             * @param cancellable a #GCancellable or %NULL
             * @returns #TRUE for success, else #FALSE and @error is used
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets the object path of the object and fills up initial properties.
             * @param object_path The UPower object path.
             * @param cancellable a #GCancellable or %NULL
             * @returns #TRUE for success, else #FALSE and @error is used
             */
            set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Converts the device to a string description.
             * @returns text representation of #UpDevice
             */
            to_text(): string;
        }

        module HistoryItem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                state: number;
                time: number;
                value: number;
            }
        }

        class HistoryItem extends GObject.Object {
            static $gtype: GObject.GType<HistoryItem>;

            // Properties

            get state(): number;
            set state(val: number);
            get time(): number;
            set time(val: number);
            get value(): number;
            set value(val: number);

            // Constructors

            constructor(properties?: Partial<HistoryItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): HistoryItem;

            // Methods

            /**
             * Gets the item state.
             */
            get_state(): DeviceState;
            /**
             * Gets the item time.
             */
            get_time(): number;
            /**
             * Gets the item value.
             */
            get_value(): number;
            /**
             * Converts the history item to a string representation.
             * @param text
             */
            set_from_string(text: string): boolean;
            /**
             * Sets the item state.
             * @param state the new value
             */
            set_state(state: DeviceState | null): void;
            /**
             * Sets the item time.
             * @param time the new value
             */
            set_time(time: number): void;
            /**
             * Sets the item time to the present value.
             */
            set_time_to_present(): void;
            /**
             * Sets the item value.
             * @param value the new value
             */
            set_value(value: number): void;
            /**
             * Converts the history item to a string representation.
             */
            to_string(): string;
        }

        module StatsItem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                accuracy: number;
                value: number;
            }
        }

        class StatsItem extends GObject.Object {
            static $gtype: GObject.GType<StatsItem>;

            // Properties

            get accuracy(): number;
            set accuracy(val: number);
            get value(): number;
            set value(val: number);

            // Constructors

            constructor(properties?: Partial<StatsItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StatsItem;

            // Methods

            /**
             * Gets the item accuracy.
             */
            get_accuracy(): number;
            /**
             * Gets the item value.
             */
            get_value(): number;
            /**
             * Sets the item accuracy.
             * @param accuracy
             */
            set_accuracy(accuracy: number): void;
            /**
             * Sets the item value.
             * @param value
             */
            set_value(value: number): void;
        }

        type ClientClass = typeof Client;
        /**
         * Private #UpClient data
         */
        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceClass = typeof Device;
        /**
         * Private #PkDevice data
         */
        abstract class DevicePrivate {
            static $gtype: GObject.GType<DevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type HistoryItemClass = typeof HistoryItem;
        abstract class HistoryItemPrivate {
            static $gtype: GObject.GType<HistoryItemPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type StatsItemClass = typeof StatsItem;
        abstract class StatsItemPrivate {
            static $gtype: GObject.GType<StatsItemPrivate>;

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

    export default UPowerGlib;
}

declare module 'gi://UPowerGlib' {
    import UPowerGlib10 from 'gi://UPowerGlib?version=1.0';
    export default UPowerGlib10;
}
// END
