/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalBattery?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace AstalBattery {
        /**
         * AstalBattery-0.1
         */

        export namespace State {
            export const $gtype: GObject.GType<State>;
        }

        enum State {
            UNKNOWN,
            CHARGING,
            DISCHARGING,
            EMPTY,
            FULLY_CHARGED,
            PENDING_CHARGE,
            PENDING_DISCHARGE,
        }

        export namespace Technology {
            export const $gtype: GObject.GType<Technology>;
        }

        enum Technology {
            UNKNOWN,
            LITHIUM_ION,
            LITHIUM_POLYMER,
            LITHIUM_IRON_PHOSPHATE,
            LEAD_ACID,
            NICKEL_CADMIUM,
            NICKEL_METAL_HYDRIDE,
        }

        export namespace WarningLevel {
            export const $gtype: GObject.GType<WarningLevel>;
        }

        enum WarningLevel {
            UNKNOWN,
            NONE,
            DISCHARGING,
            LOW,
            CRITICIAL,
            ACTION,
        }

        export namespace BatteryLevel {
            export const $gtype: GObject.GType<BatteryLevel>;
        }

        enum BatteryLevel {
            UNKNOWN,
            NONE,
            LOW,
            CRITICIAL,
            NORMAL,
            HIGH,
            FULL,
        }

        export namespace Type {
            export const $gtype: GObject.GType<Type>;
        }

        enum Type {
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
            REMOVE_CONTROL,
            PRINTER,
            SCANNER,
            CAMERA,
            WEARABLE,
            TOY,
            BLUETOOTH_GENERIC,
        }
        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        /**
         * Get the DisplayDevice.
         */
        function get_default(): Device;
        module Device {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                device_type: Type;
                deviceType: Type;
                native_path: string;
                nativePath: string;
                vendor: string;
                model: string;
                serial: string;
                update_time: number;
                updateTime: number;
                power_supply: boolean;
                powerSupply: boolean;
                online: boolean;
                energy: number;
                energy_empty: number;
                energyEmpty: number;
                energy_full: number;
                energyFull: number;
                energy_full_design: number;
                energyFullDesign: number;
                energy_rate: number;
                energyRate: number;
                voltage: number;
                charge_cycles: number;
                chargeCycles: number;
                luminosity: number;
                time_to_empty: number;
                timeToEmpty: number;
                time_to_full: number;
                timeToFull: number;
                percentage: number;
                temperature: number;
                is_present: boolean;
                isPresent: boolean;
                state: State;
                is_rechargable: boolean;
                isRechargable: boolean;
                capacity: number;
                technology: Technology;
                warning_level: WarningLevel;
                warningLevel: WarningLevel;
                battery_level: BatteryLevel;
                batteryLevel: BatteryLevel;
                icon_name: string;
                iconName: string;
                charging: boolean;
                is_battery: boolean;
                isBattery: boolean;
                battery_icon_name: string;
                batteryIconName: string;
                device_type_name: string;
                deviceTypeName: string;
                device_type_icon: string;
                deviceTypeIcon: string;
            }
        }

        /**
         * Client for a UPower [device](https://upower.freedesktop.org/docs/Device.html).
         */
        class Device extends GObject.Object {
            static $gtype: GObject.GType<Device>;

            // Properties

            /**
             * If it is [enum`AstalBattery`.Type.BATTERY], you will need to verify that the property power-supply has the value `true` before
             * considering it as a laptop battery. Otherwise it will likely be the battery for a device of an unknown type.
             */
            get device_type(): Type;
            set device_type(val: Type);
            /**
             * If it is [enum`AstalBattery`.Type.BATTERY], you will need to verify that the property power-supply has the value `true` before
             * considering it as a laptop battery. Otherwise it will likely be the battery for a device of an unknown type.
             */
            get deviceType(): Type;
            set deviceType(val: Type);
            /**
             * Native path of the power source. This is the sysfs path, for example /sys/devices/LNXSYSTM:00/device:00/PNP0C0A:00/power_supply/BAT0. It is
             * blank if the device is being driven by a user space driver.
             */
            get native_path(): string;
            set native_path(val: string);
            /**
             * Native path of the power source. This is the sysfs path, for example /sys/devices/LNXSYSTM:00/device:00/PNP0C0A:00/power_supply/BAT0. It is
             * blank if the device is being driven by a user space driver.
             */
            get nativePath(): string;
            set nativePath(val: string);
            /**
             * Name of the vendor of the battery.
             */
            get vendor(): string;
            set vendor(val: string);
            /**
             * Name of the model of this battery.
             */
            get model(): string;
            set model(val: string);
            /**
             * Unique serial number of the battery.
             */
            get serial(): string;
            set serial(val: string);
            /**
             * The point in time (seconds since the Epoch) that data was read from the power source.
             */
            get update_time(): number;
            set update_time(val: number);
            /**
             * The point in time (seconds since the Epoch) that data was read from the power source.
             */
            get updateTime(): number;
            set updateTime(val: number);
            /**
             * If the power device is used to supply the system. This would be set `true` for laptop batteries and UPS devices, but set to `false` for
             * wireless mice or PDAs.
             */
            get power_supply(): boolean;
            set power_supply(val: boolean);
            /**
             * If the power device is used to supply the system. This would be set `true` for laptop batteries and UPS devices, but set to `false` for
             * wireless mice or PDAs.
             */
            get powerSupply(): boolean;
            set powerSupply(val: boolean);
            /**
             * Whether power is currently being provided through line power.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.LINE_POWER].
             */
            get online(): boolean;
            set online(val: boolean);
            /**
             * Amount of energy (measured in Wh) currently available in the power source.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energy(): number;
            set energy(val: number);
            /**
             * Amount of energy (measured in Wh) in the power source when it's considered to be empty.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energy_empty(): number;
            set energy_empty(val: number);
            /**
             * Amount of energy (measured in Wh) in the power source when it's considered to be empty.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energyEmpty(): number;
            set energyEmpty(val: number);
            /**
             * Amount of energy (measured in Wh) in the power source when it's considered full.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energy_full(): number;
            set energy_full(val: number);
            /**
             * Amount of energy (measured in Wh) in the power source when it's considered full.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energyFull(): number;
            set energyFull(val: number);
            /**
             * Amount of energy (measured in Wh) the power source is designed to hold when it's considered full.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energy_full_design(): number;
            set energy_full_design(val: number);
            /**
             * Amount of energy (measured in Wh) the power source is designed to hold when it's considered full.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energyFullDesign(): number;
            set energyFullDesign(val: number);
            /**
             * Amount of energy being drained from the source, measured in W. If positive, the source is being discharged, if negative it's being charged.
             *
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energy_rate(): number;
            set energy_rate(val: number);
            /**
             * Amount of energy being drained from the source, measured in W. If positive, the source is being discharged, if negative it's being charged.
             *
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get energyRate(): number;
            set energyRate(val: number);
            /**
             * Voltage in the Cell or being recorded by the meter.
             */
            get voltage(): number;
            set voltage(val: number);
            /**
             * The number of charge cycles as defined by the TCO certification, or -1 if that value is unknown or not applicable.
             */
            get charge_cycles(): number;
            set charge_cycles(val: number);
            /**
             * The number of charge cycles as defined by the TCO certification, or -1 if that value is unknown or not applicable.
             */
            get chargeCycles(): number;
            set chargeCycles(val: number);
            /**
             * Luminosity being recorded by the meter.
             */
            get luminosity(): number;
            set luminosity(val: number);
            /**
             * Number of seconds until the power source is considered empty. Is set to 0 if unknown.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get time_to_empty(): number;
            set time_to_empty(val: number);
            /**
             * Number of seconds until the power source is considered empty. Is set to 0 if unknown.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get timeToEmpty(): number;
            set timeToEmpty(val: number);
            /**
             * Number of seconds until the power source is considered full. Is set to 0 if unknown.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get time_to_full(): number;
            set time_to_full(val: number);
            /**
             * Number of seconds until the power source is considered full. Is set to 0 if unknown.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get timeToFull(): number;
            set timeToFull(val: number);
            /**
             * The amount of energy left in the power source expressed as a percentage between 0 and 1.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY]. The percentage
             * will be an approximation if [property`AstalBattery`.Device:battery_level] is set to something other than None.
             */
            get percentage(): number;
            set percentage(val: number);
            /**
             * The temperature of the device in degrees Celsius.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get temperature(): number;
            set temperature(val: number);
            /**
             * If the power source is present in the bay.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get is_present(): boolean;
            set is_present(val: boolean);
            /**
             * If the power source is present in the bay.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get isPresent(): boolean;
            set isPresent(val: boolean);
            /**
             * The battery power state.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get state(): State;
            set state(val: State);
            /**
             * If the power source is rechargeable.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get is_rechargable(): boolean;
            set is_rechargable(val: boolean);
            /**
             * If the power source is rechargeable.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get isRechargable(): boolean;
            set isRechargable(val: boolean);
            /**
             * The capacity of the power source expressed as a percentage between 0 and 1.
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get capacity(): number;
            set capacity(val: number);
            /**
             * Technology used in the battery:
             * This property is only valid if [property`AstalBattery`.Device:device_type] is [enum`AstalBattery`.Type.BATTERY].
             */
            get technology(): Technology;
            set technology(val: Technology);
            /**
             * Warning level of the battery.
             */
            get warning_level(): WarningLevel;
            set warning_level(val: WarningLevel);
            /**
             * Warning level of the battery.
             */
            get warningLevel(): WarningLevel;
            set warningLevel(val: WarningLevel);
            /**
             * The level of the battery for devices which do not report a percentage but rather a coarse battery level. If the value is None. then the device
             * does not support coarse battery reporting, and the [property`AstalBattery`.Device:percentage] should be used instead.
             */
            get battery_level(): BatteryLevel;
            set battery_level(val: BatteryLevel);
            /**
             * The level of the battery for devices which do not report a percentage but rather a coarse battery level. If the value is None. then the device
             * does not support coarse battery reporting, and the [property`AstalBattery`.Device:percentage] should be used instead.
             */
            get batteryLevel(): BatteryLevel;
            set batteryLevel(val: BatteryLevel);
            /**
             * An icon name representing this Device.
             * NOTE: [property`AstalBattery`.Device:battery_icon_name] might be a better fit as it is calculated from percentage.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * An icon name representing this Device.
             * NOTE: [property`AstalBattery`.Device:battery_icon_name] might be a better fit as it is calculated from percentage.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * Indicates if [property`AstalBattery`.Device:state] is charging or fully charged.
             */
            get charging(): boolean;
            set charging(val: boolean);
            /**
             * Indicates if [property`AstalBattery`.Device:device_type] is not line power or unknown.
             */
            get is_battery(): boolean;
            set is_battery(val: boolean);
            /**
             * Indicates if [property`AstalBattery`.Device:device_type] is not line power or unknown.
             */
            get isBattery(): boolean;
            set isBattery(val: boolean);
            /**
             * An icon name in the form of "battery-level-$percentage-$state-symbolic".
             */
            get battery_icon_name(): string;
            set battery_icon_name(val: string);
            /**
             * An icon name in the form of "battery-level-$percentage-$state-symbolic".
             */
            get batteryIconName(): string;
            set batteryIconName(val: string);
            /**
             * A string representation of this device's [property`AstalBattery`.Device:device_type].
             */
            get device_type_name(): string;
            set device_type_name(val: string);
            /**
             * A string representation of this device's [property`AstalBattery`.Device:device_type].
             */
            get deviceTypeName(): string;
            set deviceTypeName(val: string);
            /**
             * An icon name that can be used to represent this device's [property`AstalBattery`.Device:device_type].
             */
            get device_type_icon(): string;
            set device_type_icon(val: string);
            /**
             * An icon name that can be used to represent this device's [property`AstalBattery`.Device:device_type].
             */
            get deviceTypeIcon(): string;
            set deviceTypeIcon(val: string);

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](path: never): Device;

            // Static methods

            /**
             * Get the DisplayDevice.
             */
            static get_default(): Device | null;

            // Methods

            get_device_type(): Type;
            get_native_path(): string;
            get_vendor(): string;
            get_model(): string;
            get_serial(): string;
            get_update_time(): number;
            get_power_supply(): boolean;
            get_online(): boolean;
            get_energy(): number;
            get_energy_empty(): number;
            get_energy_full(): number;
            get_energy_full_design(): number;
            get_energy_rate(): number;
            get_voltage(): number;
            get_charge_cycles(): number;
            get_luminosity(): number;
            get_time_to_empty(): number;
            get_time_to_full(): number;
            get_percentage(): number;
            get_temperature(): number;
            get_is_present(): boolean;
            get_state(): State;
            get_is_rechargable(): boolean;
            get_capacity(): number;
            get_technology(): Technology;
            get_warning_level(): WarningLevel;
            get_battery_level(): BatteryLevel;
            get_icon_name(): string;
            get_charging(): boolean;
            get_is_battery(): boolean;
            get_battery_icon_name(): string;
            get_device_type_name(): string;
            get_device_type_icon(): string;
        }

        module UPower {
            // Signal callback interfaces

            interface DeviceAdded {
                (device: Device): void;
            }

            interface DeviceRemoved {
                (device: Device): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                devices: Device[];
                display_device: Device;
                displayDevice: Device;
                daemon_version: string;
                daemonVersion: string;
                on_battery: boolean;
                onBattery: boolean;
                lid_is_closed: boolean;
                lidIsClosed: boolean;
                lis_is_present: boolean;
                lisIsPresent: boolean;
                critical_action: string;
                criticalAction: string;
            }
        }

        /**
         * Client for the UPower [dbus interface](https://upower.freedesktop.org/docs/UPower.html).
         */
        class UPower extends GObject.Object {
            static $gtype: GObject.GType<UPower>;

            // Properties

            /**
             * List of UPower devices.
             */
            get devices(): Device[];
            /**
             * A composite device that represents the battery status.
             */
            get display_device(): Device;
            /**
             * A composite device that represents the battery status.
             */
            get displayDevice(): Device;
            get daemon_version(): string;
            get daemonVersion(): string;
            /**
             * Indicates whether the system is running on battery power.
             */
            get on_battery(): boolean;
            /**
             * Indicates whether the system is running on battery power.
             */
            get onBattery(): boolean;
            /**
             * Indicates if the laptop lid is closed where the display cannot be seen.
             */
            get lid_is_closed(): boolean;
            /**
             * Indicates if the laptop lid is closed where the display cannot be seen.
             */
            get lidIsClosed(): boolean;
            /**
             * Indicates if the system has a lid device.
             */
            get lis_is_present(): boolean;
            /**
             * Indicates if the system has a lid device.
             */
            get lisIsPresent(): boolean;
            /**
             * When the system's power supply is critical (critically low batteries or UPS), the system will take this action.
             */
            get critical_action(): string;
            /**
             * When the system's power supply is critical (critically low batteries or UPS), the system will take this action.
             */
            get criticalAction(): string;

            // Constructors

            constructor(properties?: Partial<UPower.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UPower;

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

            // Methods

            get_devices(): Device[];
            get_display_device(): Device;
            get_daemon_version(): string;
            get_on_battery(): boolean;
            get_lid_is_closed(): boolean;
            get_lis_is_present(): boolean;
            get_critical_action(): string;
        }

        type DeviceClass = typeof Device;
        abstract class DevicePrivate {
            static $gtype: GObject.GType<DevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UPowerClass = typeof UPower;
        abstract class UPowerPrivate {
            static $gtype: GObject.GType<UPowerPrivate>;

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

    export default AstalBattery;
}

declare module 'gi://AstalBattery' {
    import AstalBattery01 from 'gi://AstalBattery?version=0.1';
    export default AstalBattery01;
}
// END
