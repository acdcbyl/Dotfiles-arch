/// <reference path="./icalglib-3.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./edataserver-1.2.d.ts" />
/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./camel-1.2.d.ts" />
/// <reference path="./ecal-2.0.d.ts" />
/// <reference path="./ebackend-1.2.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EDataCal?version=2.0' {
    // Module dependencies
    import type ICalGLib from 'gi://ICalGLib?version=3.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type EDataServer from 'gi://EDataServer?version=1.2';
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Soup from 'gi://Soup?version=3.0';
    import type Json from 'gi://Json?version=1.0';
    import type Camel from 'gi://Camel?version=1.2';
    import type ECal from 'gi://ECal?version=2.0';
    import type EBackend from 'gi://EBackend?version=1.2';

    export namespace EDataCal {
        /**
         * EDataCal-2.0
         */

        /**
         * This environment variable configures where the calendar
         * factory loads its backend modules from.
         */
        const EDS_CALENDAR_MODULES: string;
        /**
         * This environment variable configures where the calendar
         * factory subprocess is located in.
         */
        const EDS_SUBPROCESS_CAL_PATH: string;
        const INTERVALTREE_DEBUG: number;
        const LIBICAL_GLIB_UNSTABLE_API: number;
        /**
         * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
         * or e_cal_cache_offline_change_copy().
         * @param change an #ECalCacheOfflineChange
         */
        function cal_cache_offline_change_free(change?: any | null): void;
        /**
         * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
         * or e_cal_cache_search_data_copy().
         * @param ptr an #ECalCacheSearchData
         */
        function cal_cache_search_data_free(ptr?: any | null): void;
        /**
         * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
         * or e_cal_meta_backend_info_copy().
         * @param ptr an #ECalMetaBackendInfo
         */
        function cal_meta_backend_info_free(ptr?: any | null): void;
        function cal_queue_free_strings(queue: GLib.Queue): void;
        interface CalBackendCustomOpFunc {
            (cal_backend: CalBackend, cancellable?: Gio.Cancellable | null): void;
        }
        interface CalBackendForeachViewFunc {
            (backend: CalBackend, view: DataCalView): boolean;
        }
        interface CalCacheSearchFunc {
            (
                cal_cache: CalCache,
                uid: string,
                rid: string | null,
                revision: string,
                object: string,
                extra: string,
                custom_flags: number,
                offline_state: EBackend.OfflineState,
            ): boolean;
        }
        module CalBackend {
            // Signal callback interfaces

            interface Closed {
                (sender: string): void;
            }

            interface Shutdown {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends EBackend.Backend.ConstructorProps, ECal.TimezoneCache.ConstructorProps {
                cache_dir: string;
                cacheDir: string;
                kind: number;
                proxy_resolver: Gio.ProxyResolver;
                proxyResolver: Gio.ProxyResolver;
                registry: EDataServer.SourceRegistry;
                writable: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CalBackend extends EBackend.Backend implements ECal.TimezoneCache {
            static $gtype: GObject.GType<CalBackend>;

            // Properties

            get cache_dir(): string;
            set cache_dir(val: string);
            get cacheDir(): string;
            set cacheDir(val: string);
            get kind(): number;
            get proxy_resolver(): Gio.ProxyResolver;
            get proxyResolver(): Gio.ProxyResolver;
            get registry(): EDataServer.SourceRegistry;
            get writable(): boolean;
            set writable(val: boolean);

            // Constructors

            constructor(properties?: Partial<CalBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'closed', callback: (_source: this, sender: string) => void): number;
            connect_after(signal: 'closed', callback: (_source: this, sender: string) => void): number;
            emit(signal: 'closed', sender: string): void;
            connect(signal: 'shutdown', callback: (_source: this) => void): number;
            connect_after(signal: 'shutdown', callback: (_source: this) => void): number;
            emit(signal: 'shutdown'): void;

            // Static methods

            /**
             * Retrieve the default mail account as stored in Evolution configuration.
             * @param registry an #ESourceRegistry
             * @param address placeholder for default address
             * @param name placeholder for name
             */
            static mail_account_get_default(
                registry: EDataServer.SourceRegistry,
                address: string,
                name: string,
            ): boolean;
            /**
             * Checks that a mail account is valid, and returns its name.
             * @param registry an #ESourceRegistry
             * @param user user name for the account to check
             * @param name placeholder for the account name
             */
            static mail_account_is_valid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean;
            static user_declined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean;

            // Virtual methods

            /**
             * A signal notifying that the backend was closed
             * @param sender
             */
            vfunc_closed(sender: string): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param tzobject
             */
            vfunc_impl_add_timezone(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                tzobject: string,
            ): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param uid
             * @param rid
             * @param auid
             * @param opflags
             */
            vfunc_impl_discard_alarm(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
                auid: string,
                opflags: ECal.OperationFlags,
            ): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param uid
             * @param rid
             */
            vfunc_impl_get_attachment_uris(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
            ): void;
            /**
             * Fetch a property value by name from the backend
             * @param prop_name
             */
            vfunc_impl_get_backend_property(prop_name: string): string;
            /**
             * Fetch a calendar object
             * @param cal
             * @param opid
             * @param cancellable
             * @param uid
             * @param rid
             */
            vfunc_impl_get_object(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
            ): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param sexp
             */
            vfunc_impl_get_object_list(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                sexp: string,
            ): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param tzid
             */
            vfunc_impl_get_timezone(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                tzid: string,
            ): void;
            /**
             * Open the backend
             * @param cal
             * @param opid
             * @param cancellable
             */
            vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param calobj
             * @param opflags
             */
            vfunc_impl_receive_objects(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                calobj: string,
                opflags: ECal.OperationFlags,
            ): void;
            /**
             * Refresh the backend
             * @param cal
             * @param opid
             * @param cancellable
             */
            vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;
            /**
             * FIXME: Document me
             * @param cal
             * @param opid
             * @param cancellable
             * @param calobj
             * @param opflags
             */
            vfunc_impl_send_objects(
                cal: DataCal,
                opid: number,
                cancellable: Gio.Cancellable | null,
                calobj: string,
                opflags: ECal.OperationFlags,
            ): void;
            /**
             * Start up the specified view
             * @param view
             */
            vfunc_impl_start_view(view: DataCalView): void;
            /**
             * Stop the specified view
             * @param view
             */
            vfunc_impl_stop_view(view: DataCalView): void;
            /**
             * A signal notifying that the backend is being shut down
             */
            vfunc_shutdown(): void;

            // Methods

            /**
             * Asynchronously adds the timezone described by `tzobject` to `backend`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_add_timezone_finish() to get the result of
             * the operation.
             * @param tzobject an iCalendar VTIMEZONE string
             * @param cancellable optional #GCancellable object, or %NULL
             */
            add_timezone(tzobject: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously adds the timezone described by `tzobject` to `backend`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_add_timezone_finish() to get the result of
             * the operation.
             * @param tzobject an iCalendar VTIMEZONE string
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            add_timezone(
                tzobject: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously adds the timezone described by `tzobject` to `backend`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_add_timezone_finish() to get the result of
             * the operation.
             * @param tzobject an iCalendar VTIMEZONE string
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            add_timezone(
                tzobject: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            // Conflicted with ECal.TimezoneCache.add_timezone
            add_timezone(...args: never[]): any;
            /**
             * Finishes the operation started with e_cal_backend_add_timezone().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            add_timezone_finish(result: Gio.AsyncResult): boolean;
            /**
             * Adds the timezone described by `tzobject` to `backend`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param tzobject an iCalendar VTIMEZONE string
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Adds a view to the list of live views being run by the given backend.
             * Doing so means that any listener on the view will get notified of any
             * change that affect the live view.
             * @param view An #EDataCalView object.
             */
            add_view(view: DataCalView): void;
            create_cache_filename(uid: string, filename: string | null, fileindex: number): string;
            /**
             * Asynchronously creates one or more new iCalendar objects from `calobjs`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_create_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            create_objects(
                calobjs: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously creates one or more new iCalendar objects from `calobjs`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_create_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisifed
             */
            create_objects(
                calobjs: string,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates one or more new iCalendar objects from `calobjs`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_create_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisifed
             */
            create_objects(
                calobjs: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_create_objects().
             *
             * A unique ID string for each newly-created object is deposited in `out_uids`.
             * Free the returned ID strings with g_free() when finished with them.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @param out_uids a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean;
            /**
             * Creates one or more new iCalendar objects from `calobjs,` and deposits
             * the unique ID string for each newly-created object in `out_uids`.
             *
             * Free the returned ID strings with g_free() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param opflags bit-or of #ECalOperationFlags
             * @param out_uids a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            create_objects_sync(
                calobjs: string,
                opflags: ECal.OperationFlags | null,
                out_uids: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
             * from the iCalendar object identified by `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_discard_alarm_finish() to get the result of
             * the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param alarm_uid a unique ID for an iCalendar VALARM object
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                alarm_uid: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
             * from the iCalendar object identified by `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_discard_alarm_finish() to get the result of
             * the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param alarm_uid a unique ID for an iCalendar VALARM object
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                alarm_uid: string,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously discards the VALARM object with a unique ID of `alarm_uid`
             * from the iCalendar object identified by `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_discard_alarm_finish() to get the result of
             * the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param alarm_uid a unique ID for an iCalendar VALARM object
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            discard_alarm(
                uid: string,
                rid: string | null,
                alarm_uid: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_discard_alarm().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            discard_alarm_finish(result: Gio.AsyncResult): boolean;
            /**
             * Discards the VALARM object with a unique ID of `alarm_uid` from the
             * iCalendar object identified by `uid` and, optionally, `rid`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param alarm_uid a unique ID for an iCalendar VALARM object
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            discard_alarm_sync(
                uid: string,
                rid: string | null,
                alarm_uid: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Thread-safe variation of e_cal_backend_get_cache_dir().
             * Use this function when accessing `backend` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ECalBackend:cache-dir
             */
            dup_cache_dir(): string;
            /**
             * Calls `func` for each existing view (as returned by e_cal_backend_list_views()).
             * The `func` can return %FALSE to stop early.
             * @param func an #ECalBackendForeachViewFunc function to call
             * @returns whether the call had been stopped by @func
             */
            foreach_view(func: CalBackendForeachViewFunc): boolean;
            /**
             * Notifies each view of the `backend` about progress. When `only_completed_views`
             * is %TRUE, notifies only completed views.
             * @param only_completed_views whether notify in completed views only
             * @param percent percent complete
             * @param message message describing the operation in progress, or %NULL
             */
            foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void;
            /**
             * Asynchronously inspects the iCalendar object specified by `uid` and,
             * optionally, `rid` for attachments.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_attachment_uris_finish() to get the result of the
             * operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_attachment_uris(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously inspects the iCalendar object specified by `uid` and,
             * optionally, `rid` for attachments.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_attachment_uris_finish() to get the result of the
             * operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_attachment_uris(
                uid: string,
                rid: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously inspects the iCalendar object specified by `uid` and,
             * optionally, `rid` for attachments.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_attachment_uris_finish() to get the result of the
             * operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_attachment_uris(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_get_attachment_uris().
             *
             * The requested attachment URI strings are deposited in `out_attachment_uris`.
             * Free the returned strings with g_free() when finished with them.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param result a #GAsyncResult
             * @param out_attachment_uris a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean;
            /**
             * Inspects the iCalendar object specified by `uid` and, optionally, `rid`
             * for attachments and deposits a URI string for each attachment in
             * `out_attachment_uris`.  Free the returned strings with g_free() when
             * finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param out_attachment_uris a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_attachment_uris_sync(
                uid: string,
                rid: string | null,
                out_attachment_uris: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Obtains the value of the backend property named `prop_name`.
             * Freed the returned string with g_free() when finished with it.
             * @param prop_name a backend property name
             * @returns the value for @prop_name
             */
            get_backend_property(prop_name: string): string;
            /**
             * Returns the cache directory path used by `backend`.
             * @returns the cache directory path
             */
            get_cache_dir(): string;
            /**
             * Asynchronously obtains a free/busy object for the list of `users` in the
             * time interval between `start` and `end`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_free_busy_finish() to get the result of
             * the operation.
             * @param start start time
             * @param end end time
             * @param users a %NULL-terminated array of user strings
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously obtains a free/busy object for the list of `users` in the
             * time interval between `start` and `end`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_free_busy_finish() to get the result of
             * the operation.
             * @param start start time
             * @param end end time
             * @param users a %NULL-terminated array of user strings
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains a free/busy object for the list of `users` in the
             * time interval between `start` and `end`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_free_busy_finish() to get the result of
             * the operation.
             * @param start start time
             * @param end end time
             * @param users a %NULL-terminated array of user strings
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_free_busy(
                start: never,
                end: never,
                users: string[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_get_free_busy().
             *
             * The free/busy results can be returned through the
             * e_data_cal_report_free_busy_data() function asynchronously. The out_freebusy
             * will contain all the returned data, possibly again, thus the client is
             * responsible for the data merge, if needed.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @param out_freebusy iCalendar strings with overall returned Free/Busy data
             * @returns %TRUE on success, %FALSE on failure
             */
            get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean;
            /**
             * Obtains a free/busy object for the list of `users` in the time interval
             * between `start` and `end`.
             *
             * The free/busy results can be returned through the
             * e_data_cal_report_free_busy_data() function asynchronously. The out_freebusy
             * will contain all the returned data, possibly again, thus the client is
             * responsible for the data merge, if needed.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param start start time
             * @param end end time
             * @param users a %NULL-terminated array of user strings
             * @param out_freebusy iCalendar strings with overall returned Free/Busy data
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure.
             */
            get_free_busy_sync(
                start: never,
                end: never,
                users: string[],
                out_freebusy: string[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Gets the kind of components the given backend stores.
             * @returns The kind of components for this backend.
             */
            get_kind(): ICalGLib.ComponentKind;
            /**
             * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_finish() to get the result of the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_object(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_finish() to get the result of the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_object(
                uid: string,
                rid: string | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains an #ECalComponent by its `uid` and, optionally, `rid`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_finish() to get the result of the operation.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_object(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes the operation started with e_cal_backend_get_object().
             *
             * The returned string is an iCalendar object describing either single component
             * or a vCalendar object, which includes also detached instances. It should be
             * freed when no longer needed.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param result a #GAsyncResult
             * @returns an #ECalComponent, or %NULL on error
             */
            get_object_finish(result: Gio.AsyncResult): string;
            /**
             * Asynchronously obtains a set of iCalendar instances which satisfy
             * the criteria specified in `query`.
             *
             * When the operation in finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_object_list(query: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously obtains a set of iCalendar instances which satisfy
             * the criteria specified in `query`.
             *
             * When the operation in finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_object_list(
                query: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains a set of iCalendar instances which satisfy
             * the criteria specified in `query`.
             *
             * When the operation in finished, `callback` will be called.  You can then
             * call e_cal_backend_get_object_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_object_list(
                query: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_get_object_list().
             *
             * The matching iCalendar instances are deposited in `out_objects`.
             * The returned instances should be freed with g_free() when finished with them.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param result a #GAsyncResult
             * @param out_objects a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean;
            /**
             * Obtains a set of iCalendar string instances which satisfy the criteria
             * specified in `query,` and deposits them in `out_objects`.
             *
             * The returned instances should be freed with g_free() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param query a search query in S-expression format
             * @param out_objects a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Obtains an iCalendar string for an object identified by its `uid` and,
             * optionally, `rid`.
             *
             * The returned string should be freed with g_free() when finished with it.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param uid a unique ID for an iCalendar object
             * @param rid a recurrence ID, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #ECalComponent, or %NULL on error
             */
            get_object_sync(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): string;
            /**
             * Returns the data source registry to which #EBackend:source belongs.
             * @returns an #ESourceRegistry
             */
            get_registry(): EDataServer.SourceRegistry;
            /**
             * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_timezone_finish() to get the result of
             * the operation.
             * @param tzid a unique ID for an iCalendar VTIMEZONE object
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_timezone_finish() to get the result of
             * the operation.
             * @param tzid a unique ID for an iCalendar VTIMEZONE object
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_timezone(
                tzid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains the VTIMEZONE object identified by `tzid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_cal_backend_get_timezone_finish() to get the result of
             * the operation.
             * @param tzid a unique ID for an iCalendar VTIMEZONE object
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_timezone(
                tzid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            // Conflicted with ECal.TimezoneCache.get_timezone
            get_timezone(...args: never[]): any;
            /**
             * Finishes the operation started with e_cal_backend_get_timezone().
             *
             * Free the returned string with g_free() when finished with it.
             *
             * If an error occurred, the function will set `error` and return %NULL.
             * @param result a #GAsyncResult
             * @returns an iCalendar string, or %NULL on error
             */
            get_timezone_finish(result: Gio.AsyncResult): string;
            /**
             * Obtains the VTIMEZONE object identified by `tzid`.  Free the returned
             * string with g_free() when finished with it.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param tzid a unique ID for an iCalendar VTIMEZONE object
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an iCalendar string, or %NULL on error
             */
            get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string;
            /**
             * Returns whether `backend` will accept changes to its data content.
             * @returns whether @backend is writable
             */
            get_writable(): boolean;
            /**
             * Checks if `backend'`s storage has been opened (and
             * authenticated, if necessary) and the backend itself
             * is ready for accessing. This property is changed automatically
             * after the `backend` is successfully opened.
             * @returns %TRUE if fully opened, %FALSE otherwise.
             */
            is_opened(): boolean;
            is_readonly(): boolean;
            /**
             * Returns a list of #EDataCalView instances added with
             * e_cal_backend_add_view().
             *
             * The views returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned list itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @returns a list of cal views
             */
            list_views(): DataCalView[];
            /**
             * Asynchronously modifies one or more iCalendar objects according to
             * `calobjs` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_modify_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            modify_objects(
                calobjs: string,
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously modifies one or more iCalendar objects according to
             * `calobjs` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_modify_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            modify_objects(
                calobjs: string,
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously modifies one or more iCalendar objects according to
             * `calobjs` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_modify_objects_finish() to get the result of the
             * operation.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            modify_objects(
                calobjs: string,
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_modify_objects().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            modify_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * Modifies one or more iCalendar objects according to `calobjs` and `mod`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param calobjs a %NULL-terminated array of iCalendar strings
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            modify_objects_sync(
                calobjs: string,
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Notifies each of the backend's listeners about a new object.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from ical strings sent over the bus.
             * @param component the newly created #ECalComponent
             */
            notify_component_created(component: ECal.Component): void;
            /**
             * Notifies each of the backend's listeners about a modified object.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from ical strings sent over the bus.
             * @param old_component the #ECalComponent before the modification
             * @param new_component the #ECalComponent after the modification
             */
            notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void;
            /**
             * Notifies each of the backend's listeners about a removed object.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from ical strings sent over the bus.
             * @param id the Id of the removed object
             * @param old_component the removed component
             * @param new_component the component after the removal. This only applies to recurrent appointments that had an instance removed. In that case, this function notifies a modification instead of a removal.
             */
            notify_component_removed(
                id: ECal.ComponentId,
                old_component: ECal.Component,
                new_component: ECal.Component,
            ): void;
            /**
             * Notifies each of the backend's listeners about an error
             * @param message Error message
             */
            notify_error(message: string): void;
            /**
             * Notifies client about property value change.
             * @param prop_name property name, which changed
             * @param prop_value new property value
             */
            notify_property_changed(prop_name: string, prop_value?: string | null): void;
            /**
             * Asynchronously "opens" the `backend`.  Opening a backend is something of
             * an outdated concept, but the operation is hanging around for a little
             * while longer.  This usually involves some custom initialization logic,
             * and testing of remote authentication if applicable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_open_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            open(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously "opens" the `backend`.  Opening a backend is something of
             * an outdated concept, but the operation is hanging around for a little
             * while longer.  This usually involves some custom initialization logic,
             * and testing of remote authentication if applicable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_open_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            open(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously "opens" the `backend`.  Opening a backend is something of
             * an outdated concept, but the operation is hanging around for a little
             * while longer.  This usually involves some custom initialization logic,
             * and testing of remote authentication if applicable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_open_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            open(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_open().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            open_finish(result: Gio.AsyncResult): boolean;
            /**
             * "Opens" the `backend`.  Opening a backend is something of an outdated
             * concept, but the operation is hanging around for a little while longer.
             * This usually involves some custom initialization logic, and testing of
             * remote authentication if applicable.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            open_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Obtains the #GTask for `opid`.
             *
             * <note>
             *   <para>
             *     This is a temporary function to serve #EDataCal's "respond"
             *     functions until they can be removed.  Nothing else should be
             *     calling this function.
             *   </para>
             * </note>
             * @param opid an operation ID given to #EDataCal
             * @returns a #GTask
             */
            prepare_for_completion(opid: number): Gio.Task;
            /**
             * Asynchronously receives the set of iCalendar objects specified by
             * `calobj`.  This is used for iTIP confirmation and cancellation messages
             * for scheduled meetings.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_receive_objects_finish() to get the result of the
             * operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            receive_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously receives the set of iCalendar objects specified by
             * `calobj`.  This is used for iTIP confirmation and cancellation messages
             * for scheduled meetings.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_receive_objects_finish() to get the result of the
             * operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            receive_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously receives the set of iCalendar objects specified by
             * `calobj`.  This is used for iTIP confirmation and cancellation messages
             * for scheduled meetings.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_receive_objects_finish() to get the result of the
             * operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            receive_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_receive_objects().
             *
             * If an error occurred, the function will set `error` and erturn %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            receive_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * Receives the set of iCalendar objects specified by `calobj`.  This is used
             * for iTIP confirmation and cancellation messages for scheduled meetings.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            receive_objects_sync(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Returns the #EDataCal for `backend`.  The #EDataCal is essentially
             * the glue between incoming D-Bus requests and `backend'`s native API.
             *
             * An #EDataCal should be set only once after `backend` is first created.
             * If an #EDataCal has not yet been set, the function returns %NULL.
             *
             * The returned #EDataCal is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns an #EDataCal, or %NULL
             */
            ref_data_cal(): DataCal | null;
            /**
             * Returns the #GProxyResolver for `backend` (if applicable), as indicated
             * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
             * or one of its ancestors.
             *
             * The returned #GProxyResolver is referenced for thread-safety and must
             * be unreferenced with g_object_unref() when finished with it.
             * @returns a #GProxyResolver, or %NULL
             */
            ref_proxy_resolver(): Gio.ProxyResolver | null;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_cal_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_cal_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            refresh(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_cal_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_cal_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_cal_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_cal_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the refresh initiation started with e_cal_backend_refresh().
             *
             * If an error occurred while initiating the refresh, the function will set
             * `error` and return %FALSE.  If the `backend` does not support refreshing,
             * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
             * %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            refresh_finish(result: Gio.AsyncResult): boolean;
            /**
             * Initiates a refresh for `backend,` if the `backend` supports refreshing.
             * The actual refresh operation completes on its own time.  This function
             * merely initiates the operation.
             *
             * If an error occrs while initiating the refresh, the function will set
             * `error` and return %FALSE.  If the `backend` does not support refreshing,
             * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
             * %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously removes one or more iCalendar objects according to
             * `component_ids` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_remove_objects_finish() to get the result of the
             * operation.
             * @param component_ids a #GList of #ECalComponentId structs
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            remove_objects(
                component_ids: ECal.ComponentId[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously removes one or more iCalendar objects according to
             * `component_ids` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_remove_objects_finish() to get the result of the
             * operation.
             * @param component_ids a #GList of #ECalComponentId structs
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove_objects(
                component_ids: ECal.ComponentId[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously removes one or more iCalendar objects according to
             * `component_ids` and `mod`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_remove_objects_finish() to get the result of the
             * operation.
             * @param component_ids a #GList of #ECalComponentId structs
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove_objects(
                component_ids: ECal.ComponentId[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_cal_backend_remove_objects().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            remove_objects_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes one or more iCalendar objects according to `component_ids` and `mod`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param component_ids a #GList of #ECalComponentId structs
             * @param mod modification type for recurrences
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            remove_objects_sync(
                component_ids: ECal.ComponentId[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes view from the list of live views for the backend.
             * @param view An #EDataCalView object, previously added with @ref e_cal_backend_add_view.
             */
            remove_view(view: DataCalView): void;
            /**
             * Schedules user function `func` to be run in a dedicated thread as
             * a blocking operation.
             *
             * The function adds its own reference to `use_cancellable,` if not %NULL.
             *
             * The error returned from `func` is propagated to client using
             * e_cal_backend_notify_error() function. If it's not desired,
             * then left the error unchanged and notify about errors manually.
             * @param use_cancellable an optional #GCancellable to use for @func
             * @param func a function to call in a dedicated thread
             * @param user_data_free optional destroy call back for @user_data
             */
            schedule_custom_operation(
                use_cancellable: Gio.Cancellable | null,
                func: CalBackendCustomOpFunc,
                user_data_free?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Asynchronously sends meeting information in `calobj`.  The `backend` may
             * modify `calobj` and send meeting information only to particular users.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_send_objects_finish() to get the result of the operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            send_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Asynchronously sends meeting information in `calobj`.  The `backend` may
             * modify `calobj` and send meeting information only to particular users.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_send_objects_finish() to get the result of the operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            send_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sends meeting information in `calobj`.  The `backend` may
             * modify `calobj` and send meeting information only to particular users.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_cal_backend_send_objects_finish() to get the result of the operation.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            send_objects(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes the operation started with e_cal_backend_send_objects().
             *
             * The function returns a string representation of a sent, or to be send,
             * vCalendar and deposits the list of users the meeting information was sent
             * to, or to be send to, in `out_users`.
             *
             * Free the returned pointer with g_free(), when no longer needed.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param result a #GAsyncResult
             * @param out_users a #GQueue in which to deposit results
             * @returns a newly allocated vCalendar string, or %NULL on error
             */
            send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string;
            /**
             * Sends meeting information in `calobj`.  The `backend` may modify `calobj`
             * and send meeting information only to particular users.  The function
             * returns the (maybe) modified `calobj` and deposits the list of users the
             * meeting information was sent (to be send) to in `out_users`.
             *
             * The returned pointer should be freed with g_free(), when no londer needed.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param calobj an iCalendar string
             * @param opflags bit-or of #ECalOperationFlags
             * @param out_users a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns a vCalendar string, or %NULL on error
             */
            send_objects_sync(
                calobj: string,
                opflags: ECal.OperationFlags | null,
                out_users: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Sets the cache directory path for use by `backend`.
             *
             * Note that #ECalBackend is initialized with a default cache directory
             * path which should suffice for most cases.  Backends should not override
             * the default path without good reason.
             * @param cache_dir a local cache directory path
             */
            set_cache_dir(cache_dir: string): void;
            /**
             * Sets the #EDataCal for `backend`.  The #EDataCal is essentially the
             * glue between incoming D-Bus requests and `backend'`s native API.
             *
             * An #EDataCal should be set only once after `backend` is first created.
             *
             * The `backend` adds its own reference on the `data_cal`.
             * @param data_cal an #EDataCal
             */
            set_data_cal(data_cal: DataCal): void;
            /**
             * Sets whether `backend` will accept changes to its data content.
             * @param writable whether @backend is writable
             */
            set_writable(writable: boolean): void;
            /**
             * Starts a new live view on the given backend.
             * @param view The view to be started.
             */
            start_view(view: DataCalView): void;
            /**
             * Stops a previously started live view on the given backend.
             * @param view The view to be stopped.
             */
            stop_view(view: DataCalView): void;

            // Inherited methods
            /**
             * Returns a list of #ICalTimezone instances that were explicitly added to
             * the `cache` through e_timezone_cache_add_timezone().  In particular, any
             * built-in time zone data that e_timezone_cache_get_timezone() may use to
             * match a TZID string is excluded from the returned list.
             *
             * Free the returned list with g_list_free().  The list elements are owned
             * by the `cache` and should not be modified or freed.
             * @returns a #GList of    #ICalTimezone instances
             */
            list_timezones(): ICalGLib.Timezone[];
            vfunc_timezone_added(zone: ICalGLib.Timezone): void;
            vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
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

        module CalBackendFactory {
            // Constructor properties interface

            interface ConstructorProps extends EBackend.BackendFactory.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class CalBackendFactory extends EBackend.BackendFactory {
            static $gtype: GObject.GType<CalBackendFactory>;

            // Constructors

            constructor(properties?: Partial<CalBackendFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module CalBackendSExp {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class CalBackendSExp extends GObject.Object {
            static $gtype: GObject.GType<CalBackendSExp>;

            // Constructors

            constructor(properties?: Partial<CalBackendSExp.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](text: string): CalBackendSExp;

            // Methods

            /**
             * Determines biggest time window given by expressions "occur-in-range" in sexp.
             * @param start Start of the time window will be stored here.
             * @param end End of the time window will be stored here.
             * @returns %TRUE on success, %FALSE otherwise
             */
            evaluate_occur_times(start: never, end: never): boolean;
            /**
             * Locks the `sexp`. Other threads cannot use it until
             * it's unlocked with e_cal_backend_sexp_unlock().
             */
            lock(): void;
            /**
             * Checks if `comp` matches `sexp`.
             * @param comp Component to match against the expression.
             * @param cache an #ETimezoneCache
             * @returns %TRUE if the component matches, %FALSE otherwise
             */
            match_comp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean;
            /**
             * Checks if `object` matches `sexp`.
             * @param object An iCalendar string.
             * @param cache an #ETimezoneCache
             * @returns %TRUE if the object matches, %FALSE otherwise
             */
            match_object(object: string, cache: ECal.TimezoneCache): boolean;
            /**
             * Retrieve the text expression for the given #ECalBackendSExp object.
             * @returns the text expression
             */
            text(): string;
            /**
             * Unlocks the `sexp,` previously locked by e_cal_backend_sexp_lock().
             */
            unlock(): void;
        }

        module CalBackendSync {
            // Constructor properties interface

            interface ConstructorProps extends CalBackend.ConstructorProps, ECal.TimezoneCache.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CalBackendSync extends CalBackend implements ECal.TimezoneCache {
            static $gtype: GObject.GType<CalBackendSync>;

            // Constructors

            constructor(properties?: Partial<CalBackendSync.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Add specified timezone
             * @param cal
             * @param cancellable
             * @param tzobject
             */
            vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;
            /**
             * Discard alarm
             * @param cal
             * @param cancellable
             * @param uid
             * @param rid
             * @param auid
             * @param opflags
             */
            vfunc_discard_alarm_sync(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
                auid: string,
                opflags: ECal.OperationFlags,
            ): void;
            /**
             * Get single object
             * @param cal
             * @param cancellable
             * @param uid
             * @param rid
             * @param calobj
             */
            vfunc_get_object_sync(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
                calobj: string,
            ): void;
            /**
             * Get specified timezone
             * @param cal
             * @param cancellable
             * @param tzid
             * @param tzobject
             */
            vfunc_get_timezone_sync(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                tzid: string,
                tzobject: string,
            ): void;
            /**
             * Open the calendar
             * @param cal
             * @param cancellable
             */
            vfunc_open_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
            /**
             * Receive objects
             * @param cal
             * @param cancellable
             * @param calobj
             * @param opflags
             */
            vfunc_receive_objects_sync(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                calobj: string,
                opflags: ECal.OperationFlags,
            ): void;
            /**
             * Refresh the calendar
             * @param cal
             * @param cancellable
             */
            vfunc_refresh_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;

            // Methods

            /**
             * Calls the add_timezone_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param tzobject VTIMEZONE object to be added.
             */
            add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;
            // Conflicted with EDataCal.CalBackend.add_timezone
            add_timezone(...args: never[]): any;
            /**
             * Calls the create_objects_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param calobjs The objects to be added.
             * @param opflags bit-or of #ECalOperationFlags
             */
            create_objects(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                calobjs: string[],
                opflags: ECal.OperationFlags | null,
            ): [string[], ECal.Component[]];
            // Conflicted with EDataCal.CalBackend.create_objects
            create_objects(...args: never[]): any;
            /**
             * Calls the discard_alarm_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param uid Unique id of the calendar object.
             * @param rid Recurrence id of the calendar object.
             * @param auid Alarm ID to remove.
             * @param opflags bit-or of #ECalOperationFlags
             */
            discard_alarm(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
                auid: string,
                opflags: ECal.OperationFlags | null,
            ): void;
            // Conflicted with EDataCal.CalBackend.discard_alarm
            discard_alarm(...args: never[]): any;
            /**
             * Calls the get_attachment_uris_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param uid Unique id of the calendar object.
             * @param rid Recurrence id of the calendar object.
             * @param attachments Placeholder for list of returned attachment uris.
             */
            get_attachment_uris(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                uid: string,
                rid: string,
                attachments: string[],
            ): void;
            // Conflicted with EDataCal.CalBackend.get_attachment_uris
            get_attachment_uris(...args: never[]): any;
            /**
             * Calls the get_free_busy_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param users List of users to get F/B info from.
             * @param start Time range start.
             * @param end Time range end.
             */
            get_free_busy(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                users: string[],
                start: never,
                end: never,
            ): string[];
            // Conflicted with EDataCal.CalBackend.get_free_busy
            get_free_busy(...args: never[]): any;
            /**
             * Calls the get_object_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param uid UID of the object to get.
             * @param rid Recurrence ID of the specific instance to get, or %NULL if    getting the master object.
             */
            get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string | null): string;
            // Conflicted with EDataCal.CalBackend.get_object
            get_object(...args: never[]): any;
            /**
             * Calls the get_object_list_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param sexp Search query.
             */
            get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): string[];
            // Conflicted with EDataCal.CalBackend.get_object_list
            get_object_list(...args: never[]): any;
            /**
             * Calls the get_timezone_sync method on the given backend.
             * This method is not mandatory on the backend, because here
             * is used internal_get_timezone call to fetch timezone from
             * it and that is transformed to a string. In other words,
             * any object deriving from ECalBackendSync can implement only
             * internal_get_timezone and can skip implementation of
             * get_timezone_sync completely.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param tzid ID of the timezone to retrieve.
             * @param tzobject Placeholder for the returned timezone.
             */
            get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void;
            // Conflicted with EDataCal.CalBackend.get_timezone
            get_timezone(...args: never[]): any;
            /**
             * Calls the modify_objects_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param calobjs Objects to be modified.
             * @param mod Type of modification to be done.
             * @param opflags bit-or of #ECalOperationFlags
             */
            modify_objects(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                calobjs: string[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
            ): [ECal.Component[], ECal.Component[]];
            // Conflicted with EDataCal.CalBackend.modify_objects
            modify_objects(...args: never[]): any;
            /**
             * Calls the open_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation or just create it when it does not exist.
             */
            open(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
            // Conflicted with EDataCal.CalBackend.open
            open(...args: never[]): any;
            /**
             * Calls the receive_objects_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param calobj iCalendar object to receive.
             * @param opflags bit-or of #ECalOperationFlags
             */
            receive_objects(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                calobj: string,
                opflags: ECal.OperationFlags | null,
            ): void;
            // Conflicted with EDataCal.CalBackend.receive_objects
            receive_objects(...args: never[]): any;
            /**
             * Calls the refresh_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             */
            refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
            // Conflicted with EDataCal.CalBackend.refresh
            refresh(...args: never[]): any;
            /**
             * Calls the remove_objects_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param ids List of #ECalComponentId objects identifying the objects to remove.
             * @param mod Type of removal.
             * @param opflags bit-or of #ECalOperationFlags
             */
            remove_objects(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                ids: ECal.ComponentId[],
                mod: ECal.ObjModType | null,
                opflags: ECal.OperationFlags | null,
            ): [ECal.Component[], ECal.Component[]];
            // Conflicted with EDataCal.CalBackend.remove_objects
            remove_objects(...args: never[]): any;
            /**
             * Calls the send_objects_sync method on the given backend.
             * @param cal An EDataCal object.
             * @param cancellable a #GCancellable for the operation
             * @param calobj The iCalendar object to send.
             * @param opflags bit-or of #ECalOperationFlags
             * @param users List of users to send notifications to.
             */
            send_objects(
                cal: DataCal,
                cancellable: Gio.Cancellable | null,
                calobj: string,
                opflags: ECal.OperationFlags | null,
                users: string[],
            ): string;
            // Conflicted with EDataCal.CalBackend.send_objects
            send_objects(...args: never[]): any;

            // Inherited methods
            /**
             * Returns a list of #ICalTimezone instances that were explicitly added to
             * the `cache` through e_timezone_cache_add_timezone().  In particular, any
             * built-in time zone data that e_timezone_cache_get_timezone() may use to
             * match a TZID string is excluded from the returned list.
             *
             * Free the returned list with g_list_free().  The list elements are owned
             * by the `cache` and should not be modified or freed.
             * @returns a #GList of    #ICalTimezone instances
             */
            list_timezones(): ICalGLib.Timezone[];
            vfunc_timezone_added(zone: ICalGLib.Timezone): void;
            vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
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

        module CalCache {
            // Signal callback interfaces

            interface DupComponentRevision {
                (object: ICalGLib.Component): string;
            }

            interface GetTimezone {
                (tzid: string): ICalGLib.Timezone;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.Cache.ConstructorProps,
                    ECal.TimezoneCache.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below.
         */
        class CalCache extends EBackend.Cache implements ECal.TimezoneCache, EDataServer.Extensible {
            static $gtype: GObject.GType<CalCache>;

            // Constructors

            constructor(properties?: Partial<CalCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string, cancellable?: Gio.Cancellable | null): CalCache;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'dup-component-revision',
                callback: (_source: this, object: ICalGLib.Component) => string,
            ): number;
            connect_after(
                signal: 'dup-component-revision',
                callback: (_source: this, object: ICalGLib.Component) => string,
            ): number;
            emit(signal: 'dup-component-revision', object: ICalGLib.Component): void;
            connect(signal: 'get-timezone', callback: (_source: this, tzid: string) => ICalGLib.Timezone): number;
            connect_after(signal: 'get-timezone', callback: (_source: this, tzid: string) => ICalGLib.Timezone): number;
            emit(signal: 'get-timezone', tzid: string): void;

            // Static methods

            /**
             * An #ECalRecurResolveTimezoneCb callback, which can be used
             * with e_cal_recur_generate_instances_sync(). The `cal_cache`
             * is supposed to be an #ECalCache instance.
             * @param tzid a timezone ID
             * @param cal_cache an #ECalCache
             * @param cancellable optional #GCancellable object, or %NULL
             */
            static resolve_timezone_cb(
                tzid: string,
                cal_cache?: any | null,
                cancellable?: Gio.Cancellable | null,
            ): ICalGLib.Timezone | null;

            // Virtual methods

            /**
             * Returns the `icomp` revision, used to detect changes.
             * The returned string should be freed with g_free(), when
             * no longer needed.
             * @param icomp an #ICalComponent
             */
            vfunc_dup_component_revision(icomp: ICalGLib.Component): string;

            // Methods

            /**
             * Checkes whether the `cal_cache` contains an object with
             * the given `uid` and `rid`. The `rid` can be an empty string
             * or %NULL to search for the master object, otherwise the check
             * is done for a detached instance, not for a recurrence instance.
             * @param uid component UID
             * @param rid optional component Recurrence-ID or %NULL
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @returns Whether the object had been found.
             */
            contains(uid: string, rid: string | null, deleted_flag: EBackend.CacheDeletedFlag | null): boolean;
            // Conflicted with EBackend.Cache.contains
            contains(...args: never[]): any;
            /**
             * Deletes all locally stored attachments beside the cache file from the disk.
             * This doesn't modify the `component`. It's usually called before the `component`
             * is being removed from the `cal_cache`.
             * @param component an #ICalComponent
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            delete_attachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns the `icomp` revision, used to detect changes.
             * The returned string should be freed with g_free(), when
             * no longer needed.
             * @param icomp an #ICalComponent
             * @returns A newly allocated string containing    revision of the @icomp.
             */
            dup_component_revision(icomp: ICalGLib.Component): string;
            /**
             * Gets a timezone with given `tzid,` which had been previously put
             * into the `cal_cache` with e_cal_cache_put_timezone().
             * The returned string is an iCal string for that ICalTimezone and
             * should be freed with g_free() when no longer needed.
             * @param tzid a timezone ID to get
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            dup_timezone_as_string(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Gets a component identified by `uid,` and optionally by the `rid,`
             * from the `cal_cache`. The returned `out_component` should be freed with
             * g_object_unref(), when no longer needed.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_component(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ECal.Component];
            /**
             * Gets a component identified by `uid,` and optionally by the `rid,`
             * from the `cal_cache`. The returned `out_icalstring` should be freed with
             * g_free(), when no longer needed.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_component_as_string(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Gets the custom flags previously set for `uid` and `rid,` either with
             * e_cal_cache_set_component_custom_flags(), when adding components or
             * when removing components in offline.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_component_custom_flags(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number];
            /**
             * Gets the extra data previously set for `uid` and `rid,` either with
             * e_cal_cache_set_component_extra() or when adding components.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_component_extra(
                uid: string,
                rid: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Gets the master object and all detached instances for a component
             * identified by the `uid`. Free the returned #GSList with
             * g_slist_free_full (components, g_object_unref); when
             * no longer needed.
             * @param uid a UID of the component
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_components_by_uid(uid: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];
            /**
             * Gets the master object and all detached instances as string
             * for a component identified by the `uid`. Free the returned #GSList
             * with g_slist_free_full (icalstrings, g_free); when no longer needed.
             * @param uid a UID of the component
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_components_by_uid_as_string(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Gets a list of components which occur in the given time range.
             * It's not an error if none is found.
             * @param range_start start of the range, as time_t, inclusive
             * @param range_end end of the range, as time_t, exclusive
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_components_in_range(
                range_start: never,
                range_end: never,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ECal.Component[]];
            /**
             * Gets a list of components, as iCal strings, which occur in the given time range.
             * @param range_start start of the range, as time_t, inclusive
             * @param range_end end of the range, as time_t, exclusive
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_components_in_range_as_strings(
                range_start: never,
                range_end: never,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[]];
            /**
             * Gets all the ID-s the `extra` data is set for.
             *
             * The `out_ids` should be freed with
             * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
             * when no longer needed.
             * @param extra an extra column value to search for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_ids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];
            /**
             * The same as e_cache_get_offline_changes(), only splits the saved UID
             * into UID and RID and saved the data into #ECalCacheOfflineChange structure.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cal_cache_offline_change_free);    when no longer needed.
             */
            get_offline_changes(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[];
            // Conflicted with EBackend.Cache.get_offline_changes
            get_offline_changes(...args: never[]): any;
            /**
             * This is a wrapper of e_cache_get_offline_state(), ensuring that
             * a correct #ECache UID will be used.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Current offline state #EOfflineState for the given component.    It returns %E_OFFLINE_STATE_UNKNOWN when the component could not be    found or other error happened.
             */
            get_offline_state(
                uid: string,
                rid?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): EBackend.OfflineState;
            // Conflicted with EBackend.Cache.get_offline_state
            get_offline_state(...args: never[]): any;
            /**
             * Gets a timezone with given `tzid,` which had been previously put
             * into the `cal_cache` with e_cal_cache_put_timezone().
             * The returned ICalTimezone is owned by the `cal_cache` and should
             * not be freed.
             * @param tzid a timezone ID to get
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone];
            // Conflicted with ECal.TimezoneCache.get_timezone
            get_timezone(...args: never[]): any;
            /**
             * Gets a list of all stored timezones by the `cal_cache`.
             * Only the returned list should be freed with g_list_free()
             * when no longer needed; the #ICalTimezone-s are owned
             * by the `cal_cache`.
             *
             * Note: The list can contain timezones previously stored
             * in the cache, but removed from it since they were loaded,
             * because these are freed only when also the `cal_cache` is freed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            list_timezones(cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone[]];
            // Conflicted with ECal.TimezoneCache.list_timezones
            list_timezones(...args: never[]): any;
            /**
             * Adds a `component` into the `cal_cache`. Any existing with the same UID
             * and RID is replaced.
             * @param component an #ECalComponent to put into the @cal_cache
             * @param extra an extra data to store in association with the @component
             * @param custom_flags custom flags for the @component, not interpreted by the @cal_cache
             * @param offline_flag one of #ECacheOfflineFlag, whether putting this component in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_component(
                component: ECal.Component,
                extra: string | null,
                custom_flags: number,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Adds a list of `components` into the `cal_cache`. Any existing with the same UID
             * and RID are replaced.
             *
             * If `extras` is not %NULL, its length should be the same as the length
             * of the `components`. Similarly the non-NULL `custom_flags` length
             * should be the same as the length of the `components`.
             * @param components a #GSList of #ECalComponent to put into the @cal_cache
             * @param extras optional extra data to store in association with the @components
             * @param custom_flags optional custom flags to use for the @components
             * @param offline_flag one of #ECacheOfflineFlag, whether putting these components in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_components(
                components: ECal.Component[],
                extras: string[] | null,
                custom_flags: number[] | null,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Puts the `zone` into the `cal_cache` using its timezone ID as
             * an identificator. The function adds a new or replaces existing,
             * if any such already exists in the `cal_cache`. The function does
             * nothing and returns %TRUE, when the passed-in `zone` is libical
             * builtin timezone.
             * @param zone an #ICalTimezone to put
             * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_timezone(
                zone: ICalGLib.Timezone,
                inc_ref_counts: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes a component identified by `uid` and `rid` from the `cal_cache`.
             * When the `rid` is %NULL, or an empty string, then removes the master
             * object only, without any detached instance.
             * @param uid a UID of the component to remove
             * @param rid an optional Recurrence-ID to remove
             * @param custom_flags custom flags for the component, not interpreted by the @cal_cache
             * @param offline_flag one of #ECacheOfflineFlag, whether removing this component in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_component(
                uid: string,
                rid: string | null,
                custom_flags: number,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes components identified by `uid` and `rid` from the `cal_cache`
             * in the `ids` list. When the `rid` is %NULL, or an empty string, then
             * removes the master object only, without any detached instance.
             * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
             * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
             * the `custom_flags` should match the length of `ids,` when not %NULL.
             * @param ids a #GSList of components to remove
             * @param custom_flags an optional #GSList of custom flags for the @ids
             * @param offline_flag one of #ECacheOfflineFlag, whether removing these comonents in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_components(
                ids: ECal.ComponentId[],
                custom_flags: number[] | null,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Dereferences use count of the time zone with ID `tzid` by `dec_ref_counts`
             * and removes the timezone from the cache when the reference count reaches
             * zero. Special case is with `dec_ref_counts` being zero, in which case
             * the corresponding timezone is removed regardless of the current reference
             * count.
             *
             * It's not an error when the timezone doesn't exist in the cache.
             * @param tzid timezone ID to remove/dereference
             * @param dec_ref_counts reference counts to drop, 0 to remove it regardless of the current reference count
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_timezone(tzid: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes all stored timezones from the `cal_cache`.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_timezones(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Searches the `cal_cache` with the given `sexp` and
             * returns those components which satisfy the search
             * expression as a #GSList of #ECalCacheSearchData.
             * The `out_data` should be freed with
             * g_slist_free_full (data, e_cal_cache_search_data_free);
             * when no longer needed.
             * @param sexp search expression; use %NULL or an empty string to list all stored components
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, CalCacheSearchData[]];
            /**
             * Searches the `cal_cache` with the given `sexp` and
             * returns those components which satisfy the search
             * expression. The `out_components` should be freed with
             * g_slist_free_full (components, g_object_unref); when
             * no longer needed.
             * @param sexp search expression; use %NULL or an empty string to list all stored components
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_components(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];
            /**
             * Searches the `cal_cache` with the given `sexp` and returns ECalComponentId
             * for those components which satisfy the search expression.
             * The `out_ids` should be freed with
             * g_slist_free_full (ids, (GDestroyNotify) e_cal_component_id_free);
             * when no longer needed.
             * @param sexp search expression; use %NULL or an empty string to list all stored components
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_ids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];
            /**
             * Searches the `cal_cache` with the given `sexp` and calls `func` for each
             * row which satisfy the search expression.
             * @param sexp search expression; use %NULL or an empty string to list all stored components
             * @param func an #ECalCacheSearchFunc callback to call for each row which satisfies @sexp
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_with_callback(
                sexp: string | null,
                func: CalCacheSearchFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets or replaces the custom flags associated with a component
             * identified by `uid` and optionally `rid`.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param custom_flags the custom flags to set for the component
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            set_component_custom_flags(
                uid: string,
                rid: string | null,
                custom_flags: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets or replaces the extra data associated with a component
             * identified by `uid` and optionally `rid`.
             * @param uid a UID of the component
             * @param rid an optional Recurrence-ID
             * @param extra extra data to set for the component
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            set_component_extra(
                uid: string,
                rid?: string | null,
                extra?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;

            // Inherited methods
            /**
             * Adds a copy of `zone` to `cache` and emits an
             * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
             * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
             * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
             *
             * If the `cache` already has an #ICalTimezone with the same TZID string
             * as `zone,` the `cache` will remain unchanged to avoid invalidating any
             * #ICalTimezone pointers which may have already been returned through
             * e_timezone_cache_get_timezone().
             * @param zone an #ICalTimezone
             */
            add_timezone(zone: ICalGLib.Timezone): void;
            vfunc_timezone_added(zone: ICalGLib.Timezone): void;
            vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
            /**
             * Returns a list of #EExtension objects bound to `extensible` whose
             * types are ancestors of `extension_type`.  For a complete list of
             * extension objects bound to `extensible,` pass %E_TYPE_EXTENSION.
             *
             * The list itself should be freed with g_list_free().  The extension
             * objects are owned by `extensible` and should not be unreferenced.
             * @param extension_type the type of extensions to list
             * @returns a list of extension objects derived from @extension_type
             */
            list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
            /**
             * Creates an instance of all instantiable subtypes of #EExtension which
             * target the class of `extensible`.  The lifetimes of these newly created
             * #EExtension objects are bound to `extensible` such that they are finalized
             * when `extensible` is finalized.
             */
            load_extensions(): void;
            /**
             * Similar to e_extensible_load_extensions(), only loads newly discovered
             * extensions again. This can help in case a new module had been loaded
             * to the process, which provides the extensions for the `extensible`.
             */
            reload_extensions(): void;
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

        module CalMetaBackend {
            // Signal callback interfaces

            interface RefreshCompleted {
                (): void;
            }

            interface SourceChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends CalBackendSync.ConstructorProps, ECal.TimezoneCache.ConstructorProps {
                cache: CalCache;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below.
         */
        abstract class CalMetaBackend extends CalBackendSync implements ECal.TimezoneCache {
            static $gtype: GObject.GType<CalMetaBackend>;

            // Properties

            /**
             * The #ECalCache being used for this meta backend.
             */
            get cache(): CalCache;
            set cache(val: CalCache);

            // Constructors

            constructor(properties?: Partial<CalMetaBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'refresh-completed', callback: (_source: this) => void): number;
            connect_after(signal: 'refresh-completed', callback: (_source: this) => void): number;
            emit(signal: 'refresh-completed'): void;
            connect(signal: 'source-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'source-changed', callback: (_source: this) => void): number;
            emit(signal: 'source-changed'): void;

            // Virtual methods

            /**
             * This is called always before any operation which requires a connection
             * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
             * error to indicate that the remote side cannot be currently reached. Other
             * errors are propagated to the caller/client side. This method is not called
             * when the backend is offline.
             *
             * The descendant should also call e_cal_backend_set_writable() after successful
             * connect to the remote side. This value is stored for later use, when being
             * opened offline.
             *
             * The `credentials` parameter consists of the previously used credentials.
             * It's always %NULL with the first connection attempt. To get the credentials,
             * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
             * the first time and the function will be called again once the credentials
             * are available. See the documentation of #ESourceAuthenticationResult for
             * other available results.
             *
             * The out parameters are passed to e_backend_schedule_credentials_required()
             * and are ignored when the descendant returns %TRUE, aka they are used
             * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
             * should be used together and they can be left untouched if the failure reason was
             * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
             * to indicate other error than `credentials` error, otherwise the `error` is used
             * according to `out_auth_result` value.
             *
             * It is mandatory to implement this virtual method by the descendant.
             * @param credentials an #ENamedParameters with previously used credentials, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_connect_sync(
                credentials: EDataServer.NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];
            /**
             * This is called when the backend goes into offline mode or
             * when the disconnect is required. The implementation should
             * not report any error when it is called and the `meta_backend`
             * is not connected.
             *
             * It is mandatory to implement this virtual method by the descendant.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gathers the changes since the last check which had been done
             * on the remote side.
             *
             * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
             * when there was no previous call or when the descendant doesn't store any
             * such tags. The `out_new_sync_tag` can be populated with a value to be stored
             * and used the next time.
             *
             * The `out_repeat` can be set to %TRUE when the descendant didn't finish
             * read of all the changes. In that case the `meta_backend` calls this
             * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
             * notifies about the found changes immediately. The `is_repeat` is set
             * to %TRUE as well in this case, otherwise it's %FALSE.
             *
             * The descendant can populate also ECalMetaBackendInfo::object of
             * the `out_created_objects` and `out_modified_objects,` if known, in which
             * case this will be used instead of loading it with e_cal_meta_backend_load_component_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation calls e_cal_meta_backend_list_existing_sync()
             * and then compares the list with the current content of the local cache
             * and populates the respective lists appropriately.
             *
             * Each output #GSList should be freed with
             * g_slist_free_full (objects, e_cal_meta_backend_info_free);
             * when no longer needed.
             * @param last_sync_tag optional sync tag from the last check
             * @param is_repeat set to %TRUE when this is the repeated call
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_get_changes_sync(
                last_sync_tag: string | null,
                is_repeat: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];
            /**
             * It is optional to implement this virtual method by the descendants.
             * It is used to receive SSL error details when any online operation
             * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
             */
            vfunc_get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];
            /**
             * Used to get list of all existing objects on the remote side. The descendant
             * can optionally provide `out_new_sync_tag,` which will be stored on success, if
             * not %NULL. The descendant can populate also ECalMetaBackendInfo::object of
             * the `out_existing_objects,` if known, in which case this will be used instead
             * of loading it with e_cal_meta_backend_load_component_sync().
             *
             * It is mandatory to implement this virtual method by the descendant, unless
             * it implements its own #ECalMetaBackendClass.get_changes_sync().
             *
             * The `out_existing_objects` #GSList should be freed with
             * g_slist_free_full (objects, e_cal_meta_backend_info_free);
             * when no longer needed.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];
            /**
             * Loads a component from the remote side. Any detached instances should be
             * returned together with the master object. The `out_component` can be either
             * a VCALENDAR component, which would contain the master object and all of
             * its detached instances, eventually also used time zones, or the requested
             * component of type VEVENT, VJOURNAL or VTODO.
             *
             * It is mandatory to implement this virtual method by the descendant.
             *
             * The returned `out_component` should be freed with g_object_unref(),
             * when no longer needed.
             *
             * The returned `out_extra` should be freed with g_free(), when no longer
             * needed.
             * @param uid a component UID
             * @param extra optional extra data stored with the component, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_load_component_sync(
                uid: string,
                extra: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ICalGLib.Component, string];
            /**
             * Removes a component from the remote side, with all its detached instances.
             * The `object` is not %NULL when it's removing locally deleted object
             * in offline mode. Being it %NULL, the descendant can obtain the object
             * from the #ECalCache.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param conflict_resolution an #EConflictResolution to use
             * @param uid a component UID
             * @param extra extra data being saved with the component in the local cache, or %NULL
             * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_remove_component_sync(
                conflict_resolution: EDataServer.ConflictResolution,
                uid: string,
                extra: string | null,
                object: string | null,
                opflags: ECal.OperationFlags,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Determines, whether current source content requires reconnect of the backend.
             *
             * It is optional to implement this virtual method by the descendant. The default
             * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
             * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
             * with the values after the last successful connect and returns
             * %TRUE when they changed. It always return %TRUE when there was
             * no successful connect done yet.
             */
            vfunc_requires_reconnect(): boolean;
            /**
             * Saves one component into the remote side. The `instances` contain the master
             * object and all the detached instances of the same component (all have the same UID).
             * When the `overwrite_existing` is %TRUE, then the descendant can overwrite an object
             * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
             * defines what to do when the remote side had made any changes to the object since
             * the last update.
             *
             * The descendant can use e_cal_meta_backend_merge_instances() to merge
             * the instances into one VCALENDAR component, which will contain also
             * used time zones.
             *
             * The components in `instances` have already converted locally stored attachments
             * into inline attachments, thus it's not needed to call
             * e_cal_meta_backend_inline_local_attachments_sync() by the descendant.
             *
             * The `out_new_uid` can be populated with a UID of the saved component as the server
             * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
             * also to see whether any changes had been made to the component by the remote side.
             *
             * The `out_new_extra` can be populated with a new extra data to save with the component.
             * Left it %NULL, to keep the same value as the `extra`.
             *
             * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
             * the save failed due to made changes on the remote side, and let the `meta_backend`
             * to resolve this conflict based on the `conflict_resolution` on its own.
             * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
             * is able to resolve the conflicts itself.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param overwrite_existing %TRUE when can overwrite existing components, %FALSE otherwise
             * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
             * @param instances instances of the component to save
             * @param extra extra data saved with the components in an #ECalCache
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_save_component_sync(
                overwrite_existing: boolean,
                conflict_resolution: EDataServer.ConflictResolution,
                instances: ECal.Component[],
                extra: string | null,
                opflags: ECal.OperationFlags,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found components as a #GSList of #ECalComponent `out_components`.
             * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get iCal
             * strings instead, call e_cal_meta_backend_search_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_search_components_sync(
                expr: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ECal.Component[]];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found components as a #GSList of iCal strings `out_icalstrings`.
             * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get
             * #ECalComponent-s instead, call e_cal_meta_backend_search_components_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            vfunc_source_changed(): void;

            // Methods

            /**
             * This is called always before any operation which requires a connection
             * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
             * error to indicate that the remote side cannot be currently reached. Other
             * errors are propagated to the caller/client side. This method is not called
             * when the backend is offline.
             *
             * The descendant should also call e_cal_backend_set_writable() after successful
             * connect to the remote side. This value is stored for later use, when being
             * opened offline.
             *
             * The `credentials` parameter consists of the previously used credentials.
             * It's always %NULL with the first connection attempt. To get the credentials,
             * just set the `out_auth_result` to %E_SOURCE_AUTHENTICATION_REQUIRED for
             * the first time and the function will be called again once the credentials
             * are available. See the documentation of #ESourceAuthenticationResult for
             * other available results.
             *
             * The out parameters are passed to e_backend_schedule_credentials_required()
             * and are ignored when the descendant returns %TRUE, aka they are used
             * only if the connection fails. The `out_certificate_pem` and `out_certificate_errors`
             * should be used together and they can be left untouched if the failure reason was
             * not related to certificate. Use `out_auth_result` %E_SOURCE_AUTHENTICATION_UNKNOWN
             * to indicate other error than `credentials` error, otherwise the `error` is used
             * according to `out_auth_result` value.
             *
             * It is mandatory to implement this virtual method by the descendant.
             * @param credentials an #ENamedParameters with previously used credentials, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            connect_sync(
                credentials: EDataServer.NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];
            /**
             * This is called when the backend goes into offline mode or
             * when the disconnect is required. The implementation should
             * not report any error when it is called and the `meta_backend`
             * is not connected.
             *
             * It is mandatory to implement this virtual method by the descendant.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns the last known synchronization tag, the same as used to
             * call e_cal_meta_backend_get_changes_sync().
             *
             * Free the returned string with g_free(), when no longer needed.
             * @returns The last known synchronization tag,    or %NULL, when none is stored.
             */
            dup_sync_tag(): string | null;
            /**
             * Empties the local cache by removing all known components from it
             * and notifies about such removal any opened views. It removes also
             * all known time zones.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Ensures that the `meta_backend` is connected to its destination.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Extracts all VTIMEZONE components from the `vcalendar` and adds them
             * to the memory cache, thus they are available when needed. The function does
             * nothing when the `vcalendar` doesn't hold a VCALENDAR component.
             *
             * Set the `remove_existing` argument to %TRUE to remove all cached timezones
             * first and then add the existing in the `vcalendar,` or set it to %FALSE
             * to preserver existing timezones and merge them with those in `vcalendar`.
             * @param vcalendar a VCALENDAR #ICalComponent
             * @param remove_existing whether to remove any existing first
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            gather_timezones_sync(
                vcalendar: ICalGLib.Component,
                remove_existing: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            get_capabilities(): string;
            /**
             * Gathers the changes since the last check which had been done
             * on the remote side.
             *
             * The `last_sync_tag` can be used as a tag of the last check. This can be %NULL,
             * when there was no previous call or when the descendant doesn't store any
             * such tags. The `out_new_sync_tag` can be populated with a value to be stored
             * and used the next time.
             *
             * The `out_repeat` can be set to %TRUE when the descendant didn't finish
             * read of all the changes. In that case the `meta_backend` calls this
             * function again with the `out_new_sync_tag` as the `last_sync_tag,` but also
             * notifies about the found changes immediately. The `is_repeat` is set
             * to %TRUE as well in this case, otherwise it's %FALSE.
             *
             * The descendant can populate also ECalMetaBackendInfo::object of
             * the `out_created_objects` and `out_modified_objects,` if known, in which
             * case this will be used instead of loading it with e_cal_meta_backend_load_component_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation calls e_cal_meta_backend_list_existing_sync()
             * and then compares the list with the current content of the local cache
             * and populates the respective lists appropriately.
             *
             * Each output #GSList should be freed with
             * g_slist_free_full (objects, e_cal_meta_backend_info_free);
             * when no longer needed.
             * @param last_sync_tag optional sync tag from the last check
             * @param is_repeat set to %TRUE when this is the repeated call
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_changes_sync(
                last_sync_tag: string | null,
                is_repeat: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];
            /**
             * This value has meaning only if e_cal_meta_backend_get_ever_connected()
             * is %TRUE.
             * @returns Whether the @meta_backend connected to a writable destination.
             */
            get_connected_writable(): boolean;
            get_ever_connected(): boolean;
            /**
             * It is optional to implement this virtual method by the descendants.
             * It is used to receive SSL error details when any online operation
             * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
             * @returns %TRUE, when the SSL error details had been available and    the out parameters populated, %FALSE otherwise.
             */
            get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];
            /**
             * Changes all URL attachments which point to a local file in `component`
             * to inline attachments, aka adds the file content into the `component`.
             * It also populates FILENAME parameter on the attachment.
             * This is called automatically before e_cal_meta_backend_save_component_sync().
             *
             * The reverse operation is e_cal_meta_backend_store_inline_attachments_sync().
             * @param component an #ICalComponent to work with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Used to get list of all existing objects on the remote side. The descendant
             * can optionally provide `out_new_sync_tag,` which will be stored on success, if
             * not %NULL. The descendant can populate also ECalMetaBackendInfo::object of
             * the `out_existing_objects,` if known, in which case this will be used instead
             * of loading it with e_cal_meta_backend_load_component_sync().
             *
             * It is mandatory to implement this virtual method by the descendant, unless
             * it implements its own #ECalMetaBackendClass.get_changes_sync().
             *
             * The `out_existing_objects` #GSList should be freed with
             * g_slist_free_full (objects, e_cal_meta_backend_info_free);
             * when no longer needed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];
            /**
             * Loads a component from the remote side. Any detached instances should be
             * returned together with the master object. The `out_component` can be either
             * a VCALENDAR component, which would contain the master object and all of
             * its detached instances, eventually also used time zones, or the requested
             * component of type VEVENT, VJOURNAL or VTODO.
             *
             * It is mandatory to implement this virtual method by the descendant.
             *
             * The returned `out_component` should be freed with g_object_unref(),
             * when no longer needed.
             *
             * The returned `out_extra` should be freed with g_free(), when no longer
             * needed.
             * @param uid a component UID
             * @param extra optional extra data stored with the component, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            load_component_sync(
                uid: string,
                extra: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ICalGLib.Component, string];
            /**
             * Merges all the instances provided in `instances` list into one VCALENDAR
             * object, which would eventually contain also all the used timezones.
             * The `instances` list should contain the master object and eventually all
             * the detached instances for one component (they all have the same UID).
             *
             * Any TZID property parameters can be replaced with corresponding timezone
             * location, which will not influence the timezone itself.
             * @param instances component instances to merge
             * @param replace_tzid_with_location whether to replace TZID-s with locations
             * @returns an #ICalComponent containing a VCALENDAR    component which consists of all the given instances. Free    the returned pointer with g_object_unref(), when no longer needed. See: e_cal_meta_backend_save_component_sync()
             */
            merge_instances(instances: ECal.Component[], replace_tzid_with_location: boolean): ICalGLib.Component;
            /**
             * Processes given changes by updating local cache content accordingly.
             * The `meta_backend` processes the changes like being online and particularly
             * requires to be online to load created and modified objects when needed.
             * @param created_objects a #GSList of #ECalMetaBackendInfo object infos which had been created
             * @param modified_objects a #GSList of #ECalMetaBackendInfo object infos which had been modified
             * @param removed_objects a #GSList of #ECalMetaBackendInfo object infos which had been removed
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            process_changes_sync(
                created_objects?: CalMetaBackendInfo[] | null,
                modified_objects?: CalMetaBackendInfo[] | null,
                removed_objects?: CalMetaBackendInfo[] | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            ref_cache(): CalCache;
            /**
             * Refreshes the `meta_backend` immediately. To just schedule refresh
             * operation call e_cal_meta_backend_schedule_refresh().
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes a component from the remote side, with all its detached instances.
             * The `object` is not %NULL when it's removing locally deleted object
             * in offline mode. Being it %NULL, the descendant can obtain the object
             * from the #ECalCache.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param conflict_resolution an #EConflictResolution to use
             * @param uid a component UID
             * @param extra extra data being saved with the component in the local cache, or %NULL
             * @param object corresponding iCalendar object, as stored in the local cache, or %NULL
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_component_sync(
                conflict_resolution: EDataServer.ConflictResolution | null,
                uid: string,
                extra: string | null,
                object: string | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Determines, whether current source content requires reconnect of the backend.
             *
             * It is optional to implement this virtual method by the descendant. The default
             * implementation compares %E_SOURCE_EXTENSION_AUTHENTICATION and
             * %E_SOURCE_EXTENSION_WEBDAV_BACKEND, if existing in the source,
             * with the values after the last successful connect and returns
             * %TRUE when they changed. It always return %TRUE when there was
             * no successful connect done yet.
             * @returns %TRUE, when reconnect is required, %FALSE otherwise.
             */
            requires_reconnect(): boolean;
            /**
             * Saves one component into the remote side. The `instances` contain the master
             * object and all the detached instances of the same component (all have the same UID).
             * When the `overwrite_existing` is %TRUE, then the descendant can overwrite an object
             * with the same UID on the remote side (usually used for modify). The `conflict_resolution`
             * defines what to do when the remote side had made any changes to the object since
             * the last update.
             *
             * The descendant can use e_cal_meta_backend_merge_instances() to merge
             * the instances into one VCALENDAR component, which will contain also
             * used time zones.
             *
             * The components in `instances` have already converted locally stored attachments
             * into inline attachments, thus it's not needed to call
             * e_cal_meta_backend_inline_local_attachments_sync() by the descendant.
             *
             * The `out_new_uid` can be populated with a UID of the saved component as the server
             * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
             * also to see whether any changes had been made to the component by the remote side.
             *
             * The `out_new_extra` can be populated with a new extra data to save with the component.
             * Left it %NULL, to keep the same value as the `extra`.
             *
             * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
             * the save failed due to made changes on the remote side, and let the `meta_backend`
             * to resolve this conflict based on the `conflict_resolution` on its own.
             * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
             * is able to resolve the conflicts itself.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param overwrite_existing %TRUE when can overwrite existing components, %FALSE otherwise
             * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
             * @param instances instances of the component to save
             * @param extra extra data saved with the components in an #ECalCache
             * @param opflags bit-or of #ECalOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            save_component_sync(
                overwrite_existing: boolean,
                conflict_resolution: EDataServer.ConflictResolution | null,
                instances: ECal.Component[],
                extra: string | null,
                opflags: ECal.OperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string];
            /**
             * Schedules refresh of the content of the `meta_backend`. If there's any
             * already scheduled, then the function does nothing.
             *
             * Use e_cal_meta_backend_refresh_sync() to refresh the `meta_backend`
             * immediately.
             */
            schedule_refresh(): void;
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found components as a #GSList of #ECalComponent `out_components`.
             * Free the returned `out_components` with g_slist_free_full (components, g_object_unref);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get iCal
             * strings instead, call e_cal_meta_backend_search_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_components_sync(
                expr: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, ECal.Component[]];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found components as a #GSList of iCal strings `out_icalstrings`.
             * Free the returned `out_icalstrings` with g_slist_free_full (icalstrings, g_free);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get
             * #ECalComponent-s instead, call e_cal_meta_backend_search_components_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Sets the `cache` as the cache to be used by the `meta_backend`.
             * By default, a cache.db in ECalBackend::cache-dir is created
             * in the constructed method. This function can be used to override
             * the default.
             *
             * Note the `meta_backend` adds its own reference to the `cache`.
             * @param cache an #ECalCache to use
             */
            set_cache(cache: CalCache): void;
            /**
             * Sets whether the `meta_backend` connected to a writable destination.
             * This value has meaning only if e_cal_meta_backend_get_ever_connected()
             * is %TRUE.
             *
             * This is used by the `meta_backend` itself, during the opening phase,
             * to set the backend writable or not also in the offline mode.
             * @param value value to set
             */
            set_connected_writable(value: boolean): void;
            /**
             * Sets whether the `meta_backend` ever made a successful connection
             * to its destination.
             *
             * This is used by the `meta_backend` itself, during the opening phase,
             * when it had not been connected yet, then it does so immediately, to
             * eventually report settings error easily.
             * @param value value to set
             */
            set_ever_connected(value: boolean): void;
            /**
             * Sets the `sync_tag` for the `meta_backend`.
             * @param sync_tag a sync tag to set, or %NULL to unset the old one
             */
            set_sync_tag(sync_tag?: string | null): void;
            /**
             * Splits `objects` into created/modified/removed lists according to current local
             * cache content. Only the `out_removed_objects` can be %NULL, others cannot.
             * The function modifies `objects` by moving its 'data' to corresponding out
             * lists and sets the `objects` 'data' to %NULL.
             *
             * Each output #GSList should be freed with
             * g_slist_free_full (objects, e_cal_meta_backend_info_free);
             * when no longer needed.
             *
             * The caller is still responsible to free `objects` as well.
             * @param objects a #GSList of #ECalMetaBackendInfo object infos to split
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            split_changes_sync(
                objects: CalMetaBackendInfo[],
                cancellable?: Gio.Cancellable | null,
            ): [boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[] | null];
            /**
             * Changes all inline attachments to URL attachments in `component,` which
             * will point to a local file instead. The function expects FILENAME parameter
             * to be set on the attachment as the file name of it.
             * This is called automatically after e_cal_meta_backend_load_component_sync().
             *
             * The reverse operation is e_cal_meta_backend_inline_local_attachments_sync().
             * @param component an #ICalComponent to work with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            store_inline_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;

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

        module DataCal {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                backend: CalBackend;
                connection: Gio.DBusConnection;
                object_path: string;
                objectPath: string;
            }
        }

        class DataCal extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<DataCal>;

            // Properties

            get backend(): CalBackend;
            get connection(): Gio.DBusConnection;
            get object_path(): string;
            get objectPath(): string;

            // Constructors

            constructor(properties?: Partial<DataCal.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend: CalBackend, connection: Gio.DBusConnection, object_path: string): DataCal;

            // Methods

            /**
             * Returns the #GDBusConnection on which the Calendar D-Bus interface
             * is exported.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
            /**
             * Returns the object path at which the Calendar D-Bus interface is
             * exported.
             * @returns the object path
             */
            get_object_path(): string;
            /**
             * Returns the #ECalBackend to which incoming remote method invocations
             * are being forwarded.
             *
             * The returned #ECalBackend is referenced for thread-safety and should
             * be unreferenced with g_object_unref() when finished with it.
             * @returns an #ECalBackend
             */
            ref_backend(): CalBackend | null;
            /**
             * Notifies client about certain property value change
             * @param prop_name property name
             * @param prop_value new property value
             */
            report_backend_property_changed(prop_name: string, prop_value: string): void;
            /**
             * Emits an error message, thus the clients can be notified about it.
             * @param message an error message to report
             */
            report_error(message: string): void;
            /**
             * Reports result of a free/busy query on the `cal`.
             * @param freebusy a #GSList of free/busy components encoded as string
             */
            report_free_busy_data(freebusy: string[]): void;
            /**
             * Notifies listeners of the completion of the add_timezone method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             */
            respond_add_timezone(opid: number, error?: GLib.Error | null): void;
            /**
             * Notifies listeners of the completion of the create_objects method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param uids UIDs of the objects created.
             * @param new_components The newly created #ECalComponent objects.
             */
            respond_create_objects(
                opid: number,
                error: GLib.Error | null,
                uids: string[],
                new_components: ECal.Component[],
            ): void;
            /**
             * Notifies listeners of the completion of the discard_alarm method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             */
            respond_discard_alarm(opid: number, error?: GLib.Error | null): void;
            /**
             * Notifies listeners of the completion of the get_attachment_uris method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param attachment_uris List of retrieved attachment uri's.
             */
            respond_get_attachment_uris(opid: number, error: GLib.Error | null, attachment_uris: string[]): void;
            /**
             * Notifies listeners of the completion of the get_free_busy method call.
             * To pass actual free/busy objects to the client asynchronously
             * use e_data_cal_report_free_busy_data(), but the `freebusy` should contain
             * all the objects being used in e_data_cal_report_free_busy_data().
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param freebusy a #GSList of iCalendar strings with all gathered free/busy components.
             */
            respond_get_free_busy(opid: number, error: GLib.Error | null, freebusy: string[]): void;
            /**
             * Notifies listeners of the completion of the get_object method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param object The object retrieved as an iCalendar string.
             */
            respond_get_object(opid: number, error: GLib.Error | null, object: string): void;
            /**
             * Notifies listeners of the completion of the get_object_list method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param objects List of retrieved objects.
             */
            respond_get_object_list(opid: number, error: GLib.Error | null, objects: string[]): void;
            /**
             * Notifies listeners of the completion of the get_timezone method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param tzobject The requested timezone as an iCalendar string.
             */
            respond_get_timezone(opid: number, error: GLib.Error | null, tzobject: string): void;
            /**
             * Notifies listeners of the completion of the modify_objects method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param old_components The old #ECalComponent(s).
             * @param new_components The new #ECalComponent(s).
             */
            respond_modify_objects(
                opid: number,
                error: GLib.Error | null,
                old_components: ECal.Component[],
                new_components: ECal.Component[],
            ): void;
            /**
             * Notifies listeners of the completion of the open method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             */
            respond_open(opid: number, error?: GLib.Error | null): void;
            /**
             * Notifies listeners of the completion of the receive_objects method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             */
            respond_receive_objects(opid: number, error?: GLib.Error | null): void;
            /**
             * Notifies listeners of the completion of the refresh method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             */
            respond_refresh(opid: number, error?: GLib.Error | null): void;
            /**
             * Notifies listeners of the completion of the remove_objects method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param ids IDs of the removed objects.
             * @param old_components The old #ECalComponent(s).
             * @param new_components The new #ECalComponent(s).    They will not be NULL only when removing instances of recurring appointments.
             */
            respond_remove_objects(
                opid: number,
                error: GLib.Error | null,
                ids: ECal.ComponentId[],
                old_components: ECal.Component[],
                new_components: ECal.Component[],
            ): void;
            /**
             * Notifies listeners of the completion of the send_objects method call.
             * @param opid associated operation id
             * @param error Operation error, if any, automatically freed if passed it.
             * @param users List of users.
             * @param calobj An iCalendar string representing the object sent.
             */
            respond_send_objects(opid: number, error: GLib.Error | null, users: string[], calobj: string): void;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        module DataCalFactory {
            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.DataFactory.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        class DataCalFactory extends EBackend.DataFactory implements EDataServer.Extensible, Gio.Initable {
            static $gtype: GObject.GType<DataCalFactory>;

            // Constructors

            constructor(properties?: Partial<DataCalFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend_per_process: number, cancellable?: Gio.Cancellable | null): DataCalFactory;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        module DataCalView {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                backend: CalBackend;
                connection: Gio.DBusConnection;
                object_path: string;
                objectPath: string;
                sexp: CalBackendSExp;
            }
        }

        class DataCalView extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<DataCalView>;

            // Properties

            get backend(): CalBackend;
            get connection(): Gio.DBusConnection;
            get object_path(): string;
            get objectPath(): string;
            get sexp(): CalBackendSExp;

            // Constructors

            constructor(properties?: Partial<DataCalView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                backend: any | null,
                sexp: any | null,
                connection: Gio.DBusConnection,
                object_path: string,
            ): DataCalView;

            // Methods

            /**
             * Compares the given `component` to the regular expression used for the
             * given view.
             * @param component the #ECalComponent object to match.
             * @returns TRUE if the object matches the expression, FALSE if not.
             */
            component_matches(component: ECal.Component): boolean;
            /**
             * This function is similar to e_cal_component_get_as_string() except
             * that it takes into account the fields-of-interest that `view` is
             * configured with and filters out any unneeded fields.
             * @param component The #ECalComponent to get the string for.
             * @returns A newly allocated string representation of @component suitable for @view.
             */
            get_component_string(component: ECal.Component): string;
            /**
             * Returns the #GDBusConnection on which the CalendarView D-Bus
             * interface is exported.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
            get_fields_of_interest(): GLib.HashTable<any, any> | null;
            /**
             * Gets the #ECalClientViewFlags that control the behaviour of `view`.
             * @returns the flags for @view.
             */
            get_flags(): ECal.ClientViewFlags;
            /**
             * Return the object path at which the CalendarView D-Bus inteface is
             * exported.
             * @returns the object path
             */
            get_object_path(): string;
            /**
             * Get the #ECalBackendSExp object used for the given view.
             * @returns The expression object used to search.
             */
            get_sexp(): any | null;
            /**
             * Checks whether the given view is already completed. Being completed means the initial
             * matching of objects have been finished, not that no more notifications about
             * changes will be sent. In fact, even after completed, notifications will still be sent
             * if there are changes in the objects matching the view search expression.
             * @returns TRUE if the view is completed, FALSE if still in progress.
             */
            is_completed(): boolean;
            /**
             * Checks whether the given view has already been started.
             * @returns TRUE if the view has already been started, FALSE otherwise.
             */
            is_started(): boolean;
            /**
             * Checks whether the given view has been stopped.
             * @returns TRUE if the view has been stopped, FALSE otherwise.
             */
            is_stopped(): boolean;
            /**
             * Notifies all view listeners of the completion of the view, including a
             * status code.
             * @param error View completion error, if any.
             */
            notify_complete(error: GLib.Error): void;
            /**
             * Notifies all view listeners of the addition of a list of components.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from iCalendar strings sent over the bus.
             * @param ecalcomponents List of #ECalComponent-s that have been added.
             */
            notify_components_added(ecalcomponents: ECal.Component[]): void;
            /**
             * Notifies all the view listeners of the addition of a single object.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from iCalendar strings sent over the bus.
             * @param component The #ECalComponent that has been added.
             */
            notify_components_added_1(component: ECal.Component): void;
            /**
             * Notifies all view listeners of the modification of a list of components.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from iCalendar strings sent over the bus.
             * @param ecalcomponents List of modified #ECalComponent-s.
             */
            notify_components_modified(ecalcomponents: ECal.Component[]): void;
            /**
             * Notifies all view listeners of the modification of `component`.
             *
             * Uses the #EDataCalView's fields-of-interest to filter out unwanted
             * information from iCalendar strings sent over the bus.
             * @param component The modified #ECalComponent.
             */
            notify_components_modified_1(component: ECal.Component): void;
            /**
             * Notifies all view listener of the removal of a list of objects.
             * @param ids List of IDs for the objects that have been removed.
             */
            notify_objects_removed(ids: ECal.ComponentId[]): void;
            /**
             * Notifies all view listener of the removal of a single object.
             * @param id ID of the removed object.
             */
            notify_objects_removed_1(id: ECal.ComponentId): void;
            /**
             * Notifies all view listeners of progress messages.
             * @param percent Percentage completed.
             * @param message Progress message to send to listeners.
             */
            notify_progress(percent: number, message: string): void;
            /**
             * Compares the given `object` to the regular expression used for the
             * given view.
             * @param object Object to match.
             * @returns TRUE if the object matches the expression, FALSE if not.
             */
            object_matches(object: string): boolean;
            /**
             * Refs the backend that `view` is querying. Unref the returned backend,
             * if not %NULL, with g_object_unref(), when no longer needed.
             * @returns The associated #ECalBackend.
             */
            ref_backend(): CalBackend | null;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        module IntervalTree {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class IntervalTree extends GObject.Object {
            static $gtype: GObject.GType<IntervalTree>;

            // Constructors

            constructor(properties?: Partial<IntervalTree.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): IntervalTree;

            // Methods

            destroy(): void;
            dump(): void;
            insert(start: never, end: never, comp: ECal.Component): boolean;
            remove(uid: string, rid: string): boolean;
            search(start: never, end: never): ECal.Component[] | null;
        }

        module SubprocessCalFactory {
            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.SubprocessFactory.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        class SubprocessCalFactory extends EBackend.SubprocessFactory implements Gio.Initable {
            static $gtype: GObject.GType<SubprocessCalFactory>;

            // Constructors

            constructor(properties?: Partial<SubprocessCalFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cancellable?: Gio.Cancellable | null): SubprocessCalFactory;

            // Inherited methods
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
             */
            init(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initializes the object implementing the interface.
             *
             * This method is intended for language bindings. If writing in C,
             * g_initable_new() should typically be used instead.
             *
             * The object must be initialized before any real use after initial
             * construction, either with this function or g_async_initable_init_async().
             *
             * Implementations may also support cancellation. If `cancellable` is not %NULL,
             * then initialization can be cancelled by triggering the cancellable object
             * from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
             * the object doesn't support cancellable initialization the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * If the object is not initialized, or initialization returns with an
             * error, then all operations on the object except g_object_ref() and
             * g_object_unref() are considered to be invalid, and have undefined
             * behaviour. See the [introduction][ginitable] for more details.
             *
             * Callers should not assume that a class which implements #GInitable can be
             * initialized multiple times, unless the class explicitly documents itself as
             * supporting this. Generally, a class’ implementation of init() can assume
             * (and assert) that it will only be called once. Previously, this documentation
             * recommended all #GInitable implementations should be idempotent; that
             * recommendation was relaxed in GLib 2.54.
             *
             * If a class explicitly supports being initialized multiple times, it is
             * recommended that the method is idempotent: multiple calls with the same
             * arguments should return the same results. Only the first call initializes
             * the object; further calls return the result of the first call.
             *
             * One reason why a class might need to support idempotent initialization is if
             * it is designed to be used via the singleton pattern, with a
             * #GObjectClass.constructor that sometimes returns an existing instance.
             * In this pattern, a caller would expect to be able to call g_initable_init()
             * on the result of g_object_new(), regardless of whether it is in fact a new
             * instance.
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

        type CalBackendClass = typeof CalBackend;
        type CalBackendFactoryClass = typeof CalBackendFactory;
        abstract class CalBackendFactoryPrivate {
            static $gtype: GObject.GType<CalBackendFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class CalBackendPrivate {
            static $gtype: GObject.GType<CalBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CalBackendSExpClass = typeof CalBackendSExp;
        abstract class CalBackendSExpPrivate {
            static $gtype: GObject.GType<CalBackendSExpPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CalBackendSyncClass = typeof CalBackendSync;
        abstract class CalBackendSyncPrivate {
            static $gtype: GObject.GType<CalBackendSyncPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CalCacheClass = typeof CalCache;
        /**
         * Holds the information about offline change for one component.
         */
        class CalCacheOfflineChange {
            static $gtype: GObject.GType<CalCacheOfflineChange>;

            // Fields

            uid: string;
            rid: string;
            revision: string;
            object: string;
            state: EBackend.OfflineState;

            // Constructors

            constructor(
                uid: string,
                rid: string | null,
                revision: string | null,
                object: string | null,
                state: EBackend.OfflineState,
            );
            _init(...args: any[]): void;

            static ['new'](
                uid: string,
                rid: string | null,
                revision: string | null,
                object: string | null,
                state: EBackend.OfflineState,
            ): CalCacheOfflineChange;

            // Static methods

            /**
             * Frees the `change` structure, previously allocated with e_cal_cache_offline_change_new()
             * or e_cal_cache_offline_change_copy().
             * @param change an #ECalCacheOfflineChange
             */
            static free(change?: any | null): void;

            // Methods

            copy(): CalCacheOfflineChange | null;
        }

        abstract class CalCachePrivate {
            static $gtype: GObject.GType<CalCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This structure is used to represent components returned
         * by the #ECalCache from various functions
         * such as e_cal_cache_search().
         *
         * The `extra` parameter will contain any data which was
         * previously passed for this component in e_cal_cache_put_component()
         * or set with e_cal_cache_set_component_extra().
         *
         * These should be freed with e_cal_cache_search_data_free().
         */
        class CalCacheSearchData {
            static $gtype: GObject.GType<CalCacheSearchData>;

            // Fields

            uid: string;
            rid: string;
            object: string;
            extra: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    uid: string;
                    rid: string;
                    object: string;
                    extra: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData;

            // Static methods

            /**
             * Frees the `ptr` structure, previously allocated with e_cal_cache_search_data_new()
             * or e_cal_cache_search_data_copy().
             * @param ptr an #ECalCacheSearchData
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): CalCacheSearchData | null;
        }

        type CalMetaBackendClass = typeof CalMetaBackend;
        class CalMetaBackendInfo {
            static $gtype: GObject.GType<CalMetaBackendInfo>;

            // Fields

            uid: string;
            revision: string;
            object: string;
            extra: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    uid: string;
                    revision: string;
                    object: string;
                    extra: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](
                uid: string,
                revision?: string | null,
                object?: string | null,
                extra?: string | null,
            ): CalMetaBackendInfo;

            // Static methods

            /**
             * Frees the `ptr` structure, previously allocated with e_cal_meta_backend_info_new()
             * or e_cal_meta_backend_info_copy().
             * @param ptr an #ECalMetaBackendInfo
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): CalMetaBackendInfo;
        }

        abstract class CalMetaBackendPrivate {
            static $gtype: GObject.GType<CalMetaBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class CalQueueTuple {
            static $gtype: GObject.GType<CalQueueTuple>;

            // Fields

            first: GLib.Queue;
            second: GLib.Queue;
            third: GLib.Queue;
            first_free_func: GLib.DestroyNotify;
            second_free_func: GLib.DestroyNotify;
            third_free_func: GLib.DestroyNotify;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            free(): void;
        }

        type DataCalClass = typeof DataCal;
        type DataCalFactoryClass = typeof DataCalFactory;
        abstract class DataCalFactoryPrivate {
            static $gtype: GObject.GType<DataCalFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DataCalPrivate {
            static $gtype: GObject.GType<DataCalPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataCalViewClass = typeof DataCalView;
        abstract class DataCalViewPrivate {
            static $gtype: GObject.GType<DataCalViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type IntervalTreeClass = typeof IntervalTree;
        abstract class IntervalTreePrivate {
            static $gtype: GObject.GType<IntervalTreePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SubprocessCalFactoryClass = typeof SubprocessCalFactory;
        abstract class SubprocessCalFactoryPrivate {
            static $gtype: GObject.GType<SubprocessCalFactoryPrivate>;

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

    export default EDataCal;
}

declare module 'gi://EDataCal' {
    import EDataCal20 from 'gi://EDataCal?version=2.0';
    export default EDataCal20;
}
// END
