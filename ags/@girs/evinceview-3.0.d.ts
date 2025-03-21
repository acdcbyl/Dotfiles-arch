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
/// <reference path="./evincedocument-3.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EvinceView?version=3.0' {
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
    import type EvinceDocument from 'gi://EvinceDocument?version=3.0';

    export namespace EvinceView {
        /**
         * EvinceView-3.0
         */

        export namespace JobPriority {
            export const $gtype: GObject.GType<JobPriority>;
        }

        enum JobPriority {
            PRIORITY_URGENT,
            PRIORITY_HIGH,
            PRIORITY_LOW,
            PRIORITY_NONE,
            N_PRIORITIES,
        }

        export namespace JobRunMode {
            export const $gtype: GObject.GType<JobRunMode>;
        }

        enum JobRunMode {
            THREAD,
            MAIN_LOOP,
        }

        export namespace JobThumbnailFormat {
            export const $gtype: GObject.GType<JobThumbnailFormat>;
        }

        enum JobThumbnailFormat {
            PIXBUF,
            SURFACE,
        }

        export namespace PageLayout {
            export const $gtype: GObject.GType<PageLayout>;
        }

        enum PageLayout {
            SINGLE,
            DUAL,
            AUTOMATIC,
        }

        export namespace SizingMode {
            export const $gtype: GObject.GType<SizingMode>;
        }

        enum SizingMode {
            /**
             * Since: 3.8
             */
            FIT_PAGE,
            /**
             * Same as %EV_SIZING_FIT_PAGE. Deprecated:
             */
            BEST_FIT,
            FIT_WIDTH,
            FREE,
            /**
             * Since: 3.8
             */
            AUTOMATIC,
        }
        const STOCK_ANNOT_SQUIGGLY: string;
        const STOCK_ANNOT_TEXT: string;
        const STOCK_ATTACHMENT: string;
        const STOCK_CLOSE: string;
        const STOCK_FIND_UNSUPPORTED: string;
        const STOCK_INVERTED_COLORS: string;
        const STOCK_OUTLINE: string;
        const STOCK_RESIZE_SE: string;
        const STOCK_RESIZE_SW: string;
        const STOCK_ROTATE_LEFT: string;
        const STOCK_ROTATE_RIGHT: string;
        const STOCK_RUN_PRESENTATION: string;
        const STOCK_SEND_TO: string;
        const STOCK_VIEW_CONTINUOUS: string;
        const STOCK_VIEW_DUAL: string;
        const STOCK_VIEW_SIDEBAR: string;
        const STOCK_VISIBLE: string;
        const STOCK_ZOOM: string;
        const STOCK_ZOOM_PAGE: string;
        const STOCK_ZOOM_WIDTH: string;
        /**
         * Creates a new icon factory, adding the base stock icons to it.
         */
        function stock_icons_init(): void;
        function stock_icons_set_screen(screen: Gdk.Screen): void;
        function stock_icons_shutdown(): void;

        export namespace JobPageDataFlags {
            export const $gtype: GObject.GType<JobPageDataFlags>;
        }

        enum JobPageDataFlags {
            NONE,
            LINKS,
            TEXT,
            TEXT_MAPPING,
            TEXT_LAYOUT,
            TEXT_ATTRS,
            TEXT_LOG_ATTRS,
            IMAGES,
            FORMS,
            ANNOTS,
            MEDIA,
            ALL,
        }
        module DocumentModel {
            // Signal callback interfaces

            interface PageChanged {
                (object: number, p0: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                continuous: boolean;
                document: EvinceDocument.Document;
                dual_odd_left: boolean;
                dualOddLeft: boolean;
                dual_page: boolean;
                dualPage: boolean;
                fullscreen: boolean;
                inverted_colors: boolean;
                invertedColors: boolean;
                max_scale: number;
                maxScale: number;
                min_scale: number;
                minScale: number;
                page: number;
                page_layout: PageLayout;
                pageLayout: PageLayout;
                rotation: number;
                rtl: boolean;
                scale: number;
                sizing_mode: SizingMode;
                sizingMode: SizingMode;
            }
        }

        class DocumentModel extends GObject.Object {
            static $gtype: GObject.GType<DocumentModel>;

            // Properties

            get continuous(): boolean;
            set continuous(val: boolean);
            get document(): EvinceDocument.Document;
            set document(val: EvinceDocument.Document);
            get dual_odd_left(): boolean;
            set dual_odd_left(val: boolean);
            get dualOddLeft(): boolean;
            set dualOddLeft(val: boolean);
            get dual_page(): boolean;
            set dual_page(val: boolean);
            get dualPage(): boolean;
            set dualPage(val: boolean);
            get fullscreen(): boolean;
            set fullscreen(val: boolean);
            get inverted_colors(): boolean;
            set inverted_colors(val: boolean);
            get invertedColors(): boolean;
            set invertedColors(val: boolean);
            get max_scale(): number;
            set max_scale(val: number);
            get maxScale(): number;
            set maxScale(val: number);
            get min_scale(): number;
            set min_scale(val: number);
            get minScale(): number;
            set minScale(val: number);
            get page(): number;
            set page(val: number);
            get page_layout(): PageLayout;
            set page_layout(val: PageLayout);
            get pageLayout(): PageLayout;
            set pageLayout(val: PageLayout);
            get rotation(): number;
            set rotation(val: number);
            get rtl(): boolean;
            set rtl(val: boolean);
            get scale(): number;
            set scale(val: number);
            get sizing_mode(): SizingMode;
            set sizing_mode(val: SizingMode);
            get sizingMode(): SizingMode;
            set sizingMode(val: SizingMode);

            // Constructors

            constructor(properties?: Partial<DocumentModel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): DocumentModel;

            static new_with_document(document: EvinceDocument.Document): DocumentModel;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'page-changed', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'page-changed',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'page-changed', object: number, p0: number): void;

            // Methods

            get_continuous(): boolean;
            /**
             * Returns the #EvDocument referenced by the model.
             * @returns a #EvDocument
             */
            get_document(): EvinceDocument.Document;
            get_dual_page(): boolean;
            get_dual_page_odd_pages_left(): boolean;
            get_fullscreen(): boolean;
            get_inverted_colors(): boolean;
            get_max_scale(): number;
            get_min_scale(): number;
            get_page(): number;
            get_page_layout(): PageLayout;
            get_rotation(): number;
            get_rtl(): boolean;
            get_scale(): number;
            get_sizing_mode(): SizingMode;
            set_continuous(continuous: boolean): void;
            set_document(document: EvinceDocument.Document): void;
            /**
             * Sets the document model's page layout to %EV_PAGE_LAYOUT_SINGLE or
             * %EV_PAGE_LAYOUT_DUAL.
             * @param dual_page whether to enable dual page mode
             */
            set_dual_page(dual_page: boolean): void;
            set_dual_page_odd_pages_left(odd_left: boolean): void;
            set_fullscreen(fullscreen: boolean): void;
            set_inverted_colors(inverted_colors: boolean): void;
            set_max_scale(max_scale: number): void;
            set_min_scale(min_scale: number): void;
            set_page(page: number): void;
            set_page_by_label(page_label: string): void;
            /**
             * Sets the document model's page layout to `layout`.
             * @param layout a #EvPageLayout
             */
            set_page_layout(layout: PageLayout | null): void;
            set_rotation(rotation: number): void;
            set_rtl(rtl: boolean): void;
            set_scale(scale: number): void;
            set_sizing_mode(mode: SizingMode | null): void;
        }

        module Job {
            // Signal callback interfaces

            interface Cancelled {
                (): void;
            }

            interface Finished {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        abstract class Job extends GObject.Object {
            static $gtype: GObject.GType<Job>;

            // Fields

            document: EvinceDocument.Document;
            run_mode: JobRunMode;
            cancelled: number;
            finished: number;
            error: GLib.Error;
            cancellable: Gio.Cancellable;
            idle_finished_id: number;
            idle_cancelled_id: number;

            // Constructors

            constructor(properties?: Partial<Job.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'cancelled', callback: (_source: this) => void): number;
            connect_after(signal: 'cancelled', callback: (_source: this) => void): number;
            emit(signal: 'cancelled'): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;

            // Static methods

            static scheduler_get_running_thread_job(): Job;
            /**
             * Synchronously waits until all jobs are done.
             * Remember that main loop is not running already probably.
             */
            static scheduler_wait(): void;

            // Virtual methods

            vfunc_cancelled(): void;
            vfunc_finished(): void;
            vfunc_run(): boolean;

            // Methods

            cancel(): void;
            failed(error: GLib.Error): void;
            get_run_mode(): JobRunMode;
            is_failed(): boolean;
            is_finished(): boolean;
            run(): boolean;
            scheduler_push_job(priority: JobPriority | null): void;
            scheduler_update_job(priority: JobPriority | null): void;
            set_run_mode(run_mode: JobRunMode | null): void;
            succeeded(): void;
        }

        module JobAnnots {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobAnnots extends Job {
            static $gtype: GObject.GType<JobAnnots>;

            // Fields

            annots: any[];

            // Constructors

            constructor(properties?: Partial<JobAnnots.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobAnnots;
        }

        module JobAttachments {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobAttachments extends Job {
            static $gtype: GObject.GType<JobAttachments>;

            // Fields

            attachments: any[];

            // Constructors

            constructor(properties?: Partial<JobAttachments.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobAttachments;
        }

        module JobExport {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobExport extends Job {
            static $gtype: GObject.GType<JobExport>;

            // Fields

            page: number;
            rc: EvinceDocument.RenderContext;

            // Constructors

            constructor(properties?: Partial<JobExport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobExport;

            // Methods

            set_page(page: number): void;
        }

        module JobFind {
            // Signal callback interfaces

            interface Updated {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobFind extends Job {
            static $gtype: GObject.GType<JobFind>;

            // Fields

            start_page: number;
            current_page: number;
            n_pages: number;
            pages: any[];
            text: string;
            case_sensitive: boolean;
            options: EvinceDocument.FindOptions;

            // Constructors

            constructor(properties?: Partial<JobFind.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: EvinceDocument.Document,
                start_page: number,
                n_pages: number,
                text: string,
                case_sensitive: boolean,
            ): JobFind;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'updated', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'updated', callback: (_source: this, object: number) => void): number;
            emit(signal: 'updated', object: number): void;

            // Virtual methods

            vfunc_updated(page: number): void;

            // Methods

            /**
             * This is similar to ev_job_find_get_n_results() but it takes
             * care to treat any multi-line matches as being only one result.
             * @param page number of the page we want to count its match results.
             * @returns total number of match results in @page
             */
            get_n_main_results(page: number): number;
            get_n_results(pages: number): number;
            get_options(): EvinceDocument.FindOptions;
            get_progress(): number;
            has_results(): boolean;
            set_options(options: EvinceDocument.FindOptions | null): void;
        }

        module JobFonts {
            // Signal callback interfaces

            interface Updated {
                (object: number): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobFonts extends Job {
            static $gtype: GObject.GType<JobFonts>;

            // Fields

            scan_completed: boolean;

            // Constructors

            constructor(properties?: Partial<JobFonts.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobFonts;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'updated', callback: (_source: this, object: number) => void): number;
            connect_after(signal: 'updated', callback: (_source: this, object: number) => void): number;
            emit(signal: 'updated', object: number): void;

            // Virtual methods

            vfunc_updated(progress: number): void;
        }

        module JobLayers {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLayers extends Job {
            static $gtype: GObject.GType<JobLayers>;

            // Fields

            model: Gtk.TreeModel;

            // Constructors

            constructor(properties?: Partial<JobLayers.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobLayers;
        }

        module JobLinks {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLinks extends Job {
            static $gtype: GObject.GType<JobLinks>;

            // Fields

            model: Gtk.TreeModel;

            // Constructors

            constructor(properties?: Partial<JobLinks.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobLinks;

            // Methods

            /**
             * Get a #GtkTreeModel loaded with the links
             * @returns The #GtkTreeModel loaded
             */
            get_model(): Gtk.TreeModel;
        }

        module JobLoad {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobLoad extends Job {
            static $gtype: GObject.GType<JobLoad>;

            // Fields

            uri: string;
            password: string;

            // Constructors

            constructor(properties?: Partial<JobLoad.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](uri: string): JobLoad;

            // Methods

            set_password(password: string): void;
            set_uri(uri: string): void;
        }

        module JobLoadFd {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        /**
         * A job class to load a #EvDocument from a file descriptor
         * referring to a regular file.
         */
        class JobLoadFd extends Job {
            static $gtype: GObject.GType<JobLoadFd>;

            // Fields

            mime_type: string;
            password: string;
            fd: number;
            flags: EvinceDocument.DocumentLoadFlags;

            // Constructors

            constructor(properties?: Partial<JobLoadFd.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd;

            static new_take(fd: number, mime_type: string, flags: EvinceDocument.DocumentLoadFlags): JobLoadFd;

            // Methods

            /**
             * Sets `fd` as the file descriptor in `job`. If duplicating `fd` fails,
             * returns %FALSE with `error` filled in.
             * @param fd a file descriptor
             * @returns %TRUE if the file descriptor could be set
             */
            set_fd(fd: number): boolean;
            set_load_flags(flags: EvinceDocument.DocumentLoadFlags | null): void;
            set_mime_type(mime_type: string): void;
            set_password(password: string): void;
            /**
             * Sets `fd` as the file descriptor in `job`.
             * Note that `job` takes ownership of `fd;` you must not do anything
             * with it afterwards.
             * @param fd a file descriptor
             */
            take_fd(fd: number): void;
        }

        module JobLoadGFile {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        /**
         * A job class to load a #EvDocument from a #GFile.
         */
        class JobLoadGFile extends Job {
            static $gtype: GObject.GType<JobLoadGFile>;

            // Fields

            password: string;
            gfile: Gio.File;
            flags: EvinceDocument.DocumentLoadFlags;

            // Constructors

            constructor(properties?: Partial<JobLoadGFile.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](gfile: Gio.File, flags: EvinceDocument.DocumentLoadFlags): JobLoadGFile;

            // Methods

            set_gfile(gfile: Gio.File): void;
            set_load_flags(flags: EvinceDocument.DocumentLoadFlags | null): void;
            set_password(password: string): void;
        }

        module JobLoadStream {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        /**
         * A job class to load a #EvDocument from a #GInputStream.
         */
        class JobLoadStream extends Job {
            static $gtype: GObject.GType<JobLoadStream>;

            // Fields

            password: string;
            stream: Gio.InputStream;
            flags: EvinceDocument.DocumentLoadFlags;

            // Constructors

            constructor(properties?: Partial<JobLoadStream.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](stream: Gio.InputStream, flags: EvinceDocument.DocumentLoadFlags): JobLoadStream;

            // Methods

            set_load_flags(flags: EvinceDocument.DocumentLoadFlags | null): void;
            set_mime_type(mime_type: string): void;
            set_password(password: string): void;
            set_stream(stream: Gio.InputStream): void;
        }

        module JobPageData {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobPageData extends Job {
            static $gtype: GObject.GType<JobPageData>;

            // Fields

            page: number;
            flags: JobPageDataFlags;
            text: string;
            text_layout: EvinceDocument.Rectangle;
            text_layout_length: number;
            text_log_attrs: Pango.LogAttr;
            text_log_attrs_length: number;

            // Constructors

            constructor(properties?: Partial<JobPageData.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document, page: number, flags: JobPageDataFlags): JobPageData;
        }

        module JobPrint {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobPrint extends Job {
            static $gtype: GObject.GType<JobPrint>;

            // Fields

            page: number;

            // Constructors

            constructor(properties?: Partial<JobPrint.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): JobPrint;

            // Methods

            set_cairo(cr: cairo.Context): void;
            set_page(page: number): void;
        }

        module JobRender {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobRender extends Job {
            static $gtype: GObject.GType<JobRender>;

            // Fields

            page: number;
            rotation: number;
            scale: number;
            page_ready: boolean;
            target_width: number;
            target_height: number;
            include_selection: boolean;
            selection_points: EvinceDocument.Rectangle;
            selection_style: EvinceDocument.SelectionStyle;
            base: Gdk.Color;
            text: Gdk.Color;

            // Constructors

            constructor(properties?: Partial<JobRender.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: EvinceDocument.Document,
                page: number,
                rotation: number,
                scale: number,
                width: number,
                height: number,
            ): JobRender;

            // Methods

            set_selection_info(
                selection_points: EvinceDocument.Rectangle,
                selection_style: EvinceDocument.SelectionStyle | null,
                text: Gdk.Color,
                base: Gdk.Color,
            ): void;
        }

        module JobSave {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobSave extends Job {
            static $gtype: GObject.GType<JobSave>;

            // Fields

            uri: string;
            document_uri: string;

            // Constructors

            constructor(properties?: Partial<JobSave.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document, uri: string, document_uri: string): JobSave;
        }

        module JobThumbnail {
            // Constructor properties interface

            interface ConstructorProps extends Job.ConstructorProps {}
        }

        class JobThumbnail extends Job {
            static $gtype: GObject.GType<JobThumbnail>;

            // Fields

            page: number;
            rotation: number;
            scale: number;
            target_width: number;
            target_height: number;
            thumbnail: GdkPixbuf.Pixbuf;
            has_frame: boolean;
            format: JobThumbnailFormat;

            // Constructors

            constructor(properties?: Partial<JobThumbnail.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: EvinceDocument.Document,
                page: number,
                rotation: number,
                scale: number,
            ): JobThumbnail;

            static new_with_target_size(
                document: EvinceDocument.Document,
                page: number,
                rotation: number,
                target_width: number,
                target_height: number,
            ): JobThumbnail;

            // Methods

            set_has_frame(has_frame: boolean): void;
            /**
             * Set the desired output format for the generated thumbnail
             * @param format a #EvJobThumbnailFormat
             */
            set_output_format(format: JobThumbnailFormat | null): void;
        }

        module PrintOperation {
            // Signal callback interfaces

            interface BeginPrint {
                (): void;
            }

            interface Done {
                (object: Gtk.PrintOperationResult): void;
            }

            interface StatusChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                document: EvinceDocument.Document;
            }
        }

        abstract class PrintOperation extends GObject.Object {
            static $gtype: GObject.GType<PrintOperation>;

            // Properties

            set document(val: EvinceDocument.Document);

            // Constructors

            constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](document: EvinceDocument.Document): PrintOperation;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'begin-print', callback: (_source: this) => void): number;
            connect_after(signal: 'begin-print', callback: (_source: this) => void): number;
            emit(signal: 'begin-print'): void;
            connect(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;
            connect_after(signal: 'done', callback: (_source: this, object: Gtk.PrintOperationResult) => void): number;
            emit(signal: 'done', object: Gtk.PrintOperationResult): void;
            connect(signal: 'status-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'status-changed', callback: (_source: this) => void): number;
            emit(signal: 'status-changed'): void;

            // Static methods

            static exists_for_document(document: EvinceDocument.Document): boolean;

            // Methods

            cancel(): void;
            get_default_page_setup(): Gtk.PageSetup;
            get_embed_page_setup(): boolean;
            get_error(): void;
            get_job_name(): string;
            get_print_settings(): Gtk.PrintSettings;
            get_progress(): number;
            get_status(): string;
            run(parent: Gtk.Window): void;
            set_current_page(current_page: number): void;
            set_default_page_setup(page_setup: Gtk.PageSetup): void;
            set_embed_page_setup(embed: boolean): void;
            set_job_name(job_name: string): void;
            set_print_settings(print_settings: Gtk.PrintSettings): void;
        }

        module View {
            // Signal callback interfaces

            interface Activate {
                (): void;
            }

            interface AnnotAdded {
                (object: EvinceDocument.Annotation): void;
            }

            interface AnnotCancelAdd {
                (): void;
            }

            interface AnnotChanged {
                (object: EvinceDocument.Annotation): void;
            }

            interface AnnotRemoved {
                (object: EvinceDocument.Annotation): void;
            }

            interface CursorMoved {
                (object: number, p0: number): void;
            }

            interface ExternalLink {
                (object: GObject.Object): void;
            }

            interface HandleLink {
                (object: number, p0: GObject.Object): void;
            }

            interface LayersChanged {
                (): void;
            }

            interface MoveCursor {
                (object: Gtk.MovementStep, p0: number, p1: boolean): boolean;
            }

            interface Popup {
                (object?: any | null): void;
            }

            interface Scroll {
                (object: Gtk.ScrollType, p0: Gtk.Orientation): void;
            }

            interface SelectionChanged {
                (): void;
            }

            interface SyncSource {
                (object: EvinceDocument.SourceLink): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Container.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps,
                    Gtk.Scrollable.ConstructorProps {
                can_zoom_in: boolean;
                canZoomIn: boolean;
                can_zoom_out: boolean;
                canZoomOut: boolean;
                is_loading: boolean;
                isLoading: boolean;
            }
        }

        class View extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
            static $gtype: GObject.GType<View>;

            // Properties

            get can_zoom_in(): boolean;
            get canZoomIn(): boolean;
            get can_zoom_out(): boolean;
            get canZoomOut(): boolean;
            /**
             * Allows to implement a custom notification system.
             */
            get is_loading(): boolean;
            /**
             * Allows to implement a custom notification system.
             */
            get isLoading(): boolean;

            // Constructors

            constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): View;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'activate', callback: (_source: this) => void): number;
            connect_after(signal: 'activate', callback: (_source: this) => void): number;
            emit(signal: 'activate'): void;
            connect(
                signal: 'annot-added',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            connect_after(
                signal: 'annot-added',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            emit(signal: 'annot-added', object: EvinceDocument.Annotation): void;
            connect(signal: 'annot-cancel-add', callback: (_source: this) => void): number;
            connect_after(signal: 'annot-cancel-add', callback: (_source: this) => void): number;
            emit(signal: 'annot-cancel-add'): void;
            connect(
                signal: 'annot-changed',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            connect_after(
                signal: 'annot-changed',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            emit(signal: 'annot-changed', object: EvinceDocument.Annotation): void;
            connect(
                signal: 'annot-removed',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            connect_after(
                signal: 'annot-removed',
                callback: (_source: this, object: EvinceDocument.Annotation) => void,
            ): number;
            emit(signal: 'annot-removed', object: EvinceDocument.Annotation): void;
            connect(signal: 'cursor-moved', callback: (_source: this, object: number, p0: number) => void): number;
            connect_after(
                signal: 'cursor-moved',
                callback: (_source: this, object: number, p0: number) => void,
            ): number;
            emit(signal: 'cursor-moved', object: number, p0: number): void;
            connect(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;
            connect_after(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;
            emit(signal: 'external-link', object: GObject.Object): void;
            connect(
                signal: 'handle-link',
                callback: (_source: this, object: number, p0: GObject.Object) => void,
            ): number;
            connect_after(
                signal: 'handle-link',
                callback: (_source: this, object: number, p0: GObject.Object) => void,
            ): number;
            emit(signal: 'handle-link', object: number, p0: GObject.Object): void;
            connect(signal: 'layers-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'layers-changed', callback: (_source: this) => void): number;
            emit(signal: 'layers-changed'): void;
            connect(
                signal: 'move-cursor',
                callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean,
            ): number;
            connect_after(
                signal: 'move-cursor',
                callback: (_source: this, object: Gtk.MovementStep, p0: number, p1: boolean) => boolean,
            ): number;
            emit(signal: 'move-cursor', object: Gtk.MovementStep, p0: number, p1: boolean): void;
            connect(signal: 'popup', callback: (_source: this, object: any | null) => void): number;
            connect_after(signal: 'popup', callback: (_source: this, object: any | null) => void): number;
            emit(signal: 'popup', object?: any | null): void;
            connect(
                signal: 'scroll',
                callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => void,
            ): number;
            connect_after(
                signal: 'scroll',
                callback: (_source: this, object: Gtk.ScrollType, p0: Gtk.Orientation) => void,
            ): number;
            emit(signal: 'scroll', object: Gtk.ScrollType, p0: Gtk.Orientation): void;
            connect(signal: 'selection-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'selection-changed', callback: (_source: this) => void): number;
            emit(signal: 'selection-changed'): void;
            connect(
                signal: 'sync-source',
                callback: (_source: this, object: EvinceDocument.SourceLink) => void,
            ): number;
            connect_after(
                signal: 'sync-source',
                callback: (_source: this, object: EvinceDocument.SourceLink) => void,
            ): number;
            emit(signal: 'sync-source', object: EvinceDocument.SourceLink): void;

            // Methods

            /**
             * Adds a Text Markup annotation (defaulting to a 'highlight' one) to
             * the currently selected text on the document.
             *
             * When the selected text spans more than one page, it will add a
             * corresponding annotation for each page that contains selected text.
             * @returns %TRUE if annotations were added successfully, %FALSE otherwise.
             */
            add_text_markup_annotation_for_selected_text(): boolean;
            autoscroll_start(): void;
            autoscroll_stop(): void;
            begin_add_annotation(annot_type: EvinceDocument.AnnotationType | null): void;
            cancel_add_annotation(): void;
            copy(): void;
            copy_link_address(action: EvinceDocument.LinkAction): void;
            current_event_is_type(type: Gdk.EventType | null): boolean;
            find_cancel(): void;
            find_next(): void;
            find_previous(): void;
            /**
             * Restart the current search operation from the given `page`.
             * @param page a page index
             */
            find_restart(page: number): void;
            find_search_changed(): void;
            find_set_highlight_search(value: boolean): void;
            /**
             * FIXME
             * @param page
             * @param result
             */
            find_set_result(page: number, result: number): void;
            find_started(job: JobFind): void;
            focus_annotation(annot_mapping: EvinceDocument.Mapping): void;
            get_allow_links_change_zoom(): boolean;
            get_enable_spellchecking(): boolean;
            get_has_selection(): boolean;
            get_page_extents(page: number, page_area: Gdk.Rectangle, border: Gtk.Border): boolean;
            get_page_extents_for_border(page: number, border: Gtk.Border, page_area: Gdk.Rectangle): boolean;
            /**
             * Returns a pointer to a constant string containing the selected
             * text in the view.
             *
             * The value returned may be NULL if there is no selected text.
             * @returns The string representing selected text.
             */
            get_selected_text(): string;
            handle_link(link: EvinceDocument.Link): void;
            hide_cursor(): void;
            highlight_forward_search(link: EvinceDocument.SourceLink): void;
            is_caret_navigation_enabled(): boolean;
            next_page(): boolean;
            previous_page(): boolean;
            reload(): void;
            remove_annotation(annot: EvinceDocument.Annotation): void;
            scroll(scroll: Gtk.ScrollType | null, horizontal: boolean): void;
            select_all(): void;
            set_allow_links_change_zoom(allowed: boolean): void;
            set_caret_cursor_position(page: number, offset: number): void;
            /**
             * Enables or disables caret navigation mode for the document.
             * @param enabled whether to enable caret navigation mode
             */
            set_caret_navigation_enabled(enabled: boolean): void;
            set_enable_spellchecking(spellcheck: boolean): void;
            set_loading(loading: boolean): void;
            set_model(model: DocumentModel): void;
            /**
             * Sets the maximum size in bytes that will be used to cache
             * rendered pages. Use 0 to disable caching rendered pages.
             *
             * Note that this limit doesn't affect the current visible page range,
             * which will always be rendered. In order to limit the total memory used
             * you have to use ev_document_model_set_max_scale() too.
             * @param cache_size size in bytes
             */
            set_page_cache_size(cache_size: number): void;
            show_cursor(): void;
            supports_caret_navigation(): boolean;
            zoom_in(): void;
            zoom_out(): void;

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

        module ViewPresentation {
            // Signal callback interfaces

            interface ChangePage {
                (object: Gtk.ScrollType): void;
            }

            interface ExternalLink {
                (object: GObject.Object): void;
            }

            interface Finished {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends Gtk.Widget.ConstructorProps,
                    Atk.ImplementorIface.ConstructorProps,
                    Gtk.Buildable.ConstructorProps {
                current_page: number;
                currentPage: number;
                document: EvinceDocument.Document;
                inverted_colors: boolean;
                invertedColors: boolean;
                rotation: number;
            }
        }

        class ViewPresentation extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
            static $gtype: GObject.GType<ViewPresentation>;

            // Properties

            get current_page(): number;
            set current_page(val: number);
            get currentPage(): number;
            set currentPage(val: number);
            set document(val: EvinceDocument.Document);
            set inverted_colors(val: boolean);
            set invertedColors(val: boolean);
            get rotation(): number;
            set rotation(val: number);

            // Constructors

            constructor(properties?: Partial<ViewPresentation.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                document: EvinceDocument.Document,
                current_page: number,
                rotation: number,
                inverted_colors: boolean,
            ): ViewPresentation;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;
            connect_after(signal: 'change-page', callback: (_source: this, object: Gtk.ScrollType) => void): number;
            emit(signal: 'change-page', object: Gtk.ScrollType): void;
            connect(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;
            connect_after(signal: 'external-link', callback: (_source: this, object: GObject.Object) => void): number;
            emit(signal: 'external-link', object: GObject.Object): void;
            connect(signal: 'finished', callback: (_source: this) => void): number;
            connect_after(signal: 'finished', callback: (_source: this) => void): number;
            emit(signal: 'finished'): void;

            // Methods

            get_current_page(): number;
            get_rotation(): number;
            next_page(): void;
            previous_page(): void;
            set_rotation(rotation: number): void;

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

        type DocumentModelClass = typeof DocumentModel;
        type JobAnnotsClass = typeof JobAnnots;
        type JobAttachmentsClass = typeof JobAttachments;
        type JobClass = typeof Job;
        type JobExportClass = typeof JobExport;
        type JobFindClass = typeof JobFind;
        type JobFontsClass = typeof JobFonts;
        type JobLayersClass = typeof JobLayers;
        type JobLinksClass = typeof JobLinks;
        type JobLoadClass = typeof JobLoad;
        type JobLoadFdClass = typeof JobLoadFd;
        type JobLoadGFileClass = typeof JobLoadGFile;
        type JobLoadStreamClass = typeof JobLoadStream;
        type JobPageDataClass = typeof JobPageData;
        type JobPrintClass = typeof JobPrint;
        type JobRenderClass = typeof JobRender;
        type JobSaveClass = typeof JobSave;
        type JobThumbnailClass = typeof JobThumbnail;
        type PrintOperationClass = typeof PrintOperation;
        type ViewClass = typeof View;
        type ViewPresentationClass = typeof ViewPresentation;
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

    export default EvinceView;
}

declare module 'gi://EvinceView' {
    import EvinceView30 from 'gi://EvinceView?version=3.0';
    export default EvinceView30;
}
// END
