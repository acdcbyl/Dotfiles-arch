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

declare module 'gi://TotemPlParser?version=1.0' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace TotemPlParser {
        /**
         * TotemPlParser-1.0
         */

        /**
         * Allows you to differentiate between different
         * errors occurring during file operations in a #TotemPlParser.
         */
        class ParserError extends GLib.Error {
            static $gtype: GObject.GType<ParserError>;

            // Static fields

            /**
             * Error attempting to open a disc device when no disc is present
             */
            static NO_DISC: number;
            /**
             * An attempted mount operation failed
             */
            static MOUNT_FAILED: number;
            /**
             * Playlist to be saved is empty
             */
            static EMPTY_PLAYLIST: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Gives the result of parsing a playlist.
         */

        /**
         * Gives the result of parsing a playlist.
         */
        export namespace ParserResult {
            export const $gtype: GObject.GType<ParserResult>;
        }

        enum ParserResult {
            /**
             * The playlist could not be handled.
             */
            UNHANDLED,
            /**
             * There was an error parsing the playlist.
             */
            ERROR,
            /**
             * The playlist was parsed successfully.
             */
            SUCCESS,
            /**
             * The playlist was ignored due to its scheme or MIME type (see totem_pl_parser_add_ignored_scheme()
             * and totem_pl_parser_add_ignored_mimetype()).
             */
            IGNORED,
            /**
             * Parsing of the playlist was cancelled part-way through.
             */
            CANCELLED,
        }
        /**
         * The type of playlist a #TotemPlParser will parse.
         */

        /**
         * The type of playlist a #TotemPlParser will parse.
         */
        export namespace ParserType {
            export const $gtype: GObject.GType<ParserType>;
        }

