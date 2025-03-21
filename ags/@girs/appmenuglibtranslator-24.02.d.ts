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

declare module 'gi://AppmenuGLibTranslator?version=24.02' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace AppmenuGLibTranslator {
        /**
         * AppmenuGLibTranslator-24.02
         */

        module Importer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                action_group: Gio.ActionGroup;
                actionGroup: Gio.ActionGroup;
                bus_name: string;
                busName: string;
                model: Gio.MenuModel;
                object_path: string;
                objectPath: string;
            }
        }

        class Importer extends GObject.Object {
            static $gtype: GObject.GType<Importer>;

            // Properties

            get action_group(): Gio.ActionGroup;
            get actionGroup(): Gio.ActionGroup;
            set bus_name(val: string);
            set busName(val: string);
            get model(): Gio.MenuModel;
            set object_path(val: string);
            set objectPath(val: string);

            // Constructors

            constructor(properties?: Partial<Importer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](bus_name: string, object_path: string): Importer;
        }

        type ImporterClass = typeof Importer;
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

    export default AppmenuGLibTranslator;
}

declare module 'gi://AppmenuGLibTranslator' {
    import AppmenuGLibTranslator2402 from 'gi://AppmenuGLibTranslator?version=24.02';
    export default AppmenuGLibTranslator2402;
}
// END
