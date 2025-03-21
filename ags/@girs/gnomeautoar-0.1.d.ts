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

declare module 'gi://GnomeAutoar?version=0.1' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace GnomeAutoar {
        /**
         * GnomeAutoar-0.1
         */

        export namespace ConflictAction {
            export const $gtype: GObject.GType<ConflictAction>;
        }

        enum ConflictAction {
            UNHANDLED,
            SKIP,
            OVERWRITE,
            CHANGE_DESTINATION,
        }
        /**
         * This is a non-negative number which represents filters supported by
         * libarchive. A libarchive filter is a filter which can convert a
         * regular file into a compressed file.
         */

        /**
         * This is a non-negative number which represents filters supported by
         * libarchive. A libarchive filter is a filter which can convert a
         * regular file into a compressed file.
         */
        export namespace Filter {
            export const $gtype: GObject.GType<Filter>;
        }

        enum Filter {
            /**
             * %ARCHIVE_FILTER_NONE: No filter
             */
            NONE,
            /**
             * %ARCHIVE_FILTER_COMPRESS: UNIX-compressed
             */
            COMPRESS,
            /**
             * %ARCHIVE_FILTER_GZIP: Gzip
             */
            GZIP,
            /**
             * %ARCHIVE_FILTER_BZIP2: Bzip2
             */
            BZIP2,
            /**
             * %ARCHIVE_FILTER_XZ: XZ
             */
            XZ,
            /**
             * %ARCHIVE_FILTER_LZMA: LZMA
             */
            LZMA,
            /**
             * %ARCHIVE_FILTER_LZIP: Lzip
             */
            LZIP,
            /**
             * %ARCHIVE_FILTER_LZOP: LZO
             */
            LZOP,
            /**
             * %ARCHIVE_FILTER_GRZIP: GRZip
             */
            GRZIP,
            /**
             * %ARCHIVE_FILTER_LRZIP: Long Range ZIP (lrzip)
             */
            LRZIP,
        }
        /**
         * This is a non-negative number which represents formats supported by
         * libarchive. A libarchive format is a file format which can store many
         * files as a archive file.
         */

        /**
         * This is a non-negative number which represents formats supported by
         * libarchive. A libarchive format is a file format which can store many
         * files as a archive file.
         */
        export namespace Format {
            export const $gtype: GObject.GType<Format>;
        }