        enum ParserType {
            /**
             * PLS parser
             */
            PLS,
            /**
             * M3U parser
             */
            M3U,
            /**
             * M3U (DOS linebreaks) parser
             */
            M3U_DOS,
            /**
             * XSPF parser
             */
            XSPF,
            /**
             * iRiver PLA parser
             */
            IRIVER_PLA,
        }
        const PARSER_CONTENT_RATING_CLEAN: string;
        const PARSER_CONTENT_RATING_EXPLICIT: string;
        const PARSER_CONTENT_RATING_UNRATED: string;
        /**
         * Metadata field for an entry's abstract text.
         */
        const PARSER_FIELD_ABSTRACT: string;
        /**
         * Metadata field for an entry's album.
         */
        const PARSER_FIELD_ALBUM: string;
        /**
         * Metadata field for an entry's default audio-track selection. The default
         * track is defined as NULL. Note that the value is sent as a string.
         */
        const PARSER_FIELD_AUDIO_TRACK: string;
        /**
         * Metadata field for an entry's author/composer/director.
         */
        const PARSER_FIELD_AUTHOR: string;
        /**
         * Metadata field for an entry's "autoplay" flag, which is %TRUE if the entry should play automatically.
         */
        const PARSER_FIELD_AUTOPLAY: string;
        /**
         * Metadata field for an entry's base path.
         */
        const PARSER_FIELD_BASE: string;
        /**
         * Metadata field for an entry's contact details for the webmaster.
         */
        const PARSER_FIELD_CONTACT: string;
        /**
         * Metadata field for an entry's content rating. It is
         * %TOTEM_PL_PARSER_CONTENT_RATING_CLEAN for clean content,
         * %TOTEM_PL_PARSER_CONTENT_RATING_EXPLICIT for explicit content and
         * %TOTEM_PL_PARSER_CONTENT_RATING_UNRATED for content which is not
         * rated.
         */
        const PARSER_FIELD_CONTENT_RATING: string;
        /**
         * Metadata field for an entry's content-type (usually a mime-type coming
         * from a web server).
         */
        const PARSER_FIELD_CONTENT_TYPE: string;
        /**
         * Metadata field for an entry's copyright line.
         */
        const PARSER_FIELD_COPYRIGHT: string;
        /**
         * Metadata field for an entry's description.
         */
        const PARSER_FIELD_DESCRIPTION: string;
        /**
         * Metadata field for an entry's download URI. Only used if an alternate download
         * location is available for the entry.
         */
        const PARSER_FIELD_DOWNLOAD_URI: string;
        /**
         * Metadata field for an entry's playback duration, which should be parsed using totem_pl_parser_parse_duration().
         */
        const PARSER_FIELD_DURATION: string;
        /**
         * Metadata field for an entry's playback duration, in milliseconds. It's only used when an entry's
         * duration is available in that format, so one would get either the %TOTEM_PL_PARSER_FIELD_DURATION
         * or %TOTEM_PL_PARSER_FIELD_DURATION_MS as metadata.
         */
        const PARSER_FIELD_DURATION_MS: string;
        /**
         * Metadata field for an entry's playback end time.
         */
        const PARSER_FIELD_ENDTIME: string;
        /**
         * Metadata field for an entry's filesize in bytes. This is only advisory, and can sometimes not match the actual filesize of the stream.
         */
        const PARSER_FIELD_FILESIZE: string;
        /**
         * Metadata field for an entry's primary genre. This is a string of
         * the form 'Genre1' or 'Genre1/SubGenre1".
         */
        const PARSER_FIELD_GENRE: string;
        /**
         * Metadata field for an entry's full genre. This is a concatenated
         * string of the form 'Genre1/SubGenre1,Genre2/SubGenre2" etc.
         */
        const PARSER_FIELD_GENRES: string;
        /**
         * Metadata field for an entry's identifier. Its use is dependent on the format
         * of the playlist parsed, and its origin.
         */
        const PARSER_FIELD_ID: string;
        /**
         * Metadata field for an entry's thumbnail image URI.
         */
        const PARSER_FIELD_IMAGE_URI: string;
        /**
         * Metadata field used to tell the calling code that the parsing of a playlist
         * started. It is only %TRUE for the metadata passed to #TotemPlParser::playlist-started or
         * #TotemPlParser::playlist-ended signal handlers.
         */
        const PARSER_FIELD_IS_PLAYLIST: string;
        /**
         * Metadata field for an entry's audio language.
         */
        const PARSER_FIELD_LANGUAGE: string;
        /**
         * Metadata field for an entry's "more info" URI.
         */
        const PARSER_FIELD_MOREINFO: string;
        /**
         * Metadata field for an entry's status in a playlist. This is usually
         * used when saving the state of an on-going playlist.
         */
        const PARSER_FIELD_PLAYING: string;
        /**
         * Metadata field for an entry's publication date, which should be parsed using totem_pl_parser_parse_date().
         */
        const PARSER_FIELD_PUB_DATE: string;
        /**
         * Metadata field for an entry's preferred screen size.
         */
        const PARSER_FIELD_SCREENSIZE: string;
        /**
         * Metadata field for an entry's playback start time, which should be parsed using totem_pl_parser_parse_duration().
         */
        const PARSER_FIELD_STARTTIME: string;
        /**
         * The URI of the entry's subtitle file.
         */
        const PARSER_FIELD_SUBTITLE_URI: string;
        /**
         * Metadata field for an entry's displayable title.
         */
        const PARSER_FIELD_TITLE: string;
        /**
         * Metadata field for an entry's preferred UI mode.
         */
        const PARSER_FIELD_UI_MODE: string;
        /**
         * Metadata field for an entry's URI.
         */
        const PARSER_FIELD_URI: string;
        /**
         * Metadata field for an entry's playback volume.
         */
        const PARSER_FIELD_VOLUME: string;
        const PARSER_VERSION_MAJOR: number;
        const PARSER_VERSION_MICRO: number;
        const PARSER_VERSION_MINOR: number;
        function parser_error_quark(): GLib.Quark;
        function parser_metadata_get_type(): GObject.GType;
        module Parser {
            // Signal callback interfaces

            interface EntryParsed {
                (uri: string, metadata: { [key: string]: any } | GLib.HashTable<string, string>): void;
            }

            interface PlaylistEnded {
                (uri: string): void;
            }

            interface PlaylistStarted {
                (uri: string, metadata: { [key: string]: any } | GLib.HashTable<string, string>): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                debug: boolean;
                disable_unsafe: boolean;
                disableUnsafe: boolean;
                force: boolean;
                recurse: boolean;
            }
        }

        /**
         * All the fields in the #TotemPlParser structure are private and should never be accessed directly.
         */
        class Parser extends GObject.Object {
            static $gtype: GObject.GType<Parser>;

            // Properties

            /**
             * If %TRUE, the parser will output debug information.
             */
            get debug(): boolean;
            set debug(val: boolean);
            /**
             * If %TRUE, the parser will not parse unsafe locations, such as local devices
             * and local files if the playlist isn't local. This is useful if the library
             * is parsing a playlist from a remote location such as a website.
             */
            get disable_unsafe(): boolean;
            set disable_unsafe(val: boolean);
            /**
             * If %TRUE, the parser will not parse unsafe locations, such as local devices
             * and local files if the playlist isn't local. This is useful if the library
             * is parsing a playlist from a remote location such as a website.
             */
            get disableUnsafe(): boolean;
            set disableUnsafe(val: boolean);
            /**
             * If %TRUE, the parser will attempt to parse a playlist, even if it
             * appears to be unsupported (usually because of its filename extension).
             */
            get force(): boolean;
            set force(val: boolean);
            /**
             * If %TRUE, the parser will recursively fetch playlists linked to by
             * the current one.
             */
            get recurse(): boolean;
            set recurse(val: boolean);

