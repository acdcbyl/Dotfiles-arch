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

declare module 'gi://Pamac?version=11' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Pamac {
        /**
         * Pamac-11
         */

        function get_version(): string;
        module Package {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                name: string;
                id: string;
                app_name: string;
                appName: string;
                app_id: string;
                appId: string;
                version: string;
                installed_version: string;
                installedVersion: string;
                desc: string;
                long_desc: string;
                longDesc: string;
                repo: string;
                launchable: string;
                license: string;
                url: string;
                icon: string;
                installed_size: number;
                installedSize: number;
                download_size: number;
                downloadSize: number;
                install_date: GLib.DateTime;
                installDate: GLib.DateTime;
                screenshots: string[];
            }
        }

        abstract class Package extends GObject.Object {
            static $gtype: GObject.GType<Package>;

            // Properties

            get name(): string;
            set name(val: string);
            get id(): string;
            set id(val: string);
            get app_name(): string;
            get appName(): string;
            get app_id(): string;
            get appId(): string;
            get version(): string;
            set version(val: string);
            get installed_version(): string;
            set installed_version(val: string);
            get installedVersion(): string;
            set installedVersion(val: string);
            get desc(): string;
            set desc(val: string);
            get long_desc(): string;
            get longDesc(): string;
            get repo(): string;
            set repo(val: string);
            get launchable(): string;
            get license(): string;
            get url(): string;
            get icon(): string;
            get installed_size(): number;
            get installedSize(): number;
            get download_size(): number;
            get downloadSize(): number;
            get install_date(): GLib.DateTime;
            get installDate(): GLib.DateTime;
            get screenshots(): string[];

            // Constructors

            constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_get_name(): string;
            vfunc_set_name(value: string): void;
            vfunc_get_id(): string;
            vfunc_set_id(value: string): void;
            vfunc_get_app_name(): string | null;
            vfunc_get_app_id(): string | null;
            vfunc_get_version(): string;
            vfunc_set_version(value: string): void;
            vfunc_get_installed_version(): string | null;
            vfunc_set_installed_version(value?: string | null): void;
            vfunc_get_desc(): string | null;
            vfunc_set_desc(value?: string | null): void;
            vfunc_get_long_desc(): string | null;
            vfunc_get_repo(): string | null;
            vfunc_set_repo(value?: string | null): void;
            vfunc_get_launchable(): string | null;
            vfunc_get_license(): string | null;
            vfunc_get_url(): string | null;
            vfunc_get_icon(): string | null;
            vfunc_get_installed_size(): number;
            vfunc_get_download_size(): number;
            vfunc_get_install_date(): GLib.DateTime | null;
            vfunc_get_screenshots(): string[];

            // Methods

            get_name(): string;
            set_name(value: string): void;
            get_id(): string;
            set_id(value: string): void;
            get_app_name(): string | null;
            get_app_id(): string | null;
            get_version(): string;
            set_version(value: string): void;
            get_installed_version(): string | null;
            set_installed_version(value?: string | null): void;
            get_desc(): string | null;
            set_desc(value?: string | null): void;
            get_long_desc(): string | null;
            get_repo(): string | null;
            set_repo(value?: string | null): void;
            get_launchable(): string | null;
            get_license(): string | null;
            get_url(): string | null;
            get_icon(): string | null;
            get_installed_size(): number;
            get_download_size(): number;
            get_install_date(): GLib.DateTime | null;
            get_screenshots(): string[];
        }

        module AlpmPackage {
            // Constructor properties interface

            interface ConstructorProps extends Package.ConstructorProps {
                build_date: GLib.DateTime;
                buildDate: GLib.DateTime;
                packager: string;
                reason: string;
                validations: string[];
                groups: string[];
                depends: string[];
                optdepends: string[];
                makedepends: string[];
                checkdepends: string[];
                requiredby: string[];
                optionalfor: string[];
                provides: string[];
                replaces: string[];
                conflicts: string[];
                backups: string[];
            }
        }

        abstract class AlpmPackage extends Package {
            static $gtype: GObject.GType<AlpmPackage>;

            // Properties

            get build_date(): GLib.DateTime;
            get buildDate(): GLib.DateTime;
            get packager(): string;
            get reason(): string;
            get validations(): string[];
            get groups(): string[];
            get depends(): string[];
            set depends(val: string[]);
            get optdepends(): string[];
            get makedepends(): string[];
            get checkdepends(): string[];
            get requiredby(): string[];
            get optionalfor(): string[];
            get provides(): string[];
            set provides(val: string[]);
            get replaces(): string[];
            set replaces(val: string[]);
            get conflicts(): string[];
            set conflicts(val: string[]);
            get backups(): string[];

            // Constructors

            constructor(properties?: Partial<AlpmPackage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_get_files(): string[];
            vfunc_get_files_async(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_get_files_finish(_res_: Gio.AsyncResult): string[];
            vfunc_get_build_date(): GLib.DateTime | null;
            vfunc_get_packager(): string | null;
            vfunc_get_reason(): string | null;
            vfunc_get_validations(): string[];
            vfunc_get_groups(): string[];
            vfunc_get_depends(): string[];
            vfunc_set_depends(value: string[]): void;
            vfunc_get_optdepends(): string[];
            vfunc_get_makedepends(): string[];
            vfunc_get_checkdepends(): string[];
            vfunc_get_requiredby(): string[];
            vfunc_get_optionalfor(): string[];
            vfunc_get_provides(): string[];
            vfunc_set_provides(value: string[]): void;
            vfunc_get_replaces(): string[];
            vfunc_set_replaces(value: string[]): void;
            vfunc_get_conflicts(): string[];
            vfunc_set_conflicts(value: string[]): void;
            vfunc_get_backups(): string[];

            // Methods

            get_files(): string[];
            get_files_async(): Promise<string[]>;
            get_files_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_files_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<string[]> | void;
            get_files_finish(_res_: Gio.AsyncResult): string[];
            get_build_date(): GLib.DateTime | null;
            get_packager(): string | null;
            get_reason(): string | null;
            get_validations(): string[];
            get_groups(): string[];
            get_depends(): string[];
            set_depends(value: string[]): void;
            get_optdepends(): string[];
            get_makedepends(): string[];
            get_checkdepends(): string[];
            get_requiredby(): string[];
            get_optionalfor(): string[];
            get_provides(): string[];
            set_provides(value: string[]): void;
            get_replaces(): string[];
            set_replaces(value: string[]): void;
            get_conflicts(): string[];
            set_conflicts(value: string[]): void;
            get_backups(): string[];
        }

        module AURPackage {
            // Constructor properties interface

            interface ConstructorProps extends AlpmPackage.ConstructorProps {
                packagebase: string;
                maintainer: string;
                popularity: number;
                lastmodified: GLib.DateTime;
                outofdate: GLib.DateTime;
                firstsubmitted: GLib.DateTime;
                numvotes: number;
            }
        }

        abstract class AURPackage extends AlpmPackage {
            static $gtype: GObject.GType<AURPackage>;

            // Properties

            get packagebase(): string;
            set packagebase(val: string);
            get maintainer(): string;
            get popularity(): number;
            get lastmodified(): GLib.DateTime;
            get outofdate(): GLib.DateTime;
            get firstsubmitted(): GLib.DateTime;
            get numvotes(): number;

            // Constructors

            constructor(properties?: Partial<AURPackage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_get_packagebase(): string | null;
            vfunc_set_packagebase(value?: string | null): void;
            vfunc_get_maintainer(): string | null;
            vfunc_get_popularity(): number;
            vfunc_get_lastmodified(): GLib.DateTime | null;
            vfunc_get_outofdate(): GLib.DateTime | null;
            vfunc_get_firstsubmitted(): GLib.DateTime | null;
            vfunc_get_numvotes(): number;

            // Methods

            get_packagebase(): string | null;
            set_packagebase(value?: string | null): void;
            get_maintainer(): string | null;
            get_popularity(): number;
            get_lastmodified(): GLib.DateTime | null;
            get_outofdate(): GLib.DateTime | null;
            get_firstsubmitted(): GLib.DateTime | null;
            get_numvotes(): number;
        }

        module TransactionSummary {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                to_install: Package[];
                toInstall: Package[];
                to_upgrade: Package[];
                toUpgrade: Package[];
                to_downgrade: Package[];
                toDowngrade: Package[];
                to_reinstall: Package[];
                toReinstall: Package[];
                to_remove: Package[];
                toRemove: Package[];
                conflicts_to_remove: Package[];
                conflictsToRemove: Package[];
                to_build: Package[];
                toBuild: Package[];
                aur_pkgbases_to_build: string[];
                aurPkgbasesToBuild: string[];
                to_load: string[];
                toLoad: string[];
            }
        }

        class TransactionSummary extends GObject.Object {
            static $gtype: GObject.GType<TransactionSummary>;

            // Properties

            get to_install(): Package[];
            set to_install(val: Package[]);
            get toInstall(): Package[];
            set toInstall(val: Package[]);
            get to_upgrade(): Package[];
            set to_upgrade(val: Package[]);
            get toUpgrade(): Package[];
            set toUpgrade(val: Package[]);
            get to_downgrade(): Package[];
            set to_downgrade(val: Package[]);
            get toDowngrade(): Package[];
            set toDowngrade(val: Package[]);
            get to_reinstall(): Package[];
            set to_reinstall(val: Package[]);
            get toReinstall(): Package[];
            set toReinstall(val: Package[]);
            get to_remove(): Package[];
            set to_remove(val: Package[]);
            get toRemove(): Package[];
            set toRemove(val: Package[]);
            get conflicts_to_remove(): Package[];
            set conflicts_to_remove(val: Package[]);
            get conflictsToRemove(): Package[];
            set conflictsToRemove(val: Package[]);
            get to_build(): Package[];
            set to_build(val: Package[]);
            get toBuild(): Package[];
            set toBuild(val: Package[]);
            get aur_pkgbases_to_build(): string[];
            set aur_pkgbases_to_build(val: string[]);
            get aurPkgbasesToBuild(): string[];
            set aurPkgbasesToBuild(val: string[]);
            get to_load(): string[];
            set to_load(val: string[]);
            get toLoad(): string[];
            set toLoad(val: string[]);

            // Constructors

            constructor(properties?: Partial<TransactionSummary.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_to_install(): Package[];
            get_to_upgrade(): Package[];
            get_to_downgrade(): Package[];
            get_to_reinstall(): Package[];
            get_to_remove(): Package[];
            get_conflicts_to_remove(): Package[];
            get_to_build(): Package[];
        }

        module Updates {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                repos_updates: AlpmPackage[];
                reposUpdates: AlpmPackage[];
                ignored_repos_updates: AlpmPackage[];
                ignoredReposUpdates: AlpmPackage[];
                aur_updates: AURPackage[];
                aurUpdates: AURPackage[];
                ignored_aur_updates: AURPackage[];
                ignoredAurUpdates: AURPackage[];
                outofdate: AURPackage[];
                flatpak_updates: FlatpakPackage[];
                flatpakUpdates: FlatpakPackage[];
            }
        }

        class Updates extends GObject.Object {
            static $gtype: GObject.GType<Updates>;

            // Properties

            get repos_updates(): AlpmPackage[];
            set repos_updates(val: AlpmPackage[]);
            get reposUpdates(): AlpmPackage[];
            set reposUpdates(val: AlpmPackage[]);
            get ignored_repos_updates(): AlpmPackage[];
            set ignored_repos_updates(val: AlpmPackage[]);
            get ignoredReposUpdates(): AlpmPackage[];
            set ignoredReposUpdates(val: AlpmPackage[]);
            get aur_updates(): AURPackage[];
            set aur_updates(val: AURPackage[]);
            get aurUpdates(): AURPackage[];
            set aurUpdates(val: AURPackage[]);
            get ignored_aur_updates(): AURPackage[];
            set ignored_aur_updates(val: AURPackage[]);
            get ignoredAurUpdates(): AURPackage[];
            set ignoredAurUpdates(val: AURPackage[]);
            get outofdate(): AURPackage[];
            set outofdate(val: AURPackage[]);
            get flatpak_updates(): FlatpakPackage[];
            set flatpak_updates(val: FlatpakPackage[]);
            get flatpakUpdates(): FlatpakPackage[];
            set flatpakUpdates(val: FlatpakPackage[]);

            // Constructors

            constructor(properties?: Partial<Updates.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_repos_updates(): AlpmPackage[];
            get_ignored_repos_updates(): AlpmPackage[];
            get_aur_updates(): AURPackage[];
            get_ignored_aur_updates(): AURPackage[];
            get_outofdate(): AURPackage[];
            get_flatpak_updates(): FlatpakPackage[];
        }

        module Config {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                conf_path: string;
                confPath: string;
                recurse: boolean;
                keep_built_pkgs: boolean;
                keepBuiltPkgs: boolean;
                enable_downgrade: boolean;
                enableDowngrade: boolean;
                simple_install: boolean;
                simpleInstall: boolean;
                refresh_period: number;
                refreshPeriod: number;
                no_update_hide_icon: boolean;
                noUpdateHideIcon: boolean;
                support_aur: boolean;
                supportAur: boolean;
                enable_aur: boolean;
                enableAur: boolean;
                support_appstream: boolean;
                supportAppstream: boolean;
                enable_appstream: boolean;
                enableAppstream: boolean;
                support_snap: boolean;
                supportSnap: boolean;
                enable_snap: boolean;
                enableSnap: boolean;
                support_flatpak: boolean;
                supportFlatpak: boolean;
                enable_flatpak: boolean;
                enableFlatpak: boolean;
                check_flatpak_updates: boolean;
                checkFlatpakUpdates: boolean;
                aur_build_dir: string;
                aurBuildDir: string;
                check_aur_updates: boolean;
                checkAurUpdates: boolean;
                check_aur_vcs_updates: boolean;
                checkAurVcsUpdates: boolean;
                download_updates: boolean;
                downloadUpdates: boolean;
                offline_upgrade: boolean;
                offlineUpgrade: boolean;
                max_parallel_downloads: number;
                maxParallelDownloads: number;
                clean_keep_num_pkgs: number;
                cleanKeepNumPkgs: number;
                clean_rm_only_uninstalled: boolean;
                cleanRmOnlyUninstalled: boolean;
                environment_variables: GLib.HashTable<string, string>;
                environmentVariables: GLib.HashTable<string, string>;
                db_path: string;
                dbPath: string;
                checkspace: boolean;
                ignorepkgs: never;
            }
        }

        class Config extends GObject.Object {
            static $gtype: GObject.GType<Config>;

            // Properties

            get conf_path(): string;
            get confPath(): string;
            get recurse(): boolean;
            set recurse(val: boolean);
            get keep_built_pkgs(): boolean;
            set keep_built_pkgs(val: boolean);
            get keepBuiltPkgs(): boolean;
            set keepBuiltPkgs(val: boolean);
            get enable_downgrade(): boolean;
            set enable_downgrade(val: boolean);
            get enableDowngrade(): boolean;
            set enableDowngrade(val: boolean);
            get simple_install(): boolean;
            set simple_install(val: boolean);
            get simpleInstall(): boolean;
            set simpleInstall(val: boolean);
            get refresh_period(): number;
            set refresh_period(val: number);
            get refreshPeriod(): number;
            set refreshPeriod(val: number);
            get no_update_hide_icon(): boolean;
            set no_update_hide_icon(val: boolean);
            get noUpdateHideIcon(): boolean;
            set noUpdateHideIcon(val: boolean);
            get support_aur(): boolean;
            set support_aur(val: boolean);
            get supportAur(): boolean;
            set supportAur(val: boolean);
            get enable_aur(): boolean;
            set enable_aur(val: boolean);
            get enableAur(): boolean;
            set enableAur(val: boolean);
            get support_appstream(): boolean;
            set support_appstream(val: boolean);
            get supportAppstream(): boolean;
            set supportAppstream(val: boolean);
            get enable_appstream(): boolean;
            set enable_appstream(val: boolean);
            get enableAppstream(): boolean;
            set enableAppstream(val: boolean);
            get support_snap(): boolean;
            set support_snap(val: boolean);
            get supportSnap(): boolean;
            set supportSnap(val: boolean);
            get enable_snap(): boolean;
            set enable_snap(val: boolean);
            get enableSnap(): boolean;
            set enableSnap(val: boolean);
            get support_flatpak(): boolean;
            set support_flatpak(val: boolean);
            get supportFlatpak(): boolean;
            set supportFlatpak(val: boolean);
            get enable_flatpak(): boolean;
            set enable_flatpak(val: boolean);
            get enableFlatpak(): boolean;
            set enableFlatpak(val: boolean);
            get check_flatpak_updates(): boolean;
            set check_flatpak_updates(val: boolean);
            get checkFlatpakUpdates(): boolean;
            set checkFlatpakUpdates(val: boolean);
            get aur_build_dir(): string;
            set aur_build_dir(val: string);
            get aurBuildDir(): string;
            set aurBuildDir(val: string);
            get check_aur_updates(): boolean;
            set check_aur_updates(val: boolean);
            get checkAurUpdates(): boolean;
            set checkAurUpdates(val: boolean);
            get check_aur_vcs_updates(): boolean;
            set check_aur_vcs_updates(val: boolean);
            get checkAurVcsUpdates(): boolean;
            set checkAurVcsUpdates(val: boolean);
            get download_updates(): boolean;
            set download_updates(val: boolean);
            get downloadUpdates(): boolean;
            set downloadUpdates(val: boolean);
            get offline_upgrade(): boolean;
            set offline_upgrade(val: boolean);
            get offlineUpgrade(): boolean;
            set offlineUpgrade(val: boolean);
            get max_parallel_downloads(): number;
            set max_parallel_downloads(val: number);
            get maxParallelDownloads(): number;
            set maxParallelDownloads(val: number);
            get clean_keep_num_pkgs(): number;
            set clean_keep_num_pkgs(val: number);
            get cleanKeepNumPkgs(): number;
            set cleanKeepNumPkgs(val: number);
            get clean_rm_only_uninstalled(): boolean;
            set clean_rm_only_uninstalled(val: boolean);
            get cleanRmOnlyUninstalled(): boolean;
            set cleanRmOnlyUninstalled(val: boolean);
            get environment_variables(): GLib.HashTable<string, string>;
            get environmentVariables(): GLib.HashTable<string, string>;
            get db_path(): string;
            get dbPath(): string;
            get checkspace(): boolean;
            set checkspace(val: boolean);
            get ignorepkgs(): never;

            // Constructors

            constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](conf_path: string): Config;

            // Methods

            add_ignorepkg(name: string): void;
            remove_ignorepkg(name: string): void;
            reload(): void;
            save(): void;
            get_conf_path(): string;
            get_recurse(): boolean;
            set_recurse(value: boolean): void;
            get_keep_built_pkgs(): boolean;
            set_keep_built_pkgs(value: boolean): void;
            get_enable_downgrade(): boolean;
            set_enable_downgrade(value: boolean): void;
            get_simple_install(): boolean;
            set_simple_install(value: boolean): void;
            get_refresh_period(): number;
            set_refresh_period(value: number): void;
            get_no_update_hide_icon(): boolean;
            set_no_update_hide_icon(value: boolean): void;
            get_support_aur(): boolean;
            get_enable_aur(): boolean;
            set_enable_aur(value: boolean): void;
            get_support_appstream(): boolean;
            get_enable_appstream(): boolean;
            set_enable_appstream(value: boolean): void;
            get_support_snap(): boolean;
            get_enable_snap(): boolean;
            set_enable_snap(value: boolean): void;
            get_support_flatpak(): boolean;
            set_support_flatpak(value: boolean): void;
            get_enable_flatpak(): boolean;
            set_enable_flatpak(value: boolean): void;
            get_check_flatpak_updates(): boolean;
            set_check_flatpak_updates(value: boolean): void;
            get_aur_build_dir(): string;
            set_aur_build_dir(value: string): void;
            get_check_aur_updates(): boolean;
            set_check_aur_updates(value: boolean): void;
            get_check_aur_vcs_updates(): boolean;
            set_check_aur_vcs_updates(value: boolean): void;
            get_download_updates(): boolean;
            set_download_updates(value: boolean): void;
            get_offline_upgrade(): boolean;
            set_offline_upgrade(value: boolean): void;
            get_max_parallel_downloads(): number;
            set_max_parallel_downloads(value: number): void;
            get_clean_keep_num_pkgs(): number;
            set_clean_keep_num_pkgs(value: number): void;
            get_clean_rm_only_uninstalled(): boolean;
            set_clean_rm_only_uninstalled(value: boolean): void;
            get_environment_variables(): GLib.HashTable<string, string>;
            get_db_path(): string;
            get_checkspace(): boolean;
            set_checkspace(value: boolean): void;
            get_ignorepkgs(): never;
        }

        module Database {
            // Signal callback interfaces

            interface GetUpdatesProgress {
                (percent: number): void;
            }

            interface EmitWarning {
                (message: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                config: Config;
            }
        }

        class Database extends GObject.Object {
            static $gtype: GObject.GType<Database>;

            // Properties

            get config(): Config;
            set config(val: Config);

            // Fields

            vercmp: GLib.CompareFunc;

            // Constructors

            constructor(properties?: Partial<Database.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](config: Config): Database;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'get-updates-progress', callback: (_source: this, percent: number) => void): number;
            connect_after(signal: 'get-updates-progress', callback: (_source: this, percent: number) => void): number;
            emit(signal: 'get-updates-progress', percent: number): void;
            connect(signal: 'emit-warning', callback: (_source: this, message: string) => void): number;
            connect_after(signal: 'emit-warning', callback: (_source: this, message: string) => void): number;
            emit(signal: 'emit-warning', message: string): void;

            // Methods

            refresh(): void;
            get_mirrors_countries_async(): Promise<string[]>;
            get_mirrors_countries_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_mirrors_countries_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<string[]> | void;
            get_mirrors_countries_finish(_res_: Gio.AsyncResult): string[];
            get_mirrors_choosen_country_async(): Promise<string>;
            get_mirrors_choosen_country_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_mirrors_choosen_country_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<string> | void;
            get_mirrors_choosen_country_finish(_res_: Gio.AsyncResult): string;
            get_alpm_dep_name(dep_string: string): string;
            get_clean_cache_details(): GLib.HashTable<string, number>;
            get_clean_cache_details_async(): Promise<GLib.HashTable<string, number>>;
            get_clean_cache_details_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_clean_cache_details_async(
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<GLib.HashTable<string, number>> | void;
            get_clean_cache_details_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, number>;
            get_build_files_details(): GLib.HashTable<string, number>;
            get_build_files_details_async(): Promise<GLib.HashTable<string, number>>;
            get_build_files_details_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_build_files_details_async(
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<GLib.HashTable<string, number>> | void;
            get_build_files_details_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, number>;
            is_installed_pkg(pkgname: string): boolean;
            get_installed_pkg(pkgname: string): AlpmPackage | null;
            has_installed_satisfier(depstring: string): boolean;
            get_installed_satisfier(depstring: string): AlpmPackage | null;
            get_installed_pkgs_by_glob(glob: string): AlpmPackage[];
            should_hold(pkgname: string): boolean;
            get_installed_pkgs(): AlpmPackage[];
            get_installed_pkgs_async(): Promise<AlpmPackage[]>;
            get_installed_pkgs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_installed_pkgs_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<AlpmPackage[]> | void;
            get_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_installed_apps_async(): Promise<AlpmPackage[]>;
            get_installed_apps_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_installed_apps_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<AlpmPackage[]> | void;
            get_installed_apps_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_explicitly_installed_pkgs(): AlpmPackage[];
            get_explicitly_installed_pkgs_async(): Promise<AlpmPackage[]>;
            get_explicitly_installed_pkgs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_explicitly_installed_pkgs_async(
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            get_explicitly_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_foreign_pkgs(): AlpmPackage[];
            get_foreign_pkgs_async(): Promise<AlpmPackage[]>;
            get_foreign_pkgs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_foreign_pkgs_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<AlpmPackage[]> | void;
            get_foreign_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_orphans(): AlpmPackage[];
            get_orphans_async(): Promise<AlpmPackage[]>;
            get_orphans_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_orphans_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<AlpmPackage[]> | void;
            get_orphans_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            is_sync_pkg(pkgname: string): boolean;
            get_sync_pkg(pkgname: string): AlpmPackage | null;
            has_sync_satisfier(depstring: string): boolean;
            get_sync_satisfier(depstring: string): AlpmPackage | null;
            get_sync_pkgs_by_glob(glob: string): AlpmPackage[];
            get_app_by_id(app_id: string): Package | null;
            get_url_stream(url: string): Promise<Gio.InputStream>;
            get_url_stream(url: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_url_stream(
                url: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.InputStream> | void;
            get_url_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;
            search_installed_pkgs(search_string: string): AlpmPackage[];
            search_installed_pkgs_async(search_string: string): Promise<AlpmPackage[]>;
            search_installed_pkgs_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_installed_pkgs_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            search_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            search_repos_pkgs(search_string: string): AlpmPackage[];
            search_repos_pkgs_async(search_string: string): Promise<AlpmPackage[]>;
            search_repos_pkgs_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_repos_pkgs_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            search_repos_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            search_uninstalled_apps(search_terms: string[]): AlpmPackage[];
            search_pkgs(search_string: string): AlpmPackage[];
            search_pkgs_async(search_string: string): Promise<AlpmPackage[]>;
            search_pkgs_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_pkgs_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            search_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            search_aur_pkgs(search_string: string): AURPackage[];
            search_aur_pkgs_async(search_string: string): Promise<AURPackage[]>;
            search_aur_pkgs_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_aur_pkgs_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AURPackage[]> | void;
            search_aur_pkgs_finish(_res_: Gio.AsyncResult): AURPackage[];
            search_files(files: string[]): GLib.HashTable;
            get_categories_names(): string[];
            get_category_pkgs_async(category: string): Promise<AlpmPackage[]>;
            get_category_pkgs_async(category: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_category_pkgs_async(
                category: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            get_category_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_repos_names(): string[];
            get_repo_pkgs(repo: string): AlpmPackage[];
            get_repo_pkgs_async(repo: string): Promise<AlpmPackage[]>;
            get_repo_pkgs_async(repo: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_repo_pkgs_async(
                repo: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            get_repo_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_groups_names(): string[];
            get_group_pkgs(group_name: string): AlpmPackage[];
            get_group_pkgs_async(group_name: string): Promise<AlpmPackage[]>;
            get_group_pkgs_async(group_name: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_group_pkgs_async(
                group_name: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AlpmPackage[]> | void;
            get_group_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];
            get_pkg(pkgname: string): AlpmPackage | null;
            clone_build_files(
                pkgname: string,
                overwrite_files: boolean,
                cancellable?: Gio.Cancellable | null,
            ): Gio.File | null;
            clone_build_files_async(
                pkgname: string,
                overwrite_files: boolean,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File | null>;
            clone_build_files_async(
                pkgname: string,
                overwrite_files: boolean,
                cancellable: Gio.Cancellable | null,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            clone_build_files_async(
                pkgname: string,
                overwrite_files: boolean,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File | null> | void;
            clone_build_files_finish(_res_: Gio.AsyncResult): Gio.File | null;
            regenerate_srcinfo(pkgname: string, cancellable?: Gio.Cancellable | null): boolean;
            regenerate_srcinfo_async(pkgname: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            regenerate_srcinfo_async(
                pkgname: string,
                cancellable: Gio.Cancellable | null,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            regenerate_srcinfo_async(
                pkgname: string,
                cancellable?: Gio.Cancellable | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            regenerate_srcinfo_finish(_res_: Gio.AsyncResult): boolean;
            get_aur_pkg(pkgname: string): AURPackage | null;
            get_aur_pkg_async(pkgname: string): Promise<AURPackage | null>;
            get_aur_pkg_async(pkgname: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_aur_pkg_async(
                pkgname: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<AURPackage | null> | void;
            get_aur_pkg_finish(_res_: Gio.AsyncResult): AURPackage | null;
            get_aur_pkgs(pkgnames: string[]): GLib.HashTable<string, AURPackage>;
            get_aur_pkgs_async(pkgnames: string[]): Promise<GLib.HashTable<string, AURPackage>>;
            get_aur_pkgs_async(pkgnames: string[], _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_aur_pkgs_async(
                pkgnames: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<GLib.HashTable<string, AURPackage>> | void;
            get_aur_pkgs_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, AURPackage>;
            refresh_tmp_files_dbs_async(): Promise<void>;
            refresh_tmp_files_dbs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            refresh_tmp_files_dbs_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            refresh_tmp_files_dbs_finish(_res_: Gio.AsyncResult): void;
            refresh_tmp_files_dbs(): void;
            get_last_refresh_time(): GLib.DateTime | null;
            need_refresh(): boolean;
            get_updates(): Updates;
            get_updates_async(): Promise<Updates>;
            get_updates_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_updates_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<Updates> | void;
            get_updates_finish(_res_: Gio.AsyncResult): Updates;
            search_snaps_async(search_string: string): Promise<SnapPackage[]>;
            search_snaps_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_snaps_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<SnapPackage[]> | void;
            search_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];
            is_installed_snap(name: string): boolean;
            get_snap_async(name: string): Promise<SnapPackage | null>;
            get_snap_async(name: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_snap_async(
                name: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<SnapPackage | null> | void;
            get_snap_finish(_res_: Gio.AsyncResult): SnapPackage | null;
            get_installed_snaps_async(): Promise<SnapPackage[]>;
            get_installed_snaps_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_installed_snaps_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<SnapPackage[]> | void;
            get_installed_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];
            get_installed_snap_icon_async(name: string): Promise<string>;
            get_installed_snap_icon_async(name: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_installed_snap_icon_async(
                name: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            get_installed_snap_icon_finish(_res_: Gio.AsyncResult): string;
            get_category_snaps_async(category: string): Promise<SnapPackage[]>;
            get_category_snaps_async(category: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_category_snaps_async(
                category: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<SnapPackage[]> | void;
            get_category_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];
            refresh_flatpak_appstream_data(): void;
            refresh_flatpak_appstream_data_async(): Promise<void>;
            refresh_flatpak_appstream_data_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            refresh_flatpak_appstream_data_async(
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            refresh_flatpak_appstream_data_finish(_res_: Gio.AsyncResult): void;
            get_flatpak_remotes_names(): string[];
            get_installed_flatpaks_async(): Promise<FlatpakPackage[]>;
            get_installed_flatpaks_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_installed_flatpaks_async(
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<FlatpakPackage[]> | void;
            get_installed_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];
            search_flatpaks_async(search_string: string): Promise<FlatpakPackage[]>;
            search_flatpaks_async(search_string: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            search_flatpaks_async(
                search_string: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<FlatpakPackage[]> | void;
            search_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];
            is_installed_flatpak(name: string): boolean;
            get_flatpak_async(id: string): Promise<FlatpakPackage | null>;
            get_flatpak_async(id: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_flatpak_async(
                id: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<FlatpakPackage | null> | void;
            get_flatpak_finish(_res_: Gio.AsyncResult): FlatpakPackage | null;
            get_category_flatpaks_async(category: string): Promise<FlatpakPackage[]>;
            get_category_flatpaks_async(category: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_category_flatpaks_async(
                category: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<FlatpakPackage[]> | void;
            get_category_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];
            get_config(): Config;
            set_config(value: Config): void;
        }

        module Transaction {
            // Signal callback interfaces

            interface EmitAction {
                (action: string): void;
            }

            interface EmitActionProgress {
                (action: string, status: string, progress: number): void;
            }

            interface EmitDownloadProgress {
                (action: string, status: string, progress: number): void;
            }

            interface EmitHookProgress {
                (action: string, details: string, status: string, progress: number): void;
            }

            interface EmitScriptOutput {
                (message: string): void;
            }

            interface EmitWarning {
                (message: string): void;
            }

            interface EmitError {
                (message: string, details: string[]): void;
            }

            interface StartWaiting {
                (): void;
            }

            interface StopWaiting {
                (): void;
            }

            interface StartPreparing {
                (): void;
            }

            interface StopPreparing {
                (): void;
            }

            interface StartDownloading {
                (): void;
            }

            interface StopDownloading {
                (): void;
            }

            interface StartBuilding {
                (): void;
            }

            interface StopBuilding {
                (): void;
            }

            interface ImportantDetailsOutpout {
                (must_show: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                database: Database;
                download_only: boolean;
                downloadOnly: boolean;
                dry_run: boolean;
                dryRun: boolean;
                install_if_needed: boolean;
                installIfNeeded: boolean;
                remove_if_unneeded: boolean;
                removeIfUnneeded: boolean;
                cascade: boolean;
                keep_config_files: boolean;
                keepConfigFiles: boolean;
                install_as_dep: boolean;
                installAsDep: boolean;
                install_as_explicit: boolean;
                installAsExplicit: boolean;
                no_refresh: boolean;
                noRefresh: boolean;
            }
        }

        class Transaction extends GObject.Object {
            static $gtype: GObject.GType<Transaction>;

            // Properties

            get database(): Database;
            set database(val: Database);
            get download_only(): boolean;
            set download_only(val: boolean);
            get downloadOnly(): boolean;
            set downloadOnly(val: boolean);
            get dry_run(): boolean;
            set dry_run(val: boolean);
            get dryRun(): boolean;
            set dryRun(val: boolean);
            get install_if_needed(): boolean;
            set install_if_needed(val: boolean);
            get installIfNeeded(): boolean;
            set installIfNeeded(val: boolean);
            get remove_if_unneeded(): boolean;
            set remove_if_unneeded(val: boolean);
            get removeIfUnneeded(): boolean;
            set removeIfUnneeded(val: boolean);
            get cascade(): boolean;
            set cascade(val: boolean);
            get keep_config_files(): boolean;
            set keep_config_files(val: boolean);
            get keepConfigFiles(): boolean;
            set keepConfigFiles(val: boolean);
            get install_as_dep(): boolean;
            set install_as_dep(val: boolean);
            get installAsDep(): boolean;
            set installAsDep(val: boolean);
            get install_as_explicit(): boolean;
            set install_as_explicit(val: boolean);
            get installAsExplicit(): boolean;
            set installAsExplicit(val: boolean);
            get no_refresh(): boolean;
            set no_refresh(val: boolean);
            get noRefresh(): boolean;
            set noRefresh(val: boolean);

            // Constructors

            constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](database: Database): Transaction;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'emit-action', callback: (_source: this, action: string) => void): number;
            connect_after(signal: 'emit-action', callback: (_source: this, action: string) => void): number;
            emit(signal: 'emit-action', action: string): void;
            connect(
                signal: 'emit-action-progress',
                callback: (_source: this, action: string, status: string, progress: number) => void,
            ): number;
            connect_after(
                signal: 'emit-action-progress',
                callback: (_source: this, action: string, status: string, progress: number) => void,
            ): number;
            emit(signal: 'emit-action-progress', action: string, status: string, progress: number): void;
            connect(
                signal: 'emit-download-progress',
                callback: (_source: this, action: string, status: string, progress: number) => void,
            ): number;
            connect_after(
                signal: 'emit-download-progress',
                callback: (_source: this, action: string, status: string, progress: number) => void,
            ): number;
            emit(signal: 'emit-download-progress', action: string, status: string, progress: number): void;
            connect(
                signal: 'emit-hook-progress',
                callback: (_source: this, action: string, details: string, status: string, progress: number) => void,
            ): number;
            connect_after(
                signal: 'emit-hook-progress',
                callback: (_source: this, action: string, details: string, status: string, progress: number) => void,
            ): number;
            emit(signal: 'emit-hook-progress', action: string, details: string, status: string, progress: number): void;
            connect(signal: 'emit-script-output', callback: (_source: this, message: string) => void): number;
            connect_after(signal: 'emit-script-output', callback: (_source: this, message: string) => void): number;
            emit(signal: 'emit-script-output', message: string): void;
            connect(signal: 'emit-warning', callback: (_source: this, message: string) => void): number;
            connect_after(signal: 'emit-warning', callback: (_source: this, message: string) => void): number;
            emit(signal: 'emit-warning', message: string): void;
            connect(
                signal: 'emit-error',
                callback: (_source: this, message: string, details: string[]) => void,
            ): number;
            connect_after(
                signal: 'emit-error',
                callback: (_source: this, message: string, details: string[]) => void,
            ): number;
            emit(signal: 'emit-error', message: string, details: string[]): void;
            connect(signal: 'start-waiting', callback: (_source: this) => void): number;
            connect_after(signal: 'start-waiting', callback: (_source: this) => void): number;
            emit(signal: 'start-waiting'): void;
            connect(signal: 'stop-waiting', callback: (_source: this) => void): number;
            connect_after(signal: 'stop-waiting', callback: (_source: this) => void): number;
            emit(signal: 'stop-waiting'): void;
            connect(signal: 'start-preparing', callback: (_source: this) => void): number;
            connect_after(signal: 'start-preparing', callback: (_source: this) => void): number;
            emit(signal: 'start-preparing'): void;
            connect(signal: 'stop-preparing', callback: (_source: this) => void): number;
            connect_after(signal: 'stop-preparing', callback: (_source: this) => void): number;
            emit(signal: 'stop-preparing'): void;
            connect(signal: 'start-downloading', callback: (_source: this) => void): number;
            connect_after(signal: 'start-downloading', callback: (_source: this) => void): number;
            emit(signal: 'start-downloading'): void;
            connect(signal: 'stop-downloading', callback: (_source: this) => void): number;
            connect_after(signal: 'stop-downloading', callback: (_source: this) => void): number;
            emit(signal: 'stop-downloading'): void;
            connect(signal: 'start-building', callback: (_source: this) => void): number;
            connect_after(signal: 'start-building', callback: (_source: this) => void): number;
            emit(signal: 'start-building'): void;
            connect(signal: 'stop-building', callback: (_source: this) => void): number;
            connect_after(signal: 'stop-building', callback: (_source: this) => void): number;
            emit(signal: 'stop-building'): void;
            connect(signal: 'important-details-outpout', callback: (_source: this, must_show: boolean) => void): number;
            connect_after(
                signal: 'important-details-outpout',
                callback: (_source: this, must_show: boolean) => void,
            ): number;
            emit(signal: 'important-details-outpout', must_show: boolean): void;

            // Virtual methods

            vfunc_ask_commit(summary: TransactionSummary, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_ask_commit_finish(_res_: Gio.AsyncResult): boolean;
            vfunc_ask_edit_build_files(
                summary: TransactionSummary,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_ask_edit_build_files_finish(_res_: Gio.AsyncResult): boolean;
            vfunc_edit_build_files(pkgnames: string[], _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_edit_build_files_finish(_res_: Gio.AsyncResult): void;
            vfunc_ask_import_key(
                pkgname: string,
                key: string,
                owner?: string | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_ask_import_key_finish(_res_: Gio.AsyncResult): boolean;
            vfunc_choose_optdeps(
                pkgname: string,
                optdeps: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_choose_optdeps_finish(_res_: Gio.AsyncResult): string[];
            vfunc_choose_provider(
                depend: string,
                providers: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_choose_provider_finish(_res_: Gio.AsyncResult): number;
            vfunc_ask_snap_install_classic(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
            vfunc_ask_snap_install_classic_finish(_res_: Gio.AsyncResult): boolean;
            vfunc_run_cmd_line_async(
                args: string[],
                working_directory: string | null,
                cancellable: Gio.Cancellable,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            vfunc_run_cmd_line_finish(_res_: Gio.AsyncResult): number;

            // Methods

            quit_daemon(): void;
            ask_commit(summary: TransactionSummary): Promise<boolean>;
            ask_commit(summary: TransactionSummary, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            ask_commit(
                summary: TransactionSummary,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            ask_commit_finish(_res_: Gio.AsyncResult): boolean;
            ask_edit_build_files(summary: TransactionSummary): Promise<boolean>;
            ask_edit_build_files(summary: TransactionSummary, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            ask_edit_build_files(
                summary: TransactionSummary,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            ask_edit_build_files_finish(_res_: Gio.AsyncResult): boolean;
            edit_build_files(pkgnames: string[]): Promise<void>;
            edit_build_files(pkgnames: string[], _callback_: Gio.AsyncReadyCallback<this> | null): void;
            edit_build_files(
                pkgnames: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            edit_build_files_finish(_res_: Gio.AsyncResult): void;
            ask_import_key(pkgname: string, key: string, owner?: string | null): Promise<boolean>;
            ask_import_key(
                pkgname: string,
                key: string,
                owner: string | null,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            ask_import_key(
                pkgname: string,
                key: string,
                owner?: string | null,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            ask_import_key_finish(_res_: Gio.AsyncResult): boolean;
            get_build_files_async(pkgname: string): Promise<string[]>;
            get_build_files_async(pkgname: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_build_files_async(
                pkgname: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[]> | void;
            get_build_files_finish(_res_: Gio.AsyncResult): string[];
            choose_optdeps(pkgname: string, optdeps: string[]): Promise<string[]>;
            choose_optdeps(pkgname: string, optdeps: string[], _callback_: Gio.AsyncReadyCallback<this> | null): void;
            choose_optdeps(
                pkgname: string,
                optdeps: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[]> | void;
            choose_optdeps_finish(_res_: Gio.AsyncResult): string[];
            choose_provider(depend: string, providers: string[]): Promise<number>;
            choose_provider(depend: string, providers: string[], _callback_: Gio.AsyncReadyCallback<this> | null): void;
            choose_provider(
                depend: string,
                providers: string[],
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            choose_provider_finish(_res_: Gio.AsyncResult): number;
            ask_snap_install_classic(name: string): Promise<boolean>;
            ask_snap_install_classic(name: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            ask_snap_install_classic(
                name: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            ask_snap_install_classic_finish(_res_: Gio.AsyncResult): boolean;
            get_authorization_async(): Promise<boolean>;
            get_authorization_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            get_authorization_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
            get_authorization_finish(_res_: Gio.AsyncResult): boolean;
            remove_authorization(): void;
            generate_mirrors_list_async(country: string): Promise<void>;
            generate_mirrors_list_async(country: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            generate_mirrors_list_async(
                country: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<void> | void;
            generate_mirrors_list_finish(_res_: Gio.AsyncResult): void;
            clean_cache_async(): Promise<void>;
            clean_cache_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            clean_cache_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            clean_cache_finish(_res_: Gio.AsyncResult): void;
            clean_build_files_async(): Promise<void>;
            clean_build_files_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            clean_build_files_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            clean_build_files_finish(_res_: Gio.AsyncResult): void;
            set_pkgreason_async(pkgname: string, reason: number): Promise<boolean>;
            set_pkgreason_async(pkgname: string, reason: number, _callback_: Gio.AsyncReadyCallback<this> | null): void;
            set_pkgreason_async(
                pkgname: string,
                reason: number,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            set_pkgreason_finish(_res_: Gio.AsyncResult): boolean;
            download_updates_async(): Promise<boolean>;
            download_updates_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            download_updates_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
            download_updates_finish(_res_: Gio.AsyncResult): boolean;
            run_async(): Promise<boolean>;
            run_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            run_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
            run_finish(_res_: Gio.AsyncResult): boolean;
            check_dbs(): Promise<void>;
            check_dbs(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            check_dbs(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<void> | void;
            check_dbs_finish(_res_: Gio.AsyncResult): void;
            refresh_dbs_async(): Promise<boolean>;
            refresh_dbs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            refresh_dbs_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
            refresh_dbs_finish(_res_: Gio.AsyncResult): boolean;
            refresh_files_dbs_async(): Promise<boolean>;
            refresh_files_dbs_async(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            refresh_files_dbs_async(_callback_?: Gio.AsyncReadyCallback<this> | null): Promise<boolean> | void;
            refresh_files_dbs_finish(_res_: Gio.AsyncResult): boolean;
            add_pkg_to_install(name: string): void;
            add_pkg_to_remove(name: string): void;
            add_path_to_load(path: string): void;
            add_pkg_to_build(name: string, clone_build_files: boolean, clone_deps_build_files: boolean): void;
            add_temporary_ignore_pkg(name: string): void;
            add_overwrite_file(glob: string): void;
            add_pkg_to_mark_as_dep(name: string): void;
            add_pkgs_to_upgrade(force_refresh: boolean): void;
            add_snap_to_install(pkg: SnapPackage): void;
            add_snap_to_remove(pkg: SnapPackage): void;
            snap_switch_channel_async(snap_name: string, channel: string): Promise<boolean>;
            snap_switch_channel_async(
                snap_name: string,
                channel: string,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            snap_switch_channel_async(
                snap_name: string,
                channel: string,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            snap_switch_channel_finish(_res_: Gio.AsyncResult): boolean;
            add_flatpak_to_install(pkg: FlatpakPackage): void;
            add_flatpak_to_remove(pkg: FlatpakPackage): void;
            add_flatpak_to_upgrade(pkg: FlatpakPackage): void;
            run_cmd_line_async(
                args: string[],
                working_directory: string | null,
                cancellable: Gio.Cancellable,
            ): Promise<number>;
            run_cmd_line_async(
                args: string[],
                working_directory: string | null,
                cancellable: Gio.Cancellable,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            run_cmd_line_async(
                args: string[],
                working_directory: string | null,
                cancellable: Gio.Cancellable,
                _callback_?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            run_cmd_line_finish(_res_: Gio.AsyncResult): number;
            cancel(): void;
            get_database(): Database;
            set_database(value: Database): void;
            get_download_only(): boolean;
            set_download_only(value: boolean): void;
            get_dry_run(): boolean;
            set_dry_run(value: boolean): void;
            get_install_if_needed(): boolean;
            set_install_if_needed(value: boolean): void;
            get_remove_if_unneeded(): boolean;
            set_remove_if_unneeded(value: boolean): void;
            get_cascade(): boolean;
            set_cascade(value: boolean): void;
            get_keep_config_files(): boolean;
            set_keep_config_files(value: boolean): void;
            get_install_as_dep(): boolean;
            set_install_as_dep(value: boolean): void;
            get_install_as_explicit(): boolean;
            set_install_as_explicit(value: boolean): void;
            get_no_refresh(): boolean;
            set_no_refresh(value: boolean): void;
        }

        module SnapPackage {
            // Constructor properties interface

            interface ConstructorProps extends Package.ConstructorProps {
                channel: string;
                publisher: string;
                confined: string;
                channels: string[];
            }
        }

        abstract class SnapPackage extends Package {
            static $gtype: GObject.GType<SnapPackage>;

            // Properties

            get channel(): string;
            get publisher(): string;
            get confined(): string;
            get channels(): string[];

            // Constructors

            constructor(properties?: Partial<SnapPackage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_get_channel(): string | null;
            vfunc_get_publisher(): string | null;
            vfunc_get_confined(): string | null;
            vfunc_get_channels(): string[];

            // Methods

            get_channel(): string | null;
            get_publisher(): string | null;
            get_confined(): string | null;
            get_channels(): string[];
        }

        module FlatpakPackage {
            // Constructor properties interface

            interface ConstructorProps extends Package.ConstructorProps {}
        }

        abstract class FlatpakPackage extends Package {
            static $gtype: GObject.GType<FlatpakPackage>;

            // Constructors

            constructor(properties?: Partial<FlatpakPackage.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module UpdatesChecker {
            // Signal callback interfaces

            interface UpdatesAvailable {
                (updates_nb: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                updates_nb: number;
                updatesNb: number;
                updates_list: string[];
                updatesList: string[];
                refresh_period: number;
                refreshPeriod: number;
                no_update_hide_icon: boolean;
                noUpdateHideIcon: boolean;
            }
        }

        class UpdatesChecker extends GObject.Object {
            static $gtype: GObject.GType<UpdatesChecker>;

            // Properties

            get updates_nb(): number;
            get updatesNb(): number;
            get updates_list(): string[];
            get updatesList(): string[];
            get refresh_period(): number;
            get refreshPeriod(): number;
            get no_update_hide_icon(): boolean;
            get noUpdateHideIcon(): boolean;

            // Constructors

            constructor(properties?: Partial<UpdatesChecker.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UpdatesChecker;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'updates-available', callback: (_source: this, updates_nb: number) => void): number;
            connect_after(signal: 'updates-available', callback: (_source: this, updates_nb: number) => void): number;
            emit(signal: 'updates-available', updates_nb: number): void;

            // Methods

            check_updates(): void;
            get_updates_nb(): number;
            get_updates_list(): string[];
            get_refresh_period(): number;
            get_no_update_hide_icon(): boolean;
        }

        type PackageClass = typeof Package;
        abstract class PackagePrivate {
            static $gtype: GObject.GType<PackagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type AlpmPackageClass = typeof AlpmPackage;
        abstract class AlpmPackagePrivate {
            static $gtype: GObject.GType<AlpmPackagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type AURPackageClass = typeof AURPackage;
        abstract class AURPackagePrivate {
            static $gtype: GObject.GType<AURPackagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TransactionSummaryClass = typeof TransactionSummary;
        abstract class TransactionSummaryPrivate {
            static $gtype: GObject.GType<TransactionSummaryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UpdatesClass = typeof Updates;
        abstract class UpdatesPrivate {
            static $gtype: GObject.GType<UpdatesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ConfigClass = typeof Config;
        abstract class ConfigPrivate {
            static $gtype: GObject.GType<ConfigPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DatabaseClass = typeof Database;
        abstract class DatabasePrivate {
            static $gtype: GObject.GType<DatabasePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TransactionClass = typeof Transaction;
        abstract class TransactionPrivate {
            static $gtype: GObject.GType<TransactionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SnapPackageClass = typeof SnapPackage;
        abstract class SnapPackagePrivate {
            static $gtype: GObject.GType<SnapPackagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FlatpakPackageClass = typeof FlatpakPackage;
        abstract class FlatpakPackagePrivate {
            static $gtype: GObject.GType<FlatpakPackagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UpdatesCheckerClass = typeof UpdatesChecker;
        abstract class UpdatesCheckerPrivate {
            static $gtype: GObject.GType<UpdatesCheckerPrivate>;

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

    export default Pamac;
}

declare module 'gi://Pamac' {
    import Pamac11 from 'gi://Pamac?version=11';
    export default Pamac11;
}
// END
