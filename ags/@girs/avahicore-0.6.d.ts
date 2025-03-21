/// <reference path="./gobject-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AvahiCore?version=0.6' {
    // Module dependencies
    import type GObject from 'gi://GObject?version=2.0';

    export namespace AvahiCore {
        /**
         * AvahiCore-0.6
         */

        export namespace Protocol {
            export const $gtype: GObject.GType<Protocol>;
        }

        enum Protocol {
            INET,
            INET6,
            UNSPEC,
        }
        function server_get_host_name(): string;

        export namespace PublishFlags {
            export const $gtype: GObject.GType<PublishFlags>;
        }

        enum PublishFlags {
            UNIQUE,
            NO_PROBE,
            NO_ANNOUNCE,
            ALLOW_MULTIPLE,
            NO_REVERSE,
            NO_COOKIE,
            UPDATE,
            USE_WIDE_AREA,
            USE_MULTICAST,
        }
        class StringList {
            static $gtype: GObject.GType<StringList>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Address {
            static $gtype: GObject.GType<Address>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Client {
            static $gtype: GObject.GType<Client>;

            // Constructors

            _init(...args: any[]): void;
        }

        type IfIndex = number;
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

    export default AvahiCore;
}

declare module 'gi://AvahiCore' {
    import AvahiCore06 from 'gi://AvahiCore?version=0.6';
    export default AvahiCore06;
}
// END
