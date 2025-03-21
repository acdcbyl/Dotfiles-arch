/// <reference path="./libxml2-2.0.d.ts" />
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

declare module 'gi://Libosinfo?version=1.0' {
    // Module dependencies
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Libosinfo {
        /**
         * Libosinfo-1.0
         */

        export namespace DeviceDriverSigningReq {
            export const $gtype: GObject.GType<DeviceDriverSigningReq>;
        }

        enum DeviceDriverSigningReq {
            /**
             * Script do not require device drivers
             * to be signed.
             */
            NONE,
            /**
             * Script must only be given signed
             * device drivers. Some scripts will allow overriding this requirement through
             * #osinfo_install_config_set_driver_signing function. You can query if a
             * script supports this by checking if
             * #OSINFO_INSTALL_CONFIG_PROP_DRIVER_SIGNING configuration parameter is used
             * by the script in question (or other scripts in the same profile).
             */
            STRICT,
            /**
             * A warning will be issued by OS
             * installer if device drivers are not signed and most probably require user
             * input (and thus breaking unattended installation). See
             * #OSINFO_DEVICE_DRIVER_SIGNING_REQ_STRICT on how this warning can be disabled
             * for some scripts.
             */
            WARN,
        }
        /**
         * #GError codes used for errors in #OSINFO_ERROR domain.
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * Generic Osinfo error;
             */
            static GENERIC: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets a #GQuark representing the string "libosinfo"
             */
            static quark(): GLib.Quark;
        }

        /**
         * Policy for configuration parameter presence
         */

        /**
         * Policy for configuration parameter presence
         */
        export namespace InstallConfigParamPolicy {
            export const $gtype: GObject.GType<InstallConfigParamPolicy>;
        }

        enum InstallConfigParamPolicy {
            /**
             * no policy defined
             */
            NONE,
            /**
             * config parameter is required
             */
            REQUIRED,
            /**
             * config parameter may be omitted
             */
            OPTIONAL,
        }

        export namespace InstallScriptInstallationSource {
            export const $gtype: GObject.GType<InstallScriptInstallationSource>;
        }

        enum InstallScriptInstallationSource {
            /**
             * A media will be used as
             * the installation source.
             */
            MEDIA,
            /**
             * A network method will
             * be used as installation source.
             */
            NETWORK,
        }
        /**
         * #GError codes used for errors in the #OSINFO_MEDIA_ERROR domain, during
         * reading of data from install media location.
         */
        class MediaError extends GLib.Error {
            static $gtype: GObject.GType<MediaError>;

            // Static fields

            /**
             * No descriptors.
             */
            static NO_DESCRIPTORS: number;
            /**
             * No Primary volume descriptor.
             */
            static NO_PVD: number;
            /**
             * No supplementary volume descriptor.
             */
            static NO_SVD: number;
            /**
             * Not enough metadata.
             */
            static INSUFFICIENT_METADATA: number;
            /**
             * Install media not bootable.
             */
            static NOT_BOOTABLE: number;
            /**
             * No directory record extent
             * found.
             */
            static NO_DIRECTORY_RECORD_EXTENT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace PathFormat {
            export const $gtype: GObject.GType<PathFormat>;
        }

        enum PathFormat {
            /**
             * Unix/Linux path format, e.g /home/foo/bar.txt
             */
            UNIX,
            /**
             * DOS/Windows path format, e.g \My Documents\bar.txt
             */
            DOS,
        }
        /**
         * Enum values used to form relationships between products
         */

        /**
         * Enum values used to form relationships between products
         */
        export namespace ProductRelationship {
            export const $gtype: GObject.GType<ProductRelationship>;
        }

        enum ProductRelationship {
            /**
             * a descendent (RHEL-5 derives from Fedora-6)
             */
            DERIVES_FROM,
            /**
             * a new version release (RHEL-6 upgrades RHEL-4)
             */
            UPGRADES,
            /**
             * a perfect clone (CentOS-5 clones RHEL-5)
             */
            CLONES,
        }

        export namespace ReleaseStatus {
            export const $gtype: GObject.GType<ReleaseStatus>;
        }

        enum ReleaseStatus {
            /**
             * A released OS. (Since: 0.2.9)
             */
            RELEASED,
            /**
             * A continuous integration snapshot and not
             * an actual released product yet. For example, gnome-continuous images for
             * development snapshots of GNOME and nightly build ISOs of Fedora etc.
             * (Since: 0.2.9)
             */
            SNAPSHOT,
            /**
             * A pre-release. For example, alpha and
             * beta pre-releases of Fedora etc. (Since: 0.2.9)
             */
            PRERELEASE,
            /**
             * A rolling version of an OS and thus with no
             * actual releases. For example, Gentoo, Arch Linux, etc. (Since: 1.4.0)
             */
            ROLLING,
        }
        /**
         * #GError codes used for errors in the #OSINFO_TREE_ERROR domain, during
         * reading the treeinfo from a URI.
         */
        class TreeError extends GLib.Error {
            static $gtype: GObject.GType<TreeError>;

            // Static fields

            /**
             * No treeinfo found;
             */
            static NO_TREEINFO: number;
            /**
             * The URL protocol is not supported.
             */
            static NOT_SUPPORTED_PROTOCOL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets a #GQuark representing the string "osinfo-tree-error"
             */
            static quark(): GLib.Quark;
        }

        const ARCHITECTURE_ALL: string;
        const AVATAR_FORMAT_PROP_ALPHA: string;
        const AVATAR_FORMAT_PROP_HEIGHT: string;
        const AVATAR_FORMAT_PROP_MIME_TYPE: string;
        const AVATAR_FORMAT_PROP_WIDTH: string;
        const DEVICELINK_PROP_DRIVER: string;
        const DEVICELINK_PROP_SUPPORTED: string;
        const DEVICE_DRIVER_DEFAULT_PRIORITY: number;
        const DEVICE_DRIVER_PROP_ARCHITECTURE: string;
        const DEVICE_DRIVER_PROP_DEVICE: string;
        const DEVICE_DRIVER_PROP_FILE: string;
        const DEVICE_DRIVER_PROP_LOCATION: string;
        const DEVICE_DRIVER_PROP_PRE_INSTALLABLE: string;
        const DEVICE_DRIVER_PROP_PRIORITY: string;
        const DEVICE_DRIVER_PROP_SIGNED: string;
        const DEVICE_PROP_BUS_TYPE: string;
        const DEVICE_PROP_CLASS: string;
        const DEVICE_PROP_NAME: string;
        const DEVICE_PROP_PRODUCT: string;
        const DEVICE_PROP_PRODUCT_ID: string;
        const DEVICE_PROP_SUBSYSTEM: string;
        const DEVICE_PROP_VENDOR: string;
        const DEVICE_PROP_VENDOR_ID: string;
        const ENTITY_PROP_ID: string;
        const FIRMWARE_PROP_ARCHITECTURE: string;
        const FIRMWARE_PROP_SUPPORTED: string;
        const FIRMWARE_PROP_TYPE: string;
        const GIBIBYTES: number;
        const IMAGE_PROP_ARCHITECTURE: string;
        const IMAGE_PROP_CLOUD_INIT: string;
        const IMAGE_PROP_FORMAT: string;
        const IMAGE_PROP_URL: string;
        const IMAGE_PROP_VARIANT: string;
        const INSTALL_CONFIG_PARAM_PROP_DATAMAP: string;
        const INSTALL_CONFIG_PARAM_PROP_NAME: string;
        const INSTALL_CONFIG_PARAM_PROP_POLICY: string;
        const INSTALL_CONFIG_PROP_ADMIN_PASSWORD: string;
        const INSTALL_CONFIG_PROP_AVATAR_DISK: string;
        const INSTALL_CONFIG_PROP_AVATAR_LOCATION: string;
        const INSTALL_CONFIG_PROP_DRIVER_SIGNING: string;
        const INSTALL_CONFIG_PROP_HARDWARE_ARCH: string;
        const INSTALL_CONFIG_PROP_HOSTNAME: string;
        const INSTALL_CONFIG_PROP_INSTALLATION_URL: string;
        const INSTALL_CONFIG_PROP_L10N_KEYBOARD: string;
        const INSTALL_CONFIG_PROP_L10N_LANGUAGE: string;
        const INSTALL_CONFIG_PROP_L10N_TIMEZONE: string;
        const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_DISK: string;
        const INSTALL_CONFIG_PROP_POST_INSTALL_DRIVERS_LOCATION: string;
        const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_DISK: string;
        const INSTALL_CONFIG_PROP_PRE_INSTALL_DRIVERS_LOCATION: string;
        const INSTALL_CONFIG_PROP_REG_LOGIN: string;
        const INSTALL_CONFIG_PROP_REG_PASSWORD: string;
        const INSTALL_CONFIG_PROP_REG_PRODUCTKEY: string;
        const INSTALL_CONFIG_PROP_SCRIPT_DISK: string;
        const INSTALL_CONFIG_PROP_TARGET_DISK: string;
        const INSTALL_CONFIG_PROP_USER_ADMIN: string;
        const INSTALL_CONFIG_PROP_USER_AUTOLOGIN: string;
        const INSTALL_CONFIG_PROP_USER_LOGIN: string;
        const INSTALL_CONFIG_PROP_USER_PASSWORD: string;
        const INSTALL_CONFIG_PROP_USER_REALNAME: string;
        const INSTALL_SCRIPT_PROFILE_DESKTOP: string;
        const INSTALL_SCRIPT_PROFILE_JEOS: string;
        const INSTALL_SCRIPT_PROP_CAN_POST_INSTALL_DRIVERS: string;
        const INSTALL_SCRIPT_PROP_CAN_PRE_INSTALL_DRIVERS: string;
        const INSTALL_SCRIPT_PROP_EXPECTED_FILENAME: string;
        const INSTALL_SCRIPT_PROP_INJECTION_METHOD: string;
        const INSTALL_SCRIPT_PROP_INSTALLATION_SOURCE: string;
        const INSTALL_SCRIPT_PROP_NEEDS_INTERNET: string;
        const INSTALL_SCRIPT_PROP_PATH_FORMAT: string;
        const INSTALL_SCRIPT_PROP_POST_INSTALL_DRIVERS_SIGNING_REQ: string;
        const INSTALL_SCRIPT_PROP_PREFERRED_INJECTION_METHOD: string;
        const INSTALL_SCRIPT_PROP_PRE_INSTALL_DRIVERS_SIGNING_REQ: string;
        const INSTALL_SCRIPT_PROP_PRODUCT_KEY_FORMAT: string;
        const INSTALL_SCRIPT_PROP_PROFILE: string;
        const INSTALL_SCRIPT_PROP_TEMPLATE_DATA: string;
        const INSTALL_SCRIPT_PROP_TEMPLATE_URI: string;
        const KIBIBYTES: number;
        /**
         * libosinfo major version number.
         */
        const MAJOR_VERSION: number;
        const MEBIBYTES: number;
        const MEDIA_PROP_APPLICATION_ID: string;
        const MEDIA_PROP_ARCHITECTURE: string;
        const MEDIA_PROP_BOOTABLE: string;
        const MEDIA_PROP_EJECT_AFTER_INSTALL: string;
        const MEDIA_PROP_INITRD: string;
        const MEDIA_PROP_INSTALLER: string;
        const MEDIA_PROP_INSTALLER_REBOOTS: string;
        const MEDIA_PROP_INSTALLER_SCRIPT: string;
        const MEDIA_PROP_KERNEL: string;
        const MEDIA_PROP_LANG: string;
        const MEDIA_PROP_LANG_MAP: string;
        const MEDIA_PROP_LANG_REGEX: string;
        const MEDIA_PROP_LIVE: string;
        const MEDIA_PROP_PUBLISHER_ID: string;
        const MEDIA_PROP_SYSTEM_ID: string;
        const MEDIA_PROP_URL: string;
        const MEDIA_PROP_VARIANT: string;
        const MEDIA_PROP_VOLUME_ID: string;
        const MEDIA_PROP_VOLUME_SIZE: string;
        const MEGAHERTZ: number;
        /**
         * libosinfo micro version number.
         */
        const MICRO_VERSION: number;
        /**
         * libosinfo minor version number.
         */
        const MINOR_VERSION: number;
        const OS_PROP_CLOUD_IMAGE_USERNAME: string;
        const OS_PROP_DISTRO: string;
        const OS_PROP_FAMILY: string;
        const OS_PROP_KERNEL_URL_ARGUMENT: string;
        const OS_PROP_RELEASE_STATUS: string;
        const OS_VARIANT_PROP_NAME: string;
        const PRODUCT_PROP_CODENAME: string;
        const PRODUCT_PROP_EOL_DATE: string;
        const PRODUCT_PROP_LOGO: string;
        const PRODUCT_PROP_NAME: string;
        const PRODUCT_PROP_RELEASE_DATE: string;
        const PRODUCT_PROP_SHORT_ID: string;
        const PRODUCT_PROP_VENDOR: string;
        const PRODUCT_PROP_VERSION: string;
        const RESOURCES_PROP_ARCHITECTURE: string;
        const RESOURCES_PROP_CPU: string;
        const RESOURCES_PROP_N_CPUS: string;
        const RESOURCES_PROP_RAM: string;
        const RESOURCES_PROP_STORAGE: string;
        const TREE_PROP_ARCHITECTURE: string;
        const TREE_PROP_BOOT_ISO: string;
        const TREE_PROP_HAS_TREEINFO: string;
        const TREE_PROP_INITRD: string;
        const TREE_PROP_KERNEL: string;
        const TREE_PROP_TREEINFO_ARCH: string;
        const TREE_PROP_TREEINFO_FAMILY: string;
        const TREE_PROP_TREEINFO_VARIANT: string;
        const TREE_PROP_TREEINFO_VERSION: string;
        const TREE_PROP_URL: string;
        const TREE_PROP_VARIANT: string;
        /**
         * Gets a #GQuark representing the string "libosinfo"
         * @returns the #GQuark representing the string.
         */
        function error_quark(): GLib.Quark;
        function media_error_quark(): GLib.Quark;
        /**
         * Gets a #GQuark representing the string "osinfo-tree-error"
         * @returns the #GQuark representing the string.
         */
        function tree_error_quark(): GLib.Quark;

