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

declare module 'gi://AstalBluetooth?version=0.1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalBluetooth {
        /**
         * AstalBluetooth-0.1
         */

        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        /**
         * Gets the default singleton Bluetooth object.
         */
        function get_default(): Bluetooth;
        module Adapter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                uuids: string[];
                discovering: boolean;
                modalias: string;
                name: string;
                class: number;
                address: string;
                discoverable: boolean;
                pairable: boolean;
                powered: boolean;
                alias: string;
                discoverable_timeout: number;
                discoverableTimeout: number;
                pairable_timeout: number;
                pairableTimeout: number;
            }
        }

        /**
         * Object representing an [adapter](https://github.com/RadiusNetworks/bluez/blob/master/doc/adapter-api.txt).
         */
        class Adapter extends GObject.Object {
            static $gtype: GObject.GType<Adapter>;

            // Properties

            /**
             * List of 128-bit UUIDs that represents the available local services.
             */
            get uuids(): string[];
            /**
             * Indicates that a device discovery procedure is active.
             */
            get discovering(): boolean;
            /**
             * Local Device ID information in modalias format used by the kernel and udev.
             */
            get modalias(): string;
            /**
             * The Bluetooth system name (pretty hostname).
             */
            get name(): string;
            /**
             * The Bluetooth class of device.
             */
            get class(): number;
            /**
             * The Bluetooth device address.
             */
            get address(): string;
            /**
             * Switch an adapter to discoverable or non-discoverable to either make it visible or hide it.
             */
            get discoverable(): boolean;
            set discoverable(val: boolean);
            /**
             * Switch an adapter to pairable or non-pairable.
             */
            get pairable(): boolean;
            set pairable(val: boolean);
            /**
             * Switch an adapter on or off.
             */
            get powered(): boolean;
            set powered(val: boolean);
            /**
             * The Bluetooth friendly name.
             * In case no alias is set, it will return [property`AstalBluetooth`.Adapter:name].
             */
            get alias(): string;
            set alias(val: string);
            /**
             * The discoverable timeout in seconds. A value of zero means that the timeout is disabled and it will stay in discoverable/limited mode forever
             * until [method`AstalBluetooth`.Adapter.stop_discovery] is invoked. The default value for the discoverable timeout should be `180`.
             */
            get discoverable_timeout(): number;
            set discoverable_timeout(val: number);
            /**
             * The discoverable timeout in seconds. A value of zero means that the timeout is disabled and it will stay in discoverable/limited mode forever
             * until [method`AstalBluetooth`.Adapter.stop_discovery] is invoked. The default value for the discoverable timeout should be `180`.
             */
            get discoverableTimeout(): number;
            set discoverableTimeout(val: number);
            /**
             * The pairable timeout in seconds.
             * A value of zero means that the timeout is disabled and it will stay in pairable mode forever. The default value for pairable timeout should be
             * disabled `0`.
             */
            get pairable_timeout(): number;
            set pairable_timeout(val: number);
            /**
             * The pairable timeout in seconds.
             * A value of zero means that the timeout is disabled and it will stay in pairable mode forever. The default value for pairable timeout should be
             * disabled `0`.
             */
            get pairableTimeout(): number;
            set pairableTimeout(val: number);

            // Constructors

            constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * This removes the remote device and the pairing information.
             * Possible errors: `InvalidArguments`, `Failed`.
             * @param device
             */
            remove_device(device: Device): void;
            /**
             * This method starts the device discovery procedure.
             * Possible errors: `NotReady`, `Failed`.
             */
            start_discovery(): void;
            /**
             * This method will cancel any previous [method`AstalBluetooth`.Adapter.start_discovery] procedure.
             * Possible errors: `NotReady`, `Failed`, `NotAuthorized`.
             */
            stop_discovery(): void;
            get_uuids(): string[];
            get_discovering(): boolean;
            get_modalias(): string;
            get_name(): string;
            get_class(): number;
            get_address(): string;
            get_discoverable(): boolean;
            set_discoverable(value: boolean): void;
            get_pairable(): boolean;
            set_pairable(value: boolean): void;
            get_powered(): boolean;
            set_powered(value: boolean): void;
            get_alias(): string;
            set_alias(value: string): void;
            get_discoverable_timeout(): number;
            set_discoverable_timeout(value: number): void;
            get_pairable_timeout(): number;
            set_pairable_timeout(value: number): void;
        }

        module Bluetooth {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            interface AdapterAdded {
                (adapter: Adapter): void;
            }

            interface AdapterRemoved {
                (adapter: Adapter): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                is_powered: boolean;
                isPowered: boolean;
                is_connected: boolean;
                isConnected: boolean;
                adapter: Adapter;
                adapters: Adapter[];
                devices: Device[];
            }
        }

        /**
         * Manager object for `org.bluez`.
         */
        class Bluetooth extends GObject.Object {
            static $gtype: GObject.GType<Bluetooth>;

            // Properties

            /**
             * `true` if any of the [property`AstalBluetooth`.Bluetooth:adapters] are powered.
             */
            get is_powered(): boolean;
            set is_powered(val: boolean);
            /**
             * `true` if any of the [property`AstalBluetooth`.Bluetooth:adapters] are powered.
             */
            get isPowered(): boolean;
            set isPowered(val: boolean);
            /**
             * `true` if any of the [property`AstalBluetooth`.Bluetooth:devices] is connected.
             */
            get is_connected(): boolean;
            set is_connected(val: boolean);
            /**
             * `true` if any of the [property`AstalBluetooth`.Bluetooth:devices] is connected.
             */
            get isConnected(): boolean;
            set isConnected(val: boolean);
            /**
             * The first registered adapter which is usually the only adapter.
             */
            get adapter(): Adapter;
            /**
             * List of adapters available on the host device.
             */
            get adapters(): Adapter[];
            /**
             * List of registered devices on the `org.bluez` bus.
             */
            get devices(): Device[];

            // Constructors

            constructor(properties?: Partial<Bluetooth.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Bluetooth;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-added', device: Device): void;
            connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
            emit(signal: 'device-removed', device: Device): void;
            connect(signal: 'adapter-added', callback: (_source: this, adapter: Adapter) => void): number;
            connect_after(signal: 'adapter-added', callback: (_source: this, adapter: Adapter) => void): number;
            emit(signal: 'adapter-added', adapter: Adapter): void;
            connect(signal: 'adapter-removed', callback: (_source: this, adapter: Adapter) => void): number;
            connect_after(signal: 'adapter-removed', callback: (_source: this, adapter: Adapter) => void): number;
            emit(signal: 'adapter-removed', adapter: Adapter): void;

            // Static methods

            /**
             * Gets the default singleton Bluetooth object.
             */
            static get_default(): Bluetooth;

            // Methods

            /**
             * Toggle the [property`AstalBluetooth`.Adapter:powered] property of the [property`AstalBluetooth`.Bluetooth:adapter].
             */
            toggle(): void;
            get_is_powered(): boolean;
            get_is_connected(): boolean;
            get_adapter(): Adapter | null;
            get_adapters(): Adapter[];
            get_devices(): Device[];
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                uuids: string[];
                connected: boolean;
                legacy_pairing: boolean;
                legacyPairing: boolean;
                paired: boolean;
                rssi: number;
                adapter: never;
                address: string;
                icon: string;
                modalias: string;
                name: string;
                appearance: number;
                class: number;
                connecting: boolean;
                blocked: boolean;
                trusted: boolean;
                alias: string;
            }
        }

        /**
         * Object representing a [device](https://github.com/luetzel/bluez/blob/master/doc/device-api.txt).
         */
        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * List of 128-bit UUIDs that represents the available remote services.
             */
            get uuids(): string[];
            /**
             * Indicates if the remote device is currently connected.
             */
            get connected(): boolean;
            /**
             * `true` if the device only supports the pre-2.1 pairing mechanism.
             */
            get legacy_pairing(): boolean;
            /**
             * `true` if the device only supports the pre-2.1 pairing mechanism.
             */
            get legacyPairing(): boolean;
            /**
             * Indicates if the remote device is paired.
             */
            get paired(): boolean;
            /**
             * Received Signal Strength Indicator of the remote device (inquiry or advertising).
             */
            get rssi(): number;
            /**
             * The object path of the adapter the device belongs to.
             */
            get adapter(): never;
            /**
             * The Bluetooth device address of the remote device.
             */
            get address(): string;
            /**
             * Proposed icon name.
             */
            get icon(): string;
            /**
             * Remote Device ID information in modalias format used by the kernel and udev.
             */
            get modalias(): string;
            /**
             * The Bluetooth remote name.
             * It is always better to use [property`AstalBluetooth`.Device:alias].
             */
            get name(): string;
            /**
             * External appearance of device, as found on GAP service.
             */
            get appearance(): number;
            /**
             * The Bluetooth class of device of the remote device.
             */
            get class(): number;
            /**
             * Indicates if this device is currently trying to be connected.
             */
            get connecting(): boolean;
            set connecting(val: boolean);
            /**
             * If set to `true` any incoming connections from the device will be immediately rejected.
             */
            get blocked(): boolean;
            set blocked(val: boolean);
            /**
             * Indicates if the remote is seen as trusted.
             */
            get trusted(): boolean;
            set trusted(val: boolean);
            /**
             * The name alias for the remote device.
             * In case no alias is set, it will return the remote device [property`AstalBluetooth`.Device:name].
             */
            get alias(): string;
            set alias(val: string);

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * This is a generic method to connect any profiles the remote device supports that can be connected to.
             * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
             */
            connect_device(): Promise<void>;
            /**
             * This is a generic method to connect any profiles the remote device supports that can be connected to.
             * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
             * @param _callback_
             */
            connect_device(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * This is a generic method to connect any profiles the remote device supports that can be connected to.
             * Possible errors: `NotReady`, `Failed`, `InProgress`, `AlreadyConnected`.
             * @param _callback_
             */
            connect_device(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            connect_device_finish(_res_: Gio.AsyncResult): void;
            /**
             * This method gracefully disconnects all connected profiles.
             * Possible errors: `NotConnected`.
             */
            disconnect_device(): Promise<void>;
            /**
             * This method gracefully disconnects all connected profiles.
             * Possible errors: `NotConnected`.
             * @param _callback_
             */
            disconnect_device(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * This method gracefully disconnects all connected profiles.
             * Possible errors: `NotConnected`.
             * @param _callback_
             */
            disconnect_device(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            disconnect_device_finish(_res_: Gio.AsyncResult): void;
            /**
             * This method connects a specific profile of this device. The UUID provided is the remote service UUID for the profile.
             * Possible errors: `Failed`, `InProgress`, `InvalidArguments`, `NotAvailable`, `NotReady`.
             * @param uuid the remote service UUID.
             */
            connect_profile(uuid: string): void;
            /**
             * This method disconnects a specific profile of this device.
             * Possible errors: `Failed`, `InProgress`, `InvalidArguments`, `NotSupported`.
             * @param uuid the remote service UUID.
             */
            disconnect_profile(uuid: string): void;
            /**
             * This method will connect to the remote device and initiate pairing.
             * Possible errors: `InvalidArguments`, `Failed`, `AlreadyExists`, `AuthenticationCanceled`, `AuthenticationFailed`, `AuthenticationRejected`,
             * `AuthenticationTimeout`, `ConnectionAttemptFailed`.
             */
            pair(): void;
            /**
             * This method can be used to cancel a pairing operation initiated by [method`AstalBluetooth`.Device.pair].
             * Possible errors: `DoesNotExist`, `Failed`.
             */
            cancel_pairing(): void;
            get_uuids(): string[];
            get_connected(): boolean;
            get_legacy_pairing(): boolean;
            get_paired(): boolean;
            get_rssi(): number;
            get_adapter(): never;
            get_address(): string;
            get_icon(): string;
            get_modalias(): string;
            get_name(): string;
            get_appearance(): number;
            get_class(): number;
            get_connecting(): boolean;
            get_blocked(): boolean;
            set_blocked(value: boolean): void;
            get_trusted(): boolean;
            set_trusted(value: boolean): void;
            get_alias(): string;
            set_alias(value: string): void;
        }

        type AdapterClass = typeof Adapter;
        abstract class AdapterPrivate {
            static $gtype: GObject.GType<AdapterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BluetoothClass = typeof Bluetooth;
        abstract class BluetoothPrivate {
            static $gtype: GObject.GType<BluetoothPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceClass = typeof Device;
        abstract class DevicePrivate {
            static $gtype: GObject.GType<DevicePrivate>;

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

    export default AstalBluetooth;
}

declare module 'gi://AstalBluetooth' {
    import AstalBluetooth01 from 'gi://AstalBluetooth?version=0.1';
    export default AstalBluetooth01;
}
// END
