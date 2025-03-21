/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
/// <reference path="./edataserver-1.2.d.ts" />
/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./json-1.0.d.ts" />
/// <reference path="./camel-1.2.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://EBackend?version=1.2' {
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

    export namespace EBackend {
        /**
         * EBackend-1.2
         */

        /**
         * Completion codes used by #EAuthenticationSession.
         */

        /**
         * Completion codes used by #EAuthenticationSession.
         */
        export namespace AuthenticationSessionResult {
            export const $gtype: GObject.GType<AuthenticationSessionResult>;
        }

        enum AuthenticationSessionResult {
            /**
             * An error occurred while authenticating.
             */
            ERROR,
            /**
             * Client reported successful authentication.
             */
            SUCCESS,
            /**
             * User dismissed the authentication prompt.
             */
            DISMISSED,
        }
        /**
         * Declares whether to exclude or include locally deleted objects.
         */

        /**
         * Declares whether to exclude or include locally deleted objects.
         */
        export namespace CacheDeletedFlag {
            export const $gtype: GObject.GType<CacheDeletedFlag>;
        }

        enum CacheDeletedFlag {
            /**
             * Do not include locally deleted objects
             */
            EXCLUDE_DELETED,
            /**
             * Include locally deleted objects
             */
            INCLUDE_DELETED,
        }
        /**
         * Defines the types of possible errors reported by the #ECache
         */

        /**
         * Defines the types of possible errors reported by the #ECache
         */
        export namespace CacheError {
            export const $gtype: GObject.GType<CacheError>;
        }

        enum CacheError {
            /**
             * An error was reported from the SQLite engine
             */
            ENGINE,
            /**
             * The error occurred due to an explicit constraint, like
             *    when attempting to add two objects with the same UID.
             */
            CONSTRAINT,
            /**
             * An object was not found by UID (this is
             *    different from a query that returns no results, which is not an error).
             */
            NOT_FOUND,
            /**
             * A query was invalid.
             */
            INVALID_QUERY,
            /**
             * A field requested for inclusion in summary is not supported.
             */
            UNSUPPORTED_FIELD,
            /**
             * A query was not supported.
             */
            UNSUPPORTED_QUERY,
            /**
             * An attempt was made to fetch results past the end of a the list.
             */
            END_OF_LIST,
            /**
             * An error occured while loading or creating the database.
             */
            LOAD,
            /**
             * The database file is corrupt. (Since: 3.44)
             */
            CORRUPT,
        }
        /**
         * Indicates the type of lock requested in e_cache_lock().
         */

        /**
         * Indicates the type of lock requested in e_cache_lock().
         */
        export namespace CacheLockType {
            export const $gtype: GObject.GType<CacheLockType>;
        }

        enum CacheLockType {
            /**
             * Obtain a lock for reading.
             */
            READ,
            /**
             * Obtain a lock for writing. This also starts a transaction.
             */
            WRITE,
        }
        /**
         * Declares whether the operation is done in online or offline.
         * This influences the offline state of the related objects.
         */

        /**
         * Declares whether the operation is done in online or offline.
         * This influences the offline state of the related objects.
         */
        export namespace CacheOfflineFlag {
            export const $gtype: GObject.GType<CacheOfflineFlag>;
        }

        enum CacheOfflineFlag {
            /**
             * Do not know current online/offline state
             */
            OFFLINE_UNKNOWN,
            /**
             * The operation is done in online
             */
            IS_ONLINE,
            /**
             * The operation is done in offline
             */
            IS_OFFLINE,
        }
        /**
         * Indicates what type of action to take while unlocking the cache with e_cache_unlock().
         */

        /**
         * Indicates what type of action to take while unlocking the cache with e_cache_unlock().
         */
        export namespace CacheUnlockAction {
            export const $gtype: GObject.GType<CacheUnlockAction>;
        }

        enum CacheUnlockAction {
            /**
             * Just unlock, this is appropriate for locks which were obtained with %E_CACHE_LOCK_READ.
             */
            NONE,
            /**
             * Commit any modifications which were made while the lock was held.
             */
            COMMIT,
            /**
             * Rollback any modifications which were made while the lock was held.
             */
            ROLLBACK,
        }
        /**
         * Exit codes submitted to e_dbus_server_quit() and returned by
         * e_dbus_server_run().
         */

        /**
         * Exit codes submitted to e_dbus_server_quit() and returned by
         * e_dbus_server_run().
         */
        export namespace DBusServerExitCode {
            export const $gtype: GObject.GType<DBusServerExitCode>;
        }

        enum DBusServerExitCode {
            /**
             * The server's run state is unchanged.
             */
            NONE,
            /**
             * Normal termination.  The process itself may now terminate.
             */
            NORMAL,
            /**
             * The server should reload its configuration and start again.
             *   Servers that do not support reloading may wish to intercept
             *   this exit code and stop the #EDBusServer::quit-server emission.
             */
            RELOAD,
        }
        /**
         * Defines offline state of an object. Locally changed objects require
         * synchronization with their remote storage.
         */

        /**
         * Defines offline state of an object. Locally changed objects require
         * synchronization with their remote storage.
         */
        export namespace OfflineState {
            export const $gtype: GObject.GType<OfflineState>;
        }

        enum OfflineState {
            /**
             * Unknown offline state.
             */
            UNKNOWN,
            /**
             * The object if synchnized with no local changes.
             */
            SYNCED,
            /**
             * The object is locally created.
             */
            LOCALLY_CREATED,
            /**
             * The object is locally modified.
             */
            LOCALLY_MODIFIED,
            /**
             * The object is locally deleted.
             */
            LOCALLY_DELETED,
        }
        const CACHE_COLUMN_OBJECT: string;
        const CACHE_COLUMN_REVISION: string;
        const CACHE_COLUMN_STATE: string;
        const CACHE_COLUMN_UID: string;
        const CACHE_TABLE_KEYS: string;
        const CACHE_TABLE_OBJECTS: string;
        /**
         * This environment variable configures where the registry
         * server loads it's backend modules from.
         */
        const EDS_REGISTRY_MODULES: string;
        /**
         * D-Bus object path of the data source server.
         */
        const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string;
        /**
         * D-Bus object path of the user prompter.
         */
        const USER_PROMPTER_SERVER_OBJECT_PATH: string;
        /**
         * Frees the `info` structure, previously allocated with e_cache_column_info_new()
         * or e_cache_column_info_copy().
         * @param info an #ECacheColumnInfo
         */
        function cache_column_info_free(info?: any | null): void;
        /**
         * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
         * or e_cache_offline_change_copy().
         * @param change an #ECacheOfflineChange
         */
        function cache_offline_change_free(change?: any | null): void;
        function sqlite3_vfs_init(): void;
        interface CacheForeachFunc {
            (
                cache: Cache,
                uid: string,
                revision: string,
                object: string,
                offline_state: OfflineState,
                column_names: string[],
                column_values: string[],
            ): boolean;
        }
        interface CacheKeysForeachFunc {
            (self: CacheKeys, key: string, value: string, ref_count: number): boolean;
        }
        interface CacheSelectFunc {
            (cache: Cache, column_names: string[], column_values: string[]): boolean;
        }
        interface CacheUpdateFunc {
            (
                cache: Cache,
                uid: string,
                revision: string,
                object: string,
                offline_state: OfflineState,
                column_names: string[],
                column_values: string[],
            ): boolean;
        }
        /**
         * Flags to check whether at least one of the asked for parts is enabled.
         */

        /**
         * Flags to check whether at least one of the asked for parts is enabled.
         */
        export namespace CollectionBackendParts {
            export const $gtype: GObject.GType<CollectionBackendParts>;
        }

        enum CollectionBackendParts {
            /**
             * None part.
             */
            NONE,
            /**
             * Check the calendar part.
             */
            CALENDAR,
            /**
             * Check the contacts part.
             */
            CONTACTS,
            /**
             * Check the mail part.
             */
            MAIL,
            /**
             * Shortcut to have all parts checked.
             */
            ANY,
        }
        /**
         * Initial permissions for a newly-loaded data source key file.
         */

        /**
         * Initial permissions for a newly-loaded data source key file.
         */
        export namespace SourcePermissionFlags {
            export const $gtype: GObject.GType<SourcePermissionFlags>;
        }

        enum SourcePermissionFlags {
            /**
             * The data source gets no initial permissions.
             */
            NONE,
            /**
             * The data source is initially writable.
             */
            WRITABLE,
            /**
             * The data source is initially removable.
             */
            REMOVABLE,
        }
        module Backend {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                connectable: Gio.SocketConnectable;
                main_context: GLib.MainContext;
                mainContext: GLib.MainContext;
                online: boolean;
                source: EDataServer.Source;
                user_prompter: UserPrompter;
                userPrompter: UserPrompter;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class Backend extends GObject.Object {
            static $gtype: GObject.GType<Backend>;

            // Properties

            get connectable(): Gio.SocketConnectable;
            set connectable(val: Gio.SocketConnectable);
            get main_context(): GLib.MainContext;
            get mainContext(): GLib.MainContext;
            get online(): boolean;
            set online(val: boolean);
            get source(): EDataServer.Source;
            get user_prompter(): UserPrompter;
            get userPrompter(): UserPrompter;

            // Constructors

            constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Authenticate synchronously
             * @param credentials
             * @param out_certificate_pem
             * @param out_certificate_errors
             * @param cancellable
             */
            vfunc_authenticate_sync(
                credentials: EDataServer.NamedParameters,
                out_certificate_pem: string,
                out_certificate_errors: Gio.TlsCertificateFlags,
                cancellable?: Gio.Cancellable | null,
            ): EDataServer.SourceAuthenticationResult;
            /**
             * Provides destination server host name and port to which
             * the backend connects. This is used to determine required
             * connection point for e_backend_is_destination_reachable().
             * The `host` is a newly allocated string, which will be freed
             * with g_free(). When `backend` sets both `host` and `port,` then
             * it should return %TRUE, indicating it's a remote backend.
             * Default implementation returns %FALSE, which is treated
             * like the backend is local, no checking for server reachability
             * is possible.
             */
            vfunc_get_destination_address(): [boolean, string, number];
            /**
             * Let's the `backend` know that it'll be shut down shortly, no client connects
             * to it anymore. The `backend` can free any resources which reference it, for
             * example the opened views.
             */
            vfunc_prepare_shutdown(): void;

            // Methods

            /**
             * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            credentials_required(
                reason: EDataServer.SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            credentials_required(
                reason: EDataServer.SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error: GLib.Error | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            credentials_required(
                reason: EDataServer.SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_backend_credentials_required().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            credentials_required_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronously lets the clients know that the backned requires credentials to be
             * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
             * where can be found more information about actual parameters meaning.
             *
             * The provided credentials are received through #EBackendClass.authenticate_sync()
             * method asynchronously.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            credentials_required_sync(
                reason: EDataServer.SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Makes sure that the "online" property is updated, that is, if there
             * is any destination reachability test pending, it'll be done immediately
             * and the only state will be updated as well.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void;
            /**
             * Makes sure that the associated ESource::connection-status is connected. This is
             * useful in cases when the backend can connect to the destination without invoking
             * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
             */
            ensure_source_status_connected(): void;
            /**
             * Provides destination server host name and port to which
             * the backend connects. This is used to determine required
             * connection point for e_backend_is_destination_reachable().
             * The `host` is a newly allocated string, which will be freed
             * with g_free(). When `backend` sets both `host` and `port,` then
             * it should return %TRUE, indicating it's a remote backend.
             * Default implementation returns %FALSE, which is treated
             * like the backend is local, no checking for server reachability
             * is possible.
             * @returns %TRUE, when it's a remote backend and provides both   @host and @port; %FALSE otherwise.
             */
            get_destination_address(): [boolean, string, number];
            /**
             * Returns a #GNetworkMonitor used to check whether the backend can
             * access the remote server. The instance is owned by the `backend`.
             * @returns a #GNetworkMonitor used by the @backend
             */
            get_network_monitor(): Gio.NetworkMonitor;
            /**
             * Returns the online state of `backend:` %TRUE if `backend` is online,
             * %FALSE if offline.
             *
             * If the #EBackend:connectable property is non-%NULL, the `backend` will
             * automatically determine whether the network service should be reachable,
             * and hence whether the `backend` is #EBackend:online.  But subclasses may
             * override the online state if, for example, a connection attempt fails.
             * @returns the online state
             */
            get_online(): boolean;
            /**
             * Returns the #ESource to which `backend` is paired.
             * @returns the #ESource to which @backend is paired
             */
            get_source(): EDataServer.Source;
            /**
             * Gets an instance of #EUserPrompter, associated with this `backend`.
             *
             * The returned instance is owned by the `backend`.
             * @returns an #EUserPrompter instance
             */
            get_user_prompter(): any | null;
            /**
             * Checks whether the `backend<`!-- -->'s destination server, as returned
             * by e_backend_get_destination_address(), is reachable.
             * If the e_backend_get_destination_address() returns %FALSE, this function
             * returns %TRUE, meaning the destination is always reachable.
             * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
             * for reachability tests.
             * @param cancellable a #GCancellable instance, or %NULL
             * @returns %TRUE, when destination server address is reachable or    the backend doesn't provide destination address; %FALSE if    the backend destination server cannot be reached currently.
             */
            is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Let's the `backend` know that it'll be shut down shortly, no client connects
             * to it anymore. The `backend` can free any resources which reference it, for
             * example the opened views.
             */
            prepare_shutdown(): void;
            /**
             * Returns the socket endpoint for the network service to which `backend`
             * is a client, or %NULL if `backend` does not use network sockets.
             *
             * The initial value of the #EBackend:connectable property is derived from
             * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
             * property, if the extension is present.
             *
             * The returned #GSocketConnectable is referenced for thread-safety and
             * must be unreferenced with g_object_unref() when finished with it.
             * @returns a #GSocketConnectable, or %NULL
             */
            ref_connectable(): Gio.SocketConnectable | null;
            /**
             * Returns the #GMainContext on which event sources for `backend` are to
             * be attached.
             *
             * The returned #GMainContext is referenced for thread-safety and must be
             * unreferenced with g_main_context_unref() when finished with it.
             * @returns a #GMainContext
             */
            ref_main_context(): GLib.MainContext;
            /**
             * Schedules a new authenticate session, cancelling any previously run.
             * This is usually done automatically, when an 'authenticate' signal is
             * received for the associated #ESource. With %NULL `credentials` an attempt
             * without it is run.
             * @param credentials a credentials to use to authenticate, or %NULL
             */
            schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void;
            /**
             * Asynchronously invokes e_backend_credentials_required(), but installs its
             * own callback which only prints a runtime warning on the console when
             * the call fails. The `who_calls` is a prefix of the console message.
             * This is useful when the caller just wants to start the operation
             * without having actual place where to show the operation result.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param who_calls an identification who calls this
             */
            schedule_credentials_required(
                reason: EDataServer.SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
                who_calls?: string | null,
            ): void;
            /**
             * Sets the socket endpoint for the network service to which `backend` is
             * a client.  This can be %NULL if `backend` does not use network sockets.
             *
             * The initial value of the #EBackend:connectable property is derived from
             * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
             * property, if the extension is present.
             * @param connectable a #GSocketConnectable, or %NULL
             */
            set_connectable(connectable: Gio.SocketConnectable): void;
            /**
             * Sets the online state of `backend:` %TRUE if `backend` is online,
             * `FALSE` if offline.
             *
             * If the #EBackend:connectable property is non-%NULL, the `backend` will
             * automatically determine whether the network service should be reachable,
             * and hence whether the `backend` is #EBackend:online.  But subclasses may
             * override the online state if, for example, a connection attempt fails.
             * @param online the online state
             */
            set_online(online: boolean): void;
            /**
             * Initiates a user trust prompt with given `parameters`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_trust_prompt_finish() to get the result of the operation.
             * @param parameters an #ENamedParameters with values for the trust prompt
             * @param cancellable optional #GCancellable object, or %NULL
             */
            trust_prompt(
                parameters: EDataServer.NamedParameters,
                cancellable?: Gio.Cancellable | null,
            ): Promise<EDataServer.TrustPromptResponse>;
            /**
             * Initiates a user trust prompt with given `parameters`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_trust_prompt_finish() to get the result of the operation.
             * @param parameters an #ENamedParameters with values for the trust prompt
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            trust_prompt(
                parameters: EDataServer.NamedParameters,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Initiates a user trust prompt with given `parameters`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_backend_trust_prompt_finish() to get the result of the operation.
             * @param parameters an #ENamedParameters with values for the trust prompt
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            trust_prompt(
                parameters: EDataServer.NamedParameters,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<EDataServer.TrustPromptResponse> | void;
            /**
             * Finishes the operation started with e_backend_trust_prompt().
             * If an error occurred, the function will set `error` and return
             * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
             * @param result a #GAsyncResult
             * @returns an #ETrustPromptResponse what user responded Note: The function can return also %E_TRUST_PROMPT_RESPONSE_UNKNOWN,    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
             */
            trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse;
            /**
             * Asks a user a trust prompt with given `parameters,` and returns what
             * user responded. This blocks until the response is delivered.
             * @param parameters an #ENamedParameters with values for the trust prompt
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #ETrustPromptResponse what user responded Note: The function can return also %E_TRUST_PROMPT_RESPONSE_UNKNOWN,    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
             */
            trust_prompt_sync(
                parameters: EDataServer.NamedParameters,
                cancellable?: Gio.Cancellable | null,
            ): EDataServer.TrustPromptResponse;
        }

        module BackendFactory {
            // Constructor properties interface

            interface ConstructorProps extends EDataServer.Extension.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class BackendFactory extends EDataServer.Extension {
            static $gtype: GObject.GType<BackendFactory>;

            // Constructors

            constructor(properties?: Partial<BackendFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Returns a hash key which uniquely identifies `factory`.
             *
             * Since only one instance of each #EBackendFactory subclass is ever created,
             * the hash key need only be unique among subclasses, not among instances of
             * each subclass.
             */
            vfunc_get_hash_key(): string;
            /**
             * Returns a new #EBackend instance for `source`.
             * @param source an #ESource
             */
            vfunc_new_backend(source: EDataServer.Source): Backend;

            // Methods

            /**
             * Returns a hash key which uniquely identifies `factory`.
             *
             * Since only one instance of each #EBackendFactory subclass is ever created,
             * the hash key need only be unique among subclasses, not among instances of
             * each subclass.
             * @returns a hash key which uniquely identifies @factory
             */
            get_hash_key(): string;
            /**
             * Returns the filename of the shared library for the module used
             * to load the backends provided by `factory`.
             * @returns the filename for the module associated to the @factory
             */
            get_module_filename(): string;
            /**
             * Returns a new #EBackend instance for `source`.
             * @param source an #ESource
             * @returns a new #EBackend instance for @source
             */
            new_backend(source: EDataServer.Source): Backend;
            /**
             * Returns TRUE if the `factory` wants to share the subprocess
             * for all backends provided by itself. Otherwise, returns FALSE.
             * @returns TRUE if the @factory shares the subprocess for all its          backends. Otherwise, FALSE.
             */
            share_subprocess(): boolean;
        }

        module Cache {
            // Signal callback interfaces

            interface BeforePut {
                (
                    object: string,
                    p0: string,
                    p1: string,
                    p2: CacheColumnValues,
                    p3: boolean,
                    p4?: Gio.Cancellable | null,
                    p5?: any | null,
                ): boolean;
            }

            interface BeforeRemove {
                (object: string, p0?: Gio.Cancellable | null, p1?: any | null): boolean;
            }

            interface RevisionChanged {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class Cache extends GObject.Object {
            static $gtype: GObject.GType<Cache>;

            // Constructors

            constructor(properties?: Partial<Cache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'before-put',
                callback: (
                    _source: this,
                    object: string,
                    p0: string,
                    p1: string,
                    p2: CacheColumnValues,
                    p3: boolean,
                    p4: Gio.Cancellable | null,
                    p5: any | null,
                ) => boolean,
            ): number;
            connect_after(
                signal: 'before-put',
                callback: (
                    _source: this,
                    object: string,
                    p0: string,
                    p1: string,
                    p2: CacheColumnValues,
                    p3: boolean,
                    p4: Gio.Cancellable | null,
                    p5: any | null,
                ) => boolean,
            ): number;
            emit(
                signal: 'before-put',
                object: string,
                p0: string,
                p1: string,
                p2: CacheColumnValues,
                p3: boolean,
                p4?: Gio.Cancellable | null,
                p5?: any | null,
            ): void;
            connect(
                signal: 'before-remove',
                callback: (_source: this, object: string, p0: Gio.Cancellable | null, p1: any | null) => boolean,
            ): number;
            connect_after(
                signal: 'before-remove',
                callback: (_source: this, object: string, p0: Gio.Cancellable | null, p1: any | null) => boolean,
            ): number;
            emit(signal: 'before-remove', object: string, p0?: Gio.Cancellable | null, p1?: any | null): void;
            connect(signal: 'revision-changed', callback: (_source: this) => void): number;
            connect_after(signal: 'revision-changed', callback: (_source: this) => void): number;
            emit(signal: 'revision-changed'): void;

            // Static methods

            static error_quark(): GLib.Quark;
            /**
             * Frees a statement previously constructed with e_cache_sqlite_stmt_printf().
             * @param stmt a statement to free
             */
            static sqlite_stmt_free(stmt: string): void;

            // Virtual methods

            vfunc_before_put(
                uid: string,
                revision: string,
                object: string,
                other_columns: CacheColumnValues,
                is_replace: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean;
            vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Erases the cache and all of its content from the disk.
             * The only valid operation after this is to free the `cache`.
             */
            vfunc_erase(): void;
            vfunc_put_locked(
                uid: string,
                revision: string,
                object: string,
                other_columns: CacheColumnValues,
                offline_state: OfflineState,
                is_replace: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean;
            vfunc_revision_changed(): void;

            // Methods

            /**
             * Instructs the `cache` to change its revision. In case the revision
             * change is frozen with e_cache_freeze_revision_change() it notes to
             * change the revision once the revision change is fully thaw.
             */
            change_revision(): void;
            /**
             * Marks all objects as being fully synchronized with the server and
             * removes those which are marked as locally deleted.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Checkes whether the `cache` contains an object with
             * the given `uid`.
             * @param uid a unique identifier of an object
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @returns Whether the object had been found.
             */
            contains(uid: string, deleted_flag: CacheDeletedFlag | null): boolean;
            /**
             * Adds every column value which is not part of the `other_columns` to it,
             * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
             * and E_CACHE_COLUMN_STATE columns.
             *
             * This can be used within the callback of e_cache_foreach_update().
             * @param column_names column names
             * @param column_values column values
             * @param other_columns an #ECacheColumnValues to fill
             */
            copy_missing_to_column_values(
                column_names: string[],
                column_values: string[],
                other_columns: CacheColumnValues,
            ): CacheColumnValues;
            dup_key(key: string): string;
            dup_revision(): string;
            /**
             * Erases the cache and all of its content from the disk.
             * The only valid operation after this is to free the `cache`.
             */
            erase(): void;
            /**
             * Calls `func` for each found object, which satisfies the criteria
             * for both `deleted_flag` and `where_clause`.
             *
             * Note the `func` should not call any SQLite commands, because it's invoked
             * within a SELECT statement execution.
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @param where_clause an optional SQLite WHERE clause part, or %NULL
             * @param func an #ECacheForeachFunc function to call for each object
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            foreach(
                deleted_flag: CacheDeletedFlag | null,
                where_clause: string | null,
                func: CacheForeachFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Calls `func` for each found object, which satisfies the criteria for both
             * `deleted_flag` and `where_clause,` letting the caller update values where
             * necessary. The return value of `func` is used to determine whether the call
             * was successful, not whether there are any changes to be saved. If anything
             * fails during the call then the all changes are reverted.
             *
             * When there are requested any changes by the `func,` this function also
             * calls e_cache_copy_missing_to_column_values() to ensure no descendant
             * column data is lost.
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @param where_clause an optional SQLite WHERE clause part, or %NULL
             * @param func an #ECacheUpdateFunc function to call for each object
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            foreach_update(
                deleted_flag: CacheDeletedFlag | null,
                where_clause: string | null,
                func: CacheUpdateFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Freezes automatic revision change for the `cache`. The function
             * can be called multiple times, but each such call requires its
             * pair function e_cache_thaw_revision_change() call. See also
             * e_cache_change_revision().
             */
            freeze_revision_change(): void;
            /**
             * Returns an object with the given `uid`. This function does not consider locally
             * deleted objects. The `out_revision` is set to the object revision, if not %NULL.
             * Free it with g_free() when no longer needed. Similarly the `out_other_columns`
             * contains a column name to column value strings for additional columns which had
             * been requested when calling e_cache_initialize_sync(), if not %NULL.
             * Free the returned #ECacheColumnValues with e_cache_column_values_free(), when
             * no longer needed.
             * @param uid a unique identifier of an object
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns An object with the given @uid. Free it    with g_free(), when no longer needed. Returns %NULL on error, like when    the object could not be found.
             */
            get(uid: string, cancellable?: Gio.Cancellable | null): [string | null, string, CacheColumnValues | null];
            get_count(deleted_flag: CacheDeletedFlag | null, cancellable?: Gio.Cancellable | null): number;
            get_filename(): string;
            /**
             * Reads the user `key` value as an integer.
             * @param key a key name
             * @returns The user @key value or -1 on error.
             */
            get_key_int(key: string): number;
            /**
             * The same as e_cache_get(), only considers also locally deleted objects.
             * @param uid a unique identifier of an object
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns An object with the given @uid. Free it    with g_free(), when no longer needed. Returns %NULL on error, like when    the object could not be found.
             */
            get_object_include_deleted(
                uid: string,
                cancellable?: Gio.Cancellable | null,
            ): [string | null, string, CacheColumnValues | null];
            /**
             * Gets a list of objects stored in the `cache,` optionally together with
             * their revisions. The uids are not returned in any particular order,
             * but the position between `out_objects` and `out_revisions` matches
             * the same object.
             *
             * Both `out_objects` and `out_revisions` contain newly allocated #GSList, which
             * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the @cache.
             */
            get_objects(
                deleted_flag: CacheDeletedFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[], string[] | null];
            /**
             * Gathers the list of all offline changes being done so far.
             * The returned #GSList contains #ECacheOfflineChange structure.
             * Use e_cache_clear_offline_changes() to clear all offline
             * changes at once.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cache_offline_change_free);    when no longer needed.
             */
            get_offline_changes(cancellable?: Gio.Cancellable | null): CacheOfflineChange[];
            get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): OfflineState;
            get_sqlitedb(): any | null;
            /**
             * Gets a list of unique object identifiers stored in the `cache,` optionally
             * together with their revisions. The uids are not returned in any particular
             * order, but the position between `out_uids` and `out_revisions` matches
             * the same object.
             *
             * Both `out_uids` and `out_revisions` contain newly allocated #GSList, which
             * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
             * @param deleted_flag one of #ECacheDeletedFlag enum
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the @cache.
             */
            get_uids(
                deleted_flag: CacheDeletedFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[], string[] | null];
            get_version(): number;
            /**
             * Initializes the `cache` and opens the `filename` database.
             * This should be called by the descendant.
             *
             * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS)`.
             * Values for these columns are returned by e_cache_get()
             * and can be stored with e_cache_put().
             * @param filename a filename of an SQLite database to use
             * @param other_columns an optional    #GSList with additional columns to add to the objects table
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            initialize_sync(
                filename: string,
                other_columns?: CacheColumnInfo[] | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            is_revision_change_frozen(): boolean;
            /**
             * Locks the `cache` thus other threads cannot use it.
             * This can be called recursively within one thread.
             * Each call should have its pair e_cache_unlock().
             * @param lock_type an #ECacheLockType
             */
            lock(lock_type: CacheLockType | null): void;
            /**
             * Stores an object into the cache. Depending on `offline_flag,` this update
             * the object's offline state accordingly. When the `offline_flag` is set
             * to %E_CACHE_IS_ONLINE, then it's set to #E_OFFLINE_STATE_SYNCED, like
             * to be fully synchronized with the server, regardless of its previous
             * offline state. Overwriting locally deleted object behaves like an addition
             * of a completely new object.
             * @param uid a unique identifier of an object
             * @param revision a revision of the object
             * @param object the object itself
             * @param other_columns an #ECacheColumnValues with other columns to set; can be %NULL
             * @param offline_flag one of #ECacheOfflineFlag, whether putting this object in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put(
                uid: string,
                revision: string | null,
                object: string,
                other_columns: CacheColumnValues | null,
                offline_flag: CacheOfflineFlag | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag,`
             * it can remove also any information about locally made offline changes. Removing
             * the object with %E_CACHE_IS_OFFLINE will still remember it for later use
             * with e_cache_get_offline_changes().
             * @param uid a unique identifier of an object
             * @param offline_flag one of #ECacheOfflineFlag, whether removing the object in offline
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove(uid: string, offline_flag: CacheOfflineFlag | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes all objects from the `cache` in one call.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_all(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets a `value` of the user `key,` or deletes it, if the `value` is %NULL.
             * @param key a key name
             * @param value a value to set, or %NULL to delete the key
             * @returns Whether succeeded.
             */
            set_key(key: string, value?: string | null): boolean;
            /**
             * Sets an integer `value` for the user `key`.
             * @param key a key name
             * @param value an integer value to set
             * @returns Whether succeeded.
             */
            set_key_int(key: string, value: number): boolean;
            /**
             * Sets an offline `state` for the object identified by `uid`.
             * @param uid a unique identifier of an object
             * @param state an #EOfflineState to set
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            set_offline_state(uid: string, state: OfflineState | null, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets the `revision` of the whole `cache`. This is not meant to be
             * used by the descendants, because the revision is updated automatically
             * when needed. The descendants can listen to "revision-changed" signal.
             * @param revision a revision to set; use %NULL to unset it
             */
            set_revision(revision?: string | null): void;
            /**
             * Sets a cache data version. This is meant to be used by the descendants.
             * The `version` should be greater than zero.
             * @param version a cache data version to set
             */
            set_version(version: number): void;
            /**
             * Executes an SQLite statement. Use e_cache_sqlite_select() for
             * SELECT statements.
             * @param sql_stmt an SQLite statement to execute
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Runs vacuum (compacts the database file), if needed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded. It doesn't mean that the vacuum had been run,    only that no error happened during the call.
             */
            sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
             * Use e_cache_sqlite_exec() for statements which do not return row sets.
             * @param sql_stmt an SQLite SELECT statement to execute
             * @param func an #ECacheSelectFunc function to call for each row
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            sqlite_select(sql_stmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Thaws automatic revision change for the `cache`. It's the pair
             * function of e_cache_freeze_revision_change().
             */
            thaw_revision_change(): void;
            /**
             * Unlocks the cache which was previouly locked with e_cache_lock().
             * The cache locked with #E_CACHE_LOCK_WRITE should use either
             * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
             * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
             * @param action an #ECacheUnlockAction
             */
            unlock(action: CacheUnlockAction | null): void;
        }

        module CacheKeys {
            // Signal callback interfaces

            interface Changed {
                (): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                cache: Cache;
                key_column_name: string;
                keyColumnName: string;
                table_name: string;
                tableName: string;
                value_column_name: string;
                valueColumnName: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CacheKeys extends GObject.Object {
            static $gtype: GObject.GType<CacheKeys>;

            // Properties

            /**
             * The #ECache being used for this keys table.
             */
            get cache(): Cache;
            /**
             * The column name for the keys.
             */
            get key_column_name(): string;
            /**
             * The column name for the keys.
             */
            get keyColumnName(): string;
            /**
             * The table name of this keys table.
             */
            get table_name(): string;
            /**
             * The table name of this keys table.
             */
            get tableName(): string;
            /**
             * The column name for the values.
             */
            get value_column_name(): string;
            /**
             * The column name for the values.
             */
            get valueColumnName(): string;

            // Constructors

            constructor(properties?: Partial<CacheKeys.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](
                cache: Cache,
                table_name: string,
                key_column_name: string,
                value_column_name: string,
            ): CacheKeys;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;

            // Virtual methods

            vfunc_changed(): void;

            // Methods

            /**
             * Counts how many keys the `self` stores and set it to the `out_n_stored`.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            count_keys_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Calls `func` for each stored key in the `self,` providing
             * information about its value and reference count.
             * @param func an #ECacheKeysForeachFunc, which is called for each stored key
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            foreach_sync(func: CacheKeysForeachFunc, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets an #ECache, with which the `self` had been created.
             * @returns an #ECache
             */
            get_cache(): Cache;
            /**
             * Gets a key column name, with which the `self` had been created.
             * @returns a key column name
             */
            get_key_column_name(): string;
            /**
             * Gets currently stored reference count for the `key`.
             * Note the reference count can be 0, which means the `key`
             * is stored forever.
             * @param key a key to get reference count for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_ref_count_sync(key: string, cancellable?: Gio.Cancellable | null): [boolean, number];
            /**
             * Gets a stored value with given `key,` which had been previously put
             * into the `self` with e_cache_keys_put_sync().
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @param key a key to get
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_sync(key: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Gets a table name, with which the `self` had been created.
             * @returns a table name
             */
            get_table_name(): string;
            /**
             * Get a value column name, with which the `self` had been created.
             * @returns a value column name
             */
            get_value_column_name(): string;
            /**
             * Initializes table in the corresponding #ECache.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            init_table_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Puts the `key` and `value` into the `self`. The function adds a new or
             * replaces an existing `key,` if any such already exists in the `self`.
             * @param key a key identifier to put
             * @param value a value to put with the @key
             * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_sync(key: string, value: string, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes all stored keys from the `self`.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_all_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Dereferences use count of the `key` by `dec_ref_counts` and removes it
             * from the cache when the reference count reaches zero. Special case is
             * with `dec_ref_counts` is zero, in which case the key is removed regardless
             * of the current reference count.
             *
             * It's not an error when the key doesn't exist in the cache.
             * @param key a key to remove/dereference
             * @param dec_ref_counts reference counts to drop, 0 to remove it regardless of the current reference count
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            remove_sync(key: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
        }

        module CacheReaper {
            // Constructor properties interface

            interface ConstructorProps
                extends EDataServer.Extension.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {}
        }

        class CacheReaper extends EDataServer.Extension implements EDataServer.Extensible {
            static $gtype: GObject.GType<CacheReaper>;

            // Constructors

            constructor(properties?: Partial<CacheReaper.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            static type_register(type_module: GObject.TypeModule): void;

            // Methods

            /**
             * Let's the `cache_reaper` know about a private directory named `name,`
             * thus it won't delete it from cache or data directories. The `name`
             * is just a directory name, not a path.
             *
             * Since 3.18
             * @param name directory name
             */
            add_private_directory(name: string): void;
            /**
             * Remove private directory named `name` from the list of private
             * directories in the `cache_reaper,` previously added with
             * e_cache_reaper_add_private_directory().
             *
             * Since 3.18
             * @param name directory name
             */
            remove_private_directory(name: string): void;

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

        module CollectionBackend {
            // Signal callback interfaces

            interface ChildAdded {
                (child_source: ServerSideSource): void;
            }

            interface ChildRemoved {
                (child_source: ServerSideSource): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends Backend.ConstructorProps {
                proxy_resolver: Gio.ProxyResolver;
                proxyResolver: Gio.ProxyResolver;
                server: SourceRegistryServer;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CollectionBackend extends Backend {
            static $gtype: GObject.GType<CollectionBackend>;

            // Properties

            get proxy_resolver(): Gio.ProxyResolver;
            get proxyResolver(): Gio.ProxyResolver;
            get server(): SourceRegistryServer;

            // Constructors

            constructor(properties?: Partial<CollectionBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'child-added', callback: (_source: this, child_source: ServerSideSource) => void): number;
            connect_after(
                signal: 'child-added',
                callback: (_source: this, child_source: ServerSideSource) => void,
            ): number;
            emit(signal: 'child-added', child_source: ServerSideSource): void;
            connect(signal: 'child-removed', callback: (_source: this, child_source: ServerSideSource) => void): number;
            connect_after(
                signal: 'child-removed',
                callback: (_source: this, child_source: ServerSideSource) => void,
            ): number;
            emit(signal: 'child-removed', child_source: ServerSideSource): void;

            // Virtual methods

            vfunc_child_added(child_source: EDataServer.Source): void;
            vfunc_child_removed(child_source: EDataServer.Source): void;
            /**
             * Asynchronously creates a server-side resource described by `source`.
             * For example, if `source` describes a new calendar, an equivalent calendar
             * is created on the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_create_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_create_resource(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_collection_backend_create_resource().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_create_resource_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a server-side resource described by `source`.  For example, if
             * `source` describes a new calendar, an equivalent calendar is created on
             * the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously deletes a server-side resource described by `source`.
             * The `source` must be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_delete_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_delete_resource(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_collection_backend_delete_resource().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_delete_resource_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes a server-side resource described by `source`.  The `source` must
             * be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Extracts the resource ID for `child_source,` which is supposed to be a
             * stable and unique server-assigned identifier for the remote resource
             * described by `child_source`.  If `child_source` is not actually a child
             * of the collection #EBackend:source owned by `backend,` the function
             * returns %NULL.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @param child_source an #ESource managed by @backend
             */
            vfunc_dup_resource_id(child_source: EDataServer.Source): string | null;
            vfunc_populate(): void;

            // Methods

            /**
             * Authenticates all enabled children sources with the given `crendetials`.
             * This is usually called when the collection source successfully used
             * the `credentials` to connect to the (possibly) remote data store, to
             * open the childern too. Already connected child sources are skipped.
             * @param credentials credentials to authenticate with
             */
            authenticate_children(credentials: EDataServer.NamedParameters): void;
            /**
             * Claims all previously used sources that have not yet been claimed by
             * e_collection_backend_new_child() and returns them in a #GList.  Note
             * that previously used sources can only be claimed once, so subsequent
             * calls to this function for `backend` will return %NULL.
             *
             * The `backend` is then expected to compare the returned list with a
             * current list of resources from a remote server, create new #ESource
             * instances as needed with e_collection_backend_new_child(), discard
             * unneeded #ESource instances with e_source_remove(), and export the
             * remaining instances with e_source_registry_server_add_source().
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GList itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @returns a list    of previously used sources
             */
            claim_all_resources(): EDataServer.Source[] | null;
            /**
             * Asynchronously creates a server-side resource described by `source`.
             * For example, if `source` describes a new calendar, an equivalent calendar
             * is created on the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_create_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously creates a server-side resource described by `source`.
             * For example, if `source` describes a new calendar, an equivalent calendar
             * is created on the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_create_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_resource(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a server-side resource described by `source`.
             * For example, if `source` describes a new calendar, an equivalent calendar
             * is created on the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_create_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_resource(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_collection_backend_create_resource().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            create_resource_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a server-side resource described by `source`.  For example, if
             * `source` describes a new calendar, an equivalent calendar is created on
             * the server.
             *
             * It is the implementor's responsibility to examine `source` and determine
             * what the equivalent server-side resource would be.  If this cannot be
             * determined without ambiguity, the function must return an error.
             *
             * After the server-side resource is successfully created, the implementor
             * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
             * can either be done immediately or in response to some "resource created"
             * notification from the server.  The added #ESource can be `source` itself
             * or a different #ESource instance that describes the new resource.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously deletes a server-side resource described by `source`.
             * The `source` must be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_delete_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously deletes a server-side resource described by `source`.
             * The `source` must be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_delete_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            delete_resource(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously deletes a server-side resource described by `source`.
             * The `source` must be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_collection_backend_delete_resource_finish() to get the result of
             * the operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            delete_resource(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_collection_backend_delete_resource().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            delete_resource_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes a server-side resource described by `source`.  The `source` must
             * be a child of `backend'`s collection #EBackend:source.
             *
             * After the server-side resource is successfully deleted, the implementor
             * must also remove `source` from the `backend'`s #ECollectionBackend:server.
             * This can either be done immediately or in response to some "resource
             * deleted" notification from the server.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Extracts the resource ID for `child_source,` which is supposed to be a
             * stable and unique server-assigned identifier for the remote resource
             * described by `child_source`.  If `child_source` is not actually a child
             * of the collection #EBackend:source owned by `backend,` the function
             * returns %NULL.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @param child_source an #ESource managed by @backend
             * @returns a newly-allocated resource ID for @child_source,    or %NULL
             */
            dup_resource_id(child_source: EDataServer.Source): string | null;
            /**
             * Freezes populate of the backend's content. This is used to avoid calling
             * populate multiple times in parallel.
             * Every call to this function should be followed by the call
             * of e_collection_backend_thaw_populate() to reverse the effect of this function,
             * regardless of the return value of this function.
             * @returns %TRUE, when this is the first freeze call
             */
            freeze_populate(): boolean;
            /**
             * Returns the private cache directory path for `backend,` which is named
             * after the #ESource:uid of `backend'`s collection #EBackend:source.
             *
             * The cache directory is meant to store key files for backend-created
             * data sources.  See also: e_server_side_source_set_write_directory()
             * @returns the cache directory for @backend
             */
            get_cache_dir(): string;
            /**
             * Checks whether the `backend` has enabled at least of the `parts`.
             * @param parts a bit-or of #ECollectionBackendParts with parts to be checked
             * @returns %TRUE, when at least one of the @parts is enabled and    the backend's #ESource is enabled as well.
             */
            get_part_enabled(parts: CollectionBackendParts | null): boolean;
            get_populate_frozen(): boolean;
            /**
             * Returns whether the `source` is a newly created child or not. New sources
             * are remembered between two populate calls only.
             * @param source a child #ESource
             * @returns %TRUE, when the @source is a new child; %FALSE when    it had been known before.
             */
            is_new_source(source: EDataServer.Source): boolean;
            /**
             * Returns a list of calendar sources belonging to the data source
             * collection managed by `backend`.
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GList itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @returns a list of calendar sources
             */
            list_calendar_sources(): EDataServer.Source[];
            /**
             * Returns a list of address book sources belonging to the data source
             * collection managed by `backend`.
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GList itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @returns a list of address book sources
             */
            list_contacts_sources(): EDataServer.Source[];
            /**
             * Returns a list of mail sources belonging to the data source collection
             * managed by `backend`.
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GList itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @returns a list of mail sources
             */
            list_mail_sources(): EDataServer.Source[];
            /**
             * Creates a new #EServerSideSource as a child of the collection
             * #EBackend:source owned by `backend`.  If possible, the #EServerSideSource
             * is drawn from a cache of previously used sources indexed by `resource_id`
             * so that locally cached data from previous sessions can be reused.
             *
             * The returned data source should be passed to
             * e_source_registry_server_add_source() to export it over D-Bus.
             * @param resource_id a stable and unique resource ID
             * @returns a newly-created data source
             */
            new_child(resource_id: string): EDataServer.Source;
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
             * Returns the #ESourceRegistryServer to which `backend` belongs.
             *
             * The returned #ESourceRegistryServer is referenced for thread-safety.
             * Unreference the #ESourceRegistryServer with g_object_unref() when
             * finished with it.
             * @returns the #ESourceRegistryServer for @backend
             */
            ref_server(): SourceRegistryServer;
            /**
             * Schedules a call to populate() of the `backend` on idle.
             * The function does nothing in case the `backend` is offline.
             */
            schedule_populate(): void;
            /**
             * Thaws populate of the backend's content. This is a pair function
             * for e_collection_backend_freeze_populate().
             */
            thaw_populate(): void;
        }

        module CollectionBackendFactory {
            // Constructor properties interface

            interface ConstructorProps extends BackendFactory.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class CollectionBackendFactory extends BackendFactory {
            static $gtype: GObject.GType<CollectionBackendFactory>;

            // Constructors

            constructor(properties?: Partial<CollectionBackendFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Convenience function to populate a set of #ESource instances with mail
             * account information to be added to an #ECollectionBackend.  This is mainly
             * used for vendor-specific collection backends like Google or Yahoo! where
             * the host, port, and security details are known ahead of time and only
             * user-specific information needs to be filled in.
             * @param mail_account_source an #ESource to hold mail account information
             * @param mail_identity_source an #ESource to hold mail identity information
             * @param mail_transport_source an #ESource to hold mail transport information
             */
            vfunc_prepare_mail(
                mail_account_source: EDataServer.Source,
                mail_identity_source: EDataServer.Source,
                mail_transport_source: EDataServer.Source,
            ): void;

            // Methods

            /**
             * Convenience function to populate a set of #ESource instances with mail
             * account information to be added to an #ECollectionBackend.  This is mainly
             * used for vendor-specific collection backends like Google or Yahoo! where
             * the host, port, and security details are known ahead of time and only
             * user-specific information needs to be filled in.
             * @param mail_account_source an #ESource to hold mail account information
             * @param mail_identity_source an #ESource to hold mail identity information
             * @param mail_transport_source an #ESource to hold mail transport information
             */
            prepare_mail(
                mail_account_source: EDataServer.Source,
                mail_identity_source: EDataServer.Source,
                mail_transport_source: EDataServer.Source,
            ): void;
        }

        module DBusServer {
            // Signal callback interfaces

            interface BusAcquired {
                (connection: Gio.DBusConnection): void;
            }

            interface BusNameAcquired {
                (connection: Gio.DBusConnection): void;
            }

            interface BusNameLost {
                (connection: Gio.DBusConnection): void;
            }

            interface QuitServer {
                (code: DBusServerExitCode): void;
            }

            interface RunServer {
                (): DBusServerExitCode;
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
        abstract class DBusServer extends GObject.Object implements EDataServer.Extensible {
            static $gtype: GObject.GType<DBusServer>;

            // Constructors

            constructor(properties?: Partial<DBusServer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'bus-acquired', callback: (_source: this, connection: Gio.DBusConnection) => void): number;
            connect_after(
                signal: 'bus-acquired',
                callback: (_source: this, connection: Gio.DBusConnection) => void,
            ): number;
            emit(signal: 'bus-acquired', connection: Gio.DBusConnection): void;
            connect(
                signal: 'bus-name-acquired',
                callback: (_source: this, connection: Gio.DBusConnection) => void,
            ): number;
            connect_after(
                signal: 'bus-name-acquired',
                callback: (_source: this, connection: Gio.DBusConnection) => void,
            ): number;
            emit(signal: 'bus-name-acquired', connection: Gio.DBusConnection): void;
            connect(signal: 'bus-name-lost', callback: (_source: this, connection: Gio.DBusConnection) => void): number;
            connect_after(
                signal: 'bus-name-lost',
                callback: (_source: this, connection: Gio.DBusConnection) => void,
            ): number;
            emit(signal: 'bus-name-lost', connection: Gio.DBusConnection): void;
            connect(signal: 'quit-server', callback: (_source: this, code: DBusServerExitCode) => void): number;
            connect_after(signal: 'quit-server', callback: (_source: this, code: DBusServerExitCode) => void): number;
            emit(signal: 'quit-server', code: DBusServerExitCode): void;
            connect(signal: 'run-server', callback: (_source: this) => DBusServerExitCode): number;
            connect_after(signal: 'run-server', callback: (_source: this) => DBusServerExitCode): number;
            emit(signal: 'run-server'): void;

            // Virtual methods

            vfunc_bus_acquired(connection: Gio.DBusConnection): void;
            vfunc_bus_name_acquired(connection: Gio.DBusConnection): void;
            vfunc_bus_name_lost(connection: Gio.DBusConnection): void;
            vfunc_quit_server(code: DBusServerExitCode): void;
            vfunc_run_server(): DBusServerExitCode;

            // Methods

            /**
             * Increases the use count of `server`.
             *
             * Use this function to indicate that the server has a reason to continue
             * to run.  To cancel the hold, call e_dbus_server_release().
             */
            hold(): void;
            /**
             * This function should be called once during `server` initialization to
             * load all available library modules to extend the `server'`s functionality.
             */
            load_modules(): void;
            /**
             * Emits the #EDBusServer::quit signal with the given `code`.
             *
             * By default the `server` will quit its main loop and cause
             * e_dbus_server_run() to return `code`.
             * @param code an #EDBusServerExitCode
             */
            quit(code: DBusServerExitCode | null): void;
            /**
             * Decreates the use count of `server`.
             *
             * When the use count reaches zero, the server will stop running.
             *
             * Never call this function except to cancel the effect of a previous call
             * to e_dbus_server_hold().
             */
            release(): void;
            /**
             * Emits the #EDBusServer::run signal.
             *
             * By default the `server` will start its main loop and attempt to acquire
             * its well-known session bus name.  If the `server'`s main loop is already
             * running, the function will immediately return #E_DBUS_SERVER_EXIT_NONE.
             * Otherwise the function blocks until e_dbus_server_quit() is called.
             *
             * If `wait_for_client` is %TRUE, the `server` will continue running until
             * the first client connection is made instead of quitting on its own if
             * no client connection is made within the first few seconds.
             * @param wait_for_client continue running until a client connects
             * @returns the exit code passed to e_dbus_server_quit()
             */
            run(wait_for_client: boolean): DBusServerExitCode;

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

        module DataFactory {
            // Constructor properties interface

            interface ConstructorProps
                extends DBusServer.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                backend_per_process: number;
                backendPerProcess: number;
                registry: EDataServer.SourceRegistry;
                reload_supported: boolean;
                reloadSupported: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class DataFactory extends DBusServer implements EDataServer.Extensible, Gio.Initable {
            static $gtype: GObject.GType<DataFactory>;

            // Properties

            get backend_per_process(): number;
            get backendPerProcess(): number;
            get registry(): EDataServer.SourceRegistry;
            get reload_supported(): boolean;
            get reloadSupported(): boolean;

            // Constructors

            constructor(properties?: Partial<DataFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            vfunc_complete_open(
                invocation: Gio.DBusMethodInvocation,
                object_path: string,
                bus_name: string,
                extension_name: string,
            ): void;
            /**
             * Used only when backend-per-process is off.
             *
             * Free the returned pointer with g_object_unref(), if not NULL and no longer
             * needed.
             * @param backend_factory
             * @param source
             */
            vfunc_create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend | null;
            vfunc_open_backend(
                backend: Backend,
                connection: Gio.DBusConnection,
                cancellable?: Gio.Cancellable | null,
            ): string;

            // Methods

            backend_closed(backend: Backend): void;
            backend_closed_by_sender(backend: Backend, sender: string): void;
            /**
             * Returns a new and unique object path for a D-Bus interface based
             * in the data object path prefix of the `data_factory`
             * @returns a newly allocated string, representing the object path for          the D-Bus interface.
             */
            construct_path(): string;
            /**
             * Used only when backend-per-process is off.
             *
             * Free the returned pointer with g_object_unref(), if not NULL and no longer
             * needed.
             * @param backend_factory
             * @param source
             * @returns a newly-created #EBackend
             */
            create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend | null;
            get_backend_per_process(): number;
            /**
             * Returns the #ESourceRegistry owned by `data_factory`.
             * @returns the #ESourceRegistry
             */
            get_registry(): EDataServer.SourceRegistry;
            get_reload_supported(): boolean;
            /**
             * Lists the currently opened backends.
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GSList itself with g_slist_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_slist_free_full (list, g_object_unref);
             * ```
             *
             * @returns a #GSList of #EBackend
             */
            list_opened_backends(): Backend[];
            open_backend(
                backend: Backend,
                connection: Gio.DBusConnection,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
             * %NULL if no such factory is registered.
             *
             * The returned #EBackendFactory is referenced for thread-safety.
             * Unreference the #EBackendFactory with g_object_unref() when finished
             * with it.
             * @param backend_name a backend name
             * @param extension_name an extension name
             * @returns the #EBackendFactory for @hash_key,    or %NULL
             */
            ref_backend_factory(backend_name: string, extension_name: string): BackendFactory | null;
            /**
             * Spawns a new subprocess for a backend type and returns the object path
             * of the new subprocess to the client, in the way the client can talk
             * directly to the running backend. If the backend already has a subprocess
             * running, the used object path is returned to the client.
             * @param invocation a #GDBusMethodInvocation
             * @param uid an #ESource UID
             * @param extension_name an extension name
             * @param subprocess_path a path of an executable responsible for running the subprocess
             */
            spawn_subprocess_backend(
                invocation: Gio.DBusMethodInvocation,
                uid: string,
                extension_name: string,
                subprocess_path: string,
            ): void;
            use_backend_per_process(): boolean;

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

        module FileCache {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                filename: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class FileCache extends GObject.Object {
            static $gtype: GObject.GType<FileCache>;

            // Properties

            /**
             * The filename of the cache.
             */
            get filename(): string;

            // Constructors

            constructor(properties?: Partial<FileCache.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string): FileCache;

            // Methods

            /**
             * Adds a new `key` / `value` entry to `cache`.  If an object corresponding
             * to `key` already exists in `cache,` the function returns %FALSE.
             * @param key the hash key of the object to add
             * @param value the object to add
             * @returns %TRUE if successful, %FALSE if @key already exists
             */
            add_object(key: string, value: string): boolean;
            /**
             * Clean up the cache's contents.
             * @returns %TRUE always
             */
            clean(): boolean;
            /**
             * Disables temporarily all writes to disk for `cache`.
             */
            freeze_changes(): void;
            /**
             * Gets the name of the file where the cache is being stored.
             * @returns The name of the cache.
             */
            get_filename(): string;
            /**
             * Returns a list of keys in `cache`.  The keys are owned by `cache` and must
             * not be modified or freed.  Free the returned list with g_slist_free().
             * @returns a list of keys
             */
            get_keys(): string[];
            /**
             * Returns the object corresponding to `key`.  If no such object exists
             * in `cache,` the function returns %NULL.
             * @param key the hash key of the object to find
             * @returns the object corresponding to @key
             */
            get_object(key: string): string | null;
            /**
             * Returns a list of objects in `cache`.  The objects are owned by `cache` and
             * must not be modified or freed.  Free the returned list with g_slist_free().
             * @returns a list of objects
             */
            get_objects(): string[];
            /**
             * Remove the cache from disk.
             * @returns %TRUE if successful, %FALSE if a file error occurred
             */
            remove(): boolean;
            /**
             * Removes the object corresponding to `key` from `cache`.
             * If no such object exists in `cache,` the function returns %FALSE.
             * @param key the hash key of the object to remove
             * @returns %TRUE if successful, %FALSE if @key was not found
             */
            remove_object(key: string): boolean;
            /**
             * Replaces the object corresponding to `key` with `new_value`.
             * If no such object exists in `cache,` the function returns %FALSE.
             * @param key the hash key of the object to replace
             * @param new_value the new object for @key
             * @returns %TRUE if successful, %FALSE if @key was not found
             */
            replace_object(key: string, new_value: string): boolean;
            /**
             * Reverts the affects of e_file_cache_freeze_changes().
             * Each change to `cache` is once again written to disk.
             */
            thaw_changes(): void;
        }

        module ServerSideSource {
            // Constructor properties interface

            interface ConstructorProps
                extends EDataServer.Source.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Gio.ProxyResolver.ConstructorProps {
                exported: boolean;
                file: Gio.File;
                oauth2_support: OAuth2Support;
                oauth2Support: OAuth2Support;
                remote_creatable: boolean;
                remoteCreatable: boolean;
                remote_deletable: boolean;
                remoteDeletable: boolean;
                removable: boolean;
                server: SourceRegistryServer;
                writable: boolean;
                write_directory: string;
                writeDirectory: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class ServerSideSource extends EDataServer.Source implements Gio.Initable, Gio.ProxyResolver {
            static $gtype: GObject.GType<ServerSideSource>;

            // Properties

            get exported(): boolean;
            get file(): Gio.File;
            get oauth2_support(): OAuth2Support;
            set oauth2_support(val: OAuth2Support);
            get oauth2Support(): OAuth2Support;
            set oauth2Support(val: OAuth2Support);
            get remote_creatable(): boolean;
            set remote_creatable(val: boolean);
            get remoteCreatable(): boolean;
            set remoteCreatable(val: boolean);
            get remote_deletable(): boolean;
            set remote_deletable(val: boolean);
            get remoteDeletable(): boolean;
            set remoteDeletable(val: boolean);
            get removable(): boolean;
            set removable(val: boolean);
            get server(): SourceRegistryServer;
            get writable(): boolean;
            set writable(val: boolean);
            get write_directory(): string;
            set write_directory(val: string);
            get writeDirectory(): string;
            set writeDirectory(val: string);

            // Constructors

            constructor(properties?: Partial<ServerSideSource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](server: SourceRegistryServer, file?: Gio.File | null): ServerSideSource;
            // Conflicted with EDataServer.Source.new

            static ['new'](...args: never[]): any;

            static new_memory_only(server: SourceRegistryServer, uid?: string | null): ServerSideSource;

            // Static methods

            /**
             * Returns the directory where user-specific data source files are stored.
             */
            static get_user_dir(): string;
            /**
             * Generates a unique file name for a new user-specific data source.
             * If `uid` is non-%NULL it will be used in the basename of the file,
             * otherwise a unique basename will be generated using e_util_generate_uid().
             *
             * The returned #GFile can then be passed to e_server_side_source_new().
             * Unreference the #GFile with g_object_unref() when finished with it.
             *
             * Note the data source file itself is not created here, only its name.
             * @param uid unique identifier for a data source, or %NULL
             */
            static new_user_file(uid?: string | null): Gio.File;
            /**
             * Extracts a unique identity string from the base name of `file`.
             * If the base name of `file` is missing a '.source' extension, the
             * function sets `error` and returns %NULL.
             * @param file a #GFile for a data source
             */
            static uid_from_file(file: Gio.File): string | null;

            // Methods

            /**
             * Returns whether `source` has been exported over D-Bus.
             *
             * The function returns %FALSE after `source` is initially created, %TRUE
             * after passing `source` uid to e_source_registry_server_ref_source() (provided
             * that `source'`s #ESource:parent is also exported).
             * @returns whether @source has been exported
             */
            get_exported(): boolean;
            /**
             * Returns the #GFile from which data source content is loaded and to
             * which changes are saved.  Note the `source` may not have a #GFile.
             * @returns the #GFile for @source, or %NULL
             */
            get_file(): Gio.File | null;
            /**
             * Returns the #GNode representing the `source'`s hierarchical placement,
             * or %NULL if `source` has not been placed in the data source hierarchy.
             * The data member of the #GNode points back to `source`.  This is an easy
             * way to traverse ancestor and descendant data sources.
             *
             * Note that accessing other data sources this way is not thread-safe,
             * and this therefore function may be replaced at some later date.
             * @returns a #GNode, or %NULL
             */
            get_node(): GLib.Node | null;
            /**
             * Returns the #ESourceRegistryServer to which `source` belongs.
             * @returns the #ESourceRegistryServer for @source
             */
            get_server(): SourceRegistryServer;
            /**
             * Returns the local directory path where changes to `source` are written.
             *
             * By default, changes are written to the local directory path returned by
             * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
             * to override this to use its own private cache directory for data sources
             * it creates automatically.
             * @returns the directory where changes are written
             */
            get_write_directory(): string;
            /**
             * Reloads data source content from the file pointed to by the
             * #EServerSideSource:file property.
             *
             * If the #EServerSideSource:file property is %NULL or the file it points
             * to does not exist, the function does nothing and returns %TRUE.
             *
             * If a read error occurs or the file contains syntax errors, the function
             * sets `error` and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            load(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns the object implementing the #EOAuth2SupportInterface,
             * or %NULL if `source` does not support OAuth 2.0 authentication.
             *
             * The returned #EOAuth2Support object is referenced for thread-safety.
             * Unreference the object with g_object_unref() when finished with it.
             * @returns an #EOAuth2Support object, or %NULL
             */
            ref_oauth2_support(): OAuth2Support | null;
            /**
             * Indicates whether `source` supports OAuth 2.0 authentication.
             *
             * If `oauth2`_support is non-%NULL, the OAuth2Support D-Bus interface is
             * exported at the object path for `source`.  If `oauth2`_support is %NULL,
             * the OAuth2Support D-Bus interface is unexported at the object path for
             * `source,` and any attempt by clients to call
             * e_source_get_oauth2_access_token() will fail.
             *
             * Requests for OAuth 2.0 access tokens are forwarded to `oauth2`_support,
             * which implements the #EOAuth2SupportInterface.
             * @param oauth2_support an #EOAuth2Support object, or %NULL
             */
            set_oauth2_support(oauth2_support?: OAuth2Support | null): void;
            /**
             * Indicates whether `source` can be used to create resources on a remote
             * server.  Typically this is only set to %TRUE for collection sources.
             *
             * If %TRUE, the RemoteCreatable D-Bus interface is exported at the object
             * path for `source`.  If %FALSE, the RemoteCreatable D-Bus interface is
             * unexported at the object path for `source,` and any attempt by clients
             * to call e_source_remote_create() will fail.
             *
             * Unlike the #ESource:removable and #ESource:writable properties, this
             * is enforced for both clients of the registry D-Bus service and within
             * the registry D-Bus service itself.
             * @param remote_creatable whether to export the RemoteCreatable interface
             */
            set_remote_creatable(remote_creatable: boolean): void;
            /**
             * Indicates whether `source` can be used to delete resources on a remote
             * server.  Typically this is only set to %TRUE for sources created by an
             * #ECollectionBackend to represent a remote resource.
             *
             * If %TRUE, the RemoteDeletable D-Bus interface is exported at the object
             * path for `source`.  If %FALSE, the RemoteDeletable D-Bus interface is
             * unexported at the object path for `source,` and any attempt by clients
             * to call e_source_remote_delete() will fail.
             *
             * Unlike the #ESource:removable and #ESource:writable properties, this
             * is enforced for both clients of the registry D-Bus server and within
             * the registry D-Bus service itself.
             * @param remote_deletable whether to export the RemoteDeletable interface
             */
            set_remote_deletable(remote_deletable: boolean): void;
            /**
             * Sets whether to allow registry clients to remove `source` and its
             * descendants.  If %TRUE, the Removable D-Bus interface is exported at
             * the object path for `source`.  If %FALSE, the Removable D-Bus interface
             * is unexported at the object path for `source,` and any attempt by clients
             * to call e_source_remove() will fail.
             *
             * Note this is only enforced for clients of the registry D-Bus service.
             * The service itself may remove any data source at any time.
             * @param removable whether to export the Removable interface
             */
            set_removable(removable: boolean): void;
            /**
             * Sets whether to allow registry clients to alter the content of `source`.
             * If %TRUE, the Writable D-Bus interface is exported at the object path
             * for `source`.  If %FALSE, the Writable D-Bus interface is unexported at
             * the object path for `source,` and any attempt by clients to call
             * e_source_write() will fail.
             *
             * Note this is only enforced for clients of the registry D-Bus service.
             * The service itself can write to any data source at any time.
             * @param writable whether to export the Writable interface
             */
            set_writable(writable: boolean): void;
            /**
             * Sets the local directory path where changes to `source` are to be written.
             *
             * By default, changes are written to the local directory path returned by
             * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
             * to override this to use its own private cache directory for data sources
             * it creates automatically.
             * @param write_directory the directory where changes are to be written
             */
            set_write_directory(write_directory: string): void;

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
             * Checks if `resolver` can be used on this system. (This is used
             * internally; g_proxy_resolver_get_default() will only return a proxy
             * resolver that returns %TRUE for this method.)
             * @returns %TRUE if @resolver is supported.
             */
            is_supported(): boolean;
            /**
             * Looks into the system proxy configuration to determine what proxy,
             * if any, to use to connect to `uri`. The returned proxy URIs are of
             * the form `<protocol>://[user[:password]`]`host[:port]` or
             * `direct://`, where `<protocol>` could be http, rtsp, socks
             * or other proxying protocol.
             *
             * If you don't know what network protocol is being used on the
             * socket, you should use `none` as the URI protocol.
             * In this case, the resolver might still return a generic proxy type
             * (such as SOCKS), but would not return protocol-specific proxy types
             * (such as http).
             *
             * `direct://` is used when no proxy is needed.
             * Direct connection should not be attempted unless it is part of the
             * returned array of proxies.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             * @returns A               NULL-terminated array of proxy URIs. Must be freed               with g_strfreev().
             */
            lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];
            /**
             * Asynchronous lookup of proxy. See g_proxy_resolver_lookup() for more
             * details.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             */
            lookup_async(uri: string, cancellable?: Gio.Cancellable | null): Promise<string[]>;
            /**
             * Asynchronous lookup of proxy. See g_proxy_resolver_lookup() for more
             * details.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to call after resolution completes
             */
            lookup_async(
                uri: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronous lookup of proxy. See g_proxy_resolver_lookup() for more
             * details.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to call after resolution completes
             */
            lookup_async(
                uri: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[]> | void;
            /**
             * Call this function to obtain the array of proxy URIs when
             * g_proxy_resolver_lookup_async() is complete. See
             * g_proxy_resolver_lookup() for more details.
             * @param result the result passed to your #GAsyncReadyCallback
             * @returns A               NULL-terminated array of proxy URIs. Must be freed               with g_strfreev().
             */
            lookup_finish(result: Gio.AsyncResult): string[];
            /**
             * Checks if `resolver` can be used on this system. (This is used
             * internally; g_proxy_resolver_get_default() will only return a proxy
             * resolver that returns %TRUE for this method.)
             */
            vfunc_is_supported(): boolean;
            /**
             * Looks into the system proxy configuration to determine what proxy,
             * if any, to use to connect to `uri`. The returned proxy URIs are of
             * the form `<protocol>://[user[:password]`]`host[:port]` or
             * `direct://`, where `<protocol>` could be http, rtsp, socks
             * or other proxying protocol.
             *
             * If you don't know what network protocol is being used on the
             * socket, you should use `none` as the URI protocol.
             * In this case, the resolver might still return a generic proxy type
             * (such as SOCKS), but would not return protocol-specific proxy types
             * (such as http).
             *
             * `direct://` is used when no proxy is needed.
             * Direct connection should not be attempted unless it is part of the
             * returned array of proxies.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];
            /**
             * Asynchronous lookup of proxy. See g_proxy_resolver_lookup() for more
             * details.
             * @param uri a URI representing the destination to connect to
             * @param cancellable a #GCancellable, or %NULL
             * @param callback callback to call after resolution completes
             */
            vfunc_lookup_async(
                uri: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Call this function to obtain the array of proxy URIs when
             * g_proxy_resolver_lookup_async() is complete. See
             * g_proxy_resolver_lookup() for more details.
             * @param result the result passed to your #GAsyncReadyCallback
             */
            vfunc_lookup_finish(result: Gio.AsyncResult): string[];
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

        module ServerSideSourceCredentialsProvider {
            // Constructor properties interface

            interface ConstructorProps
                extends EDataServer.SourceCredentialsProvider.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class ServerSideSourceCredentialsProvider
            extends EDataServer.SourceCredentialsProvider
            implements EDataServer.Extensible
        {
            static $gtype: GObject.GType<ServerSideSourceCredentialsProvider>;

            // Constructors

            constructor(properties?: Partial<ServerSideSourceCredentialsProvider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](registry: SourceRegistryServer): ServerSideSourceCredentialsProvider;
            // Conflicted with EDataServer.SourceCredentialsProvider.new

            static ['new'](...args: never[]): any;

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

        module SourceRegistryServer {
            // Signal callback interfaces

            interface FilesLoaded {
                (): void;
            }

            interface LoadError {
                (file: Gio.File, error: GLib.Error): void;
            }

            interface SourceAdded {
                (source: ServerSideSource): void;
            }

            interface SourceRemoved {
                (source: ServerSideSource): void;
            }

            interface TweakKeyFile {
                (key_file: GLib.KeyFile, uid: string): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends DataFactory.ConstructorProps,
                    OAuth2Support.ConstructorProps,
                    EDataServer.Extensible.ConstructorProps,
                    Gio.Initable.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceRegistryServer extends DataFactory implements OAuth2Support, EDataServer.Extensible, Gio.Initable {
            static $gtype: GObject.GType<SourceRegistryServer>;

            // Constructors

            constructor(properties?: Partial<SourceRegistryServer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): SourceRegistryServer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'files-loaded', callback: (_source: this) => void): number;
            connect_after(signal: 'files-loaded', callback: (_source: this) => void): number;
            emit(signal: 'files-loaded'): void;
            connect(signal: 'load-error', callback: (_source: this, file: Gio.File, error: GLib.Error) => void): number;
            connect_after(
                signal: 'load-error',
                callback: (_source: this, file: Gio.File, error: GLib.Error) => void,
            ): number;
            emit(signal: 'load-error', file: Gio.File, error: GLib.Error): void;
            connect(signal: 'source-added', callback: (_source: this, source: ServerSideSource) => void): number;
            connect_after(signal: 'source-added', callback: (_source: this, source: ServerSideSource) => void): number;
            emit(signal: 'source-added', source: ServerSideSource): void;
            connect(signal: 'source-removed', callback: (_source: this, source: ServerSideSource) => void): number;
            connect_after(
                signal: 'source-removed',
                callback: (_source: this, source: ServerSideSource) => void,
            ): number;
            emit(signal: 'source-removed', source: ServerSideSource): void;
            connect(
                signal: 'tweak-key-file',
                callback: (_source: this, key_file: GLib.KeyFile, uid: string) => boolean,
            ): number;
            connect_after(
                signal: 'tweak-key-file',
                callback: (_source: this, key_file: GLib.KeyFile, uid: string) => boolean,
            ): number;
            emit(signal: 'tweak-key-file', key_file: GLib.KeyFile, uid: string): void;

            // Virtual methods

            vfunc_files_loaded(): void;
            /**
             * Emits the #ESourceRegistryServer::load-error signal.
             * @param file the #GFile that failed to load
             * @param error a #GError describing the load error
             */
            vfunc_load_error(file: Gio.File, error: GLib.Error): void;
            vfunc_source_added(source: EDataServer.Source): void;
            vfunc_source_removed(source: EDataServer.Source): void;
            vfunc_tweak_key_file(key_file: GLib.KeyFile, uid: string): boolean;

            // Methods

            /**
             * Adds `source` to `server`.
             * @param source an #ESource
             */
            add_source(source: EDataServer.Source): void;
            /**
             * Examines `source` and its ancestors and returns the "deepest" #ESource
             * having an #ESourceExtension with the given `extension_name`.  If neither
             * `source` nor any of its ancestors have such an extension, the function
             * returns %NULL.
             *
             * This function is useful in cases when an #ESourceExtension is meant to
             * apply to both the #ESource it belongs to and the #ESource's descendants.
             *
             * A common example is the #ESourceCollection extension, where descendants
             * of an #ESource having an #ESourceCollection extension are implied to be
             * members of that collection.  In that example, this function can be used
             * to test whether `source` is a member of a collection.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             *
             * Note the function returns the #ESource containing the #ESourceExtension
             * instead of the #ESourceExtension itself because extension instances are
             * not to be referenced directly (see e_source_get_extension()).
             * @param source an #ESource
             * @param extension_name the extension name to find
             * @returns an #ESource, or %NULL if no match was found
             */
            find_extension(source: EDataServer.Source, extension_name: string): EDataServer.Source | null;
            get_oauth2_services(): EDataServer.OAuth2Services;
            /**
             * Returns a list of registered sources, sorted by display name.  If
             * `extension_name` is given, restrict the list to sources having that
             * extension name.
             *
             * The sources returned in the list are referenced for thread-safety.
             * They must each be unreferenced with g_object_unref() when finished
             * with them.  Free the returned #GList itself with g_list_free().
             *
             * An easy way to free the list properly in one step is as follows:
             *
             *
             * ```
             *   g_list_free_full (list, g_object_unref);
             * ```
             *
             * @param extension_name an extension name, or %NULL
             * @returns a sorted list of sources
             */
            list_sources(extension_name?: string | null): EDataServer.Source[];
            /**
             * Loads data source key files in `path`.  Because multiple errors can
             * occur when loading multiple files, `error` is only set if `path` can
             * not be opened.  If a key file fails to load, the error is broadcast
             * through the #ESourceRegistryServer::load-error signal.
             *
             * If the #E_SOURCE_PERMISSION_REMOVABLE flag is given, then the `server`
             * will emit signals on the D-Bus interface when key files are created or
             * deleted in `path`.
             * @param path the path to the directory to load
             * @param flags permission flags for files loaded from @path
             * @returns %TRUE if @path was successfully opened, but this          does not imply the key files were successfully loaded
             */
            load_directory(path: string, flags: SourcePermissionFlags | null): boolean;
            /**
             * Emits the #ESourceRegistryServer::load-error signal.
             * @param file the #GFile that failed to load
             * @param error a #GError describing the load error
             */
            load_error(file: Gio.File, error: GLib.Error): void;
            /**
             * Creates an #ESource for a native key file and adds it to `server`.
             * If an error occurs, the function returns %NULL and sets `error`.
             *
             * The returned #ESource is referenced for thread-safety.  Unreference
             * the #ESource with g_object_unref() when finished with it.
             * @param file the data source key file to load
             * @param flags initial permission flags for the data source
             * @returns the newly-added #ESource, or %NULL on error
             */
            load_file(file: Gio.File, flags: SourcePermissionFlags | null): EDataServer.Source | null;
            /**
             * Loads data source key files from `resource` by enumerating the children
             * at `path` and calling e_source_registry_server_load_file() on each child.
             * Because multiple errors can occur when loading multiple files, `error` is
             * only set if `path` is invalid.  If a key file fails to load, the error is
             * broadcast through the #ESourceRegistryServer::load-error signal.
             * @param resource a #GResource containing data source key files
             * @param path the path to the data source key files inside @resource
             * @param flags permission flags for files loaded from @path
             * @returns %TRUE if @path was successfully located, but this does not          imply the key files were successfully loaded
             */
            load_resource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags | null): boolean;
            /**
             * Returns the #ECollectionBackend associated with `source,` or %NULL if
             * there is no #ECollectionBackend associated with `source`.
             *
             * An #ESource is associated with an #ECollectionBackend if the #ESource has
             * an #ESourceCollection extension, or if it is a hierarchical descendant of
             * another #ESource which has an #ESourceCollection extension.
             *
             * The returned #ECollectionBackend is referenced for thread-safety.
             * Unreference the #ECollectionBackend with g_object_unref() when finished
             * with it.
             * @param source an #ESource
             * @returns the #ECollectionBackend for @source, or %NULL
             */
            ref_backend(source: EDataServer.Source): CollectionBackend | null;
            /**
             * Returns the #ECollectionBackendFactory for `source,` if available.
             * If `source` does not have an #ESourceCollection extension, or if the
             * #ESourceCollection extension names an #ESourceBackend:backend-name for
             * which there is no corresponding #ECollectionBackendFactory, the function
             * returns %NULL.
             *
             * The returned #ECollectionBackendFactory is referenced for thread-safety.
             * Unreference the #ECollectionBackendFactory with g_object_unref() when
             * finished with it.
             * @param source an #ESource
             * @returns the #ECollectionBackendFactory for @source,    or %NULL
             */
            ref_backend_factory(source: EDataServer.Source): CollectionBackendFactory | null;
            // Conflicted with EBackend.DataFactory.ref_backend_factory
            ref_backend_factory(...args: never[]): any;
            /**
             * Returns a referenced #ESourceCredentialsProvider. Unref it with
             * g_object_unref(), when no longer needed.
             * @returns A referenced #ESourceCredentialsProvider.
             */
            ref_credentials_provider(): EDataServer.SourceCredentialsProvider;
            /**
             * Returns the default #EOAuth2Support implementation, which can be used when
             * the source doesn't have it overwritten.
             *
             * Free the returned object with g_object_unref(), when no longer needed.
             * @returns the default #EOAuth2Support,    or %NULL, when none exists
             */
            ref_oauth2_support(): OAuth2Support | null;
            /**
             * Looks up an #ESource in `server` by its unique identifier string.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @param uid a unique identifier string
             * @returns an #ESource, or %NULL if no match was found
             */
            ref_source(uid: string): EDataServer.Source | null;
            /**
             * Removes `source` and all of its descendants from `server`.
             * @param source an #ESource
             */
            remove_source(source: EDataServer.Source): void;

            // Inherited methods
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[string, number]>;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[string, number]> | void;
            /**
             * Finishes the operation started with e_oauth2_support_get_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_access_token_sync(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
            ): [boolean, string, number];
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_oauth2_support_get_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_get_access_token_sync(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
            ): [boolean, string, number];
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

        module SubprocessFactory {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
                registry: EDataServer.SourceRegistry;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SubprocessFactory extends GObject.Object implements Gio.Initable {
            static $gtype: GObject.GType<SubprocessFactory>;

            // Properties

            get registry(): EDataServer.SourceRegistry;

            // Constructors

            constructor(properties?: Partial<SubprocessFactory.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Returns a new and unique object path for a D-Bus interface based
             * in the data object path prefix of the `subprocess_factory`
             */
            static construct_path(): string;

            // Virtual methods

            vfunc_backend_closed(backend: Backend): void;
            vfunc_backend_created(backend: Backend): void;
            vfunc_open_data(
                backend: Backend,
                connection: Gio.DBusConnection,
                data?: any | null,
                cancellable?: Gio.Cancellable | null,
            ): string;

            // Methods

            /**
             * Calls e_backend_prepare_shutdown() for the list of used backends.
             */
            call_backends_prepare_shutdown(): void;
            /**
             * Returns a list of used backends.
             * @returns A #GList that contains a    list of used backends. The list should be freed by the caller using:    g_list_free_full (backends, g_object_unref).
             */
            get_backends_list(): Backend[];
            /**
             * Returns the #ESourceRegistry owned by `subprocess_factory`.
             * @returns the #ESourceRegistry
             */
            get_registry(): EDataServer.SourceRegistry;
            /**
             * Returns the #EBackend data D-Bus object path
             * @param connection a #GDBusConnection
             * @param uid UID of an #ESource to open
             * @param backend_factory_type_name the name of the backend factory type
             * @param module_filename the name (full-path) of the backend module to be loaded
             * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
             * @param cancellable a #GCancellable
             * @returns a newly allocated string that represents the #EBackend          data D-Bus object path.
             */
            open_backend(
                connection: Gio.DBusConnection,
                uid: string,
                backend_factory_type_name: string,
                module_filename: string,
                proxy: Gio.DBusInterfaceSkeleton,
                cancellable?: Gio.Cancellable | null,
            ): string;
            /**
             * Returns either a newly-created or existing #EBackend for #ESource.
             * The returned #EBackend is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             *
             * If the newly-created backend implements the #GInitable interface, then
             * g_initable_init() is also called on it using `cancellable` and `error`.
             *
             * The `subprocess_factory` retains a strong reference to `backend`.
             *
             * If no suitable #EBackendFactory exists, or if the #EBackend fails to
             * initialize, the function sets `error` and returns %NULL.
             * @param uid UID of an #ESource to open
             * @param backend_factory_type_name the name of the backend factory type
             * @param module_filename the name (full-path) of the backend module to be loaded
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #EBackend for @source, or %NULL
             */
            ref_initable_backend(
                uid: string,
                backend_factory_type_name: string,
                module_filename: string,
                cancellable?: Gio.Cancellable | null,
            ): Backend | null;
            /**
             * Installs a toggle reference on the backend, that can receive a signal to
             * shutdown once all client connections are closed.
             * @param backend an #EBackend
             * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
             */
            set_backend_callbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void;

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

        module UserPrompter {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class UserPrompter extends GObject.Object {
            static $gtype: GObject.GType<UserPrompter>;

            // Constructors

            constructor(properties?: Partial<UserPrompter.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UserPrompter;

            // Methods

            /**
             * Asynchronously prompt a user for a decision on an extension-provided dialog.
             * The caller usually provides an extension for #EUserPrompterServer, a descendant
             * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
             * The extension defines `dialog_name,` same as meaning of `in_parameters;`
             * only the extension and the caller know about meaning of these.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_extension_prompt_finish() to get the result of the operation.
             * If there is no extension providing given dialog name, the operation finishes with
             * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND #GError.
             * @param dialog_name name of a dialog to invoke
             * @param in_parameters optional parameters to pass to extension; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            extension_prompt(
                dialog_name: string,
                in_parameters?: EDataServer.NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Asynchronously prompt a user for a decision on an extension-provided dialog.
             * The caller usually provides an extension for #EUserPrompterServer, a descendant
             * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
             * The extension defines `dialog_name,` same as meaning of `in_parameters;`
             * only the extension and the caller know about meaning of these.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_extension_prompt_finish() to get the result of the operation.
             * If there is no extension providing given dialog name, the operation finishes with
             * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND #GError.
             * @param dialog_name name of a dialog to invoke
             * @param in_parameters optional parameters to pass to extension; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            extension_prompt(
                dialog_name: string,
                in_parameters: EDataServer.NamedParameters | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously prompt a user for a decision on an extension-provided dialog.
             * The caller usually provides an extension for #EUserPrompterServer, a descendant
             * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
             * The extension defines `dialog_name,` same as meaning of `in_parameters;`
             * only the extension and the caller know about meaning of these.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_extension_prompt_finish() to get the result of the operation.
             * If there is no extension providing given dialog name, the operation finishes with
             * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND #GError.
             * @param dialog_name name of a dialog to invoke
             * @param in_parameters optional parameters to pass to extension; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            extension_prompt(
                dialog_name: string,
                in_parameters?: EDataServer.NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Finishes the operation started with e_user_prompter_extension_prompt().
             * Caller can provide `out_values` to get additional values provided by the extension.
             * In case the caller is not interested in additional values, it can pass %NULL `out_values`.
             * The `out_values` will be cleared first, then any values will be added there.
             * Only the caller and the extension know about meaning of the result code and
             * additional values.
             *
             * If an error occurred, the function sets `error` and returns -1. If there is
             * no extension providing given dialog name, the operation finishes with
             * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
             * @param result a #GAsyncResult
             * @param out_values Where to store values from the extension, or %NULL
             * @returns Result code of the prompt, as defined by the extension, or -1 on error.
             */
            extension_prompt_finish(result: Gio.AsyncResult, out_values?: EDataServer.NamedParameters | null): number;
            /**
             * Synchronously prompt a user for a decision on an extension-provided dialog.
             * The caller usually provides an extension for #EUserPrompterServer, a descendant
             * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
             * The extension defines `dialog_name,` same as meaning of `in_parameters;`
             * only the extension and the caller know about meaning of these.
             *
             * Caller can provide `out_values` to get additional values provided by the extension.
             * In case the caller is not interested in additional values, it can pass %NULL `out_values`.
             * The `out_values` will be cleared first, then any values will be added there.
             * Only the caller and the extension know about meaning of the result code and
             * additional values.
             *
             * If an error occurred, the function sets `error` and returns -1. If there is
             * no extension providing given dialog name, the operation finishes with
             * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
             * @param dialog_name name of a dialog to invoke
             * @param in_parameters optional parameters to pass to extension; can be %NULL
             * @param out_values Where to store values from the extension, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Result code of the prompt, as defined by the extension, or -1 on error.
             */
            extension_prompt_sync(
                dialog_name: string,
                in_parameters?: EDataServer.NamedParameters | null,
                out_values?: EDataServer.NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): number;
            /**
             * Asynchronously prompt a user for a decision.
             *
             * The `type` can be one of "info", "warning", "question" or "error", to include
             * an icon in the message prompt; anything else results in no icon in the message.
             *
             * If `button_captions` is %NULL or empty list, then only one button is shown in
             * the prompt, a "Dismiss" button.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_prompt_finish() to get the result of the operation.
             * @param type type of the prompt; can be %NULL
             * @param title window title of the prompt; can be %NULL
             * @param primary_text primary text of the prompt; can be %NULL
             * @param secondary_text secondary text of the prompt; can be %NULL
             * @param use_markup whether both texts are with markup
             * @param button_captions captions of buttons to    use in the message; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            prompt(
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<number>;
            /**
             * Asynchronously prompt a user for a decision.
             *
             * The `type` can be one of "info", "warning", "question" or "error", to include
             * an icon in the message prompt; anything else results in no icon in the message.
             *
             * If `button_captions` is %NULL or empty list, then only one button is shown in
             * the prompt, a "Dismiss" button.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_prompt_finish() to get the result of the operation.
             * @param type type of the prompt; can be %NULL
             * @param title window title of the prompt; can be %NULL
             * @param primary_text primary text of the prompt; can be %NULL
             * @param secondary_text secondary text of the prompt; can be %NULL
             * @param use_markup whether both texts are with markup
             * @param button_captions captions of buttons to    use in the message; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            prompt(
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions: string[] | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously prompt a user for a decision.
             *
             * The `type` can be one of "info", "warning", "question" or "error", to include
             * an icon in the message prompt; anything else results in no icon in the message.
             *
             * If `button_captions` is %NULL or empty list, then only one button is shown in
             * the prompt, a "Dismiss" button.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_user_prompter_prompt_finish() to get the result of the operation.
             * @param type type of the prompt; can be %NULL
             * @param title window title of the prompt; can be %NULL
             * @param primary_text primary text of the prompt; can be %NULL
             * @param secondary_text secondary text of the prompt; can be %NULL
             * @param use_markup whether both texts are with markup
             * @param button_captions captions of buttons to    use in the message; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            prompt(
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions?: string[] | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<number> | void;
            /**
             * Finishes the operation started with e_user_prompter_prompt().
             *
             * If an error occurred, the function sets `error` and returns -1.
             * @param result a #GAsyncResult
             * @returns 0-based index of a button being used by a user as a response,   corresponding to 'button_captions' from e_user_prompter_prompt() call.
             */
            prompt_finish(result: Gio.AsyncResult): number;
            /**
             * Prompts a user for a decision.
             *
             * The `type` can be one of "info", "warning", "question" or "error", to include
             * an icon in the message prompt; anything else results in no icon in the message.
             *
             * If `button_captions` is %NULL or empty list, then only one button is shown in
             * the prompt, a "Dismiss" button.
             *
             * If an error occurred, the function sets `error` and returns -1.
             * @param type type of the prompt; can be %NULL
             * @param title window title of the prompt; can be %NULL
             * @param primary_text primary text of the prompt; can be %NULL
             * @param secondary_text secondary text of the prompt; can be %NULL
             * @param use_markup whether both texts are with markup
             * @param button_captions captions of buttons to    use in the message; can be %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns 0-based index of a button being used by a user as a response,   corresponding to @button_captions list.
             */
            prompt_sync(
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions?: string[] | null,
                cancellable?: Gio.Cancellable | null,
            ): number;
        }

        module UserPrompterServer {
            // Signal callback interfaces

            interface Prompt {
                (
                    prompt_id: number,
                    type: string | null,
                    title: string | null,
                    primary_text: string | null,
                    secondary_text: string | null,
                    use_markup: boolean,
                    button_captions?: string[] | null,
                ): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends DBusServer.ConstructorProps, EDataServer.Extensible.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class UserPrompterServer extends DBusServer implements EDataServer.Extensible {
            static $gtype: GObject.GType<UserPrompterServer>;

            // Constructors

            constructor(properties?: Partial<UserPrompterServer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): UserPrompterServer;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'prompt',
                callback: (
                    _source: this,
                    prompt_id: number,
                    type: string | null,
                    title: string | null,
                    primary_text: string | null,
                    secondary_text: string | null,
                    use_markup: boolean,
                    button_captions: string[] | null,
                ) => void,
            ): number;
            connect_after(
                signal: 'prompt',
                callback: (
                    _source: this,
                    prompt_id: number,
                    type: string | null,
                    title: string | null,
                    primary_text: string | null,
                    secondary_text: string | null,
                    use_markup: boolean,
                    button_captions: string[] | null,
                ) => void,
            ): number;
            emit(
                signal: 'prompt',
                prompt_id: number,
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions?: string[] | null,
            ): void;

            // Methods

            /**
             * Registers `extension` as a provider of `dialog_name` dialog. The names
             * are compared case sensitively and two extensions cannot provide
             * the same dialog. If the function succeeds, then it adds its own
             * reference on the `extension`.
             *
             * Extensions providing multiple dialogs call this function multiple
             * times, for each dialog name separately.
             * @param extension an #EUserPrompterServerExtension descendant
             * @param dialog_name name of a dialog, which the @extensions implement
             * @returns Whether properly registered @extension
             */
            register(extension: EDataServer.Extension, dialog_name: string): boolean;
            /**
             * Finishes prompt initiated by a "prompt" signal or an extension prompt.
             * The `response` for non-extension prompts is a 0-based index of a button
             * used to close the prompt.
             *
             * The `extension_values` is ignored for non-extension prompts.
             * @param prompt_id Id of a prompt, which was responded
             * @param response Response of the prompt
             * @param extension_values For extension prompts can pass extra return values
             */
            response(prompt_id: number, response: number, extension_values?: EDataServer.NamedParameters | null): void;

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

        module UserPrompterServerExtension {
            // Constructor properties interface

            interface ConstructorProps extends EDataServer.Extension.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class UserPrompterServerExtension extends EDataServer.Extension {
            static $gtype: GObject.GType<UserPrompterServerExtension>;

            // Constructors

            constructor(properties?: Partial<UserPrompterServerExtension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Instructs extension to show dialog `dialog_name`. If it cannot be found,
             * or any error, then return %FALSE. The caller can pass optional `parameters,`
             * if `extension` uses any. Meaning of `parameters` is known only to the caller
             * and to the dialog implementor, it's not interpretted nor checked for correctness
             * in any way in #EUserPrompterServer. The only limitation of `parameters` is that
             * the array elements are strings.
             *
             * The `prompt_id` is used as an identificator of the prompt itself,
             * and is used in e_user_prompter_server_extension_response() call,
             * which finishes the prompt.
             *
             * Note: The function call should not block main loop, it should
             * just show dialog and return.
             * @param prompt_id Prompt identificator, which is used in call to e_user_prompter_server_extension_response()
             * @param dialog_name Name of a dialog to run
             * @param parameters Optional extension parameters for the dialog, as passed by a caller
             */
            vfunc_prompt(
                prompt_id: number,
                dialog_name: string,
                parameters?: EDataServer.NamedParameters | null,
            ): boolean;

            // Methods

            /**
             * Instructs extension to show dialog `dialog_name`. If it cannot be found,
             * or any error, then return %FALSE. The caller can pass optional `parameters,`
             * if `extension` uses any. Meaning of `parameters` is known only to the caller
             * and to the dialog implementor, it's not interpretted nor checked for correctness
             * in any way in #EUserPrompterServer. The only limitation of `parameters` is that
             * the array elements are strings.
             *
             * The `prompt_id` is used as an identificator of the prompt itself,
             * and is used in e_user_prompter_server_extension_response() call,
             * which finishes the prompt.
             *
             * Note: The function call should not block main loop, it should
             * just show dialog and return.
             * @param prompt_id Prompt identificator, which is used in call to e_user_prompter_server_extension_response()
             * @param dialog_name Name of a dialog to run
             * @param parameters Optional extension parameters for the dialog, as passed by a caller
             * @returns Whether dialog was found and shown.
             */
            prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;
            /**
             * A conveniente wrapper function around e_user_prompter_server_response(),
             * which ends previous call of e_user_prompter_server_extension_prompt().
             * The `response` and `values` is known only to the caller and to the dialog implementor,
             * it's not interpretted nor checked for correctness in any way in #EUserPrompterServer.
             * The only limitation of `values` is that the array elements are strings.
             * @param prompt_id Prompt identificator
             * @param response Response of the prompt
             * @param values Additional response values, if extension defines any
             */
            response(prompt_id: number, response: number, values?: EDataServer.NamedParameters | null): void;
        }

        module WebDAVCollectionBackend {
            // Constructor properties interface

            interface ConstructorProps extends CollectionBackend.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class WebDAVCollectionBackend extends CollectionBackend {
            static $gtype: GObject.GType<WebDAVCollectionBackend>;

            // Constructors

            constructor(properties?: Partial<WebDAVCollectionBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Verifies that the `source` is expected here and returns its resource ID,
             * which is used in call to e_collection_backend_new_child(). It returns %NULL,
             * when the `source` is not part of the backend and should be removed instead.
             * The default implementation allows all sources, which has %ESourceResource
             * extension defined.
             * @param source an #ESource
             */
            vfunc_get_resource_id(source: EDataServer.Source): string | null;
            vfunc_is_custom_source(source: EDataServer.Source): boolean;

            // Methods

            /**
             * This function is usually called in EBackend::authenticate_sync() implementation
             * of the descendant, causing discovery of CalDAV and CardDAV sources on given URLs.
             * If either of `calendar_url` and `contacts_url` is %NULL, that that part is skipped.
             * The `calendar_url` covers all calendars, memo lists and task lists.
             *
             * The function also takes care of e_collection_backend_authenticate_children() on success.
             * @param calendar_url a URL to search calendars at, or %NULL
             * @param contacts_url a URL to search contacts at, or %NULL
             * @param credentials credentials to use when running the discovery
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns an #ESourceAuthenticationResult describing whether discovery on given    addresses succeeded.
             */
            discover_sync(
                calendar_url: string | null,
                contacts_url: string | null,
                credentials: EDataServer.NamedParameters,
                cancellable?: Gio.Cancellable | null,
            ): [EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags | null];
            /**
             * Verifies that the `source` is expected here and returns its resource ID,
             * which is used in call to e_collection_backend_new_child(). It returns %NULL,
             * when the `source` is not part of the backend and should be removed instead.
             * The default implementation allows all sources, which has %ESourceResource
             * extension defined.
             * @param source an #ESource
             * @returns a resource ID corresponding to @source,    or %NULL, when the @source should be removed.
             */
            get_resource_id(source: EDataServer.Source): string | null;
            is_custom_source(source: EDataServer.Source): boolean;
        }

        type BackendClass = typeof Backend;
        type BackendFactoryClass = typeof BackendFactory;
        abstract class BackendFactoryPrivate {
            static $gtype: GObject.GType<BackendFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class BackendPrivate {
            static $gtype: GObject.GType<BackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CacheClass = typeof Cache;
        class CacheColumnInfo {
            static $gtype: GObject.GType<CacheColumnInfo>;

            // Fields

            name: string;
            type: string;
            index_name: string;

            // Constructors

            constructor(
                properties?: Partial<{
                    name: string;
                    type: string;
                    index_name: string;
                }>,
            );
            _init(...args: any[]): void;

            static ['new'](name: string, type: string, index_name?: string | null): CacheColumnInfo;

            // Static methods

            /**
             * Frees the `info` structure, previously allocated with e_cache_column_info_new()
             * or e_cache_column_info_copy().
             * @param info an #ECacheColumnInfo
             */
            static free(info?: any | null): void;

            // Methods

            copy(): CacheColumnInfo | null;
        }

        class CacheColumnValues {
            static $gtype: GObject.GType<CacheColumnValues>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): CacheColumnValues;

            // Methods

            contains(name: string): boolean;
            copy(): CacheColumnValues;
            /**
             * Frees previously allocated `other_columns` with
             * e_cache_column_values_new() or e_cache_column_values_copy().
             */
            free(): void;
            get_size(): number;
            /**
             * Initialized the `iter,` thus the `other_columns` can be traversed
             * with g_hash_table_iter_next(). The key is a column name and
             * the value is the corresponding column value.
             * @param iter a #GHashTableIter
             */
            init_iter(iter: GLib.HashTableIter): void;
            /**
             * Looks up currently stored value for the column named `name`.
             * As the values can be %NULL one cannot distinguish between
             * a column which doesn't have stored any value and a column
             * which has stored %NULL value. Use e_cache_column_values_contains()
             * to check whether such column exitst in the `other_columns`.
             * The returned pointer is owned by `other_columns` and is valid until
             * the value is overwritten of the `other_columns` freed.
             * @param name a column name
             * @returns Stored value for the column named @name,    or %NULL, if no such column values is stored.
             */
            lookup(name: string): string | null;
            /**
             * Puts the `value` for column `name`. If contains a value for the same
             * column, then it is replaced. This creates a copy of both `name`
             * and `value`.
             * @param name a column name
             * @param value a column value
             */
            put(name: string, value?: string | null): void;
            /**
             * Removes value for the column named `name` from `other_columns`.
             * @param name a column name
             * @returns Whether such column existed and had been removed.
             */
            remove(name: string): boolean;
            /**
             * Removes all values from the `other_columns,` leaving it empty.
             */
            remove_all(): void;
            /**
             * Puts the `value` for column `name`. If contains a value for the same
             * column, then it is replaced. This creates takes ownership of both
             * the `name` and the `value`.
             * @param name a column name
             * @param value a column value
             */
            take(name: string, value?: string | null): void;
            /**
             * Puts the `value` for column `name`. If contains a value for the same
             * column, then it is replaced. This creates a copy of the `name,` but
             * takes owner ship of the `value`.
             * @param name a column name
             * @param value a column value
             */
            take_value(name: string, value?: string | null): void;
        }

        type CacheKeysClass = typeof CacheKeys;
        abstract class CacheKeysPrivate {
            static $gtype: GObject.GType<CacheKeysPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Holds the information about offline change for one object.
         */
        class CacheOfflineChange {
            static $gtype: GObject.GType<CacheOfflineChange>;

            // Fields

            uid: string;
            revision: string;
            object: string;
            state: OfflineState;

            // Constructors

            constructor(uid: string, revision: string | null, object: string | null, state: OfflineState);
            _init(...args: any[]): void;

            static ['new'](
                uid: string,
                revision: string | null,
                object: string | null,
                state: OfflineState,
            ): CacheOfflineChange;

            // Static methods

            /**
             * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
             * or e_cache_offline_change_copy().
             * @param change an #ECacheOfflineChange
             */
            static free(change?: any | null): void;

            // Methods

            copy(): CacheOfflineChange | null;
        }

        abstract class CachePrivate {
            static $gtype: GObject.GType<CachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type CacheReaperClass = typeof CacheReaper;
        type CollectionBackendClass = typeof CollectionBackend;
        type CollectionBackendFactoryClass = typeof CollectionBackendFactory;
        abstract class CollectionBackendFactoryPrivate {
            static $gtype: GObject.GType<CollectionBackendFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class CollectionBackendPrivate {
            static $gtype: GObject.GType<CollectionBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DBusServerClass = typeof DBusServer;
        abstract class DBusServerPrivate {
            static $gtype: GObject.GType<DBusServerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type DataFactoryClass = typeof DataFactory;
        abstract class DataFactoryPrivate {
            static $gtype: GObject.GType<DataFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type FileCacheClass = typeof FileCache;
        abstract class FileCachePrivate {
            static $gtype: GObject.GType<FileCachePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type OAuth2SupportInterface = typeof OAuth2Support;
        type ServerSideSourceClass = typeof ServerSideSource;
        type ServerSideSourceCredentialsProviderClass = typeof ServerSideSourceCredentialsProvider;
        abstract class ServerSideSourceCredentialsProviderPrivate {
            static $gtype: GObject.GType<ServerSideSourceCredentialsProviderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class ServerSideSourcePrivate {
            static $gtype: GObject.GType<ServerSideSourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceRegistryServerClass = typeof SourceRegistryServer;
        abstract class SourceRegistryServerPrivate {
            static $gtype: GObject.GType<SourceRegistryServerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SubprocessFactoryClass = typeof SubprocessFactory;
        abstract class SubprocessFactoryPrivate {
            static $gtype: GObject.GType<SubprocessFactoryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UserPrompterClass = typeof UserPrompter;
        abstract class UserPrompterPrivate {
            static $gtype: GObject.GType<UserPrompterPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type UserPrompterServerClass = typeof UserPrompterServer;
        type UserPrompterServerExtensionClass = typeof UserPrompterServerExtension;
        abstract class UserPrompterServerExtensionPrivate {
            static $gtype: GObject.GType<UserPrompterServerExtensionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class UserPrompterServerPrivate {
            static $gtype: GObject.GType<UserPrompterServerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type WebDAVCollectionBackendClass = typeof WebDAVCollectionBackend;
        abstract class WebDAVCollectionBackendPrivate {
            static $gtype: GObject.GType<WebDAVCollectionBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        module OAuth2Support {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface OAuth2SupportNamespace {
            $gtype: GObject.GType<OAuth2Support>;
            prototype: OAuth2Support;
        }
        interface OAuth2Support extends GObject.Object {
            // Methods

            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[string, number]>;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[string, number]> | void;
            /**
             * Finishes the operation started with e_oauth2_support_get_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            get_access_token_sync(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
            ): [boolean, string, number];

            // Virtual methods

            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_oauth2_support_get_access_token_finish() to get the result of the
             * operation.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_oauth2_support_get_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_get_access_token_sync(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
            ): [boolean, string, number];
        }

        export const OAuth2Support: OAuth2SupportNamespace & {
            new (): OAuth2Support; // This allows `obj instanceof OAuth2Support`
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

    export default EBackend;
}

declare module 'gi://EBackend' {
    import EBackend12 from 'gi://EBackend?version=1.2';
    export default EBackend12;
}
// END