        export namespace InstallScriptInjectionMethod {
            export const $gtype: GObject.GType<InstallScriptInjectionMethod>;
        }

        enum InstallScriptInjectionMethod {
            /**
             * Support injection of the
             * installation script through a CD-ROM.
             */
            CDROM,
            /**
             * Support injection of the
             * installation script through a disk.
             */
            DISK,
            /**
             * Support injection of the
             * installation script through a floppy disk.
             */
            FLOPPY,
            /**
             * Support injection of the
             * installation script through the initrd.
             */
            INITRD,
            /**
             * Support injection of the
             * installation script from the web.
             */
            WEB,
        }
        /**
         * OSINFO_MEDIA_DETECT_REQUIRE_BOOTABLE: Requires a media to be bootable.
         * Flags used for detecting a media.
         */

        /**
         * OSINFO_MEDIA_DETECT_REQUIRE_BOOTABLE: Requires a media to be bootable.
         * Flags used for detecting a media.
         */
        export namespace MediaDetectFlags {
            export const $gtype: GObject.GType<MediaDetectFlags>;
        }

        enum MediaDetectFlags {
            BOOTABLE,
        }
        module AvatarFormat {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                alpha: boolean;
                height: number;
                mime_types: string[];
                mimeTypes: string[];
                width: number;
            }
        }

        class AvatarFormat extends Entity {
            static $gtype: GObject.GType<AvatarFormat>;

            // Properties

            /**
             * Whether alpha channel is supported in the avatar.
             */
            get alpha(): boolean;
            /**
             * The required height (in pixels) of the avatar.
             */
            get height(): number;
            /**
             * The allowed mime-types for the avatar.
             */
            get mime_types(): string[];
            /**
             * The allowed mime-types for the avatar.
             */
            get mimeTypes(): string[];
            /**
             * The required width (in pixels) of the avatar.
             */
            get width(): number;

            // Constructors

            constructor(properties?: Partial<AvatarFormat.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): AvatarFormat;

            // Methods

            get_alpha(): boolean;
            get_height(): number;
            get_mime_types(): string[];
            get_width(): number;
        }

        module Datamap {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {}
        }

        class Datamap extends Entity {
            static $gtype: GObject.GType<Datamap>;

            // Constructors

            constructor(properties?: Partial<Datamap.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): Datamap;

            // Methods

            /**
             * Adds the input value and the output value associated to it to
             * the `map`.
             * @param inval the input value
             * @param outval the output value
             */
            insert(inval: string, outval: string): void;
            /**
             * Returns the output value with which `inval` is associated to.
             * @param inval the input value
             */
            lookup(inval: string): string;
            /**
             * Returns the input value with which `outval` is associated to.
             * @param outval the output value
             */
            reverse_lookup(outval: string): string;
        }

        module DatamapList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class DatamapList extends List {
            static $gtype: GObject.GType<DatamapList>;

            // Constructors

            constructor(properties?: Partial<DatamapList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DatamapList;
        }

        module Db {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Db extends GObject.Object {
            static $gtype: GObject.GType<Db>;

            // Constructors

            constructor(properties?: Partial<Db.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Db;

            // Methods

            add_datamap(datamap: Datamap): void;
            add_deployment(deployment: Deployment): void;
            add_device(device: Device): void;
            add_install_script(script: InstallScript): void;
            add_os(os: Os): void;
            add_platform(platform: Platform): void;
            /**
             * Find the deployment for `os` on `platform,` if any.
             * @param os the operating system to find
             * @param platform the virtualization platform
             * @returns the deployment, or NULL
             */
            find_deployment(os: Os, platform: Platform): Deployment;
            get_datamap(id: string): Datamap;
            get_datamap_list(): DatamapList;
            get_deployment(id: string): Deployment;
            get_deployment_list(): DeploymentList;
            get_device(id: string): Device;
            get_device_list(): DeviceList;
            get_install_script(id: string): InstallScript;
            get_install_script_list(): InstallScriptList;
            get_os(id: string): Os;
            get_os_list(): OsList;
            get_platform(id: string): Platform;
            get_platform_list(): PlatformList;
            /**
             * Guess operating system given an #OsinfoMedia object.
             * @param media the installation media
             * @returns the operating system, or NULL if guessing failed
             */
            guess_os_from_media(media: Media): [Os, Media | null];
            /**
             * Guess operating system given an #OsinfoTree object.
             * @param tree the installation tree
             * @returns the operating system, or NULL if guessing failed
             */
            guess_os_from_tree(tree: Tree): [Os, Tree | null];
            /**
             * Try to match a newly created `media` with a media description from `db`.
             * If found, `media` will be filled with the corresponding information
             * stored in `db`. In particular, after a call to osinfo_db_identify_media(), if
             * the media could be identified, its OsinfoEntify::id and OsinfoMedia::os
             * properties will be set.
             *
             * The match for `media` in `db` is not guaranteed to be unique and
             * this method will only return the first match found. The order
             * in which matches are identified is not guaranteed, so when there
             * are multiple matches, the returned match may vary over time.
             * Applications are recommended to use the #osinfo_db_identify_all_media
             * method instead to receive all matched media.
             * @param media the installation media data
             * @returns TRUE if @media was found in @db, FALSE otherwise
             */
            identify_media(media: Media): boolean;
            /**
             * Try to match a newly created `media` with a media description from `db`.
             * The return list will contain any #OsinfoMedia instances from `db` that
             * matched `media`. Usuaully there will only be one match returned, but
             * applications should be prepared to deal with multiple matches. The
             * returned #OsinfoMedia instances will have their OsinfoEntify::id and
             * OsinfoMedia::os properties will be set, while `media` is left unmodified.
             * @param media the installation media data
             * @returns a list containing any matches for @media found in @db
             */
            identify_medialist(media: Media): MediaList;
            /**
             * Try to match a newly created `tree` with a tree description from `db`.
             * If found, `tree` will be filled with the corresponding information
             * stored in `db`. In particular, after a call to osinfo_db_identify_tree(), if
             * the tree could be identified, its OsinfoEntify::id and OsinfoMedia::os
             * properties will be set.
             *
             * The match for `tree` in `db` is not guaranteed to be unique and
             * this method will only return the first match found. The order
             * in which matches are identified is not guaranteed, so when there
             * are multiple matches, the returned match may vary over time.
             * Applications are recommended to use the #osinfo_db_identify_all_tree
             * method instead to receive all matched tree.
             * @param tree the installation tree data
             * @returns TRUE if @tree was found in @db, FALSE otherwise
             */
            identify_tree(tree: Tree): boolean;
            /**
             * Try to match a newly created `tree` with a tree description from `db`.
             * The return list will contain any #OsinfoTree instances from `db` that
             * matched `tree`. Usuaully there will only be one match returned, but
             * applications should be prepared to deal with multiple matches. The
             * returned #OsinfoTree instances will have their OsinfoEntify::id and
             * OsinfoTree::os properties will be set, while `tree` is left unmodified.
             * @param tree the installation tree data
             * @returns a list containing any matches for @tree found in @db
             */
            identify_treelist(tree: Tree): TreeList;
            /**
             * Get all operating systems that are the referee
             * in an operating system relationship.
             * @param relshp the product relationship
             * @returns a list of operating systems
             */
            unique_values_for_os_relationship(relshp: ProductRelationship | null): OsList;
            /**
             * Get all platforms that are the referee
             * in an platform relationship.
             * @param relshp the product relationship
             * @returns a list of virtualization platforms
             */
            unique_values_for_platform_relationship(relshp: ProductRelationship | null): PlatformList;
            /**
             * Get all unique values for a named property amongst all
             * deployments in the database
             * @param propName a property name
             * @returns a list of strings
             */
            unique_values_for_property_in_deployment(propName: string): string[];
            /**
             * Get all unique values for a named property amongst all
             * devices in the database
             * @param propName a property name
             * @returns a list of strings
             */
            unique_values_for_property_in_device(propName: string): string[];
            /**
             * Get all unique values for a named property amongst all
             * operating systems in the database
             * @param propName a property name
             * @returns a list of strings
             */
            unique_values_for_property_in_os(propName: string): string[];
            /**
             * Get all unique values for a named property amongst all
             * platforms in the database
             * @param propName a property name
             * @returns a list of strings
             */
            unique_values_for_property_in_platform(propName: string): string[];
        }

        module Deployment {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                os: Os;
                platform: Platform;
            }
        }

        class Deployment extends Entity {
            static $gtype: GObject.GType<Deployment>;

            // Properties

            /**
             * The operating system to be deployed
             */
            get os(): Os;
            /**
             * The platform to deploy on
             */
            get platform(): Platform;

            // Constructors

            constructor(properties?: Partial<Deployment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, os: Os, platform: Platform): Deployment;

            // Methods

            /**
             * Associate a device with a deployment. The returned #OsinfoDeviceLink
             * can be used to record extra metadata against the link
             * @param dev the device to associate
             * @returns the device association
             */
            add_device(dev: Device): DeviceLink;
            /**
             * Retrieve all the associated devices matching the filter.
             * The filter matches against the link, not the device.
             * @param filter an optional filter
             * @returns a list of #OsinfoDevice entities
             */
            get_device_links(filter?: Filter | null): DeviceLinkList;
            /**
             * Retrieve all the associated devices matching the filter.
             * The filter matches against the device, not the link.
             * @param filter an optional filter
             * @returns a list of #OsinfoDevice entities
             */
            get_devices(filter?: Filter | null): DeviceList;
            /**
             * Get the operating system for the deployment
             * @returns an OS, or NULL
             */
            get_os(): Os;
            /**
             * Get the platform for the deployment
             * @returns a platform, or NULL
             */
            get_platform(): Platform;
            /**
             * Get the preferred device matching a given filter
             * @param filter a device metadata filter
             * @returns a device, or NULL
             */
            get_preferred_device(filter?: Filter | null): Device;
            /**
             * Get the preferred device link matching a given filter and platform.
             * The filter matches against attributes on the link, not the device.
             * @param filter a device metadata filter
             * @returns a device, or NULL
             */
            get_preferred_device_link(filter?: Filter | null): DeviceLink;
        }

        module DeploymentList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class DeploymentList extends List {
            static $gtype: GObject.GType<DeploymentList>;

            // Constructors

            constructor(properties?: Partial<DeploymentList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DeploymentList;

            // Methods

            /**
             * Construct a new deployment list that is filled with deployments
             * from `source`
             * @returns a copy of the deployment list
             */
            new_copy(): DeploymentList;
            /**
             * Construct a new deployment list that is filled with deployments
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the deployment list
             */
            new_filtered(filter: Filter): DeploymentList;
            /**
             * Construct a new deployment list that is filled with only the
             * deployments that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second deployment list to copy
             * @returns an intersection of the two deployment lists
             */
            new_intersection(sourceTwo: DeploymentList): DeploymentList;
            /**
             * Construct a new deployment list that is filled with all the
             * deployments that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second deployment list to copy
             * @returns a union of the two deployment lists
             */
            new_union(sourceTwo: DeploymentList): DeploymentList;
        }

        module Device {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {}
        }

        class Device extends Entity {
            static $gtype: GObject.GType<Device>;

            // Constructors

            constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): Device;

            // Methods

            get_bus_type(): string;
            get_class(): string;
            get_name(): string;
            get_product(): string;
            get_product_id(): string;
            get_subsystem(): string;
            get_vendor(): string;
            get_vendor_id(): string;
        }

        module DeviceDriver {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {}
        }

        class DeviceDriver extends Entity {
            static $gtype: GObject.GType<DeviceDriver>;

            // Constructors

            constructor(properties?: Partial<DeviceDriver.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the target hardware architecture of `driver`.
             * @returns the hardware architecture.
             */
            get_architecture(): string;
            get_devices(): DeviceList;
            /**
             * Retrieves the names of driver files under the location returned by
             * #osinfo_device_driver_get_location.
             * @returns The list of driver files.
             */
            get_files(): string[];
            /**
             * Retrieves the location of the `driver` as a URL.
             * @returns the location of the driver.
             */
            get_location(): string;
            get_pre_installable(): boolean;
            /**
             * Returns the priority of the device driver. The higher the value, the more
             * important it is.
             * @returns the priority of the device driver.
             */
            get_priority(): number;
            /**
             * Some OS vendors recommend or require device drivers to be signed by them
             * before these device drivers could be installed on their OS.
             * @returns TRUE if @driver is signed, FALSE otherwise.
             */
            get_signed(): boolean;
        }

        module DeviceDriverList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class DeviceDriverList extends List {
            static $gtype: GObject.GType<DeviceDriverList>;

            // Constructors

            constructor(properties?: Partial<DeviceDriverList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DeviceDriverList;
        }

        module DeviceLink {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                target: Device;
            }
        }

        class DeviceLink extends Entity {
            static $gtype: GObject.GType<DeviceLink>;

            // Properties

            /**
             * The target of the device link.
             */
            get target(): Device;

            // Constructors

            constructor(properties?: Partial<DeviceLink.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](target: Device): DeviceLink;

            // Methods

            get_driver(): string;
            /**
             * Retrieve the #OsinfoDevice that the link points to.
             * @returns the target of the device link
             */
            get_target(): Device;
        }

        module DeviceLinkFilter {
            // Constructor properties interface

            interface ConstructorProps extends Filter.ConstructorProps {
                target_filter: Filter;
                targetFilter: Filter;
            }
        }

        class DeviceLinkFilter extends Filter {
            static $gtype: GObject.GType<DeviceLinkFilter>;

            // Properties

            /**
             * The operating system to be deployed
             */
            get target_filter(): Filter;
            /**
             * The operating system to be deployed
             */
            get targetFilter(): Filter;

            // Constructors

            constructor(properties?: Partial<DeviceLinkFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filter: Filter): DeviceLinkFilter;
            // Conflicted with Libosinfo.Filter.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Retrieve the filter used to match against the target of
             * the device link
             * @returns the target filter object
             */
            get_target_filter(): Filter;
        }

        module DeviceLinkList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class DeviceLinkList extends List {
            static $gtype: GObject.GType<DeviceLinkList>;

