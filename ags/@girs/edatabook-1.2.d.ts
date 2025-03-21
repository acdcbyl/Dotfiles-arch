/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./edataserver-1.2.d.ts" />
/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./camel-1.2.d.ts" />
/// <reference path="./ebookcontacts-1.2.d.ts" />
/// <reference path="./ebackend-1.2.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EDataBook?version=1.2' {
    // Module dependencies
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type EDataServer from 'gi://EDataServer?version=1.2';
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Soup from 'gi://Soup?version=3.0';
    import type Json from 'gi://Json?version=1.0';
    import type Camel from 'gi://Camel?version=1.2';
    import type EBookContacts from 'gi://EBookContacts?version=1.2';
    import type EBackend from 'gi://EBackend?version=1.2';

    export namespace EDataBook {
        /**
         * EDataBook-1.2
         */

        /**
         * What compare function should be used when comparing two values.
         */

        /**
         * What compare function should be used when comparing two values.
         */
        export namespace BookBackendSexpCompareKind {
            export const $gtype: GObject.GType<BookBackendSexpCompareKind>;
        }

        enum BookBackendSexpCompareKind {
            /**
             * Unknown compare kind
             */
            UNKNOWN,
            /**
             * Check whether a value begins with a string
             */
            BEGINS_WITH,
            /**
             * Check whether a value ends with a string
             */
            ENDS_WITH,
            /**
             * Check whether a value contains a string
             */
            CONTAINS,
            /**
             * Check whether a value exactly matches a string
             */
            IS,
        }
        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_cache_cursor_step().
         *
         * When an #EBookCacheCursor is created, the current position implied by %E_BOOK_CACHE_CURSOR_ORIGIN_CURRENT
         * is the same as %E_BOOK_CACHE_CURSOR_ORIGIN_BEGIN.
         */

        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_cache_cursor_step().
         *
         * When an #EBookCacheCursor is created, the current position implied by %E_BOOK_CACHE_CURSOR_ORIGIN_CURRENT
         * is the same as %E_BOOK_CACHE_CURSOR_ORIGIN_BEGIN.
         */
        export namespace BookCacheCursorOrigin {
            export const $gtype: GObject.GType<BookCacheCursorOrigin>;
        }

        enum BookCacheCursorOrigin {
            /**
             * The current cursor position.
             */
            CURRENT,
            /**
             * The beginning of the cursor results.
             */
            BEGIN,
            /**
             * The end of the cursor results.
             */
            END,
        }
        /**
         * Defines the types of possible errors reported by the #EBookSqlite
         */

        /**
         * Defines the types of possible errors reported by the #EBookSqlite
         */
        export namespace BookSqliteError {
            export const $gtype: GObject.GType<BookSqliteError>;
        }

        enum BookSqliteError {
            /**
             * An error was reported from the SQLite engine
             */
            ENGINE,
            /**
             * The error occurred due to an explicit constraint, this will
             * happen when attempting to add two contacts with the same UID.
             */
            CONSTRAINT,
            /**
             * A contact was not found by UID (this is
             * different from a query that returns no results, which is not an error).
             */
            CONTACT_NOT_FOUND,
            /**
             * A query was invalid. This can happen if the
             * search expression could not be parsed or if a phone number query contained non-phonenumber input.
             */
            INVALID_QUERY,
            /**
             * A query was not supported
             */
            UNSUPPORTED_QUERY,
            /**
             * An unsupported #EContactField was specified in the summary
             */
            UNSUPPORTED_FIELD,
            /**
             * An attempt was made to fetch results past the end of a contact list
             */
            END_OF_LIST,
            /**
             * An error occured while loading or creating the database
             */
            LOAD,
        }
        /**
         * Indicates the type of change which occurred in an #EbSqlChangeCallback
         */

        /**
         * Indicates the type of change which occurred in an #EbSqlChangeCallback
         */
        export namespace bSqlChangeType {
            export const $gtype: GObject.GType<bSqlChangeType>;
        }

        enum bSqlChangeType {
            /**
             * Contact was modified as a result of its addition to the addressbook
             */
            CONTACT_ADDED,
            /**
             * Contact was modified as a result of a locale change
             */
            LOCALE_CHANGED,
            /**
             * A symbolic end marker for this enumeration, will not be passed in callbacks.
             */
            LAST,
        }
        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_sqlite_cursor_step().
         *
         * When an #EbSqlCursor is created, the current position implied by %EBSQL_CURSOR_ORIGIN_CURRENT
         * is the same as %EBSQL_CURSOR_ORIGIN_BEGIN.
         */

        /**
         * Specifies the start position to in the list of traversed contacts
         * in calls to e_book_sqlite_cursor_step().
         *
         * When an #EbSqlCursor is created, the current position implied by %EBSQL_CURSOR_ORIGIN_CURRENT
         * is the same as %EBSQL_CURSOR_ORIGIN_BEGIN.
         */
        export namespace bSqlCursorOrigin {
            export const $gtype: GObject.GType<bSqlCursorOrigin>;
        }

        enum bSqlCursorOrigin {
            /**
             * The current cursor position
             */
            CURRENT,
            /**
             * The beginning of the cursor results.
             */
            BEGIN,
            /**
             * The ending of the cursor results.
             */
            END,
        }
        /**
         * Indicates the type of lock requested in e_book_sqlite_lock()
         */

        /**
         * Indicates the type of lock requested in e_book_sqlite_lock()
         */
        export namespace bSqlLockType {
            export const $gtype: GObject.GType<bSqlLockType>;
        }

        enum bSqlLockType {
            /**
             * Obtain a lock for reading
             */
            READ,
            /**
             * Obtain a lock for writing
             */
            WRITE,
        }
        /**
         * Indicates what type of action to take while unlocking the sqlite with e_book_sqlite_unlock()
         *
         * In the case that some addressbook modification failed while holding an %EBSQL_LOCK_WRITE lock,
         * then the #EBookSqlite must be unlocked with %EBSQL_UNLOCK_ROLLBACK.
         */

        /**
         * Indicates what type of action to take while unlocking the sqlite with e_book_sqlite_unlock()
         *
         * In the case that some addressbook modification failed while holding an %EBSQL_LOCK_WRITE lock,
         * then the #EBookSqlite must be unlocked with %EBSQL_UNLOCK_ROLLBACK.
         */
        export namespace bSqlUnlockAction {
            export const $gtype: GObject.GType<bSqlUnlockAction>;
        }

        enum bSqlUnlockAction {
            /**
             * Just unlock, this is appropriate for locks which were obtained with %EBSQL_LOCK_READ
             */
            NONE,
            /**
             * Commit any modifications which were made while the lock was held
             */
            COMMIT,
            /**
             * Rollback any modifications which were made while the lock was held
             */
            ROLLBACK,
        }
        /**
         * This key can be used with e_book_sqlite_get_key_value().
         *
         * In the case of a migration from an older SQLite, any value which
         * was previously stored with e_book_backend_sqlitedb_set_is_populated()
         * can be retrieved with this key.
         */
        const BOOK_SQL_IS_POPULATED_KEY: string;
        /**
         * This key can be used with e_book_sqlite_get_key_value().
         *
         * In the case of a migration from an older SQLite, any value which
         * was previously stored with e_book_backend_sqlitedb_set_sync_data()
         * can be retrieved with this key.
         */
        const BOOK_SQL_SYNC_DATA_KEY: string;
        /**
         * This environment variable configures where the address book
         * factory loads its backend modules from.
         */
        const EDS_ADDRESS_BOOK_MODULES: string;
        /**
         * This environment variable configures where the address book
         * factory subprocess is located in.
         */
        const EDS_SUBPROCESS_BOOK_PATH: string;
        const XIMIAN_VCARD: string;
        /**
         * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
         * or e_book_cache_search_data_copy().
         * @param data an #EBookCacheSearchData
         */
        function book_cache_search_data_free(data?: any | null): void;
        /**
         * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
         * or e_book_meta_backend_info_copy().
         * @param ptr an #EBookMetaBackendInfo
         */
        function book_meta_backend_info_free(ptr?: any | null): void;
        /**
         * Fetches the extra data previously set for `uid,` either with
         * e_book_sqlite_set_contact_extra() or when adding contacts,
         * without locking internal mutex.
         * @param ebsql An #EBookSqlite
         * @param uid The uid of the contact to fetch the extra data for
         * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
         */
        function ebsql_get_contact_extra_unlocked(ebsql: BookSqlite, uid: string): [boolean, string];
        /**
         * Fetch the #EContact specified by `uid` in `ebsql` without locking internal mutex.
         *
         * If `meta_contact` is specified, then a shallow #EContact will be created
         * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
         * @param ebsql An #EBookSqlite
         * @param uid The uid of the contact to fetch
         * @param meta_contact Whether an entire contact is desired, or only the metadata
         * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
         */
        function ebsql_get_contact_unlocked(
            ebsql: BookSqlite,
            uid: string,
            meta_contact: boolean,
        ): [boolean, EBookContacts.Contact];
        /**
         * Fetch a vcard string for `uid` in `ebsql` without locking internal mutex.
         *
         * If `meta_contact` is specified, then a shallow vcard representation will be
         * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
         * @param ebsql An #EBookSqlite
         * @param uid The uid of the contact to fetch
         * @param meta_contact Whether an entire contact is desired, or only the metadata
         * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
         */
        function ebsql_get_vcard_unlocked(ebsql: BookSqlite, uid: string, meta_contact: boolean): [boolean, string];
        interface BookBackendCustomOpFunc {
            (book_backend: BookBackend, cancellable?: Gio.Cancellable | null): void;
        }
        interface BookBackendForeachViewFunc {
            (backend: BookBackend, view: DataBookView): boolean;
        }
        interface BookCacheSearchFunc {
            (
                book_cache: BookCache,
                uid: string,
                revision: string,
                object: string,
                extra: string,
                custom_flags: number,
                offline_state: EBackend.OfflineState,
            ): boolean;
        }
        interface BookSqliteSelectFunc {
            (ebsql: BookSqlite, column_names: string[], column_values: string[]): boolean;
        }
        interface DataBookCursorCompareContactFunc {
            (cursor: DataBookCursor, contact: EBookContacts.Contact): number;
        }
        interface DataBookCursorGetPositionFunc {
            (cursor: DataBookCursor, cancellable?: Gio.Cancellable | null): boolean;
        }
        interface DataBookCursorLoadLocaleFunc {
            (cursor: DataBookCursor): boolean;
        }
        interface DataBookCursorSetAlphabetIndexFunc {
            (cursor: DataBookCursor, index: number, locale: string): boolean;
        }
        interface DataBookCursorSetSexpFunc {
            (cursor: DataBookCursor, sexp?: string | null): boolean;
        }
        interface DataBookCursorStepFunc {
            (
                cursor: DataBookCursor,
                revision_guard: string | null,
                flags: EBookContacts.BookCursorStepFlags,
                origin: EBookContacts.BookCursorOrigin,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): number;
        }
        interface bSqlChangeCallback {
            (change_type: bSqlChangeType, uid: string, extra: string, vcard: string): void;
        }
        interface bSqlVCardCallback {
            (uid: string, extra: string): string;
        }
        /**
         * Defines the behaviour of e_book_cache_cursor_step().
         */

        /**
         * Defines the behaviour of e_book_cache_cursor_step().
         */
        export namespace BookCacheCursorStepFlags {
            export const $gtype: GObject.GType<BookCacheCursorStepFlags>;
        }

        enum BookCacheCursorStepFlags {
            /**
             * The cursor position should be modified while stepping.
             */
            MOVE,
            /**
             * Traversed contacts should be listed and returned while stepping.
             */
            FETCH,
        }
        /**
         * Defines the behaviour of e_book_sqlite_cursor_step().
         */

        /**
         * Defines the behaviour of e_book_sqlite_cursor_step().
         */
        export namespace bSqlCursorStepFlags {
            export const $gtype: GObject.GType<bSqlCursorStepFlags>;
        }

        enum bSqlCursorStepFlags {
            /**
             * The cursor position should be modified while stepping
             */
            MOVE,
            /**
             * Traversed contacts should be listed and returned while stepping.
             */
            FETCH,
        }
        module BookBackend {
            // Signal callback interfaces

            interface Closed {
                (sender: string): void;
            }

            interface Shutdown {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends EBackend.Backend.ConstructorProps {
                cache_dir: string;
                cacheDir: string;
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
        class BookBackend extends EBackend.Backend {
            static $gtype: GObject.GType<BookBackend>;

            // Properties

            get cache_dir(): string;
            set cache_dir(val: string);
            get cacheDir(): string;
            set cacheDir(val: string);
            get proxy_resolver(): Gio.ProxyResolver;
            get proxyResolver(): Gio.ProxyResolver;
            get registry(): EDataServer.SourceRegistry;
            get writable(): boolean;
            set writable(val: boolean);

            // Constructors

            constructor(properties?: Partial<BookBackend.ConstructorProps>, ...args: any[]);

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

            // Virtual methods

            /**
             * A signal notifying that the backend was closed
             * @param sender
             */
            vfunc_closed(sender: string): void;
            /**
             * For addressbook backends which support Direct Read Access, configure a
             *                    backend instantiated on the client side for Direct Read Access, using data
             *                    reported from the server via the `get_direct_book` method.
             * @param config
             */
            vfunc_impl_configure_direct(config: string): void;
            /**
             * Checkes whether the backend contains an email address
             * @param book
             * @param opid
             * @param cancellable
             * @param email_address
             */
            vfunc_impl_contains_email(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                email_address: string,
            ): void;
            /**
             * Add and store the passed vcards
             * @param book
             * @param opid
             * @param cancellable
             * @param vcards
             * @param opflags
             */
            vfunc_impl_create_contacts(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                vcards: string,
                opflags: number,
            ): void;
            /**
             * Delete an #EDataBookCursor previously created by this backend
             * @param cursor
             */
            vfunc_impl_delete_cursor(cursor: DataBookCursor): boolean;
            /**
             * Return the currently set locale setting (must be a string duplicate, for thread safety).
             */
            vfunc_impl_dup_locale(): string;
            /**
             * retrieve indexes into an alphabet for contacts in the "manual query" view; default
             *    implementation returns value set by e_book_backend_set_view_indices(). Since: 3.50
             * @param view_id
             */
            vfunc_impl_dup_view_indices(view_id: number): EBookContacts.BookIndices;
            /**
             * Fetch a property value by name from the backend
             * @param prop_name
             */
            vfunc_impl_get_backend_property(prop_name: string): string;
            /**
             * Fetch a contact by UID
             * @param book
             * @param opid
             * @param cancellable
             * @param id
             */
            vfunc_impl_get_contact(book: DataBook, opid: number, cancellable: Gio.Cancellable | null, id: string): void;
            /**
             * Fetch a list of contacts based on a search expression
             * @param book
             * @param opid
             * @param cancellable
             * @param query
             */
            vfunc_impl_get_contact_list(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                query: string,
            ): void;
            /**
             * Fetch a list of contact UIDs based on a search expression
             * @param book
             * @param opid
             * @param cancellable
             * @param query
             */
            vfunc_impl_get_contact_list_uids(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                query: string,
            ): void;
            /**
             * retrieve how many contacts a "manual query" view has; default implementation
             *    returns value set by e_book_backend_set_view_n_total(). Since: 3.50
             * @param view_id
             */
            vfunc_impl_get_view_n_total(view_id: number): number;
            /**
             * Modify the existing contacts using the passed vcards
             * @param book
             * @param opid
             * @param cancellable
             * @param vcards
             * @param opflags
             */
            vfunc_impl_modify_contacts(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                vcards: string,
                opflags: number,
            ): void;
            /**
             * Notify changes which might have occured for a given contact
             * @param contact
             */
            vfunc_impl_notify_update(contact: EBookContacts.Contact): void;
            /**
             * Open the backend
             * @param book
             * @param opid
             * @param cancellable
             */
            vfunc_impl_open(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void;
            /**
             * Refresh the backend
             * @param book
             * @param opid
             * @param cancellable
             */
            vfunc_impl_refresh(book: DataBook, opid: number, cancellable?: Gio.Cancellable | null): void;
            /**
             * Remove the contacts specified by the passed UIDs
             * @param book
             * @param opid
             * @param cancellable
             * @param uids
             * @param opflags
             */
            vfunc_impl_remove_contacts(
                book: DataBook,
                opid: number,
                cancellable: Gio.Cancellable | null,
                uids: string,
                opflags: number,
            ): void;
            /**
             * Store & remember the passed locale setting
             * @param locale
             * @param cancellable
             */
            vfunc_impl_set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * sets sort fields for "manual query" views; default implementation saves
             *    the values into internal structures, which can be read back with e_book_backend_dup_view_sort_fields(). Since 3.50
             * @param view_id
             * @param fields
             */
            vfunc_impl_set_view_sort_fields(view_id: number, fields: EBookContacts.BookClientViewSortFields): void;
            /**
             * Start up the specified view
             * @param view
             */
            vfunc_impl_start_view(view: DataBookView): void;
            /**
             * Stop the specified view
             * @param view
             */
            vfunc_impl_stop_view(view: DataBookView): void;
            /**
             * A signal notifying that the backend is being shut down
             */
            vfunc_shutdown(): void;

            // Methods

            /**
             * Adds `view` to `backend` for querying.
             * @param view an #EDataBookView
             */
            add_view(view: DataBookView): void;
            /**
             * This method is called on `backend` in direct read access mode.
             * The `config` argument is the same configuration string which
             * the same backend reported in the #EDataBookDirect returned
             * by e_book_backend_get_direct_book().
             *
             * The configuration string is optional and is used to ensure
             * that direct access backends are properly configured to
             * interface with the same data as the running server side backend.
             * @param config The configuration string for the given backend
             */
            configure_direct(config: string): void;
            /**
             * Asynchronously checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable optional #GCancellable object, or %NULL
             */
            contains_email(email_address: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            contains_email(
                email_address: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            contains_email(
                email_address: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_contains_email().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            contains_email_finish(result: Gio.AsyncResult): boolean;
            /**
             * Checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param email_address an email address
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE when found the @email_address, %FALSE on failure
             */
            contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously creates one or more new contacts from `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_create_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            create_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously creates one or more new contacts from `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_create_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_contacts(
                vcards: string,
                opflags: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates one or more new contacts from `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_create_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_contacts(
                vcards: string,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_create_contacts().
             *
             * An #EContact instance for each newly-created contact is deposited in
             * `out_contacts`.  The returned #EContact instances are referenced for
             * thread-safety and must be unreferenced with g_object_unref() when
             * finished with them.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @param out_contacts a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            create_contacts_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean;
            /**
             * Creates one or more new contacts from `vcards,` and deposits an #EContact
             * instance for each newly-created contact in `out_contacts`.
             *
             * The returned #EContact instances are referenced for thread-safety and
             * must be unreferenced with g_object_unref() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param out_contacts a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            create_contacts_sync(
                vcards: string,
                opflags: number,
                out_contacts: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Creates a new #EDataBookCursor for the given backend if the backend
             * has cursor support. If the backend does not support cursors then
             * an %E_CLIENT_ERROR_NOT_SUPPORTED error will be set in `error`.
             *
             * Backends can also refuse to create cursors for some values of `sort_fields`
             * and report more specific errors.
             *
             * The returned cursor belongs to `backend` and should be destroyed
             * with e_book_backend_delete_cursor() when no longer needed.
             * @param sort_fields the #EContactFields to sort by
             * @param sort_types the #EBookCursorSortTypes for the sorted fields
             * @param n_fields the number of fields in the @sort_fields and @sort_types
             * @returns A newly created cursor, the cursor belongs    to the backend and should not be unreffed, or %NULL on error
             */
            create_cursor(
                sort_fields: EBookContacts.ContactField | null,
                sort_types: EBookContacts.BookCursorSortType | null,
                n_fields: number,
            ): DataBookCursor;
            /**
             * Requests `backend` to release and destroy `cursor,` this
             * will trigger an %E_CLIENT_ERROR_INVALID_ARG error if `cursor`
             * is not owned by `backend`.
             * @param cursor the #EDataBookCursor to destroy
             * @returns Whether @cursor was successfully deleted.
             */
            delete_cursor(cursor: DataBookCursor): boolean;
            /**
             * Thread-safe variation of e_book_backend_get_cache_dir().
             * Use this function when accessing `backend` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #EBookBackend:cache-dir
             */
            dup_cache_dir(): string;
            /**
             * Fetches a copy of the currently configured locale for the addressbook
             * @returns A copy of the currently configured locale for the addressbook.   Free with g_free() when done with it.
             */
            dup_locale(): string;
            /**
             * Returns `range_length` contacts from 0-based index `range_start`
             * in the view identified by the `view_id`.
             * When there are asked more than e_book_backend_get_view_n_total()
             * contacts only those up to the total number of contacts are read.
             * Asking for out of range contacts results in an error, though
             * it can return less than `range_length` contacts.
             *
             * The default implementation tracks the view's content in memory
             * and returns the contacts as needed. The subclasses can do more
             * efficient implementation.
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @param range_start 0-based range start to retrieve the contacts for
             * @param range_length how many contacts to retrieve
             * @returns an array of the contacts, or %NULL, when the view cannot be found    or when the @range_start is out of bounds.
             */
            dup_view_contacts(
                view_id: number,
                range_start: number,
                range_length: number,
            ): EBookContacts.Contact[] | null;
            /**
             * Returns a list of #EBookIndices holding indices of the contacts
             * in the view identified by `view_id`. The array is terminated by an item
             * with chr member being %NULL.
             *
             * The default implementation returns an array previously set
             * by e_book_backend_set_view_indices().
             *
             * Free the returned array with e_book_indices_free(), when no longer needed.
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @returns an array of #EBookIndices, or %NULL
             */
            dup_view_indices(view_id: number): EBookContacts.BookIndices | null;
            /**
             * Returns currently used sort fields for manual query views. The returned
             * array is NULL only if the view could not be found. The default sort is
             * by the file-as filed in ascending order.
             *
             * The array is terminated by an item with an %E_CONTACT_FIELD_LAST field.
             *
             * Free the returned array with e_book_client_view_sort_fields_free(),
             * when no longer needed.
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @returns current sort fields for the @view_id, as an #EBookClientViewSortFields    array, or %NULL, when the view could not be found.
             */
            dup_view_sort_fields(view_id: number): EBookContacts.BookClientViewSortFields;
            /**
             * Calls `func` for each existing view (as returned by e_book_backend_list_views()).
             * The `func` can return %FALSE to stop early.
             * @param func an #EBookBackendForeachViewFunc function to call
             * @returns whether the call had been stopped by @func
             */
            foreach_view(func: BookBackendForeachViewFunc): boolean;
            /**
             * Notifies each view of the `backend` about progress. When `only_completed_views`
             * is %TRUE, notifies only completed views.
             * @param only_completed_views whether notify in completed views only
             * @param percent percent complete
             * @param message message describing the operation in progress, or %NULL
             */
            foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void;
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
             * Asynchronously obtains an #EContact for `uid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_book_backend_get_contact_finish() to get the result of the
             * operation.
             * @param uid a contact ID
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_contact(uid: string, cancellable?: Gio.Cancellable | null): Promise<EBookContacts.Contact>;
            /**
             * Asynchronously obtains an #EContact for `uid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_book_backend_get_contact_finish() to get the result of the
             * operation.
             * @param uid a contact ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact(
                uid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains an #EContact for `uid`.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_book_backend_get_contact_finish() to get the result of the
             * operation.
             * @param uid a contact ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact(
                uid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<EBookContacts.Contact> | void;
            /**
             * Finishes the operation started with e_book_backend_get_contact_finish().
             *
             * The returned #EContact is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             *
             * If an error occurred, the function will set `error` and return %NULL.
             * @param result a #GAsyncResult
             * @returns an #EContact, or %NULL on error
             */
            get_contact_finish(result: Gio.AsyncResult): EBookContacts.Contact;
            /**
             * Asynchronously obtains a set of #EContact instances which satisfy the
             * criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_contact_list(query: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously obtains a set of #EContact instances which satisfy the
             * criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact_list(
                query: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains a set of #EContact instances which satisfy the
             * criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_finish() to get the result of the
             * operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact_list(
                query: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_get_contact_list().
             *
             * The matching #EContact instances are deposited in `out_contacts`.  The
             * returned #EContact instances are referenced for thread-safety and must
             * be unreferenced with g_object_unref() when finished with them.
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param result a #GAsyncResult
             * @param out_contacts a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list_finish(result: Gio.AsyncResult, out_contacts: GLib.Queue): boolean;
            /**
             * Obtains a set of #EContact instances which satisfy the criteria specified
             * in `query,` and deposits them in `out_contacts`.
             *
             * The returned #EContact instances are referenced for thread-safety and
             * must be unreferenced with g_object_unref() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param query a search query in S-expression format
             * @param out_contacts a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list_sync(
                query: string,
                out_contacts: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously obtains a set of ID strings for contacts which satisfy
             * the criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_uids_finish() to get the result of
             * the operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously obtains a set of ID strings for contacts which satisfy
             * the criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_uids_finish() to get the result of
             * the operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact_list_uids(
                query: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains a set of ID strings for contacts which satisfy
             * the criteria specified in `query`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_get_contact_list_uids_finish() to get the result of
             * the operation.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_contact_list_uids(
                query: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with
             * e_book_backend_get_contact_list_uids_finish().
             *
             * ID strings for the matching contacts are deposited in `out_uids,` and
             * must be freed with g_free() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param result a #GAsyncResult
             * @param out_uids a #GQueue in which to deposit results
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list_uids_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean;
            /**
             * Obtains a set of ID strings for contacts which satisfy the criteria
             * specified in `query,` and deposits them in `out_uids`.
             *
             * The returned ID strings must be freed with g_free() with finished
             * with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param query a search query in S-expression format
             * @param out_uids a #GQueue in which to deposit results
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list_uids_sync(
                query: string,
                out_uids: GLib.Queue,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Obtains an #EContact for `uid`.
             *
             * The returned #EContact is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param uid a contact ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #EContact, or %NULL on error
             */
            get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact;
            /**
             * Tries to create an #EDataBookDirect for `backend` if
             * backend supports direct read access.
             * @returns A new #EDataBookDirect object, or %NULL if          @backend does not support direct access
             */
            get_direct_book(): DataBookDirect | null;
            /**
             * Returns the data source registry to which #EBackend:source belongs.
             * @returns an #ESourceRegistry
             */
            get_registry(): EDataServer.SourceRegistry;
            /**
             * Returns how many contacts the view identified by `view_id`
             * contains.
             *
             * The default implementation of this virtual method returns
             * the value previously set by e_book_backend_set_view_n_total().
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @returns how many contacts the view identified by @view_id    contains.
             */
            get_view_n_total(view_id: number): number;
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
            /**
             * Checks if we can write to `backend`.
             * @returns %TRUE if read-only, %FALSE if not.
             */
            is_readonly(): boolean;
            /**
             * Returns a list of #EDataBookView instances added with
             * e_book_backend_add_view().
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
             * @returns a list of book views
             */
            list_views(): DataBookView[];
            /**
             * Asynchronously modifies one or more contacts according to `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_modify_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            modify_contacts(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously modifies one or more contacts according to `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_modify_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            modify_contacts(
                vcards: string,
                opflags: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously modifies one or more contacts according to `vcards`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_modify_contacts_finish() to get the result of the
             * operation.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            modify_contacts(
                vcards: string,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_modify_contacts().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            modify_contacts_finish(result: Gio.AsyncResult): boolean;
            /**
             * Modifies one or more contacts according to `vcards`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            modify_contacts_sync(vcards: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Notifies all of `backend'`s book views that the current set of
             * notifications is complete; use this after a series of
             * e_book_backend_notify_update() and e_book_backend_notify_remove() calls.
             */
            notify_complete(): void;
            /**
             * Notifies each backend listener about an error. This is meant to be used
             * for cases where is no GError return possibility, to notify user about
             * an issue.
             * @param message an error message
             */
            notify_error(message: string): void;
            /**
             * Notifies clients about property value change.
             * @param prop_name property name, which changed
             * @param prop_value new property value
             */
            notify_property_changed(prop_name: string, prop_value?: string | null): void;
            /**
             * Notifies all of `backend'`s book views that the contact with UID
             * `id` has been removed.
             *
             * e_data_book_respond_remove_contacts() calls this function for you. You
             * only need to call this from your backend if contacts are removed by
             * another (non-PAS-using) client.
             * @param id a contact id
             */
            notify_remove(id: string): void;
            /**
             * Notifies all of `backend'`s book views about the new or modified
             * contacts `contact`.
             *
             * e_data_book_respond_create_contacts() and e_data_book_respond_modify_contacts() call this
             * function for you. You only need to call this from your backend if
             * contacts are created or modified by another (non-PAS-using) client.
             * @param contact a new or modified contact
             */
            notify_update(contact: EBookContacts.Contact): void;
            /**
             * Asynchronously "opens" the `backend`.  Opening a backend is something of
             * an outdated concept, but the operation is hanging around for a little
             * while longer.  This usually involves some custom initialization logic,
             * and testing of remote authentication if applicable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_open_finish() to get the result of the operation.
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
             * call e_book_backend_open_finish() to get the result of the operation.
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
             * call e_book_backend_open_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            open(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_open().
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
             *     This is a temporary function to serve #EDataBook's "respond"
             *     functions until they can be removed.  Nothing else should be
             *     calling this function.
             *   </para>
             * </note>
             * @param opid an operation ID given to #EDataBook
             * @returns a #GTask
             */
            prepare_for_completion(opid: number): Gio.Task;
            /**
             * Returns the #EDataBook for `backend`.  The #EDataBook is essentially
             * the glue between incoming D-Bus requests and `backend'`s native API.
             *
             * An #EDataBook should be set only once after `backend` is first created.
             * If an #EDataBook has not yet been set, the function returns %NULL.
             *
             * The returned #EDataBook is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns an #EDataBook, or %NULL
             */
            ref_data_book(): DataBook | null;
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
             * References an #EDataBookView by its identifier.
             *
             * Unref the returned non-NULL view with g_object_unref(),
             * when no longer needed.
             * @param view_id a view identifier
             * @returns a referenced #EDataBookView corresponding    to the given @view_id, or %NULL, when it cannot be found
             */
            ref_view(view_id: number): DataBookView | null;
            /**
             * References user data previously set by e_book_backend_take_view_user_data()
             * for the `view_id`.
             *
             * Free the returned non-NULL object with g_object_unref(),
             * when no longer needed.
             * @param view_id a view identifier
             * @returns previously set user data for the @view_id,   or %NULL when none had been set yet or when the view does not exist.
             */
            ref_view_user_data<T = GObject.Object>(view_id: number): T;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_book_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_book_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            refresh(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_book_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_book_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously initiates a refresh for `backend,` if the `backend` supports
             * refreshing.  The actual refresh operation completes on its own time.  This
             * function, along with e_book_backend_refresh_finish(), merely initiates the
             * operation.
             *
             * Once the refresh is initiated, `callback` will be called.  You can then
             * call e_book_backend_refresh_finish() to get the result of the initiation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the refresh initiation started with e_book_backend_refresh().
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
             * If an error occurs while initiating the refresh, the function will set
             * `error` and return %FALSE.  If the `backend` does not support refreshing,
             * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
             * %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously removes one or more contacts according to `uids`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_remove_contacts_finish() to get the result of the
             * operation.
             * @param uids a %NULL-terminated array of contact ID strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            remove_contacts(uids: string[], opflags: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously removes one or more contacts according to `uids`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_remove_contacts_finish() to get the result of the
             * operation.
             * @param uids a %NULL-terminated array of contact ID strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove_contacts(
                uids: string[],
                opflags: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously removes one or more contacts according to `uids`.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_backend_remove_contacts_finish() to get the result of the
             * operation.
             * @param uids a %NULL-terminated array of contact ID strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove_contacts(
                uids: string[],
                opflags: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_book_backend_remove_contacts().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            remove_contacts_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes one or more contacts according to `uids`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param uids a %NULL-terminated array of contact ID strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            remove_contacts_sync(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes `view` from `backend`.
             * @param view an #EDataBookView
             */
            remove_view(view: DataBookView): void;
            /**
             * Schedules user function `func` to be run in a dedicated thread as
             * a blocking operation.
             *
             * The function adds its own reference to `use_cancellable,` if not %NULL.
             *
             * The error returned from `func` is propagated to client using
             * e_book_backend_notify_error() function. If it's not desired,
             * then left the error unchanged and notify about errors manually.
             * @param use_cancellable an optional #GCancellable to use for @func
             * @param func a function to call in a dedicated thread
             * @param user_data_free optional destroy call back for @user_data
             */
            schedule_custom_operation(
                use_cancellable: Gio.Cancellable | null,
                func: BookBackendCustomOpFunc,
                user_data_free?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Sets the cache directory path for use by `backend`.
             *
             * Note that #EBookBackend is initialized with a default cache directory
             * path which should suffice for most cases.  Backends should not override
             * the default path without good reason.
             * @param cache_dir a local cache directory path
             */
            set_cache_dir(cache_dir: string): void;
            /**
             * Sets the #EDataBook for `backend`.  The #EDataBook is essentially the
             * glue between incoming D-Bus requests and `backend'`s native API.
             *
             * An #EDataBook should be set only once after `backend` is first created.
             * @param data_book an #EDataBook
             */
            set_data_book(data_book: DataBook): void;
            /**
             * Notify the addressbook backend that the current locale has
             * changed, this is important for backends which support
             * ordered result lists which are locale sensitive.
             * @param locale the new locale for the addressbook
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Stores current `indices` for the view identified by the `view_id` and,
             * if such exists, notifies about it also the corresponding #EDataBookView.
             * The array is terminated by an item with chr member being %NULL.
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @param indices an array of #EBookIndices, or %NULL
             */
            set_view_indices(view_id: number, indices?: EBookContacts.BookIndices | null): void;
            /**
             * Stores how many contacts the view identified by `view_id`
             * contains. It also sets the `n_total` to the corresponding
             * #EDataBookView, if such exists. The function does nothing
             * when the view cannot be found.
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @param n_total the value to set
             */
            set_view_n_total(view_id: number, n_total: number): void;
            /**
             * Sets the sort fields for the view identified by the `view_id`.
             * The `fields` array should be terminated by an item, which has
             * the field member set to %E_CONTACT_FIELD_LAST.
             *
             * When the `fields` is %NULL, the sort by file-as in ascending order
             * is used instead.
             *
             * The default implementation of this virtual method stores
             * the `fields` into the internal structure for the `backend,`
             * to be available by e_book_backend_dup_view_sort_fields().
             *
             * Note: This function should be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY` views.
             * @param view_id a view identifier
             * @param fields an array of #EBookClientViewSortFields, or %NULL
             */
            set_view_sort_fields(view_id: number, fields?: EBookContacts.BookClientViewSortFields | null): void;
            /**
             * Sets whether `backend` will accept changes to its data content.
             * @param writable whether @backend is writable
             */
            set_writable(writable: boolean): void;
            /**
             * Starts running the query specified by `view,` emitting signals for
             * matching contacts.
             * @param view the #EDataBookView to start
             */
            start_view(view: DataBookView): void;
            /**
             * Stops running the query specified by `view,` emitting no more signals.
             * @param view the #EDataBookView to stop
             */
            stop_view(view: DataBookView): void;
            sync(): void;
            /**
             * Sets the user data for the `view_id`. The function assumes ownership
             * of the `user_data`. The `user_data` can be %NULL, which unsets
             * the current user data for the view.
             *
             * This is primarily aimed as a helper for backend implementations
             * of the manual query views (%E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY).
             * @param view_id a view identifier
             * @param user_data user data to set
             */
            take_view_user_data(view_id: number, user_data?: GObject.Object | null): void;
        }

        module BookBackendFactory {
            // Constructor properties interface

            interface ConstructorProps extends EBackend.BackendFactory.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class BookBackendFactory extends EBackend.BackendFactory {
            static $gtype: GObject.GType<BookBackendFactory>;

            // Constructors

            constructor(properties?: Partial<BookBackendFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module BookBackendSExp {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class BookBackendSExp extends GObject.Object {
            static $gtype: GObject.GType<BookBackendSExp>;

            // Constructors

            constructor(properties?: Partial<BookBackendSExp.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](text: string): BookBackendSExp;

            // Static methods

            /**
             * A utility function, which compares only numbers from the `phone_value` with `lookup_value`
             * using `compare_kind` method.
             * @param phone_value a phone number to compare
             * @param lookup_value a value to lookup for in the phone number
             * @param compare_kind an #EBookBackendSexpCompareKind
             */
            static util_phone_compare(
                phone_value: string,
                lookup_value: string,
                compare_kind: BookBackendSexpCompareKind,
            ): boolean;

            // Methods

            /**
             * Locks the `sexp`. Other threads cannot use it until
             * it's unlocked with e_book_backend_sexp_unlock().
             */
            lock(): void;
            /**
             * Checks if `contact` matches `sexp`.
             * @param contact an #EContact
             * @returns %TRUE if the contact matches, %FALSE otherwise
             */
            match_contact(contact: EBookContacts.Contact): boolean;
            /**
             * Checks if `vcard` matches `sexp`.
             * @param vcard a vCard string
             * @returns %TRUE if the vCard matches, %FALSE otherwise
             */
            match_vcard(vcard: string): boolean;
            /**
             * Retrieve the text expression for the given #EBookBackendSExp object.
             * @returns the text expression
             */
            text(): string;
            /**
             * Unlocks the `sexp,` previously locked by e_book_backend_sexp_lock().
             */
            unlock(): void;
        }

        module BookBackendSync {
            // Constructor properties interface

            interface ConstructorProps extends BookBackend.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class BookBackendSync extends BookBackend {
            static $gtype: GObject.GType<BookBackendSync>;

            // Constructors

            constructor(properties?: Partial<BookBackendSync.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Open the backend
             * @param cancellable
             */
            vfunc_open_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Refresh the backend
             * @param cancellable
             */
            vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

            // Methods

            /**
             * Checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param email_address an email address
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE when found the @email_address, %FALSE on failure
             */
            contains_email(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
            // Conflicted with EDataBook.BookBackend.contains_email
            contains_email(...args: never[]): any;
            /**
             * Creates one or more new contacts from `vcards,` and deposits an #EContact
             * instance for each newly-created contact in `out_contacts`.
             *
             * The returned #EContact instances are referenced for thread-safety and
             * must be unreferenced with g_object_unref() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            create_contacts(
                vcards: string,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact[]];
            // Conflicted with EDataBook.BookBackend.create_contacts
            create_contacts(...args: never[]): any;
            /**
             * Obtains an #EContact for `uid`.
             *
             * The returned #EContact is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             *
             * If an error occurs, the function will set `error` and return %NULL.
             * @param uid a contact ID
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #EContact, or %NULL on error
             */
            get_contact(uid: string, cancellable?: Gio.Cancellable | null): EBookContacts.Contact;
            // Conflicted with EDataBook.BookBackend.get_contact
            get_contact(...args: never[]): any;
            /**
             * Obtains a set of #EContact instances which satisfy the criteria specified
             * in `query,` and deposits them in `out_contacts`.
             *
             * The returned #EContact instances are referenced for thread-safety and
             * must be unreferenced with g_object_unref() when finished with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list(query: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact[]];
            // Conflicted with EDataBook.BookBackend.get_contact_list
            get_contact_list(...args: never[]): any;
            /**
             * Obtains a set of ID strings for contacts which satisfy the criteria
             * specified in `query,` and deposits them in `out_uids`.
             *
             * The returned ID strings must be freed with g_free() with finished
             * with them.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * Note that an empty result set does not necessarily imply an error.
             * @param query a search query in S-expression format
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_contact_list_uids(query: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            // Conflicted with EDataBook.BookBackend.get_contact_list_uids
            get_contact_list_uids(...args: never[]): any;
            /**
             * Modifies one or more contacts according to `vcards`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param vcards a %NULL-terminated array of vCard strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            modify_contacts(
                vcards: string,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact[]];
            // Conflicted with EDataBook.BookBackend.modify_contacts
            modify_contacts(...args: never[]): any;
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
            open(cancellable?: Gio.Cancellable | null): boolean;
            // Conflicted with EDataBook.BookBackend.open
            open(...args: never[]): any;
            /**
             * Initiates a refresh for `backend,` if the `backend` supports refreshing.
             * The actual refresh operation completes on its own time.  This function
             * merely initiates the operation.
             *
             * If an error occurs while initiating the refresh, the function will set
             * `error` and return %FALSE.  If the `backend` does not support refreshing,
             * the function will set an %E_CLIENT_ERROR_NOT_SUPPORTED error and return
             * %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            refresh(cancellable?: Gio.Cancellable | null): boolean;
            // Conflicted with EDataBook.BookBackend.refresh
            refresh(...args: never[]): any;
            /**
             * Removes one or more contacts according to `uids`.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param uids a %NULL-terminated array of contact ID strings
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            remove_contacts(uids: string, opflags: number, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            // Conflicted with EDataBook.BookBackend.remove_contacts
            remove_contacts(...args: never[]): any;
        }

        module BookCache {
            // Signal callback interfaces

            interface CategoriesChanged {
                (object: string): void;
            }

            interface DupContactRevision {
                (object: EBookContacts.Contact): string;
            }

            interface E164Changed {
                (object: EBookContacts.Contact, p0: boolean): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.Cache.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {
                locale: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below.
         */
        class BookCache extends EBackend.Cache implements EDataServer.Extensible {
            static $gtype: GObject.GType<BookCache>;

            // Properties

            get locale(): string;

            // Constructors

            constructor(properties?: Partial<BookCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                filename: string,
                source?: EDataServer.Source | null,
                cancellable?: Gio.Cancellable | null,
            ): BookCache;

            static new_full(
                filename: string,
                source?: EDataServer.Source | null,
                setup?: EBookContacts.SourceBackendSummarySetup | null,
                cancellable?: Gio.Cancellable | null,
            ): BookCache;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'categories-changed', callback: (_source: this, object: string) => void): number;
            connect_after(signal: 'categories-changed', callback: (_source: this, object: string) => void): number;
            emit(signal: 'categories-changed', object: string): void;
            connect(
                signal: 'dup-contact-revision',
                callback: (_source: this, object: EBookContacts.Contact) => string,
            ): number;
            connect_after(
                signal: 'dup-contact-revision',
                callback: (_source: this, object: EBookContacts.Contact) => string,
            ): number;
            emit(signal: 'dup-contact-revision', object: EBookContacts.Contact): void;
            connect(
                signal: 'e164-changed',
                callback: (_source: this, object: EBookContacts.Contact, p0: boolean) => void,
            ): number;
            connect_after(
                signal: 'e164-changed',
                callback: (_source: this, object: EBookContacts.Contact, p0: boolean) => void,
            ): number;
            emit(signal: 'e164-changed', object: EBookContacts.Contact, p0: boolean): void;

            // Virtual methods

            vfunc_categories_changed(categories: string): void;
            /**
             * Returns the `contact` revision, used to detect changes.
             * The returned string should be freed with g_free(), when
             * no longer needed.
             * @param contact an #EContact
             */
            vfunc_dup_contact_revision(contact: EBookContacts.Contact): string;
            vfunc_e164_changed(contact: EBookContacts.Contact, is_replace: boolean): void;

            // Methods

            /**
             * Checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the cache.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param email_address an email address to check for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE when found the @email_address, %FALSE on failure
             */
            contains_email(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Counts how many contacts satisfy the `sexp`.
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            count_query(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Calculates the `out_total` amount of results for the `cursor'`s query expression,
             * as well as the current `out_position` of `cursor` in the results. The `out_position` is
             * represented as the amount of results which lead up to the current value
             * of `cursor,` if `cursor` currently points to an exact contact, the position
             * also includes the cursor contact.
             * @param cursor The #EBookCacheCursor
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether @out_total and @out_position were successfully calculated.
             */
            cursor_calculate(cursor: BookCacheCursor, cancellable?: Gio.Cancellable | null): [boolean, number, number];
            /**
             * Compares `contact` with `cursor` and returns whether `contact` is less than, equal to, or greater
             * than `cursor`.
             * @param cursor The #EBookCacheCursor
             * @param contact The #EContact to compare
             * @returns A value that is less than, equal to, or greater than zero if @contact is found,    respectively, to be less than, to match, or be greater than the current value of @cursor.
             */
            cursor_compare_contact(cursor: BookCacheCursor, contact: EBookContacts.Contact): [number, boolean];
            /**
             * Frees the `cursor,` previously allocated with e_book_cache_cursor_new().
             * @param cursor The #EBookCacheCursor to free
             */
            cursor_free(cursor: BookCacheCursor): void;
            /**
             * Modifies the current query expression for `cursor`. This will not
             * modify `cursor'`s state, but will change the outcome of any further
             * calls to e_book_cache_cursor_step() or e_book_cache_cursor_calculate().
             * @param cursor The #EBookCacheCursor to modify
             * @param sexp The new query expression for @cursor
             * @returns %TRUE if the expression was valid and accepted by @cursor
             */
            cursor_set_sexp(cursor: BookCacheCursor, sexp: string): boolean;
            /**
             * Sets the `cursor` position to an
             * <link linkend="cursor-alphabet">Alphabetic Index</link>
             * into the alphabet active in `book_cache'`s locale.
             *
             * After setting the target to an alphabetic index, for example the
             * index for letter 'E', then further calls to e_book_cache_cursor_step()
             * will return results starting with the letter 'E' (or results starting
             * with the last result in 'D', if moving in a negative direction).
             *
             * The passed index must be a valid index in the active locale, knowledge
             * on the currently active alphabet index must be obtained using #ECollator
             * APIs.
             *
             * Use e_book_cache_ref_collator() to obtain the active collator for `book_cache`.
             * @param cursor The #EBookCacheCursor to modify
             * @param idx The alphabetic index
             */
            cursor_set_target_alphabetic_index(cursor: BookCacheCursor, idx: number): void;
            /**
             * Steps `cursor` through its sorted query by a maximum of `count` contacts
             * starting from `origin`.
             *
             * If `count` is negative, then the cursor will move through the list in reverse.
             *
             * If `cursor` reaches the beginning or end of the query results, then the
             * returned list might not contain the amount of desired contacts, or might
             * return no results if the cursor currently points to the last contact.
             * Reaching the end of the list is not considered an error condition. Attempts
             * to step beyond the end of the list after having reached the end of the list
             * will however trigger an %E_CACHE_ERROR_END_OF_LIST error.
             *
             * If %E_BOOK_CACHE_CURSOR_STEP_FETCH is specified in `flags,` a pointer to
             * a %NULL #GSList pointer should be provided for the `out_results` parameter.
             *
             * The result list will be stored to `out_results` and should be freed
             * with g_slist_free_full (results, e_book_cache_search_data_free);
             * when no longer needed.
             * @param cursor The #EBookCacheCursor to use
             * @param flags The #EBookCacheCursorStepFlags for this step
             * @param origin The #EBookCacheCursorOrigin from whence to step
             * @param count A positive or negative amount of contacts to try and fetch
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns The number of contacts traversed if successful, otherwise -1 is    returned and the @error is set.
             */
            cursor_step(
                cursor: BookCacheCursor,
                flags: BookCacheCursorStepFlags | null,
                origin: BookCacheCursorOrigin | null,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): [number, BookCacheSearchData[] | null];
            /**
             * Returns a comma-separated list of categories used by the contacts
             * stored in the `book_cache`. Free the returned string with g_free(),
             * when no longer needed.
             * @returns a comma-separated list of categories    used by the contacts stored in the @book_cache, or %NULL, when no    category is used by any contact.
             */
            dup_categories(): string | null;
            /**
             * Returns the `contact` revision, used to detect changes.
             * The returned string should be freed with g_free(), when
             * no longer needed.
             * @param contact an #EContact
             * @returns A newly allocated string containing    revision of the @contact.
             */
            dup_contact_revision(contact: EBookContacts.Contact): string;
            dup_locale(): string;
            /**
             * Queries the `book_cache` for the contacts in the given range and order.
             * The `sort_field` should be in the summary, otherwise an error
             * is returned.
             *
             * Free the `out_contacts` with g_ptr_aray_unref(), when no longer needed.
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param sort_field a field to sort by, which should be in the summary
             * @param sort_type an #EBookCursorSortType
             * @param n_offset a 0-based offset in the sorted result to start reading from, or 0 to read from start
             * @param n_limit how many values to return only; use 0 or G_MAXUINT to read everything from the @n_offset
             * @param out_contacts an array of #EContact-s in the requested order
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_query_contacts(
                sexp: string | null,
                sort_field: EBookContacts.ContactField | null,
                sort_type: EBookContacts.BookCursorSortType | null,
                n_offset: number,
                n_limit: number,
                out_contacts: EBookContacts.Contact[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries the `book_cache` for a `summary_field` value for contacts in the given range and order.
             * To get complete contacts use e_book_cache_dup_query_contacts(). Note the field value may
             * not correspond precisely to the value stored in the vCard (it can be in lower case).
             *
             * Both `summary_field` and `sort_field` should be in the summary, otherwise an error
             * is returned.
             *
             * The `out_uids` and `out_values` will have the same number of elements,
             * the indexes corresponding to each other. Free the arrays with
             * g_ptr_aray_unref(), when no longer needed.
             * @param summary_field a field to query, which should be in the summary
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param sort_field a field to sort by, which should be in the summary
             * @param sort_type an #EBookCursorSortType
             * @param n_offset a 0-based offset in the sorted result to start reading from, or 0 to read from start
             * @param n_limit how many values to return only; use 0 or G_MAXUINT to read everything from the @n_offset
             * @param out_uids contact UID-s in the requested order
             * @param out_values @summary_field values in the requested order
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_query_field(
                summary_field: EBookContacts.ContactField | null,
                sexp: string | null,
                sort_field: EBookContacts.ContactField | null,
                sort_type: EBookContacts.BookCursorSortType | null,
                n_offset: number,
                n_limit: number,
                out_uids: string[],
                out_values: string[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries the `book_cache` for a `summary_field` value for contact with UID `uid`.
             * Note the field value may not correspond precisely to the value stored
             * in the vCard (it can be in lower case).
             *
             * Free the `out_value` with g_free(), when no longer needed.
             * @param summary_field a field to query, which should be in the summary
             * @param uid a contact UID to query the @summary_field for
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_summary_field(
                summary_field: EBookContacts.ContactField | null,
                uid: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Fetch the #EContact specified by `uid` in `book_cache`.
             *
             * If `meta_contact` is specified, then a shallow #EContact will be created
             * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param uid The uid of the contact to fetch
             * @param meta_contact Whether an entire contact is desired, or only the metadata
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_contact(
                uid: string,
                meta_contact: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact];
            /**
             * Gets the custom flags previously set for the `uid,` either with
             * e_book_cache_set_contact_custom_flags(), when adding contacts or
             * when removing contacts in offline.
             * @param uid The uid of the contact to set the extra data for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_contact_custom_flags(uid: string, cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Fetches the extra data previously set for `uid,` either with
             * e_book_cache_set_contact_extra() or when adding contacts.
             * @param uid The uid of the contact to fetch the extra data for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_contact_extra(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Gets all the UID-s the `extra` data is set for.
             *
             * The `out_uids` should be freed with
             * g_slist_free_full (uids, g_free);
             * when no longer needed.
             * @param extra an extra column value to search for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_uids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Fetch a vCard string for `uid` in `book_cache`.
             *
             * If `meta_contact` is specified, then a shallow vCard representation will be
             * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param uid The uid of the contact to fetch
             * @param meta_contact Whether an entire contact is desired, or only the metadata
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_vcard(uid: string, meta_contact: boolean, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * This is a convenience wrapper for e_book_cache_put_contacts(),
             * which is the preferred way to add or modify multiple contacts when possible.
             * @param contact an #EContact to be added
             * @param extra extra data to store in association with this @contact
             * @param custom_flags custom flags for the @contact, not interpreted by the @book_cache
             * @param offline_flag one of #ECacheOfflineFlag, whether putting this contact in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            put_contact(
                contact: EBookContacts.Contact,
                extra: string | null,
                custom_flags: number,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Adds or replaces contacts in `book_cache`.
             *
             * If `extras` is specified, it must have an equal length as the `contacts` list.
             * Similarly the non-NULL `custom_flags` length should be the same as the length of the `contacts`.
             * Each element from the `extras` list and `custom_flags` list will be stored in association
             * with its corresponding contact in the `contacts` list.
             * @param contacts A list of contacts to add to @book_cache
             * @param extras A list of extra data to store in association with the @contacts
             * @param custom_flags optional custom flags to use for the @contacts
             * @param offline_flag one of #ECacheOfflineFlag, whether putting these contacts in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            put_contacts(
                contacts: EBookContacts.Contact[],
                extras: string[] | null,
                custom_flags: number[] | null,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * References the currently active #ECollator for `book_cache,`
             * use e_collator_unref() when finished using the returned collator.
             *
             * Note that the active collator will change with the active locale setting.
             * @returns A reference to the active collator.
             */
            ref_collator(): EDataServer.Collator;
            /**
             * References the #ESource to which `book_cache` is paired,
             * use g_object_unref() when no longer needed.
             * It can be %NULL in some cases, like when running tests.
             * @returns A reference to the #ESource to which    @book_cache is paired, or %NULL.
             */
            ref_source(): EDataServer.Source | null;
            /**
             * Removes the contact identified by `uid` from `book_cache`.
             * @param uid the uid of the contact to remove
             * @param custom_flags custom flags for the contact with the given @uid, not interpreted by the @book_cache
             * @param offline_flag one of #ECacheOfflineFlag, whether removing this contact in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            remove_contact(
                uid: string,
                custom_flags: number,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes the contacts indicated by `uids` from `book_cache`.
             * The `custom_flags` is used, if not %NULL, only if the `offline_flag`
             * is %E_CACHE_IS_OFFLINE. Otherwise it's ignored. The length of
             * the `custom_flags` should match the length of `uids,` when not %NULL.
             * @param uids a #GSList of uids indicating which contacts to remove
             * @param custom_flags an optional #GSList of custom flags for the @ids
             * @param offline_flag one of #ECacheOfflineFlag, whether removing these contacts in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            remove_contacts(
                uids: string[],
                custom_flags: number[] | null,
                offline_flag: EBackend.CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Searches `book_cache` for contacts matching the search expression `sexp`.
             *
             * When `sexp` refers only to #EContactFields configured in the summary of `book_cache,`
             * the search should always be quick, when searching for other #EContactFields
             * a fallback will be used.
             *
             * The returned `out_list` list should be freed with g_slist_free_full (list, e_book_cache_search_data_free)
             * when no longer needed.
             *
             * If `meta_contact` is specified, then shallow vCard representations will be
             * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param sexp search expression; use %NULL or an empty string to list all stored contacts
             * @param meta_contacts Whether entire contacts are desired, or only the metadata
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            search(
                sexp: string | null,
                meta_contacts: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, BookCacheSearchData[]];
            /**
             * Similar to e_book_cache_search(), but fetches only a list of contact UIDs.
             *
             * The returned `out_list` list should be freed with g_slist_free_full(list, g_free)
             * when no longer needed.
             * @param sexp search expression; use %NULL or an empty string to get all stored contacts
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            search_uids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Similar to e_book_cache_search(), but calls the `func` for each found contact.
             * @param sexp search expression; use %NULL or an empty string to get all stored contacts
             * @param func an #EBookCacheSearchFunc callback to call for each found row
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            search_with_callback(
                sexp: string | null,
                func: BookCacheSearchFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets or replaces the custom flags associated with a contact
             * identified by the `uid`.
             * @param uid The uid of the contact to set the extra data for
             * @param custom_flags the custom flags to set for the contact
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            set_contact_custom_flags(uid: string, custom_flags: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets or replaces the extra data associated with `uid`.
             * @param uid The uid of the contact to set the extra data for
             * @param extra The extra data to set
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            set_contact_extra(uid: string, extra?: string | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Relocalizes any locale specific data in the specified
             * new `lc_collate` locale.
             *
             * The `lc_collate` locale setting is stored and remembered on
             * subsequent accesses of the cache, changing the locale will
             * store the new locale and will modify sort keys and any
             * locale specific data in the cache.
             *
             * As a side effect, it's possible that changing the locale
             * will cause stored vCard-s to change.
             * @param lc_collate The new locale for the cache
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether the new locale was successfully set.
             */
            set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean;

            // Inherited methods
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

        module BookMetaBackend {
            // Signal callback interfaces

            interface RefreshCompleted {
                (): void;
            }

            interface SourceChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends BookBackendSync.ConstructorProps {
                cache: BookCache;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below.
         */
        abstract class BookMetaBackend extends BookBackendSync {
            static $gtype: GObject.GType<BookMetaBackend>;

            // Properties

            /**
             * The #EBookCache being used for this meta backend.
             */
            get cache(): BookCache;
            set cache(val: BookCache);

            // Constructors

            constructor(properties?: Partial<BookMetaBackend.ConstructorProps>, ...args: any[]);

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
             * The descendant should also call e_book_backend_set_writable() after successful
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
             * The descendant can populate also EBookMetaBackendInfo::object of
             * the `out_created_objects` and `out_modified_objects,` if known, in which
             * case this will be used instead of loading it with e_book_meta_backend_load_contact_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation calls e_book_meta_backend_list_existing_sync()
             * and then compares the list with the current content of the local cache
             * and populates the respective lists appropriately.
             *
             * Each output #GSList should be freed with
             * g_slist_free_full (objects, e_book_meta_backend_info_free);
             * when no longer needed.
             * @param last_sync_tag optional sync tag from the last check
             * @param is_repeat set to %TRUE when this is the repeated call
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_get_changes_sync(
                last_sync_tag: string | null,
                is_repeat: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, boolean, BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[]];
            /**
             * It is optional to implement this virtual method by the descendants.
             * It is used to receive SSL error details when any online operation
             * returns E_CLIENT_ERROR, E_CLIENT_ERROR_TLS_NOT_AVAILABLE error.
             */
            vfunc_get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];
            /**
             * Used to get list of all existing objects on the remote side. The descendant
             * can optionally provide `out_new_sync_tag,` which will be stored on success, if
             * not %NULL. The descendant can populate also EBookMetaBackendInfo::object of
             * the `out_existing_objects,` if known, in which case this will be used instead
             * of loading it with e_book_meta_backend_load_contact_sync().
             *
             * It is mandatory to implement this virtual method by the descendant, unless
             * it implements its own #EBookMetaBackendClass.get_changes_sync().
             *
             * The `out_existing_objects` #GSList should be freed with
             * g_slist_free_full (objects, e_book_meta_backend_info_free);
             * when no longer needed.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, BookMetaBackendInfo[]];
            /**
             * Loads a contact from the remote side.
             *
             * It is mandatory to implement this virtual method by the descendant.
             *
             * The returned `out_contact` should be freed with g_object_unref(),
             * when no longer needed.
             *
             * The returned `out_extra` should be freed with g_free(), when no longer
             * needed.
             * @param uid a contact UID
             * @param extra optional extra data stored with the contact, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_load_contact_sync(
                uid: string,
                extra: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact, string];
            /**
             * Removes a contact from the remote side. The `object` is not %NULL when
             * it's removing locally deleted object in offline mode. Being it %NULL,
             * the descendant can obtain the object from the #EBookCache.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param conflict_resolution an #EConflictResolution to use
             * @param uid a contact UID
             * @param extra extra data being saved with the contact in the local cache, or %NULL
             * @param object corresponding vCard object, as stored in the local cache, or %NULL
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_remove_contact_sync(
                conflict_resolution: EDataServer.ConflictResolution,
                uid: string,
                extra: string | null,
                object: string | null,
                opflags: number,
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
             * Saves one contact into the remote side.  When the `overwrite_existing` is %TRUE, then
             * the descendant can overwrite an object with the same UID on the remote side
             * (usually used for modify). The `conflict_resolution` defines what to do when
             * the remote side had made any changes to the object since the last update.
             *
             * The `contact` has already converted locally stored photos and logos
             * into inline variants, thus it's not needed to call
             * e_book_meta_backend_inline_local_photos_sync() by the descendant.
             *
             * The `out_new_uid` can be populated with a UID of the saved contact as the server
             * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
             * also to see whether any changes had been made to the contact by the remote side.
             *
             * The `out_new_extra` can be populated with a new extra data to save with the contact.
             * Left it %NULL, to keep the same value as the `extra`.
             *
             * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
             * the save failed due to made changes on the remote side, and let the `meta_backend`
             * resolve this conflict based on the `conflict_resolution` on its own.
             * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
             * is able to resolve the conflicts itself.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param overwrite_existing %TRUE when can overwrite existing contacts, %FALSE otherwise
             * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
             * @param contact an #EContact to save
             * @param extra extra data saved with the contacts in an #EBookCache
             * @param opflags bit-or of EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_save_contact_sync(
                overwrite_existing: boolean,
                conflict_resolution: EDataServer.ConflictResolution,
                contact: EBookContacts.Contact,
                extra: string | null,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found contacts as a #GSList of #EContact `out_contacts`.
             * Free the returned `out_contacts` with g_slist_free_full (contacts, g_object_unref);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get
             * UID-s instead, call e_book_meta_backend_search_uids_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param meta_contact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_search_sync(
                expr: string | null,
                meta_contact: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact[]];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found contact UID-s as a #GSList `out_contacts`.
             * Free the returned `out_uids` with g_slist_free_full (uids, g_free);
             * when no longer needed.
             * When the `expr` is %NULL, all UID-s are returned. To get #EContact(s)
             * instead, call e_book_meta_backend_search_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_search_uids_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            vfunc_source_changed(): void;

            // Methods

            /**
             * This is called always before any operation which requires a connection
             * to the remote side. It can fail with an #E_CLIENT_ERROR_REPOSITORY_OFFLINE
             * error to indicate that the remote side cannot be currently reached. Other
             * errors are propagated to the caller/client side. This method is not called
             * when the backend is offline.
             *
             * The descendant should also call e_book_backend_set_writable() after successful
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
             * call e_book_meta_backend_get_changes_sync().
             *
             * Free the returned string with g_free(), when no longer needed.
             * @returns The last known synchronization tag,    or %NULL, when none is stored.
             */
            dup_sync_tag(): string | null;
            /**
             * Empties the local cache by removing all known contacts from it
             * and notifies about such removal any opened views.
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
             * The descendant can populate also EBookMetaBackendInfo::object of
             * the `out_created_objects` and `out_modified_objects,` if known, in which
             * case this will be used instead of loading it with e_book_meta_backend_load_contact_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation calls e_book_meta_backend_list_existing_sync()
             * and then compares the list with the current content of the local cache
             * and populates the respective lists appropriately.
             *
             * Each output #GSList should be freed with
             * g_slist_free_full (objects, e_book_meta_backend_info_free);
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
            ): [boolean, string, boolean, BookMetaBackendInfo[], BookMetaBackendInfo[], BookMetaBackendInfo[]];
            /**
             * This value has meaning only if e_book_meta_backend_get_ever_connected()
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
             * Changes all URL photos and logos which point to a local file in `contact`
             * to inline type, aka adds the file content into the `contact`.
             * This is called automatically before e_book_meta_backend_save_contact_sync().
             *
             * The reverse operation is e_book_meta_backend_store_inline_photos_sync().
             * @param contact an #EContact to work with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            inline_local_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Used to get list of all existing objects on the remote side. The descendant
             * can optionally provide `out_new_sync_tag,` which will be stored on success, if
             * not %NULL. The descendant can populate also EBookMetaBackendInfo::object of
             * the `out_existing_objects,` if known, in which case this will be used instead
             * of loading it with e_book_meta_backend_load_contact_sync().
             *
             * It is mandatory to implement this virtual method by the descendant, unless
             * it implements its own #EBookMetaBackendClass.get_changes_sync().
             *
             * The `out_existing_objects` #GSList should be freed with
             * g_slist_free_full (objects, e_book_meta_backend_info_free);
             * when no longer needed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, BookMetaBackendInfo[]];
            /**
             * Loads a contact from the remote side.
             *
             * It is mandatory to implement this virtual method by the descendant.
             *
             * The returned `out_contact` should be freed with g_object_unref(),
             * when no longer needed.
             *
             * The returned `out_extra` should be freed with g_free(), when no longer
             * needed.
             * @param uid a contact UID
             * @param extra optional extra data stored with the contact, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            load_contact_sync(
                uid: string,
                extra: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact, string];
            /**
             * Processes given changes by updating local cache content accordingly.
             * The `meta_backend` processes the changes like being online and particularly
             * requires to be online to load created and modified objects when needed.
             * @param created_objects a #GSList of #EBookMetaBackendInfo object infos which had been created
             * @param modified_objects a #GSList of #EBookMetaBackendInfo object infos which had been modified
             * @param removed_objects a #GSList of #EBookMetaBackendInfo object infos which had been removed
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            process_changes_sync(
                created_objects?: BookMetaBackendInfo[] | null,
                modified_objects?: BookMetaBackendInfo[] | null,
                removed_objects?: BookMetaBackendInfo[] | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            ref_cache(): BookCache;
            /**
             * Refreshes the `meta_backend` immediately. To just schedule refresh
             * operation call e_book_meta_backend_schedule_refresh().
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes a contact from the remote side. The `object` is not %NULL when
             * it's removing locally deleted object in offline mode. Being it %NULL,
             * the descendant can obtain the object from the #EBookCache.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param conflict_resolution an #EConflictResolution to use
             * @param uid a contact UID
             * @param extra extra data being saved with the contact in the local cache, or %NULL
             * @param object corresponding vCard object, as stored in the local cache, or %NULL
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_contact_sync(
                conflict_resolution: EDataServer.ConflictResolution | null,
                uid: string,
                extra: string | null,
                object: string | null,
                opflags: number,
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
             * Saves one contact into the remote side.  When the `overwrite_existing` is %TRUE, then
             * the descendant can overwrite an object with the same UID on the remote side
             * (usually used for modify). The `conflict_resolution` defines what to do when
             * the remote side had made any changes to the object since the last update.
             *
             * The `contact` has already converted locally stored photos and logos
             * into inline variants, thus it's not needed to call
             * e_book_meta_backend_inline_local_photos_sync() by the descendant.
             *
             * The `out_new_uid` can be populated with a UID of the saved contact as the server
             * assigned it to it. This UID, if set, is loaded from the remote side afterwards,
             * also to see whether any changes had been made to the contact by the remote side.
             *
             * The `out_new_extra` can be populated with a new extra data to save with the contact.
             * Left it %NULL, to keep the same value as the `extra`.
             *
             * The descendant can use an #E_CLIENT_ERROR_OUT_OF_SYNC error to indicate that
             * the save failed due to made changes on the remote side, and let the `meta_backend`
             * resolve this conflict based on the `conflict_resolution` on its own.
             * The #E_CLIENT_ERROR_OUT_OF_SYNC error should not be used when the descendant
             * is able to resolve the conflicts itself.
             *
             * It is mandatory to implement this virtual method by the writable descendant.
             * @param overwrite_existing %TRUE when can overwrite existing contacts, %FALSE otherwise
             * @param conflict_resolution one of #EConflictResolution, what to do on conflicts
             * @param contact an #EContact to save
             * @param extra extra data saved with the contacts in an #EBookCache
             * @param opflags bit-or of EBookOperationFlags
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            save_contact_sync(
                overwrite_existing: boolean,
                conflict_resolution: EDataServer.ConflictResolution | null,
                contact: EBookContacts.Contact,
                extra: string | null,
                opflags: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string];
            /**
             * Schedules refresh of the content of the `meta_backend`. If there's any
             * already scheduled, then the function does nothing.
             *
             * Use e_book_meta_backend_refresh_sync() to refresh the `meta_backend`
             * immediately.
             */
            schedule_refresh(): void;
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found contacts as a #GSList of #EContact `out_contacts`.
             * Free the returned `out_contacts` with g_slist_free_full (contacts, g_object_unref);
             * when no longer needed.
             * When the `expr` is %NULL, all objects are returned. To get
             * UID-s instead, call e_book_meta_backend_search_uids_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param meta_contact %TRUE, when return #EContact filled with UID and REV only, %FALSE to return full contacts
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_sync(
                expr: string | null,
                meta_contact: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, EBookContacts.Contact[]];
            /**
             * Searches `meta_backend` with given expression `expr` and returns
             * found contact UID-s as a #GSList `out_contacts`.
             * Free the returned `out_uids` with g_slist_free_full (uids, g_free);
             * when no longer needed.
             * When the `expr` is %NULL, all UID-s are returned. To get #EContact(s)
             * instead, call e_book_meta_backend_search_sync().
             *
             * It is optional to implement this virtual method by the descendant.
             * The default implementation searches `meta_backend'`s cache. It's also
             * not required to be online for searching, thus `meta_backend` doesn't
             * ensure it.
             * @param expr a search expression, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            search_uids_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Sets the `cache` as the cache to be used by the `meta_backend`.
             * By default, a cache.db in EBookBackend::cache-dir is created
             * in the constructed method. This function can be used to override
             * the default.
             *
             * Note the `meta_backend` adds its own reference to the `cache`.
             * @param cache an #EBookCache to use
             */
            set_cache(cache: BookCache): void;
            /**
             * Sets whether the `meta_backend` connected to a writable destination.
             * This value has meaning only if e_book_meta_backend_get_ever_connected()
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
             * g_slist_free_full (objects, e_book_meta_backend_info_free);
             * when no longer needed.
             *
             * The caller is still responsible to free `objects` as well.
             * @param objects a #GSList of #EBookMetaBackendInfo object infos to split
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            split_changes_sync(
                objects: BookMetaBackendInfo[],
                cancellable?: Gio.Cancellable | null,
            ): [
                boolean,
                BookMetaBackendInfo[],
                BookMetaBackendInfo[],
                BookMetaBackendInfo[],
                BookMetaBackendInfo[] | null,
            ];
            /**
             * Changes all inline photos and logos to URL type in `contact,` which
             * will point to a local file instead, beside the cache file.
             * This is called automatically after e_book_meta_backend_load_contact_sync().
             *
             * The reverse operation is e_book_meta_backend_inline_local_photos_sync().
             * @param contact an #EContact to work with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            store_inline_photos_sync(contact: EBookContacts.Contact, cancellable?: Gio.Cancellable | null): boolean;
        }

        module BookSqlite {
            // Signal callback interfaces

            interface BeforeInsertContact {
                (
                    object: any | null,
                    p0: EBookContacts.Contact,
                    p1: string,
                    p2: boolean,
                    p3: GObject.Object,
                    p4?: any | null,
                ): boolean;
            }

            interface BeforeRemoveContact {
                (object: any | null, p0: string, p1?: Gio.Cancellable | null, p2?: any | null): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class BookSqlite extends GObject.Object implements EDataServer.Extensible {
            static $gtype: GObject.GType<BookSqlite>;

            // Constructors

            constructor(properties?: Partial<BookSqlite.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                path: string,
                source?: EDataServer.Source | null,
                cancellable?: Gio.Cancellable | null,
            ): BookSqlite;

            static new_full(
                path: string,
                source?: EDataServer.Source | null,
                setup?: EBookContacts.SourceBackendSummarySetup | null,
                vcard_callback?: bSqlVCardCallback | null,
                change_callback?: bSqlChangeCallback | null,
                user_data_destroy?: GLib.DestroyNotify | null,
                cancellable?: Gio.Cancellable | null,
            ): BookSqlite;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'before-insert-contact',
                callback: (
                    _source: this,
                    object: any | null,
                    p0: EBookContacts.Contact,
                    p1: string,
                    p2: boolean,
                    p3: GObject.Object,
                    p4: any | null,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'before-insert-contact',
                callback: (
                    _source: this,
                    object: any | null,
                    p0: EBookContacts.Contact,
                    p1: string,
                    p2: boolean,
                    p3: GObject.Object,
                    p4: any | null,
                ) => boolean,
            ): number;
            emit(
                signal: 'before-insert-contact',
                object: any | null,
                p0: EBookContacts.Contact,
                p1: string,
                p2: boolean,
                p3: GObject.Object,
                p4?: any | null,
            ): void;
            connect(
                signal: 'before-remove-contact',
                callback: (
                    _source: this,
                    object: any | null,
                    p0: string,
                    p1: Gio.Cancellable | null,
                    p2: any | null,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'before-remove-contact',
                callback: (
                    _source: this,
                    object: any | null,
                    p0: string,
                    p1: Gio.Cancellable | null,
                    p2: any | null,
                ) => boolean,
            ): number;
            emit(
                signal: 'before-remove-contact',
                object: any | null,
                p0: string,
                p1?: Gio.Cancellable | null,
                p2?: any | null,
            ): void;

            // Static methods

            static error_quark(): GLib.Quark;
            /**
             * Frees an #EbSqlSearchData
             * @param data An #EbSqlSearchData
             */
            static search_data_free(data: bSqlSearchData): void;

            // Virtual methods

            vfunc_before_insert_contact(
                db: any | null,
                contact: EBookContacts.Contact,
                extra: string,
                replace: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            vfunc_before_remove_contact(
                db: any | null,
                contact_uid: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;

            // Methods

            add_contact(
                contact: EBookContacts.Contact,
                extra: string,
                replace: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Adds or replaces contacts in `ebsql`. If `replace_existing` is specified then existing
             * contacts with the same UID will be replaced, otherwise adding an existing contact
             * will return an error.
             *
             * If `extra` is specified, it must have an equal length as the `contacts` list. Each element
             * from the `extra` list will be stored in association with it's corresponding contact
             * in the `contacts` list.
             * @param contacts A list of contacts to add to @ebsql
             * @param extra A list of extra data to store in association with this contact
             * @param replace Whether this contact should replace another contact with the same UID.
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            add_contacts(
                contacts: EBookContacts.Contact[],
                extra: string[] | null,
                replace: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Counts how many contacts satisfy the `sexp`.
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            count_query(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Queries the `ebsql` for the contacts in the given range and order.
             * The `sort_field` should be in the summary, otherwise an error
             * is returned.
             *
             * Free the `out_contacts` with g_ptr_aray_unref(), when no longer needed.
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param sort_field a field to sort by, which should be in the summary
             * @param sort_type an #EBookCursorSortType
             * @param n_offset a 0-based offset in the sorted result to start reading from, or 0 to read from start
             * @param n_limit how many values to return only; use 0 or G_MAXUINT to read everything from the @n_offset
             * @param out_contacts an array of #EContact-s in the requested order
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_query_contacts(
                sexp: string | null,
                sort_field: EBookContacts.ContactField | null,
                sort_type: EBookContacts.BookCursorSortType | null,
                n_offset: number,
                n_limit: number,
                out_contacts: EBookContacts.Contact[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries the `ebsql` for a `summary_field` value for contacts in the given range and order.
             * To get complete contacts use e_book_sqlite_dup_query_contacts(). Note the field value may
             * not correspond precisely to the value stored in the vCard (it can be in lower case).
             *
             * Both `summary_field` and `sort_field` should be in the summary, otherwise an error
             * is returned.
             *
             * The `out_uids` and `out_values` will have the same number of elements,
             * the indexes corresponding to each other. Free the arrays with
             * g_ptr_aray_unref(), when no longer needed.
             * @param summary_field a field to query, which should be in the summary
             * @param sexp search expression; use %NULL or an empty string to consider all stored contacts
             * @param sort_field a field to sort by, which should be in the summary
             * @param sort_type an #EBookCursorSortType
             * @param n_offset a 0-based offset in the sorted result to start reading from, or 0 to read from start
             * @param n_limit how many values to return only; use 0 or G_MAXUINT to read everything from the @n_offset
             * @param out_uids contact UID-s in the requested order
             * @param out_values @summary_field values in the requested order
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_query_field(
                summary_field: EBookContacts.ContactField | null,
                sexp: string | null,
                sort_field: EBookContacts.ContactField | null,
                sort_type: EBookContacts.BookCursorSortType | null,
                n_offset: number,
                n_limit: number,
                out_uids: string[],
                out_values: string[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries the `ebsql` for a `summary_field` value for contact with UID `uid`.
             * Note the field value may not correspond precisely to the value stored
             * in the vCard (it can be in lower case).
             *
             * Free the `out_value` with g_free(), when no longer needed.
             * @param summary_field a field to query, which should be in the summary
             * @param uid a contact UID to query the @summary_field for
             * @param cancellable A #GCancellable
             * @returns Whether succeeded.
             */
            dup_summary_field(
                summary_field: EBookContacts.ContactField | null,
                uid: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Executes an SQLite statement. Use e_book_sqlite_select() for
             * SELECT statements.
             * @param sql_stmt an SQLite statement to execute
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Fetch the #EContact specified by `uid` in `ebsql`.
             *
             * If `meta_contact` is specified, then a shallow #EContact will be created
             * holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param uid The uid of the contact to fetch
             * @param meta_contact Whether an entire contact is desired, or only the metadata
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_contact(uid: string, meta_contact: boolean): [boolean, EBookContacts.Contact];
            /**
             * Fetches the extra data previously set for `uid,` either with
             * e_book_sqlite_set_contact_extra() or when adding contacts.
             * @param uid The uid of the contact to fetch the extra data for
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_contact_extra(uid: string): [boolean, string];
            /**
             * Fetches the value for `key` and stores it in `value`
             * @param key The key to fetch a value for
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_key_value(key: string): [boolean, string];
            /**
             * A convenience function to fetch the value of `key` as an integer.
             * @param key The key to fetch a value for
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_key_value_int(key: string): [boolean, number];
            /**
             * Fetches the current locale setting for the address-book.
             *
             * Upon success, `lc_collate_out` will hold the returned locale setting,
             * otherwise %FALSE will be returned and `error` will be updated accordingly.
             * @returns Whether the locale was successfully fetched.
             */
            get_locale(): [boolean, string];
            /**
             * Fetch a vcard string for `uid` in `ebsql`.
             *
             * If `meta_contact` is specified, then a shallow vcard representation will be
             * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param uid The uid of the contact to fetch
             * @param meta_contact Whether an entire contact is desired, or only the metadata
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            get_vcard(uid: string, meta_contact: boolean): [boolean, string];
            /**
             * Checks if a contact bearing the UID indicated by `uid` is stored in `ebsql`.
             * @param uid The uid of the contact to check for
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            has_contact(uid: string): [boolean, boolean];
            /**
             * Obtains an exclusive lock on `ebsql` and starts a transaction.
             *
             * This should be called if you need to access `ebsql` multiple times while
             * ensuring an atomic transaction. End this transaction with e_book_sqlite_unlock().
             *
             * If `cancellable` is specified, then `ebsql` will retain a reference to it until
             * e_book_sqlite_unlock() is called. Any accesses to `ebsql` with the lock held
             * are expected to have the same `cancellable` specified, or %NULL.
             *
             * <note><para>Aside from ensuring atomicity of transactions, this function will hold a mutex
             * which will cause further calls to e_book_sqlite_lock() to block. If you are accessing
             * `ebsql` from multiple threads, then any interactions with `ebsql` should be nested in calls
             * to e_book_sqlite_lock() and e_book_sqlite_unlock().</para></note>
             * @param lock_type The #EbSqlLockType to acquire
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            lock(lock_type: bSqlLockType | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * References the currently active #ECollator for `ebsql,`
             * use e_collator_unref() when finished using the returned collator.
             *
             * Note that the active collator will change with the active locale setting.
             * @returns A reference to the active collator.
             */
            ref_collator(): EDataServer.Collator;
            /**
             * References the #ESource to which `ebsql` is paired,
             * use g_object_unref() when finished using the source.
             * It can be %NULL in some cases, like when running tests.
             * @returns A reference to the #ESource to which @ebsql is paired, or %NULL.
             */
            ref_source(): EDataServer.Source | null;
            /**
             * Removes the contact indicated by `uid` from `ebsql`.
             * @param uid the uid of the contact to remove
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            remove_contact(uid: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes the contacts indicated by `uids` from `ebsql`.
             * @param uids a #GSList of uids indicating which contacts to remove
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            remove_contacts(uids: string[], cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Searches `ebsql` for contacts matching the search expression indicated by `sexp`.
             *
             * When `sexp` refers only to #EContactFields configured in the summary of `ebsql,`
             * the search should always be quick, when searching for other #EContactFields
             * a fallback will be used, possibly invoking any #EbSqlVCardCallback which
             * may have been passed to e_book_sqlite_new_full().
             *
             * The returned `ret_list` list should be freed with g_slist_free()
             * and all elements freed with e_book_sqlite_search_data_free().
             *
             * If `meta_contact` is specified, then shallow vcard representations will be
             * created holding only the %E_CONTACT_UID and %E_CONTACT_REV fields.
             * @param sexp search expression; use %NULL or an empty string to list all stored contacts.
             * @param meta_contacts Whether entire contacts are desired, or only the metadata
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            search(
                sexp: string | null,
                meta_contacts: boolean,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, bSqlSearchData[]];
            /**
             * Similar to e_book_sqlitedb_search(), but fetches only a list of contact UIDs.
             *
             * The returned `ret_list` list should be freed with g_slist_free() and all
             * elements freed with g_free().
             * @param sexp search expression; use %NULL or an empty string to get all stored contacts.
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            search_uids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
             * Use e_book_sqlite_exec() for statements which do not return row sets.
             * @param sql_stmt an SQLite SELECT statement to execute
             * @param func an #EBookSqliteSelectFunc function to call for each row
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            select(sql_stmt: string, func: BookSqliteSelectFunc, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets or replaces the extra data associated with `uid`.
             * @param uid The uid of the contact to set the extra data for
             * @param extra The extra data to set
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            set_contact_extra(uid: string, extra?: string | null): boolean;
            /**
             * Sets the value for `key` to be `value`
             * @param key The key to fetch a value for
             * @param value The new value for @key
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            set_key_value(key: string, value: string): boolean;
            /**
             * A convenience function to set the value of `key` as an integer.
             * @param key The key to fetch a value for
             * @param value The new value for @key
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            set_key_value_int(key: string, value: number): boolean;
            /**
             * Relocalizes any locale specific data in the specified
             * new `lc_collate` locale.
             *
             * The `lc_collate` locale setting is stored and remembered on
             * subsequent accesses of the addressbook, changing the locale
             * will store the new locale and will modify sort keys and any
             * locale specific data in the addressbook.
             *
             * As a side effect, it's possible that changing the locale
             * will cause stored vcards to change. Notifications for
             * these changes can be caught with the #EbSqlVCardCallback
             * provided to e_book_sqlite_new_full().
             * @param lc_collate The new locale for the addressbook
             * @param cancellable A #GCancellable
             * @returns Whether the new locale was successfully set.
             */
            set_locale(lc_collate: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Releases an exclusive on `ebsql` and finishes a transaction previously
             * started with e_book_sqlite_lock_updates().
             *
             * <note><para>If this fails, the lock on `ebsql` is still released and `error` will
             * be set to indicate why the transaction or rollback failed.</para></note>
             * @param action Which #EbSqlUnlockAction to take while unlocking
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            unlock(action: bSqlUnlockAction | null): boolean;

            // Inherited methods
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

        module DataBook {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                backend: BookBackend;
                connection: Gio.DBusConnection;
                object_path: string;
                objectPath: string;
            }
        }

        class DataBook extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<DataBook>;

            // Properties

            get backend(): BookBackend;
            get connection(): Gio.DBusConnection;
            get object_path(): string;
            get objectPath(): string;

            // Constructors

            constructor(properties?: Partial<DataBook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend: BookBackend, connection: Gio.DBusConnection, object_path: string): DataBook;

            // Static methods

            /**
             * Takes a list of strings and converts it to a comma-separated string of
             * values; free returned pointer with g_free()
             * @param strings a list of gchar *
             */
            static string_slist_to_comma_string(strings: string[]): string;

            // Methods

            /**
             * Returns the #GDBusConnection on which the AddressBook D-Bus interface
             * is exported.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
            /**
             * Returns the object path at which the AddressBook D-Bus interface is
             * exported.
             * @returns the object path
             */
            get_object_path(): string;
            /**
             * Returns the #EBookBackend to which incoming remote method invocations
             * are being forwarded.
             *
             * The returned #EBookBackend is referenced for thread-safety and should
             * be unreferenced with g_object_unref() when finished with it.
             * @returns an #EBookBackend
             */
            ref_backend(): BookBackend;
            /**
             * Notifies the clients about a property change.
             * @param prop_name Property name which changed
             * @param prop_value The new property value
             */
            report_backend_property_changed(prop_name: string, prop_value?: string | null): void;
            /**
             * Notifies the clients about an error, which happened out of any client-initiate operation.
             * @param message An error message
             */
            report_error(message: string): void;
            /**
             * Finishes a call to check whether contains an email address.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param found %TRUE, when found the email in the address book
             */
            respond_contains_email(opid: number, error: GLib.Error, found: boolean): void;
            /**
             * Finishes a call to create a list contacts.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param contacts A list of created #EContact(s), empty on error
             */
            respond_create_contacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void;
            /**
             * Notifies listeners of the completion of the get_contact method call.
             * Only one of `error` and `contact` can be set.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param contact the found #EContact, or %NULL, if it could not be found
             */
            respond_get_contact(opid: number, error?: GLib.Error | null, contact?: EBookContacts.Contact | null): void;
            /**
             * Finishes a call to get list of #EContact, which satisfy certain criteria.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param contacts A list of #EContact, empty on error
             */
            respond_get_contact_list(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void;
            /**
             * Finishes a call to get list of UIDs which satisfy certain criteria.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param uids A list of picked UIDs, empty on error
             */
            respond_get_contact_list_uids(opid: number, error: GLib.Error, uids: string[]): void;
            /**
             * Finishes a call to modify a list of contacts.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param contacts A list of modified #EContact(s), empty on error
             */
            respond_modify_contacts(opid: number, error: GLib.Error, contacts: EBookContacts.Contact[]): void;
            /**
             * Notifies listeners of the completion of the open method call.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             */
            respond_open(opid: number, error: GLib.Error): void;
            /**
             * Notifies listeners of the completion of the refresh method call.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             */
            respond_refresh(opid: number, error: GLib.Error): void;
            /**
             * Finishes a call to remove a list of contacts.
             * @param opid An operation ID
             * @param error Operation error, if any, automatically freed if passed it
             * @param ids A list of removed contact UID-s, empty on error
             */
            respond_remove_contacts(opid: number, error: GLib.Error, ids: string[]): void;
            /**
             * Set's the locale for this addressbook, this can result in renormalization of
             * locale sensitive data.
             * @param locale the new locale to set for this book
             * @param cancellable a #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set appropriately.
             */
            set_locale(locale: string, cancellable?: Gio.Cancellable | null): boolean;

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

        module DataBookCursor {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                backend: BookBackend;
                position: number;
                total: number;
            }
        }

        /**
         * An opaque handle for an addressbook cursor
         */
        abstract class DataBookCursor extends GObject.Object {
            static $gtype: GObject.GType<DataBookCursor>;

            // Properties

            get backend(): BookBackend;
            get position(): number;
            get total(): number;

            // Constructors

            constructor(properties?: Partial<DataBookCursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * The #EDataBookCursorCompareContactFunc delegate to compare an #EContact with the cursor position
             * @param contact the #EContact to compare with @cursor
             */
            vfunc_compare_contact(contact: EBookContacts.Contact): [number, boolean];
            /**
             * The #EDataBookCursorGetPositionFunc delegate to calculate the current total and position values
             * @param cancellable A #GCancellable
             */
            vfunc_get_position(cancellable?: Gio.Cancellable | null): [boolean, number, number];
            /**
             * The #EDataBookCursorLoadLocaleFunc delegate used to reload the locale setting
             */
            vfunc_load_locale(): [boolean, string];
            /**
             * The #EDataBookCursorSetAlphabetIndexFunc delegate to set the alphabetic position
             * @param index the alphabetic index
             * @param locale the locale in which @index is expected to be a valid alphabetic index
             */
            vfunc_set_alphabetic_index(index: number, locale: string): boolean;
            /**
             * The #EDataBookCursorSetSexpFunc delegate to set the search expression
             * @param sexp the search expression to set, or %NULL for unfiltered results
             */
            vfunc_set_sexp(sexp?: string | null): boolean;
            /**
             * Steps `cursor` through its sorted query by a maximum of `count` contacts
             * starting from `origin`.
             *
             * If `count` is negative, then the cursor will move through the list in reverse.
             *
             * If `cursor` reaches the beginning or end of the query results, then the
             * returned list might not contain the amount of desired contacts, or might
             * return no results if the cursor currently points to the last contact.
             * Reaching the end of the list is not considered an error condition. Attempts
             * to step beyond the end of the list after having reached the end of the list
             * will however trigger an %E_CLIENT_ERROR_QUERY_REFUSED error.
             *
             * If %E_BOOK_CURSOR_STEP_FETCH is specified in `flags,` a pointer to
             * a %NULL #GSList pointer should be provided for the `results` parameter.
             *
             * The result list will be stored to `results` and should be freed with g_slist_free()
             * and all elements freed with g_free().
             *
             * If a `revision_guard` is specified, the cursor implementation will issue an
             * %E_CLIENT_ERROR_OUT_OF_SYNC error if the `revision_guard` does not match
             * the current addressbook revision.
             *
             * An explanation of how stepping is expected to behave can be found
             * in the <link linkend="cursor-iteration">user facing reference documentation</link>.
             * @param revision_guard The expected current addressbook revision, or %NULL
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable A #GCancellable
             */
            vfunc_step(
                revision_guard: string | null,
                flags: EBookContacts.BookCursorStepFlags,
                origin: EBookContacts.BookCursorOrigin,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): [number, string[] | null];

            // Methods

            /**
             * Should be called by addressbook backends whenever a contact
             * is added.
             * @param contact the #EContact which was added to the addressbook
             */
            contact_added(contact: EBookContacts.Contact): void;
            /**
             * Should be called by addressbook backends whenever a contact
             * is removed.
             * @param contact the #EContact which was removed from the addressbook
             */
            contact_removed(contact: EBookContacts.Contact): void;
            /**
             * Gets the backend which created and owns `cursor`.
             * @returns The #EBookBackend owning @cursor.
             */
            get_backend(): BookBackend;
            /**
             * Fetch the current position of `cursor` in its result list.
             * @returns the current position of @cursor
             */
            get_position(): number;
            /**
             * Fetch the total number of contacts which match `cursor'`s query expression.
             * @returns the total contacts for @cursor
             */
            get_total(): number;
            /**
             * Load the current locale setting from the cursor's underlying database.
             *
             * Addressbook backends implementing cursors should call this function on all active
             * cursor when the locale setting changes.
             *
             * This will implicitly reset `cursor'`s state and position.
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            load_locale(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Recalculates the cursor's total and position, this is meant
             * for cursor created in Direct Read Access mode to synchronously
             * recalculate the position and total values when the addressbook
             * revision has changed.
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            recalculate(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Places `cursor` on the `connection` at `object_path`
             * @param connection the #GDBusConnection to register with
             * @param object_path the object path to place the direct access configuration data
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean;
            /**
             * Sets the `cursor` position to an
             * <link linkend="cursor-alphabet">Alphabetic Index</link>
             * into the alphabet active in the `locale` of the addressbook.
             *
             * After setting the target to an alphabetic index, for example the
             * index for letter 'E', then further calls to e_data_book_cursor_step()
             * will return results starting with the letter 'E' (or results starting
             * with the last result in 'D', if moving in a negative direction).
             *
             * The passed index must be a valid index in `locale,` if by some chance
             * the addressbook backend has changed into a new locale after this
             * call has been issued, an %E_CLIENT_ERROR_OUT_OF_SYNC error will be
             * issued indicating that there was a locale mismatch.
             * @param index the alphabetic index
             * @param locale the locale in which @index is expected to be a valid alphabetic index
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_alphabetic_index(index: number, locale: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets the search expression for the cursor
             * @param sexp the search expression to set
             * @param cancellable A #GCancellable
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_sexp(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Steps `cursor` through its sorted query by a maximum of `count` contacts
             * starting from `origin`.
             *
             * If `count` is negative, then the cursor will move through the list in reverse.
             *
             * If `cursor` reaches the beginning or end of the query results, then the
             * returned list might not contain the amount of desired contacts, or might
             * return no results if the cursor currently points to the last contact.
             * Reaching the end of the list is not considered an error condition. Attempts
             * to step beyond the end of the list after having reached the end of the list
             * will however trigger an %E_CLIENT_ERROR_QUERY_REFUSED error.
             *
             * If %E_BOOK_CURSOR_STEP_FETCH is specified in `flags,` a pointer to
             * a %NULL #GSList pointer should be provided for the `results` parameter.
             *
             * The result list will be stored to `results` and should be freed with g_slist_free()
             * and all elements freed with g_free().
             *
             * If a `revision_guard` is specified, the cursor implementation will issue an
             * %E_CLIENT_ERROR_OUT_OF_SYNC error if the `revision_guard` does not match
             * the current addressbook revision.
             *
             * An explanation of how stepping is expected to behave can be found
             * in the <link linkend="cursor-iteration">user facing reference documentation</link>.
             * @param revision_guard The expected current addressbook revision, or %NULL
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable A #GCancellable
             * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
             */
            step(
                revision_guard: string | null,
                flags: EBookContacts.BookCursorStepFlags | null,
                origin: EBookContacts.BookCursorOrigin | null,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): [number, string[] | null];
        }

        module DataBookCursorCache {
            // Constructor properties interface

            interface ConstructorProps extends DataBookCursor.ConstructorProps {
                book_cache: BookCache;
                bookCache: BookCache;
                cursor: any;
            }
        }

        /**
         * An opaque handle for the #EBookCache cursor instance.
         */
        class DataBookCursorCache extends DataBookCursor {
            static $gtype: GObject.GType<DataBookCursorCache>;

            // Properties

            set book_cache(val: BookCache);
            set bookCache(val: BookCache);
            set cursor(val: any);

            // Constructors

            constructor(properties?: Partial<DataBookCursorCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                book_backend: BookBackend,
                book_cache: BookCache,
                sort_fields: EBookContacts.ContactField[],
                sort_types: EBookContacts.BookCursorSortType[],
            ): DataBookCursorCache;
        }

        module DataBookCursorSqlite {
            // Constructor properties interface

            interface ConstructorProps extends DataBookCursor.ConstructorProps {
                cursor: any;
                ebsql: BookSqlite;
                revision_key: string;
                revisionKey: string;
            }
        }

        /**
         * An opaque handle for the SQLite cursor instance.
         */
        class DataBookCursorSqlite extends DataBookCursor {
            static $gtype: GObject.GType<DataBookCursorSqlite>;

            // Properties

            set cursor(val: any);
            set ebsql(val: BookSqlite);
            set revision_key(val: string);
            set revisionKey(val: string);

            // Constructors

            constructor(properties?: Partial<DataBookCursorSqlite.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                backend: BookBackend,
                ebsql: BookSqlite,
                revision_key: string,
                sort_fields: EBookContacts.ContactField[],
                sort_types: EBookContacts.BookCursorSortType[],
            ): DataBookCursorSqlite;
        }

        module DataBookDirect {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class DataBookDirect extends GObject.Object {
            static $gtype: GObject.GType<DataBookDirect>;

            // Constructors

            constructor(properties?: Partial<DataBookDirect.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend_path: string, backend_factory_name: string, config: string): DataBookDirect;

            // Methods

            /**
             * Places `direct` on the `connection` at `object_path`
             * @param connection The #GDBusConnection to register with
             * @param object_path The object path to place the direct access configuration data
             */
            register_gdbus_object(connection: Gio.DBusConnection, object_path: string): boolean;
        }

        module DataBookFactory {
            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.DataFactory.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        class DataBookFactory extends EBackend.DataFactory implements EDataServer.Extensible, Gio.Initable {
            static $gtype: GObject.GType<DataBookFactory>;

            // Constructors

            constructor(properties?: Partial<DataBookFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend_per_process: number, cancellable?: Gio.Cancellable | null): DataBookFactory;

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

        module DataBookView {
            // Signal callback interfaces

            interface ObjectsAdded {
                (vcards: string[]): void;
            }

            interface ObjectsModified {
                (vcards: string[]): void;
            }

            interface ObjectsRemoved {
                (uids: string[]): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                backend: BookBackend;
                connection: Gio.DBusConnection;
                indices: any;
                n_total: number;
                nTotal: number;
                object_path: string;
                objectPath: string;
                sexp: BookBackendSExp;
            }
        }

        class DataBookView extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<DataBookView>;

            // Properties

            get backend(): BookBackend;
            get connection(): Gio.DBusConnection;
            get indices(): any;
            set indices(val: any);
            get n_total(): number;
            set n_total(val: number);
            get nTotal(): number;
            set nTotal(val: number);
            get object_path(): string;
            get objectPath(): string;
            get sexp(): BookBackendSExp;

            // Constructors

            constructor(properties?: Partial<DataBookView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                backend: BookBackend,
                sexp: BookBackendSExp,
                connection: Gio.DBusConnection,
                object_path: string,
            ): DataBookView;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'objects-added', callback: (_source: this, vcards: string[]) => void): number;
            connect_after(signal: 'objects-added', callback: (_source: this, vcards: string[]) => void): number;
            emit(signal: 'objects-added', vcards: string[]): void;
            connect(signal: 'objects-modified', callback: (_source: this, vcards: string[]) => void): number;
            connect_after(signal: 'objects-modified', callback: (_source: this, vcards: string[]) => void): number;
            emit(signal: 'objects-modified', vcards: string[]): void;
            connect(signal: 'objects-removed', callback: (_source: this, uids: string[]) => void): number;
            connect_after(signal: 'objects-removed', callback: (_source: this, uids: string[]) => void): number;
            emit(signal: 'objects-removed', uids: string[]): void;

            // Methods

            /**
             * Tells the `self,` that it contains a contact with UID `uid`. This is useful
             * for "manual query" view, which do not do initial notifications. It helps
             * to not send "objects-added" signal for contacts, which are already part
             * of the `self,` because for them the "objects-modified" should be emitted
             * instead.
             * @param uid a contact UID
             */
            claim_contact_uid(uid: string): void;
            /**
             * Reads `range_length` contacts from index `range_start`.
             * When there are asked more than e_data_book_view_get_n_total()
             * contacts only those up to the total number of contacts are read.
             *
             * Free the returned #GPtrArray with g_ptr_array_unref(),
             * when no longer needed.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param range_start 0-based range start to retrieve the contacts for
             * @param range_length how many contacts to retrieve
             * @returns array of the read contacts,    or %NULL, when not applicable or when the @range_start it out of bounds.
             */
            dup_contacts(range_start: number, range_length: number): EBookContacts.Contact[] | null;
            /**
             * Returns a list of #EBookIndices holding indices of the contacts
             * in the view. These are received from the first sort field set by
             * e_data_book_view_set_sort_fields(). The last item of the returned
             * array is the one with chr member being %NULL.
             *
             * Free the returned array with e_book_indices_free(), when no longer needed.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @returns list of indices for the view,    or %NULL when cannot determine
             */
            dup_indices(): EBookContacts.BookIndices | null;
            /**
             * Returns the #GDBusConnection on which the AddressBookView D-Bus
             * interface is exported.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
            get_fields_of_interest(): GLib.HashTable<string, number> | null;
            /**
             * Gets the #EBookClientViewFlags that control the behaviour of `view`.
             * @returns the flags for @view.
             */
            get_flags(): EBookContacts.BookClientViewFlags;
            /**
             * Returns whether the `view` should do initial notifications
             * even when the flags do not contain %E_BOOK_CLIENT_VIEW_FLAGS_NOTIFY_INITIAL.
             * The default is %FALSE.
             * @returns value set by e_data_book_view_set_force_initial_notifications()
             */
            get_force_initial_notifications(): boolean;
            /**
             * Returns an identifier of the `self`. It does not change
             * for the whole life time of the `self`.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @returns an identifier of the view
             */
            get_id(): number;
            /**
             * Returns how many contacts are available in the view.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @returns how many contacts are available in the view
             */
            get_n_total(): number;
            /**
             * Returns the object path at which the AddressBookView D-Bus interface
             * is exported.
             * @returns the object path
             */
            get_object_path(): string;
            /**
             * Gets the s-expression used for matching contacts to `view`.
             * @returns The #EBookBackendSExp used.
             */
            get_sexp(): BookBackendSExp;
            is_completed(): boolean;
            /**
             * Notifies listeners that all pending updates on `view`
             * have been sent. The listener's information should now be
             * in sync with the backend's.
             * @param error the error of the query, if any
             */
            notify_complete(error: GLib.Error): void;
            /**
             * Notifies the client side that the content of the `self` changed,
             * which it should use to refresh the view data.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             */
            notify_content_changed(): void;
            /**
             * Provides listeners with a human-readable text describing the
             * current backend operation. This can be used for progress
             * reporting.
             * @param percent percent done; use -1 when not available
             * @param message a text message
             */
            notify_progress(percent: number, message: string): void;
            /**
             * Notify listeners that a contact specified by `id`
             * was removed from `view`.
             * @param id a unique contact ID
             */
            notify_remove(id: string): void;
            /**
             * Notify listeners that `contact` has changed. This can
             * trigger an add, change or removal event depending on
             * whether the change causes the contact to start matching,
             * no longer match, or stay matching the query specified
             * by `view`.
             * @param contact an #EContact
             */
            notify_update(contact: EBookContacts.Contact): void;
            /**
             * Notify listeners that `vcard` has changed. This can
             * trigger an add, change or removal event depending on
             * whether the change causes the contact to start matching,
             * no longer match, or stay matching the query specified
             * by `view`.  This method should be preferred over
             * e_data_book_view_notify_update() when the native
             * representation of a contact is a vCard.
             *
             * The important difference between this method and
             * e_data_book_view_notify_update() and
             * e_data_book_view_notify_update_vcard() is
             * that it doesn't match the contact against the book view query to see if it
             * should be included, it assumes that this has been done and the contact is
             * known to exist in the view.
             * @param id the UID of this contact
             * @param vcard a plain vCard
             */
            notify_update_prefiltered_vcard(id: string, vcard: string): void;
            /**
             * Notify listeners that `vcard` has changed. This can
             * trigger an add, change or removal event depending on
             * whether the change causes the contact to start matching,
             * no longer match, or stay matching the query specified
             * by `view`.  This method should be preferred over
             * e_data_book_view_notify_update() when the native
             * representation of a contact is a vCard.
             * @param id a unique id of the @vcard
             * @param vcard a plain vCard
             */
            notify_update_vcard(id: string, vcard: string): void;
            /**
             * Refs the backend that `view` is querying. Unref the returned backend,
             * if not %NULL, with g_object_unref(), when no longer needed.
             * @returns The associated #EBookBackend.
             */
            ref_backend(): BookBackend | null;
            /**
             * Sets whether the `view` should do initial notifications
             * even when the flags do not contain %E_BOOK_CLIENT_VIEW_FLAGS_NOTIFY_INITIAL.
             * @param value value to set
             */
            set_force_initial_notifications(value: boolean): void;
            /**
             * Sets indices used by the `self`. The array is terminated by an item
             * with chr member being %NULL.
             * See e_data_book_view_dup_indices() for more information.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param indices an array of #EBookIndices
             */
            set_indices(indices: EBookContacts.BookIndices): void;
            /**
             * Sets how many contacts are available in the view.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param n_total a value to set
             */
            set_n_total(n_total: number): void;
            /**
             * Sets `fields` to sort the view by. The default is to sort by the file-as
             * field. The contacts are always sorted in ascending order. Not every field
             * can be used for sorting, the default available fields are %E_CONTACT_FILE_AS,
             * %E_CONTACT_GIVEN_NAME and %E_CONTACT_FAMILY_NAME.
             *
             * The first sort field is used to populate indices, as returned
             * by e_data_book_view_dup_indices().
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param fields an array of #EBookClientViewSortFields fields to sort by
             */
            set_sort_fields(fields: EBookContacts.BookClientViewSortFields): void;

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

        module DataBookViewWatcherCache {
            // Constructor properties interface

            interface ConstructorProps extends EBookContacts.BookIndicesUpdater.ConstructorProps {}
        }

        /**
         * A structure used to handle "manual query" views for #EBookBackend
         * descendants which use #EBookCache to store the contacts.
         */
        class DataBookViewWatcherCache extends EBookContacts.BookIndicesUpdater {
            static $gtype: GObject.GType<DataBookViewWatcherCache>;

            // Constructors

            constructor(properties?: Partial<DataBookViewWatcherCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend: BookBackend, cache: BookCache, view: DataBookView): DataBookViewWatcherCache;

            // Methods

            /**
             * Retrieves contacts in the given range. Returns %NULL when the `range_start`
             * is out of bounds. The function can return less than `range_length` contacts.
             *
             * The returned array should be freed with g_ptr_array_unref(),
             * when no longer needed.
             * @param range_start range start, 0-based
             * @param range_length how many contacts to retrieve
             * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
             */
            dup_contacts(range_start: number, range_length: number): EBookContacts.Contact[] | null;
            /**
             * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
             * sorts by file-as field. The function assumes ownership of the `sort_fields`.
             * @param sort_fields an #EBookClientViewSortFields, or %NULL
             */
            take_sort_fields(sort_fields?: EBookContacts.BookClientViewSortFields | null): void;
        }

        module DataBookViewWatcherMemory {
            // Constructor properties interface

            interface ConstructorProps extends EBookContacts.BookIndicesUpdater.ConstructorProps {}
        }

        /**
         * A structure used as a default implementation to
         * handle "manual query" views by the #EBookBackend.
         */
        class DataBookViewWatcherMemory extends EBookContacts.BookIndicesUpdater {
            static $gtype: GObject.GType<DataBookViewWatcherMemory>;

            // Constructors

            constructor(properties?: Partial<DataBookViewWatcherMemory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend: BookBackend, view: DataBookView): DataBookViewWatcherMemory;

            // Methods

            /**
             * Retrieves contacts in the given range. Returns %NULL when the `range_start`
             * is out of bounds. The function can return less than `range_length` contacts.
             *
             * The returned array should be freed with g_ptr_array_unref(),
             * when no longer needed.
             * @param range_start range start, 0-based
             * @param range_length how many contacts to retrieve
             * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
             */
            dup_contacts(range_start: number, range_length: number): EBookContacts.Contact[] | null;
            /**
             * Sets a locale to use for sorting. When %NULL, or when cannot
             * use the provided locale, tries to use the system locale.
             * @param locale a locale to set, or %NULL
             */
            set_locale(locale?: string | null): void;
            /**
             * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
             * sorts by file-as field. The function assumes ownership of the `sort_fields`.
             * @param sort_fields an #EBookClientViewSortFields, or %NULL
             */
            take_sort_fields(sort_fields?: EBookContacts.BookClientViewSortFields | null): void;
        }

        module DataBookViewWatcherSqlite {
            // Constructor properties interface

            interface ConstructorProps extends EBookContacts.BookIndicesUpdater.ConstructorProps {}
        }

        /**
         * A structure used to handle "manual query" views for #EBookBackend
         * descendants which use #EBookSqlite to store the contacts.
         */
        class DataBookViewWatcherSqlite extends EBookContacts.BookIndicesUpdater {
            static $gtype: GObject.GType<DataBookViewWatcherSqlite>;

            // Constructors

            constructor(properties?: Partial<DataBookViewWatcherSqlite.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](backend: BookBackend, ebsql: BookSqlite, view: DataBookView): DataBookViewWatcherSqlite;

            // Methods

            /**
             * Retrieves contacts in the given range. Returns %NULL when the `range_start`
             * is out of bounds. The function can return less than `range_length` contacts.
             *
             * The returned array should be freed with g_ptr_array_unref(),
             * when no longer needed.
             * @param range_start range start, 0-based
             * @param range_length how many contacts to retrieve
             * @returns an array of #EContact-s,    or %NULL, when @range_start is out of bounds.
             */
            dup_contacts(range_start: number, range_length: number): EBookContacts.Contact[] | null;
            /**
             * Sets `sort_fields` as fields to sort the contacts by. If %NULL,
             * sorts by file-as field. The function assumes ownership of the `sort_fields`.
             * @param sort_fields an #EBookClientViewSortFields, or %NULL
             */
            take_sort_fields(sort_fields?: EBookContacts.BookClientViewSortFields | null): void;
        }

        module SubprocessBookFactory {
            // Constructor properties interface

            interface ConstructorProps
                extends EBackend.SubprocessFactory.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        class SubprocessBookFactory extends EBackend.SubprocessFactory implements Gio.Initable {
            static $gtype: GObject.GType<SubprocessBookFactory>;

            // Constructors

            constructor(properties?: Partial<SubprocessBookFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](cancellable?: Gio.Cancellable | null): SubprocessBookFactory;

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

        module SystemLocaleWatcher {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                locale: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SystemLocaleWatcher extends GObject.Object {
            static $gtype: GObject.GType<SystemLocaleWatcher>;

            // Properties

            /**
             * Current locale, as detected. It can be %NULL, when the locale
             * was not detected yet.
             */
            get locale(): string;

            // Constructors

            constructor(properties?: Partial<SystemLocaleWatcher.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SystemLocaleWatcher;

            // Methods

            /**
             * Returns the current locale, as detected by the `watcher`. The string
             * is duplicated for thread safety. It can be %NULL, when the locale
             * was not detected yet.
             *
             * Free it with g_free(), when no longer needed.
             * @returns the system locale, as detected by the @watcher
             */
            dup_locale(): string | null;
        }

        type BookBackendClass = typeof BookBackend;
        type BookBackendFactoryClass = typeof BookBackendFactory;
        abstract class BookBackendFactoryPrivate {
            static $gtype: GObject.GType<BookBackendFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class BookBackendPrivate {
            static $gtype: GObject.GType<BookBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BookBackendSExpClass = typeof BookBackendSExp;
        abstract class BookBackendSExpPrivate {
            static $gtype: GObject.GType<BookBackendSExpPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BookBackendSyncClass = typeof BookBackendSync;
        abstract class BookBackendSyncPrivate {
            static $gtype: GObject.GType<BookBackendSyncPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BookCacheClass = typeof BookCache;
        /**
         * An opaque cursor pointer
         */
        class BookCacheCursor {
            static $gtype: GObject.GType<BookCacheCursor>;

            // Constructors

            constructor(
                book_cache: BookCache,
                sexp: string | null,
                sort_fields: EBookContacts.ContactField[],
                sort_types: EBookContacts.BookCursorSortType[],
            );
            _init(...args: any[]): void;

            static ['new'](
                book_cache: BookCache,
                sexp: string | null,
                sort_fields: EBookContacts.ContactField[],
                sort_types: EBookContacts.BookCursorSortType[],
            ): BookCacheCursor;
        }

        abstract class BookCachePrivate {
            static $gtype: GObject.GType<BookCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This structure is used to represent contacts returned
         * by the #EBookCache from various functions
         * such as e_book_cache_search().
         *
         * The `extra` parameter will contain any data which was
         * previously passed for this contact in e_book_cache_put_contact()
         * or set with e_book_cache_set_contact_extra().
         *
         * These should be freed with e_book_cache_search_data_free().
         */
        class BookCacheSearchData {
            static $gtype: GObject.GType<BookCacheSearchData>;

            // Fields

            uid: string;
            vcard: string;
            extra: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    uid: string;
                    vcard: string;
                    extra: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](uid: string, vcard: string, extra?: string | null): BookCacheSearchData;

            // Static methods

            /**
             * Frees the `data` structure, previously allocated with e_book_cache_search_data_new()
             * or e_book_cache_search_data_copy().
             * @param data an #EBookCacheSearchData
             */
            static free(data?: any | null): void;

            // Methods

            copy(): BookCacheSearchData | null;
        }

        type BookMetaBackendClass = typeof BookMetaBackend;
        class BookMetaBackendInfo {
            static $gtype: GObject.GType<BookMetaBackendInfo>;

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
            ): BookMetaBackendInfo;

            // Static methods

            /**
             * Frees the `ptr` structure, previously allocated with e_book_meta_backend_info_new()
             * or e_book_meta_backend_info_copy().
             * @param ptr an #EBookMetaBackendInfo
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): BookMetaBackendInfo | null;
        }

        abstract class BookMetaBackendPrivate {
            static $gtype: GObject.GType<BookMetaBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BookSqliteClass = typeof BookSqlite;
        abstract class BookSqlitePrivate {
            static $gtype: GObject.GType<BookSqlitePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookClass = typeof DataBook;
        type DataBookCursorCacheClass = typeof DataBookCursorCache;
        abstract class DataBookCursorCachePrivate {
            static $gtype: GObject.GType<DataBookCursorCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookCursorClass = typeof DataBookCursor;
        abstract class DataBookCursorPrivate {
            static $gtype: GObject.GType<DataBookCursorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookCursorSqliteClass = typeof DataBookCursorSqlite;
        abstract class DataBookCursorSqlitePrivate {
            static $gtype: GObject.GType<DataBookCursorSqlitePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookDirectClass = typeof DataBookDirect;
        abstract class DataBookDirectPrivate {
            static $gtype: GObject.GType<DataBookDirectPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookFactoryClass = typeof DataBookFactory;
        abstract class DataBookFactoryPrivate {
            static $gtype: GObject.GType<DataBookFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class DataBookPrivate {
            static $gtype: GObject.GType<DataBookPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookViewClass = typeof DataBookView;
        abstract class DataBookViewPrivate {
            static $gtype: GObject.GType<DataBookViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookViewWatcherCacheClass = typeof DataBookViewWatcherCache;
        abstract class DataBookViewWatcherCachePrivate {
            static $gtype: GObject.GType<DataBookViewWatcherCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookViewWatcherMemoryClass = typeof DataBookViewWatcherMemory;
        abstract class DataBookViewWatcherMemoryPrivate {
            static $gtype: GObject.GType<DataBookViewWatcherMemoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataBookViewWatcherSqliteClass = typeof DataBookViewWatcherSqlite;
        abstract class DataBookViewWatcherSqlitePrivate {
            static $gtype: GObject.GType<DataBookViewWatcherSqlitePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SubprocessBookFactoryClass = typeof SubprocessBookFactory;
        abstract class SubprocessBookFactoryPrivate {
            static $gtype: GObject.GType<SubprocessBookFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SystemLocaleWatcherClass = typeof SystemLocaleWatcher;
        abstract class SystemLocaleWatcherPrivate {
            static $gtype: GObject.GType<SystemLocaleWatcherPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque cursor pointer
         */
        abstract class bSqlCursor {
            static $gtype: GObject.GType<bSqlCursor>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * This structure is used to represent contacts returned
         * by the #EBookSqlite from various functions
         * such as e_book_sqlitedb_search().
         *
         * The `extra` parameter will contain any data which was
         * previously passed for this contact in e_book_sqlite_add_contact().
         *
         * These should be freed with e_book_sqlite_search_data_free().
         */
        class bSqlSearchData {
            static $gtype: GObject.GType<bSqlSearchData>;

            // Fields

            uid: string;
            vcard: string;
            extra: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    uid: string;
                    vcard: string;
                    extra: string;
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

    export default EDataBook;
}

declare module 'gi://EDataBook' {
    import EDataBook12 from 'gi://EDataBook?version=1.2';
    export default EDataBook12;
}
// END
