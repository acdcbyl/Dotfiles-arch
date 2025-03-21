/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./edataserver-1.2.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./camel-1.2.d.ts" />
/// <reference path="./ebookcontacts-1.2.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EBook?version=1.2' {
    // Module dependencies
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type EDataServer from 'gi://EDataServer?version=1.2';
    import type Soup from 'gi://Soup?version=3.0';
    import type Json from 'gi://Json?version=1.0';
    import type Camel from 'gi://Camel?version=1.2';
    import type EBookContacts from 'gi://EBookContacts?version=1.2';

    export namespace EBook {
        /**
         * EBook-1.2
         */

        /**
         * Error codes for the #E_BOOK_ERROR error
         */

        /**
         * Error codes for the #E_BOOK_ERROR error
         */
        export namespace BookStatus {
            export const $gtype: GObject.GType<BookStatus>;
        }

        enum BookStatus {
            OK,
            INVALID_ARG,
            BUSY,
            REPOSITORY_OFFLINE,
            NO_SUCH_BOOK,
            NO_SELF_CONTACT,
            SOURCE_NOT_LOADED,
            SOURCE_ALREADY_LOADED,
            PERMISSION_DENIED,
            CONTACT_NOT_FOUND,
            CONTACT_ID_ALREADY_EXISTS,
            PROTOCOL_NOT_SUPPORTED,
            CANCELLED,
            COULD_NOT_CANCEL,
            AUTHENTICATION_FAILED,
            AUTHENTICATION_REQUIRED,
            TLS_NOT_AVAILABLE,
            DBUS_EXCEPTION,
            NO_SUCH_SOURCE,
            OFFLINE_UNAVAILABLE,
            OTHER_ERROR,
            INVALID_SERVER_VERSION,
            UNSUPPORTED_AUTHENTICATION_METHOD,
            NO_SPACE,
            NOT_SUPPORTED,
        }
        function book_error_quark(): GLib.Quark;
        /**
         * Synchronously searches for `recipients` S/MIME or PGP certificates either
         * in provided `only_clients` #EBookClient, or, when %NULL, in each found
         * address book configured for auto-completion.
         *
         * This function can be used within camel_session_get_recipient_certificates_sync()
         * implementation.
         * @param registry an #ESourceRegistry
         * @param only_clients optional #GSList of    the #EBookClient objects to search for the certificates in, or %NULL
         * @param flags bit-or of #CamelRecipientCertificateFlags
         * @param recipients a #GPtrArray of recipients' email addresses
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE when no fatal error occurred, %FALSE otherwise.
         */
        function book_utils_get_recipient_certificates_sync(
            registry: EDataServer.SourceRegistry,
            only_clients: BookClient[] | null,
            flags: Camel.RecipientCertificateFlags | null,
            recipients: string[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[]];
        module BookClient {
            // Constructor properties interface

            interface ConstructorProps
                extends EDataServer.Client.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                locale: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class BookClient extends EDataServer.Client implements Gio.AsyncInitable<BookClient>, Gio.Initable {
            static $gtype: GObject.GType<BookClient>;

            // Properties

            /**
             * The currently active locale for this addressbook.
             */
            get locale(): string;

            // Constructors

            constructor(properties?: Partial<BookClient.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source: EDataServer.Source): BookClient;

            // Static methods

            /**
             * Asynchronously creates a new #EBookClient for `source`.
             *
             * The `wait_for_connected_seconds` argument had been added since 3.16,
             * to let the caller decide how long to wait for the backend to fully
             * connect to its (possibly remote) data store. This is required due
             * to a change in the authentication process, which is fully asynchronous
             * and done on the client side, while not every client is supposed to
             * response to authentication requests. In case the backend will not connect
             * within the set interval, then it is opened in an offline mode. A special
             * value -1 can be used to not wait for the connected state at all.
             *
             * Unlike with e_book_client_new(), there is no need to call e_client_open()
             * after obtaining the #EBookClient.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_client_connect_finish() to get the result of the operation.
             * @param source an #ESource
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            static connect(
                source: EDataServer.Source,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<BookClient> | null,
            ): void;
            static connect(...args: never[]): any;
            /**
             * Like e_book_client_connect(), except creates the book client for
             * direct read access to the underlying addressbook.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_client_connect_direct_finish() to get the result of the operation.
             * @param source an #ESource
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            static connect_direct(
                source: EDataServer.Source,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<BookClient> | null,
            ): void;
            /**
             * Finishes the operation started with e_book_client_connect_direct().
             * If an error occurs in connecting to the D-Bus service, the function sets
             * `error` and returns %NULL.
             *
             * For error handling convenience, any error message returned by this
             * function will have a descriptive prefix that includes the display
             * name of the #ESource passed to e_book_client_connect_direct().
             * @param result a #GAsyncResult
             */
            static connect_direct_finish(result: Gio.AsyncResult): BookClient;
            /**
             * Like e_book_client_connect_sync(), except creates the book client for
             * direct read access to the underlying addressbook.
             * @param registry an #ESourceRegistry
             * @param source an #ESource
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             */
            static connect_direct_sync(
                registry: EDataServer.SourceRegistry,
                source: EDataServer.Source,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
            ): BookClient;
            /**
             * Finishes the operation started with e_book_client_connect().  If an
             * error occurs in connecting to the D-Bus service, the function sets
             * `error` and returns %NULL.
             *
             * For error handling convenience, any error message returned by this
             * function will have a descriptive prefix that includes the display
             * name of the #ESource passed to e_book_client_connect().
             * @param result a #GAsyncResult
             */
            static connect_finish(result: Gio.AsyncResult): BookClient;
            /**
             * Creates a new #EBookClient for `source`.  If an error occurs, the function
             * will set `error` and return %FALSE.
             *
             * Unlike with e_book_client_new(), there is no need to call
             * e_client_open_sync() after obtaining the #EBookClient.
             *
             * The `wait_for_connected_seconds` argument had been added since 3.16,
             * to let the caller decide how long to wait for the backend to fully
             * connect to its (possibly remote) data store. This is required due
             * to a change in the authentication process, which is fully asynchronous
             * and done on the client side, while not every client is supposed to
             * response to authentication requests. In case the backend will not connect
             * within the set interval, then it is opened in an offline mode. A special
             * value -1 can be used to not wait for the connected state at all.
             *
             * For error handling convenience, any error message returned by this
             * function will have a descriptive prefix that includes the display
             * name of `source`.
             * @param source an #ESource
             * @param wait_for_connected_seconds timeout, in seconds, to wait for the backend to be fully connected
             * @param cancellable optional #GCancellable object, or %NULL
             */
            static connect_sync(
                source: EDataServer.Source,
                wait_for_connected_seconds: number,
                cancellable?: Gio.Cancellable | null,
            ): BookClient;
            /**
             * Get the #EContact referring to the user of the address book
             * and set it in `out_contact` and `out_client`.
             * @param registry an #ESourceRegistry
             */
            static get_self(registry: EDataServer.SourceRegistry): [boolean, EBookContacts.Contact, BookClient];
            /**
             * Check if `contact` is the user of the address book.
             * @param contact an #EContact
             */
            static is_self(contact: EBookContacts.Contact): boolean;

            // Methods

            /**
             * Adds `contact` to `client`.
             * The call is finished by e_book_client_add_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            add_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string>;
            /**
             * Adds `contact` to `client`.
             * The call is finished by e_book_client_add_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Adds `contact` to `client`.
             * The call is finished by e_book_client_add_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes previous call of e_book_client_add_contact() and
             * sets `out_added_uid` to a UID of a newly added contact.
             * This string should be freed with g_free().
             *
             * Note: This is not modifying original #EContact.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_contact_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Adds `contact` to `client` and
             * sets `out_added_uid` to a UID of a newly added contact.
             * This string should be freed with g_free().
             *
             * Note: This is not modifying original `contact,` thus if it's needed,
             * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_contact_sync(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Adds `contacts` to `client`.
             * The call is finished by e_book_client_add_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects to add
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            add_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<string[] | null>;
            /**
             * Adds `contacts` to `client`.
             * The call is finished by e_book_client_add_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects to add
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Adds `contacts` to `client`.
             * The call is finished by e_book_client_add_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects to add
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            add_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[] | null> | void;
            /**
             * Finishes previous call of e_book_client_add_contacts() and
             * sets `out_added_uids` to the UIDs of newly added contacts if successful.
             * This #GSList should be freed with e_client_util_free_string_slist().
             *
             * If any of the contacts cannot be inserted, all of the insertions will be
             * reverted and this method will return %FALSE.
             *
             * Note: This is not modifying original #EContact objects.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_contacts_finish(result: Gio.AsyncResult): [boolean, string[] | null];
            /**
             * Adds `contacts` to `client` and
             * sets `out_added_uids` to the UIDs of newly added contacts if successful.
             * This #GSList should be freed with e_client_util_free_string_slist().
             *
             * If any of the contacts cannot be inserted, all of the insertions will be
             * reverted and this method will return %FALSE.
             *
             * Note: This is not modifying original `contacts,` thus if it's needed,
             * then use e_contact_set (contact, E_CONTACT_UID, new_uid).
             * @param contacts a #GSList of #EContact objects to add
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            add_contacts_sync(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[] | null];
            /**
             * Asynchronously checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_client_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable a #GCancellable; can be %NULL
             */
            contains_email(email_address: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously checks whether contains an `email_address`. When the `email_address`
             * contains multiple addresses, then returns %TRUE when at least one
             * address exists in the address book.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_book_client_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
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
             * call e_book_client_contains_email_finish() to get the result of the
             * operation.
             * @param email_address an email address
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            contains_email(
                email_address: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_book_client_contains_email().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            contains_email_finish(result: Gio.AsyncResult): boolean;
            contains_email_sync(email_address: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Receive #EContact from the `client` for the given `uid`.
             * The call is finished by e_book_client_get_contact_finish()
             * from the `callback`.
             * @param uid a unique string ID specifying the contact
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_contact(uid: string, cancellable?: Gio.Cancellable | null): Promise<EBookContacts.Contact | null>;
            /**
             * Receive #EContact from the `client` for the given `uid`.
             * The call is finished by e_book_client_get_contact_finish()
             * from the `callback`.
             * @param uid a unique string ID specifying the contact
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contact(
                uid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Receive #EContact from the `client` for the given `uid`.
             * The call is finished by e_book_client_get_contact_finish()
             * from the `callback`.
             * @param uid a unique string ID specifying the contact
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contact(
                uid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<EBookContacts.Contact | null> | void;
            /**
             * Finishes previous call of e_book_client_get_contact().
             * If successful, then the `out_contact` is set to newly allocated
             * #EContact, which should be freed with g_object_unref().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contact_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact | null];
            /**
             * Receive #EContact from the `client` for the gived `uid`.
             * If successful, then the `out_contact` is set to newly allocated
             * #EContact, which should be freed with g_object_unref().
             * @param uid a unique string ID specifying the contact
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contact_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact];
            /**
             * Query `client` with `sexp,` receiving a list of contacts which
             * matched. The call is finished by e_book_client_get_contacts_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_contacts(sexp: string, cancellable?: Gio.Cancellable | null): Promise<EBookContacts.Contact[]>;
            /**
             * Query `client` with `sexp,` receiving a list of contacts which
             * matched. The call is finished by e_book_client_get_contacts_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contacts(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Query `client` with `sexp,` receiving a list of contacts which
             * matched. The call is finished by e_book_client_get_contacts_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contacts(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<EBookContacts.Contact[]> | void;
            /**
             * Finishes previous call of e_book_client_get_contacts().
             * If successful, then the `out_contacts` is set to newly allocated list of
             * #EContact(s), which should be freed with e_client_util_free_object_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contacts_finish(result: Gio.AsyncResult): [boolean, EBookContacts.Contact[]];
            /**
             * Query `client` with `sexp,` receiving a list of contacts which matched.
             * If successful, then the `out_contacts` is set to newly allocated #GSList of
             * #EContact(s), which should be freed with e_client_util_free_object_slist().
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contacts_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, EBookContacts.Contact[]];
            /**
             * Query `client` with `sexp,` receiving a list of contacts UIDs which
             * matched. The call is finished by e_book_client_get_contacts_uids_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_contacts_uids(sexp: string, cancellable?: Gio.Cancellable | null): Promise<string[]>;
            /**
             * Query `client` with `sexp,` receiving a list of contacts UIDs which
             * matched. The call is finished by e_book_client_get_contacts_uids_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contacts_uids(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Query `client` with `sexp,` receiving a list of contacts UIDs which
             * matched. The call is finished by e_book_client_get_contacts_uids_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_contacts_uids(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[]> | void;
            /**
             * Finishes previous call of e_book_client_get_contacts_uids().
             * If successful, then the `out_contact_uids` is set to newly allocated list
             * of UID strings, which should be freed with e_client_util_free_string_slist().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contacts_uids_finish(result: Gio.AsyncResult): [boolean, string[]];
            /**
             * Query `client` with `sexp,` receiving a list of contacts UIDs which matched.
             * If successful, then the `out_contact_uids` is set to newly allocated list
             * of UID strings, which should be freed with e_client_util_free_string_slist().
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_contacts_uids_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];
            /**
             * Create an #EBookClientCursor.
             * The call is finished by e_book_client_get_cursor_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param sort_fields an array of #EContactFields to sort the cursor with
             * @param sort_types an array of #EBookCursorSortTypes to complement @sort_fields
             * @param n_fields the length of the input @sort_fields and @sort_types arrays
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_cursor(
                sexp: string,
                sort_fields: EBookContacts.ContactField | null,
                sort_types: EBookContacts.BookCursorSortType | null,
                n_fields: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<BookClientCursor>;
            /**
             * Create an #EBookClientCursor.
             * The call is finished by e_book_client_get_cursor_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param sort_fields an array of #EContactFields to sort the cursor with
             * @param sort_types an array of #EBookCursorSortTypes to complement @sort_fields
             * @param n_fields the length of the input @sort_fields and @sort_types arrays
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_cursor(
                sexp: string,
                sort_fields: EBookContacts.ContactField | null,
                sort_types: EBookContacts.BookCursorSortType | null,
                n_fields: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Create an #EBookClientCursor.
             * The call is finished by e_book_client_get_cursor_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param sort_fields an array of #EContactFields to sort the cursor with
             * @param sort_types an array of #EBookCursorSortTypes to complement @sort_fields
             * @param n_fields the length of the input @sort_fields and @sort_types arrays
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_cursor(
                sexp: string,
                sort_fields: EBookContacts.ContactField | null,
                sort_types: EBookContacts.BookCursorSortType | null,
                n_fields: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<BookClientCursor> | void;
            /**
             * Finishes previous call of e_book_client_get_cursor().
             * If successful, then the `out_cursor` is set to newly create
             * #EBookClientCursor, the cursor should be freed with g_object_unref()
             * when no longer needed.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_cursor_finish(result: Gio.AsyncResult): [boolean, BookClientCursor];
            /**
             * Create an #EBookClientCursor. If successful, then the `out_cursor` is set
             * to newly allocated #EBookClientCursor, the cursor should be freed with g_object_unref()
             * when no longer needed.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param sort_fields an array of #EContactFields to sort the cursor with
             * @param sort_types an array of #EBookCursorSortTypes to complement @sort_fields
             * @param n_fields the length of the input @sort_fields and @sort_types arrays
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_cursor_sync(
                sexp: string,
                sort_fields: EBookContacts.ContactField | null,
                sort_types: EBookContacts.BookCursorSortType | null,
                n_fields: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, BookClientCursor];
            /**
             * Reports the locale in use for `client`. The addressbook might sort contacts
             * in different orders, or store and compare phone numbers in different ways
             * depending on the currently set locale.
             *
             * Locales can change dynamically if systemd decides to change the locale, so
             * it's important to listen for notifications on the #EBookClient:locale property
             * if you depend on sorted result lists. Ordered results should be reloaded
             * after a locale change is detected.
             * @returns The currently set locale for @client
             */
            get_locale(): string;
            /**
             * Query `client` with `sexp,` creating an #EBookClientView.
             * The call is finished by e_book_client_get_view_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_view(sexp: string, cancellable?: Gio.Cancellable | null): Promise<BookClientView>;
            /**
             * Query `client` with `sexp,` creating an #EBookClientView.
             * The call is finished by e_book_client_get_view_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_view(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Query `client` with `sexp,` creating an #EBookClientView.
             * The call is finished by e_book_client_get_view_finish()
             * from the `callback`.
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_view(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<BookClientView> | void;
            /**
             * Finishes previous call of e_book_client_get_view().
             * If successful, then the `out_view` is set to newly allocated
             * #EBookClientView, which should be freed with g_object_unref().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_view_finish(result: Gio.AsyncResult): [boolean, BookClientView];
            /**
             * Query `client` with `sexp,` creating an #EBookClientView.
             * If successful, then the `out_view` is set to newly allocated
             * #EBookClientView, which should be freed with g_object_unref().
             *
             * Note: `sexp` can be obtained through #EBookQuery, by converting it
             * to a string with e_book_query_to_string().
             * @param sexp an S-expression representing the query
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, BookClientView];
            /**
             * Applies the changes made to `contact` to the stored version in `client`.
             * The call is finished by e_book_client_modify_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            modify_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Applies the changes made to `contact` to the stored version in `client`.
             * The call is finished by e_book_client_modify_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Applies the changes made to `contact` to the stored version in `client`.
             * The call is finished by e_book_client_modify_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_book_client_modify_contact().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_contact_finish(result: Gio.AsyncResult): boolean;
            /**
             * Applies the changes made to `contact` to the stored version in `client`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_contact_sync(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Applies the changes made to `contacts` to the stored versions in `client`.
             * The call is finished by e_book_client_modify_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            modify_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Applies the changes made to `contacts` to the stored versions in `client`.
             * The call is finished by e_book_client_modify_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Applies the changes made to `contacts` to the stored versions in `client`.
             * The call is finished by e_book_client_modify_contacts_finish()
             * from the `callback`.
             * @param contacts a #GSList of #EContact objects
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            modify_contacts(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_book_client_modify_contacts().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_contacts_finish(result: Gio.AsyncResult): boolean;
            /**
             * Applies the changes made to `contacts` to the stored versions in `client`.
             * @param contacts a #GSList of #EContact objects
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            modify_contacts_sync(
                contacts: EBookContacts.Contact[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes `contact` from the `client`.
             * The call is finished by e_book_client_remove_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Removes `contact` from the `client`.
             * The call is finished by e_book_client_remove_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Removes `contact` from the `client`.
             * The call is finished by e_book_client_remove_contact_finish()
             * from the `callback`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contact(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Removes contact with `uid` from the `client`.
             * The call is finished by e_book_client_remove_contact_by_uid_finish()
             * from the `callback`.
             * @param uid a UID of a contact to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove_contact_by_uid(
                uid: string,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Removes contact with `uid` from the `client`.
             * The call is finished by e_book_client_remove_contact_by_uid_finish()
             * from the `callback`.
             * @param uid a UID of a contact to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contact_by_uid(
                uid: string,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Removes contact with `uid` from the `client`.
             * The call is finished by e_book_client_remove_contact_by_uid_finish()
             * from the `callback`.
             * @param uid a UID of a contact to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contact_by_uid(
                uid: string,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_book_client_remove_contact_by_uid().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contact_by_uid_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes contact with `uid` from the `client`.
             * @param uid a UID of a contact to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contact_by_uid_sync(
                uid: string,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Finishes previous call of e_book_client_remove_contact().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contact_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes `contact` from the `client`.
             * @param contact an #EContact
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contact_sync(
                contact: EBookContacts.Contact,
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes the contacts with uids from the list `uids` from `client`.  This is
             * always more efficient than calling e_book_client_remove_contact() if you
             * have more than one uid to remove, as some backends can implement it
             * as a batch request.
             * The call is finished by e_book_client_remove_contacts_finish()
             * from the `callback`.
             * @param uids a #GSList of UIDs to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove_contacts(
                uids: string[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Removes the contacts with uids from the list `uids` from `client`.  This is
             * always more efficient than calling e_book_client_remove_contact() if you
             * have more than one uid to remove, as some backends can implement it
             * as a batch request.
             * The call is finished by e_book_client_remove_contacts_finish()
             * from the `callback`.
             * @param uids a #GSList of UIDs to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contacts(
                uids: string[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Removes the contacts with uids from the list `uids` from `client`.  This is
             * always more efficient than calling e_book_client_remove_contact() if you
             * have more than one uid to remove, as some backends can implement it
             * as a batch request.
             * The call is finished by e_book_client_remove_contacts_finish()
             * from the `callback`.
             * @param uids a #GSList of UIDs to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove_contacts(
                uids: string[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_book_client_remove_contacts().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contacts_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes the contacts with uids from the list `uids` from `client`.  This is
             * always more efficient than calling e_book_client_remove_contact() if you
             * have more than one uid to remove, as some backends can implement it
             * as a batch request.
             * @param uids a #GSList of UIDs to remove
             * @param opflags bit-or of #EBookOperationFlags
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_contacts_sync(
                uids: string[],
                opflags: EBookContacts.BookOperationFlags | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Specify that `contact` residing in `client` is the #EContact that
             * refers to the user of the address book.
             * @param contact an #EContact
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            set_self(contact: EBookContacts.Contact): boolean;

            // Inherited methods
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             */
            init_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
             */
            init_finish(res: Gio.AsyncResult): boolean;
            /**
             * Finishes the async construction for the various g_async_initable_new
             * calls, returning the created object or %NULL on error.
             * @param res the #GAsyncResult from the callback
             * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
             */
            new_finish(res: Gio.AsyncResult): BookClient;
            /**
             * Starts asynchronous initialization of the object implementing the
             * interface. This must be done before any real use of the object after
             * initial construction. If the object also implements #GInitable you can
             * optionally call g_initable_init() instead.
             *
             * This method is intended for language bindings. If writing in C,
             * g_async_initable_new_async() should typically be used instead.
             *
             * When the initialization is finished, `callback` will be called. You can
             * then call g_async_initable_init_finish() to get the result of the
             * initialization.
             *
             * Implementations may also support cancellation. If `cancellable` is not
             * %NULL, then initialization can be cancelled by triggering the cancellable
             * object from another thread. If the operation was cancelled, the error
             * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
             * the object doesn't support cancellable initialization, the error
             * %G_IO_ERROR_NOT_SUPPORTED will be returned.
             *
             * As with #GInitable, if the object is not initialized, or initialization
             * returns with an error, then all operations on the object except
             * g_object_ref() and g_object_unref() are considered to be invalid, and
             * have undefined behaviour. They will often fail with g_critical() or
             * g_warning(), but this must not be relied on.
             *
             * Callers should not assume that a class which implements #GAsyncInitable can
             * be initialized multiple times; for more information, see g_initable_init().
             * If a class explicitly supports being initialized multiple times,
             * implementation requires yielding all subsequent calls to init_async() on the
             * results of the first call.
             *
             * For classes that also support the #GInitable interface, the default
             * implementation of this method will run the g_initable_init() function
             * in a thread, so if you want to support asynchronous initialization via
             * threads, just implement the #GAsyncInitable interface without overriding
             * any interface methods.
             * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
             * @param cancellable optional #GCancellable object, %NULL to ignore.
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_init_async(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes asynchronous initialization and returns the result.
             * See g_async_initable_init_async().
             * @param res a #GAsyncResult.
             */
            vfunc_init_finish(res: Gio.AsyncResult): boolean;
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

        module BookClientCursor {
            // Signal callback interfaces

            interface Refresh {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                alphabet: string[];
                client: BookClient;
                connection: Gio.DBusConnection;
                context: GLib.MainContext;
                object_path: string;
                objectPath: string;
                position: number;
                sort_fields: string[];
                sortFields: string[];
                total: number;
            }
        }

        /**
         * Contains only private data.
         */
        class BookClientCursor extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<BookClientCursor>;

            // Properties

            /**
             * The currently <link linkend="cursor-alphabet">active alphabet</link>.
             *
             * The value is a %NULL terminated array of strings,
             * each string is suitable to display a specific letter
             * in the active alphabet.
             *
             * Indexes from this array can later be used with
             * e_book_client_cursor_set_alphabetic_index().
             *
             * This property will automatically change if the
             * active locale of the addressbook server changes.
             *
             * Property change notifications are guaranteed to be
             * delivered in the #GMainContext which was the thread
             * default context at cursor creation time.
             */
            get alphabet(): string[];
            /**
             * The #EBookClient which this cursor was created for
             */
            get client(): BookClient;
            /**
             * The #GDBusConnection to the addressbook server.
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set connection(val: Gio.DBusConnection);
            /**
             * The #GMainContext in which the #EBookClient created this cursor.
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set context(val: GLib.MainContext);
            /**
             * The D-Bus object path to find the server side cursor object.
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set object_path(val: string);
            /**
             * The D-Bus object path to find the server side cursor object.
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set objectPath(val: string);
            /**
             * The current cursor position in the cursor's result list.
             *
             * More specifically, the cursor position is defined as
             * the number of contacts leading up to the current
             * cursor position, inclusive of the current cursor
             * position.
             *
             * If the position value is 0, then the cursor is positioned
             * before the contact list in the symbolic %E_BOOK_CURSOR_ORIGIN_BEGIN
             * position. If the position value is greater than
             * #EBookClientCursor:total, this indicates that the cursor is
             * positioned after the contact list in the symbolic
             * %E_BOOK_CURSOR_ORIGIN_END position.
             *
             * Property change notifications are guaranteed to be
             * delivered in the #GMainContext which was the thread
             * default context at cursor creation time.
             */
            get position(): number;
            /**
             * The #EContactField names to sort this cursor with
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set sort_fields(val: string[]);
            /**
             * The #EContactField names to sort this cursor with
             *
             * <note><para>This is an internal parameter for constructing the
             * cursor, to construct the cursor use e_book_client_get_cursor().
             * </para></note>
             */
            set sortFields(val: string[]);
            /**
             * The total number of contacts which satisfy the cursor's query.
             *
             * Property change notifications are guaranteed to be
             * delivered in the #GMainContext which was the thread
             * default context at cursor creation time.
             */
            get total(): number;

            // Constructors

            constructor(properties?: Partial<BookClientCursor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'refresh', callback: (_source: this) => void): number;
            connect_after(signal: 'refresh', callback: (_source: this) => void): number;
            emit(signal: 'refresh'): void;

            // Virtual methods

            /**
             * The class handler for the #EBookClientCursor::refresh signal
             */
            vfunc_refresh(): void;

            // Methods

            /**
             * Fetches the array of displayable labels for the <link linkend="cursor-alphabet">active alphabet</link>.
             *
             * The active alphabet is based on the current locale configuration of the
             * addressbook, and can be a different alphabet for locales requiring non-Latin
             * language scripts. These UTF-8 labels are appropriate to display in a user
             * interface to represent the alphabetic position of the cursor in the user's
             * native alphabet.
             *
             * The `underflow,` `inflow` and `overflow` parameters allow one to observe which
             * indexes Evolution Data Server is using to store words which sort outside
             * of the alphabet, for instance words from foreign language scripts and
             * words which start with numeric characters, or other types of character.
             *
             * While the `underflow` and `overflow` are for words which sort below or
             * above the active alphabets, the `inflow` index is for words which sort
             * in between multiple concurrently active alphabets. The active alphabet
             * array might contain more than one alphabet for locales where it is
             * very common or expected to have names in Latin script as well as names
             * in another script.
             * @returns The array of displayable labels for each index in the active alphabet.
             */
            get_alphabet(): [string[], number, number, number, number];
            /**
             * Checks which alphabetic index `contact` would be sorted
             * into according to `cursor`.
             *
             * So long as the active #EBookClientCursor:alphabet does
             * not change, the returned index will be a valid position
             * in the array of labels returned by e_book_client_cursor_get_alphabet().
             *
             * If the index returned by this function is needed for
             * any extended period of time, it should be recalculated
             * whenever the #EBookClientCursor:alphabet changes.
             * @param contact the #EContact to check
             * @returns The alphabetic index of @contact in @cursor.
             */
            get_contact_alphabetic_index(contact: EBookContacts.Contact): number;
            /**
             * Fetches the number of contacts leading up to the current
             * cursor position, inclusive of the current cursor position.
             *
             * The position value can be anywhere from 0 to the total
             * number of contacts plus one. A value of 0 indicates
             * that the cursor is positioned before the contact list in
             * the symbolic %E_BOOK_CURSOR_ORIGIN_BEGIN state. If
             * the position is greater than the total, as returned by
             * e_book_client_cursor_get_total(), then the cursor is positioned
             * after the last contact in the symbolic %E_BOOK_CURSOR_ORIGIN_END position.
             * @returns The current cursor position
             */
            get_position(): number;
            /**
             * Fetches the total number of contacts in the addressbook
             * which match `cursor'`s query
             * @returns The total number of contacts matching @cursor's query
             */
            get_total(): number;
            /**
             * Returns the #EBookClientCursor:client associated with `cursor`.
             *
             * The returned #EBookClient is referenced because the cursor
             * does not keep a strong reference to the client.
             *
             * Unreference the #EBookClient with g_object_unref() when finished with it.
             * @returns an #EBookClient
             */
            ref_client(): BookClient;
            /**
             * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
             *
             * See: e_book_client_cursor_set_alphabetic_index_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_alphabetic_index_finish() from the specified `callback`.
             * @param index the alphabetic index
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             */
            set_alphabetic_index(index: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
             *
             * See: e_book_client_cursor_set_alphabetic_index_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_alphabetic_index_finish() from the specified `callback`.
             * @param index the alphabetic index
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            set_alphabetic_index(
                index: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Sets the current cursor position to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
             *
             * See: e_book_client_cursor_set_alphabetic_index_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_alphabetic_index_finish() from the specified `callback`.
             * @param index the alphabetic index
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            set_alphabetic_index(
                index: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Completes an asynchronous call initiated by e_book_client_cursor_set_alphabetic_index().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_alphabetic_index_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the cursor to point to an <link linkend="cursor-alphabet">Alphabetic Index</link>.
             *
             * After setting the alphabetic index, for example the
             * index for letter 'E', then further calls to e_book_client_cursor_step()
             * will return results starting with the letter 'E' (or results starting
             * with the last result in 'D' when navigating through cursor results
             * in reverse).
             *
             * The passed index must be a valid index into the alphabet parameters
             * returned by e_book_client_cursor_get_alphabet().
             *
             * If this method is called from the same thread context in which
             * the cursor was created, then the updates to the #EBookClientCursor:position
             * property are guaranteed to be delivered synchronously upon successful completion
             * of moving the cursor. Otherwise, notifications will be delivered asynchronously
             * in the cursor's original thread context.
             *
             * If this method completes with an %E_CLIENT_ERROR_OUT_OF_SYNC error, it is an
             * indication that the addressbook has been set into a new locale and it would be
             * unsafe to set the alphabetic index at this time. If you receive an out of sync
             * error from this method, then you should wait until an #EBookClientCursor:alphabet
             * property change notification is delivered and then proceed to load the new
             * alphabet before trying to set any alphabetic index.
             * @param index the alphabetic index
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_alphabetic_index_sync(index: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
             *
             * See: e_book_client_cursor_set_sexp_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_sexp_finish() from the specified `callback`.
             * @param sexp the new search expression for @cursor
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             */
            set_sexp(sexp: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
             *
             * See: e_book_client_cursor_set_sexp_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_sexp_finish() from the specified `callback`.
             * @param sexp the new search expression for @cursor
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            set_sexp(
                sexp: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
             *
             * See: e_book_client_cursor_set_sexp_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_set_sexp_finish() from the specified `callback`.
             * @param sexp the new search expression for @cursor
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            set_sexp(
                sexp: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Completes an asynchronous call initiated by e_book_client_cursor_set_sexp(), reporting
             * whether the new search expression was accepted.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_sexp_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets the <link linkend="cursor-search">Search Expression</link> for the cursor.
             *
             * A side effect of setting the search expression is that the
             * <link linkend="cursor-pos-total">position and total</link>
             * properties will be updated.
             *
             * If this method is called from the same thread context in which
             * the cursor was created, then the updates to the #EBookClientCursor:position
             * and #EBookClientCursor:total properties are guaranteed to be delivered
             * synchronously upon successful completion of setting the search expression.
             * Otherwise, notifications will be delivered asynchronously in the cursor's
             * original thread context.
             *
             * If the backend does not support the given search expression,
             * an %E_CLIENT_ERROR_INVALID_QUERY error will be set.
             * @param sexp the new search expression for @cursor
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @returns %TRUE on success, otherwise %FALSE is returned and @error is set.
             */
            set_sexp_sync(sexp: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
             * a maximum of `count` and fetch the results traversed.
             *
             * See: e_book_client_cursor_step_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_step_finish() from the specified `callback`.
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             */
            step(
                flags: EBookContacts.BookCursorStepFlags | null,
                origin: EBookContacts.BookCursorOrigin | null,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[number, EBookContacts.Contact[] | null]>;
            /**
             * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
             * a maximum of `count` and fetch the results traversed.
             *
             * See: e_book_client_cursor_step_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_step_finish() from the specified `callback`.
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            step(
                flags: EBookContacts.BookCursorStepFlags | null,
                origin: EBookContacts.BookCursorOrigin | null,
                count: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
             * a maximum of `count` and fetch the results traversed.
             *
             * See: e_book_client_cursor_step_sync().
             *
             * This asynchronous call is completed with a call to
             * e_book_client_cursor_step_finish() from the specified `callback`.
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @param callback callback to call when a result is ready
             */
            step(
                flags: EBookContacts.BookCursorStepFlags | null,
                origin: EBookContacts.BookCursorOrigin | null,
                count: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[number, EBookContacts.Contact[] | null]> | void;
            /**
             * Completes an asynchronous call initiated by e_book_client_cursor_step(), fetching
             * any contacts which might have been returned by the call.
             * @param result a #GAsyncResult
             * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
             */
            step_finish(result: Gio.AsyncResult): [number, EBookContacts.Contact[] | null];
            /**
             * <link linkend="cursor-iteration">Steps the cursor through the results</link> by
             * a maximum of `count` and fetch the results traversed.
             *
             * If `count` is negative, then the cursor will move backwards.
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
             * If %E_BOOK_CURSOR_STEP_MOVE is specified in `flags,` then the cursor's
             * state will be modified and the <link linkend="cursor-pos-total">position</link>
             * property will be updated as a result.
             *
             * If this method is called from the same thread context in which
             * the cursor was created, then the updates to the #EBookClientCursor:position
             * property are guaranteed to be delivered synchronously upon successful completion
             * of moving the cursor. Otherwise, notifications will be delivered asynchronously
             * in the cursor's original thread context.
             *
             * If this method completes with an %E_CLIENT_ERROR_OUT_OF_SYNC error, it is an
             * indication that the addressbook has been modified and it would be unsafe to
             * move the cursor at this time. Any %E_CLIENT_ERROR_OUT_OF_SYNC error is guaranteed
             * to be followed by an #EBookClientCursor::refresh signal at which point any content
             * should be reloaded.
             * @param flags The #EBookCursorStepFlags for this step
             * @param origin The #EBookCursorOrigin from whence to step
             * @param count a positive or negative amount of contacts to try and fetch
             * @param cancellable a #GCancellable to optionally cancel this operation while in progress
             * @returns The number of contacts traversed if successful, otherwise -1 is returned and @error is set.
             */
            step_sync(
                flags: EBookContacts.BookCursorStepFlags | null,
                origin: EBookContacts.BookCursorOrigin | null,
                count: number,
                cancellable?: Gio.Cancellable | null,
            ): [number, EBookContacts.Contact[] | null];

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

        module BookClientView {
            // Signal callback interfaces

            interface Complete {
                (object: GLib.Error): void;
            }

            interface ContentChanged {
                (): void;
            }

            interface ObjectsAdded {
                (objects: EBookContacts.Contact[]): void;
            }

            interface ObjectsModified {
                (objects: EBookContacts.Contact[]): void;
            }

            interface ObjectsRemoved {
                (uids: string[]): void;
            }

            interface Progress {
                (object: number, p0: string): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                client: BookClient;
                connection: Gio.DBusConnection;
                indices: EBookContacts.BookIndices;
                n_total: number;
                nTotal: number;
                object_path: string;
                objectPath: string;
            }
        }

        /**
         * Contains only private data the should be read and manipulated using the
         * functions below.
         */
        class BookClientView extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<BookClientView>;

            // Properties

            get client(): BookClient;
            get connection(): Gio.DBusConnection;
            /**
             * A list of #EBookIndices holding indices of the contacts in the view.
             * These are received from the first sort field set by
             * e_book_client_view_set_sort_fields_sync(). The last item of the returned
             * array is the one with chr member being %NULL.
             *
             * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             */
            get indices(): EBookContacts.BookIndices;
            /**
             * How many contacts are available in the view.
             *
             * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             */
            get n_total(): number;
            /**
             * How many contacts are available in the view.
             *
             * Note: This property can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             */
            get nTotal(): number;
            get object_path(): string;
            get objectPath(): string;

            // Constructors

            constructor(properties?: Partial<BookClientView.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;
            connect_after(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;
            emit(signal: 'complete', object: GLib.Error): void;
            connect(signal: 'content-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'content-changed', callback: (_source: this) => void): number;
            emit(signal: 'content-changed'): void;
            connect(
                signal: 'objects-added',
                callback: (_source: this, objects: EBookContacts.Contact[]) => void,
            ): number;
            connect_after(
                signal: 'objects-added',
                callback: (_source: this, objects: EBookContacts.Contact[]) => void,
            ): number;
            emit(signal: 'objects-added', objects: EBookContacts.Contact[]): void;
            connect(
                signal: 'objects-modified',
                callback: (_source: this, objects: EBookContacts.Contact[]) => void,
            ): number;
            connect_after(
                signal: 'objects-modified',
                callback: (_source: this, objects: EBookContacts.Contact[]) => void,
            ): number;
            emit(signal: 'objects-modified', objects: EBookContacts.Contact[]): void;
            connect(signal: 'objects-removed', callback: (_source: this, uids: string[]) => void): number;
            connect_after(signal: 'objects-removed', callback: (_source: this, uids: string[]) => void): number;
            emit(signal: 'objects-removed', uids: string[]): void;
            connect(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;
            connect_after(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;
            emit(signal: 'progress', object: number, p0: string): void;

            // Virtual methods

            /**
             * Notification that loading a view has completed, after calling e_book_client_view_start()
             * @param error
             */
            vfunc_complete(error: GLib.Error): void;
            /**
             * Signal emitted intermittently while loading a view after calling e_book_client_view_start()
             * @param percent
             * @param message
             */
            vfunc_progress(percent: number, message: string): void;

            // Methods

            /**
             * Asynchronously reads `range_length` contacts from index `range_start`.
             * When there are asked more than e_book_client_view_get_n_total()
             * contacts only those up to the total number of contacts are read.
             * Asking for out of range contacts results in an error.
             *
             * Finish the call by e_book_client_view_dup_contacts_finish() from the `cb`.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param range_start 0-based range start to retrieve the contacts for
             * @param range_length how many contacts to retrieve
             * @param cancellable optional #GCancellable object, or %NULL
             */
            dup_contacts(
                range_start: number,
                range_length: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[number, EBookContacts.Contact[]]>;
            /**
             * Asynchronously reads `range_length` contacts from index `range_start`.
             * When there are asked more than e_book_client_view_get_n_total()
             * contacts only those up to the total number of contacts are read.
             * Asking for out of range contacts results in an error.
             *
             * Finish the call by e_book_client_view_dup_contacts_finish() from the `cb`.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param range_start 0-based range start to retrieve the contacts for
             * @param range_length how many contacts to retrieve
             * @param cancellable optional #GCancellable object, or %NULL
             * @param cb a callback to call when the contacts are received
             */
            dup_contacts(
                range_start: number,
                range_length: number,
                cancellable: Gio.Cancellable | null,
                cb: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously reads `range_length` contacts from index `range_start`.
             * When there are asked more than e_book_client_view_get_n_total()
             * contacts only those up to the total number of contacts are read.
             * Asking for out of range contacts results in an error.
             *
             * Finish the call by e_book_client_view_dup_contacts_finish() from the `cb`.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param range_start 0-based range start to retrieve the contacts for
             * @param range_length how many contacts to retrieve
             * @param cancellable optional #GCancellable object, or %NULL
             * @param cb a callback to call when the contacts are received
             */
            dup_contacts(
                range_start: number,
                range_length: number,
                cancellable?: Gio.Cancellable | null,
                cb?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[number, EBookContacts.Contact[]]> | void;
            /**
             * Finishes previous call of e_book_client_view_dup_contacts();
             * see it for further information.
             *
             * Free the returned #GPtrArray with g_ptr_array_unref(), when
             * no longer needed.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param result an asynchronous call result
             * @returns whether succeeded; if not, the @error is set
             */
            dup_contacts_finish(result: Gio.AsyncResult): [boolean, number, EBookContacts.Contact[]];
            /**
             * Returns a list of #EBookIndices holding indices of the contacts
             * in the view. These are received from the first sort field set by
             * e_book_client_view_set_sort_fields_sync(). The last item of the returned
             * array is the one with chr member being %NULL.
             *
             * Free the returned array with e_book_indices_free(), when no longer needed.
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @returns list of indices for the view
             */
            dup_indices(): EBookContacts.BookIndices;
            /**
             * Returns the #EBookClientView:client associated with `client_view`.
             * @returns an #EBookClient
             */
            get_client(): BookClient;
            /**
             * Returns the #GDBusConnection used to create the D-Bus proxy.
             * @returns the #GDBusConnection
             */
            get_connection(): Gio.DBusConnection;
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
             * Returns the object path used to create the D-Bus proxy.
             * @returns the object path
             */
            get_object_path(): string;
            is_running(): boolean;
            /**
             * Returns the #EBookClientView:client associated with `client_view`.
             *
             * The returned #EBookClient is referenced for thread-safety.  Unreference
             * the #EBookClient with g_object_unref() when finished with it.
             * @returns an #EBookClient
             */
            ref_client(): BookClient;
            /**
             * Client can instruct server to which fields it is interested in only, thus
             * the server can return less data over the wire. The server can still return
             * complete objects, this is just a hint to it that the listed fields will
             * be used only. The UID field is returned always. Initial views has no fields
             * of interest and using %NULL for `fields_of_interest` will unset any previous
             * changes.
             *
             * Some backends can use summary information of its cache to create artifical
             * objects, which will omit stored object parsing. If this cannot be done then
             * it will simply return object as is stored in the cache.
             * @param fields_of_interest List of field names in which                      the client is interested
             */
            set_fields_of_interest(fields_of_interest: string[]): void;
            /**
             * Sets the `flags` which control the behaviour of `client_view`.
             * @param flags the #EBookClientViewFlags for @client_view
             */
            set_flags(flags: EBookContacts.BookClientViewFlags | null): void;
            /**
             * Sets `fields` to sort the view by. The default is to sort by the file-as
             * field in ascending order. Not every field can be used for sorting,
             * usually available fields are %E_CONTACT_FILE_AS,
             * %E_CONTACT_GIVEN_NAME and %E_CONTACT_FAMILY_NAME.
             *
             * The array is terminated by an item with an %E_CONTACT_FIELD_LAST field.
             *
             * The first sort field is used to populate indices, as returned
             * by e_book_client_view_dup_indices().
             *
             * Note: This function can be used only with `E_BOOK_CLIENT_VIEW_FLAGS_MANUAL_QUERY`.
             * @param fields an array of #EBookClientViewSortFields, terminated by item with %E_CONTACT_FIELD_LAST field
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            set_sort_fields_sync(
                fields: EBookContacts.BookClientViewSortFields,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Tells `client_view` to start processing events.
             */
            start(): void;
            /**
             * Tells `client_view` to stop processing events.
             */
            stop(): void;

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

        module Destination {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class Destination extends GObject.Object {
            static $gtype: GObject.GType<Destination>;

            // Fields

            object: GObject.Object;

            // Constructors

            constructor(properties?: Partial<Destination.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): Destination;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Static methods

            /**
             * Exports multiple #EDestination elements to a single XML document.
             * @param destv a %NULL-terminated array of pointers to #EDestination
             */
            static exportv(destv: Destination[]): string;
            /**
             * Unrefs the elements of `destv` and frees `destv` itself.
             * @param destv a %NULL-terminated array of pointers to #EDestination
             */
            static freev(destv: Destination[]): void;
            /**
             * Generates a joint text representation of all the #EDestination
             * elements in `destv`.
             * @param destv %NULL-terminated array of pointers to #EDestination
             */
            static get_textrepv(destv: Destination[]): string;
            /**
             * Creates an #EDestination from an XML document.
             * @param str an XML string
             */
            static ['import'](str: string): Destination | null;
            /**
             * Creates an array of pointers to #EDestination elements
             * from an XML document.
             * @param str an XML string
             */
            static importv(str: string): Destination[];

            // Virtual methods

            vfunc_changed(): void;

            // Methods

            /**
             * Creates a new #EDestination identical to `dest`.
             * @returns A newly created #EDestination, identical to @dest.
             */
            copy(): Destination;
            /**
             * Checks if `dest` is blank.
             * @returns %TRUE if @dest is empty, %FALSE otherwise.
             */
            empty(): boolean;
            /**
             * Checks if `a` and `b` are equal.
             * @param b an #EDestination
             * @returns %TRUE if the destinations are equal, %FALSE otherwise.
             */
            equal(b: Destination): boolean;
            /**
             * Exports a destination to an XML document.
             * @returns An XML string, allocated with g_malloc.
             */
            ['export'](): string;
            /**
             * Exports the contact information from `dest` to parameters
             * and values in `attr,` suitable for an address book.
             * @param attr an #EVCardAttribute
             */
            export_to_vcard_attribute(attr: EBookContacts.VCardAttribute): void;
            /**
             * Gets the encoded name and email address, or in the case of lists, the
             * encoded list of email addresses, from `dest`.  The returned string is
             * suitable for use in an email header, but not for displaying to users.
             * @returns an encoded destination string suitable for use in an          email header, or %NULL if the destination was empty
             */
            get_address(): string | null;
            /**
             * Gets the contact `dest` is pointing to, if any.
             * @returns An #EContact, or %NULL if none was set.
             */
            get_contact(): EBookContacts.Contact | null;
            /**
             * Gets the unique contact ID `dest` is pointing to, if any.
             * @returns A unique contact ID, or %NULL if none was set.
             */
            get_contact_uid(): string | null;
            /**
             * Gets the e-mail address of `dest'`s addressee.
             * @returns An e-mail address, or an empty string if none was set.
             */
            get_email(): string;
            /**
             * Gets the index of the e-mail address of the contact that
             * `dest` is pointing to, if any.
             * @returns The e-mail index, or -1 if none was set.
             */
            get_email_num(): number;
            /**
             * Check if `dest` wants to get mail formatted as HTML.
             * @returns %TRUE if destination wants HTML, %FALSE if not.
             */
            get_html_mail_pref(): boolean;
            /**
             * Gets the full name of `dest'`s addressee, or if the addressee is
             * a contact list, the name the list was filed under. The name can
             * be encoded in quoted printable.
             * @returns The full name of the addressee, or %NULL if none was set.
             */
            get_name(): string | null;
            /**
             * Gets the unique source ID `dest` is pointing to, if any. The source
             * ID specifies which address book `dest'`s contact came from.
             * @returns A unique source ID, or %NULL if none was set.
             */
            get_source_uid(): string | null;
            /**
             * Generates a textual representation of `dest,` suitable for referring
             * to the destination during user interaction. The name can be encoded
             * in quoted printable.
             * @param include_email whether to include the e-mail address
             * @returns A textual representation of the destination.
             */
            get_textrep(include_email: boolean): string;
            /**
             * Checks if `dest` is flagged as an automatic recipient, meaning
             * it was not explicitly specified by the user. This can be used
             * to hide it from some UI elements.
             * @returns %TRUE if destination is an auto recipient, %FALSE otherwise.
             */
            is_auto_recipient(): boolean;
            /**
             * Checks if `dest` is a list of addresses.
             * @returns %TRUE if destination is a list, %FALSE if it is an individual.
             */
            is_evolution_list(): boolean;
            /**
             * Check if `dest` is to be ignored.
             * @returns %TRUE if this destination should be ignored, else %FALSE.
             */
            is_ignored(): boolean;
            /**
             * If `dest` is a list, gets recursively list of all destinations.
             * Everything returned from this function belongs to `dest` and
             * thus should not be freed.
             * @returns A list of elements of type #EDestination, or %NULL.
             */
            list_get_dests(): Destination[] | null;
            /**
             * If `dest` is a list, gets the list of EDestinations assigned directly
             * to `dest`.
             * The list and its elements belong to `dest,` and should not be freed.
             * @returns A list of elements of type #EDestination, or %NULL.
             */
            list_get_root_dests(): Destination[] | null;
            /**
             * If `dest` is a list, checks if the addresses in the list
             * should be presented to the user during interaction.
             * @returns %TRUE if addresses should be shown, %FALSE otherwise.
             */
            list_show_addresses(): boolean;
            /**
             * Sets the flag indicating if `dest` is an automatic recipient, meaning
             * it was not explicitly specified by the user. This can be used
             * to hide it from some UI elements.
             * @param value the auto recipient flag
             */
            set_auto_recipient(value: boolean): void;
            /**
             * Specify the source `dest'`s contact comes from. This is useful
             * if you need to update the contact later.
             * @param client an #EBookClient
             */
            set_client(client: BookClient): void;
            /**
             * Sets `dest` to point to one of `contact'`s e-mail addresses
             * indicated by `email_num`.
             * @param contact an #EContact
             * @param email_num an email index
             */
            set_contact(contact: EBookContacts.Contact, email_num: number): void;
            /**
             * Sets `dest` to point to one of the contact specified by `uid'`s e-mail
             * addresses indicated by `email_num`.
             * @param uid a unique contact ID
             * @param email_num an email index
             */
            set_contact_uid(uid: string, email_num: number): void;
            /**
             * Sets the e-mail address of `dest'`s addressee.
             * @param email the destination's e-mail address
             */
            set_email(email: string): void;
            /**
             * Specifies whether `dest` wants to get mail formatted as HTML.
             * @param flag whether the destination wants HTML mail
             */
            set_html_mail_pref(flag: boolean): void;
            /**
             * Set the ignore flag on an #EDestination.
             * @param ignored %TRUE if this #EDestination should be ignored.
             */
            set_ignored(ignored: boolean): void;
            /**
             * Sets the full name of `dest'`s addressee.
             * @param name the destination's full name
             */
            set_name(name: string): void;
            /**
             * Sets `dest` to point to the name and e-mail address resulting from
             * parsing the supplied string. Useful for user input.
             * @param raw an unparsed string
             */
            set_raw(raw: string): void;
        }

        type BookClientClass = typeof BookClient;
        type BookClientCursorClass = typeof BookClientCursor;
        abstract class BookClientCursorPrivate {
            static $gtype: GObject.GType<BookClientCursorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class BookClientPrivate {
            static $gtype: GObject.GType<BookClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type BookClientViewClass = typeof BookClientView;
        abstract class BookClientViewPrivate {
            static $gtype: GObject.GType<BookClientViewPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DestinationClass = typeof Destination;
        abstract class DestinationPrivate {
            static $gtype: GObject.GType<DestinationPrivate>;

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

    export default EBook;
}

declare module 'gi://EBook' {
    import EBook12 from 'gi://EBook?version=1.2';
    export default EBook12;
}
// END
