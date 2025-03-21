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

declare module 'gi://AstalApps?version=0.1' {
    // Module dependencies
    import type GLib from 'gi://GLib?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';

    export namespace AstalApps {
        /**
         * AstalApps-0.1
         */

        const MAJOR_VERSION: number;
        const MINOR_VERSION: number;
        const MICRO_VERSION: number;
        const VERSION: string;
        module Application {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                app: never;
                frequency: number;
                name: string;
                entry: string;
                description: string;
                wm_class: string;
                wmClass: string;
                executable: string;
                icon_name: string;
                iconName: string;
                keywords: string[];
                categories: string[];
            }
        }

        /**
         * Object representing an applications .desktop file.
         */
        class Application extends GObject.Object {
            static $gtype: GObject.GType<Application>;

            // Properties

            /**
             * The underlying DesktopAppInfo.
             */
            get app(): never;
            set app(val: never);
            /**
             * The number of times [method`AstalApps`.Application.launch] was called on this Application.
             */
            get frequency(): number;
            set frequency(val: number);
            /**
             * The name of this Application.
             */
            get name(): string;
            /**
             * Name of the .desktop of this Application.
             */
            get entry(): string;
            /**
             * Description of this Application.
             */
            get description(): string;
            /**
             * `StartupWMClass` field from the desktop file. This represents the `WM_CLASS` property of the main window of the application.
             */
            get wm_class(): string;
            /**
             * `StartupWMClass` field from the desktop file. This represents the `WM_CLASS` property of the main window of the application.
             */
            get wmClass(): string;
            /**
             * `Exec` field from the desktop file. Note that if you want to launch this Application you should use the [method@
             * AstalApps.Application.launch] method.
             */
            get executable(): string;
            /**
             * `Icon` field from the desktop file. This is usually a named icon or a path to a file.
             */
            get icon_name(): string;
            /**
             * `Icon` field from the desktop file. This is usually a named icon or a path to a file.
             */
            get iconName(): string;
            /**
             * `Keywords` field from the desktop file.
             */
            get keywords(): string[];
            /**
             * `Categories` field from the desktop file.
             */
            get categories(): string[];

            // Constructors

            constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Get a value from the .desktop file by its key.
             * @param key
             */
            get_key(key: string): string;
            /**
             * Launches this application. The launched application inherits the environment of the launching process
             */
            launch(): boolean;
            /**
             * Calculate a score for an application using fuzzy matching algorithm.
             * @param term
             */
            fuzzy_match(term: string): Score;
            /**
             * Calculate a score using exact string algorithm.
             * @param term
             */
            exact_match(term: string): Score;
            get_app(): never;
            set_app(value: never): void;
            get_frequency(): number;
            set_frequency(value: number): void;
            get_name(): string;
            get_entry(): string;
            get_description(): string;
            get_wm_class(): string;
            get_executable(): string;
            get_icon_name(): string;
            get_keywords(): string[];
            get_categories(): string[];
        }