            // Constructors

            constructor(properties?: Partial<DeviceLinkList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DeviceLinkList;

            // Methods

            /**
             * Get all devices matching a given filter
             * @param filter an optional device property filter
             * @returns A list of devices
             */
            get_devices(filter?: Filter | null): DeviceList;
            /**
             * Construct a new devicelink list that is filled with devicelinks
             * from `source`
             * @returns a copy of the devicelink list
             */
            new_copy(): DeviceLinkList;
            /**
             * Construct a new devicelink list that is filled with devicelinks
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the devicelink list
             */
            new_filtered(filter: Filter): DeviceLinkList;
            /**
             * Construct a new devicelink list that is filled with only the
             * devicelinks that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second devicelink list to copy
             * @returns an intersection of the two devicelink lists
             */
            new_intersection(sourceTwo: DeviceLinkList): DeviceLinkList;
            /**
             * Construct a new devicelink list that is filled with all the
             * devicelinks that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second devicelink list to copy
             * @returns a union of the two devicelink lists
             */
            new_union(sourceTwo: DeviceLinkList): DeviceLinkList;
        }

        module DeviceList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class DeviceList extends List {
            static $gtype: GObject.GType<DeviceList>;

            // Constructors

            constructor(properties?: Partial<DeviceList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DeviceList;

            // Methods

            /**
             * Construct a new device list that is filled with devices
             * from `source`
             * @returns a copy of the device list
             */
            new_copy(): DeviceList;
            /**
             * Construct a new device list that is filled with devices
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the device list
             */
            new_filtered(filter: Filter): DeviceList;
            /**
             * Construct a new device list that is filled with only the
             * devices that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second device list to copy
             * @returns an intersection of the two device lists
             */
            new_intersection(sourceTwo: DeviceList): DeviceList;
            /**
             * Construct a new device list that is filled with all the
             * devices that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second device list to copy
             * @returns a union of the two device lists
             */
            new_union(sourceTwo: DeviceList): DeviceList;
        }

        module Entity {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                id: string;
            }
        }

        abstract class Entity extends GObject.Object {
            static $gtype: GObject.GType<Entity>;

            // Properties

            /**
             * The unique identifier for the entity The format of identifiers
             * is undefined, but the recommended practice is to use a URI.
             * This parameter must be set at time of construction as no
             * default value is provided.
             */
            get id(): string;
            set id(val: string);

            // Constructors

            constructor(properties?: Partial<Entity.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Adds a new parameter against the entity. A key can have multiple
             * values associated. Thus repeated calls with the same key will
             * build up a list of possible values.
             * @param key the name of the key
             * @param value the data to associated with that key
             */
            add_param(key: string, value: string): void;
            /**
             * Remove all values associated with a key
             * @param key the name of the key
             */
            clear_param(key: string): void;
            /**
             * Retrieves the unique key for the entity. The format of identifiers
             * is undefined, but the recommended practice is to use a URI.
             * @returns the unique key for the entity
             */
            get_id(): string;
            /**
             * Retrieve all the known parameter keys associated with
             * the entity
             * @returns The list of string parameters
             */
            get_param_keys(): string[];
            /**
             * Retrieve the parameter value associated with a named key. If
             * multiple values are stored against the key, only the first
             * value is returned. If no value is associated, NULL is returned
             * @param key the name of the key
             * @returns the value associated with the key, or NULL
             */
            get_param_value(key: string): string;
            /**
             * Retrieve the parameter value associated with a named key as a
             * boolean. If multiple values are stored against the key, only the
             * first value is returned. If no value is associated, FALSE is returned
             * @param key the name of the key
             * @returns the value associated with the key as a boolean, or FALSE
             */
            get_param_value_boolean(key: string): boolean;
            /**
             * Retrieve the parameter value associated with a named key as a
             * boolean. If multiple values are stored against the key, only the
             * first value is returned. If no value is associated, `default_value`
             * is returned.
             * @param key the name of the key
             * @param default_value the value to be returned in case there's no value                 associated with the @key
             * @returns the value associated with the key as a boolean, or @default_value
             */
            get_param_value_boolean_with_default(key: string, default_value: boolean): boolean;
            /**
             * Retrieve the parameter value associated with a named key as an
             * enum value. If multiple values are stored against the key, only
             * the first value is returned. If no value is associated, the
             * `default_value` is returned.
             * @param key the name of the key
             * @param enum_type the enum type
             * @param default_value the default value to be used, in case there's                 no value associated with the key
             * @returns the enum value associated with the key, or @default_value.
             */
            get_param_value_enum(key: string, enum_type: GObject.GType, default_value: number): number;
            /**
             * Retrieve the parameter value associated with a named key as an
             * int64. If multiple values are stored against the key, only the
             * first value is returned. If no value is associated, -1 is returned.
             * @param key the name of the key
             * @returns the value associated with the key as an int64, or -1.
             */
            get_param_value_int64(key: string): number;
            /**
             * Retrieve the parameter value associated with a named key as an
             * int64. If multiple values are stored against the key, only the
             * first value is returned. If no value is associated, `default_value`
             * is returned.
             * @param key the name of the key
             * @param default_value the value to be returned in case there's no value                 associated with the @key
             * @returns the value associated with the key as an int64, or @default_value
             */
            get_param_value_int64_with_default(key: string, default_value: number): number;
            /**
             * Retrieve all the parameter values associated with a named
             * key. If no values are associated, NULL is returned
             * @param key the name of the key
             * @returns the values associated with the key
             */
            get_param_value_list(key: string): string[];
            /**
             * Sets a new parameter against the entity. If the key already
             * has a value associated with it, the existing value will be
             * cleared.
             * @param key the name of the key
             * @param value the data to associated with that key
             */
            set_param(key: string, value: string): void;
            /**
             * Sets a new parameter against the entity. If the key already
             * has a value associated with it, the existing value will be
             * cleared.
             * @param key the name of the key
             * @param value the boolean value to be associated with that key
             */
            set_param_boolean(key: string, value: boolean): void;
            /**
             * Sets a new parameter against the entity. If the key already
             * has a value associated with it, the existing value will be
             * cleared.
             * @param key the name of the key
             * @param value the enum value to be associated with that key
             * @param enum_type the enum type
             */
            set_param_enum(key: string, value: number, enum_type: GObject.GType): void;
            /**
             * Sets a new parameter against the entity. If the key already
             * has a value associated with it, the existing value will be
             * cleared.
             * @param key the name of the key
             * @param value the int64 value to be associated with that key
             */
            set_param_int64(key: string, value: number): void;
        }

        module Filter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Filter extends GObject.Object {
            static $gtype: GObject.GType<Filter>;

            // Constructors

            constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Filter;

            // Virtual methods

            /**
             * Determine of an entity matches a filter
             * @param entity an entity to query
             */
            vfunc_matches(entity: Entity): boolean;

            // Methods

            /**
             * Adds a constraint that requires the entity to have
             * a property key `propName` with a value of `propVal`.
             * If multiple constraints are added for the same
             * `propName,` with different values, the entity have
             * all property values.
             * @param propName the name of the parameter key
             * @param propVal the required property value
             */
            add_constraint(propName: string, propVal: string): void;
            /**
             * Remove all filter constraints for the matching property
             * name.
             * @param propName name of the key to remove constraints for
             */
            clear_constraint(propName: string): void;
            /**
             * Remove all filter property constraints
             */
            clear_constraints(): void;
            /**
             * Get a list of all constraint property keys
             * @returns List of constraint keys
             */
            get_constraint_keys(): string[];
            /**
             * Get a list values for filter constraints with the named key
             * @param propName the name of the key
             * @returns List of constraint values
             */
            get_constraint_values(propName: string): string[];
            /**
             * Determine of an entity matches a filter
             * @param entity an entity to query
             * @returns TRUE if entity passes the filter, FALSE otherwise
             */
            matches(entity: Entity): boolean;
        }

        module Firmware {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                architecture: string;
                type: string;
            }
        }

        class Firmware extends Entity {
            static $gtype: GObject.GType<Firmware>;

            // Properties

            /**
             * The target hardware architecture of this firmware.
             */
            get architecture(): string;
            set architecture(val: string);
            get type(): string;
            set type(val: string);

            // Constructors

            constructor(properties?: Partial<Firmware.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, architecture: string, type: string): Firmware;

            // Methods

            /**
             * Retrieves the target hardware architecture of the OS `firmware` provides.
             * @returns the hardware architecture, or NULL
             */
            get_architecture(): string;
            /**
             * The type of the `firmware`
             * @returns the type, or NULL
             */
            get_firmware_type(): string;
            /**
             * Whether the `firmware` is supported or not
             * @returns TRUE if supported, FALSE otherwise.
             */
            is_supported(): boolean;
        }

        module FirmwareList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class FirmwareList extends List {
            static $gtype: GObject.GType<FirmwareList>;

            // Constructors

            constructor(properties?: Partial<FirmwareList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): FirmwareList;
        }

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                architecture: string;
                cloud_init: string;
                cloudInit: string;
                format: string;
                url: string;
            }
        }

        class Image extends Entity {
            static $gtype: GObject.GType<Image>;

            // Properties

            /**
             * The target hardware architecture of this image.
             */
            get architecture(): string;
            set architecture(val: string);
            /**
             * Whether the image supports cloud-init customizations or not.
             */
            get cloud_init(): string;
            set cloud_init(val: string);
            /**
             * Whether the image supports cloud-init customizations or not.
             */
            get cloudInit(): string;
            set cloudInit(val: string);
            /**
             * The image format.
             */
            get format(): string;
            set format(val: string);
            /**
             * The URL to this image.
             */
            get url(): string;
            set url(val: string);

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, architecture: string, format: string): Image;

            // Methods

            /**
             * Retrieves the target hardware architecture of the OS `image` provides.
             * @returns the hardware architecture, or NULL
             */
            get_architecture(): string;
            /**
             * Whether `image` supports cloud init customizations
             * @returns #TRUE if @image supports cloud init customizations, #FALSE otherwise.
             */
            get_cloud_init(): boolean;
            /**
             * The format of the `image`
             * @returns the format, or NULL
             */
            get_format(): string;
            get_os(): Os;
            /**
             * Gets the varriants of the associated operating system
             * @returns the operating system variants, or NULL
             */
            get_os_variants(): OsVariantList;
            /**
             * The URL to the `image`
             * @returns the URL, or NULL
             */
            get_url(): string;
            /**
             * Sets the #OsinfoOs associated to the #OsinfoImage instance.
             * @param os an #OsinfoOs instance
             */
            set_os(os: Os): void;
        }

        module ImageList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class ImageList extends List {
            static $gtype: GObject.GType<ImageList>;

            // Constructors

            constructor(properties?: Partial<ImageList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ImageList;
        }

        module InstallConfig {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {}
        }

        class InstallConfig extends Entity {
            static $gtype: GObject.GType<InstallConfig>;

            // Constructors

            constructor(properties?: Partial<InstallConfig.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): InstallConfig;

            // Methods