        enum Format {
            /**
             * %ARCHIVE_FORMAT_ZIP: Zip archive
             */
            ZIP,
            /**
             * %ARCHIVE_FORMAT_TAR_PAX_RESTRICTED: Tar archive, use
             *   ustar format is possible. If there are extended headers which cannot be
             *   represented in the ustar format, libarchive will use pax interchage format
             *   instead.
             */
            TAR,
            /**
             * %ARCHIVE_FORMAT_CPIO_POSIX: CPIO archive, POSIX
             *   standard cpio interchage format.
             */
            CPIO,
            /**
             * %ARCHIVE_FORMAT_7ZIP: 7-zip archive
             */
            '7ZIP',
            /**
             * %ARCHIVE_FORMAT_AR_BSD: BSD variant of Unix archive
             *   format. This format does not support storing directories.
             */
            AR_BSD,
            /**
             * %ARCHIVE_FORMAT_AR_GNU: GNU/SVR4 variant of Unix
             *   archive format. This format does not support storing directories.
             */
            AR_SVR4,
            /**
             * %ARCHIVE_FORMAT_CPIO_SVR4_NOCRC: CPIO archive,
             *   SVR4 non-CRC variant
             */
            CPIO_NEWC,
            /**
             * %ARCHIVE_FORMAT_TAR_GNUTAR: Tar archive, support
             *   most popular GNU extensions.
             */
            GNUTAR,
            /**
             * %ARCHIVE_FORMAT_ISO9660: Raw CD image
             */
            ISO9660,
            /**
             * %ARCHIVE_FORMAT_TAR_PAX_INTERCHANGE: Tar archive, use
             *   pax interchage format
             */
            PAX,
            /**
             * %ARCHIVE_FORMAT_TAR_USTAR: Tar archive, use old
             *   ustar format
             */
            USTAR,
            /**
             * %ARCHIVE_FORMAT_XAR: Xar archive
             */
            XAR,
        }
        const EMPTY_ARCHIVE_ERRNO: number;
        const NOT_AN_ARCHIVE_ERRNO: number;
        const PASSPHRASE_REQUIRED_ERRNO: number;
        /**
         * Checks whether a mime type is supported by autoar. This function does no
         * blocking IO.
         * @param mime_type a string representing the mime type
         * @returns %TRUE if the mime type is supported
         */
        function check_mime_type_supported(mime_type: string): boolean;
        /**
         * Gets description of the filter from the internal static data.
         * @param filter an #AutoarFilter
         * @returns description about the filter
         */
        function filter_get_description(filter: Filter | null): string;
        /**
         * Gets description of the filter from libarchive. This function creates
         * and destroys an archive object in order to get the description string.
         * @param filter an #AutoarFilter
         * @returns description about the filter. Free the returned string with g_free().
         */
        function filter_get_description_libarchive(filter: Filter | null): string;
        /**
         * Gets the file name extension of the filter from the internal static data.
         * @param filter an #AutoarFilter
         * @returns a file name extension
         */
        function filter_get_extension(filter: Filter | null): string;
        /**
         * Gets the filter code used by libarchive. You can use the return value
         * as the argument for archive_write_add_filter().
         * @param filter an #AutoarFilter
         * @returns an integer
         */
        function filter_get_filter_libarchive(filter: Filter | null): number;
        /**
         * Gets the MIME type of the filter from the internal static data.
         * @param filter an #AutoarFilter
         * @returns an MIME type
         */
        function filter_get_mime_type(filter: Filter | null): string;
        /**
         * Checks whether an #AutoarFilter is valid.
         * @param filter an #AutoarFilter
         * @returns %TRUE if the value of @filter is valid
         */
        function filter_is_valid(filter: Filter | null): boolean;
        /**
         * Gets the maximal allowed values of #AutoarFilter
         * @returns maximal allowed values of #AutoarFilter
         */
        function filter_last(): number;
        /**
         * Gets the description for an archive `format` compressed by
         * `filter` using #GContentType and autoar_format_filter_get_mime_type().
         * @param format an #AutoarFormat
         * @param filter an #AutoarFilter
         * @returns description about the archive. Free the returned string with g_free().
         */
        function format_filter_get_description(format: Format | null, filter: Filter | null): string;
        /**
         * Gets the file name extension for an archive `format` compressed by
         * `filter`. The first character of the returned string is always '.'
         * @param format an #AutoarFormat
         * @param filter an #AutoarFilter
         * @returns a file name extension. Free the returned string with g_free().
         */
        function format_filter_get_extension(format: Format | null, filter: Filter | null): string;
        /**
         * Gets the MIME type for an archive `format` compressed by
         * `filter`. This function always succeed, but it is not guaranteed
         * that the returned MIME type exists and can be recognized by applications.
         * Some combination of format and filter seldom exists in application,
         * so this function can only generate the string based on some
         * non-standard rules.
         * @param format an #AutoarFormat
         * @param filter an #AutoarFilter
         * @returns an MIME type. Free the returned string with g_free().
         */
        function format_filter_get_mime_type(format: Format | null, filter: Filter | null): string;
        /**
         * Gets description of the format from the internal static data.
         * @param format an #AutoarFormat
         * @returns description about the format
         */
        function format_get_description(format: Format | null): string;
        /**
         * Gets description of the format from libarchive. This function creates
         * and destroys an archive object in order to get the description string.
         * @param format an #AutoarFormat
         * @returns description about the format. Free the returned string with g_free().
         */
        function format_get_description_libarchive(format: Format | null): string;
        /**
         * Gets the file name extension of the format from the internal static data.
         * @param format an #AutoarFormat
         * @returns a file name extension
         */
        function format_get_extension(format: Format | null): string;
        /**
         * Gets the format code used by libarchive. You can use the return value
         * as the argument for archive_read_support_format_by_code() and
         * archive_write_set_format(). However, some format cannot be set using
         * these two functions because of problems inside libarchive. Use
         * autoar_format_get_libarchive_read() and
         * autoar_format_get_libarchive_write() to get the function pointer
         * is the more reliable way to set format on the archive object.
         * @param format an #AutoarFormat
         * @returns an integer
         */
        function format_get_format_libarchive(format: Format | null): number;
        /**
         * Gets the MIME type of the format from the internal static data.
         * @param format an #AutoarFormat
         * @returns an MIME type
         */
        function format_get_mime_type(format: Format | null): string;
        /**
         * Checks whether an #AutoarFormat is valid.
         * @param format an #AutoarFormat
         * @returns %TRUE if the value of @format is valid
         */
        function format_is_valid(format: Format | null): boolean;
        /**
         * Gets the maximal allowed values of #AutoarFormat
         * @returns maximal allowed values of #AutoarFormat
         */
        function format_last(): number;
        /**
         * Gets the libarchive Error Quark.
         * @returns a #GQuark.
         */
        function libarchive_quark(): GLib.Quark;
        /**
         * This function will query the file's mime type and then call
         * autoar_check_mime_type_supported(), so it does blocking IO.
         * @param file a #GFile to check if its mime type is supported
         * @returns %TRUE if the mime type of the #GFile is supported
         */
        function query_mime_type_supported(file: Gio.File): boolean;
        interface FilterFunc {
            (a?: any | null): number;
        }
        interface FormatFunc {
            (a?: any | null): number;
        }
        module Compressor {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            interface Completed {
                (): void;
            }

