/// <reference path="./cairo-1.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Poppler?version=0.18' {
    // Module dependencies
    import type cairo from 'gi://cairo?version=1.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';

    export namespace Poppler {
        /**
         * Poppler-0.18
         */

        /**
         * Layer actions
         */

        /**
         * Layer actions
         */
        export namespace ActionLayerAction {
            export const $gtype: GObject.GType<ActionLayerAction>;
        }

        enum ActionLayerAction {
            /**
             * set layer visibility on
             */
            ON,
            /**
             * set layer visibility off
             */
            OFF,
            /**
             * reverse the layer visibility state
             */
            TOGGLE,
        }
        /**
         * Movie operations
         */

        /**
         * Movie operations
         */
        export namespace ActionMovieOperation {
            export const $gtype: GObject.GType<ActionMovieOperation>;
        }

        enum ActionMovieOperation {
            /**
             * play movie
             */
            PLAY,
            /**
             * pause playing movie
             */
            PAUSE,
            /**
             * resume paused movie
             */
            RESUME,
            /**
             * stop playing movie
             */
            STOP,
        }
        /**
         * Action types
         */

        /**
         * Action types
         */
        export namespace ActionType {
            export const $gtype: GObject.GType<ActionType>;
        }

        enum ActionType {
            /**
             * unknown action
             */
            UNKNOWN,
            /**
             * no action specified
             */
            NONE,
            /**
             * go to destination
             */
            GOTO_DEST,
            /**
             * go to destination in another document
             */
            GOTO_REMOTE,
            /**
             * launch app (or open document)
             */
            LAUNCH,
            /**
             * URI
             */
            URI,
            /**
             * predefined action
             */
            NAMED,
            /**
             * play movies. Since 0.14
             */
            MOVIE,
            /**
             * play multimedia content. Since 0.14
             */
            RENDITION,
            /**
             * state of layer. Since 0.14
             */
            OCG_STATE,
            /**
             * Javascript. Since 0.18
             */
            JAVASCRIPT,
            /**
             * resets form. Since 0.90
             */
            RESET_FORM,
        }
        /**
         * Form field additional action types to be passed to `poppler_form_field_get_additional_action`
         */

        /**
         * Form field additional action types to be passed to `poppler_form_field_get_additional_action`
         */
        export namespace AdditionalActionType {
            export const $gtype: GObject.GType<AdditionalActionType>;
        }

        enum AdditionalActionType {
            /**
             * The action to be performed when the user modifies the field.
             */
            FIELD_MODIFIED,
            /**
             * The action to be performed before the field is formatted to
             * display its value.
             */
            FORMAT_FIELD,
            /**
             * The action to be performed when the field value changes.
             */
            VALIDATE_FIELD,
            /**
             * The action to be performed when the field needs to be
             * recalculated.
             */
            CALCULATE_FIELD,
        }

        export namespace AnnotExternalDataType {
            export const $gtype: GObject.GType<AnnotExternalDataType>;
        }

        enum AnnotExternalDataType {
            '3D',
            UNKNOWN,
        }

        export namespace AnnotFreeTextQuadding {
            export const $gtype: GObject.GType<AnnotFreeTextQuadding>;
        }

        enum AnnotFreeTextQuadding {
            LEFT_JUSTIFIED,
            CENTERED,
            RIGHT_JUSTIFIED,
        }

        export namespace AnnotMarkupReplyType {
            export const $gtype: GObject.GType<AnnotMarkupReplyType>;
        }

        enum AnnotMarkupReplyType {
            R,
            GROUP,
        }

        export namespace AnnotStampIcon {
            export const $gtype: GObject.GType<AnnotStampIcon>;
        }

        enum AnnotStampIcon {
            UNKNOWN,
            APPROVED,
            AS_IS,
            CONFIDENTIAL,
            FINAL,
            EXPERIMENTAL,
            EXPIRED,
            NOT_APPROVED,
            NOT_FOR_PUBLIC_RELEASE,
            SOLD,
            DEPARTMENTAL,
            FOR_COMMENT,
            FOR_PUBLIC_RELEASE,
            TOP_SECRET,
            NONE,
        }

        export namespace AnnotTextState {
            export const $gtype: GObject.GType<AnnotTextState>;
        }

        enum AnnotTextState {
            MARKED,
            UNMARKED,
            ACCEPTED,
            REJECTED,
            CANCELLED,
            COMPLETED,
            NONE,
            UNKNOWN,
        }

        export namespace AnnotType {
            export const $gtype: GObject.GType<AnnotType>;
        }

        enum AnnotType {
            UNKNOWN,
            TEXT,
            LINK,
            FREE_TEXT,
            LINE,
            SQUARE,
            CIRCLE,
            POLYGON,
            POLY_LINE,
            HIGHLIGHT,
            UNDERLINE,
            SQUIGGLY,
            STRIKE_OUT,
            STAMP,
            CARET,
            INK,
            POPUP,
            FILE_ATTACHMENT,
            SOUND,
            MOVIE,
            WIDGET,
            SCREEN,
            PRINTER_MARK,
            TRAP_NET,
            WATERMARK,
            '3D',
        }
        /**
         * Backend codes returned by poppler_get_backend().
         */

        /**
         * Backend codes returned by poppler_get_backend().
         */
        export namespace Backend {
            export const $gtype: GObject.GType<Backend>;
        }

        enum Backend {
            /**
             * Unknown backend
             */
            UNKNOWN,
            /**
             * Splash backend
             */
            SPLASH,
            /**
             * Cairo backend
             */
            CAIRO,
        }
        /**
         * Signature certificate verification results
         */

        /**
         * Signature certificate verification results
         */
        export namespace CertificateStatus {
            export const $gtype: GObject.GType<CertificateStatus>;
        }

        enum CertificateStatus {
            /**
             * certificate is considered trusted
             */
            TRUSTED,
            /**
             * the issuer of this certificate has been marked as untrusted by the user
             */
            UNTRUSTED_ISSUER,
            /**
             * this certificate trust chain has not finished in a trusted root certificate
             */
            UNKNOWN_ISSUER,
            /**
             * certificate was revoked by the issuing certificate authority
             */
            REVOKED,
            /**
             * signing time is outside the validity bounds of this certificate
             */
            EXPIRED,
            /**
             * failed to verify certificate
             */
            GENERIC_ERROR,
            /**
             * certificate not yet verified
             */
            NOT_VERIFIED,
        }
        /**
         * Destination types
         */

        /**
         * Destination types
         */
        export namespace DestType {
            export const $gtype: GObject.GType<DestType>;
        }

        enum DestType {
            /**
             * unknown destination
             */
            UNKNOWN,
            /**
             * go to page with coordinates (left, top)
             * positioned at the upper-left corner of the window and the contents of
             * the page magnified by the factor zoom
             */
            XYZ,
            /**
             * go to page with its contents magnified just
             * enough to fit the entire page within the window both horizontally and
             * vertically
             */
            FIT,
            /**
             * go to page with the vertical coordinate top
             * positioned at the top edge of the window and the contents of the page
             * magnified just enough to fit the entire width of the page within the window
             */
            FITH,
            /**
             * go to page with the horizontal coordinate
             * left positioned at the left edge of the window and the contents of the
             * page magnified just enough to fit the entire height of the page within the window
             */
            FITV,
            /**
             * go to page with its contents magnified just
             * enough to fit the rectangle specified by the coordinates left, bottom,
             * right, and top entirely within the window both horizontally and vertically
             */
            FITR,
            /**
             * go to page with its contents magnified just enough to fit
             * its bounding box entirely within the window both horizontally and vertically
             */
            FITB,
            /**
             * go to page with the vertical
             * coordinate top positioned at the top edge of the window and the
             * contents of the page magnified just enough to fit the entire width of its
             * bounding box within the window
             */
            FITBH,
            /**
             * go to page with the horizontal
             * coordinate left positioned at the left edge of the window and the
             * contents of the page magnified just enough to fit the entire height of its
             * bounding box within the window
             */
            FITBV,
            /**
             * got to page specified by a name. See poppler_document_find_dest()
             */
            NAMED,
        }
        /**
         * Error codes returned by #PopplerDocument
         */
        class Error extends GLib.Error {
            static $gtype: GObject.GType<Error>;

            // Static fields

            /**
             * Generic error when a document operation fails
             */
            static INVALID: number;
            /**
             * Document is encrypted
             */
            static ENCRYPTED: number;
            /**
             * File could not be opened for writing when saving document
             */
            static OPEN_FILE: number;
            /**
             * Failed to read the document catalog
             */
            static BAD_CATALOG: number;
            /**
             * Document is damaged
             */
            static DAMAGED: number;
            static SIGNING: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;

            // Static methods

            static quark(): GLib.Quark;
        }

        /**
         * Font types
         */

        /**
         * Font types
         */
        export namespace FontType {
            export const $gtype: GObject.GType<FontType>;
        }

        enum FontType {
            /**
             * unknown font type
             */
            UNKNOWN,
            /**
             * Type 1 font type
             */
            TYPE1,
            /**
             * Type 1 font type embedded in Compact Font Format (CFF) font program
             */
            TYPE1C,
            /**
             * Type 1 font type embedded in OpenType font program
             */
            TYPE1COT,
            /**
             * A font type that is defined with PDF graphics operators
             */
            TYPE3,
            /**
             * TrueType font type
             */
            TRUETYPE,
            /**
             * TrueType font type embedded in OpenType font program
             */
            TRUETYPEOT,
            /**
             * CIDFont type based on Type 1 font technology
             */
            CID_TYPE0,
            /**
             * CIDFont type based on Type 1 font technology embedded in CFF font program
             */
            CID_TYPE0C,
            /**
             * CIDFont type based on Type 1 font technology embedded in OpenType font program
             */
            CID_TYPE0COT,
            /**
             * CIDFont type based on TrueType font technology
             */
            CID_TYPE2,
            /**
             * CIDFont type based on TrueType font technology embedded in OpenType font program
             */
            CID_TYPE2OT,
        }

        export namespace FormButtonType {
            export const $gtype: GObject.GType<FormButtonType>;
        }

        enum FormButtonType {
            PUSH,
            CHECK,
            RADIO,
        }

        export namespace FormChoiceType {
            export const $gtype: GObject.GType<FormChoiceType>;
        }

        enum FormChoiceType {
            COMBO,
            LIST,
        }

        export namespace FormFieldType {
            export const $gtype: GObject.GType<FormFieldType>;
        }

        enum FormFieldType {
            UNKNOWN,
            BUTTON,
            TEXT,
            CHOICE,
            SIGNATURE,
        }

        export namespace FormTextType {
            export const $gtype: GObject.GType<FormTextType>;
        }

        enum FormTextType {
            NORMAL,
            MULTILINE,
            FILE_SELECT,
        }
        /**
         * Play mode enum values.
         */

        /**
         * Play mode enum values.
         */
        export namespace MoviePlayMode {
            export const $gtype: GObject.GType<MoviePlayMode>;
        }

        enum MoviePlayMode {
            /**
             * the movie should be played once and controls should be closed at the end.
             */
            ONCE,
            /**
             * the movie should be played once, but controls should be left open.
             */
            OPEN,
            /**
             * the movie should be played in loop, until manually stopped.
             */
            REPEAT,
            /**
             * the movie should be played forward and backward, forward and backward,
             *   and so forth, until manually stopped.
             */
            PALINDROME,
        }
        /**
         * PDF Subtype Conformance
         */

        /**
         * PDF Subtype Conformance
         */
        export namespace PDFConformance {
            export const $gtype: GObject.GType<PDFConformance>;
        }

        enum PDFConformance {
            /**
             * Null
             */
            UNSET,
            /**
             * Level A (accessible) conformance (PDF/A)
             */
            A,
            /**
             * Level B (basic) conformance (PDF/A)
             */
            B,
            /**
             * Level G (external graphical content) (PDF/X)
             */
            G,
            /**
             * Level N (external ICC Profile) (PDF/X)
             */
            N,
            /**
             * Level P (ICC Profile) (PDF/X)
             */
            P,
            /**
             * Level PG (conjunction of P and G) (PDF/X)
             */
            PG,
            /**
             * Level U (Unicode) conformance (PDF/A)
             */
            U,
            /**
             * No conformance level available
             */
            NONE,
        }
        /**
         * PDF Subtype Part
         */
        /**
         * PDF Subtype Part
         */
        class PDFPart {
            static $gtype: GObject.GType<PDFPart>;

            // Static fields

            /**
             * Null
             */
            static UNSET: number;
            /**
             * 1
             */
            static '1': number;
            /**
             * 2
             */
            static '2': number;
            /**
             * 3
             */
            static '3': number;
            /**
             * 4
             */
            static '4': number;
            /**
             * 5
             */
            static '5': number;
            /**
             * 6
             */
            static '6': number;
            /**
             * 7
             */
            static '7': number;
            /**
             * 8
             */
            static '8': number;
            /**
             * No part available
             */
            static NONE: number;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * PDF Subtype
         */

        /**
         * PDF Subtype
         */
        export namespace PDFSubtype {
            export const $gtype: GObject.GType<PDFSubtype>;
        }

        enum PDFSubtype {
            /**
             * Null
             */
            UNSET,
            /**
             * ISO 19005 - Document management -- Electronic document file format for long-term preservation (PDF/A)
             */
            PDF_A,
            /**
             * ISO 24517 - Document management -- Engineering document format using PDF (PDF/E)
             */
            PDF_E,
            /**
             * ISO 14289 - Document management applications -- Electronic document file format enhancement for accessibility (PDF/UA)
             */
            PDF_UA,
            /**
             * ISO 16612 - Graphic technology -- Variable data exchange (PDF/VT)
             */
            PDF_VT,
            /**
             * ISO 15930 - Graphic technology -- Prepress digital data exchange (PDF/X)
             */
            PDF_X,
            /**
             * Not compliant with the above standards
             */
            NONE,
        }
        /**
         * Page layout types
         */

        /**
         * Page layout types
         */
        export namespace PageLayout {
            export const $gtype: GObject.GType<PageLayout>;
        }

        enum PageLayout {
            /**
             * no specific layout set
             */
            UNSET,
            /**
             * one page at a time
             */
            SINGLE_PAGE,
            /**
             * pages in one column
             */
            ONE_COLUMN,
            /**
             * pages in two columns with odd numbered pages on the left
             */
            TWO_COLUMN_LEFT,
            /**
             * pages in two columns with odd numbered pages on the right
             */
            TWO_COLUMN_RIGHT,
            /**
             * two pages at a time with odd numbered pages on the left
             */
            TWO_PAGE_LEFT,
            /**
             * two pages at a time with odd numbered pages on the right
             */
            TWO_PAGE_RIGHT,
        }
        /**
         * Page modes
         */

        /**
         * Page modes
         */
        export namespace PageMode {
            export const $gtype: GObject.GType<PageMode>;
        }

        enum PageMode {
            /**
             * no specific mode set
             */
            UNSET,
            /**
             * neither document outline nor thumbnails visible
             */
            NONE,
            /**
             * document outline visible
             */
            USE_OUTLINES,
            /**
             * thumbnails visible
             */
            USE_THUMBS,
            /**
             * full-screen mode
             */
            FULL_SCREEN,
            /**
             * layers panel visible
             */
            USE_OC,
            /**
             * attachments panel visible
             */
            USE_ATTACHMENTS,
        }
        /**
         * Page transition alignment types for #POPPLER_PAGE_TRANSITION_SPLIT
         * and #POPPLER_PAGE_TRANSITION_BLINDS transition types
         */

        /**
         * Page transition alignment types for #POPPLER_PAGE_TRANSITION_SPLIT
         * and #POPPLER_PAGE_TRANSITION_BLINDS transition types
         */
        export namespace PageTransitionAlignment {
            export const $gtype: GObject.GType<PageTransitionAlignment>;
        }

        enum PageTransitionAlignment {
            /**
             * horizontal dimension
             */
            HORIZONTAL,
            /**
             * vertical dimension
             */
            VERTICAL,
        }
        /**
         * Page transition direction types for #POPPLER_PAGE_TRANSITION_SPLIT,
         * #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY transition types
         */

        /**
         * Page transition direction types for #POPPLER_PAGE_TRANSITION_SPLIT,
         * #POPPLER_PAGE_TRANSITION_BOX and #POPPLER_PAGE_TRANSITION_FLY transition types
         */
        export namespace PageTransitionDirection {
            export const $gtype: GObject.GType<PageTransitionDirection>;
        }

        enum PageTransitionDirection {
            /**
             * inward from the edges of the page
             */
            INWARD,
            /**
             * outward from the center of the page
             */
            OUTWARD,
        }
        /**
         * Page transition types
         */

        /**
         * Page transition types
         */
        export namespace PageTransitionType {
            export const $gtype: GObject.GType<PageTransitionType>;
        }

        enum PageTransitionType {
            /**
             * the new page replace the old one
             */
            REPLACE,
            /**
             * two lines sweep across the screen, revealing the new page
             */
            SPLIT,
            /**
             * multiple lines, evenly spaced across the screen, synchronously
             * sweep in the same direction to reveal the new page
             */
            BLINDS,
            /**
             * a rectangular box sweeps inward from the edges of the page or
             * outward from the center revealing the new page
             */
            BOX,
            /**
             * a single line sweeps across the screen from one edge to the other
             * revealing the new page
             */
            WIPE,
            /**
             * the old page dissolves gradually to reveal the new one
             */
            DISSOLVE,
            /**
             * similar to #POPPLER_PAGE_TRANSITION_DISSOLVE, except that the effect
             * sweeps across the page in a wide band moving from one side of the screen to the other
             */
            GLITTER,
            /**
             * changes are flown out or in to or from a location that is offscreen
             */
            FLY,
            /**
             * the old page slides off the screen while the new page slides in
             */
            PUSH,
            /**
             * the new page slides on to the screen covering the old page
             */
            COVER,
            /**
             * the old page slides off the screen uncovering the new page
             */
            UNCOVER,
            /**
             * the new page gradually becomes visible through the old one
             */
            FADE,
        }
        /**
         * Duplex viewer preference
         */

        /**
         * Duplex viewer preference
         */
        export namespace PrintDuplex {
            export const $gtype: GObject.GType<PrintDuplex>;
        }

        enum PrintDuplex {
            /**
             * No preference on duplex printing
             */
            NONE,
            /**
             * Print single-sided
             */
            SIMPLEX,
            /**
             * Duplex and flip on the short edge of the sheet
             */
            DUPLEX_FLIP_SHORT_EDGE,
            /**
             * Duplex and flip on the long edge of the sheet
             */
            DUPLEX_FLIP_LONG_EDGE,
        }
        /**
         * PrintScaling viewer preference
         */

        /**
         * PrintScaling viewer preference
         */
        export namespace PrintScaling {
            export const $gtype: GObject.GType<PrintScaling>;
        }

        enum PrintScaling {
            /**
             * application's default page scaling
             */
            APP_DEFAULT,
            /**
             * no page scaling
             */
            NONE,
        }
        /**
         * Selection styles
         */

        /**
         * Selection styles
         */
        export namespace SelectionStyle {
            export const $gtype: GObject.GType<SelectionStyle>;
        }

        enum SelectionStyle {
            /**
             * glyph is the minimum unit for selection
             */
            GLYPH,
            /**
             * word is the minimum unit for selection
             */
            WORD,
            /**
             * line is the minimum unit for selection
             */
            LINE,
        }
        /**
         * Signature verification results
         */

        /**
         * Signature verification results
         */
        export namespace SignatureStatus {
            export const $gtype: GObject.GType<SignatureStatus>;
        }

        enum SignatureStatus {
            /**
             * signature is cryptographically valid
             */
            VALID,
            /**
             * signature is cryptographically invalid
             */
            INVALID,
            /**
             * document content was changed after the signature was applied
             */
            DIGEST_MISMATCH,
            /**
             * signature CMS/PKCS7 structure is malformed
             */
            DECODING_ERROR,
            /**
             * failed to verify signature
             */
            GENERIC_ERROR,
            /**
             * requested signature is not present in the document
             */
            NOT_FOUND,
            /**
             * signature not yet verified
             */
            NOT_VERIFIED,
        }

        export namespace Stretch {
            export const $gtype: GObject.GType<Stretch>;
        }

        enum Stretch {
            ULTRA_CONDENSED,
            EXTRA_CONDENSED,
            CONDENSED,
            SEMI_CONDENSED,
            NORMAL,
            SEMI_EXPANDED,
            EXPANDED,
            EXTRA_EXPANDED,
            ULTRA_EXPANDED,
        }

        export namespace StructureBlockAlign {
            export const $gtype: GObject.GType<StructureBlockAlign>;
        }

        enum StructureBlockAlign {
            BEFORE,
            MIDDLE,
            AFTER,
            JUSTIFY,
        }

        export namespace StructureBorderStyle {
            export const $gtype: GObject.GType<StructureBorderStyle>;
        }

        enum StructureBorderStyle {
            NONE,
            HIDDEN,
            DOTTED,
            DASHED,
            SOLID,
            DOUBLE,
            GROOVE,
            INSET,
            OUTSET,
        }

        export namespace StructureElementKind {
            export const $gtype: GObject.GType<StructureElementKind>;
        }

        enum StructureElementKind {
            CONTENT,
            OBJECT_REFERENCE,
            DOCUMENT,
            PART,
            ARTICLE,
            SECTION,
            DIV,
            SPAN,
            QUOTE,
            NOTE,
            REFERENCE,
            BIBENTRY,
            CODE,
            LINK,
            ANNOT,
            BLOCKQUOTE,
            CAPTION,
            NONSTRUCT,
            TOC,
            TOC_ITEM,
            INDEX,
            PRIVATE,
            PARAGRAPH,
            HEADING,
            HEADING_1,
            HEADING_2,
            HEADING_3,
            HEADING_4,
            HEADING_5,
            HEADING_6,
            LIST,
            LIST_ITEM,
            LIST_LABEL,
            LIST_BODY,
            TABLE,
            TABLE_ROW,
            TABLE_HEADING,
            TABLE_DATA,
            TABLE_HEADER,
            TABLE_FOOTER,
            TABLE_BODY,
            RUBY,
            RUBY_BASE_TEXT,
            RUBY_ANNOT_TEXT,
            RUBY_PUNCTUATION,
            WARICHU,
            WARICHU_TEXT,
            WARICHU_PUNCTUATION,
            FIGURE,
            FORMULA,
            FORM,
        }

        export namespace StructureFormRole {
            export const $gtype: GObject.GType<StructureFormRole>;
        }

        enum StructureFormRole {
            UNDEFINED,
            RADIO_BUTTON,
            PUSH_BUTTON,
            TEXT_VALUE,
            CHECKBOX,
        }

        export namespace StructureFormState {
            export const $gtype: GObject.GType<StructureFormState>;
        }

        enum StructureFormState {
            ON,
            OFF,
            NEUTRAL,
        }
        class StructureGlyphOrientation {
            static $gtype: GObject.GType<StructureGlyphOrientation>;

            // Static fields

            static AUTO: number;
            static '0': number;
            static '90': number;
            static '180': number;
            static '270': number;

            // Constructors

            _init(...args: any[]): void;
        }

        export namespace StructureInlineAlign {
            export const $gtype: GObject.GType<StructureInlineAlign>;
        }

        enum StructureInlineAlign {
            START,
            CENTER,
            END,
        }

        export namespace StructureListNumbering {
            export const $gtype: GObject.GType<StructureListNumbering>;
        }

        enum StructureListNumbering {
            NONE,
            DISC,
            CIRCLE,
            SQUARE,
            DECIMAL,
            UPPER_ROMAN,
            LOWER_ROMAN,
            UPPER_ALPHA,
            LOWER_ALPHA,
        }

        export namespace StructurePlacement {
            export const $gtype: GObject.GType<StructurePlacement>;
        }

        enum StructurePlacement {
            BLOCK,
            INLINE,
            BEFORE,
            START,
            END,
        }

        export namespace StructureRubyAlign {
            export const $gtype: GObject.GType<StructureRubyAlign>;
        }

        enum StructureRubyAlign {
            START,
            CENTER,
            END,
            JUSTIFY,
            DISTRIBUTE,
        }

        export namespace StructureRubyPosition {
            export const $gtype: GObject.GType<StructureRubyPosition>;
        }

        enum StructureRubyPosition {
            BEFORE,
            AFTER,
            WARICHU,
            INLINE,
        }

        export namespace StructureTableScope {
            export const $gtype: GObject.GType<StructureTableScope>;
        }

        enum StructureTableScope {
            ROW,
            COLUMN,
            BOTH,
        }

        export namespace StructureTextAlign {
            export const $gtype: GObject.GType<StructureTextAlign>;
        }

        enum StructureTextAlign {
            START,
            CENTER,
            END,
            JUSTIFY,
        }

        export namespace StructureTextDecoration {
            export const $gtype: GObject.GType<StructureTextDecoration>;
        }

        enum StructureTextDecoration {
            NONE,
            UNDERLINE,
            OVERLINE,
            LINETHROUGH,
        }

        export namespace StructureWritingMode {
            export const $gtype: GObject.GType<StructureWritingMode>;
        }

        enum StructureWritingMode {
            LR_TB,
            RL_TB,
            TB_RL,
        }

        export namespace Style {
            export const $gtype: GObject.GType<Style>;
        }

        enum Style {
            NORMAL,
            OBLIQUE,
            ITALIC,
        }

        export namespace Weight {
            export const $gtype: GObject.GType<Weight>;
        }

        enum Weight {
            THIN,
            ULTRALIGHT,
            LIGHT,
            NORMAL,
            MEDIUM,
            SEMIBOLD,
            BOLD,
            ULTRABOLD,
            HEAVY,
        }
        const ANNOT_TEXT_ICON_CIRCLE: string;
        const ANNOT_TEXT_ICON_COMMENT: string;
        const ANNOT_TEXT_ICON_CROSS: string;
        const ANNOT_TEXT_ICON_HELP: string;
        const ANNOT_TEXT_ICON_INSERT: string;
        const ANNOT_TEXT_ICON_KEY: string;
        const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string;
        const ANNOT_TEXT_ICON_NOTE: string;
        const ANNOT_TEXT_ICON_PARAGRAPH: string;
        /**
         * Defined if poppler was compiled with cairo support.
         */
        const HAS_CAIRO: number;
        /**
         * The major version number of the poppler header files (e.g. in poppler version
         * 0.1.2 this is 0.)
         */
        const MAJOR_VERSION: number;
        /**
         * The micro version number of the poppler header files (e.g. in poppler version
         * 0.1.2 this is 2.)
         */
        const MICRO_VERSION: number;
        /**
         * The major version number of the poppler header files (e.g. in poppler version
         * 0.1.2 this is 1.)
         */
        const MINOR_VERSION: number;
        /**
         * Parses a PDF format date string and converts it to a #time_t. Returns #FALSE
         * if the parsing fails or the input string is not a valid PDF format date string
         * @param date string to parse
         * @param timet an uninitialized #time_t
         * @returns #TRUE, if @timet was set
         */
        function date_parse(date: string, timet: never): boolean;
        function error_quark(): GLib.Quark;
        /**
         * Get all available signing certificate information
         * @returns all available signing certificate information
         */
        function get_available_signing_certificates(): CertificateInfo[];
        /**
         * Returns the backend compiled into the poppler library.
         * @returns The backend used by poppler
         */
        function get_backend(): Backend;
        /**
         * Get certificate by nick name
         * @param id
         * @returns a #PopplerCertificateInfo or %NULL if not found
         */
        function get_certificate_info_by_id(id: string): CertificateInfo;
        /**
         * Get NSS directory
         * @returns nss directroy.
         */
        function get_nss_dir(): string;
        /**
         * Returns the version of poppler in use.  This result is not to be freed.
         * @returns the version of poppler.
         */
        function get_version(): string;
        /**
         * Converts a bytestring into a zero-terminated string suitable to
         * pass to poppler_document_find_dest().
         *
         * Note that the returned string has no defined encoding and is not
         * suitable for display to the user.
         *
         * The returned data must be freed using g_free().
         * @param data the bytestring data
         * @returns the named dest
         */
        function named_dest_from_bytestring(data: Uint8Array | string): string;
        /**
         * Converts a named dest string (e.g. from #PopplerDest.named_dest) into a
         * bytestring, inverting the transformation of
         * poppler_named_dest_from_bytestring().
         *
         * Note that the returned data is not zero terminated and may also
         * contains embedded NUL bytes.
         *
         * If `name` is not a valid named dest string, returns %NULL.
         *
         * The returned data must be freed using g_free().
         * @param name the named dest string
         * @returns a new bytestring,   or %NULL
         */
        function named_dest_to_bytestring(name: string): Uint8Array | null;
        /**
         * Set NSS directory
         * @param path
         */
        function set_nss_dir(path: string): void;
        /**
         * A callback which asks for certificate password
         * @param func a #PopplerNssPasswordFunc that represents a signature annotation
         */
        function set_nss_password_callback(func: NssPasswordFunc): void;
        interface AttachmentSaveFunc {
            (buf: Uint8Array | string): boolean;
        }
        interface MediaSaveFunc {
            (buf: Uint8Array | string): boolean;
        }
        interface NssPasswordFunc {
            (text: string): string;
        }

        export namespace AnnotFlag {
            export const $gtype: GObject.GType<AnnotFlag>;
        }

        enum AnnotFlag {
            UNKNOWN,
            INVISIBLE,
            HIDDEN,
            PRINT,
            NO_ZOOM,
            NO_ROTATE,
            NO_VIEW,
            READ_ONLY,
            LOCKED,
            TOGGLE_NO_VIEW,
            LOCKED_CONTENTS,
        }
        /**
         * Flags using while searching text in a page
         */

        /**
         * Flags using while searching text in a page
         */
        export namespace FindFlags {
            export const $gtype: GObject.GType<FindFlags>;
        }

        enum FindFlags {
            /**
             * use default search settings
             */
            DEFAULT,
            /**
             * do case sensitive search
             */
            CASE_SENSITIVE,
            /**
             * search backwards
             */
            BACKWARDS,
            /**
             * search only whole words
             */
            WHOLE_WORDS_ONLY,
            /**
             * do diacritics insensitive search,
             * i.e. ignore accents, umlauts, diaeresis,etc. while matching. This
             * option will be ignored if the search term is not pure ascii. Since 0.73.
             */
            IGNORE_DIACRITICS,
            /**
             * allows to match on text spanning from
             * end of a line to the next line. (Currently it won't match on text spanning
             * more than two lines.) Automatically ignores hyphen at end of line, and
             * allows whitespace in search term to match on newline char. Since: 21.05.0.
             */
            MULTILINE,
        }
        /**
         * Permissions
         */

        /**
         * Permissions
         */
        export namespace Permissions {
            export const $gtype: GObject.GType<Permissions>;
        }

        enum Permissions {
            /**
             * document can be printer
             */
            OK_TO_PRINT,
            /**
             * document contents can be modified
             */
            OK_TO_MODIFY,
            /**
             * document can be copied
             */
            OK_TO_COPY,
            /**
             * annotations can added to the document
             */
            OK_TO_ADD_NOTES,
            /**
             * interactive form fields can be filled in
             */
            OK_TO_FILL_FORM,
            /**
             * extract text and graphics
             * (in support of accessibility to users with disabilities or for other purposes). Since 0.18
             */
            OK_TO_EXTRACT_CONTENTS,
            /**
             * assemble the document (insert, rotate, or delete pages and create
             * bookmarks or thumbnail images). Since 0.18
             */
            OK_TO_ASSEMBLE,
            /**
             * document can be printer at high resolution. Since 0.18
             */
            OK_TO_PRINT_HIGH_RESOLUTION,
            /**
             * document permits all operations
             */
            FULL,
        }
        /**
         * Printing flags
         */

        /**
         * Printing flags
         */
        export namespace PrintFlags {
            export const $gtype: GObject.GType<PrintFlags>;
        }

        enum PrintFlags {
            /**
             * print main document contents
             */
            DOCUMENT,
            /**
             * print document and markup annotations
             */
            MARKUP_ANNOTS,
            /**
             * print document and only stamp annotations
             */
            STAMP_ANNOTS_ONLY,
            /**
             * print main document contents and all markup annotations
             */
            ALL,
        }
        /**
         * Signature validation flags
         */

        /**
         * Signature validation flags
         */
        export namespace SignatureValidationFlags {
            export const $gtype: GObject.GType<SignatureValidationFlags>;
        }

        enum SignatureValidationFlags {
            /**
             * Whether to validate also the certificate of the signature
             */
            VALIDATE_CERTIFICATE,
            /**
             * Whether to not do OCSP (Online Certificate Status Protocol) revocation check
             */
            WITHOUT_OCSP_REVOCATION_CHECK,
            /**
             * Whether to use AIA (Authority Information Access) extension for certificate fetching
             */
            USE_AIA_CERTIFICATE_FETCH,
        }

        export namespace StructureGetTextFlags {
            export const $gtype: GObject.GType<StructureGetTextFlags>;
        }

        enum StructureGetTextFlags {
            /**
             * No flags.
             */
            NONE,
            /**
             * For non-leaf, non-content
             *    elements, recursively obtain the text from all the elements
             *    enclosed in the subtree.
             */
            RECURSIVE,
        }
        /**
         * Viewer preferences
         */

        /**
         * Viewer preferences
         */
        export namespace ViewerPreferences {
            export const $gtype: GObject.GType<ViewerPreferences>;
        }

        enum ViewerPreferences {
            /**
             * no preferences set
             */
            UNSET,
            /**
             * hider toolbars when document is active
             */
            HIDE_TOOLBAR,
            /**
             * hide menu bar when document is active
             */
            HIDE_MENUBAR,
            /**
             * hide UI elements in document's window
             */
            HIDE_WINDOWUI,
            /**
             * resize document's window to fit the size of the first displayed page
             */
            FIT_WINDOW,
            /**
             * position the document's window in the center of the screen
             */
            CENTER_WINDOW,
            /**
             * display document title in window's title bar
             */
            DISPLAY_DOC_TITLE,
            /**
             * the predominant reading order for text is right to left
             */
            DIRECTION_RTL,
        }
        module Annot {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Annot extends GObject.Object {
            static $gtype: GObject.GType<Annot>;

            // Constructors

            constructor(properties?: Partial<Annot.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the type of `poppler_annot`
             * @returns #PopplerAnnotType of @poppler_annot.
             */
            get_annot_type(): AnnotType;
            /**
             * Returns the border width of the annotation. Some PDF editors set a border
             * width even if the border is not actually drawn.
             * @param width
             * @returns true and sets @border_width to the actual border width if a border is defined, otherwise returns false and sets @border_width to 0.
             */
            get_border_width(width: number): boolean;
            /**
             * Retrieves the color of `poppler_annot`.
             * @returns a new allocated #PopplerColor with the color values of               @poppler_annot, or %NULL. It must be freed with g_free() when done.
             */
            get_color(): Color;
            /**
             * Retrieves the contents of `poppler_annot`.
             * @returns a new allocated string with the contents of @poppler_annot. It               must be freed with g_free() when done.
             */
            get_contents(): string;
            /**
             * Retrieves the flag field specifying various characteristics of the
             * `poppler_annot`.
             * @returns the flag field of @poppler_annot.
             */
            get_flags(): AnnotFlag;
            /**
             * Retrieves the last modification data of `poppler_annot`. The returned
             * string will be either a PDF format date or a text string.
             * See also #poppler_date_parse()
             * @returns a new allocated string with the last modification data of               @poppler_annot. It must be freed with g_free() when done.
             */
            get_modified(): string;
            /**
             * Retrieves the name of `poppler_annot`.
             * @returns a new allocated string with the name of @poppler_annot. It must               be freed with g_free() when done.
             */
            get_name(): string;
            /**
             * Returns the page index to which `poppler_annot` is associated, or -1 if unknown
             * @returns page index or -1
             */
            get_page_index(): number;
            /**
             * Retrieves the rectangle representing the page coordinates where the
             * annotation `poppler_annot` is placed.
             */
            get_rectangle(): Rectangle;
            /**
             * Sets the border width of the annotation. Since there is currently no
             * mechanism in the GLib binding to control the appearance of the border width,
             * this should generally only be used to disable the border, although the
             * API might be completed in the future.
             * @param width
             */
            set_border_width(width: number): void;
            /**
             * Sets the color of `poppler_annot`.
             * @param poppler_color a #PopplerColor, or %NULL
             */
            set_color(poppler_color?: Color | null): void;
            /**
             * Sets the contents of `poppler_annot` to the given value,
             * replacing the current contents.
             * @param contents a text string containing the new contents
             */
            set_contents(contents: string): void;
            /**
             * Sets the flag field specifying various characteristics of the
             * `poppler_annot`.
             * @param flags a #PopplerAnnotFlag
             */
            set_flags(flags: AnnotFlag | null): void;
            /**
             * Move the annotation to the rectangle representing the page coordinates
             * where the annotation `poppler_annot` should be placed.
             * @param poppler_rect a #PopplerRectangle with the new annotation's coordinates
             */
            set_rectangle(poppler_rect: Rectangle): void;
        }

        module AnnotCircle {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotCircle extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotCircle>;

            // Constructors

            constructor(properties?: Partial<AnnotCircle.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle): AnnotCircle;

            // Methods

            /**
             * Retrieves the interior color of `poppler_annot`.
             * @returns a new allocated #PopplerColor with the color values of               @poppler_annot, or %NULL. It must be freed with g_free() when done.
             */
            get_interior_color(): Color;
            /**
             * Sets the interior color of `poppler_annot`.
             * @param poppler_color a #PopplerColor, or %NULL
             */
            set_interior_color(poppler_color?: Color | null): void;
        }

        module AnnotFileAttachment {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotFileAttachment extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotFileAttachment>;

            // Constructors

            constructor(properties?: Partial<AnnotFileAttachment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Creates a #PopplerAttachment for the file of the file attachment annotation `annot`.
             * The #PopplerAttachment must be unrefed with g_object_unref by the caller.
             * @returns @PopplerAttachment
             */
            get_attachment(): Attachment;
            /**
             * Retrieves the name of `poppler_annot`.
             * @returns a new allocated string with the name of @poppler_annot. It must               be freed with g_free() when done.
             */
            get_name(): string;
        }

        module AnnotFreeText {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotFreeText extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotFreeText>;

            // Constructors

            constructor(properties?: Partial<AnnotFreeText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle): AnnotFreeText;

            // Methods

            /**
             * Retrieves a #PopplerAnnotCalloutLine of four or six numbers specifying a callout
             * line attached to the `poppler_annot`.
             * @returns a new allocated #PopplerAnnotCalloutLine if the annot has a callout               line, %NULL in other case. It must be freed with g_free() when               done.
             */
            get_callout_line(): AnnotCalloutLine;
            /**
             * Gets the font color.
             * @returns a copy of the font's #PopplerColor.
             */
            get_font_color(): Color;
            /**
             * Gets the font description (i.e. font family name, style, weight, stretch and size).
             * @returns a copy of the annotation font description
             */
            get_font_desc(): FontDescription;
            /**
             * Retrieves the justification of the text of `poppler_annot`.
             * @returns #PopplerAnnotFreeTextQuadding of @poppler_annot.
             */
            get_quadding(): AnnotFreeTextQuadding;
            /**
             * Sets the font color.
             * @param color a #PopplerColor
             */
            set_font_color(color: Color): void;
            /**
             * Sets the font description (i.e. font family name, style, weight, stretch and size).
             * @param font_desc a #PopplerFontDescription
             */
            set_font_desc(font_desc: FontDescription): void;
        }

        module AnnotLine {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotLine extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotLine>;

            // Constructors

            constructor(properties?: Partial<AnnotLine.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine;

            // Methods

            /**
             * Set the coordinate points where the `poppler_annot` starts and ends.
             * @param start a #PopplerPoint of the starting vertice
             * @param end a #PopplerPoint of the ending vertice
             */
            set_vertices(start: Point, end: Point): void;
        }

        module AnnotMarkup {
            // Constructor properties interface

            interface ConstructorProps extends Annot.ConstructorProps {}
        }

        class AnnotMarkup extends Annot {
            static $gtype: GObject.GType<AnnotMarkup>;

            // Constructors

            constructor(properties?: Partial<AnnotMarkup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the date and time when the annotation was created
             * @returns a #GDate representing the date and time               when the annotation was created, or %NULL
             */
            get_date(): GLib.Date;
            /**
             * Gets the external data type of `poppler_annot`.
             * @returns #PopplerAnnotExternalDataType of @poppler_annot.
             */
            get_external_data(): AnnotExternalDataType;
            /**
             * Retrieves the label text of `poppler_annot`.
             * @returns the label text of @poppler_annot.
             */
            get_label(): string;
            /**
             * Retrieves the opacity value of `poppler_annot`.
             * @returns the opacity value of @poppler_annot,               between 0 (transparent) and 1 (opaque)
             */
            get_opacity(): number;
            /**
             * Retrieves the state of the popup window related to `poppler_annot`.
             * @returns the state of @poppler_annot. %TRUE if it's open, %FALSE in               other case.
             */
            get_popup_is_open(): boolean;
            /**
             * Retrieves the rectangle of the popup window related to `poppler_annot`.
             * @returns %TRUE if #PopplerRectangle was correctly filled, %FALSE otherwise
             */
            get_popup_rectangle(): [boolean, Rectangle];
            /**
             * Gets the reply type of `poppler_annot`.
             * @returns #PopplerAnnotMarkupReplyType of @poppler_annot.
             */
            get_reply_to(): AnnotMarkupReplyType;
            /**
             * Retrives the subject text of `poppler_annot`.
             * @returns the subject text of @poppler_annot.
             */
            get_subject(): string;
            /**
             * Return %TRUE if the markup annotation has a popup window associated
             * @returns %TRUE, if @poppler_annot has popup, %FALSE otherwise
             */
            has_popup(): boolean;
            /**
             * Sets the label text of `poppler_annot,` replacing the current one
             * @param label a text string containing the new label, or %NULL
             */
            set_label(label?: string | null): void;
            /**
             * Sets the opacity of `poppler_annot`. This value applies to
             * all visible elements of `poppler_annot` in its closed state,
             * but not to the pop-up window that appears when it's openened
             * @param opacity a constant opacity value, between 0 (transparent) and 1 (opaque)
             */
            set_opacity(opacity: number): void;
            /**
             * Associates a new popup window for editing contents of `poppler_annot`.
             * Popup window shall be displayed by viewers at `popup_rect` on the page.
             * @param popup_rect a #PopplerRectangle
             */
            set_popup(popup_rect: Rectangle): void;
            /**
             * Sets the state of the popup window related to `poppler_annot`.
             * @param is_open whether popup window should initially be displayed open
             */
            set_popup_is_open(is_open: boolean): void;
            /**
             * Sets the rectangle of the popup window related to `poppler_annot`.
             * This doesn't have any effect if `poppler_annot` doesn't have a
             * popup associated, use poppler_annot_markup_set_popup() to associate
             * a popup window to a #PopplerAnnotMarkup.
             * @param poppler_rect a #PopplerRectangle to set
             */
            set_popup_rectangle(poppler_rect: Rectangle): void;
        }

        module AnnotMovie {
            // Constructor properties interface

            interface ConstructorProps extends Annot.ConstructorProps {}
        }

        class AnnotMovie extends Annot {
            static $gtype: GObject.GType<AnnotMovie>;

            // Constructors

            constructor(properties?: Partial<AnnotMovie.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the movie object (PopplerMovie) stored in the `poppler_annot`.
             * @returns the movie object stored in the @poppler_annot. The returned               object is owned by #PopplerAnnotMovie and should not be freed
             */
            get_movie(): Movie;
            /**
             * Retrieves the movie title of `poppler_annot`.
             * @returns the title text of @poppler_annot.
             */
            get_title(): string;
        }

        module AnnotScreen {
            // Constructor properties interface

            interface ConstructorProps extends Annot.ConstructorProps {}
        }

        class AnnotScreen extends Annot {
            static $gtype: GObject.GType<AnnotScreen>;

            // Constructors

            constructor(properties?: Partial<AnnotScreen.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Retrieves the action (#PopplerAction) that shall be performed when `poppler_annot` is activated
             * @returns the action to perform. The returned               object is owned by @poppler_annot and should not be freed
             */
            get_action(): Action;
        }

        module AnnotSquare {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotSquare extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotSquare>;

            // Constructors

            constructor(properties?: Partial<AnnotSquare.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle): AnnotSquare;

            // Methods

            /**
             * Retrieves the interior color of `poppler_annot`.
             * @returns a new allocated #PopplerColor with the color values of               @poppler_annot, or %NULL. It must be freed with g_free() when done.
             */
            get_interior_color(): Color;
            /**
             * Sets the interior color of `poppler_annot`.
             * @param poppler_color a #PopplerColor, or %NULL
             */
            set_interior_color(poppler_color?: Color | null): void;
        }

        module AnnotStamp {
            // Constructor properties interface

            interface ConstructorProps extends Annot.ConstructorProps {}
        }

        class AnnotStamp extends Annot {
            static $gtype: GObject.GType<AnnotStamp>;

            // Constructors

            constructor(properties?: Partial<AnnotStamp.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle): AnnotStamp;

            // Methods

            get_icon(): AnnotStampIcon;
            /**
             * Sets the custom image of `poppler_annot` to be `image`
             * @param image an image cairo surface
             * @returns %TRUE on success, %FALSE otherwise.
             */
            set_custom_image(image: cairo.Surface): boolean;
            /**
             * Sets the icon of `poppler_annot` to be one of the predefined values in #PopplerAnnotStampIcon
             * @param icon the #PopplerAnnotStampIcon type of the icon
             */
            set_icon(icon: AnnotStampIcon | null): void;
        }

        module AnnotText {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotText extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotText>;

            // Constructors

            constructor(properties?: Partial<AnnotText.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](doc: Document, rect: Rectangle): AnnotText;

            // Methods

            /**
             * Gets name of the icon of `poppler_annot`.
             * @returns a new allocated string containing the icon name
             */
            get_icon(): string;
            /**
             * Retrieves the state of `poppler_annot`.
             * @returns the state of @poppler_annot. %TRUE if it's open, %FALSE in               other case.
             */
            get_is_open(): boolean;
            /**
             * Retrieves the state of `poppler_annot`.
             * @returns #PopplerAnnotTextState of @poppler_annot.
             */
            get_state(): AnnotTextState;
            /**
             * Sets the icon of `poppler_annot`. The following predefined
             * icons are currently supported:
             * <variablelist>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_NOTE</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_COMMENT</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_KEY</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_HELP</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_NEW_PARAGRAPH</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_PARAGRAPH</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_INSERT</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_CROSS</term>
             *  </varlistentry>
             *  <varlistentry>
             *   <term>#POPPLER_ANNOT_TEXT_ICON_CIRCLE</term>
             *  </varlistentry>
             * </variablelist>
             * @param icon the name of an icon
             */
            set_icon(icon: string): void;
            /**
             * Sets whether `poppler_annot` should initially be displayed open
             * @param is_open whether annotation should initially be displayed open
             */
            set_is_open(is_open: boolean): void;
        }

        module AnnotTextMarkup {
            // Constructor properties interface

            interface ConstructorProps extends AnnotMarkup.ConstructorProps {}
        }

        class AnnotTextMarkup extends AnnotMarkup {
            static $gtype: GObject.GType<AnnotTextMarkup>;

            // Constructors

            constructor(properties?: Partial<AnnotTextMarkup.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

            static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

            static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

            static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup;

            // Methods

            /**
             * Returns a #GArray of #PopplerQuadrilateral items that map from a
             * location on `page` to a #PopplerAnnotTextMarkup.  This array must be freed
             * when done.
             * @returns A #GArray of #PopplerQuadrilateral
             */
            get_quadrilaterals(): Quadrilateral[];
            /**
             * Set the regions (Quadrilaterals) to apply the text markup in `poppler_annot`.
             * @param quadrilaterals A #GArray of   #PopplerQuadrilateral<!-- -->s
             */
            set_quadrilaterals(quadrilaterals: Quadrilateral[]): void;
        }

        module Attachment {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Attachment extends GObject.Object {
            static $gtype: GObject.GType<Attachment>;

            // Fields

            name: string;
            description: string;
            size: number;
            mtime: GLib.Time;
            ctime: GLib.Time;
            checksum: GLib.String;

            // Constructors

            constructor(properties?: Partial<Attachment.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_checksum(): GLib.String;
            get_ctime(): GLib.DateTime | null;
            get_description(): string;
            get_mtime(): GLib.DateTime | null;
            get_name(): string;
            get_size(): number;
            /**
             * Saves `attachment` to a file indicated by `filename`.  If `error` is set, %FALSE
             * will be returned. Possible errors include those in the #G_FILE_ERROR domain
             * and whatever the save function generates.
             * @param filename name of file to save
             * @returns %TRUE, if the file successfully saved
             */
            save(filename: string): boolean;
            /**
             * Saves `attachment` by feeding the produced data to `save_func`. Can be used
             * when you want to store the attachment to something other than a file, such as
             * an in-memory buffer or a socket. If `error` is set, %FALSE will be
             * returned. Possible errors include those in the #G_FILE_ERROR domain and
             * whatever the save function generates.
             * @param save_func a function that is called to save each block of data that the save routine generates.
             * @returns %TRUE, if the save successfully completed
             */
            save_to_callback(save_func: AttachmentSaveFunc): boolean;
            /**
             * Saves `attachment` to a file referred to by `fd`.  If `error` is set, %FALSE
             * will be returned. Possible errors include those in the #G_FILE_ERROR domain
             * and whatever the save function generates.
             * Note that this function takes ownership of `fd;` you must not operate on it
             * again, nor close it.
             * @param fd a valid file descriptor open for writing
             * @returns %TRUE, if the file successfully saved
             */
            save_to_fd(fd: number): boolean;
        }

        module Document {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                author: string;
                creation_date: number;
                creationDate: number;
                creation_datetime: GLib.DateTime;
                creationDatetime: GLib.DateTime;
                creator: string;
                format: string;
                format_major: number;
                formatMajor: number;
                format_minor: number;
                formatMinor: number;
                keywords: string;
                linearized: boolean;
                metadata: string;
                mod_date: number;
                modDate: number;
                mod_datetime: GLib.DateTime;
                modDatetime: GLib.DateTime;
                page_layout: PageLayout;
                pageLayout: PageLayout;
                page_mode: PageMode;
                pageMode: PageMode;
                permissions: Permissions;
                print_duplex: PrintDuplex;
                printDuplex: PrintDuplex;
                print_n_copies: number;
                printNCopies: number;
                print_scaling: PrintScaling;
                printScaling: PrintScaling;
                producer: string;
                subject: string;
                subtype: PDFSubtype;
                subtype_conformance: PDFConformance;
                subtypeConformance: PDFConformance;
                subtype_part: PDFPart;
                subtypePart: PDFPart;
                subtype_string: string;
                subtypeString: string;
                title: string;
                viewer_preferences: ViewerPreferences;
                viewerPreferences: ViewerPreferences;
            }
        }

        class Document extends GObject.Object {
            static $gtype: GObject.GType<Document>;

            // Properties

            /**
             * The author of the document
             */
            get author(): string;
            set author(val: string);
            /**
             * The date the document was created as seconds since the Epoch, or -1
             */
            get creation_date(): number;
            set creation_date(val: number);
            /**
             * The date the document was created as seconds since the Epoch, or -1
             */
            get creationDate(): number;
            set creationDate(val: number);
            /**
             * The #GDateTime the document was created.
             */
            get creation_datetime(): GLib.DateTime;
            set creation_datetime(val: GLib.DateTime);
            /**
             * The #GDateTime the document was created.
             */
            get creationDatetime(): GLib.DateTime;
            set creationDatetime(val: GLib.DateTime);
            /**
             * The creator of the document. See also poppler_document_get_creator()
             */
            get creator(): string;
            set creator(val: string);
            /**
             * The PDF version as string. See also poppler_document_get_pdf_version_string()
             */
            get format(): string;
            /**
             * The PDF major version number. See also poppler_document_get_pdf_version()
             */
            get format_major(): number;
            /**
             * The PDF major version number. See also poppler_document_get_pdf_version()
             */
            get formatMajor(): number;
            /**
             * The PDF minor version number. See also poppler_document_get_pdf_version()
             */
            get format_minor(): number;
            /**
             * The PDF minor version number. See also poppler_document_get_pdf_version()
             */
            get formatMinor(): number;
            /**
             * The keywords associated to the document
             */
            get keywords(): string;
            set keywords(val: string);
            /**
             * Whether document is linearized. See also poppler_document_is_linearized()
             */
            get linearized(): boolean;
            /**
             * Document metadata in XML format, or %NULL
             */
            get metadata(): string;
            /**
             * The date the document was most recently modified as seconds since the Epoch, or -1
             */
            get mod_date(): number;
            set mod_date(val: number);
            /**
             * The date the document was most recently modified as seconds since the Epoch, or -1
             */
            get modDate(): number;
            set modDate(val: number);
            /**
             * The #GDateTime the document was most recently modified.
             */
            get mod_datetime(): GLib.DateTime;
            set mod_datetime(val: GLib.DateTime);
            /**
             * The #GDateTime the document was most recently modified.
             */
            get modDatetime(): GLib.DateTime;
            set modDatetime(val: GLib.DateTime);
            /**
             * The page layout that should be used when the document is opened
             */
            get page_layout(): PageLayout;
            /**
             * The page layout that should be used when the document is opened
             */
            get pageLayout(): PageLayout;
            /**
             * The mode that should be used when the document is opened
             */
            get page_mode(): PageMode;
            /**
             * The mode that should be used when the document is opened
             */
            get pageMode(): PageMode;
            /**
             * Flags specifying which operations are permitted when the document is opened
             */
            get permissions(): Permissions;
            get print_duplex(): PrintDuplex;
            get printDuplex(): PrintDuplex;
            /**
             * Suggested number of copies to be printed for this document
             */
            get print_n_copies(): number;
            /**
             * Suggested number of copies to be printed for this document
             */
            get printNCopies(): number;
            get print_scaling(): PrintScaling;
            get printScaling(): PrintScaling;
            /**
             * The producer of the document. See also poppler_document_get_producer()
             */
            get producer(): string;
            set producer(val: string);
            /**
             * The subject of the document
             */
            get subject(): string;
            set subject(val: string);
            /**
             * Document PDF subtype type
             */
            get subtype(): PDFSubtype;
            /**
             * Document PDF subtype conformance
             */
            get subtype_conformance(): PDFConformance;
            /**
             * Document PDF subtype conformance
             */
            get subtypeConformance(): PDFConformance;
            /**
             * Document PDF subtype part
             */
            get subtype_part(): PDFPart;
            /**
             * Document PDF subtype part
             */
            get subtypePart(): PDFPart;
            /**
             * Document PDF subtype. See also poppler_document_get_pdf_subtype_string()
             */
            get subtype_string(): string;
            /**
             * Document PDF subtype. See also poppler_document_get_pdf_subtype_string()
             */
            get subtypeString(): string;
            /**
             * The document's title or %NULL
             */
            get title(): string;
            set title(val: string);
            get viewer_preferences(): ViewerPreferences;
            get viewerPreferences(): ViewerPreferences;

            // Constructors

            constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_from_bytes(bytes: GLib.Bytes | Uint8Array, password?: string | null): Document;

            static new_from_data(data: Uint8Array | string, password?: string | null): Document;

            static new_from_fd(fd: number, password?: string | null): Document;

            static new_from_file(uri: string, password?: string | null): Document;

            static new_from_gfile(
                file: Gio.File,
                password?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Document;

            static new_from_stream(
                stream: Gio.InputStream,
                length: number,
                password?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Document;

            // Methods

            /**
             * Creates a balanced binary tree of all named destinations in `document`
             *
             * The tree key is strings in the form returned by
             * poppler_named_dest_to_bytestring() which constains a destination name.
             * The tree value is the #PopplerDest which contains a named destination.
             * The return value must be freed with g_tree_destroy().
             * @returns the #GTree, or %NULL
             */
            create_dests_tree(): GLib.Tree | null;
            /**
             * Creates a #PopplerDest for the named destination `link_name` in `document`.
             *
             * Note that named destinations are bytestrings, not string. That means that
             * unless `link_name` was returned by a poppler function (e.g. is
             * #PopplerDest.named_dest), it needs to be converted to string
             * using poppler_named_dest_from_bytestring() before being passed to this
             * function.
             *
             * The returned value must be freed with poppler_dest_free().
             * @param link_name a named destination
             * @returns a new #PopplerDest destination, or %NULL if   @link_name is not a destination.
             */
            find_dest(link_name: string): Dest;
            /**
             * Returns a #GList containing #PopplerAttachment<!-- -->s.  These attachments
             * are unowned, and must be unreffed, and the list must be freed with
             * g_list_free().
             * @returns a list of available attachments.
             */
            get_attachments(): Attachment[];
            /**
             * Returns the author of the document
             * @returns a new allocated string containing the author               of @document, or %NULL
             */
            get_author(): string;
            /**
             * Returns the date the document was created as seconds since the Epoch
             * @returns the date the document was created, or -1
             */
            get_creation_date(): never;
            /**
             * Returns the date the document was created as a #GDateTime
             * @returns the date the document was created, or %NULL
             */
            get_creation_date_time(): GLib.DateTime | null;
            /**
             * Returns the creator of the document. If the document was converted
             * from another format, the creator is the name of the product
             * that created the original document from which it was converted.
             * @returns a new allocated string containing the creator               of @document, or %NULL
             */
            get_creator(): string;
            /**
             * Returns the #PopplerFormField for the given `id`. It must be freed with
             * g_object_unref()
             * @param id an id of a #PopplerFormField
             * @returns a new #PopplerFormField or %NULL if not found
             */
            get_form_field(id: number): FormField;
            /**
             * Returns the PDF file identifier represented as two byte string arrays of size 32.
             * `permanent_id` is the permanent identifier that is built based on the file
             * contents at the time it was originally created, so that this identifer
             * never changes. `update_id` is the update identifier that is built based on
             * the file contents at the time it was last updated.
             *
             * Note that returned strings are not null-terminated, they have a fixed
             * size of 32 bytes.
             * @returns %TRUE if the @document contains an id, %FALSE otherwise
             */
            get_id(): [boolean, string, string];
            /**
             * Returns the keywords associated to the document
             * @returns a new allocated string containing keywords associated               to @document, or %NULL
             */
            get_keywords(): string;
            /**
             * Returns the XML metadata string of the document
             * @returns a new allocated string containing the XML               metadata, or %NULL
             */
            get_metadata(): string;
            /**
             * Returns the date the document was most recently modified as seconds since the Epoch
             * @returns the date the document was most recently modified, or -1
             */
            get_modification_date(): never;
            /**
             * Returns the date the document was most recently modified as a #GDateTime
             * @returns the date the document was modified, or %NULL
             */
            get_modification_date_time(): GLib.DateTime | null;
            /**
             * Returns the number of attachments in a loaded document.
             * See also poppler_document_get_attachments()
             * @returns Number of attachments
             */
            get_n_attachments(): number;
            /**
             * Returns the number of pages in a loaded document.
             * @returns Number of pages
             */
            get_n_pages(): number;
            /**
             * Returns how many digital signatures `document` contains.
             * PDF digital signatures ensure that the content hash not been altered since last edit and
             * that it was produced by someone the user can trust
             * @returns The number of signatures found in the document
             */
            get_n_signatures(): number;
            /**
             * Returns the #PopplerPage indexed at `index`.  This object is owned by the
             * caller.
             * @param index a page index
             * @returns The #PopplerPage at @index
             */
            get_page(index: number): Page;
            /**
             * Returns the #PopplerPage reference by `label`.  This object is owned by the
             * caller.  `label` is a human-readable string representation of the page number,
             * and can be document specific.  Typically, it is a value such as "iii" or "3".
             *
             * By default, "1" refers to the first page.
             * @param label a page label
             * @returns The #PopplerPage referenced by @label
             */
            get_page_by_label(label: string): Page;
            /**
             * Returns the page layout that should be used when the document is opened
             * @returns a #PopplerPageLayout that should be used when the document is opened
             */
            get_page_layout(): PageLayout;
            /**
             * Returns a #PopplerPageMode representing how the document should
             * be initially displayed when opened.
             * @returns a #PopplerPageMode that should be used when document is opened
             */
            get_page_mode(): PageMode;
            /**
             * Returns the conformance level of the `document` as #PopplerPDFConformance.
             * @returns the document's subtype conformance level
             */
            get_pdf_conformance(): PDFConformance;
            /**
             * Returns the part of the conforming standard that the `document` adheres to
             * as a #PopplerPDFSubtype.
             * @returns the document's subtype part
             */
            get_pdf_part(): PDFPart;
            /**
             * Returns the subtype of `document` as a #PopplerPDFSubtype.
             * @returns the document's subtype
             */
            get_pdf_subtype(): PDFSubtype;
            /**
             * Returns the PDF subtype version of `document` as a string.
             * @returns a newly allocated string containing the PDF subtype version of @document, or %NULL
             */
            get_pdf_subtype_string(): string | null;
            /**
             * Updates values referenced by `major_version` & `minor_version` with the
             * major and minor PDF versions of `document`.
             */
            get_pdf_version(): [number, number];
            /**
             * Returns the PDF version of `document` as a string (e.g. PDF-1.6)
             * @returns a new allocated string containing the PDF version               of @document, or %NULL
             */
            get_pdf_version_string(): string;
            /**
             * Returns the flags specifying which operations are permitted when the document is opened.
             * @returns a set of flags from  #PopplerPermissions enumeration
             */
            get_permissions(): Permissions;
            /**
             * Returns the duplex mode value suggested for printing by author of the document.
             * Value POPPLER_PRINT_DUPLEX_NONE means that the document does not specify this
             * preference.
             * @returns a #PopplerPrintDuplex that should be used when document is printed
             */
            get_print_duplex(): PrintDuplex;
            /**
             * Returns the suggested number of copies to be printed.
             * This preference should be applied only if returned value
             * is greater than 1 since value 1 usually means that
             * the document does not specify it.
             * @returns Number of copies
             */
            get_print_n_copies(): number;
            /**
             * Returns the suggested page ranges to print in the form of array
             * of #PopplerPageRange<!-- -->s and number of ranges.
             * %NULL pointer means that the document does not specify page ranges
             * for printing.
             * @returns an array          of #PopplerPageRange<!-- -->s or %NULL. Free the array when          it is no longer needed.
             */
            get_print_page_ranges(): PageRange[];
            /**
             * Returns the print scaling value suggested by author of the document.
             * @returns a #PopplerPrintScaling that should be used when document is printed
             */
            get_print_scaling(): PrintScaling;
            /**
             * Returns the producer of the document. If the document was converted
             * from another format, the producer is the name of the product
             * that converted it to PDF
             * @returns a new allocated string containing the producer               of @document, or %NULL
             */
            get_producer(): string;
            /**
             * Returns a #GList containing all signature #PopplerFormField<!-- -->s in the document.
             * @returns a list of all signature form fields.
             */
            get_signature_fields(): FormField[];
            /**
             * Returns the subject of the document
             * @returns a new allocated string containing the subject               of @document, or %NULL
             */
            get_subject(): string;
            /**
             * Returns the document's title
             * @returns a new allocated string containing the title               of @document, or %NULL
             */
            get_title(): string;
            /**
             * Returns %TRUE of `document` has any attachments.
             * @returns %TRUE, if @document has attachments.
             */
            has_attachments(): boolean;
            /**
             * Returns whether `document` has any javascript in it.
             */
            has_javascript(): boolean;
            /**
             * Returns whether `document` is linearized or not. Linearization of PDF
             * enables efficient incremental access of the PDF file in a network environment.
             * @returns %TRUE if @document is linearized, %FALSE otherwise
             */
            is_linearized(): boolean;
            /**
             * Resets the form fields specified by fields if exclude_fields is FALSE.
             * Resets all others if exclude_fields is TRUE.
             * All form fields are reset regardless of the exclude_fields flag
             * if fields is empty.
             * @param fields list of fields to reset
             * @param exclude_fields whether to reset all fields except those in @fields
             */
            reset_form(fields: string[] | null, exclude_fields: boolean): void;
            /**
             * Saves `document`. Any change made in the document such as
             * form fields filled, annotations added or modified
             * will be saved.
             * If `error` is set, %FALSE will be returned. Possible errors
             * include those in the #G_FILE_ERROR domain.
             * @param uri uri of file to save
             * @returns %TRUE, if the document was successfully saved
             */
            save(uri: string): boolean;
            /**
             * Saves a copy of the original `document`.
             * Any change made in the document such as
             * form fields filled by the user will not be saved.
             * If `error` is set, %FALSE will be returned. Possible errors
             * include those in the #G_FILE_ERROR domain.
             * @param uri uri of file to save
             * @returns %TRUE, if the document was successfully saved
             */
            save_a_copy(uri: string): boolean;
            /**
             * Saves `document`. Any change made in the document such as
             * form fields filled, annotations added or modified
             * will be saved if `include_changes` is %TRUE, or discarded i
             * `include_changes` is %FALSE.
             *
             * Note that this function takes ownership of `fd;` you must not operate on it
             * again, nor close it.
             *
             * If `error` is set, %FALSE will be returned. Possible errors
             * include those in the #G_FILE_ERROR domain.
             * @param fd a valid file descriptor open for writing
             * @param include_changes whether to include user changes (e.g. form fills)
             * @returns %TRUE, if the document was successfully saved
             */
            save_to_fd(fd: number, include_changes: boolean): boolean;
            /**
             * Sets the document's author. If `author` is %NULL, Author
             * entry is removed from the document's Info dictionary.
             * @param author A new author
             */
            set_author(author: string): void;
            /**
             * Sets the document's creation date. If `creation_date` is -1, CreationDate
             * entry is removed from the document's Info dictionary.
             * @param creation_date A new creation date
             */
            set_creation_date(creation_date: never): void;
            /**
             * Sets the document's creation date. If `creation_datetime` is %NULL,
             * CreationDate entry is removed from the document's Info dictionary.
             * @param creation_datetime A new creation #GDateTime
             */
            set_creation_date_time(creation_datetime?: GLib.DateTime | null): void;
            /**
             * Sets the document's creator. If `creator` is %NULL, Creator
             * entry is removed from the document's Info dictionary.
             * @param creator A new creator
             */
            set_creator(creator: string): void;
            /**
             * Sets the document's keywords. If `keywords` is %NULL,
             * Keywords entry is removed from the document's Info dictionary.
             * @param keywords New keywords
             */
            set_keywords(keywords: string): void;
            /**
             * Sets the document's modification date. If `modification_date` is -1, ModDate
             * entry is removed from the document's Info dictionary.
             * @param modification_date A new modification date
             */
            set_modification_date(modification_date: never): void;
            /**
             * Sets the document's modification date. If `modification_datetime` is %NULL,
             * ModDate entry is removed from the document's Info dictionary.
             * @param modification_datetime A new modification #GDateTime
             */
            set_modification_date_time(modification_datetime?: GLib.DateTime | null): void;
            /**
             * Sets the document's producer. If `producer` is %NULL,
             * Producer entry is removed from the document's Info dictionary.
             * @param producer A new producer
             */
            set_producer(producer: string): void;
            /**
             * Sets the document's subject. If `subject` is %NULL, Subject
             * entry is removed from the document's Info dictionary.
             * @param subject A new subject
             */
            set_subject(subject: string): void;
            /**
             * Sets the document's title. If `title` is %NULL, Title entry
             * is removed from the document's Info dictionary.
             * @param title A new title
             */
            set_title(title: string): void;
            /**
             * Sign #document using #signing_data.
             * @param signing_data a #PopplerSigningData
             * @param cancellable a #GCancellable
             */
            sign(signing_data: SigningData, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Sign #document using #signing_data.
             * @param signing_data a #PopplerSigningData
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback
             */
            sign(
                signing_data: SigningData,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Sign #document using #signing_data.
             * @param signing_data a #PopplerSigningData
             * @param cancellable a #GCancellable
             * @param callback a #GAsyncReadyCallback
             */
            sign(
                signing_data: SigningData,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finish poppler_sign_document and get return status or error.
             * @param result a #GAsyncResult
             * @returns %TRUE on successful signing a document, otherwise %FALSE and error is set.
             */
            sign_finish(result: Gio.AsyncResult): boolean;
        }

        module FontInfo {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Interface for getting the Fonts of a poppler_document
         *
         * Since 24.10 this type supports g_autoptr
         */
        class FontInfo extends GObject.Object {
            static $gtype: GObject.GType<FontInfo>;

            // Constructors

            constructor(properties?: Partial<FontInfo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: Document): FontInfo;

            // Methods

            free(): void;
            /**
             * Scans the document associated with `font_info` for fonts. At most
             * `n_pages` will be scanned starting from the current iterator. `iter` will
             * point to the first font scanned.
             *
             * Here is a simple example of code to scan fonts in a document
             *
             * <informalexample><programlisting>
             * font_info = poppler_font_info_new (document);
             * scanned_pages = 0;
             * while (scanned_pages <= poppler_document_get_n_pages(document)) {
             *         poppler_font_info_scan (font_info, 20, &fonts_iter);
             *         scanned_pages += 20;
             *         if (!fonts_iter)
             *                 continue; /<!-- -->* No fonts found in these 20 pages *<!-- -->/
             *         do {
             *                 /<!-- -->* Do something with font iter *<!-- -->/
             *                 g_print ("Font Name: %s\n", poppler_fonts_iter_get_name (fonts_iter));
             *         } while (poppler_fonts_iter_next (fonts_iter));
             *         poppler_fonts_iter_free (fonts_iter);
             * }
             * </programlisting></informalexample>
             * @param n_pages number of pages to scan
             * @returns %TRUE, if fonts were found
             */
            scan(n_pages: number): [boolean, FontsIter];
        }

        module FormField {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class FormField extends GObject.Object {
            static $gtype: GObject.GType<FormField>;

            // Constructors

            constructor(properties?: Partial<FormField.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Gets the button type of `field`
             * @returns #PopplerFormButtonType of @field
             */
            button_get_button_type(): FormButtonType;
            /**
             * Queries a #PopplerFormField and returns its current state. Returns %TRUE if
             * `field` is pressed in and %FALSE if it is raised.
             * @returns current state of @field
             */
            button_get_state(): boolean;
            /**
             * Sets the status of `field`. Set to %TRUE if you want the #PopplerFormField
             * to be 'pressed in', and %FALSE to raise it.
             * @param state %TRUE or %FALSE
             */
            button_set_state(state: boolean): void;
            /**
             * Checks whether `field` allows multiple choices to be selected
             * @returns %TRUE if @field allows multiple choices to be selected
             */
            choice_can_select_multiple(): boolean;
            choice_commit_on_change(): boolean;
            /**
             * Checks whether spell checking should be done for the contents of `field`
             * @returns %TRUE if spell checking should be done for @field
             */
            choice_do_spell_check(): boolean;
            /**
             * Gets the choice type of `field`
             * @returns #PopplerFormChoiceType of @field
             */
            choice_get_choice_type(): FormChoiceType;
            /**
             * Returns the contents of the item on `field` at the given index
             * @param index the index of the item
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            choice_get_item(index: number): string;
            /**
             * Returns the number of items on `field`
             * @returns the number of items on @field
             */
            choice_get_n_items(): number;
            /**
             * Retrieves the contents of `field`.
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            choice_get_text(): string;
            /**
             * Checks whether `field` is editable
             * @returns %TRUE if @field is editable
             */
            choice_is_editable(): boolean;
            /**
             * Checks whether the item at the given index on `field` is currently selected
             * @param index the index of the item
             * @returns %TRUE if item at @index is currently selected
             */
            choice_is_item_selected(index: number): boolean;
            /**
             * Selects the item at the given index on `field`
             * @param index the index of the item
             */
            choice_select_item(index: number): void;
            /**
             * Sets the text in `field` to the given value, replacing the current contents
             * @param text the new text
             */
            choice_set_text(text: string): void;
            /**
             * Changes the state of the item at the given index
             * @param index the index of the item
             */
            choice_toggle_item(index: number): void;
            /**
             * Unselects all the items on `field`
             */
            choice_unselect_all(): void;
            /**
             * Retrieves the action (#PopplerAction) that shall be
             * performed when `field` is activated, or %NULL
             * @returns the action to perform. The returned               object is owned by @field and should not be freed
             */
            get_action(): Action;
            /**
             * Retrieves the action (#PopplerAction) that shall be performed when
             * an additional action is triggered on `field,` or %NULL.
             * @param type the type of additional action
             * @returns the action to perform. The returned               object is owned by @field and should not be freed.
             */
            get_additional_action(type: AdditionalActionType | null): Action;
            /**
             * Gets the alternate ui name of `field`. This name is also commonly
             * used by pdf producers/readers to show it as a tooltip when `field` area
             * is hovered by a pointing device (eg. mouse).
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            get_alternate_ui_name(): string;
            /**
             * Gets the type of `field`
             * @returns #PopplerFormFieldType of @field
             */
            get_field_type(): FormFieldType;
            /**
             * Gets the font size of `field`
             *
             * WARNING: This function always returns 0. Contact the poppler
             * mailing list if you're interested in implementing it properly
             * @returns the font size of @field
             */
            get_font_size(): number;
            /**
             * Gets the id of `field`
             * @returns the id of @field
             */
            get_id(): number;
            /**
             * Gets the mapping name of `field` that is used when
             * exporting interactive form field data from the document
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            get_mapping_name(): string;
            /**
             * Gets the fully qualified name of `field`. It's constructed by concatenating
             * the partial field names of the field and all of its ancestors.
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            get_name(): string;
            /**
             * Gets the partial name of `field`.
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            get_partial_name(): string;
            /**
             * Checks whether `field` is read only
             * @returns %TRUE if @field is read only
             */
            is_read_only(): boolean;
            /**
             * Asynchronously validates the cryptographic signature contained in `signature_field`.
             * @param flags #PopplerSignatureValidationFlags flags influencing process of validation of the field signature
             * @param cancellable optional #GCancellable object
             */
            signature_validate_async(
                flags: SignatureValidationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<SignatureInfo>;
            /**
             * Asynchronously validates the cryptographic signature contained in `signature_field`.
             * @param flags #PopplerSignatureValidationFlags flags influencing process of validation of the field signature
             * @param cancellable optional #GCancellable object
             * @param callback a #GAsyncReadyCallback to call when the signature is validated
             */
            signature_validate_async(
                flags: SignatureValidationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously validates the cryptographic signature contained in `signature_field`.
             * @param flags #PopplerSignatureValidationFlags flags influencing process of validation of the field signature
             * @param cancellable optional #GCancellable object
             * @param callback a #GAsyncReadyCallback to call when the signature is validated
             */
            signature_validate_async(
                flags: SignatureValidationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<SignatureInfo> | void;
            /**
             * Finishes validation of the cryptographic signature contained in `signature_field`.
             * See poppler_form_field_signature_validate_async().
             * @param result a #GAsyncResult
             * @returns a #PopplerSignatureInfo structure containing signature metadata and validation status                                Free the returned structure with poppler_signature_info_free().
             */
            signature_validate_finish(result: Gio.AsyncResult): SignatureInfo;
            /**
             * Synchronously validates the cryptographic signature contained in `signature_field`.
             * @param flags #PopplerSignatureValidationFlags flags influencing process of validation of the field signature
             * @param cancellable optional #GCancellable object
             * @returns a #PopplerSignatureInfo structure containing signature metadata and validation status                                Free the returned structure with poppler_signature_info_free().
             */
            signature_validate_sync(
                flags: SignatureValidationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): SignatureInfo;
            text_do_scroll(): boolean;
            /**
             * Checks whether spell checking should be done for the contents of `field`
             * @returns %TRUE if spell checking should be done for @field
             */
            text_do_spell_check(): boolean;
            /**
             * Retrieves the maximum allowed length of the text in `field`
             * @returns the maximum allowed number of characters in @field, or -1 if there is no maximum.
             */
            text_get_max_len(): number;
            /**
             * Retrieves the contents of `field`.
             * @returns a new allocated string. It must be freed with g_free() when done.
             */
            text_get_text(): string;
            /**
             * Gets the text type of `field`.
             * @returns #PopplerFormTextType of @field
             */
            text_get_text_type(): FormTextType;
            /**
             * Checks whether content of `field` is a password and it must be hidden
             * @returns %TRUE if the content of @field is a password
             */
            text_is_password(): boolean;
            /**
             * Checks whether the contents of `field` are rich text
             * @returns %TRUE if the contents of @field are rich text
             */
            text_is_rich_text(): boolean;
            /**
             * Sets the text in `field` to the given value, replacing the current contents.
             * @param text the new text
             */
            text_set_text(text: string): void;
        }

        module Layer {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Layer extends GObject.Object {
            static $gtype: GObject.GType<Layer>;

            // Constructors

            constructor(properties?: Partial<Layer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the numeric ID the radio button group associated with `layer`.
             * @returns the ID of the radio button group associated with @layer, or 0 if the layer is not associated to any radio button group
             */
            get_radio_button_group_id(): number;
            /**
             * Returns the name of the layer suitable for
             * presentation as a title in a viewer's GUI
             * @returns a string containing the title of the layer
             */
            get_title(): string;
            /**
             * Hides `layer`. If `layer` is the parent of other nested layers,
             * such layers will be also hidden and will be blocked until `layer`
             * is shown again
             */
            hide(): void;
            /**
             * Returns whether `layer` is parent of other nested layers.
             * @returns %TRUE if @layer is a parent layer
             */
            is_parent(): boolean;
            /**
             * Returns whether `layer` is visible
             * @returns %TRUE if @layer is visible
             */
            is_visible(): boolean;
            /**
             * Shows `layer`
             */
            show(): void;
        }

        module Media {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Media extends GObject.Object {
            static $gtype: GObject.GType<Media>;

            // Constructors

            constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the auto-play parameter.
             * @returns %TRUE if media should auto-play, %FALSE otherwise
             */
            get_auto_play(): boolean;
            /**
             * Returns the media clip filename, in case of non-embedded media. filename might be
             * a local relative or absolute path or a URI
             * @returns a filename, return value is owned by #PopplerMedia and should not be freed
             */
            get_filename(): string;
            /**
             * Returns the media clip mime-type
             * @returns the mime-type, return value is owned by #PopplerMedia and should not be freed
             */
            get_mime_type(): string;
            /**
             * Returns the repeat count parameter.
             * @returns Repeat count parameter (float)
             */
            get_repeat_count(): number;
            /**
             * Returns the show controls parameter.
             * @returns %TRUE if media should show controls, %FALSE otherwise
             */
            get_show_controls(): boolean;
            /**
             * Whether the media clip is embedded in the PDF. If the result is %TRUE, the embedded stream
             * can be saved with poppler_media_save() or poppler_media_save_to_callback() function.
             * If the result is %FALSE, the media clip filename can be retrieved with
             * poppler_media_get_filename() function.
             * @returns %TRUE if media clip is embedded, %FALSE otherwise
             */
            is_embedded(): boolean;
            /**
             * Saves embedded stream of `poppler_media` to a file indicated by `filename`.
             * If `error` is set, %FALSE will be returned.
             * Possible errors include those in the #G_FILE_ERROR domain
             * and whatever the save function generates.
             * @param filename name of file to save
             * @returns %TRUE, if the file successfully saved
             */
            save(filename: string): boolean;
            /**
             * Saves embedded stream of `poppler_media` by feeding the produced data to `save_func`. Can be used
             * when you want to store the media clip stream to something other than a file, such as
             * an in-memory buffer or a socket. If `error` is set, %FALSE will be
             * returned. Possible errors include those in the #G_FILE_ERROR domain and
             * whatever the save function generates.
             * @param save_func a function that is called to save each block of data that the save routine generates.
             * @returns %TRUE, if the save successfully completed
             */
            save_to_callback(save_func: MediaSaveFunc): boolean;
            /**
             * Saves embedded stream of `poppler_media` to a file referred to by `fd`.
             * If `error` is set, %FALSE will be returned.
             * Possible errors include those in the #G_FILE_ERROR domain
             * and whatever the save function generates.
             * Note that this function takes ownership of `fd;` you must not operate on it
             * again, nor close it.
             * @param fd a valid file descriptor open for writing
             * @returns %TRUE, if the file successfully saved
             */
            save_to_fd(fd: number): boolean;
        }

        module Movie {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Movie extends GObject.Object {
            static $gtype: GObject.GType<Movie>;

            // Constructors

            constructor(properties?: Partial<Movie.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the dimensions of the movie's bounding box (in pixels).
             * The respective PDF movie dictionary entry is optional; if missing,
             * -1x-1 will be returned.
             * @param width width of the movie's bounding box
             * @param height height of the movie's bounding box
             */
            get_aspect(width: number, height: number): void;
            /**
             * Returns the duration of the movie playback
             * @returns the duration of the movie playback (in ns)
             */
            get_duration(): number;
            /**
             * Returns the local filename identifying a self-describing movie file
             * @returns a local filename, return value is owned by #PopplerMovie and               should not be freed
             */
            get_filename(): string;
            /**
             * Returns the play mode of `poppler_movie`.
             * @returns a #PopplerMoviePlayMode.
             */
            get_play_mode(): MoviePlayMode;
            /**
             * Returns the relative speed of the movie
             * @returns the relative speed of the movie (1 means no change)
             */
            get_rate(): number;
            /**
             * Returns the rotation angle
             * @returns the number of degrees the movie should be rotated (positive, multiples of 90: 0, 90, 180, 270)
             */
            get_rotation_angle(): number;
            /**
             * Returns the start position of the movie playback
             * @returns the start position of the movie playback (in ns)
             */
            get_start(): number;
            /**
             * Returns the playback audio volume
             * @returns volume setting for the movie (0.0 - 1.0)
             */
            get_volume(): number;
            /**
             * Returns whether the user must wait for the movie to be finished before
             * the PDF viewer accepts any interactive action
             * @returns %TRUE if yes, %FALSE otherwise
             */
            is_synchronous(): boolean;
            /**
             * Returns whether a poster image representing the Movie
             * shall be displayed. The poster image must be retrieved
             * from the movie file.
             * @returns %TRUE if move needs a poster image, %FALSE otherwise
             */
            need_poster(): boolean;
            /**
             * Returns whether to display a movie controller bar while playing the movie
             * @returns %TRUE if controller bar should be displayed, %FALSE otherwise
             */
            show_controls(): boolean;
        }

        module PSFile {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class PSFile extends GObject.Object {
            static $gtype: GObject.GType<PSFile>;

            // Constructors

            constructor(properties?: Partial<PSFile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: Document, filename: string, first_page: number, n_pages: number): PSFile;

            static new_fd(document: Document, fd: number, first_page: number, n_pages: number): PSFile;

            // Methods

            /**
             * Frees `ps_file`
             */
            free(): void;
            /**
             * Enable or disable Duplex printing.
             * @param duplex whether to force duplex printing (on printers which support this)
             */
            set_duplex(duplex: boolean): void;
            /**
             * Set the output paper size. These values will end up in the
             * DocumentMedia, the BoundingBox DSC comments and other places in the
             * generated PostScript.
             * @param width the paper width in 1/72 inch
             * @param height the paper height in 1/72 inch
             */
            set_paper_size(width: number, height: number): void;
        }

        module Page {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                label: string;
            }
        }

        class Page extends GObject.Object {
            static $gtype: GObject.GType<Page>;

            // Properties

            /**
             * The label of the page or %NULL. See also poppler_page_get_label()
             */
            get label(): string;

            // Constructors

            constructor(properties?: Partial<Page.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Frees a list of #PopplerAnnotMapping<!-- -->s allocated by
             * poppler_page_get_annot_mapping().  It also unreferences the #PopplerAnnot<!-- -->s
             * that each mapping contains, so if you want to keep them around, you need to
             * reference them with g_object_ref().
             * @param list A list of   #PopplerAnnotMapping<!-- -->s
             */
            static free_annot_mapping(list: AnnotMapping[]): void;
            /**
             * Frees a list of #PopplerFormFieldMapping<!-- -->s allocated by
             * poppler_page_get_form_field_mapping().
             * @param list A list of   #PopplerFormFieldMapping<!-- -->s
             */
            static free_form_field_mapping(list: FormFieldMapping[]): void;
            /**
             * Frees a list of #PopplerImageMapping<!-- -->s allocated by
             * poppler_page_get_image_mapping().
             * @param list A list of   #PopplerImageMapping<!-- -->s
             */
            static free_image_mapping(list: ImageMapping[]): void;
            /**
             * Frees a list of #PopplerLinkMapping<!-- -->s allocated by
             * poppler_page_get_link_mapping().  It also frees the #PopplerAction<!-- -->s
             * that each mapping contains, so if you want to keep them around, you need to
             * copy them with poppler_action_copy().
             * @param list A list of   #PopplerLinkMapping<!-- -->s
             */
            static free_link_mapping(list: LinkMapping[]): void;
            /**
             * Frees a list of #PopplerTextAttributes<!-- -->s allocated by
             * poppler_page_get_text_attributes().
             * @param list A list of   #PopplerTextAttributes<!-- -->s
             */
            static free_text_attributes(list: TextAttributes[]): void;
            /**
             * Frees `region`
             * @param region a #GList of   #PopplerRectangle
             */
            static selection_region_free(region: Rectangle[]): void;

            // Methods

            /**
             * Adds annotation `annot` to `page`.
             * @param annot a #PopplerAnnot to add
             */
            add_annot(annot: Annot): void;
            /**
             * Finds `text` in `page` with the default options (%POPPLER_FIND_DEFAULT) and
             * returns a #GList of rectangles for each occurrence of the text on the page.
             * The coordinates are in PDF points.
             * @param text the text to search for (UTF-8 encoded)
             * @returns a #GList of #PopplerRectangle,
             */
            find_text(text: string): Rectangle[];
            /**
             * Finds `text` in `page` with the given #PopplerFindFlags options and
             * returns a #GList of rectangles for each occurrence of the text on the page.
             * The coordinates are in PDF points.
             *
             * When %POPPLER_FIND_MULTILINE is passed in `options,` matches may span more than
             * one line. In this case, the returned list will contain one #PopplerRectangle
             * for each part of a match. The function poppler_rectangle_find_get_match_continued()
             * will return %TRUE for all rectangles belonging to the same match, except for
             * the last one. If a hyphen was ignored at the end of the part of the match,
             * poppler_rectangle_find_get_ignored_hyphen() will return %TRUE for that
             * rectangle.
             *
             * Note that currently matches spanning more than two lines are not found.
             * (This limitation may be lifted in a future version.)
             *
             * Note also that currently finding multi-line matches backwards is not
             * implemented; if you pass %POPPLER_FIND_BACKWARDS and %POPPLER_FIND_MULTILINE
             * together, %POPPLER_FIND_MULTILINE will be ignored.
             * @param text the text to search for (UTF-8 encoded)
             * @param options find options
             * @returns a newly allocated list of newly allocated #PopplerRectangle. Free with g_list_free_full() using poppler_rectangle_free().
             */
            find_text_with_options(text: string, options: FindFlags | null): Rectangle[];
            /**
             * Returns a list of #PopplerAnnotMapping items that map from a location on
             * `page` to a #PopplerAnnot.  This list must be freed with
             * poppler_page_free_annot_mapping() when done.
             * @returns A #GList of #PopplerAnnotMapping
             */
            get_annot_mapping(): AnnotMapping[];
            get_bounding_box(rect: Rectangle): boolean;
            /**
             * Retrurns the crop box of `page`
             */
            get_crop_box(): Rectangle;
            /**
             * Returns the duration of `page`
             * @returns duration in seconds of @page or -1.
             */
            get_duration(): number;
            /**
             * Returns a list of #PopplerFormFieldMapping items that map from a
             * location on `page` to a form field.  This list must be freed
             * with poppler_page_free_form_field_mapping() when done.
             * @returns A #GList of #PopplerFormFieldMapping
             */
            get_form_field_mapping(): FormFieldMapping[];
            /**
             * Returns a cairo surface for the image of the `page`
             * @param image_id The image identifier
             * @returns A cairo surface for the image
             */
            get_image(image_id: number): cairo.Surface;
            /**
             * Returns a list of #PopplerImageMapping items that map from a
             * location on `page` to an image of the page. This list must be freed
             * with poppler_page_free_image_mapping() when done.
             * @returns A #GList of #PopplerImageMapping
             */
            get_image_mapping(): ImageMapping[];
            /**
             * Returns the index of `page`
             * @returns index value of @page
             */
            get_index(): number;
            /**
             * Returns the label of `page`. Note that page labels
             * and page indices might not coincide.
             * @returns a new allocated string containing the label of @page,               or %NULL if @page doesn't have a label
             */
            get_label(): string;
            /**
             * Returns a list of #PopplerLinkMapping items that map from a
             * location on `page` to a #PopplerAction.  This list must be freed
             * with poppler_page_free_link_mapping() when done.
             * @returns A #GList of #PopplerLinkMapping
             */
            get_link_mapping(): LinkMapping[];
            /**
             * Returns a region containing the area that would be rendered by
             * poppler_page_render_selection().
             * The returned region must be freed with cairo_region_destroy()
             * @param scale scale specified as pixels per point
             * @param style a #PopplerSelectionStyle
             * @param selection start and end point of selection as a rectangle
             * @returns a cairo_region_t
             */
            get_selected_region(scale: number, style: SelectionStyle | null, selection: Rectangle): cairo.Region;
            /**
             * Retrieves the contents of the specified `selection` as text.
             * @param style a #PopplerSelectionStyle
             * @param selection the #PopplerRectangle including the text
             * @returns a pointer to the contents of the @selection               as a string
             */
            get_selected_text(style: SelectionStyle | null, selection: Rectangle): string;
            /**
             * Returns a region containing the area that would be rendered by
             * poppler_page_render_selection() as a #GList of
             * #PopplerRectangle. The returned list must be freed with
             * poppler_page_selection_region_free().
             * @param scale scale specified as pixels per point
             * @param style a #PopplerSelectionStyle
             * @param selection start and end point of selection as a rectangle
             * @returns a #GList of #PopplerRectangle
             */
            get_selection_region(scale: number, style: SelectionStyle | null, selection: Rectangle): Rectangle[];
            /**
             * Gets the size of `page` at the current scale and rotation.
             */
            get_size(): [number, number];
            /**
             * Retrieves the text of `page`.
             * @returns a pointer to the text of the @page               as a string
             */
            get_text(): string;
            /**
             * Obtains the attributes of the text as a #GList of #PopplerTextAttributes.
             * This list must be freed with poppler_page_free_text_attributes() when done.
             *
             * Each list element is a #PopplerTextAttributes struct where start_index and
             * end_index indicates the range of text (as returned by poppler_page_get_text())
             * to which text attributes apply.
             *
             * See also poppler_page_get_text_attributes_for_area()
             * @returns A #GList of #PopplerTextAttributes
             */
            get_text_attributes(): TextAttributes[];
            /**
             * Obtains the attributes of the text in `area` as a #GList of #PopplerTextAttributes.
             * This list must be freed with poppler_page_free_text_attributes() when done.
             *
             * Each list element is a #PopplerTextAttributes struct where start_index and
             * end_index indicates the range of text (as returned by poppler_page_get_text_for_area())
             * to which text attributes apply.
             * @param area a #PopplerRectangle
             * @returns A #GList of #PopplerTextAttributes
             */
            get_text_attributes_for_area(area: Rectangle): TextAttributes[];
            /**
             * Retrieves the text of `page` contained in `area`.
             * @param area a #PopplerRectangle
             * @returns a pointer to the text as a string
             */
            get_text_for_area(area: Rectangle): string;
            /**
             * Obtains the layout of the text as a list of #PopplerRectangle
             * This array must be freed with g_free() when done.
             *
             * The position in the array represents an offset in the text returned by
             * poppler_page_get_text()
             *
             * See also poppler_page_get_text_layout_for_area().
             * @returns %TRUE if the page contains text, %FALSE otherwise
             */
            get_text_layout(): [boolean, Rectangle[]];
            /**
             * Obtains the layout of the text contained in `area` as a list of #PopplerRectangle
             * This array must be freed with g_free() when done.
             *
             * The position in the array represents an offset in the text returned by
             * poppler_page_get_text_for_area()
             * @param area a #PopplerRectangle
             * @returns %TRUE if the page contains text, %FALSE otherwise
             */
            get_text_layout_for_area(area: Rectangle): [boolean, Rectangle[]];
            /**
             * Get the embedded thumbnail for the specified page.  If the document
             * doesn't have an embedded thumbnail for the page, this function
             * returns %NULL.
             * @returns the tumbnail as a cairo_surface_t or %NULL if the document doesn't have a thumbnail for this page.
             */
            get_thumbnail(): cairo.Surface;
            /**
             * Returns %TRUE if `page` has a thumbnail associated with it.  It also
             * fills in `width` and `height` with the width and height of the
             * thumbnail.  The values of width and height are not changed if no
             * appropriate thumbnail exists.
             * @returns %TRUE, if @page has a thumbnail associated with it.
             */
            get_thumbnail_size(): [boolean, number, number];
            /**
             * Returns the transition effect of `page`
             * @returns a #PopplerPageTransition or %NULL.
             */
            get_transition(): PageTransition;
            /**
             * Removes annotation `annot` from `page`
             * @param annot a #PopplerAnnot to remove
             */
            remove_annot(annot: Annot): void;
            /**
             * Render the page to the given cairo context. This function
             * is for rendering a page that will be displayed. If you want
             * to render a page that will be printed use
             * poppler_page_render_for_printing() instead.  Please see the documentation
             * for that function for the differences between rendering to the screen and
             * rendering to a printer.
             * @param cairo cairo context to render to
             */
            render(cairo: cairo.Context): void;
            /**
             * Render the page to the given cairo context for printing with
             * #POPPLER_PRINT_ALL flags selected.  If you want a different set of flags,
             * use poppler_page_render_for_printing_with_options().
             *
             * The difference between poppler_page_render() and this function is that some
             * things get rendered differently between screens and printers:
             *
             * <itemizedlist>
             *   <listitem>
             *     PDF annotations get rendered according to their #PopplerAnnotFlag value.
             *     For example, #POPPLER_ANNOT_FLAG_PRINT refers to whether an annotation
             *     is printed or not, whereas #POPPLER_ANNOT_FLAG_NO_VIEW refers to whether
             *     an annotation is invisible when displaying to the screen.
             *   </listitem>
             *   <listitem>
             *     PDF supports "hairlines" of width 0.0, which often get rendered as
             *     having a width of 1 device pixel.  When displaying on a screen, Cairo
             *     may render such lines wide so that they are hard to see, and Poppler
             *     makes use of PDF's Stroke Adjust graphics parameter to make the lines
             *     easier to see.  However, when printing, Poppler is able to directly use a
             *     printer's pixel size instead.
             *   </listitem>
             *   <listitem>
             *     Some advanced features in PDF may require an image to be rasterized
             *     before sending off to a printer.  This may produce raster images which
             *     exceed Cairo's limits.  The "printing" functions will detect this condition
             *     and try to down-scale the intermediate surfaces as appropriate.
             *   </listitem>
             * </itemizedlist>
             * @param cairo cairo context to render to
             */
            render_for_printing(cairo: cairo.Context): void;
            /**
             * Render the page to the given cairo context for printing
             * with the specified options
             *
             * See the documentation for poppler_page_render_for_printing() for the
             * differences between rendering to the screen and rendering to a printer.
             * @param cairo cairo context to render to
             * @param options print options
             */
            render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags | null): void;
            /**
             * Render the selection specified by `selection` for `page` to
             * the given cairo context.  The selection will be rendered, using
             * `glyph_color` for the glyphs and `background_color` for the selection
             * background.
             *
             * If non-NULL, `old_selection` specifies the selection that is already
             * rendered to `cairo,` in which case this function will (some day)
             * only render the changed part of the selection.
             * @param cairo cairo context to render to
             * @param selection start and end point of selection as a rectangle
             * @param old_selection previous selection
             * @param style a #PopplerSelectionStyle
             * @param glyph_color color to use for drawing glyphs
             * @param background_color color to use for the selection background
             */
            render_selection(
                cairo: cairo.Context,
                selection: Rectangle,
                old_selection: Rectangle,
                style: SelectionStyle | null,
                glyph_color: Color,
                background_color: Color,
            ): void;
            /**
             * Render the page on a postscript file
             * @param ps_file the PopplerPSFile to render to
             */
            render_to_ps(ps_file: PSFile): void;
        }

        module StructureElement {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class StructureElement extends GObject.Object {
            static $gtype: GObject.GType<StructureElement>;

            // Constructors

            constructor(properties?: Partial<StructureElement.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Acronyms and abbreviations contained in elements of type
             * #POPPLER_STRUCTURE_ELEMENT_SPAN may have an associated expanded
             * text form, which can be retrieved using this function.
             * @returns Text of the expanded abbreviation if the    element text is an abbreviation or acrony, %NULL if not.
             */
            get_abbreviation(): string;
            /**
             * Obtains the actual text enclosed by the element (and its child elements).
             * The actual text is mostly used for non-text elements like images and
             * figures which <emphasis>do</emphasis> have the graphical appearance of text, like
             * a logo. For those the actual text is the equivalent text to those
             * graphical elements which look like text when rendered.
             *
             * Note that for elements containing proper text, the function
             * poppler_structure_element_get_text() must be used instead.
             * @returns The actual text for the element, or %NULL    if not defined.
             */
            get_actual_text(): string;
            /**
             * Obtains the “alternate” text representation of the element (and its child
             * elements). This is mostly used for non-text elements like images and
             * figures, to specify a textual description of the element.
             *
             * Note that for elements containing proper text, the function
             * poppler_structure_element_get_text() must be used instead.
             * @returns The alternate text representation for the    element, or %NULL if not defined.
             */
            get_alt_text(): string;
            /**
             * Obtains the background color of the element. If this attribute is
             * not specified, the element shall be treated as if it were transparent.
             * @returns %TRUE if a color is defined for the element,    %FALSE otherwise.
             */
            get_background_color(): [boolean, Color];
            /**
             * Obtains how much the text contained in the inline-level structure element should be shifted,
             * measuring from the baseline of the glyphs.
             * @returns A numeric value.
             */
            get_baseline_shift(): number;
            /**
             * Obtains the block-alignment mode of the block-level structure element.
             * @returns A #PopplerStructureBlockAlign value.
             */
            get_block_align(): StructureBlockAlign;
            /**
             * Obtains the color of border around the element. The result values
             * are in before-after-start-end ordering (for the typical Western
             * left-to-right writing, that is top-bottom-left-right).
             * If this attribute is not specified, the border color for this element shall
             * be the current text fill color in effect at the start of its associated
             * content.
             * @returns %TRUE if a color is defined for the element,    %FALSE otherwise.
             */
            get_border_color(): [boolean, Color[]];
            /**
             * Obtains the border style of a structure element. The result values
             * are in before-after-start-end ordering. For example, using Western
             * left-to-right writing, that is top-bottom-left-right.
             */
            get_border_style(): StructureBorderStyle[];
            /**
             * Obtains the thickness of the border of an element. The result values
             * are in before-after-start-end ordering (for the typical Western
             * left-to-right writing, that is top-bottom-left-right).
             * A value of 0 indicates that the border shall not be drawn.
             * @returns %TRUE if the border thickness attribute is defined for    the element, %FALSE otherwise.
             */
            get_border_thickness(): [boolean, number[]];
            /**
             * Obtains the size of the bounding box of a block-level structure element.
             * @returns %TRUE if a bounding box is defined for the element,    %FALSE otherwise.
             */
            get_bounding_box(): [boolean, Rectangle];
            /**
             * Obtains the color of the content contained in the element.
             * If this attribute is not specified, the color for this element shall
             * be the current text fill color in effect at the start of its associated content.
             * @returns %TRUE if a color is defined for the element,    %FALSE otherwise.
             */
            get_color(): [boolean, Color];
            /**
             * Obtains the number of columns used to lay out the content contained
             * in the grouping element.
             * @returns Number of columns.
             */
            get_column_count(): number;
            /**
             * Obtains the size of the gaps in between adjacent columns. Returns an
             * array of elements: the first one is the size of the gap in between
             * columns 1 and 2, second is the size between columns 2 and 3, and so on.
             *
             * For elements which use a single column, %NULL is returned and `n_values`
             * is set to zero.
             *
             * If the attribute is undefined, %NULL is returned and `n_values` is set
             * to a non-zero value.
             *
             * The array with the results is allocated by the function. When it is
             * not needed anymore, be sure to call g_free() on it.
             * @returns Array containing the values for the column gaps, or %NULL if the    array is empty or the attribute is not defined.
             */
            get_column_gaps(): number[];
            /**
             * Obtains an array with the widths of the columns.
             *
             * The array with the results is allocated by the function. When it is
             * not needed anymore, be sure to call g_free() on it.
             * @returns Array containing widths of the columns, or %NULL if the attribute    is not defined.
             */
            get_column_widths(): number[];
            /**
             * Obtains the amount of indentation at the end of the block-level structure element.
             * @returns A numeric value.
             */
            get_end_indent(): number;
            /**
             * Obtains the textual description of the form element. Note that the
             * description is for informative purposes, and it is not intended
             * to be rendered. For example, assistive technologies may use the
             * description field to provide an alternate way of presenting an
             * element to the user.
             *
             * The returned string is allocated by the function. When it is
             * not needed anymore, be sure to call g_free() on it.
             * @returns A string, or %NULL if the attribute    is not defined.
             */
            get_form_description(): string;
            /**
             * Obtains the role of a form structure element that is part of a form, or is
             * a form field. This hints how the control for the element is intended
             * to be rendered.
             * @returns A #PopplerStructureFormRole value.
             */
            get_form_role(): StructureFormRole;
            /**
             * For a structure element that is a form field, obtains in which state
             * the associated control is expected to be rendered.
             * @returns A #PopplerStructureFormState value.
             */
            get_form_state(): StructureFormState;
            /**
             * Obtains the glyph orientation for the text contained in a
             * inline-level structure element.
             * @returns A #PopplerStructureGlyphOrientation value.
             */
            get_glyph_orientation(): StructureGlyphOrientation;
            /**
             * Obtains the height of the block-level structure element. Note that for elements which do
             * not specify a height, it has to be calculated, and in this case -1 is returned.
             * @returns A positive value if a width is defined, or -1    if the height is to be calculated automatically.
             */
            get_height(): number;
            /**
             * Obtains the identifier of an element.
             * @returns The identifier of the element (if    defined), or %NULL.
             */
            get_id(): string;
            /**
             * Obtains the inline-alignment mode of the block-level structure element.
             * @returns A #PopplerStructureInlineAlign value.
             */
            get_inline_align(): StructureInlineAlign;
            get_kind(): StructureElementKind;
            /**
             * Obtains the language and country code for the content in an element,
             * in two-letter ISO format, e.g. <code>en_ES</code>, or %NULL if not
             * defined.
             * @returns language and country code, or %NULL.
             */
            get_language(): string;
            /**
             * Obtains the line height for the text contained in the inline-level structure element.
             * Note that for elements which do not specify a line height, it has to be calculated,
             * and in this case -1 is returned.
             * @returns A positive value if a line height is defined, or -1    if the height is to be calculated automatically.
             */
            get_line_height(): number;
            /**
             * Obtains the list numbering style for list items.
             * @returns A #PopplerStructureListNumbering value.
             */
            get_list_numbering(): StructureListNumbering;
            /**
             * Obtains the padding of an element (space around it). The result
             * values are in before-after-start-end ordering. For example using
             * Western left-to-right writing, that is top-bottom-left-right.
             */
            get_padding(): number[];
            /**
             * Obtains the page number in which the element is contained.
             * @returns Number of the page that contains the element, of    <code>-1</code> if not defined.
             */
            get_page(): number;
            /**
             * Obtains the placement type of the structure element.
             * @returns A #PopplerStructurePlacement value.
             */
            get_placement(): StructurePlacement;
            /**
             * Obtains the alignment for the ruby text contained in a
             * inline-level structure element.
             * @returns A #PopplerStructureRubyAlign value.
             */
            get_ruby_align(): StructureRubyAlign;
            /**
             * Obtains the position for the ruby text contained in a
             * inline-level structure element.
             * @returns A #PopplerStructureRubyPosition value.
             */
            get_ruby_position(): StructureRubyPosition;
            /**
             * Obtains the amount of empty space after the block-level structure element.
             * @returns A positive value.
             */
            get_space_after(): number;
            /**
             * Obtains the amount of empty space before the block-level structure element.
             * @returns A positive value.
             */
            get_space_before(): number;
            /**
             * Obtains the amount of indentation at the beginning of the block-level structure element.
             * @returns A numeric value.
             */
            get_start_indent(): number;
            /**
             * Obtains the table cell border style of a block-level structure element. The result values
             * are in before-after-start-end ordering. For example, using Western
             * left-to-right writing, that is top-bottom-left-right.
             */
            get_table_border_style(): StructureBorderStyle[];
            /**
             * Obtains the number of columns the table element spans to.
             * @returns A positive, non-zero value.
             */
            get_table_column_span(): number;
            /**
             * Obtains an array with the names of the table column headers. This is only
             * useful for table header row elements.
             *
             * The array with the results is allocated by the function. The number
             * of items in the returned array can be obtained with g_strv_length().
             * The returned value must be freed using g_strfreev().
             * @returns Zero-terminated array of strings with the table header names,    or %NULL if the attribute is not defined.
             */
            get_table_headers(): string[];
            /**
             * Obtains the padding between the table cell’s content rectangle and the
             * surrounding border of a block-level structure element. The result
             * values are in before-after-start-end ordering (for the typical
             * Western left-to-right writing, that is top-bottom-left-right).
             */
            get_table_padding(): number[];
            /**
             * Obtains the number of rows the table element spans to.
             * @returns A positive, non-zero value.
             */
            get_table_row_span(): number;
            /**
             * Obtains the scope of a table structure element.
             * @returns A #PopplerStructureTableScope value.
             */
            get_table_scope(): StructureTableScope;
            /**
             * Obtains the textual summary of the contents of the table element. Note that
             * the summary is meant for informative purposes, and it is not intended
             * to be rendered. For example, assistive technologies may use the
             * description field to provide an alternate way of presenting an element
             * to the user, or a document indexer may want to scan it for additional
             * keywords.
             *
             * The returned string is allocated by the function. When it is
             * not needed anymore, be sure to call g_free() on it.
             * @returns A string, or %NULL if the attribute    is not defined.
             */
            get_table_summary(): string;
            /**
             * Obtains the text enclosed by an element, or the text enclosed by the
             * elements in the subtree (including the element itself).
             * @param flags A #PopplerStructureGetTextFlags value, or    %POPPLER_STRUCTURE_GET_TEXT_NONE to disable all the flags.
             * @returns A string.
             */
            get_text(flags: StructureGetTextFlags | null): string;
            /**
             * Obtains the text alignment mode of the text contained into a
             * block-level structure element.
             * @returns A #PopplerStructureTextAlign value.
             */
            get_text_align(): StructureTextAlign;
            /**
             * Obtains the color of the text decoration for the text contained
             * in the inline-level structure element.
             * If this attribute is not specified, the color for this element shall be the current fill
             * color in effect at the start of its associated content.
             * @returns %TRUE if a color is defined for the element,    %FALSE otherwise.
             */
            get_text_decoration_color(): [boolean, Color];
            /**
             * Obtains the thickness of the text decoration for the text contained
             * in the inline-level structure element.
             * If this attribute is not specified, it shall be derived from the current
             * stroke thickness in effect at the start of the element’s associated content.
             * @returns Thickness of the text decoration, or NAN if not defined.
             */
            get_text_decoration_thickness(): number;
            /**
             * Obtains the text decoration type of the text contained in the
             * inline-level structure element.
             * @returns A #PopplerStructureTextDecoration value.
             */
            get_text_decoration_type(): StructureTextDecoration;
            /**
             * Obtains the amount of indentation of the text contained in the block-level structure element.
             * @returns A numeric value.
             */
            get_text_indent(): number;
            /**
             * Obtains the text enclosed by an element, as an array of #PopplerTextSpan
             * structures. Each item in the list is a piece of text which share the same
             * attributes, plus its attributes. The following example shows how to
             * obtain and free the text spans of an element:
             *
             * <informalexample><programlisting>
             * guint i, n_spans;
             * PopplerTextSpan **text_spans =
             *    poppler_structure_element_get_text_spans (element, &n_spans);
             * /<!-- -->* Use the text spans *<!-- -->/
             * for (i = 0; i < n_spans; i++)
             *    poppler_text_span_free (text_spans[i]);
             * g_free (text_spans);
             * </programlisting></informalexample>
             * @returns An array of #PopplerTextSpan elements.
             */
            get_text_spans(): TextSpan[];
            /**
             * Obtains the title of an element.
             * @returns The title of the element, or %NULL.
             */
            get_title(): string;
            /**
             * Obtains the width of the block-level structure element. Note that for elements which do
             * not specify a width, it has to be calculated, and in this case -1 is returned.
             * @returns A positive value if a width is defined, or -1    if the width is to be calculated automatically.
             */
            get_width(): number;
            /**
             * Obtains the writing mode (writing direction) of the content associated
             * with a structure element.
             * @returns A #PopplerStructureWritingMode value.
             */
            get_writing_mode(): StructureWritingMode;
            /**
             * Checks whether an element is a block element.
             * @returns %TRUE if  the element is a block element, or %FALSE otherwise.
             */
            is_block(): boolean;
            /**
             * Checks whether an element is actual document content.
             * @returns %TRUE if the element is content, or %FALSE otherwise.
             */
            is_content(): boolean;
            /**
             * Checks whether an element is a grouping element.
             * @returns %TRUE if the element is a grouping element, %FALSE    otherwise.
             */
            is_grouping(): boolean;
            /**
             * Checks whether an element is an inline element.
             * @returns %TRUE if the element is an inline element, or %FALSE otherwise.
             */
            is_inline(): boolean;
        }

        /**
         * Fields common to all #PopplerAction<!-- -->s
         */
        class ActionAny {
            static $gtype: GObject.GType<ActionAny>;

            // Fields

            type: ActionType;
            title: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Go to destination
         */
        class ActionGotoDest {
            static $gtype: GObject.GType<ActionGotoDest>;

            // Fields

            type: ActionType;
            title: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Go to destination in another document
         */
        class ActionGotoRemote {
            static $gtype: GObject.GType<ActionGotoRemote>;

            // Fields

            type: ActionType;
            title: string;
            file_name: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Javascript.
         */
        class ActionJavascript {
            static $gtype: GObject.GType<ActionJavascript>;

            // Fields

            type: ActionType;
            title: string;
            script: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Launch app (or open document)
         */
        class ActionLaunch {
            static $gtype: GObject.GType<ActionLaunch>;

            // Fields

            type: ActionType;
            title: string;
            file_name: string;
            params: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Action to perform over a list of layers
         */
        class ActionLayer {
            static $gtype: GObject.GType<ActionLayer>;

            // Fields

            action: ActionLayerAction;
            layers: Layer[];

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Play movies.
         */
        class ActionMovie {
            static $gtype: GObject.GType<ActionMovie>;

            // Fields

            type: ActionType;
            title: string;
            operation: ActionMovieOperation;
            movie: Movie;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Predefined action
         */
        class ActionNamed {
            static $gtype: GObject.GType<ActionNamed>;

            // Fields

            type: ActionType;
            title: string;
            named_dest: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * State of layer.
         */
        class ActionOCGState {
            static $gtype: GObject.GType<ActionOCGState>;

            // Fields

            type: ActionType;
            title: string;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Play multimedia content.
         */
        class ActionRendition {
            static $gtype: GObject.GType<ActionRendition>;

            // Fields

            type: ActionType;
            title: string;
            op: number;
            media: Media;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Resets some or all fields within a PDF form.
         *
         * The default behavior resets only the list of `fields,` but setting
         * `exclude` to %TRUE will cause the action to reset all fields but those
         * listed. Providing an empty list of fields resets the entire form.
         */
        class ActionResetForm {
            static $gtype: GObject.GType<ActionResetForm>;

            // Fields

            type: ActionType;
            title: string;
            fields: string[];
            exclude: boolean;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * URI
         */
        class ActionUri {
            static $gtype: GObject.GType<ActionUri>;

            // Fields

            type: ActionType;
            title: string;
            uri: string;

            // Constructors

            _init(...args: any[]): void;
        }

        class AnnotCalloutLine {
            static $gtype: GObject.GType<AnnotCalloutLine>;

            // Fields

            multiline: boolean;
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            x3: number;
            y3: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    multiline: boolean;
                    x1: number;
                    y1: number;
                    x2: number;
                    y2: number;
                    x3: number;
                    y3: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): AnnotCalloutLine;

            // Methods

            /**
             * It does copy `callout` to a new #PopplerAnnotCalloutLine.
             * @returns a new allocated #PopplerAnnotCalloutLine as exact copy of               @callout, %NULL in other case. It must be freed when done.
             */
            copy(): AnnotCalloutLine;
            /**
             * Frees the memory used by #PopplerAnnotCalloutLine.
             */
            free(): void;
        }

        /**
         * A #PopplerAnnotMapping structure represents the location
         * of `annot` on the page
         *
         * Since 24.10 this type supports g_autoptr
         */
        class AnnotMapping {
            static $gtype: GObject.GType<AnnotMapping>;

            // Fields

            area: Rectangle;
            annot: Annot;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Rectangle;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): AnnotMapping;

            // Methods

            /**
             * Creates a copy of `mapping`
             * @returns a new allocated copy of @mapping
             */
            copy(): AnnotMapping;
            /**
             * Frees the given #PopplerAnnotMapping
             */
            free(): void;
        }

        type AttachmentClass = typeof Attachment;
        /**
         * PopplerCertificateInfo contains detailed info about a signing certificate.
         *
         * Since 24.10 this type supports g_autoptr
         */
        class CertificateInfo {
            static $gtype: GObject.GType<CertificateInfo>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): CertificateInfo;

            // Methods

            /**
             * Copies `certificate_info,` creating an identical #PopplerCertificateInfo.
             * @returns a new #PopplerCertificateInfo structure identical to @certificate_info
             */
            copy(): CertificateInfo;
            /**
             * Frees `certificate_info`
             */
            free(): void;
            /**
             * Get certificate expiration time
             * @returns certificate expiration time
             */
            get_expiration_time(): GLib.DateTime;
            /**
             * Get certificate nick name
             * @returns certificate nick name
             */
            get_id(): string;
            /**
             * Get certificate issuance time
             * @returns certificate issuance time
             */
            get_issuance_time(): GLib.DateTime;
            /**
             * Get certificate issuer common name
             * @returns certificate issuer common name
             */
            get_issuer_common_name(): string;
            /**
             * Get certificate issuer email
             * @returns certificate issuer email
             */
            get_issuer_email(): string;
            /**
             * Get certificate issuer organization
             * @returns certificate issuer organization
             */
            get_issuer_organization(): string;
            /**
             * Get certificate subject common name
             * @returns certificate subject common name
             */
            get_subject_common_name(): string;
            /**
             * Get certificate subject email
             * @returns certificate subject email
             */
            get_subject_email(): string;
            /**
             * Get certificate subject organization
             * @returns certificate subject organization
             */
            get_subject_organization(): string;
        }

        /**
         * A #PopplerColor describes a RGB color. Color components
         * are values between 0 and 65535
         *
         * Since 24.10 this type supports g_autoptr
         */
        class Color {
            static $gtype: GObject.GType<Color>;

            // Fields

            red: number;
            green: number;
            blue: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    red: number;
                    green: number;
                    blue: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Color;

            // Methods

            /**
             * Creates a copy of `color`
             * @returns a new allocated copy of @color
             */
            copy(): Color;
            /**
             * Frees the given #PopplerColor
             */
            free(): void;
        }

        /**
         * Data structure for holding a destination
         *
         * Note that `named_dest` is the string representation of the named
         * destination. This is the right form to pass to poppler functions,
         * e.g. poppler_document_find_dest(), but to get the destination as
         * it appears in the PDF itself, you need to convert it to a bytestring
         * with poppler_named_dest_to_bytestring() first.
         * Also note that `named_dest` does not have a defined encoding and
         * is not in a form suitable to be displayed to the user.
         *
         * Since 24.10 this type supports g_autoptr
         */
        class Dest {
            static $gtype: GObject.GType<Dest>;

            // Fields

            type: DestType;
            page_num: number;
            left: number;
            bottom: number;
            right: number;
            top: number;
            zoom: number;
            named_dest: string;
            change_left: number;
            change_top: number;
            change_zoom: number;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Copies `dest,` creating an identical #PopplerDest.
             * @returns a new destination identical to @dest
             */
            copy(): Dest;
            /**
             * Frees `dest`
             */
            free(): void;
        }

        /**
         * A #PopplerFontDescription structure represents the description
         * of a font. When used together with Pango, all the fields are
         * value-compatible with pango equivalent, although Pango font
         * descriptions may contain more information.
         *
         * This type supports g_autoptr
         */
        class FontDescription {
            static $gtype: GObject.GType<FontDescription>;

            // Fields

            font_name: string;
            size_pt: number;
            stretch: Stretch;
            weight: Weight;
            style: Style;

            // Constructors

            constructor(font_name: string);
            _init(...args: any[]): void;

            static ['new'](font_name: string): FontDescription;

            // Methods

            /**
             * Creates a copy of `font_desc`
             * @returns a new allocated copy of @font_desc
             */
            copy(): FontDescription;
            /**
             * Frees the given #PopplerFontDescription
             */
            free(): void;
        }

        /**
         * Since 24.10 this type supports g_autoptr
         */
        abstract class FontsIter {
            static $gtype: GObject.GType<FontsIter>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Creates a copy of `iter`
             * @returns a new allocated copy of @iter
             */
            copy(): FontsIter;
            /**
             * Frees the given #PopplerFontsIter
             */
            free(): void;
            /**
             * Returns the encoding of the font associated with `iter`
             * @returns the font encoding
             */
            get_encoding(): string;
            /**
             * The filename of the font associated with `iter` or %NULL if
             * the font is embedded
             * @returns the filename of the font or %NULL if font is embedded
             */
            get_file_name(): string;
            /**
             * Returns the type of the font associated with `iter`
             * @returns the font type
             */
            get_font_type(): FontType;
            /**
             * Returns the full name of the font associated with `iter`
             * @returns the font full name
             */
            get_full_name(): string;
            /**
             * Returns the name of the font associated with `iter`
             * @returns the font name
             */
            get_name(): string;
            /**
             * The name of the substitute font of the font associated with `iter` or %NULL if
             * the font is embedded
             * @returns the name of the substitute font or %NULL if font is embedded
             */
            get_substitute_name(): string;
            /**
             * Returns whether the font associated with `iter` is embedded in the document
             * @returns %TRUE if font is embedded, %FALSE otherwise
             */
            is_embedded(): boolean;
            /**
             * Returns whether the font associated with `iter` is a subset of another font
             * @returns %TRUE if font is a subset, %FALSE otherwise
             */
            is_subset(): boolean;
            /**
             * Sets `iter` to point to the next font
             * @returns %TRUE, if @iter was set to the next font
             */
            next(): boolean;
        }

        /**
         * A #PopplerFormFieldMapping structure represents the location
         * of `field` on the page
         *
         * Since 24.10 this type supports g_autoptr
         */
        class FormFieldMapping {
            static $gtype: GObject.GType<FormFieldMapping>;

            // Fields

            area: Rectangle;
            field: FormField;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Rectangle;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): FormFieldMapping;

            // Methods

            /**
             * Creates a copy of `mapping`
             * @returns a new allocated copy of @mapping
             */
            copy(): FormFieldMapping;
            /**
             * Frees the given #PopplerFormFieldMapping
             */
            free(): void;
        }

        /**
         * A #PopplerImageMapping structure represents the location
         * of an image on the page
         *
         * Since 24.10 this type supports g_autoptr
         */
        class ImageMapping {
            static $gtype: GObject.GType<ImageMapping>;

            // Fields

            area: Rectangle;
            image_id: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Rectangle;
                    image_id: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): ImageMapping;

            // Methods

            /**
             * Creates a copy of `mapping`
             * @returns a new allocated copy of @mapping
             */
            copy(): ImageMapping;
            /**
             * Frees the given #PopplerImageMapping
             */
            free(): void;
        }

        /**
         * Interface for getting the Index of a poppler_document
         *
         * Since 24.10 this type supports g_autoptr
         */
        class IndexIter {
            static $gtype: GObject.GType<IndexIter>;

            // Constructors

            constructor(document: Document);
            _init(...args: any[]): void;

            static ['new'](document: Document): IndexIter;

            // Methods

            /**
             * Creates a new #PopplerIndexIter as a copy of `iter`.  This must be freed with
             * poppler_index_iter_free().
             * @returns a new #PopplerIndexIter
             */
            copy(): IndexIter;
            /**
             * Frees `iter`.
             */
            free(): void;
            /**
             * Returns the #PopplerAction associated with `iter`.  It must be freed with
             * poppler_action_free().
             * @returns a new #PopplerAction
             */
            get_action(): Action;
            /**
             * Returns a newly created child of `parent,` or %NULL if the iter has no child.
             * See poppler_index_iter_new() for more information on this function.
             * @returns a new #PopplerIndexIter
             */
            get_child(): IndexIter;
            /**
             * Returns whether this node should be expanded by default to the user.  The
             * document can provide a hint as to how the document's index should be expanded
             * initially.
             * @returns %TRUE, if the document wants @iter to be expanded
             */
            is_open(): boolean;
            /**
             * Sets `iter` to point to the next action at the current level, if valid.  See
             * poppler_index_iter_new() for more information.
             * @returns %TRUE, if @iter was set to the next action
             */
            next(): boolean;
        }

        /**
         * Interface for getting the Layers of a poppler_document
         *
         * Since 24.10 this type supports g_autoptr
         */
        class LayersIter {
            static $gtype: GObject.GType<LayersIter>;

            // Constructors

            constructor(document: Document);
            _init(...args: any[]): void;

            static ['new'](document: Document): LayersIter;

            // Methods

            /**
             * Creates a new #PopplerLayersIter as a copy of `iter`.  This must be freed with
             * poppler_layers_iter_free().
             * @returns a new #PopplerLayersIter Since 0.12
             */
            copy(): LayersIter;
            /**
             * Frees `iter`.
             */
            free(): void;
            /**
             * Returns a newly created child of `parent,` or %NULL if the iter has no child.
             * See poppler_layers_iter_new() for more information on this function.
             * @returns a new #PopplerLayersIter, or %NULL
             */
            get_child(): LayersIter;
            /**
             * Returns the #PopplerLayer associated with `iter`.
             * @returns a new #PopplerLayer, or %NULL if there isn't any layer associated with @iter
             */
            get_layer(): Layer;
            /**
             * Returns the title associated with `iter`.  It must be freed with
             * g_free().
             * @returns a new string containing the @iter's title or %NULL if @iter doesn't have a title. The returned string should be freed with g_free() when no longer needed.
             */
            get_title(): string;
            /**
             * Sets `iter` to point to the next action at the current level, if valid.  See
             * poppler_layers_iter_new() for more information.
             * @returns %TRUE, if @iter was set to the next action
             */
            next(): boolean;
        }

        /**
         * A #PopplerLinkMapping structure represents the location
         * of `action` on the page
         *
         * Since 24.10 this type supports g_autoptr
         */
        class LinkMapping {
            static $gtype: GObject.GType<LinkMapping>;

            // Fields

            area: Rectangle;

            // Constructors

            constructor(
                properties?: Partial<{
                    area: Rectangle;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): LinkMapping;

            // Methods

            /**
             * Creates a copy of `mapping`
             * @returns a new allocated copy of @mapping
             */
            copy(): LinkMapping;
            /**
             * Frees the given #PopplerLinkMapping
             */
            free(): void;
        }

        /**
         * A #PopplerPageRange is used to specify a range of pages.
         */
        class PageRange {
            static $gtype: GObject.GType<PageRange>;

            // Fields

            start_page: number;
            end_page: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    start_page: number;
                    end_page: number;
                }>,
            );
            _init(...args: any[]): void;
        }

        /**
         * A #PopplerPageTransition structures describes a visual transition
         * to use when moving between pages during a presentation
         *
         * Since 24.10 this type supports g_autoptr
         */
        class PageTransition {
            static $gtype: GObject.GType<PageTransition>;

            // Fields

            type: PageTransitionType;
            alignment: PageTransitionAlignment;
            direction: PageTransitionDirection;
            duration: number;
            angle: number;
            scale: number;
            rectangular: boolean;
            duration_real: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    type: PageTransitionType;
                    alignment: PageTransitionAlignment;
                    direction: PageTransitionDirection;
                    duration: number;
                    angle: number;
                    scale: number;
                    rectangular: boolean;
                    duration_real: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): PageTransition;

            // Methods

            /**
             * Creates a copy of `transition`
             * @returns a new allocated copy of @transition
             */
            copy(): PageTransition;
            /**
             * Frees the given #PopplerPageTransition
             */
            free(): void;
        }

        /**
         * A #PopplerPoint is used to describe a location point on a page
         *
         * Since 24.10 this type supports g_autoptr
         */
        class Point {
            static $gtype: GObject.GType<Point>;

            // Fields

            x: number;
            y: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x: number;
                    y: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Point;

            // Methods

            /**
             * Creates a copy of `point`. The copy must be freed with poppler_point_free()
             * after use.
             * @returns a new allocated copy of @point
             */
            copy(): Point;
            /**
             * Frees the memory used by `point`
             */
            free(): void;
        }

        /**
         * A #PopplerQuadrilateral is used to describe rectangle-like polygon
         *  with arbitrary inclination on a page.
         *
         *  Since 24.10 this type supports g_autoptr
         *
         *  Since: 0.26
         */
        class Quadrilateral {
            static $gtype: GObject.GType<Quadrilateral>;

            // Fields

            p1: Point;
            p2: Point;
            p3: Point;
            p4: Point;

            // Constructors

            constructor(
                properties?: Partial<{
                    p1: Point;
                    p2: Point;
                    p3: Point;
                    p4: Point;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Quadrilateral;

            // Methods

            /**
             * Creates a copy of `quad`. The copy must be freed with poppler_quadrilateral_free() after use.
             * @returns a new allocated copy of @quad
             */
            copy(): Quadrilateral;
            /**
             * Frees the memory used by `quad`
             */
            free(): void;
        }

        /**
         * A #PopplerRectangle is used to describe
         * locations on a page and bounding boxes
         *
         * Since 24.10 this type supports g_autoptr
         */
        class Rectangle {
            static $gtype: GObject.GType<Rectangle>;

            // Fields

            x1: number;
            y1: number;
            x2: number;
            y2: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    x1: number;
                    y1: number;
                    x2: number;
                    y2: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): Rectangle;

            // Methods

            /**
             * Creates a copy of `rectangle`.
             *
             * Note that you must only use this function on an allocated PopplerRectangle, as
             * returned by poppler_rectangle_new(), poppler_rectangle_copy(), or the list elements
             * returned from poppler_page_find_text() or poppler_page_find_text_with_options().
             * @returns a new allocated copy of @rectangle
             */
            copy(): Rectangle;
            /**
             * When using poppler_page_find_text_with_options() with the
             * %POPPLER_FIND_MULTILINE flag, a match may span more than one line,
             * and may have been formed by ignoring a hyphen at the end of the line.
             * When this happens at the end of the line corresponding to `rectangle,`
             * this function returns %TRUE (and then poppler_rectangle_find_get_match_continued()
             * will also return %TRUE); otherwise it returns %FALSE.
             *
             * Note that you must only call this function on a #PopplerRectangle
             * returned in the list from poppler_page_find_text() or
             * poppler_page_find_text_with_options().
             * @returns whether a hyphen was ignored at the end of the line corresponding to @rectangle.
             */
            find_get_ignored_hyphen(): boolean;
            /**
             * When using poppler_page_find_text_with_options() with the
             * %POPPLER_FIND_MULTILINE flag, a match may span more than one line
             * and thus consist of more than one rectangle. Every rectangle belonging
             * to the same match will return %TRUE from this function, except for
             * the last rectangle, where this function will return %FALSE.
             *
             * Note that you must only call this function on a #PopplerRectangle
             * returned in the list from poppler_page_find_text() or
             * poppler_page_find_text_with_options().
             * @returns whether there are more rectangles belonging to the same match
             */
            find_get_match_continued(): boolean;
            /**
             * Frees the given #PopplerRectangle.
             *
             * Note that you must only use this function on an allocated PopplerRectangle, as
             * returned by poppler_rectangle_new(), poppler_rectangle_copy(), or the list elements
             * returned from poppler_page_find_text() or poppler_page_find_text_with_options().
             */
            free(): void;
        }

        /**
         * PopplerSignatureInfo contains detailed info about a signature
         * contained in a form field.
         *
         * Since 24.10 this type supports g_autoptr
         */
        abstract class SignatureInfo {
            static $gtype: GObject.GType<SignatureInfo>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Copies `siginfo,` creating an identical #PopplerSignatureInfo.
             * @returns a new #PopplerSignatureInfo structure identical to @siginfo
             */
            copy(): SignatureInfo;
            /**
             * Frees `siginfo`
             */
            free(): void;
            /**
             * Returns PopplerCertificateInfo for given PopplerSignatureInfo.
             * @returns certificate info of the signature
             */
            get_certificate_info(): CertificateInfo;
            /**
             * Returns status of the certificate for given PopplerSignatureInfo.
             * @returns certificate status of the signature
             */
            get_certificate_status(): CertificateStatus;
            /**
             * Returns local time of signing as GDateTime. This does not
             * contain information about time zone since it has not been
             * preserved during conversion.
             * Do not modify returned value since it is internal to
             * PopplerSignatureInfo.
             * @returns GDateTime
             */
            get_local_signing_time(): GLib.DateTime;
            /**
             * Returns status of the signature for given PopplerSignatureInfo.
             * @returns signature status of the signature
             */
            get_signature_status(): SignatureStatus;
            /**
             * Returns name of signer for given PopplerSignatureInfo.
             * @returns A string.
             */
            get_signer_name(): string;
        }

        /**
         * Since 24.10 this type supports g_autoptr
         */
        class SigningData {
            static $gtype: GObject.GType<SigningData>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): SigningData;

            // Methods

            /**
             * Copies `signing_data,` creating an identical #PopplerSigningData.
             * @returns a new #PopplerSigningData structure identical to @signing_data
             */
            copy(): SigningData;
            /**
             * Frees `signing_data`
             */
            free(): void;
            /**
             * Get signature background color.
             * @returns a #PopplerColor
             */
            get_background_color(): Color;
            /**
             * Get signature border color.
             * @returns a #PopplerColor
             */
            get_border_color(): Color;
            /**
             * Get signature border width.
             * @returns border width
             */
            get_border_width(): number;
            /**
             * Get certification information.
             * @returns a #PopplerCertificateInfo
             */
            get_certificate_info(): CertificateInfo;
            /**
             * Get destination file name.
             * @returns destination filename
             */
            get_destination_filename(): string;
            /**
             * Get document owner password.
             * @returns document owner password (for encrypted files)
             */
            get_document_owner_password(): string;
            /**
             * Get document user password.
             * @returns document user password (for encrypted files)
             */
            get_document_user_password(): string;
            /**
             * Get field partial name.
             * @returns field partial name
             */
            get_field_partial_name(): string;
            /**
             * Get signature font color.
             * @returns a #PopplerColor
             */
            get_font_color(): Color;
            /**
             * Get signature font size.
             * @returns font size
             */
            get_font_size(): number;
            /**
             * Get image path.
             * @returns image path
             */
            get_image_path(): string;
            /**
             * Get signature left font size.
             * @returns left font size
             */
            get_left_font_size(): number;
            /**
             * Get location.
             * @returns location
             */
            get_location(): string;
            /**
             * Get page.
             * @returns page number
             */
            get_page(): number;
            /**
             * Get signing key password.
             * @returns password
             */
            get_password(): string;
            /**
             * Get reason.
             * @returns reason
             */
            get_reason(): string;
            /**
             * Get signature rectangle.
             * @returns a #PopplerRectangle
             */
            get_signature_rectangle(): Rectangle;
            /**
             * Get signature text.
             * @returns signature text
             */
            get_signature_text(): string;
            /**
             * Get signature text left.
             * @returns signature text left
             */
            get_signature_text_left(): string;
            /**
             * Set signature background color.
             * @param background_color a #PopplerColor to be used for signature background
             */
            set_background_color(background_color: Color): void;
            /**
             * Set signature border color.
             * @param border_color a #PopplerColor to be used for signature border
             */
            set_border_color(border_color: Color): void;
            /**
             * Set signature border width.
             * @param border_width border width
             */
            set_border_width(border_width: number): void;
            /**
             * Set certification information.
             * @param certificate_info a #PopplerCertificateInfo
             */
            set_certificate_info(certificate_info: CertificateInfo): void;
            /**
             * Set destination file name.
             * @param filename destination filename
             */
            set_destination_filename(filename: string): void;
            /**
             * Set document owner password (for encrypted files).
             * @param document_owner_password document owner password
             */
            set_document_owner_password(document_owner_password: string): void;
            /**
             * Set document user password (for encrypted files).
             * @param document_user_password document user password
             */
            set_document_user_password(document_user_password: string): void;
            /**
             * Set field partial name (existing field id or a new one) where signature is placed.
             * @param field_partial_name a field partial name
             */
            set_field_partial_name(field_partial_name: string): void;
            /**
             * Set signature font color.
             * @param font_color a #PopplerColor to be used as signature font color
             */
            set_font_color(font_color: Color): void;
            /**
             * Set signature font size (>0).
             * @param font_size signature font size
             */
            set_font_size(font_size: number): void;
            /**
             * Set signature background (watermark) image path.
             * @param image_path signature image path
             */
            set_image_path(image_path: string): void;
            /**
             * Set signature left font size (> 0).
             * @param font_size signature font size
             */
            set_left_font_size(font_size: number): void;
            /**
             * Set signature location (e.g. "At my desk").
             * @param location a location
             */
            set_location(location: string): void;
            /**
             * Set page (>=0).
             * @param page a page number
             */
            set_page(page: number): void;
            /**
             * Set password for the signing key.
             * @param password a password
             */
            set_password(password: string): void;
            /**
             * Set reason for signature (e.g. I'm approver).
             * @param reason a reason
             */
            set_reason(reason: string): void;
            /**
             * Set signature rectangle.
             * @param signature_rect a #PopplerRectangle where signature should be shown
             */
            set_signature_rectangle(signature_rect: Rectangle): void;
            /**
             * Set signature text.
             * @param signature_text text to show as main signature
             */
            set_signature_text(signature_text: string): void;
            /**
             * Set small signature text on the left hand.
             * @param signature_text_left text to show as small left signature
             */
            set_signature_text_left(signature_text_left: string): void;
        }

        /**
         * Since 24.10 this type supports g_autoptr
         */
        class StructureElementIter {
            static $gtype: GObject.GType<StructureElementIter>;

            // Constructors

            constructor(poppler_document: Document);
            _init(...args: any[]): void;

            static ['new'](poppler_document: Document): StructureElementIter;

            // Methods

            /**
             * Creates a new #PopplerStructureElementIter as a copy of `iter`. The
             * returned value must be freed with poppler_structure_element_iter_free().
             * @returns a new #PopplerStructureElementIter
             */
            copy(): StructureElementIter;
            /**
             * Frees `iter`.
             */
            free(): void;
            /**
             * Returns a new iterator to the children elements of the
             * #PopplerStructureElement associated with `iter`. The returned value must
             * be freed with poppler_structure_element_iter_free().
             * @returns a new #PopplerStructureElementIter
             */
            get_child(): StructureElementIter;
            /**
             * Returns the #PopplerStructureElementIter associated with `iter`.
             * @returns a new #PopplerStructureElementIter
             */
            get_element(): StructureElement;
            /**
             * Sets `iter` to point to the next structure element at the current level
             * of the tree, if valid. See poppler_structure_element_iter_new() for more
             * information.
             * @returns %TRUE, if @iter was set to the next structure element
             */
            next(): boolean;
        }

        /**
         * A #PopplerTextAttributes is used to describe text attributes of a range of text
         */
        class TextAttributes {
            static $gtype: GObject.GType<TextAttributes>;

            // Fields

            font_name: string;
            font_size: number;
            is_underlined: boolean;
            color: Color;
            start_index: number;
            end_index: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    font_name: string;
                    font_size: number;
                    is_underlined: boolean;
                    color: Color;
                    start_index: number;
                    end_index: number;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](): TextAttributes;

            // Methods

            /**
             * Creates a copy of `text_attrs`
             * @returns a new allocated copy of @text_attrs
             */
            copy(): TextAttributes;
            /**
             * Frees the given #PopplerTextAttributes
             */
            free(): void;
        }

        /**
         * Since 24.10 this type supports g_autoptr
         */
        abstract class TextSpan {
            static $gtype: GObject.GType<TextSpan>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Makes a copy of a text span.
             * @returns A new #PopplerTextSpan
             */
            copy(): TextSpan;
            /**
             * Frees a text span.
             */
            free(): void;
            /**
             * Obtains the color in which the text is to be rendered.
             */
            get_color(): Color;
            /**
             * Obtains the name of the font in which the span is to be rendered.
             * @returns A string containing the font name, or   %NULL if a font is not defined.
             */
            get_font_name(): string;
            /**
             * Obtains the text contained in the span.
             * @returns A string.
             */
            get_text(): string;
            /**
             * Check whether a text span is meant to be rendered using a bold font.
             * @returns Whether the span uses bold font.
             */
            is_bold_font(): boolean;
            /**
             * Check wether a text span is meant to be rendered using a fixed-width font.
             * @returns Whether the span uses a fixed-width font.
             */
            is_fixed_width_font(): boolean;
            /**
             * Check whether a text span is meant to be rendered using a serif font.
             * @returns Whether the span uses a serif font.
             */
            is_serif_font(): boolean;
        }

        /**
         * A generic wrapper for actions that exposes only #PopplerActionType.
         *
         * Since 24.10 this type supports g_autoptr
         */
        class Action {
            static $gtype: GObject.GType<Action>;

            // Fields

            type: ActionType;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Copies `action,` creating an identical #PopplerAction.
             * @returns a new action identical to @action
             */
            copy(): Action;
            /**
             * Frees `action`
             */
            free(): void;
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

    export default Poppler;
}

declare module 'gi://Poppler' {
    import Poppler018 from 'gi://Poppler?version=0.18';
    export default Poppler018;
}
// END