            get_admin_password(): string;
            get_avatar_disk(): string;
            get_avatar_location(): string;
            get_driver_signing(): boolean;
            get_hardware_arch(): string;
            get_hostname(): string;
            /**
             * Returns the URL the script will use to perform the installation.
             */
            get_installation_url(): string;
            get_l10n_keyboard(): string;
            get_l10n_language(): string;
            get_l10n_timezone(): string;
            get_post_install_drivers_disk(): string;
            get_post_install_drivers_location(): string;
            get_pre_install_drivers_disk(): string;
            get_pre_install_drivers_location(): string;
            get_reg_login(): string;
            get_reg_password(): string;
            get_reg_product_key(): string;
            get_script_disk(): string;
            get_target_disk(): string;
            get_user_administrator(): boolean;
            get_user_autologin(): boolean;
            get_user_login(): string;
            get_user_password(): string;
            get_user_realname(): string;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_ADMIN_PASSWORD parameter
             * @param password the administrator password to be set
             */
            set_admin_password(password: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_AVATAR_DISK parameter.
             *
             * Please read documentation on #osinfo_install_config_set_target_disk() for
             * explanation on the format of `disk` string.
             * @param disk the avatar disk
             */
            set_avatar_disk(disk: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_AVATAR_LOCATION parameter.
             *
             * Note that the format of this string is dependent on the installer script
             * `config` is going to be used with. You can use
             * #osinfo_install_script_get_path_format() to find out which format
             * does the script expects this string to be in.
             *
             * Also note that in case of #OSINFO_PATH_FORMAT_DOS, the drive/disk letter
             * and the leading ':' must not be included in the path.
             * @param location new location
             */
            set_avatar_location(location: string): void;
            /**
             * If a script requires drivers to be signed, this function can be used to
             * disable that security feature. WARNING: Disabling driver signing may very
             * well mean disabling it permanently.
             * @param signing boolean value
             */
            set_driver_signing(signing: boolean): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_HARDWARE_ARCH parameter.
             *
             * The list of valid architectures are part of osinfo.rng schema
             * @param arch the hardware architecture
             */
            set_hardware_arch(arch: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_HOSTNAME parameter.
             *
             * Note that some operating systems have restrictions on maximum number of, and
             * allowed characters in hostname (or its equivalent) so it is highly
             * recommended that you keep the actual hostname less than or equal to 15
             * characters long and make sure that it does not contain any characters other
             * than ASCII alphanumeric and '-'. Otherwise unattended installation might
             * fail.
             * @param hostname the desired hostname
             */
            set_hostname(hostname: string): void;
            /**
             * When performing a tree based installation the script will need the installation
             * URL to be set, whenever the installation is performed from a non canonical place.
             * @param url the URL used to perform the installation
             */
            set_installation_url(url: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_L10N_KEYBOARD parameter.
             *
             * The expected format of this string is the same as
             * #osinfo_install_config_set_l10n_language function's 'language' parameter.
             * @param keyboard the keyboard
             */
            set_l10n_keyboard(keyboard: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_L10N_LANGUAGE parameter.
             *
             * The expected format of this string is the gettext locale names standard:
             *
             * https://www.gnu.org/savannah-checkouts/gnu/gettext/manual/html_node/Locale-Names.html
             *
             * Encoding and variant are (at least for now) not supported. For example,
             * 'pt_BR' is accepted is accepted as the language codes for Brazilian Portuguese
             * but 'pt_BR.utf8' is not.
             * @param language the language
             */
            set_l10n_language(language: string): void;
            /**
             * Set the #OSINFO_INSTALL_CONFIG_PROP_L10N_TIMEZONE parameter.
             *
             * The expected format of this string is the tzdata names standard.
             * @param tz the timezone
             */
            set_l10n_timezone(tz: string): void;
            /**
             * Specify the disk on which drivers to be installed at the end of installation,
             * are available.
             *
             * Please read documentation on #osinfo_install_config_set_target_disk() for
             * explanation on the format of `disk` string.
             *
             * NOTE: Not every install script supports post-installation of drivers. Use
             * #osinfo_install_script_get_can_post_install_drivers() to find out if an
             * install script supports it.
             * @param disk the target disk
             */
            set_post_install_drivers_disk(disk: string): void;
            /**
             * Specify the disk on which drivers to be installed at the end of installation,
             * are available.
             *
             * Please read documentation on #osinfo_install_config_set_avatar_location() for
             * explanation on the format of `location` string.
             *
             * NOTE: Not every install script supports post-installation of drivers. Use
             * #osinfo_install_script_get_can_post_install_drivers() to find out if an
             * install script supports it.
             * @param location the location of avatar
             */
            set_post_install_drivers_location(location: string): void;
            /**
             * Specify the disk on which drivers to be installed at the very beginning of
             * installation, are available. This is usually needed for devices for which the
             * OS in question does not have out of the box support for and devices are
             * required/preferred to be available during actual installation.
             *
             * Please read documentation on #osinfo_install_config_set_target_disk() for
             * explanation on the format of `disk` string.
             *
             * NOTE: Not every install script supports pre-installation of drivers. Use
             * #osinfo_install_script_get_can_pre_install_drivers() to find out if an
             * installer script supports it.
             *
             * NOTE: Microsoft Windows XP requires pre-installation driver files to be
             * present in the script disk under the toplevel directory.
             * @param disk the disk
             */
            set_pre_install_drivers_disk(disk: string): void;
            /**
             * Specify the location on which drivers to be installed at the very beginning of
             * installation, are available. Please read documentation on
             * #osinfo_install_config_set_pre_install_drivers_disk() for more information
             * about pre-installation of drivers.
             *
             * Please read documentation on #osinfo_install_config_set_avatar_location() for
             * explanation on the format of `location` string.
             * @param location the location
             */
            set_pre_install_drivers_location(location: string): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_REG_LOGIN parameter.
             * @param name the registration login
             */
            set_reg_login(name: string): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_REG_PASSWORD parameter.
             * @param password the registration password
             */
            set_reg_password(password: string): void;
            set_reg_product_key(key: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_SCRIPT_DISK parameter.
             *
             * Please read documentation on #osinfo_install_config_set_target_disk() for
             * explanation on the format of `disk` string.
             * @param disk the disk
             */
            set_script_disk(disk: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_TARGET_DISK parameter.
             *
             * Note that the format of this string is dependent on the installer script
             * `config` is going to be used with. You can use
             * #osinfo_install_script_get_path_format() to find out which format
             * does the script expects this string to be in. In case of
             * #OSINFO_PATH_FORMAT_UNIX unix device node names are expected, e.g "/dev/fd0".
             * In case of #OSINFO_PATH_FORMAT_DOS drive letters are expected, e.g "A".
             * @param disk the target disk
             */
            set_target_disk(disk: string): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_ADMIN parameter.
             * @param admin whether the user should be set as administrator or not
             */
            set_user_administrator(admin: boolean): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_AUTOLOGIN parameter.
             * @param autologin whether autologin should be set for the user or not
             */
            set_user_autologin(autologin: boolean): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_LOGIN parameter.
             * @param username the chosen username for the user log into the system
             */
            set_user_login(username: string): void;
            /**
             * Sets the #OSINFO_INSTALL_CONFIG_PROP_USER_PASSWORD parameter
             * @param password the user password to be set
             */
            set_user_password(password: string): void;
            /**
             * Sets the value of #OSINFO_INSTALL_CONFIG_PROP_USER_REALNAME parameter.
             * @param name the user real name to be displayed
             */
            set_user_realname(name: string): void;
        }

        module InstallConfigParam {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                name: string;
                policy: InstallConfigParamPolicy;
                value_map: Datamap;
                valueMap: Datamap;
            }
        }

        class InstallConfigParam extends Entity {
            static $gtype: GObject.GType<InstallConfigParam>;

            // Properties

            /**
             * The name of the configuration parameter.
             */
            get name(): string;
            /**
             * The policy of the configuration parameter.
             */
            get policy(): InstallConfigParamPolicy;
            /**
             * The mapping between generic values and OS-specific values for this
             * configuration parameter
             */
            get value_map(): Datamap;
            set value_map(val: Datamap);
            /**
             * The mapping between generic values and OS-specific values for this
             * configuration parameter
             */
            get valueMap(): Datamap;
            set valueMap(val: Datamap);

            // Constructors

            constructor(properties?: Partial<InstallConfigParam.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string): InstallConfigParam;

            // Methods

            get_name(): string;
            get_policy(): InstallConfigParamPolicy;
            get_value_map(): Datamap;
            is_optional(): boolean;
            is_required(): boolean;
            /**
             * After a call to osinfo_install_config_param_set_value_map(), `datamap` will
             * be used to transform values set for this parameter to OS-specific
             * values. A NULL `datamap` will disable transformations.
             * @param datamap a #OsinfoDatamap to transform values this parameter is set to, or NULL to disable transformations for this parameter
             */
            set_value_map(datamap: Datamap): void;
        }

        module InstallConfigParamList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class InstallConfigParamList extends List {
            static $gtype: GObject.GType<InstallConfigParamList>;

            // Constructors

            constructor(properties?: Partial<InstallConfigParamList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): InstallConfigParamList;
        }

        module InstallScript {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                avatar_format: AvatarFormat;
                avatarFormat: AvatarFormat;
                installation_source: InstallScriptInstallationSource;
                installationSource: InstallScriptInstallationSource;
                path_format: PathFormat;
                pathFormat: PathFormat;
                preferred_injection_method: InstallScriptInjectionMethod;
                preferredInjectionMethod: InstallScriptInjectionMethod;
                product_key_format: string;
                productKeyFormat: string;
                profile: string;
                template_data: string;
                templateData: string;
                template_uri: string;
                templateUri: string;
            }
        }

        class InstallScript extends Entity {
            static $gtype: GObject.GType<InstallScript>;

            // Properties

            get avatar_format(): AvatarFormat;
            get avatarFormat(): AvatarFormat;
            get installation_source(): InstallScriptInstallationSource;
            get installationSource(): InstallScriptInstallationSource;
            get path_format(): PathFormat;
            get pathFormat(): PathFormat;
            get preferred_injection_method(): InstallScriptInjectionMethod;
            set preferred_injection_method(val: InstallScriptInjectionMethod);
            get preferredInjectionMethod(): InstallScriptInjectionMethod;
            set preferredInjectionMethod(val: InstallScriptInjectionMethod);
            get product_key_format(): string;
            get productKeyFormat(): string;
            get profile(): string;
            get template_data(): string;
            get templateData(): string;
            get template_uri(): string;
            get templateUri(): string;

            // Constructors

            constructor(properties?: Partial<InstallScript.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): InstallScript;

            static new_data(id: string, profile: string, templateData: string): InstallScript;

            static new_uri(id: string, profile: string, templateUri: string): InstallScript;

            // Methods

            /**
             * Creates an install script.
             * @param os the os
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @returns the script as string. If you are generating the script for a specific media, it is recommended that you use #osinfo_install_script_generate_for_media() instead. If you are generating the script for a specific tree, it is recommended that you use #osinfo_install_script_generate_for_tree() in instead.
             */
            generate(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;
            /**
             * Asynchronous variant of #osinfo_install_script_generate(). From the callback,
             * call #osinfo_install_script_generate_finish() to conclude this call and get
             * the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_async(os: Os, config: InstallConfig, cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate(). From the callback,
             * call #osinfo_install_script_generate_finish() to conclude this call and get
             * the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_async(
                os: Os,
                config: InstallConfig,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate(). From the callback,
             * call #osinfo_install_script_generate_finish() to conclude this call and get
             * the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_async(
                os: Os,
                config: InstallConfig,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Some install scripts need to pass a command line to the kernel, Such install
             * scripts belong to OSs that provide paths to the kernel and initrd files that
             * can be used to directly boot
             * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
             * the OS in order to pass the needed commandline to it.
             *
             * If you are generating the command line for a specific media, it is
             * recommended that you use
             * #osinfo_install_script_generate_command_line_for_media() instead.
             *
             * If you are generating the command line for a specific tree, it is
             * recommended that you use
             * #osinfo_install_script_generate_command_line_for_tree() instead.
             * @param os the os entity
             * @param config the install script config
             * @returns The generated command line string, NULL otherwise.
             */
            generate_command_line(os: Os, config: InstallConfig): string;
            /**
             * Some install scripts need to pass a command line to the kernel, Such install
             * scripts belong to OSs that provide paths to the kernel and initrd files that
             * can be used to directly boot
             * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
             * the OS in order to pass the needed commandline to it.
             *
             * The media `media` must have been identified successfully using
             * #osinfo_db_identify_media() before calling this function.
             * @param media the media
             * @param config the install script config
             * @returns The generated command line string, NULL otherwise.
             */
            generate_command_line_for_media(media: Media, config: InstallConfig): string;
            /**
             * Some install scripts need to pass a command line to the kernel, Such install
             * scripts belong to OSs that provide paths to the kernel and initrd files that
             * can be used to directly boot
             * (http://wiki.qemu.org/download/qemu-doc.html#direct_005flinux_005fboot)
             * the OS in order to pass the needed commandline to it.
             *
             * The tree `tree` must have been identified successfully using
             * #osinfo_db_identify_tree() before calling this function.
             * @param tree the tree
             * @param config the install script config
             * @returns The generated command line string, NULL otherwise.
             */
            generate_command_line_for_tree(tree: Tree, config: InstallConfig): string;
            generate_finish(res: Gio.AsyncResult): string;
            /**
             * Creates an install script. The media `media` must have been identified
             * successfully using #osinfo_db_identify_media() before calling this function.
             * @param media the media
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @returns the script as string.
             */
            generate_for_media(media: Media, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_media(). From the
             * callback, call #osinfo_install_script_generate_for_media_finish() to
             * conclude this call and get the generated script.
             * @param media the media
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_for_media_async(
                media: Media,
                config: InstallConfig,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_media(). From the
             * callback, call #osinfo_install_script_generate_for_media_finish() to
             * conclude this call and get the generated script.
             * @param media the media
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_for_media_async(
                media: Media,
                config: InstallConfig,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_media(). From the
             * callback, call #osinfo_install_script_generate_for_media_finish() to
             * conclude this call and get the generated script.
             * @param media the media
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_for_media_async(
                media: Media,
                config: InstallConfig,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            generate_for_media_finish(res: Gio.AsyncResult): string;
            /**
             * Creates an install script. The tree `tree` must have been identified
             * successfully using #osinfo_db_identify_tree() before calling this function.
             * @param tree the tree
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @returns the script as string.
             */
            generate_for_tree(tree: Tree, config: InstallConfig, cancellable?: Gio.Cancellable | null): string;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_tree(). From the
             * callback, call #osinfo_install_script_generate_for_tree_finish() to
             * conclude this call and get the generated script.
             * @param tree the tree
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_tree(). From the
             * callback, call #osinfo_install_script_generate_for_tree_finish() to
             * conclude this call and get the generated script.
             * @param tree the tree
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_for_tree(). From the
             * callback, call #osinfo_install_script_generate_for_tree_finish() to
             * conclude this call and get the generated script.
             * @param tree the tree
             * @param config the install script config
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            generate_for_tree_finish(res: Gio.AsyncResult): string;
            /**
             * Creates an install script that is written to the returned file.
             * @param os the os entity
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @returns a file containing the script If you are generating the script for a specific media, it is recommended that you use #osinfo_install_script_generate_output_for_media() instead. If you are generating the script for a specific tree, it is recommended that you use #osinfo_install_script_generate_output_for_tree() instead.
             */
            generate_output(
                os: Os,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Gio.File;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output(). From the
             * callback, call #osinfo_install_script_generate_output_finish() to conclude
             * this call and get the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_output_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_output_async(
                os: Os,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output(). From the
             * callback, call #osinfo_install_script_generate_output_finish() to conclude
             * this call and get the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_output_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_async(
                os: Os,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output(). From the
             * callback, call #osinfo_install_script_generate_output_finish() to conclude
             * this call and get the generated script.
             *
             * If you are generating the script for a specific media, it is recommended that
             * you use #osinfo_install_script_generate_output_for_media_async() instead.
             * @param os the os
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_async(
                os: Os,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File> | void;
            generate_output_finish(res: Gio.AsyncResult): Gio.File;
            /**
             * Creates an install script that is written to the returned file.
             * @param media the media
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @returns a file containing the script.
             */
            generate_output_for_media(
                media: Media,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Gio.File;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_media().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_media_finish() to conclude this
             * call and get the generated file.
             * @param media the media
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_output_for_media_async(
                media: Media,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_media().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_media_finish() to conclude this
             * call and get the generated file.
             * @param media the media
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_for_media_async(
                media: Media,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_media().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_media_finish() to conclude this
             * call and get the generated file.
             * @param media the media
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_for_media_async(
                media: Media,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File> | void;
            generate_output_for_media_finish(res: Gio.AsyncResult): Gio.File;
            /**
             * Creates an install script that is written to the returned file.
             * @param tree the tree
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @returns a file containing the script.
             */
            generate_output_for_tree(
                tree: Tree,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Gio.File;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_tree().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_tree_finish() to conclude this
             * call and get the generated file.
             * @param tree the tree
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             */
            generate_output_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
            ): Promise<Gio.File>;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_tree().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_tree_finish() to conclude this
             * call and get the generated file.
             * @param tree the tree
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous variant of #osinfo_install_script_generate_output_for_tree().
             * From the callback, call
             * #osinfo_install_script_generate_output_for_tree_finish() to conclude this
             * call and get the generated file.
             * @param tree the tree
             * @param config the install script config
             * @param output_dir the directory where the file containing the output script              will be written
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            generate_output_for_tree_async(
                tree: Tree,
                config: InstallConfig,
                output_dir: Gio.File,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<Gio.File> | void;
            generate_output_for_tree_finish(res: Gio.AsyncResult): Gio.File;
            /**
             * Some install scripts have restrictions on the format of the user avatar. Use
             * this method to retrieve those restrictions in the form of an
             * #OsinfoAvatarFormat instance.
             * @returns The avatar format, or NULL if there is no restrictions on the                           format of avatar
             */
            get_avatar_format(): AvatarFormat;
            /**
             * Whether install script can install drivers at the very end of installation
             * This can be used for installing devices which the OS in question does not
             * have out of the box support.
             * @returns TRUE if install script supports post-installable drivers, FALSE otherwise.
             */
            get_can_post_install_drivers(): boolean;
            /**
             * Whether install script can install drivers at the very beginning of
             * installation. This is needed for devices for which the OS in question does
             * not have out of the box support for and devices are required/preferred to be
             * available during actual installation.
             * @returns TRUE if install script supports pre-installable drivers, FALSE otherwise.
             */
            get_can_pre_install_drivers(): boolean;
            /**
             * Get a config param from the config param's list
             * @param name name of the parameter
             * @returns the sought config param, if exists.                           NULL otherwise. This code assumes that the 'id' and 'name' entity properties are the same.
             */
            get_config_param(name: string): InstallConfigParam;
            /**
             * Get the list of valid config parameters for `script`.
             * @returns the list of valid #OsinfoInstallConfigParam parameters. Free with g_list_free() when done. The elements are owned by libosinfo.
             */
            get_config_param_list(): InstallScript[];
            /**
             * Get the list of valid config parameters for `script`.
             * @returns the list of valid #OsinfoInstallConfigParam parameters.
             */
            get_config_params(): InstallConfigParamList;
            /**
             * Some operating systems (as Windows) expect that script filename has
             * particular name to work.
             * @returns the expected script filename
             */
            get_expected_filename(): string;
            /**
             * Retrieve the supported method to inject the script in to the installation process.
             * @returns bitwise-or of supported methods for install script injection.
             */
            get_injection_methods(): InstallScriptInjectionMethod;
            get_installation_source(): InstallScriptInstallationSource;
            /**
             * Some install scripts cannot ensure that they work without an internet connection.
             * @returns TRUE if script needs an internet connection, FALSE otherwise internet connection.
             */
            get_needs_internet(): boolean;
            /**
             * Some operating systems are able to use any script filename, allowing the
             * application to set the filename as desired. libosinfo provides this
             * functionality by set the expected filename's prefix using
             * osinfo_install_script_set_output_prefix() function.
             * @returns the output script filename
             */
            get_output_filename(): string;
            get_output_prefix(): string;
            /**
             * Returns the path format to be used for the files and disks which will
             * be used during the installation.
             * @returns the path format to be used. OSINFO_PATH_FORMAT_UNIX is the          default option.
             */
            get_path_format(): PathFormat;
            /**
             * If install script can install drivers at the end of installation, this
             * function retrieves the requirement about signed status of drivers.
             */
            get_post_install_drivers_signing_req(): DeviceDriverSigningReq;
            /**
             * If install script can install drivers at the very beginning of installation,
             * this function retrieves the requirement about signed status of drivers.
             */
            get_pre_install_drivers_signing_req(): DeviceDriverSigningReq;
            get_preferred_injection_method(): InstallScriptInjectionMethod;
            /**
             * If this function returns a non-NULL string, it means that the `script`
             * requires you to specify product registration key through #OsinfoInstallConfig
             * instance passed to script generation methods.
             *
             * The returned string specifies the expected format of the product key like this:
             *
             * @ - any character
             * % - alphabet
             * # - numeric character
             * $ - alphanumeric character
             *
             * All other characters represent themselves.
             *
             * For example in case of installer for Microsoft Windows XP, you'll get
             * "$$$$$-$$$$$-$$$$$-$$$$$-$$$$$". That means a product key consists of 24
             * alphanumeric characters and 4 '-' characters at (0-based) indices 5, 11, 17
             * and 23.
             * @returns Product key format mask, or NULL.
             */
            get_product_key_format(): string;
            /**
             * Returns a string representing the install script profile that's going to be
             * used.
             *
             * The values supported are "jeos" for minimal installations and "desktop" for
             * workstation/desktop installations.
             */
            get_profile(): string;
            /**
             * Returns the stylesheet data used to construct the install script.
             */
            get_template_data(): string;
            /**
             * Returns the stylesheet URI used to construct the install script.
             */
            get_template_uri(): string;
            /**
             * Returns whether the `script` has the `config_param` searched or not.
             *
             * This code assumes that the 'id' and 'name' entity properties are the same.
             * @param config_param an #OsinfoInstallConfigParam
             */
            has_config_param(config_param: InstallConfigParam): boolean;
            /**
             * Returns whether the `script` has a configuration parameter matching `name` or not.
             * @param name the configuration parameter name
             */
            has_config_param_name(name: string): boolean;
            /**
             * Set the installation source to be used with the `script`.
             * @param source one of the installation sources: OSINFO_INSTALL_SCRIPT_INSTALLATION_SOURCE_MEDIA, OSINFO_INSTALL_SCRIPT_INSTALLATION_SOURCE_NETWORK
             */
            set_installation_source(source: InstallScriptInstallationSource | null): void;
            /**
             * Mind that not all installers support any name for the installer scripts.
             * @param prefix a prefix to be added to the file generated
             */
            set_output_prefix(prefix: string): void;
            /**
             * Set the preferred injection method to be used with the `script`
             * @param method one of the injection methods: OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_CDROM, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_DISK, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_FLOPPY, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_INITRD, OSINFO_INSTALL_SCRIPT_INJECTION_METHOD_WEB
             */
            set_preferred_injection_method(method: InstallScriptInjectionMethod | null): void;
        }

        module InstallScriptList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class InstallScriptList extends List {
            static $gtype: GObject.GType<InstallScriptList>;

            // Constructors

            constructor(properties?: Partial<InstallScriptList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): InstallScriptList;

            // Methods

            /**
             * Construct a new install_script list that is filled with install_scripts
             * from `source`
             * @returns a copy of the install_script list
             */
            new_copy(): InstallScriptList;
            /**
             * Construct a new install_script list that is filled with install_scripts
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the install_script list
             */
            new_filtered(filter: Filter): InstallScriptList;
            /**
             * Construct a new install_script list that is filled with only the
             * install_scripts that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second install_script list to copy
             * @returns an intersection of the two install_script lists
             */
            new_intersection(sourceTwo: InstallScriptList): InstallScriptList;
            /**
             * Construct a new install_script list that is filled with all the
             * install_scripts that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second install_script list to copy
             * @returns a union of the two install_script lists
             */
            new_union(sourceTwo: InstallScriptList): InstallScriptList;
        }

        module List {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                element_type: GObject.GType;
                elementType: GObject.GType;
            }
        }

        abstract class List extends GObject.Object {
            static $gtype: GObject.GType<List>;

            // Properties

            /**
             * The specialization of the list. The list will be
             * restricted to storing #OsinfoEntity objects of
             * the specified type.
             */
            get element_type(): GObject.GType;
            /**
             * The specialization of the list. The list will be
             * restricted to storing #OsinfoEntity objects of
             * the specified type.
             */
            get elementType(): GObject.GType;

            // Constructors

            constructor(properties?: Partial<List.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Adds a new entity to the list.
             * @param entity the entity to add to the list
             */
            add(entity: Entity): void;
            /**
             * Adds all entities from `source` to `list`. Using one
             * of the constructors in a subclass is preferable
             * to this method.
             * @param source the list to add
             */
            add_all(source: List): void;
            /**
             * Adds all entities from `source` which are matched by `filter`. Using one
             * of the constructors in a subclass is preferable
             * to this method.
             * @param source the source for elements
             * @param filter filter to process the source with
             */
            add_filtered(source: List, filter: Filter): void;
            /**
             * Computes the intersection between `sourceOne` and `sourceTwo` and
             * adds the resulting list of entities to the `list`. Using one
             * of the constructors in a subclass is preferable
             * to this method.
             * @param sourceOne the first list to add
             * @param sourceTwo the second list to add
             */
            add_intersection(sourceOne: List, sourceTwo: List): void;
            /**
             * Computes the union between `sourceOne` and `sourceTwo` and
             * adds the resulting list of entities to the `list`. Using one
             * of the constructors in a subclass is preferable
             * to this method.
             * @param sourceOne the first list to add
             * @param sourceTwo the second list to add
             */
            add_union(sourceOne: List, sourceTwo: List): void;
            /**
             * Search the list looking for the entity with a matching
             * unique identifier.
             * @param id the unique identifier
             * @returns the matching entity, or NULL
             */
            find_by_id(id: string): Entity;
            /**
             * Retrieves the type of the subclass of #OsinfoEntity
             * that may be stored in the list
             * @returns the type of entity stored
             */
            get_element_type(): GObject.GType;
            /**
             * Retrieve a linked list of all elements in the list.
             * @returns the list elements
             */
            get_elements(): Entity[];
            /**
             * Retrieves the number of elements currently stored
             * in the list
             * @returns the list length
             */
            get_length(): number;
            /**
             * Retrieves the element in the list at position `idx`. If
             * `idx` is less than zero, or greater than the number of
             * elements in the list, the results are undefined.
             * @param idx the list position to fetch
             * @returns the list element or %NULL
             */
            get_nth(idx: number): Entity;
            /**
             * Construct a new list that is filled with elements from `source`
             * @returns a copy of the list
             */
            new_copy(): List;
            /**
             * Construct a new list that is filled with elements from `source` that
             * match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the list
             */
            new_filtered(filter: Filter): List;
            /**
             * Construct a new list that is filled with only the elements
             * that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second list to copy
             * @returns an intersection of the two lists
             */
            new_intersection(sourceTwo: List): List;
            /**
             * Construct a new list that is filled with all the that are present in
             * either `sourceOne` and `sourceTwo`. `sourceOne` and `sourceTwo` must be of
             * the same type.
             * @param sourceTwo the second list to copy
             * @returns a union of the two lists
             */
            new_union(sourceTwo: List): List;
        }

        module Loader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Loader extends GObject.Object {
            static $gtype: GObject.GType<Loader>;

            // Constructors

            constructor(properties?: Partial<Loader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Loader;

            // Methods

            /**
             * Retrieves the database being populated
             * @returns the database
             */
            get_db(): Db;
            process_default_path(): void;
            /**
             * Loads data from the local path.
             */
            process_local_path(): void;
            /**
             * Loads data from the specified path. If the path
             * points to a file, that will be loaded as XML
             * Otherwise it can point to a directory which will
             * be recursively traversed, loading all files as XML.
             * @param path the fully qualified path
             */
            process_path(path: string): void;
            /**
             * Loads data from the system path.
             */
            process_system_path(): void;
            /**
             * Loads data from the specified URI. If the URI
             * points to a file, that will be loaded as XML
             * Otherwise it can point to a directory which will
             * be recursively traversed, loading all files as XML.
             * @param uri the data source URI
             */
            process_uri(uri: string): void;
            /**
             * Loads data from user path.
             */
            process_user_path(): void;
        }

        module Media {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                application_id: string;
                applicationId: string;
                architecture: string;
                eject_after_install: boolean;
                ejectAfterInstall: boolean;
                initrd_path: string;
                initrdPath: string;
                installer: boolean;
                installer_reboots: number;
                installerReboots: number;
                installer_script: boolean;
                installerScript: boolean;
                kernel_path: string;
                kernelPath: string;
                languages: string[];
                live: boolean;
                os: Os;
                publisher_id: string;
                publisherId: string;
                system_id: string;
                systemId: string;
                url: string;
                volume_id: string;
                volumeId: string;
                volume_size: number;
                volumeSize: number;
            }
        }

        class Media extends Entity {
            static $gtype: GObject.GType<Media>;

            // Properties

            /**
             * Expected application ID (regular expression) for ISO9660 image/device.
             */
            get application_id(): string;
            set application_id(val: string);
            /**
             * Expected application ID (regular expression) for ISO9660 image/device.
             */
            get applicationId(): string;
            set applicationId(val: string);
            /**
             * The target hardware architecture of this media.
             */
            get architecture(): string;
            set architecture(val: string);
            /**
             * Whether the media should be ejected after the installation process.
             *
             * Some distros need their media to not be ejected after the final reboot
             * during its installation process as some packages are installed after the
             * reboot (which may cause the media to be ejected, depending on the
             * application).
             */
            get eject_after_install(): boolean;
            set eject_after_install(val: boolean);
            /**
             * Whether the media should be ejected after the installation process.
             *
             * Some distros need their media to not be ejected after the final reboot
             * during its installation process as some packages are installed after the
             * reboot (which may cause the media to be ejected, depending on the
             * application).
             */
            get ejectAfterInstall(): boolean;
            set ejectAfterInstall(val: boolean);
            /**
             * The path to the initrd image in the install tree.
             */
            get initrd_path(): string;
            set initrd_path(val: string);
            /**
             * The path to the initrd image in the install tree.
             */
            get initrdPath(): string;
            set initrdPath(val: string);
            /**
             * Whether media provides an installer for an OS.
             */
            get installer(): boolean;
            set installer(val: boolean);
            /**
             * If media is an installer, this property indicates the number of reboots
             * the installer takes before installation is complete.
             *
             * This property is not applicable to media that has no installer. You can
             * use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
             * that.
             *
             * Warning: Some media allow you to install from live sessions, in which
             * case number of reboots *alone* is not a reliable method for tracking
             * installation.
             */
            get installer_reboots(): number;
            set installer_reboots(val: number);
            /**
             * If media is an installer, this property indicates the number of reboots
             * the installer takes before installation is complete.
             *
             * This property is not applicable to media that has no installer. You can
             * use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
             * that.
             *
             * Warning: Some media allow you to install from live sessions, in which
             * case number of reboots *alone* is not a reliable method for tracking
             * installation.
             */
            get installerReboots(): number;
            set installerReboots(val: number);
            /**
             * Whether the media supports installation via an install-script.
             *
             * Some distros provide a few different medias and not all the medias support
             * installation via an install script.
             */
            get installer_script(): boolean;
            set installer_script(val: boolean);
            /**
             * Whether the media supports installation via an install-script.
             *
             * Some distros provide a few different medias and not all the medias support
             * installation via an install script.
             */
            get installerScript(): boolean;
            set installerScript(val: boolean);
            /**
             * The path to the kernel image in the install tree.
             */
            get kernel_path(): string;
            set kernel_path(val: string);
            /**
             * The path to the kernel image in the install tree.
             */
            get kernelPath(): string;
            set kernelPath(val: string);
            /**
             * If media is an installer, this property indicates the languages that
             * can be used during automatic installations.
             *
             * On media that are not installers, this property will indicate the
             * languages that the user interface can be displayed in.
             * Use #osinfo_media_get_installer(or OsinfoMedia::installer) to know
             * if the media is an installer or not.
             */
            get languages(): string[];
            /**
             * Whether media can boot directly an OS without any installations.
             */
            get live(): boolean;
            set live(val: boolean);
            /**
             * Os information for the current media. For media stored in an
             * #OsinfoDb, it will be filled when the database is loaded, otherwise
             * the property will be filled after a successful call to
             * osinfo_db_identify_media().
             */
            get os(): Os;
            set os(val: Os);
            /**
             * Expected publisher ID (regular expression) for ISO9660 image/device.
             */
            get publisher_id(): string;
            set publisher_id(val: string);
            /**
             * Expected publisher ID (regular expression) for ISO9660 image/device.
             */
            get publisherId(): string;
            set publisherId(val: string);
            /**
             * Expected system ID (regular expression) for ISO9660 image/device.
             */
            get system_id(): string;
            set system_id(val: string);
            /**
             * Expected system ID (regular expression) for ISO9660 image/device.
             */
            get systemId(): string;
            set systemId(val: string);
            /**
             * The URL to this media.
             */
            get url(): string;
            set url(val: string);
            /**
             * Expected volume ID (regular expression) for ISO9660 image/device.
             */
            get volume_id(): string;
            set volume_id(val: string);
            /**
             * Expected volume ID (regular expression) for ISO9660 image/device.
             */
            get volumeId(): string;
            set volumeId(val: string);
            /**
             * Expected volume size, in bytes for ISO9660 image/device.
             */
            get volume_size(): number;
            set volume_size(val: number);
            /**
             * Expected volume size, in bytes for ISO9660 image/device.
             */
            get volumeSize(): number;
            set volumeSize(val: number);

            // Constructors

            constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, architecture: string): Media;

            // Static methods

            /**
             * Creates a new #OsinfoMedia for installation media at `location`. The `location`
             * could be a http:// or a https:// URI or a local path.
             *
             * NOTE: Currently this only works for ISO images/devices.
             * @param location the location of an installation media
             * @param cancellable a #GCancellable, or %NULL
             */
            static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Media;
            /**
             * Asynchronous variant of #osinfo_media_create_from_location.
             * @param location the location of an installation media
             * @param priority the I/O priority of the request
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            static create_from_location_async(
                location: string,
                priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Media> | null,
            ): void;
            /**
             * Finishes an asynchronous media object creation process started with
             * #osinfo_media_create_from_location_async.
             * @param res a #GAsyncResult
             */
            static create_from_location_finish(res: Gio.AsyncResult): Media;
            /**
             * Creates a new #OsinfoMedia for installation media at `location`. The `location`
             * could be a http:// or a https:// URI or a local path.
             *
             * NOTE: Currently this only works for ISO images/devices.
             * @param location the location of an installation media
             * @param cancellable a #GCancellable, or %NULL
             * @param flags An #OsinfoMediaDetectFlag, or 0.
             */
            static create_from_location_with_flags(
                location: string,
                cancellable: Gio.Cancellable | null,
                flags: number,
            ): Media;
            /**
             * Asynchronous variant of #osinfo_media_create_from_location_with_flags.
             * @param location the location of an installation media
             * @param priority the I/O priority of the request
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             * @param flags An #OsinfoMediaDetectFlag, or 0.
             */
            static create_from_location_with_flags_async(
                location: string,
                priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<Media> | null,
                flags: number,
            ): void;
            /**
             * Finishes an asynchronous media object creation process started with
             * #osinfo_media_create_from_location_async.
             * @param res a #GAsyncResult
             */
            static create_from_location_with_flags_finish(res: Gio.AsyncResult): Media;

            // Methods

            /**
             * Adds an `script` to the specified `media`
             * @param script an #OsinfoInstallScript instance
             */
            add_install_script(script: InstallScript): void;
            /**
             * If `media` is an ISO9660 image/device, this function retrieves the expected
             * application ID.
             *
             * Note: In practice, this will usually not be the exact copy of the application
             * ID string on the ISO image/device but rather a regular expression that
             * matches it.
             * @returns the application id, or NULL
             */
            get_application_id(): string;
            /**
             * Retrieves the target hardware architecture of the OS `media` provides.
             * @returns the hardware architecture, or NULL
             */
            get_architecture(): string;
            /**
             * Whether `media` should ejected after the installation procces.
             * @returns #TRUE if media should be ejected, #FALSE otherwise
             */
            get_eject_after_install(): boolean;
            /**
             * Retrieves the path to the initrd image in the install tree.
             *
             * Note: This only applies to installer medias of 'linux' OS family.
             * @returns the path to initrd image, or NULL
             */
            get_initrd_path(): string;
            get_install_script_list(): InstallScriptList;
            /**
             * Whether `media` provides an installer for an OS.
             * @returns #TRUE if media is installer, #FALSE otherwise
             */
            get_installer(): boolean;
            /**
             * If media is an installer, this method retrieves the number of reboots the
             * installer takes before installation is complete.
             *
             * This function is not supposed to be called on media that has no installer.
             * You can use #osinfo_media_get_installer(or OsinfoMedia::installer) to check
             * that.
             *
             * Warning: Some media allow you to install from live sessions, in which case
             * number of reboots *alone* is not a reliable method for tracking installation.
             * @returns the number of installer reboots or -1 if media is not an installer
             */
            get_installer_reboots(): number;
            /**
             * Retrieves the path to the kernel image in the install tree.
             *
             * Note: This only applies to installer medias of 'linux' OS family.
             * @returns the path to kernel image, or NULL
             */
            get_kernel_path(): string;
            /**
             * If media is an installer, this property indicates the languages that
             * can be used during automatic installations.
             *
             * On media that are not installers, this property will indicate the
             * languages that the user interface can be displayed in.
             * Use #osinfo_media_get_installer(or OsinfoMedia::installer) to know
             * if the media is an installer or not.
             * @returns a #GList containing the list of the UI languages this media supports. The list must be freed with g_list_free() when no longer needed. If the supported languages are unknown, NULL will be returned.
             */
            get_languages(): string[];
            /**
             * Whether `media` can boot directly an OS without any installations.
             * @returns #TRUE if media is live, #FALSE otherwise
             */
            get_live(): boolean;
            get_os(): Os;
            /**
             * Gets the variants of the associated operating system.
             * @returns the operating system variant, or NULL
             */
            get_os_variants(): OsVariantList;
            /**
             * If `media` is an ISO9660 image/device, this function retrieves the expected
             * publisher ID.
             *
             * Note: In practice, this will usually not be the exact copy of the publisher
             * ID string on the ISO image/device but rather a regular expression that
             * matches it.
             * @returns the publisher id, or NULL
             */
            get_publisher_id(): string;
            /**
             * If `media` is an ISO9660 image/device, this function retrieves the expected
             * system ID.
             *
             * Note: In practice, this will usually not be the exact copy of the system ID
             * string on the ISO image/device but rather a regular expression that matches
             * it.
             * @returns the system id, or NULL
             */
            get_system_id(): string;
            /**
             * The URL to the `media`
             * @returns the URL, or NULL
             */
            get_url(): string;
            /**
             * If `media` is an ISO9660 image/device, this function retrieves the expected
             * volume ID.
             *
             * Note: In practice, this will usually not be the exact copy of the volume ID
             * string on the ISO image/device but rather a regular expression that matches
             * it.
             * @returns the volume id, or NULL
             */
            get_volume_id(): string;
            get_volume_size(): number;
            is_bootable(): boolean;
            /**
             * Determines whether the metadata for the unidentified `media` is a match
             * for the `reference` media.
             *
             * The metadata in the unidentified `media` must be literal strings,
             * while the metadata in the `reference` media must be regular expressions.
             * @param reference a reference #OsinfoMedia instance
             * @returns #TRUE if @media is a match for @reference. #FALSE otherwise
             */
            matches(reference: Media): boolean;
            /**
             * Whether `media` supports installation using install scripts.
             * @returns #TRUE if install-scripts are supported by the media, #FALSE otherwise
             */
            supports_installer_script(): boolean;
        }

        module MediaList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class MediaList extends List {
            static $gtype: GObject.GType<MediaList>;

            // Constructors

            constructor(properties?: Partial<MediaList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MediaList;

            // Methods

            /**
             * Construct a new media list that is filled with medias
             * from `source`
             * @returns a copy of the media list
             */
            new_copy(): MediaList;
            /**
             * Construct a new media list that is filled with medias
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the media list
             */
            new_filtered(filter: Filter): MediaList;
            /**
             * Construct a new media list that is filled with only the
             * medias that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second media list to copy
             * @returns an intersection of the two media lists
             */
            new_intersection(sourceTwo: MediaList): MediaList;
            /**
             * Construct a new media list that is filled with all the
             * medias that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second media list to copy
             * @returns a union of the two media lists
             */
            new_union(sourceTwo: MediaList): MediaList;
        }

        module Os {
            // Constructor properties interface

            interface ConstructorProps extends Product.ConstructorProps {
                cloud_image_username: string;
                cloudImageUsername: string;
                distro: string;
                family: string;
                kernel_url_argument: string;
                kernelUrlArgument: string;
            }
        }

        class Os extends Product {
            static $gtype: GObject.GType<Os>;

            // Properties

            /**
             * The username to be passed to the cloud-init program.
             */
            get cloud_image_username(): string;
            /**
             * The username to be passed to the cloud-init program.
             */
            get cloudImageUsername(): string;
            /**
             * The generic distro this OS belongs to, for example fedora, windows,
             * solaris, freebsd etc.
             */
            get distro(): string;
            /**
             * The generic family this OS belongs to, based upon its kernel,
             * for example linux, winnt, solaris, freebsd etc.
             */
            get family(): string;
            /**
             * The argument to be passed to kernel command line when performing a
             * tree based installation of this OS.
             */
            get kernel_url_argument(): string;
            /**
             * The argument to be passed to kernel command line when performing a
             * tree based installation of this OS.
             */
            get kernelUrlArgument(): string;

            // Constructors

            constructor(properties?: Partial<Os.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): Os;

            // Methods

            /**
             * Associated a device with an operating system.  The
             * returned #OsinfoDeviceLink can be used to record
             * extra metadata against the link
             * @param dev the device to associate with
             * @returns the device association
             */
            add_device(dev: Device): DeviceLink;
            /**
             * Adds `driver` to the list of device drivers of operating system `os`.
             * @param driver the device driver to add
             */
            add_device_driver(driver: DeviceDriver): void;
            /**
             * Adds `firmware` to the list of firmwares of operating system `os`.
             * @param firmware the firmware to add
             */
            add_firmware(firmware: Firmware): void;
            /**
             * Adds an installed image `image` to operating system `os`.
             * @param image the image to add
             */
            add_image(image: Image): void;
            /**
             * Adds `script` to the list of scripts of operating system `os`.
             * @param script the install script to add
             */
            add_install_script(script: InstallScript): void;
            /**
             * Adds `resources` to list of maximum resources of operating system `os`.
             * @param resources the resources to add
             */
            add_maximum_resources(resources: Resources): void;
            /**
             * Adds installation media `media` to operating system `os`.
             * @param media the media to add
             */
            add_media(media: Media): void;
            /**
             * Adds `resources` to list of minimum resources of operating system `os`.
             * @param resources the resources to add
             */
            add_minimum_resources(resources: Resources): void;
            /**
             * Adds `resources` to list of resources needed for network installing an
             * operating system `os`.
             * @param resources the resources to add
             */
            add_network_install_resources(resources: Resources): void;
            /**
             * Adds `resources` to list of recommended resources of operating system `os`.
             * @param resources the resources to add
             */
            add_recommended_resources(resources: Resources): void;
            /**
             * Adds installation tree `tree` to operating system `os`.
             * @param tree the tree to add
             */
            add_tree(tree: Tree): void;
            /**
             * Adds a variant `variant` to operating system `os`.
             * @param variant the variant to add
             */
            add_variant(variant: OsVariant): void;
            find_install_script(profile: string): InstallScript;
            /**
             * Get all devicelinks matching a given filter but unlike
             * osinfo_os_get_device_links this function also retrieves devices from all
             * derived and cloned operating systems.
             * @param filter an optional device property filter
             * @returns A list of OsinfoDeviceLink
             */
            get_all_device_links(filter?: Filter | null): DeviceLinkList;
            /**
             * Get all devices matching a given filter but unlike osinfo_os_get_devices
             * this function also retrieves devices from all derived and cloned operating
             * systems.
             * @param filter an optional device property filter
             * @returns A list of devices
             */
            get_all_devices(filter?: Filter | null): DeviceList;
            /**
             * Gets the username expected to be passed to the cloud image when performing
             * installation.
             * @returns the username, if present. Otherwise, NULL.
             */
            get_cloud_image_username(): string;
            /**
             * Get the complete firmwares matching a given filter, including the non-supported ones.
             * @param filter an optional firmware property filter
             * @returns A list of firmwares
             */
            get_complete_firmware_list(filter?: Filter | null): FirmwareList;
            /**
             * Gets list of all available device drivers for OS `os`.
             * @returns A list of device drivers
             */
            get_device_drivers(): DeviceDriverList;
            /**
             * Gets list of the highest priority device drivers for OS `os`.
             * @returns A list of device drivers
             */
            get_device_drivers_prioritized(): DeviceDriverList;
            /**
             * Get all devices matching a given filter. The filter
             * matches against the links, not the devices.
             * @param filter an optional device property filter
             * @returns A list of device links
             */
            get_device_links(filter?: Filter | null): DeviceLinkList;
            /**
             * Get all devices matching a given filter
             * @param filter an optional device property filter
             * @returns A list of devices
             */
            get_devices(filter?: Filter | null): DeviceList;
            /**
             * A utility function that gets devices found from the list of devices
             * `os` supports, for which the value of `property` is `value`.
             * @param property the property of interest
             * @param value the required value of property @property
             * @param inherited Should devices from inherited and cloned OSs be included in the search.
             * @returns The found devices
             */
            get_devices_by_property(property: string, value: string, inherited: boolean): DeviceList;
            /**
             * Retrieves the generic family the OS `os` belongs to, for example fedora,
             * ubuntu, windows, solaris, freebsd etc.
             * @returns the distro of this os
             */
            get_distro(): string;
            /**
             * Retrieves the generic family the OS `os` belongs to, based upon its kernel,
             * for example linux, winnt, solaris, freebsd etc.
             * @returns the family of this os
             */
            get_family(): string;
            /**
             * Get all the supported firmwares matching a given filter
             * @param filter an optional firmware property filter
             * @returns A list of firmwares
             */
            get_firmware_list(filter?: Filter | null): FirmwareList;
            /**
             * Get all installed images associated with operating system `os`.
             * @returns A list of images
             */
            get_image_list(): ImageList;
            get_install_script_list(): InstallScriptList;
            /**
             * Gets the argument expected to be passed to the kernel command line when
             * performing a tree based installation.
             * @returns the kernel url argument, if present. Otherwise, NULL.
             */
            get_kernel_url_argument(): string;
            /**
             * Get the list of maximum resources for the operating system `os`.
             * @returns A list of resources
             */
            get_maximum_resources(): ResourcesList;
            /**
             * Get all installation medias associated with operating system `os`.
             * @returns A list of medias
             */
            get_media_list(): MediaList;
            /**
             * Get the list of minimum required resources for the operating system `os`.
             * @returns A list of resources
             */
            get_minimum_resources(): ResourcesList;
            /**
             * Get the list of resources needed for network installing an operating system
             * `os`.
             * @returns A list of resources
             */
            get_network_install_resources(): ResourcesList;
            /**
             * Get the list of recommended resources for the operating system `os`.
             * @returns A list of resources
             */
            get_recommended_resources(): ResourcesList;
            /**
             * Use this to determine the release status of the `os`.
             * @returns release status of @os.
             */
            get_release_status(): ReleaseStatus;
            /**
             * Get all installation trees associated with operating system `os`.
             * @returns A list of trees
             */
            get_tree_list(): TreeList;
            /**
             * Gets all known variants of operating system `os`.
             * @returns A list of variants
             */
            get_variant_list(): OsVariantList;
        }

        module OsList {
            // Constructor properties interface

            interface ConstructorProps extends ProductList.ConstructorProps {}
        }

        class OsList extends ProductList {
            static $gtype: GObject.GType<OsList>;

            // Constructors

            constructor(properties?: Partial<OsList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): OsList;

            // Methods

            /**
             * Construct a new os list that is filled with oss
             * from `source`
             * @returns a copy of the os list
             */
            new_copy(): OsList;
            /**
             * Construct a new os list that is filled with oss
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the os list
             */
            new_filtered(filter: Filter): OsList;
            /**
             * Construct a new os list that is filled with only the
             * oss that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second os list to copy
             * @returns an intersection of the two os lists
             */
            new_intersection(sourceTwo: OsList): OsList;
            /**
             * Construct a new os list that is filled with all the
             * oss that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second os list to copy
             * @returns a union of the two os lists
             */
            new_union(sourceTwo: OsList): OsList;
        }

        module OsVariant {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                name: string;
            }
        }

        class OsVariant extends Entity {
            static $gtype: GObject.GType<OsVariant>;

            // Properties

            /**
             * The name to this variant.
             */
            get name(): string;
            set name(val: string);

            // Constructors

            constructor(properties?: Partial<OsVariant.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): OsVariant;

            // Methods

            /**
             * The name of the `variant`
             * @returns the name, or NULL
             */
            get_name(): string;
        }

        module OsVariantList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class OsVariantList extends List {
            static $gtype: GObject.GType<OsVariantList>;

            // Constructors

            constructor(properties?: Partial<OsVariantList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): OsVariantList;
        }

        module Platform {
            // Constructor properties interface

            interface ConstructorProps extends Product.ConstructorProps {}
        }

        class Platform extends Product {
            static $gtype: GObject.GType<Platform>;

            // Constructors

            constructor(properties?: Partial<Platform.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string): Platform;

            // Methods

            /**
             * Associate a device with a platform. The returned #OsinfoDeviceLink
             * can be used to record extra metadata against the link
             * @param dev the device to associate
             * @returns the device association
             */
            add_device(dev: Device): DeviceLink;
            /**
             * Get all platforms matching a given filter but unlike
             * osinfo_platform_get_devices this function also retrieves devices from
             * all derived and upgraded platforms.
             * @param filter an optional device property filter
             * @returns A list of devices
             */
            get_all_devices(filter?: Filter | null): DeviceList;
            /**
             * Retrieve all the associated devices matching the filter.
             * The filter matches against the link, not the device.
             * @param filter an optional filter
             * @returns a list of #OsinfoDevice entities
             */
            get_device_links(filter?: Filter | null): DeviceLinkList;
            /**
             * Retrieve all the associated devices matching the filter.
             * The filter matches against the device, not the link.
             * @param filter an optional filter
             * @returns a list of #OsinfoDevice entities
             */
            get_devices(filter?: Filter | null): DeviceList;
        }

        module PlatformList {
            // Constructor properties interface

            interface ConstructorProps extends ProductList.ConstructorProps {}
        }

        class PlatformList extends ProductList {
            static $gtype: GObject.GType<PlatformList>;

            // Constructors

            constructor(properties?: Partial<PlatformList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): PlatformList;

            // Methods

            /**
             * Construct a new platform list that is filled with platforms
             * from `source`
             * @returns a copy of the platform list
             */
            new_copy(): PlatformList;
            /**
             * Construct a new platform list that is filled with platforms
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the platform list
             */
            new_filtered(filter: Filter): PlatformList;
            /**
             * Construct a new platform list that is filled with only the
             * platforms that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second platform list to copy
             * @returns an intersection of the two platform lists
             */
            new_intersection(sourceTwo: PlatformList): PlatformList;
            /**
             * Construct a new platform list that is filled with all the
             * platforms that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second platform list to copy
             * @returns a union of the two platform lists
             */
            new_union(sourceTwo: PlatformList): PlatformList;
        }

        module Product {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                codename: string;
                logo: string;
                name: string;
                short_id: string;
                shortId: string;
                vendor: string;
                version: string;
            }
        }

        abstract class Product extends Entity {
            static $gtype: GObject.GType<Product>;

            // Properties

            /**
             * The codename of this product.
             */
            get codename(): string;
            /**
             * The URI of the logo of the product.
             */
            get logo(): string;
            /**
             * The name of this product.
             */
            get name(): string;
            /**
             * The short ID of this product.
             */
            get short_id(): string;
            /**
             * The short ID of this product.
             */
            get shortId(): string;
            /**
             * The Vendor of this product.
             */
            get vendor(): string;
            /**
             * The version of the product.
             */
            get version(): string;

            // Constructors

            constructor(properties?: Partial<Product.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Add an association between two products
             * @param relshp the relationship
             * @param otherproduct the product to relate to
             */
            add_related(relshp: ProductRelationship | null, otherproduct: Product): void;
            get_codename(): string;
            get_eol_date(): GLib.Date;
            get_eol_date_string(): string;
            get_logo(): string;
            get_name(): string;
            /**
             * Get a list of products satisfying the requested
             * relationship
             * @param relshp the relationship to query
             * @returns a list of related products
             */
            get_related(relshp: ProductRelationship | null): ProductList;
            get_release_date(): GLib.Date;
            get_release_date_string(): string;
            get_short_id(): string;
            /**
             * Retrieve all the short-ids associated with the product.
             * @returns the list of short-ids.
             */
            get_short_id_list(): string[];
            get_vendor(): string;
            get_version(): string;
        }

        module ProductFilter {
            // Constructor properties interface

            interface ConstructorProps extends Filter.ConstructorProps {}
        }

        class ProductFilter extends Filter {
            static $gtype: GObject.GType<ProductFilter>;

            // Constructors

            constructor(properties?: Partial<ProductFilter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ProductFilter;

            // Methods

            /**
             * Adds a constraint that matches products which
             * have a relationship `relshp` with `product`. Multiple constraints
             * can be set for the same `relshp` or `product,` in which case
             * all must match
             * @param relshp the relationship to filter on
             * @param product the target product to filter on
             */
            add_product_constraint(relshp: ProductRelationship | null, product: Product): number;
            add_support_date_constraint(when: GLib.Date): void;
            /**
             * Remove all constraints for the relationship `relshp`
             * @param relshp the relationship to clear
             */
            clear_product_constraint(relshp: ProductRelationship | null): void;
            /**
             * Remove all relationship constraints
             */
            clear_product_constraints(): void;
            /**
             * Retrieve a list of all operating systems that are
             * the target of constraint for the  relationship
             * `relshp`.
             * @param relshp a relationship to query
             * @returns a list of operating systems
             */
            get_product_constraint_values(relshp: ProductRelationship | null): Product[];
        }

        module ProductList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class ProductList extends List {
            static $gtype: GObject.GType<ProductList>;

            // Constructors

            constructor(properties?: Partial<ProductList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ProductList;

            // Methods

            /**
             * Construct a new os list that is filled with oss
             * from `source`
             * @returns a copy of the os list
             */
            new_copy(): ProductList;
            /**
             * Construct a new os list that is filled with oss
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the os list
             */
            new_filtered(filter: Filter): ProductList;
            /**
             * Construct a new os list that is filled with only the
             * oss that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second os list to copy
             * @returns an intersection of the two os lists
             */
            new_intersection(sourceTwo: ProductList): ProductList;
            /**
             * Construct a new os list that is filled with all the
             * oss that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second os list to copy
             * @returns a union of the two os lists
             */
            new_union(sourceTwo: ProductList): ProductList;
        }

        module Resources {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                architecture: string;
                cpu: number;
                n_cpus: number;
                nCpus: number;
                ram: number;
                storage: number;
            }
        }

        class Resources extends Entity {
            static $gtype: GObject.GType<Resources>;

            // Properties

            /**
             * The target hardware architecture to which these resources applies.
             */
            get architecture(): string;
            /**
             * The CPU frequency in hertz (Hz).
             */
            get cpu(): number;
            set cpu(val: number);
            /**
             * The number of CPUs.
             */
            get n_cpus(): number;
            set n_cpus(val: number);
            /**
             * The number of CPUs.
             */
            get nCpus(): number;
            set nCpus(val: number);
            /**
             * The amount of Random Access Memory (RAM) in bytes.
             */
            get ram(): number;
            set ram(val: number);
            /**
             * The amount of storage space in bytes.
             */
            get storage(): number;
            set storage(val: number);

            // Constructors

            constructor(properties?: Partial<Resources.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, architecture: string): Resources;

            // Methods

            /**
             * Retrieves the target hardware architecture to which `resources` applies. Some
             * operating systems specify the same requirements and recommendations for all
             * architectures. In such cases, the string returned by this call will be
             * #OSINFO_ARCHITECTURE_ALL.
             * @returns the hardware architecture.
             */
            get_architecture(): string;
            /**
             * Retrieves the CPU frequency in hertz (Hz). Divide the value by #OSINFO_MEGAHERTZ if
             * you need this value in megahertz (MHz).
             * @returns the CPU frequency, or -1.
             */
            get_cpu(): number;
            /**
             * Retrieves the number of CPUs.
             * @returns the number of CPUs, or -1.
             */
            get_n_cpus(): number;
            /**
             * Retrieves the amount of Random Access Memory (RAM) in bytes. Divide the value
             * by #OSINFO_MEBIBYTES if you need this value in mebibytes.
             * @returns the amount of RAM, or -1.
             */
            get_ram(): number;
            /**
             * Retrieves the amount of storage space in bytes. Divide the value by
             * #OSINFO_GIBIBYTES if you need this value in gibibytes.
             * @returns the amount of storage, or -1.
             */
            get_storage(): number;
            /**
             * Sets the CPU frequency.
             * @param cpu the CPU frequency in hertz (Hz)
             */
            set_cpu(cpu: number): void;
            /**
             * Sets the number of CPUs.
             * @param n_cpus the number of CPUs
             */
            set_n_cpus(n_cpus: number): void;
            /**
             * Sets the amount of RAM in bytes.
             * @param ram the amount of ram in bytes
             */
            set_ram(ram: number): void;
            /**
             * Sets the amount of storage space.
             * @param storage the amount of storage in bytes
             */
            set_storage(storage: number): void;
        }

        module ResourcesList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class ResourcesList extends List {
            static $gtype: GObject.GType<ResourcesList>;

            // Constructors

            constructor(properties?: Partial<ResourcesList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ResourcesList;

            // Methods

            /**
             * Construct a new resources list that is filled with resources instances
             * from `source`
             * @returns a copy of the resources list
             */
            new_copy(): ResourcesList;
            /**
             * Construct a new resources list that is filled with resources instances
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the resources list
             */
            new_filtered(filter: Filter): ResourcesList;
            /**
             * Construct a new resources list that is filled with only the
             * resources instances that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second resources list to copy
             * @returns an intersection of the two resources lists
             */
            new_intersection(sourceTwo: ResourcesList): ResourcesList;
            /**
             * Construct a new resources list that is filled with all the
             * resources instances that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second resources list to copy
             * @returns a union of the two resources lists
             */
            new_union(sourceTwo: ResourcesList): ResourcesList;
        }

        module Tree {
            // Constructor properties interface

            interface ConstructorProps extends Entity.ConstructorProps {
                architecture: string;
                boot_iso_path: string;
                bootIsoPath: string;
                has_treeinfo: boolean;
                hasTreeinfo: boolean;
                initrd_path: string;
                initrdPath: string;
                kernel_path: string;
                kernelPath: string;
                os: Os;
                treeinfo_arch: string;
                treeinfoArch: string;
                treeinfo_family: string;
                treeinfoFamily: string;
                treeinfo_variant: string;
                treeinfoVariant: string;
                treeinfo_version: string;
                treeinfoVersion: string;
                url: string;
            }
        }

        class Tree extends Entity {
            static $gtype: GObject.GType<Tree>;

            // Properties

            /**
             * The target hardware architecture of this tree.
             */
            get architecture(): string;
            set architecture(val: string);
            /**
             * The path to the boot ISO in the install tree
             */
            get boot_iso_path(): string;
            set boot_iso_path(val: string);
            /**
             * The path to the boot ISO in the install tree
             */
            get bootIsoPath(): string;
            set bootIsoPath(val: string);
            /**
             * Whether the tree has treeinfo or not
             */
            get has_treeinfo(): boolean;
            set has_treeinfo(val: boolean);
            /**
             * Whether the tree has treeinfo or not
             */
            get hasTreeinfo(): boolean;
            set hasTreeinfo(val: boolean);
            /**
             * The path to the initrd image in the install tree.
             */
            get initrd_path(): string;
            set initrd_path(val: string);
            /**
             * The path to the initrd image in the install tree.
             */
            get initrdPath(): string;
            set initrdPath(val: string);
            /**
             * The path to the kernel image in the install tree.
             */
            get kernel_path(): string;
            set kernel_path(val: string);
            /**
             * The path to the kernel image in the install tree.
             */
            get kernelPath(): string;
            set kernelPath(val: string);
            /**
             * Os information for the current tree. For tree stored in an
             * #OsinfoDb, it will be filled when the database is loaded, otherwise
             * the property will be filled after a successful call to
             * osinfo_db_identify_tree().
             */
            get os(): Os;
            set os(val: Os);
            /**
             * The treeinfo arch
             */
            get treeinfo_arch(): string;
            set treeinfo_arch(val: string);
            /**
             * The treeinfo arch
             */
            get treeinfoArch(): string;
            set treeinfoArch(val: string);
            /**
             * The treeinfo family
             */
            get treeinfo_family(): string;
            set treeinfo_family(val: string);
            /**
             * The treeinfo family
             */
            get treeinfoFamily(): string;
            set treeinfoFamily(val: string);
            /**
             * The treeinfo variant
             */
            get treeinfo_variant(): string;
            set treeinfo_variant(val: string);
            /**
             * The treeinfo variant
             */
            get treeinfoVariant(): string;
            set treeinfoVariant(val: string);
            /**
             * The treeinfo version
             */
            get treeinfo_version(): string;
            set treeinfo_version(val: string);
            /**
             * The treeinfo version
             */
            get treeinfoVersion(): string;
            set treeinfoVersion(val: string);
            /**
             * The URL to this tree.
             */
            get url(): string;
            set url(val: string);

            // Constructors

            constructor(properties?: Partial<Tree.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](id: string, architecture: string): Tree;

            // Static methods

            /**
             * Creates a new #OsinfoTree for installation tree at `location`. The `location`
             * could be a http:// or a https:// URI, or a local file.
             *
             * NOTE: Currently this only works for trees with a .treeinfo file
             * @param location the location of an installation tree
             * @param cancellable a #GCancellable, or %NULL
             */
            static create_from_location(location: string, cancellable?: Gio.Cancellable | null): Tree;
            /**
             * Asynchronous variant of #osinfo_tree_create_from_location.
             * @param location the location of an installation tree
             * @param priority the I/O priority of the request
             * @param cancellable a #GCancellable, or %NULL
             * @param callback Function to call when result of this call is ready
             */
            static create_from_location_async(
                location: string,
                priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<Tree> | null,
            ): void;
            /**
             * Finishes an asynchronous tree object creation process started with
             * #osinfo_tree_create_from_location_async.
             * @param res a #GAsyncResult
             */
            static create_from_location_finish(res: Gio.AsyncResult): Tree;
            /**
             * Creates a new #OsinfoTree for installation tree represented by `treeinfo`.
             * @param treeinfo a string representing the .treeinfo content
             * @param location the location of the original @treeinfo
             */
            static create_from_treeinfo(treeinfo: string, location: string): Tree;

            // Methods

            /**
             * Retrieves the target hardware architecture of the OS `tree` provides.
             * @returns the hardware architecture, or NULL
             */
            get_architecture(): string;
            /**
             * Retrieves the path to the boot_iso image in the install tree.
             * @returns the path to boot_iso image, or NULL
             */
            get_boot_iso_path(): string;
            /**
             * Retrieves the path to the initrd image in the install tree.
             *
             * Note: This only applies to installer trees of 'linux' OS family.
             * @returns the path to initrd image, or NULL
             */
            get_initrd_path(): string;
            /**
             * Retrieves the path to the kernel image in the install tree.
             *
             * Note: This only applies to installer trees of 'linux' OS family.
             * @returns the path to kernel image, or NULL
             */
            get_kernel_path(): string;
            get_os(): Os;
            /**
             * Gets the variants of the associated operating system.
             * @returns the operating system variant, or NULL
             */
            get_os_variants(): OsVariantList;
            /**
             * If `tree` has treeinfo, this function retrieves the expected architecture.
             *
             * Note: In practice, this will usually not be the exact copy of the
             * architecture but rather a regular expression that matches it.
             * @returns the treeinfo architecture, or NULL
             */
            get_treeinfo_arch(): string;
            /**
             * If `tree` has treeinfo, this function retrieves the expected family.
             *
             * Note: In practice, this will usually not be the exact copy of the family
             * but rather a regular expression that matches it.
             * @returns the treeinfo family, or NULL
             */
            get_treeinfo_family(): string;
            /**
             * If `tree` has treeinfo, this function retrieves the expected variant.
             *
             * Note: In practice, this will usually not be the exact copy of the variant
             * but rather a regular expression that matches it.
             * @returns the treeinfo variant, or NULL
             */
            get_treeinfo_variant(): string;
            /**
             * If `tree` has treeinfo, this function retrieves the expected version.
             *
             * Note: In practice, this will usually not be the exact copy of version but
             * rather a regular expression that matches it.
             * @returns the treeinfo version, or NULL
             */
            get_treeinfo_version(): string;
            /**
             * The URL to the `tree`
             * @returns the URL, or NULL
             */
            get_url(): string;
            /**
             * Determines whether the metadata for the unidentified `tree` is a match
             * for the `reference` tree.
             *
             * The metadata in the unidentified `tree` must be literal strings,
             * while the metadata in the `reference` tree must be regular expressions.
             * @param reference a reference #OsinfoTree instance
             * @returns #TRUE if @tree is a match for @reference. #FALSE otherwise
             */
            matches(reference: Tree): boolean;
            /**
             * Sets the #OsinfoOs associated to the #OsinfoTree instance.
             * @param os an #OsinfoOs instance
             */
            set_os(os: Os): void;
        }

        module TreeList {
            // Constructor properties interface

            interface ConstructorProps extends List.ConstructorProps {}
        }

        class TreeList extends List {
            static $gtype: GObject.GType<TreeList>;

            // Constructors

            constructor(properties?: Partial<TreeList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): TreeList;

            // Methods

            /**
             * Construct a new tree list that is filled with trees
             * from `source`
             * @returns a copy of the tree list
             */
            new_copy(): TreeList;
            /**
             * Construct a new tree list that is filled with trees
             * from `source` that match `filter`
             * @param filter the filter to apply
             * @returns a filtered copy of the tree list
             */
            new_filtered(filter: Filter): TreeList;
            /**
             * Construct a new tree list that is filled with only the
             * trees that are present in both `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second tree list to copy
             * @returns an intersection of the two tree lists
             */
            new_intersection(sourceTwo: TreeList): TreeList;
            /**
             * Construct a new tree list that is filled with all the
             * trees that are present in either `sourceOne` and `sourceTwo`.
             * @param sourceTwo the second tree list to copy
             * @returns a union of the two tree lists
             */
            new_union(sourceTwo: TreeList): TreeList;
        }

        type AvatarFormatClass = typeof AvatarFormat;
        abstract class AvatarFormatPrivate {
            static $gtype: GObject.GType<AvatarFormatPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DatamapClass = typeof Datamap;
        type DatamapListClass = typeof DatamapList;
        abstract class DatamapListPrivate {
            static $gtype: GObject.GType<DatamapListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DatamapPrivate {
            static $gtype: GObject.GType<DatamapPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DbClass = typeof Db;
        abstract class DbPrivate {
            static $gtype: GObject.GType<DbPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeploymentClass = typeof Deployment;
        type DeploymentListClass = typeof DeploymentList;
        abstract class DeploymentListPrivate {
            static $gtype: GObject.GType<DeploymentListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DeploymentPrivate {
            static $gtype: GObject.GType<DeploymentPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceClass = typeof Device;
        type DeviceDriverClass = typeof DeviceDriver;
        type DeviceDriverListClass = typeof DeviceDriverList;
        abstract class DeviceDriverListPrivate {
            static $gtype: GObject.GType<DeviceDriverListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DeviceDriverPrivate {
            static $gtype: GObject.GType<DeviceDriverPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceLinkClass = typeof DeviceLink;
        type DeviceLinkFilterClass = typeof DeviceLinkFilter;
        abstract class DeviceLinkFilterPrivate {
            static $gtype: GObject.GType<DeviceLinkFilterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceLinkListClass = typeof DeviceLinkList;
        abstract class DeviceLinkListPrivate {
            static $gtype: GObject.GType<DeviceLinkListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DeviceLinkPrivate {
            static $gtype: GObject.GType<DeviceLinkPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DeviceListClass = typeof DeviceList;
        abstract class DeviceListPrivate {
            static $gtype: GObject.GType<DeviceListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DevicePrivate {
            static $gtype: GObject.GType<DevicePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type EntityClass = typeof Entity;
        abstract class EntityPrivate {
            static $gtype: GObject.GType<EntityPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FilterClass = typeof Filter;
        abstract class FilterPrivate {
            static $gtype: GObject.GType<FilterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FirmwareClass = typeof Firmware;
        type FirmwareListClass = typeof FirmwareList;
        abstract class FirmwareListPrivate {
            static $gtype: GObject.GType<FirmwareListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class FirmwarePrivate {
            static $gtype: GObject.GType<FirmwarePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ImageClass = typeof Image;
        type ImageListClass = typeof ImageList;
        abstract class ImageListPrivate {
            static $gtype: GObject.GType<ImageListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class ImagePrivate {
            static $gtype: GObject.GType<ImagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type InstallConfigClass = typeof InstallConfig;
        type InstallConfigParamClass = typeof InstallConfigParam;
        type InstallConfigParamListClass = typeof InstallConfigParamList;
        abstract class InstallConfigParamListPrivate {
            static $gtype: GObject.GType<InstallConfigParamListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class InstallConfigParamPrivate {
            static $gtype: GObject.GType<InstallConfigParamPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class InstallConfigPrivate {
            static $gtype: GObject.GType<InstallConfigPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type InstallScriptClass = typeof InstallScript;
        type InstallScriptListClass = typeof InstallScriptList;
        abstract class InstallScriptListPrivate {
            static $gtype: GObject.GType<InstallScriptListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class InstallScriptPrivate {
            static $gtype: GObject.GType<InstallScriptPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ListClass = typeof List;
        abstract class ListPrivate {
            static $gtype: GObject.GType<ListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LoaderClass = typeof Loader;
        abstract class LoaderPrivate {
            static $gtype: GObject.GType<LoaderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MediaClass = typeof Media;
        type MediaListClass = typeof MediaList;
        abstract class MediaListPrivate {
            static $gtype: GObject.GType<MediaListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MediaPrivate {
            static $gtype: GObject.GType<MediaPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type OsClass = typeof Os;
        type OsListClass = typeof OsList;
        abstract class OsListPrivate {
            static $gtype: GObject.GType<OsListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class OsPrivate {
            static $gtype: GObject.GType<OsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type OsVariantClass = typeof OsVariant;
        type OsVariantListClass = typeof OsVariantList;
        abstract class OsVariantListPrivate {
            static $gtype: GObject.GType<OsVariantListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class OsVariantPrivate {
            static $gtype: GObject.GType<OsVariantPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PlatformClass = typeof Platform;
        type PlatformListClass = typeof PlatformList;
        abstract class PlatformListPrivate {
            static $gtype: GObject.GType<PlatformListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class PlatformPrivate {
            static $gtype: GObject.GType<PlatformPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ProductClass = typeof Product;
        type ProductFilterClass = typeof ProductFilter;
        abstract class ProductFilterPrivate {
            static $gtype: GObject.GType<ProductFilterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ProductListClass = typeof ProductList;
        abstract class ProductListPrivate {
            static $gtype: GObject.GType<ProductListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class ProductPrivate {
            static $gtype: GObject.GType<ProductPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ResourcesClass = typeof Resources;
        type ResourcesListClass = typeof ResourcesList;
        abstract class ResourcesListPrivate {
            static $gtype: GObject.GType<ResourcesListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class ResourcesPrivate {
            static $gtype: GObject.GType<ResourcesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TreeClass = typeof Tree;
        type TreeListClass = typeof TreeList;
        abstract class TreeListPrivate {
            static $gtype: GObject.GType<TreeListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class TreePrivate {
            static $gtype: GObject.GType<TreePrivate>;

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

    export default Libosinfo;
}

declare module 'gi://Libosinfo' {
    import Libosinfo10 from 'gi://Libosinfo?version=1.0';
    export default Libosinfo10;
}
// END
