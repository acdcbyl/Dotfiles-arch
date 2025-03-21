/// <reference path="./gtk-3.0.d.ts" />
/// <reference path="./xlib-2.0.d.ts" />
/// <reference path="./gdk-3.0.d.ts" />
/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./pango-1.0.d.ts" />
/// <reference path="./harfbuzz-0.0.d.ts" />
/// <reference path="./freetype2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./gdkpixbuf-2.0.d.ts" />
/// <reference path="./atk-1.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://GtkSource?version=4' {
    // Module dependencies
    import type Gtk from 'gi://Gtk?version=3.0';
    import type xlib from 'gi://xlib?version=2.0';
    import type Gdk from 'gi://Gdk?version=3.0';
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Pango from 'gi://Pango?version=1.0';
    import type HarfBuzz from 'gi://HarfBuzz?version=0.0';
    import type freetype2 from 'gi://freetype2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type GdkPixbuf from 'gi://GdkPixbuf?version=2.0';
    import type Atk from 'gi://Atk?version=1.0';

    export namespace GtkSource {
        /**
         * GtkSource-4
         */

        export namespace BackgroundPatternType {
            export const $gtype: GObject.GType<BackgroundPatternType>;
        }

        enum BackgroundPatternType {
            /**
             * no pattern
             */
            NONE,
            /**
             * grid pattern
             */
            GRID,
        }

        export namespace BracketMatchType {
            export const $gtype: GObject.GType<BracketMatchType>;
        }

        enum BracketMatchType {
            /**
             * there is no bracket to match.
             */
            NONE,
            /**
             * matching a bracket
             *  failed because the maximum range was reached.
             */
            OUT_OF_RANGE,
            /**
             * a matching bracket was not found.
             */
            NOT_FOUND,
            /**
             * a matching bracket was found.
             */
            FOUND,
        }

        export namespace ChangeCaseType {
            export const $gtype: GObject.GType<ChangeCaseType>;
        }

        enum ChangeCaseType {
            /**
             * change case to lowercase.
             */
            LOWER,
            /**
             * change case to uppercase.
             */
            UPPER,
            /**
             * toggle case of each character.
             */
            TOGGLE,
            /**
             * capitalize each word.
             */
            TITLE,
        }
        /**
         * An error code used with %GTK_SOURCE_COMPLETION_ERROR in a #GError returned
         * from a completion-related function.
         */
        class CompletionError extends GLib.Error {
            static $gtype: GObject.GType<CompletionError>;

            // Static fields

            /**
             * The #GtkSourceCompletionProvider
             * is already bound to the #GtkSourceCompletion object.
             */
            static ALREADY_BOUND: number;
            /**
             * The #GtkSourceCompletionProvider is
             * not bound to the #GtkSourceCompletion object.
             */
            static NOT_BOUND: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        export namespace CompressionType {
            export const $gtype: GObject.GType<CompressionType>;
        }

        enum CompressionType {
            /**
             * plain text.
             */
            NONE,
            /**
             * gzip compression.
             */
            GZIP,
        }
        /**
         * An error code used with the %GTK_SOURCE_FILE_LOADER_ERROR domain.
         */
        class FileLoaderError extends GLib.Error {
            static $gtype: GObject.GType<FileLoaderError>;

            // Static fields

            /**
             * The file is too big.
             */
            static TOO_BIG: number;
            /**
             * It is not
             * possible to detect the encoding automatically.
             */
            static ENCODING_AUTO_DETECTION_FAILED: number;
            /**
             * There was an encoding
             * conversion error and it was needed to use a fallback character.
             */
            static CONVERSION_FALLBACK: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
         */
        class FileSaverError extends GLib.Error {
            static $gtype: GObject.GType<FileSaverError>;

            // Static fields

            /**
             * The buffer contains invalid
             *   characters.
             */
            static INVALID_CHARS: number;
            /**
             * The file is externally
             *   modified.
             */
            static EXTERNALLY_MODIFIED: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * The alignment mode of the renderer, when a cell spans multiple lines (due to
         * text wrapping).
         */

        /**
         * The alignment mode of the renderer, when a cell spans multiple lines (due to
         * text wrapping).
         */
        export namespace GutterRendererAlignmentMode {
            export const $gtype: GObject.GType<GutterRendererAlignmentMode>;
        }

        enum GutterRendererAlignmentMode {
            /**
             * The full cell.
             */
            CELL,
            /**
             * The first line.
             */
            FIRST,
            /**
             * The last line.
             */
            LAST,
        }

        export namespace NewlineType {
            export const $gtype: GObject.GType<NewlineType>;
        }

        enum NewlineType {
            /**
             * line feed, used on UNIX.
             */
            LF,
            /**
             * carriage return, used on Mac.
             */
            CR,
            /**
             * carriage return followed by a line feed, used
             *   on Windows.
             */
            CR_LF,
        }

        export namespace SmartHomeEndType {
            export const $gtype: GObject.GType<SmartHomeEndType>;
        }

        enum SmartHomeEndType {
            /**
             * smart-home-end disabled.
             */
            DISABLED,
            /**
             * move to the first/last
             * non-whitespace character on the first press of the HOME/END keys and
             * to the beginning/end of the line on the second press.
             */
            BEFORE,
            /**
             * move to the beginning/end of the
             * line on the first press of the HOME/END keys and to the first/last
             * non-whitespace character on the second press.
             */
            AFTER,
            /**
             * always move to the first/last
             * non-whitespace character when the HOME/END keys are pressed.
             */
            ALWAYS,
        }

        export namespace ViewGutterPosition {
            export const $gtype: GObject.GType<ViewGutterPosition>;
        }

        enum ViewGutterPosition {
            /**
             * the gutter position of the lines
             * renderer
             */
            LINES,
            /**
             * the gutter position of the marks
             * renderer
             */
            MARKS,
        }
        function completion_error_quark(): GLib.Quark;
        /**
         * Gets all encodings.
         * @returns a list of all #GtkSourceEncoding's. Free with g_slist_free().
         */
        function encoding_get_all(): Encoding[];
        /**
         * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
         * @returns the current locale encoding.
         */
        function encoding_get_current(): Encoding;
        /**
         * Gets the list of default candidate encodings to try when loading a file. See
         * gtk_source_file_loader_set_candidate_encodings().
         *
         * This function returns a different list depending on the current locale (i.e.
         * language, country and default encoding). The UTF-8 encoding and the current
         * locale encoding are guaranteed to be present in the returned list.
         * @returns the list of default candidate encodings. Free with g_slist_free().
         */
        function encoding_get_default_candidates(): Encoding[];
        /**
         * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
         * "ISO-8859-1".
         * @param charset a character set.
         * @returns the corresponding #GtkSourceEncoding, or %NULL if not found.
         */
        function encoding_get_from_charset(charset: string): Encoding | null;
        function encoding_get_utf8(): Encoding;
        function file_loader_error_quark(): GLib.Quark;
        function file_saver_error_quark(): GLib.Quark;
        /**
         * Free the resources allocated by GtkSourceView. For example it unrefs the
         * singleton objects.
         *
         * It is not mandatory to call this function, it's just to be friendlier to
         * memory debugging tools. This function is meant to be called at the end of
         * main(). It can be called several times.
         */
        function finalize(): void;
        /**
         * Initializes the GtkSourceView library (e.g. for the internationalization).
         *
         * This function can be called several times, but is meant to be called at the
         * beginning of main(), before any other GtkSourceView function call.
         */
        function init(): void;
        /**
         * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
         *
         * For a regular expression search, use g_regex_escape_string() instead.
         *
         * One possible use case is to take the #GtkTextBuffer's selection and put it in a
         * search entry. The selection can contain tabulations, newlines, etc. So it's
         * better to escape those special characters to better fit in the search entry.
         *
         * See also: gtk_source_utils_unescape_search_text().
         *
         * <warning>
         * Warning: the escape and unescape functions are not reciprocal! For example,
         * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
         * -> search settings -> escape -> search entry. The original search entry text
         * may be modified.
         * </warning>
         * @param text the text to escape.
         * @returns the escaped @text.
         */
        function utils_escape_search_text(text: string): string;
        /**
         * Use this function before gtk_source_search_settings_set_search_text(), to
         * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
         * The purpose is to easily write those characters in a search entry.
         *
         * Note that unescaping the search text is not needed for regular expression
         * searches.
         *
         * See also: gtk_source_utils_escape_search_text().
         * @param text the text to unescape.
         * @returns the unescaped @text.
         */
        function utils_unescape_search_text(text: string): string;

        export namespace CompletionActivation {
            export const $gtype: GObject.GType<CompletionActivation>;
        }

        enum CompletionActivation {
            /**
             * None.
             */
            NONE,
            /**
             * Interactive activation. By
             * default, it occurs on each insertion in the #GtkTextBuffer. This can be
             * blocked temporarily with gtk_source_completion_block_interactive().
             */
            INTERACTIVE,
            /**
             * User requested activation.
             * By default, it occurs when the user presses
             * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
             */
            USER_REQUESTED,
        }
        /**
         * Flags to define the behavior of a #GtkSourceFileSaver.
         */

        /**
         * Flags to define the behavior of a #GtkSourceFileSaver.
         */
        export namespace FileSaverFlags {
            export const $gtype: GObject.GType<FileSaverFlags>;
        }

        enum FileSaverFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Ignore invalid characters.
             */
            IGNORE_INVALID_CHARS,
            /**
             * Save file despite external modifications.
             */
            IGNORE_MODIFICATION_TIME,
            /**
             * Create a backup before saving the file.
             */
            CREATE_BACKUP,
        }

        export namespace GutterRendererState {
            export const $gtype: GObject.GType<GutterRendererState>;
        }

        enum GutterRendererState {
            /**
             * normal state
             */
            NORMAL,
            /**
             * area in the renderer represents the
             * line on which the insert cursor is currently positioned
             */
            CURSOR,
            /**
             * the mouse pointer is currently
             * over the activatable area of the renderer
             */
            PRELIT,
            /**
             * area in the renderer represents
             * a line in the buffer which contains part of the selection
             */
            SELECTED,
        }

        export namespace SortFlags {
            export const $gtype: GObject.GType<SortFlags>;
        }

        enum SortFlags {
            /**
             * no flags specified
             */
            NONE,
            /**
             * case sensitive sort
             */
            CASE_SENSITIVE,
            /**
             * sort in reverse order
             */
            REVERSE_ORDER,
            /**
             * remove duplicates
             */
            REMOVE_DUPLICATES,
        }
        /**
         * #GtkSourceSpaceLocationFlags contains flags for white space locations.
         *
         * If a line contains only white spaces (no text), the white spaces match both
         * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
         */

        /**
         * #GtkSourceSpaceLocationFlags contains flags for white space locations.
         *
         * If a line contains only white spaces (no text), the white spaces match both
         * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
         */
        export namespace SpaceLocationFlags {
            export const $gtype: GObject.GType<SpaceLocationFlags>;
        }

        enum SpaceLocationFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Leading white spaces on a line, i.e. the
             *   indentation.
             */
            LEADING,
            /**
             * White spaces inside a line of text.
             */
            INSIDE_TEXT,
            /**
             * Trailing white spaces on a line.
             */
            TRAILING,
            /**
             * White spaces anywhere.
             */
            ALL,
        }
        /**
         * #GtkSourceSpaceTypeFlags contains flags for white space types.
         */

        /**
         * #GtkSourceSpaceTypeFlags contains flags for white space types.
         */
        export namespace SpaceTypeFlags {
            export const $gtype: GObject.GType<SpaceTypeFlags>;
        }

        enum SpaceTypeFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * Space character.
             */
            SPACE,
            /**
             * Tab character.
             */
            TAB,
            /**
             * Line break character. If the
             *   #GtkSourceBuffer:implicit-trailing-newline property is %TRUE,
             *   #GtkSourceSpaceDrawer also draws a line break at the end of the buffer.
             */
            NEWLINE,
            /**
             * Non-breaking space character.
             */
            NBSP,
            /**
             * All white spaces.
             */
            ALL,
        }
        module Buffer {
            // Signal callback interfaces

            interface BracketMatched {
                (iter: Gtk.TextIter | null, state: BracketMatchType): void;
            }

            interface HighlightUpdated {
                (start: Gtk.TextIter, end: Gtk.TextIter): void;
            }

            interface Redo {
                (): void;
            }

            interface SourceMarkUpdated {
                (mark: Gtk.TextMark): void;
            }

            interface Undo {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextBuffer.ConstructorProps {
                can_redo: boolean;
                canRedo: boolean;
                can_undo: boolean;
                canUndo: boolean;
                highlight_matching_brackets: boolean;
                highlightMatchingBrackets: boolean;
                highlight_syntax: boolean;
                highlightSyntax: boolean;
                implicit_trailing_newline: boolean;
                implicitTrailingNewline: boolean;
                language: Language;
                max_undo_levels: number;
                maxUndoLevels: number;
                style_scheme: StyleScheme;
                styleScheme: StyleScheme;
                undo_manager: UndoManager;
                undoManager: UndoManager;
            }
        }

        class Buffer extends Gtk.TextBuffer {
            static $gtype: GObject.GType<Buffer>;

            // Properties

            get can_redo(): boolean;
            get canRedo(): boolean;
            get can_undo(): boolean;
            get canUndo(): boolean;
            /**
             * Whether to highlight matching brackets in the buffer.
             */
            get highlight_matching_brackets(): boolean;
            set highlight_matching_brackets(val: boolean);
            /**
             * Whether to highlight matching brackets in the buffer.
             */
            get highlightMatchingBrackets(): boolean;
            set highlightMatchingBrackets(val: boolean);
            /**
             * Whether to highlight syntax in the buffer.
             */
            get highlight_syntax(): boolean;
            set highlight_syntax(val: boolean);
            /**
             * Whether to highlight syntax in the buffer.
             */
            get highlightSyntax(): boolean;
            set highlightSyntax(val: boolean);
            /**
             * Whether the buffer has an implicit trailing newline. See
             * gtk_source_buffer_set_implicit_trailing_newline().
             */
            get implicit_trailing_newline(): boolean;
            set implicit_trailing_newline(val: boolean);
            /**
             * Whether the buffer has an implicit trailing newline. See
             * gtk_source_buffer_set_implicit_trailing_newline().
             */
            get implicitTrailingNewline(): boolean;
            set implicitTrailingNewline(val: boolean);
            get language(): Language;
            set language(val: Language);
            /**
             * Number of undo levels for the buffer. -1 means no limit. This property
             * will only affect the default undo manager.
             */
            get max_undo_levels(): number;
            set max_undo_levels(val: number);
            /**
             * Number of undo levels for the buffer. -1 means no limit. This property
             * will only affect the default undo manager.
             */
            get maxUndoLevels(): number;
            set maxUndoLevels(val: number);
            /**
             * Style scheme. It contains styles for syntax highlighting, optionally
             * foreground, background, cursor color, current line color, and matching
             * brackets style.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * Style scheme. It contains styles for syntax highlighting, optionally
             * foreground, background, cursor color, current line color, and matching
             * brackets style.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);
            get undo_manager(): UndoManager;
            set undo_manager(val: UndoManager);
            get undoManager(): UndoManager;
            set undoManager(val: UndoManager);

            // Constructors

            constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](table?: Gtk.TextTagTable | null): Buffer;

            static new_with_language(language: Language): Buffer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'bracket-matched',
                callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void,
            ): number;
            connect_after(
                signal: 'bracket-matched',
                callback: (_source: this, iter: Gtk.TextIter | null, state: BracketMatchType) => void,
            ): number;
            emit(signal: 'bracket-matched', iter: Gtk.TextIter | null, state: BracketMatchType): void;
            connect(
                signal: 'highlight-updated',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            connect_after(
                signal: 'highlight-updated',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter) => void,
            ): number;
            emit(signal: 'highlight-updated', start: Gtk.TextIter, end: Gtk.TextIter): void;
            connect(signal: 'redo', callback: (_source: this) => void): number;
            connect_after(signal: 'redo', callback: (_source: this) => void): number;
            emit(signal: 'redo'): void;
            connect(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;
            connect_after(signal: 'source-mark-updated', callback: (_source: this, mark: Gtk.TextMark) => void): number;
            emit(signal: 'source-mark-updated', mark: Gtk.TextMark): void;
            connect(signal: 'undo', callback: (_source: this) => void): number;
            connect_after(signal: 'undo', callback: (_source: this) => void): number;
            emit(signal: 'undo'): void;

            // Virtual methods

            vfunc_bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
            /**
             * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
             * to check whether a call to this function will have any effect.
             *
             * This function emits the #GtkSourceBuffer::redo signal.
             */
            vfunc_redo(): void;
            /**
             * Undoes the last user action which modified the buffer.  Use
             * gtk_source_buffer_can_undo() to check whether a call to this
             * function will have any effect.
             *
             * This function emits the #GtkSourceBuffer::undo signal.
             */
            vfunc_undo(): void;

            // Methods

            /**
             * Moves `iter` to the position of the previous #GtkSourceMark of the given
             * category. Returns %TRUE if `iter` was moved. If `category` is NULL, the
             * previous source mark can be of any category.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns whether @iter was moved.
             */
            backward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
            /**
             * Marks the beginning of a not undoable action on the buffer,
             * disabling the undo manager.  Typically you would call this function
             * before initially setting the contents of the buffer (e.g. when
             * loading a file in a text editor).
             *
             * You may nest gtk_source_buffer_begin_not_undoable_action() /
             * gtk_source_buffer_end_not_undoable_action() blocks.
             */
            begin_not_undoable_action(): void;
            /**
             * Changes the case of the text between the specified iterators.
             * @param case_type how to change the case.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             */
            change_case(case_type: ChangeCaseType | null, start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Creates a source mark in the `buffer` of category `category`.  A source mark is
             * a #GtkTextMark but organised into categories. Depending on the category
             * a pixbuf can be specified that will be displayed along the line of the mark.
             *
             * Like a #GtkTextMark, a #GtkSourceMark can be anonymous if the
             * passed `name` is %NULL.  Also, the buffer owns the marks so you
             * shouldn't unreference it.
             *
             * Marks always have left gravity and are moved to the beginning of
             * the line when the user deletes the line they were in.
             *
             * Typical uses for a source mark are bookmarks, breakpoints, current
             * executing instruction indication in a source file, etc..
             * @param name the name of the mark, or %NULL.
             * @param category a string defining the mark category.
             * @param where location to place the mark.
             * @returns a new #GtkSourceMark, owned by the buffer.
             */
            create_source_mark(name: string | null, category: string, where: Gtk.TextIter): Mark;
            /**
             * Marks the end of a not undoable action on the buffer.  When the
             * last not undoable block is closed through the call to this
             * function, the list of undo actions is cleared and the undo manager
             * is re-enabled.
             */
            end_not_undoable_action(): void;
            /**
             * Forces buffer to analyze and highlight the given area synchronously.
             *
             * <note>
             *   <para>
             *     This is a potentially slow operation and should be used only
             *     when you need to make sure that some text not currently
             *     visible is highlighted, for instance before printing.
             *   </para>
             * </note>
             * @param start start of the area to highlight.
             * @param end end of the area to highlight.
             */
            ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Moves `iter` to the position of the next #GtkSourceMark of the given
             * `category`. Returns %TRUE if `iter` was moved. If `category` is NULL, the
             * next source mark can be of any category.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns whether @iter was moved.
             */
            forward_iter_to_source_mark(iter: Gtk.TextIter, category?: string | null): [boolean, Gtk.TextIter];
            /**
             * Get all defined context classes at `iter`.
             *
             * See the #GtkSourceBuffer description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @returns a new %NULL terminated array of context class names. Use g_strfreev() to free the array if it is no longer needed.
             */
            get_context_classes_at_iter(iter: Gtk.TextIter): string[];
            /**
             * Determines whether bracket match highlighting is activated for the
             * source buffer.
             * @returns %TRUE if the source buffer will highlight matching brackets.
             */
            get_highlight_matching_brackets(): boolean;
            /**
             * Determines whether syntax highlighting is activated in the source
             * buffer.
             * @returns %TRUE if syntax highlighting is enabled, %FALSE otherwise.
             */
            get_highlight_syntax(): boolean;
            get_implicit_trailing_newline(): boolean;
            /**
             * Returns the #GtkSourceLanguage associated with the buffer,
             * see gtk_source_buffer_set_language().  The returned object should not be
             * unreferenced by the user.
             * @returns the #GtkSourceLanguage associated with the buffer, or %NULL.
             */
            get_language(): Language | null;
            /**
             * Determines the number of undo levels the buffer will track for buffer edits.
             * @returns the maximum number of possible undo levels or -1 if no limit is set.
             */
            get_max_undo_levels(): number;
            /**
             * Returns the list of marks of the given category at `iter`. If `category`
             * is %NULL it returns all marks at `iter`.
             * @param iter an iterator.
             * @param category category to search for, or %NULL
             * @returns a newly allocated #GSList.
             */
            get_source_marks_at_iter(iter: Gtk.TextIter, category?: string | null): Mark[];
            /**
             * Returns the list of marks of the given category at `line`.
             * If `category` is %NULL, all marks at `line` are returned.
             * @param line a line number.
             * @param category category to search for, or %NULL
             * @returns a newly allocated #GSList.
             */
            get_source_marks_at_line(line: number, category?: string | null): Mark[];
            /**
             * Returns the #GtkSourceStyleScheme associated with the buffer,
             * see gtk_source_buffer_set_style_scheme().
             * The returned object should not be unreferenced by the user.
             * @returns the #GtkSourceStyleScheme associated with the buffer, or %NULL.
             */
            get_style_scheme(): StyleScheme | null;
            /**
             * Returns the #GtkSourceUndoManager associated with the buffer,
             * see gtk_source_buffer_set_undo_manager().  The returned object should not be
             * unreferenced by the user.
             * @returns the #GtkSourceUndoManager associated with the buffer, or %NULL.
             */
            get_undo_manager(): UndoManager | null;
            /**
             * Moves backward to the next toggle (on or off) of the context class. If no
             * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
             * Does not return toggles located at `iter,` only toggles after `iter`. Sets
             * `iter` to the location of the toggle, or to the end of the buffer if no
             * toggle is found.
             *
             * See the #GtkSourceBuffer description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class the context class.
             * @returns whether we found a context class toggle before @iter
             */
            iter_backward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
            /**
             * Moves forward to the next toggle (on or off) of the context class. If no
             * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
             * Does not return toggles located at `iter,` only toggles after `iter`. Sets
             * `iter` to the location of the toggle, or to the end of the buffer if no
             * toggle is found.
             *
             * See the #GtkSourceBuffer description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class the context class.
             * @returns whether we found a context class toggle after @iter
             */
            iter_forward_to_context_class_toggle(iter: Gtk.TextIter, context_class: string): [boolean, Gtk.TextIter];
            /**
             * Check if the class `context_class` is set on `iter`.
             *
             * See the #GtkSourceBuffer description for the list of default context classes.
             * @param iter a #GtkTextIter.
             * @param context_class class to search for.
             * @returns whether @iter has the context class.
             */
            iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
            /**
             * Joins the lines of text between the specified iterators.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             */
            join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
             * to check whether a call to this function will have any effect.
             *
             * This function emits the #GtkSourceBuffer::redo signal.
             */
            redo(): void;
            /**
             * Remove all marks of `category` between `start` and `end` from the buffer.
             * If `category` is NULL, all marks in the range will be removed.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param category category to search for, or %NULL.
             */
            remove_source_marks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void;
            /**
             * Controls the bracket match highlighting function in the buffer.  If
             * activated, when you position your cursor over a bracket character
             * (a parenthesis, a square bracket, etc.) the matching opening or
             * closing bracket character will be highlighted.
             * @param highlight %TRUE if you want matching brackets highlighted.
             */
            set_highlight_matching_brackets(highlight: boolean): void;
            /**
             * Controls whether syntax is highlighted in the buffer.
             *
             * If `highlight` is %TRUE, the text will be highlighted according to the syntax
             * patterns specified in the #GtkSourceLanguage set with
             * gtk_source_buffer_set_language().
             *
             * If `highlight` is %FALSE, syntax highlighting is disabled and all the
             * #GtkTextTag objects that have been added by the syntax highlighting engine
             * are removed from the buffer.
             * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
             */
            set_highlight_syntax(highlight: boolean): void;
            /**
             * Sets whether the `buffer` has an implicit trailing newline.
             *
             * If an explicit trailing newline is present in a #GtkTextBuffer, #GtkTextView
             * shows it as an empty line. This is generally not what the user expects.
             *
             * If `implicit_trailing_newline` is %TRUE (the default value):
             *  - when a #GtkSourceFileLoader loads the content of a file into the `buffer,`
             *    the trailing newline (if present in the file) is not inserted into the
             *    `buffer`.
             *  - when a #GtkSourceFileSaver saves the content of the `buffer` into a file, a
             *    trailing newline is added to the file.
             *
             * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
             * content is not modified when loaded into the `buffer,` and the `buffer'`s
             * content is not modified when saved into a file.
             * @param implicit_trailing_newline the new value.
             */
            set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
            /**
             * Associates a #GtkSourceLanguage with the buffer.
             *
             * Note that a #GtkSourceLanguage affects not only the syntax highlighting, but
             * also the [context classes][context-classes]. If you want to disable just the
             * syntax highlighting, see gtk_source_buffer_set_highlight_syntax().
             *
             * The buffer holds a reference to `language`.
             * @param language a #GtkSourceLanguage to set, or %NULL.
             */
            set_language(language?: Language | null): void;
            /**
             * Sets the number of undo levels for user actions the buffer will
             * track.  If the number of user actions exceeds the limit set by this
             * function, older actions will be discarded.
             *
             * If `max_undo_levels` is -1, the undo/redo is unlimited.
             *
             * If `max_undo_levels` is 0, the undo/redo is disabled.
             * @param max_undo_levels the desired maximum number of undo levels.
             */
            set_max_undo_levels(max_undo_levels: number): void;
            /**
             * Sets a #GtkSourceStyleScheme to be used by the buffer and the view.
             *
             * Note that a #GtkSourceStyleScheme affects not only the syntax highlighting,
             * but also other #GtkSourceView features such as highlighting the current line,
             * matching brackets, the line numbers, etc.
             *
             * Instead of setting a %NULL `scheme,` it is better to disable syntax
             * highlighting with gtk_source_buffer_set_highlight_syntax(), and setting the
             * #GtkSourceStyleScheme with the "classic" or "tango" ID, because those two
             * style schemes follow more closely the GTK+ theme (for example for the
             * background color).
             *
             * The buffer holds a reference to `scheme`.
             * @param scheme a #GtkSourceStyleScheme or %NULL.
             */
            set_style_scheme(scheme?: StyleScheme | null): void;
            /**
             * Set the buffer undo manager. If `manager` is %NULL the default undo manager
             * will be set.
             * @param manager A #GtkSourceUndoManager or %NULL.
             */
            set_undo_manager(manager?: UndoManager | null): void;
            /**
             * Sort the lines of text between the specified iterators.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param flags #GtkSourceSortFlags specifying how the sort should behave
             * @param column sort considering the text starting at the given column
             */
            sort_lines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags | null, column: number): void;
            /**
             * Undoes the last user action which modified the buffer.  Use
             * gtk_source_buffer_can_undo() to check whether a call to this
             * function will have any effect.
             *
             * This function emits the #GtkSourceBuffer::undo signal.
             */
            undo(): void;
        }

        module Completion {
            // Signal callback interfaces

            interface ActivateProposal {
                (): void;
            }

            interface Hide {
                (): void;
            }

            interface MoveCursor {
                (step: Gtk.ScrollStep, num: number): void;
            }

            interface MovePage {
                (step: Gtk.ScrollStep, num: number): void;
            }

            interface PopulateContext {
                (context: CompletionContext): void;
            }

            interface Show {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.Buildable.ConstructorProps {
                accelerators: number;
                auto_complete_delay: number;
                autoCompleteDelay: number;
                proposal_page_size: number;
                proposalPageSize: number;
                provider_page_size: number;
                providerPageSize: number;
                remember_info_visibility: boolean;
                rememberInfoVisibility: boolean;
                select_on_show: boolean;
                selectOnShow: boolean;
                show_headers: boolean;
                showHeaders: boolean;
                show_icons: boolean;
                showIcons: boolean;
                view: View;
            }
        }

        class Completion extends GObject.Object implements Gtk.Buildable {
            static $gtype: GObject.GType<Completion>;

            // Properties

            /**
             * Number of keyboard accelerators to show for the first proposals. For
             * example, to activate the first proposal, the user can press
             * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
             */
            get accelerators(): number;
            set accelerators(val: number);
            /**
             * Determines the popup delay (in milliseconds) at which the completion
             * will be shown for interactive completion.
             */
            get auto_complete_delay(): number;
            set auto_complete_delay(val: number);
            /**
             * Determines the popup delay (in milliseconds) at which the completion
             * will be shown for interactive completion.
             */
            get autoCompleteDelay(): number;
            set autoCompleteDelay(val: number);
            /**
             * The scroll page size of the proposals in the completion window. In
             * other words, when <keycap>PageDown</keycap> or
             * <keycap>PageUp</keycap> is pressed, the selected
             * proposal becomes the one which is located one page size backward or
             * forward.
             *
             * See also the #GtkSourceCompletion::move-cursor signal.
             */
            get proposal_page_size(): number;
            set proposal_page_size(val: number);
            /**
             * The scroll page size of the proposals in the completion window. In
             * other words, when <keycap>PageDown</keycap> or
             * <keycap>PageUp</keycap> is pressed, the selected
             * proposal becomes the one which is located one page size backward or
             * forward.
             *
             * See also the #GtkSourceCompletion::move-cursor signal.
             */
            get proposalPageSize(): number;
            set proposalPageSize(val: number);
            /**
             * The scroll page size of the provider pages in the completion window.
             *
             * See the #GtkSourceCompletion::move-page signal.
             */
            get provider_page_size(): number;
            set provider_page_size(val: number);
            /**
             * The scroll page size of the provider pages in the completion window.
             *
             * See the #GtkSourceCompletion::move-page signal.
             */
            get providerPageSize(): number;
            set providerPageSize(val: number);
            /**
             * Determines whether the visibility of the info window should be
             * saved when the completion is hidden, and restored when the completion
             * is shown again.
             */
            get remember_info_visibility(): boolean;
            set remember_info_visibility(val: boolean);
            /**
             * Determines whether the visibility of the info window should be
             * saved when the completion is hidden, and restored when the completion
             * is shown again.
             */
            get rememberInfoVisibility(): boolean;
            set rememberInfoVisibility(val: boolean);
            /**
             * Determines whether the first proposal should be selected when the
             * completion is first shown.
             */
            get select_on_show(): boolean;
            set select_on_show(val: boolean);
            /**
             * Determines whether the first proposal should be selected when the
             * completion is first shown.
             */
            get selectOnShow(): boolean;
            set selectOnShow(val: boolean);
            /**
             * Determines whether provider headers should be shown in the proposal
             * list. It can be useful to disable when there is only one provider.
             */
            get show_headers(): boolean;
            set show_headers(val: boolean);
            /**
             * Determines whether provider headers should be shown in the proposal
             * list. It can be useful to disable when there is only one provider.
             */
            get showHeaders(): boolean;
            set showHeaders(val: boolean);
            /**
             * Determines whether provider and proposal icons should be shown in
             * the completion popup.
             */
            get show_icons(): boolean;
            set show_icons(val: boolean);
            /**
             * Determines whether provider and proposal icons should be shown in
             * the completion popup.
             */
            get showIcons(): boolean;
            set showIcons(val: boolean);
            /**
             * The #GtkSourceView bound to the completion object.
             */
            get view(): View;

            // Constructors

            constructor(properties?: Partial<Completion.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate-proposal', callback: (_source: this) => void): number;
            connect_after(signal: 'activate-proposal', callback: (_source: this) => void): number;
            emit(signal: 'activate-proposal'): void;
            connect(signal: 'hide', callback: (_source: this) => void): number;
            connect_after(signal: 'hide', callback: (_source: this) => void): number;
            emit(signal: 'hide'): void;
            connect(
                signal: 'move-cursor',
                callback: (_source: this, step: Gtk.ScrollStep, num: number) => void,
            ): number;
            connect_after(
                signal: 'move-cursor',
                callback: (_source: this, step: Gtk.ScrollStep, num: number) => void,
            ): number;
            emit(signal: 'move-cursor', step: Gtk.ScrollStep, num: number): void;
            connect(signal: 'move-page', callback: (_source: this, step: Gtk.ScrollStep, num: number) => void): number;
            connect_after(
                signal: 'move-page',
                callback: (_source: this, step: Gtk.ScrollStep, num: number) => void,
            ): number;
            emit(signal: 'move-page', step: Gtk.ScrollStep, num: number): void;
            connect(signal: 'populate-context', callback: (_source: this, context: CompletionContext) => void): number;
            connect_after(
                signal: 'populate-context',
                callback: (_source: this, context: CompletionContext) => void,
            ): number;
            emit(signal: 'populate-context', context: CompletionContext): void;
            connect(signal: 'show', callback: (_source: this) => void): number;
            connect_after(signal: 'show', callback: (_source: this) => void): number;
            emit(signal: 'show'): void;

            // Virtual methods

            vfunc_activate_proposal(): void;
            /**
             * Hides the completion if it is active (visible).
             */
            vfunc_hide(): void;
            vfunc_move_cursor(step: Gtk.ScrollStep, num: number): void;
            vfunc_move_page(step: Gtk.ScrollStep, num: number): void;
            vfunc_populate_context(context: CompletionContext): void;
            vfunc_proposal_activated(provider: CompletionProvider, proposal: CompletionProposal): boolean;
            vfunc_show(): void;

            // Methods

            /**
             * Add a new #GtkSourceCompletionProvider to the completion object. This will
             * add a reference `provider,` so make sure to unref your own copy when you
             * no longer need it.
             * @param provider a #GtkSourceCompletionProvider.
             * @returns %TRUE if @provider was successfully added, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
             */
            add_provider(provider: CompletionProvider): boolean;
            /**
             * Block interactive completion. This can be used to disable interactive
             * completion when inserting or deleting text from the buffer associated with
             * the completion. Use gtk_source_completion_unblock_interactive() to enable
             * interactive completion again.
             *
             * This function may be called multiple times. It will continue to block
             * interactive completion until gtk_source_completion_unblock_interactive()
             * has been called the same number of times.
             */
            block_interactive(): void;
            /**
             * Create a new #GtkSourceCompletionContext for `completion`. The position where
             * the completion occurs can be specified by `position`. If `position` is %NULL,
             * the current cursor position will be used.
             * @param position a #GtkTextIter, or %NULL.
             * @returns a new #GtkSourceCompletionContext. The reference being returned is a 'floating' reference, so if you invoke gtk_source_completion_start() with this context you don't need to unref it.
             */
            create_context(position?: Gtk.TextIter | null): CompletionContext;
            /**
             * The info widget is the window where the completion displays optional extra
             * information of the proposal.
             * @returns The #GtkSourceCompletionInfo window                           associated with @completion.
             */
            get_info_window(): CompletionInfo;
            /**
             * Get list of providers registered on `completion`. The returned list is owned
             * by the completion and should not be freed.
             * @returns list of #GtkSourceCompletionProvider.
             */
            get_providers(): CompletionProvider[];
            /**
             * The #GtkSourceView associated with `completion,` or %NULL if the view has been
             * destroyed.
             * @returns The #GtkSourceView associated with @completion, or %NULL.
             */
            get_view(): View | null;
            /**
             * Hides the completion if it is active (visible).
             */
            hide(): void;
            /**
             * Remove `provider` from the completion.
             * @param provider a #GtkSourceCompletionProvider.
             * @returns %TRUE if @provider was successfully removed, otherwise if @error          is provided, it will be set with the error and %FALSE is returned.
             */
            remove_provider(provider: CompletionProvider): boolean;
            /**
             * Starts a new completion with the specified #GtkSourceCompletionContext and
             * a list of potential candidate providers for completion.
             *
             * It can be convenient for showing a completion on-the-fly, without the need to
             * add or remove providers to the #GtkSourceCompletion.
             *
             * Another solution is to add providers with
             * gtk_source_completion_add_provider(), and implement
             * gtk_source_completion_provider_match() for each provider.
             * @param providers a list of #GtkSourceCompletionProvider, or %NULL.
             * @param context The #GtkSourceCompletionContext with which to start the completion.
             * @returns %TRUE if it was possible to the show completion window.
             */
            start(providers: CompletionProvider[] | null, context: CompletionContext): boolean;
            /**
             * Unblock interactive completion. This can be used after using
             * gtk_source_completion_block_interactive() to enable interactive completion
             * again.
             */
            unblock_interactive(): void;

            // Inherited methods
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a #GtkBuilder
             * @param child child to add
             * @param type kind of child or %NULL
             */
            add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             * @returns the constructed child
             */
            construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called at the end of each custom element handled by
             * the buildable.
             * @param builder #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called for each unknown element under `<child>`.
             * @param builder a #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @returns %TRUE if a object has a custom implementation, %FALSE          if it doesn't.
             */
            custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             * @returns the internal child of the buildable object
             */
            get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Gets the name of the `buildable` object.
             *
             * #GtkBuilder sets the name based on the
             * [GtkBuilder UI definition][BUILDER-UI]
             * used to construct the `buildable`.
             * @returns the name set with gtk_buildable_set_name()
             */
            get_name(): string;
            /**
             * Called when the builder finishes the parsing of a
             * [GtkBuilder UI definition][BUILDER-UI].
             * Note that this will be called once for each time
             * gtk_builder_add_from_file() or gtk_builder_add_from_string()
             * is called on a builder.
             * @param builder a #GtkBuilder
             */
            parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Sets the name of the `buildable` object.
             * @param name name to set
             */
            set_name(name: string): void;
            /**
             * Adds a child to `buildable`. `type` is an optional string
             * describing how the child should be added.
             * @param builder a #GtkBuilder
             * @param child child to add
             * @param type kind of child or %NULL
             */
            vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
            /**
             * Constructs a child of `buildable` with the name `name`.
             *
             * #GtkBuilder calls this function if a “constructor” has been
             * specified in the UI definition.
             * @param builder #GtkBuilder used to construct this object
             * @param name name of child to construct
             */
            vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;
            /**
             * This is similar to gtk_buildable_parser_finished() but is
             * called once for each custom tag handled by the `buildable`.
             * @param builder a #GtkBuilder
             * @param child child object or %NULL for non-child tags
             * @param tagname the name of the tag
             * @param data user data created in custom_tag_start
             */
            vfunc_custom_finished(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called at the end of each custom element handled by
             * the buildable.
             * @param builder #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             * @param data user data that will be passed in to parser functions
             */
            vfunc_custom_tag_end(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
                data?: any | null,
            ): void;
            /**
             * This is called for each unknown element under `<child>`.
             * @param builder a #GtkBuilder used to construct this object
             * @param child child object or %NULL for non-child tags
             * @param tagname name of tag
             */
            vfunc_custom_tag_start(
                builder: Gtk.Builder,
                child: GObject.Object | null,
                tagname: string,
            ): [boolean, GLib.MarkupParser, any];
            /**
             * Get the internal child called `childname` of the `buildable` object.
             * @param builder a #GtkBuilder
             * @param childname name of child
             */
            vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
            /**
             * Gets the name of the `buildable` object.
             *
             * #GtkBuilder sets the name based on the
             * [GtkBuilder UI definition][BUILDER-UI]
             * used to construct the `buildable`.
             */
            vfunc_get_name(): string;
            /**
             * Called when the builder finishes the parsing of a
             * [GtkBuilder UI definition][BUILDER-UI].
             * Note that this will be called once for each time
             * gtk_builder_add_from_file() or gtk_builder_add_from_string()
             * is called on a builder.
             * @param builder a #GtkBuilder
             */
            vfunc_parser_finished(builder: Gtk.Builder): void;
            /**
             * Sets the property name `name` to `value` on the `buildable` object.
             * @param builder a #GtkBuilder
             * @param name name of property
             * @param value value of property
             */
            vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
            /**
             * Sets the name of the `buildable` object.
             * @param name name to set
             */
            vfunc_set_name(name: string): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module CompletionContext {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                activation: CompletionActivation;
                completion: Completion;
                iter: Gtk.TextIter;
            }
        }

        class CompletionContext extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<CompletionContext>;

            // Properties

            /**
             * The completion activation
             */
            get activation(): CompletionActivation;
            set activation(val: CompletionActivation);
            /**
             * The #GtkSourceCompletion associated with the context.
             */
            get completion(): Completion;
            /**
             * The #GtkTextIter at which the completion is invoked.
             */
            get iter(): Gtk.TextIter;
            set iter(val: Gtk.TextIter);

            // Constructors

            constructor(properties?: Partial<CompletionContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;

            // Virtual methods

            vfunc_cancelled(): void;

            // Methods

            /**
             * Providers can use this function to add proposals to the completion. They
             * can do so asynchronously by means of the `finished` argument. Providers must
             * ensure that they always call this function with `finished` set to %TRUE
             * once each population (even if no proposals need to be added).
             * Population occurs when the gtk_source_completion_provider_populate()
             * function is called.
             * @param provider a #GtkSourceCompletionProvider.
             * @param proposals The list of proposals to add.
             * @param finished Whether the provider is finished adding proposals.
             */
            add_proposals(
                provider: CompletionProvider,
                proposals: CompletionProposal[] | null,
                finished: boolean,
            ): void;
            /**
             * Get the context activation.
             * @returns The context activation.
             */
            get_activation(): CompletionActivation;
            /**
             * Get the iter at which the completion was invoked. Providers can use this
             * to determine how and if to match proposals.
             * @returns %TRUE if @iter is correctly set, %FALSE otherwise.
             */
            get_iter(): [boolean, Gtk.TextIter];
        }

        module CompletionInfo {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Window.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {}
        }

        class CompletionInfo extends Gtk.Window implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<CompletionInfo>;

            // Constructors

            constructor(properties?: Partial<CompletionInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CompletionInfo;

            // Methods

            /**
             * Moves the #GtkSourceCompletionInfo to `iter`. If `iter` is %NULL `info` is
             * moved to the cursor position. Moving will respect the #GdkGravity setting
             * of the info window and will ensure the line at `iter` is not occluded by
             * the window.
             * @param view a #GtkTextView on which the info window should be positioned.
             * @param iter a #GtkTextIter.
             */
            move_to_iter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void;

            // Inherited methods
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module CompletionItem {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProposal.ConstructorProps {
                gicon: Gio.Icon;
                icon: GdkPixbuf.Pixbuf;
                icon_name: string;
                iconName: string;
                info: string;
                label: string;
                markup: string;
                text: string;
            }
        }

        class CompletionItem extends GObject.Object implements CompletionProposal {
            static $gtype: GObject.GType<CompletionItem>;

            // Properties

            /**
             * The #GIcon for the icon to be shown for this proposal.
             */
            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            /**
             * The #GdkPixbuf for the icon to be shown for this proposal.
             */
            get icon(): GdkPixbuf.Pixbuf;
            set icon(val: GdkPixbuf.Pixbuf);
            /**
             * The icon name for the icon to be shown for this proposal.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * The icon name for the icon to be shown for this proposal.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * Optional extra information to be shown for this proposal.
             */
            get info(): string;
            set info(val: string);
            /**
             * Label to be shown for this proposal.
             */
            get label(): string;
            set label(val: string);
            /**
             * Label with markup to be shown for this proposal.
             */
            get markup(): string;
            set markup(val: string);
            /**
             * Proposal text.
             */
            get text(): string;
            set text(val: string);

            // Constructors

            constructor(properties?: Partial<CompletionItem.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): CompletionItem;

            // Methods

            set_gicon(gicon?: Gio.Icon | null): void;
            set_icon(icon?: GdkPixbuf.Pixbuf | null): void;
            set_icon_name(icon_name?: string | null): void;
            set_info(info?: string | null): void;
            set_label(label?: string | null): void;
            set_markup(markup?: string | null): void;
            set_text(text?: string | null): void;

            // Inherited methods
            /**
             * Emits the "changed" signal on `proposal`. This should be called by
             * implementations whenever the name, icon or info of the proposal has
             * changed.
             */
            changed(): void;
            /**
             * Get whether two proposal objects are the same.  This is used to (together
             * with gtk_source_completion_proposal_hash()) to match proposals in the
             * completion model. By default, it uses direct equality (g_direct_equal()).
             * @param other a #GtkSourceCompletionProposal.
             * @returns %TRUE if @proposal and @object are the same proposal
             */
            equal(other: CompletionProposal): boolean;
            /**
             * Gets the #GIcon for the icon of `proposal`.
             * @returns A #GIcon with the icon of @proposal.
             */
            get_gicon(): Gio.Icon | null;
            /**
             * Gets the #GdkPixbuf for the icon of `proposal`.
             * @returns A #GdkPixbuf with the icon of @proposal.
             */
            get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `proposal`.
             * @returns The icon name of @proposal.
             */
            get_icon_name(): string | null;
            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal. The returned string must be freed with g_free().
             * @returns a newly-allocated string containing extra information of @proposal or %NULL if no extra information is associated to @proposal.
             */
            get_info(): string | null;
            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have
             * to implement gtk_source_completion_proposal_get_markup(). The returned string
             * must be freed with g_free().
             * @returns a new string containing the label of @proposal.
             */
            get_label(): string;
            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * gtk_source_completion_proposal_get_label() if implemented. The returned string
             * must be freed with g_free().
             * @returns a new string containing the label of @proposal with markup.
             */
            get_markup(): string;
            /**
             * Gets the text of `proposal`. The text that is inserted into
             * the text buffer when the proposal is activated by the default activation.
             * You are free to implement a custom activation handler in the provider and
             * not implement this function. For more information, see
             * gtk_source_completion_provider_activate_proposal(). The returned string must
             * be freed with g_free().
             * @returns a new string containing the text of @proposal.
             */
            get_text(): string;
            /**
             * Get the hash value of `proposal`. This is used to (together with
             * gtk_source_completion_proposal_equal()) to match proposals in the completion
             * model. By default, it uses a direct hash (g_direct_hash()).
             * @returns The hash value of @proposal.
             */
            hash(): number;
            /**
             * Emits the "changed" signal on `proposal`. This should be called by
             * implementations whenever the name, icon or info of the proposal has
             * changed.
             */
            vfunc_changed(): void;
            /**
             * Get whether two proposal objects are the same.  This is used to (together
             * with gtk_source_completion_proposal_hash()) to match proposals in the
             * completion model. By default, it uses direct equality (g_direct_equal()).
             * @param other a #GtkSourceCompletionProposal.
             */
            vfunc_equal(other: CompletionProposal): boolean;
            /**
             * Gets the #GIcon for the icon of `proposal`.
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * Gets the #GdkPixbuf for the icon of `proposal`.
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `proposal`.
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal. The returned string must be freed with g_free().
             */
            vfunc_get_info(): string | null;
            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have
             * to implement gtk_source_completion_proposal_get_markup(). The returned string
             * must be freed with g_free().
             */
            vfunc_get_label(): string;
            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * gtk_source_completion_proposal_get_label() if implemented. The returned string
             * must be freed with g_free().
             */
            vfunc_get_markup(): string;
            /**
             * Gets the text of `proposal`. The text that is inserted into
             * the text buffer when the proposal is activated by the default activation.
             * You are free to implement a custom activation handler in the provider and
             * not implement this function. For more information, see
             * gtk_source_completion_provider_activate_proposal(). The returned string must
             * be freed with g_free().
             */
            vfunc_get_text(): string;
            /**
             * Get the hash value of `proposal`. This is used to (together with
             * gtk_source_completion_proposal_equal()) to match proposals in the completion
             * model. By default, it uses a direct hash (g_direct_hash()).
             */
            vfunc_hash(): number;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module CompletionWords {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, CompletionProvider.ConstructorProps {
                activation: CompletionActivation;
                icon: GdkPixbuf.Pixbuf;
                interactive_delay: number;
                interactiveDelay: number;
                minimum_word_size: number;
                minimumWordSize: number;
                name: string;
                priority: number;
                proposals_batch_size: number;
                proposalsBatchSize: number;
                scan_batch_size: number;
                scanBatchSize: number;
            }
        }

        class CompletionWords extends GObject.Object implements CompletionProvider {
            static $gtype: GObject.GType<CompletionWords>;

            // Properties

            /**
             * The type of activation.
             */
            get activation(): CompletionActivation;
            set activation(val: CompletionActivation);
            get icon(): GdkPixbuf.Pixbuf;
            set icon(val: GdkPixbuf.Pixbuf);
            get interactive_delay(): number;
            set interactive_delay(val: number);
            get interactiveDelay(): number;
            set interactiveDelay(val: number);
            get minimum_word_size(): number;
            set minimum_word_size(val: number);
            get minimumWordSize(): number;
            set minimumWordSize(val: number);
            get name(): string;
            set name(val: string);
            get priority(): number;
            set priority(val: number);
            get proposals_batch_size(): number;
            set proposals_batch_size(val: number);
            get proposalsBatchSize(): number;
            set proposalsBatchSize(val: number);
            get scan_batch_size(): number;
            set scan_batch_size(val: number);
            get scanBatchSize(): number;
            set scanBatchSize(val: number);

            // Constructors

            constructor(properties?: Partial<CompletionWords.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords;

            // Methods

            /**
             * Registers `buffer` in the `words` provider.
             * @param buffer a #GtkTextBuffer
             */
            register(buffer: Gtk.TextBuffer): void;
            /**
             * Unregisters `buffer` from the `words` provider.
             * @param buffer a #GtkTextBuffer
             */
            unregister(buffer: Gtk.TextBuffer): void;

            // Inherited methods
            /**
             * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
             * activation of `proposal` will take place which replaces the word at `iter`
             * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
             *
             * Here is how the default activation selects the boundaries of the word to
             * replace. The end of the word is `iter`. For the start of the word, it depends
             * on whether a start iter is defined for `proposal` (see
             * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
             * the start of the word is the start iter. Else, the word (as long as possible)
             * will contain only alphanumerical and the "_" characters.
             * @param proposal a #GtkSourceCompletionProposal.
             * @param iter a #GtkTextIter.
             * @returns %TRUE to indicate that the proposal activation has been handled,          %FALSE otherwise.
             */
            activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            /**
             * Get with what kind of activation the provider should be activated.
             * @returns a combination of #GtkSourceCompletionActivation.
             */
            get_activation(): CompletionActivation;
            /**
             * Gets the #GIcon for the icon of `provider`.
             * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_gicon(): Gio.Icon | null;
            /**
             * Get the #GdkPixbuf for the icon of the `provider`.
             * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `provider`.
             * @returns The icon name to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_icon_name(): string | null;
            /**
             * Get a customized info widget to show extra information of a proposal.
             * This allows for customized widgets on a proposal basis, although in general
             * providers will have the same custom widget for all their proposals and
             * `proposal` can be ignored. The implementation of this function is optional.
             *
             * If this function is not implemented, the default widget is a #GtkLabel. The
             * return value of gtk_source_completion_proposal_get_info() is used as the
             * content of the #GtkLabel.
             *
             * <note>
             *   <para>
             *     If implemented, gtk_source_completion_provider_update_info()
             *     <emphasis>must</emphasis> also be implemented.
             *   </para>
             * </note>
             * @param proposal a currently selected #GtkSourceCompletionProposal.
             * @returns a custom #GtkWidget to show extra information about @proposal, or %NULL if the provider does not have a special info widget.
             */
            get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            /**
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by the #GtkSourceCompletion:auto-complete-delay property.
             * @returns the interactive delay in milliseconds.
             */
            get_interactive_delay(): number;
            /**
             * Get the name of the provider. This should be a translatable name for
             * display to the user. For example: _("Document word completion provider"). The
             * returned string must be freed with g_free().
             * @returns a new string containing the name of the provider.
             */
            get_name(): string;
            /**
             * Get the provider priority. The priority determines the order in which
             * proposals appear in the completion popup. Higher priorities are sorted
             * before lower priorities. The default priority is 0.
             * @returns the provider priority.
             */
            get_priority(): number;
            /**
             * Get the #GtkTextIter at which the completion for `proposal` starts. When
             * implemented, this information is used to position the completion window
             * accordingly when a proposal is selected in the completion window. The
             * `proposal` text inside the completion window is aligned on `iter`.
             *
             * If this function is not implemented, the word boundary is taken to position
             * the completion window. See gtk_source_completion_provider_activate_proposal()
             * for an explanation on the word boundaries.
             *
             * When the `proposal` is activated, the default handler uses `iter` as the start
             * of the word to replace. See
             * gtk_source_completion_provider_activate_proposal() for more information.
             * @param context a #GtkSourceCompletionContext.
             * @param proposal a #GtkSourceCompletionProposal.
             * @returns %TRUE if @iter was set for @proposal, %FALSE otherwise.
             */
            get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a #GtkSourceCompletionContext.
             * @returns %TRUE if @provider matches the completion context, %FALSE otherwise.
             */
            match(context: CompletionContext): boolean;
            /**
             * Populate `context` with proposals from `provider` added with the
             * gtk_source_completion_context_add_proposals() function.
             * @param context a #GtkSourceCompletionContext.
             */
            populate(context: CompletionContext): void;
            /**
             * Update extra information shown in `info` for `proposal`.
             *
             * <note>
             *   <para>
             *     This function <emphasis>must</emphasis> be implemented when
             *     gtk_source_completion_provider_get_info_widget() is implemented.
             *   </para>
             * </note>
             * @param proposal a #GtkSourceCompletionProposal.
             * @param info a #GtkSourceCompletionInfo.
             */
            update_info(proposal: CompletionProposal, info: CompletionInfo): void;
            /**
             * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
             * activation of `proposal` will take place which replaces the word at `iter`
             * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
             *
             * Here is how the default activation selects the boundaries of the word to
             * replace. The end of the word is `iter`. For the start of the word, it depends
             * on whether a start iter is defined for `proposal` (see
             * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
             * the start of the word is the start iter. Else, the word (as long as possible)
             * will contain only alphanumerical and the "_" characters.
             * @param proposal a #GtkSourceCompletionProposal.
             * @param iter a #GtkTextIter.
             */
            vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            /**
             * Get with what kind of activation the provider should be activated.
             */
            vfunc_get_activation(): CompletionActivation;
            /**
             * Gets the #GIcon for the icon of `provider`.
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * Get the #GdkPixbuf for the icon of the `provider`.
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `provider`.
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Get a customized info widget to show extra information of a proposal.
             * This allows for customized widgets on a proposal basis, although in general
             * providers will have the same custom widget for all their proposals and
             * `proposal` can be ignored. The implementation of this function is optional.
             *
             * If this function is not implemented, the default widget is a #GtkLabel. The
             * return value of gtk_source_completion_proposal_get_info() is used as the
             * content of the #GtkLabel.
             *
             * <note>
             *   <para>
             *     If implemented, gtk_source_completion_provider_update_info()
             *     <emphasis>must</emphasis> also be implemented.
             *   </para>
             * </note>
             * @param proposal a currently selected #GtkSourceCompletionProposal.
             */
            vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            /**
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by the #GtkSourceCompletion:auto-complete-delay property.
             */
            vfunc_get_interactive_delay(): number;
            /**
             * Get the name of the provider. This should be a translatable name for
             * display to the user. For example: _("Document word completion provider"). The
             * returned string must be freed with g_free().
             */
            vfunc_get_name(): string;
            /**
             * Get the provider priority. The priority determines the order in which
             * proposals appear in the completion popup. Higher priorities are sorted
             * before lower priorities. The default priority is 0.
             */
            vfunc_get_priority(): number;
            /**
             * Get the #GtkTextIter at which the completion for `proposal` starts. When
             * implemented, this information is used to position the completion window
             * accordingly when a proposal is selected in the completion window. The
             * `proposal` text inside the completion window is aligned on `iter`.
             *
             * If this function is not implemented, the word boundary is taken to position
             * the completion window. See gtk_source_completion_provider_activate_proposal()
             * for an explanation on the word boundaries.
             *
             * When the `proposal` is activated, the default handler uses `iter` as the start
             * of the word to replace. See
             * gtk_source_completion_provider_activate_proposal() for more information.
             * @param context a #GtkSourceCompletionContext.
             * @param proposal a #GtkSourceCompletionProposal.
             */
            vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a #GtkSourceCompletionContext.
             */
            vfunc_match(context: CompletionContext): boolean;
            /**
             * Populate `context` with proposals from `provider` added with the
             * gtk_source_completion_context_add_proposals() function.
             * @param context a #GtkSourceCompletionContext.
             */
            vfunc_populate(context: CompletionContext): void;
            /**
             * Update extra information shown in `info` for `proposal`.
             *
             * <note>
             *   <para>
             *     This function <emphasis>must</emphasis> be implemented when
             *     gtk_source_completion_provider_get_info_widget() is implemented.
             *   </para>
             * </note>
             * @param proposal a #GtkSourceCompletionProposal.
             * @param info a #GtkSourceCompletionInfo.
             */
            vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module File {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                compression_type: CompressionType;
                compressionType: CompressionType;
                encoding: Encoding;
                location: Gio.File;
                newline_type: NewlineType;
                newlineType: NewlineType;
                read_only: boolean;
                readOnly: boolean;
            }
        }

        class File extends GObject.Object {
            static $gtype: GObject.GType<File>;

            // Properties

            /**
             * The compression type.
             */
            get compression_type(): CompressionType;
            /**
             * The compression type.
             */
            get compressionType(): CompressionType;
            /**
             * The character encoding, initially %NULL. After a successful file
             * loading or saving operation, the encoding is non-%NULL.
             */
            get encoding(): Encoding;
            /**
             * The location.
             */
            get location(): Gio.File;
            set location(val: Gio.File);
            /**
             * The line ending type.
             */
            get newline_type(): NewlineType;
            /**
             * The line ending type.
             */
            get newlineType(): NewlineType;
            /**
             * Whether the file is read-only or not. The value of this property is
             * not updated automatically (there is no file monitors).
             */
            get read_only(): boolean;
            /**
             * Whether the file is read-only or not. The value of this property is
             * not updated automatically (there is no file monitors).
             */
            get readOnly(): boolean;

            // Constructors

            constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): File;

            // Methods

            /**
             * Checks synchronously the file on disk, to know whether the file is externally
             * modified, or has been deleted, and whether the file is read-only.
             *
             * #GtkSourceFile doesn't create a #GFileMonitor to track those properties, so
             * this function needs to be called instead. Creating lots of #GFileMonitor's
             * would take lots of resources.
             *
             * Since this function is synchronous, it is advised to call it only on local
             * files. See gtk_source_file_is_local().
             */
            check_file_on_disk(): void;
            get_compression_type(): CompressionType;
            /**
             * The encoding is initially %NULL. After a successful file loading or saving
             * operation, the encoding is non-%NULL.
             * @returns the character encoding.
             */
            get_encoding(): Encoding;
            get_location(): Gio.File;
            get_newline_type(): NewlineType;
            /**
             * Returns whether the file has been deleted. If the
             * #GtkSourceFile:location is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * gtk_source_file_check_file_on_disk().
             * @returns whether the file has been deleted.
             */
            is_deleted(): boolean;
            /**
             * Returns whether the file is externally modified. If the
             * #GtkSourceFile:location is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * gtk_source_file_check_file_on_disk().
             * @returns whether the file is externally modified.
             */
            is_externally_modified(): boolean;
            /**
             * Returns whether the file is local. If the #GtkSourceFile:location is %NULL,
             * returns %FALSE.
             * @returns whether the file is local.
             */
            is_local(): boolean;
            /**
             * Returns whether the file is read-only. If the
             * #GtkSourceFile:location is %NULL, returns %FALSE.
             *
             * To have an up-to-date value, you must first call
             * gtk_source_file_check_file_on_disk().
             * @returns whether the file is read-only.
             */
            is_readonly(): boolean;
            /**
             * Sets the location.
             * @param location the new #GFile, or %NULL.
             */
            set_location(location?: Gio.File | null): void;
        }

        module FileLoader {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                file: File;
                input_stream: Gio.InputStream;
                inputStream: Gio.InputStream;
                location: Gio.File;
            }
        }

        class FileLoader extends GObject.Object {
            static $gtype: GObject.GType<FileLoader>;

            // Properties

            /**
             * The #GtkSourceBuffer to load the contents into. The
             * #GtkSourceFileLoader object has a weak reference to the buffer.
             */
            get buffer(): Buffer;
            /**
             * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
             * reference to the file.
             */
            get file(): File;
            /**
             * The #GInputStream to load. Useful for reading stdin. If this property
             * is set, the #GtkSourceFileLoader:location property is ignored.
             */
            get input_stream(): Gio.InputStream;
            /**
             * The #GInputStream to load. Useful for reading stdin. If this property
             * is set, the #GtkSourceFileLoader:location property is ignored.
             */
            get inputStream(): Gio.InputStream;
            /**
             * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
             * %NULL, by default the location is taken from the #GtkSourceFile at
             * construction time.
             */
            get location(): Gio.File;

            // Constructors

            constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, file: File): FileLoader;

            static new_from_stream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader;

            // Methods

            get_buffer(): Buffer;
            get_compression_type(): CompressionType;
            get_encoding(): Encoding;
            get_file(): File;
            get_input_stream(): Gio.InputStream | null;
            get_location(): Gio.File | null;
            get_newline_type(): NewlineType;
            /**
             * Loads asynchronously the file or input stream contents into the
             * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
             * function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             */
            load_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
            ): Promise<boolean>;
            /**
             * Loads asynchronously the file or input stream contents into the
             * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
             * function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            load_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileProgressCallback | null,
                progress_callback_notify: GLib.DestroyNotify | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Loads asynchronously the file or input stream contents into the
             * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
             * function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            load_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a file loading started with gtk_source_file_loader_load_async().
             *
             * If the contents has been loaded, the following #GtkSourceFile properties will
             * be updated: the location, the encoding, the newline type and the compression
             * type.
             * @param result a #GAsyncResult.
             * @returns whether the contents has been loaded successfully.
             */
            load_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the candidate encodings for the file loading. The encodings are tried in
             * the same order as the list.
             *
             * For convenience, `candidate_encodings` can contain duplicates. Only the first
             * occurrence of a duplicated encoding is kept in the list.
             *
             * By default the candidate encodings are (in that order in the list):
             * 1. If set, the #GtkSourceFile's encoding as returned by
             * gtk_source_file_get_encoding().
             * 2. The default candidates as returned by
             * gtk_source_encoding_get_default_candidates().
             * @param candidate_encodings a list of   #GtkSourceEncoding<!-- -->s.
             */
            set_candidate_encodings(candidate_encodings: Encoding[]): void;
        }

        module FileSaver {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                compression_type: CompressionType;
                compressionType: CompressionType;
                encoding: Encoding;
                file: File;
                flags: FileSaverFlags;
                location: Gio.File;
                newline_type: NewlineType;
                newlineType: NewlineType;
            }
        }

        class FileSaver extends GObject.Object {
            static $gtype: GObject.GType<FileSaver>;

            // Properties

            /**
             * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
             * weak reference to the buffer.
             */
            get buffer(): Buffer;
            /**
             * The compression type.
             */
            get compression_type(): CompressionType;
            set compression_type(val: CompressionType);
            /**
             * The compression type.
             */
            get compressionType(): CompressionType;
            set compressionType(val: CompressionType);
            /**
             * The file's encoding.
             */
            get encoding(): Encoding;
            set encoding(val: Encoding);
            /**
             * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
             * reference to the file.
             */
            get file(): File;
            /**
             * File saving flags.
             */
            get flags(): FileSaverFlags;
            set flags(val: FileSaverFlags);
            /**
             * The #GFile where to save the buffer. By default the location is taken
             * from the #GtkSourceFile at construction time.
             */
            get location(): Gio.File;
            /**
             * The newline type.
             */
            get newline_type(): NewlineType;
            set newline_type(val: NewlineType);
            /**
             * The newline type.
             */
            get newlineType(): NewlineType;
            set newlineType(val: NewlineType);

            // Fields

            object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, file: File): FileSaver;

            static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

            // Methods

            get_buffer(): Buffer;
            get_compression_type(): CompressionType;
            get_encoding(): Encoding;
            get_file(): File;
            get_flags(): FileSaverFlags;
            get_location(): Gio.File;
            get_newline_type(): NewlineType;
            /**
             * Saves asynchronously the buffer into the file. See the #GAsyncResult
             * documentation to know how to use this function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             */
            save_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
            ): Promise<boolean>;
            /**
             * Saves asynchronously the buffer into the file. See the #GAsyncResult
             * documentation to know how to use this function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            save_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                progress_callback: Gio.FileProgressCallback | null,
                progress_callback_notify: GLib.DestroyNotify | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Saves asynchronously the buffer into the file. See the #GAsyncResult
             * documentation to know how to use this function.
             * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
             * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
             * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
             */
            save_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                progress_callback?: Gio.FileProgressCallback | null,
                progress_callback_notify?: GLib.DestroyNotify | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes a file saving started with gtk_source_file_saver_save_async().
             *
             * If the file has been saved successfully, the following #GtkSourceFile
             * properties will be updated: the location, the encoding, the newline type and
             * the compression type.
             *
             * Since the 3.20 version, gtk_text_buffer_set_modified() is called with %FALSE
             * if the file has been saved successfully.
             * @param result a #GAsyncResult.
             * @returns whether the file was saved successfully.
             */
            save_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the compression type. By default the compression type is taken from the
             * #GtkSourceFile.
             * @param compression_type the new compression type.
             */
            set_compression_type(compression_type: CompressionType | null): void;
            /**
             * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
             * By default the encoding is taken from the #GtkSourceFile.
             * @param encoding the new encoding, or %NULL for UTF-8.
             */
            set_encoding(encoding?: Encoding | null): void;
            set_flags(flags: FileSaverFlags | null): void;
            /**
             * Sets the newline type. By default the newline type is taken from the
             * #GtkSourceFile.
             * @param newline_type the new newline type.
             */
            set_newline_type(newline_type: NewlineType | null): void;
        }

        module Gutter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                view: View;
                window_type: Gtk.TextWindowType;
                windowType: Gtk.TextWindowType;
            }
        }

        class Gutter extends GObject.Object {
            static $gtype: GObject.GType<Gutter>;

            // Properties

            /**
             * The #GtkSourceView of the gutter.
             */
            get view(): View;
            /**
             * The text window type on which the window is placed.
             */
            get window_type(): Gtk.TextWindowType;
            /**
             * The text window type on which the window is placed.
             */
            get windowType(): Gtk.TextWindowType;

            // Constructors

            constructor(properties?: Partial<Gutter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Finds the #GtkSourceGutterRenderer at (x, y).
             * @param x The x position to get identified.
             * @param y The y position to get identified.
             * @returns the renderer at (x, y) or %NULL.
             */
            get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
            get_view(): View;
            get_window_type(): Gtk.TextWindowType;
            /**
             * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
             * claims its ownership. Otherwise just increases renderer's reference count.
             * `renderer` cannot be already inserted to another gutter.
             * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
             * @param position the renderer position.
             * @returns %TRUE if operation succeeded. Otherwise %FALSE.
             */
            insert(renderer: GutterRenderer, position: number): boolean;
            /**
             * Invalidates the drawable area of the gutter. You can use this to force a
             * redraw of the gutter if something has changed and needs to be redrawn.
             */
            queue_draw(): void;
            /**
             * Removes `renderer` from `gutter`.
             * @param renderer a #GtkSourceGutterRenderer.
             */
            remove(renderer: GutterRenderer): void;
            /**
             * Reorders `renderer` in `gutter` to new `position`.
             * @param renderer a #GtkCellRenderer.
             * @param position the new renderer position.
             */
            reorder(renderer: GutterRenderer, position: number): void;
        }

        module GutterRenderer {
            // Signal callback interfaces

            interface Activate {
                (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
            }

            interface QueryActivatable {
                (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
            }

            interface QueryData {
                (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
            }

            interface QueryTooltip {
                (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
            }

            interface QueueDraw {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
                alignment_mode: GutterRendererAlignmentMode;
                alignmentMode: GutterRendererAlignmentMode;
                background_rgba: Gdk.RGBA;
                backgroundRgba: Gdk.RGBA;
                background_set: boolean;
                backgroundSet: boolean;
                size: number;
                view: Gtk.TextView;
                visible: boolean;
                window_type: Gtk.TextWindowType;
                windowType: Gtk.TextWindowType;
                xalign: number;
                xpad: number;
                yalign: number;
                ypad: number;
            }
        }

        abstract class GutterRenderer extends GObject.InitiallyUnowned {
            static $gtype: GObject.GType<GutterRenderer>;

            // Properties

            /**
             * The alignment mode of the renderer. This can be used to indicate
             * that in the case a cell spans multiple lines (due to text wrapping)
             * the alignment should work on either the full cell, the first line
             * or the last line.
             */
            get alignment_mode(): GutterRendererAlignmentMode;
            set alignment_mode(val: GutterRendererAlignmentMode);
            /**
             * The alignment mode of the renderer. This can be used to indicate
             * that in the case a cell spans multiple lines (due to text wrapping)
             * the alignment should work on either the full cell, the first line
             * or the last line.
             */
            get alignmentMode(): GutterRendererAlignmentMode;
            set alignmentMode(val: GutterRendererAlignmentMode);
            get background_rgba(): Gdk.RGBA;
            set background_rgba(val: Gdk.RGBA);
            get backgroundRgba(): Gdk.RGBA;
            set backgroundRgba(val: Gdk.RGBA);
            get background_set(): boolean;
            set background_set(val: boolean);
            get backgroundSet(): boolean;
            set backgroundSet(val: boolean);
            get size(): number;
            set size(val: number);
            /**
             * The view on which the renderer is placed.
             */
            get view(): Gtk.TextView;
            /**
             * The visibility of the renderer.
             */
            get visible(): boolean;
            set visible(val: boolean);
            /**
             * The window type of the view on which the renderer is placed (left,
             * or right).
             */
            get window_type(): Gtk.TextWindowType;
            /**
             * The window type of the view on which the renderer is placed (left,
             * or right).
             */
            get windowType(): Gtk.TextWindowType;
            /**
             * The horizontal alignment of the renderer. Set to 0 for a left
             * alignment. 1 for a right alignment. And 0.5 for centering the cells.
             * A value lower than 0 doesn't modify the alignment.
             */
            get xalign(): number;
            set xalign(val: number);
            /**
             * The left and right padding of the renderer.
             */
            get xpad(): number;
            set xpad(val: number);
            /**
             * The vertical alignment of the renderer. Set to 0 for a top
             * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
             * A value lower than 0 doesn't modify the alignment.
             */
            get yalign(): number;
            set yalign(val: number);
            /**
             * The top and bottom padding of the renderer.
             */
            get ypad(): number;
            set ypad(val: number);

            // Constructors

            constructor(properties?: Partial<GutterRenderer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'activate',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void,
            ): number;
            connect_after(
                signal: 'activate',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void,
            ): number;
            emit(signal: 'activate', iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
            connect(
                signal: 'query-activatable',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean,
            ): number;
            connect_after(
                signal: 'query-activatable',
                callback: (_source: this, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean,
            ): number;
            emit(signal: 'query-activatable', iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
            connect(
                signal: 'query-data',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void,
            ): number;
            connect_after(
                signal: 'query-data',
                callback: (_source: this, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void,
            ): number;
            emit(signal: 'query-data', start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
            connect(
                signal: 'query-tooltip',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    area: Gdk.Rectangle,
                    x: number,
                    y: number,
                    tooltip: Gtk.Tooltip,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'query-tooltip',
                callback: (
                    _source: this,
                    iter: Gtk.TextIter,
                    area: Gdk.Rectangle,
                    x: number,
                    y: number,
                    tooltip: Gtk.Tooltip,
                ) => boolean,
            ): number;
            emit(
                signal: 'query-tooltip',
                iter: Gtk.TextIter,
                area: Gdk.Rectangle,
                x: number,
                y: number,
                tooltip: Gtk.Tooltip,
            ): void;
            connect(signal: 'queue-draw', callback: (_source: this) => void): number;
            connect_after(signal: 'queue-draw', callback: (_source: this) => void): number;
            emit(signal: 'queue-draw'): void;

            // Virtual methods

            /**
             * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
             * called from #GtkSourceGutter and should never have to be called manually.
             * @param iter a #GtkTextIter at the start of the line where the renderer is activated
             * @param area a #GdkRectangle of the cell area where the renderer is activated
             * @param event the event that triggered the activation
             */
            vfunc_activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
            /**
             * Called when drawing a region begins. The region to be drawn is indicated
             * by `start` and `end`. The purpose is to allow the implementation to precompute
             * some state before the draw method is called for each cell.
             * @param cr a #cairo_t
             * @param background_area a #GdkRectangle
             * @param cell_area a #GdkRectangle
             * @param start a #GtkTextIter
             * @param end a #GtkTextIter
             */
            vfunc_begin(
                cr: cairo.Context,
                background_area: Gdk.Rectangle,
                cell_area: Gdk.Rectangle,
                start: Gtk.TextIter,
                end: Gtk.TextIter,
            ): void;
            /**
             * This is called when the text buffer changes for `renderer`.
             * @param old_buffer the old #GtkTextBuffer.
             */
            vfunc_change_buffer(old_buffer?: Gtk.TextBuffer | null): void;
            /**
             * This is called when the text view changes for `renderer`.
             * @param old_view the old #GtkTextView.
             */
            vfunc_change_view(old_view?: Gtk.TextView | null): void;
            /**
             * Main renderering method. Implementations should implement this method to draw
             * onto the cairo context. The `background_area` indicates the total area of the
             * cell to be drawn. The `cell_area` indicates the area where content can be
             * drawn (text, images, etc).
             *
             * The `background_area` is the `cell_area` plus the padding on each side (two
             * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
             * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
             * inside `background_area)`.
             *
             * The `state` argument indicates the current state of the renderer and should
             * be taken into account to properly draw the different possible states
             * (cursor, prelit, selected) if appropriate.
             * @param cr the cairo render context
             * @param background_area a #GdkRectangle indicating the total area to be drawn
             * @param cell_area a #GdkRectangle indicating the area to draw content
             * @param start a #GtkTextIter
             * @param end a #GtkTextIter
             * @param state a #GtkSourceGutterRendererState
             */
            vfunc_draw(
                cr: cairo.Context,
                background_area: Gdk.Rectangle,
                cell_area: Gdk.Rectangle,
                start: Gtk.TextIter,
                end: Gtk.TextIter,
                state: GutterRendererState,
            ): void;
            /**
             * Called when drawing a region of lines has ended.
             */
            vfunc_end(): void;
            /**
             * Get whether the renderer is activatable at the location in `event`. This is
             * called from #GtkSourceGutter to determine whether a renderer is activatable
             * using the mouse pointer.
             * @param iter a #GtkTextIter at the start of the line to be activated
             * @param area a #GdkRectangle of the cell area to be activated
             * @param event the event that triggered the query
             */
            vfunc_query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
            /**
             * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
             * to query for data just before rendering a cell. This is called from the
             * #GtkSourceGutter.  Implementations can override the default signal handler or
             * can connect a signal handler externally to the
             * #GtkSourceGutterRenderer::query-data signal.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param state a #GtkSourceGutterRendererState.
             */
            vfunc_query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void;
            /**
             * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
             * called from #GtkSourceGutter. Implementations can override the default signal
             * handler or can connect to the signal externally.
             * @param iter a #GtkTextIter.
             * @param area a #GdkRectangle.
             * @param x The x position of the tooltip.
             * @param y The y position of the tooltip.
             * @param tooltip a #GtkTooltip.
             */
            vfunc_query_tooltip(
                iter: Gtk.TextIter,
                area: Gdk.Rectangle,
                x: number,
                y: number,
                tooltip: Gtk.Tooltip,
            ): boolean;
            /**
             * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
             * this from an implementation to inform that the renderer has changed such that
             * it needs to redraw.
             */
            vfunc_queue_draw(): void;

            // Methods

            /**
             * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
             * called from #GtkSourceGutter and should never have to be called manually.
             * @param iter a #GtkTextIter at the start of the line where the renderer is activated
             * @param area a #GdkRectangle of the cell area where the renderer is activated
             * @param event the event that triggered the activation
             */
            activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void;
            /**
             * Called when drawing a region begins. The region to be drawn is indicated
             * by `start` and `end`. The purpose is to allow the implementation to precompute
             * some state before the draw method is called for each cell.
             * @param cr a #cairo_t
             * @param background_area a #GdkRectangle
             * @param cell_area a #GdkRectangle
             * @param start a #GtkTextIter
             * @param end a #GtkTextIter
             */
            begin(
                cr: cairo.Context,
                background_area: Gdk.Rectangle,
                cell_area: Gdk.Rectangle,
                start: Gtk.TextIter,
                end: Gtk.TextIter,
            ): void;
            /**
             * Main renderering method. Implementations should implement this method to draw
             * onto the cairo context. The `background_area` indicates the total area of the
             * cell to be drawn. The `cell_area` indicates the area where content can be
             * drawn (text, images, etc).
             *
             * The `background_area` is the `cell_area` plus the padding on each side (two
             * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
             * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
             * inside `background_area)`.
             *
             * The `state` argument indicates the current state of the renderer and should
             * be taken into account to properly draw the different possible states
             * (cursor, prelit, selected) if appropriate.
             * @param cr the cairo render context
             * @param background_area a #GdkRectangle indicating the total area to be drawn
             * @param cell_area a #GdkRectangle indicating the area to draw content
             * @param start a #GtkTextIter
             * @param end a #GtkTextIter
             * @param state a #GtkSourceGutterRendererState
             */
            draw(
                cr: cairo.Context,
                background_area: Gdk.Rectangle,
                cell_area: Gdk.Rectangle,
                start: Gtk.TextIter,
                end: Gtk.TextIter,
                state: GutterRendererState | null,
            ): void;
            /**
             * Called when drawing a region of lines has ended.
             */
            end(): void;
            /**
             * Get the x-alignment and y-alignment of the gutter renderer.
             */
            get_alignment(): [number, number];
            /**
             * Get the alignment mode. The alignment mode describes the manner in which the
             * renderer is aligned (see :xalign and :yalign).
             * @returns a #GtkSourceGutterRendererAlignmentMode
             */
            get_alignment_mode(): GutterRendererAlignmentMode;
            /**
             * Get the background color of the renderer.
             * @returns %TRUE if the background color is set, %FALSE otherwise
             */
            get_background(): [boolean, Gdk.RGBA | null];
            /**
             * Get the x-padding and y-padding of the gutter renderer.
             */
            get_padding(): [number, number];
            /**
             * Get the size of the renderer.
             * @returns the size of the renderer.
             */
            get_size(): number;
            /**
             * Get the view associated to the gutter renderer
             * @returns a #GtkTextView
             */
            get_view(): Gtk.TextView;
            /**
             * Get whether the gutter renderer is visible.
             * @returns %TRUE if the renderer is visible, %FALSE otherwise
             */
            get_visible(): boolean;
            /**
             * Get the #GtkTextWindowType associated with the gutter renderer.
             * @returns a #GtkTextWindowType
             */
            get_window_type(): Gtk.TextWindowType;
            /**
             * Get whether the renderer is activatable at the location in `event`. This is
             * called from #GtkSourceGutter to determine whether a renderer is activatable
             * using the mouse pointer.
             * @param iter a #GtkTextIter at the start of the line to be activated
             * @param area a #GdkRectangle of the cell area to be activated
             * @param event the event that triggered the query
             * @returns %TRUE if the renderer can be activated, %FALSE otherwise
             */
            query_activatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean;
            /**
             * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
             * to query for data just before rendering a cell. This is called from the
             * #GtkSourceGutter.  Implementations can override the default signal handler or
             * can connect a signal handler externally to the
             * #GtkSourceGutterRenderer::query-data signal.
             * @param start a #GtkTextIter.
             * @param end a #GtkTextIter.
             * @param state a #GtkSourceGutterRendererState.
             */
            query_data(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState | null): void;
            /**
             * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
             * called from #GtkSourceGutter. Implementations can override the default signal
             * handler or can connect to the signal externally.
             * @param iter a #GtkTextIter.
             * @param area a #GdkRectangle.
             * @param x The x position of the tooltip.
             * @param y The y position of the tooltip.
             * @param tooltip a #GtkTooltip.
             * @returns %TRUE if the tooltip has been set, %FALSE otherwise
             */
            query_tooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean;
            /**
             * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
             * this from an implementation to inform that the renderer has changed such that
             * it needs to redraw.
             */
            queue_draw(): void;
            /**
             * Set the alignment of the gutter renderer. Both `xalign` and `yalign` can be
             * -1, which means the values will not be changed (this allows changing only
             * one of the values).
             *
             * `xalign` is the horizontal alignment. Set to 0 for a left alignment. 1 for a
             * right alignment. And 0.5 for centering the cells. `yalign` is the vertical
             * alignment. Set to 0 for a top alignment. 1 for a bottom alignment.
             * @param xalign the x-alignment
             * @param yalign the y-alignment
             */
            set_alignment(xalign: number, yalign: number): void;
            /**
             * Set the alignment mode. The alignment mode describes the manner in which the
             * renderer is aligned (see :xalign and :yalign).
             * @param mode a #GtkSourceGutterRendererAlignmentMode
             */
            set_alignment_mode(mode: GutterRendererAlignmentMode | null): void;
            /**
             * Set the background color of the renderer. If `color` is set to %NULL, the
             * renderer will not have a background color.
             * @param color a #GdkRGBA or %NULL
             */
            set_background(color?: Gdk.RGBA | null): void;
            /**
             * Set the padding of the gutter renderer. Both `xpad` and `ypad` can be
             * -1, which means the values will not be changed (this allows changing only
             * one of the values).
             *
             * `xpad` is the left and right padding. `ypad` is the top and bottom padding.
             * @param xpad the x-padding
             * @param ypad the y-padding
             */
            set_padding(xpad: number, ypad: number): void;
            /**
             * Sets the size of the renderer. A value of -1 specifies that the size
             * is to be determined dynamically.
             * @param size the size
             */
            set_size(size: number): void;
            /**
             * Set whether the gutter renderer is visible.
             * @param visible the visibility
             */
            set_visible(visible: boolean): void;
        }

        module GutterRendererPixbuf {
            // Constructor properties interface

            interface ConstructorProps extends GutterRenderer.ConstructorProps {
                gicon: Gio.Icon;
                icon_name: string;
                iconName: string;
                pixbuf: GdkPixbuf.Pixbuf;
            }
        }

        class GutterRendererPixbuf extends GutterRenderer {
            static $gtype: GObject.GType<GutterRendererPixbuf>;

            // Properties

            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            get icon_name(): string;
            set icon_name(val: string);
            get iconName(): string;
            set iconName(val: string);
            get pixbuf(): GdkPixbuf.Pixbuf;
            set pixbuf(val: GdkPixbuf.Pixbuf);

            // Constructors

            constructor(properties?: Partial<GutterRendererPixbuf.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GutterRendererPixbuf;

            // Methods

            /**
             * Get the gicon of the renderer
             * @returns a #GIcon
             */
            get_gicon(): Gio.Icon;
            get_icon_name(): string;
            /**
             * Get the pixbuf of the renderer.
             * @returns a #GdkPixbuf
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            set_gicon(icon?: Gio.Icon | null): void;
            set_icon_name(icon_name?: string | null): void;
            set_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
        }

        module GutterRendererText {
            // Constructor properties interface

            interface ConstructorProps extends GutterRenderer.ConstructorProps {
                markup: string;
                text: string;
            }
        }

        class GutterRendererText extends GutterRenderer {
            static $gtype: GObject.GType<GutterRendererText>;

            // Properties

            get markup(): string;
            set markup(val: string);
            get text(): string;
            set text(val: string);

            // Constructors

            constructor(properties?: Partial<GutterRendererText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): GutterRendererText;

            // Methods

            /**
             * Measures the text provided using the pango layout used by the
             * #GtkSourceGutterRendererText.
             * @param text the text to measure.
             */
            measure(text: string): [number, number];
            /**
             * Measures the pango markup provided using the pango layout used by the
             * #GtkSourceGutterRendererText.
             * @param markup the pango markup to measure.
             */
            measure_markup(markup: string): [number, number];
            set_markup(markup: string, length: number): void;
            set_text(text: string, length: number): void;
        }

        module Language {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                hidden: boolean;
                id: string;
                name: string;
                section: string;
            }
        }

        class Language extends GObject.Object {
            static $gtype: GObject.GType<Language>;

            // Properties

            get hidden(): boolean;
            get id(): string;
            get name(): string;
            get section(): string;

            // Constructors

            constructor(properties?: Partial<Language.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the globs associated to this language. This is just
             * an utility wrapper around gtk_source_language_get_metadata() to
             * retrieve the "globs" metadata property and split it into an array.
             * @returns a newly-allocated %NULL terminated array containing the globs or %NULL if no globs are found. The returned array must be freed with g_strfreev().
             */
            get_globs(): string[] | null;
            /**
             * Returns whether the language should be hidden from the user.
             * @returns %TRUE if the language should be hidden, %FALSE otherwise.
             */
            get_hidden(): boolean;
            /**
             * Returns the ID of the language. The ID is not locale-dependent.
             * The returned string is owned by `language` and should not be freed
             * or modified.
             * @returns the ID of @language.
             */
            get_id(): string;
            get_metadata(name: string): string | null;
            /**
             * Returns the mime types associated to this language. This is just
             * an utility wrapper around gtk_source_language_get_metadata() to
             * retrieve the "mimetypes" metadata property and split it into an
             * array.
             * @returns a newly-allocated %NULL terminated array containing the mime types or %NULL if no mime types are found. The returned array must be freed with g_strfreev().
             */
            get_mime_types(): string[] | null;
            /**
             * Returns the localized name of the language.
             * The returned string is owned by `language` and should not be freed
             * or modified.
             * @returns the name of @language.
             */
            get_name(): string;
            /**
             * Returns the localized section of the language.
             * Each language belong to a section (ex. HTML belogs to the
             * Markup section).
             * The returned string is owned by `language` and should not be freed
             * or modified.
             * @returns the section of @language.
             */
            get_section(): string;
            /**
             * Returns the ID of the style to use if the specified `style_id`
             * is not present in the current style scheme.
             * @param style_id a style ID.
             * @returns the ID of the style to use if the specified @style_id is not present in the current style scheme or %NULL if the style has no fallback defined. The returned string is owned by the @language and must not be modified.
             */
            get_style_fallback(style_id: string): string | null;
            /**
             * Returns the ids of the styles defined by this `language`.
             * @returns a newly-allocated %NULL terminated array containing ids of the styles defined by this @language or %NULL if no style is defined. The returned array must be freed with g_strfreev().
             */
            get_style_ids(): string[] | null;
            /**
             * Returns the name of the style with ID `style_id` defined by this `language`.
             * @param style_id a style ID.
             * @returns the name of the style with ID @style_id defined by this @language or %NULL if the style has no name or there is no style with ID @style_id defined by this @language. The returned string is owned by the @language and must not be modified.
             */
            get_style_name(style_id: string): string | null;
        }

        module LanguageManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                language_ids: string[];
                languageIds: string[];
                search_path: string[];
                searchPath: string[];
            }
        }

        class LanguageManager extends GObject.Object {
            static $gtype: GObject.GType<LanguageManager>;

            // Properties

            get language_ids(): string[];
            get languageIds(): string[];
            get search_path(): string[];
            set search_path(val: string[]);
            get searchPath(): string[];
            set searchPath(val: string[]);

            // Constructors

            constructor(properties?: Partial<LanguageManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): LanguageManager;

            // Static methods

            /**
             * Returns the default #GtkSourceLanguageManager instance.
             */
            static get_default(): LanguageManager;

            // Methods

            /**
             * Gets the #GtkSourceLanguage identified by the given `id` in the language
             * manager.
             * @param id a language id.
             * @returns a #GtkSourceLanguage, or %NULL if there is no language identified by the given @id. Return value is owned by @lm and should not be freed.
             */
            get_language(id: string): Language | null;
            /**
             * Returns the ids of the available languages.
             * @returns a %NULL-terminated array of strings containing the ids of the available languages or %NULL if no language is available. The array is sorted alphabetically according to the language name. The array is owned by @lm and must not be modified.
             */
            get_language_ids(): string[] | null;
            /**
             * Gets the list directories where `lm` looks for language files.
             * @returns %NULL-terminated array containg a list of language files directories. The array is owned by @lm and must not be modified.
             */
            get_search_path(): string[];
            /**
             * Picks a #GtkSourceLanguage for given file name and content type,
             * according to the information in lang files. Either `filename` or
             * `content_type` may be %NULL. This function can be used as follows:
             *
             * <informalexample><programlisting>
             *   GtkSourceLanguage *lang;
             *   lang = gtk_source_language_manager_guess_language (filename, NULL);
             *   gtk_source_buffer_set_language (buffer, lang);
             * </programlisting></informalexample>
             *
             * or
             *
             * <informalexample><programlisting>
             *   GtkSourceLanguage *lang = NULL;
             *   gboolean result_uncertain;
             *   gchar *content_type;
             *
             *   content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
             *   if (result_uncertain)
             *     {
             *       g_free (content_type);
             *       content_type = NULL;
             *     }
             *
             *   lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
             *   gtk_source_buffer_set_language (buffer, lang);
             *
             *   g_free (content_type);
             * </programlisting></informalexample>
             *
             * etc. Use gtk_source_language_get_mime_types() and gtk_source_language_get_globs()
             * if you need full control over file -> language mapping.
             * @param filename a filename in Glib filename encoding, or %NULL.
             * @param content_type a content type (as in GIO API), or %NULL.
             * @returns a #GtkSourceLanguage, or %NULL if there is no suitable language for given @filename and/or @content_type. Return value is owned by @lm and should not be freed.
             */
            guess_language(filename?: string | null, content_type?: string | null): Language | null;
            /**
             * Sets the list of directories where the `lm` looks for
             * language files.
             * If `dirs` is %NULL, the search path is reset to default.
             *
             * <note>
             *   <para>
             *     At the moment this function can be called only before the
             *     language files are loaded for the first time. In practice
             *     to set a custom search path for a #GtkSourceLanguageManager,
             *     you have to call this function right after creating it.
             *   </para>
             * </note>
             * @param dirs a %NULL-terminated array of strings or %NULL.
             */
            set_search_path(dirs?: string[] | null): void;
        }

        module Map {
            // Constructor properties interface

            interface ConstructorProps
                extends View.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                font_desc: Pango.FontDescription;
                fontDesc: Pango.FontDescription;
                view: View;
            }
        }

        class Map extends View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<Map>;

            // Properties

            get font_desc(): Pango.FontDescription;
            set font_desc(val: Pango.FontDescription);
            get fontDesc(): Pango.FontDescription;
            set fontDesc(val: Pango.FontDescription);
            get view(): View;
            set view(val: View);

            // Constructors

            constructor(properties?: Partial<Map.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Map;

            // Methods

            /**
             * Gets the #GtkSourceMap:view property, which is the view this widget is mapping.
             * @returns a #GtkSourceView or %NULL.
             */
            get_view(): View | null;
            /**
             * Sets the view that `map` will be doing the mapping to.
             * @param view a #GtkSourceView
             */
            set_view(view: View): void;

            // Inherited methods
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module Mark {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextMark.ConstructorProps {
                category: string;
            }
        }

        class Mark extends Gtk.TextMark {
            static $gtype: GObject.GType<Mark>;

            // Properties

            /**
             * The category of the #GtkSourceMark, classifies the mark and controls
             * which pixbuf is used and with which priority it is drawn.
             */
            get category(): string;

            // Constructors

            constructor(properties?: Partial<Mark.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name: string | null, category: string): Mark;
            // Conflicted with Gtk.TextMark.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Returns the mark category.
             * @returns the category of the #GtkSourceMark.
             */
            get_category(): string;
            /**
             * Returns the next #GtkSourceMark in the buffer or %NULL if the mark
             * was not added to a buffer. If there is no next mark, %NULL will be returned.
             *
             * If `category` is %NULL, looks for marks of any category.
             * @param category a string specifying the mark category, or %NULL.
             * @returns the next #GtkSourceMark, or %NULL.
             */
            next(category?: string | null): Mark | null;
            /**
             * Returns the previous #GtkSourceMark in the buffer or %NULL if the mark
             * was not added to a buffer. If there is no previous mark, %NULL is returned.
             *
             * If `category` is %NULL, looks for marks of any category
             * @param category a string specifying the mark category, or %NULL.
             * @returns the previous #GtkSourceMark, or %NULL.
             */
            prev(category: string): Mark | null;
        }

        module MarkAttributes {
            // Signal callback interfaces

            interface QueryTooltipMarkup {
                (mark: Mark): string;
            }

            interface QueryTooltipText {
                (mark: Mark): string;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                background: Gdk.RGBA;
                gicon: Gio.Icon;
                icon_name: string;
                iconName: string;
                pixbuf: GdkPixbuf.Pixbuf;
            }
        }

        class MarkAttributes extends GObject.Object {
            static $gtype: GObject.GType<MarkAttributes>;

            // Properties

            /**
             * A color used for background of a line.
             */
            get background(): Gdk.RGBA;
            set background(val: Gdk.RGBA);
            /**
             * A #GIcon that may be a base of a rendered icon.
             */
            get gicon(): Gio.Icon;
            set gicon(val: Gio.Icon);
            /**
             * An icon name that may be a base of a rendered icon.
             */
            get icon_name(): string;
            set icon_name(val: string);
            /**
             * An icon name that may be a base of a rendered icon.
             */
            get iconName(): string;
            set iconName(val: string);
            /**
             * A #GdkPixbuf that may be a base of a rendered icon.
             */
            get pixbuf(): GdkPixbuf.Pixbuf;
            set pixbuf(val: GdkPixbuf.Pixbuf);

            // Constructors

            constructor(properties?: Partial<MarkAttributes.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): MarkAttributes;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;
            connect_after(signal: 'query-tooltip-markup', callback: (_source: this, mark: Mark) => string): number;
            emit(signal: 'query-tooltip-markup', mark: Mark): void;
            connect(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;
            connect_after(signal: 'query-tooltip-text', callback: (_source: this, mark: Mark) => string): number;
            emit(signal: 'query-tooltip-text', mark: Mark): void;

            // Methods

            /**
             * Stores background color in `background`.
             * @returns whether background color for @attributes was set.
             */
            get_background(): [boolean, Gdk.RGBA];
            /**
             * Gets a #GIcon to be used as a base for rendered icon. Note that the icon can
             * be %NULL if it wasn't set earlier.
             * @returns An icon. The icon belongs to @attributes and should not be unreffed.
             */
            get_gicon(): Gio.Icon;
            /**
             * Gets a name of an icon to be used as a base for rendered icon. Note that the
             * icon name can be %NULL if it wasn't set earlier.
             * @returns An icon name. The string belongs to @attributes and should not be freed.
             */
            get_icon_name(): string;
            /**
             * Gets a #GdkPixbuf to be used as a base for rendered icon. Note that the
             * pixbuf can be %NULL if it wasn't set earlier.
             * @returns A pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
             */
            get_pixbuf(): GdkPixbuf.Pixbuf;
            /**
             * Queries for a tooltip by emitting
             * a #GtkSourceMarkAttributes::query-tooltip-markup signal. The tooltip may contain
             * a markup.
             * @param mark a #GtkSourceMark.
             * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
             */
            get_tooltip_markup(mark: Mark): string;
            /**
             * Queries for a tooltip by emitting
             * a #GtkSourceMarkAttributes::query-tooltip-text signal. The tooltip is a plain
             * text.
             * @param mark a #GtkSourceMark.
             * @returns A tooltip. The returned string should be freed by using g_free() when done with it.
             */
            get_tooltip_text(mark: Mark): string;
            /**
             * Renders an icon of given size. The base of the icon is set by the last call
             * to one of: gtk_source_mark_attributes_set_pixbuf(),
             * gtk_source_mark_attributes_set_gicon() or
             * gtk_source_mark_attributes_set_icon_name(). `size` cannot be lower than 1.
             * @param widget widget of which style settings may be used.
             * @param size size of the rendered icon.
             * @returns A rendered pixbuf. The pixbuf belongs to @attributes and should not be unreffed.
             */
            render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
            /**
             * Sets background color to the one given in `background`.
             * @param background a #GdkRGBA.
             */
            set_background(background: Gdk.RGBA): void;
            /**
             * Sets an icon to be used as a base for rendered icon.
             * @param gicon a #GIcon to be used.
             */
            set_gicon(gicon: Gio.Icon): void;
            /**
             * Sets a name of an icon to be used as a base for rendered icon.
             * @param icon_name name of an icon to be used.
             */
            set_icon_name(icon_name: string): void;
            /**
             * Sets a pixbuf to be used as a base for rendered icon.
             * @param pixbuf a #GdkPixbuf to be used.
             */
            set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        }

        module PrintCompositor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                body_font_name: string;
                bodyFontName: string;
                buffer: Buffer;
                footer_font_name: string;
                footerFontName: string;
                header_font_name: string;
                headerFontName: string;
                highlight_syntax: boolean;
                highlightSyntax: boolean;
                line_numbers_font_name: string;
                lineNumbersFontName: string;
                n_pages: number;
                nPages: number;
                print_footer: boolean;
                printFooter: boolean;
                print_header: boolean;
                printHeader: boolean;
                print_line_numbers: number;
                printLineNumbers: number;
                tab_width: number;
                tabWidth: number;
                wrap_mode: Gtk.WrapMode;
                wrapMode: Gtk.WrapMode;
            }
        }

        class PrintCompositor extends GObject.Object {
            static $gtype: GObject.GType<PrintCompositor>;

            // Properties

            /**
             * Name of the font used for the text body.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get body_font_name(): string;
            set body_font_name(val: string);
            /**
             * Name of the font used for the text body.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get bodyFontName(): string;
            set bodyFontName(val: string);
            /**
             * The GtkSourceBuffer object to print.
             */
            get buffer(): Buffer;
            /**
             * Name of the font used to print page footer.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get footer_font_name(): string;
            set footer_font_name(val: string);
            /**
             * Name of the font used to print page footer.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get footerFontName(): string;
            set footerFontName(val: string);
            /**
             * Name of the font used to print page header.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get header_font_name(): string;
            set header_font_name(val: string);
            /**
             * Name of the font used to print page header.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get headerFontName(): string;
            set headerFontName(val: string);
            /**
             * Whether to print the document with highlighted syntax.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get highlight_syntax(): boolean;
            set highlight_syntax(val: boolean);
            /**
             * Whether to print the document with highlighted syntax.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get highlightSyntax(): boolean;
            set highlightSyntax(val: boolean);
            /**
             * Name of the font used to print line numbers on the left margin.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get line_numbers_font_name(): string;
            set line_numbers_font_name(val: string);
            /**
             * Name of the font used to print line numbers on the left margin.
             * If this property is unspecified, the text body font is used.
             *
             * Accepted values are strings representing a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get lineNumbersFontName(): string;
            set lineNumbersFontName(val: string);
            /**
             * The number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             */
            get n_pages(): number;
            /**
             * The number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             */
            get nPages(): number;
            /**
             * Whether to print a footer in each page.
             *
             * Note that by default the footer format is unspecified, and if it is
             * unspecified the footer will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get print_footer(): boolean;
            set print_footer(val: boolean);
            /**
             * Whether to print a footer in each page.
             *
             * Note that by default the footer format is unspecified, and if it is
             * unspecified the footer will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get printFooter(): boolean;
            set printFooter(val: boolean);
            /**
             * Whether to print a header in each page.
             *
             * Note that by default the header format is unspecified, and if it is
             * unspecified the header will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get print_header(): boolean;
            set print_header(val: boolean);
            /**
             * Whether to print a header in each page.
             *
             * Note that by default the header format is unspecified, and if it is
             * unspecified the header will not be printed, regardless of the value of
             * this property.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get printHeader(): boolean;
            set printHeader(val: boolean);
            /**
             * Interval of printed line numbers. If this property is set to 0 no
             * numbers will be printed.  If greater than 0, a number will be
             * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get print_line_numbers(): number;
            set print_line_numbers(val: number);
            /**
             * Interval of printed line numbers. If this property is set to 0 no
             * numbers will be printed.  If greater than 0, a number will be
             * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get printLineNumbers(): number;
            set printLineNumbers(val: number);
            /**
             * Width of a tab character expressed in spaces.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get tab_width(): number;
            set tab_width(val: number);
            /**
             * Width of a tab character expressed in spaces.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get tabWidth(): number;
            set tabWidth(val: number);
            /**
             * Whether to wrap lines never, at word boundaries, or at character boundaries.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get wrap_mode(): Gtk.WrapMode;
            set wrap_mode(val: Gtk.WrapMode);
            /**
             * Whether to wrap lines never, at word boundaries, or at character boundaries.
             *
             * The value of this property cannot be changed anymore after the first
             * call to the gtk_source_print_compositor_paginate() function.
             */
            get wrapMode(): Gtk.WrapMode;
            set wrapMode(val: Gtk.WrapMode);

            // Constructors

            constructor(properties?: Partial<PrintCompositor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer): PrintCompositor;

            static new_from_view(view: View): PrintCompositor;

            // Methods

            /**
             * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
             *
             * This method has been designed to be called in the handler of the #GtkPrintOperation::draw_page signal
             * as shown in the following example:
             *
             * <informalexample><programlisting>
             * // Signal handler for the GtkPrintOperation::draw_page signal
             *
             * static void
             * draw_page (GtkPrintOperation *operation,
             *            GtkPrintContext   *context,
             *            gint               page_nr,
             *            gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     gtk_source_print_compositor_draw_page (compositor,
             *                                            context,
             *                                            page_nr);
             * }
             * </programlisting></informalexample>
             * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
             * @param page_nr the number of the page to print.
             */
            draw_page(context: Gtk.PrintContext, page_nr: number): void;
            /**
             * Returns the name of the font used to print the text body. The returned string
             * must be freed with g_free().
             * @returns a new string containing the name of the font used to print the text body.
             */
            get_body_font_name(): string;
            /**
             * Gets the bottom margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the bottom margin.
             */
            get_bottom_margin(unit: Gtk.Unit | null): number;
            /**
             * Gets the #GtkSourceBuffer associated with the compositor. The returned
             * object reference is owned by the compositor object and
             * should not be unreferenced.
             * @returns the #GtkSourceBuffer associated with the compositor.
             */
            get_buffer(): Buffer;
            /**
             * Returns the name of the font used to print the page footer.
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print the page footer.
             */
            get_footer_font_name(): string;
            /**
             * Returns the name of the font used to print the page header.
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print the page header.
             */
            get_header_font_name(): string;
            /**
             * Determines whether the printed text will be highlighted according to the
             * buffer rules.  Note that highlighting will happen
             * only if the buffer to print has highlighting activated.
             * @returns %TRUE if the printed output will be highlighted.
             */
            get_highlight_syntax(): boolean;
            /**
             * Gets the left margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the left margin
             */
            get_left_margin(unit: Gtk.Unit | null): number;
            /**
             * Returns the name of the font used to print line numbers on the left margin.
             * The returned string must be freed with g_free().
             * @returns a new string containing the name of the font used to print line numbers on the left margin.
             */
            get_line_numbers_font_name(): string;
            /**
             * Returns the number of pages in the document or <code>-1</code> if the
             * document has not been completely paginated.
             * @returns the number of pages in the document or <code>-1</code> if the document has not been completely paginated.
             */
            get_n_pages(): number;
            /**
             * Returns the current fraction of the document pagination that has been completed.
             * @returns a fraction from 0.0 to 1.0 inclusive.
             */
            get_pagination_progress(): number;
            /**
             * Determines if a footer is set to be printed for each page.  A
             * footer will be printed if this function returns %TRUE
             * <emphasis>and</emphasis> some format strings have been specified
             * with gtk_source_print_compositor_set_footer_format().
             * @returns %TRUE if the footer is set to be printed.
             */
            get_print_footer(): boolean;
            /**
             * Determines if a header is set to be printed for each page.  A
             * header will be printed if this function returns %TRUE
             * <emphasis>and</emphasis> some format strings have been specified
             * with gtk_source_print_compositor_set_header_format().
             * @returns %TRUE if the header is set to be printed.
             */
            get_print_header(): boolean;
            /**
             * Returns the interval used for line number printing.  If the
             * value is 0, no line numbers will be printed.  The default value is
             * 1 (i.e. numbers printed in all lines).
             * @returns the interval of printed line numbers.
             */
            get_print_line_numbers(): number;
            /**
             * Gets the right margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the right margin.
             */
            get_right_margin(unit: Gtk.Unit | null): number;
            /**
             * Returns the width of tabulation in characters for printed text.
             * @returns width of tab.
             */
            get_tab_width(): number;
            /**
             * Gets the top margin in units of `unit`.
             * @param unit the unit for the return value.
             * @returns the top margin.
             */
            get_top_margin(unit: Gtk.Unit | null): number;
            /**
             * Gets the line wrapping mode for the printed text.
             * @returns the line wrap mode.
             */
            get_wrap_mode(): Gtk.WrapMode;
            /**
             * Paginate the document associated with the `compositor`.
             *
             * In order to support non-blocking pagination, document is paginated in small chunks.
             * Each time gtk_source_print_compositor_paginate() is invoked, a chunk of the document
             * is paginated. To paginate the entire document, gtk_source_print_compositor_paginate()
             * must be invoked multiple times.
             * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
             *
             * This method has been designed to be invoked in the handler of the #GtkPrintOperation::paginate signal,
             * as shown in the following example:
             *
             * <informalexample><programlisting>
             * // Signal handler for the GtkPrintOperation::paginate signal
             *
             * static gboolean
             * paginate (GtkPrintOperation *operation,
             *           GtkPrintContext   *context,
             *           gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     if (gtk_source_print_compositor_paginate (compositor, context))
             *     {
             *         gint n_pages;
             *
             *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
             *         gtk_print_operation_set_n_pages (operation, n_pages);
             *
             *         return TRUE;
             *     }
             *
             *     return FALSE;
             * }
             * </programlisting></informalexample>
             *
             * If you don't need to do pagination in chunks, you can simply do it all in the
             * #GtkPrintOperation::begin-print handler, and set the number of pages from there, like
             * in the following example:
             *
             * <informalexample><programlisting>
             * // Signal handler for the GtkPrintOperation::begin-print signal
             *
             * static void
             * begin_print (GtkPrintOperation *operation,
             *              GtkPrintContext   *context,
             *              gpointer           user_data)
             * {
             *     GtkSourcePrintCompositor *compositor;
             *     gint n_pages;
             *
             *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
             *
             *     while (!gtk_source_print_compositor_paginate (compositor, context));
             *
             *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
             *     gtk_print_operation_set_n_pages (operation, n_pages);
             * }
             * </programlisting></informalexample>
             * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the @compositor to paginate the document.
             * @returns %TRUE if the document has been completely paginated, %FALSE otherwise.
             */
            paginate(context: Gtk.PrintContext): boolean;
            /**
             * Sets the default font for the printed text.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param font_name the name of the default font for the body text.
             */
            set_body_font_name(font_name: string): void;
            /**
             * Sets the bottom margin used by `compositor`.
             * @param margin the new bottom margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_bottom_margin(margin: number, unit: Gtk.Unit | null): void;
            /**
             * Sets the font for printing the page footer. If
             * %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param font_name the name of the font for the footer text, or %NULL.
             */
            set_footer_font_name(font_name?: string | null): void;
            /**
             * See gtk_source_print_compositor_set_header_format() for more information
             * about the parameters.
             * @param separator %TRUE if you want a separator line to be printed.
             * @param left a format string to print on the left of the footer.
             * @param center a format string to print on the center of the footer.
             * @param right a format string to print on the right of the footer.
             */
            set_footer_format(
                separator: boolean,
                left?: string | null,
                center?: string | null,
                right?: string | null,
            ): void;
            /**
             * Sets the font for printing the page header. If
             * %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param font_name the name of the font for header text, or %NULL.
             */
            set_header_font_name(font_name?: string | null): void;
            /**
             * Sets strftime like header format strings, to be printed on the
             * left, center and right of the top of each page.  The strings may
             * include strftime(3) codes which will be expanded at print time.
             * A subset of strftime() codes are accepted, see g_date_time_format()
             * for more details on the accepted format specifiers.
             * Additionally the following format specifiers are accepted:
             * - #N: the page number
             * - #Q: the page count.
             *
             * `separator` specifies if a solid line should be drawn to separate
             * the header from the document text.
             *
             * If %NULL is given for any of the three arguments, that particular
             * string will not be printed.
             *
             * For the header to be printed, in
             * addition to specifying format strings, you need to enable header
             * printing with gtk_source_print_compositor_set_print_header().
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param separator %TRUE if you want a separator line to be printed.
             * @param left a format string to print on the left of the header.
             * @param center a format string to print on the center of the header.
             * @param right a format string to print on the right of the header.
             */
            set_header_format(
                separator: boolean,
                left?: string | null,
                center?: string | null,
                right?: string | null,
            ): void;
            /**
             * Sets whether the printed text will be highlighted according to the
             * buffer rules.  Both color and font style are applied.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param highlight whether syntax should be highlighted.
             */
            set_highlight_syntax(highlight: boolean): void;
            /**
             * Sets the left margin used by `compositor`.
             * @param margin the new left margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_left_margin(margin: number, unit: Gtk.Unit | null): void;
            /**
             * Sets the font for printing line numbers on the left margin.  If
             * %NULL is supplied, the default font (i.e. the one being used for the
             * text) will be used instead.
             *
             * `font_name` should be a
             * string representation of a font description Pango can understand.
             * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
             * for a description of the format of the string representation.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param font_name the name of the font for line numbers, or %NULL.
             */
            set_line_numbers_font_name(font_name?: string | null): void;
            /**
             * Sets whether you want to print a footer in each page.  The
             * footer consists of three pieces of text and an optional line
             * separator, configurable with
             * gtk_source_print_compositor_set_footer_format().
             *
             * Note that by default the footer format is unspecified, and if it's
             * empty it will not be printed, regardless of this setting.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param print %TRUE if you want the footer to be printed.
             */
            set_print_footer(print: boolean): void;
            /**
             * Sets whether you want to print a header in each page.  The
             * header consists of three pieces of text and an optional line
             * separator, configurable with
             * gtk_source_print_compositor_set_header_format().
             *
             * Note that by default the header format is unspecified, and if it's
             * empty it will not be printed, regardless of this setting.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param print %TRUE if you want the header to be printed.
             */
            set_print_header(print: boolean): void;
            /**
             * Sets the interval for printed line numbers.  If `interval` is 0 no
             * numbers will be printed.  If greater than 0, a number will be
             * printed every `interval` lines (i.e. 1 will print all line numbers).
             *
             * Maximum accepted value for `interval` is 100.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param interval interval for printed line numbers.
             */
            set_print_line_numbers(interval: number): void;
            /**
             * Sets the right margin used by `compositor`.
             * @param margin the new right margin in units of @unit.
             * @param unit the units for @margin.
             */
            set_right_margin(margin: number, unit: Gtk.Unit | null): void;
            /**
             * Sets the width of tabulation in characters for printed text.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param width width of tab in characters.
             */
            set_tab_width(width: number): void;
            /**
             * Sets the top margin used by `compositor`.
             * @param margin the new top margin in units of @unit
             * @param unit the units for @margin
             */
            set_top_margin(margin: number, unit: Gtk.Unit | null): void;
            /**
             * Sets the line wrapping mode for the printed text.
             *
             * This function cannot be called anymore after the first call to the
             * gtk_source_print_compositor_paginate() function.
             * @param wrap_mode a #GtkWrapMode.
             */
            set_wrap_mode(wrap_mode: Gtk.WrapMode | null): void;
        }

        module Region {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Gtk.TextBuffer;
            }
        }

        class Region extends GObject.Object {
            static $gtype: GObject.GType<Region>;

            // Properties

            /**
             * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
             * buffer.
             */
            get buffer(): Gtk.TextBuffer;

            // Constructors

            constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Gtk.TextBuffer): Region;

            // Methods

            /**
             * Adds `region_to_add` to `region`. `region_to_add` is not modified.
             * @param region_to_add the #GtkSourceRegion to add to @region, or %NULL.
             */
            add_region(region_to_add?: Region | null): void;
            /**
             * Adds the subregion delimited by `_start` and `_end` to `region`.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             */
            add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
            /**
             * Gets the `start` and `end` bounds of the `region`.
             * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if the @region is empty.
             */
            get_bounds(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            get_buffer(): Gtk.TextBuffer | null;
            /**
             * Initializes a #GtkSourceRegionIter to the first subregion of `region`. If
             * `region` is empty, `iter` will be initialized to the end iterator.
             */
            get_start_region_iter(): RegionIter;
            /**
             * Returns the intersection between `region1` and `region2`. `region1` and
             * `region2` are not modified.
             * @param region2 a #GtkSourceRegion, or %NULL.
             * @returns the intersection as a #GtkSourceRegion   object.
             */
            intersect_region(region2?: Region | null): Region | null;
            /**
             * Returns the intersection between `region` and the subregion delimited by
             * `_start` and `_end`. `region` is not modified.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             * @returns the intersection as a new   #GtkSourceRegion.
             */
            intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
            /**
             * Returns whether the `region` is empty. A %NULL `region` is considered empty.
             * @returns whether the @region is empty.
             */
            is_empty(): boolean;
            /**
             * Subtracts `region_to_subtract` from `region`. `region_to_subtract` is not
             * modified.
             * @param region_to_subtract the #GtkSourceRegion to subtract from   @region, or %NULL.
             */
            subtract_region(region_to_subtract?: Region | null): void;
            /**
             * Subtracts the subregion delimited by `_start` and `_end` from `region`.
             * @param _start the start of the subregion.
             * @param _end the end of the subregion.
             */
            subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
            /**
             * Gets a string represention of `region,` for debugging purposes.
             *
             * The returned string contains the character offsets of the subregions. It
             * doesn't include a newline character at the end of the string.
             * @returns a string represention of @region. Free   with g_free() when no longer needed.
             */
            to_string(): string | null;
        }

        module SearchContext {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                buffer: Buffer;
                highlight: boolean;
                match_style: Style;
                matchStyle: Style;
                occurrences_count: number;
                occurrencesCount: number;
                regex_error: any;
                regexError: any;
                settings: SearchSettings;
            }
        }

        class SearchContext extends GObject.Object {
            static $gtype: GObject.GType<SearchContext>;

            // Properties

            /**
             * The #GtkSourceBuffer associated to the search context.
             */
            get buffer(): Buffer;
            /**
             * Highlight the search occurrences.
             */
            get highlight(): boolean;
            set highlight(val: boolean);
            /**
             * A #GtkSourceStyle, or %NULL for theme's scheme default style.
             */
            get match_style(): Style;
            set match_style(val: Style);
            /**
             * A #GtkSourceStyle, or %NULL for theme's scheme default style.
             */
            get matchStyle(): Style;
            set matchStyle(val: Style);
            /**
             * The total number of search occurrences. If the search is disabled,
             * the value is 0. If the buffer is not already fully scanned, the value
             * is -1.
             */
            get occurrences_count(): number;
            /**
             * The total number of search occurrences. If the search is disabled,
             * the value is 0. If the buffer is not already fully scanned, the value
             * is -1.
             */
            get occurrencesCount(): number;
            /**
             * If the regex search pattern doesn't follow all the rules, this
             * #GError property will be set. If the pattern is valid, the value is
             * %NULL.
             *
             * Free with g_error_free().
             */
            get regex_error(): any;
            /**
             * If the regex search pattern doesn't follow all the rules, this
             * #GError property will be set. If the pattern is valid, the value is
             * %NULL.
             *
             * Free with g_error_free().
             */
            get regexError(): any;
            /**
             * The #GtkSourceSearchSettings associated to the search context.
             *
             * This property is construct-only since version 4.0.
             */
            get settings(): SearchSettings;

            // Constructors

            constructor(properties?: Partial<SearchContext.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](buffer: Buffer, settings?: SearchSettings | null): SearchContext;

            // Methods

            /**
             * Synchronous backward search. It is recommended to use the asynchronous
             * functions instead, to not block the user interface. However, if you are sure
             * that the `buffer` is small, this function is more convenient to use.
             *
             * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
             * doesn't try to wrap around.
             *
             * The `has_wrapped_around` out parameter is set independently of whether a match
             * is found. So if this function returns %FALSE, `has_wrapped_around` will have
             * the same value as the #GtkSourceSearchSettings:wrap-around property.
             * @param iter start of search.
             * @returns whether a match was found.
             */
            backward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * The asynchronous version of gtk_source_search_context_backward().
             *
             * See the documentation of gtk_source_search_context_backward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             */
            backward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
            /**
             * The asynchronous version of gtk_source_search_context_backward().
             *
             * See the documentation of gtk_source_search_context_backward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            backward_async(
                iter: Gtk.TextIter,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * The asynchronous version of gtk_source_search_context_backward().
             *
             * See the documentation of gtk_source_search_context_backward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            backward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
            /**
             * Finishes a backward search started with
             * gtk_source_search_context_backward_async().
             *
             * See the documentation of gtk_source_search_context_backward() for more
             * details.
             * @param result a #GAsyncResult.
             * @returns whether a match was found.
             */
            backward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * Synchronous forward search. It is recommended to use the asynchronous
             * functions instead, to not block the user interface. However, if you are sure
             * that the `buffer` is small, this function is more convenient to use.
             *
             * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
             * doesn't try to wrap around.
             *
             * The `has_wrapped_around` out parameter is set independently of whether a match
             * is found. So if this function returns %FALSE, `has_wrapped_around` will have
             * the same value as the #GtkSourceSearchSettings:wrap-around property.
             * @param iter start of search.
             * @returns whether a match was found.
             */
            forward(iter: Gtk.TextIter): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            /**
             * The asynchronous version of gtk_source_search_context_forward().
             *
             * See the documentation of gtk_source_search_context_forward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             */
            forward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]>;
            /**
             * The asynchronous version of gtk_source_search_context_forward().
             *
             * See the documentation of gtk_source_search_context_forward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            forward_async(
                iter: Gtk.TextIter,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * The asynchronous version of gtk_source_search_context_forward().
             *
             * See the documentation of gtk_source_search_context_forward() for more
             * details.
             *
             * See the #GAsyncResult documentation to know how to use this function.
             *
             * If the operation is cancelled, the `callback` will only be called if
             * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
             * ownership of `cancellable,` so you can unref it after calling this function.
             * @param iter start of search.
             * @param cancellable a #GCancellable, or %NULL.
             * @param callback a #GAsyncReadyCallback to call when the operation is finished.
             */
            forward_async(
                iter: Gtk.TextIter,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[Gtk.TextIter | null, Gtk.TextIter | null, boolean]> | void;
            /**
             * Finishes a forward search started with
             * gtk_source_search_context_forward_async().
             *
             * See the documentation of gtk_source_search_context_forward() for more
             * details.
             * @param result a #GAsyncResult.
             * @returns whether a match was found.
             */
            forward_finish(result: Gio.AsyncResult): [boolean, Gtk.TextIter | null, Gtk.TextIter | null, boolean];
            get_buffer(): Buffer;
            get_highlight(): boolean;
            get_match_style(): Style;
            /**
             * Gets the position of a search occurrence. If the buffer is not already fully
             * scanned, the position may be unknown, and -1 is returned. If 0 is returned,
             * it means that this part of the buffer has already been scanned, and that
             * `match_start` and `match_end` don't delimit an occurrence.
             * @param match_start the start of the occurrence.
             * @param match_end the end of the occurrence.
             * @returns the position of the search occurrence. The first occurrence has the position 1 (not 0). Returns 0 if @match_start and @match_end don't delimit an occurrence. Returns -1 if the position is not yet known.
             */
            get_occurrence_position(match_start: Gtk.TextIter, match_end: Gtk.TextIter): number;
            /**
             * Gets the total number of search occurrences. If the buffer is not already
             * fully scanned, the total number of occurrences is unknown, and -1 is
             * returned.
             * @returns the total number of search occurrences, or -1 if unknown.
             */
            get_occurrences_count(): number;
            /**
             * Regular expression patterns must follow certain rules. If
             * #GtkSourceSearchSettings:search-text breaks a rule, the error can be retrieved
             * with this function. The error domain is #G_REGEX_ERROR.
             *
             * Free the return value with g_error_free().
             * @returns the #GError, or %NULL if the pattern is valid.
             */
            get_regex_error(): GLib.Error | null;
            get_settings(): SearchSettings;
            /**
             * Replaces a search match by another text. If `match_start` and `match_end`
             * doesn't correspond to a search match, %FALSE is returned.
             *
             * `match_start` and `match_end` iters are revalidated to point to the replacement
             * text boundaries.
             *
             * For a regular expression replacement, you can check if `replace` is valid by
             * calling g_regex_check_replacement(). The `replace` text can contain
             * backreferences; read the g_regex_replace() documentation for more details.
             * @param match_start the start of the match to replace.
             * @param match_end the end of the match to replace.
             * @param replace the replacement text.
             * @param replace_length the length of @replace in bytes, or -1.
             * @returns whether the match has been replaced.
             */
            replace(
                match_start: Gtk.TextIter,
                match_end: Gtk.TextIter,
                replace: string,
                replace_length: number,
            ): boolean;
            /**
             * Replaces all search matches by another text. It is a synchronous function, so
             * it can block the user interface.
             *
             * For a regular expression replacement, you can check if `replace` is valid by
             * calling g_regex_check_replacement(). The `replace` text can contain
             * backreferences; read the g_regex_replace() documentation for more details.
             * @param replace the replacement text.
             * @param replace_length the length of @replace in bytes, or -1.
             * @returns the number of replaced matches.
             */
            replace_all(replace: string, replace_length: number): number;
            /**
             * Enables or disables the search occurrences highlighting.
             * @param highlight the setting.
             */
            set_highlight(highlight: boolean): void;
            /**
             * Set the style to apply on search matches. If `match_style` is %NULL, default
             * theme's scheme 'match-style' will be used.
             * To enable or disable the search highlighting, use
             * gtk_source_search_context_set_highlight().
             * @param match_style a #GtkSourceStyle, or %NULL.
             */
            set_match_style(match_style?: Style | null): void;
        }

        module SearchSettings {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                at_word_boundaries: boolean;
                atWordBoundaries: boolean;
                case_sensitive: boolean;
                caseSensitive: boolean;
                regex_enabled: boolean;
                regexEnabled: boolean;
                search_text: string;
                searchText: string;
                wrap_around: boolean;
                wrapAround: boolean;
            }
        }

        class SearchSettings extends GObject.Object {
            static $gtype: GObject.GType<SearchSettings>;

            // Properties

            /**
             * If %TRUE, a search match must start and end a word. The match can
             * span multiple words.
             */
            get at_word_boundaries(): boolean;
            set at_word_boundaries(val: boolean);
            /**
             * If %TRUE, a search match must start and end a word. The match can
             * span multiple words.
             */
            get atWordBoundaries(): boolean;
            set atWordBoundaries(val: boolean);
            /**
             * Whether the search is case sensitive.
             */
            get case_sensitive(): boolean;
            set case_sensitive(val: boolean);
            /**
             * Whether the search is case sensitive.
             */
            get caseSensitive(): boolean;
            set caseSensitive(val: boolean);
            /**
             * Search by regular expressions with
             * #GtkSourceSearchSettings:search-text as the pattern.
             */
            get regex_enabled(): boolean;
            set regex_enabled(val: boolean);
            /**
             * Search by regular expressions with
             * #GtkSourceSearchSettings:search-text as the pattern.
             */
            get regexEnabled(): boolean;
            set regexEnabled(val: boolean);
            /**
             * A search string, or %NULL if the search is disabled. If the regular
             * expression search is enabled, #GtkSourceSearchSettings:search-text is
             * the pattern.
             */
            get search_text(): string;
            set search_text(val: string);
            /**
             * A search string, or %NULL if the search is disabled. If the regular
             * expression search is enabled, #GtkSourceSearchSettings:search-text is
             * the pattern.
             */
            get searchText(): string;
            set searchText(val: string);
            /**
             * For a forward search, continue at the beginning of the buffer if no
             * search occurrence is found. For a backward search, continue at the
             * end of the buffer.
             */
            get wrap_around(): boolean;
            set wrap_around(val: boolean);
            /**
             * For a forward search, continue at the beginning of the buffer if no
             * search occurrence is found. For a backward search, continue at the
             * end of the buffer.
             */
            get wrapAround(): boolean;
            set wrapAround(val: boolean);

            // Constructors

            constructor(properties?: Partial<SearchSettings.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SearchSettings;

            // Methods

            get_at_word_boundaries(): boolean;
            get_case_sensitive(): boolean;
            get_regex_enabled(): boolean;
            /**
             * Gets the text to search. The return value must not be freed.
             *
             * You may be interested to call gtk_source_utils_escape_search_text() after
             * this function.
             * @returns the text to search, or %NULL if the search is disabled.
             */
            get_search_text(): string | null;
            get_wrap_around(): boolean;
            /**
             * Change whether the search is done at word boundaries. If `at_word_boundaries`
             * is %TRUE, a search match must start and end a word. The match can span
             * multiple words. See also gtk_text_iter_starts_word() and
             * gtk_text_iter_ends_word().
             * @param at_word_boundaries the setting.
             */
            set_at_word_boundaries(at_word_boundaries: boolean): void;
            /**
             * Enables or disables the case sensitivity for the search.
             * @param case_sensitive the setting.
             */
            set_case_sensitive(case_sensitive: boolean): void;
            /**
             * Enables or disables whether to search by regular expressions.
             * If enabled, the #GtkSourceSearchSettings:search-text property contains the
             * pattern of the regular expression.
             *
             * #GtkSourceSearchContext uses #GRegex when regex search is enabled. See the
             * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
             * page in the GLib reference manual.
             * @param regex_enabled the setting.
             */
            set_regex_enabled(regex_enabled: boolean): void;
            /**
             * Sets the text to search. If `search_text` is %NULL or is empty, the search
             * will be disabled. A copy of `search_text` will be made, so you can safely free
             * `search_text` after a call to this function.
             *
             * You may be interested to call gtk_source_utils_unescape_search_text() before
             * this function.
             * @param search_text the nul-terminated text to search, or %NULL to disable the search.
             */
            set_search_text(search_text?: string | null): void;
            /**
             * Enables or disables the wrap around search. If `wrap_around` is %TRUE, the
             * forward search continues at the beginning of the buffer if no search
             * occurrences are found. Similarly, the backward search continues to search at
             * the end of the buffer.
             * @param wrap_around the setting.
             */
            set_wrap_around(wrap_around: boolean): void;
        }

        module SpaceDrawer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                enable_matrix: boolean;
                enableMatrix: boolean;
                matrix: GLib.Variant;
            }
        }

        class SpaceDrawer extends GObject.Object {
            static $gtype: GObject.GType<SpaceDrawer>;

            // Properties

            /**
             * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
             */
            get enable_matrix(): boolean;
            set enable_matrix(val: boolean);
            /**
             * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
             */
            get enableMatrix(): boolean;
            set enableMatrix(val: boolean);
            /**
             * The :matrix property is a #GVariant property to specify where and
             * what kind of white spaces to draw.
             *
             * The #GVariant is of type `"au"`, an array of unsigned integers. Each
             * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
             * integer for each #GtkSourceSpaceLocationFlags, in the same order as
             * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
             * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
             *
             * If the array is shorter than the number of locations, then the value
             * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
             *
             * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
             */
            get matrix(): GLib.Variant;
            set matrix(val: GLib.Variant);

            // Constructors

            constructor(properties?: Partial<SpaceDrawer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SpaceDrawer;

            // Methods

            /**
             * Binds the #GtkSourceSpaceDrawer:matrix property to a #GSettings key.
             *
             * The #GSettings key must be of the same type as the
             * #GtkSourceSpaceDrawer:matrix property, that is, `"au"`.
             *
             * The g_settings_bind() function cannot be used, because the default GIO
             * mapping functions don't support #GVariant properties (maybe it will be
             * supported by a future GIO version, in which case this function can be
             * deprecated).
             * @param settings a #GSettings object.
             * @param key the @settings key to bind.
             * @param flags flags for the binding.
             */
            bind_matrix_setting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags | null): void;
            get_enable_matrix(): boolean;
            /**
             * Gets the value of the #GtkSourceSpaceDrawer:matrix property, as a #GVariant.
             * An empty array can be returned in case the matrix is a zero matrix.
             *
             * The gtk_source_space_drawer_get_types_for_locations() function may be more
             * convenient to use.
             * @returns the #GtkSourceSpaceDrawer:matrix value as a new floating #GVariant   instance.
             */
            get_matrix(): GLib.Variant;
            /**
             * If only one location is specified, this function returns what kind of
             * white spaces are drawn at that location. The value is retrieved from the
             * #GtkSourceSpaceDrawer:matrix property.
             *
             * If several locations are specified, this function returns the logical AND for
             * those locations. Which means that if a certain kind of white space is present
             * in the return value, then that kind of white space is drawn at all the
             * specified `locations`.
             * @param locations one or several #GtkSourceSpaceLocationFlags.
             * @returns a combination of #GtkSourceSpaceTypeFlags.
             */
            get_types_for_locations(locations: SpaceLocationFlags | null): SpaceTypeFlags;
            /**
             * Sets whether the #GtkSourceSpaceDrawer:matrix property is enabled.
             * @param enable_matrix the new value.
             */
            set_enable_matrix(enable_matrix: boolean): void;
            /**
             * Sets a new value to the #GtkSourceSpaceDrawer:matrix property, as a
             * #GVariant. If `matrix` is %NULL, then an empty array is set.
             *
             * If `matrix` is floating, it is consumed.
             *
             * The gtk_source_space_drawer_set_types_for_locations() function may be more
             * convenient to use.
             * @param matrix the new matrix value, or %NULL.
             */
            set_matrix(matrix?: GLib.Variant | null): void;
            /**
             * Modifies the #GtkSourceSpaceDrawer:matrix property at the specified
             * `locations`.
             * @param locations one or several #GtkSourceSpaceLocationFlags.
             * @param types a combination of #GtkSourceSpaceTypeFlags.
             */
            set_types_for_locations(locations: SpaceLocationFlags | null, types: SpaceTypeFlags | null): void;
        }

        module Style {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                background: string;
                background_set: boolean;
                backgroundSet: boolean;
                bold: boolean;
                bold_set: boolean;
                boldSet: boolean;
                foreground: string;
                foreground_set: boolean;
                foregroundSet: boolean;
                italic: boolean;
                italic_set: boolean;
                italicSet: boolean;
                line_background: string;
                lineBackground: string;
                line_background_set: boolean;
                lineBackgroundSet: boolean;
                pango_underline: Pango.Underline;
                pangoUnderline: Pango.Underline;
                scale: string;
                scale_set: boolean;
                scaleSet: boolean;
                strikethrough: boolean;
                strikethrough_set: boolean;
                strikethroughSet: boolean;
                underline_color: string;
                underlineColor: string;
                underline_color_set: boolean;
                underlineColorSet: boolean;
                underline_set: boolean;
                underlineSet: boolean;
            }
        }

        class Style extends GObject.Object {
            static $gtype: GObject.GType<Style>;

            // Properties

            get background(): string;
            get background_set(): boolean;
            get backgroundSet(): boolean;
            get bold(): boolean;
            get bold_set(): boolean;
            get boldSet(): boolean;
            get foreground(): string;
            get foreground_set(): boolean;
            get foregroundSet(): boolean;
            get italic(): boolean;
            get italic_set(): boolean;
            get italicSet(): boolean;
            get line_background(): string;
            get lineBackground(): string;
            get line_background_set(): boolean;
            get lineBackgroundSet(): boolean;
            get pango_underline(): Pango.Underline;
            get pangoUnderline(): Pango.Underline;
            get scale(): string;
            get scale_set(): boolean;
            get scaleSet(): boolean;
            get strikethrough(): boolean;
            get strikethrough_set(): boolean;
            get strikethroughSet(): boolean;
            get underline_color(): string;
            get underlineColor(): string;
            get underline_color_set(): boolean;
            get underlineColorSet(): boolean;
            get underline_set(): boolean;
            get underlineSet(): boolean;

            // Constructors

            constructor(properties?: Partial<Style.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * This function modifies the #GtkTextTag properties that are related to the
             * #GtkSourceStyle properties. Other #GtkTextTag properties are left untouched.
             *
             * If `style` is non-%NULL, applies `style` to `tag`.
             *
             * If `style` is %NULL, the related *-set properties of #GtkTextTag are set to
             * %FALSE.
             * @param tag a #GtkTextTag to apply styles to.
             */
            apply(tag: Gtk.TextTag): void;
            /**
             * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
             * has the same attributes set.
             * @returns copy of @style, call g_object_unref() when you are done with it.
             */
            copy(): Style;
        }

        module StyleScheme {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                description: string;
                filename: string;
                id: string;
                name: string;
            }
        }

        class StyleScheme extends GObject.Object {
            static $gtype: GObject.GType<StyleScheme>;

            // Properties

            /**
             * Style scheme description, a translatable string to present to the user.
             */
            get description(): string;
            /**
             * Style scheme filename or %NULL.
             */
            get filename(): string;
            /**
             * Style scheme id, a unique string used to identify the style scheme
             * in #GtkSourceStyleSchemeManager.
             */
            get id(): string;
            /**
             * Style scheme name, a translatable string to present to the user.
             */
            get name(): string;

            // Fields

            base: GObject.Object;

            // Constructors

            constructor(properties?: Partial<StyleScheme.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_authors(): string[] | null;
            get_description(): string | null;
            get_filename(): string | null;
            get_id(): string;
            get_name(): string;
            get_style(style_id: string): Style | null;
        }

        module StyleSchemeChooserButton {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Button.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Actionable.ConstructorProps,
                    Gtk.Activatable.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    StyleSchemeChooser.ConstructorProps {}
        }

        class StyleSchemeChooserButton
            extends Gtk.Button
            implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, StyleSchemeChooser
        {
            static $gtype: GObject.GType<StyleSchemeChooserButton>;

            // Constructors

            constructor(properties?: Partial<StyleSchemeChooserButton.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeChooserButton;

            // Inherited properties
            get action_name(): string;
            set action_name(val: string);
            get actionName(): string;
            set actionName(val: string);
            get action_target(): GLib.Variant;
            set action_target(val: GLib.Variant);
            get actionTarget(): GLib.Variant;
            set actionTarget(val: GLib.Variant);
            /**
             * The action that this activatable will activate and receive
             * updates from for various states and possibly appearance.
             *
             * > #GtkActivatable implementors need to handle the this property and
             * > call gtk_activatable_do_set_related_action() when it changes.
             */
            get related_action(): Gtk.Action;
            set related_action(val: Gtk.Action);
            /**
             * The action that this activatable will activate and receive
             * updates from for various states and possibly appearance.
             *
             * > #GtkActivatable implementors need to handle the this property and
             * > call gtk_activatable_do_set_related_action() when it changes.
             */
            get relatedAction(): Gtk.Action;
            set relatedAction(val: Gtk.Action);
            /**
             * Whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             *
             * See the #GtkAction documentation directly to find which properties
             * should be ignored by the #GtkActivatable when this property is %FALSE.
             *
             * > #GtkActivatable implementors need to handle this property
             * > and call gtk_activatable_sync_action_properties() on the activatable
             * > widget when it changes.
             */
            get use_action_appearance(): boolean;
            set use_action_appearance(val: boolean);
            /**
             * Whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             *
             * See the #GtkAction documentation directly to find which properties
             * should be ignored by the #GtkActivatable when this property is %FALSE.
             *
             * > #GtkActivatable implementors need to handle this property
             * > and call gtk_activatable_sync_action_properties() on the activatable
             * > widget when it changes.
             */
            get useActionAppearance(): boolean;
            set useActionAppearance(val: boolean);
            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);
            get app_paintable(): boolean;
            set app_paintable(val: boolean);
            get appPaintable(): boolean;
            set appPaintable(val: boolean);
            get can_default(): boolean;
            set can_default(val: boolean);
            get canDefault(): boolean;
            set canDefault(val: boolean);
            get can_focus(): boolean;
            set can_focus(val: boolean);
            get canFocus(): boolean;
            set canFocus(val: boolean);
            get composite_child(): boolean;
            get compositeChild(): boolean;
            /**
             * Whether the widget is double buffered.
             */
            get double_buffered(): boolean;
            set double_buffered(val: boolean);
            /**
             * Whether the widget is double buffered.
             */
            get doubleBuffered(): boolean;
            set doubleBuffered(val: boolean);
            get events(): Gdk.EventMask;
            set events(val: Gdk.EventMask);
            /**
             * Whether to expand in both directions. Setting this sets both #GtkWidget:hexpand and #GtkWidget:vexpand
             */
            get expand(): boolean;
            set expand(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focus_on_click(): boolean;
            set focus_on_click(val: boolean);
            /**
             * Whether the widget should grab focus when it is clicked with the mouse.
             *
             * This property is only relevant for widgets that can take focus.
             *
             * Before 3.20, several widgets (GtkButton, GtkFileChooserButton,
             * GtkComboBox) implemented this property individually.
             */
            get focusOnClick(): boolean;
            set focusOnClick(val: boolean);
            /**
             * How to distribute horizontal space if widget gets extra space, see #GtkAlign
             */
            get halign(): Gtk.Align;
            set halign(val: Gtk.Align);
            get has_default(): boolean;
            set has_default(val: boolean);
            get hasDefault(): boolean;
            set hasDefault(val: boolean);
            get has_focus(): boolean;
            set has_focus(val: boolean);
            get hasFocus(): boolean;
            set hasFocus(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get has_tooltip(): boolean;
            set has_tooltip(val: boolean);
            /**
             * Enables or disables the emission of #GtkWidget::query-tooltip on `widget`.
             * A value of %TRUE indicates that `widget` can have a tooltip, in this case
             * the widget will be queried using #GtkWidget::query-tooltip to determine
             * whether it will provide a tooltip or not.
             *
             * Note that setting this property to %TRUE for the first time will change
             * the event masks of the GdkWindows of this widget to include leave-notify
             * and motion-notify events.  This cannot and will not be undone when the
             * property is set to %FALSE again.
             */
            get hasTooltip(): boolean;
            set hasTooltip(val: boolean);
            get height_request(): number;
            set height_request(val: number);
            get heightRequest(): number;
            set heightRequest(val: number);
            /**
             * Whether to expand horizontally. See gtk_widget_set_hexpand().
             */
            get hexpand(): boolean;
            set hexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpand_set(): boolean;
            set hexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:hexpand property. See gtk_widget_get_hexpand_set().
             */
            get hexpandSet(): boolean;
            set hexpandSet(val: boolean);
            get is_focus(): boolean;
            set is_focus(val: boolean);
            get isFocus(): boolean;
            set isFocus(val: boolean);
            /**
             * Sets all four sides' margin at once. If read, returns max
             * margin on any side.
             */
            get margin(): number;
            set margin(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_bottom(): number;
            set margin_bottom(val: number);
            /**
             * Margin on bottom side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginBottom(): number;
            set marginBottom(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_end(): number;
            set margin_end(val: number);
            /**
             * Margin on end of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginEnd(): number;
            set marginEnd(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_left(): number;
            set margin_left(val: number);
            /**
             * Margin on left side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginLeft(): number;
            set marginLeft(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_right(): number;
            set margin_right(val: number);
            /**
             * Margin on right side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginRight(): number;
            set marginRight(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_start(): number;
            set margin_start(val: number);
            /**
             * Margin on start of widget, horizontally. This property supports
             * left-to-right and right-to-left text directions.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginStart(): number;
            set marginStart(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get margin_top(): number;
            set margin_top(val: number);
            /**
             * Margin on top side of widget.
             *
             * This property adds margin outside of the widget's normal size
             * request, the margin will be added in addition to the size from
             * gtk_widget_set_size_request() for example.
             */
            get marginTop(): number;
            set marginTop(val: number);
            get name(): string;
            set name(val: string);
            get no_show_all(): boolean;
            set no_show_all(val: boolean);
            get noShowAll(): boolean;
            set noShowAll(val: boolean);
            /**
             * The requested opacity of the widget. See gtk_widget_set_opacity() for
             * more details about window opacity.
             *
             * Before 3.8 this was only available in GtkWindow
             */
            get opacity(): number;
            set opacity(val: number);
            get parent(): Gtk.Container;
            set parent(val: Gtk.Container);
            get receives_default(): boolean;
            set receives_default(val: boolean);
            get receivesDefault(): boolean;
            set receivesDefault(val: boolean);
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scale_factor(): number;
            /**
             * The scale factor of the widget. See gtk_widget_get_scale_factor() for
             * more details about widget scaling.
             */
            get scaleFactor(): number;
            get sensitive(): boolean;
            set sensitive(val: boolean);
            /**
             * The style of the widget, which contains information about how it will look (colors, etc).
             */
            get style(): Gtk.Style;
            set style(val: Gtk.Style);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_markup(): string;
            set tooltip_markup(val: string);
            /**
             * Sets the text of tooltip to be the given string, which is marked up
             * with the [Pango text markup language][PangoMarkupFormat].
             * Also see gtk_tooltip_set_markup().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipMarkup(): string;
            set tooltipMarkup(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltip_text(): string;
            set tooltip_text(val: string);
            /**
             * Sets the text of tooltip to be the given string.
             *
             * Also see gtk_tooltip_set_text().
             *
             * This is a convenience property which will take care of getting the
             * tooltip shown if the given string is not %NULL: #GtkWidget:has-tooltip
             * will automatically be set to %TRUE and there will be taken care of
             * #GtkWidget::query-tooltip in the default signal handler.
             *
             * Note that if both #GtkWidget:tooltip-text and #GtkWidget:tooltip-markup
             * are set, the last one wins.
             */
            get tooltipText(): string;
            set tooltipText(val: string);
            /**
             * How to distribute vertical space if widget gets extra space, see #GtkAlign
             */
            get valign(): Gtk.Align;
            set valign(val: Gtk.Align);
            /**
             * Whether to expand vertically. See gtk_widget_set_vexpand().
             */
            get vexpand(): boolean;
            set vexpand(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpand_set(): boolean;
            set vexpand_set(val: boolean);
            /**
             * Whether to use the #GtkWidget:vexpand property. See gtk_widget_get_vexpand_set().
             */
            get vexpandSet(): boolean;
            set vexpandSet(val: boolean);
            get visible(): boolean;
            set visible(val: boolean);
            get width_request(): number;
            set width_request(val: number);
            get widthRequest(): number;
            set widthRequest(val: number);
            /**
             * The widget's window if it is realized, %NULL otherwise.
             */
            get window(): Gdk.Window;

            // Inherited methods
            /**
             * Gets the action name for `actionable`.
             *
             * See gtk_actionable_set_action_name() for more information.
             * @returns the action name, or %NULL if none is set
             */
            get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             *
             * See gtk_actionable_set_action_target_value() for more information.
             * @returns the current target value
             */
            get_action_target_value(): GLib.Variant;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.  If `action_name` is %NULL then the widget will be
             * unassociated from any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a #GtkApplicationWindow.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing #GtkApplicationWindow or its associated #GtkApplication,
             * respectively.  This is the same form used for actions in the #GMenu
             * associated with the window.
             * @param action_name an action name, or %NULL
             */
            set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes.  First, it is used as the
             * parameter to activation of the action associated with the
             * #GtkActionable widget. Second, it is used to determine if the widget
             * should be rendered as “active” — the widget is active if the state
             * is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a #GAction
             * with string state in a typical “radio button” situation.  Each button
             * will be associated with the same action, but with a different target
             * value for that action.  Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value.  Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a #GVariant to set as the target value, or %NULL
             */
            set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * Sets the action-name and associated string target value of an
             * actionable widget.
             *
             * `detailed_action_name` is a string in the format accepted by
             * g_action_parse_detailed_name().
             *
             * (Note that prior to version 3.22.25,
             * this function is only usable for actions with a simple "s" target, and
             * `detailed_action_name` must be of the form `"action::target"` where
             * `action` is the action name and `target` is the string to use
             * as the target.)
             * @param detailed_action_name the detailed action name
             */
            set_detailed_action_name(detailed_action_name: string): void;
            /**
             * Gets the action name for `actionable`.
             *
             * See gtk_actionable_set_action_name() for more information.
             */
            vfunc_get_action_name(): string | null;
            /**
             * Gets the current target value of `actionable`.
             *
             * See gtk_actionable_set_action_target_value() for more information.
             */
            vfunc_get_action_target_value(): GLib.Variant;
            /**
             * Specifies the name of the action with which this widget should be
             * associated.  If `action_name` is %NULL then the widget will be
             * unassociated from any previous action.
             *
             * Usually this function is used when the widget is located (or will be
             * located) within the hierarchy of a #GtkApplicationWindow.
             *
             * Names are of the form “win.save” or “app.quit” for actions on the
             * containing #GtkApplicationWindow or its associated #GtkApplication,
             * respectively.  This is the same form used for actions in the #GMenu
             * associated with the window.
             * @param action_name an action name, or %NULL
             */
            vfunc_set_action_name(action_name?: string | null): void;
            /**
             * Sets the target value of an actionable widget.
             *
             * If `target_value` is %NULL then the target value is unset.
             *
             * The target value has two purposes.  First, it is used as the
             * parameter to activation of the action associated with the
             * #GtkActionable widget. Second, it is used to determine if the widget
             * should be rendered as “active” — the widget is active if the state
             * is equal to the given target.
             *
             * Consider the example of associating a set of buttons with a #GAction
             * with string state in a typical “radio button” situation.  Each button
             * will be associated with the same action, but with a different target
             * value for that action.  Clicking on a particular button will activate
             * the action with the target of that button, which will typically cause
             * the action’s state to change to that value.  Since the action’s state
             * is now equal to the target value of the button, the button will now
             * be rendered as active (and the other buttons, with different targets,
             * rendered inactive).
             * @param target_value a #GVariant to set as the target value, or %NULL
             */
            vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
            /**
             * This is a utility function for #GtkActivatable implementors.
             *
             * When implementing #GtkActivatable you must call this when
             * handling changes of the #GtkActivatable:related-action, and
             * you must also use this to break references in #GObject->dispose().
             *
             * This function adds a reference to the currently set related
             * action for you, it also makes sure the #GtkActivatable->update()
             * method is called when the related #GtkAction properties change
             * and registers to the action’s proxy list.
             *
             * > Be careful to call this before setting the local
             * > copy of the #GtkAction property, since this function uses
             * > gtk_activatable_get_related_action() to retrieve the
             * > previous action.
             * @param action the #GtkAction to set
             */
            do_set_related_action(action: Gtk.Action): void;
            /**
             * Gets the related #GtkAction for `activatable`.
             * @returns the related #GtkAction if one is set.
             */
            get_related_action(): Gtk.Action;
            /**
             * Gets whether this activatable should reset its layout
             * and appearance when setting the related action or when
             * the action changes appearance.
             * @returns whether @activatable uses its actions appearance.
             */
            get_use_action_appearance(): boolean;
            /**
             * Sets the related action on the `activatable` object.
             *
             * > #GtkActivatable implementors need to handle the #GtkActivatable:related-action
             * > property and call gtk_activatable_do_set_related_action() when it changes.
             * @param action the #GtkAction to set
             */
            set_related_action(action: Gtk.Action): void;
            /**
             * Sets whether this activatable should reset its layout and appearance
             * when setting the related action or when the action changes appearance
             *
             * > #GtkActivatable implementors need to handle the
             * > #GtkActivatable:use-action-appearance property and call
             * > gtk_activatable_sync_action_properties() to update `activatable`
             * > if needed.
             * @param use_appearance whether to use the actions appearance
             */
            set_use_action_appearance(use_appearance: boolean): void;
            /**
             * This is called to update the activatable completely, this is called
             * internally when the #GtkActivatable:related-action property is set
             * or unset and by the implementing class when
             * #GtkActivatable:use-action-appearance changes.
             * @param action the related #GtkAction or %NULL
             */
            sync_action_properties(action?: Gtk.Action | null): void;
            /**
             * This is called to update the activatable completely, this is called
             * internally when the #GtkActivatable:related-action property is set
             * or unset and by the implementing class when
             * #GtkActivatable:use-action-appearance changes.
             * @param action the related #GtkAction or %NULL
             */
            vfunc_sync_action_properties(action?: Gtk.Action | null): void;
            /**
             * Called to update the activatable when its related action’s properties change.
             * You must check the #GtkActivatable:use-action-appearance property only apply action
             * properties that are meant to effect the appearance accordingly.
             * @param action
             * @param property_name
             */
            vfunc_update(action: Gtk.Action, property_name: string): void;
            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;
            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
            /**
             * For widgets that can be “activated” (buttons, menu items, etc.)
             * this function activates them. Activation is what happens when you
             * press Enter on a widget during key navigation. If `widget` isn't
             * activatable, the function returns %FALSE.
             * @returns %TRUE if the widget was activatable
             */
            activate(): boolean;
            /**
             * Installs an accelerator for this `widget` in `accel_group` that causes
             * `accel_signal` to be emitted if the accelerator is activated.
             * The `accel_group` needs to be added to the widget’s toplevel via
             * gtk_window_add_accel_group(), and the signal must be of type %G_SIGNAL_ACTION.
             * Accelerators added through this function are not user changeable during
             * runtime. If you want to support accelerators that can be changed by the
             * user, use gtk_accel_map_add_entry() and gtk_widget_set_accel_path() or
             * gtk_menu_item_set_accel_path() instead.
             * @param accel_signal widget signal to emit on accelerator activation
             * @param accel_group accel group for this widget, added to its toplevel
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @param accel_flags flag accelerators, e.g. %GTK_ACCEL_VISIBLE
             */
            add_accelerator(
                accel_signal: string,
                accel_group: Gtk.AccelGroup,
                accel_key: number,
                accel_mods: Gdk.ModifierType | null,
                accel_flags: Gtk.AccelFlags | null,
            ): void;
            /**
             * Adds the device events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_device_events() for details.
             * @param device a #GdkDevice
             * @param events an event mask, see #GdkEventMask
             */
            add_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
            /**
             * Adds the events in the bitfield `events` to the event mask for
             * `widget`. See gtk_widget_set_events() and the
             * [input handling overview][event-masks] for details.
             * @param events an event mask, see #GdkEventMask
             */
            add_events(events: number): void;
            /**
             * Adds a widget to the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). Note the
             * list of mnemonic labels for the widget is cleared when the
             * widget is destroyed, so the caller must make sure to update
             * its internal state at this point as well, by using a connection
             * to the #GtkWidget::destroy signal or a weak notifier.
             * @param label a #GtkWidget that acts as a mnemonic label for @widget
             */
            add_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Queues an animation frame update and adds a callback to be called
             * before each frame. Until the tick callback is removed, it will be
             * called frequently (usually at the frame rate of the output device
             * or as quickly as the application can be repainted, whichever is
             * slower). For this reason, is most suitable for handling graphics
             * that change every frame or every few frames. The tick callback does
             * not automatically imply a relayout or repaint. If you want a
             * repaint or relayout, and aren’t changing widget properties that
             * would trigger that (for example, changing the text of a #GtkLabel),
             * then you will have to call gtk_widget_queue_resize() or
             * gtk_widget_queue_draw_area() yourself.
             *
             * gdk_frame_clock_get_frame_time() should generally be used for timing
             * continuous animations and
             * gdk_frame_timings_get_predicted_presentation_time() if you are
             * trying to display isolated frames at particular times.
             *
             * This is a more convenient alternative to connecting directly to the
             * #GdkFrameClock::update signal of #GdkFrameClock, since you don't
             * have to worry about when a #GdkFrameClock is assigned to a widget.
             * @param callback function to call for updating animations
             * @returns an id for the connection of this callback. Remove the callback     by passing it to gtk_widget_remove_tick_callback()
             */
            add_tick_callback(callback: Gtk.TickCallback): number;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             * @returns %TRUE if the accelerator can be activated.
             */
            can_activate_accel(signal_id: number): boolean;
            /**
             * This function is used by custom widget implementations; if you're
             * writing an app, you’d use gtk_widget_grab_focus() to move the focus
             * to a particular widget, and gtk_container_set_focus_chain() to
             * change the focus tab order. So you may want to investigate those
             * functions instead.
             *
             * gtk_widget_child_focus() is called by containers as the user moves
             * around the window using keyboard shortcuts. `direction` indicates
             * what kind of motion is taking place (up, down, left, right, tab
             * forward, tab backward). gtk_widget_child_focus() emits the
             * #GtkWidget::focus signal; widgets override the default handler
             * for this signal in order to implement appropriate focus behavior.
             *
             * The default ::focus handler for a widget should return %TRUE if
             * moving in `direction` left the focus on a focusable location inside
             * that widget, and %FALSE if moving in `direction` moved the focus
             * outside the widget. If returning %TRUE, widgets normally
             * call gtk_widget_grab_focus() to place the focus accordingly;
             * if returning %FALSE, they don’t modify the current focus location.
             * @param direction direction of focus movement
             * @returns %TRUE if focus ended up inside @widget
             */
            child_focus(direction: Gtk.DirectionType | null): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            child_notify(child_property: string): void;
            // Conflicted with Gtk.Container.child_notify
            child_notify(...args: never[]): any;
            /**
             * Same as gtk_widget_path(), but always uses the name of a widget’s type,
             * never uses a custom name set with gtk_widget_set_name().
             */
            class_path(): [number, string, string];
            /**
             * Computes whether a container should give this widget extra space
             * when possible. Containers should check this, rather than
             * looking at gtk_widget_get_hexpand() or gtk_widget_get_vexpand().
             *
             * This function already checks whether the widget is visible, so
             * visibility does not need to be checked separately. Non-visible
             * widgets are not expanded.
             *
             * The computed expand value uses either the expand setting explicitly
             * set on the widget itself, or, if none has been explicitly set,
             * the widget may expand if some of its children do.
             * @param orientation expand direction
             * @returns whether widget tree rooted here should be expanded
             */
            compute_expand(orientation: Gtk.Orientation | null): boolean;
            /**
             * Creates a new #PangoContext with the appropriate font map,
             * font options, font description, and base direction for drawing
             * text for this widget. See also gtk_widget_get_pango_context().
             * @returns the new #PangoContext
             */
            create_pango_context(): Pango.Context;
            /**
             * Creates a new #PangoLayout with the appropriate font map,
             * font description, and base direction for drawing text for
             * this widget.
             *
             * If you keep a #PangoLayout created in this way around, you need
             * to re-create it when the widget #PangoContext is replaced.
             * This can be tracked by using the #GtkWidget::screen-changed signal
             * on the widget.
             * @param text text to set on the layout (can be %NULL)
             * @returns the new #PangoLayout
             */
            create_pango_layout(text?: string | null): Pango.Layout;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            destroy(): void;
            /**
             * This function sets *`widget_pointer` to %NULL if `widget_pointer` !=
             * %NULL.  It’s intended to be used as a callback connected to the
             * “destroy” signal of a widget. You connect gtk_widget_destroyed()
             * as a signal handler, and pass the address of your widget variable
             * as user data. Then when the widget is destroyed, the variable will
             * be set to %NULL. Useful for example to avoid multiple copies
             * of the same dialog.
             * @param widget_pointer address of a variable that contains @widget
             */
            destroyed(widget_pointer: Gtk.Widget): Gtk.Widget;
            /**
             * Returns %TRUE if `device` has been shadowed by a GTK+
             * device grab on another widget, so it would stop sending
             * events to `widget`. This may be used in the
             * #GtkWidget::grab-notify signal to check for specific
             * devices. See gtk_device_grab_add().
             * @param device a #GdkDevice
             * @returns %TRUE if there is an ongoing grab on @device          by another #GtkWidget than @widget.
             */
            device_is_shadowed(device: Gdk.Device): boolean;
            /**
             * This function is equivalent to gtk_drag_begin_with_coordinates(),
             * passing -1, -1 as coordinates.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @returns the context for this drag
             */
            drag_begin(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction | null,
                button: number,
                event?: Gdk.Event | null,
            ): Gdk.DragContext;
            /**
             * Initiates a drag on the source side. The function only needs to be used
             * when the application is starting drags itself, and is not needed when
             * gtk_drag_source_set() is used.
             *
             * The `event` is used to retrieve the timestamp that will be used internally to
             * grab the pointer.  If `event` is %NULL, then %GDK_CURRENT_TIME will be used.
             * However, you should try to pass a real event in all cases, since that can be
             * used to get information about the drag.
             *
             * Generally there are three cases when you want to start a drag by hand by
             * calling this function:
             *
             * 1. During a #GtkWidget::button-press-event handler, if you want to start a drag
             * immediately when the user presses the mouse button.  Pass the `event`
             * that you have in your #GtkWidget::button-press-event handler.
             *
             * 2. During a #GtkWidget::motion-notify-event handler, if you want to start a drag
             * when the mouse moves past a certain threshold distance after a button-press.
             * Pass the `event` that you have in your #GtkWidget::motion-notify-event handler.
             *
             * 3. During a timeout handler, if you want to start a drag after the mouse
             * button is held down for some time.  Try to save the last event that you got
             * from the mouse, using gdk_event_copy(), and pass it to this function
             * (remember to free the event with gdk_event_free() when you are done).
             * If you really cannot pass a real event, pass %NULL instead.
             * @param targets The targets (data formats) in which the    source can provide the data
             * @param actions A bitmask of the allowed drag actions for this drag
             * @param button The button the user clicked to start the drag
             * @param event The event that triggered the start of the drag,    or %NULL if none can be obtained.
             * @param x The initial x coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @param y The initial y coordinate to start dragging from, in the coordinate space    of @widget. If -1 is passed, the coordinates are retrieved from @event or    the current pointer position
             * @returns the context for this drag
             */
            drag_begin_with_coordinates(
                targets: Gtk.TargetList,
                actions: Gdk.DragAction | null,
                button: number,
                event: Gdk.Event | null,
                x: number,
                y: number,
            ): Gdk.DragContext;
            /**
             * Checks to see if a mouse drag starting at (`start_x,` `start_y)` and ending
             * at (`current_x,` `current_y)` has passed the GTK+ drag threshold, and thus
             * should trigger the beginning of a drag-and-drop operation.
             * @param start_x X coordinate of start of drag
             * @param start_y Y coordinate of start of drag
             * @param current_x current X coordinate
             * @param current_y current Y coordinate
             * @returns %TRUE if the drag threshold has been passed.
             */
            drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
            /**
             * Add the image targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag destination. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_dest_set_target_list().
             */
            drag_dest_add_uri_targets(): void;
            /**
             * Looks for a match between the supported targets of `context` and the
             * `dest_target_list,` returning the first matching target, otherwise
             * returning %GDK_NONE. `dest_target_list` should usually be the return
             * value from gtk_drag_dest_get_target_list(), but some widgets may
             * have different valid targets for different parts of the widget; in
             * that case, they will have to implement a drag_motion handler that
             * passes the correct target list to this function.
             * @param context drag context
             * @param target_list list of droppable targets, or %NULL to use    gtk_drag_dest_get_target_list (@widget).
             * @returns first target that the source offers     and the dest can accept, or %GDK_NONE
             */
            drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom;
            /**
             * Returns the list of targets this widget can accept from
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_dest_get_target_list(): Gtk.TargetList | null;
            /**
             * Returns whether the widget has been configured to always
             * emit #GtkWidget::drag-motion signals.
             * @returns %TRUE if the widget always emits   #GtkWidget::drag-motion events
             */
            drag_dest_get_track_motion(): boolean;
            /**
             * Sets a widget as a potential drop destination, and adds default behaviors.
             *
             * The default behaviors listed in `flags` have an effect similar
             * to installing default handlers for the widget’s drag-and-drop signals
             * (#GtkWidget::drag-motion, #GtkWidget::drag-drop, ...). They all exist
             * for convenience. When passing #GTK_DEST_DEFAULT_ALL for instance it is
             * sufficient to connect to the widget’s #GtkWidget::drag-data-received
             * signal to get primitive, but consistent drag-and-drop support.
             *
             * Things become more complicated when you try to preview the dragged data,
             * as described in the documentation for #GtkWidget::drag-motion. The default
             * behaviors described by `flags` make some assumptions, that can conflict
             * with your own signal handlers. For instance #GTK_DEST_DEFAULT_DROP causes
             * invokations of gdk_drag_status() in the context of #GtkWidget::drag-motion,
             * and invokations of gtk_drag_finish() in #GtkWidget::drag-data-received.
             * Especially the later is dramatic, when your own #GtkWidget::drag-motion
             * handler calls gtk_drag_get_data() to inspect the dragged data.
             *
             * There’s no way to set a default action here, you can use the
             * #GtkWidget::drag-motion callback for that. Here’s an example which selects
             * the action to use depending on whether the control key is pressed or not:
             *
             * ```c
             * static void
             * drag_motion (GtkWidget *widget,
             *              GdkDragContext *context,
             *              gint x,
             *              gint y,
             *              guint time)
             * {
             *   GdkModifierType mask;
             *
             *   gdk_window_get_pointer (gtk_widget_get_window (widget),
             *                           NULL, NULL, &mask);
             *   if (mask & GDK_CONTROL_MASK)
             *     gdk_drag_status (context, GDK_ACTION_COPY, time);
             *   else
             *     gdk_drag_status (context, GDK_ACTION_MOVE, time);
             * }
             * ```
             *
             * @param flags which types of default drag behavior to use
             * @param targets a pointer to an array of     #GtkTargetEntrys indicating the drop types that this @widget will     accept, or %NULL. Later you can access the list with     gtk_drag_dest_get_target_list() and gtk_drag_dest_find_target().
             * @param actions a bitmask of possible actions for a drop onto this @widget.
             */
            drag_dest_set(
                flags: Gtk.DestDefaults | null,
                targets: Gtk.TargetEntry[] | null,
                actions: Gdk.DragAction | null,
            ): void;
            /**
             * Sets this widget as a proxy for drops to another window.
             * @param proxy_window the window to which to forward drag events
             * @param protocol the drag protocol which the @proxy_window accepts   (You can use gdk_drag_get_protocol() to determine this)
             * @param use_coordinates If %TRUE, send the same coordinates to the   destination, because it is an embedded   subwindow.
             */
            drag_dest_set_proxy(
                proxy_window: Gdk.Window,
                protocol: Gdk.DragProtocol | null,
                use_coordinates: boolean,
            ): void;
            /**
             * Sets the target types that this widget can accept from drag-and-drop.
             * The widget must first be made into a drag destination with
             * gtk_drag_dest_set().
             * @param target_list list of droppable targets, or %NULL for none
             */
            drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Tells the widget to emit #GtkWidget::drag-motion and
             * #GtkWidget::drag-leave events regardless of the targets and the
             * %GTK_DEST_DEFAULT_MOTION flag.
             *
             * This may be used when a widget wants to do generic
             * actions regardless of the targets that the source offers.
             * @param track_motion whether to accept all targets
             */
            drag_dest_set_track_motion(track_motion: boolean): void;
            /**
             * Clears information about a drop destination set with
             * gtk_drag_dest_set(). The widget will no longer receive
             * notification of drags.
             */
            drag_dest_unset(): void;
            /**
             * Gets the data associated with a drag. When the data
             * is received or the retrieval fails, GTK+ will emit a
             * #GtkWidget::drag-data-received signal. Failure of the retrieval
             * is indicated by the length field of the `selection_data`
             * signal parameter being negative. However, when gtk_drag_get_data()
             * is called implicitely because the %GTK_DEST_DEFAULT_DROP was set,
             * then the widget will not receive notification of failed
             * drops.
             * @param context the drag context
             * @param target the target (form of the data) to retrieve
             * @param time_ a timestamp for retrieving the data. This will   generally be the time received in a #GtkWidget::drag-motion   or #GtkWidget::drag-drop signal
             */
            drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
            /**
             * Highlights a widget as a currently hovered drop target.
             * To end the highlight, call gtk_drag_unhighlight().
             * GTK+ calls this automatically if %GTK_DEST_DEFAULT_HIGHLIGHT is set.
             */
            drag_highlight(): void;
            /**
             * Add the writable image targets supported by #GtkSelectionData to
             * the target list of the drag source. The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_image_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_image_targets(): void;
            /**
             * Add the text targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_text_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_text_targets(): void;
            /**
             * Add the URI targets supported by #GtkSelectionData to
             * the target list of the drag source.  The targets
             * are added with `info` = 0. If you need another value,
             * use gtk_target_list_add_uri_targets() and
             * gtk_drag_source_set_target_list().
             */
            drag_source_add_uri_targets(): void;
            /**
             * Gets the list of targets this widget can provide for
             * drag-and-drop.
             * @returns the #GtkTargetList, or %NULL if none
             */
            drag_source_get_target_list(): Gtk.TargetList | null;
            /**
             * Sets up a widget so that GTK+ will start a drag operation when the user
             * clicks and drags on the widget. The widget must have a window.
             * @param start_button_mask the bitmask of buttons that can start the drag
             * @param targets the table of targets     that the drag will support, may be %NULL
             * @param actions the bitmask of possible actions for a drag from this widget
             */
            drag_source_set(
                start_button_mask: Gdk.ModifierType | null,
                targets: Gtk.TargetEntry[] | null,
                actions: Gdk.DragAction | null,
            ): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to `icon`. See the docs for #GtkIconTheme for more details.
             * @param icon A #GIcon
             */
            drag_source_set_icon_gicon(icon: Gio.Icon): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a themed icon. See the docs for #GtkIconTheme for more details.
             * @param icon_name name of icon to use
             */
            drag_source_set_icon_name(icon_name: string): void;
            /**
             * Sets the icon that will be used for drags from a particular widget
             * from a #GdkPixbuf. GTK+ retains a reference for `pixbuf` and will
             * release it when it is no longer needed.
             * @param pixbuf the #GdkPixbuf for the drag icon
             */
            drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
            /**
             * Sets the icon that will be used for drags from a particular source
             * to a stock icon.
             * @param stock_id the ID of the stock icon to use
             */
            drag_source_set_icon_stock(stock_id: string): void;
            /**
             * Changes the target types that this widget offers for drag-and-drop.
             * The widget must first be made into a drag source with
             * gtk_drag_source_set().
             * @param target_list list of draggable targets, or %NULL for none
             */
            drag_source_set_target_list(target_list?: Gtk.TargetList | null): void;
            /**
             * Undoes the effects of gtk_drag_source_set().
             */
            drag_source_unset(): void;
            /**
             * Removes a highlight set by gtk_drag_highlight() from
             * a widget.
             */
            drag_unhighlight(): void;
            /**
             * Draws `widget` to `cr`. The top left corner of the widget will be
             * drawn to the currently set origin point of `cr`.
             *
             * You should pass a cairo context as `cr` argument that is in an
             * original state. Otherwise the resulting drawing is undefined. For
             * example changing the operator using cairo_set_operator() or the
             * line width using cairo_set_line_width() might have unwanted side
             * effects.
             * You may however change the context’s transform matrix - like with
             * cairo_scale(), cairo_translate() or cairo_set_matrix() and clip
             * region with cairo_clip() prior to calling this function. Also, it
             * is fine to modify the context with cairo_save() and
             * cairo_push_group() prior to calling this function.
             *
             * Note that special-purpose widgets may contain special code for
             * rendering to the screen and might appear differently on screen
             * and when rendered using gtk_widget_draw().
             * @param cr a cairo context to draw to
             */
            draw(cr: cairo.Context): void;
            /**
             * Ensures that `widget` has a style (`widget->`style).
             *
             * Not a very useful function; most of the time, if you
             * want the style, the widget is realized, and realized
             * widgets are guaranteed to have a style already.
             */
            ensure_style(): void;
            /**
             * Notifies the user about an input-related error on this widget.
             * If the #GtkSettings:gtk-error-bell setting is %TRUE, it calls
             * gdk_window_beep(), otherwise it does nothing.
             *
             * Note that the effect of gdk_window_beep() can be configured in many
             * ways, depending on the windowing backend and the desktop environment
             * or window manager that is used.
             */
            error_bell(): void;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             * @returns return from the event signal emission (%TRUE if               the event was handled)
             */
            event(event: Gdk.Event): boolean;
            /**
             * Stops emission of #GtkWidget::child-notify signals on `widget`. The
             * signals are queued until gtk_widget_thaw_child_notify() is called
             * on `widget`.
             *
             * This is the analogue of g_object_freeze_notify() for child properties.
             */
            freeze_child_notify(): void;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             * @returns the #AtkObject associated with @widget
             */
            get_accessible(): Atk.Object;
            /**
             * Retrieves the #GActionGroup that was registered using `prefix`. The resulting
             * #GActionGroup may have been registered to `widget` or any #GtkWidget in its
             * ancestry.
             *
             * If no action group was found matching `prefix,` then %NULL is returned.
             * @param prefix The “prefix” of the action group.
             * @returns A #GActionGroup or %NULL.
             */
            get_action_group(prefix: string): Gio.ActionGroup | null;
            /**
             * Returns the baseline that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function, and when allocating child
             * widgets in #GtkWidget::size_allocate.
             * @returns the baseline of the @widget, or -1 if none
             */
            get_allocated_baseline(): number;
            /**
             * Returns the height that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the height of the @widget
             */
            get_allocated_height(): number;
            /**
             * Retrieves the widget’s allocated size.
             *
             * This function returns the last values passed to
             * gtk_widget_size_allocate_with_baseline(). The value differs from
             * the size returned in gtk_widget_get_allocation() in that functions
             * like gtk_widget_set_halign() can adjust the allocation, but not
             * the value returned by this function.
             *
             * If a widget is not visible, its allocated size is 0.
             */
            get_allocated_size(): [Gtk.Allocation, number];
            /**
             * Returns the width that has currently been allocated to `widget`.
             * This function is intended to be used when implementing handlers
             * for the #GtkWidget::draw function.
             * @returns the width of the @widget
             */
            get_allocated_width(): number;
            /**
             * Retrieves the widget’s allocation.
             *
             * Note, when implementing a #GtkContainer: a widget’s allocation will
             * be its “adjusted” allocation, that is, the widget’s parent
             * container typically calls gtk_widget_size_allocate() with an
             * allocation, and that allocation is then adjusted (to handle margin
             * and alignment for example) before assignment to the widget.
             * gtk_widget_get_allocation() returns the adjusted allocation that
             * was actually assigned to the widget. The adjusted allocation is
             * guaranteed to be completely contained within the
             * gtk_widget_size_allocate() allocation, however. So a #GtkContainer
             * is guaranteed that its children stay inside the assigned bounds,
             * but not that they have exactly the bounds the container assigned.
             * There is no way to get the original allocation assigned by
             * gtk_widget_size_allocate(), since it isn’t stored; if a container
             * implementation needs that information it will have to track it itself.
             */
            get_allocation(): Gtk.Allocation;
            /**
             * Gets the first ancestor of `widget` with type `widget_type`. For example,
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)` gets
             * the first #GtkBox that’s an ancestor of `widget`. No reference will be
             * added to the returned widget; it should not be unreferenced. See note
             * about checking for a toplevel #GtkWindow in the docs for
             * gtk_widget_get_toplevel().
             *
             * Note that unlike gtk_widget_is_ancestor(), gtk_widget_get_ancestor()
             * considers `widget` to be an ancestor of itself.
             * @param widget_type ancestor type
             * @returns the ancestor widget, or %NULL if not found
             */
            get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
            /**
             * Determines whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * See gtk_widget_set_app_paintable()
             * @returns %TRUE if the widget is app paintable
             */
            get_app_paintable(): boolean;
            /**
             * Determines whether `widget` can be a default widget. See
             * gtk_widget_set_can_default().
             * @returns %TRUE if @widget can be a default widget, %FALSE otherwise
             */
            get_can_default(): boolean;
            /**
             * Determines whether `widget` can own the input focus. See
             * gtk_widget_set_can_focus().
             * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
             */
            get_can_focus(): boolean;
            /**
             * This function is only for use in widget implementations. Obtains
             * `widget->`requisition, unless someone has forced a particular
             * geometry on the widget (e.g. with gtk_widget_set_size_request()),
             * in which case it returns that geometry instead of the widget's
             * requisition.
             *
             * This function differs from gtk_widget_size_request() in that
             * it retrieves the last size request value from `widget->`requisition,
             * while gtk_widget_size_request() actually calls the "size_request" method
             * on `widget` to compute the size request and fill in `widget->`requisition,
             * and only then returns `widget->`requisition.
             *
             * Because this function does not call the “size_request” method, it
             * can only be used when you know that `widget->`requisition is
             * up-to-date, that is, gtk_widget_size_request() has been called
             * since the last time a resize was queued. In general, only container
             * implementations have this information; applications should use
             * gtk_widget_size_request().
             */
            get_child_requisition(): Gtk.Requisition;
            /**
             * Gets the value set with gtk_widget_set_child_visible().
             * If you feel a need to use this function, your code probably
             * needs reorganization.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @returns %TRUE if the widget is mapped with the parent.
             */
            get_child_visible(): boolean;
            /**
             * Retrieves the widget’s clip area.
             *
             * The clip area is the area in which all of `widget'`s drawing will
             * happen. Other toolkits call it the bounding box.
             *
             * Historically, in GTK+ the clip area has been equal to the allocation
             * retrieved via gtk_widget_get_allocation().
             */
            get_clip(): Gtk.Allocation;
            /**
             * Returns the clipboard object for the given selection to
             * be used with `widget`. `widget` must have a #GdkDisplay
             * associated with it, so must be attached to a toplevel
             * window.
             * @param selection a #GdkAtom which identifies the clipboard             to use. %GDK_SELECTION_CLIPBOARD gives the             default clipboard. Another common value             is %GDK_SELECTION_PRIMARY, which gives             the primary X selection.
             * @returns the appropriate clipboard object. If no             clipboard already exists, a new one will             be created. Once a clipboard object has             been created, it is persistent for all time.
             */
            get_clipboard(selection: Gdk.Atom): Gtk.Clipboard;
            /**
             * Obtains the composite name of a widget.
             * @returns the composite name of @widget, or %NULL if @widget is not   a composite child. The string should be freed when it is no   longer needed.
             */
            get_composite_name(): string;
            /**
             * Returns whether `device` can interact with `widget` and its
             * children. See gtk_widget_set_device_enabled().
             * @param device a #GdkDevice
             * @returns %TRUE is @device is enabled for @widget
             */
            get_device_enabled(device: Gdk.Device): boolean;
            /**
             * Returns the events mask for the widget corresponding to an specific device. These
             * are the events that the widget will receive when `device` operates on it.
             * @param device a #GdkDevice
             * @returns device event mask for @widget
             */
            get_device_events(device: Gdk.Device): Gdk.EventMask;
            /**
             * Gets the reading direction for a particular widget. See
             * gtk_widget_set_direction().
             * @returns the reading direction for the widget.
             */
            get_direction(): Gtk.TextDirection;
            /**
             * Get the #GdkDisplay for the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow at the top.
             *
             * In general, you should only create display specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkDisplay for the toplevel for this widget.
             */
            get_display(): Gdk.Display;
            /**
             * Determines whether the widget is double buffered.
             *
             * See gtk_widget_set_double_buffered()
             * @returns %TRUE if the widget is double buffered
             */
            get_double_buffered(): boolean;
            /**
             * Returns the event mask (see #GdkEventMask) for the widget. These are the
             * events that the widget will receive.
             *
             * Note: Internally, the widget event mask will be the logical OR of the event
             * mask set through gtk_widget_set_events() or gtk_widget_add_events(), and the
             * event mask necessary to cater for every #GtkEventController created for the
             * widget.
             * @returns event mask for @widget
             */
            get_events(): number;
            /**
             * Returns whether the widget should grab focus when it is clicked with the mouse.
             * See gtk_widget_set_focus_on_click().
             * @returns %TRUE if the widget should grab focus when it is clicked with               the mouse.
             */
            get_focus_on_click(): boolean;
            /**
             * Gets the font map that has been set with gtk_widget_set_font_map().
             * @returns A #PangoFontMap, or %NULL
             */
            get_font_map(): Pango.FontMap | null;
            /**
             * Returns the #cairo_font_options_t used for Pango rendering. When not set,
             * the defaults font options for the #GdkScreen will be used.
             * @returns the #cairo_font_options_t or %NULL if not set
             */
            get_font_options(): cairo.FontOptions | null;
            /**
             * Obtains the frame clock for a widget. The frame clock is a global
             * “ticker” that can be used to drive animations and repaints.  The
             * most common reason to get the frame clock is to call
             * gdk_frame_clock_get_frame_time(), in order to get a time to use for
             * animating. For example you might record the start of the animation
             * with an initial value from gdk_frame_clock_get_frame_time(), and
             * then update the animation by calling
             * gdk_frame_clock_get_frame_time() again during each repaint.
             *
             * gdk_frame_clock_request_phase() will result in a new frame on the
             * clock, but won’t necessarily repaint any widgets. To repaint a
             * widget, you have to use gtk_widget_queue_draw() which invalidates
             * the widget (thus scheduling it to receive a draw on the next
             * frame). gtk_widget_queue_draw() will also end up requesting a frame
             * on the appropriate frame clock.
             *
             * A widget’s frame clock will not change while the widget is
             * mapped. Reparenting a widget (which implies a temporary unmap) can
             * change the widget’s frame clock.
             *
             * Unrealized widgets do not have a frame clock.
             * @returns a #GdkFrameClock, or %NULL if widget is unrealized
             */
            get_frame_clock(): Gdk.FrameClock | null;
            /**
             * Gets the value of the #GtkWidget:halign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
             * alignment.
             * @returns the horizontal alignment of @widget
             */
            get_halign(): Gtk.Align;
            /**
             * Returns the current value of the has-tooltip property.  See
             * #GtkWidget:has-tooltip for more information.
             * @returns current value of has-tooltip on @widget.
             */
            get_has_tooltip(): boolean;
            /**
             * Determines whether `widget` has a #GdkWindow of its own. See
             * gtk_widget_set_has_window().
             * @returns %TRUE if @widget has a window, %FALSE otherwise
             */
            get_has_window(): boolean;
            /**
             * Gets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Containers should use gtk_widget_compute_expand() rather than
             * this function, to see whether a widget, or any of its children,
             * has the expand flag set. If any child of a widget wants to
             * expand, the parent may ask to expand also.
             *
             * This function only looks at the widget’s own hexpand flag, rather
             * than computing whether the entire widget tree rooted at this widget
             * wants to expand.
             * @returns whether hexpand flag is set
             */
            get_hexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_hexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @returns whether hexpand has been explicitly set
             */
            get_hexpand_set(): boolean;
            /**
             * Whether the widget is mapped.
             * @returns %TRUE if the widget is mapped, %FALSE otherwise.
             */
            get_mapped(): boolean;
            /**
             * Gets the value of the #GtkWidget:margin-bottom property.
             * @returns The bottom margin of @widget
             */
            get_margin_bottom(): number;
            /**
             * Gets the value of the #GtkWidget:margin-end property.
             * @returns The end margin of @widget
             */
            get_margin_end(): number;
            /**
             * Gets the value of the #GtkWidget:margin-left property.
             * @returns The left margin of @widget
             */
            get_margin_left(): number;
            /**
             * Gets the value of the #GtkWidget:margin-right property.
             * @returns The right margin of @widget
             */
            get_margin_right(): number;
            /**
             * Gets the value of the #GtkWidget:margin-start property.
             * @returns The start margin of @widget
             */
            get_margin_start(): number;
            /**
             * Gets the value of the #GtkWidget:margin-top property.
             * @returns The top margin of @widget
             */
            get_margin_top(): number;
            /**
             * Returns the modifier mask the `widget’`s windowing system backend
             * uses for a particular purpose.
             *
             * See gdk_keymap_get_modifier_mask().
             * @param intent the use case for the modifier mask
             * @returns the modifier mask used for @intent.
             */
            get_modifier_mask(intent: Gdk.ModifierIntent | null): Gdk.ModifierType;
            /**
             * Returns the current modifier style for the widget. (As set by
             * gtk_widget_modify_style().) If no style has previously set, a new
             * #GtkRcStyle will be created with all values unset, and set as the
             * modifier style for the widget. If you make changes to this rc
             * style, you must call gtk_widget_modify_style(), passing in the
             * returned rc style, to make sure that your changes take effect.
             *
             * Caution: passing the style back to gtk_widget_modify_style() will
             * normally end up destroying it, because gtk_widget_modify_style() copies
             * the passed-in style and sets the copy as the new modifier style,
             * thus dropping any reference to the old modifier style. Add a reference
             * to the modifier style if you want to keep it alive.
             * @returns the modifier style for the widget.     This rc style is owned by the widget. If you want to keep a     pointer to value this around, you must add a refcount using     g_object_ref().
             */
            get_modifier_style(): Gtk.RcStyle;
            /**
             * Retrieves the name of a widget. See gtk_widget_set_name() for the
             * significance of widget names.
             * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
             */
            get_name(): string;
            /**
             * Returns the current value of the #GtkWidget:no-show-all property,
             * which determines whether calls to gtk_widget_show_all()
             * will affect this widget.
             * @returns the current value of the “no-show-all” property.
             */
            get_no_show_all(): boolean;
            /**
             * Fetches the requested opacity for this widget.
             * See gtk_widget_set_opacity().
             * @returns the requested opacity for this widget.
             */
            get_opacity(): number;
            /**
             * Gets a #PangoContext with the appropriate font map, font description,
             * and base direction for this widget. Unlike the context returned
             * by gtk_widget_create_pango_context(), this context is owned by
             * the widget (it can be used until the screen for the widget changes
             * or the widget is removed from its toplevel), and will be updated to
             * match any changes to the widget’s attributes. This can be tracked
             * by using the #GtkWidget::screen-changed signal on the widget.
             * @returns the #PangoContext for the widget.
             */
            get_pango_context(): Pango.Context;
            /**
             * Returns the parent container of `widget`.
             * @returns the parent container of @widget, or %NULL
             */
            get_parent(): Gtk.Widget | null;
            /**
             * Gets `widget’`s parent window, or %NULL if it does not have one.
             * @returns the parent window of @widget, or %NULL if it does not have a parent window.
             */
            get_parent_window(): Gdk.Window | null;
            /**
             * Returns the #GtkWidgetPath representing `widget,` if the widget
             * is not connected to a toplevel widget, a partial path will be
             * created.
             * @returns The #GtkWidgetPath representing @widget
             */
            get_path(): Gtk.WidgetPath;
            /**
             * Obtains the location of the mouse pointer in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(); and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             */
            get_pointer(): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves the minimum and natural size of a widget, taking
             * into account the widget’s preference for height-for-width management.
             *
             * This is used to retrieve a suitable size by container widgets which do
             * not impose any restrictions on the child placement. It can be used
             * to deduce toplevel window and menu sizes as well as child widgets in
             * free-form containers such as GtkLayout.
             *
             * Handle with care. Note that the natural height of a height-for-width
             * widget will generally be a smaller size than the minimum height, since the required
             * height for the natural width is generally smaller than the required height for
             * the minimum width.
             *
             * Use gtk_widget_get_preferred_height_and_baseline_for_width() if you want to support
             * baseline alignment.
             */
            get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            get_preferred_width_for_height(height: number): [number, number];
            /**
             * Determines whether `widget` is realized.
             * @returns %TRUE if @widget is realized, %FALSE otherwise
             */
            get_realized(): boolean;
            /**
             * Determines whether `widget` is always treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See gtk_widget_set_receives_default().
             * @returns %TRUE if @widget acts as the default widget when focused,               %FALSE otherwise
             */
            get_receives_default(): boolean;
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             * @returns The #GtkSizeRequestMode preferred by @widget.
             */
            get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Retrieves the widget’s requisition.
             *
             * This function should only be used by widget implementations in
             * order to figure whether the widget’s requisition has actually
             * changed after some internal state change (so that they can call
             * gtk_widget_queue_resize() instead of gtk_widget_queue_draw()).
             *
             * Normally, gtk_widget_size_request() should be used.
             */
            get_requisition(): Gtk.Requisition;
            /**
             * Get the root window where this widget is located. This function can
             * only be called after the widget has been added to a widget
             * hierarchy with #GtkWindow at the top.
             *
             * The root window is useful for such purposes as creating a popup
             * #GdkWindow associated with the window. In general, you should only
             * create display specific resources when a widget has been realized,
             * and you should free those resources when the widget is unrealized.
             * @returns the #GdkWindow root window for the toplevel for this widget.
             */
            get_root_window(): Gdk.Window;
            /**
             * Retrieves the internal scale factor that maps from window coordinates
             * to the actual device pixels. On traditional systems this is 1, on
             * high density outputs, it can be a higher value (typically 2).
             *
             * See gdk_window_get_scale_factor().
             * @returns the scale factor for @widget
             */
            get_scale_factor(): number;
            /**
             * Get the #GdkScreen from the toplevel window associated with
             * this widget. This function can only be called after the widget
             * has been added to a widget hierarchy with a #GtkWindow
             * at the top.
             *
             * In general, you should only create screen specific
             * resources when a widget has been realized, and you should
             * free those resources when the widget is unrealized.
             * @returns the #GdkScreen for the toplevel for this widget.
             */
            get_screen(): Gdk.Screen;
            /**
             * Returns the widget’s sensitivity (in the sense of returning
             * the value that has been set using gtk_widget_set_sensitive()).
             *
             * The effective sensitivity of a widget is however determined by both its
             * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
             * @returns %TRUE if the widget is sensitive
             */
            get_sensitive(): boolean;
            /**
             * Gets the settings object holding the settings used for this widget.
             *
             * Note that this function can only be called when the #GtkWidget
             * is attached to a toplevel, since the settings object is specific
             * to a particular #GdkScreen.
             * @returns the relevant #GtkSettings object
             */
            get_settings(): Gtk.Settings;
            /**
             * Gets the size request that was explicitly set for the widget using
             * gtk_widget_set_size_request(). A value of -1 stored in `width` or
             * `height` indicates that that dimension has not been set explicitly
             * and the natural requisition of the widget will be used instead. See
             * gtk_widget_set_size_request(). To get the size a widget will
             * actually request, call gtk_widget_get_preferred_size() instead of
             * this function.
             */
            get_size_request(): [number, number];
            /**
             * Returns the widget’s state. See gtk_widget_set_state().
             * @returns the state of @widget.
             */
            get_state(): Gtk.StateType;
            /**
             * Returns the widget state as a flag set. It is worth mentioning
             * that the effective %GTK_STATE_FLAG_INSENSITIVE state will be
             * returned, that is, also based on parent insensitivity, even if
             * `widget` itself is sensitive.
             *
             * Also note that if you are looking for a way to obtain the
             * #GtkStateFlags to pass to a #GtkStyleContext method, you
             * should look at gtk_style_context_get_state().
             * @returns The state flags for widget
             */
            get_state_flags(): Gtk.StateFlags;
            /**
             * Simply an accessor function that returns `widget->`style.
             * @returns the widget’s #GtkStyle
             */
            get_style(): Gtk.Style;
            /**
             * Returns the style context associated to `widget`. The returned object is
             * guaranteed to be the same for the lifetime of `widget`.
             * @returns a #GtkStyleContext. This memory is owned by @widget and          must not be freed.
             */
            get_style_context(): Gtk.StyleContext;
            /**
             * Returns %TRUE if `widget` is multiple pointer aware. See
             * gtk_widget_set_support_multidevice() for more information.
             * @returns %TRUE if @widget is multidevice aware.
             */
            get_support_multidevice(): boolean;
            /**
             * Fetch an object build from the template XML for `widget_type` in this `widget` instance.
             *
             * This will only report children which were previously declared with
             * gtk_widget_class_bind_template_child_full() or one of its
             * variants.
             *
             * This function is only meant to be called for code which is private to the `widget_type` which
             * declared the child and is meant for language bindings which cannot easily make use
             * of the GObject structure offsets.
             * @param widget_type The #GType to get a template child for
             * @param name The “id” of the child defined in the template XML
             * @returns The object built in the template XML with the id @name
             */
            get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_markup(): string | null;
            /**
             * Gets the contents of the tooltip for `widget`.
             * @returns the tooltip text, or %NULL. You should free the   returned string with g_free() when done.
             */
            get_tooltip_text(): string | null;
            /**
             * Returns the #GtkWindow of the current tooltip. This can be the
             * GtkWindow created by default, or the custom tooltip window set
             * using gtk_widget_set_tooltip_window().
             * @returns The #GtkWindow of the current tooltip.
             */
            get_tooltip_window(): Gtk.Window;
            /**
             * This function returns the topmost widget in the container hierarchy
             * `widget` is a part of. If `widget` has no parent widgets, it will be
             * returned as the topmost widget. No reference will be added to the
             * returned widget; it should not be unreferenced.
             *
             * Note the difference in behavior vs. gtk_widget_get_ancestor();
             * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
             * would return
             * %NULL if `widget` wasn’t inside a toplevel window, and if the
             * window was inside a #GtkWindow-derived widget which was in turn
             * inside the toplevel #GtkWindow. While the second case may
             * seem unlikely, it actually happens when a #GtkPlug is embedded
             * inside a #GtkSocket within the same application.
             *
             * To reliably find the toplevel #GtkWindow, use
             * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
             * on the result. For instance, to get the title of a widget's toplevel
             * window, one might use:
             *
             * ```c
             * static const char *
             * get_widget_toplevel_title (GtkWidget *widget)
             * {
             *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
             *   if (GTK_IS_WINDOW (toplevel))
             *     {
             *       return gtk_window_get_title (GTK_WINDOW (toplevel));
             *     }
             *
             *   return NULL;
             * }
             * ```
             *
             * @returns the topmost ancestor of @widget, or @widget itself    if there’s no ancestor.
             */
            get_toplevel(): Gtk.Widget;
            /**
             * Gets the value of the #GtkWidget:valign property.
             *
             * For backwards compatibility reasons this method will never return
             * %GTK_ALIGN_BASELINE, but instead it will convert it to
             * %GTK_ALIGN_FILL. If your widget want to support baseline aligned
             * children it must use gtk_widget_get_valign_with_baseline(), or
             * `g_object_get (widget, "valign", &value, NULL)`, which will
             * also report the true value.
             * @returns the vertical alignment of @widget, ignoring baseline alignment
             */
            get_valign(): Gtk.Align;
            /**
             * Gets the value of the #GtkWidget:valign property, including
             * %GTK_ALIGN_BASELINE.
             * @returns the vertical alignment of @widget
             */
            get_valign_with_baseline(): Gtk.Align;
            /**
             * Gets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_get_hexpand() for more detail.
             * @returns whether vexpand flag is set
             */
            get_vexpand(): boolean;
            /**
             * Gets whether gtk_widget_set_vexpand() has been used to
             * explicitly set the expand flag on this widget.
             *
             * See gtk_widget_get_hexpand_set() for more detail.
             * @returns whether vexpand has been explicitly set
             */
            get_vexpand_set(): boolean;
            /**
             * Determines whether the widget is visible. If you want to
             * take into account whether the widget’s parent is also marked as
             * visible, use gtk_widget_is_visible() instead.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See gtk_widget_set_visible().
             * @returns %TRUE if the widget is visible
             */
            get_visible(): boolean;
            /**
             * Gets the visual that will be used to render `widget`.
             * @returns the visual for @widget
             */
            get_visual(): Gdk.Visual;
            /**
             * Returns the widget’s window if it is realized, %NULL otherwise
             * @returns @widget’s window.
             */
            get_window(): Gdk.Window | null;
            /**
             * Makes `widget` the current grabbed widget.
             *
             * This means that interaction with other widgets in the same
             * application is blocked and mouse as well as keyboard events
             * are delivered to this widget.
             *
             * If `widget` is not sensitive, it is not set as the current
             * grabbed widget and this function does nothing.
             */
            grab_add(): void;
            /**
             * Causes `widget` to become the default widget. `widget` must be able to be
             * a default widget; typically you would ensure this yourself
             * by calling gtk_widget_set_can_default() with a %TRUE value.
             * The default widget is activated when
             * the user presses Enter in a window. Default widgets must be
             * activatable, that is, gtk_widget_activate() should affect them. Note
             * that #GtkEntry widgets require the “activates-default” property
             * set to %TRUE before they activate the default widget when Enter
             * is pressed and the #GtkEntry is focused.
             */
            grab_default(): void;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            grab_focus(): void;
            /**
             * Removes the grab from the given widget.
             *
             * You have to pair calls to gtk_grab_add() and gtk_grab_remove().
             *
             * If `widget` does not have the grab, this function does nothing.
             */
            grab_remove(): void;
            /**
             * Determines whether the widget is currently grabbing events, so it
             * is the only widget receiving input events (keyboard and mouse).
             *
             * See also gtk_grab_add().
             * @returns %TRUE if the widget is in the grab_widgets stack
             */
            has_grab(): boolean;
            /**
             * Determines if the widget style has been looked up through the rc mechanism.
             * @returns %TRUE if the widget has been looked up through the rc   mechanism, %FALSE otherwise.
             */
            has_rc_style(): boolean;
            /**
             * Checks whether there is a #GdkScreen is associated with
             * this widget. All toplevel widgets have an associated
             * screen, and all widgets added into a hierarchy with a toplevel
             * window at the top.
             * @returns %TRUE if there is a #GdkScreen associated   with the widget.
             */
            has_screen(): boolean;
            /**
             * Determines if the widget should show a visible indication that
             * it has the global input focus. This is a convenience function for
             * use in ::draw handlers that takes into account whether focus
             * indication should currently be shown in the toplevel window of
             * `widget`. See gtk_window_get_focus_visible() for more information
             * about focus indication.
             *
             * To find out if the widget has the global input focus, use
             * gtk_widget_has_focus().
             * @returns %TRUE if the widget should display a “focus rectangle”
             */
            has_visible_focus(): boolean;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            hide(): void;
            /**
             * Utility function; intended to be connected to the #GtkWidget::delete-event
             * signal on a #GtkWindow. The function calls gtk_widget_hide() on its
             * argument, then returns %TRUE. If connected to ::delete-event, the
             * result is that clicking the close button for a window (on the
             * window frame, top right corner usually) will hide but not destroy
             * the window. By default, GTK+ destroys windows when ::delete-event
             * is received.
             * @returns %TRUE
             */
            hide_on_delete(): boolean;
            /**
             * Returns whether the widget is currently being destroyed.
             * This information can sometimes be used to avoid doing
             * unnecessary work.
             * @returns %TRUE if @widget is being destroyed
             */
            in_destruction(): boolean;
            /**
             * Creates and initializes child widgets defined in templates. This
             * function must be called in the instance initializer for any
             * class which assigned itself a template using gtk_widget_class_set_template()
             *
             * It is important to call this function in the instance initializer
             * of a #GtkWidget subclass and not in #GObject.constructed() or
             * #GObject.constructor() for two reasons.
             *
             * One reason is that generally derived widgets will assume that parent
             * class composite widgets have been created in their instance
             * initializers.
             *
             * Another reason is that when calling g_object_new() on a widget with
             * composite templates, it’s important to build the composite widgets
             * before the construct properties are set. Properties passed to g_object_new()
             * should take precedence over properties set in the private template XML.
             */
            init_template(): void;
            /**
             * Sets an input shape for this widget’s GDK window. This allows for
             * windows which react to mouse click in a nonrectangular region, see
             * gdk_window_input_shape_combine_region() for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            input_shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Inserts `group` into `widget`. Children of `widget` that implement
             * #GtkActionable can then be associated with actions in `group` by
             * setting their “action-name” to
             * `prefix`.`action-name`.
             *
             * If `group` is %NULL, a previously inserted group for `name` is removed
             * from `widget`.
             * @param name the prefix for actions in @group
             * @param group a #GActionGroup, or %NULL
             */
            insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
            /**
             * Computes the intersection of a `widget’`s area and `area,` storing
             * the intersection in `intersection,` and returns %TRUE if there was
             * an intersection.  `intersection` may be %NULL if you’re only
             * interested in whether there was an intersection.
             * @param area a rectangle
             * @returns %TRUE if there was an intersection
             */
            intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
            /**
             * Determines whether `widget` is somewhere inside `ancestor,` possibly with
             * intermediate containers.
             * @param ancestor another #GtkWidget
             * @returns %TRUE if @ancestor contains @widget as a child,    grandchild, great grandchild, etc.
             */
            is_ancestor(ancestor: Gtk.Widget): boolean;
            /**
             * Whether `widget` can rely on having its alpha channel
             * drawn correctly. On X11 this function returns whether a
             * compositing manager is running for `widget’`s screen.
             *
             * Please note that the semantics of this call will change
             * in the future if used on a widget that has a composited
             * window in its hierarchy (as set by gdk_window_set_composited()).
             * @returns %TRUE if the widget can rely on its alpha channel being drawn correctly.
             */
            is_composited(): boolean;
            /**
             * Determines whether `widget` can be drawn to. A widget can be drawn
             * to if it is mapped and visible.
             * @returns %TRUE if @widget is drawable, %FALSE otherwise
             */
            is_drawable(): boolean;
            /**
             * Returns the widget’s effective sensitivity, which means
             * it is sensitive itself and also its parent widget is sensitive
             * @returns %TRUE if the widget is effectively sensitive
             */
            is_sensitive(): boolean;
            /**
             * Determines whether `widget` is a toplevel widget.
             *
             * Currently only #GtkWindow and #GtkInvisible (and out-of-process
             * #GtkPlugs) are toplevel widgets. Toplevel widgets have no parent
             * widget.
             * @returns %TRUE if @widget is a toplevel, %FALSE otherwise
             */
            is_toplevel(): boolean;
            /**
             * Determines whether the widget and all its parents are marked as
             * visible.
             *
             * This function does not check if the widget is obscured in any way.
             *
             * See also gtk_widget_get_visible() and gtk_widget_set_visible()
             * @returns %TRUE if the widget and all its parents are visible
             */
            is_visible(): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             * @returns %TRUE if stopping keyboard navigation is fine, %FALSE               if the emitting widget should try to handle the keyboard               navigation attempt in its parent container(s).
             */
            keynav_failed(direction: Gtk.DirectionType | null): boolean;
            /**
             * Lists the closures used by `widget` for accelerator group connections
             * with gtk_accel_group_connect_by_path() or gtk_accel_group_connect().
             * The closures can be used to monitor accelerator changes on `widget,`
             * by connecting to the `GtkAccelGroup:`:accel-changed signal of the
             * #GtkAccelGroup of a closure which can be found out with
             * gtk_accel_group_from_accel_closure().
             * @returns a newly allocated #GList of closures
             */
            list_accel_closures(): GObject.Closure[];
            /**
             * Retrieves a %NULL-terminated array of strings containing the prefixes of
             * #GActionGroup's available to `widget`.
             * @returns a %NULL-terminated array of strings.
             */
            list_action_prefixes(): string[];
            /**
             * Returns a newly allocated list of the widgets, normally labels, for
             * which this widget is the target of a mnemonic (see for example,
             * gtk_label_set_mnemonic_widget()).
             *
             * The widgets in the list are not individually referenced. If you
             * want to iterate through the list and perform actions involving
             * callbacks that might destroy the widgets, you
             * must call `g_list_foreach (result,
             * (GFunc)g_object_ref, NULL)` first, and then unref all the
             * widgets afterwards.
             * @returns the list of  mnemonic labels; free this list  with g_list_free() when you are done with it.
             */
            list_mnemonic_labels(): Gtk.Widget[];
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            map(): void;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             * @returns %TRUE if the signal has been handled
             */
            mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Sets the base color for a widget in a particular state.
             * All other style values are left untouched. The base color
             * is the background color used along with the text color
             * (see gtk_widget_modify_text()) for widgets such as #GtkEntry
             * and #GtkTextView. See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > base color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the base color on that.
             * @param state the state for which to set the base color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_base().
             */
            modify_base(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
            /**
             * Sets the background color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * > Note that “no window” widgets (which have the %GTK_NO_WINDOW
             * > flag set) draw on their parent container’s window and thus may
             * > not draw any background themselves. This is the case for e.g.
             * > #GtkLabel.
             * >
             * > To modify the background of such widgets, you have to set the
             * > background color on their parent; if you want to set the background
             * > of a rectangular area around a label, try placing the label in
             * > a #GtkEventBox widget and setting the background color on that.
             * @param state the state for which to set the background color
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_bg().
             */
            modify_bg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the #GtkWidget
             * cursor-color and secondary-cursor-color
             * style properties.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param primary the color to use for primary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_cursor().
             * @param secondary the color to use for secondary cursor (does     not need to be allocated), or %NULL to undo the effect of     previous calls to of gtk_widget_modify_cursor().
             */
            modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
            /**
             * Sets the foreground color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the foreground color
             * @param color the color to assign (does not need to be allocated),     or %NULL to undo the effect of previous calls to     of gtk_widget_modify_fg().
             */
            modify_fg(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
            /**
             * Sets the font to use for a widget.
             *
             * All other style values are left untouched.
             * See also gtk_widget_modify_style().
             * @param font_desc the font description to use, or %NULL     to undo the effect of previous calls to gtk_widget_modify_font()
             */
            modify_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Modifies style values on the widget.
             *
             * Modifications made using this technique take precedence over
             * style values set via an RC file, however, they will be overridden
             * if a style is explicitly set on the widget using gtk_widget_set_style().
             * The #GtkRcStyle-struct is designed so each field can either be
             * set or unset, so it is possible, using this function, to modify some
             * style values and leave the others unchanged.
             *
             * Note that modifications made with this function are not cumulative
             * with previous calls to gtk_widget_modify_style() or with such
             * functions as gtk_widget_modify_fg(). If you wish to retain
             * previous values, you must first call gtk_widget_get_modifier_style(),
             * make your modifications to the returned style, then call
             * gtk_widget_modify_style() with that style. On the other hand,
             * if you first call gtk_widget_modify_style(), subsequent calls
             * to such functions gtk_widget_modify_fg() will have a cumulative
             * effect with the initial modifications.
             * @param style the #GtkRcStyle-struct holding the style modifications
             */
            modify_style(style: Gtk.RcStyle): void;
            /**
             * Sets the text color for a widget in a particular state.
             *
             * All other style values are left untouched.
             * The text color is the foreground color used along with the
             * base color (see gtk_widget_modify_base()) for widgets such
             * as #GtkEntry and #GtkTextView.
             * See also gtk_widget_modify_style().
             * @param state the state for which to set the text color
             * @param color the color to assign (does not need to     be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_modify_text().
             */
            modify_text(state: Gtk.StateType | null, color?: Gdk.Color | null): void;
            /**
             * Sets the background color to use for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color().
             * @param state the state for which to set the background color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_background_color()
             */
            override_background_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
            /**
             * Sets the color to use for a widget.
             *
             * All other style values are left untouched.
             *
             * This function does not act recursively. Setting the color of a
             * container does not affect its children. Note that some widgets that
             * you may not think of as containers, for instance #GtkButtons,
             * are actually containers.
             *
             * This API is mostly meant as a quick way for applications to
             * change a widget appearance. If you are developing a widgets
             * library and intend this change to be themeable, it is better
             * done by setting meaningful CSS classes in your
             * widget/container implementation through gtk_style_context_add_class().
             *
             * This way, your widget library can install a #GtkCssProvider
             * with the %GTK_STYLE_PROVIDER_PRIORITY_FALLBACK priority in order
             * to provide a default styling for those widgets that need so, and
             * this theming may fully overridden by the user’s theme.
             *
             * Note that for complex widgets this may bring in undesired
             * results (such as uniform background color everywhere), in
             * these cases it is better to fully style such widgets through a
             * #GtkCssProvider with the %GTK_STYLE_PROVIDER_PRIORITY_APPLICATION
             * priority.
             * @param state the state for which to set the color
             * @param color the color to assign, or %NULL to undo the effect     of previous calls to gtk_widget_override_color()
             */
            override_color(state: Gtk.StateFlags | null, color?: Gdk.RGBA | null): void;
            /**
             * Sets the cursor color to use in a widget, overriding the
             * cursor-color and secondary-cursor-color
             * style properties. All other style values are left untouched.
             * See also gtk_widget_modify_style().
             *
             * Note that the underlying properties have the #GdkColor type,
             * so the alpha value in `primary` and `secondary` will be ignored.
             * @param cursor the color to use for primary cursor (does not need to be     allocated), or %NULL to undo the effect of previous calls to     of gtk_widget_override_cursor().
             * @param secondary_cursor the color to use for secondary cursor (does not     need to be allocated), or %NULL to undo the effect of previous     calls to of gtk_widget_override_cursor().
             */
            override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
            /**
             * Sets the font to use for a widget. All other style values are
             * left untouched. See gtk_widget_override_color().
             * @param font_desc the font description to use, or %NULL to undo     the effect of previous calls to gtk_widget_override_font()
             */
            override_font(font_desc?: Pango.FontDescription | null): void;
            /**
             * Sets a symbolic color for a widget.
             *
             * All other style values are left untouched.
             * See gtk_widget_override_color() for overriding the foreground
             * or background color.
             * @param name the name of the symbolic color to modify
             * @param color the color to assign (does not need     to be allocated), or %NULL to undo the effect of previous     calls to gtk_widget_override_symbolic_color()
             */
            override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
            /**
             * Obtains the full path to `widget`. The path is simply the name of a
             * widget and all its parents in the container hierarchy, separated by
             * periods. The name of a widget comes from
             * gtk_widget_get_name(). Paths are used to apply styles to a widget
             * in gtkrc configuration files. Widget names are the type of the
             * widget by default (e.g. “GtkButton”) or can be set to an
             * application-specific value with gtk_widget_set_name(). By setting
             * the name of a widget, you allow users or theme authors to apply
             * styles to that specific widget in their gtkrc
             * file. `path_reversed_p` fills in the path in reverse order,
             * i.e. starting with `widget’`s name instead of starting with the name
             * of `widget’`s outermost ancestor.
             */
            path(): [number, string, string];
            /**
             * This function is only for use in widget implementations.
             *
             * Flags the widget for a rerun of the GtkWidgetClass::size_allocate
             * function. Use this function instead of gtk_widget_queue_resize()
             * when the `widget'`s size request didn't change but it wants to
             * reposition its contents.
             *
             * An example user of this function is gtk_widget_set_halign().
             */
            queue_allocate(): void;
            /**
             * Mark `widget` as needing to recompute its expand flags. Call
             * this function when setting legacy expand child properties
             * on the child of a container.
             *
             * See gtk_widget_compute_expand().
             */
            queue_compute_expand(): void;
            /**
             * Equivalent to calling gtk_widget_queue_draw_area() for the
             * entire area of a widget.
             */
            queue_draw(): void;
            /**
             * Convenience function that calls gtk_widget_queue_draw_region() on
             * the region created from the given coordinates.
             *
             * The region here is specified in widget coordinates.
             * Widget coordinates are a bit odd; for historical reasons, they are
             * defined as `widget->`window coordinates for widgets that return %TRUE for
             * gtk_widget_get_has_window(), and are relative to `widget->`allocation.x,
             * `widget->`allocation.y otherwise.
             *
             * `width` or `height` may be 0, in this case this function does
             * nothing. Negative values for `width` and `height` are not allowed.
             * @param x x coordinate of upper-left corner of rectangle to redraw
             * @param y y coordinate of upper-left corner of rectangle to redraw
             * @param width width of region to draw
             * @param height height of region to draw
             */
            queue_draw_area(x: number, y: number, width: number, height: number): void;
            /**
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            queue_draw_region(region: cairo.Region): void;
            /**
             * This function is only for use in widget implementations.
             * Flags a widget to have its size renegotiated; should
             * be called when a widget for some reason has a new size request.
             * For example, when you change the text in a #GtkLabel, #GtkLabel
             * queues a resize to ensure there’s enough space for the new text.
             *
             * Note that you cannot call gtk_widget_queue_resize() on a widget
             * from inside its implementation of the GtkWidgetClass::size_allocate
             * virtual method. Calls to gtk_widget_queue_resize() from inside
             * GtkWidgetClass::size_allocate will be silently ignored.
             */
            queue_resize(): void;
            /**
             * This function works like gtk_widget_queue_resize(),
             * except that the widget is not invalidated.
             */
            queue_resize_no_redraw(): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            realize(): void;
            /**
             * Computes the intersection of a `widget’`s area and `region,` returning
             * the intersection. The result may be empty, use cairo_region_is_empty() to
             * check.
             * @param region a #cairo_region_t, in the same coordinate system as          @widget->allocation. That is, relative to @widget->window          for widgets which return %FALSE from gtk_widget_get_has_window();          relative to the parent window of @widget->window otherwise.
             * @returns A newly allocated region holding the intersection of @widget     and @region.
             */
            region_intersect(region: cairo.Region): cairo.Region;
            /**
             * Registers a #GdkWindow with the widget and sets it up so that
             * the widget receives events for it. Call gtk_widget_unregister_window()
             * when destroying the window.
             *
             * Before 3.8 you needed to call gdk_window_set_user_data() directly to set
             * this up. This is now deprecated and you should use gtk_widget_register_window()
             * instead. Old code will keep working as is, although some new features like
             * transparency might not work perfectly.
             * @param window a #GdkWindow
             */
            register_window(window: Gdk.Window): void;
            /**
             * Removes an accelerator from `widget,` previously installed with
             * gtk_widget_add_accelerator().
             * @param accel_group accel group for this widget
             * @param accel_key GDK keyval of the accelerator
             * @param accel_mods modifier key combination of the accelerator
             * @returns whether an accelerator was installed and could be removed
             */
            remove_accelerator(
                accel_group: Gtk.AccelGroup,
                accel_key: number,
                accel_mods: Gdk.ModifierType | null,
            ): boolean;
            /**
             * Removes a widget from the list of mnemonic labels for
             * this widget. (See gtk_widget_list_mnemonic_labels()). The widget
             * must have previously been added to the list with
             * gtk_widget_add_mnemonic_label().
             * @param label a #GtkWidget that was previously set as a mnemonic label for         @widget with gtk_widget_add_mnemonic_label().
             */
            remove_mnemonic_label(label: Gtk.Widget): void;
            /**
             * Removes a tick callback previously registered with
             * gtk_widget_add_tick_callback().
             * @param id an id returned by gtk_widget_add_tick_callback()
             */
            remove_tick_callback(id: number): void;
            /**
             * A convenience function that uses the theme settings for `widget`
             * to look up `stock_id` and render it to a pixbuf. `stock_id` should
             * be a stock icon ID such as #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size`
             * should be a size such as #GTK_ICON_SIZE_MENU. `detail` should be a
             * string that identifies the widget or code doing the rendering, so
             * that theme engines can special-case rendering for that widget or
             * code.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be
             * freed after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @param detail render detail to pass to theme engine
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
            /**
             * A convenience function that uses the theme engine and style
             * settings for `widget` to look up `stock_id` and render it to
             * a pixbuf. `stock_id` should be a stock icon ID such as
             * #GTK_STOCK_OPEN or #GTK_STOCK_OK. `size` should be a size
             * such as #GTK_ICON_SIZE_MENU.
             *
             * The pixels in the returned #GdkPixbuf are shared with the rest of
             * the application and should not be modified. The pixbuf should be freed
             * after use with g_object_unref().
             * @param stock_id a stock ID
             * @param size a stock size (#GtkIconSize). A size of `(GtkIconSize)-1`     means render at the size of the source and don’t scale (if there are     multiple source sizes, GTK+ picks one of the available sizes).
             * @returns a new pixbuf, or %NULL if the     stock ID wasn’t known
             */
            render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
            /**
             * Moves a widget from one #GtkContainer to another, handling reference
             * count issues to avoid destroying the widget.
             * @param new_parent a #GtkContainer to move the widget into
             */
            reparent(new_parent: Gtk.Widget): void;
            /**
             * Reset the styles of `widget` and all descendents, so when
             * they are looked up again, they get the correct values
             * for the currently loaded RC file settings.
             *
             * This function is not useful for applications.
             */
            reset_rc_styles(): void;
            /**
             * Updates the style context of `widget` and all descendants
             * by updating its widget path. #GtkContainers may want
             * to use this on a child when reordering it in a way that a different
             * style might apply to it. See also gtk_container_get_path_for_child().
             */
            reset_style(): void;
            /**
             * Very rarely-used function. This function is used to emit
             * an expose event on a widget. This function is not normally used
             * directly. The only time it is used is when propagating an expose
             * event to a windowless child widget (gtk_widget_get_has_window() is %FALSE),
             * and that is normally done using gtk_container_propagate_draw().
             *
             * If you want to force an area of a window to be redrawn,
             * use gdk_window_invalidate_rect() or gdk_window_invalidate_region().
             * To cause the redraw to be done immediately, follow that call
             * with a call to gdk_window_process_updates().
             * @param event a expose #GdkEvent
             * @returns return from the event signal emission (%TRUE if   the event was handled)
             */
            send_expose(event: Gdk.Event): number;
            /**
             * Sends the focus change `event` to `widget`
             *
             * This function is not meant to be used by applications. The only time it
             * should be used is when it is necessary for a #GtkWidget to assign focus
             * to a widget that is semantically owned by the first widget even though
             * it’s not a direct child - for instance, a search entry in a floating
             * window similar to the quick search in #GtkTreeView.
             *
             * An example of its usage is:
             *
             *
             * ```c
             *   GdkEvent *fevent = gdk_event_new (GDK_FOCUS_CHANGE);
             *
             *   fevent->focus_change.type = GDK_FOCUS_CHANGE;
             *   fevent->focus_change.in = TRUE;
             *   fevent->focus_change.window = _gtk_widget_get_window (widget);
             *   if (fevent->focus_change.window != NULL)
             *     g_object_ref (fevent->focus_change.window);
             *
             *   gtk_widget_send_focus_change (widget, fevent);
             *
             *   gdk_event_free (event);
             * ```
             *
             * @param event a #GdkEvent of type GDK_FOCUS_CHANGE
             * @returns the return value from the event signal emission: %TRUE   if the event was handled, and %FALSE otherwise
             */
            send_focus_change(event: Gdk.Event): boolean;
            /**
             * Given an accelerator group, `accel_group,` and an accelerator path,
             * `accel_path,` sets up an accelerator in `accel_group` so whenever the
             * key binding that is defined for `accel_path` is pressed, `widget`
             * will be activated.  This removes any accelerators (for any
             * accelerator group) installed by previous calls to
             * gtk_widget_set_accel_path(). Associating accelerators with
             * paths allows them to be modified by the user and the modifications
             * to be saved for future use. (See gtk_accel_map_save().)
             *
             * This function is a low level function that would most likely
             * be used by a menu creation system like #GtkUIManager. If you
             * use #GtkUIManager, setting up accelerator paths will be done
             * automatically.
             *
             * Even when you you aren’t using #GtkUIManager, if you only want to
             * set up accelerators on menu items gtk_menu_item_set_accel_path()
             * provides a somewhat more convenient interface.
             *
             * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
             * pass a static string, you can save some memory by interning it first with
             * g_intern_static_string().
             * @param accel_path path used to look up the accelerator
             * @param accel_group a #GtkAccelGroup.
             */
            set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void;
            /**
             * Sets the widget’s allocation.  This should not be used
             * directly, but from within a widget’s size_allocate method.
             *
             * The allocation set should be the “adjusted” or actual
             * allocation. If you’re implementing a #GtkContainer, you want to use
             * gtk_widget_size_allocate() instead of gtk_widget_set_allocation().
             * The GtkWidgetClass::adjust_size_allocation virtual method adjusts the
             * allocation inside gtk_widget_size_allocate() to create an adjusted
             * allocation.
             * @param allocation a pointer to a #GtkAllocation to copy from
             */
            set_allocation(allocation: Gtk.Allocation): void;
            /**
             * Sets whether the application intends to draw on the widget in
             * an #GtkWidget::draw handler.
             *
             * This is a hint to the widget and does not affect the behavior of
             * the GTK+ core; many widgets ignore this flag entirely. For widgets
             * that do pay attention to the flag, such as #GtkEventBox and #GtkWindow,
             * the effect is to suppress default themed drawing of the widget's
             * background. (Children of the widget will still be drawn.) The application
             * is then entirely responsible for drawing the widget background.
             *
             * Note that the background is still drawn when the widget is mapped.
             * @param app_paintable %TRUE if the application will paint on the widget
             */
            set_app_paintable(app_paintable: boolean): void;
            /**
             * Specifies whether `widget` can be a default widget. See
             * gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param can_default whether or not @widget can be a default widget.
             */
            set_can_default(can_default: boolean): void;
            /**
             * Specifies whether `widget` can own the input focus. See
             * gtk_widget_grab_focus() for actually setting the input focus on a
             * widget.
             * @param can_focus whether or not @widget can own the input focus.
             */
            set_can_focus(can_focus: boolean): void;
            /**
             * Sets whether `widget` should be mapped along with its when its parent
             * is mapped and `widget` has been shown with gtk_widget_show().
             *
             * The child visibility can be set for widget before it is added to
             * a container with gtk_widget_set_parent(), to avoid mapping
             * children unnecessary before immediately unmapping them. However
             * it will be reset to its default state of %TRUE when the widget
             * is removed from a container.
             *
             * Note that changing the child visibility of a widget does not
             * queue a resize on the widget. Most of the time, the size of
             * a widget is computed from all visible children, whether or
             * not they are mapped. If this is not the case, the container
             * can queue a resize itself.
             *
             * This function is only useful for container implementations and
             * never should be called by an application.
             * @param is_visible if %TRUE, @widget should be mapped along with its parent.
             */
            set_child_visible(is_visible: boolean): void;
            /**
             * Sets the widget’s clip.  This must not be used directly,
             * but from within a widget’s size_allocate method.
             * It must be called after gtk_widget_set_allocation() (or after chaining up
             * to the parent class), because that function resets the clip.
             *
             * The clip set should be the area that `widget` draws on. If `widget` is a
             * #GtkContainer, the area must contain all children's clips.
             *
             * If this function is not called by `widget` during a ::size-allocate handler,
             * the clip will be set to `widget'`s allocation.
             * @param clip a pointer to a #GtkAllocation to copy from
             */
            set_clip(clip: Gtk.Allocation): void;
            /**
             * Sets a widgets composite name. The widget must be
             * a composite child of its parent; see gtk_widget_push_composite_child().
             * @param name the name to set
             */
            set_composite_name(name: string): void;
            /**
             * Enables or disables a #GdkDevice to interact with `widget`
             * and all its children.
             *
             * It does so by descending through the #GdkWindow hierarchy
             * and enabling the same mask that is has for core events
             * (i.e. the one that gdk_window_get_events() returns).
             * @param device a #GdkDevice
             * @param enabled whether to enable the device
             */
            set_device_enabled(device: Gdk.Device, enabled: boolean): void;
            /**
             * Sets the device event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive from `device`. Keep
             * in mind that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_device_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with windowless widgets (which return
             * %FALSE from gtk_widget_get_has_window());
             * to get events on those widgets, place them inside a #GtkEventBox
             * and receive events on the event box.
             * @param device a #GdkDevice
             * @param events event mask
             */
            set_device_events(device: Gdk.Device, events: Gdk.EventMask | null): void;
            /**
             * Sets the reading direction on a particular widget. This direction
             * controls the primary direction for widgets containing text,
             * and also the direction in which the children of a container are
             * packed. The ability to set the direction is present in order
             * so that correct localization into languages with right-to-left
             * reading directions can be done. Generally, applications will
             * let the default reading direction present, except for containers
             * where the containers are arranged in an order that is explicitly
             * visual rather than logical (such as buttons for text justification).
             *
             * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
             * set by gtk_widget_set_default_direction() will be used.
             * @param dir the new direction
             */
            set_direction(dir: Gtk.TextDirection | null): void;
            /**
             * Widgets are double buffered by default; you can use this function
             * to turn off the buffering. “Double buffered” simply means that
             * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() are called
             * automatically around expose events sent to the
             * widget. gdk_window_begin_draw_frame() diverts all drawing to a widget's
             * window to an offscreen buffer, and gdk_window_end_draw_frame() draws the
             * buffer to the screen. The result is that users see the window
             * update in one smooth step, and don’t see individual graphics
             * primitives being rendered.
             *
             * In very simple terms, double buffered widgets don’t flicker,
             * so you would only use this function to turn off double buffering
             * if you had special needs and really knew what you were doing.
             *
             * Note: if you turn off double-buffering, you have to handle
             * expose events, since even the clearing to the background color or
             * pixmap will not happen automatically (as it is done in
             * gdk_window_begin_draw_frame()).
             *
             * In 3.10 GTK and GDK have been restructured for translucent drawing. Since
             * then expose events for double-buffered widgets are culled into a single
             * event to the toplevel GDK window. If you now unset double buffering, you
             * will cause a separate rendering pass for every widget. This will likely
             * cause rendering problems - in particular related to stacking - and usually
             * increases rendering times significantly.
             * @param double_buffered %TRUE to double-buffer a widget
             */
            set_double_buffered(double_buffered: boolean): void;
            /**
             * Sets the event mask (see #GdkEventMask) for a widget. The event
             * mask determines which events a widget will receive. Keep in mind
             * that different widgets have different default event masks, and by
             * changing the event mask you may disrupt a widget’s functionality,
             * so be careful. This function must be called while a widget is
             * unrealized. Consider gtk_widget_add_events() for widgets that are
             * already realized, or if you want to preserve the existing event
             * mask. This function can’t be used with widgets that have no window.
             * (See gtk_widget_get_has_window()).  To get events on those widgets,
             * place them inside a #GtkEventBox and receive events on the event
             * box.
             * @param events event mask
             */
            set_events(events: number): void;
            /**
             * Sets whether the widget should grab focus when it is clicked with the mouse.
             * Making mouse clicks not grab focus is useful in places like toolbars where
             * you don’t want the keyboard focus removed from the main area of the
             * application.
             * @param focus_on_click whether the widget should grab focus when clicked with the mouse
             */
            set_focus_on_click(focus_on_click: boolean): void;
            /**
             * Sets the font map to use for Pango rendering. When not set, the widget
             * will inherit the font map from its parent.
             * @param font_map a #PangoFontMap, or %NULL to unset any previously     set font map
             */
            set_font_map(font_map?: Pango.FontMap | null): void;
            /**
             * Sets the #cairo_font_options_t used for Pango rendering in this widget.
             * When not set, the default font options for the #GdkScreen will be used.
             * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
             */
            set_font_options(options?: cairo.FontOptions | null): void;
            /**
             * Sets the horizontal alignment of `widget`.
             * See the #GtkWidget:halign property.
             * @param align the horizontal alignment
             */
            set_halign(align: Gtk.Align | null): void;
            /**
             * Sets the has-tooltip property on `widget` to `has_tooltip`.  See
             * #GtkWidget:has-tooltip for more information.
             * @param has_tooltip whether or not @widget has a tooltip.
             */
            set_has_tooltip(has_tooltip: boolean): void;
            /**
             * Specifies whether `widget` has a #GdkWindow of its own. Note that
             * all realized widgets have a non-%NULL “window” pointer
             * (gtk_widget_get_window() never returns a %NULL window when a widget
             * is realized), but for many of them it’s actually the #GdkWindow of
             * one of its parent widgets. Widgets that do not create a %window for
             * themselves in #GtkWidget::realize must announce this by
             * calling this function with `has_window` = %FALSE.
             *
             * This function should only be called by widget implementations,
             * and they should call it in their init() function.
             * @param has_window whether or not @widget has a window.
             */
            set_has_window(has_window: boolean): void;
            /**
             * Sets whether the widget would like any available extra horizontal
             * space. When a user resizes a #GtkWindow, widgets with expand=TRUE
             * generally receive the extra space. For example, a list or
             * scrollable area or document in your window would often be set to
             * expand.
             *
             * Call this function to set the expand flag if you would like your
             * widget to become larger horizontally when the window has extra
             * room.
             *
             * By default, widgets automatically expand if any of their children
             * want to expand. (To see if a widget will automatically expand given
             * its current children and state, call gtk_widget_compute_expand(). A
             * container can decide how the expandability of children affects the
             * expansion of the container by overriding the compute_expand virtual
             * method on #GtkWidget.).
             *
             * Setting hexpand explicitly with this function will override the
             * automatic expand behavior.
             *
             * This function forces the widget to expand or not to expand,
             * regardless of children.  The override occurs because
             * gtk_widget_set_hexpand() sets the hexpand-set property (see
             * gtk_widget_set_hexpand_set()) which causes the widget’s hexpand
             * value to be used, rather than looking at children and widget state.
             * @param expand whether to expand
             */
            set_hexpand(expand: boolean): void;
            /**
             * Sets whether the hexpand flag (see gtk_widget_get_hexpand()) will
             * be used.
             *
             * The hexpand-set property will be set automatically when you call
             * gtk_widget_set_hexpand() to set hexpand, so the most likely
             * reason to use this function would be to unset an explicit expand
             * flag.
             *
             * If hexpand is set, then it overrides any computed
             * expand value based on child widgets. If hexpand is not
             * set, then the expand value depends on whether any
             * children of the widget would like to expand.
             *
             * There are few reasons to use this function, but it’s here
             * for completeness and consistency.
             * @param set value for hexpand-set property
             */
            set_hexpand_set(set: boolean): void;
            /**
             * Marks the widget as being mapped.
             *
             * This function should only ever be called in a derived widget's
             * “map” or “unmap” implementation.
             * @param mapped %TRUE to mark the widget as mapped
             */
            set_mapped(mapped: boolean): void;
            /**
             * Sets the bottom margin of `widget`.
             * See the #GtkWidget:margin-bottom property.
             * @param margin the bottom margin
             */
            set_margin_bottom(margin: number): void;
            /**
             * Sets the end margin of `widget`.
             * See the #GtkWidget:margin-end property.
             * @param margin the end margin
             */
            set_margin_end(margin: number): void;
            /**
             * Sets the left margin of `widget`.
             * See the #GtkWidget:margin-left property.
             * @param margin the left margin
             */
            set_margin_left(margin: number): void;
            /**
             * Sets the right margin of `widget`.
             * See the #GtkWidget:margin-right property.
             * @param margin the right margin
             */
            set_margin_right(margin: number): void;
            /**
             * Sets the start margin of `widget`.
             * See the #GtkWidget:margin-start property.
             * @param margin the start margin
             */
            set_margin_start(margin: number): void;
            /**
             * Sets the top margin of `widget`.
             * See the #GtkWidget:margin-top property.
             * @param margin the top margin
             */
            set_margin_top(margin: number): void;
            /**
             * Widgets can be named, which allows you to refer to them from a
             * CSS file. You can apply a style to widgets with a particular name
             * in the CSS file. See the documentation for the CSS syntax (on the
             * same page as the docs for #GtkStyleContext).
             *
             * Note that the CSS syntax has certain special characters to delimit
             * and represent elements in a selector (period, #, >, *...), so using
             * these will make your widget impossible to match by name. Any combination
             * of alphanumeric symbols, dashes and underscores will suffice.
             * @param name name for the widget
             */
            set_name(name: string): void;
            /**
             * Sets the #GtkWidget:no-show-all property, which determines whether
             * calls to gtk_widget_show_all() will affect this widget.
             *
             * This is mostly for use in constructing widget hierarchies with externally
             * controlled visibility, see #GtkUIManager.
             * @param no_show_all the new value for the “no-show-all” property
             */
            set_no_show_all(no_show_all: boolean): void;
            /**
             * Request the `widget` to be rendered partially transparent,
             * with opacity 0 being fully transparent and 1 fully opaque. (Opacity values
             * are clamped to the [0,1] range.).
             * This works on both toplevel widget, and child widgets, although there
             * are some limitations:
             *
             * For toplevel widgets this depends on the capabilities of the windowing
             * system. On X11 this has any effect only on X screens with a compositing manager
             * running. See gtk_widget_is_composited(). On Windows it should work
             * always, although setting a window’s opacity after the window has been
             * shown causes it to flicker once on Windows.
             *
             * For child widgets it doesn’t work if any affected widget has a native window, or
             * disables double buffering.
             * @param opacity desired opacity, between 0 and 1
             */
            set_opacity(opacity: number): void;
            /**
             * This function is useful only when implementing subclasses of
             * #GtkContainer.
             * Sets the container as the parent of `widget,` and takes care of
             * some details such as updating the state and style of the child
             * to reflect its new location. The opposite function is
             * gtk_widget_unparent().
             * @param parent parent container
             */
            set_parent(parent: Gtk.Widget): void;
            /**
             * Sets a non default parent window for `widget`.
             *
             * For #GtkWindow classes, setting a `parent_window` effects whether
             * the window is a toplevel window or can be embedded into other
             * widgets.
             *
             * For #GtkWindow classes, this needs to be called before the
             * window is realized.
             * @param parent_window the new parent window.
             */
            set_parent_window(parent_window: Gdk.Window): void;
            /**
             * Marks the widget as being realized. This function must only be
             * called after all #GdkWindows for the `widget` have been created
             * and registered.
             *
             * This function should only ever be called in a derived widget's
             * “realize” or “unrealize” implementation.
             * @param realized %TRUE to mark the widget as realized
             */
            set_realized(realized: boolean): void;
            /**
             * Specifies whether `widget` will be treated as the default widget
             * within its toplevel when it has the focus, even if another widget
             * is the default.
             *
             * See gtk_widget_grab_default() for details about the meaning of
             * “default”.
             * @param receives_default whether or not @widget can be a default widget.
             */
            set_receives_default(receives_default: boolean): void;
            /**
             * Sets whether the entire widget is queued for drawing when its size
             * allocation changes. By default, this setting is %TRUE and
             * the entire widget is redrawn on every size change. If your widget
             * leaves the upper left unchanged when made bigger, turning this
             * setting off will improve performance.
             *
             * Note that for widgets where gtk_widget_get_has_window() is %FALSE
             * setting this flag to %FALSE turns off all allocation on resizing:
             * the widget will not even redraw if its position changes; this is to
             * allow containers that don’t draw anything to avoid excess
             * invalidations. If you set this flag on a widget with no window that
             * does draw on `widget->`window, you are
             * responsible for invalidating both the old and new allocation of the
             * widget when the widget is moved and responsible for invalidating
             * regions newly when the widget increases size.
             * @param redraw_on_allocate if %TRUE, the entire widget will be redrawn   when it is allocated to a new size. Otherwise, only the   new portion of the widget will be redrawn.
             */
            set_redraw_on_allocate(redraw_on_allocate: boolean): void;
            /**
             * Sets the sensitivity of a widget. A widget is sensitive if the user
             * can interact with it. Insensitive widgets are “grayed out” and the
             * user can’t interact with them. Insensitive widgets are known as
             * “inactive”, “disabled”, or “ghosted” in some other toolkits.
             * @param sensitive %TRUE to make the widget sensitive
             */
            set_sensitive(sensitive: boolean): void;
            /**
             * Sets the minimum size of a widget; that is, the widget’s size
             * request will be at least `width` by `height`. You can use this
             * function to force a widget to be larger than it normally would be.
             *
             * In most cases, gtk_window_set_default_size() is a better choice for
             * toplevel windows than this function; setting the default size will
             * still allow users to shrink the window. Setting the size request
             * will force them to leave the window at least as large as the size
             * request. When dealing with window sizes,
             * gtk_window_set_geometry_hints() can be a useful function as well.
             *
             * Note the inherent danger of setting any fixed size - themes,
             * translations into other languages, different fonts, and user action
             * can all change the appropriate size for a given widget. So, it's
             * basically impossible to hardcode a size that will always be
             * correct.
             *
             * The size request of a widget is the smallest size a widget can
             * accept while still functioning well and drawing itself correctly.
             * However in some strange cases a widget may be allocated less than
             * its requested size, and in many cases a widget may be allocated more
             * space than it requested.
             *
             * If the size request in a given direction is -1 (unset), then
             * the “natural” size request of the widget will be used instead.
             *
             * The size request set here does not include any margin from the
             * #GtkWidget properties margin-left, margin-right, margin-top, and
             * margin-bottom, but it does include pretty much all other padding
             * or border properties set by any subclass of #GtkWidget.
             * @param width width @widget should request, or -1 to unset
             * @param height height @widget should request, or -1 to unset
             */
            set_size_request(width: number, height: number): void;
            /**
             * This function is for use in widget implementations. Sets the state
             * of a widget (insensitive, prelighted, etc.) Usually you should set
             * the state using wrapper functions such as gtk_widget_set_sensitive().
             * @param state new state for @widget
             */
            set_state(state: Gtk.StateType | null): void;
            /**
             * This function is for use in widget implementations. Turns on flag
             * values in the current widget state (insensitive, prelighted, etc.).
             *
             * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
             * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set the widget's
             * direction, use gtk_widget_set_direction().
             *
             * It is worth mentioning that any other state than %GTK_STATE_FLAG_INSENSITIVE,
             * will be propagated down to all non-internal children if `widget` is a
             * #GtkContainer, while %GTK_STATE_FLAG_INSENSITIVE itself will be propagated
             * down to all #GtkContainer children by different means than turning on the
             * state flag down the hierarchy, both gtk_widget_get_state_flags() and
             * gtk_widget_is_sensitive() will make use of these.
             * @param flags State flags to turn on
             * @param clear Whether to clear state before turning on @flags
             */
            set_state_flags(flags: Gtk.StateFlags | null, clear: boolean): void;
            /**
             * Used to set the #GtkStyle for a widget (`widget->`style). Since
             * GTK 3, this function does nothing, the passed in style is ignored.
             * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
             */
            set_style(style?: Gtk.Style | null): void;
            /**
             * Enables or disables multiple pointer awareness. If this setting is %TRUE,
             * `widget` will start receiving multiple, per device enter/leave events. Note
             * that if custom #GdkWindows are created in #GtkWidget::realize,
             * gdk_window_set_support_multidevice() will have to be called manually on them.
             * @param support_multidevice %TRUE to support input from multiple devices.
             */
            set_support_multidevice(support_multidevice: boolean): void;
            /**
             * Sets `markup` as the contents of the tooltip, which is marked up with
             *  the [Pango text markup language][PangoMarkupFormat].
             *
             * This function will take care of setting #GtkWidget:has-tooltip to %TRUE
             * and of the default handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-markup property and
             * gtk_tooltip_set_markup().
             * @param markup the contents of the tooltip for @widget, or %NULL
             */
            set_tooltip_markup(markup?: string | null): void;
            /**
             * Sets `text` as the contents of the tooltip. This function will take
             * care of setting #GtkWidget:has-tooltip to %TRUE and of the default
             * handler for the #GtkWidget::query-tooltip signal.
             *
             * See also the #GtkWidget:tooltip-text property and gtk_tooltip_set_text().
             * @param text the contents of the tooltip for @widget
             */
            set_tooltip_text(text?: string | null): void;
            /**
             * Replaces the default window used for displaying
             * tooltips with `custom_window`. GTK+ will take care of showing and
             * hiding `custom_window` at the right moment, to behave likewise as
             * the default tooltip window. If `custom_window` is %NULL, the default
             * tooltip window will be used.
             * @param custom_window a #GtkWindow, or %NULL
             */
            set_tooltip_window(custom_window?: Gtk.Window | null): void;
            /**
             * Sets the vertical alignment of `widget`.
             * See the #GtkWidget:valign property.
             * @param align the vertical alignment
             */
            set_valign(align: Gtk.Align | null): void;
            /**
             * Sets whether the widget would like any available extra vertical
             * space.
             *
             * See gtk_widget_set_hexpand() for more detail.
             * @param expand whether to expand
             */
            set_vexpand(expand: boolean): void;
            /**
             * Sets whether the vexpand flag (see gtk_widget_get_vexpand()) will
             * be used.
             *
             * See gtk_widget_set_hexpand_set() for more detail.
             * @param set value for vexpand-set property
             */
            set_vexpand_set(set: boolean): void;
            /**
             * Sets the visibility state of `widget`. Note that setting this to
             * %TRUE doesn’t mean the widget is actually viewable, see
             * gtk_widget_get_visible().
             *
             * This function simply calls gtk_widget_show() or gtk_widget_hide()
             * but is nicer to use when the visibility of the widget depends on
             * some condition.
             * @param visible whether the widget should be shown or not
             */
            set_visible(visible: boolean): void;
            /**
             * Sets the visual that should be used for by widget and its children for
             * creating #GdkWindows. The visual must be on the same #GdkScreen as
             * returned by gtk_widget_get_screen(), so handling the
             * #GtkWidget::screen-changed signal is necessary.
             *
             * Setting a new `visual` will not cause `widget` to recreate its windows,
             * so you should call this function before `widget` is realized.
             * @param visual visual to be used or %NULL to unset a previous one
             */
            set_visual(visual?: Gdk.Visual | null): void;
            /**
             * Sets a widget’s window. This function should only be used in a
             * widget’s #GtkWidget::realize implementation. The %window passed is
             * usually either new window created with gdk_window_new(), or the
             * window of its parent widget as returned by
             * gtk_widget_get_parent_window().
             *
             * Widgets must indicate whether they will create their own #GdkWindow
             * by calling gtk_widget_set_has_window(). This is usually done in the
             * widget’s init() function.
             *
             * Note that this function does not add any reference to `window`.
             * @param window a #GdkWindow
             */
            set_window(window: Gdk.Window): void;
            /**
             * Sets a shape for this widget’s GDK window. This allows for
             * transparent windows etc., see gdk_window_shape_combine_region()
             * for more information.
             * @param region shape to be added, or %NULL to remove an existing shape
             */
            shape_combine_region(region?: cairo.Region | null): void;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            show(): void;
            /**
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            show_all(): void;
            /**
             * Shows a widget. If the widget is an unmapped toplevel widget
             * (i.e. a #GtkWindow that has not yet been shown), enter the main
             * loop and wait for the window to actually be mapped. Be careful;
             * because the main loop is running, anything can happen during
             * this function.
             */
            show_now(): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            size_allocate(allocation: Gtk.Allocation): void;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size,
             * position and (optionally) baseline to their child widgets.
             *
             * In this function, the allocation and baseline may be adjusted. It
             * will be forced to a 1x1 minimum size, and the
             * adjust_size_allocation virtual and adjust_baseline_allocation
             * methods on the child will be used to adjust the allocation and
             * baseline. Standard adjustments include removing the widget's
             * margins, and applying the widget’s #GtkWidget:halign and
             * #GtkWidget:valign properties.
             *
             * If the child widget does not have a valign of %GTK_ALIGN_BASELINE the
             * baseline argument is ignored and -1 is used instead.
             * @param allocation position and size to be allocated to @widget
             * @param baseline The baseline of the child, or -1
             */
            size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void;
            /**
             * This function is typically used when implementing a #GtkContainer
             * subclass.  Obtains the preferred size of a widget. The container
             * uses this information to arrange its child widgets and decide what
             * size allocations to give them with gtk_widget_size_allocate().
             *
             * You can also call this function from an application, with some
             * caveats. Most notably, getting a size request requires the widget
             * to be associated with a screen, because font information may be
             * needed. Multihead-aware applications should keep this in mind.
             *
             * Also remember that the size request is not necessarily the size
             * a widget will actually be allocated.
             */
            size_request(): Gtk.Requisition;
            /**
             * This function attaches the widget’s #GtkStyle to the widget's
             * #GdkWindow. It is a replacement for
             *
             *
             * ```
             * widget->style = gtk_style_attach (widget->style, widget->window);
             * ```
             *
             *
             * and should only ever be called in a derived widget’s “realize”
             * implementation which does not chain up to its parent class'
             * “realize” implementation, because one of the parent classes
             * (finally #GtkWidget) would attach the style itself.
             */
            style_attach(): void;
            /**
             * Gets the value of a style property of `widget`.
             * @param property_name the name of a style property
             * @param value location to return the property value
             */
            style_get_property(property_name: string, value: GObject.Value | any): void;
            /**
             * Reverts the effect of a previous call to gtk_widget_freeze_child_notify().
             * This causes all queued #GtkWidget::child-notify signals on `widget` to be
             * emitted.
             */
            thaw_child_notify(): void;
            /**
             * Translate coordinates relative to `src_widget’`s allocation to coordinates
             * relative to `dest_widget’`s allocations. In order to perform this
             * operation, both widgets must be realized, and must share a common
             * toplevel.
             * @param dest_widget a #GtkWidget
             * @param src_x X position relative to @src_widget
             * @param src_y Y position relative to @src_widget
             * @returns %FALSE if either widget was not realized, or there   was no common ancestor. In this case, nothing is stored in   *@dest_x and *@dest_y. Otherwise %TRUE.
             */
            translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
            /**
             * Triggers a tooltip query on the display where the toplevel of `widget`
             * is located. See gtk_tooltip_trigger_tooltip_query() for more
             * information.
             */
            trigger_tooltip_query(): void;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            unmap(): void;
            /**
             * This function is only for use in widget implementations.
             * Should be called by implementations of the remove method
             * on #GtkContainer, to dissociate a child from the container.
             */
            unparent(): void;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            unrealize(): void;
            /**
             * Unregisters a #GdkWindow from the widget that was previously set up with
             * gtk_widget_register_window(). You need to call this when the window is
             * no longer used by the widget, such as when you destroy it.
             * @param window a #GdkWindow
             */
            unregister_window(window: Gdk.Window): void;
            /**
             * This function is for use in widget implementations. Turns off flag
             * values for the current widget state (insensitive, prelighted, etc.).
             * See gtk_widget_set_state_flags().
             * @param flags State flags to turn off
             */
            unset_state_flags(flags: Gtk.StateFlags | null): void;
            vfunc_adjust_baseline_allocation(baseline: number): void;
            vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
            /**
             * Convert an initial size allocation assigned
             *   by a #GtkContainer using gtk_widget_size_allocate(), into an actual
             *   size allocation to be used by the widget. adjust_size_allocation
             *   adjusts to a child widget’s actual allocation
             *   from what a parent container computed for the
             *   child. The adjusted allocation must be entirely within the original
             *   allocation. In any custom implementation, chain up to the default
             *   #GtkWidget implementation of this method, which applies the margin
             *   and alignment properties of #GtkWidget. Chain up
             *   before performing your own adjustments so your
             *   own adjustments remove more allocation after the #GtkWidget base
             *   class has already removed margin and alignment. The natural size
             *   passed in should be adjusted in the same way as the allocated size,
             *   which allows adjustments to perform alignments or other changes
             *   based on natural size.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             * @param allocated_pos
             * @param allocated_size
             */
            vfunc_adjust_size_allocation(
                orientation: Gtk.Orientation,
                minimum_size: number,
                natural_size: number,
                allocated_pos: number,
                allocated_size: number,
            ): void;
            /**
             * Convert an initial size request from a widget's
             *   #GtkSizeRequestMode virtual method implementations into a size request to
             *   be used by parent containers in laying out the widget.
             *   adjust_size_request adjusts from a child widget's
             *   original request to what a parent container should
             *   use for layout. The `for_size` argument will be -1 if the request should
             *   not be for a particular size in the opposing orientation, i.e. if the
             *   request is not height-for-width or width-for-height. If `for_size` is
             *   greater than -1, it is the proposed allocation in the opposing
             *   orientation that we need the request for. Implementations of
             *   adjust_size_request should chain up to the default implementation,
             *   which applies #GtkWidget’s margin properties and imposes any values
             *   from gtk_widget_set_size_request(). Chaining up should be last,
             *   after your subclass adjusts the request, so
             *   #GtkWidget can apply constraints and add the margin properly.
             * @param orientation
             * @param minimum_size
             * @param natural_size
             */
            vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is pressed.
             * @param event
             */
            vfunc_button_press_event(event: Gdk.EventButton): boolean;
            /**
             * Signal will be emitted when a button
             *   (typically from a mouse) is released.
             * @param event
             */
            vfunc_button_release_event(event: Gdk.EventButton): boolean;
            /**
             * Determines whether an accelerator that activates the signal
             * identified by `signal_id` can currently be activated.
             * This is done by emitting the #GtkWidget::can-activate-accel
             * signal on `widget;` if the signal isn’t overridden by a
             * handler or in a derived widget, then the default check is
             * that the widget must be sensitive, and the widget and all
             * its ancestors mapped.
             * @param signal_id the ID of a signal installed on @widget
             */
            vfunc_can_activate_accel(signal_id: number): boolean;
            /**
             * Emits a #GtkWidget::child-notify signal for the
             * [child property][child-properties] `child_property`
             * on `widget`.
             *
             * This is the analogue of g_object_notify() for child properties.
             *
             * Also see gtk_container_child_notify().
             * @param child_property the name of a child property installed on the                  class of @widget’s parent
             */
            vfunc_child_notify(child_property: GObject.ParamSpec): void;
            /**
             * Signal emitted when the composited status of
             *   widgets screen changes. See gdk_screen_is_composited().
             */
            vfunc_composited_changed(): void;
            /**
             * Computes whether a container should give this
             *   widget extra space when possible.
             * @param hexpand_p
             * @param vexpand_p
             */
            vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
            /**
             * Signal will be emitted when the size, position or
             *   stacking of the widget’s window has changed.
             * @param event
             */
            vfunc_configure_event(event: Gdk.EventConfigure): boolean;
            /**
             * Signal emitted when a redirected window belonging to
             *   widget gets drawn into.
             * @param event
             */
            vfunc_damage_event(event: Gdk.EventExpose): boolean;
            /**
             * Signal emitted if a user requests that a toplevel
             *   window is closed.
             * @param event
             */
            vfunc_delete_event(event: Gdk.EventAny): boolean;
            /**
             * Destroys a widget.
             *
             * When a widget is destroyed all references it holds on other objects
             * will be released:
             *
             *  - if the widget is inside a container, it will be removed from its
             *  parent
             *  - if the widget is a container, all its children will be destroyed,
             *  recursively
             *  - if the widget is a top level, it will be removed from the list
             *  of top level widgets that GTK+ maintains internally
             *
             * It's expected that all references held on the widget will also
             * be released; you should connect to the #GtkWidget::destroy signal
             * if you hold a reference to `widget` and you wish to remove it when
             * this function is called. It is not necessary to do so if you are
             * implementing a #GtkContainer, as you'll be able to use the
             * #GtkContainerClass.remove() virtual function for that.
             *
             * It's important to notice that gtk_widget_destroy() will only cause
             * the `widget` to be finalized if no additional references, acquired
             * using g_object_ref(), are held on it. In case additional references
             * are in place, the `widget` will be in an "inert" state after calling
             * this function; `widget` will still point to valid memory, allowing you
             * to release the references you hold, but you may not query the widget's
             * own state.
             *
             * You should typically call this function on top level widgets, and
             * rarely on child widgets.
             *
             * See also: gtk_container_remove()
             */
            vfunc_destroy(): void;
            /**
             * Signal is emitted when a #GdkWindow is destroyed.
             * @param event
             */
            vfunc_destroy_event(event: Gdk.EventAny): boolean;
            /**
             * Signal emitted when the text direction of a
             *   widget changes.
             * @param previous_direction
             */
            vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
            /**
             * Seldomly overidden.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * Signal emitted on the drag source when a drag is
             *   started.
             * @param context
             */
            vfunc_drag_begin(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag
             *   with the action %GDK_ACTION_MOVE is successfully completed.
             * @param context
             */
            vfunc_drag_data_delete(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when the drop
             *   site requests the data which is dragged.
             * @param context
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_get(
                context: Gdk.DragContext,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the
             *   dragged data has been received.
             * @param context
             * @param x
             * @param y
             * @param selection_data
             * @param info
             * @param time_
             */
            vfunc_drag_data_received(
                context: Gdk.DragContext,
                x: number,
                y: number,
                selection_data: Gtk.SelectionData,
                info: number,
                time_: number,
            ): void;
            /**
             * Signal emitted on the drop site when the user drops the
             *   data onto the widget.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted on the drag source when a drag is
             *   finished.
             * @param context
             */
            vfunc_drag_end(context: Gdk.DragContext): void;
            /**
             * Signal emitted on the drag source when a drag has
             *   failed.
             * @param context
             * @param result
             */
            vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean;
            /**
             * Signal emitted on the drop site when the cursor leaves
             *   the widget.
             * @param context
             * @param time_
             */
            vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
            /**
             * signal emitted on the drop site when the user moves
             *   the cursor over the widget during a drag.
             * @param context
             * @param x
             * @param y
             * @param time_
             */
            vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
            /**
             * Signal emitted when a widget is supposed to render itself.
             * @param cr
             */
            vfunc_draw(cr: cairo.Context): boolean;
            /**
             * Signal event will be emitted when the pointer
             *   enters the widget’s window.
             * @param event
             */
            vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * Rarely-used function. This function is used to emit
             * the event signals on a widget (those signals should never
             * be emitted without using this function to do so).
             * If you want to synthesize an event though, don’t use this function;
             * instead, use gtk_main_do_event() so the event will behave as if
             * it were in the event queue. Don’t synthesize expose events; instead,
             * use gdk_window_invalidate_rect() to invalidate a region of the
             * window.
             * @param event a #GdkEvent
             */
            vfunc_event(event: Gdk.Event): boolean;
            vfunc_focus(direction: Gtk.DirectionType): boolean;
            /**
             * Signal emitted when the keyboard focus enters the
             * widget’s window.
             * @param event
             */
            vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
            /**
             * Signal emitted when the keyboard focus leaves the
             * widget’s window.
             * @param event
             */
            vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
            /**
             * Returns the accessible object that describes the widget to an
             * assistive technology.
             *
             * If accessibility support is not available, this #AtkObject
             * instance may be a no-op. Likewise, if no class-specific #AtkObject
             * implementation is available for the widget instance in question,
             * it will inherit an #AtkObject implementation from the first ancestor
             * class for which such an implementation is defined.
             *
             * The documentation of the
             * [ATK](http://developer.gnome.org/atk/stable/)
             * library contains more information about accessible objects and their uses.
             */
            vfunc_get_accessible(): Atk.Object;
            /**
             * Retrieves a widget’s initial minimum and natural height.
             *
             * This call is specific to width-for-height requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_height(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural height and the corresponding baselines if it would be given
             * the specified `width,` or the default height if `width` is -1. The baselines may be -1 which means
             * that no baseline is requested for this widget.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request and GtkWidgetClass::adjust_baseline_request virtual methods
             * and by any #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation, or -1 if none
             */
            vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
            /**
             * Retrieves a widget’s minimum and natural height if it would be given
             * the specified `width`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param width the width which is available for allocation
             */
            vfunc_get_preferred_height_for_width(width: number): [number, number];
            /**
             * Retrieves a widget’s initial minimum and natural width.
             *
             * This call is specific to height-for-width requests.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             */
            vfunc_get_preferred_width(): [number, number];
            /**
             * Retrieves a widget’s minimum and natural width if it would be given
             * the specified `height`.
             *
             * The returned request will be modified by the
             * GtkWidgetClass::adjust_size_request virtual method and by any
             * #GtkSizeGroups that have been applied. That is, the returned request
             * is the one that should be used for layout, not necessarily the one
             * returned by the widget itself.
             * @param height the height which is available for allocation
             */
            vfunc_get_preferred_width_for_height(height: number): [number, number];
            /**
             * Gets whether the widget prefers a height-for-width layout
             * or a width-for-height layout.
             *
             * #GtkBin widgets generally propagate the preference of
             * their child, container widgets need to request something either in
             * context of their children or in context of their allocation
             * capabilities.
             */
            vfunc_get_request_mode(): Gtk.SizeRequestMode;
            /**
             * Signal emitted when a pointer or keyboard grab
             *   on a window belonging to widget gets broken.
             * @param event
             */
            vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
            /**
             * Causes `widget` to have the keyboard focus for the #GtkWindow it's
             * inside. `widget` must be a focusable widget, such as a #GtkEntry;
             * something like #GtkFrame won’t work.
             *
             * More precisely, it must have the %GTK_CAN_FOCUS flag set. Use
             * gtk_widget_set_can_focus() to modify that flag.
             *
             * The widget also needs to be realized and mapped. This is indicated by the
             * related signals. Grabbing the focus immediately after creating the widget
             * will likely fail and cause critical warnings.
             */
            vfunc_grab_focus(): void;
            /**
             * Signal emitted when a widget becomes shadowed by a
             *   GTK+ grab (not a pointer or keyboard grab) on another widget, or
             *   when it becomes unshadowed due to a grab being removed.
             * @param was_grabbed
             */
            vfunc_grab_notify(was_grabbed: boolean): void;
            /**
             * Reverses the effects of gtk_widget_show(), causing the widget to be
             * hidden (invisible to the user).
             */
            vfunc_hide(): void;
            /**
             * Signal emitted when the anchored state of a
             *   widget changes.
             * @param previous_toplevel
             */
            vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void;
            /**
             * Signal emitted when a key is pressed.
             * @param event
             */
            vfunc_key_press_event(event: Gdk.EventKey): boolean;
            /**
             * Signal is emitted when a key is released.
             * @param event
             */
            vfunc_key_release_event(event: Gdk.EventKey): boolean;
            /**
             * This function should be called whenever keyboard navigation within
             * a single widget hits a boundary. The function emits the
             * #GtkWidget::keynav-failed signal on the widget and its return
             * value should be interpreted in a way similar to the return value of
             * gtk_widget_child_focus():
             *
             * When %TRUE is returned, stay in the widget, the failed keyboard
             * navigation is OK and/or there is nowhere we can/should move the
             * focus to.
             *
             * When %FALSE is returned, the caller should continue with keyboard
             * navigation outside the widget, e.g. by calling
             * gtk_widget_child_focus() on the widget’s toplevel.
             *
             * The default ::keynav-failed handler returns %FALSE for
             * %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD. For the other
             * values of #GtkDirectionType it returns %TRUE.
             *
             * Whenever the default handler returns %TRUE, it also calls
             * gtk_widget_error_bell() to notify the user of the failed keyboard
             * navigation.
             *
             * A use case for providing an own implementation of ::keynav-failed
             * (either by connecting to it or by overriding it) would be a row of
             * #GtkEntry widgets where the user should be able to navigate the
             * entire row with the cursor keys, as e.g. known from user interfaces
             * that require entering license keys.
             * @param direction direction of focus movement
             */
            vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
            /**
             * Will be emitted when the pointer leaves the
             *   widget’s window.
             * @param event
             */
            vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be mapped if it isn’t already.
             */
            vfunc_map(): void;
            /**
             * Signal emitted when the widget’s window is mapped.
             * @param event
             */
            vfunc_map_event(event: Gdk.EventAny): boolean;
            /**
             * Emits the #GtkWidget::mnemonic-activate signal.
             * @param group_cycling %TRUE if there are other widgets with the same mnemonic
             */
            vfunc_mnemonic_activate(group_cycling: boolean): boolean;
            /**
             * Signal emitted when the pointer moves over
             *   the widget’s #GdkWindow.
             * @param event
             */
            vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
            /**
             * Signal emitted when a change of focus is requested
             * @param direction
             */
            vfunc_move_focus(direction: Gtk.DirectionType): void;
            /**
             * Signal emitted when a new parent has been set on a
             *   widget.
             * @param previous_parent
             */
            vfunc_parent_set(previous_parent: Gtk.Widget): void;
            /**
             * Signal emitted whenever a widget should pop up a
             *   context menu.
             */
            vfunc_popup_menu(): boolean;
            /**
             * Signal will be emitted when a property on
             *   the widget’s window has been changed or deleted.
             * @param event
             */
            vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
            vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
            vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
            /**
             * Signal emitted when “has-tooltip” is %TRUE and the
             *   hover timeout has expired with the cursor hovering “above”
             *   widget; or emitted when widget got focus in keyboard mode.
             * @param x
             * @param y
             * @param keyboard_tooltip
             * @param tooltip
             */
            vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
            /**
             * Invalidates the area of `widget` defined by `region` by calling
             * gdk_window_invalidate_region() on the widget’s window and all its
             * child windows. Once the main loop becomes idle (after the current
             * batch of events has been processed, roughly), the window will
             * receive expose events for the union of all regions that have been
             * invalidated.
             *
             * Normally you would only use this function in widget
             * implementations. You might also use it to schedule a redraw of a
             * #GtkDrawingArea or some portion thereof.
             * @param region region to draw
             */
            vfunc_queue_draw_region(region: cairo.Region): void;
            /**
             * Creates the GDK (windowing system) resources associated with a
             * widget.  For example, `widget->`window will be created when a widget
             * is realized.  Normally realization happens implicitly; if you show
             * a widget and all its parent containers, then the widget will be
             * realized and mapped automatically.
             *
             * Realizing a widget requires all
             * the widget’s parent widgets to be realized; calling
             * gtk_widget_realize() realizes the widget’s parents in addition to
             * `widget` itself. If a widget is not yet inside a toplevel window
             * when you realize it, bad things will happen.
             *
             * This function is primarily used in widget implementations, and
             * isn’t very useful otherwise. Many times when you think you might
             * need it, a better approach is to connect to a signal that will be
             * called after the widget is realized automatically, such as
             * #GtkWidget::draw. Or simply g_signal_connect () to the
             * #GtkWidget::realize signal.
             */
            vfunc_realize(): void;
            /**
             * Signal emitted when the screen of a widget has
             *   changed.
             * @param previous_screen
             */
            vfunc_screen_changed(previous_screen: Gdk.Screen): void;
            /**
             * Signal emitted when a button in the 4 to 7 range is
             *   pressed.
             * @param event
             */
            vfunc_scroll_event(event: Gdk.EventScroll): boolean;
            /**
             * Signal will be emitted when the the
             *   widget’s window has lost ownership of a selection.
             * @param event
             */
            vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void;
            vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
            vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void;
            /**
             * Signal will be emitted when another
             *   client requests ownership of the selection owned by the widget's
             *   window.
             * @param event
             */
            vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
            /**
             * Flags a widget to be displayed. Any widget that isn’t shown will
             * not appear on the screen. If you want to show all the widgets in a
             * container, it’s easier to call gtk_widget_show_all() on the
             * container, instead of individually showing the widgets.
             *
             * Remember that you have to show the containers containing a widget,
             * in addition to the widget itself, before it will appear onscreen.
             *
             * When a toplevel container is shown, it is immediately realized and
             * mapped; other shown widgets are realized and mapped when their
             * toplevel container is realized and mapped.
             */
            vfunc_show(): void;
            /**
             * Recursively shows a widget, and any child widgets (if the widget is
             * a container).
             */
            vfunc_show_all(): void;
            vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean;
            /**
             * This function is only used by #GtkContainer subclasses, to assign a size
             * and position to their child widgets.
             *
             * In this function, the allocation may be adjusted. It will be forced
             * to a 1x1 minimum size, and the adjust_size_allocation virtual
             * method on the child will be used to adjust the allocation. Standard
             * adjustments include removing the widget’s margins, and applying the
             * widget’s #GtkWidget:halign and #GtkWidget:valign properties.
             *
             * For baseline support in containers you need to use gtk_widget_size_allocate_with_baseline()
             * instead.
             * @param allocation position and size to be allocated to @widget
             */
            vfunc_size_allocate(allocation: Gtk.Allocation): void;
            /**
             * Signal emitted when the widget state
             *   changes. Deprecated: 3.0
             * @param previous_state
             */
            vfunc_state_changed(previous_state: Gtk.StateType): void;
            /**
             * Signal emitted when the widget state changes,
             *   see gtk_widget_get_state_flags().
             * @param previous_state_flags
             */
            vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
            /**
             * Signal emitted when a new style has been set on a
             * widget. Deprecated: 3.0
             * @param previous_style
             */
            vfunc_style_set(previous_style: Gtk.Style): void;
            /**
             * Signal emitted when the GtkStyleContext of a widget
             *   is changed.
             */
            vfunc_style_updated(): void;
            /**
             * Signal emitted when a touch event happens
             * @param event
             */
            vfunc_touch_event(event: Gdk.EventTouch): boolean;
            /**
             * This function is only for use in widget implementations. Causes
             * a widget to be unmapped if it’s currently mapped.
             */
            vfunc_unmap(): void;
            /**
             * Signal will be emitted when the widget’s window is
             *   unmapped.
             * @param event
             */
            vfunc_unmap_event(event: Gdk.EventAny): boolean;
            /**
             * This function is only useful in widget implementations.
             * Causes a widget to be unrealized (frees all GDK resources
             * associated with the widget, such as `widget->`window).
             */
            vfunc_unrealize(): void;
            /**
             * Signal emitted when the widget’s window is
             *   obscured or unobscured.
             * @param event
             */
            vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
            /**
             * Signal emitted when the state of the toplevel
             *   window associated to the widget changes.
             * @param event
             */
            vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
        }

        module StyleSchemeChooserWidget {
            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Bin.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    StyleSchemeChooser.ConstructorProps {}
        }

        class StyleSchemeChooserWidget
            extends Gtk.Bin
            implements Atk.ImplementorIface, Gtk.Buildable, StyleSchemeChooser
        {
            static $gtype: GObject.GType<StyleSchemeChooserWidget>;

            // Constructors

            constructor(properties?: Partial<StyleSchemeChooserWidget.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeChooserWidget;

            // Inherited properties
            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);

            // Inherited methods
            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;
            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        module StyleSchemeManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                scheme_ids: string[];
                schemeIds: string[];
                search_path: string[];
                searchPath: string[];
            }
        }

        class StyleSchemeManager extends GObject.Object {
            static $gtype: GObject.GType<StyleSchemeManager>;

            // Properties

            get scheme_ids(): string[];
            get schemeIds(): string[];
            get search_path(): string[];
            set search_path(val: string[]);
            get searchPath(): string[];
            set searchPath(val: string[]);

            // Constructors

            constructor(properties?: Partial<StyleSchemeManager.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): StyleSchemeManager;

            // Static methods

            /**
             * Returns the default #GtkSourceStyleSchemeManager instance.
             */
            static get_default(): StyleSchemeManager;

            // Methods

            /**
             * Appends `path` to the list of directories where the `manager` looks for
             * style scheme files.
             * See gtk_source_style_scheme_manager_set_search_path() for details.
             * @param path a directory or a filename.
             */
            append_search_path(path: string): void;
            /**
             * Mark any currently cached information about the available style scehems
             * as invalid. All the available style schemes will be reloaded next time
             * the `manager` is accessed.
             */
            force_rescan(): void;
            /**
             * Looks up style scheme by id.
             * @param scheme_id style scheme id to find.
             * @returns a #GtkSourceStyleScheme object.   The returned value is owned by @manager and must not be unref'ed.
             */
            get_scheme(scheme_id: string): StyleScheme | null;
            /**
             * Returns the ids of the available style schemes.
             * @returns a %NULL-terminated array of strings containing the ids of the available style schemes or %NULL if no style scheme is available. The array is sorted alphabetically according to the scheme name. The array is owned by the @manager and must not be modified.
             */
            get_scheme_ids(): string[] | null;
            /**
             * Returns the current search path for the `manager`.
             * See gtk_source_style_scheme_manager_set_search_path() for details.
             * @returns a %NULL-terminated array of string containing the search path. The array is owned by the @manager and must not be modified.
             */
            get_search_path(): string[];
            /**
             * Prepends `path` to the list of directories where the `manager` looks
             * for style scheme files.
             * See gtk_source_style_scheme_manager_set_search_path() for details.
             * @param path a directory or a filename.
             */
            prepend_search_path(path: string): void;
            /**
             * Sets the list of directories where the `manager` looks for
             * style scheme files.
             * If `path` is %NULL, the search path is reset to default.
             * @param path a %NULL-terminated array of strings or %NULL.
             */
            set_search_path(path?: string[] | null): void;
        }

        module Tag {
            // Constructor properties interface

            interface ConstructorProps extends Gtk.TextTag.ConstructorProps {
                draw_spaces: boolean;
                drawSpaces: boolean;
                draw_spaces_set: boolean;
                drawSpacesSet: boolean;
            }
        }

        class Tag extends Gtk.TextTag {
            static $gtype: GObject.GType<Tag>;

            // Properties

            /**
             * Whether to draw white spaces. This property takes precedence over the value
             * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
             * (only where the tag is applied).
             *
             * Setting this property also changes #GtkSourceTag:draw-spaces-set to
             * %TRUE.
             */
            get draw_spaces(): boolean;
            set draw_spaces(val: boolean);
            /**
             * Whether to draw white spaces. This property takes precedence over the value
             * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
             * (only where the tag is applied).
             *
             * Setting this property also changes #GtkSourceTag:draw-spaces-set to
             * %TRUE.
             */
            get drawSpaces(): boolean;
            set drawSpaces(val: boolean);
            /**
             * Whether the #GtkSourceTag:draw-spaces property is set and must be
             * taken into account.
             */
            get draw_spaces_set(): boolean;
            set draw_spaces_set(val: boolean);
            /**
             * Whether the #GtkSourceTag:draw-spaces property is set and must be
             * taken into account.
             */
            get drawSpacesSet(): boolean;
            set drawSpacesSet(val: boolean);

            // Constructors

            constructor(properties?: Partial<Tag.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](name?: string | null): Tag;
        }

        module View {
            // Signal callback interfaces

            interface ChangeCase {
                (case_type: ChangeCaseType): void;
            }

            interface ChangeNumber {
                (count: number): void;
            }

            interface JoinLines {
                (): void;
            }

            interface LineMarkActivated {
                (iter: Gtk.TextIter, event: Gdk.Event): void;
            }

            interface MoveLines {
                (down: boolean): void;
            }

            interface MoveToMatchingBracket {
                (extend_selection: boolean): void;
            }

            interface MoveWords {
                (count: number): void;
            }

            interface Redo {
                (): void;
            }

            interface ShowCompletion {
                (): void;
            }

            interface SmartHomeEnd {
                (iter: Gtk.TextIter, count: number): void;
            }

            interface Undo {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.TextView.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                auto_indent: boolean;
                autoIndent: boolean;
                background_pattern: BackgroundPatternType;
                backgroundPattern: BackgroundPatternType;
                completion: Completion;
                highlight_current_line: boolean;
                highlightCurrentLine: boolean;
                indent_on_tab: boolean;
                indentOnTab: boolean;
                indent_width: number;
                indentWidth: number;
                insert_spaces_instead_of_tabs: boolean;
                insertSpacesInsteadOfTabs: boolean;
                right_margin_position: number;
                rightMarginPosition: number;
                show_line_marks: boolean;
                showLineMarks: boolean;
                show_line_numbers: boolean;
                showLineNumbers: boolean;
                show_right_margin: boolean;
                showRightMargin: boolean;
                smart_backspace: boolean;
                smartBackspace: boolean;
                smart_home_end: SmartHomeEndType;
                smartHomeEnd: SmartHomeEndType;
                space_drawer: SpaceDrawer;
                spaceDrawer: SpaceDrawer;
                tab_width: number;
                tabWidth: number;
            }
        }

        class View extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<View>;

            // Properties

            get auto_indent(): boolean;
            set auto_indent(val: boolean);
            get autoIndent(): boolean;
            set autoIndent(val: boolean);
            /**
             * Draw a specific background pattern on the view.
             */
            get background_pattern(): BackgroundPatternType;
            set background_pattern(val: BackgroundPatternType);
            /**
             * Draw a specific background pattern on the view.
             */
            get backgroundPattern(): BackgroundPatternType;
            set backgroundPattern(val: BackgroundPatternType);
            /**
             * The completion object associated with the view
             */
            get completion(): Completion;
            get highlight_current_line(): boolean;
            set highlight_current_line(val: boolean);
            get highlightCurrentLine(): boolean;
            set highlightCurrentLine(val: boolean);
            get indent_on_tab(): boolean;
            set indent_on_tab(val: boolean);
            get indentOnTab(): boolean;
            set indentOnTab(val: boolean);
            /**
             * Width of an indentation step expressed in number of spaces.
             */
            get indent_width(): number;
            set indent_width(val: number);
            /**
             * Width of an indentation step expressed in number of spaces.
             */
            get indentWidth(): number;
            set indentWidth(val: number);
            get insert_spaces_instead_of_tabs(): boolean;
            set insert_spaces_instead_of_tabs(val: boolean);
            get insertSpacesInsteadOfTabs(): boolean;
            set insertSpacesInsteadOfTabs(val: boolean);
            /**
             * Position of the right margin.
             */
            get right_margin_position(): number;
            set right_margin_position(val: number);
            /**
             * Position of the right margin.
             */
            get rightMarginPosition(): number;
            set rightMarginPosition(val: number);
            /**
             * Whether to display line mark pixbufs
             */
            get show_line_marks(): boolean;
            set show_line_marks(val: boolean);
            /**
             * Whether to display line mark pixbufs
             */
            get showLineMarks(): boolean;
            set showLineMarks(val: boolean);
            /**
             * Whether to display line numbers
             */
            get show_line_numbers(): boolean;
            set show_line_numbers(val: boolean);
            /**
             * Whether to display line numbers
             */
            get showLineNumbers(): boolean;
            set showLineNumbers(val: boolean);
            /**
             * Whether to display the right margin.
             */
            get show_right_margin(): boolean;
            set show_right_margin(val: boolean);
            /**
             * Whether to display the right margin.
             */
            get showRightMargin(): boolean;
            set showRightMargin(val: boolean);
            /**
             * Whether smart Backspace should be used.
             */
            get smart_backspace(): boolean;
            set smart_backspace(val: boolean);
            /**
             * Whether smart Backspace should be used.
             */
            get smartBackspace(): boolean;
            set smartBackspace(val: boolean);
            /**
             * Set the behavior of the HOME and END keys.
             */
            get smart_home_end(): SmartHomeEndType;
            set smart_home_end(val: SmartHomeEndType);
            /**
             * Set the behavior of the HOME and END keys.
             */
            get smartHomeEnd(): SmartHomeEndType;
            set smartHomeEnd(val: SmartHomeEndType);
            /**
             * The #GtkSourceSpaceDrawer object associated with the view.
             */
            get space_drawer(): SpaceDrawer;
            /**
             * The #GtkSourceSpaceDrawer object associated with the view.
             */
            get spaceDrawer(): SpaceDrawer;
            /**
             * Width of a tab character expressed in number of spaces.
             */
            get tab_width(): number;
            set tab_width(val: number);
            /**
             * Width of a tab character expressed in number of spaces.
             */
            get tabWidth(): number;
            set tabWidth(val: number);

            // Constructors

            constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): View;

            static new_with_buffer(buffer: Buffer): View;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;
            connect_after(signal: 'change-case', callback: (_source: this, case_type: ChangeCaseType) => void): number;
            emit(signal: 'change-case', case_type: ChangeCaseType): void;
            connect(signal: 'change-number', callback: (_source: this, count: number) => void): number;
            connect_after(signal: 'change-number', callback: (_source: this, count: number) => void): number;
            emit(signal: 'change-number', count: number): void;
            connect(signal: 'join-lines', callback: (_source: this) => void): number;
            connect_after(signal: 'join-lines', callback: (_source: this) => void): number;
            emit(signal: 'join-lines'): void;
            connect(
                signal: 'line-mark-activated',
                callback: (_source: this, iter: Gtk.TextIter, event: Gdk.Event) => void,
            ): number;
            connect_after(
                signal: 'line-mark-activated',
                callback: (_source: this, iter: Gtk.TextIter, event: Gdk.Event) => void,
            ): number;
            emit(signal: 'line-mark-activated', iter: Gtk.TextIter, event: Gdk.Event): void;
            connect(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;
            connect_after(signal: 'move-lines', callback: (_source: this, down: boolean) => void): number;
            emit(signal: 'move-lines', down: boolean): void;
            connect(
                signal: 'move-to-matching-bracket',
                callback: (_source: this, extend_selection: boolean) => void,
            ): number;
            connect_after(
                signal: 'move-to-matching-bracket',
                callback: (_source: this, extend_selection: boolean) => void,
            ): number;
            emit(signal: 'move-to-matching-bracket', extend_selection: boolean): void;
            connect(signal: 'move-words', callback: (_source: this, count: number) => void): number;
            connect_after(signal: 'move-words', callback: (_source: this, count: number) => void): number;
            emit(signal: 'move-words', count: number): void;
            connect(signal: 'redo', callback: (_source: this) => void): number;
            connect_after(signal: 'redo', callback: (_source: this) => void): number;
            emit(signal: 'redo'): void;
            connect(signal: 'show-completion', callback: (_source: this) => void): number;
            connect_after(signal: 'show-completion', callback: (_source: this) => void): number;
            emit(signal: 'show-completion'): void;
            connect(
                signal: 'smart-home-end',
                callback: (_source: this, iter: Gtk.TextIter, count: number) => void,
            ): number;
            connect_after(
                signal: 'smart-home-end',
                callback: (_source: this, iter: Gtk.TextIter, count: number) => void,
            ): number;
            emit(signal: 'smart-home-end', iter: Gtk.TextIter, count: number): void;
            connect(signal: 'undo', callback: (_source: this) => void): number;
            connect_after(signal: 'undo', callback: (_source: this) => void): number;
            emit(signal: 'undo'): void;

            // Virtual methods

            vfunc_line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
            vfunc_move_lines(down: boolean): void;
            vfunc_move_words(step: number): void;
            vfunc_redo(): void;
            vfunc_show_completion(): void;
            vfunc_undo(): void;

            // Methods

            /**
             * Returns whether auto-indentation of text is enabled.
             * @returns %TRUE if auto indentation is enabled.
             */
            get_auto_indent(): boolean;
            /**
             * Returns the #GtkSourceBackgroundPatternType specifying if and how
             * the background pattern should be displayed for this `view`.
             * @returns the #GtkSourceBackgroundPatternType.
             */
            get_background_pattern(): BackgroundPatternType;
            /**
             * Gets the #GtkSourceCompletion associated with `view`. The returned object is
             * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
             * object has a different #GtkSourceCompletion.
             * @returns the #GtkSourceCompletion associated with @view.
             */
            get_completion(): Completion;
            /**
             * Returns the #GtkSourceGutter object associated with `window_type` for `view`.
             * Only GTK_TEXT_WINDOW_LEFT and GTK_TEXT_WINDOW_RIGHT are supported,
             * respectively corresponding to the left and right gutter. The line numbers
             * and mark category icons are rendered in the left gutter.
             * @param window_type the gutter window type.
             * @returns the #GtkSourceGutter.
             */
            get_gutter(window_type: Gtk.TextWindowType | null): Gutter;
            /**
             * Returns whether the current line is highlighted.
             * @returns %TRUE if the current line is highlighted.
             */
            get_highlight_current_line(): boolean;
            /**
             * Returns whether when the tab key is pressed the current selection
             * should get indented instead of replaced with the \t character.
             * @returns %TRUE if the selection is indented when tab is pressed.
             */
            get_indent_on_tab(): boolean;
            /**
             * Returns the number of spaces to use for each step of indent.
             * See gtk_source_view_set_indent_width() for details.
             * @returns indent width.
             */
            get_indent_width(): number;
            /**
             * Returns whether when inserting a tabulator character it should
             * be replaced by a group of space characters.
             * @returns %TRUE if spaces are inserted instead of tabs.
             */
            get_insert_spaces_instead_of_tabs(): boolean;
            /**
             * Gets attributes and priority for the `category`.
             * @param category the category.
             * @param priority place where priority of the category will be stored.
             * @returns #GtkSourceMarkAttributes for the @category. The object belongs to @view, so it must not be unreffed.
             */
            get_mark_attributes(category: string, priority: number): MarkAttributes;
            /**
             * Gets the position of the right margin in the given `view`.
             * @returns the position of the right margin.
             */
            get_right_margin_position(): number;
            /**
             * Returns whether line marks are displayed beside the text.
             * @returns %TRUE if the line marks are displayed.
             */
            get_show_line_marks(): boolean;
            /**
             * Returns whether line numbers are displayed beside the text.
             * @returns %TRUE if the line numbers are displayed.
             */
            get_show_line_numbers(): boolean;
            /**
             * Returns whether a right margin is displayed.
             * @returns %TRUE if the right margin is shown.
             */
            get_show_right_margin(): boolean;
            /**
             * Returns %TRUE if pressing the Backspace key will try to delete spaces
             * up to the previous tab stop.
             * @returns %TRUE if smart Backspace handling is enabled.
             */
            get_smart_backspace(): boolean;
            /**
             * Returns a #GtkSourceSmartHomeEndType end value specifying
             * how the cursor will move when HOME and END keys are pressed.
             * @returns a #GtkSourceSmartHomeEndType value.
             */
            get_smart_home_end(): SmartHomeEndType;
            /**
             * Gets the #GtkSourceSpaceDrawer associated with `view`. The returned object is
             * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
             * object has a different #GtkSourceSpaceDrawer.
             * @returns the #GtkSourceSpaceDrawer associated with @view.
             */
            get_space_drawer(): SpaceDrawer;
            /**
             * Returns the width of tabulation in characters.
             * @returns width of tab.
             */
            get_tab_width(): number;
            /**
             * Determines the visual column at `iter` taking into consideration the
             * #GtkSourceView:tab-width of `view`.
             * @param iter a position in @view.
             * @returns the visual column at @iter.
             */
            get_visual_column(iter: Gtk.TextIter): number;
            /**
             * Inserts one indentation level at the beginning of the specified lines. The
             * empty lines are not indented.
             * @param start #GtkTextIter of the first line to indent
             * @param end #GtkTextIter of the last line to indent
             */
            indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
            /**
             * If %TRUE auto-indentation of text is enabled.
             *
             * When Enter is pressed to create a new line, the auto-indentation inserts the
             * same indentation as the previous line. This is <emphasis>not</emphasis> a
             * "smart indentation" where an indentation level is added or removed depending
             * on the context.
             * @param enable whether to enable auto indentation.
             */
            set_auto_indent(enable: boolean): void;
            /**
             * Set if and how the background pattern should be displayed.
             * @param background_pattern the #GtkSourceBackgroundPatternType.
             */
            set_background_pattern(background_pattern: BackgroundPatternType | null): void;
            /**
             * If `highlight` is %TRUE the current line will be highlighted.
             * @param highlight whether to highlight the current line.
             */
            set_highlight_current_line(highlight: boolean): void;
            /**
             * If %TRUE, when the tab key is pressed when several lines are selected, the
             * selected lines are indented of one level instead of being replaced with a \t
             * character. Shift+Tab unindents the selection.
             *
             * If the first or last line is not selected completely, it is also indented or
             * unindented.
             *
             * When the selection doesn't span several lines, the tab key always replaces
             * the selection with a normal \t character.
             * @param enable whether to indent a block when tab is pressed.
             */
            set_indent_on_tab(enable: boolean): void;
            /**
             * Sets the number of spaces to use for each step of indent when the tab key is
             * pressed. If `width` is -1, the value of the #GtkSourceView:tab-width property
             * will be used.
             *
             * The #GtkSourceView:indent-width interacts with the
             * #GtkSourceView:insert-spaces-instead-of-tabs property and
             * #GtkSourceView:tab-width. An example will be clearer: if the
             * #GtkSourceView:indent-width is 4 and
             * #GtkSourceView:tab-width is 8 and
             * #GtkSourceView:insert-spaces-instead-of-tabs is %FALSE, then pressing the tab
             * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
             * the tab key a second time will remove the 4 spaces and insert a \t character
             * instead (since #GtkSourceView:tab-width is 8). On the other hand, if
             * #GtkSourceView:insert-spaces-instead-of-tabs is %TRUE, the second tab key
             * pressed will insert 4 more spaces for a total of 8 spaces in the
             * #GtkTextBuffer.
             *
             * The test-widget program (available in the GtkSourceView repository) may be
             * useful to better understand the indentation settings (enable the space
             * drawing!).
             * @param width indent width in characters.
             */
            set_indent_width(width: number): void;
            /**
             * If %TRUE a tab key pressed is replaced by a group of space characters. Of
             * course it is still possible to insert a real \t programmatically with the
             * #GtkTextBuffer API.
             * @param enable whether to insert spaces instead of tabs.
             */
            set_insert_spaces_instead_of_tabs(enable: boolean): void;
            /**
             * Sets attributes and priority for the `category`.
             * @param category the category.
             * @param attributes mark attributes.
             * @param priority priority of the category.
             */
            set_mark_attributes(category: string, attributes: MarkAttributes, priority: number): void;
            /**
             * Sets the position of the right margin in the given `view`.
             * @param pos the width in characters where to position the right margin.
             */
            set_right_margin_position(pos: number): void;
            /**
             * If %TRUE line marks will be displayed beside the text.
             * @param show whether line marks should be displayed.
             */
            set_show_line_marks(show: boolean): void;
            /**
             * If %TRUE line numbers will be displayed beside the text.
             * @param show whether line numbers should be displayed.
             */
            set_show_line_numbers(show: boolean): void;
            /**
             * If %TRUE a right margin is displayed.
             * @param show whether to show a right margin.
             */
            set_show_right_margin(show: boolean): void;
            /**
             * When set to %TRUE, pressing the Backspace key will try to delete spaces
             * up to the previous tab stop.
             * @param smart_backspace whether to enable smart Backspace handling.
             */
            set_smart_backspace(smart_backspace: boolean): void;
            /**
             * Set the desired movement of the cursor when HOME and END keys
             * are pressed.
             * @param smart_home_end the desired behavior among #GtkSourceSmartHomeEndType.
             */
            set_smart_home_end(smart_home_end: SmartHomeEndType | null): void;
            /**
             * Sets the width of tabulation in characters. The #GtkTextBuffer still contains
             * \t characters, but they can take a different visual width in a #GtkSourceView
             * widget.
             * @param width width of tab in characters.
             */
            set_tab_width(width: number): void;
            /**
             * Removes one indentation level at the beginning of the
             * specified lines.
             * @param start #GtkTextIter of the first line to indent
             * @param end #GtkTextIter of the last line to indent
             */
            unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;

            // Inherited properties
            /**
             * Horizontal #GtkAdjustment of the scrollable widget. This adjustment is
             * shared between the scrollable widget and its parent.
             */
            get hadjustment(): Gtk.Adjustment;
            set hadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscroll_policy(): Gtk.ScrollablePolicy;
            set hscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether horizontal scrolling should start once the scrollable
             * widget is allocated less than its minimum width or less than its natural width.
             */
            get hscrollPolicy(): Gtk.ScrollablePolicy;
            set hscrollPolicy(val: Gtk.ScrollablePolicy);
            /**
             * Verical #GtkAdjustment of the scrollable widget. This adjustment is shared
             * between the scrollable widget and its parent.
             */
            get vadjustment(): Gtk.Adjustment;
            set vadjustment(val: Gtk.Adjustment);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscroll_policy(): Gtk.ScrollablePolicy;
            set vscroll_policy(val: Gtk.ScrollablePolicy);
            /**
             * Determines whether vertical scrolling should start once the scrollable
             * widget is allocated less than its minimum height or less than its natural height.
             */
            get vscrollPolicy(): Gtk.ScrollablePolicy;
            set vscrollPolicy(val: Gtk.ScrollablePolicy);

            // Inherited methods
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             * @returns %TRUE if @border has been set
             */
            get_border(): [boolean, Gtk.Border];
            /**
             * Retrieves the #GtkAdjustment used for horizontal scrolling.
             * @returns horizontal #GtkAdjustment.
             */
            get_hadjustment(): Gtk.Adjustment;
            /**
             * Gets the horizontal #GtkScrollablePolicy.
             * @returns The horizontal #GtkScrollablePolicy.
             */
            get_hscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Retrieves the #GtkAdjustment used for vertical scrolling.
             * @returns vertical #GtkAdjustment.
             */
            get_vadjustment(): Gtk.Adjustment;
            /**
             * Gets the vertical #GtkScrollablePolicy.
             * @returns The vertical #GtkScrollablePolicy.
             */
            get_vscroll_policy(): Gtk.ScrollablePolicy;
            /**
             * Sets the horizontal adjustment of the #GtkScrollable.
             * @param hadjustment a #GtkAdjustment
             */
            set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * horizontal scrolling should start below the minimum width or
             * below the natural width.
             * @param policy the horizontal #GtkScrollablePolicy
             */
            set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Sets the vertical adjustment of the #GtkScrollable.
             * @param vadjustment a #GtkAdjustment
             */
            set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
            /**
             * Sets the #GtkScrollablePolicy to determine whether
             * vertical scrolling should start below the minimum height or
             * below the natural height.
             * @param policy the vertical #GtkScrollablePolicy
             */
            set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
            /**
             * Returns the size of a non-scrolling border around the
             * outside of the scrollable. An example for this would
             * be treeview headers. GTK+ can use this information to
             * display overlayed graphics, like the overshoot indication,
             * at the right position.
             */
            vfunc_get_border(): [boolean, Gtk.Border];
            /**
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target`.
             *
             * Whenever the `source_property` is changed the `target_property` is
             * updated using the same value. For instance:
             *
             *
             * ```c
             *   g_object_bind_property (action, "active", widget, "sensitive", 0);
             * ```
             *
             *
             * Will result in the "sensitive" property of the widget #GObject instance to be
             * updated with the same value of the "active" property of the action #GObject
             * instance.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well.
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. To remove the binding without affecting the
             * `source` and the `target` you can just call g_object_unref() on the returned
             * #GBinding instance.
             *
             * Removing the binding by calling g_object_unref() on it must only be done if
             * the binding, `source` and `target` are only used from a single thread and it
             * is clear that both `source` and `target` outlive the binding. Especially it
             * is not safe to rely on this if the binding, `source` or `target` can be
             * finalized from different threads. Keep another reference to the binding and
             * use g_binding_unbind() instead to be on the safe side.
             *
             * A #GObject can have multiple bindings.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
            ): GObject.Binding;
            /**
             * Complete version of g_object_bind_property().
             *
             * Creates a binding between `source_property` on `source` and `target_property`
             * on `target,` allowing you to set the transformation functions to be used by
             * the binding.
             *
             * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
             * if `target_property` on `target` changes then the `source_property` on `source`
             * will be updated as well. The `transform_from` function is only used in case
             * of bidirectional bindings, otherwise it will be ignored
             *
             * The binding will automatically be removed when either the `source` or the
             * `target` instances are finalized. This will release the reference that is
             * being held on the #GBinding instance; if you want to hold on to the
             * #GBinding instance, you will need to hold a reference to it.
             *
             * To remove the binding, call g_binding_unbind().
             *
             * A #GObject can have multiple bindings.
             *
             * The same `user_data` parameter will be used for both `transform_to`
             * and `transform_from` transformation functions; the `notify` function will
             * be called once, when the binding is removed. If you need different data
             * for each transformation function, please use
             * g_object_bind_property_with_closures() instead.
             * @param source_property the property on @source to bind
             * @param target the target #GObject
             * @param target_property the property on @target to bind
             * @param flags flags to pass to #GBinding
             * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
             * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
             * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
             * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
             */
            bind_property_full(
                source_property: string,
                target: GObject.Object,
                target_property: string,
                flags: GObject.BindingFlags | null,
                transform_to?: GObject.BindingTransformFunc | null,
                transform_from?: GObject.BindingTransformFunc | null,
                notify?: GLib.DestroyNotify | null,
            ): GObject.Binding;
            // Conflicted with GObject.Object.bind_property_full
            bind_property_full(...args: never[]): any;
            /**
             * This function is intended for #GObject implementations to re-enforce
             * a [floating][floating-ref] object reference. Doing this is seldom
             * required: all #GInitiallyUnowneds are created with a floating reference
             * which usually just needs to be sunken by calling g_object_ref_sink().
             */
            force_floating(): void;
            /**
             * Increases the freeze count on `object`. If the freeze count is
             * non-zero, the emission of "notify" signals on `object` is
             * stopped. The signals are queued until the freeze count is decreased
             * to zero. Duplicate notifications are squashed so that at most one
             * #GObject::notify signal is emitted for each property modified while the
             * object is frozen.
             *
             * This is necessary for accessors that modify multiple properties to prevent
             * premature notification while the object is still being modified.
             */
            freeze_notify(): void;
            /**
             * Gets a named field from the objects table of associations (see g_object_set_data()).
             * @param key name of the key for that association
             * @returns the data if found,          or %NULL if no such data exists.
             */
            get_data(key: string): any | null;
            get_property(property_name: string): any;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            get_qdata(quark: GLib.Quark): any | null;
            /**
             * Gets `n_properties` properties for an `object`.
             * Obtained properties will be set to `values`. All properties must be valid.
             * Warnings will be emitted and undefined behaviour may result if invalid
             * properties are passed in.
             * @param names the names of each property to get
             * @param values the values of each property to get
             */
            getv(names: string[], values: (GObject.Value | any)[]): void;
            /**
             * Checks whether `object` has a [floating][floating-ref] reference.
             * @returns %TRUE if @object has a floating reference
             */
            is_floating(): boolean;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param property_name the name of a property installed on the class of @object.
             */
            notify(property_name: string): void;
            /**
             * Emits a "notify" signal for the property specified by `pspec` on `object`.
             *
             * This function omits the property name lookup, hence it is faster than
             * g_object_notify().
             *
             * One way to avoid using g_object_notify() from within the
             * class that registered the properties, and using g_object_notify_by_pspec()
             * instead, is to store the GParamSpec used with
             * g_object_class_install_property() inside a static array, e.g.:
             *
             *
             * ```c
             *   typedef enum
             *   {
             *     PROP_FOO = 1,
             *     PROP_LAST
             *   } MyObjectProperty;
             *
             *   static GParamSpec *properties[PROP_LAST];
             *
             *   static void
             *   my_object_class_init (MyObjectClass *klass)
             *   {
             *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
             *                                              0, 100,
             *                                              50,
             *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
             *     g_object_class_install_property (gobject_class,
             *                                      PROP_FOO,
             *                                      properties[PROP_FOO]);
             *   }
             * ```
             *
             *
             * and then notify a change on the "foo" property with:
             *
             *
             * ```c
             *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
             * ```
             *
             * @param pspec the #GParamSpec of a property installed on the class of @object.
             */
            notify_by_pspec(pspec: GObject.ParamSpec): void;
            /**
             * Increases the reference count of `object`.
             *
             * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
             * of `object` will be propagated to the return type (using the GCC typeof()
             * extension), so any casting the caller needs to do on the return type must be
             * explicit.
             * @returns the same @object
             */
            ref(): GObject.Object;
            /**
             * Increase the reference count of `object,` and possibly remove the
             * [floating][floating-ref] reference, if `object` has a floating reference.
             *
             * In other words, if the object is floating, then this call "assumes
             * ownership" of the floating reference, converting it to a normal
             * reference by clearing the floating flag while leaving the reference
             * count unchanged.  If the object is not floating, then this call
             * adds a new normal reference increasing the reference count by one.
             *
             * Since GLib 2.56, the type of `object` will be propagated to the return type
             * under the same conditions as for g_object_ref().
             * @returns @object
             */
            ref_sink(): GObject.Object;
            /**
             * Releases all references to other objects. This can be used to break
             * reference cycles.
             *
             * This function should only be called from object system implementations.
             */
            run_dispose(): void;
            /**
             * Each object carries around a table of associations from
             * strings to pointers.  This function lets you set an association.
             *
             * If the object already had an association with that name,
             * the old association will be destroyed.
             *
             * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
             * This means a copy of `key` is kept permanently (even after `object` has been
             * finalized) — so it is recommended to only use a small, bounded set of values
             * for `key` in your program, to avoid the #GQuark storage growing unbounded.
             * @param key name of the key
             * @param data data to associate with that key
             */
            set_data(key: string, data?: any | null): void;
            set_property(property_name: string, value: any): void;
            /**
             * Remove a specified datum from the object's data associations,
             * without invoking the association's destroy handler.
             * @param key name of the key
             * @returns the data if found, or %NULL          if no such data exists.
             */
            steal_data(key: string): any | null;
            /**
             * This function gets back user data pointers stored via
             * g_object_set_qdata() and removes the `data` from object
             * without invoking its destroy() function (if any was
             * set).
             * Usually, calling this function is only required to update
             * user data pointers with a destroy notifier, for example:
             *
             * ```c
             * void
             * object_add_to_user_list (GObject     *object,
             *                          const gchar *new_string)
             * {
             *   // the quark, naming the object data
             *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
             *   // retrieve the old string list
             *   GList *list = g_object_steal_qdata (object, quark_string_list);
             *
             *   // prepend new string
             *   list = g_list_prepend (list, g_strdup (new_string));
             *   // this changed 'list', so we need to set it again
             *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
             * }
             * static void
             * free_string_list (gpointer data)
             * {
             *   GList *node, *list = data;
             *
             *   for (node = list; node; node = node->next)
             *     g_free (node->data);
             *   g_list_free (list);
             * }
             * ```
             *
             * Using g_object_get_qdata() in the above example, instead of
             * g_object_steal_qdata() would have left the destroy function set,
             * and thus the partial string list would have been freed upon
             * g_object_set_qdata_full().
             * @param quark A #GQuark, naming the user data pointer
             * @returns The user data pointer set, or %NULL
             */
            steal_qdata(quark: GLib.Quark): any | null;
            /**
             * Reverts the effect of a previous call to
             * g_object_freeze_notify(). The freeze count is decreased on `object`
             * and when it reaches zero, queued "notify" signals are emitted.
             *
             * Duplicate notifications for each property are squashed so that at most one
             * #GObject::notify signal is emitted for each property, in the reverse order
             * in which they have been queued.
             *
             * It is an error to call this function when the freeze count is zero.
             */
            thaw_notify(): void;
            /**
             * Decreases the reference count of `object`. When its reference count
             * drops to 0, the object is finalized (i.e. its memory is freed).
             *
             * If the pointer to the #GObject may be reused in future (for example, if it is
             * an instance variable of another object), it is recommended to clear the
             * pointer to %NULL rather than retain a dangling pointer to a potentially
             * invalid #GObject instance. Use g_clear_object() for this.
             */
            unref(): void;
            /**
             * This function essentially limits the life time of the `closure` to
             * the life time of the object. That is, when the object is finalized,
             * the `closure` is invalidated by calling g_closure_invalidate() on
             * it, in order to prevent invocations of the closure with a finalized
             * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
             * added as marshal guards to the `closure,` to ensure that an extra
             * reference count is held on `object` during invocation of the
             * `closure`.  Usually, this function will be called on closures that
             * use this `object` as closure data.
             * @param closure #GClosure to watch
             */
            watch_closure(closure: GObject.Closure): void;
            /**
             * the `constructed` function is called by g_object_new() as the
             *  final step of the object creation process.  At the point of the call, all
             *  construction properties have been set on the object.  The purpose of this
             *  call is to allow for object initialisation steps that can only be performed
             *  after construction properties have been set.  `constructed` implementors
             *  should chain up to the `constructed` call of their parent class to allow it
             *  to complete its initialisation.
             */
            vfunc_constructed(): void;
            /**
             * emits property change notification for a bunch
             *  of properties. Overriding `dispatch_properties_changed` should be rarely
             *  needed.
             * @param n_pspecs
             * @param pspecs
             */
            vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
            /**
             * the `dispose` function is supposed to drop all references to other
             *  objects, but keep the instance otherwise intact, so that client method
             *  invocations still work. It may be run multiple times (due to reference
             *  loops). Before returning, `dispose` should chain up to the `dispose` method
             *  of the parent class.
             */
            vfunc_dispose(): void;
            /**
             * instance finalization function, should finish the finalization of
             *  the instance begun in `dispose` and chain up to the `finalize` method of the
             *  parent class.
             */
            vfunc_finalize(): void;
            /**
             * the generic getter for all properties of this type. Should be
             *  overridden for every type with properties.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            /**
             * Emits a "notify" signal for the property `property_name` on `object`.
             *
             * When possible, eg. when signaling a property change from within the class
             * that registered the property, you should use g_object_notify_by_pspec()
             * instead.
             *
             * Note that emission of the notify signal may be blocked with
             * g_object_freeze_notify(). In this case, the signal emissions are queued
             * and will be emitted (in reverse order) when g_object_thaw_notify() is
             * called.
             * @param pspec
             */
            vfunc_notify(pspec: GObject.ParamSpec): void;
            /**
             * the generic setter for all properties of this type. Should be
             *  overridden for every type with properties. If implementations of
             *  `set_property` don't emit property change notification explicitly, this will
             *  be done implicitly by the type system. However, if the notify signal is
             *  emitted explicitly, the type system will not emit it a second time.
             * @param property_id
             * @param value
             * @param pspec
             */
            vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
            disconnect(id: number): void;
            set(properties: { [key: string]: any }): void;
            block_signal_handler(id: number): any;
            unblock_signal_handler(id: number): any;
            stop_emission_by_name(detailedName: string): any;
        }

        type BufferClass = typeof Buffer;
        abstract class BufferPrivate {
            static $gtype: GObject.GType<BufferPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CompletionClass = typeof Completion;
        type CompletionContextClass = typeof CompletionContext;
        abstract class CompletionContextPrivate {
            static $gtype: GObject.GType<CompletionContextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CompletionInfoClass = typeof CompletionInfo;
        abstract class CompletionInfoPrivate {
            static $gtype: GObject.GType<CompletionInfoPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CompletionItemClass = typeof CompletionItem;
        abstract class CompletionItemPrivate {
            static $gtype: GObject.GType<CompletionItemPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class CompletionPrivate {
            static $gtype: GObject.GType<CompletionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CompletionProposalIface = typeof CompletionProposal;
        type CompletionProviderIface = typeof CompletionProvider;
        type CompletionWordsClass = typeof CompletionWords;
        abstract class CompletionWordsPrivate {
            static $gtype: GObject.GType<CompletionWordsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class Encoding {
            static $gtype: GObject.GType<Encoding>;

            // Constructors

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets all encodings.
             */
            static get_all(): Encoding[];
            /**
             * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
             */
            static get_current(): Encoding;
            /**
             * Gets the list of default candidate encodings to try when loading a file. See
             * gtk_source_file_loader_set_candidate_encodings().
             *
             * This function returns a different list depending on the current locale (i.e.
             * language, country and default encoding). The UTF-8 encoding and the current
             * locale encoding are guaranteed to be present in the returned list.
             */
            static get_default_candidates(): Encoding[];
            /**
             * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
             * "ISO-8859-1".
             * @param charset a character set.
             */
            static get_from_charset(charset: string): Encoding | null;
            static get_utf8(): Encoding;

            // Methods

            /**
             * Used by language bindings.
             * @returns a copy of @enc.
             */
            copy(): Encoding;
            /**
             * Used by language bindings.
             */
            free(): void;
            /**
             * Gets the character set of the #GtkSourceEncoding, such as "UTF-8" or
             * "ISO-8859-1".
             * @returns the character set of the #GtkSourceEncoding.
             */
            get_charset(): string;
            /**
             * Gets the name of the #GtkSourceEncoding such as "Unicode" or "Western".
             * @returns the name of the #GtkSourceEncoding.
             */
            get_name(): string;
            to_string(): string;
        }

        type FileClass = typeof File;
        type FileLoaderClass = typeof FileLoader;
        abstract class FileLoaderPrivate {
            static $gtype: GObject.GType<FileLoaderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class FilePrivate {
            static $gtype: GObject.GType<FilePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileSaverClass = typeof FileSaver;
        abstract class FileSaverPrivate {
            static $gtype: GObject.GType<FileSaverPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GutterClass = typeof Gutter;
        abstract class GutterPrivate {
            static $gtype: GObject.GType<GutterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GutterRendererClass = typeof GutterRenderer;
        type GutterRendererPixbufClass = typeof GutterRendererPixbuf;
        abstract class GutterRendererPixbufPrivate {
            static $gtype: GObject.GType<GutterRendererPixbufPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class GutterRendererPrivate {
            static $gtype: GObject.GType<GutterRendererPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type GutterRendererTextClass = typeof GutterRendererText;
        abstract class GutterRendererTextPrivate {
            static $gtype: GObject.GType<GutterRendererTextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type LanguageClass = typeof Language;
        type LanguageManagerClass = typeof LanguageManager;
        abstract class LanguageManagerPrivate {
            static $gtype: GObject.GType<LanguageManagerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class LanguagePrivate {
            static $gtype: GObject.GType<LanguagePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MapClass = typeof Map;
        type MarkAttributesClass = typeof MarkAttributes;
        abstract class MarkAttributesPrivate {
            static $gtype: GObject.GType<MarkAttributesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MarkClass = typeof Mark;
        abstract class MarkPrivate {
            static $gtype: GObject.GType<MarkPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type PrintCompositorClass = typeof PrintCompositor;
        abstract class PrintCompositorPrivate {
            static $gtype: GObject.GType<PrintCompositorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type RegionClass = typeof Region;
        /**
         * #GtkSourceRegionIter is an opaque datatype; ignore all its fields.
         * Initialize the iter with gtk_source_region_get_start_region_iter().
         */
        class RegionIter {
            static $gtype: GObject.GType<RegionIter>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the subregion at this iterator.
             * @returns %TRUE if @start and @end have been set successfully (if non-%NULL),   or %FALSE if @iter is the end iterator or if the region is empty.
             */
            get_subregion(): [boolean, Gtk.TextIter | null, Gtk.TextIter | null];
            is_end(): boolean;
            /**
             * Moves `iter` to the next subregion.
             * @returns %TRUE if @iter moved and is dereferenceable, or %FALSE if @iter has   been set to the end iterator.
             */
            next(): boolean;
        }

        type SearchContextClass = typeof SearchContext;
        abstract class SearchContextPrivate {
            static $gtype: GObject.GType<SearchContextPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SearchSettingsClass = typeof SearchSettings;
        abstract class SearchSettingsPrivate {
            static $gtype: GObject.GType<SearchSettingsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SpaceDrawerClass = typeof SpaceDrawer;
        abstract class SpaceDrawerPrivate {
            static $gtype: GObject.GType<SpaceDrawerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type StyleClass = typeof Style;
        type StyleSchemeChooserButtonClass = typeof StyleSchemeChooserButton;
        type StyleSchemeChooserInterface = typeof StyleSchemeChooser;
        type StyleSchemeChooserWidgetClass = typeof StyleSchemeChooserWidget;
        type StyleSchemeClass = typeof StyleScheme;
        type StyleSchemeManagerClass = typeof StyleSchemeManager;
        abstract class StyleSchemeManagerPrivate {
            static $gtype: GObject.GType<StyleSchemeManagerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class StyleSchemePrivate {
            static $gtype: GObject.GType<StyleSchemePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type TagClass = typeof Tag;
        type UndoManagerIface = typeof UndoManager;
        type ViewClass = typeof View;
        abstract class ViewPrivate {
            static $gtype: GObject.GType<ViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module CompletionProposal {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface CompletionProposalNamespace {
            $gtype: GObject.GType<CompletionProposal>;
            prototype: CompletionProposal;
        }
        interface CompletionProposal extends GObject.Object {
            // Methods

            /**
             * Emits the "changed" signal on `proposal`. This should be called by
             * implementations whenever the name, icon or info of the proposal has
             * changed.
             */
            changed(): void;
            /**
             * Get whether two proposal objects are the same.  This is used to (together
             * with gtk_source_completion_proposal_hash()) to match proposals in the
             * completion model. By default, it uses direct equality (g_direct_equal()).
             * @param other a #GtkSourceCompletionProposal.
             * @returns %TRUE if @proposal and @object are the same proposal
             */
            equal(other: CompletionProposal): boolean;
            /**
             * Gets the #GIcon for the icon of `proposal`.
             * @returns A #GIcon with the icon of @proposal.
             */
            get_gicon(): Gio.Icon | null;
            /**
             * Gets the #GdkPixbuf for the icon of `proposal`.
             * @returns A #GdkPixbuf with the icon of @proposal.
             */
            get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `proposal`.
             * @returns The icon name of @proposal.
             */
            get_icon_name(): string | null;
            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal. The returned string must be freed with g_free().
             * @returns a newly-allocated string containing extra information of @proposal or %NULL if no extra information is associated to @proposal.
             */
            get_info(): string | null;
            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have
             * to implement gtk_source_completion_proposal_get_markup(). The returned string
             * must be freed with g_free().
             * @returns a new string containing the label of @proposal.
             */
            get_label(): string;
            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * gtk_source_completion_proposal_get_label() if implemented. The returned string
             * must be freed with g_free().
             * @returns a new string containing the label of @proposal with markup.
             */
            get_markup(): string;
            /**
             * Gets the text of `proposal`. The text that is inserted into
             * the text buffer when the proposal is activated by the default activation.
             * You are free to implement a custom activation handler in the provider and
             * not implement this function. For more information, see
             * gtk_source_completion_provider_activate_proposal(). The returned string must
             * be freed with g_free().
             * @returns a new string containing the text of @proposal.
             */
            get_text(): string;
            /**
             * Get the hash value of `proposal`. This is used to (together with
             * gtk_source_completion_proposal_equal()) to match proposals in the completion
             * model. By default, it uses a direct hash (g_direct_hash()).
             * @returns The hash value of @proposal.
             */
            hash(): number;

            // Virtual methods

            /**
             * Emits the "changed" signal on `proposal`. This should be called by
             * implementations whenever the name, icon or info of the proposal has
             * changed.
             */
            vfunc_changed(): void;
            /**
             * Get whether two proposal objects are the same.  This is used to (together
             * with gtk_source_completion_proposal_hash()) to match proposals in the
             * completion model. By default, it uses direct equality (g_direct_equal()).
             * @param other a #GtkSourceCompletionProposal.
             */
            vfunc_equal(other: CompletionProposal): boolean;
            /**
             * Gets the #GIcon for the icon of `proposal`.
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * Gets the #GdkPixbuf for the icon of `proposal`.
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `proposal`.
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Gets extra information associated to the proposal. This information will be
             * used to present the user with extra, detailed information about the
             * selected proposal. The returned string must be freed with g_free().
             */
            vfunc_get_info(): string | null;
            /**
             * Gets the label of `proposal`. The label is shown in the list of proposals as
             * plain text. If you need any markup (such as bold or italic text), you have
             * to implement gtk_source_completion_proposal_get_markup(). The returned string
             * must be freed with g_free().
             */
            vfunc_get_label(): string;
            /**
             * Gets the label of `proposal` with markup. The label is shown in the list of
             * proposals and may contain markup. This will be used instead of
             * gtk_source_completion_proposal_get_label() if implemented. The returned string
             * must be freed with g_free().
             */
            vfunc_get_markup(): string;
            /**
             * Gets the text of `proposal`. The text that is inserted into
             * the text buffer when the proposal is activated by the default activation.
             * You are free to implement a custom activation handler in the provider and
             * not implement this function. For more information, see
             * gtk_source_completion_provider_activate_proposal(). The returned string must
             * be freed with g_free().
             */
            vfunc_get_text(): string;
            /**
             * Get the hash value of `proposal`. This is used to (together with
             * gtk_source_completion_proposal_equal()) to match proposals in the completion
             * model. By default, it uses a direct hash (g_direct_hash()).
             */
            vfunc_hash(): number;
        }

        export const CompletionProposal: CompletionProposalNamespace & {
            new (): CompletionProposal; // This allows `obj instanceof CompletionProposal`
        };

        module CompletionProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface CompletionProviderNamespace {
            $gtype: GObject.GType<CompletionProvider>;
            prototype: CompletionProvider;
        }
        interface CompletionProvider extends GObject.Object {
            // Methods

            /**
             * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
             * activation of `proposal` will take place which replaces the word at `iter`
             * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
             *
             * Here is how the default activation selects the boundaries of the word to
             * replace. The end of the word is `iter`. For the start of the word, it depends
             * on whether a start iter is defined for `proposal` (see
             * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
             * the start of the word is the start iter. Else, the word (as long as possible)
             * will contain only alphanumerical and the "_" characters.
             * @param proposal a #GtkSourceCompletionProposal.
             * @param iter a #GtkTextIter.
             * @returns %TRUE to indicate that the proposal activation has been handled,          %FALSE otherwise.
             */
            activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            /**
             * Get with what kind of activation the provider should be activated.
             * @returns a combination of #GtkSourceCompletionActivation.
             */
            get_activation(): CompletionActivation;
            /**
             * Gets the #GIcon for the icon of `provider`.
             * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_gicon(): Gio.Icon | null;
            /**
             * Get the #GdkPixbuf for the icon of the `provider`.
             * @returns The icon to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `provider`.
             * @returns The icon name to be used for the provider,          or %NULL if the provider does not have a special icon.
             */
            get_icon_name(): string | null;
            /**
             * Get a customized info widget to show extra information of a proposal.
             * This allows for customized widgets on a proposal basis, although in general
             * providers will have the same custom widget for all their proposals and
             * `proposal` can be ignored. The implementation of this function is optional.
             *
             * If this function is not implemented, the default widget is a #GtkLabel. The
             * return value of gtk_source_completion_proposal_get_info() is used as the
             * content of the #GtkLabel.
             *
             * <note>
             *   <para>
             *     If implemented, gtk_source_completion_provider_update_info()
             *     <emphasis>must</emphasis> also be implemented.
             *   </para>
             * </note>
             * @param proposal a currently selected #GtkSourceCompletionProposal.
             * @returns a custom #GtkWidget to show extra information about @proposal, or %NULL if the provider does not have a special info widget.
             */
            get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            /**
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by the #GtkSourceCompletion:auto-complete-delay property.
             * @returns the interactive delay in milliseconds.
             */
            get_interactive_delay(): number;
            /**
             * Get the name of the provider. This should be a translatable name for
             * display to the user. For example: _("Document word completion provider"). The
             * returned string must be freed with g_free().
             * @returns a new string containing the name of the provider.
             */
            get_name(): string;
            /**
             * Get the provider priority. The priority determines the order in which
             * proposals appear in the completion popup. Higher priorities are sorted
             * before lower priorities. The default priority is 0.
             * @returns the provider priority.
             */
            get_priority(): number;
            /**
             * Get the #GtkTextIter at which the completion for `proposal` starts. When
             * implemented, this information is used to position the completion window
             * accordingly when a proposal is selected in the completion window. The
             * `proposal` text inside the completion window is aligned on `iter`.
             *
             * If this function is not implemented, the word boundary is taken to position
             * the completion window. See gtk_source_completion_provider_activate_proposal()
             * for an explanation on the word boundaries.
             *
             * When the `proposal` is activated, the default handler uses `iter` as the start
             * of the word to replace. See
             * gtk_source_completion_provider_activate_proposal() for more information.
             * @param context a #GtkSourceCompletionContext.
             * @param proposal a #GtkSourceCompletionProposal.
             * @returns %TRUE if @iter was set for @proposal, %FALSE otherwise.
             */
            get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a #GtkSourceCompletionContext.
             * @returns %TRUE if @provider matches the completion context, %FALSE otherwise.
             */
            match(context: CompletionContext): boolean;
            /**
             * Populate `context` with proposals from `provider` added with the
             * gtk_source_completion_context_add_proposals() function.
             * @param context a #GtkSourceCompletionContext.
             */
            populate(context: CompletionContext): void;
            /**
             * Update extra information shown in `info` for `proposal`.
             *
             * <note>
             *   <para>
             *     This function <emphasis>must</emphasis> be implemented when
             *     gtk_source_completion_provider_get_info_widget() is implemented.
             *   </para>
             * </note>
             * @param proposal a #GtkSourceCompletionProposal.
             * @param info a #GtkSourceCompletionInfo.
             */
            update_info(proposal: CompletionProposal, info: CompletionInfo): void;

            // Virtual methods

            /**
             * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
             * activation of `proposal` will take place which replaces the word at `iter`
             * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
             *
             * Here is how the default activation selects the boundaries of the word to
             * replace. The end of the word is `iter`. For the start of the word, it depends
             * on whether a start iter is defined for `proposal` (see
             * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
             * the start of the word is the start iter. Else, the word (as long as possible)
             * will contain only alphanumerical and the "_" characters.
             * @param proposal a #GtkSourceCompletionProposal.
             * @param iter a #GtkTextIter.
             */
            vfunc_activate_proposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean;
            /**
             * Get with what kind of activation the provider should be activated.
             */
            vfunc_get_activation(): CompletionActivation;
            /**
             * Gets the #GIcon for the icon of `provider`.
             */
            vfunc_get_gicon(): Gio.Icon | null;
            /**
             * Get the #GdkPixbuf for the icon of the `provider`.
             */
            vfunc_get_icon(): GdkPixbuf.Pixbuf | null;
            /**
             * Gets the icon name of `provider`.
             */
            vfunc_get_icon_name(): string | null;
            /**
             * Get a customized info widget to show extra information of a proposal.
             * This allows for customized widgets on a proposal basis, although in general
             * providers will have the same custom widget for all their proposals and
             * `proposal` can be ignored. The implementation of this function is optional.
             *
             * If this function is not implemented, the default widget is a #GtkLabel. The
             * return value of gtk_source_completion_proposal_get_info() is used as the
             * content of the #GtkLabel.
             *
             * <note>
             *   <para>
             *     If implemented, gtk_source_completion_provider_update_info()
             *     <emphasis>must</emphasis> also be implemented.
             *   </para>
             * </note>
             * @param proposal a currently selected #GtkSourceCompletionProposal.
             */
            vfunc_get_info_widget(proposal: CompletionProposal): Gtk.Widget | null;
            /**
             * Get the delay in milliseconds before starting interactive completion for
             * this provider. A value of -1 indicates to use the default value as set
             * by the #GtkSourceCompletion:auto-complete-delay property.
             */
            vfunc_get_interactive_delay(): number;
            /**
             * Get the name of the provider. This should be a translatable name for
             * display to the user. For example: _("Document word completion provider"). The
             * returned string must be freed with g_free().
             */
            vfunc_get_name(): string;
            /**
             * Get the provider priority. The priority determines the order in which
             * proposals appear in the completion popup. Higher priorities are sorted
             * before lower priorities. The default priority is 0.
             */
            vfunc_get_priority(): number;
            /**
             * Get the #GtkTextIter at which the completion for `proposal` starts. When
             * implemented, this information is used to position the completion window
             * accordingly when a proposal is selected in the completion window. The
             * `proposal` text inside the completion window is aligned on `iter`.
             *
             * If this function is not implemented, the word boundary is taken to position
             * the completion window. See gtk_source_completion_provider_activate_proposal()
             * for an explanation on the word boundaries.
             *
             * When the `proposal` is activated, the default handler uses `iter` as the start
             * of the word to replace. See
             * gtk_source_completion_provider_activate_proposal() for more information.
             * @param context a #GtkSourceCompletionContext.
             * @param proposal a #GtkSourceCompletionProposal.
             */
            vfunc_get_start_iter(context: CompletionContext, proposal: CompletionProposal): [boolean, Gtk.TextIter];
            /**
             * Get whether the provider match the context of completion detailed in
             * `context`.
             * @param context a #GtkSourceCompletionContext.
             */
            vfunc_match(context: CompletionContext): boolean;
            /**
             * Populate `context` with proposals from `provider` added with the
             * gtk_source_completion_context_add_proposals() function.
             * @param context a #GtkSourceCompletionContext.
             */
            vfunc_populate(context: CompletionContext): void;
            /**
             * Update extra information shown in `info` for `proposal`.
             *
             * <note>
             *   <para>
             *     This function <emphasis>must</emphasis> be implemented when
             *     gtk_source_completion_provider_get_info_widget() is implemented.
             *   </para>
             * </note>
             * @param proposal a #GtkSourceCompletionProposal.
             * @param info a #GtkSourceCompletionInfo.
             */
            vfunc_update_info(proposal: CompletionProposal, info: CompletionInfo): void;
        }

        export const CompletionProvider: CompletionProviderNamespace & {
            new (): CompletionProvider; // This allows `obj instanceof CompletionProvider`
        };

        module StyleSchemeChooser {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                style_scheme: StyleScheme;
                styleScheme: StyleScheme;
            }
        }

        export interface StyleSchemeChooserNamespace {
            $gtype: GObject.GType<StyleSchemeChooser>;
            prototype: StyleSchemeChooser;
        }
        interface StyleSchemeChooser extends GObject.Object {
            // Properties

            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get style_scheme(): StyleScheme;
            set style_scheme(val: StyleScheme);
            /**
             * The :style-scheme property contains the currently selected style
             * scheme. The property can be set to change
             * the current selection programmatically.
             */
            get styleScheme(): StyleScheme;
            set styleScheme(val: StyleScheme);

            // Methods

            /**
             * Gets the currently-selected scheme.
             * @returns the currently-selected scheme.
             */
            get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            set_style_scheme(scheme: StyleScheme): void;

            // Virtual methods

            /**
             * Gets the currently-selected scheme.
             */
            vfunc_get_style_scheme(): StyleScheme;
            /**
             * Sets the scheme.
             * @param scheme a #GtkSourceStyleScheme
             */
            vfunc_set_style_scheme(scheme: StyleScheme): void;
        }

        export const StyleSchemeChooser: StyleSchemeChooserNamespace & {
            new (): StyleSchemeChooser; // This allows `obj instanceof StyleSchemeChooser`
        };

        module UndoManager {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface UndoManagerNamespace {
            $gtype: GObject.GType<UndoManager>;
            prototype: UndoManager;
        }
        interface UndoManager extends GObject.Object {
            // Methods

            /**
             * Begin a not undoable action on the buffer. All changes between this call
             * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
             * be undone. This function should be re-entrant.
             */
            begin_not_undoable_action(): void;
            /**
             * Get whether there are redo operations available.
             * @returns %TRUE if there are redo operations available, %FALSE otherwise
             */
            can_redo(): boolean;
            /**
             * Emits the #GtkSourceUndoManager::can-redo-changed signal.
             */
            can_redo_changed(): void;
            /**
             * Get whether there are undo operations available.
             * @returns %TRUE if there are undo operations available, %FALSE otherwise
             */
            can_undo(): boolean;
            /**
             * Emits the #GtkSourceUndoManager::can-undo-changed signal.
             */
            can_undo_changed(): void;
            /**
             * Ends a not undoable action on the buffer.
             */
            end_not_undoable_action(): void;
            /**
             * Perform a single redo. Calling this function when there are no redo operations
             * available is an error. Use gtk_source_undo_manager_can_redo() to find out
             * if there are redo operations available.
             */
            redo(): void;
            /**
             * Perform a single undo. Calling this function when there are no undo operations
             * available is an error. Use gtk_source_undo_manager_can_undo() to find out
             * if there are undo operations available.
             */
            undo(): void;

            // Virtual methods

            /**
             * Begin a not undoable action on the buffer. All changes between this call
             * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
             * be undone. This function should be re-entrant.
             */
            vfunc_begin_not_undoable_action(): void;
            /**
             * Get whether there are redo operations available.
             */
            vfunc_can_redo(): boolean;
            /**
             * Emits the #GtkSourceUndoManager::can-redo-changed signal.
             */
            vfunc_can_redo_changed(): void;
            /**
             * Get whether there are undo operations available.
             */
            vfunc_can_undo(): boolean;
            /**
             * Emits the #GtkSourceUndoManager::can-undo-changed signal.
             */
            vfunc_can_undo_changed(): void;
            /**
             * Ends a not undoable action on the buffer.
             */
            vfunc_end_not_undoable_action(): void;
            /**
             * Perform a single redo. Calling this function when there are no redo operations
             * available is an error. Use gtk_source_undo_manager_can_redo() to find out
             * if there are redo operations available.
             */
            vfunc_redo(): void;
            /**
             * Perform a single undo. Calling this function when there are no undo operations
             * available is an error. Use gtk_source_undo_manager_can_undo() to find out
             * if there are undo operations available.
             */
            vfunc_undo(): void;
        }

        export const UndoManager: UndoManagerNamespace & {
            new (): UndoManager; // This allows `obj instanceof UndoManager`
        };

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

    export default GtkSource;
}

declare module 'gi://GtkSource' {
    import GtkSource4 from 'gi://GtkSource?version=4';
    export default GtkSource4;
}
// END