            interface DecideDest {
                (destination: Gio.File): void;
            }

            interface Error {
                (error: GLib.Error): void;
            }

            interface Progress {
                (completed_size: number, completed_files: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                completed_files: number;
                completedFiles: number;
                completed_size: number;
                completedSize: number;
                create_top_level_directory: boolean;
                createTopLevelDirectory: boolean;
                files: number;
                notify_interval: number;
                notifyInterval: number;
                output_file: Gio.File;
                outputFile: Gio.File;
                output_is_dest: boolean;
                outputIsDest: boolean;
                size: number;
                source_files: any;
                sourceFiles: any;
            }
        }

        class Compressor extends GObject.Object {
            static $gtype: GObject.GType<Compressor>;

            // Properties

            get completed_files(): number;
            get completedFiles(): number;
            get completed_size(): number;
            get completedSize(): number;
            get create_top_level_directory(): boolean;
            set create_top_level_directory(val: boolean);
            get createTopLevelDirectory(): boolean;
            set createTopLevelDirectory(val: boolean);
            get files(): number;
            get notify_interval(): number;
            set notify_interval(val: number);
            get notifyInterval(): number;
            set notifyInterval(val: number);
            get output_file(): Gio.File;
            get outputFile(): Gio.File;
            get output_is_dest(): boolean;
            set output_is_dest(val: boolean);
            get outputIsDest(): boolean;
            set outputIsDest(val: boolean);
            get size(): number;
            get source_files(): any;
            get sourceFiles(): any;

            // Constructors

