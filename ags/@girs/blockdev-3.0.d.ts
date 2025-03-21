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

declare module 'gi://BlockDev?version=3.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace BlockDev {
        /**
         * BlockDev-3.0
         */

        class BtrfsError extends GLib.Error {
            static $gtype: GObject.GType<BtrfsError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static DEVICE: number;
            static PARSE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace BtrfsTech {
            export const $gtype: GObject.GType<BtrfsTech>;
        }

        enum BtrfsTech {
            FS,
            MULTI_DEV,
            SUBVOL,
            SNAPSHOT,
        }
        class CryptoError extends GLib.Error {
            static $gtype: GObject.GType<CryptoError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static DEVICE: number;
            static STATE: number;
            static INVALID_SPEC: number;
            static FORMAT_FAILED: number;
            static RESIZE_FAILED: number;
            static RESIZE_PERM: number;
            static ADD_KEY: number;
            static REMOVE_KEY: number;
            static NO_KEY: number;
            static KEY_SLOT: number;
            static NSS_INIT_FAILED: number;
            static CERT_DECODE: number;
            static ESCROW_FAILED: number;
            static INVALID_PARAMS: number;
            static KEYRING: number;
            static KEYFILE_FAILED: number;
            static INVALID_CONTEXT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace CryptoKeyslotContextType {
            export const $gtype: GObject.GType<CryptoKeyslotContextType>;
        }

        enum CryptoKeyslotContextType {
            NONE,
            PASSPHRASE,
            KEYFILE,
            KEYRING,
            VOLUME_KEY,
        }

        export namespace CryptoLUKSHWEncryptionType {
            export const $gtype: GObject.GType<CryptoLUKSHWEncryptionType>;
        }

        enum CryptoLUKSHWEncryptionType {
            /**
             * used for unknown/unsupported hardware encryption or when
             *                                        error was detected when getting the information
             */
            UNKNOWN,
            /**
             * hardware encryption is not configured on this device
             */
            SW_ONLY,
            /**
             * only OPAL hardware encryption is configured on this device
             */
            OPAL_HW_ONLY,
            /**
             * both OPAL hardware encryption and software encryption
             *                                               (using LUKS/dm-crypt) is configured on this device
             */
            OPAL_HW_AND_SW,
        }

        export namespace CryptoLUKSVersion {
            export const $gtype: GObject.GType<CryptoLUKSVersion>;
        }

        enum CryptoLUKSVersion {
            LUKS1,
            LUKS2,
        }

        export namespace CryptoTech {
            export const $gtype: GObject.GType<CryptoTech>;
        }

        enum CryptoTech {
            LUKS,
            TRUECRYPT,
            ESCROW,
            INTEGRITY,
            BITLK,
            KEYRING,
            FVAULT2,
            SED_OPAL,
        }
        class DMError extends GLib.Error {
            static $gtype: GObject.GType<DMError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static SYS: number;
            static NOT_ROOT: number;
            static TASK: number;
            static RAID_FAIL: number;
            static RAID_NO_DEVS: number;
            static RAID_NO_EXIST: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace DMTech {
            export const $gtype: GObject.GType<DMTech>;
        }

        enum DMTech {
            DM_TECH_MAP,
        }
        class FSError extends GLib.Error {
            static $gtype: GObject.GType<FSError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static INVAL: number;
            static PARSE: number;
            static FAIL: number;
            static NOFS: number;
            static PIPE: number;
            static UNMOUNT_FAIL: number;
            static NOT_SUPPORTED: number;
            static NOT_MOUNTED: number;
            static AUTH: number;
            static LABEL_INVALID: number;
            static UUID_INVALID: number;
            static UNKNOWN_FS: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace FSTech {
            export const $gtype: GObject.GType<FSTech>;
        }

        enum FSTech {
            GENERIC,
            MOUNT,
            EXT2,
            EXT3,
            EXT4,
            XFS,
            VFAT,
            NTFS,
            F2FS,
            NILFS2,
            EXFAT,
            BTRFS,
            UDF,
        }
        class InitError extends GLib.Error {
            static $gtype: GObject.GType<InitError>;

            // Static fields

            static FAILED: number;
            static PLUGINS_FAILED: number;
            static NOT_IMPLEMENTED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace LVMCacheMode {
            export const $gtype: GObject.GType<LVMCacheMode>;
        }

        enum LVMCacheMode {
            UNKNOWN,
            WRITETHROUGH,
            WRITEBACK,
        }
        class LVMError extends GLib.Error {
            static $gtype: GObject.GType<LVMError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAIL: number;
            static PARSE: number;
            static NOEXIST: number;
            static DM_ERROR: number;
            static NOT_ROOT: number;
            static CACHE_INVAL: number;
            static CACHE_NOCACHE: number;
            static NOT_SUPPORTED: number;
            static VDO_POLICY_INVAL: number;
            static DEVICES_DISABLED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace LVMTech {
            export const $gtype: GObject.GType<LVMTech>;
        }

        enum LVMTech {
            BASIC,
            BASIC_SNAP,
            THIN,
            CACHE,
            CALCS,
            THIN_CALCS,
            CACHE_CALCS,
            GLOB_CONF,
            VDO,
            WRITECACHE,
            DEVICES,
            SHARED,
        }

        export namespace LVMVDOCompressionState {
            export const $gtype: GObject.GType<LVMVDOCompressionState>;
        }

        enum LVMVDOCompressionState {
            UNKNOWN,
            ONLINE,
            OFFLINE,
        }

        export namespace LVMVDOIndexState {
            export const $gtype: GObject.GType<LVMVDOIndexState>;
        }

        enum LVMVDOIndexState {
            UNKNOWN,
            ERROR,
            CLOSED,
            OPENING,
            CLOSING,
            OFFLINE,
            ONLINE,
        }

        export namespace LVMVDOOperatingMode {
            export const $gtype: GObject.GType<LVMVDOOperatingMode>;
        }

        enum LVMVDOOperatingMode {
            UNKNOWN,
            RECOVERING,
            READ_ONLY,
            NORMAL,
        }

        export namespace LVMVDOWritePolicy {
            export const $gtype: GObject.GType<LVMVDOWritePolicy>;
        }

        enum LVMVDOWritePolicy {
            UNKNOWN,
            AUTO,
            SYNC,
            ASYNC,
        }
        class LoopError extends GLib.Error {
            static $gtype: GObject.GType<LoopError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAIL: number;
            static DEVICE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace LoopTech {
            export const $gtype: GObject.GType<LoopTech>;
        }

        enum LoopTech {
            LOOP_TECH_LOOP,
        }
        class MDError extends GLib.Error {
            static $gtype: GObject.GType<MDError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAIL: number;
            static PARSE: number;
            static BAD_FORMAT: number;
            static NO_MATCH: number;
            static INVAL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace MDTech {
            export const $gtype: GObject.GType<MDTech>;
        }

        enum MDTech {
            MD_TECH_MDRAID,
        }
        class MpathError extends GLib.Error {
            static $gtype: GObject.GType<MpathError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static INVAL: number;
            static FLUSH: number;
            static NOT_ROOT: number;
            static DM_ERROR: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace MpathTech {
            export const $gtype: GObject.GType<MpathTech>;
        }

        enum MpathTech {
            BASE,
            FRIENDLY_NAMES,
        }
        class NVDIMMError extends GLib.Error {
            static $gtype: GObject.GType<NVDIMMError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static NAMESPACE_FAIL: number;
            static NAMESPACE_PARSE: number;
            static NAMESPACE_NOEXIST: number;
            static NAMESPACE_MODE_INVAL: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace NVDIMMNamespaceMode {
            export const $gtype: GObject.GType<NVDIMMNamespaceMode>;
        }

        enum NVDIMMNamespaceMode {
            RAW,
            SECTOR,
            MEMORY,
            DAX,
            FSDAX,
            DEVDAX,
            UNKNOWN,
        }

        export namespace NVDIMMTech {
            export const $gtype: GObject.GType<NVDIMMTech>;
        }

        enum NVDIMMTech {
            NVDIMM_TECH_NAMESPACE,
        }

        export namespace NVMEControllerType {
            export const $gtype: GObject.GType<NVMEControllerType>;
        }

        enum NVMEControllerType {
            UNKNOWN,
            IO,
            DISCOVERY,
            ADMIN,
        }
        class NVMEError extends GLib.Error {
            static $gtype: GObject.GType<NVMEError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAILED: number;
            static BUSY: number;
            static INVALID_ARGUMENT: number;
            static WOULD_FORMAT_ALL_NS: number;
            static SC_GENERIC: number;
            static SC_CMD_SPECIFIC: number;
            static SC_MEDIA: number;
            static SC_PATH: number;
            static SC_VENDOR_SPECIFIC: number;
            static NO_MATCH: number;
            static CONNECT: number;
            static CONNECT_ALREADY: number;
            static CONNECT_INVALID: number;
            static CONNECT_ADDRINUSE: number;
            static CONNECT_NODEV: number;
            static CONNECT_OPNOTSUPP: number;
            static CONNECT_REFUSED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace NVMEFormatSecureErase {
            export const $gtype: GObject.GType<NVMEFormatSecureErase>;
        }

        enum NVMEFormatSecureErase {
            NONE,
            USER_DATA,
            CRYPTO,
        }

        export namespace NVMELBAFormatRelativePerformance {
            export const $gtype: GObject.GType<NVMELBAFormatRelativePerformance>;
        }

        enum NVMELBAFormatRelativePerformance {
            UNKNOWN,
            BEST,
            BETTER,
            GOOD,
            DEGRADED,
        }

        export namespace NVMESanitizeAction {
            export const $gtype: GObject.GType<NVMESanitizeAction>;
        }

        enum NVMESanitizeAction {
            EXIT_FAILURE,
            BLOCK_ERASE,
            OVERWRITE,
            CRYPTO_ERASE,
        }

        export namespace NVMESanitizeStatus {
            export const $gtype: GObject.GType<NVMESanitizeStatus>;
        }

        enum NVMESanitizeStatus {
            NEVER_SANITIZED,
            IN_PROGESS,
            SUCCESS,
            SUCCESS_NO_DEALLOC,
            FAILED,
        }

        export namespace NVMESelfTestAction {
            export const $gtype: GObject.GType<NVMESelfTestAction>;
        }

        enum NVMESelfTestAction {
            NOT_RUNNING,
            SHORT,
            EXTENDED,
            VENDOR_SPECIFIC,
            ABORT,
        }

        export namespace NVMESelfTestResult {
            export const $gtype: GObject.GType<NVMESelfTestResult>;
        }

        enum NVMESelfTestResult {
            NO_ERROR,
            ABORTED,
            CTRL_RESET,
            NS_REMOVED,
            ABORTED_FORMAT,
            FATAL_ERROR,
            UNKNOWN_SEG_FAIL,
            KNOWN_SEG_FAIL,
            ABORTED_UNKNOWN,
            ABORTED_SANITIZE,
        }

        export namespace NVMETech {
            export const $gtype: GObject.GType<NVMETech>;
        }

        enum NVMETech {
            NVME,
            FABRICS,
        }

        export namespace NVMETransportType {
            export const $gtype: GObject.GType<NVMETransportType>;
        }

        enum NVMETransportType {
            UNSPECIFIED,
            RDMA,
            FC,
            TCP,
            LOOP,
        }

        export namespace PartAlign {
            export const $gtype: GObject.GType<PartAlign>;
        }

        enum PartAlign {
            NONE,
            MINIMAL,
            OPTIMAL,
        }
        class PartError extends GLib.Error {
            static $gtype: GObject.GType<PartError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAIL: number;
            static INVAL: number;
            static EXISTS: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace PartTableType {
            export const $gtype: GObject.GType<PartTableType>;
        }

        enum PartTableType {
            MSDOS,
            GPT,
            UNDEF,
        }

        export namespace PartTech {
            export const $gtype: GObject.GType<PartTech>;
        }

        enum PartTech {
            MBR,
            GPT,
        }

        export namespace PartType {
            export const $gtype: GObject.GType<PartType>;
        }

        enum PartType {
            NORMAL,
            LOGICAL,
            EXTENDED,
            FREESPACE,
            METADATA,
            PROTECTED,
        }

        export namespace PartTypeReq {
            export const $gtype: GObject.GType<PartTypeReq>;
        }

        enum PartTypeReq {
            NORMAL,
            LOGICAL,
            EXTENDED,
            NEXT,
        }

        export namespace Plugin {
            export const $gtype: GObject.GType<Plugin>;
        }

        enum Plugin {
            LVM,
            BTRFS,
            SWAP,
            LOOP,
            CRYPTO,
            MPATH,
            DM,
            MDRAID,
            S390,
            PART,
            FS,
            NVDIMM,
            NVME,
            SMART,
            UNDEF,
        }

        export namespace SmartATAAttributeFlag {
            export const $gtype: GObject.GType<SmartATAAttributeFlag>;
        }

        enum SmartATAAttributeFlag {
            PREFAILURE,
            ONLINE,
            PERFORMANCE,
            ERROR_RATE,
            EVENT_COUNT,
            SELF_PRESERVING,
            OTHER,
        }

        export namespace SmartATAAttributeUnit {
            export const $gtype: GObject.GType<SmartATAAttributeUnit>;
        }

        enum SmartATAAttributeUnit {
            UNKNOWN,
            NONE,
            MSECONDS,
            SECTORS,
            MKELVIN,
            SMALL_PERCENT,
            PERCENT,
            MB,
        }

        export namespace SmartATAOfflineDataCollectionCapabilities {
            export const $gtype: GObject.GType<SmartATAOfflineDataCollectionCapabilities>;
        }

        enum SmartATAOfflineDataCollectionCapabilities {
            NOT_SUPPORTED,
            EXEC_OFFLINE_IMMEDIATE,
            OFFLINE_ABORT,
            OFFLINE_SURFACE_SCAN,
            SELF_TEST,
            CONVEYANCE_SELF_TEST,
            SELECTIVE_SELF_TEST,
        }

        export namespace SmartATAOfflineDataCollectionStatus {
            export const $gtype: GObject.GType<SmartATAOfflineDataCollectionStatus>;
        }

        enum SmartATAOfflineDataCollectionStatus {
            NEVER_STARTED,
            NO_ERROR,
            IN_PROGRESS,
            SUSPENDED_INTR,
            ABORTED_INTR,
            ABORTED_ERROR,
            VENDOR_SPECIFIC,
            RESERVED,
        }

        export namespace SmartATASelfTestStatus {
            export const $gtype: GObject.GType<SmartATASelfTestStatus>;
        }

        enum SmartATASelfTestStatus {
            COMPLETED_NO_ERROR,
            ABORTED_HOST,
            INTR_HOST_RESET,
            ERROR_FATAL,
            ERROR_UNKNOWN,
            ERROR_ELECTRICAL,
            ERROR_SERVO,
            ERROR_READ,
            ERROR_HANDLING,
            IN_PROGRESS,
        }
        class SmartError extends GLib.Error {
            static $gtype: GObject.GType<SmartError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static FAILED: number;
            static INVALID_ARGUMENT: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace SmartSCSIBackgroundScanStatus {
            export const $gtype: GObject.GType<SmartSCSIBackgroundScanStatus>;
        }

        enum SmartSCSIBackgroundScanStatus {
            NO_SCANS_ACTIVE,
            SCAN_ACTIVE,
            PRESCAN_ACTIVE,
            HALTED_ERROR_FATAL,
            HALTED_PATTERN_VENDOR_SPECIFIC,
            HALTED_ERROR_PLIST,
            HALTED_VENDOR_SPECIFIC,
            HALTED_TEMPERATURE,
            BMS_TIMER,
        }

        export namespace SmartSCSIInformationalException {
            export const $gtype: GObject.GType<SmartSCSIInformationalException>;
        }

        enum SmartSCSIInformationalException {
            NONE,
            ABORTED_COMMAND,
            TEMPERATURE_EXCEEDED,
            ENCLOSURE_DEGRADED,
            BACKGROUND_SELFTEST_FAILED,
            BACKGROUND_PRESCAN_MEDIUM_ERROR,
            BACKGROUND_SCAN_MEDIUM_ERROR,
            NV_CACHE_VOLATILE,
            NV_CACHE_DEGRADED_POWER,
            POWER_LOSS_EXPECTED,
            STATISTICS_NOTIFICATION,
            HIGH_CRITICAL_TEMP,
            LOW_CRITICAL_TEMP,
            HIGH_OPERATING_TEMP,
            LOW_OPERATING_TEMP,
            HIGH_CRITICAL_HUMIDITY,
            LOW_CRITICAL_HUMIDITY,
            HIGH_OPERATING_HUMIDITY,
            LOW_OPERATING_HUMIDITY,
            MICROCODE_SECURITY_RISK,
            MICROCODE_SIGNATURE_VALIDATION_FAILURE,
            PHYSICAL_ELEMENT_STATUS_CHANGE,
            FAILURE_PREDICTION_THRESH,
            MEDIA_FAILURE_PREDICTION_THRESH,
            LOGICAL_UNIT_FAILURE_PREDICTION_THRESH,
            SPARE_EXHAUSTION_PREDICTION_THRESH,
            HARDWARE_IMPENDING_FAILURE,
            CONTROLLER_IMPENDING_FAILURE,
            DATA_CHANNEL_IMPENDING_FAILURE,
            SERVO_IMPENDING_FAILURE,
            SPINDLE_IMPENDING_FAILURE,
            FIRMWARE_IMPENDING_FAILURE,
            MEDIA_ENDURANCE_LIMIT,
            UNSPECIFIED,
        }

        export namespace SmartSelfTestOp {
            export const $gtype: GObject.GType<SmartSelfTestOp>;
        }

        enum SmartSelfTestOp {
            ABORT,
            OFFLINE,
            SHORT,
            LONG,
            CONVEYANCE,
        }

        export namespace SmartTech {
            export const $gtype: GObject.GType<SmartTech>;
        }

        enum SmartTech {
            ATA,
            SCSI,
        }
        class SwapError extends GLib.Error {
            static $gtype: GObject.GType<SwapError>;

            // Static fields

            static TECH_UNAVAIL: number;
            static UNKNOWN_STATE: number;
            static ACTIVATE: number;
            static ACTIVATE_OLD: number;
            static ACTIVATE_SUSPEND: number;
            static ACTIVATE_UNKNOWN: number;
            static ACTIVATE_PAGESIZE: number;
            static LABEL_INVALID: number;
            static UUID_INVALID: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace SwapTech {
            export const $gtype: GObject.GType<SwapTech>;
        }

        enum SwapTech {
            SWAP_TECH_SWAP,
        }
        class UtilsDBusError extends GLib.Error {
            static $gtype: GObject.GType<UtilsDBusError>;

            // Static fields

            static FAIL: number;
            static NOEXIST: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        class UtilsDevUtilsError extends GLib.Error {
            static $gtype: GObject.GType<UtilsDevUtilsError>;

            // Static fields

            static UTILS_DEV_UTILS_ERROR_FAILED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        class UtilsExecError extends GLib.Error {
            static $gtype: GObject.GType<UtilsExecError>;

            // Static fields

            static FAILED: number;
            static NOOUT: number;
            static INVAL_VER: number;
            static UTIL_UNAVAILABLE: number;
            static UTIL_UNKNOWN_VER: number;
            static UTIL_LOW_VER: number;
            static UTIL_CHECK_ERROR: number;
            static UTIL_FEATURE_CHECK_ERROR: number;
            static UTIL_FEATURE_UNAVAILABLE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        class UtilsModuleError extends GLib.Error {
            static $gtype: GObject.GType<UtilsModuleError>;

            // Static fields

            static KMOD_INIT_FAIL: number;
            static FAIL: number;
            static NOEXIST: number;
            static MODULE_CHECK_ERROR: number;
            static INVALID_PLATFORM: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        export namespace UtilsProgStatus {
            export const $gtype: GObject.GType<UtilsProgStatus>;
        }

        enum UtilsProgStatus {
            STARTED,
            PROGRESS,
            FINISHED,
        }
        const BTRFS_MAIN_VOLUME_ID: number;
        const BTRFS_MIN_MEMBER_SIZE: number;
        const MD_CHUNK_SIZE: number;
        const MD_SUPERBLOCK_SIZE: number;
        const UTILS_LOG_ALERT: number;
        const UTILS_LOG_CRIT: number;
        const UTILS_LOG_DEBUG: number;
        const UTILS_LOG_EMERG: number;
        const UTILS_LOG_ERR: number;
        const UTILS_LOG_INFO: number;
        const UTILS_LOG_NOTICE: number;
        const UTILS_LOG_WARNING: number;
        function btrfs_add_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_change_label(mountpoint: string, label: string): boolean;
        function btrfs_check(device: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_create_snapshot(source: string, dest: string, ro: boolean, extra?: ExtraArg[] | null): boolean;
        function btrfs_create_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_create_volume(
            devices: string[],
            label?: string | null,
            data_level?: string | null,
            md_level?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function btrfs_delete_subvolume(mountpoint: string, name: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_error_quark(): GLib.Quark;
        function btrfs_filesystem_info(device: string): BtrfsFilesystemInfo;
        function btrfs_get_default_subvolume_id(mountpoint: string): number;
        function btrfs_is_tech_avail(tech: BtrfsTech | null, mode: number): boolean;
        function btrfs_list_devices(device: string): BtrfsDeviceInfo[];
        function btrfs_list_subvolumes(mountpoint: string, snapshots_only: boolean): BtrfsSubvolumeInfo[];
        function btrfs_mkfs(
            devices: string[],
            label?: string | null,
            data_level?: string | null,
            md_level?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function btrfs_remove_device(mountpoint: string, device: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function btrfs_resize(mountpoint: string, size: number, extra?: ExtraArg[] | null): boolean;
        function btrfs_set_default_subvolume(mountpoint: string, subvol_id: number, extra?: ExtraArg[] | null): boolean;
        function crypto_bitlk_close(bitlk_device: string): boolean;
        /**
         * Returns (transfer full): information about the `device` or %NULL in case of error
         *
         * Tech category: %BD_CRYPTO_TECH_BITLK-%BD_CRYPTO_TECH_MODE_QUERY
         * @param device a device to get information about
         */
        function crypto_bitlk_info(device: string): CryptoBITLKInfo;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param device the device to open
         * @param name name for the BITLK device
         * @param context key slot context (passphrase/keyfile/token...) for this BITLK device
         * @param read_only whether to open as read-only or not (meaning read-write)
         * @returns whether the @device was successfully opened or not Tech category: %BD_CRYPTO_TECH_BITLK-%BD_CRYPTO_TECH_MODE_OPEN_CLOSE
         */
        function crypto_bitlk_open(
            device: string,
            name: string,
            context: CryptoKeyslotContext,
            read_only: boolean,
        ): boolean;
        function crypto_device_is_luks(device: string): boolean;
        /**
         * Determines whether a block device seems to be encrypted.
         *
         * TCRYPT volumes are not easily identifiable, because they have no
         * cleartext header, but are completely encrypted. This function is
         * used to determine whether a block device is a candidate for being
         * TCRYPT encrypted.
         *
         * To achieve this, we calculate the chi square value of the first
         * 512 Bytes and treat devices with a chi square value between 136
         * and 426 as candidates for being encrypted.
         * For the reasoning, see: https://tails.boum.org/blueprint/veracrypt/
         * @param device the queried device
         * @returns %TRUE if the given @device seems to be encrypted or %FALSE if not or failed to determine (the @error) is populated with the error in such cases) Tech category: %BD_CRYPTO_TECH_TRUECRYPT-%BD_CRYPTO_TECH_MODE_QUERY
         */
        function crypto_device_seems_encrypted(device: string): boolean;
        function crypto_error_quark(): GLib.Quark;
        function crypto_escrow_device(
            device: string,
            passphrase: string,
            cert_data: number[],
            directory: string,
            backup_passphrase?: string | null,
        ): boolean;
        function crypto_fvault2_close(fvault2_device: string): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param device the device to open
         * @param name name for the FVAULT2 device
         * @param context key slot context (passphrase/keyfile/token...) for this FVAULT2 volume
         * @param read_only whether to open as read-only or not (meaning read-write)
         * @returns whether the @device was successfully opened or not Tech category: %BD_CRYPTO_TECH_FVAULT2-%BD_CRYPTO_TECH_MODE_OPEN_CLOSE
         */
        function crypto_fvault2_open(
            device: string,
            name: string,
            context: CryptoKeyslotContext,
            read_only: boolean,
        ): boolean;
        function crypto_generate_backup_passphrase(): string;
        function crypto_integrity_close(integrity_device: string): boolean;
        /**
         * Formats the given `device` as integrity according to the other parameters given.
         *
         * Supported `context` types for this function: volume key
         * @param device a device to format as integrity
         * @param algorithm integrity algorithm specification (e.g. "crc32c" or "sha256")
         * @param wipe whether to wipe the device after format; a device that is not initially wiped will contain invalid checksums
         * @param context key slot context (passphrase/keyfile/token...) for this device
         * @param extra extra arguments for integrity format creation
         * @returns whether the given @device was successfully formatted as integrity or not (the @error) contains the error in such cases) Tech category: %BD_CRYPTO_TECH_INTEGRITY-%BD_CRYPTO_TECH_MODE_CREATE
         */
        function crypto_integrity_format(
            device: string,
            algorithm: string,
            wipe: boolean,
            context?: CryptoKeyslotContext | null,
            extra?: CryptoIntegrityExtra | null,
        ): boolean;
        function crypto_integrity_info(device: string): CryptoIntegrityInfo;
        /**
         * Supported `context` types for this function: volume key
         * @param device integrity device to open
         * @param name name for the opened @device
         * @param algorithm integrity algorithm specification (e.g. "crc32c" or "sha256")
         * @param context key slot context (passphrase/keyfile/token...) for this device
         * @param flags flags for the integrity device activation
         * @param extra extra arguments for integrity open
         * @returns whether the @device was successfully opened or not Tech category: %BD_CRYPTO_TECH_INTEGRITY-%BD_CRYPTO_TECH_MODE_OPEN_CLOSE
         */
        function crypto_integrity_open(
            device: string,
            name: string,
            algorithm: string,
            context: CryptoKeyslotContext | null,
            flags: CryptoIntegrityOpenFlags | null,
            extra?: CryptoIntegrityExtra | null,
        ): boolean;
        function crypto_is_tech_avail(tech: CryptoTech | null, mode: number): boolean;
        function crypto_keyring_add_key(key_desc: string, key_data: Uint8Array | string): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param device device to add new key to
         * @param context key slot context (passphrase/keyfile/token...) to for this LUKS @device
         * @param ncontext new key slot context (passphrase/keyfile/token...) to add to this LUKS @device
         * @returns whether the @ncontext was successfully added to @device or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_ADD_KEY
         */
        function crypto_luks_add_key(
            device: string,
            context: CryptoKeyslotContext,
            ncontext: CryptoKeyslotContext,
        ): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param device device to change key of
         * @param context key slot context (passphrase/keyfile/token...) for this LUKS @device
         * @param ncontext new key slot context (passphrase/keyfile/token...) to add to this LUKS @device
         * @returns whether the key was successfully changed or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_ADD_KEY&%BD_CRYPTO_TECH_MODE_REMOVE_KEY
         */
        function crypto_luks_change_key(
            device: string,
            context: CryptoKeyslotContext,
            ncontext: CryptoKeyslotContext,
        ): boolean;
        function crypto_luks_close(luks_device: string): boolean;
        function crypto_luks_convert(device: string, target_version: CryptoLUKSVersion | null): boolean;
        /**
         * Formats the given `device` as LUKS according to the other parameters given. If
         * `min_entropy` is specified (greater than 0), the function waits for enough
         * entropy to be available in the random data pool (WHICH MAY POTENTIALLY TAKE
         * FOREVER).
         *
         * Supported `context` types for this function: passphrase, key file
         * @param device a device to format as LUKS
         * @param cipher cipher specification (type-mode, e.g. "aes-xts-plain64") or %NULL to use the default
         * @param key_size size of the volume key in bits or 0 to use the default
         * @param context key slot context (passphrase/keyfile/token...) for this LUKS device
         * @param min_entropy minimum random data entropy (in bits) required to format @device as LUKS
         * @param luks_version whether to use LUKS v1 or LUKS v2
         * @param extra extra arguments for LUKS format creation
         * @returns whether the given @device was successfully formatted as LUKS or not (the @error) contains the error in such cases) Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_CREATE
         */
        function crypto_luks_format(
            device: string,
            cipher: string | null,
            key_size: number,
            context: CryptoKeyslotContext,
            min_entropy: number,
            luks_version: CryptoLUKSVersion | null,
            extra?: CryptoLUKSExtra | null,
        ): boolean;
        function crypto_luks_header_backup(device: string, backup_file: string): boolean;
        function crypto_luks_header_restore(device: string, backup_file: string): boolean;
        function crypto_luks_info(device: string): CryptoLUKSInfo;
        /**
         * Note: This can destroy last remaining keyslot without confirmation making
         *       the LUKS device permanently inaccessible.
         * @param device device to kill slot on
         * @param slot keyslot to destroy
         * @returns whether the given @slot was successfully destroyed or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_REMOVE_KEY
         */
        function crypto_luks_kill_slot(device: string, slot: number): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file, keyring
         * @param device the device to open
         * @param name name for the LUKS device
         * @param context key slot context (passphrase/keyfile/token...) to open this LUKS @device
         * @param read_only whether to open as read-only or not (meaning read-write)
         * @returns whether the @device was successfully opened or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_OPEN_CLOSE Example of using %bd_crypto_luks_open with %BDCryptoKeyslotContext: |[<!-- language="C" --> BDCryptoKeyslotContext *context = NULL; context = bd_crypto_keyslot_context_new_passphrase ("passphrase", 10, NULL); bd_crypto_luks_open ("/dev/vda1", "luks-device", context, FALSE, NULL); ]|
         */
        function crypto_luks_open(
            device: string,
            name: string,
            context: CryptoKeyslotContext,
            read_only: boolean,
        ): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param device device to add new key to
         * @param context key slot context (passphrase/keyfile/token...) to remove from this LUKS @device
         * @returns whether the key was successfully removed or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_REMOVE_KEY
         */
        function crypto_luks_remove_key(device: string, context: CryptoKeyslotContext): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param luks_device opened LUKS device to resize
         * @param size requested size in sectors or 0 to adapt to the backing device
         * @param context key slot context (passphrase/keyfile/token...) for this LUKS @device
         * @returns whether the @luks_device was successfully resized or not You need to specify either @context for LUKS 2 devices that don't have verified key loaded in kernel. For LUKS 1 devices you can set @context %NULL. Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_RESIZE
         */
        function crypto_luks_resize(luks_device: string, size: number, context?: CryptoKeyslotContext | null): boolean;
        /**
         * Supported `context` types for this function: passphrase, key file
         * @param luks_device LUKS device to resume
         * @param context key slot context (passphrase/keyfile/token...) for @luks_device
         * @returns whether the given @luks_device was successfully resumed or not Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_SUSPEND_RESUME
         */
        function crypto_luks_resume(luks_device: string, context?: CryptoKeyslotContext | null): boolean;
        function crypto_luks_set_label(device: string, label?: string | null, subsystem?: string | null): boolean;
        function crypto_luks_set_uuid(device: string, uuid?: string | null): boolean;
        function crypto_luks_status(luks_device: string): string;
        function crypto_luks_suspend(luks_device: string): boolean;
        function crypto_luks_token_info(device: string): CryptoLUKSTokenInfo[];
        /**
         * Formats the given `device` as LUKS HW-OPAL according to the other parameters given. If
         * `min_entropy` is specified (greater than 0), the function waits for enough
         * entropy to be available in the random data pool (WHICH MAY POTENTIALLY TAKE
         * FOREVER).
         *
         * Supported `context` types for this function: passphrase, key file
         * Supported `opal_context` types for this function: passphrase
         * @param device a device to format as LUKS HW-OPAL
         * @param cipher cipher specification (type-mode, e.g. "aes-xts-plain64") or %NULL to use the default
         * @param key_size size of the volume key in bits or 0 to use the default
         * @param context key slot context (passphrase/keyfile/token...) for this LUKS device
         * @param min_entropy minimum random data entropy (in bits) required to format @device as LUKS
         * @param hw_encryption type of hardware encryption (SW+HW or HW only)
         * @param opal_context OPAL admin passphrase
         * @param extra extra arguments for LUKS format creation
         * @returns whether the given @device was successfully formatted as LUKS HW-OPAL or not (the @error contains the error in such cases) Tech category: %BD_CRYPTO_TECH_LUKS-%BD_CRYPTO_TECH_MODE_CREATE
         */
        function crypto_opal_format(
            device: string,
            cipher: string | null,
            key_size: number,
            context: CryptoKeyslotContext,
            min_entropy: number,
            hw_encryption: CryptoLUKSHWEncryptionType | null,
            opal_context: CryptoKeyslotContext,
            extra?: CryptoLUKSExtra | null,
        ): boolean;
        function crypto_opal_is_supported(device: string): boolean;
        function crypto_opal_reset_device(device: string, context: CryptoKeyslotContext): boolean;
        function crypto_opal_wipe_device(device: string, context: CryptoKeyslotContext): boolean;
        function crypto_tc_close(tc_device: string): boolean;
        /**
         * Supported `context` types for this function: passphrase
         * @param device the device to open
         * @param name name for the TrueCrypt/VeraCrypt device
         * @param context passphrase key slot context for this TrueCrypt/VeraCrypt volume
         * @param keyfiles paths to the keyfiles for the TrueCrypt/VeraCrypt volume
         * @param hidden whether a hidden volume inside the volume should be opened
         * @param system whether to try opening as an encrypted system (with boot loader)
         * @param veracrypt whether to try VeraCrypt modes (TrueCrypt modes are tried anyway)
         * @param veracrypt_pim VeraCrypt PIM value (only used if @veracrypt is %TRUE)
         * @param read_only whether to open as read-only or not (meaning read-write)
         * @returns whether the @device was successfully opened or not Tech category: %BD_CRYPTO_TECH_TRUECRYPT-%BD_CRYPTO_TECH_MODE_OPEN_CLOSE
         */
        function crypto_tc_open(
            device: string,
            name: string,
            context: CryptoKeyslotContext | null,
            keyfiles: string[] | null,
            hidden: boolean,
            system: boolean,
            veracrypt: boolean,
            veracrypt_pim: number,
            read_only: boolean,
        ): boolean;
        function dm_create_linear(map_name: string, device: string, length: number, uuid?: string | null): boolean;
        function dm_error_quark(): GLib.Quark;
        function dm_get_subsystem_from_name(device_name: string): string;
        function dm_is_tech_avail(tech: DMTech | null, mode: number): boolean;
        function dm_map_exists(map_name: string, live_only: boolean, active_only: boolean): boolean;
        function dm_name_from_node(dm_node: string): string;
        function dm_node_from_name(map_name: string): string;
        function dm_remove(map_name: string): boolean;
        /**
         * Checks the state of the library and if it is uninitialized or not all the
         * `require_plugins` plugins are available, tries to (re)initialize it. Otherwise
         * just returns early. The difference between:
         *
         *
         * ```c
         * if (!bd_is_initialized())
         *     bd_init(None, None, &error);
         * ```
         *
         *
         * and this function is that this function does the check and init in an atomic
         * way (holding the lock preventing other threads from doing changes in
         * between).
         * @param require_plugins %NULL-terminated list                 of plugins that should be loaded (if no so_name is specified                 for the plugin, the default is used) or %NULL to load all                 plugins
         * @param log_func logging function to use
         * @returns whether the library was successfully initialized with all the          required or default (see @require_plugins) plugins or not either          before or by this call
         */
        function ensure_init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;
        /**
         * Frees `args` and all its elements.
         * @param args A list of %BDExtraArg to free
         */
        function extra_arg_list_free(args?: ExtraArg[] | null): void;
        function fs_btrfs_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_btrfs_check_label(label: string): boolean;
        function fs_btrfs_check_uuid(uuid: string): boolean;
        function fs_btrfs_get_info(mpoint: string): FSBtrfsInfo;
        function fs_btrfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_btrfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_btrfs_resize(mpoint: string, new_size: number, extra?: ExtraArg[] | null): boolean;
        function fs_btrfs_set_label(mpoint: string, label: string): boolean;
        function fs_btrfs_set_uuid(device: string, uuid?: string | null): boolean;
        /**
         * Searches for the required utility to check the given filesystem and returns whether
         * it is installed.
         * Unknown filesystems or filesystems which do not support checking result in errors.
         * @param type the filesystem type to be tested for installed consistency check support
         * @returns whether filesystem check is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_check(type: string): [boolean, string];
        /**
         * Searches for the required utility to get free space of the given filesystem and
         * returns whether it is installed.
         * Unknown filesystems or filesystems which do not support free space querying result in errors.
         * @param type the filesystem type to be tested for installed free space querying support
         * @returns whether getting filesystem free space is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_get_free_space(type: string): [boolean, string];
        /**
         * Searches for the required utility to get info of the given filesystem and
         * returns whether it is installed.
         * Unknown filesystems or filesystems which do not support info querying result in errors.
         * @param type the filesystem type to be tested for info querying support
         * @returns whether getting filesystem info is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_get_info(type: string): [boolean, string];
        /**
         * Searches for the required utility to get minimum size of the given filesystem and
         * returns whether it is installed.
         * Unknown filesystems or filesystems which do not support minimum size querying result in errors.
         * @param type the filesystem type to be tested for installed minimum size querying support
         * @returns whether getting filesystem size is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_get_min_size(type: string): [boolean, string];
        /**
         * Searches for the required utility to get size of the given filesystem and
         * returns whether it is installed.
         * Unknown filesystems or filesystems which do not support size querying result in errors.
         * @param type the filesystem type to be tested for installed size querying support
         * @returns whether getting filesystem size is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_get_size(type: string): [boolean, string];
        /**
         * Searches for the required utility to create the given filesystem and returns whether
         * it is installed. The options flags indicate what additional options can be specified for `type`.
         * Unknown filesystems result in errors.
         * @param type the filesystem type to be tested for installed mkfs support
         * @returns whether filesystem mkfs tool is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_mkfs(type: string): [boolean, FSMkfsOptionsFlags, string];
        /**
         * Searches for the required utility to repair the given filesystem and returns whether
         * it is installed.
         * Unknown filesystems or filesystems which do not support reparing result in errors.
         * @param type the filesystem type to be tested for installed repair support
         * @returns whether filesystem repair is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_repair(type: string): [boolean, string];
        /**
         * Searches for the required utility to resize the given filesystem and returns whether
         * it is installed. The mode flags indicate if growing and/or shrinking resize is available if
         * mounted/unmounted.
         * Unknown filesystems or filesystems which do not support resizing result in errors.
         * @param type the filesystem type to be tested for installed resize support
         * @returns whether filesystem resize is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_resize(type: string): [boolean, FSResizeFlags, string];
        /**
         * Searches for the required utility to set the label of the given filesystem and returns whether
         * it is installed.
         * Unknown filesystems or filesystems which do not support setting the label result in errors.
         * @param type the filesystem type to be tested for installed label support
         * @returns whether setting filesystem label is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_set_label(type: string): [boolean, string];
        /**
         * Searches for the required utility to set the UUID of the given filesystem and returns whether
         * it is installed.
         * Unknown filesystems or filesystems which do not support setting the UUID result in errors.
         * @param type the filesystem type to be tested for installed UUID support
         * @returns whether setting filesystem UUID is available Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_can_set_uuid(type: string): [boolean, string];
        /**
         * Check filesystem on `device` avoiding any modifications or repairs.
         * This calls other fs check functions from this plugin based on detected
         * filesystem (e.g. bd_fs_xfs_check for XFS). This function will return
         * an error for unknown/unsupported filesystems.
         *
         * Note that depending on a corresponding filesystem type and configured
         * features running this function on a mounted filesystem may result
         * in false errors reported.
         * @param device the device the file system of which to check
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns whether the file system on @device passed the consistency check or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_CHECK
         */
        function fs_check(device: string, fstype?: string | null): boolean;
        /**
         * This calls other fs check label functions from this plugin based on the provided
         * filesystem (e.g. bd_fs_xfs_check_label for XFS). This function will return
         * an error for unknown/unsupported filesystems.
         * @param fstype the filesystem type to check @label for
         * @param label label to check
         * @returns whether @label is a valid label for the @fstype file system or not          (reason is provided in @error) Tech category: always available
         */
        function fs_check_label(fstype: string, label: string): boolean;
        /**
         * This calls other fs check uuid functions from this plugin based on the provided
         * filesystem (e.g. bd_fs_xfs_check_uuid for XFS). This function will return
         * an error for unknown/unsupported filesystems.
         * @param fstype the filesystem type to check @uuid for
         * @param uuid uuid to check
         * @returns whether @uuid is a valid UUID for the @fstype file system or not          (reason is provided in @error) Tech category: always available
         */
        function fs_check_uuid(fstype: string, uuid: string): boolean;
        /**
         * Clean all signatures from `device`.
         * Difference between this and bd_fs_wipe() is that this function doesn't
         * return error if `device` is already empty. This will also always remove
         * all signatures from `device,` not only the first one.
         * @param device the device to clean
         * @param force whether to wipe signatures on a mounted @device
         * @returns whether @device was successfully cleaned or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_WIPE
         */
        function fs_clean(device: string, force: boolean): boolean;
        function fs_error_quark(): GLib.Quark;
        function fs_exfat_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_exfat_check_label(label: string): boolean;
        function fs_exfat_check_uuid(uuid: string): boolean;
        function fs_exfat_get_info(device: string): FSExfatInfo;
        function fs_exfat_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_exfat_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_exfat_set_label(device: string, label: string): boolean;
        function fs_exfat_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_ext2_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext2_check_label(label: string): boolean;
        function fs_ext2_check_uuid(uuid: string): boolean;
        function fs_ext2_get_info(device: string): FSExt2Info;
        function fs_ext2_get_min_size(device: string): number;
        function fs_ext2_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext2_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
        function fs_ext2_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
        function fs_ext2_set_label(device: string, label: string): boolean;
        function fs_ext2_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_ext3_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext3_check_label(label: string): boolean;
        function fs_ext3_check_uuid(uuid: string): boolean;
        function fs_ext3_get_info(device: string): FSExt3Info;
        function fs_ext3_get_min_size(device: string): number;
        function fs_ext3_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext3_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
        function fs_ext3_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
        function fs_ext3_set_label(device: string, label: string): boolean;
        function fs_ext3_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_ext4_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext4_check_label(label: string): boolean;
        function fs_ext4_check_uuid(uuid: string): boolean;
        function fs_ext4_get_info(device: string): FSExt4Info;
        function fs_ext4_get_min_size(device: string): number;
        function fs_ext4_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ext4_repair(device: string, unsafe: boolean, extra?: ExtraArg[] | null): boolean;
        function fs_ext4_resize(device: string, new_size: number, extra?: ExtraArg[] | null): boolean;
        function fs_ext4_set_label(device: string, label: string): boolean;
        function fs_ext4_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_f2fs_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_f2fs_check_label(label: string): boolean;
        function fs_f2fs_get_info(device: string): FSF2FSInfo;
        function fs_f2fs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_f2fs_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_f2fs_resize(device: string, new_size: number, safe: boolean, extra?: ExtraArg[] | null): boolean;
        /**
         * Returns (transfer-none): features supported by `fstype,` see %BDFSFeatures for more information.
         *
         * Tech category: always available
         * @param fstype name of the filesystem to get features for (e.g. "ext4")
         */
        function fs_features(fstype: string): FSFeatures;
        /**
         * Freezes filesystem mounted on `mountpoint`. The filesystem must
         * support freezing.
         * @param mountpoint mountpoint of the device (filesystem) to freeze
         * @returns whether @mountpoint was successfully freezed or not
         */
        function fs_freeze(mountpoint: string): boolean;
        /**
         * Get free space for filesystem on `device`. This calls other fs info functions from this
         * plugin based on detected filesystem (e.g. bd_fs_ext4_get_info for ext4). This
         * function will return an error for unknown/unsupported filesystems.
         * @param device the device with file system to get free space for
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns free space of filesystem on @device, 0 in case of error. Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_get_free_space(device: string, fstype?: string | null): number;
        /**
         * Get first signature on `device` as a string.
         * @param device the device to probe
         * @returns type of filesystem found on @device, %NULL in case                           no signature has been detected or in case of error                           (@error is set in this case) Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_get_fstype(device: string): string;
        /**
         * Get minimum size for filesystem on `device`. This calls other fs info functions from this
         * plugin based on detected filesystem (e.g. bd_fs_ext4_get_min_size for ext4). This
         * function will return an error for unknown/unsupported filesystems.
         * @param device the device with file system to get minimum size for
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns minimum size of filesystem on @device, 0 in case of error. Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_RESIZE
         */
        function fs_get_min_size(device: string, fstype?: string | null): number;
        /**
         * Get mountpoint for `device`. If `device` is mounted multiple times only
         * one mountpoint will be returned.
         * @param device device to find mountpoint for
         * @returns mountpoint for @device, %NULL in case device is                           not mounted or in case of an error (@error is set                           in this case) Tech category: %BD_FS_TECH_MOUNT (no mode, ignored)
         */
        function fs_get_mountpoint(device: string): string;
        /**
         * Get size for filesystem on `device`. This calls other fs info functions from this
         * plugin based on detected filesystem (e.g. bd_fs_xfs_get_info for XFS). This
         * function will return an error for unknown/unsupported filesystems.
         *
         * Note: This function will mount `device` for filesystems that need to be mounted
         *       to gather information (like btrfs).
         * @param device the device with file system to get size for
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns size of filesystem on @device, 0 in case of error. Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_QUERY
         */
        function fs_get_size(device: string, fstype?: string | null): number;
        function fs_is_mountpoint(path: string): boolean;
        function fs_is_tech_avail(tech: FSTech | null, mode: number): boolean;
        /**
         * This is a helper function for creating filesystems with extra options.
         * This is the same as running a filesystem-specific function like %bd_fs_ext4_mkfs
         * and manually specifying the extra command line options. %BDFSMkfsOptions
         * removes the need to specify supported options for selected filesystems,
         * make sure to check whether `fstype` supports these options (see %bd_fs_can_mkfs)
         * for details.
         *
         * When specifying additional mkfs options using `extra,` it's caller's
         * responsibility to make sure these options do not conflict with options
         * specified using `options`. Extra options are added after the `options` and
         * there are no additional checks for duplicate and/or conflicting options.
         * @param device the device to create the new filesystem on
         * @param fstype name of the filesystem to create (e.g. "ext4")
         * @param options additional options like label or UUID for the filesystem
         * @param extra extra mkfs options not provided in @options
         * @returns whether @fstype was successfully created on @device or not. Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_MKFS
         */
        function fs_mkfs(device: string, fstype: string, options: FSMkfsOptions, extra?: ExtraArg[] | null): boolean;
        function fs_mount(
            device?: string | null,
            mountpoint?: string | null,
            fstype?: string | null,
            options?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function fs_nilfs2_check_label(label: string): boolean;
        function fs_nilfs2_check_uuid(uuid: string): boolean;
        function fs_nilfs2_get_info(device: string): FSNILFS2Info;
        function fs_nilfs2_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_nilfs2_resize(device: string, new_size: number): boolean;
        function fs_nilfs2_set_label(device: string, label: string): boolean;
        function fs_nilfs2_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_ntfs_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ntfs_check_label(label: string): boolean;
        function fs_ntfs_check_uuid(uuid: string): boolean;
        function fs_ntfs_get_info(device: string): FSNtfsInfo;
        function fs_ntfs_get_min_size(device: string): number;
        function fs_ntfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ntfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_ntfs_resize(device: string, new_size: number): boolean;
        function fs_ntfs_set_label(device: string, label: string): boolean;
        function fs_ntfs_set_uuid(device: string, uuid?: string | null): boolean;
        /**
         * Repair filesystem on `device`. This calls other fs repair functions from this
         * plugin based on detected filesystem (e.g. bd_fs_xfs_repair for XFS). This
         * function will return an error for unknown/unsupported filesystems.
         *
         * Most filesystem tools typically require the filesystem not to be mounted.
         * @param device the device the file system of which to repair
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns whether the file system on @device was successfully repaired or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_REPAIR
         */
        function fs_repair(device: string, fstype?: string | null): boolean;
        /**
         * Resize filesystem on `device`. This calls other fs resize functions from this
         * plugin based on provides or detected filesystem (e.g. bd_fs_xfs_resize for XFS).
         * This function will return an error for unknown/unsupported filesystems.
         *
         * Note: This function will mount `device` for filesystems that can be resized only
         *       when mounted (like XFS or Btrfs).
         * @param device the device the file system of which to resize
         * @param new_size new requested size for the file system (if 0, the file system is            adapted to the underlying block device)
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns whether the file system on @device was successfully resized or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_RESIZE
         */
        function fs_resize(device: string, new_size: number, fstype?: string | null): boolean;
        /**
         * Set label for filesystem on `device`. This calls other fs label functions from this
         * plugin based on detected filesystem (e.g. bd_fs_xfs_set_label for XFS). This
         * function will return an error for unknown/unsupported filesystems.
         *
         * Note: This function will mount `device` for filesystems that need to be mounted
         *       to set label (like btrfs).
         * @param device the device with file system to set the label for
         * @param label label to set
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns whether the file system on @device was successfully relabeled or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_SET_LABEL
         */
        function fs_set_label(device: string, label: string, fstype?: string | null): boolean;
        /**
         * Set UUID for filesystem on `device`. This calls other fs UUID functions from this
         * plugin based on detected filesystem (e.g. bd_fs_xfs_set_uuid for XFS). This
         * function will return an error for unknown/unsupported filesystems.
         * @param device the device with file system to set the UUID for
         * @param uuid UUID to set or %NULL to generate a new one
         * @param fstype the filesystem type on @device or %NULL to detect
         * @returns whether the UUID on the file system on @device was successfully changed or not Tech category: %BD_FS_TECH_GENERIC-%BD_FS_TECH_MODE_SET_UUID
         */
        function fs_set_uuid(device: string, uuid?: string | null, fstype?: string | null): boolean;
        function fs_supported_filesystems(): string[];
        /**
         * Note: This checks only whether `label` adheres the length limits for Logical Volume Identifier,
         *       not the stricter limits for Volume Identifier.
         * @param label label to check
         * @returns whether @label is a valid label for the UDF file system or not          (reason is provided in @error) Tech category: always available
         */
        function fs_udf_check_label(label: string): boolean;
        function fs_udf_check_uuid(uuid: string): boolean;
        function fs_udf_get_info(device: string): FSUdfInfo;
        function fs_udf_mkfs(
            device: string,
            media_type: string | null,
            revision: string | null,
            block_size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        /**
         * Note: This sets both Volume Identifier and Logical Volume Identifier. Volume Identifier
         *       is truncated to 30 or 15 characters to accommodate to the different length limits
         *       of these labels.
         * @param device the device containing the file system to set label for
         * @param label label to set
         * @returns whether the label of UDF file system on the @device was          successfully set or not Tech category: %BD_FS_TECH_UDF-%BD_FS_TECH_MODE_SET_LABEL
         */
        function fs_udf_set_label(device: string, label: string): boolean;
        function fs_udf_set_uuid(device: string, uuid?: string | null): boolean;
        /**
         * Un-freezes filesystem mounted on `mountpoint`. The filesystem must
         * support freezing.
         * @param mountpoint mountpoint of the device (filesystem) to un-freeze
         * @returns whether @mountpoint was successfully unfreezed or not
         */
        function fs_unfreeze(mountpoint: string): boolean;
        function fs_unmount(spec: string, lazy: boolean, force: boolean, extra?: ExtraArg[] | null): boolean;
        function fs_vfat_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_vfat_check_label(label: string): boolean;
        function fs_vfat_check_uuid(uuid: string): boolean;
        function fs_vfat_get_info(device: string): FSVfatInfo;
        /**
         * Please remember that FAT labels should always be uppercase.
         * @param device the device to create a new vfat fs on
         * @param extra extra options for the creation (right now                                                 passed to the 'mkfs.vfat' utility)
         * @returns whether a new vfat fs was successfully created on @device or not Tech category: %BD_FS_TECH_VFAT-%BD_FS_TECH_MODE_MKFS
         */
        function fs_vfat_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_vfat_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_vfat_resize(device: string, new_size: number): boolean;
        function fs_vfat_set_label(device: string, label: string): boolean;
        function fs_vfat_set_uuid(device: string, uuid?: string | null): boolean;
        function fs_wipe(device: string, all: boolean, force: boolean): boolean;
        function fs_xfs_check(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_xfs_check_label(label: string): boolean;
        function fs_xfs_check_uuid(uuid: string): boolean;
        function fs_xfs_get_info(device: string): FSXfsInfo;
        function fs_xfs_mkfs(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_xfs_repair(device: string, extra?: ExtraArg[] | null): boolean;
        function fs_xfs_resize(mpoint: string, new_size: number, extra?: ExtraArg[] | null): boolean;
        function fs_xfs_set_label(device: string, label: string): boolean;
        function fs_xfs_set_uuid(device: string, uuid?: string | null): boolean;
        function get_available_plugin_names(): string[];
        function get_plugin_name(plugin: Plugin | null): string;
        function get_plugin_soname(plugin: Plugin | null): string;
        function init(require_plugins?: PluginSpec[] | null, log_func?: UtilsLogFunc | null): boolean;
        function is_initialized(): boolean;
        function is_plugin_available(plugin: Plugin | null): boolean;
        function loop_error_quark(): GLib.Quark;
        function loop_get_loop_name(file: string): string;
        function loop_info(loop: string): LoopInfo;
        function loop_is_tech_avail(tech: LoopTech | null, mode: number): boolean;
        function loop_set_autoclear(loop: string, autoclear: boolean): boolean;
        function loop_setup(
            file: string,
            offset: number,
            size: number,
            read_only: boolean,
            part_scan: boolean,
            sector_size: number,
        ): [boolean, string];
        function loop_setup_from_fd(
            fd: number,
            offset: number,
            size: number,
            read_only: boolean,
            part_scan: boolean,
            sector_size: number,
        ): [boolean, string];
        function loop_teardown(loop: string): boolean;
        function lvm_add_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
        function lvm_add_pv_tags(device: string, tags: string[]): boolean;
        function lvm_add_vg_tags(vg_name: string, tags: string[]): boolean;
        function lvm_cache_attach(
            vg_name: string,
            data_lv: string,
            cache_pool_lv: string,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_cache_create_cached_lv(
            vg_name: string,
            lv_name: string,
            data_size: number,
            cache_size: number,
            md_size: number,
            mode: LVMCacheMode | null,
            flags: LVMCachePoolFlags | null,
            slow_pvs: string[],
            fast_pvs: string[],
        ): boolean;
        function lvm_cache_create_pool(
            vg_name: string,
            pool_name: string,
            pool_size: number,
            md_size: number,
            mode: LVMCacheMode | null,
            flags: LVMCachePoolFlags | null,
            fast_pvs: string[],
        ): boolean;
        function lvm_cache_detach(
            vg_name: string,
            cached_lv: string,
            destroy: boolean,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_cache_get_default_md_size(cache_size: number): number;
        function lvm_cache_get_mode_from_str(mode_str: string): LVMCacheMode;
        function lvm_cache_get_mode_str(mode: LVMCacheMode | null): string;
        /**
         * Converts the `data_lv` and `metadata_lv` into a new cache pool in the `vg_name`
         * VG.
         * @param vg_name name of the VG to create the new thin pool in
         * @param data_lv name of the LV that should become the data part of the new pool
         * @param metadata_lv name of the LV that should become the metadata part of the new pool
         * @param name name for the thin pool (if %NULL, the name @data_lv is inherited)
         * @param extra extra options for the thin pool creation                                                 (just passed to LVM as is)
         * @returns whether the new cache pool was successfully created from @data_lv and          @metadata_lv or not Tech category: %BD_LVM_TECH_CACHE-%BD_LVM_TECH_MODE_CREATE
         */
        function lvm_cache_pool_convert(
            vg_name: string,
            data_lv: string,
            metadata_lv: string,
            name?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_cache_pool_name(vg_name: string, cached_lv: string): string;
        function lvm_cache_stats(vg_name: string, cached_lv: string): LVMCacheStats;
        function lvm_delete_lv_tags(vg_name: string, lv_name: string, tags: string[]): boolean;
        function lvm_delete_pv_tags(device: string, tags: string[]): boolean;
        function lvm_delete_vg_tags(vg_name: string, tags: string[]): boolean;
        function lvm_devices_add(device: string, devices_file?: string | null, extra?: ExtraArg[] | null): boolean;
        function lvm_devices_delete(device: string, devices_file?: string | null, extra?: ExtraArg[] | null): boolean;
        function lvm_error_quark(): GLib.Quark;
        function lvm_get_devices_filter(): string[];
        function lvm_get_global_config(): string;
        function lvm_get_lv_physical_size(lv_size: number, pe_size: number): number;
        function lvm_get_max_lv_size(): number;
        function lvm_get_supported_pe_sizes(): number[];
        /**
         * Note: This function will be changed in 3.0: the `n_snapshots` parameter
         *       is currently not used and will be removed.
         * @param size size of the thin pool
         * @param chunk_size chunk size of the thin pool or 0 to use the default
         * @param n_snapshots ignored
         * @returns recommended size of the metadata space for the specified pool Tech category: %BD_LVM_TECH_THIN_CALCS no mode (it is ignored)
         */
        function lvm_get_thpool_meta_size(size: number, chunk_size: number, n_snapshots: number): number;
        function lvm_get_thpool_padding(size: number, pe_size: number, included: boolean): number;
        function lvm_get_vdo_compression_state_str(state: LVMVDOCompressionState | null): string;
        function lvm_get_vdo_index_state_str(state: LVMVDOIndexState | null): string;
        function lvm_get_vdo_operating_mode_str(mode: LVMVDOOperatingMode | null): string;
        function lvm_get_vdo_write_policy_from_str(policy_str: string): LVMVDOWritePolicy;
        function lvm_get_vdo_write_policy_str(policy: LVMVDOWritePolicy | null): string;
        function lvm_is_supported_pe_size(size: number): boolean;
        function lvm_is_tech_avail(tech: LVMTech | null, mode: number): boolean;
        function lvm_is_valid_thpool_chunk_size(size: number, discard: boolean): boolean;
        function lvm_is_valid_thpool_md_size(size: number): boolean;
        function lvm_lvactivate(
            vg_name: string,
            lv_name: string,
            ignore_skip: boolean,
            shared: boolean,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_lvcreate(
            vg_name: string,
            lv_name: string,
            size: number,
            type?: string | null,
            pv_list?: string[] | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_lvdeactivate(vg_name: string, lv_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_lvinfo(vg_name: string, lv_name: string): LVMLVdata;
        /**
         * This function will fill out the data_lvs, metadata_lvs, and segs fields as well.
         * @param vg_name name of the VG that contains the LV to get information about
         * @param lv_name name of the LV to get information about
         * @returns information about the @vg_name/@lv_name LV or %NULL in case of error (the @error) gets populated in those cases) Tech category: %BD_LVM_TECH_BASIC-%BD_LVM_TECH_MODE_QUERY
         */
        function lvm_lvinfo_tree(vg_name: string, lv_name: string): LVMLVdata;
        function lvm_lvorigin(vg_name: string, lv_name: string): string;
        function lvm_lvremove(vg_name: string, lv_name: string, force: boolean, extra?: ExtraArg[] | null): boolean;
        function lvm_lvrename(vg_name: string, lv_name: string, new_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_lvrepair(vg_name: string, lv_name: string, pv_list: string[], extra?: ExtraArg[] | null): boolean;
        function lvm_lvresize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;
        function lvm_lvs(vg_name?: string | null): LVMLVdata[];
        /**
         * This function will fill out the data_lvs, metadata_lvs, and segs fields as well.
         * @param vg_name name of the VG to get information about LVs from
         * @returns information about LVs found in the given @vg_name VG or in system if @vg_name is %NULL. Tech category: %BD_LVM_TECH_BASIC-%BD_LVM_TECH_MODE_QUERY
         */
        function lvm_lvs_tree(vg_name?: string | null): LVMLVdata[];
        function lvm_lvsnapshotcreate(
            vg_name: string,
            origin_name: string,
            snapshot_name: string,
            size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_lvsnapshotmerge(vg_name: string, snapshot_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_pvcreate(
            device: string,
            data_alignment: number,
            metadata_size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_pvinfo(device: string): LVMPVdata;
        function lvm_pvmove(src: string, dest?: string | null, extra?: ExtraArg[] | null): boolean;
        function lvm_pvremove(device: string, extra?: ExtraArg[] | null): boolean;
        function lvm_pvresize(device: string, size: number, extra?: ExtraArg[] | null): boolean;
        function lvm_pvs(): LVMPVdata[];
        function lvm_pvscan(device: string | null, update_cache: boolean, extra?: ExtraArg[] | null): boolean;
        function lvm_round_size_to_pe(size: number, pe_size: number, roundup: boolean): number;
        function lvm_set_devices_filter(devices?: string[] | null): boolean;
        /**
         * Note: This function sets configuration options for LVM calls internally
         *       in libblockdev, it doesn't change the global lvm.conf config file.
         *       Calling this function with `backup {backup=0 archive=0}` for example
         *       means `--config=backup {backup=0 archive=0}"` will be added to all
         *       calls libblockdev makes.
         * @param new_config string representation of the new global libblockdev LVM                          configuration to set or %NULL to reset to default
         * @returns whether the new requested global config @new_config was successfully          set or not Tech category: %BD_LVM_TECH_GLOB_CONF no mode (it is ignored)
         */
        function lvm_set_global_config(new_config?: string | null): boolean;
        function lvm_thlvcreate(
            vg_name: string,
            pool_name: string,
            lv_name: string,
            size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_thlvpoolname(vg_name: string, lv_name: string): string;
        /**
         * Converts the `data_lv` and `metadata_lv` into a new thin pool in the `vg_name`
         * VG.
         * @param vg_name name of the VG to create the new thin pool in
         * @param data_lv name of the LV that should become the data part of the new pool
         * @param metadata_lv name of the LV that should become the metadata part of the new pool
         * @param name name for the thin pool (if %NULL, the name @data_lv is inherited)
         * @param extra extra options for the thin pool creation                                                 (just passed to LVM as is)
         * @returns whether the new thin pool was successfully created from @data_lv and          @metadata_lv or not Tech category: %BD_LVM_TECH_THIN-%BD_LVM_TECH_MODE_CREATE
         */
        function lvm_thpool_convert(
            vg_name: string,
            data_lv: string,
            metadata_lv: string,
            name?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_thpoolcreate(
            vg_name: string,
            lv_name: string,
            size: number,
            md_size: number,
            chunk_size: number,
            profile?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_thsnapshotcreate(
            vg_name: string,
            origin_name: string,
            snapshot_name: string,
            pool_name?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_vdo_disable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vdo_disable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vdo_enable_compression(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vdo_enable_deduplication(vg_name: string, pool_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vdo_get_stats(vg_name: string, pool_name: string): LVMVDOStats;
        function lvm_vdo_get_stats_full(vg_name: string, pool_name: string): GLib.HashTable<string, string>;
        function lvm_vdo_info(vg_name: string, lv_name: string): LVMVDOPooldata;
        /**
         * Converts the `pool_lv` into a new VDO pool LV in the `vg_name` VG and creates a new
         * `name` VDO LV with size `virtual_size`.
         *
         * Note: All data on `pool_lv` will be irreversibly destroyed.
         * @param vg_name name of the VG that contains @pool_lv
         * @param pool_lv name of the LV that should become the new VDO pool LV
         * @param name name for the VDO LV or %NULL for default name
         * @param virtual_size virtual size for the new VDO LV
         * @param index_memory amount of index memory (in bytes) or 0 for default
         * @param compression whether to enable compression or not
         * @param deduplication whether to enable deduplication or not
         * @param write_policy write policy for the volume
         * @param extra extra options for the VDO pool creation                                                 (just passed to LVM as is)
         * @returns whether the new VDO pool LV was successfully created from @pool_lv and or not Tech category: %BD_LVM_TECH_VDO-%BD_LVM_TECH_MODE_CREATE&%BD_LVM_TECH_MODE_MODIFY
         */
        function lvm_vdo_pool_convert(
            vg_name: string,
            pool_lv: string,
            name: string | null,
            virtual_size: number,
            index_memory: number,
            compression: boolean,
            deduplication: boolean,
            write_policy: LVMVDOWritePolicy | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_vdo_pool_create(
            vg_name: string,
            lv_name: string,
            pool_name: string | null,
            data_size: number,
            virtual_size: number,
            index_memory: number,
            compression: boolean,
            deduplication: boolean,
            write_policy: LVMVDOWritePolicy | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_vdo_pool_resize(
            vg_name: string,
            pool_name: string,
            size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_vdo_resize(vg_name: string, lv_name: string, size: number, extra?: ExtraArg[] | null): boolean;
        function lvm_vdolvpoolname(vg_name: string, lv_name: string): string;
        function lvm_vgactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vgcreate(name: string, pv_list: string[], pe_size: number, extra?: ExtraArg[] | null): boolean;
        function lvm_vgdeactivate(vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vgextend(vg_name: string, device: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vginfo(vg_name: string): LVMVGdata;
        function lvm_vglock_start(vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vglock_stop(vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vgreduce(vg_name: string, device?: string | null, extra?: ExtraArg[] | null): boolean;
        function lvm_vgremove(vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vgrename(old_vg_name: string, new_vg_name: string, extra?: ExtraArg[] | null): boolean;
        function lvm_vgs(): LVMVGdata[];
        function lvm_writecache_attach(
            vg_name: string,
            data_lv: string,
            cache_lv: string,
            extra?: ExtraArg[] | null,
        ): boolean;
        function lvm_writecache_create_cached_lv(
            vg_name: string,
            lv_name: string,
            data_size: number,
            cache_size: number,
            slow_pvs: string[],
            fast_pvs: string[],
        ): boolean;
        function lvm_writecache_detach(
            vg_name: string,
            cached_lv: string,
            destroy: boolean,
            extra?: ExtraArg[] | null,
        ): boolean;
        function md_activate(
            raid_spec: string | null,
            members: string[] | null,
            uuid: string | null,
            start_degraded: boolean,
            extra?: ExtraArg[] | null,
        ): boolean;
        function md_add(raid_spec: string, device: string, raid_devs: number, extra?: ExtraArg[] | null): boolean;
        function md_canonicalize_uuid(uuid: string): string;
        function md_create(
            device_name: string,
            level: string,
            disks: string[],
            spares: number,
            version: string | null,
            bitmap: string | null,
            chunk_size: number,
            extra?: ExtraArg[] | null,
        ): boolean;
        function md_deactivate(raid_spec: string): boolean;
        function md_denominate(device: string): boolean;
        function md_destroy(device: string): boolean;
        function md_detail(raid_spec: string): MDDetailData;
        function md_error_quark(): GLib.Quark;
        function md_examine(device: string): MDExamineData;
        function md_get_bitmap_location(raid_spec: string): string;
        function md_get_md_uuid(uuid: string): string;
        function md_get_status(raid_spec: string): string;
        function md_get_superblock_size(member_size: number, version?: string | null): number;
        function md_is_tech_avail(tech: MDTech | null, mode: number): boolean;
        function md_name_from_node(node: string): string;
        function md_node_from_name(name: string): string;
        function md_nominate(device: string): boolean;
        function md_remove(raid_spec: string, device: string, fail: boolean, extra?: ExtraArg[] | null): boolean;
        function md_request_sync_action(raid_spec: string, action: string): boolean;
        function md_run(raid_spec: string): boolean;
        function md_set_bitmap_location(raid_spec: string, location: string): boolean;
        function mpath_error_quark(): GLib.Quark;
        function mpath_flush_mpaths(): boolean;
        function mpath_get_mpath_members(): string[];
        function mpath_is_mpath_member(device: string): boolean;
        function mpath_is_tech_avail(tech: MpathTech | null, mode: number): boolean;
        function mpath_set_friendly_names(enabled: boolean): boolean;
        function nvdimm_error_quark(): GLib.Quark;
        function nvdimm_is_tech_avail(tech: NVDIMMTech | null, mode: number): boolean;
        function nvdimm_list_namespaces(
            bus: string | null,
            region: string | null,
            idle: boolean,
            extra?: ExtraArg[] | null,
        ): NVDIMMNamespaceInfo[];
        function nvdimm_namespace_disable(namespace: string, extra?: ExtraArg[] | null): boolean;
        function nvdimm_namespace_enable(namespace: string, extra?: ExtraArg[] | null): boolean;
        function nvdimm_namespace_get_devname(device: string): string;
        function nvdimm_namespace_get_mode_from_str(mode_str: string): NVDIMMNamespaceMode;
        function nvdimm_namespace_get_mode_str(mode: NVDIMMNamespaceMode | null): string;
        function nvdimm_namespace_get_supported_sector_sizes(mode: NVDIMMNamespaceMode | null): number[];
        function nvdimm_namespace_info(namespace: string, extra?: ExtraArg[] | null): NVDIMMNamespaceInfo;
        function nvdimm_namespace_reconfigure(
            namespace: string,
            mode: NVDIMMNamespaceMode | null,
            force: boolean,
            extra?: ExtraArg[] | null,
        ): boolean;
        /**
         * Creates a transport connection to a remote system (specified by `transport_addr` and `transport_svcid)`
         * and creates a NVMe over Fabrics controller for the NVMe subsystem specified by the `subsysnqn` option.
         *
         * Valid values for `transport` include:
         * - `"rdma"`: An rdma network (RoCE, iWARP, Infiniband, basic rdma, etc.)
         * - `"fc"`: A Fibre Channel network.
         * - `"tcp"`: A TCP/IP network.
         * - `"loop"`: A NVMe over Fabrics target on the local host.
         *
         * In addition to the primary options it's possible to supply `extra` arguments:
         * - `"config"`: Use the specified JSON configuration file instead of the default file (see below) or
         *               specify `"none"` to avoid reading any configuration file.
         * - `"dhchap_key"`: NVMe In-band authentication secret in ASCII format as described
         *                      in the NVMe 2.0 specification. When not specified, the secret is by default read
         *                      from `/etc/nvme/hostkey`. In case that file does not exist no in-band authentication
         *                      is attempted.
         * - `"dhchap_ctrl_key"`: NVMe In-band authentication controller secret for bi-directional authentication.
         *                        When not specified, no bi-directional authentication is attempted.
         * - `"nr_io_queues"`: The number of I/O queues.
         * - `"nr_write_queues"`: Number of additional queues that will be used for write I/O.
         * - `"nr_poll_queues"`: Number of additional queues that will be used for polling latency sensitive I/O.
         * - `"queue_size"`: Number of elements in the I/O queues.
         * - `"keep_alive_tmo"`: The keep alive timeout (in seconds).
         * - `"reconnect_delay"`: The delay (in seconds) before reconnect is attempted after a connect loss.
         * - `"ctrl_loss_tmo"`: The controller loss timeout period (in seconds). A special value of `-1` will cause reconnecting forever.
         * - `"fast_io_fail_tmo"`: Fast I/O Fail timeout (in seconds).
         * - `"tos"`: Type of service.
         * - `"duplicate_connect"`: Allow duplicated connections between same transport host and subsystem port. Boolean value.
         * - `"disable_sqflow"`: Disables SQ flow control to omit head doorbell update for submission queues when sending nvme completions. Boolean value.
         * - `"hdr_digest"`: Generates/verifies header digest (TCP). Boolean value.
         * - `"data_digest"`: Generates/verifies data digest (TCP). Boolean value.
         * - `"tls"`: Enable TLS encryption (TCP). Boolean value.
         * - `"hostsymname"`: TP8010: NVMe host symbolic name.
         * - `"keyring"`: Keyring to store and lookup keys. String value.
         * - `"tls_key"`: TLS PSK for the connection. String value.
         *
         * Boolean values can be expressed by "0"/"1", "on"/"off" or "True"/"False" case-insensitive
         * strings. Failed numerical or boolean string conversions will result in the option being ignored.
         *
         * By default additional options are read from the default configuration file `/etc/nvme/config.json`.
         * This follows the default behaviour of `nvme-cli`. Use the `extra` `"config"` argument
         * to either specify a different config file or disable use of it. The JSON configuration
         * file format is documented in [https://raw.githubusercontent.com/linux-nvme/libnvme/master/doc/config-schema.json](https://raw.githubusercontent.com/linux-nvme/libnvme/master/doc/config-schema.json).
         * As a rule `extra` key names are kept consistent with the JSON config file schema.
         * Any `extra` option generally overrides particular option specified in a configuration file.
         * @param subsysnqn The name for the NVMe subsystem to connect to.
         * @param transport The network fabric used for a NVMe-over-Fabrics network.
         * @param transport_addr The network address of the Controller. For transports using IP addressing (e.g. `rdma`) this should be an IP-based address.
         * @param transport_svcid The transport service id.  For transports using IP addressing (e.g. `rdma`) this field is the port number. By default, the IP port number for the `RDMA` transport is `4420`.
         * @param host_traddr The network address used on the host to connect to the Controller. For TCP, this sets the source address on the socket.
         * @param host_iface The network interface used on the host to connect to the Controller (e.g. IP `eth1`, `enp2s0`). This forces the connection to be made on a specific interface instead of letting the system decide.
         * @param host_nqn Overrides the default Host NQN that identifies the NVMe Host. If this option is %NULL, the default is read from `/etc/nvme/hostnqn` first.                        If that does not exist, the autogenerated NQN value from the NVMe Host kernel module is used next. The Host NQN uniquely identifies the NVMe Host.
         * @param host_id User-defined host UUID or %NULL to use default (as defined in `/etc/nvme/hostid`)
         * @param extra Additional arguments.
         * @returns %TRUE if the subsystem was connected successfully, %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_connect(
            subsysnqn: string,
            transport: string,
            transport_addr?: string | null,
            transport_svcid?: string | null,
            host_traddr?: string | null,
            host_iface?: string | null,
            host_nqn?: string | null,
            host_id?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        /**
         * Initiates or aborts the Device Self-test operation on the controller or a namespace,
         * distinguished by the `device` path specified. In case a controller device
         * is specified then the self-test operation would include all active namespaces.
         *
         * To abort a running operation, pass #BD_NVME_SELF_TEST_ACTION_ABORT as `action`.
         * To retrieve progress of a current running operation, check the self-test log using
         * bd_nvme_get_self_test_log().
         * @param device a NVMe controller or namespace device (e.g. `/dev/nvme0`)
         * @param action self-test action to take.
         * @returns %TRUE if the device self-test command was issued successfully,          %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_MANAGE
         */
        function nvme_device_self_test(device: string, action: NVMESelfTestAction | null): boolean;
        /**
         * Disconnects and removes one or more existing NVMe over Fabrics controllers.
         * This may disconnect multiple controllers with matching `subsysnqn` and %TRUE
         * is only returned when all controllers were disconnected successfully.
         * @param subsysnqn The name of the NVMe subsystem to disconnect.
         * @returns %TRUE if all matching controllers were disconnected successfully, %FALSE with @error          set in case of a disconnect error or when no matching controllers were found. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_disconnect(subsysnqn: string): boolean;
        /**
         * Disconnects and removes a NVMe over Fabrics controller represented
         * by a block device path.
         * @param path NVMe controller device to disconnect (e.g. `/dev/nvme0`).
         * @returns %TRUE if the controller was disconnected successfully,          %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_disconnect_by_path(path: string): boolean;
        function nvme_error_quark(): GLib.Quark;
        /**
         * A convenient utility function to look up all controllers associated
         *  with a NVMe subsystem the specified namespace is part of.
         * @param ns_sysfs_path NVMe namespace device file.
         * @param subsysnqn Limit matching to the specified subsystem NQN.
         * @param host_nqn Limit matching to the specified host NQN.
         * @param host_id Limit matching to the specified host ID.
         * @returns list of controller sysfs paths          or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_find_ctrls_for_ns(
            ns_sysfs_path: string,
            subsysnqn?: string | null,
            host_nqn?: string | null,
            host_id?: string | null,
        ): string[];
        /**
         * Performs low level format of the NVM media, destroying all data and metadata for either
         * a specific namespace or all attached namespaces to the controller. Use this command
         * to change LBA sector size. Optional secure erase method can be specified as well.
         *
         * Supported LBA data sizes for a given namespace can be listed using the bd_nvme_get_namespace_info()
         * call. In case of a special value `0` the current LBA format for a given namespace will be
         * retained. When called on a controller device the first namespace is used as a reference.
         *
         * Note that the NVMe controller may define a Format NVM attribute indicating that the format
         * operation would apply to all namespaces and a format (excluding secure erase) of any
         * namespace results in a format of all namespaces in the NVM subsystem. In such case and
         * when `device` is a namespace block device the #BD_NVME_ERROR_WOULD_FORMAT_ALL_NS error
         * is returned to prevent further damage. This is then supposed to be handled by the caller
         * and bd_nvme_format() is supposed to be called on a controller device instead.
         *
         * This call blocks until the format operation has finished. To retrieve progress
         * of a current running operation, check the namespace info using bd_nvme_get_namespace_info().
         * @param device NVMe namespace or controller device to format (e.g. `/dev/nvme0n1`)
         * @param lba_data_size desired LBA data size (i.e. a sector size) in bytes or `0` to keep current. See #BDNVMELBAFormat and bd_nvme_get_namespace_info().
         * @param metadata_size desired metadata size in bytes or `0` for default. See #BDNVMELBAFormat and bd_nvme_get_namespace_info().
         * @param secure_erase optional secure erase action to take.
         * @returns %TRUE if the format command finished successfully, %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_MANAGE
         */
        function nvme_format(
            device: string,
            lba_data_size: number,
            metadata_size: number,
            secure_erase: NVMEFormatSecureErase | null,
        ): boolean;
        /**
         * Compute new Host NQN (NVM Qualified Name) value for the current system. This
         * takes in account various system identifiers (DMI, device tree) with the goal
         * of a stable unique identifier whenever feasible.
         * @returns the Host NQN string or %NULL with @error set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_generate_host_nqn(): string;
        /**
         * Retrieves information about the NVMe controller (the Identify Controller command)
         * as specified by the `device` block device path.
         * @param device a NVMe controller device (e.g. `/dev/nvme0`)
         * @returns information about given controller or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_controller_info(device: string): NVMEControllerInfo;
        /**
         * Retrieves Error Information Log (Log Identifier `01h`) entries, used to describe
         * extended error information for a command that completed with error or to report
         * an error that is not specific to a particular command. This log is global to the
         * controller. The ordering of the entries is based on the time when the error
         * occurred, with the most recent error being returned as the first log entry.
         * As the number of entries is typically limited by the drive implementation, only
         * most recent entries are provided.
         * @param device a NVMe controller device (e.g. `/dev/nvme0`)
         * @returns null-terminated list          of error entries or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_error_log_entries(device: string): NVMEErrorLogEntry[];
        /**
         * Reads the Host ID value from the global `/etc/nvme/hostid` file. An empty
         * string is an indication that no Host ID has been set.
         * @returns the Host ID string or an empty string if none set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_get_host_id(): string;
        /**
         * Reads the Host NQN (NVM Qualified Name) value from the global `/etc/nvme/hostnqn`
         * file. An empty string is an indication that no Host NQN has been set.
         * @returns the Host NQN string or an empty string if none set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_get_host_nqn(): string;
        /**
         * Retrieves information about the NVMe namespace (the Identify Namespace command)
         * as specified by the `device` block device path.
         * @param device a NVMe namespace device (e.g. `/dev/nvme0n1`)
         * @returns information about given namespace or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_namespace_info(device: string): NVMENamespaceInfo;
        /**
         * Retrieves the drive sanitize status log (Log Identifier `81h`) that includes information
         * about the most recent sanitize operation and the sanitize operation time estimates.
         *
         * As advised in the NVMe specification whitepaper the host should limit polling
         * to retrieve progress of a running sanitize operations (e.g. to at most once every
         * several minutes) to avoid interfering with the progress of the sanitize operation itself.
         * @param device a NVMe controller device (e.g. `/dev/nvme0`)
         * @returns sanitize log data or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_sanitize_log(device: string): NVMESanitizeLog;
        /**
         * Retrieves drive self-test log (Log Identifier `06h`). Provides the status of a self-test operation
         * in progress and the percentage complete of that operation, along with the results of the last
         * 20 device self-test operations.
         * @param device a NVMe controller device (e.g. `/dev/nvme0`)
         * @returns self-test log data or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_self_test_log(device: string): NVMESelfTestLog;
        /**
         * Retrieves drive SMART and general health information (Log Identifier `02h`).
         * The information provided is over the life of the controller and is retained across power cycles.
         * @param device a NVMe controller device (e.g. `/dev/nvme0`)
         * @returns health log data or %NULL in case of an error (with @error set). Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_INFO
         */
        function nvme_get_smart_log(device: string): NVMESmartLog;
        function nvme_is_tech_avail(tech: NVMETech | null, mode: number): boolean;
        /**
         * Starts a sanitize operation or recovers from a previously failed sanitize operation.
         * By definition, a sanitize operation alters all user data in the NVM subsystem such
         * that recovery of any previous user data from any cache, the non-volatile media,
         * or any Controller Memory Buffer is not possible. The scope of a sanitize operation
         * is all locations in the NVM subsystem that are able to contain user data, including
         * caches, Persistent Memory Regions, and unallocated or deallocated areas of the media.
         *
         * Once started, a sanitize operation is not able to be aborted and continues after
         * a Controller Level Reset including across power cycles. Once the sanitize operation
         * has run the media affected may not be immediately ready for use unless additional
         * media modification mechanism is run. This is often vendor specific and also depends
         * on the sanitize method (`action)` used. Callers to this sanitize operation should
         * set `no_dealloc` to %TRUE for the added convenience.
         *
         * The controller also ignores Critical Warning(s) in the SMART / Health Information
         * log page (e.g., read only mode) and attempts to complete the sanitize operation requested.
         *
         * This call returns immediately and the actual sanitize operation is performed
         * in the background. Use bd_nvme_get_sanitize_log() to retrieve status and progress
         * of a running sanitize operation. In case a sanitize operation fails the controller
         * may restrict its operation until a subsequent sanitize operation is started
         * (i.e. retried) or an #BD_NVME_SANITIZE_ACTION_EXIT_FAILURE action is used
         * to acknowledge the failure explicitly.
         *
         * The `overwrite_pass_count,` `overwrite_pattern` and `overwrite_invert_pattern`
         * arguments are only valid when `action` is #BD_NVME_SANITIZE_ACTION_OVERWRITE.
         *
         * The sanitize operation is set to run under the Allow Unrestricted Sanitize Exit
         * mode.
         * @param device NVMe namespace or controller device to format (e.g. `/dev/nvme0n1`)
         * @param action the sanitize action to perform.
         * @param no_dealloc instruct the controller to not deallocate the affected media area.
         * @param overwrite_pass_count number of overwrite passes [1-15] or 0 for the default (16 passes).
         * @param overwrite_pattern a 32-bit pattern used for the Overwrite sanitize operation.
         * @param overwrite_invert_pattern invert the overwrite pattern between passes.
         * @returns %TRUE if the format command finished successfully, %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_NVME-%BD_NVME_TECH_MODE_MANAGE
         */
        function nvme_sanitize(
            device: string,
            action: NVMESanitizeAction | null,
            no_dealloc: boolean,
            overwrite_pass_count: number,
            overwrite_pattern: number,
            overwrite_invert_pattern: boolean,
        ): boolean;
        function nvme_self_test_result_to_string(result: NVMESelfTestResult | null): string;
        /**
         * Writes the Host ID value to the system `/etc/nvme/hostid` file.
         * No validation of the string is performed.
         * @param host_id The Host ID.
         * @returns %TRUE if the value was set successfully or %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_set_host_id(host_id: string): boolean;
        /**
         * Writes the Host NQN (NVM Qualified Name) value to the system `/etc/nvme/hostnqn` file.
         * No validation of the string is performed.
         * @param host_nqn The Host NVM Qualified Name.
         * @returns %TRUE if the value was set successfully or %FALSE otherwise with @error set. Tech category: %BD_NVME_TECH_FABRICS-%BD_NVME_TECH_MODE_INITIATOR
         */
        function nvme_set_host_nqn(host_nqn: string): boolean;
        function part_create_part(
            disk: string,
            type: PartTypeReq | null,
            start: number,
            size: number,
            align: PartAlign | null,
        ): PartSpec;
        function part_create_table(disk: string, type: PartTableType | null, ignore_existing: boolean): boolean;
        function part_delete_part(disk: string, part: string): boolean;
        function part_error_quark(): GLib.Quark;
        function part_get_best_free_region(disk: string, type: PartType | null, size: number): PartSpec;
        function part_get_disk_free_regions(disk: string): PartSpec[];
        function part_get_disk_parts(disk: string): PartSpec[];
        function part_get_disk_spec(disk: string): PartDiskSpec;
        function part_get_part_by_pos(disk: string, position: number): PartSpec;
        function part_get_part_spec(disk: string, part: string): PartSpec;
        function part_get_part_table_type_str(type: PartTableType | null): string;
        function part_get_type_str(type: PartType | null): string;
        function part_is_tech_avail(tech: PartTech | null, mode: number): boolean;
        function part_resize_part(disk: string, part: string, size: number, align: PartAlign | null): boolean;
        function part_set_part_attributes(disk: string, part: string, attrs: number): boolean;
        function part_set_part_bootable(disk: string, part: string, bootable: boolean): boolean;
        function part_set_part_id(disk: string, part: string, part_id: string): boolean;
        function part_set_part_name(disk: string, part: string, name: string): boolean;
        function part_set_part_type(disk: string, part: string, type_guid: string): boolean;
        function part_set_part_uuid(disk: string, part: string, uuid: string): boolean;
        function reinit(require_plugins: PluginSpec[] | null, reload: boolean, log_func?: UtilsLogFunc | null): boolean;
        /**
         * Retrieve SMART information from the drive.
         * @param device device to check.
         * @param extra extra options to pass through.
         * @returns ATA SMART log or %NULL in case of an error (with @error set). Tech category: %BD_SMART_TECH_ATA-%BD_SMART_TECH_MODE_INFO
         */
        function smart_ata_get_info(device: string, extra?: ExtraArg[] | null): SmartATA;
        /**
         * Retrieve SMART information from the supplied data.
         * @param data binary data to parse.
         * @returns ATA SMART log or %NULL in case of an error (with @error set). Tech category: %BD_SMART_TECH_ATA-%BD_SMART_TECH_MODE_INFO
         */
        function smart_ata_get_info_from_data(data: Uint8Array | string): SmartATA;
        /**
         * Executes or aborts device self-test.
         * @param device device to trigger the test on.
         * @param operation #BDSmartSelfTestOp self-test operation.
         * @param extra extra options to pass through.
         * @returns %TRUE when the self-test was triggered successfully or %FALSE in case of an error (with @error set). Tech category: %BD_SMART_TECH_ATA-%BD_SMART_TECH_MODE_SELFTEST
         */
        function smart_device_self_test(
            device: string,
            operation: SmartSelfTestOp | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function smart_error_quark(): GLib.Quark;
        function smart_is_tech_avail(tech: SmartTechMode | null, mode: number): boolean;
        /**
         * Retrieve SMART information from SCSI or SAS-compliant drive.
         * @param device device to check.
         * @param extra extra options to pass through.
         * @returns SCSI SMART log or %NULL in case of an error (with @error set). Tech category: %BD_SMART_TECH_SCSI-%BD_SMART_TECH_MODE_INFO
         */
        function smart_scsi_get_info(device: string, extra?: ExtraArg[] | null): SmartSCSI;
        /**
         * Enables or disables SMART functionality on device.
         * @param device SMART-capable device.
         * @param enabled whether to enable or disable the SMART functionality
         * @param extra extra options to pass through.
         * @returns %TRUE when the functionality was set successfully or %FALSE in case of an error (with @error set). Tech category: %BD_SMART_TECH_ATA-%BD_SMART_TECH_MODE_INFO
         */
        function smart_set_enabled(device: string, enabled: boolean, extra?: ExtraArg[] | null): boolean;
        function swap_check_label(label: string): boolean;
        function swap_check_uuid(uuid: string): boolean;
        function swap_error_quark(): GLib.Quark;
        function swap_is_tech_avail(tech: SwapTech | null, mode: number): boolean;
        function swap_mkswap(
            device: string,
            label?: string | null,
            uuid?: string | null,
            extra?: ExtraArg[] | null,
        ): boolean;
        function swap_set_label(device: string, label: string): boolean;
        function swap_set_uuid(device: string, uuid: string): boolean;
        function swap_swapoff(device: string): boolean;
        function swap_swapon(device: string, priority: number): boolean;
        function swap_swapstatus(device: string): boolean;
        function try_init(
            request_plugins?: PluginSpec[] | null,
            log_func?: UtilsLogFunc | null,
        ): [boolean, string[] | null];
        function try_reinit(
            require_plugins: PluginSpec[] | null,
            reload: boolean,
            log_func?: UtilsLogFunc | null,
        ): [boolean, string[] | null];
        /**
         * Checks whether the currently running linux kernel version is equal or higher
         * than the specified required `major`.`minor`.`micro` version.
         * @param major Minimal major linux kernel version.
         * @param minor Minimal minor linux kernel version.
         * @param micro Minimal micro linux kernel version.
         * @returns an integer less than, equal to, or greater than zero, if detected version is <, == or > than the specified @major.@minor.@micro version.
         */
        function utils_check_linux_version(major: number, minor: number, micro: number): number;
        /**
         * Note: Both supplied `version` and parsed result using `version_regexp` must be in format
         *       `X[.Y[.Z[.Z2[.Z3...[-R]]]]]` where all components are natural numbers, see
         *       %bd_utils_version_cmp for details.
         * @param util name of the utility to check
         * @param version minimum required version of the utility or %NULL           if no version is required
         * @param version_arg argument to use with the @util to get version               info or %NULL to use "--version"
         * @param version_regexp regexp to extract version from the version                  info or %NULL if only version is printed by "$ @util @version_arg"
         * @returns whether the @util is available in a version >= @version or not          (@error is set in such case).
         */
        function utils_check_util_version(
            util: string,
            version?: string | null,
            version_arg?: string | null,
            version_regexp?: string | null,
        ): boolean;
        function utils_dbus_service_available(
            connection: Gio.DBusConnection | null,
            bus_type: Gio.BusType | null,
            bus_name: string,
            obj_prefix: string,
        ): boolean;
        function utils_echo_str_to_file(str: string, file_path: string): boolean;
        /**
         * Note that any NULL bytes read from standard output and standard error
         * output will be discarded.
         * @param argv the argv array for the call
         * @param extra extra arguments
         * @returns whether the @argv was successfully executed capturing the output or not
         */
        function utils_exec_and_capture_output(argv: string[], extra: ExtraArg[] | null): [boolean, string];
        function utils_exec_and_capture_output_no_progress(
            argv: string[],
            extra: ExtraArg[] | null,
        ): [boolean, string, string, number];
        function utils_exec_and_report_error(argv: string[], extra?: ExtraArg[] | null): boolean;
        function utils_exec_and_report_error_no_progress(argv: string[], extra?: ExtraArg[] | null): boolean;
        /**
         * Note that any NULL bytes read from standard output and standard error
         * output are treated as separators similar to newlines and `prog_extract`
         * will be called with the respective chunk.
         * @param argv the argv array for the call
         * @param extra extra arguments
         * @param prog_extract function for extracting progress information
         * @returns whether the @argv was successfully executed (no error and exit code 0) or not
         */
        function utils_exec_and_report_progress(
            argv: string[],
            extra: ExtraArg[] | null,
            prog_extract: UtilsProgExtract | null,
        ): [boolean, number];
        function utils_exec_and_report_status_error(argv: string[], extra: ExtraArg[] | null): [boolean, number];
        function utils_exec_with_input(argv: string[], input?: string | null, extra?: ExtraArg[] | null): boolean;
        function utils_get_device_symlinks(dev_spec: string): string[];
        /**
         * Retrieves version of currently running Linux kernel. Acts also as an initializer for statically cached data.
         * @returns Detected Linux kernel version or %NULL in case of an error. The returned value belongs to the library, do not free.
         */
        function utils_get_linux_version(): UtilsLinuxVersion;
        function utils_get_next_task_id(): number;
        function utils_have_kernel_module(module_name: string): boolean;
        function utils_init_logging(new_log_func?: UtilsLogFunc | null): boolean;
        function utils_init_prog_reporting(new_prog_func?: UtilsProgFunc | null): boolean;
        function utils_init_prog_reporting_thread(new_prog_func?: UtilsProgFunc | null): boolean;
        function utils_load_kernel_module(module_name: string, options?: string | null): boolean;
        function utils_log(level: number, msg: string): void;
        /**
         * Convenient function for logging to stdout. Can be used as #BDUtilsLogFunc.
         * @param level log level
         * @param msg log message
         */
        function utils_log_stdout(level: number, msg: string): void;
        function utils_log_task_status(task_id: number, msg: string): void;
        function utils_mute_prog_reporting_thread(): boolean;
        function utils_prog_reporting_initialized(): boolean;
        function utils_report_finished(task_id: number, msg: string): void;
        function utils_report_progress(task_id: number, completion: number, msg: string): void;
        function utils_report_started(msg: string): number;
        function utils_resolve_device(dev_spec: string): string;
        /**
         * Level of messages to log. Only messages with level <= `level` will be logged.
         * For example using with #BD_UTILS_LOG_WARNING (default value) only messages
         * with log levels #BD_UTILS_LOG_WARNING, #BD_UTILS_LOG_ERR, ..., #BD_UTILS_LOG_EMERG
         * will be logged.
         *
         * Note: #BD_UTILS_LOG_DEBUG level messages are always skipped unless compiled
         *       with `--enable-debug` configure option.
         * @param level log level
         */
        function utils_set_log_level(level: number): void;
        function utils_unload_kernel_module(module_name: string): boolean;
        function utils_version_cmp(ver_string1: string, ver_string2: string): number;
        interface UtilsLogFunc {
            (level: number, msg: string): void;
        }
        interface UtilsProgExtract {
            (line: string): boolean;
        }
        interface UtilsProgFunc {
            (task_id: number, status: UtilsProgStatus, completion: number, msg?: string | null): void;
        }

        export namespace BtrfsTechMode {
            export const $gtype: GObject.GType<BtrfsTechMode>;
        }

        enum BtrfsTechMode {
            CREATE,
            DELETE,
            MODIFY,
            QUERY,
        }

        export namespace CryptoIntegrityOpenFlags {
            export const $gtype: GObject.GType<CryptoIntegrityOpenFlags>;
        }

        enum CryptoIntegrityOpenFlags {
            NO_JOURNAL,
            RECOVERY,
            NO_JOURNAL_BITMAP,
            RECALCULATE,
            RECALCULATE_RESET,
            ALLOW_DISCARDS,
        }

        export namespace CryptoTechMode {
            export const $gtype: GObject.GType<CryptoTechMode>;
        }

        enum CryptoTechMode {
            CREATE,
            OPEN_CLOSE,
            QUERY,
            ADD_KEY,
            REMOVE_KEY,
            RESIZE,
            SUSPEND_RESUME,
            BACKUP_RESTORE,
            MODIFY,
        }

        export namespace DMTechMode {
            export const $gtype: GObject.GType<DMTechMode>;
        }

        enum DMTechMode {
            CREATE_ACTIVATE,
            REMOVE_DEACTIVATE,
            QUERY,
        }

        export namespace FSConfigureFlags {
            export const $gtype: GObject.GType<FSConfigureFlags>;
        }

        enum FSConfigureFlags {
            LABEL,
            UUID,
        }

        export namespace FSF2FSFeature {
            export const $gtype: GObject.GType<FSF2FSFeature>;
        }

        enum FSF2FSFeature {
            ENCRYPT,
            BLKZONED,
            ATOMIC_WRITE,
            EXTRA_ATTR,
            PRJQUOTA,
            INODE_CHKSUM,
            FLEXIBLE_INLINE_XATTR,
            QUOTA_INO,
            INODE_CRTIME,
            LOST_FOUND,
            VERITY,
            SB_CHKSUM,
        }

        export namespace FSFeatureFlags {
            export const $gtype: GObject.GType<FSFeatureFlags>;
        }

        enum FSFeatureFlags {
            OWNERS,
            PARTITION_TABLE,
        }

        export namespace FSFsckFlags {
            export const $gtype: GObject.GType<FSFsckFlags>;
        }

        enum FSFsckFlags {
            CHECK,
            REPAIR,
        }
        /**
         * Flags indicating mkfs options are available for given filesystem type.
         */

        /**
         * Flags indicating mkfs options are available for given filesystem type.
         */
        export namespace FSMkfsOptionsFlags {
            export const $gtype: GObject.GType<FSMkfsOptionsFlags>;
        }

        enum FSMkfsOptionsFlags {
            LABEL,
            UUID,
            DRY_RUN,
            NODISCARD,
            FORCE,
            NOPT,
        }
        /**
         * Flags indicating whether a filesystem resize action supports growing and/or
         * shrinking if mounted or unmounted.
         */

        /**
         * Flags indicating whether a filesystem resize action supports growing and/or
         * shrinking if mounted or unmounted.
         */
        export namespace FSResizeFlags {
            export const $gtype: GObject.GType<FSResizeFlags>;
        }

        enum FSResizeFlags {
            OFFLINE_SHRINK,
            OFFLINE_GROW,
            ONLINE_SHRINK,
            ONLINE_GROW,
        }

        export namespace FSTechMode {
            export const $gtype: GObject.GType<FSTechMode>;
        }

        enum FSTechMode {
            MKFS,
            WIPE,
            CHECK,
            REPAIR,
            SET_LABEL,
            QUERY,
            RESIZE,
            SET_UUID,
        }

        export namespace LVMCachePoolFlags {
            export const $gtype: GObject.GType<LVMCachePoolFlags>;
        }

        enum LVMCachePoolFlags {
            STRIPED,
            RAID1,
            RAID5,
            RAID6,
            RAID10,
            META_STRIPED,
            META_RAID1,
            META_RAID5,
            META_RAID6,
            META_RAID10,
        }

        export namespace LVMTechMode {
            export const $gtype: GObject.GType<LVMTechMode>;
        }

        enum LVMTechMode {
            CREATE,
            REMOVE,
            MODIFY,
            QUERY,
        }

        export namespace LoopTechMode {
            export const $gtype: GObject.GType<LoopTechMode>;
        }

        enum LoopTechMode {
            CREATE,
            DESTROY,
            MODIFY,
            QUERY,
        }

        export namespace MDTechMode {
            export const $gtype: GObject.GType<MDTechMode>;
        }

        enum MDTechMode {
            CREATE,
            DELETE,
            MODIFY,
            QUERY,
        }

        export namespace MpathTechMode {
            export const $gtype: GObject.GType<MpathTechMode>;
        }

        enum MpathTechMode {
            QUERY,
            MODIFY,
        }

        export namespace NVDIMMTechMode {
            export const $gtype: GObject.GType<NVDIMMTechMode>;
        }

        enum NVDIMMTechMode {
            CREATE,
            REMOVE,
            ACTIVATE_DEACTIVATE,
            QUERY,
            RECONFIGURE,
        }

        export namespace NVMEControllerFeature {
            export const $gtype: GObject.GType<NVMEControllerFeature>;
        }

        enum NVMEControllerFeature {
            MULTIPORT,
            MULTICTRL,
            SRIOV,
            ANA_REPORTING,
            FORMAT,
            FORMAT_ALL_NS,
            NS_MGMT,
            SELFTEST,
            SELFTEST_SINGLE,
            SANITIZE_CRYPTO,
            SANITIZE_BLOCK,
            SANITIZE_OVERWRITE,
            SECURE_ERASE_ALL_NS,
            SECURE_ERASE_CRYPTO,
            STORAGE_DEVICE,
            ENCLOSURE,
            MGMT_PCIE,
            MGMT_SMBUS,
        }

        export namespace NVMENamespaceFeature {
            export const $gtype: GObject.GType<NVMENamespaceFeature>;
        }

        enum NVMENamespaceFeature {
            THIN,
            MULTIPATH_SHARED,
            FORMAT_PROGRESS,
            ROTATIONAL,
        }

        export namespace NVMESmartCriticalWarning {
            export const $gtype: GObject.GType<NVMESmartCriticalWarning>;
        }

        enum NVMESmartCriticalWarning {
            SPARE,
            TEMPERATURE,
            DEGRADED,
            READONLY,
            VOLATILE_MEM,
            PMR_READONLY,
        }

        export namespace NVMETechMode {
            export const $gtype: GObject.GType<NVMETechMode>;
        }

        enum NVMETechMode {
            INFO,
            MANAGE,
            INITIATOR,
        }

        export namespace PartTechMode {
            export const $gtype: GObject.GType<PartTechMode>;
        }

        enum PartTechMode {
            CREATE_TABLE,
            MODIFY_TABLE,
            QUERY_TABLE,
            MODIFY_PART,
            QUERY_PART,
        }

        export namespace SmartATACapabilities {
            export const $gtype: GObject.GType<SmartATACapabilities>;
        }

        enum SmartATACapabilities {
            ATTRIBUTE_AUTOSAVE,
            AUTOSAVE_TIMER,
            ERROR_LOGGING,
            GP_LOGGING,
        }

        export namespace SmartTechMode {
            export const $gtype: GObject.GType<SmartTechMode>;
        }

        enum SmartTechMode {
            INFO,
            SELFTEST,
        }

        export namespace SwapTechMode {
            export const $gtype: GObject.GType<SwapTechMode>;
        }

        enum SwapTechMode {
            CREATE,
            ACTIVATE_DEACTIVATE,
            QUERY,
            SET_LABEL,
            SET_UUID,
        }
        class BtrfsDeviceInfo {
            static $gtype: GObject.GType<BtrfsDeviceInfo>;

            // Fields

            id: number;
            path: string;
            size: number;
            used: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    id: number;
                    path: string;
                    size: number;
                    used: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class BtrfsFilesystemInfo {
            static $gtype: GObject.GType<BtrfsFilesystemInfo>;

            // Fields

            label: string;
            uuid: string;
            num_devices: number;
            used: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    num_devices: number;
                    used: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class BtrfsSubvolumeInfo {
            static $gtype: GObject.GType<BtrfsSubvolumeInfo>;

            // Fields

            id: number;
            parent_id: number;
            path: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    id: number;
                    parent_id: number;
                    path: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class CryptoBITLKInfo {
            static $gtype: GObject.GType<CryptoBITLKInfo>;

            // Fields

            cipher: string;
            mode: string;
            uuid: string;
            backing_device: string;
            sector_size: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    cipher: string;
                    mode: string;
                    uuid: string;
                    backing_device: string;
                    sector_size: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class CryptoIntegrityExtra {
            static $gtype: GObject.GType<CryptoIntegrityExtra>;

            // Fields

            sector_size: number;
            journal_size: number;
            journal_watermark: number;
            journal_commit_time: number;
            interleave_sectors: number;
            tag_size: number;
            buffer_sectors: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    sector_size: number;
                    journal_size: number;
                    journal_watermark: number;
                    journal_commit_time: number;
                    interleave_sectors: number;
                    tag_size: number;
                    buffer_sectors: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                sector_size: number,
                journal_size: number,
                journal_watermark: number,
                journal_commit_time: number,
                interleave_sectors: number,
                tag_size: number,
                buffer_sectors: number,
            ): CryptoIntegrityExtra;
        }

        class CryptoIntegrityInfo {
            static $gtype: GObject.GType<CryptoIntegrityInfo>;

            // Fields

            algorithm: string;
            key_size: number;
            sector_size: number;
            tag_size: number;
            interleave_sectors: number;
            journal_size: number;
            journal_crypt: string;
            journal_integrity: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    algorithm: string;
                    key_size: number;
                    sector_size: number;
                    tag_size: number;
                    interleave_sectors: number;
                    journal_size: number;
                    journal_crypt: string;
                    journal_integrity: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class CryptoKeyslotContext {
            static $gtype: GObject.GType<CryptoKeyslotContext>;

            // Fields

            type: CryptoKeyslotContextType;

            // Constructors

            constructor(keyfile: string, keyfile_offset: number, key_size: number);
            _init(...args: any[]): void;

            static new_keyfile(keyfile: string, keyfile_offset: number, key_size: number): CryptoKeyslotContext;

            static new_keyring(key_desc: string): CryptoKeyslotContext;

            static new_passphrase(pass_data: Uint8Array | string): CryptoKeyslotContext;

            static new_volume_key(volume_key: Uint8Array | string): CryptoKeyslotContext;
        }

        class CryptoLUKSExtra {
            static $gtype: GObject.GType<CryptoLUKSExtra>;

            // Fields

            data_alignment: number;
            data_device: string;
            integrity: string;
            sector_size: number;
            label: string;
            subsystem: string;
            pbkdf: CryptoLUKSPBKDF;

            // Constructors

            constructor(
                properties?: Partial<{
                    data_alignment: number;
                    data_device: string;
                    integrity: string;
                    sector_size: number;
                    label: string;
                    subsystem: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                data_alignment: number,
                data_device: string | null,
                integrity: string | null,
                sector_size: number,
                label?: string | null,
                subsystem?: string | null,
                pbkdf?: CryptoLUKSPBKDF | null,
            ): CryptoLUKSExtra;
        }

        class CryptoLUKSInfo {
            static $gtype: GObject.GType<CryptoLUKSInfo>;

            // Fields

            version: CryptoLUKSVersion;
            cipher: string;
            mode: string;
            uuid: string;
            backing_device: string;
            sector_size: number;
            metadata_size: number;
            label: string;
            subsystem: string;
            hw_encryption: CryptoLUKSHWEncryptionType;

            // Constructors

            _init(...args: any[]): void;
        }

        class CryptoLUKSPBKDF {
            static $gtype: GObject.GType<CryptoLUKSPBKDF>;

            // Fields

            type: string;
            hash: string;
            max_memory_kb: number;
            iterations: number;
            time_ms: number;
            parallel_threads: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: string;
                    hash: string;
                    max_memory_kb: number;
                    iterations: number;
                    time_ms: number;
                    parallel_threads: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                type: string | null,
                hash: string | null,
                max_memory_kb: number,
                iterations: number,
                time_ms: number,
                parallel_threads: number,
            ): CryptoLUKSPBKDF;
        }

        class CryptoLUKSTokenInfo {
            static $gtype: GObject.GType<CryptoLUKSTokenInfo>;

            // Fields

            id: number;
            type: string;
            keyslot: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    id: number;
                    type: string;
                    keyslot: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * See bd_extra_arg_new() for an example on how to construct the extra args.
         */
        class ExtraArg {
            static $gtype: GObject.GType<ExtraArg>;

            // Fields

            opt: string;
            val: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    opt: string;
                    val: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](opt: string, val: string): ExtraArg;

            // Static methods

            /**
             * Frees `args` and all its elements.
             * @param args A list of %BDExtraArg to free
             */
            static list_free(args?: ExtraArg[] | null): void;

            // Methods

            /**
             * Creates a new copy of `arg`.
             */
            copy(): ExtraArg;
            /**
             * Frees `arg`.
             */
            free(): void;
        }

        class FSBtrfsInfo {
            static $gtype: GObject.GType<FSBtrfsInfo>;

            // Fields

            label: string;
            uuid: string;
            size: number;
            free_space: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    size: number;
                    free_space: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSExfatInfo {
            static $gtype: GObject.GType<FSExfatInfo>;

            // Fields

            label: string;
            uuid: string;
            sector_size: number;
            sector_count: number;
            cluster_count: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    sector_size: number;
                    sector_count: number;
                    cluster_count: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSExt2Info {
            static $gtype: GObject.GType<FSExt2Info>;

            // Fields

            label: string;
            uuid: string;
            state: string;
            block_size: number;
            block_count: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    state: string;
                    block_size: number;
                    block_count: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSExt3Info {
            static $gtype: GObject.GType<FSExt3Info>;

            // Fields

            label: string;
            uuid: string;
            state: string;
            block_size: number;
            block_count: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    state: string;
                    block_size: number;
                    block_count: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSExt4Info {
            static $gtype: GObject.GType<FSExt4Info>;

            // Fields

            label: string;
            uuid: string;
            state: string;
            block_size: number;
            block_count: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    state: string;
                    block_size: number;
                    block_count: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSExtInfo {
            static $gtype: GObject.GType<FSExtInfo>;

            // Fields

            label: string;
            uuid: string;
            state: string;
            block_size: number;
            block_count: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    state: string;
                    block_size: number;
                    block_count: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSF2FSInfo {
            static $gtype: GObject.GType<FSF2FSInfo>;

            // Fields

            label: string;
            uuid: string;
            sector_size: number;
            sector_count: number;
            features: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    sector_size: number;
                    sector_count: number;
                    features: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSFeatures {
            static $gtype: GObject.GType<FSFeatures>;

            // Fields

            resize: FSResizeFlags;
            mkfs: FSMkfsOptionsFlags;
            fsck: FSFsckFlags;
            configure: FSConfigureFlags;
            features: FSFeatureFlags;
            partition_id: string;
            partition_type: string;

            // Constructors

            _init(...args: any[]): void;
        }

        class FSMkfsOptions {
            static $gtype: GObject.GType<FSMkfsOptions>;

            // Fields

            label: string;
            uuid: string;
            dry_run: boolean;
            no_discard: boolean;
            force: boolean;
            no_pt: boolean;
            reserve: Uint8Array;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    dry_run: boolean;
                    no_discard: boolean;
                    force: boolean;
                    no_pt: boolean;
                    reserve: Uint8Array;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSNILFS2Info {
            static $gtype: GObject.GType<FSNILFS2Info>;

            // Fields

            label: string;
            uuid: string;
            size: number;
            block_size: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    size: number;
                    block_size: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSNtfsInfo {
            static $gtype: GObject.GType<FSNtfsInfo>;

            // Fields

            label: string;
            uuid: string;
            size: number;
            free_space: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    size: number;
                    free_space: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSUdfInfo {
            static $gtype: GObject.GType<FSUdfInfo>;

            // Fields

            label: string;
            uuid: string;
            revision: string;
            lvid: string;
            vid: string;
            block_size: number;
            block_count: number;
            free_blocks: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    revision: string;
                    lvid: string;
                    vid: string;
                    block_size: number;
                    block_count: number;
                    free_blocks: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSVfatInfo {
            static $gtype: GObject.GType<FSVfatInfo>;

            // Fields

            label: string;
            uuid: string;
            cluster_size: number;
            cluster_count: number;
            free_cluster_count: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    cluster_size: number;
                    cluster_count: number;
                    free_cluster_count: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class FSXfsInfo {
            static $gtype: GObject.GType<FSXfsInfo>;

            // Fields

            label: string;
            uuid: string;
            block_size: number;
            block_count: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    label: string;
                    uuid: string;
                    block_size: number;
                    block_count: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class LVMCacheStats {
            static $gtype: GObject.GType<LVMCacheStats>;

            // Fields

            block_size: number;
            cache_size: number;
            cache_used: number;
            md_block_size: number;
            md_size: number;
            md_used: number;
            read_hits: number;
            read_misses: number;
            write_hits: number;
            write_misses: number;
            mode: LVMCacheMode;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * The `segs,` `data_lvs,` and `metadata_lvs` fields are only filled by a
         * call to bd_lvm_lvinfo_tree or bd_lvm_lvs_tree.  They are all NULL
         * normally.  If they are filled, they follow these rules:
         *
         * A LV is either stored directly on physical volumes, or is made up
         * of sub-LVs.  If it is stored on PVs, the `segs` list is non-empty
         * and the `data_lvs` and `metadata_lvs` fields are both NULL.  If it is
         * made up of sub-LVs, then `segs` is NULL, `data_lvs` is non-empty and
         * `metadata_lvs` might or might not be empty but is non-NULL.  The
         * sub-LVs contained in `data_lv` and `metadata_lv` are always included
         * in `data_lvs` and `metadata_lvs,` respectively.
         *
         * For a partial LV, the `segs` list might not be complete; i.e., the
         * sum of the sizes of the listed segments might not be equal to the
         * size reported for the LV itself.
         *
         * Also, the order of entries in `segs` must be assumed to be random;
         * it does not correspond to the order of segments in the logical
         * volume itself.
         */
        class LVMLVdata {
            static $gtype: GObject.GType<LVMLVdata>;

            // Fields

            lv_name: string;
            vg_name: string;
            uuid: string;
            size: number;
            attr: string;
            segtype: string;
            origin: string;
            pool_lv: string;
            data_lv: string;
            metadata_lv: string;
            roles: string;
            move_pv: string;
            data_percent: number;
            metadata_percent: number;
            copy_percent: number;
            lv_tags: string[];
            data_lvs: string[];
            metadata_lvs: string[];
            segs: LVMSEGdata[];

            // Constructors

            constructor(
                properties?: Partial<{
                    lv_name: string;
                    vg_name: string;
                    uuid: string;
                    size: number;
                    attr: string;
                    segtype: string;
                    origin: string;
                    pool_lv: string;
                    data_lv: string;
                    metadata_lv: string;
                    roles: string;
                    move_pv: string;
                    data_percent: number;
                    metadata_percent: number;
                    copy_percent: number;
                    lv_tags: string[];
                    data_lvs: string[];
                    metadata_lvs: string[];
                    segs: LVMSEGdata[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class LVMPVdata {
            static $gtype: GObject.GType<LVMPVdata>;

            // Fields

            pv_name: string;
            pv_uuid: string;
            pv_free: number;
            pv_size: number;
            pe_start: number;
            vg_name: string;
            vg_uuid: string;
            vg_size: number;
            vg_free: number;
            vg_extent_size: number;
            vg_extent_count: number;
            vg_free_count: number;
            vg_pv_count: number;
            pv_tags: string[];
            missing: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    pv_name: string;
                    pv_uuid: string;
                    pv_free: number;
                    pv_size: number;
                    pe_start: number;
                    vg_name: string;
                    vg_uuid: string;
                    vg_size: number;
                    vg_free: number;
                    vg_extent_size: number;
                    vg_extent_count: number;
                    vg_free_count: number;
                    vg_pv_count: number;
                    pv_tags: string[];
                    missing: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        class LVMSEGdata {
            static $gtype: GObject.GType<LVMSEGdata>;

            // Fields

            size_pe: number;
            pv_start_pe: number;
            pvdev: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    size_pe: number;
                    pv_start_pe: number;
                    pvdev: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class LVMVDOPooldata {
            static $gtype: GObject.GType<LVMVDOPooldata>;

            // Fields

            operating_mode: LVMVDOOperatingMode;
            compression_state: LVMVDOCompressionState;
            index_state: LVMVDOIndexState;
            write_policy: LVMVDOWritePolicy;
            used_size: number;
            saving_percent: number;
            index_memory_size: number;
            deduplication: boolean;
            compression: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        class LVMVDOStats {
            static $gtype: GObject.GType<LVMVDOStats>;

            // Fields

            block_size: number;
            logical_block_size: number;
            physical_blocks: number;
            data_blocks_used: number;
            overhead_blocks_used: number;
            logical_blocks_used: number;
            used_percent: number;
            saving_percent: number;
            write_amplification_ratio: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    block_size: number;
                    logical_block_size: number;
                    physical_blocks: number;
                    data_blocks_used: number;
                    overhead_blocks_used: number;
                    logical_blocks_used: number;
                    used_percent: number;
                    saving_percent: number;
                    write_amplification_ratio: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class LVMVGdata {
            static $gtype: GObject.GType<LVMVGdata>;

            // Fields

            name: string;
            uuid: string;
            size: number;
            extent_size: number;
            extent_count: number;
            free_count: number;
            pv_count: number;
            exported: boolean;
            vg_tags: string[];

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    uuid: string;
                    size: number;
                    free: number;
                    extent_size: number;
                    extent_count: number;
                    free_count: number;
                    pv_count: number;
                    exported: boolean;
                    vg_tags: string[];
                }>,
            );
            _init(...args: any[]): void;
        }

        class LoopInfo {
            static $gtype: GObject.GType<LoopInfo>;

            // Fields

            backing_file: string;
            offset: number;
            autoclear: boolean;
            direct_io: boolean;
            part_scan: boolean;
            read_only: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    backing_file: string;
                    offset: number;
                    autoclear: boolean;
                    direct_io: boolean;
                    part_scan: boolean;
                    read_only: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MDDetailData {
            static $gtype: GObject.GType<MDDetailData>;

            // Fields

            device: string;
            metadata: string;
            creation_time: string;
            level: string;
            name: string;
            array_size: number;
            use_dev_size: number;
            raid_devices: number;
            total_devices: number;
            active_devices: number;
            working_devices: number;
            failed_devices: number;
            spare_devices: number;
            clean: boolean;
            uuid: string;
            container: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    device: string;
                    metadata: string;
                    creation_time: string;
                    level: string;
                    name: string;
                    array_size: number;
                    use_dev_size: number;
                    raid_devices: number;
                    total_devices: number;
                    active_devices: number;
                    working_devices: number;
                    failed_devices: number;
                    spare_devices: number;
                    clean: boolean;
                    uuid: string;
                    container: string;
                }>,
            );
            _init(...args: any[]): void;
        }

        class MDExamineData {
            static $gtype: GObject.GType<MDExamineData>;

            // Fields

            device: string;
            level: string;
            num_devices: number;
            name: string;
            size: number;
            uuid: string;
            update_time: number;
            dev_uuid: string;
            events: number;
            metadata: string;
            chunk_size: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    device: string;
                    level: string;
                    num_devices: number;
                    name: string;
                    size: number;
                    uuid: string;
                    update_time: number;
                    dev_uuid: string;
                    events: number;
                    metadata: string;
                    chunk_size: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class NVDIMMNamespaceInfo {
            static $gtype: GObject.GType<NVDIMMNamespaceInfo>;

            // Fields

            dev: string;
            mode: number;
            size: number;
            uuid: string;
            sector_size: number;
            blockdev: string;
            enabled: boolean;

            // Constructors

            constructor(
                properties?: Partial<{
                    dev: string;
                    mode: number;
                    size: number;
                    uuid: string;
                    sector_size: number;
                    blockdev: string;
                    enabled: boolean;
                }>,
            );
            _init(...args: any[]): void;
        }

        class NVMEControllerInfo {
            static $gtype: GObject.GType<NVMEControllerInfo>;

            // Fields

            pci_vendor_id: number;
            pci_subsys_vendor_id: number;
            ctrl_id: number;
            fguid: string;
            model_number: string;
            serial_number: string;
            firmware_ver: string;
            nvme_ver: string;
            features: number;
            controller_type: NVMEControllerType;
            selftest_ext_time: number;
            hmb_pref_size: number;
            hmb_min_size: number;
            size_total: number;
            size_unalloc: number;
            num_namespaces: number;
            subsysnqn: string;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMEErrorLogEntry {
            static $gtype: GObject.GType<NVMEErrorLogEntry>;

            // Fields

            error_count: number;
            command_id: number;
            command_specific: number;
            command_status: number;
            command_error: GLib.Error;
            lba: number;
            nsid: number;
            transport_type: NVMETransportType;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Namespace LBA Format Data Structure.
         */
        class NVMELBAFormat {
            static $gtype: GObject.GType<NVMELBAFormat>;

            // Fields

            data_size: number;
            metadata_size: number;
            relative_performance: NVMELBAFormatRelativePerformance;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMENamespaceInfo {
            static $gtype: GObject.GType<NVMENamespaceInfo>;

            // Fields

            nsid: number;
            eui64: string;
            uuid: string;
            nguid: string;
            nsize: number;
            ncap: number;
            nuse: number;
            features: number;
            format_progress_remaining: number;
            write_protected: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMESanitizeLog {
            static $gtype: GObject.GType<NVMESanitizeLog>;

            // Fields

            sanitize_progress: number;
            sanitize_status: NVMESanitizeStatus;
            global_data_erased: boolean;
            overwrite_passes: number;
            time_for_overwrite: number;
            time_for_block_erase: number;
            time_for_crypto_erase: number;
            time_for_overwrite_nd: number;
            time_for_block_erase_nd: number;
            time_for_crypto_erase_nd: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMESelfTestLog {
            static $gtype: GObject.GType<NVMESelfTestLog>;

            // Fields

            current_operation: NVMESelfTestAction;
            current_operation_completion: number;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMESelfTestLogEntry {
            static $gtype: GObject.GType<NVMESelfTestLogEntry>;

            // Fields

            result: NVMESelfTestResult;
            action: NVMESelfTestAction;
            segment: number;
            power_on_hours: number;
            nsid: number;
            failing_lba: number;
            status_code_error: GLib.Error;

            // Constructors

            _init(...args: any[]): void;
        }

        class NVMESmartLog {
            static $gtype: GObject.GType<NVMESmartLog>;

            // Fields

            critical_warning: number;
            avail_spare: number;
            spare_thresh: number;
            percent_used: number;
            total_data_read: number;
            total_data_written: number;
            ctrl_busy_time: number;
            power_cycles: number;
            power_on_hours: number;
            unsafe_shutdowns: number;
            media_errors: number;
            num_err_log_entries: number;
            temperature: number;
            temp_sensors: number[];
            wctemp: number;
            cctemp: number;
            warning_temp_time: number;
            critical_temp_time: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    critical_warning: number;
                    avail_spare: number;
                    spare_thresh: number;
                    percent_used: number;
                    total_data_read: number;
                    total_data_written: number;
                    ctrl_busy_time: number;
                    power_cycles: number;
                    power_on_hours: number;
                    unsafe_shutdowns: number;
                    media_errors: number;
                    num_err_log_entries: number;
                    temperature: number;
                    temp_sensors: number[];
                    wctemp: number;
                    cctemp: number;
                    warning_temp_time: number;
                    critical_temp_time: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        class PartDiskSpec {
            static $gtype: GObject.GType<PartDiskSpec>;

            // Fields

            path: string;
            table_type: PartTableType;
            size: number;
            sector_size: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            copy(): PartDiskSpec;
            free(): void;
        }

        class PartSpec {
            static $gtype: GObject.GType<PartSpec>;

            // Fields

            path: string;
            name: string;
            uuid: string;
            id: string;
            type_guid: string;
            type: number;
            start: number;
            size: number;
            bootable: boolean;
            attrs: number;
            type_name: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    path: string;
                    name: string;
                    uuid: string;
                    id: string;
                    type_guid: string;
                    type: number;
                    start: number;
                    size: number;
                    bootable: boolean;
                    attrs: number;
                    type_name: string;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            copy(): PartSpec;
            free(): void;
        }

        class PluginSpec {
            static $gtype: GObject.GType<PluginSpec>;

            // Fields

            name: Plugin;
            so_name: string;

            // Constructors

            constructor(name: Plugin, so_name?: string | null);
            _init(...args: any[]): void;

            static ['new'](name: Plugin, so_name?: string | null): PluginSpec;
        }

        class SmartATA {
            static $gtype: GObject.GType<SmartATA>;

            // Fields

            smart_supported: boolean;
            smart_enabled: boolean;
            overall_status_passed: boolean;
            offline_data_collection_status: SmartATAOfflineDataCollectionStatus;
            auto_offline_data_collection_enabled: boolean;
            offline_data_collection_completion: number;
            offline_data_collection_capabilities: number;
            self_test_status: SmartATASelfTestStatus;
            self_test_percent_remaining: number;
            self_test_polling_short: number;
            self_test_polling_extended: number;
            self_test_polling_conveyance: number;
            smart_capabilities: number;
            power_on_time: number;
            power_cycle_count: number;
            temperature: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Retrieve SMART information from the drive.
             * @param device device to check.
             * @param extra extra options to pass through.
             */
            static get_info(device: string, extra?: ExtraArg[] | null): SmartATA;
            /**
             * Retrieve SMART information from the supplied data.
             * @param data binary data to parse.
             */
            static get_info_from_data(data: Uint8Array | string): SmartATA;
        }

        class SmartATAAttribute {
            static $gtype: GObject.GType<SmartATAAttribute>;

            // Fields

            id: number;
            name: string;
            well_known_name: string;
            value: number;
            worst: number;
            threshold: number;
            failed_past: boolean;
            failing_now: boolean;
            value_raw: number;
            flags: number;
            pretty_value: number;
            pretty_value_unit: SmartATAAttributeUnit;
            pretty_value_string: string;

            // Constructors

            _init(...args: any[]): void;
        }

        class SmartSCSI {
            static $gtype: GObject.GType<SmartSCSI>;

            // Fields

            smart_supported: boolean;
            smart_enabled: boolean;
            overall_status_passed: boolean;
            scsi_ie: SmartSCSIInformationalException;
            scsi_ie_asc: number;
            scsi_ie_ascq: number;
            scsi_ie_string: string;
            background_scan_status: SmartSCSIBackgroundScanStatus;
            background_scan_progress: number;
            background_scan_runs: number;
            background_medium_scan_runs: number;
            read_errors_corrected_eccfast: number;
            read_errors_corrected_eccdelayed: number;
            read_errors_corrected_rereads: number;
            read_errors_corrected_total: number;
            read_errors_uncorrected: number;
            read_processed_bytes: number;
            write_errors_corrected_eccfast: number;
            write_errors_corrected_eccdelayed: number;
            write_errors_corrected_rewrites: number;
            write_errors_corrected_total: number;
            write_errors_uncorrected: number;
            write_processed_bytes: number;
            start_stop_cycle_count: number;
            start_stop_cycle_lifetime: number;
            load_unload_cycle_count: number;
            load_unload_cycle_lifetime: number;
            scsi_grown_defect_list: number;
            power_on_time: number;
            temperature_warning_enabled: boolean;
            temperature: number;
            temperature_drive_trip: number;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Retrieve SMART information from SCSI or SAS-compliant drive.
             * @param device device to check.
             * @param extra extra options to pass through.
             */
            static get_info(device: string, extra?: ExtraArg[] | null): SmartSCSI;
        }

        class UtilsLinuxVersion {
            static $gtype: GObject.GType<UtilsLinuxVersion>;

            // Fields

            major: number;
            minor: number;
            micro: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    major: number;
                    minor: number;
                    micro: number;
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

    export default BlockDev;
}

declare module 'gi://BlockDev' {
    import BlockDev30 from 'gi://BlockDev?version=3.0';
    export default BlockDev30;
}
// END