        module Apps {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                show_hidden: boolean;
                showHidden: boolean;
                list: Application[];
                min_score: number;
                minScore: number;
                name_multiplier: number;
                nameMultiplier: number;
                entry_multiplier: number;
                entryMultiplier: number;
                executable_multiplier: number;
                executableMultiplier: number;
                description_multiplier: number;
                descriptionMultiplier: number;
                keywords_multiplier: number;
                keywordsMultiplier: number;
                categories_multiplier: number;
                categoriesMultiplier: number;
            }
        }

        /**
         * This object can be used to query applications. Multipliers can be set to customize [struct`AstalApps`.Score] results from queries which
         * then are summed and sorted accordingly.
         */
        class Apps extends GObject.Object {
            static $gtype: GObject.GType<Apps>;

            // Properties

            /**
             * Indicates wether hidden applications should included in queries.
             */
            get show_hidden(): boolean;
            set show_hidden(val: boolean);
            /**
             * Indicates wether hidden applications should included in queries.
             */
            get showHidden(): boolean;
            set showHidden(val: boolean);
            /**
             * Full list of available applications.
             */
            get list(): Application[];
            /**
             * The minimum score the application has to meet in order to be included in queries.
             */
            get min_score(): number;
            set min_score(val: number);
            /**
             * The minimum score the application has to meet in order to be included in queries.
             */
            get minScore(): number;
            set minScore(val: number);
            /**
             * Extra multiplier to apply when matching the `name` of an application. Defaults to `2`
             */
            get name_multiplier(): number;
            set name_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the `name` of an application. Defaults to `2`
             */
            get nameMultiplier(): number;
            set nameMultiplier(val: number);
            /**
             * Extra multiplier to apply when matching the entry of an application. Defaults to `0`
             */
            get entry_multiplier(): number;
            set entry_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the entry of an application. Defaults to `0`
             */
            get entryMultiplier(): number;
            set entryMultiplier(val: number);
            /**
             * Extra multiplier to apply when matching the executable of an application. Defaults to `0.5`
             */
            get executable_multiplier(): number;
            set executable_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the executable of an application. Defaults to `0.5`
             */
            get executableMultiplier(): number;
            set executableMultiplier(val: number);
            /**
             * Extra multiplier to apply when matching the description of an application. Defaults to `0`
             */
            get description_multiplier(): number;
            set description_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the description of an application. Defaults to `0`
             */
            get descriptionMultiplier(): number;
            set descriptionMultiplier(val: number);
            /**
             * Extra multiplier to apply when matching the keywords of an application. Defaults to `0.5`
             */
            get keywords_multiplier(): number;
            set keywords_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the keywords of an application. Defaults to `0.5`
             */
            get keywordsMultiplier(): number;
            set keywordsMultiplier(val: number);
            /**
             * Extra multiplier to apply when matching the categories of an application. Defaults to `0`
             */
            get categories_multiplier(): number;
            set categories_multiplier(val: number);
            /**
             * Extra multiplier to apply when matching the categories of an application. Defaults to `0`
             */
            get categoriesMultiplier(): number;
            set categoriesMultiplier(val: number);

            // Constructors

            constructor(properties?: Partial<Apps.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Apps;

            // Methods

            /**
             * Calculate a score for an application using fuzzy matching algorithm. Taking this Apps' include settings into consideration .
             * @param search
             * @param a
             */
            fuzzy_score(search: string, a: Application): number;
            /**
             * Calculate a score for an application using exact string algorithm. Taking this Apps' include settings into consideration .
             * @param search
             * @param a
             */
            exact_score(search: string, a: Application): number;
            /**
             * Query the `list` of applications with a fuzzy matching algorithm.
             * @param search
             */
            fuzzy_query(search?: string | null): Application[];
            /**
             * Query the `list` of applications with a simple string matching algorithm.
             * @param search
             */
            exact_query(search?: string | null): Application[];
            /**
             * Reload the `list` of Applications.
             */
            reload(): void;
            get_show_hidden(): boolean;
            set_show_hidden(value: boolean): void;
            get_list(): Application[];
            get_min_score(): number;
            set_min_score(value: number): void;
            get_name_multiplier(): number;
            set_name_multiplier(value: number): void;
            get_entry_multiplier(): number;
            set_entry_multiplier(value: number): void;
            get_executable_multiplier(): number;
            set_executable_multiplier(value: number): void;
            get_description_multiplier(): number;
            set_description_multiplier(value: number): void;
            get_keywords_multiplier(): number;
            set_keywords_multiplier(value: number): void;
            get_categories_multiplier(): number;
            set_categories_multiplier(value: number): void;
        }

        type ApplicationClass = typeof Application;
        abstract class ApplicationPrivate {
            static $gtype: GObject.GType<ApplicationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type AppsClass = typeof Apps;
        abstract class AppsPrivate {
            static $gtype: GObject.GType<AppsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Score {
            static $gtype: GObject.GType<Score>;

            // Fields

            name: number;
            entry: number;
            executable: number;
            description: number;
            keywords: number;
            categories: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: number;
                    entry: number;
                    executable: number;
                    description: number;
                    keywords: number;
                    categories: number;
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

    export default AstalApps;
}

declare module 'gi://AstalApps' {
    import AstalApps01 from 'gi://AstalApps?version=0.1';
    export default AstalApps01;
}
// END