            constructor(properties?: Partial<Compressor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                source_files: Gio.File[],
                output_file: Gio.File,
                format: Format,
                filter: Filter,
                create_top_level_directory: boolean,
            ): Compressor;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;
            connect(signal: 'completed', callback: (_source: this) => void): number;
            connect_after(signal: 'completed', callback: (_source: this) => void): number;
            emit(signal: 'completed'): void;
            connect(signal: 'decide-dest', callback: (_source: this, destination: Gio.File) => void): number;
            connect_after(signal: 'decide-dest', callback: (_source: this, destination: Gio.File) => void): number;
            emit(signal: 'decide-dest', destination: Gio.File): void;
            connect(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            connect_after(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            emit(signal: 'error', error: GLib.Error): void;
            connect(
                signal: 'progress',
                callback: (_source: this, completed_size: number, completed_files: number) => void,
            ): number;
            connect_after(
                signal: 'progress',
                callback: (_source: this, completed_size: number, completed_files: number) => void,
            ): number;
            emit(signal: 'progress', completed_size: number, completed_files: number): void;

            // Static methods

            /**
             * Gets the #AutoarCompressor Error Quark.
             */
            static quark(): GLib.Quark;

            // Methods

            /**
             * Gets the number of files has been read
             * @returns number of files has been read
             */
            get_completed_files(): number;
            /**
             * Gets the size in bytes has been read from the source files and directories.
             * @returns file size in bytes has been read
             */
            get_completed_size(): number;
            /**
             * Gets whether a top level directory will be created in the new archive.
             * @returns whether a top level directory will be created
             */
            get_create_top_level_directory(): boolean;
            /**
             * Gets the number of files will be read when the operation is completed. This
             * value is currently unset, so calling this function is useless.
             * @returns total number of files
             */
            get_files(): number;
            /**
             * Gets the compression filter
             * @returns the compression filter
             */
            get_filter(): Filter;
            /**
             * Gets the compression format
             * @returns the compression format
             */
            get_format(): Format;
            /**
             * See autoar_compressor_set_notify_interval().
             * @returns the minimal interval in microseconds between the emission of the #AutoarCompressor::progress signal.
             */
            get_notify_interval(): number;
            /**
             * If #AutoarCompressor:output_is_dest is %FALSE, gets the directory which
             * contains the new archive. Otherwise, gets the the new archive. See
             * autoar_compressor_set_output_is_dest().
             * @returns a #GFile
             */
            get_output_file(): Gio.File;
            /**
             * See autoar_compressor_set_output_is_dest().
             * @returns %TRUE if #AutoarCompressor:output is the location of the new archive.
             */
            get_output_is_dest(): boolean;
            /**
             * Gets the size in bytes will be read when the operation is completed. This
             * value is currently unset, so calling this function is useless.
             * @returns total file size in bytes
             */
            get_size(): number;
            /**
             * Gets the list of source files.
             * @returns a #GList with the source files
             */
            get_source_files(): Gio.File[];
            /**
             * Sets the minimal interval between emission of #AutoarCompressor::progress
             * signal. This prevent too frequent signal emission, which may cause
             * performance impact. If you do not want this feature, you can set the
             * interval to 0, so you will receive every progress update.
             * @param notify_interval the minimal interval in microseconds
             */
            set_notify_interval(notify_interval: number): void;
            /**
             * By default #AutoarCompressor:output-is-dest is set to %FALSE, which means
             * the new archive will be created as a regular file under
             * #AutoarCompressor:output directory. The name of the new archive will be
             * automatically generated and you will be notified via
             * #AutoarCompressor::decide-dest when the name is decided. If you have already
             * decided the location of the new archive, and you do not want
             * #AutoarCompressor to decide it for you, you can set
             * #AutoarCompressor:output-is-dest to %TRUE. #AutoarCompressor will use
             * #AutoarCompressor:output as the location of the new archive, and it will
             * neither check whether the file exists nor create the necessary
             * directories for you. This function should only be called before calling
             * autoar_compressor_start() or autoar_compressor_start_async().
             * @param output_is_dest %TRUE if the location of the new archive has been already decided
             */
            set_output_is_dest(output_is_dest: boolean): void;
            /**
             * Sets the archive passphrase. It works only with %ARCHIVE_FORMAT_ZIP.
             * @param passphrase the archive passphrase
             */
            set_passphrase(passphrase: string): void;
            /**
             * Runs the archive creating work. All callbacks will be called in the same
             * thread as the caller of this functions.
             * @param cancellable optional #GCancellable object, or %NULL to ignore
             */
            start(cancellable?: Gio.Cancellable | null): void;
            /**
             * Asynchronously runs the archive creating work. You should connect to
             * #AutoarCompressor::cancelled, #AutoarCompressor::error, and
             * #AutoarCompressor::completed signal to get notification when the work is
             * terminated. All callbacks will be called in the main thread, so you can
             * safely manipulate GTK+ widgets in the callbacks.
             * @param cancellable optional #GCancellable object, or %NULL to ignore
             */
            start_async(cancellable?: Gio.Cancellable | null): void;
        }

        module Extractor {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            interface Completed {
                (): void;
            }

            interface Conflict {
                (file: Gio.File, new_file?: any | null): number;
            }

            interface DecideDestination {
                (destination: Gio.File, files?: any | null): GObject.Object;
            }

            interface Error {
                (error: GLib.Error): void;
            }

            interface Progress {
                (completed_size: number, completed_files: number): void;
            }

            interface RequestPassphrase {
                (): string;
            }

            interface Scanned {
                (files: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                completed_files: number;
                completedFiles: number;
                completed_size: number;
                completedSize: number;
                delete_after_extraction: boolean;
                deleteAfterExtraction: boolean;
                notify_interval: number;
                notifyInterval: number;
                output_file: Gio.File;
                outputFile: Gio.File;
                output_is_dest: boolean;
                outputIsDest: boolean;
                source_file: Gio.File;
                sourceFile: Gio.File;
                total_files: number;
                totalFiles: number;
                total_size: number;
                totalSize: number;
            }
        }

        class Extractor extends GObject.Object {
            static $gtype: GObject.GType<Extractor>;

            // Properties

            get completed_files(): number;
            get completedFiles(): number;
            get completed_size(): number;
            get completedSize(): number;
            get delete_after_extraction(): boolean;
            set delete_after_extraction(val: boolean);
            get deleteAfterExtraction(): boolean;
            set deleteAfterExtraction(val: boolean);
            get notify_interval(): number;
            set notify_interval(val: number);
            get notifyInterval(): number;
            set notifyInterval(val: number);
            get output_file(): Gio.File;
            get outputFile(): Gio.File;
            get output_is_dest(): boolean;
            set output_is_dest(val: boolean);
            get outputIsDest(): boolean;
            set outputIsDest(val: boolean);
            get source_file(): Gio.File;
            get sourceFile(): Gio.File;
            get total_files(): number;
            get totalFiles(): number;
            get total_size(): number;
            get totalSize(): number;

            // Constructors

            constructor(properties?: Partial<Extractor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source_file: Gio.File, output_file: Gio.File): Extractor;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;
            connect(signal: 'completed', callback: (_source: this) => void): number;
            connect_after(signal: 'completed', callback: (_source: this) => void): number;
            emit(signal: 'completed'): void;
            connect(
                signal: 'conflict',
                callback: (_source: this, file: Gio.File, new_file: any | null) => number,
            ): number;
            connect_after(
                signal: 'conflict',
                callback: (_source: this, file: Gio.File, new_file: any | null) => number,
            ): number;
            emit(signal: 'conflict', file: Gio.File, new_file?: any | null): void;
            connect(
                signal: 'decide-destination',
                callback: (_source: this, destination: Gio.File, files: any | null) => GObject.Object,
            ): number;
            connect_after(
                signal: 'decide-destination',
                callback: (_source: this, destination: Gio.File, files: any | null) => GObject.Object,
            ): number;
            emit(signal: 'decide-destination', destination: Gio.File, files?: any | null): void;
            connect(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            connect_after(signal: 'error', callback: (_source: this, error: GLib.Error) => void): number;
            emit(signal: 'error', error: GLib.Error): void;
            connect(
                signal: 'progress',
                callback: (_source: this, completed_size: number, completed_files: number) => void,
            ): number;
            connect_after(
                signal: 'progress',
                callback: (_source: this, completed_size: number, completed_files: number) => void,
            ): number;
            emit(signal: 'progress', completed_size: number, completed_files: number): void;
            connect(signal: 'request-passphrase', callback: (_source: this) => string): number;
            connect_after(signal: 'request-passphrase', callback: (_source: this) => string): number;
            emit(signal: 'request-passphrase'): void;
            connect(signal: 'scanned', callback: (_source: this, files: number) => void): number;
            connect_after(signal: 'scanned', callback: (_source: this, files: number) => void): number;
            emit(signal: 'scanned', files: number): void;

            // Static methods

            /**
             * Gets the #AutoarExtractor Error Quark.
             */
            static quark(): GLib.Quark;

            // Methods

            /**
             * Gets the number of files has been written to disk.
             * @returns number of files has been written to disk
             */
            get_completed_files(): number;
            /**
             * Gets the size in bytes has been written to disk.
             * @returns size in bytes has been written
             */
            get_completed_size(): number;
            /**
             * Whether the source archive will be deleted after a successful extraction.
             * @returns %TRUE if the source archive will be deleted after a succesful extraction
             */
            get_delete_after_extraction(): boolean;
            /**
             * See autoar_extractor_set_notify_interval().
             * @returns the minimal interval in microseconds between the emission of the #AutoarExtractor::progress signal.
             */
            get_notify_interval(): number;
            /**
             * Gets the #GFile object which represents the output directory of extracted
             * file or directory, or the extracted file or directory itself if you set
             * #AutoarExtractor:output-is-dest on the returned object.
             * @returns a #GFile
             */
            get_output_file(): Gio.File;
            /**
             * See autoar_extractor_set_output_is_dest().
             * @returns %TRUE if #AutoarExtractor:output-file is the destination for extracted files
             */
            get_output_is_dest(): boolean;
            /**
             * Gets the #GFile object which represents the source archive that will be
             * extracted for this object.
             * @returns a #GFile
             */
            get_source_file(): Gio.File;
            /**
             * Gets the total number of files will be written when the operation is
             * completed.
             * @returns total number of extracted files
             */
            get_total_files(): number;
            /**
             * Gets the size in bytes will be written when the operation is completed.
             * @returns total size of extracted files in bytes
             */
            get_total_size(): number;
            /**
             * By default #AutoarExtractor:delete-after-extraction is set to %FALSE so the
             * source archive will not be automatically deleted if extraction succeeds.
             * @param delete_after_extraction %TRUE if the source archive should be deleted after a successful extraction
             */
            set_delete_after_extraction(delete_after_extraction: boolean): void;
            /**
             * Sets the minimal interval between emission of #AutoarExtractor::progress
             * signal. This prevent too frequent signal emission, which may cause
             * performance impact. If you do not want this feature, you can set the interval
             * to 0, so you will receive every progress update.
             * @param notify_interval the minimal interval in microseconds
             */
            set_notify_interval(notify_interval: number): void;
            /**
             * By default #AutoarExtractor:output-is-dest is set to %FALSE, which means
             * only one file or directory will be created in #AutoarExtractor:output-file.
             * The destination is internally determined by analyzing the contents of the
             * archive. If this is not wanted, #AutoarExtractor:output-is-dest can be set to
             * %TRUE, which will make #AutoarExtractor:output-file the destination for
             * extracted files. In any case, the destination will be notified via
             * #AutoarExtractor::decide-destination, when it is possible to set a new
             * destination.
             *
             * #AutoarExtractor will attempt to create the destination regardless to whether
             * its path was internally decided or not.
             *
             * This function should only be called before calling autoar_extractor_start() or
             * autoar_extractor_start_async().
             * @param output_is_dest %TRUE if #AutoarExtractor:output-file is the destination for extracted files
             */
            set_output_is_dest(output_is_dest: boolean): void;
            /**
             * Sets a passphrase to use if the file to decompress is passphrase-protected.
             * @param passphrase a string with the passphrase to use
             */
            set_passphrase(passphrase: string): void;
            /**
             * Runs the archive extracting work. All callbacks will be called in the same
             * thread as the caller of this functions.
             * @param cancellable optional #GCancellable object, or %NULL to ignore
             */
            start(cancellable?: Gio.Cancellable | null): void;
            /**
             * Asynchronously runs the archive extracting work. You should connect to
             * #AutoarExtractor::cancelled, #AutoarExtractor::error, and
             * #AutoarExtractor::completed signal to get notification when the work is
             * terminated. All callbacks will be called in the main thread, so you can
             * safely manipulate GTK+ widgets in the callbacks.
             * @param cancellable optional #GCancellable object, or %NULL to ignore
             */
            start_async(cancellable?: Gio.Cancellable | null): void;
        }

        type CompressorClass = typeof Compressor;
        type ExtractorClass = typeof Extractor;
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

    export default GnomeAutoar;
}

declare module 'gi://GnomeAutoar' {
    import GnomeAutoar01 from 'gi://GnomeAutoar?version=0.1';
    export default GnomeAutoar01;
}
// END
