/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://AppStreamGlib?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';

    export namespace AppStreamGlib {
        /**
         * AppStreamGlib-1.0
         */

        /**
         * The kind of the agreement.
         */

        /**
         * The kind of the agreement.
         */
        export namespace AgreementKind {
            export const $gtype: GObject.GType<AgreementKind>;
        }

        enum AgreementKind {
            /**
             * Unknown value
             */
            UNKNOWN,
            /**
             * A generic agreement without a specific type
             */
            GENERIC,
            /**
             * An End User License Agreement
             */
            EULA,
            /**
             * A privacy agreement, typically a GDPR statement
             */
            PRIVACY,
        }
        /**
         * The error type.
         */

        /**
         * The error type.
         */
        export namespace AppError {
            export const $gtype: GObject.GType<AppError>;
        }

        enum AppError {
            /**
             * Generic failure
             */
            FAILED,
            /**
             * Invalid type
             */
            INVALID_TYPE,
        }
        /**
         * The component type.
         */

        /**
         * The component type.
         */
        export namespace AppKind {
            export const $gtype: GObject.GType<AppKind>;
        }

        enum AppKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * A desktop application
             */
            DESKTOP,
            /**
             * A font add-on
             */
            FONT,
            /**
             * A codec add-on
             */
            CODEC,
            /**
             * A input method add-on
             */
            INPUT_METHOD,
            /**
             * A web appication
             */
            WEB_APP,
            /**
             * A software source
             */
            SOURCE,
            /**
             * An addon, e.g. a plugin
             */
            ADDON,
            /**
             * A firmware update
             */
            FIRMWARE,
            /**
             * Runtime platform
             */
            RUNTIME,
            /**
             * Generic component
             */
            GENERIC,
            /**
             * Operating system update
             */
            OS_UPDATE,
            /**
             * Operating system upgrade
             */
            OS_UPGRADE,
            /**
             * GNOME Shell extension
             */
            SHELL_EXTENSION,
            /**
             * Localization data
             */
            LOCALIZATION,
            /**
             * Console program
             */
            CONSOLE,
            /**
             * Driver for hardware support
             */
            DRIVER,
            /**
             * An icon theme
             */
            ICON_THEME,
        }
        /**
         * The component merge kind.
         */

        /**
         * The component merge kind.
         */
        export namespace AppMergeKind {
            export const $gtype: GObject.GType<AppMergeKind>;
        }

        enum AppMergeKind {
            /**
             * Unknown merge type
             */
            UNKNOWN,
            /**
             * No merge to be done
             */
            NONE,
            /**
             * Merge components, replacing
             */
            REPLACE,
            /**
             * Merge components, appending
             */
            APPEND,
        }
        /**
         * The application scope.
         */

        /**
         * The application scope.
         */
        export namespace AppScope {
            export const $gtype: GObject.GType<AppScope>;
        }

        enum AppScope {
            /**
             * Unknown scope
             */
            UNKNOWN,
            /**
             * User scope
             */
            USER,
            /**
             * System scope
             */
            SYSTEM,
        }
        /**
         * The application state.
         */

        /**
         * The application state.
         */
        export namespace AppState {
            export const $gtype: GObject.GType<AppState>;
        }

        enum AppState {
            /**
             * Unknown state
             */
            UNKNOWN,
            /**
             * Application is installed
             */
            INSTALLED,
            /**
             * Application is available
             */
            AVAILABLE,
            /**
             * Application is locally available as a file
             */
            AVAILABLE_LOCAL,
            /**
             * Application is installed and updatable
             */
            UPDATABLE,
            /**
             * Application is referenced, but not available
             */
            UNAVAILABLE,
            /**
             * Application is queued for install
             */
            QUEUED_FOR_INSTALL,
            /**
             * Application is being installed
             */
            INSTALLING,
            /**
             * Application is being removed
             */
            REMOVING,
            /**
             * Application is installed and updatable live
             */
            UPDATABLE_LIVE,
            /**
             * Application is available for purchasing
             */
            PURCHASABLE,
            /**
             * Application is being purchased
             */
            PURCHASING,
        }
        /**
         * The flags to use when checking input.
         */

        /**
         * The flags to use when checking input.
         */
        export namespace AppTrustFlags {
            export const $gtype: GObject.GType<AppTrustFlags>;
        }

        enum AppTrustFlags {
            /**
             * Trusted data with no validation
             */
            COMPLETE,
            /**
             * Check for duplicates
             */
            CHECK_DUPLICATES,
            /**
             * Check for valid UTF-8
             */
            CHECK_VALID_UTF8,
        }
        /**
         * The flags to use when validating.
         */

        /**
         * The flags to use when validating.
         */
        export namespace AppValidateFlags {
            export const $gtype: GObject.GType<AppValidateFlags>;
        }

        enum AppValidateFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Relax the checks
             */
            RELAX,
            /**
             * Make the checks more strict
             */
            STRICT,
            /**
             * Do not use the network
             */
            NO_NETWORK,
            /**
             * Check all applications in a store
             */
            ALL_APPS,
        }
        /**
         * The bundle type.
         */

        /**
         * The bundle type.
         */
        export namespace BundleKind {
            export const $gtype: GObject.GType<BundleKind>;
        }

        enum BundleKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Limba application bundle
             */
            LIMBA,
            /**
             * Flatpak application deployment
             */
            FLATPAK,
            /**
             * Snap application deployment
             */
            SNAP,
            /**
             * Package-based application deployment
             */
            PACKAGE,
            /**
             * Cabinet firmware deployment
             */
            CABINET,
            /**
             * AppImage application bundle
             */
            APPIMAGE,
        }
        /**
         * The checksum target type.
         */

        /**
         * The checksum target type.
         */
        export namespace ChecksumTarget {
            export const $gtype: GObject.GType<ChecksumTarget>;
        }

        enum ChecksumTarget {
            /**
             * Unknown state
             */
            UNKNOWN,
            /**
             * Container file, e.g. `.cab`
             */
            CONTAINER,
            /**
             * Extracted file, e.g. `.bin`
             */
            CONTENT,
            /**
             * Signature, e.g. `.asc` or `.cat`
             */
            SIGNATURE,
            /**
             * Device-reported value
             */
            DEVICE,
        }
        /**
         * A content rating system for a particular territory.
         */

        /**
         * A content rating system for a particular territory.
         */
        export namespace ContentRatingSystem {
            export const $gtype: GObject.GType<ContentRatingSystem>;
        }

        enum ContentRatingSystem {
            /**
             * Unknown ratings system
             */
            UNKNOWN,
            /**
             * INCAA
             */
            INCAA,
            /**
             * ACB
             */
            ACB,
            /**
             * DJCTQ
             */
            DJCTQ,
            /**
             * GSRR
             */
            GSRR,
            /**
             * PEGI
             */
            PEGI,
            /**
             * KAVI
             */
            KAVI,
            /**
             * USK
             */
            USK,
            /**
             * ESRA
             */
            ESRA,
            /**
             * CERO
             */
            CERO,
            /**
             * OFLCNZ
             */
            OFLCNZ,
            /**
             * Russia
             */
            RUSSIA,
            /**
             * MDA
             */
            MDA,
            /**
             * GRAC
             */
            GRAC,
            /**
             * ESRB
             */
            ESRB,
            /**
             * IARC
             */
            IARC,
        }
        /**
         * The specified level of an content_rating rating ID.
         */

        /**
         * The specified level of an content_rating rating ID.
         */
        export namespace ContentRatingValue {
            export const $gtype: GObject.GType<ContentRatingValue>;
        }

        enum ContentRatingValue {
            /**
             * Unknown value
             */
            UNKNOWN,
            /**
             * None
             */
            NONE,
            /**
             * A small amount
             */
            MILD,
            /**
             * A moderate amount
             */
            MODERATE,
            /**
             * An intense amount
             */
            INTENSE,
        }
        /**
         * The format kind.
         */

        /**
         * The format kind.
         */
        export namespace FormatKind {
            export const $gtype: GObject.GType<FormatKind>;
        }

        enum FormatKind {
            /**
             * Not formatd from a file
             */
            UNKNOWN,
            /**
             * AppStream file
             */
            APPSTREAM,
            /**
             * Desktop file
             */
            DESKTOP,
            /**
             * AppData file
             */
            APPDATA,
            /**
             * MetaInfo file
             */
            METAINFO,
        }
        /**
         * The error type.
         */

        /**
         * The error type.
         */
        export namespace IconError {
            export const $gtype: GObject.GType<IconError>;
        }

        enum IconError {
            /**
             * Generic failure
             */
            FAILED,
        }
        /**
         * The icon type.
         */

        /**
         * The icon type.
         */
        export namespace IconKind {
            export const $gtype: GObject.GType<IconKind>;
        }

        enum IconKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Stock icon or present in the generic icon theme
             */
            STOCK,
            /**
             * An icon shipped with the AppStream metadata
             */
            CACHED,
            /**
             * An icon referenced by a remote URL
             */
            REMOTE,
            /**
             * An embedded Base64 icon
             */
            EMBEDDED,
            /**
             * An icon with absolute path and filename
             */
            LOCAL,
        }
        /**
         * The flags to use when loading icons.
         */

        /**
         * The flags to use when loading icons.
         */
        export namespace IconLoadFlags {
            export const $gtype: GObject.GType<IconLoadFlags>;
        }

        enum IconLoadFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Search first in a size-specific directory
             */
            SEARCH_SIZE,
        }
        /**
         * The component type.
         */

        /**
         * The component type.
         */
        export namespace IdKind {
            export const $gtype: GObject.GType<IdKind>;
        }

        enum IdKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * A desktop application
             */
            DESKTOP,
            /**
             * A font add-on
             */
            FONT,
            /**
             * A codec add-on
             */
            CODEC,
            /**
             * A input method add-on
             */
            INPUT_METHOD,
            /**
             * A web appication
             */
            WEB_APP,
            /**
             * A software source
             */
            SOURCE,
            /**
             * An addon, e.g. a plugin
             */
            ADDON,
            /**
             * A firmware update
             */
            FIRMWARE,
            /**
             * Runtime platform
             */
            RUNTIME,
            /**
             * Generic component
             */
            GENERIC,
        }
        /**
         * The image type.
         */

        /**
         * The image type.
         */
        export namespace ImageKind {
            export const $gtype: GObject.GType<ImageKind>;
        }

        enum ImageKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * The source image at full resolution
             */
            SOURCE,
            /**
             * A thumbnail at reduced resolution
             */
            THUMBNAIL,
        }
        /**
         * The flags used for loading images.
         */

        /**
         * The flags used for loading images.
         */
        export namespace ImageLoadFlags {
            export const $gtype: GObject.GType<ImageLoadFlags>;
        }

        enum ImageLoadFlags {
            /**
             * No special flags set
             */
            NONE,
            /**
             * Sharpen the resulting image
             */
            SHARPEN,
            /**
             * Set the image basename
             */
            SET_BASENAME,
            /**
             * Set the image checksum
             */
            SET_CHECKSUM,
            /**
             * Only load supported formats like PNG and JPG
             */
            ONLY_SUPPORTED,
            /**
             * Always resize the source icon to the perfect size
             */
            ALWAYS_RESIZE,
        }
        /**
         * The flags used for saving images.
         */

        /**
         * The flags used for saving images.
         */
        export namespace ImageSaveFlags {
            export const $gtype: GObject.GType<ImageSaveFlags>;
        }

        enum ImageSaveFlags {
            /**
             * No special flags set
             */
            NONE,
            /**
             * Pad with alpha to 16:9 aspect
             */
            PAD_16_9,
            /**
             * Sharpen the image to clarify detail
             */
            SHARPEN,
            /**
             * Blur the image to clear detail
             */
            BLUR,
        }
        /**
         * The error type.
         */
        class InfError extends GLib.Error {
            static $gtype: GObject.GType<InfError>;

            // Static fields

            /**
             * Generic failure
             */
            static FAILED: number;
            /**
             * Invalid type
             */
            static INVALID_TYPE: number;
            /**
             * Data not found
             */
            static NOT_FOUND: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * The kudo type.
         */

        /**
         * The kudo type.
         */
        export namespace KudoKind {
            export const $gtype: GObject.GType<KudoKind>;
        }

        enum KudoKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Installs a search provider
             */
            SEARCH_PROVIDER,
            /**
             * Installs user documentation
             */
            USER_DOCS,
            /**
             * Uses the GNOME application menu
             */
            APP_MENU,
            /**
             * Uses a modern toolkit like GTK3 or QT5
             */
            MODERN_TOOLKIT,
            /**
             * Registers notifications with KDE or GNOME
             */
            NOTIFICATIONS,
            /**
             * Installs a high contrast icon
             */
            HIGH_CONTRAST,
            /**
             * Installs a high DPI icon
             */
            HI_DPI_ICON,
        }
        /**
         * The launchable type.
         */

        /**
         * The launchable type.
         */
        export namespace LaunchableKind {
            export const $gtype: GObject.GType<LaunchableKind>;
        }

        enum LaunchableKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * A desktop ID
             */
            DESKTOP_ID,
            /**
             * A system service
             */
            SERVICE,
            /**
             * A manifest run by the cockpit project
             */
            COCKPIT_MANIFEST,
            /**
             * A web-app
             */
            URL,
        }
        /**
         * The format used when converting to or from AppStream descriptions.
         */

        /**
         * The format used when converting to or from AppStream descriptions.
         */
        export namespace MarkupConvertFormat {
            export const $gtype: GObject.GType<MarkupConvertFormat>;
        }

        enum MarkupConvertFormat {
            /**
             * UTF-8 text
             */
            SIMPLE,
            /**
             * Markdown format
             */
            MARKDOWN,
            /**
             * No output
             */
            NULL,
            /**
             * AppStream (passthrough)
             */
            APPSTREAM,
            /**
             * HyperText Markup Language
             */
            HTML,
        }
        /**
         * The error type.
         */
        class NodeError extends GLib.Error {
            static $gtype: GObject.GType<NodeError>;

            // Static fields

            /**
             * Generic failure
             */
            static FAILED: number;
            /**
             * XML markup was invalid
             */
            static INVALID_MARKUP: number;
            /**
             * No support for parsing
             */
            static NO_SUPPORT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * The flags to use when inserting a node.
         */

        /**
         * The flags to use when inserting a node.
         */
        export namespace NodeInsertFlags {
            export const $gtype: GObject.GType<NodeInsertFlags>;
        }

        enum NodeInsertFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * The data is already XML escaped
             */
            PRE_ESCAPED,
            /**
             * The name and key should be swapped
             */
            SWAPPED,
            /**
             * Preformat the 'description' markup
             */
            NO_MARKUP,
            /**
             * No xml:lang keys where text matches 'C'
             */
            DEDUPE_LANG,
            /**
             * Mark the tag name as translatable
             */
            MARK_TRANSLATABLE,
            /**
             * The data is Base64 enoded
             */
            BASE64_ENCODED,
        }
        /**
         * The flags for converting to XML.
         */

        /**
         * The flags for converting to XML.
         */
        export namespace NodeToXmlFlags {
            export const $gtype: GObject.GType<NodeToXmlFlags>;
        }

        enum NodeToXmlFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Add an XML header to the data
             */
            ADD_HEADER,
            /**
             * Split up children with a newline
             */
            FORMAT_MULTILINE,
            /**
             * Indent the XML by child depth
             */
            FORMAT_INDENT,
            /**
             * Include the siblings when converting
             */
            INCLUDE_SIBLINGS,
            /**
             * Sort the tags by alphabetical order
             */
            SORT_CHILDREN,
        }
        /**
         * The problem type.
         */

        /**
         * The problem type.
         */
        export namespace ProblemKind {
            export const $gtype: GObject.GType<ProblemKind>;
        }

        enum ProblemKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * A tag is duplicated
             */
            TAG_DUPLICATED,
            /**
             * A required tag is missing
             */
            TAG_MISSING,
            /**
             * A tag value is invalid
             */
            TAG_INVALID,
            /**
             * A required attribute is missing
             */
            ATTRIBUTE_MISSING,
            /**
             * An attribute is invalid
             */
            ATTRIBUTE_INVALID,
            /**
             * The XML markup is invalid
             */
            MARKUP_INVALID,
            /**
             * Style guidelines are incorrect
             */
            STYLE_INCORRECT,
            /**
             * Translations are required
             */
            TRANSLATIONS_REQUIRED,
            /**
             * Some data is duplicated
             */
            DUPLICATE_DATA,
            /**
             * A value is required
             */
            VALUE_MISSING,
            /**
             * The URL is not found
             */
            URL_NOT_FOUND,
            /**
             * The file is invalid
             */
            FILE_INVALID,
            /**
             * The image aspect ratio is wrong
             */
            ASPECT_RATIO_INCORRECT,
            /**
             * The image resolution is wrong
             */
            RESOLUTION_INCORRECT,
        }
        /**
         * The provide type.
         */

        /**
         * The provide type.
         */
        export namespace ProvideKind {
            export const $gtype: GObject.GType<ProvideKind>;
        }

        enum ProvideKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * A library file
             */
            LIBRARY,
            /**
             * A binary file
             */
            BINARY,
            /**
             * A font file
             */
            FONT,
            /**
             * A hardware modalias
             */
            MODALIAS,
            /**
             * A runtime-loadable firmware file
             */
            FIRMWARE_RUNTIME,
            /**
             * A Python 2 module
             */
            PYTHON2,
            /**
             * A Python 3 module
             */
            PYTHON3,
            /**
             * A D-Bus session service
             */
            DBUS_SESSION,
            /**
             * A D-Bus system service
             */
            DBUS_SYSTEM,
            /**
             * A flashed firmware GUID
             */
            FIRMWARE_FLASHED,
            /**
             * An AppStream component ID
             */
            ID,
        }
        /**
         * The release size kind.
         */

        /**
         * The release size kind.
         */
        export namespace ReleaseKind {
            export const $gtype: GObject.GType<ReleaseKind>;
        }

        enum ReleaseKind {
            /**
             * Unknown release type
             */
            UNKNOWN,
            /**
             * A stable release
             */
            STABLE,
            /**
             * A development release
             */
            DEVELOPMENT,
        }
        /**
         * The release state.
         */

        /**
         * The release state.
         */
        export namespace ReleaseState {
            export const $gtype: GObject.GType<ReleaseState>;
        }

        enum ReleaseState {
            /**
             * Unknown state
             */
            UNKNOWN,
            /**
             * Release is installed
             */
            INSTALLED,
            /**
             * Release is available
             */
            AVAILABLE,
        }
        /**
         * The relational comparison type.
         */

        /**
         * The relational comparison type.
         */
        export namespace RequireCompare {
            export const $gtype: GObject.GType<RequireCompare>;
        }

        enum RequireCompare {
            /**
             * Comparison predicate invalid or not known
             */
            UNKNOWN,
            /**
             * Equal to
             */
            EQ,
            /**
             * Not equal to
             */
            NE,
            /**
             * Less than
             */
            LT,
            /**
             * Greater than
             */
            GT,
            /**
             * Less than or equal to
             */
            LE,
            /**
             * Greater than or equal to
             */
            GE,
            /**
             * Filename glob, e.g. `test*`
             */
            GLOB,
            /**
             * A regular expression, e.g. `fw[0-255]`
             */
            REGEX,
        }
        /**
         * The require type.
         */

        /**
         * The require type.
         */
        export namespace RequireKind {
            export const $gtype: GObject.GType<RequireKind>;
        }

        enum RequireKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Component ID
             */
            ID,
            /**
             * Device firmware version
             */
            FIRMWARE,
            /**
             * Hardware device, typically a GUID
             */
            HARDWARE,
            /**
             * Modalias string
             */
            MODALIAS,
            /**
             * Kernel version
             */
            KERNEL,
            /**
             * Amount of installed memory in MiB
             */
            MEMORY,
        }
        /**
         * The screenshot type.
         */

        /**
         * The screenshot type.
         */
        export namespace ScreenshotKind {
            export const $gtype: GObject.GType<ScreenshotKind>;
        }

        enum ScreenshotKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Optional screenshot
             */
            NORMAL,
            /**
             * Screenshot to show by default
             */
            DEFAULT,
        }
        /**
         * The release size kind.
         */

        /**
         * The release size kind.
         */
        export namespace SizeKind {
            export const $gtype: GObject.GType<SizeKind>;
        }

        enum SizeKind {
            /**
             * Not known
             */
            UNKNOWN,
            /**
             * Installed size
             */
            INSTALLED,
            /**
             * Download size
             */
            DOWNLOAD,
        }
        /**
         * The error type.
         */

        /**
         * The error type.
         */
        export namespace StoreError {
            export const $gtype: GObject.GType<StoreError>;
        }

        enum StoreError {
            /**
             * Generic failure
             */
            FAILED,
        }
        /**
         * The flags to use when searching in the store.
         */

        /**
         * The flags to use when searching in the store.
         */
        export namespace StoreSearchFlags {
            export const $gtype: GObject.GType<StoreSearchFlags>;
        }

        enum StoreSearchFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Process the globs
             */
            USE_WILDCARDS,
        }
        /**
         * The flags to use when local files are added or removed from the store.
         */

        /**
         * The flags to use when local files are added or removed from the store.
         */
        export namespace StoreWatchFlags {
            export const $gtype: GObject.GType<StoreWatchFlags>;
        }

        enum StoreWatchFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Add applications if files change or are added
             */
            ADDED,
            /**
             * Remove applications if files are changed or deleted
             */
            REMOVED,
        }
        /**
         * The suggest type.
         */

        /**
         * The suggest type.
         */
        export namespace SuggestKind {
            export const $gtype: GObject.GType<SuggestKind>;
        }

        enum SuggestKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Upstream-specified suggestion
             */
            UPSTREAM,
            /**
             * Suggestion from a heuristic
             */
            HEURISTIC,
        }
        /**
         * The tag type.
         */

        /**
         * The tag type.
         */
        export namespace Tag {
            export const $gtype: GObject.GType<Tag>;
        }

        enum Tag {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * `components`
             */
            COMPONENTS,
            /**
             * `component`
             */
            COMPONENT,
            /**
             * `id`
             */
            ID,
            /**
             * `pkgname`
             */
            PKGNAME,
            /**
             * `name`
             */
            NAME,
            /**
             * `summary`
             */
            SUMMARY,
            /**
             * `description`
             */
            DESCRIPTION,
            /**
             * `url`
             */
            URL,
            /**
             * `icon`
             */
            ICON,
            /**
             * `categories`
             */
            CATEGORIES,
            /**
             * `category`
             */
            CATEGORY,
            /**
             * `keywords`
             */
            KEYWORDS,
            /**
             * `keyword`
             */
            KEYWORD,
            /**
             * `mimetypes`
             */
            MIMETYPES,
            /**
             * `mimetype`
             */
            MIMETYPE,
            /**
             * `project_group`
             */
            PROJECT_GROUP,
            /**
             * `project_license`
             */
            PROJECT_LICENSE,
            /**
             * `screenshot`
             */
            SCREENSHOT,
            /**
             * `screenshots`
             */
            SCREENSHOTS,
            /**
             * `update_contact`
             */
            UPDATE_CONTACT,
            /**
             * `image`
             */
            IMAGE,
            /**
             * `compulsory_for_desktop`
             */
            COMPULSORY_FOR_DESKTOP,
            /**
             * `priority`
             */
            PRIORITY,
            /**
             * `caption`
             */
            CAPTION,
            /**
             * `languages`
             */
            LANGUAGES,
            /**
             * `lang`
             */
            LANG,
            /**
             * `metadata`
             */
            METADATA,
            /**
             * `value`
             */
            VALUE,
            /**
             * `releases`
             */
            RELEASES,
            /**
             * `release`
             */
            RELEASE,
            /**
             * `architectures`
             */
            ARCHITECTURES,
            /**
             * `arch`
             */
            ARCH,
            /**
             * `metadata_license`
             */
            METADATA_LICENSE,
            /**
             * `provides`
             */
            PROVIDES,
            /**
             * `extends`
             */
            EXTENDS,
            /**
             * `developer_name`
             */
            DEVELOPER_NAME,
            /**
             * `kudos`
             */
            KUDOS,
            /**
             * `kudo`
             */
            KUDO,
            /**
             * `source_pkgname`
             */
            SOURCE_PKGNAME,
            /**
             * `vetos`
             */
            VETOS,
            /**
             * `veto`
             */
            VETO,
            /**
             * `bundle`
             */
            BUNDLE,
            /**
             * `permissions`
             */
            PERMISSIONS,
            /**
             * `permission`
             */
            PERMISSION,
            /**
             * `location`
             */
            LOCATION,
            /**
             * `checksum`
             */
            CHECKSUM,
            /**
             * `size`
             */
            SIZE,
            /**
             * `translation`
             */
            TRANSLATION,
            /**
             * `content_rating`
             */
            CONTENT_RATING,
            /**
             * `content_attribute`
             */
            CONTENT_ATTRIBUTE,
            /**
             * `version`
             */
            VERSION,
            /**
             * `reviews`
             */
            REVIEWS,
            /**
             * `review`
             */
            REVIEW,
            /**
             * `reviewer_name`
             */
            REVIEWER_NAME,
            /**
             * `reviewer_id`
             */
            REVIEWER_ID,
            /**
             * `suggests`
             */
            SUGGESTS,
            /**
             * `requires`
             */
            REQUIRES,
            /**
             * `custom`
             */
            CUSTOM,
            /**
             * `launchable`
             */
            LAUNCHABLE,
            /**
             * `agreement`
             */
            AGREEMENT,
            /**
             * `agreement_section`
             */
            AGREEMENT_SECTION,
            P,
            LI,
            UL,
            OL,
            BINARY,
            FONT,
            DBUS,
            MODALIAS,
            LIBRARY,
        }
        /**
         * The flags to use when matching %AsTag's.
         */

        /**
         * The flags to use when matching %AsTag's.
         */
        export namespace TagFlags {
            export const $gtype: GObject.GType<TagFlags>;
        }

        enum TagFlags {
            /**
             * No special actions to use
             */
            NONE,
            /**
             * Use fallback tag names
             */
            USE_FALLBACKS,
            /**
             * Use translated tag names
             */
            USE_TRANSLATED,
        }
        /**
         * The translation type.
         */

        /**
         * The translation type.
         */
        export namespace TranslationKind {
            export const $gtype: GObject.GType<TranslationKind>;
        }

        enum TranslationKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Gettext translation system
             */
            GETTEXT,
            /**
             * QT translation system
             */
            QT,
        }
        /**
         * The urgency of a release.
         */

        /**
         * The urgency of a release.
         */
        export namespace UrgencyKind {
            export const $gtype: GObject.GType<UrgencyKind>;
        }

        enum UrgencyKind {
            /**
             * Urgency invalid or not known
             */
            UNKNOWN,
            /**
             * Low urgency release
             */
            LOW,
            /**
             * Medium urgency release
             */
            MEDIUM,
            /**
             * High urgency release
             */
            HIGH,
            /**
             * Critically urgent release
             */
            CRITICAL,
        }
        /**
         * The URL type.
         */

        /**
         * The URL type.
         */
        export namespace UrlKind {
            export const $gtype: GObject.GType<UrlKind>;
        }

        enum UrlKind {
            /**
             * Type invalid or not known
             */
            UNKNOWN,
            /**
             * Application project homepage
             */
            HOMEPAGE,
            /**
             * Application bugtracker
             */
            BUGTRACKER,
            /**
             * Application FAQ page
             */
            FAQ,
            /**
             * Application donation page
             */
            DONATION,
            /**
             * Application help manual
             */
            HELP,
            /**
             * The package is available, but missing
             */
            MISSING,
            /**
             * Application translation page
             */
            TRANSLATE,
            /**
             * Release details
             */
            DETAILS,
            /**
             * Link to source code
             */
            SOURCE,
            /**
             * URL to contact developer on
             */
            CONTACT,
            /**
             * Browse the source code
             */
            VCS_BROWSER,
            /**
             * Help developing
             */
            CONTRIBUTE,
        }
        /**
         * The error type.
         */
        class UtilsError extends GLib.Error {
            static $gtype: GObject.GType<UtilsError>;

            // Static fields

            /**
             * Generic failure
             */
            static FAILED: number;
            /**
             * Invalid type
             */
            static INVALID_TYPE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * The flags used when installing and removing metadata files.
         */

        /**
         * The flags used when installing and removing metadata files.
         */
        export namespace UtilsLocation {
            export const $gtype: GObject.GType<UtilsLocation>;
        }

        enum UtilsLocation {
            /**
             * Installed by the vendor, shared
             */
            SHARED,
            /**
             * Installed as metadata, shared
             */
            CACHE,
            /**
             * Installed by the user
             */
            USER,
        }
        const APP_SUBSUME_FLAG_DEDUPE: number;
        const APP_SUBSUME_FLAG_MERGE: number;
        const IMAGE_ALPHA_FLAG_BOTTOM: number;
        const IMAGE_ALPHA_FLAG_INTERNAL: number;
        const IMAGE_ALPHA_FLAG_LEFT: number;
        const IMAGE_ALPHA_FLAG_NONE: number;
        const IMAGE_ALPHA_FLAG_RIGHT: number;
        const IMAGE_ALPHA_FLAG_TOP: number;
        const IMAGE_LARGE_HEIGHT: number;
        const IMAGE_LARGE_WIDTH: number;
        const IMAGE_NORMAL_HEIGHT: number;
        const IMAGE_NORMAL_WIDTH: number;
        const IMAGE_THUMBNAIL_HEIGHT: number;
        const IMAGE_THUMBNAIL_WIDTH: number;
        /**
         * Converts the text representation to an enumerated value.
         * @param id_kind the string.
         * @returns a #AsIdKind or %AS_ID_KIND_UNKNOWN for unknown
         */
        function id_kind_from_string(id_kind: string): IdKind;
        /**
         * Converts the enumerated value to an text representation.
         * @param id_kind the #AsIdKind.
         * @returns string version of @id_kind
         */
        function id_kind_to_string(id_kind: IdKind | null): string;
        function inf_error_quark(): GLib.Quark;
        /**
         * Parses the DriverVer string into a recognisable version and timestamp;
         * @param keyfile a #GKeyFile
         * @param timestamp the returned driverver timestamp, or %NULL
         * @returns the version string, or %NULL for error.
         */
        function inf_get_driver_version(keyfile: GLib.KeyFile, timestamp: number): string;
        /**
         * Repairs .inf file data and opens it as a keyfile.
         *
         * Important: The group and keynames are all forced to lower case as INF files
         * are specified as case insensitive and GKeyFile *is* case sensitive.
         * Any backslashes or spaces in the key name are also converted to '_'.
         * @param keyfile a #GKeyFile
         * @param data the .inf file date to parse
         * @param flags #AsInfLoadFlags, e.g. %AS_INF_LOAD_FLAG_NONE
         * @returns %TRUE for success
         */
        function inf_load_data(keyfile: GLib.KeyFile, data: string, flags: InfLoadFlags | null): boolean;
        /**
         * Repairs an .inf file and opens it as a keyfile.
         * @param keyfile a #GKeyFile
         * @param filename the .inf file to open
         * @param flags #AsInfLoadFlags, e.g. %AS_INF_LOAD_FLAG_NONE
         * @returns %TRUE for success
         */
        function inf_load_file(keyfile: GLib.KeyFile, filename: string, flags: InfLoadFlags | null): boolean;
        /**
         * Converts the text representation to an enumerated value.
         * @param kudo_kind the string.
         * @returns a #AsKudoKind or %AS_KUDO_KIND_UNKNOWN for unknown
         */
        function kudo_kind_from_string(kudo_kind: string): KudoKind;
        /**
         * Converts the enumerated value to an text representation.
         * @param kudo_kind the @AsKudoKind.
         * @returns string version of @kudo_kind
         */
        function kudo_kind_to_string(kudo_kind: KudoKind | null): string;
        /**
         * Converts an XML description into a printable form.
         * @param markup the text to copy.
         * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
         * @returns a newly allocated %NULL terminated string
         */
        function markup_convert(markup: string, format: MarkupConvertFormat | null): string;
        /**
         * Converts an XML description into a printable form.
         * @param markup the text to copy.
         * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_MARKDOWN
         * @param flags the #AsMarkupConvertFlag, e.g. %AS_MARKUP_CONVERT_FLAG_IGNORE_ERRORS
         * @returns a newly allocated %NULL terminated string
         */
        function markup_convert_full(
            markup: string,
            format: MarkupConvertFormat | null,
            flags: MarkupConvertFlag | null,
        ): string;
        /**
         * Converts an XML description into a printable form.
         * @param markup the text to copy.
         * @returns a newly allocated %NULL terminated string
         */
        function markup_convert_simple(markup: string): string;
        /**
         * Imports text and converts to AppStream markup.
         * @param text the text to import.
         * @param format the #AsMarkupConvertFormat, e.g. %AS_MARKUP_CONVERT_FORMAT_SIMPLE
         * @returns appstream markup, or %NULL in event of an error
         */
        function markup_import(text: string, format: MarkupConvertFormat | null): string;
        /**
         * Splits up a long line into an array of smaller strings, each being no longer
         * than `line_len`. Words are not split.
         * @param text the text to split.
         * @param line_len the maximum length of the output line
         * @returns lines, or %NULL in event of an error
         */
        function markup_strsplit_words(text: string, line_len: number): string[];
        /**
         * Validates some markup.
         * @param markup the text to validate
         * @returns %TRUE if the appstream description was valid
         */
        function markup_validate(markup: string): boolean;
        function node_error_quark(): GLib.Quark;
        /**
         * Gets a node attribute, e.g. "false"
         * @param node a #AsNode
         * @param key the attribute key
         * @returns string value
         */
        function node_get_attribute(node: GLib.Node, key: string): string;
        /**
         * Gets a node attribute, e.g. 34
         * @param node a #AsNode
         * @param key the attribute key
         * @returns integer value, or %G_MAXINT for error
         */
        function node_get_attribute_as_int(node: GLib.Node, key: string): number;
        /**
         * Gets a node attribute, e.g. 34
         * @param node a #AsNode
         * @param key the attribute key
         * @returns integer value, or %G_MAXINT for error
         */
        function node_get_attribute_as_uint(node: GLib.Node, key: string): number;
        /**
         * Gets the node data, e.g. "Copyright 2014 Richard Hughes"
         * @param node a #AsNode
         * @returns string value, or %NULL
         */
        function node_get_comment(node: GLib.Node): string;
        /**
         * Gets the node data, e.g. "paragraph text"
         * @param node a #AsNode
         * @returns string value
         */
        function node_get_data(node: GLib.Node): string;
        /**
         * Extracts localized values from the DOM tree
         * @param node a #AsNode
         * @param key the key to use, e.g. "copyright"
         * @returns A hash table with the locale (e.g. en_GB) as the key
         */
        function node_get_localized(node: GLib.Node, key: string): GLib.HashTable<any, any>;
        /**
         * Gets the 'best' locale version of a specific data value.
         * @param node a #AsNode.
         * @param key the tag name.
         * @returns the string value, or %NULL if there was no data
         */
        function node_get_localized_best(node: GLib.Node, key: string): string;
        /**
         * Denormalize AppData data like this:
         *
         *
         * ```
         * <description>
         *  <p>Hi</p>
         *  <p xml:lang="pl">Czesc</p>
         *  <ul>
         *   <li>First</li>
         *   <li xml:lang="pl">Pierwszy</li>
         *  </ul>
         * </description>
         * ```
         *
         *
         * into a hash that contains:
         *
         *
         * ```
         * "C"  ->  "<p>Hi</p><ul><li>First</li></ul>"
         * "pl" ->  "<p>Czesc</p><ul><li>Pierwszy</li></ul>"
         * ```
         *
         * @param node a #AsNode.
         * @returns a hash table of data
         */
        function node_get_localized_unwrap(node: GLib.Node): GLib.HashTable<any, any>;
        /**
         * Gets the node name, e.g. "body"
         * @param node a #AsNode
         * @returns string value
         */
        function node_get_name(node: GLib.Node): string;
        /**
         * Gets the node tag enum.
         * @param node a #AsNode
         * @returns #AsTag, e.g. %AS_TAG_PKGNAME
         */
        function node_get_tag(node: GLib.Node): Tag;
        /**
         * Inserts a hash table of data into the DOM.
         * @param parent a parent #AsNode.
         * @param name the tag name, e.g. "id".
         * @param attr_key the key to use as the attribute in the XML, e.g. "key".
         * @param hash the hash table with the key as the key to use in the XML.
         * @param insert_flags any %AsNodeInsertFlags.
         */
        function node_insert_hash(
            parent: GLib.Node,
            name: string,
            attr_key: string,
            hash: { [key: string]: any } | GLib.HashTable<any, any>,
            insert_flags: NodeInsertFlags | null,
        ): void;
        /**
         * Inserts a localized key into the DOM.
         * @param parent a parent #AsNode.
         * @param name the tag name, e.g. "id".
         * @param localized the hash table of data, with the locale as the key.
         * @param insert_flags any %AsNodeInsertFlags.
         */
        function node_insert_localized(
            parent: GLib.Node,
            name: string,
            localized: { [key: string]: any } | GLib.HashTable<any, any>,
            insert_flags: NodeInsertFlags | null,
        ): void;
        /**
         * Converts a node and it's children to XML.
         * @param node a #AsNode.
         * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
         * @returns a #GString
         */
        function node_to_xml(node: GLib.Node, flags: NodeToXmlFlags | null): GLib.String;
        /**
         * Deallocates all notes in the tree.
         * @param node a #AsNode.
         */
        function node_unref(node: GLib.Node): void;
        /**
         * Converts the text representation to an enumerated value.
         * @param size_kind the string.
         * @returns a #AsSizeKind or %AS_SIZE_KIND_UNKNOWN for unknown
         */
        function size_kind_from_string(size_kind: string): SizeKind;
        /**
         * Converts the enumerated value to an text representation.
         * @param size_kind the #AsSizeKind.
         * @returns string version of @size_kind
         */
        function size_kind_to_string(size_kind: SizeKind | null): string;
        /**
         * Converts the text representation to an enumerated value.
         * @param tag the string.
         * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
         */
        function tag_from_string(tag: string): Tag;
        /**
         * Converts the text representation to an enumerated value also converting
         * legacy key names.
         * @param tag the string.
         * @param flags the #AsTagFlags e.g. %AS_TAG_FLAG_USE_FALLBACKS
         * @returns a %AsTag, or %AS_TAG_UNKNOWN if not known.
         */
        function tag_from_string_full(tag: string, flags: TagFlags | null): Tag;
        /**
         * Converts the enumerated value to an text representation.
         * @param tag the %AsTag value.
         * @returns string version of @tag
         */
        function tag_to_string(tag: Tag | null): string;
        /**
         * Converts the text representation to an enumerated value.
         * @param urgency_kind the string.
         * @returns a #AsUrgencyKind or %AS_URGENCY_KIND_UNKNOWN for unknown
         */
        function urgency_kind_from_string(urgency_kind: string): UrgencyKind;
        /**
         * Converts the enumerated value to an text representation.
         * @param urgency_kind the #AsUrgencyKind.
         * @returns string version of @urgency_kind
         */
        function urgency_kind_to_string(urgency_kind: UrgencyKind | null): string;
        /**
         * Converts the text representation to an enumerated value.
         * @param url_kind the string.
         * @returns a #AsUrlKind or %AS_URL_KIND_UNKNOWN for unknown
         */
        function url_kind_from_string(url_kind: string): UrlKind;
        /**
         * Converts the enumerated value to an text representation.
         * @param url_kind the @AsUrlKind.
         * @returns string version of @url_kind
         */
        function url_kind_to_string(url_kind: UrlKind | null): string;
        /**
         * Fixes a string to be a valid AppStream ID.
         *
         * This function replaces any invalid chars with an underscore.
         * @param str a string to build the AppStream ID from
         * @returns a valid AppStream ID, or %NULL if @str is invalid
         */
        function utils_appstream_id_build(str: string): string;
        /**
         * Checks to see if a string is a valid AppStream ID. A valid AppStream ID only
         * contains alphanumeric chars, dots and dashes.
         * @param str a string
         * @returns %TRUE if the string is a valid AppStream ID
         */
        function utils_appstream_id_valid(str: string): boolean;
        function utils_error_quark(): GLib.Quark;
        /**
         * Finds an icon filename from a filesystem root.
         * @param destdir the destdir.
         * @param search the icon search name, e.g. "microphone.svg"
         * @returns a newly allocated %NULL terminated string
         */
        function utils_find_icon_filename(destdir: string, search: string): string;
        /**
         * Finds an icon filename from a filesystem root.
         * @param destdir the destdir.
         * @param search the icon search name, e.g. "microphone.svg"
         * @param flags A #AsUtilsFindIconFlag bitfield
         * @returns a newly allocated %NULL terminated string
         */
        function utils_find_icon_filename_full(
            destdir: string,
            search: string,
            flags: UtilsFindIconFlag | null,
        ): string;
        /**
         * Returns a GUID for some data. This uses a hash and so even small
         * differences in the `data` will produce radically different return values.
         *
         * The implementation is taken from RFC4122, Section 4.1.3; specifically
         * using a type-5 SHA-1 hash.
         * @param namespace_id A namespace ID, e.g. "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
         * @param data data to hash
         * @param data_len length of @data
         * @returns A new GUID, or %NULL if the namespace_id was invalid
         */
        function utils_guid_from_data(namespace_id: string, data: number, data_len: number): string;
        /**
         * Returns a GUID for a given string. This uses a hash and so even small
         * differences in the `str` will produce radically different return values.
         *
         * The implementation is taken from RFC4122, Section 4.1.3; specifically
         * using a type-5 SHA-1 hash with a DNS namespace.
         * The same result can be obtained with this simple python program:
         *
         *    #!/usr/bin/python
         *    import uuid
         *    print uuid.uuid5(uuid.NAMESPACE_DNS, 'python.org')
         * @param str A source string to use as a key
         * @returns A new GUID, or %NULL if the string was invalid
         */
        function utils_guid_from_string(str: string): string;
        /**
         * Checks the source string is a valid string GUID descriptor.
         * @param guid string to check
         * @returns %TRUE if @guid was a valid GUID, %FALSE otherwise
         */
        function utils_guid_is_valid(guid: string): boolean;
        /**
         * Installs an AppData, MetaInfo, AppStream XML or AppStream Icon metadata file.
         * @param location the #AsUtilsLocation, e.g. %AS_UTILS_LOCATION_CACHE
         * @param filename the full path of the file to install
         * @param origin the origin to use for the installation, or %NULL
         * @param destdir the destdir to use, or %NULL
         * @returns %TRUE for success, %FALSE if error is set
         */
        function utils_install_filename(
            location: UtilsLocation | null,
            filename: string,
            origin: string,
            destdir: string,
        ): boolean;
        /**
         * Searches the known list of blacklisted desktop IDs.
         * @param desktop_id a desktop ID, e.g. "gimp.desktop"
         * @returns %TRUE if the desktop ID is blacklisted
         */
        function utils_is_blacklisted_id(desktop_id: string): boolean;
        /**
         * Searches the known list of registered category IDs.
         * @param category_id a desktop ID, e.g. "AudioVideoEditing"
         * @returns %TRUE if the category ID is valid
         */
        function utils_is_category_id(category_id: string): boolean;
        /**
         * Searches the known list of registered environment IDs.
         * @param environment_id a desktop ID, e.g. "GNOME"
         * @returns %TRUE if the environment ID is valid
         */
        function utils_is_environment_id(environment_id: string): boolean;
        /**
         * Checks the licence string to check it being a valid licence.
         * NOTE: SPDX licences can't typically contain brackets.
         * @param license a SPDX license string, e.g. "CC-BY-3.0 and GFDL-1.3"
         * @returns %TRUE if the license is a valid "SPDX license"
         */
        function utils_is_spdx_license(license: string): boolean;
        /**
         * Searches the known list of SPDX license IDs.
         * @param license_id a single SPDX license ID, e.g. "CC-BY-3.0"
         * @returns %TRUE if the license ID is a valid "SPDX license ID"
         */
        function utils_is_spdx_license_id(license_id: string): boolean;
        /**
         * Searches the known list of stock icons.
         * @param name an icon name
         * @returns %TRUE if the icon is a "stock icon name" and does not need to be          included in the AppStream icon tarball
         */
        function utils_is_stock_icon_name(name: string): boolean;
        /**
         * Converts a non-SPDX license into an SPDX format string where possible.
         * @param license a not-quite SPDX license string, e.g. "GPLv3+"
         * @returns the best-effort SPDX license string
         */
        function utils_license_to_spdx(license: string): string;
        /**
         * Checks the search token if it is valid. Valid tokens are at least 3 chars in
         * length, not common words like "and", and do not contain markup.
         * @param token the search token
         * @returns %TRUE is the search token was valid
         */
        function utils_search_token_valid(token: string): boolean;
        /**
         * Splits up a string into tokens and returns tokens that are suitable for
         * searching. This includes taking out common words and casefolding the
         * returned search tokens.
         * @param search the search string
         * @returns Valid tokens to search for, or %NULL for error
         */
        function utils_search_tokenize(search: string): string[];
        /**
         * De-tokenizes the SPDX licenses into a string.
         * @param license_tokens license tokens, typically from as_utils_spdx_license_tokenize()
         * @returns string, or %NULL for invalid
         */
        function utils_spdx_license_detokenize(license_tokens: string): string;
        /**
         * Tokenizes the SPDX license string (or any simarly formatted string)
         * into parts. Any licence parts of the string e.g. "LGPL-2.0+" are prefexed
         * with "`"`, the conjunctive replaced with "&" and the disjunctive replaced
         * with "|". Brackets are added as indervidual tokens and other strings are
         * appended into single tokens where possible.
         * @param license a license string, e.g. "LGPLv2+ and (QPL or GPLv2) and MIT"
         * @returns array of strings, or %NULL for invalid
         */
        function utils_spdx_license_tokenize(license: string): string[];
        /**
         * Performs multiple search and replace operations on the given string.
         * @param string The #GString to operate on
         * @param search The text to search for
         * @param replace The text to use for substitutions
         * @returns the number of replacements done, or 0 if @search is not found.
         */
        function utils_string_replace(string: GLib.String, search: string, replace: string): number;
        /**
         * Builds a valid unique ID using available data.
         * @param scope a #AsAppScope e.g. %AS_APP_SCOPE_SYSTEM
         * @param bundle_kind System, e.g. 'package' or 'flatpak'
         * @param origin Origin, e.g. 'fedora' or 'gnome-apps-nightly'
         * @param kind #AsAppKind, e.g. %AS_APP_KIND_DESKTOP
         * @param id AppStream ID, e.g. 'gimp.desktop'
         * @param branch Branch, e.g. '3-20' or 'master'
         * @returns a unique name, or %NULL for error;
         */
        function utils_unique_id_build(
            scope: AppScope | null,
            bundle_kind: BundleKind | null,
            origin: string,
            kind: AppKind | null,
            id: string,
            branch: string,
        ): string;
        /**
         * Checks two unique IDs for equality allowing globs to match.
         * @param unique_id1 a unique ID
         * @param unique_id2 another unique ID
         * @returns %TRUE if the ID's should be considered equal.
         */
        function utils_unique_id_equal(unique_id1: string, unique_id2: string): boolean;
        /**
         * Converts a unique-id to a hash value.
         *
         * This function implements the widely used DJB hash on the ID subset of the
         * unique-id string.
         *
         * It can be passed to g_hash_table_new() as the hash_func parameter,
         * when using non-NULL strings or unique_ids as keys in a GHashTable.
         * @param unique_id a unique ID
         * @returns a hash value corresponding to the key
         */
        function utils_unique_id_hash(unique_id: string): number;
        /**
         * Checks two unique IDs for equality allowing globs to match, whilst also
         * allowing clients to whitelist sections that have to match.
         * @param unique_id1 a unique ID
         * @param unique_id2 another unique ID
         * @param match_flags a #AsUniqueIdMatchFlags bitfield, e.g. %AS_UNIQUE_ID_MATCH_FLAG_ID
         * @returns %TRUE if the ID's should be considered equal.
         */
        function utils_unique_id_match(
            unique_id1: string,
            unique_id2: string,
            match_flags: UniqueIdMatchFlags | null,
        ): boolean;
        /**
         * Checks if a unique ID is valid i.e. has the correct number of
         * sections.
         * @param unique_id a unique ID
         * @returns %TRUE if the ID is valid
         */
        function utils_unique_id_valid(unique_id: string): boolean;
        /**
         * Compares version numbers for sorting.
         * @param version_a the release version, e.g. 1.2.3
         * @param version_b the release version, e.g. 1.2.3.1
         * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
         */
        function utils_vercmp(version_a: string, version_b: string): number;
        /**
         * Compares version numbers for sorting.
         * @param version_a the release version, e.g. 1.2.3
         * @param version_b the release version, e.g. 1.2.3.1
         * @param flags some #AsVersionCompareFlag
         * @returns -1 if a < b, +1 if a > b, 0 if they are equal, and %G_MAXINT on error
         */
        function utils_vercmp_full(version_a: string, version_b: string, flags: VersionCompareFlag | null): number;
        /**
         * Returns a dotted decimal version string from a 16 bit number.
         * @param val A uint16le version number
         * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
         * @returns A version number, e.g. "1.3"
         */
        function utils_version_from_uint16(val: number, flags: VersionParseFlag | null): string;
        /**
         * Returns a dotted decimal version string from a 32 bit number.
         * @param val A uint32le version number
         * @param flags flags used for formatting, e.g. %AS_VERSION_PARSE_FLAG_USE_TRIPLET
         * @returns A version number, e.g. "1.0.3"
         */
        function utils_version_from_uint32(val: number, flags: VersionParseFlag | null): string;
        /**
         * Returns a dotted decimal version string from a version string. The supported
         * formats are:
         *
         * - Dotted decimal, e.g. "1.2.3"
         * - Base 16, a hex number *with* a 0x prefix, e.g. "0x10203"
         * - Base 10, a string containing just [0-9], e.g. "66051"
         * - Date in YYYYMMDD format, e.g. 20150915
         *
         * Anything with a '.' or that doesn't match [0-9] or 0x[a-f,0-9] is considered
         * a string and returned without modification.
         * @param version A version number
         * @returns A version number, e.g. "1.0.3"
         */
        function utils_version_parse(version: string): string;
        /**
         * The flags to use when parsing resources.
         */

        /**
         * The flags to use when parsing resources.
         */
        export namespace AppParseFlags {
            export const $gtype: GObject.GType<AppParseFlags>;
        }

        enum AppParseFlags {
            /**
             * No special actions to use
             */
            NONE,
            /**
             * Use heuristic to infer properties
             */
            USE_HEURISTICS,
            /**
             * Save comments from the file
             */
            KEEP_COMMENTS,
            /**
             * Allow translatable flags like <_p>
             */
            CONVERT_TRANSLATABLE,
            /**
             * Append new data rather than replacing
             */
            APPEND_DATA,
            /**
             * Do not return errors for vetoed apps
             */
            ALLOW_VETO,
            /**
             * Fall back to suboptimal data where required
             */
            USE_FALLBACKS,
            /**
             * Add all extra metadata from the source file
             */
            ADD_ALL_METADATA,
            /**
             * Only load native languages
             */
            ONLY_NATIVE_LANGS,
        }
        /**
         * The component attributes.
         */

        /**
         * The component attributes.
         */
        export namespace AppQuirk {
            export const $gtype: GObject.GType<AppQuirk>;
        }

        enum AppQuirk {
            /**
             * No special attributes
             */
            NONE,
            /**
             * Installed by OS vendor
             */
            PROVENANCE,
            /**
             * Cannot be removed
             */
            COMPULSORY,
            /**
             * Has a source to allow staying up-to-date
             */
            HAS_SOURCE,
            /**
             * Matches applications with any prefix
             */
            MATCH_ANY_PREFIX,
            /**
             * A reboot is required after the action
             */
            NEEDS_REBOOT,
            /**
             * The app is not reviewable
             */
            NOT_REVIEWABLE,
            /**
             * The app has a shortcut in the system
             */
            HAS_SHORTCUT,
            /**
             * The app is not launchable (run-able)
             */
            NOT_LAUNCHABLE,
            /**
             * The component requires some kind of user action
             */
            NEEDS_USER_ACTION,
            /**
             * Is a proxy app that operates on other applications
             */
            IS_PROXY,
            /**
             * The device is unusable whilst the action is performed
             */
            REMOVABLE_HARDWARE,
            /**
             * The app developer has been verified
             */
            DEVELOPER_VERIFIED,
        }
        /**
         * The token match kind, which we want to be exactly 16 bits for storage
         * reasons.
         */

        /**
         * The token match kind, which we want to be exactly 16 bits for storage
         * reasons.
         */
        export namespace AppSearchMatch {
            export const $gtype: GObject.GType<AppSearchMatch>;
        }

        enum AppSearchMatch {
            /**
             * No token matching
             */
            NONE,
            /**
             * Use the app mimetypes
             */
            MIMETYPE,
            /**
             * Use the app package name
             */
            PKGNAME,
            /**
             * Use the app description
             */
            DESCRIPTION,
            /**
             * Use the app comment
             */
            COMMENT,
            /**
             * Use the app name
             */
            NAME,
            /**
             * Use the app keyword
             */
            KEYWORD,
            /**
             * Use the app application ID
             */
            ID,
            /**
             * Use the app origin
             */
            ORIGIN,
        }
        /**
         * The flags to use when subsuming applications.
         */

        /**
         * The flags to use when subsuming applications.
         */
        export namespace AppSubsumeFlags {
            export const $gtype: GObject.GType<AppSubsumeFlags>;
        }

        enum AppSubsumeFlags {
            /**
             * No special actions to use
             */
            NONE,
            /**
             * Do not overwrite already set properties
             */
            NO_OVERWRITE,
            /**
             * Copy unset properties both ways
             */
            BOTH_WAYS,
            REPLACE,
            /**
             * Copy the kind
             */
            KIND,
            /**
             * Copy the state
             */
            STATE,
            /**
             * Copy the bundles
             */
            BUNDLES,
            /**
             * Copy the translations
             */
            TRANSLATIONS,
            /**
             * Copy the releases
             */
            RELEASES,
            /**
             * Copy the kudos
             */
            KUDOS,
            /**
             * Copy the categories
             */
            CATEGORIES,
            /**
             * Copy the permissions
             */
            PERMISSIONS,
            /**
             * Copy the extends
             */
            EXTENDS,
            /**
             * Copy the compulsory-for-desktop
             */
            COMPULSORY,
            /**
             * Copy the screenshots
             */
            SCREENSHOTS,
            /**
             * Copy the reviews
             */
            REVIEWS,
            /**
             * Copy the content ratings
             */
            CONTENT_RATINGS,
            /**
             * Copy the provides
             */
            PROVIDES,
            /**
             * Copy the icons
             */
            ICONS,
            /**
             * Copy the mimetypes
             */
            MIMETYPES,
            /**
             * Copy the vetos
             */
            VETOS,
            /**
             * Copy the languages
             */
            LANGUAGES,
            /**
             * Copy the name
             */
            NAME,
            /**
             * Copy the comment
             */
            COMMENT,
            /**
             * Copy the developer name
             */
            DEVELOPER_NAME,
            /**
             * Copy the description
             */
            DESCRIPTION,
            /**
             * Copy the metadata
             */
            METADATA,
            /**
             * Copy the urls
             */
            URL,
            /**
             * Copy the keywords
             */
            KEYWORDS,
            /**
             * Copy the source file
             */
            FORMATS,
            /**
             * Copy the branch
             */
            BRANCH,
            /**
             * Copy the origin
             */
            ORIGIN,
            /**
             * Copy the metadata license
             */
            METADATA_LICENSE,
            /**
             * Copy the project license
             */
            PROJECT_LICENSE,
            /**
             * Copy the project group
             */
            PROJECT_GROUP,
            /**
             * Copy the source kind
             */
            SOURCE_KIND,
            SUGGESTS,
            /**
             * Copy the launchables
             */
            LAUNCHABLES,
            /**
             * Copy the agreements
             */
            AGREEMENTS,
        }
        /**
         * The flags used when loading INF files.
         */

        /**
         * The flags used when loading INF files.
         */
        export namespace InfLoadFlags {
            export const $gtype: GObject.GType<InfLoadFlags>;
        }

        enum InfLoadFlags {
            /**
             * No flags set
             */
            NONE,
            /**
             * Be strict when loading the file
             */
            STRICT,
            /**
             * Load keys and groups case insensitive
             */
            CASE_INSENSITIVE,
        }
        /**
         * The flags used when converting descriptions from AppStream-style.
         */

        /**
         * The flags used when converting descriptions from AppStream-style.
         */
        export namespace MarkupConvertFlag {
            export const $gtype: GObject.GType<MarkupConvertFlag>;
        }

        enum MarkupConvertFlag {
            /**
             * No flags set
             */
            NONE,
            /**
             * Ignore errors where possible
             */
            IGNORE_ERRORS,
        }
        /**
         * The flags for converting from XML.
         */

        /**
         * The flags for converting from XML.
         */
        export namespace NodeFromXmlFlags {
            export const $gtype: GObject.GType<NodeFromXmlFlags>;
        }

        enum NodeFromXmlFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Treat the text as an exact string
             */
            LITERAL_TEXT,
            /**
             * Retain comments in the XML file
             */
            KEEP_COMMENTS,
            /**
             * Only load native languages
             */
            ONLY_NATIVE_LANGS,
        }
        /**
         * The flags for the review.
         */

        /**
         * The flags for the review.
         */
        export namespace ReviewFlags {
            export const $gtype: GObject.GType<ReviewFlags>;
        }

        enum ReviewFlags {
            /**
             * No special flags set
             */
            NONE,
            /**
             * The user wrote the review themselves
             */
            SELF,
            /**
             * The user voted on the review
             */
            VOTED,
        }
        /**
         * The flags to use when adding applications to the store.
         */

        /**
         * The flags to use when adding applications to the store.
         */
        export namespace StoreAddFlags {
            export const $gtype: GObject.GType<StoreAddFlags>;
        }

        enum StoreAddFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * Local files will be used by default
             */
            PREFER_LOCAL,
            /**
             * Allow multiple apps with the same AppStream ID
             */
            USE_UNIQUE_ID,
            /**
             * Use a heuristic when adding merge components
             */
            USE_MERGE_HEURISTIC,
            /**
             * Only load native languages
             */
            ONLY_NATIVE_LANGS,
        }
        /**
         * The flags to use when loading the store.
         */

        /**
         * The flags to use when loading the store.
         */
        export namespace StoreLoadFlags {
            export const $gtype: GObject.GType<StoreLoadFlags>;
        }

        enum StoreLoadFlags {
            /**
             * No extra flags to use
             */
            NONE,
            /**
             * The system app-info AppStream data
             */
            APP_INFO_SYSTEM,
            /**
             * The per-user app-info AppStream data
             */
            APP_INFO_USER,
            /**
             * The ubuntu-specific app-install data (obsolete)
             */
            APP_INSTALL,
            /**
             * The installed AppData files
             */
            APPDATA,
            /**
             * The installed desktop files
             */
            DESKTOP,
            /**
             * Add vetoed applications
             */
            ALLOW_VETO,
            /**
             * Add flatpak user applications (obsolete)
             */
            FLATPAK_USER,
            /**
             * Add flatpak system applications (obsolete)
             */
            FLATPAK_SYSTEM,
            /**
             * Ignore invalid files
             */
            IGNORE_INVALID,
            /**
             * Ignore compressed files
             */
            ONLY_UNCOMPRESSED,
            /**
             * Ignore non-wildcard matches
             */
            ONLY_MERGE_APPS,
        }
        /**
         * The flags used when matching unique IDs.
         */

        /**
         * The flags used when matching unique IDs.
         */
        export namespace UniqueIdMatchFlags {
            export const $gtype: GObject.GType<UniqueIdMatchFlags>;
        }

        enum UniqueIdMatchFlags {
            /**
             * No flags set
             */
            NONE,
            /**
             * Scope, e.g. a #AsAppScope
             */
            SCOPE,
            /**
             * Bundle kind, e.g. a #AsBundleKind
             */
            BUNDLE_KIND,
            /**
             * Origin
             */
            ORIGIN,
            /**
             * Component kind, e.g. a #AsAppKind
             */
            KIND,
            /**
             * Component AppStream ID
             */
            ID,
            /**
             * Branch
             */
            BRANCH,
        }
        /**
         * The flags used when finding icons.
         */

        /**
         * The flags used when finding icons.
         */
        export namespace UtilsFindIconFlag {
            export const $gtype: GObject.GType<UtilsFindIconFlag>;
        }

        enum UtilsFindIconFlag {
            /**
             * No flags set
             */
            NONE,
            /**
             * Prefer a HiDPI icon
             */
            HI_DPI,
        }
        /**
         * The flags used when comparing version numbers.
         */

        /**
         * The flags used when comparing version numbers.
         */
        export namespace VersionCompareFlag {
            export const $gtype: GObject.GType<VersionCompareFlag>;
        }

        enum VersionCompareFlag {
            /**
             * No flags set
             */
            NONE,
            /**
             * Use a heuristic to parse version numbers
             */
            USE_HEURISTICS,
        }
        /**
         * The flags used when parsing version numbers.
         */

        /**
         * The flags used when parsing version numbers.
         */
        export namespace VersionParseFlag {
            export const $gtype: GObject.GType<VersionParseFlag>;
        }

        enum VersionParseFlag {
            /**
             * No flags set
             */
            NONE,
            /**
             * Use Microsoft-style version numbers
             */
            USE_TRIPLET,
            /**
             * Use binary coded decimal notation
             */
            USE_BCD,
        }
        module Agreement {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Agreement extends GObject.Object {
            static $gtype: GObject.GType<Agreement>;

            // Constructors

            constructor(properties?: Partial<Agreement.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Agreement;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param value the string.
             */
            static kind_from_string(value: string): AgreementKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param value the #AsAgreementKind.
             */
            static kind_to_string(value: AgreementKind): string;

            // Methods

            add_section(agreement_section: AgreementSection): void;
            /**
             * Gets the agreement kind.
             * @returns a string, e.g. %AS_AGREEMENT_KIND_EULA
             */
            get_kind(): AgreementKind;
            /**
             * Gets the first section in the agreement.
             * @returns agreement section, or %NULL
             */
            get_section_default(): AgreementSection;
            /**
             * Gets all the sections in the agreement.
             * @returns array
             */
            get_sections(): AgreementSection[];
            /**
             * Gets the agreement version_id.
             * @returns a string, e.g. "1.4a", or NULL
             */
            get_version_id(): string;
            /**
             * Sets the agreement kind.
             * @param kind the agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
             */
            set_kind(kind: AgreementKind | null): void;
            /**
             * Sets the agreement version identifier.
             * @param version_id the agreement version ID, e.g. "1.4a"
             */
            set_version_id(version_id: string): void;
        }

        module AgreementSection {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class AgreementSection extends GObject.Object {
            static $gtype: GObject.GType<AgreementSection>;

            // Constructors

            constructor(properties?: Partial<AgreementSection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): AgreementSection;

            // Methods

            /**
             * Gets the agreement section desc.
             * @param locale the locale. e.g. "en_GB"
             * @returns a string, e.g. "GDPR", or NULL
             */
            get_description(locale?: string | null): string;
            /**
             * Gets the agreement section kind.
             * @returns a string, e.g. "GDPR", or NULL
             */
            get_kind(): string;
            /**
             * Gets the agreement section name.
             * @param locale the locale. e.g. "en_GB"
             * @returns a string, e.g. "GDPR", or NULL
             */
            get_name(locale?: string | null): string;
            /**
             * Sets the agreement section description.
             * @param locale the locale. e.g. "en_GB"
             * @param desc the rating desc, e.g. "GDPR"
             */
            set_description(locale: string | null, desc: string): void;
            /**
             * Sets the agreement section kind.
             * @param kind the rating kind, e.g. "GDPR"
             */
            set_kind(kind: string): void;
            /**
             * Sets the agreement section name.
             * @param locale the locale. e.g. "en_GB"
             * @param name the rating name, e.g. "GDPR"
             */
            set_name(locale: string | null, name: string): void;
        }

        module App {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class App extends GObject.Object {
            static $gtype: GObject.GType<App>;

            // Constructors

            constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): App;

            // Static methods

            static error_quark(): GLib.Quark;
            /**
             * Guesses the source kind based from the filename.
             * @param filename a file name
             */
            static guess_source_kind(filename: string): FormatKind;
            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): AppKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsAppKind.
             */
            static kind_to_string(kind: AppKind): string;
            /**
             * Converts the text representation to an enumerated value.
             * @param merge_kind a source kind string
             */
            static merge_kind_from_string(merge_kind: string): AppMergeKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param merge_kind the #AsAppMergeKind, e.g. %AS_APP_MERGE_KIND_REPLACE
             */
            static merge_kind_to_string(merge_kind: AppMergeKind): string;
            /**
             * Converts the text representation to an enumerated value.
             * @param scope a source kind string
             */
            static scope_from_string(scope: string): AppScope;
            /**
             * Converts the enumerated value to an text representation.
             * @param scope the #AsAppScope, e.g. %AS_APP_SCOPE_SYSTEM
             */
            static scope_to_string(scope: AppScope): string;
            /**
             * Converts the text representation to an enumerated value.
             * @param source_kind a source kind string
             */
            static source_kind_from_string(source_kind: string): FormatKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param source_kind the #AsFormatKind.
             */
            static source_kind_to_string(source_kind: FormatKind): string;
            /**
             * Converts the enumerated value to an text representation.
             * @param state the #AsAppState.
             */
            static state_to_string(state: AppState): string;

            // Methods

            /**
             * Adds a addon to an application.
             * @param addon a #AsApp instance.
             */
            add_addon(addon: App): void;
            /**
             * Adds a agreement to an application.
             * @param agreement a #AsAgreement instance.
             */
            add_agreement(agreement: Agreement): void;
            /**
             * Adds a package name to an application.
             * @param arch the package name.
             */
            add_arch(arch: string): void;
            /**
             * Adds a bundle to an application.
             * @param bundle a #AsBundle instance.
             */
            add_bundle(bundle: Bundle): void;
            /**
             * Adds a menu category to the application.
             * @param category the category.
             */
            add_category(category: string): void;
            /**
             * Adds a desktop that requires this application to be installed.
             * @param compulsory_for_desktop the desktop string, e.g. "GNOME".
             */
            add_compulsory_for_desktop(compulsory_for_desktop: string): void;
            /**
             * Adds a content_rating to an application.
             * @param content_rating a #AsContentRating instance.
             */
            add_content_rating(content_rating: ContentRating): void;
            /**
             * Adds a parent ID to the application.
             * @param _extends the full ID, e.g. "eclipse.desktop".
             */
            add_extends(_extends: string): void;
            /**
             * Add a format the application has been built from.
             * @param format the #AsFormat.
             */
            add_format(format: Format): void;
            /**
             * Adds a icon to an application.
             * @param icon a #AsIcon instance.
             */
            add_icon(icon: Icon): void;
            /**
             * Add a keyword the application should match against.
             * @param locale the locale. e.g. "en_GB"
             * @param keyword the keyword.
             */
            add_keyword(locale: string | null, keyword: string): void;
            /**
             * Add a kudo the application has obtained.
             * @param kudo the kudo.
             */
            add_kudo(kudo: string): void;
            /**
             * Add a kudo the application has obtained.
             * @param kudo_kind the #AsKudoKind.
             */
            add_kudo_kind(kudo_kind: KudoKind | null): void;
            /**
             * Adds a language to the application.
             * @param percentage the percentage completion of the translation, or 0 for unknown
             * @param locale the locale. e.g. "en_GB"
             */
            add_language(percentage: number, locale?: string | null): void;
            /**
             * Adds a launchable to an application.
             * @param launchable a #AsLaunchable instance.
             */
            add_launchable(launchable: Launchable): void;
            /**
             * Adds a metadata entry to the application.
             * @param key the metadata key.
             * @param value the value to store.
             */
            add_metadata(key: string, value?: string | null): void;
            /**
             * Adds a mimetype the application can process.
             * @param mimetype the mimetype.
             */
            add_mimetype(mimetype: string): void;
            /**
             * Add a permission the application has obtained.
             * @param permission the permission.
             */
            add_permission(permission: string): void;
            /**
             * Adds a package name to an application.
             * @param pkgname the package name.
             */
            add_pkgname(pkgname: string): void;
            /**
             * Adds a provide to an application.
             * @param provide a #AsProvide instance.
             */
            add_provide(provide: Provide): void;
            /**
             * Adds a specific attribute to an application.
             * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
             */
            add_quirk(quirk: AppQuirk | null): void;
            /**
             * Adds a release to an application.
             * @param release a #AsRelease instance.
             */
            add_release(release: Release): void;
            /**
             * Adds a require to an application.
             * @param require a #AsRequire instance.
             */
            add_require(require: Require): void;
            /**
             * Adds a review to an application.
             * @param review a #AsReview instance.
             */
            add_review(review: Review): void;
            /**
             * Adds a screenshot to an application.
             * @param screenshot a #AsScreenshot instance.
             */
            add_screenshot(screenshot: Screenshot): void;
            /**
             * Adds a suggest to an application.
             * @param suggest a #AsSuggest instance.
             */
            add_suggest(suggest: Suggest): void;
            /**
             * Adds a translation to an application.
             * @param translation a #AsTranslation instance.
             */
            add_translation(translation: Translation): void;
            /**
             * Adds some URL data to the application.
             * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
             * @param url the full URL.
             */
            add_url(url_kind: UrlKind | null, url: string): void;
            /**
             * Converts all the icons in the application to a specific kind.
             * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
             * @returns %TRUE for success
             */
            convert_icons(kind: IconKind | null): boolean;
            /**
             * Compare one application with another for equality using the following
             * properties:
             *
             *  1. scope, e.g. `system` or `user`
             *  2. bundle kind, e.g. `package` or `flatpak`
             *  3. origin, e.g. `fedora` or `gnome-apps-nightly`
             *  4. kind, e.g. `app` or `runtime`
             *  5. AppStream ID, e.g. `gimp.desktop`
             *  6. branch, e.g. `stable` or `master`
             * @param app2 another #AsApp instance.
             * @returns %TRUE if the applications are equal
             */
            equal(app2: App): boolean;
            /**
             * Gets all the addons the application has.
             * @returns an array
             */
            get_addons(): App[];
            /**
             * Gets a agreement the application has defined of a specific type.
             * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
             * @returns a #AsAgreement or NULL for not found
             */
            get_agreement_by_kind(kind: AgreementKind | null): Agreement;
            /**
             * Gets a privacy policys the application has defined of a specific type.
             * @returns a #AsAgreement or NULL for not found
             */
            get_agreement_default(): Agreement;
            /**
             * Gets the supported architectures for the application, or an empty list
             * if all architectures are supported.
             * @returns an array
             */
            get_architectures(): string[];
            /**
             * Gets the branch for the application.
             * @returns string, or %NULL if unset
             */
            get_branch(): string;
            /**
             * Finds the default bundle.
             * @returns a #AsBundle, or %NULL
             */
            get_bundle_default(): Bundle;
            /**
             * Gets any bundles the application has defined.
             * @returns an array
             */
            get_bundles(): Bundle[];
            /**
             * Get the application categories.
             * @returns an array
             */
            get_categories(): string[];
            /**
             * Gets the application summary for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @returns string, or %NULL if unset
             */
            get_comment(locale?: string | null): string;
            /**
             * Gets the comments set for the application.
             * @returns hash table of comments
             */
            get_comments(): GLib.HashTable<any, any>;
            /**
             * Returns the desktops where this application is compulsory.
             * @returns an array
             */
            get_compulsory_for_desktops(): string[];
            /**
             * Gets a content ratings the application has defined of a specific type.
             * @param kind a ratings kind, e.g. "oars-1.0"
             * @returns a #AsContentRating or NULL for not found
             */
            get_content_rating(kind: string): ContentRating;
            /**
             * Gets any content_ratings the application has defined.
             * @returns an array
             */
            get_content_ratings(): ContentRating[];
            /**
             * Gets the application description markup for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @returns string, or %NULL if unset
             */
            get_description(locale?: string | null): string;
            /**
             * Gets the descriptions set for the application.
             * @returns hash table of descriptions
             */
            get_descriptions(): GLib.HashTable<any, any>;
            /**
             * Gets the application developer name for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @returns string, or %NULL if unset
             */
            get_developer_name(locale?: string | null): string;
            /**
             * Gets the developer_names set for the application.
             * @returns hash table of developer_names
             */
            get_developer_names(): GLib.HashTable<any, any>;
            /**
             * Gets the IDs that are extended from the addon.
             * @returns an array
             */
            get_extends(): string[];
            /**
             * Searches the list of formats for a specific filename.
             * @param filename a filename, e.g. "/home/hughsie/dave.desktop"
             * @returns A #AsFormat, or %NULL if not found
             */
            get_format_by_filename(filename: string): Format;
            /**
             * Searches the list of formats for a specific format kind.
             * @param kind a #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA
             * @returns A #AsFormat, or %NULL if not found
             */
            get_format_by_kind(kind: FormatKind | null): Format;
            /**
             * Returns the default format.
             * @returns A #AsFormat, or %NULL if not found
             */
            get_format_default(): Format;
            /**
             * Gets any formats that make up the application.
             * @returns an array
             */
            get_formats(): string[];
            /**
             * Finds the default icon.
             * @returns a #AsIcon, or %NULL
             */
            get_icon_default(): Icon;
            /**
             * Finds an icon of a specific size.
             * @param width Size in pixels
             * @param height Size in pixels
             * @returns a #AsIcon, or %NULL
             */
            get_icon_for_size(width: number, height: number): Icon;
            /**
             * Gets the application icon path.
             * @returns string, or %NULL if unset
             */
            get_icon_path(): string;
            /**
             * Gets any icons the application has defined.
             * @returns an array
             */
            get_icons(): Icon[];
            /**
             * Gets the full ID value.
             * @returns the ID, e.g. "org.gnome.Software.desktop"
             */
            get_id(): string;
            /**
             * Returns a filename which represents the applications ID, e.g. "gimp.desktop"
             * becomes "gimp" and is used for cache directories.
             * @returns A utf8 filename
             */
            get_id_filename(): string;
            /**
             * Gets the ID kind.
             * @returns enumerated value
             */
            get_id_kind(): IdKind;
            /**
             * Gets the full ID value, stripping any prefix.
             * @returns the ID, e.g. "org.gnome.Software.desktop"
             */
            get_id_no_prefix(): string;
            /**
             * Gets any keywords the application should match against.
             * @param locale the locale. e.g. "en_GB"
             * @returns an array, or %NULL
             */
            get_keywords(locale?: string | null): string[];
            /**
             * Gets the ID kind.
             * @returns enumerated value
             */
            get_kind(): AppKind;
            /**
             * Gets any kudos the application has obtained.
             * @returns an array
             */
            get_kudos(): string[];
            /**
             * Gets the language coverage for the specific language.
             * @param locale the locale. e.g. "en_GB"
             * @returns a percentage value where 0 is unspecified, or -1 for not found
             */
            get_language(locale?: string | null): number;
            /**
             * Get a list of all languages.
             * @returns list of language values
             */
            get_languages(): string[];
            /**
             * Searches the list of launchables for a specific launchable kind.
             * @param kind a #AsLaunchableKind, e.g. %AS_FORMAT_KIND_APPDATA
             * @returns A #AsLaunchable, or %NULL if not found
             */
            get_launchable_by_kind(kind: LaunchableKind | null): Launchable;
            /**
             * Returns the default launchable.
             * @returns A #AsLaunchable, or %NULL if not found
             */
            get_launchable_default(): Launchable;
            /**
             * Gets all the launchables the application has.
             * @returns an array
             */
            get_launchables(): Launchable[];
            /**
             * Gets the merge_kind of the application.
             * @returns enumerated value
             */
            get_merge_kind(): AppMergeKind;
            /**
             * Gets the metadata set for the application.
             * @returns hash table of metadata
             */
            get_metadata(): GLib.HashTable<string, string>;
            /**
             * Gets some metadata item.
             * @param key the metadata key.
             * @returns string, or %NULL if unset
             */
            get_metadata_item(key: string): string;
            /**
             * Gets the application project license.
             * @returns string, or %NULL if unset
             */
            get_metadata_license(): string;
            /**
             * Gets any mimetypes the application will register.
             * @returns an array
             */
            get_mimetypes(): string[];
            /**
             * Gets the application name for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @returns string, or %NULL if unset
             */
            get_name(locale?: string | null): string;
            /**
             * Gets the names set for the application.
             * @returns hash table of names
             */
            get_names(): GLib.HashTable<any, any>;
            /**
             * Gets the application origin.
             * @returns the origin string, or %NULL if unset
             */
            get_origin(): string;
            /**
             * Gets any permissions the application has obtained.
             * @returns an array
             */
            get_permissions(): string[];
            /**
             * Gets the default package name.
             * @returns string, or %NULL if unset
             */
            get_pkgname_default(): string;
            /**
             * Gets the package names (if any) for the application.
             * @returns an array
             */
            get_pkgnames(): string[];
            /**
             * Gets the application priority. Larger values trump smaller values.
             * @returns priority value
             */
            get_priority(): number;
            /**
             * Gets an application project group.
             * @returns string, or %NULL if unset
             */
            get_project_group(): string;
            /**
             * Gets the application project license.
             * @returns string, or %NULL if unset
             */
            get_project_license(): string;
            /**
             * Gets all the provides the application has.
             * @returns an array
             */
            get_provides(): Provide[];
            /**
             * Gets a specific release from the application.
             * @param version a version string
             * @returns a release, or %NULL
             */
            get_release(version: string): Release;
            /**
             * Gets a specific release from the application.
             * @param version a release version number, e.g. "1.2.3"
             * @returns a release, or %NULL
             */
            get_release_by_version(version: string): Release;
            /**
             * Gets the default (newest) release from the application.
             * @returns a release, or %NULL
             */
            get_release_default(): Release;
            /**
             * Gets all the releases the application has had.
             * @returns an array
             */
            get_releases(): Release[];
            /**
             * Gets a specific requirement for the application.
             * @param kind a #AsRequireKind, e.g. %AS_REQUIRE_KIND_FIRMWARE
             * @param value a string, or NULL, e.g. `bootloader`
             * @returns A #AsRequire, or %NULL for not found
             */
            get_require_by_value(kind: RequireKind | null, value: string): Require;
            /**
             * Gets any requires the application has defined. A requirement could be that
             * a firmware version has to be below a defined version or that another
             * application is required to be installed.
             * @returns an array
             */
            get_requires(): Require[];
            /**
             * Gets any reviews the application has defined.
             * @returns an array
             */
            get_reviews(): Screenshot[];
            /**
             * Gets the scope of the application.
             * @returns enumerated value
             */
            get_scope(): AppScope;
            /**
             * Gets the default screenshot for the component.
             * @returns a screenshot or %NULL
             */
            get_screenshot_default(): Screenshot;
            /**
             * Gets any screenshots the application has defined.
             * @returns an array
             */
            get_screenshots(): Screenshot[];
            /**
             * Gets the token match fields. The bitfield given here is used to choose what
             * is included in the token cache.
             * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
             */
            get_search_match(): number;
            /**
             * Gets the default source filename the instance was populated from.
             * @returns string, or %NULL if unset
             */
            get_source_file(): string;
            /**
             * Gets the source kind, i.e. where the AsApp came from.
             * @returns enumerated value
             */
            get_source_kind(): FormatKind;
            /**
             * Gets the source package name that produced the binary package.
             * Only source packages producing more than one binary package will have this
             * entry set.
             * @returns string, or %NULL if unset
             */
            get_source_pkgname(): string;
            /**
             * Gets the application state.
             * @returns enumerated value
             */
            get_state(): AppState;
            /**
             * Gets any suggests the application has defined.
             * @returns an array
             */
            get_suggests(): Suggest[];
            /**
             * Gets any translations the application has defined.
             * @returns an array
             */
            get_translations(): Translation[];
            /**
             * Gets the trust flags, i.e. how trusted the incoming data is.
             * @returns bitfield
             */
            get_trust_flags(): number;
            /**
             * Gets the unique ID value to represent the component.
             * @returns the unique ID, e.g. `system/package/fedora/desktop/gimp.desktop/master`
             */
            get_unique_id(): string;
            /**
             * Gets the application upstream update contact email.
             * @returns string, or %NULL if unset
             */
            get_update_contact(): string;
            /**
             * Gets a URL.
             * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
             * @returns string, or %NULL if unset
             */
            get_url_item(url_kind: UrlKind | null): string;
            /**
             * Gets the URLs set for the application.
             * @returns hash table of URLs
             */
            get_urls(): GLib.HashTable<any, any>;
            /**
             * Gets the list of vetos.
             * @returns A list of vetos
             */
            get_vetos(): string[];
            /**
             * Searches the category list for a specific item.
             * @param category a category string, e.g. "DesktopSettings"
             * @returns %TRUE if the application has got the specified category
             */
            has_category(category: string): boolean;
            /**
             * Searches the compulsory for desktop list for a specific item.
             * @param desktop a desktop string, e.g. "GNOME"
             * @returns %TRUE if the application is compulsory for a specific desktop
             */
            has_compulsory_for_desktop(desktop: string): boolean;
            /**
             * Searches the kudo list for a specific item.
             * @param kudo a kudo string, e.g. "SearchProvider"
             * @returns %TRUE if the application has got the specified kudo
             */
            has_kudo(kudo: string): boolean;
            /**
             * Searches the kudo list for a specific item.
             * @param kudo a #AsKudoKind, e.g. %AS_KUDO_KIND_SEARCH_PROVIDER
             * @returns %TRUE if the application has got the specified kudo
             */
            has_kudo_kind(kudo: KudoKind | null): boolean;
            /**
             * Searches the permission list for a specific item.
             * @param permission a permission string, e.g. "Network"
             * @returns %TRUE if the application has got the specified permission
             */
            has_permission(permission: string): boolean;
            /**
             * Queries to see if an application has a specific attribute.
             * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
             * @returns %TRUE if the application has the attribute
             */
            has_quirk(quirk: AppQuirk | null): boolean;
            /**
             * Parses an AppData file and populates the application state.
             * @param data data to parse.
             * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
             * @returns %TRUE for success
             */
            parse_data(data: GLib.Bytes | Uint8Array, flags: number): boolean;
            /**
             * Parses a desktop or AppData file and populates the application state.
             *
             * Applications that are not suitable for the store will have vetos added.
             * @param filename file to load.
             * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
             * @returns %TRUE for success
             */
            parse_file(filename: string, flags: number): boolean;
            /**
             * Removed a menu category from the application.
             * @param category the category.
             */
            remove_category(category: string): void;
            /**
             * Removes a format the application has been built from.
             * @param format the #AsFormat.
             */
            remove_format(format: Format): void;
            /**
             * Remove a kudo the application has obtained.
             * @param kudo the kudo.
             */
            remove_kudo(kudo: string): void;
            /**
             * Removes a metadata item from the application.
             * @param key the metadata key.
             */
            remove_metadata(key: string): void;
            /**
             * Removes a reason to not include the application in the metadata.
             * @param description veto string
             */
            remove_veto(description: string): void;
            /**
             * Searches application data for a specific keyword.
             * @param search the search term.
             * @returns a match scrore, where 0 is no match and 100 is the best match.
             */
            search_matches(search: string): number;
            /**
             * Searches application data for all the specific keywords.
             * @param search the search terms.
             * @returns a match scrore, where 0 is no match and larger numbers are better matches. It's probably a good idea to use as_utils_search_tokenize() to populate search as very short or common keywords will return a lot of matches.
             */
            search_matches_all(search: string): number;
            /**
             * Set the branch that the instance was sourced from.
             * @param branch the branch, e.g. "master" or "3-16".
             */
            set_branch(branch: string): void;
            /**
             * Sets the application summary for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @param comment the application summary.
             */
            set_comment(locale: string | null, comment: string): void;
            /**
             * Sets the application description markup for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @param description the application description.
             */
            set_description(locale: string | null, description: string): void;
            /**
             * Sets the application developer name for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @param developer_name the application developer name.
             */
            set_developer_name(locale: string | null, developer_name: string): void;
            /**
             * Sets the icon path, where local icons would be found.
             * @param icon_path the local path.
             */
            set_icon_path(icon_path: string): void;
            /**
             * Sets a new application ID. Any invalid characters will be automatically replaced.
             * @param id the new _full_ application ID, e.g. "org.gnome.Software.desktop".
             */
            set_id(id: string): void;
            /**
             * Sets the application kind.
             * @param id_kind the #AsAppKind.
             */
            set_id_kind(id_kind: IdKind | null): void;
            /**
             * Sets the application kind.
             * @param kind the #AsAppKind.
             */
            set_kind(kind: AppKind | null): void;
            /**
             * Sets the merge kind of the application.
             * @param merge_kind the #AsAppMergeKind.
             */
            set_merge_kind(merge_kind: AppMergeKind | null): void;
            /**
             * Set the project license.
             * @param metadata_license the project license string.
             */
            set_metadata_license(metadata_license: string): void;
            /**
             * Sets the application name for a specific locale.
             * @param locale the locale. e.g. "en_GB"
             * @param name the application name.
             */
            set_name(locale: string | null, name: string): void;
            /**
             * Sets the application origin.
             * @param origin the origin, e.g. "fedora-21"
             */
            set_origin(origin: string): void;
            /**
             * Sets the application priority, where 0 is default and positive numbers
             * are better than negative numbers.
             * @param priority the priority.
             */
            set_priority(priority: number): void;
            /**
             * Set any project affiliation.
             * @param project_group the project group, e.g. "GNOME".
             */
            set_project_group(project_group: string): void;
            /**
             * Set the project license.
             * @param project_license the project license string.
             */
            set_project_license(project_license: string): void;
            /**
             * Sets the scope of the application.
             * @param scope the #AsAppScope.
             */
            set_scope(scope: AppScope | null): void;
            /**
             * Sets the token match fields. The bitfield given here is used to choose what
             * is included in the token cache.
             * @param search_match the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
             */
            set_search_match(search_match: number): void;
            /**
             * Set the file that the instance was sourced from.
             * @param source_file the filename.
             */
            set_source_file(source_file: string): void;
            /**
             * Sets the source kind.
             * @param source_kind the #AsFormatKind.
             */
            set_source_kind(source_kind: FormatKind | null): void;
            /**
             * Set the project license.
             * @param source_pkgname the project license string.
             */
            set_source_pkgname(source_pkgname: string): void;
            /**
             * Sets the application state.
             * @param state the #AsAppState.
             */
            set_state(state: AppState | null): void;
            /**
             * Sets the check flags, where %AS_APP_TRUST_FLAG_COMPLETE is completely
             * trusted input.
             * @param trust_flags the #AsAppTrustFlags.
             */
            set_trust_flags(trust_flags: number): void;
            /**
             * Set the project license.
             * @param update_contact the project license string.
             */
            set_update_contact(update_contact: string): void;
            /**
             * Copies information from the donor to the application object.
             * @param donor the donor.
             */
            subsume(donor: App): void;
            /**
             * Copies information from the donor to the application object.
             * @param donor the donor.
             * @param flags any optional #AsAppSubsumeFlags, e.g. %AS_APP_SUBSUME_FLAG_NO_OVERWRITE
             */
            subsume_full(donor: App, flags: number): void;
            /**
             * Exports a DOM tree to an XML file.
             * @param file a #GFile
             * @param cancellable A #GCancellable
             * @returns %TRUE for success
             */
            to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Exports a DOM tree to an XML string.
             * @returns an XML string, or %NULL
             */
            to_xml(): GLib.String;
            /**
             * Validates data in the instance for style and consistency.
             * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
             * @returns A list of problems, or %NULL
             */
            validate(flags: number): Problem[];
        }

        module Bundle {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Bundle extends GObject.Object {
            static $gtype: GObject.GType<Bundle>;

            // Constructors

            constructor(properties?: Partial<Bundle.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Bundle;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): BundleKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsBundleKind.
             */
            static kind_to_string(kind: BundleKind): string;

            // Methods

            /**
             * Gets the ID for this bundle.
             * @returns ID, e.g. "foobar-1.0.2"
             */
            get_id(): string;
            /**
             * Gets the bundle kind.
             * @returns the #AsBundleKind
             */
            get_kind(): BundleKind;
            /**
             * Gets the runtime required for this bundle.
             * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
             */
            get_runtime(): string;
            /**
             * Gets the SDK for this bundle.
             * @returns SDK identifier, e.g. "org.gnome.Sdk/i386/master"
             */
            get_sdk(): string;
            /**
             * Sets the ID for this bundle.
             * @param id the URL.
             */
            set_id(id: string): void;
            /**
             * Sets the bundle kind.
             * @param kind the #AsBundleKind, e.g. %AS_BUNDLE_KIND_FLATPAK.
             */
            set_kind(kind: BundleKind | null): void;
            /**
             * Sets the runtime required for this bundle.
             * @param runtime the URL.
             */
            set_runtime(runtime: string): void;
            /**
             * Sets the SDK for this bundle.
             * @param sdk the URL.
             */
            set_sdk(sdk: string): void;
        }

        module Checksum {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Checksum extends GObject.Object {
            static $gtype: GObject.GType<Checksum>;

            // Constructors

            constructor(properties?: Partial<Checksum.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Checksum;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param target a source kind string
             */
            static target_from_string(target: string): ChecksumTarget;
            /**
             * Converts the enumerated value to an text representation.
             * @param target the #AsChecksumTarget.
             */
            static target_to_string(target: ChecksumTarget): string;

            // Methods

            /**
             * Gets the full qualified URL for the checksum, usually pointing at some mirror.
             * @returns URL
             */
            get_filename(): string;
            /**
             * Gets the checksum kind.
             * @returns the #GChecksumType
             */
            get_kind(): GLib.ChecksumType;
            /**
             * Gets the checksum target.
             * @returns the #GChecksumType
             */
            get_target(): ChecksumTarget;
            /**
             * Gets the suggested value the checksum, including file extension.
             * @returns filename
             */
            get_value(): string;
            /**
             * Sets the filename used to generate the checksum.
             * @param filename the URL.
             */
            set_filename(filename: string): void;
            /**
             * Sets the checksum kind.
             * @param kind the #GChecksumType, e.g. %G_CHECKSUM_SHA1.
             */
            set_kind(kind: GLib.ChecksumType | null): void;
            /**
             * Sets the checksum target.
             * @param target the #GChecksumType, e.g. %AS_CHECKSUM_TARGET_CONTAINER.
             */
            set_target(target: ChecksumTarget | null): void;
            /**
             * Sets the checksum value filename.
             * @param value the new filename value.
             */
            set_value(value: string): void;
        }

        module ContentRating {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class ContentRating extends GObject.Object {
            static $gtype: GObject.GType<ContentRating>;

            // Constructors

            constructor(properties?: Partial<ContentRating.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): ContentRating;

            // Static methods

            /**
             * Gets the highest #AsContentRatingValue which is allowed to be seen by the
             * given Common Sense Media `age` for the given subsection `id`.
             *
             * For example, if the CSM age mappings for `violence-bloodshed` are:
             *  * age ≥ 0 for %AS_CONTENT_RATING_VALUE_NONE
             *  * age ≥ 9 for %AS_CONTENT_RATING_VALUE_MILD
             *  * age ≥ 11 for %AS_CONTENT_RATING_VALUE_MODERATE
             *  * age ≥ 18 for %AS_CONTENT_RATING_VALUE_INTENSE
             * then calling this function with `violence-bloodshed` and `age` set to 17 would
             * return %AS_CONTENT_RATING_VALUE_MODERATE. Calling it with age 18 would
             * return %AS_CONTENT_RATING_VALUE_INTENSE.
             * @param id the subsection ID e.g. `violence-cartoon`
             * @param age the CSM age
             */
            static attribute_from_csm_age(id: string, age: number): ContentRatingValue;
            /**
             * Get a human-readable description of what content would be expected to
             * require the content rating attribute given by `id` and `value`.
             * @param id the subsection ID e.g. `violence-cartoon`
             * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
             */
            static attribute_get_description(id: string, value: ContentRatingValue): string;
            /**
             * Gets the Common Sense Media approved age for a specific rating level.
             * @param id the subsection ID e.g. `violence-cartoon`
             * @param value the #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_INTENSE
             */
            static attribute_to_csm_age(id: string, value: ContentRatingValue): number;
            /**
             * Returns a list of all the valid OARS content rating attribute IDs as could
             * be passed to as_content_rating_add_attribute() or
             * as_content_rating_attribute_to_csm_age().
             */
            static get_all_rating_ids(): string[];
            /**
             * Format `age` as a human-readable string in the given rating `system`. This is
             * the way to present system-specific strings in a UI.
             * @param system an #AsContentRatingSystem
             * @param age a CSM age to format
             */
            static system_format_age(system: ContentRatingSystem, age: number): string | null;
            /**
             * Determine the most appropriate #AsContentRatingSystem for the given `locale`.
             * Content rating systems are selected by territory. If no content rating system
             * seems suitable, %AS_CONTENT_RATING_SYSTEM_IARC is returned.
             * @param locale a locale, in the format described in `man 3 setlocale`
             */
            static system_from_locale(locale: string): ContentRatingSystem;
            /**
             * Get the CSM ages corresponding to the entries returned by
             * as_content_rating_system_get_formatted_ages() for this `system`.
             * @param system an #AsContentRatingSystem
             */
            static system_get_csm_ages(system: ContentRatingSystem): number[];
            /**
             * Get an array of all the possible return values of
             * as_content_rating_system_format_age() for the given `system`. The array is
             * sorted with youngest CSM age first.
             * @param system an #AsContentRatingSystem
             */
            static system_get_formatted_ages(system: ContentRatingSystem): string[];
            /**
             * Get a human-readable string to identify `system`. %NULL will be returned for
             * %AS_CONTENT_RATING_SYSTEM_UNKNOWN.
             * @param system an #AsContentRatingSystem
             */
            static system_to_string(system: ContentRatingSystem): string | null;
            /**
             * Converts the text representation to an enumerated value.
             * @param value the string.
             */
            static value_from_string(value: string): ContentRatingValue;
            /**
             * Converts the enumerated value to an text representation.
             * @param value the #AsContentRatingValue.
             */
            static value_to_string(value: ContentRatingValue): string;

            // Methods

            /**
             * Adds an attribute value to the content rating.
             * @param id a content rating ID, e.g. `money-gambling`.
             * @param value a #AsContentRatingValue, e.g. %AS_CONTENT_RATING_VALUE_MODERATE.
             */
            add_attribute(id: string, value: ContentRatingValue | null): void;
            /**
             * Gets the content_rating kind.
             * @returns a string, e.g. "oars-1.0", or NULL
             */
            get_kind(): string;
            /**
             * Gets the lowest Common Sense Media approved age for the content_rating block.
             * NOTE: these numbers are based on the data and descriptions available from
             * https://www.commonsensemedia.org/about-us/our-mission/about-our-ratings and
             * you may disagree with them.
             *
             * You're free to disagree with these, and of course you should use your own
             * brain to work our if your child is able to cope with the concepts enumerated
             * here. Some 13 year olds may be fine with the concept of mutilation of body
             * parts; others may get nightmares.
             * @returns The age in years, 0 for no rating, or G_MAXUINT for no details.
             */
            get_minimum_age(): number;
            /**
             * Gets the set of ratings IDs which are present in this `content_rating`. An
             * example of a ratings ID is `violence-bloodshed`.
             *
             * The IDs are returned in lexicographical order.
             * @returns %NULL-terminated    array of ratings IDs; each ratings ID is owned by the #AsContentRating and    must not be freed, but the container must be freed with g_free()
             */
            get_rating_ids(): string[];
            /**
             * Gets the set value of a content rating key.
             * @param id A ratings ID, e.g. `violence-bloodshed`.
             * @returns the #AsContentRatingValue, or %AS_CONTENT_RATING_VALUE_UNKNOWN
             */
            get_value(id: string): ContentRatingValue;
            /**
             * Sets the content rating kind.
             * @param kind the rating kind, e.g. "oars-1.0"
             */
            set_kind(kind: string): void;
        }

        module Format {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Format extends GObject.Object {
            static $gtype: GObject.GType<Format>;

            // Constructors

            constructor(properties?: Partial<Format.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Format;

            // Static methods

            /**
             * Guesses the source kind based from the filename.
             * @param filename a file name
             */
            static guess_kind(filename: string): FormatKind;
            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): FormatKind;
            static kind_to_string(kind: FormatKind): string;

            // Methods

            /**
             * Checks if two formats are the same.
             * @param format2 a #AsFormat instance.
             * @returns %TRUE for success
             */
            equal(format2: Format): boolean;
            /**
             * Gets the filename required for this format.
             * @returns Runtime identifier, e.g. "org.gnome.Platform/i386/master"
             */
            get_filename(): string;
            /**
             * Gets the format kind.
             * @returns the #AsFormatKind
             */
            get_kind(): FormatKind;
            /**
             * Sets the filename required for this format.
             * @param filename the URL.
             */
            set_filename(filename: string): void;
            /**
             * Sets the format kind.
             * @param kind the #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA.
             */
            set_kind(kind: FormatKind | null): void;
        }

        module Icon {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Icon extends GObject.Object {
            static $gtype: GObject.GType<Icon>;

            // Constructors

            constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Icon;

            // Static methods

            static error_quark(): GLib.Quark;
            /**
             * Converts the text representation to an enumerated value.
             * @param icon_kind the string.
             */
            static kind_from_string(icon_kind: string): IconKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param icon_kind the @AsIconKind.
             */
            static kind_to_string(icon_kind: IconKind): string;

            // Methods

            /**
             * Converts the icon from one kind to another.
             * @param kind a %AsIconKind, e.g. #AS_ICON_KIND_EMBEDDED
             * @returns %TRUE for success
             */
            convert_to_kind(kind: IconKind | null): boolean;
            /**
             * Gets the absolute path on disk of the icon.
             * NOTE: This is only set for icons of type %AS_ICON_KIND_LOCAL
             * @returns the absolute filename on disk
             */
            get_filename(): string;
            /**
             * Gets the icon height.
             * @returns height in pixels
             */
            get_height(): number;
            /**
             * Gets the icon kind.
             * @returns the #AsIconKind
             */
            get_kind(): IconKind;
            /**
             * Gets the name of the icon, e.g. "epiphany.png"
             * @returns the basename of the icon
             */
            get_name(): string;
            /**
             * Gets the icon pixbuf if set.
             * @returns the #GdkPixbuf, or %NULL
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Gets the suggested prefix of the icon.
             * @returns filename
             */
            get_prefix(): string;
            /**
             * Gets the icon scale.
             * @returns scale factor
             */
            get_scale(): number;
            /**
             * Gets the full qualified URL for the icon, usually pointing at some mirror.
             * NOTE: This is only set for icons of type %AS_ICON_KIND_REMOTE
             * @returns the fully qualified URL
             */
            get_url(): string;
            /**
             * Gets the icon width.
             * @returns width in pixels
             */
            get_width(): number;
            /**
             * Loads the icon into a local pixbuf.
             * @param flags a #AsIconLoadFlags, e.g. %AS_ICON_LOAD_FLAG_SEARCH_SIZE
             * @returns %TRUE for success
             */
            load(flags: IconLoadFlags | null): boolean;
            /**
             * Sets the icon absolute filename.
             * @param filename the new icon URL.
             */
            set_filename(filename: string): void;
            /**
             * Sets the icon height.
             * @param height the height in pixels.
             */
            set_height(height: number): void;
            /**
             * Sets the icon kind.
             * @param kind the #AsIconKind, e.g. %AS_ICON_KIND_STOCK.
             */
            set_kind(kind: IconKind | null): void;
            /**
             * Sets the basename to use for the icon.
             * @param name the icon name, e.g. "gimp.png"
             */
            set_name(name: string): void;
            /**
             * Sets the icon pixbuf.
             * @param pixbuf the #GdkPixbuf, or %NULL
             */
            set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the icon prefix filename.
             * @param prefix the new filename prefix.
             */
            set_prefix(prefix: string): void;
            /**
             * Sets the icon scale.
             * @param scale the scale as a factor.
             */
            set_scale(scale: number): void;
            /**
             * Sets the icon URL.
             * @param url the new icon URL.
             */
            set_url(url: string): void;
            /**
             * Sets the icon width.
             * @param width the width in pixels.
             */
            set_width(width: number): void;
        }

        module Image {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Image extends GObject.Object {
            static $gtype: GObject.GType<Image>;

            // Constructors

            constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Image;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): ImageKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsImageKind.
             */
            static kind_to_string(kind: ImageKind): string;

            // Methods

            /**
             * Checks if two images are the same.
             * @param image2 a #AsImage instance.
             * @returns %TRUE for success
             */
            equal(image2: Image): boolean;
            /**
             * Gets the suggested basename the image, including file extension.
             * @returns filename
             */
            get_basename(): string;
            /**
             * Gets the image height.
             * @returns height in pixels
             */
            get_height(): number;
            /**
             * Gets the image kind.
             * @returns the #AsImageKind
             */
            get_kind(): ImageKind;
            /**
             * Gets the locale of the image.
             * @returns locale, or %NULL
             */
            get_locale(): string;
            /**
             * Gets the string representation of the pixbuf hash value.
             * @returns string representing the MD5 sum, or %NULL if unset
             */
            get_md5(): string;
            /**
             * Gets the image pixbuf if set.
             * @returns the #GdkPixbuf, or %NULL
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Gets the full qualified URL for the image, usually pointing at some mirror.
             * @returns URL
             */
            get_url(): string;
            /**
             * Gets the image width.
             * @returns width in pixels
             */
            get_width(): number;
            /**
             * Reads a pixbuf from a file.
             *
             * NOTE: This function also sets the suggested filename which can be retrieved
             * using as_image_get_basename(). This can be overridden if required.
             * @param filename filename to read from
             * @returns %TRUE for success
             */
            load_filename(filename: string): boolean;
            /**
             * Reads an image from a file.
             * @param filename filename to read from
             * @param dest_size The size of the constructed pixbuf, or 0 for the native size
             * @param src_size_min The smallest source size allowed, or 0 for none
             * @param flags a #AsImageLoadFlags, e.g. %AS_IMAGE_LOAD_FLAG_NONE
             * @returns %TRUE for success
             */
            load_filename_full(
                filename: string,
                dest_size: number,
                src_size_min: number,
                flags: ImageLoadFlags | null,
            ): boolean;
            /**
             * Saves a pixbuf to a file.
             * @param filename filename to write to
             * @param width target width, or 0 for default
             * @param height target height, or 0 for default
             * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
             * @returns %TRUE for success
             */
            save_filename(filename: string, width: number, height: number, flags: ImageSaveFlags | null): boolean;
            /**
             * Resamples a pixbuf to a specific size.
             * @param width target width, or 0 for default
             * @param height target height, or 0 for default
             * @param flags some #AsImageSaveFlags values, e.g. %AS_IMAGE_SAVE_FLAG_PAD_16_9
             * @returns A #GdkPixbuf of the specified size
             */
            save_pixbuf(width: number, height: number, flags: ImageSaveFlags | null): GdkPixbuf.Pixbuf;
            /**
             * Sets the image basename filename.
             * @param basename the new filename basename.
             */
            set_basename(basename: string): void;
            /**
             * Sets the image height.
             * @param height the height in pixels.
             */
            set_height(height: number): void;
            /**
             * Sets the image kind.
             * @param kind the #AsImageKind, e.g. %AS_IMAGE_KIND_THUMBNAIL.
             */
            set_kind(kind: ImageKind | null): void;
            /**
             * Sets the image locale.
             * @param locale the new image locale, e.g. "en_GB" or %NULL.
             */
            set_locale(locale: string): void;
            /**
             * Sets the image pixbuf.
             * @param pixbuf the #GdkPixbuf, or %NULL
             */
            set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the fully-qualified mirror URL to use for the image.
             * @param url the URL.
             */
            set_url(url: string): void;
            /**
             * Sets the image width.
             * @param width the width in pixels.
             */
            set_width(width: number): void;
        }

        module Launchable {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Launchable extends GObject.Object {
            static $gtype: GObject.GType<Launchable>;

            // Constructors

            constructor(properties?: Partial<Launchable.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Launchable;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): LaunchableKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsLaunchableKind.
             */
            static kind_to_string(kind: LaunchableKind): string;

            // Methods

            /**
             * Gets the launchable kind.
             * @returns the #AsLaunchableKind
             */
            get_kind(): LaunchableKind;
            /**
             * Gets the value to use for the launchable.
             * @returns usually a desktop ID, e.g. "gimp.desktop"
             */
            get_value(): string;
            /**
             * Sets the launchable kind.
             * @param kind the #AsLaunchableKind, e.g. %AS_LAUNCHABLE_KIND_DESKTOP_ID.
             */
            set_kind(kind: LaunchableKind | null): void;
            /**
             * Sets the fully-qualified mirror URL to use for the launchable.
             * @param value the URL.
             */
            set_value(value: string): void;
        }

        module Problem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Problem extends GObject.Object {
            static $gtype: GObject.GType<Problem>;

            // Constructors

            constructor(properties?: Partial<Problem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Problem;

            // Static methods

            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsProblemKind.
             */
            static kind_to_string(kind: ProblemKind): string;

            // Methods

            /**
             * Gets the problem kind.
             * @returns a #AsProblemKind, e.g. %AS_PROBLEM_KIND_TAG_MISSING
             */
            get_kind(): ProblemKind;
            /**
             * Gets the line number of the problem if known.
             * @returns a line number, where 0 is unknown
             */
            get_line_number(): number;
            /**
             * Gets the specific message for the problem.
             * @returns the message
             */
            get_message(): string;
            /**
             * Sets the problem kind.
             * @param kind the #AsProblemKind.
             */
            set_kind(kind: ProblemKind | null): void;
            /**
             * Adds an line_number to the problem.
             * @param line_number a #guint instance.
             */
            set_line_number(line_number: number): void;
            /**
             * Sets a message on the problem.
             * @param message the message text.
             */
            set_message(message: string): void;
        }

        module Provide {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Provide extends GObject.Object {
            static $gtype: GObject.GType<Provide>;

            // Constructors

            constructor(properties?: Partial<Provide.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Provide;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): ProvideKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsProvideKind.
             */
            static kind_to_string(kind: ProvideKind): string;

            // Methods

            /**
             * Gets the provide kind.
             * @returns the #AsProvideKind
             */
            get_kind(): ProvideKind;
            /**
             * Gets the full qualified URL for the provide, usually pointing at some mirror.
             * @returns URL
             */
            get_value(): string;
            /**
             * Sets the provide kind.
             * @param kind the #AsProvideKind, e.g. %AS_PROVIDE_KIND_LIBRARY.
             */
            set_kind(kind: ProvideKind | null): void;
            /**
             * Sets the fully-qualified mirror URL to use for the provide.
             * @param value the URL.
             */
            set_value(value: string): void;
        }

        module Release {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Release extends GObject.Object {
            static $gtype: GObject.GType<Release>;

            // Constructors

            constructor(properties?: Partial<Release.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Release;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind_str the string.
             */
            static kind_from_string(kind_str: string): ReleaseKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsReleaseKind.
             */
            static kind_to_string(kind: ReleaseKind): string;
            /**
             * Converts the text representation to an enumerated value.
             * @param state a string
             */
            static state_from_string(state: string): ReleaseState;
            /**
             * Converts the enumerated value to an text representation.
             * @param state the #AsReleaseState, e.g. %AS_RELEASE_STATE_INSTALLED
             */
            static state_to_string(state: ReleaseState): string;

            // Methods

            /**
             * Adds a release checksum.
             * @param checksum a #AsChecksum instance.
             */
            add_checksum(checksum: Checksum): void;
            /**
             * Adds a release location.
             * @param location the location string.
             */
            add_location(location: string): void;
            /**
             * Gets the release blob, which is typically firmware file data.
             * @param filename a filename
             * @returns a #GBytes, or %NULL for not set
             */
            get_blob(filename: string): GLib.Bytes;
            /**
             * Gets the checksum for a release.
             * @param fn a file basename
             * @returns an #AsChecksum, or %NULL for not found
             */
            get_checksum_by_fn(fn: string): Checksum;
            /**
             * Gets the checksum for a release.
             * @param target a #AsChecksumTarget, e.g. %AS_CHECKSUM_TARGET_CONTAINER
             * @returns an #AsChecksum, or %NULL for not found
             */
            get_checksum_by_target(target: ChecksumTarget | null): Checksum;
            /**
             * Gets the release checksums.
             * @returns list of checksums
             */
            get_checksums(): Checksum[];
            /**
             * Gets the release description markup for a given locale.
             * @param locale the locale. e.g. "en_GB"
             * @returns markup, or %NULL for not set or invalid
             */
            get_description(locale?: string | null): string;
            /**
             * Gets the typical install duration.
             * @returns install duration in seconds, or 0 for unset
             */
            get_install_duration(): number;
            /**
             * Gets the type of the release.
             * @returns enumerated value, e.g. %AS_RELEASE_KIND_STABLE
             */
            get_kind(): ReleaseKind;
            /**
             * Gets the default release location, typically a URL.
             * @returns string, or %NULL for not set or invalid
             */
            get_location_default(): string;
            /**
             * Gets the release locations, typically URLs.
             * @returns list of locations
             */
            get_locations(): string[];
            /**
             * Gets the release size.
             * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
             * @returns The size in bytes, or 0 for unknown.
             */
            get_size(kind: SizeKind | null): number;
            /**
             * Gets the release state.
             * @returns enumberated value, or %AS_RELEASE_STATE_UNKNOWN for not set or invalid
             */
            get_state(): ReleaseState;
            /**
             * Gets the release timestamp.
             * @returns timestamp, or 0 for unset
             */
            get_timestamp(): number;
            /**
             * Gets the release urgency.
             * @returns enumberated value, or %AS_URGENCY_KIND_UNKNOWN for not set or invalid
             */
            get_urgency(): UrgencyKind;
            /**
             * Gets a URL.
             * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
             * @returns string, or %NULL if unset
             */
            get_url(url_kind: UrlKind | null): string;
            /**
             * Gets the release version.
             * @returns string, or %NULL for not set or invalid
             */
            get_version(): string;
            /**
             * Sets a release blob, which is typically firmware data or a detached signature.
             *
             * NOTE: This is not stored in the XML file, and is only available in-memory.
             * @param filename a filename
             * @param blob the #GBytes data blob
             */
            set_blob(filename: string, blob: GLib.Bytes | Uint8Array): void;
            /**
             * Sets the description release markup.
             * @param locale the locale. e.g. "en_GB"
             * @param description the description markup.
             */
            set_description(locale: string | null, description: string): void;
            /**
             * Sets the typical duration of the install.
             * @param install_duration the install duration in seconds
             */
            set_install_duration(install_duration: number): void;
            /**
             * Sets the release kind.
             * @param kind the #AsReleaseKind
             */
            set_kind(kind: ReleaseKind | null): void;
            /**
             * Sets the release size.
             * @param kind a #AsSizeKind, e.g. #AS_SIZE_KIND_DOWNLOAD
             * @param size a size in bytes, or 0 for unknown
             */
            set_size(kind: SizeKind | null, size: number): void;
            /**
             * Sets the release state.
             * @param state the release state, e.g. %AS_RELEASE_STATE_INSTALLED
             */
            set_state(state: ReleaseState | null): void;
            /**
             * Sets the release timestamp.
             * @param timestamp the timestamp value.
             */
            set_timestamp(timestamp: number): void;
            /**
             * Sets the release urgency.
             * @param urgency the release urgency, e.g. %AS_URGENCY_KIND_CRITICAL
             */
            set_urgency(urgency: UrgencyKind | null): void;
            /**
             * Adds some URL data to the application.
             * @param url_kind the URL kind, e.g. %AS_URL_KIND_DETAILS
             * @param url the full URL.
             */
            set_url(url_kind: UrlKind | null, url: string): void;
            /**
             * Sets the release version.
             * @param version the version string.
             */
            set_version(version: string): void;
            /**
             * Compares two release.
             * @param rel2 a #AsRelease instance.
             * @returns -1 if rel1 > rel2, +1 if rel1 < rel2, 0 otherwise
             */
            vercmp(rel2: Release): number;
        }

        module Require {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Require extends GObject.Object {
            static $gtype: GObject.GType<Require>;

            // Constructors

            constructor(properties?: Partial<Require.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Require;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param compare the string.
             */
            static compare_from_string(compare: string): RequireCompare;
            /**
             * Converts the enumerated value to an text representation.
             * @param compare the #AsRequireCompare.
             */
            static compare_to_string(compare: RequireCompare): string;
            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): RequireKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsRequireKind.
             */
            static kind_to_string(kind: RequireKind): string;

            // Methods

            /**
             * Checks if two requires are the same.
             * @param require2 a #AsRequire instance.
             * @returns %TRUE for success
             */
            equal(require2: Require): boolean;
            /**
             * Gets the require version comparison type.
             * @returns the #AsRequireKind
             */
            get_compare(): RequireCompare;
            /**
             * Gets the require kind.
             * @returns the #AsRequireKind
             */
            get_kind(): RequireKind;
            /**
             * Gets the require value if set.
             * @returns the value, e.g. "bootloader"
             */
            get_value(): string;
            /**
             * Gets the require version if set.
             * @returns the version, e.g. "0.1.2"
             */
            get_version(): string;
            /**
             * Sets the require version comparison type.
             * @param compare the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
             */
            set_compare(compare: RequireCompare | null): void;
            /**
             * Sets the require kind.
             * @param kind the #AsRequireKind, e.g. %AS_REQUIRE_KIND_ID.
             */
            set_kind(kind: RequireKind | null): void;
            /**
             * Sets the require value.
             * @param value an require version, e.g. `firmware`
             */
            set_value(value: string): void;
            /**
             * Sets the require version.
             * @param version an version number, e.g. `0.1.2`
             */
            set_version(version: string): void;
            /**
             * Compares the version number of the requirement with a predicate.
             * @param version a version number, e.g. `0.1.3`
             * @returns %TRUE if the predicate was true
             */
            version_compare(version: string): boolean;
        }

        module Review {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                date: Review;
                description: string;
                flags: number;
                id: string;
                locale: string;
                rating: number;
                reviewer_id: string;
                reviewerId: string;
                reviewer_name: string;
                reviewerName: string;
                summary: string;
                version: string;
            }
        }

        class Review extends GObject.Object {
            static $gtype: GObject.GType<Review>;

            // Properties

            get date(): Review;
            set date(val: Review);
            get description(): string;
            set description(val: string);
            get flags(): number;
            set flags(val: number);
            get id(): string;
            set id(val: string);
            get locale(): string;
            set locale(val: string);
            get rating(): number;
            set rating(val: number);
            get reviewer_id(): string;
            set reviewer_id(val: string);
            get reviewerId(): string;
            set reviewerId(val: string);
            get reviewer_name(): string;
            set reviewer_name(val: string);
            get reviewerName(): string;
            set reviewerName(val: string);
            get summary(): string;
            set summary(val: string);
            get version(): string;
            set version(val: string);

            // Constructors

            constructor(properties?: Partial<Review.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Review;

            // Methods

            /**
             * Adds flags to an existing review without replacing the other flags.
             * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
             */
            add_flags(flags: ReviewFlags | null): void;
            /**
             * Adds metadata to the review object.
             * It is left for the the plugin to use this method as required, but a
             * typical use would be to store some secure authentication token.
             * @param key a string
             * @param value a string
             */
            add_metadata(key: string, value: string): void;
            /**
             * Checks if two reviews are the same.
             * @param review2 a #AsReview instance.
             * @returns %TRUE for success
             */
            equal(review2: Review): boolean;
            /**
             * Gets the date the review was originally submitted.
             * @returns the #GDateTime, or %NULL for unset
             */
            get_date(): GLib.DateTime;
            /**
             * Gets the multi-line review text that forms the body of the review.
             * @returns the string, or %NULL
             */
            get_description(): string;
            /**
             * Gets any flags set on the review, for example if the user has already
             * voted on the review or if the user wrote the review themselves.
             * @returns a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
             */
            get_flags(): ReviewFlags;
            /**
             * Gets the review id.
             * @returns the review identifier, e.g. "deadbeef"
             */
            get_id(): string;
            /**
             * Gets the locale for the review.
             * @returns the string, or %NULL
             */
            get_locale(): string;
            /**
             * Gets some metadata from a review object.
             * It is left for the the plugin to use this method as required, but a
             * typical use would be to retrieve some secure authentication token.
             * @param key a string
             * @returns A string value, or %NULL for not found
             */
            get_metadata_item(key: string): string;
            /**
             * This allows the UI to sort reviews into the correct order.
             * Higher numbers indicate a more important or relevant review.
             * @returns the review priority, or 0 for unset.
             */
            get_priority(): number;
            /**
             * Gets the star rating of the review, where 100 is 5 stars.
             * @returns integer as a percentage, or 0 for unset
             */
            get_rating(): number;
            /**
             * Gets the name of the reviewer.
             * @returns the reviewer ID, e.g. "deadbeef", or %NULL
             */
            get_reviewer_id(): string;
            /**
             * Gets the name of the reviewer.
             * @returns the reviewer name, e.g. "David Smith", or %NULL
             */
            get_reviewer_name(): string;
            /**
             * Gets the review summary.
             * @returns the one-line summary, e.g. "Awesome application"
             */
            get_summary(): string;
            /**
             * Gets the version string for the application being reviewed..
             * @returns the version string, e.g. "0.1.2", or %NULL for unset
             */
            get_version(): string;
            /**
             * Sets the date the review was originally submitted.
             * @param date a #GDateTime, or %NULL
             */
            set_date(date: GLib.DateTime): void;
            /**
             * Sets the multi-line review text that forms the body of the review.
             * @param description multi-line description
             */
            set_description(description: string): void;
            /**
             * Gets any flags set on the review, for example if the user has already
             * voted on the review or if the user wrote the review themselves.
             * @param flags a #AsReviewFlags, e.g. %AS_REVIEW_FLAG_SELF
             */
            set_flags(flags: ReviewFlags | null): void;
            /**
             * Sets the review identifier that is unique to each review.
             * @param id review identifier, e.g. "deadbeef"
             */
            set_id(id: string): void;
            /**
             * Sets the locale for the review.
             * @param locale locale, e.g. "en_GB"
             */
            set_locale(locale: string): void;
            /**
             * Sets the priority for the review, where positive numbers indicate
             * a better review for the specific user.
             * @param priority a priority value
             */
            set_priority(priority: number): void;
            /**
             * Sets the star rating of the review, where 100 is 5 stars..
             * @param rating a integer as a percentage, or 0 for unset
             */
            set_rating(rating: number): void;
            /**
             * Sets the name of the reviewer, which can be left unset.
             * @param reviewer_id the reviewer ID, e.g. "deadbeef"
             */
            set_reviewer_id(reviewer_id: string): void;
            /**
             * Sets the name of the reviewer, which can be left unset.
             * @param reviewer_name the reviewer name, e.g. "David Smith"
             */
            set_reviewer_name(reviewer_name: string): void;
            /**
             * Sets the one-line summary that may be displayed in bold.
             * @param summary a one-line summary, e.g. "Awesome application"
             */
            set_summary(summary: string): void;
            /**
             * Sets the version string for the application being reviewed.
             * @param version a version string, e.g. "0.1.2"
             */
            set_version(version: string): void;
        }

        module Screenshot {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Screenshot extends GObject.Object {
            static $gtype: GObject.GType<Screenshot>;

            // Constructors

            constructor(properties?: Partial<Screenshot.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Screenshot;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): ScreenshotKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsScreenshotKind.
             */
            static kind_to_string(kind: ScreenshotKind): string;

            // Methods

            /**
             * Adds an image to the screenshot.
             * @param image a #AsImage instance.
             */
            add_image(image: Image): void;
            /**
             * Checks if two screenshots are the same.
             * @param screenshot2 a #AsScreenshot instance.
             * @returns %TRUE for success
             */
            equal(screenshot2: Screenshot): boolean;
            /**
             * Gets the image caption for a specific locale.
             * @param locale the locale, or %NULL. e.g. "en_GB"
             * @returns the caption
             */
            get_caption(locale?: string | null): string;
            /**
             * Gets the AsImage closest to the target size. The #AsImage may not actually
             * be the requested size, and the application may have to pad / rescale the
             * image to make it fit.
             * @param width target width
             * @param height target height
             * @returns an #AsImage, or %NULL
             */
            get_image(width: number, height: number): Image;
            /**
             * Gets the AsImage closest to the target size with the specified locale.
             * The #AsImage may not actually be the requested size, and the application may
             * have to pad / rescale the image to make it fit.
             *
             * FIXME: This function assumes the images are ordered in preference order, e.g.
             * "en_GB -> en -> NULL"
             * @param locale locale, e.g. "en_GB"
             * @param width target width
             * @param height target height
             * @returns an #AsImage, or %NULL
             */
            get_image_for_locale(locale: string | null, width: number, height: number): Image;
            /**
             * Gets the images included in the screenshot of all sizes and locales.
             * @returns an array
             */
            get_images(): Image[];
            /**
             * Returns all images of all sizes that are compatible with a specific locale.
             * @param locale a locale, e.g. `en_GB`
             * @returns an array
             */
            get_images_for_locale(locale: string): Image[];
            /**
             * Gets the screenshot kind.
             * @returns a #AsScreenshotKind
             */
            get_kind(): ScreenshotKind;
            /**
             * Gets the screenshot priority.
             * @returns a priority value
             */
            get_priority(): number;
            /**
             * Gets the source image (the unscaled version) for the screenshot
             * @returns an #AsImage, or %NULL
             */
            get_source(): Image;
            /**
             * Sets a caption on the screenshot for a specific locale.
             * @param locale the locale, or %NULL. e.g. "en_GB"
             * @param caption the caption text.
             */
            set_caption(locale: string | null, caption: string): void;
            /**
             * Sets the screenshot kind.
             * @param kind the #AsScreenshotKind.
             */
            set_kind(kind: ScreenshotKind | null): void;
            /**
             * Sets the screenshot priority. Higher numbers are better.
             * @param priority the priority value.
             */
            set_priority(priority: number): void;
        }

        module Store {
            // Signal callback interfaces

            interface AppAdded {
                (app: App): void;
            }

            interface AppChanged {
                (app: App): void;
            }

            interface AppRemoved {
                (app: App): void;
            }

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Store extends GObject.Object {
            static $gtype: GObject.GType<Store>;

            // Constructors

            constructor(properties?: Partial<Store.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Store;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'app-added', callback: (_source: this, app: App) => void): number;
            connect_after(signal: 'app-added', callback: (_source: this, app: App) => void): number;
            emit(signal: 'app-added', app: App): void;
            connect(signal: 'app-changed', callback: (_source: this, app: App) => void): number;
            connect_after(signal: 'app-changed', callback: (_source: this, app: App) => void): number;
            emit(signal: 'app-changed', app: App): void;
            connect(signal: 'app-removed', callback: (_source: this, app: App) => void): number;
            connect_after(signal: 'app-removed', callback: (_source: this, app: App) => void): number;
            emit(signal: 'app-removed', app: App): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Static methods

            static error_quark(): GLib.Quark;

            // Virtual methods

            vfunc_app_added(app: App): void;
            vfunc_app_changed(app: App): void;
            vfunc_app_removed(app: App): void;
            vfunc_changed(): void;

            // Methods

            /**
             * Adds an application to the store. If a lower priority application has already
             * been added then this new application will replace it.
             *
             * Additionally only applications where the kind is known will be added.
             * @param app a #AsApp instance.
             */
            add_app(app: App): void;
            /**
             * Adds several applications to the store.
             *
             * Additionally only applications where the kind is known will be added.
             * @param apps an array of apps
             */
            add_apps(apps: App[]): void;
            /**
             * Adds a filter to the store so that only components of this type are
             * loaded into the store. This may be useful if the client is only interested
             * in certain types of component, or not interested in loading components
             * it cannot process.
             *
             * If no filter is set then all types of components are loaded.
             * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
             */
            add_filter(kind: AppKind | null): void;
            /**
             * Adds a metadata index key.
             *
             * NOTE: if applications are removed *all* the indexes will be invalid and
             * will have to be re-added.
             * @param key the metadata key.
             */
            add_metadata_index(key: string): void;
            /**
             * Converts all the icons in the store to a specific kind.
             * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
             * @returns %TRUE for success
             */
            convert_icons(kind: IconKind | null): boolean;
            /**
             * Gets an array of all the valid applications in the store.
             * @returns an array
             */
            dup_apps(): App[];
            /**
             * Gets an array of all the merge applications that match a specific ID.
             * @param id the application full ID.
             * @returns an array
             */
            dup_apps_by_id_merge(id: string): App[];
            /**
             * Parses an appstream store presented as an archive. This is typically
             * a .cab file containing firmware files.
             * @param bytes a #GBytes.
             * @param cancellable a #GCancellable.
             * @returns %TRUE for success
             */
            from_bytes(bytes: GLib.Bytes | Uint8Array, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Parses an AppStream XML or DEP-11 YAML file and adds any valid applications
             * to the store.
             *
             * If the root node does not have a 'origin' attribute, then the method
             * as_store_set_origin() should be called *before* this function if cached
             * icons are required.
             *
             * If `file` does not exist, %G_IO_ERROR_NOT_FOUND will be returned. Other
             * #GIOErrors and #AsStoreErrors may be returned as appropriate.
             * @param file a #GFile.
             * @param icon_root the icon path, or %NULL for the default (unused)
             * @param cancellable a #GCancellable.
             * @returns %TRUE for success
             */
            from_file(file: Gio.File, icon_root?: string | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Parses AppStream XML file and adds any valid applications to the store.
             *
             * If the root node does not have a 'origin' attribute, then the method
             * as_store_set_origin() should be called *before* this function if cached
             * icons are required.
             * @param data XML data
             * @param icon_root the icon path, or %NULL for the default.
             * @returns %TRUE for success
             */
            from_xml(data: string, icon_root?: string | null): boolean;
            /**
             * Gets the flags used for adding applications to the store.
             * @returns the #AsStoreAddFlags, or 0 if unset
             */
            get_add_flags(): number;
            /**
             * Gets the AppStream API version.
             * @returns the API version
             */
            get_api_version(): number;
            /**
             * Finds an application in the store by ID.
             * If more than one application exists matching the specific ID,
             * (for instance when using %AS_STORE_ADD_FLAG_USE_UNIQUE_ID) then the
             * first item that was added is returned.
             * @param id the application full ID.
             * @returns a #AsApp or %NULL
             */
            get_app_by_id(id: string): App;
            /**
             * Finds an application in the store ignoring the prefix type.
             * @param id the application full ID.
             * @returns a #AsApp or %NULL
             */
            get_app_by_id_ignore_prefix(id: string): App;
            /**
             * Finds an application in the store by either by the current desktop ID
             * or a desktop ID that it has used previously. This allows upstream software
             * to change their ID (e.g. from cheese.desktop to org.gnome.Cheese.desktop)
             * without us duplicating entries in the software center.
             * @param id the application full ID.
             * @returns a #AsApp or %NULL
             */
            get_app_by_id_with_fallbacks(id: string): App;
            /**
             * Finds an application in the store that provides a specific launchable.
             * @param kind the #AsLaunchableKind
             * @param value the provide value, e.g. "gimp.desktop"
             * @returns a #AsApp or %NULL
             */
            get_app_by_launchable(kind: LaunchableKind | null, value: string): App;
            /**
             * Finds an application in the store by package name.
             * @param pkgname the package name.
             * @returns a #AsApp or %NULL
             */
            get_app_by_pkgname(pkgname: string): App;
            /**
             * Finds an application in the store by any of the possible package names.
             * @param pkgnames the package names to find.
             * @returns a #AsApp or %NULL
             */
            get_app_by_pkgnames(pkgnames: string): App;
            /**
             * Finds an application in the store by something that it provides.
             * @param kind the #AsProvideKind
             * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
             * @returns a #AsApp or %NULL
             */
            get_app_by_provide(kind: ProvideKind | null, value: string): App;
            /**
             * Finds an application in the store by matching the unique ID.
             * @param unique_id the application unique ID, e.g.      `user/flatpak/gnome-apps-nightly/app/gimp.desktop/master`
             * @param search_flags the search flags, e.g. %AS_STORE_SEARCH_FLAG_USE_WILDCARDS
             * @returns a #AsApp or %NULL
             */
            get_app_by_unique_id(unique_id: string, search_flags: number): App;
            /**
             * Gets an array of all the valid applications in the store.
             * @returns an array
             */
            get_apps(): App[];
            /**
             * Gets an array of all the applications that match a specific ID,
             * ignoring the prefix type.
             * @param id the application full ID.
             * @returns an array
             */
            get_apps_by_id(id: string): App[];
            /**
             * Gets an array of all the merge applications that match a specific ID.
             * @param id the application full ID.
             * @returns an array
             */
            get_apps_by_id_merge(id: string): App[];
            /**
             * Gets an array of all the applications that match a specific metadata element.
             * @param key metadata key
             * @param value metadata value
             * @returns an array
             */
            get_apps_by_metadata(key: string, value: string): App[];
            /**
             * Finds any applications in the store by something that they provides.
             * @param kind the #AsProvideKind
             * @param value the provide value, e.g. "com.hughski.ColorHug2.firmware"
             * @returns an array of applications
             */
            get_apps_by_provide(kind: ProvideKind | null, value: string): App[];
            /**
             * Gets the metadata builder identifier, which is used to work out if old
             * metadata is compatible with this builder.
             * @returns the builder_id string, or %NULL if unset
             */
            get_builder_id(): string;
            /**
             * Gets the destdir, which is used to prefix usr.
             * @returns the destdir path, or %NULL if unset
             */
            get_destdir(): string;
            /**
             * Gets the metadata origin, which is used to locate icons.
             * @returns the origin string, or %NULL if unset
             */
            get_origin(): string;
            /**
             * Gets the token match fields. The bitfield given here is used to choose what
             * is included in the token cache.
             * @returns a #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
             */
            get_search_match(): number;
            /**
             * Gets the size of the store after deduplication and prioritization has
             * taken place.
             * @returns the number of usable applications in the store
             */
            get_size(): number;
            /**
             * Gets the AppStream API version.
             * @returns the API version
             */
            get_version(): string;
            /**
             * Gets the flags used for adding files to the store.
             * @returns the #AsStoreWatchFlags, or 0 if unset
             */
            get_watch_flags(): number;
            /**
             * Loads the store from the default locations.
             * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
             * @param cancellable a #GCancellable.
             * @returns %TRUE for success
             */
            load(flags: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously loads the store from the default locations.
             * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
             * @param cancellable a #GCancellable.
             */
            load_async(flags: StoreLoadFlags | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously loads the store from the default locations.
             * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
             * @param cancellable a #GCancellable.
             * @param callback A #GAsyncReadyCallback
             */
            load_async(
                flags: StoreLoadFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously loads the store from the default locations.
             * @param flags #AsStoreLoadFlags, e.g. %AS_STORE_LOAD_FLAG_APP_INFO_SYSTEM
             * @param cancellable a #GCancellable.
             * @param callback A #GAsyncReadyCallback
             */
            load_async(
                flags: StoreLoadFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Retrieve the result of as_store_load_async().
             * @param result A #GAsyncResult
             * @returns %TRUE for success
             */
            load_finish(result: Gio.AsyncResult): boolean;
            /**
             * Loads the store from a specific path.
             * @param path A path to load
             * @param cancellable a #GCancellable.
             * @returns %TRUE for success
             */
            load_path(path: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously loads the store from a specific path.
             * @param path A path to load
             * @param cancellable a #GCancellable.
             */
            load_path_async(path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously loads the store from a specific path.
             * @param path A path to load
             * @param cancellable a #GCancellable.
             * @param callback A #GAsyncReadyCallback
             */
            load_path_async(
                path: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously loads the store from a specific path.
             * @param path A path to load
             * @param cancellable a #GCancellable.
             * @param callback A #GAsyncReadyCallback
             */
            load_path_async(
                path: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Retrieve the result of as_store_load_path_async().
             * @param result A #GAsyncResult
             * @returns %TRUE for success
             */
            load_path_finish(result: Gio.AsyncResult): boolean;
            /**
             * Populates the token cache for all applications in the store. This allows
             * all the search keywords for all applications in the store to be
             * pre-processed at one time in multiple threads rather than on demand.
             *
             * Note: Calling as_app_search_matches() automatically generates the search
             * cache for the #AsApp object if it has not already been generated.
             */
            load_search_cache(): void;
            /**
             * Removes all applications from the store.
             */
            remove_all(): void;
            /**
             * Removes an application from the store if it exists.
             * @param app a #AsApp instance.
             */
            remove_app(app: App): void;
            /**
             * Removes an application from the store if it exists.
             * @param id an application id
             */
            remove_app_by_id(id: string): void;
            /**
             * Removes any applications from the store if they have any vetos.
             */
            remove_apps_with_veto(): void;
            /**
             * Removed a filter from the store so that components of this type are no longer
             * loaded into the store. This may be useful if the client is only interested
             * in certain types of component.
             *
             * If all filters are removed then all types of components are loaded.
             * @param kind a #AsAppKind, e.g. %AS_APP_KIND_FIRMWARE
             */
            remove_filter(kind: AppKind | null): void;
            /**
             * Sets the flags used when adding applications to the store.
             *
             * NOTE: Using %AS_STORE_ADD_FLAG_PREFER_LOCAL may be a privacy risk depending on
             * your level of paranoia, and should not be used by default.
             * @param add_flags the #AsStoreAddFlags, e.g. %AS_STORE_ADD_FLAG_NONE
             */
            set_add_flags(add_flags: number): void;
            /**
             * Sets the AppStream API version.
             * @param api_version the API version
             */
            set_api_version(api_version: number): void;
            /**
             * Sets the metadata builder identifier, which is used to work out if old
             * metadata can be used.
             * @param builder_id the builder_id, e.g. "appstream-glib:1"
             */
            set_builder_id(builder_id: string): void;
            /**
             * Sets the destdir, which is used to prefix usr.
             * @param destdir the destdir, e.g. "/tmp"
             */
            set_destdir(destdir: string): void;
            /**
             * Sets the metadata origin, which is used to locate icons.
             * @param origin the origin, e.g. "fedora-21"
             */
            set_origin(origin: string): void;
            /**
             * Sets the token match fields. The bitfield given here is used to choose what
             * is included in the token cache.
             * @param search_match the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
             */
            set_search_match(search_match: number): void;
            /**
             * Sets the AppStream API version.
             * @param api_version the API version
             */
            set_version(api_version: string): void;
            /**
             * Sets the flags used when adding files to the store.
             * @param watch_flags the #AsStoreWatchFlags, e.g. %AS_STORE_WATCH_FLAG_NONE
             */
            set_watch_flags(watch_flags: number): void;
            /**
             * Outputs an optionally compressed XML file of all the applications in the store.
             * @param file file
             * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
             * @param cancellable A #GCancellable, or %NULL
             * @returns A #GString
             */
            to_file(file: Gio.File, flags: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Outputs an XML representation of all the applications in the store.
             * @param flags the AsNodeToXmlFlags, e.g. %AS_NODE_TO_XML_FLAG_NONE.
             * @returns A #GString
             */
            to_xml(flags: number): GLib.String;
            /**
             * Validates information in the store for data applicable to the defined
             * metadata version.
             * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
             * @returns A list of problems, or %NULL
             */
            validate(flags: number): Problem[];
        }

        module Suggest {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Suggest extends GObject.Object {
            static $gtype: GObject.GType<Suggest>;

            // Constructors

            constructor(properties?: Partial<Suggest.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Suggest;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): SuggestKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsSuggestKind.
             */
            static kind_to_string(kind: SuggestKind): string;

            // Methods

            /**
             * Add a the suggest application ID.
             * @param id an application ID, e.g. `gimp.desktop`
             */
            add_id(id: string): void;
            /**
             * Gets the suggest ids if set.
             * @returns the #GPtrArray, or %NULL
             */
            get_ids(): string[];
            /**
             * Gets the suggest kind.
             * @returns the #AsSuggestKind
             */
            get_kind(): SuggestKind;
            /**
             * Sets the suggest kind.
             * @param kind the #AsSuggestKind, e.g. %AS_SUGGEST_KIND_UPSTREAM.
             */
            set_kind(kind: SuggestKind | null): void;
        }

        module Translation {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Translation extends GObject.Object {
            static $gtype: GObject.GType<Translation>;

            // Constructors

            constructor(properties?: Partial<Translation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Translation;

            // Static methods

            /**
             * Converts the text representation to an enumerated value.
             * @param kind the string.
             */
            static kind_from_string(kind: string): TranslationKind;
            /**
             * Converts the enumerated value to an text representation.
             * @param kind the #AsTranslationKind.
             */
            static kind_to_string(kind: TranslationKind): string;

            // Methods

            /**
             * Gets the ID for this translation.
             * @returns ID, e.g. "foobar-1.0.2"
             */
            get_id(): string;
            /**
             * Gets the translation kind.
             * @returns the #AsTranslationKind
             */
            get_kind(): TranslationKind;
            /**
             * Sets the ID for this translation.
             * @param id the URL.
             */
            set_id(id: string): void;
            /**
             * Sets the translation kind.
             * @param kind the #AsTranslationKind, e.g. %AS_TRANSLATION_KIND_THUMBNAIL.
             */
            set_kind(kind: TranslationKind | null): void;
        }

        type AgreementClass = typeof Agreement;
        type AgreementSectionClass = typeof AgreementSection;
        type AppClass = typeof App;
        type BundleClass = typeof Bundle;
        type ChecksumClass = typeof Checksum;
        type ContentRatingClass = typeof ContentRating;
        type FormatClass = typeof Format;
        type IconClass = typeof Icon;
        type ImageClass = typeof Image;
        type LaunchableClass = typeof Launchable;
        type ProblemClass = typeof Problem;
        type ProvideClass = typeof Provide;
        type ReleaseClass = typeof Release;
        type RequireClass = typeof Require;
        type ReviewClass = typeof Review;
        type ScreenshotClass = typeof Screenshot;
        type StoreClass = typeof Store;
        type SuggestClass = typeof Suggest;
        type TranslationClass = typeof Translation;
        type AppSourceKind = FormatKind;
        type ImageAlphaFlags = number;
        type Node = GLib.Node;
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

    export default AppStreamGlib;
}

declare module 'gi://AppStreamGlib' {
    import AppStreamGlib10 from 'gi://AppStreamGlib?version=1.0';
    export default AppStreamGlib10;
}
// END
