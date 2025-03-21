/// <reference path="./libxml2-2.0.d.ts" />
/// <reference path="./soup-3.0.d.ts" />
/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />
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

declare module 'gi://EDataServer?version=1.2' {
    // Module dependencies
    import type libxml2 from 'gi://libxml2?version=2.0';
    import type Soup from 'gi://Soup?version=3.0';
    import type Gio from 'gi://Gio?version=2.0';
    import type GObject from 'gi://GObject?version=2.0';
    import type GLib from 'gi://GLib?version=2.0';
    import type GModule from 'gi://GModule?version=2.0';
    import type Json from 'gi://Json?version=1.0';
    import type Camel from 'gi://Camel?version=1.2';

    export namespace EDataServer {
        /**
         * EDataServer-1.2
         */

        /**
         * Error codes for #EClient operations.
         */

        /**
         * Error codes for #EClient operations.
         */
        export namespace ClientError {
            export const $gtype: GObject.GType<ClientError>;
        }

        enum ClientError {
            /**
             * Invalid argument was used
             */
            INVALID_ARG,
            /**
             * The client is busy
             */
            BUSY,
            /**
             * The source is not loaded
             */
            SOURCE_NOT_LOADED,
            /**
             * The source is already loaded
             */
            SOURCE_ALREADY_LOADED,
            /**
             * Authentication failed
             */
            AUTHENTICATION_FAILED,
            /**
             * Authentication required
             */
            AUTHENTICATION_REQUIRED,
            /**
             * The repository (client) is offline
             */
            REPOSITORY_OFFLINE,
            /**
             * The operation is unavailable in offline mode
             */
            OFFLINE_UNAVAILABLE,
            /**
             * Permission denied for the operation
             */
            PERMISSION_DENIED,
            /**
             * The operation was cancelled
             */
            CANCELLED,
            /**
             * The operation cannot be cancelled
             */
            COULD_NOT_CANCEL,
            /**
             * The operation is not supported
             */
            NOT_SUPPORTED,
            /**
             * TLS is not available
             */
            TLS_NOT_AVAILABLE,
            /**
             * Requested authentication method is not supported
             */
            UNSUPPORTED_AUTHENTICATION_METHOD,
            /**
             * Search size limit exceeded
             */
            SEARCH_SIZE_LIMIT_EXCEEDED,
            /**
             * Search time limit exceeded
             */
            SEARCH_TIME_LIMIT_EXCEEDED,
            /**
             * The query was invalid
             */
            INVALID_QUERY,
            /**
             * The query was refused by the server side
             */
            QUERY_REFUSED,
            /**
             * A D-Bus error occurred
             */
            DBUS_ERROR,
            /**
             * Other error
             */
            OTHER_ERROR,
            /**
             * The client is not opened
             */
            NOT_OPENED,
            /**
             * The client is out of sync with the server
             */
            OUT_OF_SYNC,
        }
        /**
         * Errors from the #E_COLLATOR_ERROR domain.
         */
        class CollatorError extends GLib.Error {
            static $gtype: GObject.GType<CollatorError>;

            // Static fields

            /**
             * An error occured trying to open a collator and access collation data.
             */
            static OPEN: number;
            /**
             * An error occurred converting character encodings
             */
            static CONVERSION: number;
            /**
             * A malformed locale name was given to e_collator_new()
             */
            static INVALID_LOCALE: number;

            // Constructors

            constructor(options: { message: string; code: number });
            _init(...args: any[]): void;
        }

        /**
         * Defines what to do when a conflict between the locally stored and
         * remotely stored object versions happen during object modify or remove.
         */

        /**
         * Defines what to do when a conflict between the locally stored and
         * remotely stored object versions happen during object modify or remove.
         */
        export namespace ConflictResolution {
            export const $gtype: GObject.GType<ConflictResolution>;
        }

        enum ConflictResolution {
            /**
             * Fail when a write-conflict occurs.
             */
            FAIL,
            /**
             * Use newer version of the object,
             *    which can be either the server version or the local version of it.
             */
            USE_NEWER,
            /**
             * Keep server object on conflict.
             */
            KEEP_SERVER,
            /**
             * Write local version of the object on conflict.
             */
            KEEP_LOCAL,
            /**
             * Create a new copy of the object on conflict.
             */
            WRITE_COPY,
        }
        /**
         * Holds status of a task.
         */

        /**
         * Holds status of a task.
         */
        export namespace GDataTaskStatus {
            export const $gtype: GObject.GType<GDataTaskStatus>;
        }

        enum GDataTaskStatus {
            /**
             * unknown status
             */
            UNKNOWN,
            /**
             * the task needs action
             */
            NEEDS_ACTION,
            /**
             * the task is completed
             */
            COMPLETED,
        }
        /**
         * Policy for responding to Message Disposition Notification requests
         * (i.e. a Disposition-Notification-To header) when receiving messages.
         * See RFC 2298 for more information about MDN requests.
         */

        /**
         * Policy for responding to Message Disposition Notification requests
         * (i.e. a Disposition-Notification-To header) when receiving messages.
         * See RFC 2298 for more information about MDN requests.
         */
        export namespace MdnResponsePolicy {
            export const $gtype: GObject.GType<MdnResponsePolicy>;
        }

        enum MdnResponsePolicy {
            /**
             * Never respond to an MDN request.
             */
            NEVER,
            /**
             * Always respond to an MDN request.
             */
            ALWAYS,
            /**
             * Ask the user before responding to an MDN request.
             */
            ASK,
        }
        /**
         * A value used during querying authentication URI, to decide whether certain
         * resource can be used or not. The `E_OAUTH2`_SERVICE_NAVIGATION_POLICY_ABORT
         * can be used to abort the authentication query, like when user cancelled it.
         */

        /**
         * A value used during querying authentication URI, to decide whether certain
         * resource can be used or not. The `E_OAUTH2`_SERVICE_NAVIGATION_POLICY_ABORT
         * can be used to abort the authentication query, like when user cancelled it.
         */
        export namespace OAuth2ServiceNavigationPolicy {
            export const $gtype: GObject.GType<OAuth2ServiceNavigationPolicy>;
        }

        enum OAuth2ServiceNavigationPolicy {
            /**
             * Deny navigation to the given web resource
             */
            DENY,
            /**
             * Allow navigation to the given web resource
             */
            ALLOW,
            /**
             * Abort authentication processing
             */
            ABORT,
        }
        /**
         * Network proxy configuration methods.
         */

        /**
         * Network proxy configuration methods.
         */
        export namespace ProxyMethod {
            export const $gtype: GObject.GType<ProxyMethod>;
        }

        enum ProxyMethod {
            /**
             * Use the default #GProxyResolver (see g_proxy_resolver_get_default()).
             */
            DEFAULT,
            /**
             * Use the FTP/HTTP/HTTPS/SOCKS settings defined in #ESourceProxy.
             */
            MANUAL,
            /**
             * Use the autoconfiguration URL defined in #ESourceProxy.
             */
            AUTO,
            /**
             * Direct connection; do not use a network proxy.
             */
            NONE,
        }
        /**
         * Status codes used by the #EBackend authentication wrapper.
         */

        /**
         * Status codes used by the #EBackend authentication wrapper.
         */
        export namespace SourceAuthenticationResult {
            export const $gtype: GObject.GType<SourceAuthenticationResult>;
        }

        enum SourceAuthenticationResult {
            /**
             * Unknown error occurred while authenticating. Since: 3.26
             */
            UNKNOWN,
            /**
             * An error occurred while authenticating.
             */
            ERROR,
            /**
             * An SSL certificate check failed. Since: 3.16.
             */
            ERROR_SSL_FAILED,
            /**
             * Server requesting authentication accepted password.
             */
            ACCEPTED,
            /**
             * Server requesting authentication rejected password.
             */
            REJECTED,
            /**
             * Server requesting authentication, but none was given.
             */
            REQUIRED,
        }
        /**
         * Connection status codes used by the #ESource to indicate its connection state.
         * This is used in combination with authentication of the ESource. For example,
         * if there are multiple clients asking for a password and a user enters the password
         * in one of them, then the status will change into 'connecting', which is a signal
         * do close the password prompt in the other client, because the credentials had
         * been already provided.
         */

        /**
         * Connection status codes used by the #ESource to indicate its connection state.
         * This is used in combination with authentication of the ESource. For example,
         * if there are multiple clients asking for a password and a user enters the password
         * in one of them, then the status will change into 'connecting', which is a signal
         * do close the password prompt in the other client, because the credentials had
         * been already provided.
         */
        export namespace SourceConnectionStatus {
            export const $gtype: GObject.GType<SourceConnectionStatus>;
        }

        enum SourceConnectionStatus {
            /**
             * The source is currently disconnected from its (possibly remote) data store.
             */
            DISCONNECTED,
            /**
             * The source asked for credentials with a 'credentials-required' signal and
             *   is currently awaiting for them.
             */
            AWAITING_CREDENTIALS,
            /**
             * A user rejected SSL certificate trust for the connection.
             */
            SSL_FAILED,
            /**
             * The source is currently connecting to its (possibly remote) data store.
             */
            CONNECTING,
            /**
             * The source is currently connected to its (possibly remote) data store.
             */
            CONNECTED,
        }
        /**
         * An ESource's authentication reason, used by an ESource::CredentialsRequired method.
         */

        /**
         * An ESource's authentication reason, used by an ESource::CredentialsRequired method.
         */
        export namespace SourceCredentialsReason {
            export const $gtype: GObject.GType<SourceCredentialsReason>;
        }

        enum SourceCredentialsReason {
            /**
             * A return value when there was no 'credentials-required' signal emitted yet,
             *   or a pair 'authenticate' signal had been received. This value should not
             *   be used in the call of 'credentials-required'.
             */
            UNKNOWN,
            /**
             * This is the first attempt to get credentials for the source. It's usually
             *   used right after the source is opened and the authentication continues with
             *   a stored credentials, if any.
             */
            REQUIRED,
            /**
             * The previously used credentials had been rejected by the server. That
             *   usually means that the user should be asked to provide/correct the credentials.
             */
            REJECTED,
            /**
             * A secured connection failed due to some server-side certificate issues.
             */
            SSL_FAILED,
            /**
             * The server returned an error. It is not possible to connect to it
             *   at the moment usually.
             */
            ERROR,
        }
        /**
         * Defines authentication types for LDAP sources.
         */

        /**
         * Defines authentication types for LDAP sources.
         */
        export namespace SourceLDAPAuthentication {
            export const $gtype: GObject.GType<SourceLDAPAuthentication>;
        }

        enum SourceLDAPAuthentication {
            /**
             * Use none authentication type.
             */
            NONE,
            /**
             * Use an email address for authentication.
             */
            EMAIL,
            /**
             * Use a bind DN for authentication.
             */
            BINDDN,
        }
        /**
         * Defines search scope for LDAP sources.
         */

        /**
         * Defines search scope for LDAP sources.
         */
        export namespace SourceLDAPScope {
            export const $gtype: GObject.GType<SourceLDAPScope>;
        }

        enum SourceLDAPScope {
            /**
             * One level search scope.
             */
            ONELEVEL,
            /**
             * Sub-tree search scope.
             */
            SUBTREE,
        }
        /**
         * Defines what connection security should be used for LDAP sources.
         */

        /**
         * Defines what connection security should be used for LDAP sources.
         */
        export namespace SourceLDAPSecurity {
            export const $gtype: GObject.GType<SourceLDAPSecurity>;
        }

        enum SourceLDAPSecurity {
            /**
             * Connect insecurely.
             */
            NONE,
            /**
             * Connect using secure LDAP (LDAPS).
             */
            LDAPS,
            /**
             * Connect using STARTTLS.
             */
            STARTTLS,
        }
        /**
         * Set of preferred reply styles for an #ESourceMailComposition extension.
         */

        /**
         * Set of preferred reply styles for an #ESourceMailComposition extension.
         */
        export namespace SourceMailCompositionReplyStyle {
            export const $gtype: GObject.GType<SourceMailCompositionReplyStyle>;
        }

        enum SourceMailCompositionReplyStyle {
            /**
             * Use default reply style.
             */
            DEFAULT,
            /**
             * Use quoted reply style.
             */
            QUOTED,
            /**
             * Do not quote anything in replies.
             */
            DO_NOT_QUOTE,
            /**
             * Attach original message in replies.
             */
            ATTACH,
            /**
             * Use Outlook reply style.
             */
            OUTLOOK,
        }
        /**
         * Units to be used in an #ESourceWeather extension.
         */

        /**
         * Units to be used in an #ESourceWeather extension.
         */
        export namespace SourceWeatherUnits {
            export const $gtype: GObject.GType<SourceWeatherUnits>;
        }

        enum SourceWeatherUnits {
            /**
             * Fahrenheit units
             */
            FAHRENHEIT,
            /**
             * Centigrade units
             */
            CENTIGRADE,
            /**
             * Kelvin units
             */
            KELVIN,
        }
        /**
         * Describes a three-state value, which can be either Off, On or Inconsistent.
         */

        /**
         * Describes a three-state value, which can be either Off, On or Inconsistent.
         */
        export namespace ThreeState {
            export const $gtype: GObject.GType<ThreeState>;
        }

        enum ThreeState {
            /**
             * the three-state value is Off
             */
            OFF,
            /**
             * the three-state value is On
             */
            ON,
            /**
             * the three-state value is neither On, nor Off
             */
            INCONSISTENT,
        }

        export namespace TimeParseStatus {
            export const $gtype: GObject.GType<TimeParseStatus>;
        }

        enum TimeParseStatus {
            /**
             * The time string was parsed successfully.
             */
            OK,
            /**
             * The time string was empty.
             */
            NONE,
            /**
             * The time string was not formatted correctly.
             */
            INVALID,
        }
        /**
         * Response codes for the trust prompt.
         */

        /**
         * Response codes for the trust prompt.
         */
        export namespace TrustPromptResponse {
            export const $gtype: GObject.GType<TrustPromptResponse>;
        }

        enum TrustPromptResponse {
            /**
             * Unknown response, usually due to some error
             */
            UNKNOWN,
            /**
             * Reject permanently
             */
            REJECT,
            /**
             * Accept permanently
             */
            ACCEPT,
            /**
             * Accept temporarily
             */
            ACCEPT_TEMPORARILY,
            /**
             * Reject temporarily
             */
            REJECT_TEMPORARILY,
        }

        export namespace WebDAVACEPrincipalKind {
            export const $gtype: GObject.GType<WebDAVACEPrincipalKind>;
        }

        enum WebDAVACEPrincipalKind {
            UNKNOWN,
            HREF,
            ALL,
            AUTHENTICATED,
            UNAUTHENTICATED,
            PROPERTY,
            SELF,
            OWNER,
        }

        export namespace WebDAVLockScope {
            export const $gtype: GObject.GType<WebDAVLockScope>;
        }

        enum WebDAVLockScope {
            EXCLUSIVE,
            SHARED,
        }

        export namespace WebDAVPrivilegeHint {
            export const $gtype: GObject.GType<WebDAVPrivilegeHint>;
        }

        enum WebDAVPrivilegeHint {
            UNKNOWN,
            READ,
            WRITE,
            WRITE_PROPERTIES,
            WRITE_CONTENT,
            UNLOCK,
            READ_ACL,
            WRITE_ACL,
            READ_CURRENT_USER_PRIVILEGE_SET,
            BIND,
            UNBIND,
            ALL,
            CALDAV_READ_FREE_BUSY,
        }

        export namespace WebDAVPrivilegeKind {
            export const $gtype: GObject.GType<WebDAVPrivilegeKind>;
        }

        enum WebDAVPrivilegeKind {
            UNKNOWN,
            ABSTRACT,
            AGGREGATE,
            COMMON,
        }

        export namespace WebDAVPropertyChangeKind {
            export const $gtype: GObject.GType<WebDAVPropertyChangeKind>;
        }

        enum WebDAVPropertyChangeKind {
            SET,
            REMOVE,
        }

        export namespace WebDAVResourceKind {
            export const $gtype: GObject.GType<WebDAVResourceKind>;
        }

        enum WebDAVResourceKind {
            UNKNOWN,
            ADDRESSBOOK,
            CALENDAR,
            PRINCIPAL,
            COLLECTION,
            RESOURCE,
            SUBSCRIBED_ICALENDAR,
            WEBDAV_NOTES,
            SCHEDULE_INBOX,
            SCHEDULE_OUTBOX,
        }

        export namespace XmlHashStatus {
            export const $gtype: GObject.GType<XmlHashStatus>;
        }

        enum XmlHashStatus {
            /**
             * The compared values are the same.
             */
            SAME,
            /**
             * The compared values are different.
             */
            DIFFERENT,
            /**
             * The key to compare against was not found.
             */
            NOT_FOUND,
        }

        export namespace XmlHashType {
            export const $gtype: GObject.GType<XmlHashType>;
        }

        enum XmlHashType {
            /**
             * Use the object UID as the hash key.
             */
            OBJECT_UID,
            /**
             * Use the property name as the hash key.
             */
            PROPERTY,
        }
        /**
         * The "cache-dir" property indicates the backend's local directory for
         * cached data.
         */
        const CLIENT_BACKEND_PROPERTY_CACHE_DIR: string;
        /**
         * The "capabilities" property is a comma-separated list of capabilities
         * supported by the backend.  The preferred method of retrieving and working
         * with capabilities is e_client_get_capabilities() and
         * e_client_check_capability().
         */
        const CLIENT_BACKEND_PROPERTY_CAPABILITIES: string;
        /**
         * The "online" property is "TRUE" when the client is fully opened and
         * online, "FALSE" at all other times.  See also e_client_is_online().
         */
        const CLIENT_BACKEND_PROPERTY_ONLINE: string;
        /**
         * The "opened" property is "TRUE" when the client is fully opened,
         * "FALSE" at all other times.
         */
        const CLIENT_BACKEND_PROPERTY_OPENED: string;
        /**
         * The "opening" property is "TRUE" when the client is in the process of
         * opening, "FALSE" at all other times.
         */
        const CLIENT_BACKEND_PROPERTY_OPENING: string;
        /**
         * The "online" property is "TRUE" if the backend has only read access
         * to its data, "FALSE" if the backend can modify its data.  See also
         * e_client_is_readonly().
         */
        const CLIENT_BACKEND_PROPERTY_READONLY: string;
        /**
         * The current overall revision string, this can be used as
         * a quick check to see if data has changed at all since the
         * last time the revision was observed.
         */
        const CLIENT_BACKEND_PROPERTY_REVISION: string;
        const DEBUG_LOG_DOMAIN_CAL_QUERIES: string;
        const DEBUG_LOG_DOMAIN_GLOG: string;
        const DEBUG_LOG_DOMAIN_USER: string;
        /**
         * The major version number of the Evolution-Data-Server library.  Like
         * eds_major_version(), but from the headers used at application compile
         * time, rather than from the library linked against at application run
         * time.
         */
        const EDS_MAJOR_VERSION: number;
        /**
         * The micro version number of the Evolution-Data-Server library.  Like
         * eds_micro_version(), but from the headers used at application compile
         * time, rather than from the library linked against at application run
         * time.
         */
        const EDS_MICRO_VERSION: number;
        /**
         * The minor version number of the Evolution-Data-Server library.  Like
         * eds_minor_version(), but from the headers used at application compile
         * time, rather than from the library linked against at application run
         * time.
         */
        const EDS_MINOR_VERSION: number;
        /**
         * A special name, which can be used as a GIO name in the call
         * to e_network_monitor_set_gio_name(), which is used to report
         * the network as always reachable.
         */
        const NETWORK_MONITOR_ALWAYS_ONLINE_NAME: string;
        const OAUTH2_SECRET_ACCESS_TOKEN: string;
        const OAUTH2_SECRET_EXPIRES_AFTER: string;
        const OAUTH2_SECRET_REFRESH_TOKEN: string;
        /**
         * A name of the named parameter used for passwords in credentials,
         * used to authenticate users with e_source_invoke_authenticate_sync()
         * and e_source_invoke_authenticate(). The named parameter is optional,
         * different authentication methods can use different names.
         */
        const SOURCE_CREDENTIAL_PASSWORD: string;
        /**
         * A name of the named parameter used for SSL/TLS trust in credentials,
         * used to authenticate users with e_source_invoke_authenticate_sync()
         * and e_source_invoke_authenticate(). The named parameter is optional.
         * Its value corresponds to current ESourceWebdav::ssl-trust property,
         * in case the ESource has that extension available. This is required
         * to have up-to-date data on the server side, when the client side
         * just saved the SSL trust change, which might not be propagated
         * into the server (factory) side quickly enough. The key is added into
         * the credentials in e_source_invoke_authenticate() automatically, if the
         * corresponding ESource contain a WebDAV extension and the key
         * is not part of the credentials already.
         */
        const SOURCE_CREDENTIAL_SSL_TRUST: string;
        /**
         * A name of the named parameter used for usernames in credentials,
         * used to authenticate users with e_source_invoke_authenticate_sync()
         * and e_source_invoke_authenticate(). The named parameter is optional,
         * different authentication methods can use different names.
         */
        const SOURCE_CREDENTIAL_USERNAME: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceAddressBook.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_ADDRESS_BOOK: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceAlarms.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_ALARMS: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceAuthentication.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_AUTHENTICATION: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceAutocomplete.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_AUTOCOMPLETE: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceAutoconfig.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_AUTOCONFIG: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceCalendar.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_CALENDAR: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceCollection.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_COLLECTION: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceContacts.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_CONTACTS_BACKEND: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceGoa.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_GOA: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceLDAP.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_LDAP_BACKEND: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceLocal.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_LOCAL_BACKEND: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailAccount.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_ACCOUNT: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailComposition.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_COMPOSITION: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailIdentity.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_IDENTITY: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailSignature.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_SIGNATURE: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailSubmission.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_SUBMISSION: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMailTransport.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MAIL_TRANSPORT: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMDN.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MDN: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceMemoList.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_MEMO_LIST: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceOffline.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_OFFLINE: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceOpenPGP.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_OPENPGP: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceProxy.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_PROXY: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceRefresh.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_REFRESH: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceResource.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_RESOURCE: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceRevisionGuards.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_REVISION_GUARDS: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceSecurity.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_SECURITY: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceSMIME.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_SMIME: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceTaskList.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_TASK_LIST: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceUoa.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_UOA: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceWeather.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_WEATHER_BACKEND: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceWebdav.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_WEBDAV_BACKEND: string;
        /**
         * Pass this extension name to e_source_get_extension() to access
         * #ESourceWebDAVNotes.  This is also used as a group name in key files.
         */
        const SOURCE_EXTENSION_WEBDAV_NOTES: string;
        /**
         * Extends #GParamFlags to indicate the #GObject property is associated
         * with a key file value.  Use this flag when installing #GObject properties
         * in #ESourceExtension subclasses.
         */
        const SOURCE_PARAM_SETTING: number;
        const WEBDAV_CAPABILITY_ACCESS_CONTROL: string;
        const WEBDAV_CAPABILITY_ADDRESSBOOK: string;
        const WEBDAV_CAPABILITY_BIND: string;
        const WEBDAV_CAPABILITY_CALENDAR_ACCESS: string;
        const WEBDAV_CAPABILITY_CALENDAR_AUTO_SCHEDULE: string;
        const WEBDAV_CAPABILITY_CALENDAR_PROXY: string;
        const WEBDAV_CAPABILITY_CALENDAR_SCHEDULE: string;
        const WEBDAV_CAPABILITY_CLASS_1: string;
        const WEBDAV_CAPABILITY_CLASS_2: string;
        const WEBDAV_CAPABILITY_CLASS_3: string;
        const WEBDAV_CAPABILITY_EXTENDED_MKCOL: string;
        const WEBDAV_COLLATION_ASCII_CASEMAP: string;
        const WEBDAV_COLLATION_ASCII_CASEMAP_SUFFIX: string;
        const WEBDAV_COLLATION_ASCII_NUMERIC: string;
        const WEBDAV_COLLATION_ASCII_NUMERIC_SUFFIX: string;
        const WEBDAV_COLLATION_OCTET: string;
        const WEBDAV_COLLATION_OCTET_SUFFIX: string;
        const WEBDAV_COLLATION_UNICODE_CASEMAP: string;
        const WEBDAV_COLLATION_UNICODE_CASEMAP_SUFFIX: string;
        const WEBDAV_CONTENT_TYPE_CALENDAR: string;
        const WEBDAV_CONTENT_TYPE_VCARD: string;
        const WEBDAV_CONTENT_TYPE_XML: string;
        const WEBDAV_DEPTH_INFINITY: string;
        const WEBDAV_DEPTH_THIS: string;
        const WEBDAV_DEPTH_THIS_AND_CHILDREN: string;
        const WEBDAV_NS_CALDAV: string;
        const WEBDAV_NS_CALENDARSERVER: string;
        const WEBDAV_NS_CARDDAV: string;
        const WEBDAV_NS_DAV: string;
        const WEBDAV_NS_ICAL: string;
        /**
         * Thread safe variant of g_object_bind_property(). See its documentation
         * for more information on arguments and return value.
         * @param source the source #GObject
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         */
        function binding_bind_property(
            source: GObject.Object,
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Thread safe variant of g_object_bind_property_with_closures(). See its
         * documentation for more information on arguments and return value.
         * @param source the source #GObject
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to a #GClosure wrapping the transformation function   from the @source to the @target, or %NULL to use the default
         * @param transform_from a #GClosure wrapping the transformation function   from the @target to the @source, or %NULL to use the default
         * @returns the #GBinding instance representing the   binding between the two #GObject instances. The binding is released   whenever the #GBinding reference count reaches zero.
         */
        function binding_bind_property_full(
            source: GObject.Object,
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.Closure | null,
            transform_from?: GObject.Closure | null,
        ): GObject.Binding;
        /**
         * Transforms an enumeration nickname to its corresponding value.
         * @param binding a #GBinding
         * @param source_value a #GValue of type #G_TYPE_STRING
         * @param target_value a #GValue whose type is derived from #G_TYPE_ENUM
         * @param not_used not used
         * @returns %TRUE if the enum nickname has a corresponding value
         */
        function binding_transform_enum_nick_to_value(
            binding: GObject.Binding,
            source_value: GObject.Value | any,
            target_value: GObject.Value | any,
            not_used?: any | null,
        ): boolean;
        /**
         * Transforms an enumeration value to its corresponding nickname.
         * @param binding a #GBinding
         * @param source_value a #GValue whose type is derived from #G_TYPE_ENUM
         * @param target_value a #GValue of type #G_TYPE_STRING
         * @param not_used not used
         * @returns %TRUE if the enum value has a corresponding nickname
         */
        function binding_transform_enum_value_to_nick(
            binding: GObject.Binding,
            source_value: GObject.Value | any,
            target_value: GObject.Value | any,
            not_used?: any | null,
        ): boolean;
        /**
         * Adds a new category, with its corresponding icon, to the
         * configuration database.
         *
         * This function is thread safe.
         * @param category name of category to add.
         * @param unused DEPRECATED! associated color. DEPRECATED!
         * @param icon_file full path of the icon associated to the category.
         * @param searchable whether the category can be used for searching in the GUI.
         */
        function categories_add(category: string, unused: string, icon_file: string, searchable: boolean): void;
        /**
         * Gets the icon file associated with the given category and returns a copy of
         * it.
         *
         * This function is thread safe.
         * @param category category to retrieve the icon file for.
         * @returns icon file name; free with g_free().
         */
        function categories_dup_icon_file_for(category: string): string;
        /**
         * Returns a sorted list of all the category names currently configured.
         *
         * This function is thread safe.
         * @returns a sorted #GList containing the names of the categories. The list should be freed using g_list_free(), and the names of the categories should be freed using g_free(). Everything can be freed simultaneously using g_list_free_full().
         */
        function categories_dup_list(): string[];
        /**
         * Checks whether the given category is available in the configuration.
         *
         * This function is thread safe.
         * @param category category to be searched.
         * @returns %TRUE if the category is available, %FALSE otherwise.
         */
        function categories_exist(category: string): boolean;
        /**
         * Gets the icon file associated with the given category.
         *
         * This function is mostly thread safe, but as the icon file name is not
         * copied, it may be freed by another thread after being returned by this
         * function. Use e_categories_dup_icon_file_for() instead.
         * @param category category to retrieve the icon file for.
         * @returns icon file name.
         */
        function categories_get_icon_file_for(category: string): string;
        /**
         * Returns a sorted list of all the category names currently configured.
         *
         * This function is mostly thread safe, but as the category names are not
         * copied, they may be freed by another thread after being returned by this
         * function. Use e_categories_dup_list() instead.
         * @returns a sorted GList containing the names of the categories. The list should be freed using g_list_free(), but the names of the categories should not be touched at all, they are internal strings.
         */
        function categories_get_list(): string[];
        /**
         * Gets whether the given calendar is to be used for searches in the GUI.
         *
         * This function is thread safe.
         *
         * Return value; %TRUE% if the category is searchable, %FALSE% if not.
         * @param category category name.
         */
        function categories_is_searchable(category: string): boolean;
        /**
         * Registers callback to be called on change of any category.
         * Pair listener and user_data is used to distinguish between listeners.
         * Listeners can be unregistered with `e_categories_unregister_change_listener`.
         *
         * This function is thread safe.
         * @param listener the callback to be called on any category change.
         */
        function categories_register_change_listener(listener: GObject.Callback): void;
        /**
         * Removes the given category from the configuration.
         *
         * This function is thread safe.
         * @param category category to be removed.
         */
        function categories_remove(category: string): void;
        /**
         * Sets the icon file associated with the given category.
         *
         * This function is thread safe.
         * @param category category to set the icon file for.
         * @param icon_file icon file.
         */
        function categories_set_icon_file_for(category: string, icon_file: string): void;
        /**
         * Removes previously registered callback from the list of listeners on changes.
         * If it was not registered, then does nothing.
         *
         * This function is thread safe.
         * @param listener Callback to be removed.
         */
        function categories_unregister_change_listener(listener: GObject.Callback): void;
        function collator_error_quark(): GLib.Quark;
        /**
         * Returns the value set by e_data_server_util_set_dbus_call_timeout().
         * @returns the D-Bus call timeout in milliseconds
         */
        function data_server_util_get_dbus_call_timeout(): number;
        /**
         * Sets default timeout, in milliseconds, for calls of g_dbus_proxy_call()
         * family functions.
         *
         * -1 means the default value as set by D-Bus itself.
         * G_MAXINT means no timeout at all.
         *
         * Default value is set also by configure option --with-dbus-call-timeout=ms
         * and -1 is used when not set.
         * @param timeout_msec default timeout for D-Bus calls in miliseconds
         */
        function data_server_util_set_dbus_call_timeout(timeout_msec: number): void;
        function debug_log_clear(): void;
        /**
         * Disables all domains from the `domains` array.
         * @param domains an array of domains to disable
         */
        function debug_log_disable_domains(domains: string[]): void;
        /**
         * Saves current log information to the given `filename`.
         * @param filename a filename to save logged information to
         * @returns whether succeeded
         */
        function debug_log_dump(filename: string): boolean;
        /**
         * Saves current log information to a file "e-debug-log-YYYY-MM-DD-HH-mm-ss.txt"
         * in the user's HOME directory.
         * @returns whether succeeded
         */
        function debug_log_dump_to_dated_file(): boolean;
        /**
         * Enables all domains from the `domains` array.
         * @param domains an array of domains to enable
         */
        function debug_log_enable_domains(domains: string[]): void;
        function debug_log_get_max_lines(): number;
        function debug_log_is_domain_enabled(domain: string): boolean;
        /**
         * Loads configuration for the logging from the given `filename`.
         * @param filename a configuration file name
         * @returns whether succeeded
         */
        function debug_log_load_configuration(filename: string): boolean;
        /**
         * Limits how many lines the log can have.
         * @param num_lines number of lines
         */
        function debug_log_set_max_lines(num_lines: number): void;
        /**
         * Checks that the Evolution-Data-Server library in use is compatible with
         * the given version.  Generally you would pass in the constants
         * #EDS_MAJOR_VERSION, #EDS_MINOR_VERSION, #EDS_MICRO_VERSION as the three
         * arguments to this function.  That produces a check that the library in
         * use is compatible with the version of Evolution-Data-Server the
         * application or module was compiled against.
         * @param required_major the required major version
         * @param required_minor the required minor version
         * @param required_micro the required micro version
         * @returns %NULL if the Evolution-Data-Server library is compatible with the given version, or a string describing the version mismatch.  The returned string is owned by libedataserver and must not be modified or freed.
         */
        function eds_check_version(
            required_major: number,
            required_minor: number,
            required_micro: number,
        ): string | null;
        /**
         * Fetches the appropriate enumeration value for `string` in the given
         * enum type `type` and stores the result in `enum_value`
         * @param enum_type The enum type
         * @param string The string containing the enum value or nick
         * @param enum_value A return location to store the result
         * @returns %TRUE if the string was a valid name or nick        for the given @type, %FALSE if the conversion failed.
         */
        function enum_from_string(enum_type: GObject.GType, string: string, enum_value: number): boolean;
        /**
         * Converts an enum value to a string using strings from the GType system.
         * @param enum_type An enum type
         * @param enum_value The enum value to convert
         * @returns the string representing @eval
         */
        function enum_to_string(enum_type: GObject.GType, enum_value: number): string;
        /**
         * Asynchronously deletes `file`.  If `file` is a directory, its contents
         * are deleted recursively before `file` itself is deleted.  The recursive
         * delete operation will stop on the first error.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled
         * by triggering the cancellable object before the operation finishes.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_file_recursive_delete_finish() to get the result of the operation.
         * @param file a #GFile to delete
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         */
        function file_recursive_delete(
            file: Gio.File,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously deletes `file`.  If `file` is a directory, its contents
         * are deleted recursively before `file` itself is deleted.  The recursive
         * delete operation will stop on the first error.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled
         * by triggering the cancellable object before the operation finishes.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_file_recursive_delete_finish() to get the result of the operation.
         * @param file a #GFile to delete
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        function file_recursive_delete(
            file: Gio.File,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Gio.File> | null,
        ): void;
        /**
         * Asynchronously deletes `file`.  If `file` is a directory, its contents
         * are deleted recursively before `file` itself is deleted.  The recursive
         * delete operation will stop on the first error.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled
         * by triggering the cancellable object before the operation finishes.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_file_recursive_delete_finish() to get the result of the operation.
         * @param file a #GFile to delete
         * @param io_priority the I/O priority of the request
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        function file_recursive_delete(
            file: Gio.File,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gio.File> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes the operation started with e_file_recursive_delete().
         *
         * If the operation was cancelled, the error #G_IO_ERROR_CANCELLED will be
         * returned.
         * @param file a #GFile to delete
         * @param result a #GAsyncResult
         * @returns %TRUE if the file was deleted, %FALSE otherwise
         */
        function file_recursive_delete_finish(file: Gio.File, result: Gio.AsyncResult): boolean;
        /**
         * Deletes `file`.  If `file` is a directory, its contents are deleted
         * recursively before `file` itself is deleted.  The recursive delete
         * operation will stop on the first error.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled
         * by triggering the cancellable object from another thread.  If the
         * operation was cancelled, the error #G_IO_ERROR_CANCELLED will be
         * returned.
         * @param file a #GFile to delete
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE if the file was deleted, %FALSE otherwise
         */
        function file_recursive_delete_sync(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
        function filename_make_safe(string: string): void;
        /**
         * Creates a local path constructed from `basepath` / `fileprefix` + "-" + `filename,`
         * and makes sure the path `basepath` exists. If creation of
         * the path fails, then NULL is returned.
         * @param basepath base path of a file name; this is left unchanged
         * @param fileprefix prefix for the filename; this is encoded
         * @param filename file name to use; this is encoded; can be %NULL
         * @param fileindex used when @filename is NULL, then the filename        is generated as "file" + fileindex
         * @returns Full local path like g_build_filename() except that @fileprefix and @filename are encoded to create a proper file elements for a file system. Free returned pointer with g_free().
         */
        function filename_mkdir_encoded(
            basepath: string,
            fileprefix: string,
            filename: string | null,
            fileindex: number,
        ): string | null;
        /**
         * Converts the `free_form_exp` to an S-Expression using the S-Expression
         * builders defined in the `symbols`. The `symbols` should have one symbol
         * with an empty string as its name, which is used for words which do not
         * have a symbol name prefix.
         *
         * The `symbols` is a NULL-terminated array of known symbols. The NULL should
         * be set for the symbol's name.
         * @param free_form_exp a Free Form Expression
         * @param symbols known symbols, which can be used in the Free From Expression
         * @returns converted @free_form_exp into S-Expression, %NULL on error.    Free the returned string with a g_free(), when done with it.
         */
        function free_form_exp_to_sexp(free_form_exp: string, symbols: FreeFormExpSymbol): string | null;
        /**
         * Adds a Task:completed property `value` into the `builder,` which
         * should have started an object member.
         *
         * When the `value` is 0, then adds a NULL-object, to indicate
         * removal of the property.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::completed property value, as Unix time
         */
        function gdata_task_add_completed(builder: Json.Builder, value: number): void;
        /**
         * Adds a Task::due property `value` into the `builder,` which
         * should have started an object member.
         *
         * When the `value` is 0, then adds a NULL-object, to indicate
         * removal of the property.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::due property value, as Unix time
         */
        function gdata_task_add_due(builder: Json.Builder, value: number): void;
        /**
         * Adds a Task::id property `value` into the `builder,` which
         * should have started an object member.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::id property value
         */
        function gdata_task_add_id(builder: Json.Builder, value: string): void;
        /**
         * Adds a Task::notes property `value` into the `builder,` which
         * should have started an object member.
         *
         * When the `value` is %NULL, then adds a NULL-object, to indicate removal
         * of the property.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::notes property value
         */
        function gdata_task_add_notes(builder: Json.Builder, value?: string | null): void;
        /**
         * Adds a Task::status property `value` into the `builder,` which
         * should have started an object member.
         *
         * When the `value` is %E_GDATA_TASK_STATUS_UNKNOWN, then adds a NULL-object,
         * to indicate removal of the property.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::status property value
         */
        function gdata_task_add_status(builder: Json.Builder, value: GDataTaskStatus | null): void;
        /**
         * Adds a Task::title property `value` into the `builder,` which
         * should have started an object member.
         * @param builder a #JsonBuilder with a started object member
         * @param value a Task::title property value
         */
        function gdata_task_add_title(builder: Json.Builder, value: string): void;
        /**
         * Returns Task::completed property, as Unix time.
         * @param task a GData Task
         * @returns Task::completed property or 0, when not found
         */
        function gdata_task_get_completed(task: Json.Object): number;
        /**
         * Returns Task::deleted property, as Unix time.
         * @param task a GData Task
         * @returns Task::deleted property or %FALSE, when not found
         */
        function gdata_task_get_deleted(task: Json.Object): boolean;
        /**
         * Returns Task::due property, as Unix time.
         * @param task a GData Task
         * @returns Task::due property or 0, when not found
         */
        function gdata_task_get_due(task: Json.Object): number;
        /**
         * Returns Task::etag property.
         * @param task a GData Task
         * @returns Task::etag property or %NULL, when not found
         */
        function gdata_task_get_etag(task: Json.Object): string | null;
        /**
         * Returns Task::hidden property, as Unix time.
         * @param task a GData Task
         * @returns Task::hidden property or %FALSE, when not found
         */
        function gdata_task_get_hidden(task: Json.Object): boolean;
        /**
         * Returns Task::id property.
         * @param task a GData Task
         * @returns Task::id property or %NULL, when not found
         */
        function gdata_task_get_id(task: Json.Object): string | null;
        /**
         * Returns Task::notes property.
         * @param task a GData Task
         * @returns Task::notes property or %NULL, when not found
         */
        function gdata_task_get_notes(task: Json.Object): string | null;
        /**
         * Returns Task::parent property.
         * @param task a GData Task
         * @returns Task::parent property or %NULL, when not found
         */
        function gdata_task_get_parent(task: Json.Object): string | null;
        /**
         * Returns Task::position property.
         * @param task a GData Task
         * @returns Task::position property or %NULL, when not found
         */
        function gdata_task_get_position(task: Json.Object): string | null;
        /**
         * Returns Task::selfLink property.
         * @param task a GData TaskList
         * @returns Task::selfLink property or %NULL, when not found
         */
        function gdata_task_get_self_link(task: Json.Object): string | null;
        /**
         * Returns Task::status property.
         * @param task a GData Task
         * @returns Task::status property as #EGDataTaskStatus or %E_GDATA_TASK_STATUS_UNKNOWN,    when not found or has set an unknown value.
         */
        function gdata_task_get_status(task: Json.Object): GDataTaskStatus;
        /**
         * Returns Task::title property.
         * @param task a GData Task
         * @returns Task::title property or %NULL, when not found
         */
        function gdata_task_get_title(task: Json.Object): string | null;
        /**
         * Returns Task::updated property, as Unix time.
         * @param task a GData Task
         * @returns Task::updated property or 0, when not found
         */
        function gdata_task_get_updated(task: Json.Object): number;
        /**
         * Adds a TaskList::id property `value` into the `builder,` which
         * should have started an object member.
         * @param builder a #JsonBuilder with a started object member
         * @param value a TaskList::id property value
         */
        function gdata_tasklist_add_id(builder: Json.Builder, value: string): void;
        /**
         * Adds a TaskList::title property `value` into the `builder,` which
         * should have started an object member.
         * @param builder a #JsonBuilder with a started object member
         * @param value a TaskList::title property value
         */
        function gdata_tasklist_add_title(builder: Json.Builder, value: string): void;
        /**
         * Returns TaskList::etag property.
         * @param tasklist a GData TaskList
         * @returns TaskList::etag property or %NULL, when not found
         */
        function gdata_tasklist_get_etag(tasklist: Json.Object): string | null;
        /**
         * Returns TaskList::id property.
         * @param tasklist a GData TaskList
         * @returns TaskList::id property or %NULL, when not found
         */
        function gdata_tasklist_get_id(tasklist: Json.Object): string | null;
        /**
         * Returns TaskList::selfLink property.
         * @param tasklist a GData TaskList
         * @returns TaskList::selfLink property or %NULL, when not found
         */
        function gdata_tasklist_get_self_link(tasklist: Json.Object): string | null;
        /**
         * Returns TaskList::title property.
         * @param tasklist a GData TaskList
         * @returns TaskList::title property or %NULL, when not found
         */
        function gdata_tasklist_get_title(tasklist: Json.Object): string | null;
        /**
         * Returns TaskList::updated property, as Unix time.
         * @param tasklist a GData TaskList
         * @returns TaskList::updated property or 0, when not found
         */
        function gdata_tasklist_get_updated(tasklist: Json.Object): number;
        /**
         * Returns a base directory in which to store user-specific,
         * non-essential cached data for Evolution or Evolution-Data-Server.
         *
         * The returned string is owned by libedataserver and must not be
         * modified or freed.
         * @returns base directory for user-specific, non-essential data
         */
        function get_user_cache_dir(): string;
        /**
         * Returns a base directory in which to store user-specific configuration
         * information for Evolution or Evolution-Data-Server.
         *
         * The returned string is owned by libedataserver and must not be
         * modified or freed.
         * @returns base directory for user-specific configuration information
         */
        function get_user_config_dir(): string;
        /**
         * Returns a base directory in which to store user-specific data for
         * Evolution or Evolution-Data-Server.
         *
         * The returned string is owned by libedataserver and must not be
         * modified or freed.
         * @returns base directory for user-specific data
         */
        function get_user_data_dir(): string;
        /**
         * Converts the calendar time time representation `tt` to a broken-down
         * time representation, store in `tm,` and provides the offset in
         * seconds from UTC time, stored in `offset`.
         * @param tt The #time_t to convert.
         * @param tm The #tm to store the result in.
         * @param offset The #int to store the offset in.
         */
        function localtime_with_offset(tt: never, tm: any | null, offset: number): void;
        /**
         * Like mktime(3), but assumes UTC instead of local timezone.
         * @param tm The #tm to convert to a calendar time representation.
         * @returns The calendar time representation of @tm.
         */
        function mktime_utc(tm?: any | null): never;
        /**
         * Processes the `compile_value` and returns the result, which is stored
         * into the `out_glob_buff`. The `out_glob_buff` should be large enough to hold
         * the processed value and it should be a global memory buffer (usually
         * statically allocated) initialized to 0, which is used to short-circuit
         * the call, because the processing is done only if the first element
         * of the `out_glob_buff` is 0, in all other cases the function
         * immediately returns the `out_glob_buff`.
         * @param compile_value a value provided in the compile time
         * @param out_glob_buff_size size of the @out_glob_buff
         * @returns processed @compile_value, saved into *out_glob_buff
         */
        function oauth2_service_util_compile_value(compile_value: string, out_glob_buff_size: number): [string, string];
        /**
         * Extracts either an authorization code from a 'code' argument of the `in_uri,`
         * or an error code from an 'error' argument of the `in_uri` and an error description
         * from the 'error_description' argument of the `in_uri`.
         * @param in_uri a URI returned from the server
         * @returns %TRUE, when any of the non-NULL out arguments had been populated.
         */
        function oauth2_service_util_extract_from_uri(in_uri: string): [boolean, string, string, string];
        /**
         * Sets `value` for `name` to `form`. The `form` should be
         * the one used in e_oauth2_service_prepare_authentication_uri_query(),
         * e_oauth2_service_prepare_get_token_form() or
         * e_oauth2_service_prepare_refresh_token_form().
         *
         * If the `value` is %NULL, then the property named `name` is removed
         * from the `form` instead.
         * @param form a #GHashTable
         * @param name a property name
         * @param value a property value
         */
        function oauth2_service_util_set_to_form(
            form: { [key: string]: any } | GLib.HashTable<string, string>,
            name: string,
            value?: string | null,
        ): void;
        /**
         * Takes ownership of `value` and sets it for `name` to `form`. The `value`
         * will be freed with g_free(), when no longer needed. The `form` should be
         * the one used in e_oauth2_service_prepare_authentication_uri_query(),
         * e_oauth2_service_prepare_get_token_form() or
         * e_oauth2_service_prepare_refresh_token_form().
         *
         * If the `value` is %NULL, then the property named `name` is removed
         * from the `form` instead.
         * @param form a #GHashTable
         * @param name a property name
         * @param value a property value
         */
        function oauth2_service_util_take_to_form(
            form: { [key: string]: any } | GLib.HashTable<string, string>,
            name: string,
            value?: string | null,
        ): void;
        /**
         * Transfers the contents of `src_queue` to the tail of `dst_queue`.
         * When the operation is complete, `src_queue` will be empty.
         * @param src_queue a source #GQueue
         * @param dst_queue a destination #GQueue
         */
        function queue_transfer(src_queue: GLib.Queue, dst_queue: GLib.Queue): void;
        /**
         * Deletes the secret for `uid` from either the default keyring or
         * session keyring.
         *
         * Note the boolean return value indicates whether the delete operation
         * itself completed successfully, not whether the secret was found and
         * deleted. If no such secret was found, the function will still return
         * %TRUE. If an error occurs, the function sets `error` and returns %FALSE.
         * @param uid a unique identifier of the secret
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        function secret_store_delete_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Looks up a secret for the `uid`. Both the default and session keyrings
         * are queried.
         *
         * Note the boolean return value indicates whether the lookup operation
         * itself completed successfully, not whether the secret was found. If
         * no secret was found, the function will set `out_secret` to %NULL,
         * but still return %TRUE. If an error occurs, the function sets `error`
         * and returns %FALSE.
         * @param uid a unique identifier of the secret
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        function secret_store_lookup_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Stores the `secret` for the `uid`.
         *
         * If `permanently` is %TRUE, the secret is stored in the default keyring.
         * Otherwise the secret is stored in the memory-only session keyring. If
         * an error occurs, the function sets `error` and returns %FALSE.
         * @param uid a unique identifier of the secret
         * @param secret the secret to store
         * @param label human readable description of the secret
         * @param permanently store permanently or just for the session
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        function secret_store_store_sync(
            uid: string,
            secret: string,
            label: string,
            permanently: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Sets up automatic SSL certificate trust handling for `soup_message` using the trust
         * data stored in `source'`s WebDAV extension. If `soup_message` is about to be sent on
         * an SSL connection with an invalid certificate, the code checks if the WebDAV
         * extension already has a trust response for that certificate and verifies it
         * with e_source_webdav_verify_ssl_trust(). If the verification fails, then
         * the `soup_message` send also fails.
         *
         * This works by connecting to the "network-event" signal on `soup_message` and
         * connecting to the "accept-certificate" signal on each #GTlsConnection for
         * which `soup_message` reports a #G_SOCKET_CLIENT_TLS_HANDSHAKING event. These
         * handlers are torn down automatically when `soup_message` is disposed. This process
         * is not thread-safe; it is sufficient for safety if all use of `soup_message'`s
         * session and the disposal of `soup_message` occur in the same thread.
         * @param soup_message a #SoupMessage about to be sent to the source
         * @param source an #ESource that uses WebDAV
         */
        function soup_ssl_trust_connect(soup_message: Soup.Message, source: Source): void;
        /**
         * This function is a wrapper around the strftime (3) function, which
         * converts the &percnt;l and &percnt;k (12h and 24h) format variables
         * if necessary.
         * @param string The string array to store the result in.
         * @param max The size of array @s.
         * @param fmt The formatting to use on @tm.
         * @param tm The time value to format.
         * @returns The number of characters placed in @s.
         */
        function strftime(string: string, max: number, fmt: string, tm?: any | null): number;
        /**
         * Creates a string representation of the time value `date_tm` and
         * stores it in `buffer`.  `buffer_size` should be at least 64 to be
         * safe. If `show_midnight` is %FALSE, and the time is midnight, then
         * only the date is stored in `buffer`. If `show_zero_seconds` is
         * %FALSE, then if the time has zero seconds only the hour and minute
         * of the time are stored in `buffer`.
         * @param date_tm The #tm to convert to a string.
         * @param use_24_hour_format A #gboolean.
         * @param show_midnight A #gboolean.
         * @param show_zero_seconds A #gboolean.
         * @param buffer A #char buffer to store the time string in.
         * @param buffer_size The length of @buffer.
         */
        function time_format_date_and_time(
            date_tm: any | null,
            use_24_hour_format: boolean,
            show_midnight: boolean,
            show_zero_seconds: boolean,
            buffer: string,
            buffer_size: number,
        ): void;
        /**
         * Creates a string representation of a time value in `date_tm` and
         * stores it in `buffer`. `buffer_size` should be at least 64.
         * @param date_tm The #tm to convert to a string.
         * @param use_24_hour_format A #gboolean.
         * @param show_zero_seconds A #gboolean.
         * @param buffer The #char buffer to store the result in.
         * @param buffer_size The length of @buffer.
         */
        function time_format_time(
            date_tm: any | null,
            use_24_hour_format: boolean,
            show_zero_seconds: boolean,
            buffer: string,
            buffer_size: number,
        ): void;
        /**
         * Retrieves a date format string with a 4-digit year (D_FMT on systems with
         * nl_langinfo() available). In case the current locale doesn't support 4-digit
         * year, the function returns format as specified by the locale.
         *
         * Free the returned string with g_free().
         * @returns a newly-allocated date format string
         */
        function time_get_d_fmt_with_4digit_year(): string;
        /**
         * Takes in a date string entered by the user and tries to convert it to
         * a struct #tm.
         * @param value A date string.
         * @param result Return value for the parsed date.
         * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
         */
        function time_parse_date(value: string, result?: any | null): TimeParseStatus;
        /**
         * Parses a string `value` containing a date and a time and stores the
         * result in `result`. The date in `value` is expected to be in a format
         * like "Wed 3/13/00 14:20:00", though gettext() is used to support the
         * appropriate local formats. There is also some leniency on the
         * format of the string, e.g. the weekday can be skipped or 12-hour
         * formats with am/pm can be used.
         * @param value the string to parse a date and time from
         * @param result a #tm to store the result in
         * @returns E_TIME_PARSE_OK if the string was successfully parsed,          E_TIME_PARSE_NONE if the string was empty, or          E_TIME_PARSE_INVALID if the string could not be parsed.
         */
        function time_parse_date_and_time(value: string, result?: any | null): TimeParseStatus;
        /**
         * Parses a string `value` containing a date and a time and stores the
         * result in `result`. The date in `value` is expected to be in a format
         * like "Wed 3/13/00 14:20:00", though gettext() is used to support the
         * appropriate local formats. There is also some leniency on the
         * format of the string, e.g. the weekday can be skipped or 12-hour
         * formats with am/pm can be used.
         * @param value The string to parse a date and time from.
         * @param result A #tm to store the result in.
         * @param two_digit_year set to TRUE, is parsing with two-digit year, else FALSE,    but only when not NULL.
         * @returns E_TIME_PARSE_OK if the string was successfully parsed,          E_TIME_PARSE_NONE if the string was empty, or          E_TIME_PARSE_INVALID if the string could not be parsed.
         */
        function time_parse_date_and_time_ex(
            value: string,
            result: any | null,
            two_digit_year: boolean,
        ): TimeParseStatus;
        /**
         * Takes in a date string entered by the user and tries to convert it to
         * a struct #tm.
         * @param value A date string.
         * @param result Return value for the parsed date.
         * @param two_digit_year set to TRUE, is parsing with two-digit year, else FALSE,    but only when not NULL.
         * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
         */
        function time_parse_date_ex(value: string, result: any | null, two_digit_year: boolean): TimeParseStatus;
        /**
         * Parses `value` using the `format` saving the parsed date into `out_result`.
         * Optionally sets whether there had been used two-digit year.
         * @param value a date string
         * @param format a strftime() format string to use to parse the @value
         * @returns An #ETimeParseStatus result code indicating whether    the @value was an empty string, a valid date, or an invalid date.
         */
        function time_parse_date_format(value: string, format: string): [TimeParseStatus, any, boolean];
        /**
         * Parses `value,` a string containing a time. `value` is expected to be
         * in a format like "14:20:00". gettext() is used to
         * support the appropriate local formats and slightly
         * different formats, such as 12-hour formats with am/pm,
         * are accepted as well.
         * @param value The string to parse a time from.
         * @param result A #tm to store the result in.
         * @returns An #ETimeParseStatus result code indicating whether @value was an empty string, a valid date, or an invalid date.
         */
        function time_parse_time(value: string, result?: any | null): TimeParseStatus;
        /**
         * Similar to g_timeout_add_seconds_full(), but also names the #GSource as
         * `name`.
         *
         * You might find e_named_timeout_add_seconds() or
         * e_named_timeout_add_seconds_full() more convenient.  Those macros name
         * the #GSource implicitly.
         * @param priority the priority of the timeout source, typically in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH
         * @param interval the time between calls to the function, in seconds
         * @param name debug name for the source
         * @param _function function to call
         * @param notify function to call when the timeout is removed,          or %NULL
         * @returns the ID (greater than 0) of the event source
         */
        function timeout_add_seconds_with_name(
            priority: number,
            interval: number,
            name: string | null,
            _function: GLib.SourceFunc,
            notify?: GLib.DestroyNotify | null,
        ): number;
        /**
         * Similar to g_timeout_add_full(), but also names the #GSource as `name`.
         *
         * You might find e_named_timeout_add() or e_named_timeout_add_full() more
         * convenient.  Those macros name the #GSource implicitly.
         * @param priority the priority of the timeout source, typically in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH
         * @param interval the time between calls to the function, in milliseconds            (1/1000ths of a second)
         * @param name debug name for the source
         * @param _function function to call
         * @param notify function to call when the timeout is removed,          or %NULL
         * @returns the ID (greather than 0) of the event source
         */
        function timeout_add_with_name(
            priority: number,
            interval: number,
            name: string | null,
            _function: GLib.SourceFunc,
            notify?: GLib.DestroyNotify | null,
        ): number;
        /**
         * Calls `func` for all instantiable subtypes of `parent_type`.
         *
         * This is often useful for extending functionality by way of #EModule.
         * A module may register a subtype of `parent_type` in its e_module_load()
         * function.  Then later on the application will call e_type_traverse()
         * to instantiate all registered subtypes of `parent_type`.
         * @param parent_type the root #GType to traverse from
         * @param func the function to call for each visited #GType
         */
        function type_traverse(parent_type: GObject.GType, func: TypeFunc): void;
        /**
         * Generate a new unique string for use e.g. in account lists.
         * @returns The newly generated UID.  The caller should free the string when it's done with it.
         */
        function uid_new(): string;
        /**
         * The UTF-8 equivalent of e_strftime ().
         * @param string The string array to store the result in.
         * @param max The size of array @s.
         * @param fmt The formatting to use on @tm.
         * @param tm The time value to format.
         * @returns The number of characters placed in @s.
         */
        function utf8_strftime(string: string, max: number, fmt: string, tm?: any | null): number;
        /**
         * Checks whether the `collection_source` can be used as a credential source
         * for the `child_source`. The relationship is not tested in the function.
         * When the `collection_source` is %NULL, then it simply returns %FALSE.
         * @param collection_source a collection #ESource, or %NULL
         * @param child_source a children of @collection_source
         * @returns whether @collection_source can be used as a credential source    for @child_source, that is, whether they share credentials.
         */
        function util_can_use_collection_as_credential_source(
            collection_source?: any | null,
            child_source?: any | null,
        ): boolean;
        /**
         * Changes component `component` in the `inout_uri` to value `value`.
         * As the #GUri cannot be modified the `inout_uri` points to a new #GUri
         * at the end of the call and the previous structure is unreffed.
         *
         * See: e_util_change_uri_port()
         * @param inout_uri a #GUri
         * @param component a string #SoupURIComponent to change
         * @param value a value to set, or %NULL to unset
         */
        function util_change_uri_component(
            inout_uri: GLib.Uri,
            component: Soup.URIComponent | null,
            value?: string | null,
        ): GLib.Uri;
        /**
         * Changes the port in the `inout_uri` to value `port`.
         * As the #GUri cannot be modified the `inout_uri` points to a new #GUri
         * at the end of the call and the previous structure is unreffed.
         *
         * See: e_util_change_uri_component()
         * @param inout_uri a #GUri
         * @param port the port number to set
         */
        function util_change_uri_port(inout_uri: GLib.Uri, port: number): GLib.Uri;
        /**
         * Copies #GSList of #GObject<!-- -->s at the end of `copy_to`.
         * @param copy_to Where to copy; can be %NULL
         * @param objects #GSList of #GObject<!-- -->s to be copied
         * @returns New head of @copy_to. Returned pointer can be freed with e_util_free_object_slist().
         */
        function util_copy_object_slist(copy_to: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[];
        /**
         * Copies #GSList of strings at the end of `copy_to`.
         * @param copy_to Where to copy; can be %NULL
         * @param strings #GSList of strings to be copied
         * @returns New head of @copy_to. Returned pointer can be freed with e_util_free_string_slist().
         */
        function util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[];
        /**
         * If `str` is a valid UTF-8 string, the function returns `str` and does
         * not set `gdbus_str`.
         *
         * If `str` is an invalid UTF-8 string, the function calls
         * e_util_utf8_make_valid() and points `gdbus_str` to the newly-allocated,
         * valid UTF-8 string, and also returns it.  The caller should free the
         * string pointed to by `gdbus_str` with g_free().
         *
         * If `str` is %NULL, the function returns an empty string and does not
         * set `gdbus_str`.
         *
         * Admittedly, the function semantics are a little awkward.  The example
         * below illustrates the easiest way to cope with the `gdbus_str` argument:
         *
         *
         * ```
         *     const gchar *trusted_utf8;
         *     gchar *allocated = NULL;
         *
         *     trusted_utf8 = e_util_ensure_gdbus_string (untrusted_utf8, &allocated);
         *
         *     Do stuff with trusted_utf8, then clear it.
         *
         *     trusted_utf8 = NULL;
         *
         *     g_free (allocated);
         *     allocated = NULL;
         * ```
         *
         * @param str a possibly invalid UTF-8 string, or %NULL
         * @param gdbus_str return location for the corrected string
         * @returns a valid UTF-8 string
         */
        function util_ensure_gdbus_string(str: string | null, gdbus_str: string): string;
        /**
         * Calls g_object_unref() on each member of `objects` if non-%NULL and then frees
         * also `objects` itself.
         * @param objects a #GSList of nullable #GObject<!-- -->s
         */
        function util_free_nullable_object_slist(objects: GObject.Object[]): void;
        /**
         * Calls g_object_unref() on each member of `objects` and then frees
         * also `objects` itself.
         * @param objects a #GSList of #GObject<!-- -->s
         */
        function util_free_object_slist(objects: GObject.Object[]): void;
        /**
         * Frees memory previously allocated by e_util_strv_to_slist().
         * @param strings a #GSList of strings (gchar *)
         */
        function util_free_string_slist(strings: string[]): void;
        /**
         * Generates a unique identificator, which can be used as part of
         * the Message-ID header, or iCalendar component UID, or vCard UID.
         * The resulting string doesn't contain any host name, it's
         * a hexa-decimal string with no particular meaning.
         *
         * Free the returned string with g_free(), when no longer needed.
         * @returns generated unique identificator as    a newly allocated string
         */
        function util_generate_uid(): string;
        /**
         * The `main_path` is a directory, which will be always used. It
         * should have as its prefix the `replace_prefix,` otherwise
         * the function returns only the `main_path` in the paths array.
         *
         * When there's exported an environment variable EDS_EXTRA_PREFIXES,
         * it is used as a list of alternative prefixes where to look for
         * the `main_path` (rest after the `replace_prefix)`.
         *
         * When the `with_modules_dir` is %TRUE, there's also added
         * g_get_user_data_dir() + "evolution/modules/", aka
         * ~/.local/share/evolution/modules/, into the resulting array.
         * @param main_path the main path to work with
         * @param replace_prefix path prefix to replace
         * @param with_modules_dir whether to add also the modules directory
         * @returns a %GPtrArray    with paths to use, including the @main_path. Free it with    g_ptr_array_unref(), when no longer needed.
         */
        function util_get_directory_variants(
            main_path: string,
            replace_prefix: string,
            with_modules_dir: boolean,
        ): string[];
        /**
         * Constructs a full name of the `source` with all of its parents
         * of the form: "&lt;account-name&gt; : &lt;parent&gt;/&lt;source&gt;" where
         * the "&lt;parent&gt;/" part can be repeated zero or more times, depending
         * on the deep level of the `source`.
         * @param registry an #ESourceRegistry
         * @param source an #ESource
         * @returns Full name of the @source as a newly allocated    string, which should be freed with g_free() when done with it. Since 3.18
         */
        function util_get_source_full_name(registry?: any | null, source?: any | null): string;
        /**
         * Returns a 64-bit integer hopefully uniquely identifying the
         * thread. To be used in debugging output and logging only.
         * The returned value is just a cast of a pointer to the 64-bit integer.
         *
         * There is no guarantee that calling e_util_gthread_id () on one
         * thread first and later after that thread has dies on another won't
         * return the same integer.
         *
         * On Linux and Win32, known to really return a unique id for each
         * thread existing at a certain time. No guarantee that ids won't be
         * reused after a thread has terminated, though.
         * @param thread A #GThread pointer
         * @returns A 64-bit integer.
         */
        function util_gthread_id(thread: GLib.Thread): number;
        /**
         * Guesses whether the `source` is read only. This is done on some heuristic
         * like the source backend, where some are known to be read only. That this
         * function returns %FALSE does not necessarily mean the source is writable,
         * it only means the source is not well-known read-only source. To know
         * for sure open the corresponding #EClient, if the `source` references such,
         * and use e_client_is_readonly().
         * @param source an #ESource
         * @returns %TRUE, when the @source is well-known read-only source, or %FALSE otherwise
         */
        function util_guess_source_is_readonly(source?: any | null): boolean;
        /**
         * Check whether the hostname `host` is equal to or a subdomain of `domain`.
         * Both `host` and `domain` are UTF-8 strings and can be IDNs (which will be
         * punycode-encoded for comparison).
         * @param host The hostname to check.
         * @param domain The domain name.
         * @returns %TRUE if @host is a subdomain of @domain (or the same domain).          %FALSE if not, or if either argument is null or in some way          invalid as a domain/hostname.
         */
        function util_host_is_in_domain(host?: string | null, domain?: string | null): boolean;
        /**
         * Checks whether the `identity_source` can be used for sending, which means
         * whether it has configures send mail source.
         * @param registry an #ESourceRegistry
         * @param identity_source an #ESource with mail identity extension
         * @returns Whether @identity_source can be used to send messages
         */
        function util_identity_can_send(registry?: any | null, identity_source?: any | null): boolean;
        /**
         * Calls g_free() on `string,` but before it rewrites its content with zeros.
         * This is suitable to free strings with passwords.
         * @param str a string to free
         */
        function util_safe_free_string(str: string): void;
        /**
         * Convert list of strings into NULL-terminates array of strings.
         * @param strings a #GSList of strings (const gchar *)
         * @returns Newly allocated %NULL-terminated array of strings. Returned pointer should be freed with g_strfreev(). Note: Pair function for this is e_util_strv_to_slist().
         */
        function util_slist_to_strv(strings: string[]): string[];
        /**
         * Compares two #ESource-s in a way suitable for user interface.
         * It can be used as a #GCompareFunc.
         *
         * This is also used by e_source_registry_build_display_tree().
         * @param source_a the first #ESource
         * @param source_b the second #ESource
         * @returns an integer less than, equal to, or greater than zero,    if @source_a is <, == or > than @source_b.
         */
        function util_source_compare_for_sort(source_a?: any | null, source_b?: any | null): number;
        /**
         * Compares `str1` and `str2` like g_strcmp0(), except it handles %NULL and
         * empty strings as equal.
         * @param str1 a C string or %NULL
         * @param str2 another C string or %NULL
         * @returns an integer less than 0 when @str1 is before @str2; 0 when    the strings are equal and an integer greated than 0 when @str1 is after @str2.
         */
        function util_strcmp0(str1?: string | null, str2?: string | null): number;
        /**
         * Duplicates `string` and strips off any leading or trailing whitespace.
         * The resulting string is returned unless it is empty or %NULL, in which
         * case the function returns %NULL.
         *
         * Free the returned string with g_free().
         * @param string a string value, or %NULL
         * @returns a newly-allocated, stripped copy of @string, or %NULL
         */
        function util_strdup_strip(string?: string | null): string | null;
        /**
         * Find the first instance of `needle` in `haystack,` ignoring case for
         * bytes that are ASCII characters.
         * @param haystack The string to search in.
         * @param needle The string to search for.
         * @returns A pointer to the start of @needle in @haystack, or NULL if          @needle is not found.
         */
        function util_strstrcase(haystack: string, needle: string): string | null;
        /**
         * Compares `v1` and `v2` for equality, handling %NULL gracefully.
         *
         * The arguments types are generic for compatibility with #GEqualFunc.
         * @param v1 a %NULL-terminated string array, or %NULL
         * @param v2 another %NULL-terminated string array, or %NULL
         * @returns whether @v1 and @v2 are identical
         */
        function util_strv_equal(v1: string[], v2: string[]): boolean;
        /**
         * Convert NULL-terminated array of strings to a list of strings.
         * @param strv a NULL-terminated array of strings (const gchar *)
         * @returns Newly allocated #GSList of newly allocated strings. The returned pointer should be freed with e_util_free_string_slist(). Note: Pair function for this is e_util_slist_to_strv().
         */
        function util_strv_to_slist(strv: string): string[];
        /**
         * Get a UTF-8 character from the beginning of `text`.
         * @param text The string to take the UTF-8 character from.
         * @param out The location to store the UTF-8 character in.
         * @returns A pointer to the next character in @text after @out.
         */
        function util_unicode_get_utf8(text: string, out: number): string | null;
        /**
         * Unrefs the given `object` in a dedicated thread. This is useful when unreffing
         * object deep in call stack when the caller might still use the object and
         * this being the last reference to it.
         * @param object a #GObject
         */
        function util_unref_in_thread(object?: any | null): void;
        /**
         * Returns a newly-allocated NULL-terminated string with invalid characters
         * replaced by Unicode replacement characters (U+FFFD).
         * For %NULL `data` returns newly allocated empty string ("").
         * @param data UTF-8 binary data
         * @param data_bytes length of the binary data
         * @returns a newly-allocated string
         */
        function util_utf8_data_make_valid(data: string | null, data_bytes: number): string;
        /**
         * Converts the `text` into a decomposed variant and strips it, which
         * allows also cheap case insensitive comparision afterwards. This
         * produces an output as being used in e_util_utf8_strstrcasedecomp().
         * @param text a UTF-8 string
         * @returns A newly allocated string, a decomposed    variant of the @text. Free with g_free(), when no longer needed.
         */
        function util_utf8_decompose(text: string): string;
        /**
         * Returns a newly-allocated copy of `str,` with invalid characters
         * replaced by Unicode replacement characters (U+FFFD).
         * For %NULL `str` returns newly allocated empty string ("").
         * @param str a UTF-8 string
         * @returns a newly-allocated string
         */
        function util_utf8_make_valid(str?: string | null): string;
        /**
         * Normalizes `str` by making it all lower case and removing any accents from it.
         * @param str a UTF-8 string
         * @returns The normalized version of @str, or %NULL if @str was not valid UTF-8
         */
        function util_utf8_normalize(str?: string | null): string | null;
        /**
         * Returns a newly-allocated copy of `str` with accents removed.
         * @param str a UTF-8 string, or %NULL
         * @returns a newly-allocated string
         */
        function util_utf8_remove_accents(str?: string | null): string | null;
        /**
         * Compares two UTF-8 strings using approximate case-insensitive ordering.
         * @param s1 a UTF-8 string
         * @param s2 another UTF-8 string
         * @returns < 0 if @s1 compares before @s2, 0 if they compare equal,          > 0 if @s1 compares after @s2
         */
        function util_utf8_strcasecmp(s1: string, s2: string): number;
        /**
         * Find the first instance of `needle` in `haystack,` ignoring case. (No
         * proper case folding or decomposing is done.) Both `needle` and
         * `haystack` are UTF-8 strings.
         * @param haystack The string to search in.
         * @param needle The string to search for.
         * @returns A pointer to the first instance of @needle in @haystack, or          %NULL if no match is found, or if either of the strings are          not legal UTF-8 strings.
         */
        function util_utf8_strstrcase(haystack?: string | null, needle?: string | null): string | null;
        /**
         * Find the first instance of `needle` in `haystack,` where both `needle`
         * and `haystack` are UTF-8 strings. Both strings are stripped and
         * decomposed for comparison, and case is ignored.
         * @param haystack The string to search in.
         * @param needle The string to search for.
         * @returns A pointer to the first instance of @needle in @haystack,    or %NULL if either of the strings are not legal UTF-8 strings.
         */
        function util_utf8_strstrcasedecomp(haystack: string, needle: string): string | null;
        /**
         * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
         * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
         * @param ptr an #EWebDAVAccessControlEntry
         */
        function webdav_access_control_entry_free(ptr?: any | null): void;
        /**
         * Frees a `GSList` of discovered sources returned from
         * e_webdav_discover_sources_finish() or e_webdav_discover_sources_sync().
         * @param discovered_sources A #GSList of discovered sources
         */
        function webdav_discover_free_discovered_sources(discovered_sources: WebDAVDiscoveredSource[]): void;
        /**
         * Asynchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
         * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
         * to search all types. Note that the list of returned calendars can be more general,
         * thus check for its actual support type for further filtering of the results.
         * The `url_use_path` can be used to override actual server path, or even complete URL,
         * for the given `source`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_webdav_discover_sources_finish() to get the result of the operation.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param cancellable optional #GCancellable object, or %NULL
         */
        function webdav_discover_sources(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials?: NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<[string, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[] | null, string[] | null]>;
        /**
         * Asynchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
         * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
         * to search all types. Note that the list of returned calendars can be more general,
         * thus check for its actual support type for further filtering of the results.
         * The `url_use_path` can be used to override actual server path, or even complete URL,
         * for the given `source`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_webdav_discover_sources_finish() to get the result of the operation.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        function webdav_discover_sources(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials: NamedParameters | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<Source> | null,
        ): void;
        /**
         * Asynchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
         * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
         * to search all types. Note that the list of returned calendars can be more general,
         * thus check for its actual support type for further filtering of the results.
         * The `url_use_path` can be used to override actual server path, or even complete URL,
         * for the given `source`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_webdav_discover_sources_finish() to get the result of the operation.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        function webdav_discover_sources(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials?: NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Source> | null,
        ): Promise<[string, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[] | null, string[] | null]> | void;
        /**
         * Finishes the operation started with e_webdav_discover_sources(). If an
         * error occurred, the function will set `error` and return %FALSE. The function
         * can return success and no discovered sources, the same as it can return failure,
         * but still set some output arguments, like the certificate related output
         * arguments with G_TLS_ERROR_BAD_CERTIFICATE error.
         *
         * The return value of `out_certificate_pem` should be freed with g_free()
         * when no longer needed.
         *
         * The return value of `out_discovered_sources` should be freed
         * with e_webdav_discover_free_discovered_sources() when no longer needed.
         *
         * The return value of `out_calendar_user_addresses` should be freed
         * with g_slist_free_full (calendar_user_addresses, g_free); when
         * no longer needed.
         * @param source an #ESource on which the operation was started
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        function webdav_discover_sources_finish(
            source: Source,
            result: Gio.AsyncResult,
        ): [boolean, string, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[] | null, string[] | null];
        /**
         * This is the same as e_webdav_discover_sources(), it only allows to
         * provide a callback function (with its user_data), to reference an additional
         * #ESource. It's good to avoid creating its own #ESourceRegistry instance to
         * get it.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_webdav_discover_sources_finish() to get the result of the operation.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param ref_source_func optional callback to use to get an ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        function webdav_discover_sources_full(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials?: NamedParameters | null,
            ref_source_func?: WebDAVDiscoverRefSourceFunc | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Source> | null,
        ): void;
        /**
         * This is the same as e_webdav_discover_sources_sync(), it only allows to
         * provide a callback function (with its user_data), to reference an additional
         * #ESource. It's good to avoid creating its own #ESourceRegistry instance to
         * get it.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param ref_source_func optional callback to use to get an ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        function webdav_discover_sources_full_sync(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials: NamedParameters | null,
            ref_source_func: WebDAVDiscoverRefSourceFunc | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[] | null, string[] | null];
        /**
         * Synchronously runs discovery of the WebDAV sources (CalDAV and CardDAV), eventually
         * limited by the `only_supports` filter, which can be %E_WEBDAV_DISCOVER_SUPPORTS_NONE
         * to search all types. Note that the list of returned calendars can be more general,
         * thus check for its actual support type for further filtering of the results.
         * The `url_use_path` can be used to override actual server path, or even complete URL,
         * for the given `source`.
         *
         * If an error occurred, the function will set `error` and return %FALSE. The function
         * can return success and no discovered sources, the same as it can return failure,
         * but still set some output arguments, like the certificate related output
         * arguments with G_TLS_ERROR_BAD_CERTIFICATE error.
         *
         * The return value of `out_certificate_pem` should be freed with g_free()
         * when no longer needed.
         *
         * The return value of `out_discovered_sources` should be freed
         * with e_webdav_discover_free_discovered_sources() when no longer needed.
         *
         * The return value of `out_calendar_user_addresses` should be freed
         * with g_slist_free_full (calendar_user_addresses, g_free); when
         * no longer needed.
         * @param source an #ESource from which to take connection details
         * @param url_use_path optional URL override, or %NULL
         * @param only_supports bit-or of EWebDAVDiscoverSupports, to limit what type of sources to search
         * @param credentials credentials to use for authentication to the server
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        function webdav_discover_sources_sync(
            source: Source,
            url_use_path: string | null,
            only_supports: number,
            credentials: NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, Gio.TlsCertificateFlags | null, WebDAVDiscoveredSource[] | null, string[] | null];
        /**
         * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
         * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
         * @param ptr an #EWebDAVPrivilege
         */
        function webdav_privilege_free(ptr?: any | null): void;
        /**
         * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
         * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
         * The function does nothing, if `ptr` is %NULL.
         * @param ptr an #EWebDAVPropertyChange
         */
        function webdav_property_change_free(ptr?: any | null): void;
        /**
         * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
         * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
         * @param ptr an #EWebDAVResource
         */
        function webdav_resource_free(ptr?: any | null): void;
        /**
         * Frees the memory used by `hash` and its contents.
         * @param hash the #GHashTable to destroy
         */
        function xml_destroy_hash(hash: { [key: string]: any } | GLib.HashTable<string, string>): void;
        /**
         * Writes the given XML document structure to the file given by `filename`.
         * If an error occurs while saving, the function returns -1 and sets errno.
         * @param filename path to a file to save to
         * @param doc an XML document structure
         * @returns 0 on success, -1 on failure
         */
        function xml_save_file(filename: string, doc: libxml2.Doc): number;
        /**
         * Creates a #GHashTable representation of the #xmlDoc `doc`.
         * If `type` is * `E_XML_HASH_TYPE_PROPERTY,` all XML nodes will be
         * indexed in the #GHashTable by name. If `type` is
         * %E_XML_HASH_TYPE_OBJECT_UID, then XML objects will be indexed in
         * the hash by their UID (other nodes will still be indexed by name).
         * @param doc The #xmlDoc to store in a hash table.
         * @param type The value type to use as a key in the hash table.
         * @returns The newly-created #GHashTable representation of @doc.
         */
        function xml_to_hash(doc: libxml2.Doc, type: XmlHashType | null): GLib.HashTable<string, string>;
        /**
         * Adds a new key/value pair to the #EXmlHash `hash`.
         * @param hash the #EXmlHash to add an entry to
         * @param key the key to use for the entry
         * @param data the value of the new entry
         */
        function xmlhash_add(hash: XmlHash, key: string, data: string): void;
        /**
         * Compares the value with key equal to `key` in `hash` against
         * `compare_data`.
         * @param hash the #EXmlHash to compare against
         * @param key the key of the hash entry to compare with
         * @param compare_data the data to compare against the hash entry
         * @returns E_XMLHASH_STATUS_SAME if the value and @compare_data are          equal,E_XMLHASH_STATUS_DIFFERENT if they are different, or          E_XMLHASH_STATUS_NOT_FOUND if there is no entry in @hash with          its key equal to @key.
         */
        function xmlhash_compare(hash: XmlHash, key: string, compare_data: string): XmlHashStatus;
        /**
         * Frees the memory associated with `hash`.
         * @param hash The #EXmlHash to destroy.
         */
        function xmlhash_destroy(hash: XmlHash): void;
        /**
         * Executes `func` against each key/value pair in `hash`.
         * @param hash an #EXmlHash
         * @param func the #EXmlHashFunc to execute on the data in @hash
         */
        function xmlhash_foreach_key(hash: XmlHash, func: XmlHashFunc): void;
        /**
         * Calls g_hash_table_foreach_remove() on `hash<`!-- -->'s internal hash
         * table.  See g_hash_table_foreach_remove() for details.
         * @param hash an #EXmlHash
         * @param func the #EXmlHashFunc to execute on the data in @hash
         */
        function xmlhash_foreach_key_remove(hash: XmlHash, func: XmlHashRemoveFunc): void;
        /**
         * Remove the entry in `hash` with key equal to `key,` if it exists.
         * @param hash the #EXmlHash to remove an entry from
         * @param key the key of the entry to remove
         */
        function xmlhash_remove(hash: XmlHash, key: string): void;
        /**
         * Writes the XML represented by `hash` to the file originally passed
         * to e_xmlhash_new().
         * @param hash The #EXmlHash to write.
         */
        function xmlhash_write(hash: XmlHash): void;
        interface FreeFormExpBuildSexpFunc {
            (word: string, options: string, hint: string): string;
        }
        interface GDataObjectCallback {
            (gdata: GDataSession, object: Json.Object): boolean;
        }
        interface OAuth2ServiceRefSourceFunc {
            (uid: string): Source | null;
        }
        interface SourceRefreshFunc {
            (source: Source): void;
        }
        interface TypeFunc {
            (type: GObject.GType): void;
        }
        interface WebDAVDiscoverRefSourceFunc {
            (uid: string): Source | null;
        }
        interface WebDAVPropstatTraverseFunc {
            (
                webdav: WebDAVSession,
                prop_node: libxml2.Node,
                request_uri: GLib.Uri,
                href: string | null,
                status_code: number,
            ): boolean;
        }
        interface XmlHashFunc {
            (key: string, value: string): void;
        }
        interface XmlHashRemoveFunc {
            (key: string, value: string): boolean;
        }
        /**
         * Flags of the OAuth2 service.
         */

        /**
         * Flags of the OAuth2 service.
         */
        export namespace OAuth2ServiceFlags {
            export const $gtype: GObject.GType<OAuth2ServiceFlags>;
        }

        enum OAuth2ServiceFlags {
            /**
             * No flag set
             */
            NONE,
            /**
             * the service requires also page
             *    content to be passed to e_oauth2_service_extract_authorization_code()
             */
            EXTRACT_REQUIRES_PAGE_CONTENT,
        }

        export namespace WebDAVACEFlag {
            export const $gtype: GObject.GType<WebDAVACEFlag>;
        }

        enum WebDAVACEFlag {
            UNKNOWN,
            GRANT,
            DENY,
            INVERT,
            PROTECTED,
            INHERITED,
        }

        export namespace WebDAVACLRestrictions {
            export const $gtype: GObject.GType<WebDAVACLRestrictions>;
        }

        enum WebDAVACLRestrictions {
            NONE,
            GRANT_ONLY,
            NO_INVERT,
            DENY_BEFORE_GRANT,
            REQUIRED_PRINCIPAL,
        }

        export namespace WebDAVDiscoverSupports {
            export const $gtype: GObject.GType<WebDAVDiscoverSupports>;
        }

        enum WebDAVDiscoverSupports {
            NONE,
            CONTACTS,
            EVENTS,
            MEMOS,
            TASKS,
            WEBDAV_NOTES,
            CALENDAR_AUTO_SCHEDULE,
            SUBSCRIBED_ICALENDAR,
        }

        export namespace WebDAVListFlags {
            export const $gtype: GObject.GType<WebDAVListFlags>;
        }

        enum WebDAVListFlags {
            ALL,
            NONE,
            SUPPORTS,
            ETAG,
            DISPLAY_NAME,
            CONTENT_TYPE,
            CONTENT_LENGTH,
            CREATION_DATE,
            LAST_MODIFIED,
            DESCRIPTION,
            COLOR,
            ORDER,
            ONLY_CALENDAR,
            ONLY_ADDRESSBOOK,
        }

        export namespace WebDAVResourceSupports {
            export const $gtype: GObject.GType<WebDAVResourceSupports>;
        }

        enum WebDAVResourceSupports {
            NONE,
            CONTACTS,
            EVENTS,
            MEMOS,
            TASKS,
            FREEBUSY,
            TIMEZONE,
            WEBDAV_NOTES,
            LAST,
        }
        module Client {
            // Signal callback interfaces

            interface BackendDied {
                (): void;
            }

            interface BackendError {
                (object: string): void;
            }

            interface BackendPropertyChanged {
                (object: string, p0: string): void;
            }

            interface Opened {
                (object: GLib.Error): void;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                capabilities: any;
                main_context: GLib.MainContext;
                mainContext: GLib.MainContext;
                online: boolean;
                opened: boolean;
                readonly: boolean;
                source: Source;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class Client extends GObject.Object {
            static $gtype: GObject.GType<Client>;

            // Properties

            /**
             * The capabilities of this client
             */
            get capabilities(): any;
            /**
             * The main loop context in which notifications for
             * this client will be delivered.
             */
            get main_context(): GLib.MainContext;
            /**
             * The main loop context in which notifications for
             * this client will be delivered.
             */
            get mainContext(): GLib.MainContext;
            /**
             * Whether this client's backing data is online.
             */
            get online(): boolean;
            set online(val: boolean);
            /**
             * Whether this client is open and ready to use.
             */
            get opened(): boolean;
            /**
             * Whether this client's backing data is readonly.
             */
            get readonly(): boolean;
            /**
             * The #ESource for which this client was created.
             */
            get source(): Source;

            // Constructors

            constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'backend-died', callback: (_source: this) => void): number;
            connect_after(signal: 'backend-died', callback: (_source: this) => void): number;
            emit(signal: 'backend-died'): void;
            connect(signal: 'backend-error', callback: (_source: this, object: string) => void): number;
            connect_after(signal: 'backend-error', callback: (_source: this, object: string) => void): number;
            emit(signal: 'backend-error', object: string): void;
            connect(
                signal: 'backend-property-changed',
                callback: (_source: this, object: string, p0: string) => void,
            ): number;
            connect_after(
                signal: 'backend-property-changed',
                callback: (_source: this, object: string, p0: string) => void,
            ): number;
            emit(signal: 'backend-property-changed', object: string, p0: string): void;
            connect(signal: 'opened', callback: (_source: this, object: GLib.Error) => void): number;
            connect_after(signal: 'opened', callback: (_source: this, object: GLib.Error) => void): number;
            emit(signal: 'opened', object: GLib.Error): void;

            // Static methods

            static error_create(code: ClientError, custom_msg?: string | null): GLib.Error;
            static error_quark(): GLib.Quark;
            /**
             * Get localized human readable description of the given error code.
             * @param code an #EClientError error code
             */
            static error_to_string(code: ClientError): string;
            /**
             * Copies a #GSList of #GObject<!-- -->s to the end of `copy_to`.
             * @param copy_to Where to copy; may be %NULL
             * @param objects #GSList of #GObject<!-- -->s to be copied
             */
            static util_copy_object_slist(
                copy_to: GObject.Object[] | null,
                objects: GObject.Object[],
            ): GObject.Object[];
            /**
             * Copies the #GSList of strings to the end of `copy_to`.
             * @param copy_to Where to copy; may be %NULL
             * @param strings #GSList of strings to be copied
             */
            static util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[];
            /**
             * Calls g_object_unref() on each member of `objects` and then frees `objects`
             * itself.
             * @param objects a #GSList of #GObject<!-- -->s
             */
            static util_free_object_slist(objects: GObject.Object[]): void;
            /**
             * Frees memory previously allocated by e_client_util_strv_to_slist().
             * @param strings a #GSList of strings (gchar *)
             */
            static util_free_string_slist(strings: string[]): void;
            /**
             * Parses comma-separated list of values into #GSList.
             * @param strings string of comma-separated values
             */
            static util_parse_comma_strings(strings: string): string[];
            /**
             * Convert a list of strings into a %NULL-terminated array of strings.
             * @param strings a #GSList of strings (const gchar *)
             */
            static util_slist_to_strv(strings: string[]): string[];
            /**
             * Convert a %NULL-terminated array of strings to a list of strings.
             * @param strv a %NULL-terminated array of strings (const gchar *)
             */
            static util_strv_to_slist(strv: string): string[];
            /**
             * The function takes a `dbus_error` and tries to find a match in `known_errors`
             * for it, if it is a G_IO_ERROR, G_IO_ERROR_DBUS_ERROR. If it is anything else
             * then the `dbus_error` is moved to `client_error`.
             *
             * The `fail_when_none_matched` influences behaviour. If it's %TRUE, and none of
             * `known_errors` matches, or this is not a G_IO_ERROR_DBUS_ERROR, then %FALSE
             * is returned and the `client_error` is left without change. Otherwise, the
             * `fail_when_none_matched` is %FALSE, the error is always processed and will
             * result in E_CLIENT_ERROR, E_CLIENT_ERROR_OTHER_ERROR if none of `known_error`
             * matches.
             * @param dbus_error DBus #GError to unwrap
             * @param known_errors List of known errors against which try to match
             * @param known_errors_count How many items are stored in @known_errors
             * @param known_errors_domain Error domain for @known_errors
             * @param fail_when_none_matched Whether to fail when none of @known_errors matches
             */
            static util_unwrap_dbus_error(
                dbus_error: GLib.Error,
                known_errors: ClientErrorsList,
                known_errors_count: number,
                known_errors_domain: GLib.Quark,
                fail_when_none_matched: boolean,
            ): [boolean, GLib.Error];

            // Virtual methods

            vfunc_backend_died(): void;
            vfunc_backend_error(error_msg: string): void;
            vfunc_backend_property_changed(prop_name: string, prop_value: string): void;
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * The call is finished by e_client_get_backend_property_finish()
             * from the `callback`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_get_backend_property(
                prop_name: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes previous call of e_client_get_backend_property().
             * @param result a #GAsyncResult
             */
            vfunc_get_backend_property_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * The call is finished by e_client_open_finish() from the `callback`.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_open(
                only_if_exists: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes previous call of e_client_open().
             * @param result a #GAsyncResult
             */
            vfunc_open_finish(result: Gio.AsyncResult): boolean;
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean;
            vfunc_opened(error: GLib.Error): void;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * The call is finished by e_client_refresh_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes previous call of e_client_refresh().
             * @param result a #GAsyncResult
             */
            vfunc_refresh_finish(result: Gio.AsyncResult): boolean;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * The call is finished by e_client_remove_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes previous call of e_client_remove().
             * @param result a #GAsyncResult
             */
            vfunc_remove_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value.
             * The call is finished by e_client_retrieve_capabilities_finish()
             * from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_retrieve_capabilities(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes previous call of e_client_retrieve_capabilities().
             * Returned value of `capabilities` should be freed with g_free(),
             * when no longer needed.
             * @param result a #GAsyncResult
             */
            vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value. Returned value
             * of `capabilities` should be freed with g_free(), when no longer needed.
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Retrieves `client` properties to match server-side values, without waiting
             * for the D-Bus property change notifications delivery.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`. The call is finished
             * by e_client_set_backend_property_finish() from the `callback`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            vfunc_set_backend_property(
                prop_name: string,
                prop_value: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes previous call of e_client_set_backend_property().
             * @param result a #GAsyncResult
             */
            vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             */
            vfunc_set_backend_property_sync(
                prop_name: string,
                prop_value: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
             * `dbus_erorr` and `out_error` can point to the same variable.
             * @param dbus_error a #GError returned bu D-Bus
             */
            vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void;

            // Methods

            /**
             * Cancels all pending operations started on `client`.
             */
            cancel_all(): void;
            /**
             * Check if backend supports particular capability.
             * To get all capabilities use e_client_get_capabilities().
             * @param capability a capability
             * @returns #GSList of const strings of capabilities
             */
            check_capability(capability: string): boolean;
            /**
             * Checks whether a client supports explicit refreshing
             * (see e_client_refresh()).
             * @returns TRUE if the client supports refreshing, FALSE otherwise.
             */
            check_refresh_supported(): boolean;
            /**
             * Returns a D-Bus bus name that will be used to connect the
             * client to the backend subprocess.
             * @returns a newly-allocated string representing a D-Bus bus          name that will be used to connect the client to          the backend subprocess. The string should be          freed by the caller using g_free().
             */
            dup_bus_name(): string;
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * The call is finished by e_client_get_backend_property_finish()
             * from the `callback`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             */
            get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * The call is finished by e_client_get_backend_property_finish()
             * from the `callback`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_backend_property(
                prop_name: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * The call is finished by e_client_get_backend_property_finish()
             * from the `callback`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            get_backend_property(
                prop_name: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes previous call of e_client_get_backend_property().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_backend_property_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Queries `client'`s backend for a property of name `prop_name`.
             * @param prop_name property name, whose value to retrieve; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Get list of strings with capabilities advertised by a backend.
             * This list, together with inner strings, is owned by the `client`.
             * To check for individual capabilities use e_client_check_capability().
             * @returns #GSList of const strings          of capabilities
             */
            get_capabilities(): string[];
            /**
             * Get the #ESource that this client has assigned.
             * @returns The source.
             */
            get_source(): Source;
            /**
             * Check if this `client` is connected.
             * @returns %TRUE if this @client is connected, otherwise %FALSE.
             */
            is_online(): boolean;
            /**
             * Check if this `client` is fully opened. This includes
             * everything from e_client_open() call up to the authentication,
             * if required by a backend. Client cannot do any other operation
             * during the opening phase except of authenticate or cancel it.
             * Every other operation results in an %E_CLIENT_ERROR_BUSY error.
             * @returns always %TRUE
             */
            is_opened(): boolean;
            /**
             * Check if this `client` is read-only.
             * @returns %TRUE if this @client is read-only, otherwise %FALSE.
             */
            is_readonly(): boolean;
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * The call is finished by e_client_open_finish() from the `callback`.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             */
            open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * The call is finished by e_client_open_finish() from the `callback`.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            open(
                only_if_exists: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * The call is finished by e_client_open_finish() from the `callback`.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            open(
                only_if_exists: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_client_open().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            open_finish(result: Gio.AsyncResult): boolean;
            /**
             * Opens the `client,` making it ready for queries and other operations.
             * @param only_if_exists this parameter is not used anymore
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns the #GMainContext on which event sources for `client` are to
             * be attached.
             *
             * The returned #GMainContext is referenced for thread-safety and must be
             * unreferenced with g_main_context_unref() when finished with it.
             * @returns a #GMainContext
             */
            ref_main_context(): GLib.MainContext;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * The call is finished by e_client_refresh_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             */
            refresh(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * The call is finished by e_client_refresh_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * The call is finished by e_client_refresh_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            refresh(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_client_refresh().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            refresh_finish(result: Gio.AsyncResult): boolean;
            /**
             * Initiates refresh on the `client`. Finishing the method doesn't mean
             * that the refresh is done, backend only notifies whether it started
             * refreshing or not. Use e_client_check_refresh_supported() to check
             * whether the backend supports this method.
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            refresh_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * The call is finished by e_client_remove_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             */
            remove(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * The call is finished by e_client_remove_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * The call is finished by e_client_remove_finish() from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            remove(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_client_remove().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_finish(result: Gio.AsyncResult): boolean;
            /**
             * Removes the backing data for this #EClient. For example, with the file
             * backend this deletes the database file. You cannot get it back!
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            remove_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value.
             * The call is finished by e_client_retrieve_capabilities_finish()
             * from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             */
            retrieve_capabilities(cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value.
             * The call is finished by e_client_retrieve_capabilities_finish()
             * from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            retrieve_capabilities(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value.
             * The call is finished by e_client_retrieve_capabilities_finish()
             * from the `callback`.
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            retrieve_capabilities(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes previous call of e_client_retrieve_capabilities().
             * Returned value of `capabilities` should be freed with g_free(),
             * when no longer needed.
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            retrieve_capabilities_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Initiates retrieval of capabilities on the `client`. This is usually
             * required only once, after the `client` is opened. The returned value
             * is cached and any subsequent call of e_client_get_capabilities() and
             * e_client_check_capability() is using the cached value. Returned value
             * of `capabilities` should be freed with g_free(), when no longer needed.
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Asynchronously retrieves `client` properties to match server-side values,
             * without waiting for the D-Bus property change notifications delivery.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_client_retrieve_properties_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            retrieve_properties(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously retrieves `client` properties to match server-side values,
             * without waiting for the D-Bus property change notifications delivery.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_client_retrieve_properties_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            retrieve_properties(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously retrieves `client` properties to match server-side values,
             * without waiting for the D-Bus property change notifications delivery.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_client_retrieve_properties_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            retrieve_properties(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_client_retrieve_properties().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            retrieve_properties_finish(result: Gio.AsyncResult): boolean;
            /**
             * Retrieves `client` properties to match server-side values, without waiting
             * for the D-Bus property change notifications delivery.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`. The call is finished
             * by e_client_set_backend_property_finish() from the `callback`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             */
            set_backend_property(
                prop_name: string,
                prop_value: string,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`. The call is finished
             * by e_client_set_backend_property_finish() from the `callback`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            set_backend_property(
                prop_name: string,
                prop_value: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`. The call is finished
             * by e_client_set_backend_property_finish() from the `callback`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @param callback callback to call when a result is ready
             */
            set_backend_property(
                prop_name: string,
                prop_value: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_client_set_backend_property().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            set_backend_property_finish(result: Gio.AsyncResult): boolean;
            /**
             * Sets `client'`s backend property of name `prop_name`
             * to value `prop_value`.
             * @param prop_name property name, whose value to change; cannot be %NULL
             * @param prop_value property value, to set; cannot be %NULL
             * @param cancellable a #GCancellable; can be %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            set_backend_property_sync(
                prop_name: string,
                prop_value: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Sets a D-Bus bus name that will be used to connect the client
             * to the backend subprocess.
             * @param bus_name a string representing a D-Bus bus name
             */
            set_bus_name(bus_name: string): void;
            /**
             * Unwraps D-Bus error to local error. `dbus_error` is automatically freed.
             * `dbus_erorr` and `out_error` can point to the same variable.
             * @param dbus_error a #GError returned bu D-Bus
             */
            unwrap_dbus_error(dbus_error: GLib.Error): void;
            /**
             * Asynchronously waits until the `client` is connected (according
             * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
             *
             * The call is finished by e_client_wait_for_connected_finish() from
             * the `callback`.
             * @param timeout_seconds a timeout for the wait, in seconds
             * @param cancellable a #GCancellable; or %NULL
             */
            wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously waits until the `client` is connected (according
             * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
             *
             * The call is finished by e_client_wait_for_connected_finish() from
             * the `callback`.
             * @param timeout_seconds a timeout for the wait, in seconds
             * @param cancellable a #GCancellable; or %NULL
             * @param callback callback to call when a result is ready
             */
            wait_for_connected(
                timeout_seconds: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously waits until the `client` is connected (according
             * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
             *
             * The call is finished by e_client_wait_for_connected_finish() from
             * the `callback`.
             * @param timeout_seconds a timeout for the wait, in seconds
             * @param cancellable a #GCancellable; or %NULL
             * @param callback callback to call when a result is ready
             */
            wait_for_connected(
                timeout_seconds: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes previous call of e_client_wait_for_connected().
             * @param result a #GAsyncResult
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            wait_for_connected_finish(result: Gio.AsyncResult): boolean;
            /**
             * Synchronously waits until the `client` is connected (according
             * to `ESource:`:connection-status property), but not longer than `timeout_seconds`.
             *
             * Note: This also calls e_client_retrieve_properties_sync() on success, to have
             *   up-to-date property values on the client side, without a delay due
             *   to property change notifcations delivery through D-Bus.
             * @param timeout_seconds a timeout for the wait, in seconds
             * @param cancellable a #GCancellable; or %NULL
             * @returns %TRUE if successful, %FALSE otherwise.
             */
            wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean;
        }

        module Extension {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                extensible: Extensible;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class Extension extends GObject.Object {
            static $gtype: GObject.GType<Extension>;

            // Properties

            get extensible(): Extensible;

            // Constructors

            constructor(properties?: Partial<Extension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the object that `extension` extends.
             * @returns the object being extended
             */
            get_extensible(): Extensible;
        }

        module GDataSession {
            // Constructor properties interface

            interface ConstructorProps extends SoupSession.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class GDataSession extends SoupSession {
            static $gtype: GObject.GType<GDataSession>;

            // Constructors

            constructor(properties?: Partial<GDataSession.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source: Source): GDataSession;
            // Conflicted with Soup.Session.new

            static ['new'](...args: never[]): any;

            // Methods

            /**
             * Deletes a task list `tasklist_id`.
             * @param tasklist_id id of a task list
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_delete_sync(tasklist_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a task list `tasklist_id` and returns it as a #JsonObject,
             * which should be freed with json_object_unref(), when no longer needed.
             *
             * There can be used e_gdata_tasklist_get_id(), e_gdata_tasklist_get_etag(),
             * e_gdata_tasklist_get_title(), e_gdata_tasklist_get_self_link(),
             * e_gdata_tasklist_get_updated() to read the properties of the task list.
             * @param tasklist_id id of a task list
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_get_sync(tasklist_id: string, cancellable?: Gio.Cancellable | null): [boolean, Json.Object];
            /**
             * Creates a new task list, titled `title`. The `out_inserted_tasklist` should
             * be freed with json_object_unref(), when no longer needed.
             * @param title title to set
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_insert_sync(title: string, cancellable?: Gio.Cancellable | null): [boolean, Json.Object];
            /**
             * Lists all configured task lists for the user, calling the `cb` for each of them.
             * @param query an #EGDataQuery to limit returned task lists, or %NULL
             * @param cb an #EGDataObjectCallback to call for each found task list
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_list_sync(
                query: GDataQuery | null,
                cb: GDataObjectCallback,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Changes properties of a task list `tasklist_id`.
             *
             * If not %NULL, free the `out_patched_tasklist` with json_object_unref(),
             * when no longer needed.
             * @param tasklist_id id of a task list
             * @param tasklist_properties task list properties to change
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_patch_sync(
                tasklist_id: string,
                tasklist_properties: Json.Builder,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object | null];
            /**
             * Updates a task list `tasklist_id` with values from the `tasklist`.
             * @param tasklist_id id of a task list
             * @param tasklist task list object to update the task list with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasklists_update_sync(
                tasklist_id: string,
                tasklist: Json.Builder,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object | null];
            /**
             * Clears all completed tasks from the task list `tasklist_id`. The affected tasks
             * will be marked as 'hidden' and no longer be returned by default when retrieving
             * all tasks for a task list.
             * @param tasklist_id id of a task list
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_clear_sync(tasklist_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Deletes a task `task_id` from a task list `tasklist_id`.
             * @param tasklist_id id of a task list
             * @param task_id id of a task
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_delete_sync(tasklist_id: string, task_id: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a task `task_id` from a task list `tasklist_id` and returns it as a #JsonObject,
             * which should be freed with json_object_unref(), when no longer needed.
             *
             * There can be used e_gdata_task_get_id(), e_gdata_task_get_etag(),
             * e_gdata_task_get_title() and other e_gdata_task_... functions
             * to read the properties of the task.
             * @param tasklist_id id of a task list
             * @param task_id id of a task
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_get_sync(
                tasklist_id: string,
                task_id: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object];
            /**
             * Creates a new task `task` in the task list `tasklist_id`. The `out_inserted_task` should
             * be freed with json_object_unref(), when no longer needed.
             * @param tasklist_id id of a task list
             * @param task a #JsonBuilder with the task object
             * @param parent_task_id parent task identifier, or %NULL to create at the top-level
             * @param previous_task_id previous sibling task identifier, or %NULL to create at the first position among its siblings
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_insert_sync(
                tasklist_id: string,
                task: Json.Builder,
                parent_task_id: string | null,
                previous_task_id: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object];
            /**
             * Lists all tasks in the task list `tasklist_id,` calling the `cb` for each of them.
             * @param tasklist_id id of a task list
             * @param query an #EGDataQuery to limit returned tasks, or %NULL
             * @param cb an #EGDataObjectCallback to call for each found task
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_list_sync(
                tasklist_id: string,
                query: GDataQuery | null,
                cb: GDataObjectCallback,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Moves the specified task `task_id` to another position in the task
             * list `tasklist_id`. This can include putting it as a child task under
             * a new parent and/or move it to a different position among its sibling tasks.
             * @param tasklist_id id of a task list
             * @param task_id id of a task
             * @param parent_task_id parent task identifier, or %NULL to move at the top-level
             * @param previous_task_id previous sibling task identifier, or %NULL to move at the first position among its siblings
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_move_sync(
                tasklist_id: string,
                task_id: string,
                parent_task_id?: string | null,
                previous_task_id?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Changes properties `task_properties` of a task `task_id` in the task list `tasklist_id`.
             *
             * If not %NULL, free the `out_patched_task` with json_object_unref(),
             * when no longer needed.
             * @param tasklist_id id of a task list
             * @param task_id id of a task
             * @param task_properties task properties to change
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_patch_sync(
                tasklist_id: string,
                task_id: string,
                task_properties: Json.Builder,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object | null];
            /**
             * Updates a task `task_id` in a task list `tasklist_id` to the values from the `task`.
             * @param tasklist_id id of a task list
             * @param task_id id of a task
             * @param task task object to update the task with
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            tasks_update_sync(
                tasklist_id: string,
                task_id: string,
                task: Json.Builder,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, Json.Object | null];
        }

        module Module {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.TypeModule.ConstructorProps,
                    GObject.TypePlugin.ConstructorProps {
                filename: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class Module extends GObject.TypeModule implements GObject.TypePlugin {
            static $gtype: GObject.GType<Module>;

            // Properties

            /**
             * The filename of the module.
             */
            get filename(): string;

            // Constructors

            constructor(properties?: Partial<Module.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](filename: string): Module;

            // Static methods

            /**
             * Loads all the modules in the specified directory into memory.  If
             * you want to unload them (enabling on-demand loading) you must call
             * g_type_module_unuse() on all the modules.  Free the returned list
             * with g_list_free().
             * @param dirname pathname for a directory containing modules to load
             */
            static load_all_in_directory(dirname: string): Module[];
            /**
             * Loads all the modules in the specified directory into memory and the other
             * custom prefixes returned by e_util_get_directory_variants().  If
             * you want to unload them (enabling on-demand loading) you must call
             * g_type_module_unuse() on all the modules.  Free the returned list
             * with g_list_free().
             *
             * When `dirprefix` is %NULL, or not a prefix of `dirname,` behaves
             * the same as e_module_load_all_in_directory().
             * @param dirname pathname for a directory containing modules to load
             * @param dirprefix prefix of @dirname, which can be replaced by custom prefixes, or %NULL
             */
            static load_all_in_directory_and_prefixes(dirname: string, dirprefix?: string | null): Module[];
            /**
             * Load the module from the specified filename into memory. If
             * you want to unload it (enabling on-demand loading) you must call
             * g_type_module_unuse() on the module.
             * @param filename filename of the module to load
             */
            static load_file(filename: string): Module;

            // Methods

            /**
             * Returns the filename of the shared library for `module`.  The
             * string is owned by `module` and should not be modified or freed.
             * @returns the filename for @module
             */
            get_filename(): string;

            // Inherited methods
            /**
             * Calls the `complete_interface_info` function from the
             * #GTypePluginClass of `plugin`. There should be no need to use this
             * function outside of the GObject type system itself.
             * @param instance_type the #GType of an instantiatable type to which the interface  is added
             * @param interface_type the #GType of the interface whose info is completed
             * @param info the #GInterfaceInfo to fill in
             */
            complete_interface_info(
                instance_type: GObject.GType,
                interface_type: GObject.GType,
                info: GObject.InterfaceInfo,
            ): void;
            /**
             * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
             * There should be no need to use this function outside of the GObject
             * type system itself.
             * @param g_type the #GType whose info is completed
             * @param info the #GTypeInfo struct to fill in
             * @param value_table the #GTypeValueTable to fill in
             */
            complete_type_info(
                g_type: GObject.GType,
                info: GObject.TypeInfo,
                value_table: GObject.TypeValueTable,
            ): void;
            /**
             * Calls the `unuse_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            unuse(): void;
            /**
             * Calls the `use_plugin` function from the #GTypePluginClass of
             * `plugin`.  There should be no need to use this function outside of
             * the GObject type system itself.
             */
            use(): void;
            // Conflicted with GObject.TypeModule.use
            use(...args: never[]): any;
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

        module MsOapxbc {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        class MsOapxbc extends GObject.Object {
            static $gtype: GObject.GType<MsOapxbc>;

            // Constructors

            constructor(properties?: Partial<MsOapxbc.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_sync(client_id: string, authority: string, cancellable?: Gio.Cancellable | null): MsOapxbc;

            // Methods

            /**
             * Synchronously calls acquirePrtSsoCookie() D-Bus method on the Microsoft
             * OAuth2 broker service and converts the result into a new #SoupCookie.
             * The account object needs to be taken from the accounts list that is returned by
             * e_ms_oapxbc_get_accounts_sync(). The SSO URL is the OAuth2 authentication endpoint.
             * The scopes are the requested scopes for the OAuth2 service (usually only
             * https://graph.microsoft.com/.default). The redirect URI is the OAuth2 service
             * redirect URI.
             * @param account an account returned from e_ms_oapxbc_get_accounts_sync()
             * @param sso_url an SSO URL to acquire the PRT SSO cookie for.
             * @param scopes array of scopes
             * @param redirect_uri redirect URI
             * @param cancellable a #GCancellable
             * @returns an acquired cookie, or %NULL on error
             */
            acquire_prt_sso_cookie_sync(
                account: Json.Object,
                sso_url: string,
                scopes: Json.Array,
                redirect_uri: string,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie | null;
            /**
             * Synchronously calls getAccounts() D-Bus method on the Microsoft
             * OAuth2 broker service and returns the result as a #JsonObject.
             *
             * The #JsonObject contains the accounts that are currently registered at the broker,
             * whereby the "accounts" node provides a #JsonArray of account entries. Note, that
             * the availability of the types and entries needs to be checked by the caller before
             * accessing them. The accounts entries can be inspected e.g. for the "username" and
             * "homeAccountId" fields. Then, one entry needs to be selected and passed as-is to
             * e_ms_oapxbc_acquire_prt_sso_cookie_sync().
             * @param cancellable a #GCancellable
             * @returns the accounts, or %NULL on error
             */
            get_accounts_sync(cancellable?: Gio.Cancellable | null): Json.Object | null;
        }

        module NetworkMonitor {
            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Gio.NetworkMonitor.ConstructorProps {
                gio_name: string;
                gioName: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using
         * the functions below. Implements #GNetworkMonitorInterface.
         */
        class NetworkMonitor extends GObject.Object implements Gio.Initable, Gio.NetworkMonitor {
            static $gtype: GObject.GType<NetworkMonitor>;

            // Properties

            /**
             * The GIO name of the underlying #GNetworkMonitor to use.
             */
            get gio_name(): string;
            set gio_name(val: string);
            /**
             * The GIO name of the underlying #GNetworkMonitor to use.
             */
            get gioName(): string;
            set gioName(val: string);

            // Constructors

            constructor(properties?: Partial<NetworkMonitor.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Gets the default #ENetworkMonitor. The caller should not unref the returned instance.
             * The #ENetworkMonitor implements the #GNetworkMonitor iterface.
             */
            static get_default(): Gio.NetworkMonitor;

            // Methods

            /**
             * Get currently set GIO name for the network availability checks.
             * See e_network_monitor_set_gio_name() for more details.
             * @returns A newly allocated string, a GIO name   of the underlying GNetworkMonitor which is set to be used.   The returned string should be freed with g_free(), when   no longer needed.
             */
            dup_gio_name(): string;
            /**
             * Get a list of available GIO names for the #GNetworkMonitor implementations.
             * The strings can be used in e_network_monitor_set_gio_name().
             * @returns A newly allocated #GSList,   with newly allocated strings, the GIO names. The #GSList should be freed   with g_slist_free_full (gio_names, g_free); when no longer needed.
             */
            list_gio_names(): string[];
            /**
             * Set a `gio_name` of the #GNetworkMonitor implementation to use, can be %NULL.
             * Use e_network_monitor_list_gio_names() for a list of available
             * implementations. A special value, %E_NETWORK_MONITOR_ALWAYS_ONLINE_NAME, can
             * be used to report the network as always reachable. When an unknown GIO
             * name is used the default #GNetworkMonitor implementation, as returned
             * by the g_network_monitor_get_default(), will be used.
             * @param gio_name a GIO name of a #GNetworkMonitor implementation to use, or %NULL
             */
            set_gio_name(gio_name?: string | null): void;

            // Inherited properties
            /**
             * More detailed information about the host's network connectivity.
             * See g_network_monitor_get_connectivity() and
             * #GNetworkConnectivity for more details.
             */
            get connectivity(): Gio.NetworkConnectivity;
            /**
             * Whether the network is considered available. That is, whether the
             * system has a default route for at least one of IPv4 or IPv6.
             *
             * Real-world networks are of course much more complicated than
             * this; the machine may be connected to a wifi hotspot that
             * requires payment before allowing traffic through, or may be
             * connected to a functioning router that has lost its own upstream
             * connectivity. Some hosts might only be accessible when a VPN is
             * active. Other hosts might only be accessible when the VPN is
             * not active. Thus, it is best to use g_network_monitor_can_reach()
             * or g_network_monitor_can_reach_async() to test for reachability
             * on a host-by-host basis. (On the other hand, when the property is
             * %FALSE, the application can reasonably expect that no remote
             * hosts at all are reachable, and should indicate this to the user
             * in its UI.)
             *
             * See also #GNetworkMonitor::network-changed.
             */
            get network_available(): boolean;
            /**
             * Whether the network is considered available. That is, whether the
             * system has a default route for at least one of IPv4 or IPv6.
             *
             * Real-world networks are of course much more complicated than
             * this; the machine may be connected to a wifi hotspot that
             * requires payment before allowing traffic through, or may be
             * connected to a functioning router that has lost its own upstream
             * connectivity. Some hosts might only be accessible when a VPN is
             * active. Other hosts might only be accessible when the VPN is
             * not active. Thus, it is best to use g_network_monitor_can_reach()
             * or g_network_monitor_can_reach_async() to test for reachability
             * on a host-by-host basis. (On the other hand, when the property is
             * %FALSE, the application can reasonably expect that no remote
             * hosts at all are reachable, and should indicate this to the user
             * in its UI.)
             *
             * See also #GNetworkMonitor::network-changed.
             */
            get networkAvailable(): boolean;
            /**
             * Whether the network is considered metered.
             *
             * That is, whether the
             * system has traffic flowing through the default connection that is
             * subject to limitations set by service providers. For example, traffic
             * might be billed by the amount of data transmitted, or there might be a
             * quota on the amount of traffic per month. This is typical with tethered
             * connections (3G and 4G) and in such situations, bandwidth intensive
             * applications may wish to avoid network activity where possible if it will
             * cost the user money or use up their limited quota. Anything more than a
             * few hundreds of kilobytes of data usage per hour should be avoided without
             * asking permission from the user.
             *
             * If more information is required about specific devices then the
             * system network management API should be used instead (for example,
             * NetworkManager or ConnMan).
             *
             * If this information is not available then no networks will be
             * marked as metered.
             *
             * See also #GNetworkMonitor:network-available.
             */
            get network_metered(): boolean;
            /**
             * Whether the network is considered metered.
             *
             * That is, whether the
             * system has traffic flowing through the default connection that is
             * subject to limitations set by service providers. For example, traffic
             * might be billed by the amount of data transmitted, or there might be a
             * quota on the amount of traffic per month. This is typical with tethered
             * connections (3G and 4G) and in such situations, bandwidth intensive
             * applications may wish to avoid network activity where possible if it will
             * cost the user money or use up their limited quota. Anything more than a
             * few hundreds of kilobytes of data usage per hour should be avoided without
             * asking permission from the user.
             *
             * If more information is required about specific devices then the
             * system network management API should be used instead (for example,
             * NetworkManager or ConnMan).
             *
             * If this information is not available then no networks will be
             * marked as metered.
             *
             * See also #GNetworkMonitor:network-available.
             */
            get networkMetered(): boolean;

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
             * Attempts to determine whether or not the host pointed to by
             * `connectable` can be reached, without actually trying to connect to
             * it.
             *
             * This may return %TRUE even when #GNetworkMonitor:network-available
             * is %FALSE, if, for example, `monitor` can determine that
             * `connectable` refers to a host on a local network.
             *
             * If `monitor` believes that an attempt to connect to `connectable`
             * will succeed, it will return %TRUE. Otherwise, it will return
             * %FALSE and set `error` to an appropriate error (such as
             * %G_IO_ERROR_HOST_UNREACHABLE).
             *
             * Note that although this does not attempt to connect to
             * `connectable,` it may still block for a brief period of time (eg,
             * trying to do multicast DNS on the local network), so if you do not
             * want to block, you should use g_network_monitor_can_reach_async().
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             * @returns %TRUE if @connectable is reachable, %FALSE if not.
             */
            can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously attempts to determine whether or not the host
             * pointed to by `connectable` can be reached, without actually
             * trying to connect to it.
             *
             * For more details, see g_network_monitor_can_reach().
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_network_monitor_can_reach_finish()
             * to get the result of the operation.
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             */
            can_reach_async(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously attempts to determine whether or not the host
             * pointed to by `connectable` can be reached, without actually
             * trying to connect to it.
             *
             * For more details, see g_network_monitor_can_reach().
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_network_monitor_can_reach_finish()
             * to get the result of the operation.
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            can_reach_async(
                connectable: Gio.SocketConnectable,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously attempts to determine whether or not the host
             * pointed to by `connectable` can be reached, without actually
             * trying to connect to it.
             *
             * For more details, see g_network_monitor_can_reach().
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_network_monitor_can_reach_finish()
             * to get the result of the operation.
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            can_reach_async(
                connectable: Gio.SocketConnectable,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an async network connectivity test.
             * See g_network_monitor_can_reach_async().
             * @param result a #GAsyncResult
             * @returns %TRUE if network is reachable, %FALSE if not.
             */
            can_reach_finish(result: Gio.AsyncResult): boolean;
            /**
             * Gets a more detailed networking state than
             * g_network_monitor_get_network_available().
             *
             * If #GNetworkMonitor:network-available is %FALSE, then the
             * connectivity state will be %G_NETWORK_CONNECTIVITY_LOCAL.
             *
             * If #GNetworkMonitor:network-available is %TRUE, then the
             * connectivity state will be %G_NETWORK_CONNECTIVITY_FULL (if there
             * is full Internet connectivity), %G_NETWORK_CONNECTIVITY_LIMITED (if
             * the host has a default route, but appears to be unable to actually
             * reach the full Internet), or %G_NETWORK_CONNECTIVITY_PORTAL (if the
             * host is trapped behind a "captive portal" that requires some sort
             * of login or acknowledgement before allowing full Internet access).
             *
             * Note that in the case of %G_NETWORK_CONNECTIVITY_LIMITED and
             * %G_NETWORK_CONNECTIVITY_PORTAL, it is possible that some sites are
             * reachable but others are not. In this case, applications can
             * attempt to connect to remote servers, but should gracefully fall
             * back to their "offline" behavior if the connection attempt fails.
             * @returns the network connectivity state
             */
            get_connectivity(): Gio.NetworkConnectivity;
            /**
             * Checks if the network is available. "Available" here means that the
             * system has a default route available for at least one of IPv4 or
             * IPv6. It does not necessarily imply that the public Internet is
             * reachable. See #GNetworkMonitor:network-available for more details.
             * @returns whether the network is available
             */
            get_network_available(): boolean;
            /**
             * Checks if the network is metered.
             * See #GNetworkMonitor:network-metered for more details.
             * @returns whether the connection is metered
             */
            get_network_metered(): boolean;
            /**
             * Attempts to determine whether or not the host pointed to by
             * `connectable` can be reached, without actually trying to connect to
             * it.
             *
             * This may return %TRUE even when #GNetworkMonitor:network-available
             * is %FALSE, if, for example, `monitor` can determine that
             * `connectable` refers to a host on a local network.
             *
             * If `monitor` believes that an attempt to connect to `connectable`
             * will succeed, it will return %TRUE. Otherwise, it will return
             * %FALSE and set `error` to an appropriate error (such as
             * %G_IO_ERROR_HOST_UNREACHABLE).
             *
             * Note that although this does not attempt to connect to
             * `connectable,` it may still block for a brief period of time (eg,
             * trying to do multicast DNS on the local network), so if you do not
             * want to block, you should use g_network_monitor_can_reach_async().
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             */
            vfunc_can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously attempts to determine whether or not the host
             * pointed to by `connectable` can be reached, without actually
             * trying to connect to it.
             *
             * For more details, see g_network_monitor_can_reach().
             *
             * When the operation is finished, `callback` will be called.
             * You can then call g_network_monitor_can_reach_finish()
             * to get the result of the operation.
             * @param connectable a #GSocketConnectable
             * @param cancellable a #GCancellable, or %NULL
             * @param callback a #GAsyncReadyCallback     to call when the request is satisfied
             */
            vfunc_can_reach_async(
                connectable: Gio.SocketConnectable,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes an async network connectivity test.
             * See g_network_monitor_can_reach_async().
             * @param result a #GAsyncResult
             */
            vfunc_can_reach_finish(result: Gio.AsyncResult): boolean;
            /**
             * the virtual function pointer for the
             *  GNetworkMonitor::network-changed signal.
             * @param network_available
             */
            vfunc_network_changed(network_available: boolean): void;
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

        module OAuth2ServiceBase {
            // Constructor properties interface

            interface ConstructorProps extends Extension.ConstructorProps {}
        }

        abstract class OAuth2ServiceBase extends Extension {
            static $gtype: GObject.GType<OAuth2ServiceBase>;

            // Constructors

            constructor(properties?: Partial<OAuth2ServiceBase.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module OAuth2ServiceGoogle {
            // Constructor properties interface

            interface ConstructorProps extends OAuth2ServiceBase.ConstructorProps, OAuth2Service.ConstructorProps {}
        }

        class OAuth2ServiceGoogle extends OAuth2ServiceBase implements OAuth2Service {
            static $gtype: GObject.GType<OAuth2ServiceGoogle>;

            // Constructors

            constructor(properties?: Partial<OAuth2ServiceGoogle.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             * @returns Whether the @service can be used for the given @source
             */
            can_process(source: Source): boolean;
            /**
             * Deletes token information for the `service` and `source` from the secret store.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             * @returns a #GSList of #SoupCookie-s to use, or %NULL
             */
            dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized successful or failed server response.    The @out_authorization_code is populated on success too.
             */
            extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized failed server response.    The @out_error_message is populated on success.
             */
            extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Reads access token information from the secret store for the `source` and
             * in case it's expired it refreshes the token, if possible.
             *
             * Free the returned `out_access_token` with g_free(), when no longer needed.
             * @param source an #ESource
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE, when the returned access token has been set and it's not expired,    %FALSE otherwise.
             */
            get_access_token_sync(
                source: Source,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, number];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             * @returns one of #EOAuth2ServiceNavigationPolicy
             */
            get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            get_authentication_uri(source: Source): string;
            get_client_id(source: Source): string;
            get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             * @returns the display name of the @service
             */
            get_display_name(): string;
            get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             * @returns the name of the @service
             */
            get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             * @returns The redirect_uri to use, or %NULL for none
             */
            get_redirect_uri(source: Source): string | null;
            get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             * @returns Whether the @service can be used for the given arguments
             */
            guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_refresh_token_message(source: Source, message: Soup.Message): void;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
             * a new access token, associated with the given `authorization_code` and stores
             * it into the secret store on success.
             * @param source an #ESource
             * @param authorization_code authorization code provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            receive_and_store_token_sync(
                source: Source,
                authorization_code: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
             * existing access token with provided `refresh_token` and stores it into the secret
             * store on success.
             * @param source an #ESource
             * @param refresh_token refresh token as provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            refresh_and_store_token_sync(
                source: Source,
                refresh_token: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             */
            vfunc_can_process(source: Source): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             */
            vfunc_dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             */
            vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            vfunc_get_authentication_uri(source: Source): string;
            vfunc_get_client_id(source: Source): string;
            vfunc_get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             */
            vfunc_get_display_name(): string;
            vfunc_get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             */
            vfunc_get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             */
            vfunc_get_redirect_uri(source: Source): string | null;
            vfunc_get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             */
            vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            vfunc_prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
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

        module OAuth2ServiceOutlook {
            // Constructor properties interface

            interface ConstructorProps extends OAuth2ServiceBase.ConstructorProps, OAuth2Service.ConstructorProps {}
        }

        class OAuth2ServiceOutlook extends OAuth2ServiceBase implements OAuth2Service {
            static $gtype: GObject.GType<OAuth2ServiceOutlook>;

            // Constructors

            constructor(properties?: Partial<OAuth2ServiceOutlook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             * @returns Whether the @service can be used for the given @source
             */
            can_process(source: Source): boolean;
            /**
             * Deletes token information for the `service` and `source` from the secret store.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             * @returns a #GSList of #SoupCookie-s to use, or %NULL
             */
            dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized successful or failed server response.    The @out_authorization_code is populated on success too.
             */
            extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized failed server response.    The @out_error_message is populated on success.
             */
            extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Reads access token information from the secret store for the `source` and
             * in case it's expired it refreshes the token, if possible.
             *
             * Free the returned `out_access_token` with g_free(), when no longer needed.
             * @param source an #ESource
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE, when the returned access token has been set and it's not expired,    %FALSE otherwise.
             */
            get_access_token_sync(
                source: Source,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, number];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             * @returns one of #EOAuth2ServiceNavigationPolicy
             */
            get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            get_authentication_uri(source: Source): string;
            get_client_id(source: Source): string;
            get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             * @returns the display name of the @service
             */
            get_display_name(): string;
            get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             * @returns the name of the @service
             */
            get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             * @returns The redirect_uri to use, or %NULL for none
             */
            get_redirect_uri(source: Source): string | null;
            get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             * @returns Whether the @service can be used for the given arguments
             */
            guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_refresh_token_message(source: Source, message: Soup.Message): void;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
             * a new access token, associated with the given `authorization_code` and stores
             * it into the secret store on success.
             * @param source an #ESource
             * @param authorization_code authorization code provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            receive_and_store_token_sync(
                source: Source,
                authorization_code: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
             * existing access token with provided `refresh_token` and stores it into the secret
             * store on success.
             * @param source an #ESource
             * @param refresh_token refresh token as provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            refresh_and_store_token_sync(
                source: Source,
                refresh_token: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             */
            vfunc_can_process(source: Source): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             */
            vfunc_dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             */
            vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            vfunc_get_authentication_uri(source: Source): string;
            vfunc_get_client_id(source: Source): string;
            vfunc_get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             */
            vfunc_get_display_name(): string;
            vfunc_get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             */
            vfunc_get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             */
            vfunc_get_redirect_uri(source: Source): string | null;
            vfunc_get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             */
            vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            vfunc_prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
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

        module OAuth2ServiceYahoo {
            // Constructor properties interface

            interface ConstructorProps extends OAuth2ServiceBase.ConstructorProps, OAuth2Service.ConstructorProps {}
        }

        class OAuth2ServiceYahoo extends OAuth2ServiceBase implements OAuth2Service {
            static $gtype: GObject.GType<OAuth2ServiceYahoo>;

            // Constructors

            constructor(properties?: Partial<OAuth2ServiceYahoo.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Inherited methods
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             * @returns Whether the @service can be used for the given @source
             */
            can_process(source: Source): boolean;
            /**
             * Deletes token information for the `service` and `source` from the secret store.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             * @returns a #GSList of #SoupCookie-s to use, or %NULL
             */
            dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized successful or failed server response.    The @out_authorization_code is populated on success too.
             */
            extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized failed server response.    The @out_error_message is populated on success.
             */
            extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Reads access token information from the secret store for the `source` and
             * in case it's expired it refreshes the token, if possible.
             *
             * Free the returned `out_access_token` with g_free(), when no longer needed.
             * @param source an #ESource
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE, when the returned access token has been set and it's not expired,    %FALSE otherwise.
             */
            get_access_token_sync(
                source: Source,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, number];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             * @returns one of #EOAuth2ServiceNavigationPolicy
             */
            get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            get_authentication_uri(source: Source): string;
            get_client_id(source: Source): string;
            get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             * @returns the display name of the @service
             */
            get_display_name(): string;
            get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             * @returns the name of the @service
             */
            get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             * @returns The redirect_uri to use, or %NULL for none
             */
            get_redirect_uri(source: Source): string | null;
            get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             * @returns Whether the @service can be used for the given arguments
             */
            guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_refresh_token_message(source: Source, message: Soup.Message): void;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
             * a new access token, associated with the given `authorization_code` and stores
             * it into the secret store on success.
             * @param source an #ESource
             * @param authorization_code authorization code provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            receive_and_store_token_sync(
                source: Source,
                authorization_code: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
             * existing access token with provided `refresh_token` and stores it into the secret
             * store on success.
             * @param source an #ESource
             * @param refresh_token refresh token as provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            refresh_and_store_token_sync(
                source: Source,
                refresh_token: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             */
            vfunc_can_process(source: Source): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             */
            vfunc_dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             */
            vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            vfunc_get_authentication_uri(source: Source): string;
            vfunc_get_client_id(source: Source): string;
            vfunc_get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             */
            vfunc_get_display_name(): string;
            vfunc_get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             */
            vfunc_get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             */
            vfunc_get_redirect_uri(source: Source): string | null;
            vfunc_get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             */
            vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            vfunc_prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
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

        module OAuth2Services {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Extensible.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class OAuth2Services extends GObject.Object implements Extensible {
            static $gtype: GObject.GType<OAuth2Services>;

            // Constructors

            constructor(properties?: Partial<OAuth2Services.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](): OAuth2Services;

            // Static methods

            /**
             * This is the same as e_oauth2_services_is_oauth2_alias(), except
             * it creates its own #EOAuth2Services instance and frees it at the end.
             * The #EOAuth2Services is implemented as a singleton, thus it won't be
             * much trouble, as long as there is something else having created one
             * instance.
             * @param auth_method an authentication method, or %NULL
             */
            static is_oauth2_alias_static(auth_method?: string | null): boolean;
            static is_supported(): boolean;

            // Methods

            /**
             * Adds the `service` to the list of known OAuth2 services into `services`.
             * It also adds a reference to `service`.
             * @param service an #EOAuth2Service to add
             */
            add(service: OAuth2Service): void;
            /**
             * Searches the list of currently known OAuth2 services for the one which
             * can be used with the given `source`.
             *
             * The returned #EOAuth2Service is referenced for thread safety, if found.
             * @param source an #ESource
             * @returns a referenced #EOAuth2Service, which can be used    with given @source, or %NULL, when none was found.
             */
            find(source: Source): OAuth2Service | null;
            /**
             * Searches the list of currently known OAuth2 services for the one which
             * can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both.
             * It's up to each #EOAuth2Service to decide, which of the arguments
             * are important and whether all or only any of them can be required.
             *
             * The returned #EOAuth2Service is referenced for thread safety, if found.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             * @returns a referenced #EOAuth2Service, which can be used    with given constraints, or %NULL, when none was found.
             */
            guess(protocol?: string | null, hostname?: string | null): OAuth2Service | null;
            is_oauth2_alias(auth_method?: string | null): boolean;
            /**
             * Lists all currently known services, which had been added
             * with e_oauth2_services_add(). Free the returned #GSList with
             * g_slist_remove_full (known_services, g_object_unref);
             * when no longer needed.
             * @returns a newly allocated #GSList    with all currently known #EOAuth2Service referenced instances
             */
            list(): OAuth2Service[];
            /**
             * Removes the `service` from the list of known services in `services`.
             * The function does nothing, if the `service` had not been added.
             * @param service an #EOAuth2Service to remove
             */
            remove(service: OAuth2Service): void;

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
            list_extensions(extension_type: GObject.GType): Extension[];
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

        module SoupAuthBearer {
            // Constructor properties interface

            interface ConstructorProps extends Soup.Auth.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SoupAuthBearer extends Soup.Auth {
            static $gtype: GObject.GType<SoupAuthBearer>;

            // Constructors

            constructor(properties?: Partial<SoupAuthBearer.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            is_expired(): boolean;
            /**
             * This function is analogous to soup_auth_authenticate() for "Basic" HTTP
             * authentication, except it takes an OAuth 2.0 access token instead of a
             * username and password.
             *
             * If `expires_in_seconds` is greater than zero, soup_auth_is_authenticated()
             * will return %FALSE after the given number of seconds have elapsed.
             * @param access_token an OAuth 2.0 access token
             * @param expires_in_seconds expiry for @access_token, or 0 if unknown
             */
            set_access_token(access_token: string, expires_in_seconds: number): void;
        }

        module SoupSession {
            // Constructor properties interface

            interface ConstructorProps extends Soup.Session.ConstructorProps {
                credentials: NamedParameters;
                force_http1: boolean;
                forceHttp1: boolean;
                handle_backoff_responses: boolean;
                handleBackoffResponses: boolean;
                source: Source;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SoupSession extends Soup.Session {
            static $gtype: GObject.GType<SoupSession>;

            // Properties

            /**
             * The #ENamedParameters containing login credentials.
             */
            get credentials(): NamedParameters;
            set credentials(val: NamedParameters);
            /**
             * Whether the messages created by the session should force use
             * of HTTP/1 instead of trying HTTP/2 first and fallback to the HTTP/1
             * when the newer version failed to connect.
             *
             * See e_soup_session_set_force_http1() for more information about the limitations.
             */
            get force_http1(): boolean;
            set force_http1(val: boolean);
            /**
             * Whether the messages created by the session should force use
             * of HTTP/1 instead of trying HTTP/2 first and fallback to the HTTP/1
             * when the newer version failed to connect.
             *
             * See e_soup_session_set_force_http1() for more information about the limitations.
             */
            get forceHttp1(): boolean;
            set forceHttp1(val: boolean);
            /**
             * Set to %TRUE, which is the default, to automatically handle backoff responses
             * from the server, that is, when the server requests the client to retry later.
             *
             * Note: This handles only the synchronous functions to send the messages. Clients
             * using the asynchronous API need to handle the backoff responses on their own.
             */
            get handle_backoff_responses(): boolean;
            set handle_backoff_responses(val: boolean);
            /**
             * Set to %TRUE, which is the default, to automatically handle backoff responses
             * from the server, that is, when the server requests the client to retry later.
             *
             * Note: This handles only the synchronous functions to send the messages. Clients
             * using the asynchronous API need to handle the backoff responses on their own.
             */
            get handleBackoffResponses(): boolean;
            set handleBackoffResponses(val: boolean);
            /**
             * The #ESource being used for this soup session.
             */
            get source(): Source;

            // Constructors

            constructor(properties?: Partial<SoupSession.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source: Source): SoupSession;
            // Conflicted with Soup.Session.new

            static ['new'](...args: never[]): any;

            // Static methods

            static error_quark(): GLib.Quark;
            /**
             * Checks whether e_soup_session_set_force_http1() can be used
             * to force HTTP/1 usage. This depends on the libsoup version
             * the data server had been compiled with.
             */
            static util_get_force_http1_supported(): boolean;
            /**
             * Returns bytes read from the message response, when the message send failed.
             * This can be used to examine detailed error returned by the server in
             * the response body.
             * @param message a #SoupMessage
             */
            static util_get_message_bytes(message: Soup.Message): Uint8Array | null;
            /**
             * Normalizes the path of the `uri,` aka encodes characters, which should
             * be encoded, if needed. Returns, modified URI when any change had been made to the path.
             * It doesn't touch other parts of the `uri`.
             * @param uri a #GUri to normalize the path for
             */
            static util_normalize_uri_path(uri: GLib.Uri): GLib.Uri | null;
            /**
             * Returns referenced request data for the `message,` as being previously
             * set by the e_soup_session_util_set_message_request_body() or
             * e_soup_session_util_set_message_request_body_from_data().
             *
             * Do not call this function while the `message` is queued in
             * a #SoupSession, nor modify the input stream position until
             * the `message` lefts the #SoupSession.
             * @param message a #SoupMessage
             */
            static util_ref_message_request_body(message: Soup.Message): [Gio.InputStream | null, number];
            /**
             * Sets the request body of the `message` from the `input_stream` of the `length,` with optional
             * `content_type`. The function makes sure the `message` request body is set again
             * when the message is restarted.
             *
             * The `input_stream` should implement the #GSeekable interface.
             * @param message a #SoupMessage
             * @param content_type optional Content-Type of the @data, or %NULL @input_stream (transfer none): the request body data as a #GInputStream
             * @param input_stream
             * @param length length of the @data
             */
            static util_set_message_request_body(
                message: Soup.Message,
                content_type: string | null,
                input_stream: Gio.InputStream,
                length: number,
            ): void;
            /**
             * Sets the request body of the `message` from the `data` of the `length,` with optional
             * `content_type`. The function makes sure the `message` request body is set again
             * when the message is restarted.
             *
             * When the `create_copy` is %TRUE, the `free_func` should be %NULL.
             * @param message a #SoupMessage
             * @param create_copy whether to create copy of the @data
             * @param content_type optional Content-Type of the @data, or %NULL
             * @param data the request body data
             * @param length length of the @data
             * @param free_func a free function for the @data, or %NULL
             */
            static util_set_message_request_body_from_data(
                message: Soup.Message,
                create_copy: boolean,
                content_type: string | null,
                data: any | null,
                length: number,
                free_func?: GLib.DestroyNotify | null,
            ): void;
            /**
             * Returns the `reason_phrase,` if it's non-%NULL and non-empty, a static string
             * corresponding to `status_code`. In case neither that can be found a localized
             * "Unknown error" message is returned.
             * @param status_code an HTTP status code
             * @param reason_phrase preferred string to use for the message, or %NULL
             */
            static util_status_to_string(status_code: number, reason_phrase?: string | null): string;

            // Methods

            /**
             * Checks result of the `message` and sets the `error` if it failed.
             * When it failed and the `read_bytes` is provided, then these are
             * set to `message'`s response body, thus it can be used later.
             * @param message a #SoupMessage
             * @param read_bytes optional bytes which had been read from the stream, or %NULL
             * @param bytes_length how many bytes had been read; ignored when @read_bytes is %NULL
             * @returns Whether succeeded, aka %TRUE, when no error recognized    and %FALSE otherwise.
             */
            check_result(message: Soup.Message, read_bytes: any | null, bytes_length: number): boolean;
            dup_credentials(): NamedParameters | null;
            get_authentication_requires_credentials(): boolean;
            /**
             * Returns whether it's forced to use HTTP/1 for the messages
             * created by the `session`. See e_soup_session_set_force_http1()
             * for more information about the limitations.
             * @returns whether it's forced to use HTTP/1
             */
            get_force_http1(): boolean;
            /**
             * Returns whether the `session` can handle backoff responses from the server.
             * See e_soup_session_set_handle_backoff_responses() for more information about
             * the limitations.
             * @returns whether the @session handles backoff responses
             */
            get_handle_backoff_responses(): boolean;
            get_log_level(): Soup.LoggerLogLevel;
            /**
             * Returns an #ESource associated with the `session,` if such was set in the creation time.
             * @returns Associated #ESource with the @session, or %NULL.
             */
            get_source(): Source | null;
            /**
             * Populates `out_certificate_pem` and `out_certificate_errors` with the last values
             * returned on #G_TLS_ERROR_BAD_CERTIFICATE error.
             * @returns Whether the information was available and set to the out parameters.
             */
            get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags | null];
            /**
             * Handles authentication failure and sets appropriate value to the `out_auth_result`
             * for the provided `op_error` and used `credentials`. Converts the `op_error`
             * into an appropriate error returned in the `error`.
             *
             * Also updates connection status on the associated #ESource with the `session`.
             * @param credentials credentials used for the authentication
             * @param op_error a #GError of the authentication operation
             */
            handle_authentication_failure(
                credentials: NamedParameters | null,
                op_error: GLib.Error,
            ): [SourceAuthenticationResult, string, Gio.TlsCertificateFlags | null];
            /**
             * Creates a new #SoupMessage, similar to soup_message_new(),
             * but also presets request headers with "User-Agent" to be "Evolution/version"
             * and with "Connection" to be "close".
             *
             * See also e_soup_session_new_message_from_uri().
             * @param method an HTTP method
             * @param uri_string a URI string to use for the request
             * @returns a new #SoupMessage, or %NULL on error
             */
            new_message(method: string, uri_string: string): Soup.Message;
            /**
             * Creates a new #SoupMessage, similar to soup_message_new_from_uri(),
             * but also presets request headers with "User-Agent" to be "Evolution/version"
             * and with "Connection" to be "close".
             *
             * See also e_soup_session_new_message().
             * @param method an HTTP method
             * @param uri a #GUri to use for the request
             * @returns a new #SoupMessage, or %NULL on error
             */
            new_message_from_uri(method: string, uri: GLib.Uri): Soup.Message;
            /**
             * Prepares the `message` to be a sent asynchronously with
             * e_soup_session_send_message(). The returned pointer is passed
             * to the e_soup_session_send_message() as the prepare_data
             * parameter.
             * @param message a #SoupMessage to prepare for asynchronous send
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns prepare data for e_soup_session_send_message(),   or %NULL on error.
             */
            prepare_message_send_sync(message: Soup.Message, cancellable?: Gio.Cancellable | null): any | null;
            /**
             * Asynchronously sends the `message`. Finish the call with
             * e_soup_session_send_message_finish().
             *
             * The `prepare_data` is a result of the e_soup_session_prepare_message_send_sync()
             * and this function assumes ownership of it. The `prepare_data` cannot be used
             * again after this call.
             * @param message a #SoupMessage to send
             * @param io_priority the I/O priority of the request, like %G_PRIORITY_DEFAULT
             * @param prepare_data data returned from e_soup_session_prepare_message_send_sync()
             * @param cancellable optional #GCancellable object, or %NULL
             */
            send_message(
                message: Soup.Message,
                io_priority: number,
                prepare_data?: any | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<[Gio.InputStream | null, string, Gio.TlsCertificateFlags | null]>;
            /**
             * Asynchronously sends the `message`. Finish the call with
             * e_soup_session_send_message_finish().
             *
             * The `prepare_data` is a result of the e_soup_session_prepare_message_send_sync()
             * and this function assumes ownership of it. The `prepare_data` cannot be used
             * again after this call.
             * @param message a #SoupMessage to send
             * @param io_priority the I/O priority of the request, like %G_PRIORITY_DEFAULT
             * @param prepare_data data returned from e_soup_session_prepare_message_send_sync()
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback the callback to invoke once the request is finished
             */
            send_message(
                message: Soup.Message,
                io_priority: number,
                prepare_data: any | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously sends the `message`. Finish the call with
             * e_soup_session_send_message_finish().
             *
             * The `prepare_data` is a result of the e_soup_session_prepare_message_send_sync()
             * and this function assumes ownership of it. The `prepare_data` cannot be used
             * again after this call.
             * @param message a #SoupMessage to send
             * @param io_priority the I/O priority of the request, like %G_PRIORITY_DEFAULT
             * @param prepare_data data returned from e_soup_session_prepare_message_send_sync()
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback the callback to invoke once the request is finished
             */
            send_message(
                message: Soup.Message,
                io_priority: number,
                prepare_data?: any | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[Gio.InputStream | null, string, Gio.TlsCertificateFlags | null]> | void;
            /**
             * Finishes the call of e_soup_session_send_message(). This is supposed to
             * be called from the callback passed to the e_soup_session_send_message().
             *
             * The optional `out_certificate_pem` and `out_certificate_errors` are set,
             * when provided, only if the operation failed with a TLS/SSL error.
             *
             * Make sure the #GInputStream is read and freed from the same thread,
             * and with the same thread default main context, which this function
             * was called from, otherwise it can break libsoup3.
             * @param result a #GAsyncResult object
             * @returns a #GInputStream for reading the response body, or %NULL on error
             */
            send_message_finish(
                result: Gio.AsyncResult,
            ): [Gio.InputStream | null, string, Gio.TlsCertificateFlags | null];
            /**
             * Similar to e_soup_session_send_message_sync(), except it reads
             * whole response content into memory and returns it as a #GByteArray.
             * Use e_soup_session_send_message_sync() when you want to have
             * more control on the content read.
             * @param message a #SoupMessage to send
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns A newly allocated #GByteArray,    which contains whole content from the URI pointed to by @message.
             */
            send_message_simple_sync(message: Soup.Message, cancellable?: Gio.Cancellable | null): Uint8Array;
            /**
             * Synchronously sends prepared message and returns #GInputStream
             * that can be used to read its contents.
             *
             * This calls soup_session_send() internally, but it also setups
             * the `message` according to #ESoupSession:source authentication
             * settings. It also extracts information about used certificate,
             * in case of G_TLS_ERROR_BAD_CERTIFICATE error and keeps it
             * for later use by e_soup_session_get_ssl_error_details().
             *
             * Use e_soup_session_send_message_simple_sync() to read whole
             * content into a #GByteArray.
             *
             * Note that SoupSession doesn't log content read from GInputStream,
             * thus the caller may print the read content on its own when needed.
             *
             * Note the `message` is fully filled only after there is anything
             * read from the resulting #GInputStream, thus use
             * e_soup_session_check_result() to verify that the receive had
             * been finished properly.
             *
             * Make sure the #GInputStream is read and freed from the same thread,
             * and with the same thread default main context, which this function
             * was called from, otherwise it can break libsoup3.
             * @param message a #SoupMessage to send
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns A newly allocated #GInputStream,    that can be used to read from the URI pointed to by @message.    Free it with g_object_unref(), when no longer needed.
             */
            send_message_sync(message: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
            /**
             * Sets credentials to use for connection. Using %NULL for `credentials`
             * unsets previous value.
             * @param credentials an #ENamedParameters with credentials to use, or %NULL
             */
            set_credentials(credentials?: NamedParameters | null): void;
            /**
             * Sets whether the messages created through the `session` using
             * e_soup_session_new_message() or e_soup_session_new_message_from_uri()
             * should force use of the HTTP/1, instead of trying HTTP/2 and fallback to HTTP/1,
             * when the newer version cannot be used.
             *
             * The property has no effect when e_soup_session_util_get_force_http1_supported()
             * returns %FALSE.
             * @param force_http1 the value to set
             */
            set_force_http1(force_http1: boolean): void;
            /**
             * Sets whether to automatically handle backoff responses from the server,
             * that is, when the server requests the client to retry later.
             *
             * Note: This handles only the synchronous functions to send the messages. Clients
             * using the asynchronous API need to handle the backoff responses on their own.
             * @param handle_backoff_responses the value to set
             */
            set_handle_backoff_responses(handle_backoff_responses: boolean): void;
            /**
             * Setups logging for the `session`. The `logging_level` can be one of:
             * "all" - log whole raw communication;
             * "body" - the same as "all";
             * "headers" - log the headers only;
             * "min" - minimal logging;
             * "1" - the same as "all".
             * Any other value, including %NULL, disables logging.
             *
             * Use e_soup_session_get_log_level() to get current log level.
             * @param logging_level logging level to setup, or %NULL
             */
            setup_logging(logging_level?: string | null): void;
        }

        module Source {
            // Signal callback interfaces

            interface Authenticate {
                (credentials: NamedParameters): void;
            }

            interface Changed {
                (): void;
            }

            interface CredentialsRequired {
                (
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    error: GLib.Error,
                ): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.Initable.ConstructorProps,
                    Gio.ProxyResolver.ConstructorProps {
                connection_status: SourceConnectionStatus;
                connectionStatus: SourceConnectionStatus;
                display_name: string;
                displayName: string;
                enabled: boolean;
                main_context: GLib.MainContext;
                mainContext: GLib.MainContext;
                parent: string;
                remote_creatable: boolean;
                remoteCreatable: boolean;
                remote_deletable: boolean;
                remoteDeletable: boolean;
                removable: boolean;
                uid: string;
                writable: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class Source extends GObject.Object implements Gio.Initable, Gio.ProxyResolver {
            static $gtype: GObject.GType<Source>;

            // Properties

            get connection_status(): SourceConnectionStatus;
            get connectionStatus(): SourceConnectionStatus;
            get display_name(): string;
            set display_name(val: string);
            get displayName(): string;
            set displayName(val: string);
            get enabled(): boolean;
            set enabled(val: boolean);
            get main_context(): GLib.MainContext;
            get mainContext(): GLib.MainContext;
            get parent(): string;
            set parent(val: string);
            get remote_creatable(): boolean;
            get remoteCreatable(): boolean;
            get remote_deletable(): boolean;
            get remoteDeletable(): boolean;
            get removable(): boolean;
            get uid(): string;
            get writable(): boolean;

            // Constructors

            constructor(properties?: Partial<Source.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](dbus_object?: Gio.DBusObject | null, main_context?: GLib.MainContext | null): Source;

            static new_with_uid(uid: string, main_context?: GLib.MainContext | null): Source;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'authenticate', callback: (_source: this, credentials: NamedParameters) => void): number;
            connect_after(
                signal: 'authenticate',
                callback: (_source: this, credentials: NamedParameters) => void,
            ): number;
            emit(signal: 'authenticate', credentials: NamedParameters): void;
            connect(signal: 'changed', callback: (_source: this) => void): number;
            connect_after(signal: 'changed', callback: (_source: this) => void): number;
            emit(signal: 'changed'): void;
            connect(
                signal: 'credentials-required',
                callback: (
                    _source: this,
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    error: GLib.Error,
                ) => void,
            ): number;
            connect_after(
                signal: 'credentials-required',
                callback: (
                    _source: this,
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    error: GLib.Error,
                ) => void,
            ): number;
            emit(
                signal: 'credentials-required',
                reason: SourceCredentialsReason,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags,
                error: GLib.Error,
            ): void;

            // Static methods

            /**
             * Converts a #GParamSpec name (e.g. "foo-bar" or "foo_bar")
             * to "CamelCase" for use as a #GKeyFile key (e.g. "FooBar").
             *
             * This function is made public only to aid in account migration.
             * Applications should not need to use this.
             * @param param_name a #GParamSpec name
             */
            static parameter_to_key(param_name: string): string;

            // Virtual methods

            vfunc_authenticate(credentials: NamedParameters): void;
            /**
             * Emits the #ESource::changed signal from an idle callback in
             * `source'`s #ESource:main-context.
             *
             * This function is primarily intended for use by #ESourceExtension
             * when emitting a #GObject::notify signal on one of its properties.
             */
            vfunc_changed(): void;
            vfunc_credentials_required(
                reason: SourceCredentialsReason,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags,
                op_error: GLib.Error,
            ): void;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_get_oauth2_access_token_finish() to get the result of the
             * operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
             */
            vfunc_get_oauth2_access_token(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_source_get_oauth2_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_get_oauth2_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_get_oauth2_access_token_sync(cancellable: Gio.Cancellable | null): [boolean, string, number];
            vfunc_invoke_authenticate_impl(
                dbus_source: any | null,
                arg_credentials: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            vfunc_invoke_credentials_required_impl(
                dbus_source: any | null,
                arg_reason: string,
                arg_certificate_pem: string,
                arg_certificate_errors: string,
                arg_dbus_error_name: string,
                arg_dbus_error_message: string,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously creates a new remote resource by picking out relevant
             * details from `scratch_source`.  The `scratch_source` must be an #ESource
             * with no #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_create_finish() to get the result of the operation.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_remote_create(
                scratch_source: Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_source_remote_create().  If
             * an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_remote_create_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a new remote resource by picking out relevant details from
             * `scratch_source`.  The `scratch_source` must be an #ESource with no
             * #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously deletes the resource represented by `source` from a remote
             * server.  The `source` must be #ESource:remote-deletable.  This will also
             * delete the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove().
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_delete_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_remote_delete(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with e_source_remote_delete().  If
             * an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_remote_delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes the resource represented by `source` from a remote server.
             * The `source` must be #ESource:remote-deletable.  This will also delete
             * the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove_sync().
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously requests the D-Bus service to delete the key files for
             * `source` and all of its descendants and broadcast their removal to all
             * clients.  The `source` must be #ESource:removable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remove_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the operation started with e_source_remove().  If an
             * error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_remove_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the D-Bus service to delete the key files for `source` and all of
             * its descendants and broadcast their removal to all clients.  The `source`
             * must be #ESource:removable.
             *
             * If an error occurs, the functon will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean;
            vfunc_unset_last_credentials_required_arguments_impl(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously submits the current contents of `source` to the D-Bus
             * service to be written to disk and broadcast to other clients.  The
             * `source` must be #ESource:writable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_write_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes the operation started with e_source_write().  If an
             * error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             */
            vfunc_write_finish(result: Gio.AsyncResult): boolean;
            /**
             * Submits the current contents of `source` to the D-Bus service to be
             * written to disk and broadcast to other clients.  The `source` must
             * be #ESource:writable.
             *
             * If an error occurs, the functon will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_write_sync(cancellable?: Gio.Cancellable | null): boolean;

            // Methods

            /**
             * This function essentially glues together `source` and `serivce` so their
             * configuration settings stay synchronized.  The glue itself is a shared
             * #CamelSettings instance.
             *
             * Call this function immediately after creating a new #CamelService with
             * camel_session_add_service().
             * @param service a #CamelService
             */
            camel_configure_service(service: Camel.Service): void;
            /**
             * Emits the #ESource::changed signal from an idle callback in
             * `source'`s #ESource:main-context.
             *
             * This function is primarily intended for use by #ESourceExtension
             * when emitting a #GObject::notify signal on one of its properties.
             */
            changed(): void;
            /**
             * Compares two #ESource instances by their display names.  Useful for
             * ordering sources in a user interface.
             * @param source2 the second #ESource
             * @returns a negative value if @source1 compares before @source2, zero if          they compare equal, or a positive value if @source1 compares          after @source2
             */
            compare_by_display_name(source2: Source): number;
            /**
             * Asynchronously deletes the password for `source` from either the default
             * keyring or session keyring.  This operation does not rely on the registry
             * service and therefore works for any #ESource -- registered or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_delete_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            delete_password(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously deletes the password for `source` from either the default
             * keyring or session keyring.  This operation does not rely on the registry
             * service and therefore works for any #ESource -- registered or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_delete_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            delete_password(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously deletes the password for `source` from either the default
             * keyring or session keyring.  This operation does not rely on the registry
             * service and therefore works for any #ESource -- registered or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_delete_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            delete_password(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_delete_password().
             *
             * Note the boolean return value indicates whether the delete operation
             * itself completed successfully, not whether a password was found and
             * deleted.  If no password was found, the function will still return
             * %TRUE.  If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            delete_password_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes the password for `source` from either the default keyring or
             * session keyring.  This operation does not rely on the registry service
             * and therefore works for any #ESource -- registered or "scratch".
             *
             * Note the boolean return value indicates whether the delete operation
             * itself completed successfully, not whether a password was found and
             * deleted.  If no password was found, the function will still return
             * %TRUE.  If an error occurs, the function sets `error` and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            delete_password_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Thread-safe variation of e_source_get_display_name().
             * Use this function when accessing `source` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESource:display-name
             */
            dup_display_name(): string;
            /**
             * Thread-safe variation of e_source_get_parent().
             * Use this function when accessing `source` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESource:parent
             */
            dup_parent(): string | null;
            /**
             * Creates a label string based on `source'`s #ESource:display-name for use
             * with #SecretItem.
             * @returns a newly-allocated secret label
             */
            dup_secret_label(): string;
            /**
             * Thread-safe variation of e_source_get_uid().
             * Use this function when accessing `source` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESource:uid
             */
            dup_uid(): string;
            /**
             * Emits locally (in this process only) the ESource::credentials-required
             * signal with given parameters. That's the difference with e_source_invoke_credentials_required(),
             * which calls the signal globally, within each client.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             */
            emit_credentials_required(
                reason: SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
            ): void;
            /**
             * Checks two #ESource instances for equality.  #ESource instances are
             * equal if their unique identifier strings are equal.
             * @param source2 the second #ESource
             * @returns %TRUE if @source1 and @source2 are equal
             */
            equal(source2: Source): boolean;
            /**
             * Obtain current connection status of the `source`.
             * @returns Current connection status of the @source.
             */
            get_connection_status(): SourceConnectionStatus;
            /**
             * Returns the display name for `source`.  Use the display name to
             * represent the #ESource in a user interface.
             * @returns the display name for @source
             */
            get_display_name(): string;
            /**
             * Returns %TRUE if `source` is enabled.
             *
             * An application should try to honor this setting if at all possible,
             * even if it does not provide a way to change the setting through its
             * user interface.  Disabled data sources should generally be hidden.
             *
             * <note><para>
             *   This function does not take into account `source'`s ancestors in the
             *   #ESource hierarchy, each of which have their own enabled state.  If
             *   any of `source'`s ancestors are disabled, then `source` itself should
             *   be treated as disabled.  Use e_source_registry_check_enabled() to
             *   easily check for this.
             * </para></note>
             * @returns whether @source is enabled
             */
            get_enabled(): boolean;
            /**
             * Returns an instance of some #ESourceExtension subclass which registered
             * itself under `extension_name`.  If no such instance exists within `source,`
             * one will be created.  It is the caller's responsibility to know which
             * subclass is being returned.
             *
             * If you just want to test for the existence of an extension within `source`
             * without creating it, use e_source_has_extension().
             *
             * Extension instances are owned by their #ESource and should not be
             * referenced directly.  Instead, reference the #ESource instance and
             * use this function to fetch the extension instance as needed.
             * @param extension_name an extension name
             * @returns an instance of some #ESourceExtension subclass
             */
            get_extension(extension_name: string): SourceExtension;
            /**
             * Asynchronously calls the GetLastCredentialsRequiredArguments method
             * on the server side, to get the last values used for the 'credentials-required'
             * signal. See e_source_get_last_credentials_required_arguments_sync() for
             * more information.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_get_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_last_credentials_required_arguments(
                cancellable?: Gio.Cancellable | null,
            ): Promise<[SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error]>;
            /**
             * Asynchronously calls the GetLastCredentialsRequiredArguments method
             * on the server side, to get the last values used for the 'credentials-required'
             * signal. See e_source_get_last_credentials_required_arguments_sync() for
             * more information.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_get_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_last_credentials_required_arguments(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously calls the GetLastCredentialsRequiredArguments method
             * on the server side, to get the last values used for the 'credentials-required'
             * signal. See e_source_get_last_credentials_required_arguments_sync() for
             * more information.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_get_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            get_last_credentials_required_arguments(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error]> | void;
            /**
             * Finishes the operation started with e_source_get_last_credentials_required_arguments().
             * See e_source_get_last_credentials_required_arguments_sync() for more information
             * about the output arguments.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            get_last_credentials_required_arguments_finish(
                result: Gio.AsyncResult,
            ): [boolean, SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error];
            /**
             * Retrieves the last used arguments of the 'credentials-required' signal emission.
             * If there was none emitted yet, or a corresponding 'authenitcate' had been emitted
             * already, then the `out_reason` is set to #E_SOURCE_CREDENTIALS_REASON_UNKNOWN
             * and the value of other 'out' arguments is set to no values.
             *
             * If an error occurs, the function sets `error` and returns %FALSE. The result gchar
             * values should be freed with g_free() when no longer needed.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            get_last_credentials_required_arguments_sync(
                cancellable?: Gio.Cancellable | null,
            ): [boolean, SourceCredentialsReason, string, Gio.TlsCertificateFlags, GLib.Error];
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_get_oauth2_access_token_finish() to get the result of the
             * operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            get_oauth2_access_token(cancellable?: Gio.Cancellable | null): Promise<[string, number]>;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_get_oauth2_access_token_finish() to get the result of the
             * operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
             */
            get_oauth2_access_token(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_get_oauth2_access_token_finish() to get the result of the
             * operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
             */
            get_oauth2_access_token(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[string, number]> | void;
            /**
             * Finishes the operation started with e_source_get_oauth2_access_token().
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            get_oauth2_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with g_free() when finished with it.
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            get_oauth2_access_token_sync(cancellable: Gio.Cancellable | null): [boolean, string, number];
            /**
             * Returns the unique identifier string of the parent #ESource.
             * @returns the UID of the parent #ESource
             */
            get_parent(): string | null;
            /**
             * Returns whether new resources can be created on a remote server by
             * calling e_source_remote_create() on `source`.
             *
             * Generally this is only %TRUE if `source` has an #ESourceCollection
             * extension, which means there is an #ECollectionBackend in the D-Bus
             * service that can handle create requests.  If `source` does not have
             * this capability, calls to e_source_remote_create() will fail.
             * @returns whether @source can create remote resources
             */
            get_remote_creatable(): boolean;
            /**
             * Returns whether the resource represented by `source` can be deleted
             * from a remote server by calling e_source_remote_delete().
             *
             * Generally this is only %TRUE if `source` is a child of an #ESource
             * which has an #ESourceCollection extension, which means there is an
             * #ECollectionBackend in the D-Bus service that can handle delete
             * requests.  If `source` does not have this capability, calls to
             * e_source_remote_delete() will fail.
             * @returns whether @source can delete remote resources
             */
            get_remote_deletable(): boolean;
            /**
             * Returns whether the D-Bus service will allow `source` to be removed.
             * If `source` is not writable, calls to e_source_remove() will fail.
             * @returns whether @source is removable
             */
            get_removable(): boolean;
            /**
             * Returns the unique identifier string for `source`.
             * @returns the UID for @source
             */
            get_uid(): string;
            /**
             * Returns whether the D-Bus service will accept changes to `source`.
             * If `source` is not writable, calls to e_source_write() will fail.
             * @returns whether @source is writable
             */
            get_writable(): boolean;
            /**
             * Checks whether `source` has an #ESourceExtension with the given name.
             * @param extension_name an extension name
             * @returns %TRUE if @source has such an extension, %FALSE if not
             */
            has_extension(extension_name: string): boolean;
            /**
             * Generates a hash value for `source`.  This function is intended for
             * easily hashing an #ESource to add to a #GHashTable or similar data
             * structure.
             * @returns a hash value for @source.
             */
            hash(): number;
            /**
             * Asynchronously calls the InvokeAuthenticate method on the server side,
             * thus the backend knows what credentials to use to connect to its (possibly
             * remote) data store.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_authenticate_finish() to get the result of the operation.
             * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
             * @param cancellable optional #GCancellable object, or %NULL
             */
            invoke_authenticate(
                credentials?: NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously calls the InvokeAuthenticate method on the server side,
             * thus the backend knows what credentials to use to connect to its (possibly
             * remote) data store.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_authenticate_finish() to get the result of the operation.
             * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            invoke_authenticate(
                credentials: NamedParameters | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously calls the InvokeAuthenticate method on the server side,
             * thus the backend knows what credentials to use to connect to its (possibly
             * remote) data store.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_authenticate_finish() to get the result of the operation.
             * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            invoke_authenticate(
                credentials?: NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_invoke_authenticate().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            invoke_authenticate_finish(result: Gio.AsyncResult): boolean;
            /**
             * Calls the InvokeAuthenticate method on the server side, thus the backend
             * knows what credentials to use to connect to its (possibly remote) data store.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param credentials an #ENamedParameters structure with credentials to use; can be %NULL    to use those from the last call
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            invoke_authenticate_sync(
                credentials?: NamedParameters | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously calls the InvokeCredentialsRequired method on the server side,
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             */
            invoke_credentials_required(
                reason: SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously calls the InvokeCredentialsRequired method on the server side,
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            invoke_credentials_required(
                reason: SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error: GLib.Error | null,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously calls the InvokeCredentialsRequired method on the server side,
             * to inform clients that credentials are required.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_invoke_credentials_required_finish() to get the result of the operation.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            invoke_credentials_required(
                reason: SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_invoke_credentials_required().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            invoke_credentials_required_finish(result: Gio.AsyncResult): boolean;
            /**
             * Let's the client-side know that credentials are required. The `reason` defines which
             * parameters are used. The client passed the credentials with an e_source_invoke_authenticate()
             * call.
             *
             * The %E_SOURCE_CREDENTIALS_REASON_REQUIRED is used for the first credentials prompt,
             * when the client can return credentials as stored from the previous success login.
             *
             * The %E_SOURCE_CREDENTIALS_REASON_REJECTED is used when the previously used credentials
             * had been rejected by the server. That usually means that the user should be asked
             * to provide/correct the credentials.
             *
             * The %E_SOURCE_CREDENTIALS_REASON_SSL_FAILED is used when a secured connection failed
             * due to some server-side certificate issues.
             *
             * The %E_SOURCE_CREDENTIALS_REASON_ERROR is used when the server returned an error.
             * It is not possible to connect to it at the moment usually.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param reason an #ESourceCredentialsReason, why the credentials are required
             * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
             * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
             * @param op_error a #GError with a description of the previous credentials error, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            invoke_credentials_required_sync(
                reason: SourceCredentialsReason | null,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags | null,
                op_error?: GLib.Error | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously looks up a password for `source`.  Both the default and
             * session keyrings are queried.  This operation does not rely on the
             * registry service and therefore works for any #ESource -- registered
             * or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_lookup_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            lookup_password(cancellable?: Gio.Cancellable | null): Promise<string>;
            /**
             * Asynchronously looks up a password for `source`.  Both the default and
             * session keyrings are queried.  This operation does not rely on the
             * registry service and therefore works for any #ESource -- registered
             * or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_lookup_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            lookup_password(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously looks up a password for `source`.  Both the default and
             * session keyrings are queried.  This operation does not rely on the
             * registry service and therefore works for any #ESource -- registered
             * or "scratch".
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_lookup_password_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            lookup_password(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string> | void;
            /**
             * Finishes the operation started with e_source_lookup_password().
             *
             * Note the boolean return value indicates whether the lookup operation
             * itself completed successfully, not whether a password was found.  If
             * no password was found, the function will set `out_password` to %NULL
             * but still return %TRUE.  If an error occurs, the function sets `error`
             * and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            lookup_password_finish(result: Gio.AsyncResult): [boolean, string];
            /**
             * Looks up a password for `source`.  Both the default and session keyrings
             * are queried.  This operation does not rely on the registry service and
             * therefore works for any #ESource -- registered or "scratch".
             *
             * Note the boolean return value indicates whether the lookup operation
             * itself completed successfully, not whether a password was found.  If
             * no password was found, the function will set `out_password` to %NULL
             * but still return %TRUE.  If an error occurs, the function sets `error`
             * and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            lookup_password_sync(cancellable: Gio.Cancellable | null): [boolean, string];
            /**
             * Asynchronously loads a signature from the signature file for `source,`
             * which is given by e_source_mail_signature_get_file().
             *
             * If the signature file is executable, it will be executed and its output
             * captured as the email signature content.  If the signature file is not
             * executable, the email signature content is read directly from the file.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_load_finish() to get the result of
             * the operation.
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             */
            mail_signature_load(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<[string, number]>;
            /**
             * Asynchronously loads a signature from the signature file for `source,`
             * which is given by e_source_mail_signature_get_file().
             *
             * If the signature file is executable, it will be executed and its output
             * captured as the email signature content.  If the signature file is not
             * executable, the email signature content is read directly from the file.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_load_finish() to get the result of
             * the operation.
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_load(
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously loads a signature from the signature file for `source,`
             * which is given by e_source_mail_signature_get_file().
             *
             * If the signature file is executable, it will be executed and its output
             * captured as the email signature content.  If the signature file is not
             * executable, the email signature content is read directly from the file.
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_load_finish() to get the result of
             * the operation.
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_load(
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<[string, number]> | void;
            /**
             * Finishes an operation started with e_source_mail_signature_load().  The
             * signature file contents are placed in `contents,` and `length` is set to
             * the size of the `contents` string.  The `contents` string should be freed
             * with g_free() when no longer needed.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_load_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Loads a signature from the signature file for `source,` which is
             * given by e_source_mail_signature_get_file().  The signature contents
             * are placed in `contents,` and `length` is set to the size of the `contents`
             * string.  The `contents` string should be freed with g_free() when no
             * longer needed.
             *
             * If the signature file is executable, it will be executed and its output
             * captured as the email signature content.  If the signature file is not
             * executable, the email signature content is read directly from the file.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_load_sync(cancellable?: Gio.Cancellable | null): [boolean, string, number];
            /**
             * Asynchrously replaces the signature file for `source` with the given
             * `contents` of `length` bytes.  The signature file for `source` is given
             * by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_replace_finish() to get the result
             * of the operation.
             * @param contents the signature contents
             * @param length the length of @contents in bytes
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             */
            mail_signature_replace(
                contents: string,
                length: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchrously replaces the signature file for `source` with the given
             * `contents` of `length` bytes.  The signature file for `source` is given
             * by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_replace_finish() to get the result
             * of the operation.
             * @param contents the signature contents
             * @param length the length of @contents in bytes
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_replace(
                contents: string,
                length: number,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchrously replaces the signature file for `source` with the given
             * `contents` of `length` bytes.  The signature file for `source` is given
             * by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_replace_finish() to get the result
             * of the operation.
             * @param contents the signature contents
             * @param length the length of @contents in bytes
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_replace(
                contents: string,
                length: number,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an operation started with e_source_mail_signature_replace().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_replace_finish(result: Gio.AsyncResult): boolean;
            /**
             * Replaces the signature file for `source` with the given `contents`
             * of `length` bytes.  The signature file for `source` is given by
             * e_source_mail_signature_get_file().
             * @param contents the signature contents
             * @param length the length of @contents in bytes
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_replace_sync(
                contents: string,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Asynchronously replaces the signature file for `source` with a symbolic
             * link to `symlink_target,` which should be an executable file that prints
             * a mail signature to standard output.  The signature file for `source`
             * is given by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_symlink_finish() to get the result
             * of the operation.
             * @param symlink_target executable filename to link to
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             */
            mail_signature_symlink(
                symlink_target: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously replaces the signature file for `source` with a symbolic
             * link to `symlink_target,` which should be an executable file that prints
             * a mail signature to standard output.  The signature file for `source`
             * is given by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_symlink_finish() to get the result
             * of the operation.
             * @param symlink_target executable filename to link to
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_symlink(
                symlink_target: string,
                io_priority: number,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously replaces the signature file for `source` with a symbolic
             * link to `symlink_target,` which should be an executable file that prints
             * a mail signature to standard output.  The signature file for `source`
             * is given by e_source_mail_signature_get_file().
             *
             * When the operation is finished, `callback` will be called.  You can
             * then call e_source_mail_signature_symlink_finish() to get the result
             * of the operation.
             * @param symlink_target executable filename to link to
             * @param io_priority the I/O priority of the request
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            mail_signature_symlink(
                symlink_target: string,
                io_priority: number,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes an operation started with e_source_mail_signature_symlink().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_symlink_finish(result: Gio.AsyncResult): boolean;
            /**
             * Replaces the signature file for `source` with a symbolic link to
             * `symlink_target,` which should be an executable file that prints
             * a mail signature to standard output.  The signature file for
             * `source` is given by e_source_mail_signature_get_file().
             * @param symlink_target executable filename to link to
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            mail_signature_symlink_sync(symlink_target: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously determines what proxy, if any, to use to connect to `uri`.
             * See e_source_proxy_lookup_sync() for more details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_proxy_lookup_finish() to get the result of the operation.
             * @param uri a URI representing the destination to connect to
             * @param cancellable optional #GCancellable object, or %NULL
             */
            proxy_lookup(uri: string, cancellable?: Gio.Cancellable | null): Promise<string[] | null>;
            /**
             * Asynchronously determines what proxy, if any, to use to connect to `uri`.
             * See e_source_proxy_lookup_sync() for more details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_proxy_lookup_finish() to get the result of the operation.
             * @param uri a URI representing the destination to connect to
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            proxy_lookup(
                uri: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously determines what proxy, if any, to use to connect to `uri`.
             * See e_source_proxy_lookup_sync() for more details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_proxy_lookup_finish() to get the result of the operation.
             * @param uri a URI representing the destination to connect to
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            proxy_lookup(
                uri: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<string[] | null> | void;
            /**
             * Finishes the operation started with e_source_proxy_lookup().
             *
             * Free the returned proxy URIs with g_strfreev() when finished with them.
             * @param result a #GAsyncResult
             * @returns a %NULL-terminated array of proxy    URIs, or %NULL
             */
            proxy_lookup_finish(result: Gio.AsyncResult): string[] | null;
            /**
             * Looks into `source'`s #ESourceProxy extension to determine what proxy,
             * if any, to use to connect to `uri`.  The returned proxy URIs are of the
             * same form described by g_proxy_resolver_lookup().
             *
             * The proxy extension's #ESourceProxy:method controls how proxy URIs are
             * determined:
             *
             * When using `E_PROXY_METHOD_DEFAULT,` the function will defer to the
             * #GProxyResolver returned by g_proxy_resolver_get_default().
             *
             * When using `E_PROXY_METHOD_MANUAL,` the function will configure a
             * #GSimpleProxyResolver from the HTTP, HTTPS, FTP and SOCKS properties,
             * as well as #ESourceProxy:ignore-hosts.
             *
             * When using `E_PROXY_METHOD_AUTO,` the function will execute a proxy
             * auto-config (PAC) file at #ESourceProxy:autoconfig-url.
             *
             * When using `E_PROXY_METHOD_NONE,` the function will only return
             * <literal>direct://</literal>.
             *
             * If `source` does not have an #ESourceProxy extension, the function sets
             * `error` to `G_IO_ERROR_NOT_SUPPORTED` and returns %NULL.
             *
             * Free the returned proxy URIs with g_strfreev() when finished with them.
             * @param uri a URI representing the destination to connect to
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns a %NULL-terminated array of proxy URIs,    or %NULL
             */
            proxy_lookup_sync(uri: string, cancellable?: Gio.Cancellable | null): string[] | null;
            /**
             * Returns the #GDBusObject that was passed to e_source_new().
             *
             * The returned #GDBusObject is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the #GDBusObject for @source, or %NULL
             */
            ref_dbus_object(): Gio.DBusObject | null;
            /**
             * Returns the #GMainContext on which event sources for `source` are to
             * be attached.
             *
             * The returned #GMainContext is referenced for thread-safety and must be
             * unreferenced with g_main_context_unref() when finished with it.
             * @returns a #GMainContext
             */
            ref_main_context(): GLib.MainContext;
            /**
             * This is a simple way to schedule a periodic data source refresh.
             *
             * Adds a timeout #GSource to `context` and handles all the bookkeeping
             * if `source'`s refresh #ESourceRefresh:enabled state or its refresh
             * #ESourceRefresh:interval-minutes value changes.  The `callback` is
             * expected to dispatch an asynchronous job to connect to and fetch
             * updates from a remote server.
             *
             * The returned ID can be passed to e_source_refresh_remove_timeout() to
             * remove the timeout from `context`.  Note the ID is a private handle and
             * cannot be passed to g_source_remove().
             * @param context a #GMainContext, or %NULL (if %NULL, the default           context will be used)
             * @param callback function to call on each timeout
             * @param notify function to call when the timeout is removed,          or %NULL
             * @returns a refresh timeout ID
             */
            refresh_add_timeout(
                context: GLib.MainContext | null,
                callback: SourceRefreshFunc,
                notify?: GLib.DestroyNotify | null,
            ): number;
            /**
             * For all timeouts added with e_source_refresh_add_timeout(), invokes
             * the #ESourceRefreshFunc callback immediately and then, if the refresh
             * #ESourceRefresh:enabled state is TRUE, reschedules the timeout.
             *
             * This function is called automatically when the #ESource switches from
             * disabled to enabled, but can also be useful when a network connection
             * becomes available or when waking up from hibernation or suspend.
             */
            refresh_force_timeout(): void;
            /**
             * Removes a timeout #GSource added by e_source_refresh_add_timeout().
             * @param refresh_timeout_id a refresh timeout ID
             * @returns %TRUE if the timeout was found and removed
             */
            refresh_remove_timeout(refresh_timeout_id: number): boolean;
            /**
             * Removes all timeout #GSource's added by e_source_refresh_add_timeout()
             * whose callback data pointer matches `user_data`.
             * @param user_data user data to match against timeout callbacks
             * @returns the number of timeouts found and removed
             */
            refresh_remove_timeouts_by_data(user_data?: any | null): number;
            /**
             * Asynchronously creates a new remote resource by picking out relevant
             * details from `scratch_source`.  The `scratch_source` must be an #ESource
             * with no #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_create_finish() to get the result of the operation.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             */
            remote_create(scratch_source: Source, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously creates a new remote resource by picking out relevant
             * details from `scratch_source`.  The `scratch_source` must be an #ESource
             * with no #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_create_finish() to get the result of the operation.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remote_create(
                scratch_source: Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously creates a new remote resource by picking out relevant
             * details from `scratch_source`.  The `scratch_source` must be an #ESource
             * with no #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_create_finish() to get the result of the operation.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remote_create(
                scratch_source: Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_remote_create().  If
             * an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            remote_create_finish(result: Gio.AsyncResult): boolean;
            /**
             * Creates a new remote resource by picking out relevant details from
             * `scratch_source`.  The `scratch_source` must be an #ESource with no
             * #GDBusObject.  The `source` must be #ESource:remote-creatable.
             *
             * The details required to create the resource vary by #ECollectionBackend,
             * but in most cases the `scratch_source` need only define the resource type
             * (address book, calendar, etc.), a display name for the resource, and
             * possibly a server-side path or ID for the resource.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param scratch_source an #ESource describing the resource to create
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously deletes the resource represented by `source` from a remote
             * server.  The `source` must be #ESource:remote-deletable.  This will also
             * delete the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove().
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_delete_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            remote_delete(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously deletes the resource represented by `source` from a remote
             * server.  The `source` must be #ESource:remote-deletable.  This will also
             * delete the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove().
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_delete_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remote_delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously deletes the resource represented by `source` from a remote
             * server.  The `source` must be #ESource:remote-deletable.  This will also
             * delete the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove().
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remote_delete_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remote_delete(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_remote_delete().  If
             * an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            remote_delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes the resource represented by `source` from a remote server.
             * The `source` must be #ESource:remote-deletable.  This will also delete
             * the key file for `source` and broadcast its removal to all clients,
             * similar to e_source_remove_sync().
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously requests the D-Bus service to delete the key files for
             * `source` and all of its descendants and broadcast their removal to all
             * clients.  The `source` must be #ESource:removable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remove_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            remove(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously requests the D-Bus service to delete the key files for
             * `source` and all of its descendants and broadcast their removal to all
             * clients.  The `source` must be #ESource:removable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remove_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously requests the D-Bus service to delete the key files for
             * `source` and all of its descendants and broadcast their removal to all
             * clients.  The `source` must be #ESource:removable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_remove_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            remove(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_remove().  If an
             * error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE of failure
             */
            remove_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the D-Bus service to delete the key files for `source` and all of
             * its descendants and broadcast their removal to all clients.  The `source`
             * must be #ESource:removable.
             *
             * If an error occurs, the functon will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            remove_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Set's current connection status of the `source`.
             * @param connection_status one of the #ESourceConnectionStatus
             */
            set_connection_status(connection_status: SourceConnectionStatus | null): void;
            /**
             * Sets the display name for `source`.  The `display_name` argument must be a
             * valid UTF-8 string.  Use the display name to represent the #ESource in a
             * user interface.
             *
             * The internal copy of `display_name` is automatically stripped of leading
             * and trailing whitespace.
             * @param display_name a display name
             */
            set_display_name(display_name: string): void;
            /**
             * Enables or disables `source`.
             *
             * An application should try to honor this setting if at all possible,
             * even if it does not provide a way to change the setting through its
             * user interface.  Disabled data sources should generally be hidden.
             * @param enabled whether to enable @source
             */
            set_enabled(enabled: boolean): void;
            /**
             * Identifies the parent of `source` by its unique identifier string.
             * This can only be set prior to adding `source` to an #ESourceRegistry.
             *
             * The internal copy of #ESource:parent is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param parent the UID of the parent #ESource, or %NULL
             */
            set_parent(parent?: string | null): void;
            /**
             * Asynchronously stores a password for `source`.  This operation does
             * not rely on the registry service and therefore works for any #ESource
             * -- registered or "scratch".
             *
             * If `permanently` is %TRUE, the password is stored in the default keyring.
             * Otherwise the password is stored in the memory-only session keyring.  If
             * an error occurs, the function sets `error` and returns %FALSE.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_store_password_finish() to get the result of the operation.
             * @param password the password to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             */
            store_password(
                password: string,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously stores a password for `source`.  This operation does
             * not rely on the registry service and therefore works for any #ESource
             * -- registered or "scratch".
             *
             * If `permanently` is %TRUE, the password is stored in the default keyring.
             * Otherwise the password is stored in the memory-only session keyring.  If
             * an error occurs, the function sets `error` and returns %FALSE.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_store_password_finish() to get the result of the operation.
             * @param password the password to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            store_password(
                password: string,
                permanently: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously stores a password for `source`.  This operation does
             * not rely on the registry service and therefore works for any #ESource
             * -- registered or "scratch".
             *
             * If `permanently` is %TRUE, the password is stored in the default keyring.
             * Otherwise the password is stored in the memory-only session keyring.  If
             * an error occurs, the function sets `error` and returns %FALSE.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_store_password_finish() to get the result of the operation.
             * @param password the password to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            store_password(
                password: string,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_store_password().
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            store_password_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stores a password for `source`.  This operation does not rely on the
             * registry service and therefore works for any #ESource -- registered
             * or "scratch".
             *
             * If `permanently` is %TRUE, the password is stored in the default keyring.
             * Otherwise the password is stored in the memory-only session keyring.  If
             * an error occurs, the function sets `error` and returns %FALSE.
             * @param password the password to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            store_password_sync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Outputs the current contents of `source` as a key file string.
             * Free the returned string with g_free().
             * @returns a newly-allocated string
             */
            to_string(): [string, number];
            /**
             * Asynchronously calls the UnsetLastCredentialsRequiredArguments method
             * on the server side, to unset the last values used for the 'credentials-required'
             * signal.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_unset_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            unset_last_credentials_required_arguments(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously calls the UnsetLastCredentialsRequiredArguments method
             * on the server side, to unset the last values used for the 'credentials-required'
             * signal.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_unset_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            unset_last_credentials_required_arguments(
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously calls the UnsetLastCredentialsRequiredArguments method
             * on the server side, to unset the last values used for the 'credentials-required'
             * signal.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_unset_last_credentials_required_arguments_finish() to get
             * the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            unset_last_credentials_required_arguments(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_unset_last_credentials_required_arguments().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            unset_last_credentials_required_arguments_finish(result: Gio.AsyncResult): boolean;
            /**
             * Unsets the last used arguments of the 'credentials-required' signal emission.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            unset_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously submits the current contents of `source` to the D-Bus
             * service to be written to disk and broadcast to other clients.  The
             * `source` must be #ESource:writable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_write_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             */
            write(cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously submits the current contents of `source` to the D-Bus
             * service to be written to disk and broadcast to other clients.  The
             * `source` must be #ESource:writable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_write_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            write(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Asynchronously submits the current contents of `source` to the D-Bus
             * service to be written to disk and broadcast to other clients.  The
             * `source` must be #ESource:writable.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_write_finish() to get the result of the operation.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            write(
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_write().  If an
             * error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            write_finish(result: Gio.AsyncResult): boolean;
            /**
             * Submits the current contents of `source` to the D-Bus service to be
             * written to disk and broadcast to other clients.  The `source` must
             * be #ESource:writable.
             *
             * If an error occurs, the functon will set `error` and return %FALSE.
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            write_sync(cancellable?: Gio.Cancellable | null): boolean;

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

        module SourceAddressBook {
            // Constructor properties interface

            interface ConstructorProps extends SourceBackend.ConstructorProps {
                order: number;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceAddressBook extends SourceBackend {
            static $gtype: GObject.GType<SourceAddressBook>;

            // Properties

            get order(): number;
            set order(val: number);

            // Constructors

            constructor(properties?: Partial<SourceAddressBook.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_order(): number;
            /**
             * Set the sorting order of the source.
             * @param order a sorting order
             */
            set_order(order: number): void;
        }

        module SourceAlarms {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                for_every_event: boolean;
                forEveryEvent: boolean;
                include_me: boolean;
                includeMe: boolean;
                last_notified: string;
                lastNotified: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceAlarms extends SourceExtension {
            static $gtype: GObject.GType<SourceAlarms>;

            // Properties

            get for_every_event(): boolean;
            set for_every_event(val: boolean);
            get forEveryEvent(): boolean;
            set forEveryEvent(val: boolean);
            get include_me(): boolean;
            set include_me(val: boolean);
            get includeMe(): boolean;
            set includeMe(val: boolean);
            get last_notified(): string;
            set last_notified(val: string);
            get lastNotified(): string;
            set lastNotified(val: string);

            // Constructors

            constructor(properties?: Partial<SourceAlarms.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_alarms_get_last_notified().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAlarms:last-notified
             */
            dup_last_notified(): string | null;
            /**
             * Returns whether the user should be alerted about all upcoming appointments
             * in the calendar described by the #ESource to which `extension` belongs.
             *
             * This is used in addition to the GSettings key defall-reminder-enabled
             * in org.gnome.evolution-data-server.calendar.
             * @returns whether to show alarms for every event
             */
            get_for_every_event(): boolean;
            /**
             * Returns whether the user should be alerted about upcoming appointments
             * in the calendar described by the #ESource to which `extension` belongs.
             *
             * Alarm daemons such as evolution-alarm-notify can use this property to
             * decide which calendars to query for upcoming appointments.
             * @returns whether to show alarms for upcoming appointments
             */
            get_include_me(): boolean;
            /**
             * Returns an ISO 8601 formatted timestamp of when the user was last
             * alerted about an upcoming appointment in the calendar described by
             * the #ESource to which `extension` belongs.  If no valid timestamp
             * has been set, the function will return %NULL.
             * @returns an ISO 8601 timestamp, or %NULL
             */
            get_last_notified(): string | null;
            /**
             * Sets whether the user should be alerted about every event in
             * the calendar described by the #ESource to which `extension` belongs.
             *
             * This is used in addition to the GSettings key defall-reminder-enabled
             * in org.gnome.evolution-data-server.calendar.
             * @param for_every_event whether to show alarms for every event
             */
            set_for_every_event(for_every_event: boolean): void;
            /**
             * Sets whether the user should be alerted about upcoming appointments in
             * the calendar described by the #ESource to which `extension` belongs.
             *
             * Alarm daemons such as evolution-alarm-notify can use this property to
             * decide which calendars to query for upcoming appointments.
             * @param include_me whether to show alarms for upcoming appointments
             */
            set_include_me(include_me: boolean): void;
            /**
             * Sets an ISO 8601 formatted timestamp of when the user was last
             * alerted about an upcoming appointment in the calendar described
             * by the #ESource to which `extension` belongs.
             *
             * If `last_notified` is non-%NULL, the function will validate the
             * timestamp before setting the #ESourceAlarms:last-notified property.
             * Invalid timestamps are discarded with a runtime warning.
             *
             * Generally, this function should only be called by an alarm daemon
             * such as evolution-alarm-notify.
             * @param last_notified an ISO 8601 timestamp, or %NULL
             */
            set_last_notified(last_notified?: string | null): void;
        }

        module SourceAuthentication {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                connectable: Gio.SocketConnectable;
                credential_name: string;
                credentialName: string;
                host: string;
                is_external: boolean;
                isExternal: boolean;
                method: string;
                port: number;
                proxy_uid: string;
                proxyUid: string;
                remember_password: boolean;
                rememberPassword: boolean;
                user: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceAuthentication extends SourceExtension {
            static $gtype: GObject.GType<SourceAuthentication>;

            // Properties

            get connectable(): Gio.SocketConnectable;
            get credential_name(): string;
            set credential_name(val: string);
            get credentialName(): string;
            set credentialName(val: string);
            get host(): string;
            set host(val: string);
            get is_external(): boolean;
            set is_external(val: boolean);
            get isExternal(): boolean;
            set isExternal(val: boolean);
            get method(): string;
            set method(val: string);
            get port(): number;
            set port(val: number);
            get proxy_uid(): string;
            set proxy_uid(val: string);
            get proxyUid(): string;
            set proxyUid(val: string);
            get remember_password(): boolean;
            set remember_password(val: boolean);
            get rememberPassword(): boolean;
            set rememberPassword(val: boolean);
            get user(): string;
            set user(val: string);

            // Constructors

            constructor(properties?: Partial<SourceAuthentication.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_authentication_get_credential_name().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAuthentication:credential-name
             */
            dup_credential_name(): string | null;
            /**
             * Thread-safe variation of e_source_authentication_get_host().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAuthentication:host
             */
            dup_host(): string | null;
            /**
             * Thread-safe variation of e_source_authentication_get_method().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAuthentication:method
             */
            dup_method(): string | null;
            /**
             * Thread-safe variation of e_source_authentication_get_proxy_uid().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAuthentication:proxy-uid
             */
            dup_proxy_uid(): string;
            /**
             * Thread-safe variation of e_source_authentication_get_user().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAuthentication:user
             */
            dup_user(): string | null;
            /**
             * Returns the credential name used to pass the stored or gathered credential
             * (like password) into the e_source_invoke_authenticate(). This is
             * a counterpart of the authentication method. The %NULL means to use
             * the default name, which is #E_SOURCE_CREDENTIAL_PASSWORD.
             * @returns the credential name to use for authentication, or %NULL
             */
            get_credential_name(): string | null;
            /**
             * Returns the host name used to authenticate to a remote account.
             * @returns the host name of a remote account
             */
            get_host(): string | null;
            /**
             * Get if the authentication is done by an external application such as a
             * Single Sign On application (e.g. GNOME Online Accounts)
             * @returns %TRUE if the authentication is done by an external application, %FALSE otherwise
             */
            get_is_external(): boolean;
            /**
             * Returns the authentication method for a remote account.  There are
             * no pre-defined method names; backends are free to set this however
             * they wish.  If authentication is not required for a remote account,
             * the convention is to set #ESourceAuthentication:method to "none".
             * @returns the authentication method for a remote account
             */
            get_method(): string | null;
            /**
             * Returns the port number used to authenticate to a remote account.
             * @returns the port number of a remote account
             */
            get_port(): number;
            /**
             * Returns the #ESource:uid of the #ESource that holds network proxy
             * settings for use when connecting to a remote account.
             * @returns the proxy profile #ESource:uid
             */
            get_proxy_uid(): string;
            /**
             * Returns whether to offer to remember the provided password by default
             * in password prompts.  This way, if the user unchecks the option it will
             * be unchecked by default in future password prompts.
             * @returns whether to offer to remember the password by default
             */
            get_remember_password(): boolean;
            /**
             * Returns the user name used to authenticate to a remote account.
             * @returns the user name of a remote account
             */
            get_user(): string | null;
            /**
             * Returns a #GSocketConnectable instance constructed from `extension'`s
             * #ESourceAuthentication:host and #ESourceAuthentication:port properties,
             * or %NULL if the #ESourceAuthentication:host is not set.
             *
             * The returned #GSocketConnectable is referenced for thread-safety and must
             * be unreferenced with g_object_unref() when finished with it.
             * @returns a #GSocketConnectable, or %NULL
             */
            ref_connectable(): Gio.SocketConnectable | null;
            /**
             * This is a convenience function which returns whether authentication
             * is required at all, regardless of the method used.  This relies on
             * the convention of setting #ESourceAuthentication:method to "none"
             * when authentication is <emphasis>not</emphasis> required.
             * @returns whether authentication is required at all
             */
            required(): boolean;
            /**
             * Sets the credential name used to pass the stored or gathered credential
             * (like password) into the e_source_invoke_authenticate(). This is
             * a counterpart of the authentication method. The %NULL means to use
             * the default name, which is #E_SOURCE_CREDENTIAL_PASSWORD.
             *
             * The internal copy of `credential_name` is automatically stripped
             * of leading and trailing whitespace. If the resulting string is
             * empty, %NULL is set instead.
             * @param credential_name a credential name, or %NULL
             */
            set_credential_name(credential_name?: string | null): void;
            /**
             * Sets the host name used to authenticate to a remote account.
             *
             * The internal copy of `host` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param host a host name, or %NULL
             */
            set_host(host?: string | null): void;
            /**
             * Set if the authentication is done by an external application such as a
             * Single Sign On application (e.g. GNOME Online Accounts)
             * @param is_external %TRUE if the authentication is done using an external application, %FALSE otherwise
             */
            set_is_external(is_external: boolean): void;
            /**
             * Sets the authentication method for a remote account.  There are no
             * pre-defined method names; backends are free to set this however they
             * wish.  If authentication is not required for a remote account, the
             * convention is to set the method to "none".  In keeping with that
             * convention, #ESourceAuthentication:method will be set to "none" if
             * `method` is %NULL or an empty string.
             * @param method authentication method, or %NULL
             */
            set_method(method?: string | null): void;
            /**
             * Sets the port number used to authenticate to a remote account.
             * @param port a port number
             */
            set_port(port: number): void;
            /**
             * Sets the #ESource:uid of the #ESource that holds network proxy settings
             * for use when connecting to a remote account.
             * @param proxy_uid the proxy profile #ESource:uid
             */
            set_proxy_uid(proxy_uid: string): void;
            /**
             * Sets whether to offer to remember the provided password by default in
             * password prompts.  This way, if the user unchecks the option it will be
             * unchecked by default in future password prompts.
             * @param remember_password whether to offer to remember the password by default
             */
            set_remember_password(remember_password: boolean): void;
            /**
             * Sets the user name used to authenticate to a remote account.
             *
             * The internal copy of `user` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param user a user name, or %NULL
             */
            set_user(user?: string | null): void;
        }

        module SourceAutocomplete {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                include_me: boolean;
                includeMe: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceAutocomplete extends SourceExtension {
            static $gtype: GObject.GType<SourceAutocomplete>;

            // Properties

            get include_me(): boolean;
            set include_me(val: boolean);
            get includeMe(): boolean;
            set includeMe(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceAutocomplete.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether the address book described by the #ESource to which
             * `extension` belongs should be queried when the user inputs a partial
             * contact name or email address.
             * @returns whether to use the autocomplete feature
             */
            get_include_me(): boolean;
            /**
             * Sets whether the address book described by the #ESource to which
             * `extension` belongs should be queried when the user inputs a partial
             * contact name or email address.
             * @param include_me whether to use the autocomplete feature
             */
            set_include_me(include_me: boolean): void;
        }

        module SourceAutoconfig {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                revision: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceAutoconfig extends SourceExtension {
            static $gtype: GObject.GType<SourceAutoconfig>;

            // Properties

            get revision(): string;
            set revision(val: string);

            // Constructors

            constructor(properties?: Partial<SourceAutoconfig.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_autoconfig_get_revision().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceAutoconfig:revision
             */
            dup_revision(): string;
            /**
             * Returns the revision of a data source. This maps a particular version of a
             * system-wide source to a user-specific source.
             *
             * If doesn't match, the system-wide source will be copied to the user-specific
             * evolution config directory, preserving the already present fields that are
             * not defined by the system-wide source.
             *
             * If it matches, no copying is done.
             * @returns revision of the data source
             */
            get_revision(): string;
            /**
             * Sets the revision used to map a particular version of a system-wide source
             * to a user-specific source.
             *
             * If doesn't match, the system-wide source will be copied to the user-specific
             * evolution config directory, preserving the already present fields that are
             * not defined by the system-wide source.
             *
             * If it matches, no copying is done.
             *
             * The internal copy of `revision` is automatically stripped of leading and
             * trailing whitespace.
             * @param revision a revision
             */
            set_revision(revision: string): void;
        }

        module SourceBackend {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                backend_name: string;
                backendName: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class SourceBackend extends SourceExtension {
            static $gtype: GObject.GType<SourceBackend>;

            // Properties

            get backend_name(): string;
            set backend_name(val: string);
            get backendName(): string;
            set backendName(val: string);

            // Constructors

            constructor(properties?: Partial<SourceBackend.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_backend_get_backend_name().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceBackend:backend-name
             */
            dup_backend_name(): string | null;
            /**
             * Returns the backend name for `extension`.
             * @returns the backend name for @extension
             */
            get_backend_name(): string | null;
            /**
             * Sets the backend name for `extension`.
             *
             * The internal copy of `backend_name` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param backend_name a backend name, or %NULL
             */
            set_backend_name(backend_name?: string | null): void;
        }

        module SourceCalendar {
            // Constructor properties interface

            interface ConstructorProps extends SourceSelectable.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceCalendar extends SourceSelectable {
            static $gtype: GObject.GType<SourceCalendar>;

            // Constructors

            constructor(properties?: Partial<SourceCalendar.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceCamel {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                settings: Camel.Settings;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class SourceCamel extends SourceExtension {
            static $gtype: GObject.GType<SourceCamel>;

            // Properties

            get settings(): Camel.Settings;

            // Constructors

            constructor(properties?: Partial<SourceCamel.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Static methods

            /**
             * Generates a custom #ESourceCamel subtype for `protocol`.  Instances of the
             * new subtype will contain a #CamelSettings instance of type `settings_type`.
             *
             * This function is called as part of e_source_camel_register_types() and
             * should not be called explicitly, except by some groupware packages that
             * need to share package-specific settings across their mail, calendar and
             * address book components.  In that case the groupware package may choose
             * to subclass #CamelSettings rather than #ESourceExtension since libcamel
             * is the lowest common denominator across all components.  This function
             * provides a way for the calendar and address book components of such a
             * package to generate an #ESourceCamel subtype for its #CamelSettings
             * subtype without having to load all available #CamelProvider modules.
             * @param protocol a #CamelProvider protocol
             * @param settings_type a subtype of #CamelSettings
             */
            static generate_subtype(protocol: string, settings_type: GObject.GType): GObject.GType;
            /**
             * Returns the extension name for the #ESourceCamel subtype for `protocol`.
             * The extension name can then be passed to e_source_get_extension() to
             * obtain an instance of the #ESourceCamel subtype.
             *
             * For example, given a protocol named "imap" the function would return
             * "Imap Backend".
             * @param protocol a #CamelProvider protocol
             */
            static get_extension_name(protocol: string): string;
            /**
             * Returns the #GType name of the registered #ESourceCamel subtype for
             * `protocol`.
             *
             * For example, given a protocol named "imap" the function would return
             * "ESourceCamelImap".
             * @param protocol a #CamelProvider protocol
             */
            static get_type_name(protocol: string): string;
            /**
             * Creates and registers subclasses of #ESourceCamel for each available
             * #CamelProvider.  This function should be called once during application
             * or library initialization.
             */
            static register_types(): void;

            // Methods

            /**
             * Returns `extension'`s #ESourceCamel:settings instance, pre-configured
             * from the #ESource to which `extension` belongs.  Changes to the #ESource
             * will automatically propagate to the #ESourceCamel:settings instance and
             * vice versa.
             *
             * This is essentially the glue that binds #ESource to #CamelService.
             * See e_source_camel_configure_service().
             * @returns a configured #CamelSettings instance
             */
            get_settings(): Camel.Settings;
        }

        module SourceCollection {
            // Constructor properties interface

            interface ConstructorProps extends SourceBackend.ConstructorProps {
                allow_sources_rename: boolean;
                allowSourcesRename: boolean;
                calendar_enabled: boolean;
                calendarEnabled: boolean;
                calendar_url: string;
                calendarUrl: string;
                contacts_enabled: boolean;
                contactsEnabled: boolean;
                contacts_url: string;
                contactsUrl: string;
                identity: string;
                mail_enabled: boolean;
                mailEnabled: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceCollection extends SourceBackend {
            static $gtype: GObject.GType<SourceCollection>;

            // Properties

            get allow_sources_rename(): boolean;
            set allow_sources_rename(val: boolean);
            get allowSourcesRename(): boolean;
            set allowSourcesRename(val: boolean);
            get calendar_enabled(): boolean;
            set calendar_enabled(val: boolean);
            get calendarEnabled(): boolean;
            set calendarEnabled(val: boolean);
            get calendar_url(): string;
            set calendar_url(val: string);
            get calendarUrl(): string;
            set calendarUrl(val: string);
            get contacts_enabled(): boolean;
            set contacts_enabled(val: boolean);
            get contactsEnabled(): boolean;
            set contactsEnabled(val: boolean);
            get contacts_url(): string;
            set contacts_url(val: string);
            get contactsUrl(): string;
            set contactsUrl(val: string);
            get identity(): string;
            set identity(val: string);
            get mail_enabled(): boolean;
            set mail_enabled(val: boolean);
            get mailEnabled(): boolean;
            set mailEnabled(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceCollection.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_collection_get_calendar_url().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceCollection:calendar-url
             */
            dup_calendar_url(): string | null;
            /**
             * Thread-safe variation of e_source_collection_get_contacts_url().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceCollection:contacts-url
             */
            dup_contacts_url(): string | null;
            /**
             * Thread-safe variation of e_source_collection_get_identity().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceCollection:identity
             */
            dup_identity(): string | null;
            /**
             * Returns whether the collection backend allows a user to rename child
             * sources. It is meant mainly for GUI. The default is %FALSE.
             * @returns whether the collection backend allows a user to rename child sources
             */
            get_allow_sources_rename(): boolean;
            /**
             * Returns whether calendar sources within the collection should be
             * enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any calendar sources it maintains with the
             * #ESourceCollection:calendar-enabled property.
             * @returns whether calendar sources should be enabled
             */
            get_calendar_enabled(): boolean;
            /**
             * Returns the calendar top URL string, that is, where to search for calendar sources.
             * @returns the calendar top URL, or %NULL
             */
            get_calendar_url(): string | null;
            /**
             * Returns whether address book sources within the collection should be
             * enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any address book sources it maintains with
             * the #ESourceCollection:contacts-enabled property.
             * @returns whether address book sources should be enabled
             */
            get_contacts_enabled(): boolean;
            /**
             * Returns the contacts top URL string, that is, where to search for contact sources.
             * @returns the contacts top URL, or %NULL
             */
            get_contacts_url(): string | null;
            /**
             * Returns the string used to uniquely identify the user account at
             * the service provider.  Often this is an email address or user name.
             * @returns the collection identity
             */
            get_identity(): string | null;
            /**
             * Returns whether mail sources within the collection should be enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any mail sources it maintains with the
             * #ESourceCollection:mail-enabled property.
             * @returns whether mail sources should be enabled
             */
            get_mail_enabled(): boolean;
            /**
             * Sets whether the collection backend allows a user to rename child
             * sources. It is meant mainly for GUI. The default is %FALSE.
             * @param allow_sources_rename whether mail sources should be enabled
             */
            set_allow_sources_rename(allow_sources_rename: boolean): void;
            /**
             * Sets whether calendar sources within the collection should be enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any calendar sources it maintains with the
             * #ESourceCollection:calendar-enabled property.
             *
             * Calling this function from a registry service client has no effect until
             * the change is submitted to the registry service through e_source_write(),
             * but there should rarely be any need for clients to call this.
             * @param calendar_enabled whether calendar sources should be enabled
             */
            set_calendar_enabled(calendar_enabled: boolean): void;
            /**
             * Sets the calendar top URL, that is, where to search for calendar sources.
             *
             * The internal copy of `calendar_url` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param calendar_url calendar top URL, or %NULL
             */
            set_calendar_url(calendar_url?: string | null): void;
            /**
             * Sets whether address book sources within the collection should be enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any address book sources it maintains with
             * the #ESourceCollection:contacts-enabled property.
             *
             * Calling this function from a registry service client has no effect until
             * the change is submitted to the registry service through e_source_write(),
             * but there should rarely be any need for clients to call this.
             * @param contacts_enabled whether address book sources should be enabled
             */
            set_contacts_enabled(contacts_enabled: boolean): void;
            /**
             * Sets the contacts top URL, that is, where to search for contact sources.
             *
             * The internal copy of `contacts_url` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param contacts_url contacts top URL, or %NULL
             */
            set_contacts_url(contacts_url?: string | null): void;
            /**
             * Sets the string used to uniquely identify the user account at the
             * service provider.  Often this is an email address or user name.
             *
             * The internal copy of `identity` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is
             * set instead.
             * @param identity the collection identity, or %NULL
             */
            set_identity(identity?: string | null): void;
            /**
             * Sets whether mail sources within the collection should be enabled.
             *
             * An #ECollectionBackend running within the registry D-Bus service will
             * automatically synchronize any mail sources it maintains with the
             * #ESourceCollection:mail-enabled property.
             *
             * Calling this function from a registry service client has no effect until
             * the changes is submitted to the registry service through e_source_write(),
             * but there should rarely be any need for clients to call this.
             * @param mail_enabled whether mail sources should be enabled
             */
            set_mail_enabled(mail_enabled: boolean): void;
        }

        module SourceContacts {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                include_me: boolean;
                includeMe: boolean;
            }
        }

        class SourceContacts extends SourceExtension {
            static $gtype: GObject.GType<SourceContacts>;

            // Properties

            get include_me(): boolean;
            set include_me(val: boolean);
            get includeMe(): boolean;
            set includeMe(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceContacts.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            get_include_me(): boolean;
            set_include_me(include_me: boolean): void;
        }

        module SourceCredentialsProvider {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps, Extensible.ConstructorProps {
                registry: GObject.Object;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceCredentialsProvider extends GObject.Object implements Extensible {
            static $gtype: GObject.GType<SourceCredentialsProvider>;

            // Properties

            /**
             * The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer.
             */
            get registry(): GObject.Object;

            // Constructors

            constructor(properties?: Partial<SourceCredentialsProvider.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](registry: SourceRegistry): SourceCredentialsProvider;

            // Virtual methods

            /**
             * Returns referenced #ESource with the given `uid,` or %NULL, when it could not be found.
             * @param uid an #ESource UID
             */
            vfunc_ref_source(uid: string): Source | null;

            // Methods

            /**
             * Returns whether a credentials prompt can be shown for the `source`.
             * @param source an #ESource
             * @returns %TRUE, when a credentials prompt can be shown for @source, %FALSE otherwise.
             */
            can_prompt(source: Source): boolean;
            /**
             * Returns whether the `source` can store its credentials. When %FALSE is returned,
             * an attempt to call e_source_credentials_provider_store() or
             * e_source_credentials_provider_store_sync() will fail for this `source`.
             * @param source an #ESource
             * @returns %TRUE, when the credentials storing for @source is possible, %FALSE otherwise.
             */
            can_store(source: Source): boolean;
            /**
             * Asynchronously deletes any previously stored credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_delete_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             */
            ['delete'](source: Source, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously deletes any previously stored credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_delete_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            ['delete'](
                source: Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously deletes any previously stored credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_delete_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            ['delete'](
                source: Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_credentials_provider_delete().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            delete_finish(result: Gio.AsyncResult): boolean;
            /**
             * Deletes any previously stored credentials for `source`.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource, to store credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously looks up for credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_lookup_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             */
            lookup(source: Source, cancellable?: Gio.Cancellable | null): Promise<NamedParameters>;
            /**
             * Asynchronously looks up for credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_lookup_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            lookup(
                source: Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously looks up for credentials for `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_lookup_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            lookup(
                source: Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<NamedParameters> | void;
            /**
             * Finishes the operation started with e_source_credentials_provider_lookup().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            lookup_finish(result: Gio.AsyncResult): [boolean, NamedParameters];
            /**
             * Looks up the credentials for `source`.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource, to lookup credentials for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];
            /**
             * Returns a referenced parent #ESource, which holds the credentials for
             * the given `source`. This is useful for collections, where the credentials
             * are usually stored on the collection source, thus shared between child
             * sources. When ther eis no such parent source, a %NULL is returned, which
             * means the `source` holds credentials for itself.
             * @param source an #ESource
             * @returns referenced parent #ESource, which holds    credentials, or %NULL. Unref the returned non-NULL #ESource with    g_object_unref(), when no longer needed.
             */
            ref_credentials_source(source: Source): Source | null;
            /**
             * Returns refenrenced registry associated with this `provider`.
             * @returns Reference registry associated with this @provider. Unref it    with g_object_unref() when no longer needed.
             */
            ref_registry<T = GObject.Object>(): T;
            /**
             * Returns referenced #ESource with the given `uid,` or %NULL, when it could not be found.
             * @param uid an #ESource UID
             * @returns Referenced #ESource with the given @uid, or %NULL, when it    could not be found. Unref the returned #ESource with g_object_unref(), when no longer needed.
             */
            ref_source(uid: string): Source | null;
            /**
             * Registers a credentials provider implementation and adds its own reference on
             * the `provider_impl`.
             * @param provider_impl an #ESourceCredentialsProviderImpl
             * @returns %TRUE on success, %FALSE on failure, like when there is    the @provider_impl already registered.
             */
            register_impl(provider_impl: SourceCredentialsProviderImpl): boolean;
            /**
             * Asynchronously stores the `credentials` for `source`. Note the actual stored
             * values can differ for each storage. In other words, not all named parameters
             * are stored for each `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_store_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param credentials an #ENamedParameters with credentials to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             */
            store(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
            ): Promise<boolean>;
            /**
             * Asynchronously stores the `credentials` for `source`. Note the actual stored
             * values can differ for each storage. In other words, not all named parameters
             * are stored for each `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_store_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param credentials an #ENamedParameters with credentials to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            store(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously stores the `credentials` for `source`. Note the actual stored
             * values can differ for each storage. In other words, not all named parameters
             * are stored for each `source`.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_credentials_provider_store_finish() to get the result
             * of the operation.
             * @param source an #ESource, to lookup credentials for
             * @param credentials an #ENamedParameters with credentials to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            store(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_credentials_provider_store().
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on error
             */
            store_finish(result: Gio.AsyncResult): boolean;
            /**
             * Stores the `credentials` for `source`. Note the actual stored values
             * can differ for each storage. In other words, not all named parameters
             * are stored for each `source`.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource, to store credentials for
             * @param credentials an #ENamedParameters with credentials to store
             * @param permanently store permanently or just for the session
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            store_sync(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Unregisters previously registered `provider_impl` with
             * e_source_credentials_provider_register_impl(). Function does nothing,
             * when the `provider_impl` is not registered.
             * @param provider_impl an #ESourceCredentialsProviderImpl
             */
            unregister_impl(provider_impl: SourceCredentialsProviderImpl): void;

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
            list_extensions(extension_type: GObject.GType): Extension[];
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

        module SourceCredentialsProviderImpl {
            // Constructor properties interface

            interface ConstructorProps extends Extension.ConstructorProps {}
        }

        /**
         * Credentials provider implementation base structure. The descendants
         * implement the virtual methods. The descendants are automatically
         * registered into an #ESourceCredentialsProvider.
         */
        abstract class SourceCredentialsProviderImpl extends Extension {
            static $gtype: GObject.GType<SourceCredentialsProviderImpl>;

            // Constructors

            constructor(properties?: Partial<SourceCredentialsProviderImpl.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Virtual methods

            /**
             * Returns whether the `provider_impl` can process credentials for the `source`.
             * @param source an #ESource
             */
            vfunc_can_process(source: Source): boolean;
            /**
             * Returns whether credential prompt can be done for the `provider_impl`.
             */
            vfunc_can_prompt(): boolean;
            /**
             * Returns whether the `provider_impl` can store credentials.
             */
            vfunc_can_store(): boolean;
            /**
             * Asks `provider_impl` to delete any stored credentials for `source`.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asks `provider_impl` to lookup for stored credentials for `source`.
             * The `out_credentials` is populated with them. If the result is not
             * %NULL, then it should be freed with e_named_parameters_free() when
             * no longer needed.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];
            /**
             * Asks `provider_impl` to store `credentials` for `source`.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param credentials an #ENamedParameters containing credentials to store
             * @param permanently whether to store credentials permanently, or for the current session only
             * @param cancellable optional #GCancellable object, or %NULL
             */
            vfunc_store_sync(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;

            // Methods

            /**
             * Returns whether the `provider_impl` can process credentials for the `source`.
             * @param source an #ESource
             * @returns Whether the @provider_impl can process credentials for the @source.
             */
            can_process(source: Source): boolean;
            /**
             * Returns whether credential prompt can be done for the `provider_impl`.
             * @returns Whether credential prompt can be done for the @provider_impl.
             */
            can_prompt(): boolean;
            /**
             * Returns whether the `provider_impl` can store credentials.
             * @returns Whether the @provider_impl can store credentials.
             */
            can_store(): boolean;
            /**
             * Asks `provider_impl` to delete any stored credentials for `source`.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Returns an #ESourceCredentialsProvider with which the `provider_impl` is associated.
             * @returns an #ESourceCredentialsProvider
             */
            get_provider(): any | null;
            /**
             * Asks `provider_impl` to lookup for stored credentials for `source`.
             * The `out_credentials` is populated with them. If the result is not
             * %NULL, then it should be freed with e_named_parameters_free() when
             * no longer needed.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            lookup_sync(source: Source, cancellable: Gio.Cancellable | null): [boolean, NamedParameters];
            /**
             * Asks `provider_impl` to store `credentials` for `source`.
             *
             * Default implementation returns %FALSE and sets #G_IO_ERROR_NOT_SUPPORTED error.
             *
             * If an error occurs, the function sets `error` and returns %FALSE.
             * @param source an #ESource
             * @param credentials an #ENamedParameters containing credentials to store
             * @param permanently whether to store credentials permanently, or for the current session only
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on error
             */
            store_sync(
                source: Source,
                credentials: NamedParameters,
                permanently: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }

        module SourceCredentialsProviderImplOAuth2 {
            // Constructor properties interface

            interface ConstructorProps extends SourceCredentialsProviderImpl.ConstructorProps {}
        }

        /**
         * OAuth2 based credentials provider implementation.
         */
        class SourceCredentialsProviderImplOAuth2 extends SourceCredentialsProviderImpl {
            static $gtype: GObject.GType<SourceCredentialsProviderImplOAuth2>;

            // Constructors

            constructor(properties?: Partial<SourceCredentialsProviderImplOAuth2.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceCredentialsProviderImplPassword {
            // Constructor properties interface

            interface ConstructorProps extends SourceCredentialsProviderImpl.ConstructorProps {}
        }

        /**
         * Password based credentials provider implementation.
         */
        class SourceCredentialsProviderImplPassword extends SourceCredentialsProviderImpl {
            static $gtype: GObject.GType<SourceCredentialsProviderImplPassword>;

            // Constructors

            constructor(properties?: Partial<SourceCredentialsProviderImplPassword.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceExtension {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                source: Source;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class SourceExtension extends GObject.Object {
            static $gtype: GObject.GType<SourceExtension>;

            // Properties

            get source(): Source;

            // Constructors

            constructor(properties?: Partial<SourceExtension.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the #ESource instance to which `extension` belongs.
             *
             * Note this function is not thread-safe.  The returned #ESource could
             * be finalized by another thread while the caller is still using it.
             * @returns the #ESource instance
             */
            get_source(): Source;
            /**
             * Acquires a property lock, thus no other thread can change properties
             * of the `extension` until the lock is released.
             */
            property_lock(): void;
            /**
             * Releases a property lock, previously acquired with e_source_extension_property_lock(),
             * thus other threads can change properties of the `extension`.
             */
            property_unlock(): void;
            /**
             * Returns the #ESource instance to which the `extension` belongs.
             *
             * The returned #ESource is referenced for thread-safety.  Unreference
             * the #ESource with g_object_unref() when finished with it.
             * @returns the #ESource instance
             */
            ref_source(): Source;
        }

        module SourceGoa {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                account_id: string;
                accountId: string;
                address: string;
                calendar_url: string;
                calendarUrl: string;
                contacts_url: string;
                contactsUrl: string;
                name: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceGoa extends SourceExtension {
            static $gtype: GObject.GType<SourceGoa>;

            // Properties

            get account_id(): string;
            set account_id(val: string);
            get accountId(): string;
            set accountId(val: string);
            get address(): string;
            set address(val: string);
            get calendar_url(): string;
            set calendar_url(val: string);
            get calendarUrl(): string;
            set calendarUrl(val: string);
            get contacts_url(): string;
            set contacts_url(val: string);
            get contactsUrl(): string;
            set contactsUrl(val: string);
            get name(): string;
            set name(val: string);

            // Constructors

            constructor(properties?: Partial<SourceGoa.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_goa_get_account_id().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceGoa:account-id
             */
            dup_account_id(): string | null;
            /**
             * Thread-safe variation of e_source_goa_get_address().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceGoa:address
             */
            dup_address(): string | null;
            /**
             * Thread-safe variation of e_source_goa_get_calendar_url().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceGoa:calendar-url
             */
            dup_calendar_url(): string | null;
            /**
             * Thread-safe variation of e_source_goa_get_contacts_url().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceGoa:contacts-url
             */
            dup_contacts_url(): string | null;
            /**
             * Thread-safe variation of e_source_goa_get_name().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceGoa:name
             */
            dup_name(): string | null;
            /**
             * Returns the identifier string of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             * @returns the associated GNOME Online Account ID
             */
            get_account_id(): string | null;
            /**
             * Returns the original Address of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs. Can be %NULL or an empty
             * string when not filled.
             * @returns the associated GNOME Online Account's Address
             */
            get_address(): string | null;
            /**
             * Returns the calendar URL string of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs. Can be %NULL or an empty
             * string for accounts not supporting this property.
             * @returns the associated GNOME Online Account calendar URL
             */
            get_calendar_url(): string | null;
            /**
             * Returns the contacts URL string of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs. Can be %NULL or an empty
             * string for accounts not supporting this property.
             * @returns the associated GNOME Online Account contacts URL
             */
            get_contacts_url(): string | null;
            /**
             * Returns the original Name of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs. Can be %NULL or an empty
             * string when not filled.
             * @returns the associated GNOME Online Account's Name
             */
            get_name(): string | null;
            /**
             * Sets the identifier string of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             *
             * The internal copy of `account_id` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param account_id the associated GNOME Online Account ID, or %NULL
             */
            set_account_id(account_id?: string | null): void;
            /**
             * Sets the Address of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             *
             * The internal copy of `address` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param address the associated GNOME Online Account's Address, or %NULL
             */
            set_address(address?: string | null): void;
            /**
             * Sets the calendar URL of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             *
             * The internal copy of `calendar_url` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param calendar_url the associated GNOME Online Account                calendar URL, or %NULL
             */
            set_calendar_url(calendar_url?: string | null): void;
            /**
             * Sets the contacts URL of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             *
             * The internal copy of `contacts_url` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param contacts_url the associated GNOME Online Account                contacts URL, or %NULL
             */
            set_contacts_url(contacts_url?: string | null): void;
            /**
             * Sets the Name of the GNOME Online Account associated
             * with the #ESource to which `extension` belongs.
             *
             * The internal copy of `name` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param name the associated GNOME Online Account's Name, or %NULL
             */
            set_name(name?: string | null): void;
        }

        module SourceLDAP {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                authentication: SourceLDAPAuthentication;
                can_browse: boolean;
                canBrowse: boolean;
                filter: string;
                limit: number;
                root_dn: string;
                rootDn: string;
                scope: SourceLDAPScope;
                security: SourceLDAPSecurity;
            }
        }

        class SourceLDAP extends SourceExtension {
            static $gtype: GObject.GType<SourceLDAP>;

            // Properties

            get authentication(): SourceLDAPAuthentication;
            set authentication(val: SourceLDAPAuthentication);
            get can_browse(): boolean;
            set can_browse(val: boolean);
            get canBrowse(): boolean;
            set canBrowse(val: boolean);
            get filter(): string;
            set filter(val: string);
            get limit(): number;
            set limit(val: number);
            get root_dn(): string;
            set root_dn(val: string);
            get rootDn(): string;
            set rootDn(val: string);
            get scope(): SourceLDAPScope;
            set scope(val: SourceLDAPScope);
            get security(): SourceLDAPSecurity;
            set security(val: SourceLDAPSecurity);

            // Constructors

            constructor(properties?: Partial<SourceLDAP.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            dup_filter(): string;
            dup_root_dn(): string;
            get_authentication(): SourceLDAPAuthentication;
            get_can_browse(): boolean;
            get_filter(): string;
            get_limit(): number;
            get_root_dn(): string;
            get_scope(): SourceLDAPScope;
            get_security(): SourceLDAPSecurity;
            set_authentication(authentication: SourceLDAPAuthentication | null): void;
            set_can_browse(can_browse: boolean): void;
            set_filter(filter: string): void;
            set_limit(limit: number): void;
            set_root_dn(root_dn: string): void;
            set_scope(scope: SourceLDAPScope | null): void;
            set_security(security: SourceLDAPSecurity | null): void;
        }

        module SourceLocal {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                custom_file: Gio.File;
                customFile: Gio.File;
                email_address: string;
                emailAddress: string;
                writable: boolean;
            }
        }

        class SourceLocal extends SourceExtension {
            static $gtype: GObject.GType<SourceLocal>;

            // Properties

            get custom_file(): Gio.File;
            set custom_file(val: Gio.File);
            get customFile(): Gio.File;
            set customFile(val: Gio.File);
            get email_address(): string;
            set email_address(val: string);
            get emailAddress(): string;
            set emailAddress(val: string);
            get writable(): boolean;
            set writable(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceLocal.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * A thread safe variant to get a custom file being set on the `extension`.
             * Free the returned #GFile, if not %NULL, with g_object_unref(),
             * when no longer needed.
             * @returns the #GFile instance, or %NULL
             */
            dup_custom_file(): Gio.File | null;
            /**
             * Thread-safe variation of e_source_lcoal_get_email_address().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceLocal:email-address
             */
            dup_email_address(): string;
            /**
             * Get the custom file being set on the `extension`.
             * The returned #GFile is owned by the `extension`.
             *
             * For thread safety use e_source_local_dup_custom_file().
             * @returns the #GFile instance, or %NULL
             */
            get_custom_file(): Gio.File | null;
            get_email_address(): string | null;
            /**
             * Returns whether the backend should prefer to open the file
             * in writable mode. The default is %TRUE. The file can be still
             * opened for read-only, for example when the access to the file
             * is read-only.
             * @returns whether prefer to pen the file in writable mode
             */
            get_writable(): boolean;
            /**
             * Set, or unset, when using %NULL, the custom file for the `extension`.
             * @param custom_file a #GFile, or %NULL
             */
            set_custom_file(custom_file?: Gio.File | null): void;
            /**
             * Sets the email address for `extension`.
             *
             * The internal copy of `email_address` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param email_address an email address, or %NULL
             */
            set_email_address(email_address?: string | null): void;
            /**
             * Set whether the custom file should be opened in writable mode.
             * The default is %TRUE. The file can be still opened for read-only,
             * for example when the access to the file is read-only.
             * @param writable value to set
             */
            set_writable(writable: boolean): void;
        }

        module SourceMDN {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                response_policy: MdnResponsePolicy;
                responsePolicy: MdnResponsePolicy;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMDN extends SourceExtension {
            static $gtype: GObject.GType<SourceMDN>;

            // Properties

            get response_policy(): MdnResponsePolicy;
            set response_policy(val: MdnResponsePolicy);
            get responsePolicy(): MdnResponsePolicy;
            set responsePolicy(val: MdnResponsePolicy);

            // Constructors

            constructor(properties?: Partial<SourceMDN.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the policy for this mail account on responding to Message
             * Disposition Notification requests when receiving mail messages.
             * @returns the #EMdnResponsePolicy for this account
             */
            get_response_policy(): MdnResponsePolicy;
            /**
             * Sets the policy for this mail account on responding to Message
             * Disposition Notification requests when receiving mail messages.
             * @param response_policy the #EMdnResponsePolicy
             */
            set_response_policy(response_policy: MdnResponsePolicy | null): void;
        }

        module SourceMailAccount {
            // Constructor properties interface

            interface ConstructorProps extends SourceBackend.ConstructorProps {
                archive_folder: string;
                archiveFolder: string;
                builtin: boolean;
                identity_uid: string;
                identityUid: string;
                mark_seen: ThreeState;
                markSeen: ThreeState;
                mark_seen_timeout: number;
                markSeenTimeout: number;
                needs_initial_setup: boolean;
                needsInitialSetup: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMailAccount extends SourceBackend {
            static $gtype: GObject.GType<SourceMailAccount>;

            // Properties

            get archive_folder(): string;
            set archive_folder(val: string);
            get archiveFolder(): string;
            set archiveFolder(val: string);
            get builtin(): boolean;
            set builtin(val: boolean);
            get identity_uid(): string;
            set identity_uid(val: string);
            get identityUid(): string;
            set identityUid(val: string);
            get mark_seen(): ThreeState;
            set mark_seen(val: ThreeState);
            get markSeen(): ThreeState;
            set markSeen(val: ThreeState);
            get mark_seen_timeout(): number;
            set mark_seen_timeout(val: number);
            get markSeenTimeout(): number;
            set markSeenTimeout(val: number);
            get needs_initial_setup(): boolean;
            set needs_initial_setup(val: boolean);
            get needsInitialSetup(): boolean;
            set needsInitialSetup(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceMailAccount.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_mail_account_get_archive_folder().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailAccount:archive-folder
             */
            dup_archive_folder(): string | null;
            /**
             * Thread-safe variation of e_source_mail_account_get_identity_uid().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailAccount:identity-uid
             */
            dup_identity_uid(): string | null;
            /**
             * Returns a string identifying the archive folder.
             * The format of the identifier string is defined by the client application.
             * @returns an identifier of the archive folder
             */
            get_archive_folder(): string | null;
            /**
             * Returns whether the mail account is a builtin account. The builtin
             * account cannot be created by a user. The default value is %FALSE.
             * @returns %TRUE, when the account is a builtin account
             */
            get_builtin(): boolean;
            /**
             * Returns the #ESource:uid of the #ESource that describes the mail
             * identity to be used for this account.
             * @returns the mail identity #ESource:uid
             */
            get_identity_uid(): string | null;
            get_mark_seen(): ThreeState;
            get_mark_seen_timeout(): number;
            /**
             * Check whether the mail account needs to do its initial setup.
             * @returns %TRUE, when the account needs to run its initial setup
             */
            get_needs_initial_setup(): boolean;
            /**
             * Sets the folder for sent messages by an identifier string.
             * The format of the identifier string is defined by the client application.
             *
             * The internal copy of `archive_folder` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param archive_folder an identifier for the archive folder, or %NULL
             */
            set_archive_folder(archive_folder?: string | null): void;
            /**
             * Sets whether the account is a builtin account. See e_source_mail_account_get_builtin()
             * for more information about what it means.
             * @param builtin value to set
             */
            set_builtin(builtin: number): void;
            /**
             * Sets the #ESource:uid of the #ESource that describes the mail
             * identity to be used for this account.
             * @param identity_uid the mail identity #ESource:uid, or %NULL
             */
            set_identity_uid(identity_uid?: string | null): void;
            /**
             * Sets whether the messages in this account should be marked
             * as seen automatically. An inconsistent state means to use
             * global option.
             * @param mark_seen an #EThreeState as the value to set
             */
            set_mark_seen(mark_seen: ThreeState | null): void;
            /**
             * Sets the `timeout` in milliseconds for marking messages
             * as seen in this account. Whether the timeout is used
             * depends on e_source_mail_account_get_mark_seen().
             * @param timeout a timeout in milliseconds
             */
            set_mark_seen_timeout(timeout: number): void;
            /**
             * Sets whether the account needs to run its initial setup.
             * @param needs_initial_setup value to set
             */
            set_needs_initial_setup(needs_initial_setup: boolean): void;
        }

        module SourceMailComposition {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                bcc: string[];
                cc: string[];
                drafts_folder: string;
                draftsFolder: string;
                language: string;
                reply_style: SourceMailCompositionReplyStyle;
                replyStyle: SourceMailCompositionReplyStyle;
                sign_imip: boolean;
                signImip: boolean;
                start_bottom: ThreeState;
                startBottom: ThreeState;
                templates_folder: string;
                templatesFolder: string;
                top_signature: ThreeState;
                topSignature: ThreeState;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMailComposition extends SourceExtension {
            static $gtype: GObject.GType<SourceMailComposition>;

            // Properties

            get bcc(): string[];
            set bcc(val: string[]);
            get cc(): string[];
            set cc(val: string[]);
            get drafts_folder(): string;
            set drafts_folder(val: string);
            get draftsFolder(): string;
            set draftsFolder(val: string);
            get language(): string;
            set language(val: string);
            get reply_style(): SourceMailCompositionReplyStyle;
            set reply_style(val: SourceMailCompositionReplyStyle);
            get replyStyle(): SourceMailCompositionReplyStyle;
            set replyStyle(val: SourceMailCompositionReplyStyle);
            get sign_imip(): boolean;
            set sign_imip(val: boolean);
            get signImip(): boolean;
            set signImip(val: boolean);
            get start_bottom(): ThreeState;
            set start_bottom(val: ThreeState);
            get startBottom(): ThreeState;
            set startBottom(val: ThreeState);
            get templates_folder(): string;
            set templates_folder(val: string);
            get templatesFolder(): string;
            set templatesFolder(val: string);
            get top_signature(): ThreeState;
            set top_signature(val: ThreeState);
            get topSignature(): ThreeState;
            set topSignature(val: ThreeState);

            // Constructors

            constructor(properties?: Partial<SourceMailComposition.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_mail_composition_get_bcc().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string array should be freed with g_strfreev() when no
             * longer needed.
             * @returns a newly-allocated copy of #ESourceMailComposition:bcc
             */
            dup_bcc(): string[];
            /**
             * Thread-safe variation of e_source_mail_composition_get_cc().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string array should be freed with g_strfreev() when no
             * longer needed.
             * @returns a newly-allocated copy of #ESourceMailComposition:cc
             */
            dup_cc(): string[];
            /**
             * Thread-safe variation of e_source_mail_composition_get_drafts_folder().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailComposition:drafts-folder
             */
            dup_drafts_folder(): string | null;
            /**
             * Thread-safe variation of e_source_mail_composition_get_language().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailComposition:language
             */
            dup_language(): string | null;
            /**
             * Thread-safe variation of e_source_mail_composition_get_templates_folder().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailComposition:templates-folder
             */
            dup_templates_folder(): string | null;
            /**
             * Returns a %NULL-terminated string array of recipients which should
             * automatically be added to the blind carbon-copy (Bcc) list when
             * composing a new mail message.  The recipient strings should be of
             * the form "Full Name &lt;email-address&gt;".  The returned array is
             * owned by `extension` and should not be modified or freed.
             * @returns a %NULL-terminated string array of Bcc recipients
             */
            get_bcc(): string[];
            /**
             * Returns a %NULL-terminated string array of recipients which should
             * automatically be added to the carbon-copy (Cc) list when composing a
             * new mail message.  The recipient strings should be of the form "Full
             * Name <email-address>".  The returned array is owned by `extension` and
             * should not be modified or freed.
             * @returns a %NULL-terminated string array of Cc recipients
             */
            get_cc(): string[];
            /**
             * Returns a string identifying the preferred folder for draft messages.
             * The format of the identifier string is defined by the client application.
             * @returns an identifier for the preferred drafts folder
             */
            get_drafts_folder(): string | null;
            /**
             * Returns a string identifying the preferred language, like "en_US".
             * @returns an identifier for the preferred language, or %NULL for none
             */
            get_language(): string | null;
            /**
             * Returns preferred reply style to be used when replying
             * using the associated account. If no preference is set,
             * the %E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT is returned.
             * @returns reply style preference
             */
            get_reply_style(): SourceMailCompositionReplyStyle;
            /**
             * Returns whether outgoing iMIP messages such as meeting requests should
             * also be signed.  This is primarily intended as a workaround for certain
             * versions of Microsoft Outlook which can't handle signed iMIP messages.
             * @returns whether outgoing iMIP messages should be signed
             */
            get_sign_imip(): boolean;
            /**
             * Returns whether start at bottom when replying or forwarding
             * using the associated account. If no preference is set,
             * the %E_THREE_STATE_INCONSISTENT is returned.
             * @returns start bottom on reply or forward preference
             */
            get_start_bottom(): ThreeState;
            /**
             * Returns a string identifying the preferred folder for message templates.
             * The format of the identifier string is defined by the client application.
             * @returns an identifier for the preferred templates folder
             */
            get_templates_folder(): string | null;
            /**
             * Returns whether place signature at top when replying or forwarding
             * using the associated account. If no preference is set,
             * the %E_THREE_STATE_INCONSISTENT is returned.
             * @returns top signature on reply or forward preference
             */
            get_top_signature(): ThreeState;
            /**
             * Sets the recipients which should automatically be added to the blind
             * carbon-copy (Bcc) list when composing a new mail message.  The recipient
             * strings should be of the form "Full Name &lt;email-address&gt;".
             * @param bcc a %NULL-terminated string array of Bcc    recipients
             */
            set_bcc(bcc: string[]): void;
            /**
             * Sets the recipients which should automatically be added to the carbon
             * copy (Cc) list when composing a new mail message.  The recipient strings
             * should be of the form "Full Name &lt;email-address&gt;".
             * @param cc a %NULL-terminated string array of Cc    recipients
             */
            set_cc(cc: string[]): void;
            /**
             * Sets the preferred folder for draft messages by an identifier string.
             * The format of the identifier string is defined by the client application.
             *
             * The internal copy of `drafts_folder` is automatically stripped of
             * leading and trailing whitespace.  If the resulting string is empty,
             * %NULL is set instead.
             * @param drafts_folder an identifier for the preferred drafts                 folder, or %NULL
             */
            set_drafts_folder(drafts_folder?: string | null): void;
            /**
             * Sets the preferred language by an identifier string, like "en_US".
             * Use %NULL to unset any previous value.
             *
             * The internal copy of `language` is automatically stripped of
             * leading and trailing whitespace.  If the resulting string is empty,
             * %NULL is set instead.
             * @param language an identifier for the preferred language, or %NULL
             */
            set_language(language?: string | null): void;
            /**
             * Sets preferred reply style to be used when replying
             * using the associated account. To unset the preference,
             * use the %E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT.
             * @param reply_style an #ESourceMailCompositionReplyStyle
             */
            set_reply_style(reply_style: SourceMailCompositionReplyStyle | null): void;
            /**
             * Sets whether outgoing iMIP messages such as meeting requests should
             * also be signed.  This is primarily intended as a workaround for certain
             * versions of Microsoft Outlook which can't handle signed iMIP messages.
             * @param sign_imip whether outgoing iMIP messages should be signed
             */
            set_sign_imip(sign_imip: boolean): void;
            /**
             * Sets whether start bottom when replying or forwarding using the associated account.
             * To unset the preference, use the %E_THREE_STATE_INCONSISTENT.
             * @param start_bottom an #EThreeState
             */
            set_start_bottom(start_bottom: ThreeState | null): void;
            /**
             * Sets the preferred folder for message templates by an identifier string.
             * The format of the identifier string is defined by the client application.
             *
             * The internal copy of `templates_folder` is automatically stripped of
             * leading and trailing whitespace.  If the resulting string is empty,
             * %NULL is set instead.
             * @param templates_folder an identifier for the preferred templates                    folder, or %NULL
             */
            set_templates_folder(templates_folder?: string | null): void;
            /**
             * Sets whether place signature at top when replying or forwarding using the associated account.
             * To unset the preference, use the %E_THREE_STATE_INCONSISTENT.
             * @param top_signature an #EThreeState
             */
            set_top_signature(top_signature: ThreeState | null): void;
        }

        module SourceMailIdentity {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                address: string;
                aliases: string;
                name: string;
                organization: string;
                reply_to: string;
                replyTo: string;
                signature_uid: string;
                signatureUid: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMailIdentity extends SourceExtension {
            static $gtype: GObject.GType<SourceMailIdentity>;

            // Properties

            get address(): string;
            set address(val: string);
            get aliases(): string;
            set aliases(val: string);
            get name(): string;
            set name(val: string);
            get organization(): string;
            set organization(val: string);
            get reply_to(): string;
            set reply_to(val: string);
            get replyTo(): string;
            set replyTo(val: string);
            get signature_uid(): string;
            set signature_uid(val: string);
            get signatureUid(): string;
            set signatureUid(val: string);

            // Constructors

            constructor(properties?: Partial<SourceMailIdentity.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_mail_identity_get_address().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:address
             */
            dup_address(): string | null;
            /**
             * Thread-safe variation of e_source_mail_identity_get_aliases().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:aliases
             */
            dup_aliases(): string | null;
            /**
             * Thread-safe variation of e_source_mail_identity_get_name().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:name
             */
            dup_name(): string | null;
            /**
             * Thread-safe variation of e_source_mail_identity_dup_organization().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:organization
             */
            dup_organization(): string | null;
            /**
             * Thread-safe variation of e_source_mail_identity_get_reply_to().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:reply-to
             */
            dup_reply_to(): string | null;
            /**
             * Thread-safe variation of e_source_mail_identity_get_signature_uid().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailIdentity:signature-uid
             */
            dup_signature_uid(): string | null;
            /**
             * Returns the email address for this identity from which to send messages.
             * This may be an empty string but will never be %NULL.
             * @returns the sender's email address
             */
            get_address(): string | null;
            /**
             * Returns the email address aliases for this identity. These are comma-separated
             * email addresses which may or may not contain also different name.
             * This may be an empty string, but will never be %NULL.
             * There can be used camel_address_decode() on a #CamelInternetAddress
             * to decode the list of aliases.
             * @returns the sender's email address aliases
             */
            get_aliases(): string | null;
            /**
             * Returns a set aliases as a hash table with address as key and
             * name as value of the hash table. The name can be sometimes
             * empty or NULL, thus rather use g_hash_table_contains() when
             * checking for particular address. The addresses are
             * compared case insensitively. The same addresses with a different
             * name are included only once, the last variant of it. Use
             * e_source_mail_identity_get_aliases() if you need more fine-grained
             * control on the list of aliases.
             * @returns A newly created   #GHashTable will all the aliases. Returns %NULL if there are none set.   Use g_hash_table_destroy() to free the returned hash table.
             */
            get_aliases_as_hash_table(): GLib.HashTable<string, string> | null;
            /**
             * Returns the sender's name for this identity.
             * @returns the sender's name
             */
            get_name(): string | null;
            /**
             * Returns the sender's organization for this identity.
             * @returns the sender's organization
             */
            get_organization(): string | null;
            /**
             * Returns the email address for this identity to which recipients should
             * send replies.
             * @returns the sender's reply-to address
             */
            get_reply_to(): string | null;
            /**
             * Returns the #ESource:uid of an #ESource describing a mail signature.
             *
             * If the user does not want to use a signature for this identity, the
             * convention is to set the #ESourceMailIdentity:signature-uid property
             * to "none".
             * @returns the sender's signature ID, or "none"
             */
            get_signature_uid(): string | null;
            /**
             * Sets the email address for this identity from which to send messages.
             *
             * The internal copy of `address` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param address the sender's email address, or %NULL
             */
            set_address(address?: string | null): void;
            /**
             * Sets the email address aliases for this identity. These are comma-separated
             * email addresses which may or may not contain also different name.
             *
             * The internal copy of `aliases` is automatically stripped of leading and
             * trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param aliases the sender's email address aliases, or %NULL
             */
            set_aliases(aliases?: string | null): void;
            /**
             * Sets the sender's name for this identity.
             *
             * The internal copy of `name` is automatically stripped of leading and
             * trailing whitespace.
             * @param name the sender's name, or %NULL
             */
            set_name(name?: string | null): void;
            /**
             * Sets the sender's organization for this identity.
             *
             * The internal copy of `organization` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param organization the sender's organization, or %NULL
             */
            set_organization(organization?: string | null): void;
            /**
             * Sets the email address for this identity to which recipients should
             * send replies.
             *
             * The internal copy of `reply_to` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is
             * set instead.
             * @param reply_to the sender's reply-to address, or %NULL
             */
            set_reply_to(reply_to?: string | null): void;
            /**
             * Sets the #ESource:uid of an #ESource describing a mail signature.
             *
             * If the user does not want to use a signature for this identity, the
             * convention is to set the #ESourceMailIdentity:signature-uid property
             * to "none".  In keeping with that convention, the property will be set
             * to "none" if `signature_uid` is %NULL or an empty string.
             * @param signature_uid the sender's signature ID, or %NULL
             */
            set_signature_uid(signature_uid?: string | null): void;
        }

        module SourceMailSignature {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                file: Gio.File;
                mime_type: string;
                mimeType: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * function below.
         */
        class SourceMailSignature extends SourceExtension {
            static $gtype: GObject.GType<SourceMailSignature>;

            // Properties

            get file(): Gio.File;
            get mime_type(): string;
            set mime_type(val: string);
            get mimeType(): string;
            set mimeType(val: string);

            // Constructors

            constructor(properties?: Partial<SourceMailSignature.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_mail_signature_get_mime_type().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailSignature:mime-type,    or %NULL
             */
            dup_mime_type(): string | null;
            /**
             * Returns a #GFile instance pointing to the signature file for `extension`.
             * The signature file may be a regular file containing the static signature
             * content, or it may be a symbolic link to an executable file that produces
             * the signature content.
             *
             * e_source_mail_signature_load() uses this to load the signature content.
             * @returns a #GFile
             */
            get_file(): Gio.File;
            /**
             * Returns the MIME type of the signature content for `extension,` or %NULL
             * if it has not yet been determined.
             *
             * e_source_mail_signature_load() sets this automatically if the MIME type
             * has not yet been determined.
             * @returns the MIME type of the signature content, or %NULL
             */
            get_mime_type(): string | null;
            /**
             * Sets the MIME type of the signature content for `extension`.
             *
             * e_source_mail_signature_load() sets this automatically if the MIME type
             * has not yet been determined.
             *
             * The internal copy of `mime_type` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is
             * set instead.
             * @param mime_type a MIME type, or %NULL
             */
            set_mime_type(mime_type?: string | null): void;
        }

        module SourceMailSubmission {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                replies_to_origin_folder: boolean;
                repliesToOriginFolder: boolean;
                sent_folder: string;
                sentFolder: string;
                transport_uid: string;
                transportUid: string;
                use_sent_folder: boolean;
                useSentFolder: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * function below.
         */
        class SourceMailSubmission extends SourceExtension {
            static $gtype: GObject.GType<SourceMailSubmission>;

            // Properties

            get replies_to_origin_folder(): boolean;
            set replies_to_origin_folder(val: boolean);
            get repliesToOriginFolder(): boolean;
            set repliesToOriginFolder(val: boolean);
            get sent_folder(): string;
            set sent_folder(val: string);
            get sentFolder(): string;
            set sentFolder(val: string);
            get transport_uid(): string;
            set transport_uid(val: string);
            get transportUid(): string;
            set transportUid(val: string);
            get use_sent_folder(): boolean;
            set use_sent_folder(val: boolean);
            get useSentFolder(): boolean;
            set useSentFolder(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceMailSubmission.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_mail_submission_get_sent_folder().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailSubmission:sent-folder
             */
            dup_sent_folder(): string | null;
            /**
             * Thread-safe variation of e_source_mail_submission_get_transport_uid().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceMailSubmission:transport-uid
             */
            dup_transport_uid(): string | null;
            /**
             * Returns whether save replies in the folder of the message
             * being replied to, instead of the Sent folder.
             * @returns whether save replies in the folder of the message being replied to
             */
            get_replies_to_origin_folder(): boolean;
            /**
             * Returns a string identifying the preferred folder for sent messages.
             * The format of the identifier string is defined by the client application.
             * @returns an identifier for the preferred sent folder
             */
            get_sent_folder(): string | null;
            /**
             * Returns the #ESource:uid of the #ESource that describes the mail
             * transport to be used for outgoing messages.
             * @returns the mail transport #ESource:uid
             */
            get_transport_uid(): string | null;
            get_use_sent_folder(): boolean;
            /**
             * Sets whether save replies in the folder of the message
             * being replied to, instead of the Sent folder.
             * @param replies_to_origin_folder new value
             */
            set_replies_to_origin_folder(replies_to_origin_folder: boolean): void;
            /**
             * Sets the preferred folder for sent messages by an identifier string.
             * The format of the identifier string is defined by the client application.
             *
             * The internal copy of `sent_folder` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param sent_folder an identifier for the preferred sent folder,               or %NULL
             */
            set_sent_folder(sent_folder?: string | null): void;
            /**
             * Sets the #ESource:uid of the #ESource that describes the mail
             * transport to be used for outgoing messages.
             * @param transport_uid the mail transport #ESource:uid, or %NULL
             */
            set_transport_uid(transport_uid?: string | null): void;
            /**
             * Sets whether save messages to the sent folder at all.
             * @param use_sent_folder the value to set
             */
            set_use_sent_folder(use_sent_folder: boolean): void;
        }

        module SourceMailTransport {
            // Constructor properties interface

            interface ConstructorProps extends SourceBackend.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMailTransport extends SourceBackend {
            static $gtype: GObject.GType<SourceMailTransport>;

            // Constructors

            constructor(properties?: Partial<SourceMailTransport.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceMemoList {
            // Constructor properties interface

            interface ConstructorProps extends SourceSelectable.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceMemoList extends SourceSelectable {
            static $gtype: GObject.GType<SourceMemoList>;

            // Constructors

            constructor(properties?: Partial<SourceMemoList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceOffline {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                stay_synchronized: boolean;
                staySynchronized: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceOffline extends SourceExtension {
            static $gtype: GObject.GType<SourceOffline>;

            // Properties

            get stay_synchronized(): boolean;
            set stay_synchronized(val: boolean);
            get staySynchronized(): boolean;
            set staySynchronized(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceOffline.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether data from a remote server should be cached locally
             * for viewing while offline.  Backends are responsible for implementing
             * such caching.
             * @returns whether data should be cached for offline
             */
            get_stay_synchronized(): boolean;
            /**
             * Sets whether data from a remote server should be cached locally for
             * viewing while offline.  Backends are responsible for implementing
             * such caching.
             * @param stay_synchronized whether data should be cached for offline
             */
            set_stay_synchronized(stay_synchronized: boolean): void;
        }

        module SourceOpenPGP {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                always_trust: boolean;
                alwaysTrust: boolean;
                ask_send_public_key: boolean;
                askSendPublicKey: boolean;
                encrypt_by_default: boolean;
                encryptByDefault: boolean;
                encrypt_to_self: boolean;
                encryptToSelf: boolean;
                key_id: string;
                keyId: string;
                locate_keys: boolean;
                locateKeys: boolean;
                prefer_inline: boolean;
                preferInline: boolean;
                send_prefer_encrypt: boolean;
                sendPreferEncrypt: boolean;
                send_public_key: boolean;
                sendPublicKey: boolean;
                sign_by_default: boolean;
                signByDefault: boolean;
                signing_algorithm: string;
                signingAlgorithm: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceOpenPGP extends SourceExtension {
            static $gtype: GObject.GType<SourceOpenPGP>;

            // Properties

            get always_trust(): boolean;
            set always_trust(val: boolean);
            get alwaysTrust(): boolean;
            set alwaysTrust(val: boolean);
            get ask_send_public_key(): boolean;
            set ask_send_public_key(val: boolean);
            get askSendPublicKey(): boolean;
            set askSendPublicKey(val: boolean);
            get encrypt_by_default(): boolean;
            set encrypt_by_default(val: boolean);
            get encryptByDefault(): boolean;
            set encryptByDefault(val: boolean);
            get encrypt_to_self(): boolean;
            set encrypt_to_self(val: boolean);
            get encryptToSelf(): boolean;
            set encryptToSelf(val: boolean);
            get key_id(): string;
            set key_id(val: string);
            get keyId(): string;
            set keyId(val: string);
            get locate_keys(): boolean;
            set locate_keys(val: boolean);
            get locateKeys(): boolean;
            set locateKeys(val: boolean);
            get prefer_inline(): boolean;
            set prefer_inline(val: boolean);
            get preferInline(): boolean;
            set preferInline(val: boolean);
            get send_prefer_encrypt(): boolean;
            set send_prefer_encrypt(val: boolean);
            get sendPreferEncrypt(): boolean;
            set sendPreferEncrypt(val: boolean);
            get send_public_key(): boolean;
            set send_public_key(val: boolean);
            get sendPublicKey(): boolean;
            set sendPublicKey(val: boolean);
            get sign_by_default(): boolean;
            set sign_by_default(val: boolean);
            get signByDefault(): boolean;
            set signByDefault(val: boolean);
            get signing_algorithm(): string;
            set signing_algorithm(val: string);
            get signingAlgorithm(): string;
            set signingAlgorithm(val: string);

            // Constructors

            constructor(properties?: Partial<SourceOpenPGP.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_openpgp_get_key_id().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceOpenPGP:key-id
             */
            dup_key_id(): string;
            /**
             * Thread-safe variation of e_source_openpgp_get_signing_algorithm().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceOpenPGP:signing-algorithm
             */
            dup_signing_algorithm(): string;
            /**
             * Returns whether to skip key validation and assume that used keys are
             * always fully trusted.
             * @returns whether used keys are always fully trusted
             */
            get_always_trust(): boolean;
            /**
             * Returns, whether should ask before sending PGP public key in messages. The default is %TRUE.
             * @returns whether should ask before sending PGP public key in messages
             */
            get_ask_send_public_key(): boolean;
            /**
             * Returns whether to digitally encrypt outgoing messages by default using
             * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
             * @returns whether to encrypt outgoing messages by default
             */
            get_encrypt_by_default(): boolean;
            /**
             * Returns whether to "encrypt-to-self" when sending encrypted messages.
             * @returns whether to "encrypt-to-self"
             */
            get_encrypt_to_self(): boolean;
            /**
             * Returns the OpenPGP key ID used to sign and encrypt messages.
             * @returns the key ID used to sign and encrypt messages
             */
            get_key_id(): string;
            /**
             * Returns, whether gpg can locate keys using Web Key Directory (WKD) lookup
             * when encrypting messages. The default is %TRUE.
             * @returns whether gpg can locate keys using Web Key Directory (WKD) lookup    when encrypting messages.
             */
            get_locate_keys(): boolean;
            /**
             * Returns whether to prefer inline sign/encrypt of the text/plain messages.
             * @returns whether to prefer inline sign/encrypt of the text/plain messages
             */
            get_prefer_inline(): boolean;
            /**
             * Returns, whether should claim the encryption is preferred when sending
             * public key in messages. The default is %TRUE.
             * @returns whether should claim the encryption is preferred when sending    public key in messages
             */
            get_send_prefer_encrypt(): boolean;
            /**
             * Returns, whether should send PGP public key in messages. The default is %TRUE.
             * @returns whether should send PGP public key in messages
             */
            get_send_public_key(): boolean;
            /**
             * Returns whether to digitally sign outgoing messages by default using
             * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
             * @returns whether to sign outgoing messages by default
             */
            get_sign_by_default(): boolean;
            /**
             * Returns the name of the hash algorithm used to digitally sign outgoing
             * messages.
             * @returns the signing algorithm for outgoing messages
             */
            get_signing_algorithm(): string;
            /**
             * Sets whether to skip key validation and assume that used keys are
             * always fully trusted.
             * @param always_trust whether used keys are always fully trusted
             */
            set_always_trust(always_trust: boolean): void;
            /**
             * Sets the `ask_send_public_key` on the `extension,` which tells the client to
             * ask before user sends public key in the messages in an Autocrypt header.
             * @param ask_send_public_key value to set
             */
            set_ask_send_public_key(ask_send_public_key: boolean): void;
            /**
             * Sets whether to digitally encrypt outgoing messages by default using
             * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
             * @param encrypt_by_default whether to encrypt outgoing messages by default
             */
            set_encrypt_by_default(encrypt_by_default: boolean): void;
            /**
             * Sets whether to "encrypt-to-self" when sending encrypted messages.
             * @param encrypt_to_self whether to "encrypt-to-self"
             */
            set_encrypt_to_self(encrypt_to_self: boolean): void;
            /**
             * Sets the OpenPGP key ID used to sign and encrypt messages.
             *
             * The internal copy of `key_id` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param key_id the key ID used to sign and encrypt messages
             */
            set_key_id(key_id: string): void;
            /**
             * Sets the `locate_keys` on the `extension,` which is used to instruct
             * gpg to locate keys using Web Key Directory (WKD) lookup when encrypting
             * messages.
             * @param locate_keys value to set
             */
            set_locate_keys(locate_keys: boolean): void;
            /**
             * Sets whether to prefer inline sign/encrypt of the text/plain messages.
             * @param prefer_inline whether to prefer inline sign/encrypt of the text/plain messages
             */
            set_prefer_inline(prefer_inline: boolean): void;
            /**
             * Sets the `send_prefer_encrypt` on the `extension,` which tells the client to
             * claim the user prefer encryption when also sending its public key in
             * the messages (e_source_openpgp_set_send_public_key()).
             * @param send_prefer_encrypt value to set
             */
            set_send_prefer_encrypt(send_prefer_encrypt: boolean): void;
            /**
             * Sets the `send_public_key` on the `extension,` which tells the client to
             * include user's public key in the messages in an Autocrypt header.
             * @param send_public_key value to set
             */
            set_send_public_key(send_public_key: boolean): void;
            /**
             * Sets whether to digitally sign outgoing messages by default using
             * OpenPGP-compliant software such as GNU Privacy Guard (GnuPG).
             * @param sign_by_default whether to sign outgoing messages by default
             */
            set_sign_by_default(sign_by_default: boolean): void;
            /**
             * Sets the name of the hash algorithm used to digitally sign outgoing
             * messages.
             *
             * The internal copy of `signing_algorithm` is automatically stripped of
             * leading and trailing whitespace.  If the resulting string is empty,
             * %NULL is set instead.
             * @param signing_algorithm the signing algorithm for outgoing messages
             */
            set_signing_algorithm(signing_algorithm: string): void;
        }

        module SourceProxy {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                autoconfig_url: string;
                autoconfigUrl: string;
                ftp_host: string;
                ftpHost: string;
                ftp_port: number;
                ftpPort: number;
                http_auth_password: string;
                httpAuthPassword: string;
                http_auth_user: string;
                httpAuthUser: string;
                http_host: string;
                httpHost: string;
                http_port: number;
                httpPort: number;
                http_use_auth: boolean;
                httpUseAuth: boolean;
                https_host: string;
                httpsHost: string;
                https_port: number;
                httpsPort: number;
                ignore_hosts: string[];
                ignoreHosts: string[];
                method: ProxyMethod;
                socks_host: string;
                socksHost: string;
                socks_port: number;
                socksPort: number;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceProxy extends SourceExtension {
            static $gtype: GObject.GType<SourceProxy>;

            // Properties

            get autoconfig_url(): string;
            set autoconfig_url(val: string);
            get autoconfigUrl(): string;
            set autoconfigUrl(val: string);
            get ftp_host(): string;
            set ftp_host(val: string);
            get ftpHost(): string;
            set ftpHost(val: string);
            get ftp_port(): number;
            set ftp_port(val: number);
            get ftpPort(): number;
            set ftpPort(val: number);
            get http_auth_password(): string;
            set http_auth_password(val: string);
            get httpAuthPassword(): string;
            set httpAuthPassword(val: string);
            get http_auth_user(): string;
            set http_auth_user(val: string);
            get httpAuthUser(): string;
            set httpAuthUser(val: string);
            get http_host(): string;
            set http_host(val: string);
            get httpHost(): string;
            set httpHost(val: string);
            get http_port(): number;
            set http_port(val: number);
            get httpPort(): number;
            set httpPort(val: number);
            get http_use_auth(): boolean;
            set http_use_auth(val: boolean);
            get httpUseAuth(): boolean;
            set httpUseAuth(val: boolean);
            get https_host(): string;
            set https_host(val: string);
            get httpsHost(): string;
            set httpsHost(val: string);
            get https_port(): number;
            set https_port(val: number);
            get httpsPort(): number;
            set httpsPort(val: number);
            get ignore_hosts(): string[];
            set ignore_hosts(val: string[]);
            get ignoreHosts(): string[];
            set ignoreHosts(val: string[]);
            get method(): ProxyMethod;
            set method(val: ProxyMethod);
            get socks_host(): string;
            set socks_host(val: string);
            get socksHost(): string;
            set socksHost(val: string);
            get socks_port(): number;
            set socks_port(val: number);
            get socksPort(): number;
            set socksPort(val: number);

            // Constructors

            constructor(properties?: Partial<SourceProxy.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_proxy_get_autoconfig_url().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:autoconfig-url
             */
            dup_autoconfig_url(): string;
            /**
             * Thread-safe variation of e_source_proxy_get_ftp_host().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:ftp-host
             */
            dup_ftp_host(): string;
            /**
             * Thread-safe variation of e_source_proxy_get_http_auth_password().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:http-auth-password
             */
            dup_http_auth_password(): string;
            /**
             * Thread-safe variation of e_source_proxy_get_http_auth_user().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:http-auth-user
             */
            dup_http_auth_user(): string;
            /**
             * Thread-safe variation of e_source_proxy_get_http_host().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:http-host
             */
            dup_http_host(): string;
            /**
             * Threads-safe variation of e_source_proxy_get_https_host().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:https-host
             */
            dup_https_host(): string;
            /**
             * Thread-safe variation of e_source_proxy_get_ignore_hosts().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string array should be freed with g_strfreev() when no
             * longer needed.
             * @returns a newly-allocated copy of          #ESourceProxy:ignore-hosts
             */
            dup_ignore_hosts(): string[];
            /**
             * Thread-safe variation of e_source_proxy_get_socks_host().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceProxy:socks-host
             */
            dup_socks_host(): string;
            /**
             * Returns the URL that provides proxy configuration values.  When the
             * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
             * is used to look up proxy information for all protocols.
             * @returns the autoconfiguration URL
             */
            get_autoconfig_url(): string;
            /**
             * Returns the machine name to proxy FTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns FTP proxy host name
             */
            get_ftp_host(): string;
            /**
             * Returns the port on the machine defined by #ESourceProxy:ftp-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns FTP proxy port
             */
            get_ftp_port(): number;
            /**
             * Returns the password to pass as authentication when doing HTTP proxying
             * and #ESourceProxy:http-use-auth is %TRUE.
             * @returns HTTP proxy password
             */
            get_http_auth_password(): string;
            /**
             * Returns the user name to pass as authentication when doing HTTP proxying
             * and #ESourceProxy:http-use-auth is %TRUE.
             * @returns HTTP proxy username
             */
            get_http_auth_user(): string;
            /**
             * Returns the machine name to proxy HTTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns HTTP proxy host name
             */
            get_http_host(): string;
            /**
             * Returns the port on the machine defined by #ESourceProxy:http-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns HTTP proxy port
             */
            get_http_port(): number;
            /**
             * Returns whether the HTTP proxy server at #ESourceProxy:http-host and
             * #ESourceProxy:http-port requires authentication.
             *
             * The username/password combo is defined by #ESourceProxy:http-auth-user
             * and #ESourceProxy:http-auth-password, but only applies when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns whether to authenticate HTTP proxy connections
             */
            get_http_use_auth(): boolean;
            /**
             * Returns the machine name to proxy secure HTTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns secure HTTP proxy host name
             */
            get_https_host(): string;
            /**
             * Returns the port on the machine defined by #ESourceProxy:https-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns secure HTTP proxy port
             */
            get_https_port(): number;
            /**
             * Returns a %NULL-terminated string array of hosts which are connected to
             * directly, rather than via the proxy (if it is active).  The array elements
             * can be hostnames, domains (using an initial wildcard like *.foo.com), IP
             * host addresses (both IPv4 and IPv6) and network addresses with a netmask
             * (something like 192.168.0.0/24).
             *
             * The returned array is owned by `extension` and should not be modified or
             * freed.
             * @returns a %NULL-terminated string array of hosts
             */
            get_ignore_hosts(): string[];
            /**
             * Returns the proxy configuration method for `extension`.
             *
             * The proxy configuration method determines the behavior of
             * e_source_proxy_lookup().
             * @returns the proxy configuration method
             */
            get_method(): ProxyMethod;
            /**
             * Returns the machine name to use as a SOCKS proxy when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns SOCKS proxy host name
             */
            get_socks_host(): string;
            /**
             * Returns the port on the machine defined by #ESourceProxy:socks-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @returns SOCKS proxy port
             */
            get_socks_port(): number;
            /**
             * Sets the URL that provides proxy configuration values.  When the
             * `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_AUTO,` this URL
             * is used to look up proxy information for all protocols.
             * @param autoconfig_url an autoconfiguration URL
             */
            set_autoconfig_url(autoconfig_url: string): void;
            /**
             * Sets the machine name to proxy FTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param ftp_host FTP proxy host name
             */
            set_ftp_host(ftp_host: string): void;
            /**
             * Sets the port on the machine defined by #ESourceProxy:ftp-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param ftp_port FTP proxy port
             */
            set_ftp_port(ftp_port: number): void;
            /**
             * Sets the password to pass as authentication when doing HTTP proxying
             * and #ESourceProxy:http-use-auth is %TRUE.
             * @param http_auth_password HTTP proxy password
             */
            set_http_auth_password(http_auth_password: string): void;
            /**
             * Sets the user name to pass as authentication when doing HTTP proxying
             * and #ESourceProxy:http-use-auth is %TRUE.
             * @param http_auth_user HTTP proxy username
             */
            set_http_auth_user(http_auth_user: string): void;
            /**
             * Sets the machine name to proxy HTTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param http_host HTTP proxy host name
             */
            set_http_host(http_host: string): void;
            /**
             * Sets the port on the machine defined by #ESourceProxy:http-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param http_port HTTP proxy port
             */
            set_http_port(http_port: number): void;
            /**
             * Sets whether the HTTP proxy server at #ESourceProxy:http-host and
             * #ESourceProxy:http-port requires authentication.
             *
             * The username/password combo is defined by #ESourceProxy:http-auth-user
             * and #ESourceProxy:http-auth-password, but only applies when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param http_use_auth whether to authenticate HTTP proxy connections
             */
            set_http_use_auth(http_use_auth: boolean): void;
            /**
             * Sets the machine name to proxy secure HTTP through when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param https_host secure HTTP proxy host name
             */
            set_https_host(https_host: string): void;
            /**
             * Sets the port on the machine defined by #ESourceProxy:https-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param https_port secure HTTP proxy port
             */
            set_https_port(https_port: number): void;
            /**
             * Sets the hosts which are connected to directly, rather than via the proxy
             * (if it is active).  The array elements can be hostnames, domains (using an
             * initial wildcard like *.foo.com), IP host addresses (both IPv4 and IPv6)
             * and network addresses with a netmask (something like 192.168.0.0/24).
             * @param ignore_hosts a %NULL-terminated string array of hosts
             */
            set_ignore_hosts(ignore_hosts: string): void;
            /**
             * Sets the proxy configuration method for `extension`.
             *
             * The proxy configuration method determines the behavior of
             * e_source_proxy_lookup().
             * @param method the proxy configuration method
             */
            set_method(method: ProxyMethod | null): void;
            /**
             * Sets the machine name to use as a SOCKS proxy when `extension'`s
             * #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param socks_host SOCKS proxy host name
             */
            set_socks_host(socks_host: string): void;
            /**
             * Sets the port on the machine defined by #ESourceProxy:socks-host to proxy
             * through when `extension'`s #ESourceProxy:method is `E_PROXY_METHOD_MANUAL`.
             * @param socks_port SOCKS proxy port
             */
            set_socks_port(socks_port: number): void;
        }

        module SourceRefresh {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                enabled: boolean;
                enabled_on_metered_network: boolean;
                enabledOnMeteredNetwork: boolean;
                interval_minutes: number;
                intervalMinutes: number;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceRefresh extends SourceExtension {
            static $gtype: GObject.GType<SourceRefresh>;

            // Properties

            get enabled(): boolean;
            set enabled(val: boolean);
            get enabled_on_metered_network(): boolean;
            set enabled_on_metered_network(val: boolean);
            get enabledOnMeteredNetwork(): boolean;
            set enabledOnMeteredNetwork(val: boolean);
            get interval_minutes(): number;
            set interval_minutes(val: number);
            get intervalMinutes(): number;
            set intervalMinutes(val: number);

            // Constructors

            constructor(properties?: Partial<SourceRefresh.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns whether to periodically fetch updates from a remote server.
             *
             * The refresh interval is determined by the #ESourceRefresh:interval-minutes
             * property.
             * @returns whether periodic refresh is enabled
             */
            get_enabled(): boolean;
            /**
             * Returns whether can refresh content on metered network.
             *
             * The `extension` itself doesn't use this option, it's up to
             * the `extension` user to determine what kind of connection is used
             * and then decide whether refresh, or other expensive network
             * operations, can be done.
             * @returns whether can refresh content on metered network
             */
            get_enabled_on_metered_network(): boolean;
            /**
             * Returns the interval for fetching updates from a remote server.
             *
             * Note this value is only effective when the #ESourceRefresh:enabled
             * property is %TRUE.
             * @returns the interval in minutes
             */
            get_interval_minutes(): number;
            /**
             * Sets whether to periodically fetch updates from a remote server.
             *
             * The refresh interval is determined by the #ESourceRefresh:interval-minutes
             * property.
             * @param enabled whether to enable periodic refresh
             */
            set_enabled(enabled: boolean): void;
            /**
             * Sets whether can refresh content on metered network.
             *
             * See e_source_refresh_get_enabled_on_metered_network() for more information
             * about what it means.
             * @param enabled whether can refresh content on metered network
             */
            set_enabled_on_metered_network(enabled: boolean): void;
            /**
             * Sets the interval for fetching updates from a remote server.
             *
             * Note this value is only effective when the #ESourceRefresh:enabled
             * property is %TRUE.
             * @param interval_minutes the interval in minutes
             */
            set_interval_minutes(interval_minutes: number): void;
        }

        module SourceRegistry {
            // Signal callback interfaces

            interface CredentialsRequired {
                (
                    source: Source,
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    op_error: GLib.Error,
                ): void;
            }

            interface SourceAdded {
                (source: Source): void;
            }

            interface SourceChanged {
                (source: Source): void;
            }

            interface SourceDisabled {
                (source: Source): void;
            }

            interface SourceEnabled {
                (source: Source): void;
            }

            interface SourceRemoved {
                (source: Source): void;
            }

            // Constructor properties interface

            interface ConstructorProps
                extends GObject.Object.ConstructorProps,
                    Gio.AsyncInitable.ConstructorProps,
                    Gio.Initable.ConstructorProps {
                default_address_book: Source;
                defaultAddressBook: Source;
                default_calendar: Source;
                defaultCalendar: Source;
                default_mail_account: Source;
                defaultMailAccount: Source;
                default_mail_identity: Source;
                defaultMailIdentity: Source;
                default_memo_list: Source;
                defaultMemoList: Source;
                default_task_list: Source;
                defaultTaskList: Source;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceRegistry extends GObject.Object implements Gio.AsyncInitable<SourceRegistry>, Gio.Initable {
            static $gtype: GObject.GType<SourceRegistry>;

            // Properties

            /**
             * The default address book #ESource.
             */
            get default_address_book(): Source;
            set default_address_book(val: Source);
            /**
             * The default address book #ESource.
             */
            get defaultAddressBook(): Source;
            set defaultAddressBook(val: Source);
            /**
             * The default calendar #ESource.
             */
            get default_calendar(): Source;
            set default_calendar(val: Source);
            /**
             * The default calendar #ESource.
             */
            get defaultCalendar(): Source;
            set defaultCalendar(val: Source);
            /**
             * The default mail account #ESource.
             */
            get default_mail_account(): Source;
            set default_mail_account(val: Source);
            /**
             * The default mail account #ESource.
             */
            get defaultMailAccount(): Source;
            set defaultMailAccount(val: Source);
            /**
             * The default mail identity #ESource.
             */
            get default_mail_identity(): Source;
            set default_mail_identity(val: Source);
            /**
             * The default mail identity #ESource.
             */
            get defaultMailIdentity(): Source;
            set defaultMailIdentity(val: Source);
            /**
             * The default memo list #ESource.
             */
            get default_memo_list(): Source;
            set default_memo_list(val: Source);
            /**
             * The default memo list #ESource.
             */
            get defaultMemoList(): Source;
            set defaultMemoList(val: Source);
            /**
             * The default task list #ESource.
             */
            get default_task_list(): Source;
            set default_task_list(val: Source);
            /**
             * The default task list #ESource.
             */
            get defaultTaskList(): Source;
            set defaultTaskList(val: Source);

            // Constructors

            constructor(properties?: Partial<SourceRegistry.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static new_finish(result: Gio.AsyncResult): SourceRegistry;
            // Conflicted with Gio.AsyncInitable.new_finish

            static new_finish(...args: never[]): any;

            static new_sync(cancellable?: Gio.Cancellable | null): SourceRegistry;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(
                signal: 'credentials-required',
                callback: (
                    _source: this,
                    source: Source,
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    op_error: GLib.Error,
                ) => void,
            ): number;
            connect_after(
                signal: 'credentials-required',
                callback: (
                    _source: this,
                    source: Source,
                    reason: SourceCredentialsReason,
                    certificate_pem: string,
                    certificate_errors: Gio.TlsCertificateFlags,
                    op_error: GLib.Error,
                ) => void,
            ): number;
            emit(
                signal: 'credentials-required',
                source: Source,
                reason: SourceCredentialsReason,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags,
                op_error: GLib.Error,
            ): void;
            connect(signal: 'source-added', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'source-added', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'source-added', source: Source): void;
            connect(signal: 'source-changed', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'source-changed', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'source-changed', source: Source): void;
            connect(signal: 'source-disabled', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'source-disabled', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'source-disabled', source: Source): void;
            connect(signal: 'source-enabled', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'source-enabled', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'source-enabled', source: Source): void;
            connect(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'source-removed', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'source-removed', source: Source): void;

            // Static methods

            static debug_enabled(): boolean;
            /**
             * Convenience function to free a #GNode tree of registered
             * sources created by e_source_registry_build_display_tree().
             * @param display_tree a tree of sources, arranged for display
             */
            static free_display_tree(display_tree: GLib.Node): void;
            /**
             * Asynchronously creates a new #ESourceRegistry front-end for the registry
             * D-Bus service.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_new_finish() to get the result of the operation.
             *
             * Since 3.12 a singleton will be returned.  No strong reference is kept
             * internally, so it is the caller's responsibility to keep one.
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            static ['new'](
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<SourceRegistry> | null,
            ): void;

            // Virtual methods

            vfunc_credentials_required(
                source: Source,
                reason: SourceCredentialsReason,
                certificate_pem: string,
                certificate_errors: Gio.TlsCertificateFlags,
                op_error: GLib.Error,
            ): void;
            vfunc_source_added(source: Source): void;
            vfunc_source_changed(source: Source): void;
            vfunc_source_disabled(source: Source): void;
            vfunc_source_enabled(source: Source): void;
            vfunc_source_removed(source: Source): void;

            // Methods

            /**
             * Determines whether `source` is "effectively" enabled by examining its
             * own #ESource:enabled property as well as those of its ancestors in the
             * #ESource hierarchy.  If all examined #ESource:enabled properties are
             * %TRUE, then the function returns %TRUE.  If any are %FALSE, then the
             * function returns %FALSE.
             *
             * Use this function instead of e_source_get_enabled() to determine
             * things like whether to display an #ESource in a user interface or
             * whether to act on the data set described by the #ESource.
             * @param source an #ESource
             * @returns whether @source is "effectively" enabled
             */
            check_enabled(source: Source): boolean;
            /**
             * See e_source_registry_commit_source_sync() for details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_commit_source_finish() to get the result of the
             * operation.
             * @param source an #ESource with changes to commit
             * @param cancellable optional #GCancellable object, or %NULL
             */
            commit_source(source: Source, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * See e_source_registry_commit_source_sync() for details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_commit_source_finish() to get the result of the
             * operation.
             * @param source an #ESource with changes to commit
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            commit_source(
                source: Source,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * See e_source_registry_commit_source_sync() for details.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_commit_source_finish() to get the result of the
             * operation.
             * @param source an #ESource with changes to commit
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            commit_source(
                source: Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_registry_commit_source().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            commit_source_finish(result: Gio.AsyncResult): boolean;
            /**
             * This is a convenience function intended for use with graphical
             * #ESource editors.  Call this function when the user is finished
             * making changes to `source`.
             *
             * If `source` has a #GDBusObject, its contents are submitted to the D-Bus
             * service through e_source_write_sync().
             *
             * If `source` does NOT have a #GDBusObject (implying it's a scratch
             * #ESource), its contents are submitted to the D-Bus service through
             * either e_source_remote_create_sync() if `source` is to be a collection
             * member, or e_source_registry_create_sources_sync() if `source` to be an
             * independent data source.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source an #ESource with changes to commit
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            commit_source_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Asynchronously requests the D-Bus service create new key files for each
             * #ESource in `list_of_sources`.  Each list element must be a scratch
             * #ESource with no #GDBusObject.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_create_sources_finish() to get the result of the
             * operation.
             * @param list_of_sources a list of #ESource instances with no #GDBusObject
             * @param cancellable optional #GCancellable object, or %NULL
             */
            create_sources(list_of_sources: Source[], cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously requests the D-Bus service create new key files for each
             * #ESource in `list_of_sources`.  Each list element must be a scratch
             * #ESource with no #GDBusObject.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_create_sources_finish() to get the result of the
             * operation.
             * @param list_of_sources a list of #ESource instances with no #GDBusObject
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_sources(
                list_of_sources: Source[],
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously requests the D-Bus service create new key files for each
             * #ESource in `list_of_sources`.  Each list element must be a scratch
             * #ESource with no #GDBusObject.
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call e_source_registry_create_sources_finish() to get the result of the
             * operation.
             * @param list_of_sources a list of #ESource instances with no #GDBusObject
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            create_sources(
                list_of_sources: Source[],
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_registry_create_sources().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns %TRUE on success, %FALSE on failure
             */
            create_sources_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the D-Bus service create new key files for each #ESource in
             * `list_of_sources`.  Each list element must be a scratch #ESource with
             * no #GDBusObject.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param list_of_sources a list of #ESource instances with no #GDBusObject
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE on success, %FALSE on failure
             */
            create_sources_sync(list_of_sources: Source[], cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Handy debugging function that uses e_source_registry_build_display_tree()
             * to print a tree of registered sources to standard output.
             * @param extension_name an extension name, or %NULL
             */
            debug_dump(extension_name?: string | null): void;
            /**
             * Compares `source'`s #ESource:display-name against other sources having
             * an #ESourceExtension named `extension_name,` if given, or else against
             * all other sources in the `registry`.
             *
             * If `sources'`s #ESource:display-name is unique among these other sources,
             * the function will return the #ESource:display-name verbatim.  Otherwise
             * the function will construct a string that includes the `sources'`s own
             * #ESource:display-name as well as those of its ancestors.
             *
             * The function's return value is intended to be used in messages shown to
             * the user to help clarify which source is being referred to.  It assumes
             * `source'`s #ESource:display-name is at least unique among its siblings.
             *
             * Free the returned string with g_free() when finished with it.
             * @param source an #ESource
             * @param extension_name an extension name, or %NULL
             * @returns a unique display name for @source
             */
            dup_unique_display_name(source: Source, extension_name?: string | null): string;
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
            find_extension(source: Source, extension_name: string): Source | null;
            get_oauth2_services(): OAuth2Services;
            /**
             * Similar to e_source_registry_list_sources(), but returns only enabled
             * sources according to e_source_registry_check_enabled().
             *
             * The sources returned in the list are referenced for thread-safety.
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
             * @param extension_name an extension name, or %NULL
             * @returns a sorted list of sources
             */
            list_enabled(extension_name?: string | null): Source[];
            /**
             * Returns a list of registered sources, sorted by display name.  If
             * `extension_name` is given, restrict the list to sources having that
             * extension name.
             *
             * The sources returned in the list are referenced for thread-safety.
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
             * @param extension_name an extension name, or %NULL
             * @returns a sorted list of sources
             */
            list_sources(extension_name?: string | null): Source[];
            /**
             * Returns the built-in address book #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in address book #ESource
             */
            ref_builtin_address_book(): Source;
            /**
             * Returns the built-in calendar #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in calendar #ESource
             */
            ref_builtin_calendar(): Source;
            /**
             * Returns the built-in mail account #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in mail account #ESource
             */
            ref_builtin_mail_account(): Source;
            /**
             * Returns the built-in memo list #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in memo list #ESource
             */
            ref_builtin_memo_list(): Source;
            /**
             * Returns the built-in proxy profile #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in proxy profile #ESource
             */
            ref_builtin_proxy(): Source;
            /**
             * Returns the built-in task list #ESource.
             *
             * This #ESource is always present and makes for a safe fallback.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the built-in task list #ESource
             */
            ref_builtin_task_list(): Source;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_address_book() either in this session
             * or a previous session, or else falls back to the built-in address book.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default address book #ESource
             */
            ref_default_address_book(): Source;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_calendar() either in this session
             * or a previous session, or else falls back to the built-in calendar.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default calendar #ESource
             */
            ref_default_calendar(): Source;
            /**
             * This is a convenience function to return a default #ESource based on
             * `extension_name`.  This only works with a subset of extension names.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_ADDRESS_BOOK, the function
             * returns the current default address book, or else falls back to the
             * built-in address book.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_CALENDAR, the function returns
             * the current default calendar, or else falls back to the built-in calendar.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_ACCOUNT, the function
             * returns the current default mail account, or else falls back to the
             * built-in mail account.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_IDENTITY, the function
             * returns the current default mail identity, or else falls back to the
             * mail identity named by the current default mail account.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MEMO_LIST, the function returns
             * the current default memo list, or else falls back to the built-in memo list.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_TASK_LIST, the function returns
             * the current default task list, or else falls back to the built-in task list.
             *
             * For all other values of `extension_name,` the function returns %NULL.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @param extension_name an extension_name
             * @returns the default #ESource based on @extension_name
             */
            ref_default_for_extension_name(extension_name: string): Source | null;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_mail_account() either in this session
             * or a previous session, or else falls back to the built-in mail account.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default mail account #ESource
             */
            ref_default_mail_account(): Source;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_mail_identity() either in this session
             * or a previous session, or else falls back to the mail identity named
             * by the default mail account.  If even that fails it returns any mail
             * identity from `registry,` or %NULL if there are none.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default mail identity #ESource,    or %NULL
             */
            ref_default_mail_identity(): Source | null;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_memo_list() either in this session
             * or a previous session, or else falls back to the built-in memo list.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default memo list #ESource
             */
            ref_default_memo_list(): Source;
            /**
             * Returns the #ESource most recently passed to
             * e_source_registry_set_default_task_list() either in this session
             * or a previous session, or else falls back to the built-in task list.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @returns the default task list #ESource
             */
            ref_default_task_list(): Source;
            /**
             * Looks up an #ESource in `registry` by its unique identifier string.
             *
             * The returned #ESource is referenced for thread-safety and must be
             * unreferenced with g_object_unref() when finished with it.
             * @param uid a unique identifier string
             * @returns an #ESource, or %NULL if no match was found
             */
            ref_source(uid: string): Source | null;
            /**
             * Asynchronously requests the D-Bus service to refresh collection backend
             * for an #ESource with UID `source_uid`. The result means that the refresh
             * had been scheduled not whether the refresh itself succeeded. The refresh
             * is not initiated when the collection backend is offline.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_registry_refresh_backend_finish() to get the result of
             * the operation.
             * @param source_uid UID of a collection #ESource whose backend to refresh
             * @param cancellable optional #GCancellable object, or %NULL
             */
            refresh_backend(source_uid: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
            /**
             * Asynchronously requests the D-Bus service to refresh collection backend
             * for an #ESource with UID `source_uid`. The result means that the refresh
             * had been scheduled not whether the refresh itself succeeded. The refresh
             * is not initiated when the collection backend is offline.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_registry_refresh_backend_finish() to get the result of
             * the operation.
             * @param source_uid UID of a collection #ESource whose backend to refresh
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh_backend(
                source_uid: string,
                cancellable: Gio.Cancellable | null,
                callback: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Asynchronously requests the D-Bus service to refresh collection backend
             * for an #ESource with UID `source_uid`. The result means that the refresh
             * had been scheduled not whether the refresh itself succeeded. The refresh
             * is not initiated when the collection backend is offline.
             *
             * When the operation is finished, `callback` will be called. You can then
             * call e_source_registry_refresh_backend_finish() to get the result of
             * the operation.
             * @param source_uid UID of a collection #ESource whose backend to refresh
             * @param cancellable optional #GCancellable object, or %NULL
             * @param callback a #GAsyncReadyCallback to call when the request is satisfied
             */
            refresh_backend(
                source_uid: string,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): Promise<boolean> | void;
            /**
             * Finishes the operation started with e_source_registry_refresh_backend().
             *
             * If an error occurred, the function will set `error` and return %FALSE.
             * @param result a #GAsyncResult
             * @returns Whether succeeded
             */
            refresh_backend_finish(result: Gio.AsyncResult): boolean;
            /**
             * Requests the D-Bus service to refresh collection backend for an #ESource
             * with UID `source_uid`. The result means that the refresh had been scheduled
             * not whether the refresh itself succeeded. The refresh is not initiated
             * when the collection backend is offline.
             *
             * If an error occurs, the function will set `error` and return %FALSE.
             * @param source_uid UID of a collection #ESource whose backend to refresh
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded
             */
            refresh_backend_sync(source_uid: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Sets `default_source` as the default address book.  If `default_source`
             * is %NULL, the default address book is reset to the built-in address book.
             * This setting will persist across sessions until changed.
             * @param default_source an address book #ESource, or %NULL
             */
            set_default_address_book(default_source?: Source | null): void;
            /**
             * Sets `default_source` as the default calendar.  If `default_source`
             * is %NULL, the default calendar is reset to the built-in calendar.
             * This setting will persist across sessions until changed.
             * @param default_source a calendar #ESource, or %NULL
             */
            set_default_calendar(default_source?: Source | null): void;
            /**
             * This is a convenience function to set a default #ESource based on
             * `extension_name`.  This only works with a subset of extension names.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_ADDRESS_BOOK, the function
             * sets `default_source` as the default address book.  If `default_source`
             * is %NULL, the default address book is reset to the built-in address book.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_CALENDAR, the function sets
             * `default_source` as the default calendar.  If `default_source` is %NULL,
             * the default calendar is reset to the built-in calendar.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_ACCOUNT, the function
             * sets `default_source` as the default mail account.  If `default_source`
             * is %NULL, the default mail account is reset to the built-in mail account.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MAIL_IDENTITY, the function
             * sets `default_source` as the default mail identity.  If `default_source`
             * is %NULL, the next request for the default mail identity will return
             * the mail identity named by the default mail account.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_MEMO_LIST, the function sets
             * `default_source` as the default memo list.  If `default_source` is %NULL,
             * the default memo list is reset to the built-in memo list.
             *
             * If `extension_name` is #E_SOURCE_EXTENSION_TASK_LIST, the function sets
             * `default_source` as the default task list.  If `default_source` is %NULL,
             * the default task list is reset to the built-in task list.
             *
             * For all other values of `extension_name,` the function does nothing.
             * @param extension_name an extension name
             * @param default_source an #ESource, or %NULL
             */
            set_default_for_extension_name(extension_name: string, default_source?: Source | null): void;
            /**
             * Sets `default_source` as the default mail account.  If `default_source`
             * is %NULL, the default mail account is reset to the built-in mail account.
             * This setting will persist across sessions until changed.
             * @param default_source a mail account #ESource, or %NULL
             */
            set_default_mail_account(default_source?: Source | null): void;
            /**
             * Sets `default_source` as the default mail identity.  If `default_source`
             * is %NULL, the next request for the default mail identity will use the
             * fallbacks described in e_source_registry_ref_default_mail_identity().
             * @param default_source a mail identity #ESource, or %NULL
             */
            set_default_mail_identity(default_source?: Source | null): void;
            /**
             * Sets `default_source` as the default memo list.  If `default_source`
             * is %NULL, the default memo list is reset to the built-in memo list.
             * This setting will persist across sessions until changed.
             * @param default_source a memo list #ESource, or %NULL
             */
            set_default_memo_list(default_source?: Source | null): void;
            /**
             * Sets `default_source` as the default task list.  If `default_source`
             * is %NULL, the default task list is reset to the built-in task list.
             * This setting will persist across sessions until changed.
             * @param default_source a task list #ESource, or %NULL
             */
            set_default_task_list(default_source?: Source | null): void;

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
            new_finish(res: Gio.AsyncResult): SourceRegistry;
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

        module SourceRegistryWatcher {
            // Signal callback interfaces

            interface Appeared {
                (source: Source): void;
            }

            interface Disappeared {
                (source: Source): void;
            }

            interface Filter {
                (source: Source): boolean;
            }

            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {
                extension_name: string;
                extensionName: string;
                registry: SourceRegistry;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceRegistryWatcher extends GObject.Object {
            static $gtype: GObject.GType<SourceRegistryWatcher>;

            // Properties

            /**
             * Optional extension name, to consider sources with only.
             * It can be %NULL, to check for all sources. This is
             * a complementary filter to #ESourceRegistryWatcher::filter
             * signal.
             */
            get extension_name(): string;
            /**
             * Optional extension name, to consider sources with only.
             * It can be %NULL, to check for all sources. This is
             * a complementary filter to #ESourceRegistryWatcher::filter
             * signal.
             */
            get extensionName(): string;
            /**
             * The #ESourceRegistry manages #ESource instances.
             */
            get registry(): SourceRegistry;

            // Constructors

            constructor(properties?: Partial<SourceRegistryWatcher.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](registry: SourceRegistry, extension_name?: string | null): SourceRegistryWatcher;

            // Signals

            connect(id: string, callback: (...args: any[]) => any): number;
            connect_after(id: string, callback: (...args: any[]) => any): number;
            emit(id: string, ...args: any[]): void;
            connect(signal: 'appeared', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'appeared', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'appeared', source: Source): void;
            connect(signal: 'disappeared', callback: (_source: this, source: Source) => void): number;
            connect_after(signal: 'disappeared', callback: (_source: this, source: Source) => void): number;
            emit(signal: 'disappeared', source: Source): void;
            connect(signal: 'filter', callback: (_source: this, source: Source) => boolean): number;
            connect_after(signal: 'filter', callback: (_source: this, source: Source) => boolean): number;
            emit(signal: 'filter', source: Source): void;

            // Virtual methods

            vfunc_appeared(source: Source): void;
            vfunc_disappeared(source: Source): void;
            vfunc_filter(source: Source): boolean;

            // Methods

            get_extension_name(): string | null;
            /**
             * Returns the #ESourceRegistry passed to e_source_registry_watcher_new().
             * @returns an #ESourceRegistry
             */
            get_registry(): SourceRegistry;
            /**
             * Reclaims all available sources satisfying the #ESourceRegistryWatcher::filter
             * signal. It doesn't notify about disappeared sources, it notifies only
             * on those appeared.
             */
            reclaim(): void;
        }

        module SourceResource {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                identity: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceResource extends SourceExtension {
            static $gtype: GObject.GType<SourceResource>;

            // Properties

            get identity(): string;
            set identity(val: string);

            // Constructors

            constructor(properties?: Partial<SourceResource.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_resource_get_identity().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceResource:identity
             */
            dup_identity(): string | null;
            /**
             * Returns the server-assigned identity of the remote resource associated
             * with the #ESource to which `extension` belongs.
             * @returns the identity of a remote resource
             */
            get_identity(): string | null;
            /**
             * Sets the server-assigned identity of the remote resource associated with
             * the #ESource to which `extension` belongs.
             *
             * The internal copy of `identity` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param identity the identity of a remote resource
             */
            set_identity(identity?: string | null): void;
        }

        module SourceRevisionGuards {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                enabled: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceRevisionGuards extends SourceExtension {
            static $gtype: GObject.GType<SourceRevisionGuards>;

            // Properties

            get enabled(): boolean;
            set enabled(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceRevisionGuards.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Checks whether revision guards for the given #ESource are enabled.
             * @returns %TRUE if the revision guards are enabled.
             */
            get_enabled(): boolean;
            /**
             * Enables or disables the revision guards for a given #ESource.
             *
             * Revision guards are disabled by default.
             * @param enabled Whether to enable or disable the revision guards.
             */
            set_enabled(enabled: boolean): void;
        }

        module SourceSMIME {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                encrypt_by_default: boolean;
                encryptByDefault: boolean;
                encrypt_to_self: boolean;
                encryptToSelf: boolean;
                encryption_certificate: string;
                encryptionCertificate: string;
                sign_by_default: boolean;
                signByDefault: boolean;
                signing_algorithm: string;
                signingAlgorithm: string;
                signing_certificate: string;
                signingCertificate: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceSMIME extends SourceExtension {
            static $gtype: GObject.GType<SourceSMIME>;

            // Properties

            get encrypt_by_default(): boolean;
            set encrypt_by_default(val: boolean);
            get encryptByDefault(): boolean;
            set encryptByDefault(val: boolean);
            get encrypt_to_self(): boolean;
            set encrypt_to_self(val: boolean);
            get encryptToSelf(): boolean;
            set encryptToSelf(val: boolean);
            get encryption_certificate(): string;
            set encryption_certificate(val: string);
            get encryptionCertificate(): string;
            set encryptionCertificate(val: string);
            get sign_by_default(): boolean;
            set sign_by_default(val: boolean);
            get signByDefault(): boolean;
            set signByDefault(val: boolean);
            get signing_algorithm(): string;
            set signing_algorithm(val: string);
            get signingAlgorithm(): string;
            set signingAlgorithm(val: string);
            get signing_certificate(): string;
            set signing_certificate(val: string);
            get signingCertificate(): string;
            set signingCertificate(val: string);

            // Constructors

            constructor(properties?: Partial<SourceSMIME.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_smime_get_encryption_certificate().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceSMIME:encryption-certificate
             */
            dup_encryption_certificate(): string | null;
            /**
             * Thread-safe variation of e_source_smime_get_signing_algorithm().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceSMIME:signing-algorithm
             */
            dup_signing_algorithm(): string | null;
            /**
             * Thread-safe variation of e_source_smime_get_signing_certificate().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceSMIME:signing-certificate
             */
            dup_signing_certificate(): string | null;
            /**
             * Returns whether to encrypt outgoing messages by default using S/MIME
             * software such as Mozilla Network Security Services (NSS).
             * @returns whether to encrypt outgoing messages by default
             */
            get_encrypt_by_default(): boolean;
            /**
             * Returns whether to "encrypt-to-self" when sending encrypted messages.
             * @returns whether to "encrypt-to-self"
             */
            get_encrypt_to_self(): boolean;
            /**
             * Returns the S/MIME certificate name used to encrypt messages.
             * @returns the certificate name used to encrypt messages
             */
            get_encryption_certificate(): string | null;
            /**
             * Returns whether to digitally sign outgoing messages by default using
             * S/MIME software such as Mozilla Network Security Services (NSS).
             * @returns whether to sign outgoing messages by default
             */
            get_sign_by_default(): boolean;
            /**
             * Returns the name of the hash algorithm used to digitally sign outgoing
             * messages.
             * @returns the signing algorithm for outgoing messages
             */
            get_signing_algorithm(): string | null;
            /**
             * Returns the S/MIME certificate name used to sign messages.
             * @returns the certificate name used to sign messages
             */
            get_signing_certificate(): string | null;
            /**
             * Sets whether to encrypt outgoing messages by default using S/MIME
             * software such as Mozilla Network Security Services (NSS).
             * @param encrypt_by_default whether to encrypt outgoing messages by default
             */
            set_encrypt_by_default(encrypt_by_default: boolean): void;
            /**
             * Sets whether to "encrypt-to-self" when sending encrypted messages.
             * @param encrypt_to_self whether to "encrypt-to-self"
             */
            set_encrypt_to_self(encrypt_to_self: boolean): void;
            /**
             * Sets the certificate name used to encrypt messages.
             *
             * If the `encryption_certificate` string is empty, %NULL is set instead.
             * @param encryption_certificate the certificate name used to encrypt                          messages, or %NULL
             */
            set_encryption_certificate(encryption_certificate?: string | null): void;
            /**
             * Sets whether to digitally sign outgoing messages by default using
             * S/MIME software such as Mozilla Network Security Services (NSS).
             * @param sign_by_default whether to sign outgoing messages by default
             */
            set_sign_by_default(sign_by_default: boolean): void;
            /**
             * Sets the name of the hash algorithm used to digitally sign outgoing
             * messages.
             *
             * The internal copy of `signing_algorithm` is automatically stripped of
             * leading and trailing whitespace.  If the resulting string is empty,
             * %NULL is set instead.
             * @param signing_algorithm the signing algorithm for outgoing                     messages, or %NULL
             */
            set_signing_algorithm(signing_algorithm?: string | null): void;
            /**
             * Sets the S/MIME certificate name used to sign messages.
             *
             * If the `signing_certificate` string is empty, %NULL is set instead.
             * @param signing_certificate the certificate name used to sign                       messages, or %NULL
             */
            set_signing_certificate(signing_certificate?: string | null): void;
        }

        module SourceSecurity {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                method: string;
                secure: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceSecurity extends SourceExtension {
            static $gtype: GObject.GType<SourceSecurity>;

            // Properties

            get method(): string;
            set method(val: string);
            get secure(): boolean;
            set secure(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceSecurity.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_security_get_method().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceSecurity:method
             */
            dup_method(): string;
            /**
             * Returns the method used to establish a secure network connection to a
             * remote account.  There are no pre-defined method names; backends are
             * free to set this however they wish.  If a secure connection is not
             * desired, the convention is to set #ESourceSecurity:method to "none".
             * @returns the method used to establish a secure network connection
             */
            get_method(): string;
            /**
             * This is a convenience function which returns whether a secure network
             * connection is desired, regardless of the method used.  This relies on
             * the convention of setting #ESourceSecurity:method to "none" when a
             * secure network connection is <emphasis>not</emphasis> desired.
             * @returns whether a secure network connection is desired
             */
            get_secure(): boolean;
            /**
             * Sets the method used to establish a secure network connection to a
             * remote account.  There are no pre-defined method names; backends are
             * free to set this however they wish.  If a secure connection is not
             * desired, the convention is to set #ESourceSecurity:method to "none".
             * In keeping with that convention, #ESourceSecurity:method will be set
             * to "none" if `method` is %NULL or an empty string.
             * @param method security method, or %NULL
             */
            set_method(method?: string | null): void;
            /**
             * This function provides a simpler way to set #ESourceSecurity:method
             * when using a secure network connection is a yes or no option and the
             * exact method name is unimportant.  If `secure` is %FALSE, the
             * #ESourceSecurity:method property is set to "none".  If `secure` is
             * %TRUE, the function assumes the backend will use Transport Layer
             * Security and sets the #ESourceSecurity:method property to "tls".
             * @param secure whether a secure network connection is desired
             */
            set_secure(secure: boolean): void;
        }

        module SourceSelectable {
            // Constructor properties interface

            interface ConstructorProps extends SourceBackend.ConstructorProps {
                color: string;
                order: number;
                selected: boolean;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class SourceSelectable extends SourceBackend {
            static $gtype: GObject.GType<SourceSelectable>;

            // Properties

            get color(): string;
            set color(val: string);
            get order(): number;
            set order(val: number);
            get selected(): boolean;
            set selected(val: boolean);

            // Constructors

            constructor(properties?: Partial<SourceSelectable.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_selectable_get_color().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceSelectable:color,    or %NULL, when none is set
             */
            dup_color(): string | null;
            /**
             * Returns the color specification for the #ESource to which `extension`
             * belongs.  A colored block is often displayed next to the data source's
             * display name in user interfaces.
             * @returns the color specification for the #ESource,    or %NULL, when none is set
             */
            get_color(): string | null;
            /**
             * Returns the preferred sorting order for the #ESource
             * to which `extension` belongs. Default is 0.
             * @returns the preferred sorting order for the #ESource
             */
            get_order(): number;
            /**
             * Returns the selected state of the #ESource to which `extension` belongs.
             * The selected state is often represented as a checkbox next to the data
             * source's display name in user interfaces.
             * @returns the selected state for the #ESource
             */
            get_selected(): boolean;
            /**
             * Sets the color specification for the #ESource to which `extension`
             * belongs.  A colored block is often displayed next to the data source's
             * display name in user interfaces.
             *
             * The internal copy of `color` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param color a color specification, or %NULL
             */
            set_color(color?: string | null): void;
            /**
             * Sets the sorting order for the #ESource to which `extension` belongs.
             * @param order the sorting order
             */
            set_order(order: number): void;
            /**
             * Sets the selected state for the #ESource to which `extension` belongs.
             * The selected state is often represented as a checkbox next to the data
             * source's display name in user interfaces.
             * @param selected selected state
             */
            set_selected(selected: boolean): void;
        }

        module SourceTaskList {
            // Constructor properties interface

            interface ConstructorProps extends SourceSelectable.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceTaskList extends SourceSelectable {
            static $gtype: GObject.GType<SourceTaskList>;

            // Constructors

            constructor(properties?: Partial<SourceTaskList.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;
        }

        module SourceUoa {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                account_id: number;
                accountId: number;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceUoa extends SourceExtension {
            static $gtype: GObject.GType<SourceUoa>;

            // Properties

            get account_id(): number;
            set account_id(val: number);
            get accountId(): number;
            set accountId(val: number);

            // Constructors

            constructor(properties?: Partial<SourceUoa.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Returns the numeric identifier of the Ubuntu Online Account associated
             * with the #ESource to which `extension` belongs.
             * @returns the associated Ubuntu Online Account ID
             */
            get_account_id(): number;
            /**
             * Sets the numeric identifier of the Ubuntu Online Account associated
             * with the #ESource to which `extension` belongs.
             * @param account_id the associated Ubuntu Online Account ID
             */
            set_account_id(account_id: number): void;
        }

        module SourceWeather {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                location: string;
                units: SourceWeatherUnits;
            }
        }

        class SourceWeather extends SourceExtension {
            static $gtype: GObject.GType<SourceWeather>;

            // Properties

            get location(): string;
            set location(val: string);
            get units(): SourceWeatherUnits;
            set units(val: SourceWeatherUnits);

            // Constructors

            constructor(properties?: Partial<SourceWeather.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            dup_location(): string;
            get_location(): string;
            get_units(): SourceWeatherUnits;
            set_location(location: string): void;
            set_units(units: SourceWeatherUnits | null): void;
        }

        module SourceWebDAVNotes {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                default_ext: string;
                defaultExt: string;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceWebDAVNotes extends SourceExtension {
            static $gtype: GObject.GType<SourceWebDAVNotes>;

            // Properties

            get default_ext(): string;
            set default_ext(val: string);
            get defaultExt(): string;
            set defaultExt(val: string);

            // Constructors

            constructor(properties?: Partial<SourceWebDAVNotes.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_webdav_notes_get_default_ext().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceWebDAVNotes:default-ext,    or %NULL, when none is set
             */
            dup_default_ext(): string | null;
            /**
             * Returns the default file extension for new notes.
             * @returns the default file extension, or %NULL, when none is set
             */
            get_default_ext(): string | null;
            /**
             * Sets the default file extension for new notes.
             *
             * The internal copy of `default_ext` is automatically stripped of leading and
             * trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param default_ext a default file extension, or %NULL
             */
            set_default_ext(default_ext?: string | null): void;
        }

        module SourceWebdav {
            // Constructor properties interface

            interface ConstructorProps extends SourceExtension.ConstructorProps {
                avoid_ifmatch: boolean;
                avoidIfmatch: boolean;
                calendar_auto_schedule: boolean;
                calendarAutoSchedule: boolean;
                color: string;
                display_name: string;
                displayName: string;
                email_address: string;
                emailAddress: string;
                order: number;
                resource_path: string;
                resourcePath: string;
                resource_query: string;
                resourceQuery: string;
                ssl_trust: string;
                sslTrust: string;
                timeout: number;
                uri: GLib.Uri;
            }
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class SourceWebdav extends SourceExtension {
            static $gtype: GObject.GType<SourceWebdav>;

            // Properties

            get avoid_ifmatch(): boolean;
            set avoid_ifmatch(val: boolean);
            get avoidIfmatch(): boolean;
            set avoidIfmatch(val: boolean);
            get calendar_auto_schedule(): boolean;
            set calendar_auto_schedule(val: boolean);
            get calendarAutoSchedule(): boolean;
            set calendarAutoSchedule(val: boolean);
            get color(): string;
            set color(val: string);
            get display_name(): string;
            set display_name(val: string);
            get displayName(): string;
            set displayName(val: string);
            get email_address(): string;
            set email_address(val: string);
            get emailAddress(): string;
            set emailAddress(val: string);
            get order(): number;
            set order(val: number);
            get resource_path(): string;
            set resource_path(val: string);
            get resourcePath(): string;
            set resourcePath(val: string);
            get resource_query(): string;
            set resource_query(val: string);
            get resourceQuery(): string;
            set resourceQuery(val: string);
            get ssl_trust(): string;
            set ssl_trust(val: string);
            get sslTrust(): string;
            set sslTrust(val: string);
            get timeout(): number;
            set timeout(val: number);
            get uri(): GLib.Uri;
            set uri(val: GLib.Uri);

            // Constructors

            constructor(properties?: Partial<SourceWebdav.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            // Methods

            /**
             * Thread-safe variation of e_source_webdav_get_color().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceWebdav:color
             */
            dup_color(): string | null;
            /**
             * Thread-safe variation of e_source_webdav_get_display_name().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns a newly-allocated copy of #ESourceWebdav:display-name
             */
            dup_display_name(): string | null;
            /**
             * Thread-safe variation of e_source_webdav_get_email_address().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns the newly-allocated copy of #ESourceWebdav:email-address
             */
            dup_email_address(): string | null;
            /**
             * Thread-safe variation of e_source_webdav_get_resource_path().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns the newly-allocated copy of #ESourceWebdav:resource-path
             */
            dup_resource_path(): string | null;
            /**
             * Thread-safe variation of e_source_webdav_get_resource_query().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns the newly-allocated copy of #ESourceWebdav:resource-query
             */
            dup_resource_query(): string | null;
            /**
             * Thread-safe variation of e_source_webdav_get_ssl_trust().
             * Use this function when accessing `extension` from multiple threads.
             *
             * The returned string should be freed with g_free() when no longer needed.
             * @returns the newly-allocated copy of #ESourceWebdav:ssl-trust
             */
            dup_ssl_trust(): string | null;
            /**
             * This is a convenience function which returns a newly-allocated
             * #GUri, its contents assembled from the #ESourceAuthentication
             * extension, the #ESourceSecurity extension, and `extension` itself.
             * Free the returned #GUri with g_uri_unref().
             * @returns a newly-allocated #GUri
             */
            dup_uri(): GLib.Uri;
            /**
             * This setting works around a
             * <ulink url="https://issues.apache.org/bugzilla/show_bug.cgi?id=38034">
             * bug</ulink> in older Apache mod_dav versions.
             *
             * <note>
             *   <para>
             *     We may deprecate this once Apache 2.2.8 or newer becomes
             *     sufficiently ubiquitous, or we figure out a way to detect
             *     and work around the bug automatically.
             *   </para>
             * </note>
             * @returns whether the WebDAV server is known to exhibit the bug
             */
            get_avoid_ifmatch(): boolean;
            /**
             * FIXME Document me!
             */
            get_calendar_auto_schedule(): boolean;
            /**
             * Returns the last known color of a WebDAV resource as provided by the server.
             * @returns the color of the WebDAV resource, if any set on the server
             */
            get_color(): string | null;
            /**
             * Returns the last known display name of a WebDAV resource, which may
             * differ from the #ESource:display-name property of the #ESource to which
             * `extension` belongs.
             * @returns the display name of the WebDAV resource
             */
            get_display_name(): string | null;
            /**
             * Returns the user's email address which can be passed to a CalDAV server
             * if the user wishes to receive scheduling messages.
             * @returns the user's email address
             */
            get_email_address(): string | null;
            get_order(): number;
            /**
             * Returns the absolute path to a resource on a WebDAV server.
             * @returns the absolute path to a WebDAV resource
             */
            get_resource_path(): string | null;
            /**
             * Returns the URI query required to access a resource on a WebDAV server.
             *
             * This is typically used when the #ESourceWebdav:resource-path points not
             * to the resource itself but to a web program that generates the resource
             * content on-the-fly.  The #ESourceWebdav:resource-query holds the input
             * values for the program.
             * @returns the query to access a WebDAV resource
             */
            get_resource_query(): string | null;
            /**
             * Returns an SSL/TLS certificate trust for the `extension`.
             * The value encodes three parameters, divided by a pipe '|',
             * the first is users preference, can be one of "reject", "accept",
             * "temporary-reject" and "temporary-accept". The second is a host
             * name for which the trust was set. Finally the last is a SHA256
             * hash of the certificate. This is not meant to be changed by a caller,
             * it is supposed to be manipulated with e_source_webdav_update_ssl_trust()
             * and e_source_webdav_verify_ssl_trust().
             * @returns an SSL/TLS certificate trust for the @extension
             */
            get_ssl_trust(): string | null;
            get_ssl_trust_response(): TrustPromptResponse;
            get_timeout(): number;
            /**
             * This setting works around a
             * <ulink url="https://issues.apache.org/bugzilla/show_bug.cgi?id=38034">
             * bug</ulink> in older Apache mod_dav versions.
             *
             * <note>
             *   <para>
             *     We may deprecate this once Apache 2.2.8 or newer becomes
             *     sufficiently ubiquitous, or we figure out a way to detect
             *     and work around the bug automatically.
             *   </para>
             * </note>
             * @param avoid_ifmatch whether the WebDAV server is known to exhibit the bug
             */
            set_avoid_ifmatch(avoid_ifmatch: boolean): void;
            /**
             * FIXME Document me!
             * @param calendar_auto_schedule whether the server supports the "calendar-auto-schedule" feature of CalDAV
             */
            set_calendar_auto_schedule(calendar_auto_schedule: boolean): void;
            /**
             * Updates the last known color of a WebDAV resource, as provided by the server.
             *
             * The internal copy of `color` is automatically stripped of leading
             * and trailing whitespace. If the resulting string is empty, %NULL is set
             * instead.
             * @param color the color of the WebDAV resource, or %NULL
             */
            set_color(color?: string | null): void;
            /**
             * Updates the last known display name of a WebDAV resource, which may
             * differ from the #ESource:display-name property of the #ESource to which
             * `extension` belongs.
             *
             * The internal copy of `display_name` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param display_name the display name of the WebDAV resource,                or %NULL
             */
            set_display_name(display_name?: string | null): void;
            /**
             * Sets the user's email address which can be passed to a CalDAV server if
             * the user wishes to receive scheduling messages.
             *
             * The internal copy of `email_address` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param email_address the user's email address, or %NULL
             */
            set_email_address(email_address?: string | null): void;
            /**
             * Set the sorting order of the resource.
             * @param order a sorting order
             */
            set_order(order: number): void;
            /**
             * Sets the absolute path to a resource on a WebDAV server.
             *
             * The internal copy of `resource_path` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param resource_path the absolute path to a WebDAV resource,                 or %NULL
             */
            set_resource_path(resource_path?: string | null): void;
            /**
             * Sets the URI query required to access a resource on a WebDAV server.
             *
             * This is typically used when the #ESourceWebdav:resource-path points not
             * to the resource itself but to a web program that generates the resource
             * content on-the-fly.  The #ESourceWebdav:resource-query holds the input
             * values for the program.
             *
             * The internal copy of `resource_query` is automatically stripped of leading
             * and trailing whitespace.  If the resulting string is empty, %NULL is set
             * instead.
             * @param resource_query the query to access a WebDAV resource,                  or %NULL
             */
            set_resource_query(resource_query?: string | null): void;
            /**
             * Sets the SSL/TLS certificate trust. See e_source_webdav_get_ssl_trust()
             * for more infomation about its content and how to use it.
             * @param ssl_trust the ssl_trust to store, or %NULL to unset
             */
            set_ssl_trust(ssl_trust?: string | null): void;
            /**
             * Set the SSL trust response, as #ETrustPromptResponse, while keeping
             * the certificate and host information as before. The function does
             * nothing, when none SSL trust is set or when %E_TRUST_PROMPT_RESPONSE_UNKNOWN
             * is used as the `response`.
             * @param response an #ETrustPromptResponse to set
             */
            set_ssl_trust_response(response: TrustPromptResponse | null): void;
            /**
             * Set the connection timeout, in seconds.
             * @param timeout a timeout, in seconds
             */
            set_timeout(timeout: number): void;
            /**
             * This is a convenience function which propagates the components of
             * `uri` to the #ESourceAuthentication extension, the #ESourceSecurity
             * extension, and `extension` itself.  (The "fragment" component of
             * `uri` is ignored.)
             * @param uri a #GUri
             */
            set_uri(uri: GLib.Uri): void;
            /**
             * Unsets temporary trust set on this `extension,` but keeps
             * it as is for other values.
             */
            unset_temporary_ssl_trust(): void;
            /**
             * Updates user's response from a trust prompt, thus it is re-used the next
             * time it'll be needed. An #E_TRUST_PROMPT_RESPONSE_UNKNOWN is treated as
             * a temporary reject, which means the user will be asked again.
             * @param host a host name to store the certificate for
             * @param cert the invalid certificate of the connection over which @host is about        to be sent
             * @param response user's response from a trust prompt for @cert
             */
            update_ssl_trust(host: string, cert: Gio.TlsCertificate, response: TrustPromptResponse | null): void;
            /**
             * Verifies SSL/TLS trust for the given `host` and `cert,` as previously stored in the `extension`
             * with e_source_webdav_update_ssl_trust().
             * @param host a host name to store the certificate for
             * @param cert the invalid certificate of the connection over which @host is about        to be sent
             * @param cert_errors a bit-or of #GTlsCertificateFlags describing the reason   for the @cert to be considered invalid
             */
            verify_ssl_trust(
                host: string,
                cert: Gio.TlsCertificate,
                cert_errors: Gio.TlsCertificateFlags | null,
            ): TrustPromptResponse;
        }

        module WebDAVSession {
            // Constructor properties interface

            interface ConstructorProps extends SoupSession.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class WebDAVSession extends SoupSession {
            static $gtype: GObject.GType<WebDAVSession>;

            // Constructors

            constructor(properties?: Partial<WebDAVSession.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](source: Source): WebDAVSession;
            // Conflicted with Soup.Session.new

            static ['new'](...args: never[]): any;

            // Static methods

            /**
             * Frees `privileges` returned by e_webdav_session_get_supported_privilege_set_sync().
             * The function does nothing, if `privileges` is %NULL.
             * @param privileges a tree of #EWebDAVPrivilege structures
             */
            static util_free_privileges(privileges?: GLib.Node | null): void;
            /**
             * Compares two hrefs and return whether they reference
             * the same item on the server. The comparison is done in
             * a relaxed way, not considering scheme part and comparing
             * the host name case insensitively, while the path
             * case sensitively. It also ignores the username/password
             * information in the hostname part, if it's included.
             * The function doesn't decode any URI-encoded characters.
             * @param href1 the first href
             * @param href2 the second href
             */
            static util_item_href_equal(href1: string, href2: string): boolean;
            /**
             * Dequotes `text,` if it's enclosed in double-quotes. The function
             * changes `text,` it doesn't allocate new string. The function does
             * nothing when the `text` is not enclosed in double-quotes.
             * @param text text to dequote
             */
            static util_maybe_dequote(text: string): [string, string];

            // Methods

            /**
             * Issues ACL request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param xml the request itself, as an #EXmlDocument, the root element should be DAV:acl
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            acl_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Copies a resource identified by `source_uri` to `destination_uri` on the server.
             * The `source_uri` can reference also collections, in which case the `depth` influences
             * whether only the collection itself is copied (%E_WEBDAV_DEPTH_THIS) or whether
             * the collection with all its children is copied (%E_WEBDAV_DEPTH_INFINITY).
             * @param source_uri URI of the resource or collection to copy
             * @param destination_uri URI of the destination
             * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY
             * @param can_overwrite whether can overwrite @destination_uri, when it exists
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            copy_sync(
                source_uri: string,
                destination_uri: string,
                depth: string,
                can_overwrite: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Deletes a resource identified by `uri` on the server. The URI can
             * reference a collection, in which case `depth` should be %E_WEBDAV_DEPTH_INFINITY.
             * Use `depth` %E_WEBDAV_DEPTH_THIS when deleting a regular resource, or %NULL,
             * to let the server use default Depth.
             *
             * The `etag` argument is used to avoid clashes when overwriting existing resources.
             * Use %NULL `etag` when deleting collection resources or to force the deletion,
             * otherwise provide a valid ETag of a non-collection resource to verify that
             * the version requested to delete is the same as on the server.
             *
             * Note that the actual usage of `etag` is also influenced by #ESourceWebdav:avoid-ifmatch
             * property of the associated #ESource.
             * @param uri URI of the resource to delete
             * @param depth optional requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY, or %NULL
             * @param etag an optional ETag of the resource, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            delete_sync(
                uri: string,
                depth?: string | null,
                etag?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Deletes a resource identified by `uri` on the server. The URI can
             * reference a collection, in which case `depth` should be %E_WEBDAV_DEPTH_INFINITY.
             * Use `depth` %E_WEBDAV_DEPTH_THIS when deleting a regular resource, or %NULL,
             * to let the server use default Depth.
             *
             * The `etag` argument is used to avoid clashes when overwriting existing resources.
             * Use %NULL `etag` when deleting collection resources or to force the deletion,
             * otherwise provide a valid ETag of a non-collection resource to verify that
             * the version requested to delete is the same as on the server.
             *
             * The optional `in_headers` can contain additional headers to be added to the request.
             * These headers replace any existing in the request headers, without support for the list-values headers.
             *
             * Note that the actual usage of `etag` is also influenced by #ESourceWebdav:avoid-ifmatch
             * property of the associated #ESource.
             * @param uri URI of the resource to delete
             * @param depth optional requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY, or %NULL
             * @param etag an optional ETag of the resource, or %NULL
             * @param in_headers additional #SoupMessageHeaders to be added to the request, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            delete_with_headers_sync(
                uri: string,
                depth?: string | null,
                etag?: string | null,
                in_headers?: Soup.MessageHeaders | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Converts possibly path-only `href` into a full URI under the `request_uri`.
             * When the `request_uri` is %NULL, the URI defined in associated #ESource is
             * used instead, taken from the #ESourceWebdav extension, if defined.
             *
             * Free the returned pointer with g_free(), when no longer needed.
             * @param request_uri a #GUri to which the @href belongs, or %NULL
             * @param href a possibly path-only href
             * @returns The @href as a full URI
             */
            ensure_full_uri(request_uri: GLib.Uri | null, href: string): string;
            /**
             * Gets Access Control List (ACL) restrictions for the `uri,` or, in case it's %NULL,
             * for the URI defined in associated #ESource. The `out_principal_kind` is valid only
             * if the `out_restrictions` contains #E_WEBDAV_ACL_RESTRICTION_REQUIRED_PRINCIPAL.
             * The `out_principal_hrefs` is valid only if the `out_principal_kind` is valid and when
             * it is #E_WEBDAV_ACE_PRINCIPAL_HREF.
             *
             * Free the returned `out_principal_hrefs` with
             * g_slist_free_full (entries, g_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_acl_restrictions_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, number, WebDAVACEPrincipalKind, string[]];
            /**
             * Gets Access Control List (ACL) for the `uri,` or, in case it's %NULL, for the URI
             * defined in associated #ESource.
             *
             * This function doesn't read general #E_WEBDAV_ACE_PRINCIPAL_PROPERTY.
             *
             * Free the returned `out_entries` with
             * g_slist_free_full (entries, e_webdav_access_control_entry_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_acl_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, WebDAVAccessControlEntry[]];
            /**
             * Gets current user privileges for the `uri,` or, in case it's %NULL, for the URI
             * defined in associated #ESource, with optional read of the capabilities
             * and what the user is allowed. See e_webdav_session_options_sync() for
             * more information about the `out_capabilities` and `out_allows` values.
             *
             * Free the returned `out_privileges` with
             * g_slist_free_full (privileges, e_webdav_privilege_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_current_user_privilege_set_full_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, WebDAVPrivilege[], GLib.HashTable<any, any> | null, GLib.HashTable<any, any> | null];
            /**
             * Gets current user privileges for the `uri,` or, in case it's %NULL, for the URI
             * defined in associated #ESource.
             *
             * Free the returned `out_privileges` with
             * g_slist_free_full (privileges, e_webdav_privilege_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_current_user_privilege_set_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, WebDAVPrivilege[]];
            /**
             * Reads a resource identified by `uri` from the server. The URI cannot
             * reference a collection.
             *
             * The `out_bytes` is filled by actual data being read. If not %NULL, `out_length`
             * is populated with how many bytes had been read. The `out_bytes` is always
             * NUL-terminated, while this termination byte is not part of `out_length`.
             * Free the `out_bytes` with g_free(), when no longer needed.
             *
             * Free returned pointer of `out_href` and `out_etag,` if not %NULL, with g_free(),
             * when no longer needed.
             *
             * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
             * when no longer needed.
             *
             * To read large data use e_webdav_session_get_sync() instead.
             * @param uri URI of the resource to read
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_data_sync(
                uri: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string, Soup.MessageHeaders | null, string, number];
            /**
             * Returns last DAV error code as returned by the server. Each recognized code
             * is enclosed in "[]" in the returned string, to be able to distinguish between
             * them, in case the server returned multiple codes.
             *
             * The string is valid until the next request is executed.
             * @returns a DAV error from the last request,    or %NULL, when no error had been recognized.
             */
            get_last_dav_error_code(): string | null;
            get_last_dav_error_is_permission(): boolean;
            /**
             * Gets list of principal collection href for the `uri,` or, in case it's %NULL,
             * for the URI defined in associated #ESource. The `out_principal_hrefs` are root
             * collections that contain the principals that are available on the server that
             * implements this resource.
             *
             * Free the returned `out_principal_hrefs` with
             * g_slist_free_full (entries, g_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_principal_collection_set_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string[]];
            /**
             * Gets supported privileges for the `uri,` or, in case it's %NULL, for the URI
             * defined in associated #ESource.
             *
             * The root node of `out_privileges` has always %NULL data.
             *
             * Free the returned `out_privileges` with e_webdav_session_util_free_privileges()
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_supported_privilege_set_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.Node];
            /**
             * Reads a resource identified by `uri` from the server and writes it
             * to the `stream`. The URI cannot reference a collection.
             *
             * Free returned pointer of `out_href` and `out_etag,` if not %NULL, with g_free(),
             * when no longer needed.
             *
             * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
             * when no longer needed.
             *
             * The e_webdav_session_get_data_sync() can be used to read the resource data
             * directly to memory.
             * @param uri URI of the resource to read
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            get_sync(
                uri: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string, Soup.MessageHeaders | null, Gio.OutputStream];
            /**
             * Issues a getctag property request for a collection identified by `uri,` or,
             * in case it's %NULL, on the URI defined in associated #ESource. The ctag is
             * a collection tag, which changes whenever the collection changes (similar
             * to etag). The getctag is an extension, thus the function can fail when
             * the server doesn't support it.
             *
             * Free the returned `out_ctag` with g_free(), when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            getctag_sync(uri: string | null, cancellable?: Gio.Cancellable | null): [boolean, string];
            /**
             * Lists content of the `uri,` or, in case it's %NULL, of the URI defined
             * in associated #ESource, which should point to a collection. The `flags`
             * influences which properties are read for the resources.
             *
             * The `out_resources` is in no particular order.
             *
             * Free the returned `out_resources` with
             * g_slist_free_full (resources, e_webdav_resource_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS, %E_WEBDAV_DEPTH_THIS_AND_CHILDREN or %E_WEBDAV_DEPTH_INFINITY
             * @param flags a bit-or of #EWebDAVListFlags, claiming what properties to read
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            list_sync(
                uri: string | null,
                depth: string,
                flags: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, WebDAVResource[]];
            /**
             * Locks a resource identified by `uri,` or, in case it's %NULL, by the URI defined
             * in associated #ESource. It obtains a write lock with the given `lock_scope`.
             *
             * The `owner` is used to identify the lock owner. When it's an http:// or https://,
             * then it's referenced as DAV:href, otherwise the value is treated as plain text.
             * If it's %NULL, then the user name from the associated #ESource is used.
             *
             * The `out_lock_token` can be refreshed with e_webdav_session_refresh_lock_sync().
             * Release the lock with e_webdav_session_unlock_sync().
             * Free the returned `out_lock_token` with g_free(), when no longer needed.
             * @param uri URI to lock, or %NULL to read from #ESource
             * @param lock_scope an #EWebDAVLockScope to define the scope of the lock
             * @param lock_timeout timeout for the lock, in seconds, on 0 to infinity
             * @param owner optional identificator of the owner of the lock, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            lock_resource_sync(
                uri: string | null,
                lock_scope: WebDAVLockScope | null,
                lock_timeout: number,
                owner: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string];
            /**
             * Locks a resource identified by `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource.
             *
             * The `out_lock_token` can be refreshed with e_webdav_session_refresh_lock_sync().
             * Release the lock with e_webdav_session_unlock_sync().
             * Free the returned `out_lock_token` with g_free(), when no longer needed.
             *
             * If provided, free the returned `out_xml_response` with xmlFreeDoc(),
             * when no longer needed.
             * @param uri URI to lock, or %NULL to read from #ESource
             * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS or %E_WEBDAV_DEPTH_INFINITY
             * @param lock_timeout timeout for the lock, in seconds, on 0 to infinity
             * @param xml an XML describing the lock request, with DAV:lockinfo root element
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            lock_sync(
                uri: string | null,
                depth: string,
                lock_timeout: number,
                xml: XmlDocument,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, libxml2.Doc | null];
            /**
             * Creates a new calendar collection identified by `uri` on the server.
             * The `supports` defines what component types can be stored into
             * the created calendar collection. Only %E_WEBDAV_RESOURCE_SUPPORTS_NONE
             * and values related to iCalendar content can be used here.
             * Using %E_WEBDAV_RESOURCE_SUPPORTS_NONE means that everything is supported.
             *
             * Note that CalDAV RFC 4791 Section 4.2 forbids to create calendar
             * resources under other calendar resources (no nested calendars
             * are allowed).
             * @param uri URI of the collection to create
             * @param display_name a human-readable display name to set, or %NULL
             * @param description a human-readable description of the calendar, or %NULL
             * @param color a color to set, in format "&num;RRGGBB", or %NULL
             * @param supports a bit-or of EWebDAVResourceSupports values
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            mkcalendar_sync(
                uri: string,
                display_name: string | null,
                description: string | null,
                color: string | null,
                supports: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Creates a new address book collection identified by `uri` on the server.
             *
             * Note that CardDAV RFC 6352 Section 5.2 forbids to create address book
             * resources under other address book resources (no nested address books
             * are allowed).
             * @param uri URI of the collection to create
             * @param display_name a human-readable display name to set, or %NULL
             * @param description a human-readable description of the address book, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            mkcol_addressbook_sync(
                uri: string,
                display_name?: string | null,
                description?: string | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Creates a new generic collection identified by `uri` on the server.
             * To create specific collections use e_webdav_session_mkcalendar_sync()
             * or e_webdav_session_mkcol_addressbook_sync().
             * @param uri URI of the collection to create
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            mkcol_sync(uri: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Moves a resource identified by `source_uri` to `destination_uri` on the server.
             * The `source_uri` can reference also collections.
             * @param source_uri URI of the resource or collection to copy
             * @param destination_uri URI of the destination
             * @param can_overwrite whether can overwrite @destination_uri, when it exists
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            move_sync(
                source_uri: string,
                destination_uri: string,
                can_overwrite: boolean,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            new_message(method: string, uri?: string | null): Soup.Message;
            // Conflicted with EDataServer.SoupSession.new_message
            new_message(...args: never[]): any;
            /**
             * Issues OPTIONS request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource.
             *
             * The `out_capabilities` contains a set of returned capabilities. Some known are
             * defined as E_WEBDAV_CAPABILITY_CLASS_1, and so on. The 'value' of the #GHashTable
             * doesn't have any particular meaning and the strings are compared case insensitively.
             * Free the hash table with g_hash_table_destroy(), when no longer needed. The returned
             * value can be %NULL on success, it's when the server doesn't provide the information.
             *
             * The `out_allows` contains a set of allowed methods returned by the server. Some known
             * are defined as %SOUP_METHOD_OPTIONS, and so on. The 'value' of the #GHashTable
             * doesn't have any particular meaning and the strings are compared case insensitively.
             * Free the hash table with g_hash_table_destroy(), when no longer needed. The returned
             * value can be %NULL on success, it's when the server doesn't provide the information.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            options_sync(
                uri: string | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, GLib.HashTable<any, any>, GLib.HashTable<any, any>];
            /**
             * Issues POST request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource.
             *
             * The optional `in_headers` can contain additional headers to be added to the request.
             * These headers replace any existing in the request headers, without support for the list-values headers.
             *
             * The optional `out_content_type` can be used to get content type of the response.
             * Free it with g_free(), when no longer needed.
             *
             * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
             * when no longer needed.
             *
             * The optional `out_content` can be used to get actual result content. Free it
             * with g_byte_array_free(), when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param data data to post to the server
             * @param data_length length of @data, or -1, when @data is NUL-terminated
             * @param in_content_type a Content-Type of the @data, or %NULL, to use application/xml
             * @param in_headers additional #SoupMessageHeaders to be added to the request, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            post_sync(
                uri: string | null,
                data: string,
                data_length: number,
                in_content_type: string | null,
                in_headers: Soup.MessageHeaders | null,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, Soup.MessageHeaders | null, Uint8Array | null];
            /**
             * Issues a DAV:principal-property-search for the `uri,` or, in case it's %NULL,
             * for the URI defined in associated #ESource. The DAV:principal-property-search
             * performs a search for all principals whose properties contain character data
             * that matches the search criteria `match_value` in `match_property` property
             * of namespace `match_ns_uri`.
             *
             * By default, the function searches all members (at any depth) of the collection
             * identified by the `uri`. If `apply_to_principal_collection_set` is set to %TRUE,
             * the search is applied instead to each collection returned by
             * e_webdav_session_get_principal_collection_set_sync() for the `uri`.
             *
             * The `out_principals` is a #GSList of #EWebDAVResource, where the kind
             * is set to %E_WEBDAV_RESOURCE_KIND_PRINCIPAL and only href with displayname
             * are filled. All other members of #EWebDAVResource are not set.
             *
             * Free the returned `out_principals` with
             * g_slist_free_full (principals, e_webdav_resource_free);
             * when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param apply_to_principal_collection_set whether to apply to principal-collection-set
             * @param match_ns_uri namespace URI of the property to search in, or %NULL for %E_WEBDAV_NS_DAV
             * @param match_property name of the property to search in
             * @param match_value a string value to search for
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded. Note it can report success also when no matching    principal had been found.
             */
            principal_property_search_sync(
                uri: string | null,
                apply_to_principal_collection_set: boolean,
                match_ns_uri: string | null,
                match_property: string,
                match_value: string,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, WebDAVResource[]];
            /**
             * Issues PROPFIND request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource. On success, calls `func` for each returned
             * DAV:propstat.
             *
             * The `xml` can be %NULL, in which case the server should behave like DAV:allprop request.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param depth requested depth, can be one of %E_WEBDAV_DEPTH_THIS, %E_WEBDAV_DEPTH_THIS_AND_CHILDREN or %E_WEBDAV_DEPTH_INFINITY
             * @param xml the request itself, as an #EXmlDocument, the root element should be DAV:propfind, or %NULL
             * @param func an #EWebDAVPropstatTraverseFunc function to call for each DAV:propstat in the multistatus response
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            propfind_sync(
                uri: string | null,
                depth: string,
                xml: XmlDocument | null,
                func: WebDAVPropstatTraverseFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Issues PROPPATCH request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource, with the `changes`. The order of requested changes
             * inside `xml` is significant, unlike on other places.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param xml an #EXmlDocument with request changes, its root element should be DAV:propertyupdate
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            proppatch_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Writes data to a resource identified by `uri` to the server. The URI cannot
             * reference a collection.
             *
             * The `etag` argument is used to avoid clashes when overwriting existing
             * resources. It can contain three values:
             *  - %NULL - to write completely new resource
             *  - empty string - write new resource or overwrite any existing, regardless changes on the server
             *  - valid ETag - overwrite existing resource only if it wasn't changed on the server.
             *
             * Note that the actual usage of `etag` is also influenced by #ESourceWebdav:avoid-ifmatch
             * property of the associated #ESource.
             *
             * The optional `in_headers` can contain additional headers to be added to the request.
             * These headers replace any existing in the request headers, without support for the list-values headers.
             *
             * The `out_href,` if provided, is filled with the resulting URI
             * of the written resource. It can be different from the `uri` when the server
             * redirected to a different location.
             *
             * The `out_etag` contains ETag of the resource after it had been saved.
             *
             * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
             * when no longer needed.
             *
             * To write large data use e_webdav_session_put_sync() instead.
             * @param uri URI of the resource to write
             * @param etag an ETag of the resource, if it's an existing resource, or %NULL
             * @param content_type Content-Type of the @bytes to be written
             * @param in_headers additional #SoupMessageHeaders to be added to the request, or %NULL
             * @param bytes actual bytes to be written
             * @param length how many bytes to write, or -1, when the @bytes is NUL-terminated
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_data_sync(
                uri: string,
                etag: string | null,
                content_type: string,
                in_headers: Soup.MessageHeaders | null,
                bytes: string,
                length: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string, Soup.MessageHeaders | null];
            /**
             * Writes data from `stream` to a resource identified by `uri` to the server.
             * The URI cannot reference a collection.
             *
             * The `etag` argument is used to avoid clashes when overwriting existing
             * resources. It can contain three values:
             *  - %NULL - to write completely new resource
             *  - empty string - write new resource or overwrite any existing, regardless changes on the server
             *  - valid ETag - overwrite existing resource only if it wasn't changed on the server.
             *
             * Note that the actual behaviour is also influenced by #ESourceWebdav:avoid-ifmatch
             * property of the associated #ESource.
             *
             * The optional `in_headers` can contain additional headers to be added to the request.
             * These headers replace any existing in the request headers, without support for the list-values headers.
             *
             * The `out_href,` if provided, is filled with the resulting URI
             * of the written resource. It can be different from the `uri` when the server
             * redirected to a different location.
             *
             * The `out_etag` contains ETag of the resource after it had been saved.
             *
             * The optional `out_headers` contains response headers. Free it with soup_message_headers_free(),
             * when no longer needed.
             *
             * The `stream` should support also #GSeekable interface, because the data
             * send can require restart of the send due to redirect or other reasons.
             *
             * This method uses Transfer-Encoding:chunked, in contrast to the
             * e_webdav_session_put_data_sync(), which writes data stored in memory
             * like any other request.
             * @param uri URI of the resource to write
             * @param etag an ETag of the resource, if it's an existing resource, or %NULL
             * @param content_type Content-Type of the @bytes to be written
             * @param in_headers additional #SoupMessageHeaders to be added to the request, or %NULL
             * @param stream a #GInputStream with data to be written
             * @param stream_length length of the @stream, or -1 if unknown
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            put_sync(
                uri: string,
                etag: string | null,
                content_type: string,
                in_headers: Soup.MessageHeaders | null,
                stream: Gio.InputStream,
                stream_length: number,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, string, Soup.MessageHeaders | null];
            /**
             * Refreshes existing lock `lock_token` for a resource identified by `uri,`
             * or, in case it's %NULL, on the URI defined in associated #ESource.
             * The `lock_token` is returned from e_webdav_session_lock_sync() and
             * the `uri` should be the same as that used with e_webdav_session_lock_sync().
             * @param uri URI to lock, or %NULL to read from #ESource
             * @param lock_token token of an existing lock
             * @param lock_timeout timeout for the lock, in seconds, on 0 to infinity
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            refresh_lock_sync(
                uri: string | null,
                lock_token: string,
                lock_timeout: number,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Tries to read detailed error information from `response_data,`
             * if not provided, then from `message'`s response_body. If the detailed
             * error cannot be found, then does nothing, otherwise frees the content
             * of `inout_error,` if any, and then populates it with an error message
             * prefixed with `prefix`.
             *
             * The `prefix` might be of form "Failed to something", because the resulting
             * error message will be:
             * "Failed to something: HTTP error code XXX (reason_phrase): detailed_error".
             * When `prefix` is %NULL, the error message will be:
             * "Failed with HTTP error code XXX (reason phrase): detailed_error".
             *
             * As the caller might not be interested in errors, also the `inout_error`
             * can be %NULL, in which case the function does nothing.
             * @param message a #SoupMessage
             * @param response_data received response data, or %NULL
             * @param ignore_multistatus whether to ignore multistatus responses
             * @param prefix error message prefix, used when replacing, or %NULL
             * @returns Whether any detailed error had been recognized.
             */
            replace_with_detailed_error(
                message: Soup.Message,
                response_data: Uint8Array | null,
                ignore_multistatus: boolean,
                prefix?: string | null,
            ): boolean;
            /**
             * Issues REPORT request on the provided `uri,` or, in case it's %NULL, on the URI
             * defined in associated #ESource. On success, calls `func` for each returned
             * DAV:propstat.
             *
             * The report can result in a multistatus response, but also to raw data. In case
             * the `func` is provided and the result is a multistatus response, then it is traversed
             * using this `func`.
             *
             * The optional `out_content_type` can be used to get content type of the response.
             * Free it with g_free(), when no longer needed.
             *
             * The optional `out_content` can be used to get actual result content. Free it
             * with g_byte_array_free(), when no longer needed.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param depth requested depth, can be %NULL, then no Depth header is sent
             * @param xml the request itself, as an #EXmlDocument
             * @param func an #EWebDAVPropstatTraverseFunc function to call for each DAV:propstat in the multistatus response, or %NULL
             * @param out_content_type return location for response Content-Type, or %NULL
             * @param out_content return location for response content, or %NULL
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            report_sync(
                uri: string | null,
                depth: string | null,
                xml: XmlDocument,
                func?: WebDAVPropstatTraverseFunc | null,
                out_content_type?: string | null,
                out_content?: Uint8Array | null,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Changes Access Control List (ACL) for the `uri,` or, in case it's %NULL,
             * for the URI defined in associated #ESource.
             *
             * Make sure that the `entries` satisfy ACL restrictions, as returned
             * by e_webdav_session_get_acl_restrictions_sync(). The order in the `entries`
             * is preserved. It cannot contain any %E_WEBDAV_ACE_FLAG_PROTECTED,
             * nor `E_WEBDAV_ACE_FLAG_INHERITED,` items.
             *
             * Use e_webdav_session_get_acl_sync() to read currently known ACL entries,
             * remove from the list those protected and inherited, and then modify
             * the rest with the required changed.
             *
             * Note this function doesn't support general %E_WEBDAV_ACE_PRINCIPAL_PROPERTY and
             * returns %G_IO_ERROR_NOT_SUPPORTED error when any such is tried to be written.
             *
             * In case the returned entries contain any %E_WEBDAV_ACE_PRINCIPAL_PROPERTY,
             * or there's a need to write such Access Control Entry, then do not use
             * e_webdav_session_get_acl_sync(), neither e_webdav_session_set_acl_sync(),
             * and write more generic implementation.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param entries entries to write
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            set_acl_sync(
                uri: string | null,
                entries: WebDAVAccessControlEntry[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Traverses a CALDAV:mkcalendar-response response and calls `func` for each returned DAV:propstat.
             *
             * The `message,` if provided, is used to verify that the response is an XML Content-Type.
             * It's used to get the request URI as well.
             * @param message an optional #SoupMessage corresponding to the response, or %NULL
             * @param xml_data a #GByteArray containing CALDAV:mkcalendar-response response
             * @param func an #EWebDAVPropstatTraverseFunc function to call for each DAV:propstat in the response
             * @returns Whether succeeded.
             */
            traverse_mkcalendar_response(
                message: Soup.Message | null,
                xml_data: Uint8Array | string,
                func: WebDAVPropstatTraverseFunc,
            ): boolean;
            /**
             * Traverses a DAV:mkcol-response response and calls `func` for each returned DAV:propstat.
             *
             * The `message,` if provided, is used to verify that the response is an XML Content-Type.
             * It's used to get the request URI as well.
             * @param message an optional #SoupMessage corresponding to the response, or %NULL
             * @param xml_data a #GByteArray containing DAV:mkcol-response response
             * @param func an #EWebDAVPropstatTraverseFunc function to call for each DAV:propstat in the response
             * @returns Whether succeeded.
             */
            traverse_mkcol_response(
                message: Soup.Message | null,
                xml_data: Uint8Array | string,
                func: WebDAVPropstatTraverseFunc,
            ): boolean;
            /**
             * Traverses a DAV:multistatus response and calls `func` for each returned DAV:propstat.
             *
             * The `message,` if provided, is used to verify that the response is a multi-status
             * and that the Content-Type is properly set. It's used to get a request URI as well.
             * @param message an optional #SoupMessage corresponding to the response, or %NULL
             * @param xml_data a #GByteArray containing DAV:multistatus response
             * @param func an #EWebDAVPropstatTraverseFunc function to call for each DAV:propstat in the multistatus response
             * @returns Whether succeeded.
             */
            traverse_multistatus_response(
                message: Soup.Message | null,
                xml_data: Uint8Array | string,
                func: WebDAVPropstatTraverseFunc,
            ): boolean;
            /**
             * Releases (unlocks) existing lock `lock_token` for a resource identified by `uri,`
             * or, in case it's %NULL, on the URI defined in associated #ESource.
             * The `lock_token` is returned from e_webdav_session_lock_sync() and
             * the `uri` should be the same as that used with e_webdav_session_lock_sync().
             * @param uri URI to lock, or %NULL to read from #ESource
             * @param lock_token token of an existing lock
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            unlock_sync(uri: string | null, lock_token: string, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Updates properties (set/remove) on the provided `uri,` or, in case it's %NULL,
             * on the URI defined in associated #ESource, with the `changes`. The order
             * of `changes` is significant, unlike on other places.
             *
             * This function supports only flat properties, those not under other element.
             * To support more complex property tries use e_webdav_session_proppatch_sync()
             * directly.
             * @param uri URI to issue the request for, or %NULL to read from #ESource
             * @param changes a #GSList with request changes
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns Whether succeeded.
             */
            update_properties_sync(
                uri: string | null,
                changes: WebDAVPropertyChange[],
                cancellable?: Gio.Cancellable | null,
            ): boolean;
        }

        module XmlDocument {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        class XmlDocument extends GObject.Object {
            static $gtype: GObject.GType<XmlDocument>;

            // Constructors

            constructor(properties?: Partial<XmlDocument.ConstructorProps>, ...args: any[]);

            _init(...args: any[]): void;

            static ['new'](ns_href: string | null, root_element: string): XmlDocument;

            // Methods

            /**
             * Adds a new attribute to the current element.
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             * @param ns_href optional namespace href for the new attribute, or %NULL
             * @param name name of the attribute
             * @param value value of the attribute
             */
            add_attribute(ns_href: string | null, name: string, value: string): void;
            /**
             * Adds a new attribute with a double value to the current element.
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             * @param ns_href optional namespace href for the new attribute, or %NULL
             * @param name name of the attribute
             * @param value double value of the attribute
             */
            add_attribute_double(ns_href: string | null, name: string, value: number): void;
            /**
             * Adds a new attribute with an integer value to the current element.
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             * @param ns_href optional namespace href for the new attribute, or %NULL
             * @param name name of the attribute
             * @param value integer value of the attribute
             */
            add_attribute_int(ns_href: string | null, name: string, value: number): void;
            /**
             * Adds a new attribute with a time_t value in ISO 8601 format to the current element.
             * The format is "YYYY-MM-DDTHH:MM:SSZ".
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             * @param ns_href optional namespace href for the new attribute, or %NULL
             * @param name name of the attribute
             * @param value time_t value of the attribute
             */
            add_attribute_time(ns_href: string | null, name: string, value: never): void;
            /**
             * Adds a new attribute with a time_t value in iCalendar format to the current element.
             * The format is "YYYYMMDDTHHMMSSZ".
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             * @param ns_href optional namespace href for the new attribute, or %NULL
             * @param name name of the attribute
             * @param value time_t value of the attribute
             */
            add_attribute_time_ical(ns_href: string | null, name: string, value: never): void;
            /**
             * Adds an empty element, which is an element with no attribute and no value.
             *
             * It's the same as calling e_xml_document_start_element() immediately
             * followed by e_xml_document_end_element().
             * @param ns_href optional namespace href for the new element, or %NULL
             * @param name name of the new element
             */
            add_empty_element(ns_href: string | null, name: string): void;
            /**
             * This is a pair function for e_xml_document_start_element() and
             * e_xml_document_start_text_element(), which changes current
             * element to the parent of that element.
             */
            end_element(): void;
            /**
             * Gets content of the `xml` as string. The string is nul-terminated, but
             * if `out_length` is also provided, then it doesn't contain this additional
             * nul character.
             * @returns Content of the @xml as newly allocated string.    Free it with g_free(), when no longer needed.
             */
            get_content(): [string, number];
            get_xmldoc(): libxml2.Doc;
            /**
             * Starts a new non-text element as a child of the current element.
             * Each such call should be ended with corresponding e_xml_document_end_element().
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             *
             * To start a text node use e_xml_document_start_text_element().
             * @param ns_href optional namespace href for the new element, or %NULL
             * @param name name of the new element
             */
            start_element(ns_href: string | null, name: string): void;
            /**
             * Starts a new text element as a child of the current element.
             * Each such call should be ended with corresponding e_xml_document_end_element().
             * Use %NULL `ns_href,` to use the default namespace, otherwise either previously
             * added namespace with the same href from e_xml_document_add_namespaces() is picked,
             * or a new namespace with generated prefix is added.
             *
             * To start a non-text node use e_xml_document_start_element().
             * @param ns_href optional namespace href for the new element, or %NULL
             * @param name name of the new element
             */
            start_text_element(ns_href: string | null, name: string): void;
            /**
             * Writes `value` of length `len,` encoded to base64, as content of the current element.
             * @param value value to write as the content
             * @param len length of @value
             */
            write_base64(value: string, len: number): void;
            /**
             * Writes `value` of length `len` as content of the current element.
             * @param value value to write as the content
             * @param len length of @value
             */
            write_buffer(value: string, len: number): void;
            /**
             * Writes `value` as content of the current element.
             * @param value value to write as the content
             */
            write_double(value: number): void;
            /**
             * Writes `value` as content of the current element.
             * @param value value to write as the content
             */
            write_int(value: number): void;
            /**
             * Writes `value` as content of the current element.
             * @param value value to write as the content
             */
            write_string(value: string): void;
            /**
             * Writes `value` in ISO 8601 format as content of the current element.
             * The format is "YYYY-MM-DDTHH:MM:SSZ".
             * @param value value to write as the content
             */
            write_time(value: never): void;
        }

        /**
         * #EAsyncClosure provides a simple way to run an asynchronous function
         * synchronously without blocking a running #GMainLoop or using threads.
         *
         * 1) Create an #EAsyncClosure with e_async_closure_new().
         *
         * 2) Call the asynchronous function passing e_async_closure_callback() as
         *    the #GAsyncReadyCallback argument and the #EAsyncClosure as the data
         *    argument.
         *
         * 3) Call e_async_closure_wait() and collect the #GAsyncResult.
         *
         * 4) Call the corresponding asynchronous "finish" function, passing the
         *    #GAsyncResult returned by e_async_closure_wait().
         *
         * 5) If needed, repeat steps 2-4 for additional asynchronous functions
         *    using the same #EAsyncClosure.
         *
         * 6) Finally, free the #EAsyncClosure with e_async_closure_free().
         */
        abstract class AsyncClosure {
            static $gtype: GObject.GType<AsyncClosure>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ClientClass = typeof Client;
        class ClientErrorsList {
            static $gtype: GObject.GType<ClientErrorsList>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;
        }

        abstract class ClientPrivate {
            static $gtype: GObject.GType<ClientPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * An opaque object used for locale specific string comparisons
         * and sort ordering.
         */
        class Collator {
            static $gtype: GObject.GType<Collator>;

            // Constructors

            constructor(locale: string);
            _init(...args: any[]): void;

            static ['new'](locale: string): Collator;

            static new_interpret_country(locale: string): Collator;

            // Static methods

            static error_quark(): GLib.Quark;

            // Methods

            /**
             * Compares `str_a` with `str_b,` the order of strings is determined by the parameters of `collator`.
             *
             * The `result` will be set to integer less than, equal to, or greater than zero if `str_a` is found,
             * respectively, to be less than, to match, or be greater than `str_b`.
             *
             * Either `str_a` or `str_b` can be %NULL, %NULL strings are considered to sort below other strings.
             *
             * This function will first ensure that both strings are valid UTF-8.
             * @param str_a A string to compare
             * @param str_b The string to compare with @str_a
             * @returns %TRUE on success, otherwise if %FALSE is returned then @error will be set.
             */
            collate(str_a: string | null, str_b: string | null): [boolean, number];
            /**
             * Generates a collation key for `str,` the result of comparing
             * two collation keys with strcmp() will be the same result
             * of calling e_collator_collate() on the same original strings.
             *
             * This function will first ensure that `str` is valid UTF-8 encoded.
             * @param str The string to generate a collation key for
             * @returns A collation key for @str, or    %NULL on failure with @error set.
             */
            generate_key(str: string): string;
            /**
             * Generates a sort key for the given alphabetic `index`.
             *
             * The generated sort key is guaranteed to sort below
             * any sort keys for words beginning with any variant of
             * the given letter.
             *
             * For instance, a sort key generated for the index 5 of
             * a latin alphabet, where the fifth index is 'E' will sort
             * below any sort keys generated for words starting with
             * the characters 'e', 'E', 'é', 'É', 'è' or 'È'. It will also
             * sort above any sort keys generated for words starting with
             * the characters 'd' or 'D'.
             * @param index An index into the alphabetic labels
             * @returns A sort key for the given index
             */
            generate_key_for_index(index: number): string;
            /**
             * Checks which index, as determined by e_collator_get_index_labels(),
             * that `str` should sort under.
             * @param str A string
             * @returns The alphabetic index under which @str would sort
             */
            get_index(str: string): number;
            /**
             * Fetches the displayable labels and index positions for the active alphabet.
             * @returns The array of displayable labels for each index in the active alphabet(s).
             */
            get_index_labels(): [string[], number, number, number, number];
            /**
             * Increases the reference count of `collator`.
             * @returns @collator
             */
            ref(): Collator;
            /**
             * Decreases the reference count of `collator`.
             * If the reference count reaches 0 then the collator is freed
             */
            unref(): void;
        }

        type ExtensibleInterface = typeof Extensible;
        type ExtensionClass = typeof Extension;
        abstract class ExtensionPrivate {
            static $gtype: GObject.GType<ExtensionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class Flag {
            static $gtype: GObject.GType<Flag>;

            // Constructors

            _init(...args: any[]): void;
        }

        class FreeFormExpSymbol {
            static $gtype: GObject.GType<FreeFormExpSymbol>;

            // Fields

            names: string;
            hint: string;
            build_sexp: FreeFormExpBuildSexpFunc;

            // Constructors

            _init(...args: any[]): void;
        }

        class GDataQuery {
            static $gtype: GObject.GType<GDataQuery>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): GDataQuery;

            // Methods

            /**
             * Gets current value of the completed max property, as a Unix
             * date/time. When not set, returns -1. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or -1
             */
            get_completed_max(): [number, boolean];
            /**
             * Gets current value of the completed min property, as a Unix
             * date/time. When not set, returns -1. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or -1
             */
            get_completed_min(): [number, boolean];
            /**
             * Gets current value of the due max property, as a Unix
             * date/time. When not set, returns -1. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or -1
             */
            get_due_max(): [number, boolean];
            /**
             * Gets current value of the due min property, as a Unix
             * date/time. When not set, returns -1. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or -1
             */
            get_due_min(): [number, boolean];
            /**
             * Gets current value of the max results property.
             * When not set, returns 0. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or 0
             */
            get_max_results(): [number, boolean];
            /**
             * Gets current value of the show completed property. When not set,
             * returns %FALSE. The optional `out_exists` can be used to see whether
             * the property is set.
             * @returns the set value, or %FALSE
             */
            get_show_completed(): [boolean, boolean];
            /**
             * Gets current value of the show deleted property. When not set,
             * returns %FALSE. The optional `out_exists` can be used to see whether
             * the property is set.
             * @returns the set value, or %FALSE
             */
            get_show_deleted(): [boolean, boolean];
            /**
             * Gets current value of the show hidden property. When not set,
             * returns %FALSE. The optional `out_exists` can be used to see whether
             * the property is set.
             * @returns the set value, or %FALSE
             */
            get_show_hidden(): [boolean, boolean];
            /**
             * Gets current value of the updated min property, as a Unix
             * date/time. When not set, returns -1. The optional `out_exists`
             * can be used to see whether the property is set.
             * @returns the set value, or -1
             */
            get_updated_min(): [number, boolean];
            /**
             * Increases the reference count of the `self`.
             * The added reference shuld be removed with e_gdata_query_unref().
             * @returns the @self
             */
            ref(): GDataQuery;
            /**
             * Sets upper bound for a task's completion date, as a Unix date/time, to filter by.
             * The default is not to filter by completion date.
             *
             * This can be used for Task object query only.
             * @param value a value to set, as a Unix date/time
             */
            set_completed_max(value: number): void;
            /**
             * Sets lower bound for a task's completion date, as a Unix date/time, to filter by.
             * The default is not to filter by completion date.
             *
             * This can be used for Task object query only.
             * @param value a value to set, as a Unix date/time
             */
            set_completed_min(value: number): void;
            /**
             * Sets upper bound for a task's due date, as a Unix date/time, to filter by.
             * The default is not to filter by due date.
             *
             * This can be used for Task object query only.
             * @param value a value to set, as a Unix date/time
             */
            set_due_max(value: number): void;
            /**
             * Sets lower bound for a task's due date, as a Unix date/time, to filter by.
             * The default is not to filter by due date.
             *
             * This can be used for Task object query only.
             * @param value a value to set, as a Unix date/time
             */
            set_due_min(value: number): void;
            /**
             * Sets max results to be returned in one call.
             *
             * This can be used for any object query.
             * @param value a value to set
             */
            set_max_results(value: number): void;
            /**
             * Sets a flag indicating whether completed tasks are returned in the result.
             * The default is True. Note that show hidden should also be True to show
             * tasks completed in first party clients, such as the web UI and Google's
             * mobile apps.
             *
             * This can be used for Task object query only.
             * @param value a value to set
             */
            set_show_completed(value: boolean): void;
            /**
             * Sets a flag indicating whether deleted tasks are returned in the result.
             * The default is False.
             *
             * This can be used for Task object query only.
             * @param value a value to set
             */
            set_show_deleted(value: boolean): void;
            /**
             * Sets a flag indicating whether hidden tasks are returned in the result.
             * The default is False.
             *
             * This can be used for Task object query only.
             * @param value a value to set
             */
            set_show_hidden(value: boolean): void;
            /**
             * Sets lower bound for a task's last modification time, as a Unix date/time,
             * to filter by. The default is not to filter by the last modification time.
             *
             * This can be used for Task object query only.
             * @param value a value to set, as a Unix date/time
             */
            set_updated_min(value: number): void;
            /**
             * Converts the `self` into a string, which can be used as a URI query. The returned
             * string should be freed with g_free(), when no longer needed.
             * @returns the @self converted into a string, or %NULL,    when the @self doesn't have set any parameter.
             */
            to_string(): string | null;
            /**
             * Decreases the reference count of the `self`. When the reference count
             * reaches 0, the `self` is freed.
             */
            unref(): void;
        }

        type GDataSessionClass = typeof GDataSession;
        abstract class GDataSessionPrivate {
            static $gtype: GObject.GType<GDataSessionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class MemChunk {
            static $gtype: GObject.GType<MemChunk>;

            // Constructors

            _init(...args: any[]): void;
        }

        type ModuleClass = typeof Module;
        abstract class ModulePrivate {
            static $gtype: GObject.GType<ModulePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type MsOapxbcClass = typeof MsOapxbc;
        class NamedParameters {
            static $gtype: GObject.GType<NamedParameters>;

            // Constructors

            constructor(properties?: Partial<{}>);
            _init(...args: any[]): void;

            static ['new'](): NamedParameters;

            static new_string(str: string): NamedParameters;

            static new_strv(strv: string): NamedParameters;

            // Methods

            /**
             * Makes content of the `parameters` the same as `from`.
             * Functions clears content of `parameters` if `from` is %NULL.
             * @param from an #ENamedParameters to get values from, or %NULL
             */
            assign(from?: NamedParameters | null): void;
            /**
             * Removes all stored parameters from `parameters`.
             */
            clear(): void;
            count(): number;
            /**
             * Compares the two parameters objects and returns whether they equal.
             * Note a %NULL and empty parameters are also considered equal.
             * @param parameters2 the second #ENamedParameters
             * @returns whether the two parameters are equal
             */
            equal(parameters2: NamedParameters): boolean;
            exists(name: string): boolean;
            /**
             * Frees an instance of #ENamedParameters, previously allocated
             * with e_named_parameters_new(). Function does nothing, if
             * `parameters` is %NULL.
             */
            free(): void;
            /**
             * Returns current value of a parameter with name `name`. If not such
             * exists, then returns %NULL.
             * @param name name of a parameter to get
             * @returns value of a parameter named @name, or %NULL.
             */
            get(name: string): string | null;
            get_name(index: number): string | null;
            /**
             * Creates a new instance of an #ENamedParameters, with initial content
             * being taken from `parameters`. This should be freed with e_named_parameters_free(),
             * when no longer needed. Names are compared case insensitively.
             *
             * The structure is not thread safe, if the caller requires thread safety,
             * then it should provide it on its own.
             * @returns newly allocated #ENamedParameters
             */
            new_clone(): NamedParameters;
            /**
             * Sets parameter named `name` to value `value`. If `value` is NULL,
             * then the parameter is removed. `value` can be an empty string.
             *
             * Note: There is a restriction on parameter names, it cannot be empty or
             * contain a colon character (':'), otherwise it can be pretty much anything.
             * @param name name of a parameter to set
             * @param value value to set, or %NULL to unset
             */
            set(name: string, value?: string | null): void;
            /**
             * Compares current value of parameter named `name` with given `value`
             * and returns whether they are equal, either case sensitively or
             * insensitively, based on `case_sensitively` argument. Function
             * returns %FALSE, if no such parameter exists.
             * @param name name of a parameter to test
             * @param value value to test
             * @param case_sensitively whether to compare case sensitively
             * @returns Whether parameter of given name has stored value of given value.
             */
            test(name: string, value: string, case_sensitively: boolean): boolean;
            to_string(): string | null;
            to_strv(): string[];
        }

        type NetworkMonitorClass = typeof NetworkMonitor;
        abstract class NetworkMonitorPrivate {
            static $gtype: GObject.GType<NetworkMonitorPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type OAuth2ServiceBaseClass = typeof OAuth2ServiceBase;
        type OAuth2ServiceGoogleClass = typeof OAuth2ServiceGoogle;
        type OAuth2ServiceInterface = typeof OAuth2Service;
        type OAuth2ServiceOutlookClass = typeof OAuth2ServiceOutlook;
        type OAuth2ServiceYahooClass = typeof OAuth2ServiceYahoo;
        type OAuth2ServicesClass = typeof OAuth2Services;
        abstract class OAuth2ServicesPrivate {
            static $gtype: GObject.GType<OAuth2ServicesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * Contains only private data that should be read and manipulated using the
         * functions below.
         */
        abstract class OperationPool {
            static $gtype: GObject.GType<OperationPool>;

            // Constructors

            _init(...args: any[]): void;

            // Methods

            /**
             * Frees previously created `pool`.
             */
            free(): void;
            /**
             * Pushes an operation to be processed.  `opdata` is passed to the function
             * provided in e_operation_pool_new().
             * @param opdata user data for the operation
             */
            push(opdata?: any | null): void;
            /**
             * Releases `opid` previously reserved by e_operation_pool_reserve_opid().
             * @param opid an operation ID
             */
            release_opid(opid: number): void;
            /**
             * Reserves new operation ID, which is returned. This operation ID may
             * be released by e_operation_pool_release_opid() when the operation
             * is finished.
             * @returns a new operation ID
             */
            reserve_opid(): number;
        }

        type SoupAuthBearerClass = typeof SoupAuthBearer;
        abstract class SoupAuthBearerPrivate {
            static $gtype: GObject.GType<SoupAuthBearerPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SoupSessionClass = typeof SoupSession;
        abstract class SoupSessionPrivate {
            static $gtype: GObject.GType<SoupSessionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceAddressBookClass = typeof SourceAddressBook;
        abstract class SourceAddressBookPrivate {
            static $gtype: GObject.GType<SourceAddressBookPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceAlarmsClass = typeof SourceAlarms;
        abstract class SourceAlarmsPrivate {
            static $gtype: GObject.GType<SourceAlarmsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceAuthenticationClass = typeof SourceAuthentication;
        abstract class SourceAuthenticationPrivate {
            static $gtype: GObject.GType<SourceAuthenticationPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceAutocompleteClass = typeof SourceAutocomplete;
        abstract class SourceAutocompletePrivate {
            static $gtype: GObject.GType<SourceAutocompletePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceAutoconfigClass = typeof SourceAutoconfig;
        abstract class SourceAutoconfigPrivate {
            static $gtype: GObject.GType<SourceAutoconfigPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceBackendClass = typeof SourceBackend;
        abstract class SourceBackendPrivate {
            static $gtype: GObject.GType<SourceBackendPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceCalendarClass = typeof SourceCalendar;
        abstract class SourceCalendarPrivate {
            static $gtype: GObject.GType<SourceCalendarPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceCamelClass = typeof SourceCamel;
        abstract class SourceCamelPrivate {
            static $gtype: GObject.GType<SourceCamelPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceClass = typeof Source;
        type SourceCollectionClass = typeof SourceCollection;
        abstract class SourceCollectionPrivate {
            static $gtype: GObject.GType<SourceCollectionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceContactsClass = typeof SourceContacts;
        abstract class SourceContactsPrivate {
            static $gtype: GObject.GType<SourceContactsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceCredentialsProviderClass = typeof SourceCredentialsProvider;
        type SourceCredentialsProviderImplClass = typeof SourceCredentialsProviderImpl;
        type SourceCredentialsProviderImplOAuth2Class = typeof SourceCredentialsProviderImplOAuth2;
        abstract class SourceCredentialsProviderImplOAuth2Private {
            static $gtype: GObject.GType<SourceCredentialsProviderImplOAuth2Private>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceCredentialsProviderImplPasswordClass = typeof SourceCredentialsProviderImplPassword;
        abstract class SourceCredentialsProviderImplPasswordPrivate {
            static $gtype: GObject.GType<SourceCredentialsProviderImplPasswordPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class SourceCredentialsProviderImplPrivate {
            static $gtype: GObject.GType<SourceCredentialsProviderImplPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class SourceCredentialsProviderPrivate {
            static $gtype: GObject.GType<SourceCredentialsProviderPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceExtensionClass = typeof SourceExtension;
        abstract class SourceExtensionPrivate {
            static $gtype: GObject.GType<SourceExtensionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceGoaClass = typeof SourceGoa;
        abstract class SourceGoaPrivate {
            static $gtype: GObject.GType<SourceGoaPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceLDAPClass = typeof SourceLDAP;
        abstract class SourceLDAPPrivate {
            static $gtype: GObject.GType<SourceLDAPPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceLocalClass = typeof SourceLocal;
        abstract class SourceLocalPrivate {
            static $gtype: GObject.GType<SourceLocalPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMDNClass = typeof SourceMDN;
        abstract class SourceMDNPrivate {
            static $gtype: GObject.GType<SourceMDNPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailAccountClass = typeof SourceMailAccount;
        abstract class SourceMailAccountPrivate {
            static $gtype: GObject.GType<SourceMailAccountPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailCompositionClass = typeof SourceMailComposition;
        abstract class SourceMailCompositionPrivate {
            static $gtype: GObject.GType<SourceMailCompositionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailIdentityClass = typeof SourceMailIdentity;
        abstract class SourceMailIdentityPrivate {
            static $gtype: GObject.GType<SourceMailIdentityPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailSignatureClass = typeof SourceMailSignature;
        abstract class SourceMailSignaturePrivate {
            static $gtype: GObject.GType<SourceMailSignaturePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailSubmissionClass = typeof SourceMailSubmission;
        abstract class SourceMailSubmissionPrivate {
            static $gtype: GObject.GType<SourceMailSubmissionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMailTransportClass = typeof SourceMailTransport;
        abstract class SourceMailTransportPrivate {
            static $gtype: GObject.GType<SourceMailTransportPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceMemoListClass = typeof SourceMemoList;
        abstract class SourceMemoListPrivate {
            static $gtype: GObject.GType<SourceMemoListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceOfflineClass = typeof SourceOffline;
        abstract class SourceOfflinePrivate {
            static $gtype: GObject.GType<SourceOfflinePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceOpenPGPClass = typeof SourceOpenPGP;
        abstract class SourceOpenPGPPrivate {
            static $gtype: GObject.GType<SourceOpenPGPPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        abstract class SourcePrivate {
            static $gtype: GObject.GType<SourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceProxyClass = typeof SourceProxy;
        abstract class SourceProxyPrivate {
            static $gtype: GObject.GType<SourceProxyPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceRefreshClass = typeof SourceRefresh;
        abstract class SourceRefreshPrivate {
            static $gtype: GObject.GType<SourceRefreshPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceRegistryClass = typeof SourceRegistry;
        abstract class SourceRegistryPrivate {
            static $gtype: GObject.GType<SourceRegistryPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceRegistryWatcherClass = typeof SourceRegistryWatcher;
        abstract class SourceRegistryWatcherPrivate {
            static $gtype: GObject.GType<SourceRegistryWatcherPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceResourceClass = typeof SourceResource;
        abstract class SourceResourcePrivate {
            static $gtype: GObject.GType<SourceResourcePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceRevisionGuardsClass = typeof SourceRevisionGuards;
        abstract class SourceRevisionGuardsPrivate {
            static $gtype: GObject.GType<SourceRevisionGuardsPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceSMIMEClass = typeof SourceSMIME;
        abstract class SourceSMIMEPrivate {
            static $gtype: GObject.GType<SourceSMIMEPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceSecurityClass = typeof SourceSecurity;
        abstract class SourceSecurityPrivate {
            static $gtype: GObject.GType<SourceSecurityPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceSelectableClass = typeof SourceSelectable;
        abstract class SourceSelectablePrivate {
            static $gtype: GObject.GType<SourceSelectablePrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceTaskListClass = typeof SourceTaskList;
        abstract class SourceTaskListPrivate {
            static $gtype: GObject.GType<SourceTaskListPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceUoaClass = typeof SourceUoa;
        abstract class SourceUoaPrivate {
            static $gtype: GObject.GType<SourceUoaPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceWeatherClass = typeof SourceWeather;
        abstract class SourceWeatherPrivate {
            static $gtype: GObject.GType<SourceWeatherPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceWebDAVNotesClass = typeof SourceWebDAVNotes;
        abstract class SourceWebDAVNotesPrivate {
            static $gtype: GObject.GType<SourceWebDAVNotesPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type SourceWebdavClass = typeof SourceWebdav;
        abstract class SourceWebdavPrivate {
            static $gtype: GObject.GType<SourceWebdavPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        class WebDAVAccessControlEntry {
            static $gtype: GObject.GType<WebDAVAccessControlEntry>;

            // Fields

            principal_kind: WebDAVACEPrincipalKind;
            principal_href: string;
            flags: number;
            inherited_href: string;
            privileges: any[];

            // Constructors

            constructor(
                principal_kind: WebDAVACEPrincipalKind,
                principal_href: string | null,
                flags: number,
                inherited_href?: string | null,
            );
            _init(...args: any[]): void;

            static ['new'](
                principal_kind: WebDAVACEPrincipalKind,
                principal_href: string | null,
                flags: number,
                inherited_href?: string | null,
            ): WebDAVAccessControlEntry;

            // Static methods

            /**
             * Frees an #EWebDAVAccessControlEntry previously created with e_webdav_access_control_entry_new()
             * or e_webdav_access_control_entry_copy(). The function does nothing, if `ptr` is %NULL.
             * @param ptr an #EWebDAVAccessControlEntry
             */
            static free(ptr?: any | null): void;

            // Methods

            /**
             * Appends a new `privilege` to the list of privileges for the `ace`.
             * The function assumes ownership of the `privilege,` which is freed
             * together with the `ace`.
             * @param privilege an #EWebDAVPrivilege
             */
            append_privilege(privilege: WebDAVPrivilege): void;
            copy(): WebDAVAccessControlEntry | null;
            get_privileges(): WebDAVPrivilege[];
        }

        class WebDAVDiscoveredSource {
            static $gtype: GObject.GType<WebDAVDiscoveredSource>;

            // Fields

            href: string;
            supports: number;
            display_name: string;
            description: string;
            color: string;
            order: number;

            // Constructors

            constructor(
                properties?: Partial<{
                    href: string;
                    supports: number;
                    display_name: string;
                    description: string;
                    color: string;
                    order: number;
                }>,
            );
            _init(...args: any[]): void;

            // Methods

            /**
             * Copies the given EWebDAVDiscoveredSource.
             * @returns a copy of @discovered_source
             */
            copy(): WebDAVDiscoveredSource;
            /**
             * Frees the `discovered_source`. Function does nothing, when it's %NULL.
             */
            free(): void;
        }

        class WebDAVPrivilege {
            static $gtype: GObject.GType<WebDAVPrivilege>;

            // Fields

            ns_uri: string;
            name: string;
            description: string;
            kind: WebDAVPrivilegeKind;
            hint: WebDAVPrivilegeHint;

            // Constructors

            constructor(
                ns_uri: string | null,
                name: string | null,
                description: string | null,
                kind: WebDAVPrivilegeKind,
                hint: WebDAVPrivilegeHint,
            );
            _init(...args: any[]): void;

            static ['new'](
                ns_uri: string | null,
                name: string | null,
                description: string | null,
                kind: WebDAVPrivilegeKind,
                hint: WebDAVPrivilegeHint,
            ): WebDAVPrivilege;

            // Static methods

            /**
             * Frees an #EWebDAVPrivilege previously created with e_webdav_privilege_new()
             * or e_webdav_privilege_copy(). The function does nothing, if `ptr` is %NULL.
             * @param ptr an #EWebDAVPrivilege
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): WebDAVPrivilege | null;
        }

        class WebDAVPropertyChange {
            static $gtype: GObject.GType<WebDAVPropertyChange>;

            // Fields

            kind: WebDAVPropertyChangeKind;
            ns_uri: string;
            name: string;
            value: string;

            // Constructors

            constructor(ns_uri: string, name: string);
            _init(...args: any[]): void;

            static new_remove(ns_uri: string, name: string): WebDAVPropertyChange;

            static new_set(ns_uri: string, name: string, value?: string | null): WebDAVPropertyChange;

            // Static methods

            /**
             * Frees an #EWebDAVPropertyChange previously created with e_webdav_property_change_new_set(),
             * e_webdav_property_change_new_remove() or or e_webdav_property_change_copy().
             * The function does nothing, if `ptr` is %NULL.
             * @param ptr an #EWebDAVPropertyChange
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): WebDAVPropertyChange | null;
        }

        class WebDAVResource {
            static $gtype: GObject.GType<WebDAVResource>;

            // Fields

            kind: WebDAVResourceKind;
            supports: number;
            href: string;
            etag: string;
            display_name: string;
            content_type: string;
            content_length: number;
            creation_date: number;
            last_modified: number;
            description: string;
            color: string;
            order: number;

            // Constructors

            constructor(
                kind: WebDAVResourceKind,
                supports: number,
                href: string,
                etag: string | null,
                display_name: string | null,
                content_type: string | null,
                content_length: number,
                creation_date: number,
                last_modified: number,
                description: string | null,
                color: string | null,
                order: number,
            );
            _init(...args: any[]): void;

            static ['new'](
                kind: WebDAVResourceKind,
                supports: number,
                href: string,
                etag: string | null,
                display_name: string | null,
                content_type: string | null,
                content_length: number,
                creation_date: number,
                last_modified: number,
                description: string | null,
                color: string | null,
                order: number,
            ): WebDAVResource;

            // Static methods

            /**
             * Frees an #EWebDAVResource previously created with e_webdav_resource_new()
             * or e_webdav_resource_copy(). The function does nothing, if `ptr` is %NULL.
             * @param ptr an #EWebDAVResource
             */
            static free(ptr?: any | null): void;

            // Methods

            copy(): WebDAVResource | null;
        }

        type WebDAVSessionClass = typeof WebDAVSession;
        abstract class WebDAVSessionPrivate {
            static $gtype: GObject.GType<WebDAVSessionPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        type XmlDocumentClass = typeof XmlDocument;
        abstract class XmlDocumentPrivate {
            static $gtype: GObject.GType<XmlDocumentPrivate>;

            // Constructors

            _init(...args: any[]): void;
        }

        /**
         * A hash table representation of an XML file.
         */
        abstract class XmlHash {
            static $gtype: GObject.GType<XmlHash>;

            // Constructors

            _init(...args: any[]): void;
        }

        module Extensible {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface ExtensibleNamespace {
            $gtype: GObject.GType<Extensible>;
            prototype: Extensible;
        }
        interface Extensible extends GObject.Object {
            // Methods

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
            list_extensions(extension_type: GObject.GType): Extension[];
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
        }

        export const Extensible: ExtensibleNamespace & {
            new (): Extensible; // This allows `obj instanceof Extensible`
        };

        module OAuth2Service {
            // Constructor properties interface

            interface ConstructorProps extends GObject.Object.ConstructorProps {}
        }

        export interface OAuth2ServiceNamespace {
            $gtype: GObject.GType<OAuth2Service>;
            prototype: OAuth2Service;

            /**
             * Processes the `compile_value` and returns the result, which is stored
             * into the `out_glob_buff`. The `out_glob_buff` should be large enough to hold
             * the processed value and it should be a global memory buffer (usually
             * statically allocated) initialized to 0, which is used to short-circuit
             * the call, because the processing is done only if the first element
             * of the `out_glob_buff` is 0, in all other cases the function
             * immediately returns the `out_glob_buff`.
             * @param compile_value a value provided in the compile time
             * @param out_glob_buff_size size of the @out_glob_buff
             */
            util_compile_value(compile_value: string, out_glob_buff_size: number): [string, string];
            /**
             * Extracts either an authorization code from a 'code' argument of the `in_uri,`
             * or an error code from an 'error' argument of the `in_uri` and an error description
             * from the 'error_description' argument of the `in_uri`.
             * @param in_uri a URI returned from the server
             */
            util_extract_from_uri(in_uri: string): [boolean, string, string, string];
            /**
             * Sets `value` for `name` to `form`. The `form` should be
             * the one used in e_oauth2_service_prepare_authentication_uri_query(),
             * e_oauth2_service_prepare_get_token_form() or
             * e_oauth2_service_prepare_refresh_token_form().
             *
             * If the `value` is %NULL, then the property named `name` is removed
             * from the `form` instead.
             * @param form a #GHashTable
             * @param name a property name
             * @param value a property value
             */
            util_set_to_form(
                form: { [key: string]: any } | GLib.HashTable<string, string>,
                name: string,
                value?: string | null,
            ): void;
            /**
             * Takes ownership of `value` and sets it for `name` to `form`. The `value`
             * will be freed with g_free(), when no longer needed. The `form` should be
             * the one used in e_oauth2_service_prepare_authentication_uri_query(),
             * e_oauth2_service_prepare_get_token_form() or
             * e_oauth2_service_prepare_refresh_token_form().
             *
             * If the `value` is %NULL, then the property named `name` is removed
             * from the `form` instead.
             * @param form a #GHashTable
             * @param name a property name
             * @param value a property value
             */
            util_take_to_form(
                form: { [key: string]: any } | GLib.HashTable<string, string>,
                name: string,
                value?: string | null,
            ): void;
        }
        interface OAuth2Service extends GObject.Object {
            // Methods

            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             * @returns Whether the @service can be used for the given @source
             */
            can_process(source: Source): boolean;
            /**
             * Deletes token information for the `service` and `source` from the secret store.
             * @param source an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             * @returns a #GSList of #SoupCookie-s to use, or %NULL
             */
            dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized successful or failed server response.    The @out_authorization_code is populated on success too.
             */
            extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             * @returns whether could recognized failed server response.    The @out_error_message is populated on success.
             */
            extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Reads access token information from the secret store for the `source` and
             * in case it's expired it refreshes the token, if possible.
             *
             * Free the returned `out_access_token` with g_free(), when no longer needed.
             * @param source an #ESource
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns %TRUE, when the returned access token has been set and it's not expired,    %FALSE otherwise.
             */
            get_access_token_sync(
                source: Source,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): [boolean, string, number];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             * @returns one of #EOAuth2ServiceNavigationPolicy
             */
            get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            get_authentication_uri(source: Source): string;
            get_client_id(source: Source): string;
            get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             * @returns the display name of the @service
             */
            get_display_name(): string;
            get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             * @returns the name of the @service
             */
            get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             * @returns The redirect_uri to use, or %NULL for none
             */
            get_redirect_uri(source: Source): string | null;
            get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             * @returns Whether the @service can be used for the given arguments
             */
            guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            prepare_refresh_token_message(source: Source, message: Soup.Message): void;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to obtain
             * a new access token, associated with the given `authorization_code` and stores
             * it into the secret store on success.
             * @param source an #ESource
             * @param authorization_code authorization code provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            receive_and_store_token_sync(
                source: Source,
                authorization_code: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;
            /**
             * Queries `service` at e_oauth2_service_get_refresh_uri() with a request to refresh
             * existing access token with provided `refresh_token` and stores it into the secret
             * store on success.
             * @param source an #ESource
             * @param refresh_token refresh token as provided by the server
             * @param ref_source an #EOAuth2ServiceRefSourceFunc function to obtain an #ESource
             * @param cancellable optional #GCancellable object, or %NULL
             * @returns whether succeeded
             */
            refresh_and_store_token_sync(
                source: Source,
                refresh_token: string,
                ref_source: OAuth2ServiceRefSourceFunc,
                cancellable?: Gio.Cancellable | null,
            ): boolean;

            // Virtual methods

            /**
             * Checks whether the `service` can be used with the given `source`.
             *
             * The default implementation checks whether the `source` has an #ESourceAuthentication
             * extension and when its method matches e_oauth2_service_get_name(), then it automatically
             * returns %TRUE. Contrary, when the `source` contains GNOME Online Accounts or Ubuntu
             * Online Accounts extension, then it returns %FALSE.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param source an #ESource
             */
            vfunc_can_process(source: Source): boolean;
            /**
             * Additional cookies to be used in the prompt dialog when asking for the user
             * credentials. The default implementation does not provide any cookies.
             * @param source an associated #ESource
             * @param cancellable a #GCancellable
             */
            vfunc_dup_credentials_prompter_cookies_sync(
                source: Source,
                cancellable?: Gio.Cancellable | null,
            ): Soup.Cookie[] | null;
            /**
             * Tries to extract an authorization code from a web page provided by the server.
             * The function can be called multiple times, whenever the page load is finished.
             * The default implementation uses e_oauth2_service_util_extract_from_uri() to get
             * the code from the given `page_uri`.
             *
             * There can happen three states: 1) either the `service` cannot determine
             * the authentication code from the page information, then the %FALSE is
             * returned and the `out_authorization_code` is left untouched; or 2) the server
             * reported a failure, in which case the function returns %TRUE and lefts
             * the `out_authorization_code` untouched; or 3) the `service` could extract
             * the authentication code from the given arguments, then the function
             * returns %TRUE and sets the received authorization code to `out_authorization_code`.
             *
             * The `page_content` is %NULL, unless flags returned by e_oauth2_service_get_flags()
             * contain also %E_OAUTH2_SERVICE_FLAG_EXTRACT_REQUIRES_PAGE_CONTENT.
             *
             * This method is always called after e_oauth2_service_get_authentication_policy().
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_authorization_code(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Tries to extract error message from the server response, return %TRUE,
             * when an error message could be found, in which case also sets
             * the `out_error_message` with it. The default implementation uses
             * e_oauth2_service_util_extract_from_uri(), returning either the error
             * description or the error code, when the description is not found.
             *
             * The `out_error_message` is expected to be plain text.
             * @param source an associated #ESource
             * @param page_title a web page title
             * @param page_uri a web page URI
             * @param page_content a web page content
             */
            vfunc_extract_error_message(
                source: Source,
                page_title: string,
                page_uri: string,
                page_content: string | null,
            ): [boolean, string];
            /**
             * Used to decide what to do when the server redirects to the next page.
             * The default implementation always returns %E_OAUTH2_SERVICE_NAVIGATION_POLICY_ALLOW.
             *
             * This method is called before e_oauth2_service_extract_authorization_code() and
             * can be used to block certain resources or to abort the authentication when
             * the server redirects to an unexpected page (like when user denies authorization
             * in the page).
             * @param source an associated #ESource
             * @param uri a URI of the navigation resource
             */
            vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy;
            vfunc_get_authentication_uri(source: Source): string;
            vfunc_get_client_id(source: Source): string;
            vfunc_get_client_secret(source: Source): string | null;
            /**
             * Returns a human readable name of the service. This is similar to
             * e_oauth2_service_get_name(), except this string should be localized,
             * because it will be used in user-visible strings.
             */
            vfunc_get_display_name(): string;
            vfunc_get_flags(): number;
            /**
             * Returns a unique name of the service. It can be named for example
             * by the server or the company from which it receives the OAuth2
             * token and where it refreshes it, like "Company" for login.company.com.
             */
            vfunc_get_name(): string;
            /**
             * Returns a value for the "redirect_uri" keys in the authenticate and get_token
             * operations. The default implementation returns "urn:ietf:wg:oauth:2.0:oob".
             * @param source an associated #ESource
             */
            vfunc_get_redirect_uri(source: Source): string | null;
            vfunc_get_refresh_uri(source: Source): string;
            /**
             * Checks whether the `service` can be used with the given `protocol` and/or `hostname`.
             * Any of `protocol` and `hostname` can be %NULL, but not both. It's up to each implementer
             * to decide, which of the arguments are important and whether all or only any of them
             * can be required.
             *
             * The function is meant to check whether the `service` can be offered
             * for example when configuring a new account. The real usage is
             * determined by e_oauth2_service_can_process().
             *
             * The default implementation consults org.gnome.evolution-data-server.oauth2-services-hint
             * GSettings key against given hostname. See its description for more information.
             *
             * The default implementation is tried always as the first and when it fails, then
             * the descendant's implementation is called.
             * @param protocol a protocol to search the service for, like "imap", or %NULL
             * @param hostname a host name to search the service for, like "server.example.com", or %NULL
             */
            vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean;
            /**
             * The `service` can change what arguments are passed in the authentication URI
             * in this method. The default implementation sets some values too, namely
             * "response_type", "client_id", "redirect_uri" and "login_hint", if available
             * in the `source`. These parameters are always provided, even when the interface
             * implementer overrides this method.
             *
             * The `uri_query` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param uri_query query for the URI to use
             */
            vfunc_prepare_authentication_uri_query(
                source: Source,
                uri_query: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * access token after successfully obtained authorization code.
             * The default implementation sets some values too, namely
             * "code", "client_id", "client_secret", "redirect_uri" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param authorization_code authorization code, as returned from e_oauth2_service_extract_authorization_code()
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_get_token_form(
                source: Source,
                authorization_code: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_authentication_uri(), with POST data
             * being provided by e_oauth2_service_prepare_get_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void;
            /**
             * Sets additional form parameters to be used in the POST request when requesting
             * to refresh an access token.
             * The default implementation sets some values too, namely
             * "refresh_token", "client_id", "client_secret" and "grant_type".
             * These parameters are always provided, even when the interface implementer overrides this method.
             *
             * The `form` hash table expects both key and value to be newly allocated
             * strings, which will be freed together with the hash table or when the key
             * is replaced.
             * @param source an associated #ESource
             * @param refresh_token a refresh token to be used
             * @param form form parameters to be used in the POST request
             */
            vfunc_prepare_refresh_token_form(
                source: Source,
                refresh_token: string,
                form: { [key: string]: any } | GLib.HashTable<string, string>,
            ): void;
            /**
             * The `service` can change the `message` before it's sent to
             * the e_oauth2_service_get_refresh_uri(), with POST data
             * being provided by e_oauth2_service_prepare_refresh_token_form().
             * The default implementation does nothing with the `message`.
             * @param source an associated #ESource
             * @param message a #SoupMessage
             */
            vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void;
        }

        export const OAuth2Service: OAuth2ServiceNamespace & {
            new (): OAuth2Service; // This allows `obj instanceof OAuth2Service`
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

    export default EDataServer;
}

declare module 'gi://EDataServer' {
    import EDataServer12 from 'gi://EDataServer?version=1.2';
    export default EDataServer12;
}
// END
