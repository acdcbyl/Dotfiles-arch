/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AstalPowerProfiles?version=0.1' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';

    export namespace AstalPowerProfiles {
        /**
         * AstalPowerProfiles-0.1
         */

        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        function get_default(): PowerProfiles;
        module PowerProfiles {
            // Signal callback interfaces

            interface ProfileReleased {
                (cookie: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                active_profile: string;
                activeProfile: string;
                icon_name: string;
                iconName: string;
                actions: string[];
                performance_degraded: string;
                performanceDegraded: string;
                version: string;
            }
        }

        /**
         * Client for <ulink url="https://freedesktop-team.pages.debian.net/power-profiles-daemon/gdbus-org.freedesktop.UPower.PowerProfiles.html">
         *   PowerProfiles</ulink>.
         */
        class PowerProfiles extends GObject.Object {
            static $gtype: GObject.GType<PowerProfiles>;

            // Properties

            /**
             * The type of the currently active profile. It might change automatically if a profile is held, using the [method@
             * AstalPowerProfiles.PowerProfiles.hold_profile] method.
             */
            get active_profile(): string;
            set active_profile(val: string);
            /**
             * The type of the currently active profile. It might change automatically if a profile is held, using the [method@
             * AstalPowerProfiles.PowerProfiles.hold_profile] method.
             */
            get activeProfile(): string;
            set activeProfile(val: string);
            /**
             * Return a named icon based [property`AstalPowerProfiles`.PowerProfiles:active_profile].
             */
            get icon_name(): string;
            /**
             * Return a named icon based [property`AstalPowerProfiles`.PowerProfiles:active_profile].
             */
            get iconName(): string;
            /**
             * List of the "actions" implemented in the running daemon. This can used to figure out whether particular functionality is available in
             * the daemon.
             */
            get actions(): string[];
            /**
             * This will be set if the performance power profile is running in degraded mode, with the value being used to identify the reason for that
             * degradation. Possible values are: - "lap-detected" (the computer is sitting on the user's lap) - "high-operating-
             * temperature" (the computer is close to overheating) - "" (the empty string, if not performance is not degraded)
             */
            get performance_degraded(): string;
            /**
             * This will be set if the performance power profile is running in degraded mode, with the value being used to identify the reason for that
             * degradation. Possible values are: - "lap-detected" (the computer is sitting on the user's lap) - "high-operating-
             * temperature" (the computer is close to overheating) - "" (the empty string, if not performance is not degraded)
             */
            get performanceDegraded(): string;
            /**
             * The version of the power-profiles-daemon software.
             */
            get version(): string;

            // Constructors

            constructor(properties?: Partial<PowerProfiles.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PowerProfiles;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'profile-released', callback: (_source: this, cookie: number) => void): number;
            connect_after(signal: 'profile-released', callback: (_source: this, cookie: number) => void): number;
            emit(signal: 'profile-released', cookie: number): void;

            // Static methods

            /**
             * Gets the default singleton PowerProfiles instance.
             */
            static get_default(): PowerProfiles;

            // Methods

            /**
             * This forces the passed profile (either 'power-saver' or 'performance') to be activated until either the caller
             * quits, [method`AstalPowerProfiles`.PowerProfiles.release_profile] is called, or the [property@
             * AstalPowerProfiles.PowerProfiles:active_profile] is changed by the user. When conflicting profiles are requested to be held, the 'power-saver
             * ' profile will be activated in preference to the 'performance' profile. Those holds will be automatically cancelled if the user
             * manually switches to another profile, and the [signal`AstalPowerProfiles`.PowerProfiles::profile_released] signal will be emitted.
             * @param profile
             * @param reason
             * @param application_id
             */
            hold_profile(profile: string, reason: string, application_id: string): number;
            /**
             * This removes the hold that was set on a profile.
             * @param cookie
             */
            release_profile(cookie: number): void;
            get_active_profile(): string;
            set_active_profile(value: string): void;
            get_icon_name(): string;
            get_actions(): string[];
            get_active_profile_holds(): Hold[];
            get_performance_degraded(): string;
            get_profiles(): Profile[];
            get_version(): string;
        }

        type PowerProfilesClass = typeof PowerProfiles;
        abstract class PowerProfilesPrivate {
            static $gtype: GObject.GType<PowerProfilesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Profile {
            static $gtype: GObject.GType<Profile>;

            // Fields

            profile: string;
            cpu_driver: string;
            platform_driver: string;
            driver: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    profile: string;
                    cpu_driver: string;
                    platform_driver: string;
                    driver: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class Hold {
            static $gtype: GObject.GType<Hold>;

            // Fields

            application_id: string;
            profile: string;
            reason: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    application_id: string;
                    profile: string;
                    reason: string;
                }>,
            );
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

    export default AstalPowerProfiles;
}

declare module 'gi://AstalPowerProfiles' {
    import AstalPowerProfiles01 from 'gi://AstalPowerProfiles?version=0.1';
    export default AstalPowerProfiles01;
}
// END
