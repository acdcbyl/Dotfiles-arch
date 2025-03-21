/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./nm-1.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalNetwork?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type NM from 'gi://NM?version=1.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AstalNetwork {
        /**
         * AstalNetwork-0.1
         */

        export namespace Primary {
            export const $gtype: GObject.GType<Primary>;
        }

        enum Primary {
            UNKNOWN,
            WIRED,
            WIFI,
        }

        export namespace State {
            export const $gtype: GObject.GType<State>;
        }

        enum State {
            UNKNOWN,
            ASLEEP,
            DISCONNECTED,
            DISCONNECTING,
            CONNECTING,
            CONNECTED_LOCAL,
            CONNECTED_SITE,
            CONNECTED_GLOBAL,
        }

        export namespace Connectivity {
            export const $gtype: GObject.GType<Connectivity>;
        }

        enum Connectivity {
            UNKNOWN,
            NONE,
            PORTAL,
            LIMITED,
            FULL,
        }

        export namespace DeviceState {
            export const $gtype: GObject.GType<DeviceState>;
        }

        enum DeviceState {
            UNKNOWN,
            UNMANAGED,
            UNAVAILABLE,
            DISCONNECTED,
            PREPARE,
            CONFIG,
            NEED_AUTH,
            IP_CONFIG,
            IP_CHECK,
            SECONDARIES,
            ACTIVATED,
            DEACTIVATING,
            FAILED,
        }

        export namespace Internet {
            export const $gtype: GObject.GType<Internet>;
        }

        enum Internet {
            CONNECTED,
            CONNECTING,
            DISCONNECTED,
        }
        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        function primary_to_string(): string;
        function primary_from_connection_type(type: string): Primary;
        function state_to_string(): string;
        function connectivity_to_string(): string;
        function device_state_to_string(): string;
        function internet_from_device(device: NM.Device): Internet;
        function internet_to_string(): string;
        function get_default(): Network;
        module Network {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                client: NM.Client;
                wifi: Wifi;
                wired: Wired;
                primary: Primary;
                connectivity: Connectivity;
                state: State;
            }
        }

        class Network extends GObject.Object {
            static $gtype: GObject.GType<Network>;

            // Properties

            get client(): NM.Client;
            set client(val: NM.Client);
            get wifi(): Wifi;
            set wifi(val: Wifi);
            get wired(): Wired;
            set wired(val: Wired);
            get primary(): Primary;
            set primary(val: Primary);
            get connectivity(): Connectivity;
            get state(): State;

            // Constructors

            constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Network;

            // Static methods

            static get_default(): Network;

            // Methods

            get_client(): NM.Client;
            get_wifi(): Wifi | null;
            get_wired(): Wired | null;
            get_primary(): Primary;
            get_connectivity(): Connectivity;
            get_state(): State;
        }

        module Wifi {
            // Signal callback interfaces

            interface StateChanged {
                (new_state: DeviceState, old_state: DeviceState, reaseon: NM.DeviceStateReason): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                device: NM.DeviceWifi;
                active_connection: NM.ActiveConnection;
                activeConnection: NM.ActiveConnection;
                active_access_point: AccessPoint;
                activeAccessPoint: AccessPoint;
                access_points: AccessPoint[];
                accessPoints: AccessPoint[];
                enabled: boolean;
                internet: Internet;
                bandwidth: number;
                ssid: string;
                strength: number;
                frequency: number;
                state: DeviceState;
                icon_name: string;
                iconName: string;
                is_hotspot: boolean;
                isHotspot: boolean;
                scanning: boolean;
            }
        }

        class Wifi extends GObject.Object {
            static $gtype: GObject.GType<Wifi>;

            // Properties

            get device(): NM.DeviceWifi;
            set device(val: NM.DeviceWifi);
            get active_connection(): NM.ActiveConnection;
            set active_connection(val: NM.ActiveConnection);
            get activeConnection(): NM.ActiveConnection;
            set activeConnection(val: NM.ActiveConnection);
            get active_access_point(): AccessPoint;
            set active_access_point(val: AccessPoint);
            get activeAccessPoint(): AccessPoint;
            set activeAccessPoint(val: AccessPoint);
            get access_points(): AccessPoint[];
            get accessPoints(): AccessPoint[];
            get enabled(): boolean;
            set enabled(val: boolean);
            get internet(): Internet;
            set internet(val: Internet);
            get bandwidth(): number;
            set bandwidth(val: number);
            get ssid(): string;
            set ssid(val: string);
            get strength(): number;
            set strength(val: number);
            get frequency(): number;
            set frequency(val: number);
            get state(): DeviceState;
            set state(val: DeviceState);
            get icon_name(): string;
            set icon_name(val: string);
            get iconName(): string;
            set iconName(val: string);
            get is_hotspot(): boolean;
            set is_hotspot(val: boolean);
            get isHotspot(): boolean;
            set isHotspot(val: boolean);
            get scanning(): boolean;
            set scanning(val: boolean);

            // Constructors

            constructor(properties?: Partial<Wifi.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'state-changed',
                callback: (
                    _source: this,
                    new_state: DeviceState,
                    old_state: DeviceState,
                    reaseon: NM.DeviceStateReason,
                ) => void,
            ): number;
            connect_after(
                signal: 'state-changed',
                callback: (
                    _source: this,
                    new_state: DeviceState,
                    old_state: DeviceState,
                    reaseon: NM.DeviceStateReason,
                ) => void,
            ): number;
            emit(
                signal: 'state-changed',
                new_state: DeviceState,
                old_state: DeviceState,
                reaseon: NM.DeviceStateReason,
            ): void;

            // Methods

            scan(): void;
            get_device(): NM.DeviceWifi;
            set_device(value: NM.DeviceWifi): void;
            get_active_connection(): NM.ActiveConnection | null;
            get_active_access_point(): AccessPoint | null;
            get_access_points(): AccessPoint[];
            get_enabled(): boolean;
            set_enabled(value: boolean): void;
            get_internet(): Internet;
            get_bandwidth(): number;
            get_ssid(): string;
            get_strength(): number;
            get_frequency(): number;
            get_state(): DeviceState;
            get_icon_name(): string;
            get_is_hotspot(): boolean;
            get_scanning(): boolean;
        }

        module Wired {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                device: NM.DeviceEthernet;
                speed: number;
                internet: Internet;
                state: DeviceState;
                icon_name: string;
                iconName: string;
            }
        }

        class Wired extends GObject.Object {
            static $gtype: GObject.GType<Wired>;

            // Properties

            get device(): NM.DeviceEthernet;
            set device(val: NM.DeviceEthernet);
            get speed(): number;
            set speed(val: number);
            get internet(): Internet;
            set internet(val: Internet);
            get state(): DeviceState;
            set state(val: DeviceState);
            get icon_name(): string;
            set icon_name(val: string);
            get iconName(): string;
            set iconName(val: string);

            // Fields

            connection: NM.ActiveConnection;

            // Constructors

            constructor(properties?: Partial<Wired.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_device(): NM.DeviceEthernet;
            set_device(value: NM.DeviceEthernet): void;
            get_speed(): number;
            get_internet(): Internet;
            get_state(): DeviceState;
            get_icon_name(): string;
        }

        module AccessPoint {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                bandwidth: number;
                bssid: string;
                frequency: number;
                last_seen: number;
                lastSeen: number;
                max_bitrate: number;
                maxBitrate: number;
                strength: number;
                icon_name: string;
                iconName: string;
                mode: NM.__80211Mode;
                flags: NM.__80211ApFlags;
                rsn_flags: NM.__80211ApSecurityFlags;
                rsnFlags: NM.__80211ApSecurityFlags;
                wpa_flags: NM.__80211ApSecurityFlags;
                wpaFlags: NM.__80211ApSecurityFlags;
                ssid: string;
            }
        }

        class AccessPoint extends GObject.Object {
            static $gtype: GObject.GType<AccessPoint>;

            // Properties

            get bandwidth(): number;
            get bssid(): string;
            get frequency(): number;
            get last_seen(): number;
            get lastSeen(): number;
            get max_bitrate(): number;
            get maxBitrate(): number;
            get strength(): number;
            get icon_name(): string;
            set icon_name(val: string);
            get iconName(): string;
            set iconName(val: string);
            get mode(): NM.__80211Mode;
            get flags(): NM.__80211ApFlags;
            get rsn_flags(): NM.__80211ApSecurityFlags;
            get rsnFlags(): NM.__80211ApSecurityFlags;
            get wpa_flags(): NM.__80211ApSecurityFlags;
            get wpaFlags(): NM.__80211ApSecurityFlags;
            get ssid(): string;

            // Constructors

            constructor(properties?: Partial<AccessPoint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_bandwidth(): number;
            get_bssid(): string;
            get_frequency(): number;
            get_last_seen(): number;
            get_max_bitrate(): number;
            get_strength(): number;
            get_icon_name(): string;
            get_mode(): NM.__80211Mode;
            get_flags(): NM.__80211ApFlags;
            get_rsn_flags(): NM.__80211ApSecurityFlags;
            get_wpa_flags(): NM.__80211ApSecurityFlags;
            get_ssid(): string | null;
        }

        type NetworkClass = typeof Network;
        abstract class NetworkPrivate {
            static $gtype: GObject.GType<NetworkPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WifiClass = typeof Wifi;
        abstract class WifiPrivate {
            static $gtype: GObject.GType<WifiPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WiredClass = typeof Wired;
        abstract class WiredPrivate {
            static $gtype: GObject.GType<WiredPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type AccessPointClass = typeof AccessPoint;
        abstract class AccessPointPrivate {
            static $gtype: GObject.GType<AccessPointPrivate>;

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

    export default AstalNetwork;
}

declare module 'gi://AstalNetwork' {
    import AstalNetwork01 from 'gi://AstalNetwork?version=0.1';
    export default AstalNetwork01;
}
// END