            // Constructors

            constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Parser;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'entry-parsed',
                callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void,
            ): number;
            connect_after(
                signal: 'entry-parsed',
                callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void,
            ): number;
            emit(
                signal: 'entry-parsed',
                uri: string,
                metadata: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            connect(signal: 'playlist-ended', callback: (_source: this, uri: string) => void): number;
            connect_after(signal: 'playlist-ended', callback: (_source: this, uri: string) => void): number;
            emit(signal: 'playlist-ended', uri: string): void;
            connect(
                signal: 'playlist-started',
                callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void,
            ): number;
            connect_after(
                signal: 'playlist-started',
                callback: (_source: this, uri: string, metadata: GLib.HashTable<string, string>) => void,
            ): number;
            emit(
                signal: 'playlist-started',
                uri: string,
                metadata: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;

            // Static methods

            /**
             * Checks if the first `len` bytes of `data` can be parsed.
             * @param data the data to check for parsability
             * @param len the length of data to check
             * @param debug %TRUE if debug statements should be printed
             */
            static can_parse_from_data(data: string, len: number, debug: boolean): boolean;
            /**
             * Checks if the file can be parsed. Files can be parsed if:
             * <itemizedlist>
             *  <listitem><para>they have a special mimetype, or</para></listitem>
             *  <listitem><para>they have a mimetype which could be a video or a playlist.</para></listitem>
             * </itemizedlist>
             * @param filename the file to check for parsability
             * @param debug %TRUE if debug statements should be printed
             */
            static can_parse_from_filename(filename: string, debug: boolean): boolean;
            /**
             * Checks if the remote URI can be parsed. Note that this does
             * not actually try to open the remote URI, or deduce its mime-type
             * from filename, as this would bring too many false positives.
             * @param uri the remote URI to check for parsability
             * @param debug %TRUE if debug statements should be printed
             */
            static can_parse_from_uri(uri: string, debug: boolean): boolean;
            /**
             * Parses the given date string and returns it as a <type>gint64</type>
             * denoting the date in seconds since the UNIX Epoch.
             * @param date_str the date string to parse
             * @param debug %TRUE if debug statements should be printed
             */
            static parse_date(date_str: string, debug: boolean): number;
            /**
             * Parses the given duration string and returns it as a <type>gint64</type>
             * denoting the duration in seconds.
             * @param duration the duration string to parse
             * @param debug %TRUE if debug statements should be printed
             */
            static parse_duration(duration: string, debug: boolean): number;

            // Virtual methods

            /**
             * the generic signal handler for the #TotemPlParser::entry-parsed signal,
             * which can be overridden by inheriting classes
             * @param uri
             * @param metadata
             */
            vfunc_entry_parsed(uri: string, metadata: { [key: string]: any } | GLib.HashTable<any, any>): void;
            /**
             * the generic signal handler for the #TotemPlParser::playlist-ended signal,
             * which can be overridden by inheriting classes
             * @param uri
             */
            vfunc_playlist_ended(uri: string): void;
            /**
             * the generic signal handler for the #TotemPlParser::playlist-started signal,
             * which can be overridden by inheriting classes
             * @param uri
             * @param metadata
             */
            vfunc_playlist_started(uri: string, metadata: { [key: string]: any } | GLib.HashTable<any, any>): void;

            // Methods

            /**
             * Adds a glob to the list of mimetypes to ignore, so that
             * any URI of that glob is ignored during playlist parsing.
             * @param glob a glob to ignore
             */
            add_ignored_glob(glob: string): void;
            /**
             * Adds a mimetype to the list of mimetypes to ignore, so that
             * any URI of that mimetype is ignored during playlist parsing.
             * @param mimetype the mimetype to ignore
             */
            add_ignored_mimetype(mimetype: string): void;
            /**
             * Adds a scheme to the list of schemes to ignore, so that
             * any URI using that scheme is ignored during playlist parsing.
             * @param scheme the scheme to ignore
             */
            add_ignored_scheme(scheme: string): void;
            /**
             * Parses a playlist given by the absolute URI `uri`. This method is
             * synchronous, and will block on (e.g.) network requests to slow
             * servers. totem_pl_parser_parse_async() is recommended instead.
             *
             * Return values are as totem_pl_parser_parse_with_base().
             * @param uri the URI of the playlist to parse
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @returns a #TotemPlParserResult
             */
            parse(uri: string, fallback: boolean): ParserResult;
            /**
             * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
             * when this function is called, so can safely be freed after this function returns.
             *
             * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
             *
             * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
             * to get the results of the operation.
             * @param uri the URI of the playlist to parse
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @param cancellable optional #GCancellable object, or %NULL
             */
            parse_async(uri: string, fallback: boolean, cancellable?: Gio.Cancellable | null): Promise<ParserResult>;
            /**
             * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
             * when this function is called, so can safely be freed after this function returns.
             *
             * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
             *
             * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
             * to get the results of the operation.
             * @param uri the URI of the playlist to parse
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when parsing is finished
             */
            parse_async(
                uri: string,
                fallback: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
             * when this function is called, so can safely be freed after this function returns.
             *
             * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
             *
             * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
             * to get the results of the operation.
             * @param uri the URI of the playlist to parse
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when parsing is finished
             */
            parse_async(
                uri: string,
                fallback: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<ParserResult> | void;
            /**
             * Finishes an asynchronous playlist parsing operation started with totem_pl_parser_parse_async()
             * or totem_pl_parser_parse_with_base_async().
             *
             * If parsing of the playlist is cancelled part-way through, %TOTEM_PL_PARSER_RESULT_CANCELLED is returned when
             * this function is called.
             * @param async_result a #GAsyncResult
             * @returns a #TotemPlParserResult
             */
            parse_finish(async_result: Gio.AsyncResult): ParserResult;
            /**
             * Parses a playlist given by the absolute URI `uri,` using
             * `base` to resolve relative paths where appropriate.
             * @param uri the URI of the playlist to parse
             * @param base the base path for relative filenames, or %NULL
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @returns a #TotemPlParserResult
             */
            parse_with_base(uri: string, base: string | null, fallback: boolean): ParserResult;
            /**
             * Starts asynchronous parsing of a playlist given by the absolute URI `uri,` using `base` to resolve relative paths where appropriate.
             * `parser` and `uri` are both reffed/copied when this function is called, so can safely be freed after this function returns.
             *
             * For more details, see totem_pl_parser_parse_with_base(), which is the synchronous version of this function.
             *
             * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
             * to get the results of the operation.
             * @param uri the URI of the playlist to parse
             * @param base the base path for relative filenames, or %NULL
             * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when parsing is finished
             */
            parse_with_base_async(
                uri: string,
                base: string | null,
                fallback: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Writes the playlist held by `parser` and `playlist` out to the path
             * pointed by `dest`. The playlist is written in the format `type` and is
             * given the title `title`.
             *
             * If the `output` file is a directory the #G_IO_ERROR_IS_DIRECTORY error
             * will be returned, and if the file is some other form of non-regular file
             * then a #G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some file
             * systems don't allow all file names, and may return a
             * #G_IO_ERROR_INVALID_FILENAME error, and if the name is too long,
             * #G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are possible
             * too, and depend on what kind of filesystem the file is on.
             *
             * In extreme cases, a #G_IO_ERROR_INVALID_ARGUMENT error can be returned, if
             * parts of the playlist to be written are too long.
             *
             * If writing a PLA playlist and there is an error converting a URI's encoding,
             * a code from #GConvertError will be returned.
             * @param playlist a #TotemPlPlaylist
             * @param dest output #GFile
             * @param title the playlist title
             * @param type a #TotemPlParserType for the outputted playlist
             * @returns %TRUE on success
             */
            save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType | null): boolean;
            /**
             * Starts asynchronous version of totem_pl_parser_save(). For more details
             * see totem_pl_parser_save().
             *
             * When the operation is finished, `callback` will be called. You can then call
             * totem_pl_parser_save_finish() to get the results of the operation.
             * @param playlist a #TotemPlPlaylist
             * @param dest output #GFile
             * @param title the playlist title
             * @param type a #TotemPlParserType for the outputted playlist
             * @param cancellable a #GCancellable, or %NULL
             */
            save_async(
                playlist: Playlist,
                dest: Gio.File,
                title: string,
                type: ParserType | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Starts asynchronous version of totem_pl_parser_save(). For more details
             * see totem_pl_parser_save().
             *
             * When the operation is finished, `callback` will be called. You can then call
             * totem_pl_parser_save_finish() to get the results of the operation.
             * @param playlist a #TotemPlPlaylist
             * @param dest output #GFile
             * @param title the playlist title
             * @param type a #TotemPlParserType for the outputted playlist
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback to call when saving has finished
             */
            save_async(
                playlist: Playlist,
                dest: Gio.File,
                title: string,
                type: ParserType | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous version of totem_pl_parser_save(). For more details
             * see totem_pl_parser_save().
             *
             * When the operation is finished, `callback` will be called. You can then call
             * totem_pl_parser_save_finish() to get the results of the operation.
             * @param playlist a #TotemPlPlaylist
             * @param dest output #GFile
             * @param title the playlist title
             * @param type a #TotemPlParserType for the outputted playlist
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback to call when saving has finished
             */
            save_async(
                playlist: Playlist,
                dest: Gio.File,
                title: string,
                type: ParserType | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an asynchronous playlist saving operation started with totem_pl_parser_save_async().
             *
             * If saving of the playlist is cancelled part-way through, %G_IO_ERROR_CANCELLED will be
             * returned when this function is called.
             * @param async_result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure.
             */
            save_finish(async_result: Gio.AsyncResult): boolean;
        }

        module Playlist {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * All the fields in the #TotemPlPlaylist structure are private and should never be accessed directly.
         */
        class Playlist extends GObject.Object {
            static $gtype: GObject.GType<Playlist>;

            // Constructors

            constructor(properties?: Partial<Playlist.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Playlist;

            // Methods

            /**
             * Appends a new empty element to `playlist,` and modifies `iter` so
             * it points to it. To fill in values, you need to call
             * totem_pl_playlist_set() or totem_pl_playlist_set_value().
             */
            append(): PlaylistIter;
            /**
             * Gets the value for `key` (Such as %TOTEM_PL_PARSER_FIELD_URI) in
             * the playlist item pointed by `iter`.
             * @param iter a #TotemPlPlaylistIter pointing to some item in @playlist
             * @param key data key
             * @param value an empty #GValue to set
             * @returns %TRUE if @iter contains data for @key.
             */
            get_value(iter: PlaylistIter, key: string, value: GObject.Value | any): boolean;
            /**
             * Inserts a new empty element to `playlist` at `position,` and modifies
             * `iter` so it points to it. To fill in values, you need to call
             * totem_pl_playlist_set() or totem_pl_playlist_set_value().
             *
             * `position` may be minor than 0 to prepend elements, or bigger than
             * the current `playlist` size to append elements.
             * @param position position in the playlist
             */
            insert(position: number): PlaylistIter;
            /**
             * Modifies `iter` so it points to the first element in `playlist`.
             * @returns %TRUE if there is such first element.
             */
            iter_first(): [boolean, PlaylistIter];
            /**
             * Modifies `iter` so it points to the next element it previously
             * pointed to. This function will return %FALSE if there was no
             * next element, or `iter` didn't actually point to any element
             * in `playlist`.
             * @param iter a #TotemPlPlaylistIter pointing to some item in @playlist
             * @returns %TRUE if there was next element.
             */
            iter_next(iter: PlaylistIter): boolean;
            /**
             * Modifies `iter` so it points to the previous element it previously
             * pointed to. This function will return %FALSE if there was no
             * previous element, or `iter` didn't actually point to any element
             * in `playlist`.
             * @param iter a #TotemPlPlaylistIter pointing to some item in @playlist
             * @returns %TRUE if there was previous element.
             */
            iter_prev(iter: PlaylistIter): boolean;
            /**
             * Prepends a new empty element to `playlist,` and modifies `iter` so
             * it points to it. To fill in values, you need to call
             * totem_pl_playlist_set() or totem_pl_playlist_set_value().
             */
            prepend(): PlaylistIter;
            /**
             * Sets the value for `key` in the element pointed by `iter`.
             * @param iter a #TotemPlPlaylistIter pointing to some item in @playlist
             * @param key key to set the value for
             * @param value #GValue containing the key value
             * @returns %TRUE if the value could be stored in @playlist
             */
            set_value(iter: PlaylistIter, key: string, value: GObject.Value | any): boolean;
            /**
             * Returns the number of elements in `playlist`.
             * @returns The number of elements
             */
            size(): number;
        }

        type ParserClass = typeof Parser;
        abstract class ParserPrivate {
            static $gtype: GObject.GType<ParserPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PlaylistClass = typeof Playlist;
        /**
         * All the fields in the #TotemPlPlaylistIter structure are private and should never be accessed directly.
         */
        class PlaylistIter {
            static $gtype: GObject.GType<PlaylistIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
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

    export default TotemPlParser;
}

declare module 'gi://TotemPlParser' {
    import TotemPlParser10 from 'gi://TotemPlParser?version=1.0';
    export default TotemPlParser10;
}
// END
